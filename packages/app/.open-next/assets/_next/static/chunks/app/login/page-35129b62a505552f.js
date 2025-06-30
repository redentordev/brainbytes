(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [520],
  {
    1107: (e, t, s) => {
      "use strict";
      s.d(t, { CI: () => c, G6: () => u, Up: () => h, wV: () => a });
      let r = (0, s(5495).MB)({ baseURL: "http://localhost:3000" }),
        {
          useSession: a,
          signIn: n,
          signUp: i,
          signOut: c,
          forgetPassword: l,
          resetPassword: o,
          getSession: d,
        } = r,
        u = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await r.signIn.social({ provider: "google", callbackURL: e });
        },
        h = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await r.signIn.social({ provider: "github", callbackURL: e });
        };
    },
    1956: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => u });
      var r = s(4568),
        a = s(7620),
        n = s(9369),
        i = s(7227),
        c = s(1107),
        l = s(2942);
      function o() {
        let [e, t] = (0, a.useState)(!1),
          [s, o] = (0, a.useState)(!1),
          { data: d, isPending: u } = (0, c.wV)(),
          h = (0, l.useRouter)(),
          x = (0, l.useSearchParams)();
        if (
          ((0, a.useEffect)(() => {
            if (d) {
              let e = x.get("callbackUrl") || "/chat";
              h.push(e);
            }
          }, [d, h, x]),
          u)
        )
          return (0, r.jsx)("div", {
            className:
              "flex flex-col items-center justify-center min-h-screen p-4",
            children: (0, r.jsx)("div", {
              className: "w-full max-w-md space-y-6",
              children: (0, r.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, r.jsx)(n.A, {
                    className: "mx-auto h-8 w-8 animate-spin",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-muted-foreground mt-2",
                    children: "Checking authentication...",
                  }),
                ],
              }),
            }),
          });
        let v = async () => {
            t(!0);
            try {
              let e = x.get("callbackUrl") || "/chat";
              await (0, c.Up)(e);
            } catch (e) {
              console.error("GitHub sign-in error:", e);
            } finally {
              t(!1);
            }
          },
          m = async () => {
            o(!0);
            try {
              let e = x.get("callbackUrl") || "/chat";
              await (0, c.G6)(e);
            } catch (e) {
              console.error("Google sign-in error:", e);
            } finally {
              o(!1);
            }
          };
        return (0, r.jsx)("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen p-4",
          children: (0, r.jsxs)("div", {
            className: "w-full max-w-md space-y-6",
            children: [
              (0, r.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, r.jsx)("h1", {
                    className: "text-2xl font-bold",
                    children: "Welcome to BrainBytes",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-muted-foreground mt-2",
                    children: "Sign in to continue to your dashboard",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "space-y-3",
                children: [
                  (0, r.jsxs)(i.$, {
                    className: "w-full",
                    variant: "outline",
                    type: "button",
                    onClick: v,
                    disabled: e || s,
                    children: [
                      e
                        ? (0, r.jsx)(n.A, {
                            className: "mr-2 h-4 w-4 animate-spin",
                          })
                        : (0, r.jsx)("svg", {
                            className: "mr-2 h-4 w-4",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, r.jsx)("path", {
                              d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                            }),
                          }),
                      "Sign in with GitHub",
                    ],
                  }),
                  (0, r.jsxs)(i.$, {
                    className: "w-full",
                    variant: "outline",
                    type: "button",
                    onClick: m,
                    disabled: e || s,
                    children: [
                      s
                        ? (0, r.jsx)(n.A, {
                            className: "mr-2 h-4 w-4 animate-spin",
                          })
                        : (0, r.jsxs)("svg", {
                            className: "mr-2 h-4 w-4",
                            viewBox: "0 0 24 24",
                            children: [
                              (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                              }),
                              (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                              }),
                              (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                              }),
                              (0, r.jsx)("path", {
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
              (0, r.jsx)("div", {
                className: "text-center text-sm text-muted-foreground",
                children:
                  "By signing in, you agree to our terms of service and privacy policy.",
              }),
            ],
          }),
        });
      }
      function d() {
        return (0, r.jsx)("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen p-4",
          children: (0, r.jsx)("div", {
            className: "w-full max-w-md space-y-6",
            children: (0, r.jsxs)("div", {
              className: "text-center",
              children: [
                (0, r.jsx)(n.A, { className: "mx-auto h-8 w-8 animate-spin" }),
                (0, r.jsx)("p", {
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
          (0, r.jsx)(a.Suspense, {
            fallback: (0, r.jsx)(d, {}),
            children: (0, r.jsx)(o, {}),
          })
        );
      }
    },
    3928: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => n, j: () => i });
      var r = s(2987),
        a = s(607);
      function n() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, a.QP)((0, r.$)(t));
      }
      function i(e) {
        return "".concat(e);
      }
    },
    5552: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 1956));
    },
    7227: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => l });
      var r = s(4568);
      s(7620);
      var a = s(9649),
        n = s(615),
        i = s(3928);
      let c = (0, n.F)(
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
      function l(e) {
        let { className: t, variant: s, size: n, asChild: l = !1, ...o } = e,
          d = l ? a.DX : "button";
        return (0, r.jsx)(d, {
          "data-slot": "button",
          className: (0, i.cn)(c({ variant: s, size: n, className: t })),
          ...o,
        });
      }
    },
    9369: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      let r = (0, s(8889).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [495, 534, 587, 315, 358], () => t(5552)), (_N_E = e.O());
  },
]);
