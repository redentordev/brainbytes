(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [897],
  {
    1107: (e, t, a) => {
      "use strict";
      a.d(t, { CI: () => o, G6: () => u, Up: () => f, wV: () => s });
      let r = (0, a(5495).MB)({ baseURL: "http://localhost:3000" }),
        {
          useSession: s,
          signIn: n,
          signUp: i,
          signOut: o,
          forgetPassword: l,
          resetPassword: d,
          getSession: c,
        } = r,
        u = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await r.signIn.social({ provider: "google", callbackURL: e });
        },
        f = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await r.signIn.social({ provider: "github", callbackURL: e });
        };
    },
    1365: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => c });
      var r = a(4568),
        s = a(7620),
        n = a(4039),
        i = a(3928),
        o = a(9369),
        l = a(8762),
        d = a(2942);
      function c(e) {
        let { params: t } = e,
          { threadId: a } = s.use(t),
          c = (0, d.useSearchParams)().get("initialChat"),
          { data: u, isLoading: f } = (0, l.useQuery)({
            queryKey: ["initial-messages", a],
            queryFn: async () => {
              let e = await fetch((0, i.j)("/api/chat/".concat(a)), {
                credentials: "include",
              });
              return await e.json();
            },
          });
        return (0, r.jsx)("div", {
          className: "h-full w-full flex",
          children: f
            ? (0, r.jsx)("div", {
                className: "flex-1 flex items-center justify-center",
                children: (0, r.jsx)(o.A, {
                  className: "w-10 h-10 animate-spin",
                }),
              })
            : (0, r.jsx)(n.ChatForm, {
                threadId: a,
                initialMessages: null == u ? void 0 : u.messages,
                initialChat: null != c ? c : void 0,
                className: "flex-1",
              }),
        });
      }
    },
    3928: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => n, j: () => i });
      var r = a(2987),
        s = a(607);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.QP)((0, r.$)(t));
      }
      function i(e) {
        return "".concat(e);
      }
    },
    4039: (e, t, a) => {
      "use strict";
      a.d(t, { ChatForm: () => j });
      var r = a(4568),
        s = a(4275),
        n = a.n(s),
        i = a(3928),
        o = a(10),
        l = a(8824),
        d = a(7227),
        c = a(7620),
        u = a(7754);
      function f(e) {
        let { delayDuration: t = 0, ...a } = e;
        return (0, r.jsx)(u.Kq, {
          "data-slot": "tooltip-provider",
          delayDuration: t,
          ...a,
        });
      }
      function h(e) {
        let { ...t } = e;
        return (0, r.jsx)(f, {
          children: (0, r.jsx)(u.bL, { "data-slot": "tooltip", ...t }),
        });
      }
      function g(e) {
        let { ...t } = e;
        return (0, r.jsx)(u.l9, { "data-slot": "tooltip-trigger", ...t });
      }
      function x(e) {
        let { className: t, sideOffset: a = 0, children: s, ...n } = e;
        return (0, r.jsx)(u.ZL, {
          children: (0, r.jsxs)(u.UC, {
            "data-slot": "tooltip-content",
            sideOffset: a,
            className: (0, i.cn)(
              "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
              t
            ),
            ...n,
            children: [
              s,
              (0, r.jsx)(u.i3, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              }),
            ],
          }),
        });
      }
      function m(e) {
        let { className: t, value: a, onChange: s, ...n } = e,
          o = (0, c.useRef)(null),
          l = () => {
            let e = o.current;
            e &&
              ((e.style.height = "auto"),
              (e.style.height = "".concat(e.scrollHeight, "px")));
          };
        return (
          (0, c.useEffect)(() => {
            l();
          }, [a]),
          (0, r.jsx)("textarea", {
            ...n,
            value: a,
            ref: o,
            rows: 1,
            onChange: (e) => {
              s(e.target.value), l();
            },
            className: (0, i.cn)("resize-none min-h-4 max-h-80", t),
          })
        );
      }
      var p = a(1107),
        b = a(2942);
      async function v(e) {
        let { id: t, messages: a } = e,
          r = await fetch((0, i.j)("/api/chat/".concat(t)), {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ messages: a }),
          });
        if (!r.ok) throw Error("Failed to save chat");
        return await r.json();
      }
      var y = a(8762);
      function j(e) {
        let {
            className: t,
            initialMessages: a,
            initialChat: s,
            threadId: u,
            ...f
          } = e,
          j = (0, y.useQueryClient)(),
          w = (0, b.useRouter)(),
          N = (0, b.useSearchParams)(),
          { data: k } = (0, p.wV)(),
          z = (0, c.useRef)(!1),
          {
            messages: C,
            input: _,
            setInput: S,
            append: E,
            stop: F,
          } = (0, o.Y_)({
            id: u,
            api: (0, i.j)("/api/chat"),
            credentials: "include",
            initialInput: s,
            initialMessages: a,
            sendExtraMessageFields: !0,
            onFinish: async (e) => {
              s && (await j.invalidateQueries({ queryKey: ["threads"] })),
                await v({ id: null != u ? u : "", messages: [...C, e] });
            },
          }),
          I = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          if (s && !z.current) {
            (z.current = !0), E({ content: s, role: "user" });
            let e = new URLSearchParams(N);
            e.delete("initialChat");
            let t =
              window.location.pathname +
              (e.toString() ? "?" + e.toString() : "");
            window.history.replaceState(null, "", t), S("");
          }
        }, [s]),
          (0, c.useEffect)(() => {
            O();
          }, [C]);
        let O = () => {
            var e;
            null == (e = I.current) || e.scrollIntoView({ behavior: "smooth" });
          },
          P = async (e) => {
            if ((e.preventDefault(), 0 === C.length)) {
              let { threadId: e } = await fetch((0, i.j)("/api/new-chat"), {
                method: "POST",
                credentials: "include",
              }).then((e) => e.json());
              return (
                S(""), w.push("/chat/".concat(e, "?initialChat=").concat(_))
              );
            }
            F(), E({ content: _, role: "user" }), S("");
          },
          A = (0, r.jsxs)("header", {
            className:
              "my-auto flex w-full flex-col gap-5 text-center py-10 animate-fade-up",
            children: [
              (0, r.jsxs)("h1", {
                className: "text-2xl font-semibold leading-none tracking-tight",
                children: ["Hello, ", null == k ? void 0 : k.user.name],
              }),
              (0, r.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children:
                  "I'm BrainBytes AI, a chatbot that can help you with your questions.",
              }),
            ],
          }),
          R = (0, r.jsxs)("div", {
            className: "flex h-full min-h-full flex-col gap-4 pb-6",
            children: [
              C.map((e, t) => {
                let a = e.content.split("\n");
                return (0, r.jsxs)(
                  "div",
                  {
                    "data-role": e.role,
                    style: {
                      "--code-bg":
                        "user" === e.role
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(0, 0, 0, 0.1)",
                    },
                    className:
                      "jsx-838698bf02092e27 max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-muted data-[role=user]:bg-primary data-[role=assistant]:text-foreground data-[role=user]:text-primary-foreground",
                    children: [
                      (0, r.jsx)(n(), {
                        id: "838698bf02092e27",
                        children:
                          "div[data-role].jsx-838698bf02092e27 code.jsx-838698bf02092e27{background:var(--code-bg);padding:.1em .3em;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-family:monospace;font-size:.9em}div[data-role].jsx-838698bf02092e27 em.jsx-838698bf02092e27{font-style:italic}div[data-role].jsx-838698bf02092e27 strong.jsx-838698bf02092e27{font-weight:bold}",
                      }),
                      a.map((e, t) => {
                        var s;
                        return (0, r.jsxs)(
                          c.Fragment,
                          {
                            children: [
                              (0, r.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html: e
                                    .replace(
                                      /\*\*(.*?)\*\*/g,
                                      "<strong>$1</strong>"
                                    )
                                    .replace(/\*(.*?)\*/g, "<em>$1</em>")
                                    .replace(/`([^`]+)`/g, "<code>$1</code>"),
                                },
                                className: "jsx-838698bf02092e27",
                              }),
                              t < a.length - 1 &&
                                (0, r.jsx)("br", {
                                  className: "jsx-838698bf02092e27",
                                }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  },
                  t
                );
              }),
              (0, r.jsx)("div", { ref: I }),
            ],
          });
        return (0, r.jsxs)("main", {
          className: (0, i.cn)(
            "ring-none mx-auto flex h-full w-full max-w-[35rem] flex-col justify-between border-none pt-4 relative",
            t
          ),
          ...f,
          children: [
            (0, r.jsx)("div", {
              className: "flex-1 overflow-y-auto px-6 pb-4",
              children: C.length ? R : A,
            }),
            (0, r.jsx)("div", {
              className: "px-6 py-2 sticky bottom-0 bg-background",
              children: (0, r.jsxs)("form", {
                onSubmit: P,
                className:
                  "border-input bg-background focus-within:ring-ring/10 relative flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:border-primary",
                children: [
                  (0, r.jsx)(m, {
                    onKeyDown: (e) => {
                      "Enter" !== e.key ||
                        e.shiftKey ||
                        (e.preventDefault(), P(e));
                    },
                    onChange: (e) => S(e),
                    value: _,
                    placeholder: "Enter a message",
                    className:
                      "placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none",
                    autoFocus: !0,
                  }),
                  (0, r.jsxs)(h, {
                    children: [
                      (0, r.jsx)(g, {
                        asChild: !0,
                        children: (0, r.jsx)(d.$, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "absolute bottom-1 right-1 size-6 rounded-full",
                          children: (0, r.jsx)(l.A, { size: 16 }),
                        }),
                      }),
                      (0, r.jsx)(x, { sideOffset: 12, children: "Submit" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7227: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => l });
      var r = a(4568);
      a(7620);
      var s = a(9649),
        n = a(615),
        i = a(3928);
      let o = (0, n.F)(
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
        let { className: t, variant: a, size: n, asChild: l = !1, ...d } = e,
          c = l ? s.DX : "button";
        return (0, r.jsx)(c, {
          "data-slot": "button",
          className: (0, i.cn)(o({ variant: a, size: n, className: t })),
          ...d,
        });
      }
    },
    9043: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 1365));
    },
    9369: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      let r = (0, a(8889).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [495, 534, 762, 188, 356, 587, 315, 358], () => t(9043)),
      (_N_E = e.O());
  },
]);
