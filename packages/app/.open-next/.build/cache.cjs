globalThis.disableIncrementalCache = false;
globalThis.disableDynamoDBCache = false;
globalThis.isNextAfter15 = true;
globalThis.openNextDebug = false;
globalThis.openNextVersion = "3.6.5";
var u = Object.defineProperty;
var _ = Object.getOwnPropertyDescriptor;
var y = Object.getOwnPropertyNames;
var N = Object.prototype.hasOwnProperty;
var P = (t, e) => {
    for (var a in e) u(t, a, { get: e[a], enumerable: !0 });
  },
  E = (t, e, a, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let i of y(e))
        !N.call(t, i) &&
          i !== a &&
          u(t, i, {
            get: () => e[i],
            enumerable: !(n = _(e, i)) || n.enumerable,
          });
    return t;
  };
var R = (t) => E(u({}, "__esModule", { value: !0 }), t);
var L = {};
P(L, { default: () => g });
module.exports = R(L);
async function f(t, e, a) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) return !1;
  if (!a.value) return !0;
  if ("type" in a && a.type === "page") return !1;
  let i = a.lastModified ?? Date.now();
  return globalThis.tagCache.mode === "nextMode"
    ? await globalThis.tagCache.hasBeenRevalidated(e, i)
    : (await globalThis.tagCache.getLastModified(t, i)) === -1;
}
function w(t) {
  if (!t) return [];
  try {
    return t.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
  } catch {
    return [];
  }
}
var A = new Set([
  "application/octet-stream",
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "font/otf",
  "font/woff",
  "font/woff2",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  "application/x-protobuf",
]);
function m(t) {
  if (!t) return !1;
  let e = t?.split(";")[0] ?? "";
  return A.has(e);
}
function h(t) {
  try {
    return "__openNextInternal" in t;
  } catch {
    return !1;
  }
}
function c(...t) {
  globalThis.openNextDebug && console.log(...t);
}
function b(...t) {
  console.warn(...t);
}
var B = [
    {
      clientName: "S3Client",
      commandName: "GetObjectCommand",
      errorName: "NoSuchKey",
    },
  ],
  M = (t) =>
    B.some(
      (e) =>
        e.clientName === t?.clientName &&
        e.commandName === t?.commandName &&
        (e.errorName === t?.error?.name || e.errorName === t?.error?.Code)
    );
