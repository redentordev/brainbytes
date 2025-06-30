globalThis.disableIncrementalCache = false;
globalThis.disableDynamoDBCache = false;
globalThis.isNextAfter15 = true;
globalThis.openNextDebug = false;
globalThis.openNextVersion = "3.6.5";
var i = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var p = Object.prototype.hasOwnProperty;
var b = (t, e) => {
    for (var a in e) i(t, a, { get: e[a], enumerable: !0 });
  },
  T = (t, e, a, o) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let r of h(e))
        !p.call(t, r) &&
          r !== a &&
          i(t, r, {
            get: () => e[r],
            enumerable: !(o = g(e, r)) || o.enumerable,
          });
    return t;
  };
var v = (t) => T(i({}, "__esModule", { value: !0 }), t);
var N = {};
b(N, { default: () => x });
module.exports = v(N);
var c = require("node:stream");
function m(t, e) {
  let a = t.getReader(),
    o = [];
  return new Promise((r, n) => {
    function s() {
      a.read()
        .then(({ done: l, value: f }) => {
          if (l) {
            r(Buffer.concat(o).toString(e ? "base64" : "utf8"));
            return;
          }
          o.push(f), s();
        })
        .catch(n);
    }
    s();
  });
}
function d(t, e) {
  return c.Readable.toWeb(
    c.Readable.from(Buffer.from(t, e ? "base64" : "utf8"))
  );
}
function u(...t) {
  globalThis.openNextDebug && console.log(...t);
}
var x = {
  async get(t) {
    try {
      let e = await globalThis.incrementalCache.get(t, "composable");
      if (!e?.value?.value) return;
      if (
        (u("composable cache result", e),
        globalThis.tagCache.mode === "nextMode" && e.value.tags.length > 0)
      ) {
        if (
          await globalThis.tagCache.hasBeenRevalidated(
            e.value.tags,
            e.lastModified
          )
        )
          return;
      } else if (
        (globalThis.tagCache.mode === "original" ||
          globalThis.tagCache.mode === void 0) &&
        (await globalThis.tagCache.getLastModified(t, e.lastModified)) === -1
      )
        return;
      return { ...e.value, value: d(e.value.value) };
    } catch {
      u("Cannot read composable cache entry");
      return;
    }
  },
  async set(t, e) {
    let a = await e,
      o = await m(a.value);
    if (
      (await globalThis.incrementalCache.set(
        t,
        { ...a, value: o },
        "composable"
      ),
      globalThis.tagCache.mode === "original")
    ) {
      let r = await globalThis.tagCache.getByPath(t),
        n = a.tags.filter((s) => !r.includes(s));
      n.length > 0 &&
        (await globalThis.tagCache.writeTags(
          n.map((s) => ({ tag: s, path: t }))
        ));
    }
  },
  async refreshTags() {},
  async getExpiration(...t) {
    return globalThis.tagCache.mode === "nextMode"
      ? globalThis.tagCache.getLastRevalidated(t)
      : 0;
  },
  async expireTags(...t) {
    if (globalThis.tagCache.mode === "nextMode")
      return globalThis.tagCache.writeTags(t);
    let e = globalThis.tagCache,
      a = Date.now(),
      o = await Promise.all(
        t.map(async (n) =>
          (await e.getByTag(n)).map((l) => ({
            path: l,
            tag: n,
            revalidatedAt: a,
          }))
        )
      ),
      r = new Set();
    for (let n of o.flat()) r.add(n);
    await globalThis.tagCache.writeTags(Array.from(r));
  },
  async receiveExpiredTags(...t) {},
};
