(() => {
  var e = {};
  (e.id = 520),
    (e.ids = [520]),
    (e.modules = {
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      7432: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 51155));
      },
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      18980: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        let n = (0, r(33952).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/home/aiz/dev/redentor/brainbytes/packages/app/src/app/login/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/login/page.tsx",
          "default"
        );
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      26518: (e, t, r) => {
        "use strict";
        r.d(t, { cn: () => s, j: () => i });
        var n = r(4627),
          a = r(55855);
        function s(...e) {
          return (0, a.QP)((0, n.$)(e));
        }
        function i(e) {
          return `${e}`;
        }
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      43880: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 18980));
      },
      44989: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(
            t,
            "createDedupedByCallsiteServerErrorLoggerDev",
            {
              enumerable: !0,
              get: function () {
                return c;
              },
            }
          );
        let n = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = a(t);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        })(r(61365));
        function a(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            r = new WeakMap();
          return (a = function (e) {
            return e ? r : t;
          })(e);
        }
        let s = { current: null },
          i = "function" == typeof n.cache ? n.cache : (e) => e,
          o = console.warn;
        function c(e) {
          return function (...t) {
            o(e(...t));
          };
        }
        i((e) => {
          try {
            o(s.current);
          } finally {
            s.current = null;
          }
        });
      },
      51155: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => u });
        var n = r(13486),
          a = r(60159),
          s = r(15577),
          i = r(74941),
          o = r(8981),
          c = r(2984);
        function l() {
          let [e, t] = (0, a.useState)(!1),
            [r, l] = (0, a.useState)(!1),
            { data: d, isPending: u } = (0, o.wV)();
          (0, c.useRouter)();
          let p = (0, c.useSearchParams)();
          if (u)
            return (0, n.jsx)("div", {
              className:
                "flex flex-col items-center justify-center min-h-screen p-4",
              children: (0, n.jsx)("div", {
                className: "w-full max-w-md space-y-6",
                children: (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)(s.A, {
                      className: "mx-auto h-8 w-8 animate-spin",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-muted-foreground mt-2",
                      children: "Checking authentication...",
                    }),
                  ],
                }),
              }),
            });
          let f = async () => {
              t(!0);
              try {
                let e = p.get("callbackUrl") || "/chat";
                await (0, o.Up)(e);
              } catch (e) {
                console.error("GitHub sign-in error:", e);
              } finally {
                t(!1);
              }
            },
            h = async () => {
              l(!0);
              try {
                let e = p.get("callbackUrl") || "/chat";
                await (0, o.G6)(e);
              } catch (e) {
                console.error("Google sign-in error:", e);
              } finally {
                l(!1);
              }
            };
          return (0, n.jsx)("div", {
            className:
              "flex flex-col items-center justify-center min-h-screen p-4",
            children: (0, n.jsxs)("div", {
              className: "w-full max-w-md space-y-6",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("h1", {
                      className: "text-2xl font-bold",
                      children: "Welcome to BrainBytes",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-muted-foreground mt-2",
                      children: "Sign in to continue to your dashboard",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, n.jsxs)(i.$, {
                      className: "w-full",
                      variant: "outline",
                      type: "button",
                      onClick: f,
                      disabled: e || r,
                      children: [
                        e
                          ? (0, n.jsx)(s.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            })
                          : (0, n.jsx)("svg", {
                              className: "mr-2 h-4 w-4",
                              fill: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, n.jsx)("path", {
                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                              }),
                            }),
                        "Sign in with GitHub",
                      ],
                    }),
                    (0, n.jsxs)(i.$, {
                      className: "w-full",
                      variant: "outline",
                      type: "button",
                      onClick: h,
                      disabled: e || r,
                      children: [
                        r
                          ? (0, n.jsx)(s.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            })
                          : (0, n.jsxs)("svg", {
                              className: "mr-2 h-4 w-4",
                              viewBox: "0 0 24 24",
                              children: [
                                (0, n.jsx)("path", {
                                  fill: "currentColor",
                                  d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                }),
                                (0, n.jsx)("path", {
                                  fill: "currentColor",
                                  d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                }),
                                (0, n.jsx)("path", {
                                  fill: "currentColor",
                                  d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                }),
                                (0, n.jsx)("path", {
                                  fill: "currentColor",
                                  d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                }),
                              ],
                            }),
                        "Sign in with Google",
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "text-center text-sm text-muted-foreground",
                  children:
                    "By signing in, you agree to our terms of service and privacy policy.",
                }),
              ],
            }),
          });
        }
        function d() {
          return (0, n.jsx)("div", {
            className:
              "flex flex-col items-center justify-center min-h-screen p-4",
            children: (0, n.jsx)("div", {
              className: "w-full max-w-md space-y-6",
              children: (0, n.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, n.jsx)(s.A, {
                    className: "mx-auto h-8 w-8 animate-spin",
                  }),
                  (0, n.jsx)("p", {
                    className: "text-muted-foreground mt-2",
                    children: "Loading...",
                  }),
                ],
              }),
            }),
          });
        }
        function u() {
          return (
            console.log("https://brainbytes.redentor.dev"),
            (0, n.jsx)(a.Suspense, {
              fallback: (0, n.jsx)(d, {}),
              children: (0, n.jsx)(l, {}),
            })
          );
        }
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      64328: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => l,
          });
        var n = r(24332),
          a = r(48819),
          s = r(67851),
          i = r.n(s),
          o = r(97540),
          c = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (c[e] = () => o[e]);
        r.d(t, c);
        let l = {
            children: [
              "",
              {
                children: [
                  "login",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(r.bind(r, 18980)),
                          "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/login/page.tsx",
                        ],
                      },
                    ],
                  },
                  {
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
          d = [
            "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/login/page.tsx",
          ],
          u = { require: r, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/login/page",
              pathname: "/login",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      74941: (e, t, r) => {
        "use strict";
        r.d(t, { $: () => c });
        var n = r(13486);
        r(60159);
        var a = r(90691),
          s = r(76353),
          i = r(26518);
        let o = (0, s.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive:
                  "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                  "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost:
                  "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        );
        function c({
          className: e,
          variant: t,
          size: r,
          asChild: s = !1,
          ...c
        }) {
          let l = s ? a.DX : "button";
          return (0, n.jsx)(l, {
            "data-slot": "button",
            className: (0, i.cn)(o({ variant: t, size: r, className: e })),
            ...c,
          });
        }
      },
      79214: (e, t) => {
        "use strict";
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
        "use strict";
        e.exports = require("url");
      },
      83374: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            isRequestAPICallableInsideAfter: function () {
              return c;
            },
            throwForSearchParamsAccessInUseCache: function () {
              return o;
            },
            throwWithStaticGenerationBailoutError: function () {
              return s;
            },
            throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
              return i;
            },
          });
        let n = r(10960),
          a = r(3295);
        function s(e, t) {
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
        function o(e) {
          let t = Object.defineProperty(
            Error(
              `Route ${e.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E634", enumerable: !1, configurable: !0 }
          );
          throw ((e.invalidUsageError ??= t), t);
        }
        function c() {
          let e = a.afterTaskAsyncStorage.getStore();
          return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action";
        }
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [50, 289, 112, 757], () => r(64328));
  module.exports = n;
})();