function T(...t) {
  if (t.some((e) => M(e))) return c(...t);
  if (t.some((e) => h(e))) {
    let e = t.find((a) => h(a));
    return e.logLevel < S()
      ? void 0
      : e.logLevel === 0
        ? console.log(...t.map((a) => (h(a) ? `${a.name}: ${a.message}` : a)))
        : e.logLevel === 1
          ? b(...t.map((a) => (h(a) ? `${a.name}: ${a.message}` : a)))
          : console.error(...t);
  }
  console.error(...t);
}
function S() {
  switch ((process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1").toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
function I(t) {
  return typeof t == "boolean"
    ? t
    : typeof t == "object"
      ? t.kindHint === "fetch" || t.fetchCache || t.kind === "FETCH"
      : !1;
}
var g = class {
  async get(e, a) {
    if (globalThis.openNextConfig.dangerous?.disableIncrementalCache)
      return null;
    let n = typeof a == "object" ? a.softTags : [],
      i = typeof a == "object" ? a.tags : [];
    return I(a) ? this.getFetchCache(e, n, i) : this.getIncrementalCache(e);
  }
  async getFetchCache(e, a, n) {
    c("get fetch cache", { key: e, softTags: a, tags: n });
    try {
      let i = await globalThis.incrementalCache.get(e, "fetch");
      if (i?.value === void 0) return null;
      let r = [...(n ?? []), ...(a ?? [])],
        s = i.lastModified ?? Date.now();
      if (await f(e, r, i)) return null;
      if ((n ?? []).length === 0) {
        let o = a?.find(
          (d) =>
            d.startsWith("_N_T_/") &&
            !d.endsWith("layout") &&
            !d.endsWith("page")
        );
        if (o && (await f(o.replace("_N_T_/", ""), [], i))) return null;
      }
      return { lastModified: s, value: i.value };
    } catch (i) {
      return c("Failed to get fetch cache", i), null;
    }
  }
  async getIncrementalCache(e) {
    try {
      let a = await globalThis.incrementalCache.get(e, "cache");
      if (!a?.value) return null;
      let n = a.value,
        i = n.meta,
        r = w(n),
        s = a.lastModified ?? Date.now();
      if (await f(e, r, a)) return null;
      let o = globalThis.__openNextAls.getStore();
      return (
        o && (o.lastModified = s),
        n?.type === "route"
          ? {
              lastModified: s,
              value: {
                kind: globalThis.isNextAfter15 ? "APP_ROUTE" : "ROUTE",
                body: Buffer.from(
                  n.body ?? Buffer.alloc(0),
                  m(String(i?.headers?.["content-type"])) ? "base64" : "utf8"
                ),
                status: i?.status,
                headers: i?.headers,
              },
            }
          : n?.type === "page" || n?.type === "app"
            ? globalThis.isNextAfter15 && n?.type === "app"
              ? {
                  lastModified: s,
                  value: {
                    kind: "APP_PAGE",
                    html: n.html,
                    rscData: Buffer.from(n.rsc),
                    status: i?.status,
                    headers: i?.headers,
                    postponed: i?.postponed,
                  },
                }
              : {
                  lastModified: s,
                  value: {
                    kind: globalThis.isNextAfter15 ? "PAGES" : "PAGE",
                    html: n.html,
                    pageData: n.type === "page" ? n.json : n.rsc,
                    status: i?.status,
                    headers: i?.headers,
                  },
                }
            : n?.type === "redirect"
              ? { lastModified: s, value: { kind: "REDIRECT", props: n.props } }
              : (b("Unknown cache type", n), null)
      );
    } catch (a) {
      return c("Failed to get body cache", a), null;
    }
  }
  async set(e, a, n) {
    if (globalThis.openNextConfig.dangerous?.disableIncrementalCache) return;
    let i = globalThis.__openNextAls
      .getStore()
      ?.pendingPromiseRunner.withResolvers();
    try {
      if (a == null) await globalThis.incrementalCache.delete(e);
      else {
        let r = this.extractRevalidateForSet(n);
        switch (a.kind) {
          case "ROUTE":
          case "APP_ROUTE": {
            let { body: s, status: l, headers: o } = a;
            await globalThis.incrementalCache.set(
              e,
              {
                type: "route",
                body: s.toString(
                  m(String(o["content-type"])) ? "base64" : "utf8"
                ),
                meta: { status: l, headers: o },
                revalidate: r,
              },
              "cache"
            );
            break;
          }
          case "PAGE":
          case "PAGES": {
            let { html: s, pageData: l, status: o, headers: d } = a;
            typeof l == "string"
              ? await globalThis.incrementalCache.set(
                  e,
                  {
                    type: "app",
                    html: s,
                    rsc: l,
                    meta: { status: o, headers: d },
                    revalidate: r,
                  },
                  "cache"
                )
              : await globalThis.incrementalCache.set(
                  e,
                  { type: "page", html: s, json: l, revalidate: r },
                  "cache"
                );
            break;
          }
          case "APP_PAGE": {
            let { html: s, rscData: l, headers: o, status: d } = a;
            await globalThis.incrementalCache.set(
              e,
              {
                type: "app",
                html: s,
                rsc: l.toString("utf8"),
                meta: { status: d, headers: o },
                revalidate: r,
              },
              "cache"
            );
            break;
          }
          case "FETCH":
            await globalThis.incrementalCache.set(e, a, "fetch");
            break;
          case "REDIRECT":
            await globalThis.incrementalCache.set(
              e,
              { type: "redirect", props: a.props, revalidate: r },
              "cache"
            );
            break;
          case "IMAGE":
            break;
        }
      }
      await this.updateTagsOnSet(e, a, n), c("Finished setting cache");
    } catch (r) {
      T("Failed to set cache", r);
    } finally {
      i?.resolve();
    }
  }
  async revalidateTag(e) {
    let a = globalThis.openNextConfig.dangerous;
    if (a?.disableTagCache || a?.disableIncrementalCache) return;
    let n = Array.isArray(e) ? e : [e];
    if (n.length !== 0)
      try {
        if (globalThis.tagCache.mode === "nextMode") {
          let i = (await globalThis.tagCache.getPathsByTags?.(n)) ?? [];
          await globalThis.tagCache.writeTags(n),
            i.length > 0 &&
              (await globalThis.cdnInvalidationHandler.invalidatePaths(
                i.map((r) => ({
                  initialPath: r,
                  rawPath: r,
                  resolvedRoutes: [{ route: r, type: "app" }],
                }))
              ));
          return;
        }
        for (let i of n) {
          c("revalidateTag", i);
          let r = await globalThis.tagCache.getByTag(i);
          c("Items", r);
          let s = r.map((o) => ({ path: o, tag: i }));
          if (i.startsWith("_N_T_/"))
            for (let o of r) {
              let v = (await globalThis.tagCache.getByPath(o)).filter(
                (p) => !p.startsWith("_N_T_/")
              );
              for (let p of v) {
                let x = await globalThis.tagCache.getByTag(p);
                c({ hardTag: p, _paths: x }),
                  s.push(...x.map((C) => ({ path: C, tag: p })));
              }
            }
          await globalThis.tagCache.writeTags(s);
          let l = Array.from(
            new Set(
              s
                .filter((o) => o.tag.startsWith("_N_T_/"))
                .map((o) => `/${o.path}`)
            )
          );
          l.length > 0 &&
            (await globalThis.cdnInvalidationHandler.invalidatePaths(
              l.map((o) => ({
                initialPath: o,
                rawPath: o,
                resolvedRoutes: [{ route: o, type: "app" }],
              }))
            ));
        }
      } catch (i) {
        T("Failed to revalidate tag", i);
      }
  }
  async updateTagsOnSet(e, a, n) {
    if (
      globalThis.openNextConfig.dangerous?.disableTagCache ||
      globalThis.tagCache.mode === "nextMode" ||
      !a
    )
      return;
    let i =
      a?.kind === "FETCH"
        ? (n?.tags ?? a?.data?.tags ?? [])
        : a?.kind === "PAGE"
          ? (a.headers?.["x-next-cache-tags"]?.split(",") ?? [])
          : [];
    c("derivedTags", i);
    let r = await globalThis.tagCache.getByPath(e),
      s = i.filter((l) => !r.includes(l));
    s.length > 0 &&
      (await globalThis.tagCache.writeTags(
        s.map((l) => ({ path: e, tag: l, revalidatedAt: 1 }))
      ));
  }
  extractRevalidateForSet(e) {
    if (e !== void 0) {
      if (typeof e == "number" || e === !1) return e;
      if ("revalidate" in e) return e.revalidate;
      if ("cacheControl" in e) return e.cacheControl?.revalidate;
    }
  }
};
