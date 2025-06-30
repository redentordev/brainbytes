(exports.id = 424),
  (exports.ids = [424]),
  (exports.modules = {
    5991: (e, t, s) => {
      "use strict";
      s.d(t, { j: () => l });
      var a = s(78116),
        r = s(40856),
        i = s(42918),
        n = s(32385),
        d = s(69290);
      let l = (0, a.li)({
        database: (0, r.y)(n.db, { provider: "pg", schema: { ...d } }),
        secret: i.FW.BetterAuthSecret.value,
        emailAndPassword: { enabled: !1 },
        socialProviders: {
          github: {
            clientId: i.FW.GithubClientId.value,
            clientSecret: i.FW.GithubClientSecret.value,
          },
          google: {
            clientId: i.FW.GoogleClientId.value,
            clientSecret: i.FW.GoogleClientSecret.value,
          },
        },
      });
    },
    6836: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => eL });
      var a = s(13486),
        r = s(8981),
        i = s(74941),
        n = s(77816),
        d = s(60159),
        l = s.n(d),
        o = s(58467),
        c = s(1039),
        u = s(26518);
      function m({ ...e }) {
        return (0, a.jsx)(o.bL, { "data-slot": "sheet", ...e });
      }
      function x({ ...e }) {
        return (0, a.jsx)(o.l9, { "data-slot": "sheet-trigger", ...e });
      }
      function h({ ...e }) {
        return (0, a.jsx)(o.ZL, { "data-slot": "sheet-portal", ...e });
      }
      function f({ className: e, ...t }) {
        return (0, a.jsx)(o.hJ, {
          "data-slot": "sheet-overlay",
          className: (0, u.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            e
          ),
          ...t,
        });
      }
      function p({ className: e, children: t, side: s = "right", ...r }) {
        return (0, a.jsxs)(h, {
          children: [
            (0, a.jsx)(f, {}),
            (0, a.jsxs)(o.UC, {
              "data-slot": "sheet-content",
              className: (0, u.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                "right" === s &&
                  "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                "left" === s &&
                  "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                "top" === s &&
                  "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                "bottom" === s &&
                  "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                e
              ),
              ...r,
              children: [
                t,
                (0, a.jsxs)(o.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                  children: [
                    (0, a.jsx)(c.A, { className: "size-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function g({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "sheet-header",
          className: (0, u.cn)("flex flex-col gap-1.5 p-4", e),
          ...t,
        });
      }
      function b({ className: e, ...t }) {
        return (0, a.jsx)(o.hE, {
          "data-slot": "sheet-title",
          className: (0, u.cn)("text-foreground font-semibold", e),
          ...t,
        });
      }
      var j = s(7398),
        v = s(43967),
        y = s(9575),
        N = s(92816),
        w = s(74439),
        k = s(15577),
        C = s(24530);
      let A = (0, s(76353).F)(
        "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
        {
          variants: {
            variant: {
              default: "bg-card text-card-foreground",
              destructive:
                "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function z({ className: e, variant: t, ...s }) {
        return (0, a.jsx)("div", {
          "data-slot": "alert",
          role: "alert",
          className: (0, u.cn)(A({ variant: t }), e),
          ...s,
        });
      }
      function S({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "alert-description",
          className: (0, u.cn)(
            "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
            e
          ),
          ...t,
        });
      }
      var _ = s(22682),
        E = s(23143),
        q = s(37558);
      function Q({ ...e }) {
        return (0, a.jsx)(o.bL, { "data-slot": "dialog", ...e });
      }
      function R({ ...e }) {
        return (0, a.jsx)(o.l9, { "data-slot": "dialog-trigger", ...e });
      }
      function $({ ...e }) {
        return (0, a.jsx)(o.ZL, { "data-slot": "dialog-portal", ...e });
      }
      function F({ className: e, ...t }) {
        return (0, a.jsx)(o.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, u.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            e
          ),
          ...t,
        });
      }
      function T({ className: e, children: t, ...s }) {
        return (0, a.jsxs)($, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(F, {}),
            (0, a.jsxs)(o.UC, {
              "data-slot": "dialog-content",
              className: (0, u.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                e
              ),
              ...s,
              children: [
                t,
                (0, a.jsxs)(o.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: [
                    (0, a.jsx)(c.A, {}),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function I({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, u.cn)(
            "flex flex-col gap-2 text-center sm:text-left",
            e
          ),
          ...t,
        });
      }
      function L({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "dialog-footer",
          className: (0, u.cn)(
            "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
            e
          ),
          ...t,
        });
      }
      function P({ className: e, ...t }) {
        return (0, a.jsx)(o.hE, {
          "data-slot": "dialog-title",
          className: (0, u.cn)("text-lg leading-none font-semibold", e),
          ...t,
        });
      }
      function D({ className: e, type: t, ...s }) {
        return (0, a.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, u.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            e
          ),
          ...s,
        });
      }
      var M = s(81604);
      function O({
        subjects: e,
        selectedSubjectFilter: t,
        setSelectedSubjectFilter: s,
        addSubject: r,
        removeSubject: n,
        isLoading: d,
        isConnectionError: o,
      }) {
        let [c, m] = l().useState(!1),
          [x, h] = l().useState(""),
          [f, p] = l().useState(!1),
          g = async () => {
            if (!x.trim())
              return void M.oR.error("Subject required", {
                description: "Please provide a name for your subject.",
              });
            try {
              p(!0),
                await r(x),
                h(""),
                m(!1),
                M.oR.success("Subject added", {
                  description: "Your subject has been added successfully.",
                });
            } catch {
            } finally {
              p(!1);
            }
          },
          b = async (e) => {
            try {
              await n(e),
                M.oR.success("Subject removed", {
                  description: "The subject has been removed.",
                });
            } catch {}
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)(_.A, { size: 16 }),
                    (0, a.jsx)("span", {
                      className: "text-sm font-medium",
                      children: "Subjects",
                    }),
                  ],
                }),
                (0, a.jsxs)(Q, {
                  open: c,
                  onOpenChange: m,
                  children: [
                    (0, a.jsx)(R, {
                      asChild: !0,
                      children: (0, a.jsxs)(i.$, {
                        variant: "default",
                        size: "sm",
                        disabled: !!o,
                        className:
                          "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                        children: [
                          (0, a.jsx)(w.A, { size: 14, className: "mr-1" }),
                          "Add Subject",
                        ],
                      }),
                    }),
                    (0, a.jsxs)(T, {
                      children: [
                        (0, a.jsx)(I, {
                          children: (0, a.jsx)(P, { children: "Add Subject" }),
                        }),
                        (0, a.jsx)("div", {
                          className: "grid gap-4 py-4",
                          children: (0, a.jsxs)("div", {
                            className: "grid gap-2",
                            children: [
                              (0, a.jsx)("label", {
                                htmlFor: "subject",
                                className: "text-sm font-medium",
                                children: "Subject Name",
                              }),
                              (0, a.jsx)(D, {
                                id: "subject",
                                placeholder: "e.g., Computer Science",
                                value: x,
                                onChange: (e) => h(e.target.value),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)(L, {
                          children: [
                            (0, a.jsx)(i.$, {
                              variant: "outline",
                              onClick: () => m(!1),
                              disabled: f,
                              children: "Cancel",
                            }),
                            (0, a.jsx)(i.$, {
                              onClick: g,
                              disabled: f,
                              children: f
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(k.A, {
                                        className: "mr-2 h-4 w-4 animate-spin",
                                      }),
                                      "Adding...",
                                    ],
                                  })
                                : "Add Subject",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-wrap gap-2",
              children: [
                d
                  ? (0, a.jsxs)("div", {
                      className: "flex items-center justify-center w-full py-2",
                      children: [
                        (0, a.jsx)(k.A, {
                          className: "h-4 w-4 animate-spin mr-2",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-sm",
                          children: "Loading subjects...",
                        }),
                      ],
                    })
                  : e.length > 0
                    ? e.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: (0, u.cn)(
                              "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border",
                              t === e
                                ? "bg-primary text-sidebar-primary-foreground border-sidebar-primary"
                                : "bg-sidebar-background text-sidebar-foreground border-sidebar-border"
                            ),
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => s(t === e ? null : e),
                                className: "flex items-center gap-1",
                                children: [(0, a.jsx)(E.A, { size: 12 }), e],
                              }),
                              (0, a.jsx)("button", {
                                onClick: () => b(e),
                                children: (0, a.jsx)(q.A, { size: 12 }),
                              }),
                            ],
                          },
                          e
                        )
                      )
                    : (0, a.jsx)("div", {
                        className:
                          "text-sm text-sidebar-foreground/60 p-2 bg-sidebar-background rounded-md w-full text-center",
                        children:
                          "No subjects yet. Add your first subject to get started.",
                      }),
                t &&
                  (0, a.jsx)("button", {
                    onClick: () => s(null),
                    className:
                      "px-2 py-1 rounded-full text-xs font-medium bg-sidebar-background text-sidebar-foreground border border-border",
                    children: "Clear Filter",
                  }),
              ],
            }),
          ],
        });
      }
      var K = s(77026),
        J = s(72513),
        U = s(77271);
      function V({ className: e, ...t }) {
        return (0, a.jsx)(U.bL, {
          "data-slot": "switch",
          className: (0, u.cn)(
            "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            e
          ),
          ...t,
          children: (0, a.jsx)(U.zi, {
            "data-slot": "switch-thumb",
            className: (0, u.cn)(
              "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      }
      function W({ entry: e, onRemove: t, onEdit: s }) {
        let [r, n] = (0, d.useState)(!1),
          [l, o] = (0, d.useState)(!1),
          c = async () => {
            try {
              o(!0),
                await t(),
                M.oR.success("Entry removed", {
                  description: "Text entry has been removed.",
                });
            } catch {
            } finally {
              o(!1);
            }
          };
        return (0, a.jsxs)("div", {
          className: "bg-background rounded border p-2",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("button", {
                  onClick: () => n(!r),
                  className:
                    "text-sm font-medium hover:text-primary flex-grow text-left",
                  children: e.title,
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "h-5 w-5 hover:text-primary cursor-pointer group",
                      onClick: s,
                      children: (0, a.jsx)(K.A, {
                        size: 12,
                        className:
                          "text-muted-foreground group-hover:text-primary cursor-pointer",
                      }),
                    }),
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "h-5 w-5 hover:text-destructive cursor-pointer group",
                      onClick: c,
                      disabled: l,
                      children: l
                        ? (0, a.jsx)(k.A, {
                            size: 12,
                            className: "animate-spin",
                          })
                        : (0, a.jsx)(q.A, {
                            size: 12,
                            className:
                              "text-muted-foreground hover:text-destructive cursor-pointer group-hover:text-destructive",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            r &&
              (0, a.jsx)("div", {
                className:
                  "mt-2 text-xs text-sidebar-foreground/60 border-t pt-2",
                children: e.content,
              }),
            (0, a.jsx)("div", {
              className: "mt-1 flex justify-end",
              children: (0, a.jsx)("span", {
                className: "text-[10px] text-sidebar-foreground/60",
                children: new Date(e.dateAdded).toLocaleDateString(),
              }),
            }),
          ],
        });
      }
      var B = s(91159),
        Y = s(68689),
        Z = s(49391),
        H = s(25704);
      function G({ ...e }) {
        return (0, a.jsx)(B.bL, { "data-slot": "select", ...e });
      }
      function X({ ...e }) {
        return (0, a.jsx)(B.WT, { "data-slot": "select-value", ...e });
      }
      function ee({ className: e, size: t = "default", children: s, ...r }) {
        return (0, a.jsxs)(B.l9, {
          "data-slot": "select-trigger",
          "data-size": t,
          className: (0, u.cn)(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            e
          ),
          ...r,
          children: [
            s,
            (0, a.jsx)(B.In, {
              asChild: !0,
              children: (0, a.jsx)(Y.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function et({ className: e, children: t, position: s = "popper", ...r }) {
        return (0, a.jsx)(B.ZL, {
          children: (0, a.jsxs)(B.UC, {
            "data-slot": "select-content",
            className: (0, u.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === s &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              e
            ),
            position: s,
            ...r,
            children: [
              (0, a.jsx)(ea, {}),
              (0, a.jsx)(B.LM, {
                className: (0, u.cn)(
                  "p-1",
                  "popper" === s &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: t,
              }),
              (0, a.jsx)(er, {}),
            ],
          }),
        });
      }
      function es({ className: e, children: t, ...s }) {
        return (0, a.jsxs)(B.q7, {
          "data-slot": "select-item",
          className: (0, u.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            e
          ),
          ...s,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, a.jsx)(B.VF, {
                children: (0, a.jsx)(Z.A, { className: "size-4" }),
              }),
            }),
            (0, a.jsx)(B.p4, { children: t }),
          ],
        });
      }
      function ea({ className: e, ...t }) {
        return (0, a.jsx)(B.PP, {
          "data-slot": "select-scroll-up-button",
          className: (0, u.cn)(
            "flex cursor-default items-center justify-center py-1",
            e
          ),
          ...t,
          children: (0, a.jsx)(H.A, { className: "size-4" }),
        });
      }
      function er({ className: e, ...t }) {
        return (0, a.jsx)(B.wn, {
          "data-slot": "select-scroll-down-button",
          className: (0, u.cn)(
            "flex cursor-default items-center justify-center py-1",
            e
          ),
          ...t,
          children: (0, a.jsx)(Y.A, { className: "size-4" }),
        });
      }
      function ei({
        isOpen: e,
        onOpenChange: t,
        material: s,
        subjects: r,
        updateMaterial: n,
      }) {
        let [l, o] = (0, d.useState)(""),
          [c, u] = (0, d.useState)(""),
          [m, x] = (0, d.useState)(""),
          [h, f] = (0, d.useState)(!1),
          p = async () => {
            if (s) {
              if (!l.trim())
                return void M.oR.error("Title required", {
                  description:
                    "Please provide a title for your learning material.",
                });
              if (!m)
                return void M.oR.error("Subject required", {
                  description: "Please select a subject for your material.",
                });
              try {
                f(!0),
                  await n(s.id, l, c, m),
                  t(!1),
                  M.oR.success("Material updated", {
                    description:
                      "Your learning material has been updated successfully.",
                  });
              } catch {
              } finally {
                f(!1);
              }
            }
          };
        return (0, a.jsx)(Q, {
          open: e,
          onOpenChange: (e) => {
            !e && s && (o(s.title), u(s.description), x(s.subject)), t(e);
          },
          children: (0, a.jsxs)(T, {
            children: [
              (0, a.jsx)(I, {
                children: (0, a.jsx)(P, { children: "Edit Learning Material" }),
              }),
              (0, a.jsxs)("div", {
                className: "grid gap-4 py-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "title",
                        className: "text-sm font-medium",
                        children: "Title",
                      }),
                      (0, a.jsx)(D, {
                        id: "title",
                        placeholder: "e.g., Algebra Basics",
                        value: l,
                        onChange: (e) => o(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "description",
                        className: "text-sm font-medium",
                        children: "Description",
                      }),
                      (0, a.jsx)(D, {
                        id: "description",
                        placeholder: "Brief description of the material",
                        value: c,
                        onChange: (e) => u(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "subject",
                        className: "text-sm font-medium",
                        children: "Subject",
                      }),
                      r.length > 0
                        ? (0, a.jsxs)(G, {
                            value: m,
                            onValueChange: x,
                            children: [
                              (0, a.jsx)(ee, {
                                children: (0, a.jsx)(X, {
                                  placeholder: "Select a subject",
                                }),
                              }),
                              (0, a.jsx)(et, {
                                children: r.map((e) =>
                                  (0, a.jsx)(es, { value: e, children: e }, e)
                                ),
                              }),
                            ],
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "text-sm text-amber-600 p-2 bg-amber-50 rounded-md",
                            children:
                              "Please add a subject first before creating a material.",
                          }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => t(!1),
                    disabled: h,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: p,
                    disabled: h || 0 === r.length,
                    children: h
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(k.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Updating...",
                          ],
                        })
                      : "Update Material",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function en({ className: e, ...t }) {
        return (0, a.jsx)("textarea", {
          "data-slot": "textarea",
          className: (0, u.cn)(
            "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            e
          ),
          ...t,
        });
      }
      function ed({
        isOpen: e,
        onOpenChange: t,
        materialId: s,
        textEntry: r,
        updateTextEntry: n,
      }) {
        let [l, o] = (0, d.useState)(""),
          [c, u] = (0, d.useState)(""),
          [m, x] = (0, d.useState)(!1),
          h = async () => {
            if (s && r) {
              if (!l.trim())
                return void M.oR.error("Title required", {
                  description: "Please provide a title for your text entry.",
                });
              if (!c.trim())
                return void M.oR.error("Content required", {
                  description:
                    "Please provide some content for your text entry.",
                });
              try {
                x(!0),
                  await n(s, r.id, l, c),
                  t(!1),
                  M.oR.success("Text entry updated", {
                    description:
                      "Your text entry has been updated successfully.",
                  });
              } catch {
              } finally {
                x(!1);
              }
            }
          };
        return (0, a.jsx)(Q, {
          open: e,
          onOpenChange: (e) => {
            !e && r && (o(r.title), u(r.content)), t(e);
          },
          children: (0, a.jsxs)(T, {
            children: [
              (0, a.jsx)(I, {
                children: (0, a.jsx)(P, { children: "Edit Text Entry" }),
              }),
              (0, a.jsxs)("div", {
                className: "grid gap-4 py-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "entry-title",
                        className: "text-sm font-medium",
                        children: "Entry Title",
                      }),
                      (0, a.jsx)(D, {
                        id: "entry-title",
                        placeholder: "e.g., Key Concepts",
                        value: l,
                        onChange: (e) => o(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "entry-content",
                        className: "text-sm font-medium",
                        children: "Content",
                      }),
                      (0, a.jsx)(en, {
                        id: "entry-content",
                        placeholder: "Enter your text content here...",
                        className: "h-40",
                        value: c,
                        onChange: (e) => u(e.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => t(!1),
                    disabled: m,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: h,
                    disabled: m,
                    children: m
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(k.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Updating...",
                          ],
                        })
                      : "Update Entry",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function el({
        material: e,
        subjects: t,
        toggleMaterial: s,
        removeMaterial: r,
        updateMaterial: n,
        onAddTextEntry: l,
        removeTextEntry: o,
        updateTextEntry: c,
      }) {
        let [m, x] = (0, d.useState)(!1),
          [h, f] = (0, d.useState)(!1),
          [p, g] = (0, d.useState)(!1),
          [b, j] = (0, d.useState)(!1),
          [v, y] = (0, d.useState)(null),
          N = async () => {
            try {
              f(!0),
                await r(e.id),
                M.oR.success("Material removed", {
                  description: "The learning material has been removed.",
                });
            } catch {
            } finally {
              f(!1);
            }
          },
          w = (e) => {
            y(e), j(!0);
          };
        return (0, a.jsxs)("div", {
          className: (0, u.cn)(
            "rounded-lg border p-3 transition-all",
            e.isActive && "border-primary bg-primary/20"
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("h3", {
                  className: "font-medium",
                  children: e.title,
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className: "h-7 w-7",
                      onClick: () => g(!0),
                      children: (0, a.jsx)(K.A, {
                        size: 14,
                        className: "text-muted-foreground",
                      }),
                    }),
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className: "h-7 w-7",
                      onClick: N,
                      disabled: h,
                      children: h
                        ? (0, a.jsx)(k.A, {
                            size: 14,
                            className: "animate-spin",
                          })
                        : (0, a.jsx)(q.A, {
                            size: 14,
                            className: "text-muted-foreground",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            e.subject &&
              (0, a.jsx)("div", {
                className: "mt-1 flex items-center",
                children: (0, a.jsxs)("span", {
                  className:
                    "text-xs bg-sidebar-background text-sidebar-foreground px-2 py-0.5 rounded-full flex items-center",
                  children: [
                    (0, a.jsx)(E.A, { size: 10, className: "mr-1" }),
                    e.subject,
                  ],
                }),
              }),
            (0, a.jsx)("p", {
              className: "mt-1 line-clamp-2 text-xs text-sidebar-foreground/60",
              children: e.description,
            }),
            (0, a.jsxs)("div", {
              className: "mt-3 flex items-center justify-between",
              children: [
                (0, a.jsx)("span", {
                  className: "text-xs text-sidebar-foreground/60",
                  children: new Date(e.dateAdded).toLocaleDateString(),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-xs font-medium",
                      children: e.isActive ? "Active" : "Inactive",
                    }),
                    (0, a.jsx)(V, {
                      checked: e.isActive,
                      onCheckedChange: () => {
                        s(e.id),
                          (0, M.oR)(
                            e.isActive
                              ? "Context deactivated"
                              : `"${e.title}" context is now active`,
                            {
                              description: e.isActive
                                ? "Default context is now active"
                                : `"${e.title}" context is now active`,
                            }
                          );
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "mt-3",
              children: (0, a.jsxs)(i.$, {
                variant: "outline",
                size: "sm",
                className:
                  "text-sm w-full hover:bg-primary/10 hover:border-primary",
                onClick: l,
                children: [
                  (0, a.jsx)(J.A, { size: 14, className: "mr-2" }),
                  "Add Text Entry",
                ],
              }),
            }),
            e.textEntries && e.textEntries.length > 0
              ? (0, a.jsxs)("div", {
                  className: "mt-3",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center justify-between",
                      children: (0, a.jsxs)(i.$, {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => x(!m),
                        className: "text-xs p-1 h-auto",
                        children: [
                          m ? "Hide Text Entries" : "Show Text Entries",
                          " (",
                          e.textEntries.length,
                          ")",
                        ],
                      }),
                    }),
                    m &&
                      (0, a.jsx)("div", {
                        className:
                          "mt-2 space-y-2 max-h-60 overflow-y-auto p-2 bg-sidebar-background rounded-md",
                        children: e.textEntries.map((e) =>
                          (0, a.jsx)(
                            W,
                            {
                              entry: e,
                              onRemove: () => o(e.id),
                              onEdit: () => w(e),
                            },
                            e.id
                          )
                        ),
                      }),
                  ],
                })
              : (0, a.jsx)("div", {
                  className:
                    "mt-3 text-xs text-sidebar-foreground/60 p-2 bg-sidebar-background rounded-md text-center",
                  children: "No text entries yet. Add your first entry above.",
                }),
            (0, a.jsx)(ei, {
              isOpen: p,
              onOpenChange: g,
              material: e,
              subjects: t,
              updateMaterial: n,
            }),
            (0, a.jsx)(ed, {
              isOpen: b,
              onOpenChange: j,
              materialId: e.id,
              textEntry: v,
              updateTextEntry: c,
            }),
          ],
        });
      }
      function eo({ isOpen: e, onOpenChange: t, subjects: s, addMaterial: r }) {
        let [n, l] = (0, d.useState)(""),
          [o, c] = (0, d.useState)(""),
          [u, m] = (0, d.useState)(""),
          [x, h] = (0, d.useState)(!1),
          f = async () => {
            if (!n.trim())
              return void M.oR.error("Title required", {
                description:
                  "Please provide a title for your learning material.",
              });
            if (!u)
              return void M.oR.error("Subject required", {
                description: "Please select a subject for your material.",
              });
            try {
              h(!0),
                await r(n, o, u),
                l(""),
                c(""),
                m(""),
                t(!1),
                M.oR.success("Material added", {
                  description:
                    "Your learning material has been added successfully.",
                });
            } catch {
            } finally {
              h(!1);
            }
          };
        return (0, a.jsx)(Q, {
          open: e,
          onOpenChange: t,
          children: (0, a.jsxs)(T, {
            children: [
              (0, a.jsx)(I, {
                children: (0, a.jsx)(P, { children: "Add Learning Material" }),
              }),
              (0, a.jsxs)("div", {
                className: "grid gap-4 py-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "title",
                        className: "text-sm font-medium",
                        children: "Title",
                      }),
                      (0, a.jsx)(D, {
                        id: "title",
                        placeholder: "e.g., Algebra Basics",
                        value: n,
                        onChange: (e) => l(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "description",
                        className: "text-sm font-medium",
                        children: "Description",
                      }),
                      (0, a.jsx)(D, {
                        id: "description",
                        placeholder: "Brief description of the material",
                        value: o,
                        onChange: (e) => c(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "subject",
                        className: "text-sm font-medium",
                        children: "Subject",
                      }),
                      s.length > 0
                        ? (0, a.jsxs)(G, {
                            value: u,
                            onValueChange: m,
                            children: [
                              (0, a.jsx)(ee, {
                                children: (0, a.jsx)(X, {
                                  placeholder: "Select a subject",
                                }),
                              }),
                              (0, a.jsx)(et, {
                                children: s.map((e) =>
                                  (0, a.jsx)(es, { value: e, children: e }, e)
                                ),
                              }),
                            ],
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "text-sm text-amber-600 p-2 bg-amber-50 rounded-md",
                            children:
                              "Please add a subject first before creating a material.",
                          }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => t(!1),
                    disabled: x,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: f,
                    disabled: x || 0 === s.length,
                    children: x
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(k.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Adding...",
                          ],
                        })
                      : "Add Material",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ec({
        isOpen: e,
        onOpenChange: t,
        materialId: s,
        addTextEntryToMaterial: r,
      }) {
        let [n, l] = (0, d.useState)(""),
          [o, c] = (0, d.useState)(""),
          [u, m] = (0, d.useState)(!1),
          x = async () => {
            if (s) {
              if (!n.trim())
                return void M.oR.error("Title required", {
                  description: "Please provide a title for your text entry.",
                });
              if (!o.trim())
                return void M.oR.error("Content required", {
                  description:
                    "Please provide some content for your text entry.",
                });
              try {
                m(!0),
                  await r(s, n, o),
                  l(""),
                  c(""),
                  t(!1),
                  M.oR.success("Text entry added", {
                    description:
                      "Your text entry has been added to the material.",
                  });
              } catch {
              } finally {
                m(!1);
              }
            }
          };
        return (0, a.jsx)(Q, {
          open: e,
          onOpenChange: t,
          children: (0, a.jsxs)(T, {
            children: [
              (0, a.jsx)(I, {
                children: (0, a.jsx)(P, { children: "Add Text Entry" }),
              }),
              (0, a.jsxs)("div", {
                className: "grid gap-4 py-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "entry-title",
                        className: "text-sm font-medium",
                        children: "Entry Title",
                      }),
                      (0, a.jsx)(D, {
                        id: "entry-title",
                        placeholder: "e.g., Key Concepts",
                        value: n,
                        onChange: (e) => l(e.target.value),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "entry-content",
                        className: "text-sm font-medium",
                        children: "Content",
                      }),
                      (0, a.jsx)(en, {
                        id: "entry-content",
                        placeholder: "Enter your text content here...",
                        className: "h-40",
                        value: o,
                        onChange: (e) => c(e.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => t(!1),
                    disabled: u,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: x,
                    disabled: u,
                    children: u
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(k.A, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Adding...",
                          ],
                        })
                      : "Add Entry",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var eu = s(30760),
        em = s(42773);
      function ex({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "card",
          className: (0, u.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            e
          ),
          ...t,
        });
      }
      function eh({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "card-header",
          className: (0, u.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            e
          ),
          ...t,
        });
      }
      function ef({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "card-title",
          className: (0, u.cn)("leading-none font-semibold", e),
          ...t,
        });
      }
      function ep({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "card-description",
          className: (0, u.cn)("text-muted-foreground text-sm", e),
          ...t,
        });
      }
      function eg({ className: e, ...t }) {
        return (0, a.jsx)("div", {
          "data-slot": "card-content",
          className: (0, u.cn)("px-6", e),
          ...t,
        });
      }
      function eb({ onLogin: e }) {
        return (0, a.jsxs)(ex, {
          className: "border-amber-200 bg-amber-50",
          children: [
            (0, a.jsxs)(eh, {
              className: "pb-2",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(eu.A, {
                      className: "h-5 w-5 text-amber-500 mr-2",
                    }),
                    (0, a.jsx)(ef, {
                      className: "text-amber-700 text-base",
                      children: "Authentication Required",
                    }),
                  ],
                }),
                (0, a.jsx)(ep, {
                  className: "text-amber-600",
                  children: "Please sign in to access learning materials",
                }),
              ],
            }),
            (0, a.jsxs)(eg, {
              children: [
                (0, a.jsx)("p", {
                  className: "text-sm text-amber-600 mb-4",
                  children:
                    "You need to be signed in to manage your learning materials",
                }),
                (0, a.jsx)("div", {
                  className: "flex gap-2",
                  children: (0, a.jsxs)(i.$, {
                    variant: "outline",
                    size: "sm",
                    className:
                      "border-amber-300 text-amber-700 hover:bg-amber-100",
                    onClick: e,
                    children: [
                      (0, a.jsx)(em.A, { className: "h-4 w-4 mr-2" }),
                      "Sign In",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function ej() {
        let {
            materials: e,
            activeMaterial: t,
            subjects: s,
            isLoading: r,
            error: n,
            addSubject: l,
            removeSubject: o,
            addMaterial: c,
            updateMaterial: h,
            addTextEntryToMaterial: f,
            updateTextEntry: A,
            toggleMaterial: _,
            removeMaterial: E,
            removeTextEntryFromMaterial: q,
          } = (0, C.Q)(),
          [Q, R] = (0, d.useState)(!1),
          [$, F] = (0, d.useState)(!1),
          [T, I] = (0, d.useState)(null),
          [L, P] = (0, d.useState)(!1),
          [D, M] = (0, d.useState)(null),
          K =
            n &&
            (n.message.includes("fetch") ||
              n.message.includes("network") ||
              n.message.includes("Failed to fetch")),
          J =
            n &&
            (n.message.includes("Unauthorized") ||
              n.message.includes("Authentication required") ||
              n.message.includes("401")),
          U = e.find((e) => e.isActive),
          V = t || U,
          W = D ? e.filter((e) => e.subject === D) : e,
          B = s.length > 0;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(m, {
              open: Q,
              onOpenChange: R,
              children: [
                (0, a.jsx)(x, {
                  asChild: !0,
                  children: (0, a.jsxs)(i.$, {
                    variant: "outline",
                    size: "sm",
                    className: (0, u.cn)(
                      "flex items-center gap-1 mr-2",
                      V && "bg-primary/10 text-primary border-primary/20"
                    ),
                    children: [
                      (0, a.jsx)(j.A, { size: 16 }),
                      (0, a.jsx)("span", {
                        className: "hidden sm:inline",
                        children: "Materials",
                      }),
                      V &&
                        (0, a.jsx)("span", {
                          className:
                            "flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary ml-1",
                          children: "1",
                        }),
                      (0, a.jsx)(v.A, { size: 14 }),
                    ],
                  }),
                }),
                (0, a.jsxs)(p, {
                  side: "left",
                  className:
                    "w-[300px] sm:w-[400px] bg-sidebar text-sidebar-foreground",
                  children: [
                    (0, a.jsx)(g, {
                      children: (0, a.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, a.jsxs)(b, {
                          className:
                            "flex items-center text-sidebar-foreground",
                          children: [
                            (0, a.jsx)(y.A, { className: "mr-2", size: 20 }),
                            "Learning Materials",
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "mt-6 flex flex-col gap-4 px-4",
                      children: [
                        K
                          ? (0, a.jsx)(a.Fragment, { children: " " })
                          : J
                            ? (0, a.jsx)(eb, {
                                onLogin: () => {
                                  window.location.href = "/";
                                },
                              })
                            : !n || K || J
                              ? null
                              : (0, a.jsxs)(z, {
                                  variant: "destructive",
                                  className: "mb-4",
                                  children: [
                                    (0, a.jsx)(N.A, { className: "h-4 w-4" }),
                                    (0, a.jsx)(S, {
                                      children:
                                        "Unauthorized. Please log in first." ===
                                        n.message
                                          ? "Please log in to access your materials."
                                          : "There was a problem loading your data. Try refreshing.",
                                    }),
                                  ],
                                }),
                        (0, a.jsx)(O, {
                          subjects: s,
                          selectedSubjectFilter: D,
                          setSelectedSubjectFilter: M,
                          addSubject: l,
                          removeSubject: o,
                          isLoading: r,
                          isConnectionError: !!K,
                        }),
                        (0, a.jsxs)(i.$, {
                          className:
                            "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                          onClick: () => F(!0),
                          disabled: !B || !!K,
                          children: [
                            (0, a.jsx)(w.A, { size: 16, className: "mr-2" }),
                            "Add New Material",
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "h-px bg-sidebar-border",
                        }),
                        r
                          ? (0, a.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center py-8",
                              children: [
                                (0, a.jsx)(k.A, {
                                  className:
                                    "h-8 w-8 animate-spin mb-2 text-foreground",
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-sm text-foreground/60",
                                  children: "Loading materials...",
                                }),
                              ],
                            })
                          : 0 === W.length
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center py-8 text-center text-sidebar-foreground/60",
                                children: [
                                  (0, a.jsx)(y.A, {
                                    size: 40,
                                    strokeWidth: 1,
                                    className: "mb-2 opacity-40",
                                  }),
                                  B
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsxs)("p", {
                                            children: [
                                              "No learning materials",
                                              " ",
                                              D ? `for ${D}` : "",
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "text-xs mt-1",
                                            children:
                                              "Add your first material to get started",
                                          }),
                                        ],
                                      })
                                    : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("p", {
                                            children:
                                              "Start by adding a subject first",
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "text-xs mt-1",
                                            children:
                                              "You need to create a subject before adding materials",
                                          }),
                                        ],
                                      }),
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: "space-y-4",
                                children: W.map((e) =>
                                  (0, a.jsx)(
                                    el,
                                    {
                                      material: e,
                                      subjects: s,
                                      toggleMaterial: _,
                                      removeMaterial: E,
                                      updateMaterial: h,
                                      onAddTextEntry: () => {
                                        I(e.id), P(!0);
                                      },
                                      removeTextEntry: (t) => q(e.id, t),
                                      updateTextEntry: A,
                                    },
                                    e.id
                                  )
                                ),
                              }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(eo, {
              isOpen: $,
              onOpenChange: F,
              subjects: s,
              addMaterial: c,
            }),
            (0, a.jsx)(ec, {
              isOpen: L,
              onOpenChange: P,
              materialId: T,
              addTextEntryToMaterial: f,
            }),
          ],
        });
      }
      var ev = s(92365),
        ey = s(97490),
        eN = s(48961),
        ew = s(7503);
      function ek({ ...e }) {
        return (0, a.jsx)(ew.bL, { "data-slot": "dropdown-menu", ...e });
      }
      function eC({ ...e }) {
        return (0, a.jsx)(ew.l9, {
          "data-slot": "dropdown-menu-trigger",
          ...e,
        });
      }
      function eA({ className: e, sideOffset: t = 4, ...s }) {
        return (0, a.jsx)(ew.ZL, {
          children: (0, a.jsx)(ew.UC, {
            "data-slot": "dropdown-menu-content",
            sideOffset: t,
            className: (0, u.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
              e
            ),
            ...s,
          }),
        });
      }
      function ez({ className: e, inset: t, variant: s = "default", ...r }) {
        return (0, a.jsx)(ew.q7, {
          "data-slot": "dropdown-menu-item",
          "data-inset": t,
          "data-variant": s,
          className: (0, u.cn)(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            e
          ),
          ...r,
        });
      }
      function eS() {
        let { setTheme: e } = (0, eN.D)();
        return (0, a.jsxs)(ek, {
          children: [
            (0, a.jsx)(eC, {
              asChild: !0,
              children: (0, a.jsxs)(i.$, {
                variant: "outline",
                size: "icon",
                children: [
                  (0, a.jsx)(ev.A, {
                    className:
                      "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                  }),
                  (0, a.jsx)(ey.A, {
                    className:
                      "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                  }),
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: "Toggle theme",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(eA, {
              align: "end",
              children: [
                (0, a.jsx)(ez, {
                  onClick: () => e("light"),
                  children: "Light",
                }),
                (0, a.jsx)(ez, { onClick: () => e("dark"), children: "Dark" }),
                (0, a.jsx)(ez, {
                  onClick: () => e("system"),
                  children: "System",
                }),
              ],
            }),
          ],
        });
      }
      var e_ = s(2984),
        eE = s(49933);
      function eq() {
        let e = (0, e_.useRouter)(),
          { data: t } = (0, r.wV)();
        return (
          t || e.push("/login"),
          (0, a.jsxs)("nav", {
            className: "border-b px-6 py-3 flex items-center justify-between",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, a.jsx)("h1", {
                    className: "font-semibold",
                    children: "BrainBytes",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsxs)(i.$, {
                        variant: "ghost",
                        size: "sm",
                        className:
                          "text-muted-foreground hover:text-foreground cursor-pointer",
                        children: [
                          (0, a.jsx)(eE.default, {
                            src:
                              t?.user.image ??
                              "https://avatar.vercel.sh/" + t?.user.email,
                            alt: t?.user.name + "'s avatar",
                            width: 24,
                            height: 24,
                            className: "h-6 w-6 rounded-full",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: t?.user.name,
                          }),
                        ],
                      }),
                      (0, a.jsx)(ej, {}),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)(eS, {}),
                  (0, a.jsxs)(i.$, {
                    variant: "ghost",
                    size: "sm",
                    onClick: async () => {
                      await (0, r.CI)(), e.push("/");
                    },
                    className: "text-muted-foreground hover:text-foreground",
                    children: [
                      (0, a.jsx)(n.A, { className: "h-4 w-4 mr-2" }),
                      "Sign out",
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var eQ = s(98398),
        eR = s(82e3);
      function e$({ className: e, children: t, ...s }) {
        return (0, a.jsxs)(eR.bL, {
          "data-slot": "scroll-area",
          className: (0, u.cn)("relative", e),
          ...s,
          children: [
            (0, a.jsx)(eR.LM, {
              "data-slot": "scroll-area-viewport",
              className:
                "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
              children: t,
            }),
            (0, a.jsx)(eF, {}),
            (0, a.jsx)(eR.OK, {}),
          ],
        });
      }
      function eF({ className: e, orientation: t = "vertical", ...s }) {
        return (0, a.jsx)(eR.VM, {
          "data-slot": "scroll-area-scrollbar",
          orientation: t,
          className: (0, u.cn)(
            "flex touch-none p-px transition-colors select-none",
            "vertical" === t && "h-full w-2.5 border-l border-l-transparent",
            "horizontal" === t &&
              "h-2.5 flex-col border-t border-t-transparent",
            e
          ),
          ...s,
          children: (0, a.jsx)(eR.lr, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full",
          }),
        });
      }
      var eT = s(62924);
      function eI() {
        let e = (0, e_.useRouter)(),
          {
            data: t,
            isLoading: s,
            refetch: r,
          } = (0, eT.useQuery)({
            queryKey: ["threads"],
            queryFn: async () => {
              let e = await fetch((0, u.j)("/api/threads"), {
                credentials: "include",
              });
              return await e.json();
            },
          }),
          n = (0, eT.useMutation)({
            mutationFn: async (e) => {
              let t = await fetch((0, u.j)(`/api/threads/${e}`), {
                method: "DELETE",
                credentials: "include",
              });
              return await t.json();
            },
            onSuccess: (t, s) => {
              r(), s === o && e.push("/chat");
            },
          }),
          d = t?.threads,
          { threadId: l } = (0, e_.useParams)(),
          o = l,
          c = (t) => {
            e.push(`/chat/${t}`);
          };
        return (0, a.jsxs)("div", {
          className: "flex flex-col h-full bg-background border-r w-full",
          children: [
            (0, a.jsx)("div", {
              className: "p-4",
              children: (0, a.jsxs)(i.$, {
                onClick: () => e.push("/chat"),
                className:
                  "w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium",
                size: "default",
                children: [
                  (0, a.jsx)(w.A, { className: "h-4 w-4" }),
                  "New Chat",
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "px-2 py-2",
              children: (0, a.jsx)("h2", {
                className:
                  "px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                children: "Recent Chats",
              }),
            }),
            (0, a.jsx)(e$, {
              className: "flex-1 px-2",
              children: s
                ? (0, a.jsx)("div", {
                    className: "flex justify-center items-center h-20",
                    children: (0, a.jsx)(k.A, {
                      className: "h-5 w-5 animate-spin text-muted-foreground",
                    }),
                  })
                : 0 === d.length
                  ? (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center h-32 text-center p-4",
                      children: [
                        (0, a.jsx)(eQ.A, {
                          className:
                            "h-8 w-8 text-muted-foreground mb-2 opacity-70",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-sm text-muted-foreground",
                          children: "No chats yet",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "Start a new chat to begin",
                        }),
                      ],
                    })
                  : (0, a.jsx)("div", {
                      className: "space-y-1",
                      children: d.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: `cursor-pointer transition-colors hover:bg-accent/50 border-b border-border rounded-lg ${e.id === o ? "bg-accent border-primary border" : "bg-background"}`,
                            onClick: () => c(e.id),
                            children: (0, a.jsxs)("div", {
                              className:
                                "p-2 flex flex-row items-center justify-between space-y-0",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "space-y-1 overflow-hidden",
                                  children: (0, a.jsx)("div", {
                                    children: e.title,
                                  }),
                                }),
                                (0, a.jsx)(i.$, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "h-7 w-7 text-muted-foreground hover:text-destructive",
                                  onClick: (t) => {
                                    t.stopPropagation(), n.mutate(e.id);
                                  },
                                  children: (0, a.jsx)(q.A, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
            }),
          ],
        });
      }
      function eL({ children: e }) {
        let { data: t } = (0, r.wV)();
        return (
          t || (0, e_.redirect)("/login"),
          (0, a.jsxs)("div", {
            className: "flex flex-col h-screen",
            children: [
              (0, a.jsx)(eq, {}),
              (0, a.jsxs)("main", {
                className: "flex flex-row flex-1 overflow-hidden",
                children: [
                  (0, a.jsx)("div", {
                    className: "min-w-[320px] max-w-[320px] flex",
                    children: (0, a.jsx)(eI, {}),
                  }),
                  (0, a.jsx)("div", {
                    className: "flex-1 overflow-hidden",
                    children: e,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    13590: (e, t, s) => {
      "use strict";
      s.d(t, { H: () => l, i: () => o });
      var a = s(1081),
        r = s(17463),
        i = s(27819),
        n = s(11618),
        d = s(19330);
      let l = (0, a.cJ)("thread", {
          id: (0, r.uR)("id").defaultRandom().primaryKey(),
          title: (0, i.Qq)("title").notNull(),
          userId: (0, i.Qq)("user_id")
            .notNull()
            .references(() => d.kQ.id, { onDelete: "cascade" }),
          materialId: (0, i.Qq)("material_id"),
          createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
          updatedAt: (0, n.vE)("updated_at").defaultNow().notNull(),
        }),
        o = (0, a.cJ)("message", {
          id: (0, r.uR)("id").defaultRandom().primaryKey(),
          content: (0, i.Qq)("content").notNull(),
          role: (0, i.Qq)("role").notNull(),
          threadId: (0, r.uR)("thread_id")
            .notNull()
            .references(() => l.id, { onDelete: "cascade" }),
          createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
        });
    },
    18945: (e, t, s) => {
      "use strict";
      s.d(t, { ChatForm: () => N });
      var a = s(13486),
        r = s(15917),
        i = s.n(r),
        n = s(26518),
        d = s(11486),
        l = s(8450),
        o = s(74941),
        c = s(60159),
        u = s.n(c),
        m = s(3142);
      function x({ delayDuration: e = 0, ...t }) {
        return (0, a.jsx)(m.Kq, {
          "data-slot": "tooltip-provider",
          delayDuration: e,
          ...t,
        });
      }
      function h({ ...e }) {
        return (0, a.jsx)(x, {
          children: (0, a.jsx)(m.bL, { "data-slot": "tooltip", ...e }),
        });
      }
      function f({ ...e }) {
        return (0, a.jsx)(m.l9, { "data-slot": "tooltip-trigger", ...e });
      }
      function p({ className: e, sideOffset: t = 0, children: s, ...r }) {
        return (0, a.jsx)(m.ZL, {
          children: (0, a.jsxs)(m.UC, {
            "data-slot": "tooltip-content",
            sideOffset: t,
            className: (0, n.cn)(
              "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
              e
            ),
            ...r,
            children: [
              s,
              (0, a.jsx)(m.i3, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              }),
            ],
          }),
        });
      }
      function g({ className: e, value: t, onChange: s, ...r }) {
        let i = (0, c.useRef)(null),
          d = () => {
            let e = i.current;
            e &&
              ((e.style.height = "auto"),
              (e.style.height = `${e.scrollHeight}px`));
          };
        return (0, a.jsx)("textarea", {
          ...r,
          value: t,
          ref: i,
          rows: 1,
          onChange: (e) => {
            s(e.target.value), d();
          },
          className: (0, n.cn)("resize-none min-h-4 max-h-80", e),
        });
      }
      var b = s(8981),
        j = s(2984);
      async function v({ id: e, messages: t }) {
        let s = await fetch((0, n.j)(`/api/chat/${e}`), {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ messages: t }),
        });
        if (!s.ok) throw Error("Failed to save chat");
        return await s.json();
      }
      var y = s(62924);
      function N({
        className: e,
        initialMessages: t,
        initialChat: s,
        threadId: r,
        ...m
      }) {
        let x = (0, y.useQueryClient)(),
          N = (0, j.useRouter)();
        (0, j.useSearchParams)();
        let { data: w } = (0, b.wV)();
        (0, c.useRef)(!1);
        let {
            messages: k,
            input: C,
            setInput: A,
            append: z,
            stop: S,
          } = (0, d.Y_)({
            id: r,
            api: (0, n.j)("/api/chat"),
            credentials: "include",
            initialInput: s,
            initialMessages: t,
            sendExtraMessageFields: !0,
            onFinish: async (e) => {
              s && (await x.invalidateQueries({ queryKey: ["threads"] })),
                await v({ id: r ?? "", messages: [...k, e] });
            },
          }),
          _ = (0, c.useRef)(null),
          E = async (e) => {
            if ((e.preventDefault(), 0 === k.length)) {
              let { threadId: e } = await fetch((0, n.j)("/api/new-chat"), {
                method: "POST",
                credentials: "include",
              }).then((e) => e.json());
              return A(""), N.push(`/chat/${e}?initialChat=${C}`);
            }
            S(), z({ content: C, role: "user" }), A("");
          },
          q = (0, a.jsxs)("header", {
            className:
              "my-auto flex w-full flex-col gap-5 text-center py-10 animate-fade-up",
            children: [
              (0, a.jsxs)("h1", {
                className: "text-2xl font-semibold leading-none tracking-tight",
                children: ["Hello, ", w?.user.name],
              }),
              (0, a.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children:
                  "I'm BrainBytes AI, a chatbot that can help you with your questions.",
              }),
            ],
          }),
          Q = (0, a.jsxs)("div", {
            className: "flex h-full min-h-full flex-col gap-4 pb-6",
            children: [
              k.map((e, t) => {
                let s = e.content.split("\n");
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
                      (0, a.jsx)(i(), {
                        id: "838698bf02092e27",
                        children:
                          "div[data-role].jsx-838698bf02092e27 code.jsx-838698bf02092e27{background:var(--code-bg);padding:.1em .3em;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-family:monospace;font-size:.9em}div[data-role].jsx-838698bf02092e27 em.jsx-838698bf02092e27{font-style:italic}div[data-role].jsx-838698bf02092e27 strong.jsx-838698bf02092e27{font-weight:bold}",
                      }),
                      s.map((e, t) => {
                        var r;
                        return (0, a.jsxs)(
                          u().Fragment,
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
                              t < s.length - 1 &&
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
              (0, a.jsx)("div", { ref: _ }),
            ],
          });
        return (0, a.jsxs)("main", {
          className: (0, n.cn)(
            "ring-none mx-auto flex h-full w-full max-w-[35rem] flex-col justify-between border-none pt-4 relative",
            e
          ),
          ...m,
          children: [
            (0, a.jsx)("div", {
              className: "flex-1 overflow-y-auto px-6 pb-4",
              children: k.length ? Q : q,
            }),
            (0, a.jsx)("div", {
              className: "px-6 py-2 sticky bottom-0 bg-background",
              children: (0, a.jsxs)("form", {
                onSubmit: E,
                className:
                  "border-input bg-background focus-within:ring-ring/10 relative flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:border-primary",
                children: [
                  (0, a.jsx)(g, {
                    onKeyDown: (e) => {
                      "Enter" !== e.key ||
                        e.shiftKey ||
                        (e.preventDefault(), E(e));
                    },
                    onChange: (e) => A(e),
                    value: C,
                    placeholder: "Enter a message",
                    className:
                      "placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none",
                    autoFocus: !0,
                  }),
                  (0, a.jsxs)(h, {
                    children: [
                      (0, a.jsx)(f, {
                        asChild: !0,
                        children: (0, a.jsx)(o.$, {
                          variant: "ghost",
                          size: "sm",
                          className:
                            "absolute bottom-1 right-1 size-6 rounded-full",
                          children: (0, a.jsx)(l.A, { size: 16 }),
                        }),
                      }),
                      (0, a.jsx)(p, { sideOffset: 12, children: "Submit" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    19330: (e, t, s) => {
      "use strict";
      s.d(t, { Ot: () => c, ct: () => o, dZ: () => l, kQ: () => d });
      var a = s(1081),
        r = s(27819),
        i = s(82658),
        n = s(11618);
      let d = (0, a.cJ)("user", {
          id: (0, r.Qq)("id").primaryKey(),
          name: (0, r.Qq)("name").notNull(),
          email: (0, r.Qq)("email").notNull().unique(),
          emailVerified: (0, i.zM)("email_verified").notNull(),
          image: (0, r.Qq)("image"),
          createdAt: (0, n.vE)("created_at").notNull(),
          updatedAt: (0, n.vE)("updated_at").notNull(),
        }),
        l = (0, a.cJ)("session", {
          id: (0, r.Qq)("id").primaryKey(),
          expiresAt: (0, n.vE)("expires_at").notNull(),
          token: (0, r.Qq)("token").notNull().unique(),
          createdAt: (0, n.vE)("created_at").notNull(),
          updatedAt: (0, n.vE)("updated_at").notNull(),
          ipAddress: (0, r.Qq)("ip_address"),
          userAgent: (0, r.Qq)("user_agent"),
          userId: (0, r.Qq)("user_id")
            .notNull()
            .references(() => d.id, { onDelete: "cascade" }),
        }),
        o = (0, a.cJ)("account", {
          id: (0, r.Qq)("id").primaryKey(),
          accountId: (0, r.Qq)("account_id").notNull(),
          providerId: (0, r.Qq)("provider_id").notNull(),
          userId: (0, r.Qq)("user_id")
            .notNull()
            .references(() => d.id, { onDelete: "cascade" }),
          accessToken: (0, r.Qq)("access_token"),
          refreshToken: (0, r.Qq)("refresh_token"),
          idToken: (0, r.Qq)("id_token"),
          accessTokenExpiresAt: (0, n.vE)("access_token_expires_at"),
          refreshTokenExpiresAt: (0, n.vE)("refresh_token_expires_at"),
          scope: (0, r.Qq)("scope"),
          password: (0, r.Qq)("password"),
          createdAt: (0, n.vE)("created_at").notNull(),
          updatedAt: (0, n.vE)("updated_at").notNull(),
        }),
        c = (0, a.cJ)("verification", {
          id: (0, r.Qq)("id").primaryKey(),
          identifier: (0, r.Qq)("identifier").notNull(),
          value: (0, r.Qq)("value").notNull(),
          expiresAt: (0, n.vE)("expires_at").notNull(),
          createdAt: (0, n.vE)("created_at"),
          updatedAt: (0, n.vE)("updated_at"),
        });
    },
    20648: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => l });
      var a = s(38828),
        r = s(87966),
        i = s(5991),
        n = s(65208),
        d = s(42543);
      async function l({ children: e }) {
        if (!(await i.j.api.getSession({ headers: await (0, n.b3)() }))) {
          let e = (await (0, n.b3)()).get("x-pathname") || "/chat";
          (0, d.redirect)(`/login?callbackUrl=${encodeURIComponent(e)}`);
        }
        return (0, a.jsx)(r.default, { children: e });
      }
    },
    26518: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => i, j: () => n });
      var a = s(4627),
        r = s(55855);
      function i(...e) {
        return (0, r.QP)((0, a.$)(e));
      }
      function n(e) {
        return `${e}`;
      }
    },
    32385: (e, t, s) => {
      "use strict";
      s.d(t, { db: () => n });
      var a = s(28341),
        r = s(69290),
        i = s(42918);
      let n = (0, a.fd)({
        connection: { connectionString: i.FW.DatabaseUrl.value },
        schema: r,
      });
    },
    36295: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 87966));
    },
    38072: (e, t, s) => {
      "use strict";
      s.d(t, {
        DT: () => c,
        LJ: () => u,
        RW: () => f,
        c6: () => m,
        qp: () => x,
        yo: () => h,
      });
      var a = s(29911),
        r = s(1081),
        i = s(17463),
        n = s(27819),
        d = s(82658),
        l = s(11618),
        o = s(19330);
      let c = (0, r.cJ)("materials", {
          id: (0, i.uR)("id").primaryKey().defaultRandom(),
          title: (0, n.Qq)("title").notNull(),
          description: (0, n.Qq)("description").notNull(),
          subject: (0, n.Qq)("subject").notNull(),
          isActive: (0, d.zM)("is_active").default(!1),
          dateAdded: (0, l.vE)("date_added").defaultNow(),
          userId: (0, n.Qq)("user_id")
            .notNull()
            .references(() => o.kQ.id, { onDelete: "cascade" }),
        }),
        u = (0, r.cJ)("material_text_entries", {
          id: (0, i.uR)("id").primaryKey().defaultRandom(),
          materialId: (0, i.uR)("material_id")
            .references(() => c.id, { onDelete: "cascade" })
            .notNull(),
          title: (0, n.Qq)("title").notNull(),
          content: (0, n.Qq)("content").notNull(),
          dateAdded: (0, l.vE)("date_added").defaultNow(),
        }),
        m = (0, a.K1)(c, ({ many: e, one: t }) => ({
          textEntries: e(u),
          user: t(o.kQ, { fields: [c.userId], references: [o.kQ.id] }),
        })),
        x = (0, a.K1)(u, ({ one: e }) => ({
          material: e(c, { fields: [u.materialId], references: [c.id] }),
        })),
        h = (0, r.cJ)("subjects", {
          id: (0, i.uR)("id").primaryKey().defaultRandom(),
          name: (0, n.Qq)("name").notNull(),
          userId: (0, n.Qq)("user_id")
            .notNull()
            .references(() => o.kQ.id, { onDelete: "cascade" }),
        }),
        f = (0, a.K1)(h, ({ one: e }) => ({
          user: e(o.kQ, { fields: [h.userId], references: [o.kQ.id] }),
        }));
    },
    66559: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 6836));
    },
    69290: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          account: () => a.ct,
          materialTextEntries: () => r.LJ,
          materialTextEntriesRelations: () => r.qp,
          materials: () => r.DT,
          materialsRelations: () => r.c6,
          message: () => i.i,
          session: () => a.dZ,
          subjects: () => r.yo,
          subjectsRelations: () => r.RW,
          thread: () => i.H,
          user: () => a.kQ,
          verification: () => a.Ot,
        });
      var a = s(19330),
        r = s(38072),
        i = s(13590);
    },
    74941: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => l });
      var a = s(13486);
      s(60159);
      var r = s(90691),
        i = s(76353),
        n = s(26518);
      let d = (0, i.F)(
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
      function l({ className: e, variant: t, size: s, asChild: i = !1, ...l }) {
        let o = i ? r.DX : "button";
        return (0, a.jsx)(o, {
          "data-slot": "button",
          className: (0, n.cn)(d({ variant: t, size: s, className: e })),
          ...l,
        });
      }
    },
    87966: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => a });
      let a = (0, s(33952).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of \"/home/aiz/dev/redentor/brainbytes/packages/app/src/layouts/chat-layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        "/home/aiz/dev/redentor/brainbytes/packages/app/src/layouts/chat-layout.tsx",
        "default"
      );
    },
  });
