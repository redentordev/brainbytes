globalThis.openNextDebug = false;
globalThis.openNextVersion = "3.6.5";
var L = Object.defineProperty;
var m = (e, r) => () => (e && (r = e((e = 0))), r);
var d = (e, r) => {
  for (var t in r) L(e, t, { get: r[t], enumerable: !0 });
};
function c(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return !1;
  }
}
var v = m(() => {});
function i(...e) {
  globalThis.openNextDebug && console.log(...e);
}
function b(...e) {
  console.warn(...e);
}
function p(...e) {
  if (e.some((r) => O(r))) return i(...e);
  if (e.some((r) => c(r))) {
    let r = e.find((t) => c(t));
    return r.logLevel < C()
      ? void 0
      : r.logLevel === 0
        ? console.log(...e.map((t) => (c(t) ? `${t.name}: ${t.message}` : t)))
        : r.logLevel === 1
          ? b(...e.map((t) => (c(t) ? `${t.name}: ${t.message}` : t)))
          : console.error(...e);
  }
  console.error(...e);
}
function C() {
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
var I,
  O,
  l = m(() => {
    v();
    (I = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey",
      },
    ]),
      (O = (e) =>
        I.some(
          (r) =>
            r.clientName === e?.clientName &&
            r.commandName === e?.commandName &&
            (r.errorName === e?.error?.name || r.errorName === e?.error?.Code)
        ));
  });
var x = {};
d(x, { default: () => P });
var R,
  P,
  _ = m(() => {
    (R = {
      convertFrom(e) {
        let r = e.Records.map((t) => {
          let { host: o, url: n } = JSON.parse(t.body);
          return { host: o, url: n, id: t.messageId };
        });
        return Promise.resolve({ type: "revalidate", records: r });
      },
      convertTo(e) {
        return Promise.resolve({
          type: "revalidate",
          batchItemFailures: e.records.map((r) => ({ itemIdentifier: r.id })),
        });
      },
      name: "sqs-revalidate",
    }),
      (P = R);
  });
var h = {};
d(h, { default: () => D, formatWarmerResponse: () => y });
import { Writable as S } from "node:stream";
function y(e) {
  return new Promise((r) => {
    setTimeout(() => {
      r({ serverId, type: "warmer" });
    }, e.delay);
  });
}
var T,
  D,
  w = m(() => {
    (T = async (e, r) => async (t) => {
      if ("type" in t) return y(t);
      let o = await r.convertFrom(t),
        s = await e(o, {
          streamCreator: {
            writeHeaders: () =>
              new S({
                write: (u, f, a) => {
                  a();
                },
              }),
          },
        });
      return r.convertTo(s, t);
    }),
      (D = { wrapper: T, name: "aws-lambda", supportStreaming: !1 });
  });
import $ from "node:fs";
import W from "node:https";
import j from "node:path";
l();
async function g(e) {
  return typeof e == "function"
    ? e()
    : (await Promise.resolve().then(() => (_(), x))).default;
}
async function N(e) {
  return typeof e == "function"
    ? e()
    : (await Promise.resolve().then(() => (w(), h))).default;
}
async function E(e) {
  let r = await import("./open-next.config.mjs").then((u) => u.default);
  globalThis.openNextConfig = r;
  let t = r[e.type]?.override,
    o = await g(t?.converter),
    { name: n, wrapper: s } = await N(t?.wrapper);
  return i("Using wrapper", n), s(e.handler, o);
}
l();
var F = H(),
  G = async (e) => {
    let r = [];
    for (let t of e.records) {
      let { host: o, url: n } = t;
      i("Revalidating stale page", { host: o, url: n });
      try {
        await new Promise((s, u) => {
          let f = W.request(
            `https://${o}${n}`,
            {
              method: "HEAD",
              headers: {
                "x-prerender-revalidate": F.preview.previewModeId,
                "x-isr": "1",
              },
            },
            (a) => {
              i("revalidating", {
                url: n,
                host: o,
                headers: a.headers,
                statusCode: a.statusCode,
              }),
                (a.statusCode !== 200 ||
                  a.headers["x-nextjs-cache"] !== "REVALIDATED") &&
                  r.push(t),
                s(a);
            }
          );
          f.on("error", (a) => {
            p("Error revalidating page", { host: o, url: n }), u(a);
          }),
            f.end();
        });
      } catch {
        r.push(t);
      }
    }
    return (
      r.length > 0 &&
        p(`Failed to revalidate ${r.length} pages`, { failedRecords: r }),
      { type: "revalidate", records: r }
    );
  },
  ee = await E({ handler: G, type: "revalidate" });
function H() {
  let e = j.join("prerender-manifest.json"),
    r = $.readFileSync(e, "utf-8");
  return JSON.parse(r);
}
export { ee as handler };
