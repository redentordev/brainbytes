(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [457],
  {
    438: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 4039));
    },
    1107: (e, t, r) => {
      "use strict";
      r.d(t, { CI: () => o, G6: () => u, Up: () => f, wV: () => n });
      let a = (0, r(5495).MB)({ baseURL: "http://localhost:3000" }),
        {
          useSession: n,
          signIn: s,
          signUp: i,
          signOut: o,
          forgetPassword: l,
          resetPassword: d,
          getSession: c,
        } = a,
        u = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await a.signIn.social({ provider: "google", callbackURL: e });
        },
        f = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await a.signIn.social({ provider: "github", callbackURL: e });
        };
    },
    3928: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => s, j: () => i });
      var a = r(2987),
        n = r(607);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.QP)((0, a.$)(t));
      }
      function i(e) {
        return "".concat(e);
      }
    },
    4039: (e, t, r) => {
      "use strict";
      r.d(t, { ChatForm: () => j });
      var a = r(4568),
        n = r(4275),
        s = r.n(n),
        i = r(3928),
        o = r(10),
        l = r(8824),
        d = r(7227),
        c = r(7620),
        u = r(7754);
      function f(e) {
        let { delayDuration: t = 0, ...r } = e;
        return (0, a.jsx)(u.Kq, {
          "data-slot": "tooltip-provider",
          delayDuration: t,
          ...r,
        });
      }
      function h(e) {
        let { ...t } = e;
        return (0, a.jsx)(f, {
          children: (0, a.jsx)(u.bL, { "data-slot": "tooltip", ...t }),
        });
      }
      function g(e) {
        let { ...t } = e;
        return (0, a.jsx)(u.l9, { "data-slot": "tooltip-trigger", ...t });
      }
      function x(e) {
        let { className: t, sideOffset: r = 0, children: n, ...s } = e;
        return (0, a.jsx)(u.ZL, {
          children: (0, a.jsxs)(u.UC, {
            "data-slot": "tooltip-content",
            sideOffset: r,
            className: (0, i.cn)(
              "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
              t
            ),
            ...s,
            children: [
              n,
              (0, a.jsx)(u.i3, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              }),
            ],
          }),
        });
      }
      function m(e) {
        let { className: t, value: r, onChange: n, ...s } = e,
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
          }, [r]),
          (0, a.jsx)("textarea", {
            ...s,
            value: r,
            ref: o,
            rows: 1,
            onChange: (e) => {
              n(e.target.value), l();
            },
            className: (0, i.cn)("resize-none min-h-4 max-h-80", t),
          })
        );
      }
      var p = r(1107),
        b = r(2942);
      async function v(e) {
        let { id: t, messages: r } = e,
          a = await fetch((0, i.j)("/api/chat/".concat(t)), {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ messages: r }),
          });
        if (!a.ok) throw Error("Failed to save chat");
        return await a.json();
      }
      var y = r(8762);
      function j(e) {
        let {
            className: t,
            initialMessages: r,
            initialChat: n,
            threadId: u,
            ...f
          } = e,
          j = (0, y.useQueryClient)(),
          w = (0, b.useRouter)(),
          k = (0, b.useSearchParams)(),
          { data: N } = (0, p.wV)(),
          z = (0, c.useRef)(!1),
          {
            messages: _,
            input: C,
            setInput: S,
            append: E,
            stop: I,
          } = (0, o.Y_)({
            id: u,
            api: (0, i.j)("/api/chat"),
            credentials: "include",
            initialInput: n,
            initialMessages: r,
            sendExtraMessageFields: !0,
            onFinish: async (e) => {
              n && (await j.invalidateQueries({ queryKey: ["threads"] })),
                await v({ id: null != u ? u : "", messages: [..._, e] });
            },
          }),
          F = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          if (n && !z.current) {
            (z.current = !0), E({ content: n, role: "user" });
            let e = new URLSearchParams(k);
            e.delete("initialChat");
            let t =
              window.location.pathname +
              (e.toString() ? "?" + e.toString() : "");
            window.history.replaceState(null, "", t), S("");
          }
        }, [n]),
          (0, c.useEffect)(() => {
            O();
          }, [_]);
        let O = () => {
            var e;
            null == (e = F.current) || e.scrollIntoView({ behavior: "smooth" });
          },
          P = async (e) => {
            if ((e.preventDefault(), 0 === _.length)) {
              let { threadId: e } = await fetch((0, i.j)("/api/new-chat"), {
                method: "POST",
                credentials: "include",
              }).then((e) => e.json());
              return (
                S(""), w.push("/chat/".concat(e, "?initialChat=").concat(C))
              );
            }
            I(), E({ content: C, role: "user" }), S("");
          },
          R = (0, a.jsxs)("header", {
            className:
              "my-auto flex w-full flex-col gap-5 text-center py-10 animate-fade-up",
            children: [
              (0, a.jsxs)("h1", {
                className: "text-2xl font-semibold leading-none tracking-tight",
                children: ["Hello, ", null == N ? void 0 : N.user.name],
              }),
              (0, a.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children:
                  "I'm BrainBytes AI, a chatbot that can help you with your questions.",
              }),
            ],
          }),
          $ = (0, a.jsxs)("div", {
            className: "flex h-full min-h-full flex-col gap-4 pb-6",
            children: [
              _.map((e, t) => {
                let r = e.content.split("\n");
                return (0, a.jsxs)(
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
                      (0, a.jsx)(s(), {
                        id: "838698bf02092e27",
                        children:
                          "div[data-role].jsx-838698bf02092e27 code.jsx-838698bf02092e27{background:var(--code-bg);padding:.1em .3em;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-family:monospace;font-size:.9em}div[data-role].jsx-838698bf02092e27 em.jsx-838698bf02092e27{font-style:italic}div[data-role].jsx-838698bf02092e27 strong.jsx-838698bf02092e27{font-weight:bold}",
                      }),
                      r.map((e, t) => {
                        var n;
                        return (0, a.jsxs)(
                          c.Fragment,
                          {
                            children: [
                              (0, a.jsx)("span", {
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
                              t < r.length - 1 &&
                                (0, a.jsx)("br", {
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
              (0, a.jsx)("div", { ref: F }),
            ],
          });
        return (0, a.jsxs)("main", {
          className: (0, i.cn)(
            "ring-none mx-auto flex h-full w-full max-w-[35rem] flex-col justify-between border-none pt-4 relative",
            t
          ),
          ...f,
          children: [
            (0, a.jsx)("div", {
              className: "flex-1 overflow-y-auto px-6 pb-4",
              children: _.length ? $ : R,
            }),
            (0, a.jsx)("div", {
              className: "px-6 py-2 sticky bottom-0 bg-background",
              children: (0, a.jsxs)("form", {
                onSubmit: P,
                className:
                  "border-input bg-background focus-within:ring-ring/10 relative flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:border-primary",
                children: [
                  (0, a.jsx)(m, {
                    onKeyDown: (e) => {
                      "Enter" !== e.key ||
                        e.shiftKey ||
                        (e.preventDefault(), P(e));
                    },
                    onChange: (e) => S(e),
                    value: C,
                    placeholder: "Enter a message",
                    className:
                      "placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none",
                    autoFocus: !0,
                  }),
                  (0, a.jsxs)(h, {
                    children: [
                      (0, a.jsx)(g, {
                        asChild: !0,
                        children: (0, a.jsx)(d.$, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "absolute bottom-1 right-1 size-6 rounded-full",
                          children: (0, a.jsx)(l.A, { size: 16 }),
                        }),
                      }),
                      (0, a.jsx)(x, { sideOffset: 12, children: "Submit" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7227: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => l });
      var a = r(4568);
      r(7620);
      var n = r(9649),
        s = r(615),
        i = r(3928);
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
      function l(e) {
        let { className: t, variant: r, size: s, asChild: l = !1, ...d } = e,
          c = l ? n.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          className: (0, i.cn)(o({ variant: r, size: s, className: t })),
          ...d,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [495, 534, 762, 188, 356, 587, 315, 358], () => t(438)),
      (_N_E = e.O());
  },
]);
