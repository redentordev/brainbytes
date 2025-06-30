"use strict";
(() => {
  var e = {};
  (e.id = 974),
    (e.ids = [974]),
    (e.modules = {
      3295: (e) => {
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      10097: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "unstable_rethrow", {
            enumerable: !0,
            get: function () {
              return function e(t) {
                if (
                  (0, i.isNextRouterError)(t) ||
                  (0, a.isBailoutToCSRError)(t) ||
                  (0, d.isDynamicServerError)(t) ||
                  (0, u.isDynamicPostpone)(t) ||
                  (0, o.isPostpone)(t) ||
                  (0, n.isHangingPromiseRejectionError)(t)
                )
                  throw t;
                t instanceof Error && "cause" in t && e(t.cause);
              };
            },
          });
        let n = r(46049),
          o = r(72610),
          a = r(90507),
          i = r(5631),
          u = r(94924),
          d = r(8194);
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      10846: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      29294: (e) => {
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      29699: (e, t, r) => {
        function n() {
          throw Object.defineProperty(
            Error(
              "`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E488", enumerable: !1, configurable: !0 }
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "forbidden", {
            enumerable: !0,
            get: function () {
              return n;
            },
          }),
          r(22859).HTTP_ERROR_FALLBACK_ERROR_CODE,
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      33873: (e) => {
        e.exports = require("path");
      },
      38050: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "notFound", {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let n = "" + r(22859).HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
        function o() {
          let e = Object.defineProperty(Error(n), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0,
          });
          throw ((e.digest = n), e);
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      42543: (e, t, r) => {
        var n = r(68855);
        r.o(n, "redirect") &&
          r.d(t, {
            redirect: function () {
              return n.redirect;
            },
          });
      },
      44989: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(
            t,
            "createDedupedByCallsiteServerErrorLoggerDev",
            {
              enumerable: !0,
              get: function () {
                return d;
              },
            }
          );
        let n = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = o(t);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(n, i, u)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        })(r(61365));
        function o(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (o = function (e) {
            return e ? r : t;
          })(e);
        }
        let a = { current: null },
          i = "function" == typeof n.cache ? n.cache : (e) => e,
          u = console.warn;
        function d(e) {
          return function (...t) {
            u(e(...t));
          };
        }
        i((e) => {
          try {
            u(a.current);
          } finally {
            a.current = null;
          }
        });
      },
      49600: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            getRedirectError: function () {
              return i;
            },
            getRedirectStatusCodeFromError: function () {
              return s;
            },
            getRedirectTypeFromError: function () {
              return c;
            },
            getURLFromRedirectError: function () {
              return l;
            },
            permanentRedirect: function () {
              return d;
            },
            redirect: function () {
              return u;
            },
          });
        let n = r(49005),
          o = r(31903),
          a = r(19121).actionAsyncStorage;
        function i(e, t, r) {
          void 0 === r && (r = n.RedirectStatusCode.TemporaryRedirect);
          let a = Object.defineProperty(
            Error(o.REDIRECT_ERROR_CODE),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
          return (
            (a.digest =
              o.REDIRECT_ERROR_CODE + ";" + t + ";" + e + ";" + r + ";"),
            a
          );
        }
        function u(e, t) {
          var r;
          throw (
            (null != t ||
              (t = (
                null == a || null == (r = a.getStore()) ? void 0 : r.isAction
              )
                ? o.RedirectType.push
                : o.RedirectType.replace),
            i(e, t, n.RedirectStatusCode.TemporaryRedirect))
          );
        }
        function d(e, t) {
          throw (
            (void 0 === t && (t = o.RedirectType.replace),
            i(e, t, n.RedirectStatusCode.PermanentRedirect))
          );
        }
        function l(e) {
          return (0, o.isRedirectError)(e)
            ? e.digest.split(";").slice(2, -2).join(";")
            : null;
        }
        function c(e) {
          if (!(0, o.isRedirectError)(e))
            throw Object.defineProperty(
              Error("Not a redirect error"),
              "__NEXT_ERROR_CODE",
              { value: "E260", enumerable: !1, configurable: !0 }
            );
          return e.digest.split(";", 2)[1];
        }
        function s(e) {
          if (!(0, o.isRedirectError)(e))
            throw Object.defineProperty(
              Error("Not a redirect error"),
              "__NEXT_ERROR_CODE",
              { value: "E260", enumerable: !1, configurable: !0 }
            );
          return Number(e.digest.split(";").at(-2));
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      63033: (e) => {
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      67858: (e, t, r) => {
        r.r(t), r.d(t, { default: () => o });
        var n = r(42543);
        function o() {
          (0, n.redirect)("/login");
        }
      },
      68855: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            ReadonlyURLSearchParams: function () {
              return c;
            },
            RedirectType: function () {
              return o.RedirectType;
            },
            forbidden: function () {
              return i.forbidden;
            },
            notFound: function () {
              return a.notFound;
            },
            permanentRedirect: function () {
              return n.permanentRedirect;
            },
            redirect: function () {
              return n.redirect;
            },
            unauthorized: function () {
              return u.unauthorized;
            },
            unstable_rethrow: function () {
              return d.unstable_rethrow;
            },
          });
        let n = r(49600),
          o = r(31903),
          a = r(38050),
          i = r(29699),
          u = r(77670),
          d = r(69938);
        class l extends Error {
          constructor() {
            super(
              "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
            );
          }
        }
        class c extends URLSearchParams {
          append() {
            throw new l();
          }
          delete() {
            throw new l();
          }
          set() {
            throw new l();
          }
          sort() {
            throw new l();
          }
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      69938: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "unstable_rethrow", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = r(10097).unstable_rethrow;
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      77670: (e, t, r) => {
        function n() {
          throw Object.defineProperty(
            Error(
              "`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E411", enumerable: !1, configurable: !0 }
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "unauthorized", {
            enumerable: !0,
            get: function () {
              return n;
            },
          }),
          r(22859).HTTP_ERROR_FALLBACK_ERROR_CODE,
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      79214: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReflectAdapter", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        class r {
          static get(e, t, r) {
            let n = Reflect.get(e, t, r);
            return "function" == typeof n ? n.bind(e) : n;
          }
          static set(e, t, r, n) {
            return Reflect.set(e, t, r, n);
          }
          static has(e, t) {
            return Reflect.has(e, t);
          }
          static deleteProperty(e, t) {
            return Reflect.deleteProperty(e, t);
          }
        }
      },
      79551: (e) => {
        e.exports = require("url");
      },
      83374: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            isRequestAPICallableInsideAfter: function () {
              return d;
            },
            throwForSearchParamsAccessInUseCache: function () {
              return u;
            },
            throwWithStaticGenerationBailoutError: function () {
              return a;
            },
            throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
              return i;
            },
          });
        let n = r(10960),
          o = r(3295);
        function a(e, t) {
          throw Object.defineProperty(
            new n.StaticGenBailoutError(
              `Route ${e} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E576", enumerable: !1, configurable: !0 }
          );
        }
        function i(e, t) {
          throw Object.defineProperty(
            new n.StaticGenBailoutError(
              `Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E543", enumerable: !1, configurable: !0 }
          );
        }
        function u(e) {
          let t = Object.defineProperty(
            Error(
              `Route ${e.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E634", enumerable: !1, configurable: !0 }
          );
          throw ((e.invalidUsageError ??= t), t);
        }
        function d() {
          let e = o.afterTaskAsyncStorage.getStore();
          return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action";
        }
      },
      92084: (e, t, r) => {
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => s,
            pages: () => c,
            routeModule: () => f,
            tree: () => l,
          });
        var n = r(24332),
          o = r(48819),
          a = r(67851),
          i = r.n(a),
          u = r(97540),
          d = {};
        for (let e in u)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => u[e]);
        r.d(t, d);
        let l = {
            children: [
              "",
              {
                children: [
                  "__PAGE__",
                  {},
                  {
                    page: [
                      () => Promise.resolve().then(r.bind(r, 67858)),
                      "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/page.tsx",
                    ],
                    metadata: {
                      icon: [
                        async (e) =>
                          (
                            await Promise.resolve().then(r.bind(r, 9699))
                          ).default(e),
                      ],
                      apple: [],
                      openGraph: [],
                      twitter: [],
                      manifest: void 0,
                    },
                  },
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, 20685)),
                  "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(r.bind(r, 87239)),
                  "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/not-found.tsx",
                ],
                forbidden: [
                  () => Promise.resolve().then(r.t.bind(r, 39956, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(r.t.bind(r, 92341, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
                metadata: {
                  icon: [
                    async (e) =>
                      (await Promise.resolve().then(r.bind(r, 9699))).default(
                        e
                      ),
                  ],
                  apple: [],
                  openGraph: [],
                  twitter: [],
                  manifest: void 0,
                },
              },
            ],
          }.children,
          c = [
            "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/page.tsx",
          ],
          s = { require: r, loadChunk: () => Promise.resolve() },
          f = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [50, 289, 757], () => r(92084));
  module.exports = n;
})();
