(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [538],
  {
    1223: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => eP });
      var a = s(4568),
        r = s(1107),
        i = s(7227),
        n = s(4244),
        l = s(7620),
        d = s(5173),
        o = s(2463),
        c = s(3928);
      function u(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.bL, { "data-slot": "sheet", ...t });
      }
      function x(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.l9, { "data-slot": "sheet-trigger", ...t });
      }
      function m(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.ZL, { "data-slot": "sheet-portal", ...t });
      }
      function h(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(d.hJ, {
          "data-slot": "sheet-overlay",
          className: (0, c.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...s,
        });
      }
      function g(e) {
        let { className: t, children: s, side: r = "right", ...i } = e;
        return (0, a.jsxs)(m, {
          children: [
            (0, a.jsx)(h, {}),
            (0, a.jsxs)(d.UC, {
              "data-slot": "sheet-content",
              className: (0, c.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                "right" === r &&
                  "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                "left" === r &&
                  "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                "top" === r &&
                  "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                "bottom" === r &&
                  "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                t
              ),
              ...i,
              children: [
                s,
                (0, a.jsxs)(d.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                  children: [
                    (0, a.jsx)(o.A, { className: "size-4" }),
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
      function f(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "sheet-header",
          className: (0, c.cn)("flex flex-col gap-1.5 p-4", t),
          ...s,
        });
      }
      function p(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(d.hE, {
          "data-slot": "sheet-title",
          className: (0, c.cn)("text-foreground font-semibold", t),
          ...s,
        });
      }
      var j = s(5367),
        b = s(7911),
        v = s(3643),
        y = s(9966),
        N = s(4529),
        w = s(9369),
        k = s(2848);
      let C = (0, s(615).F)(
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
      function z(e) {
        let { className: t, variant: s, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "alert",
          role: "alert",
          className: (0, c.cn)(C({ variant: s }), t),
          ...r,
        });
      }
      function A(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "alert-description",
          className: (0, c.cn)(
            "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
            t
          ),
          ...s,
        });
      }
      var S = s(5132),
        E = s(8191),
        F = s(8262);
      function T(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.bL, { "data-slot": "dialog", ...t });
      }
      function _(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.l9, { "data-slot": "dialog-trigger", ...t });
      }
      function $(e) {
        let { ...t } = e;
        return (0, a.jsx)(d.ZL, { "data-slot": "dialog-portal", ...t });
      }
      function L(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(d.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, c.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...s,
        });
      }
      function R(e) {
        let { className: t, children: s, ...r } = e;
        return (0, a.jsxs)($, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(L, {}),
            (0, a.jsxs)(d.UC, {
              "data-slot": "dialog-content",
              className: (0, c.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                t
              ),
              ...r,
              children: [
                s,
                (0, a.jsxs)(d.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: [
                    (0, a.jsx)(o.A, {}),
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
      function M(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, c.cn)(
            "flex flex-col gap-2 text-center sm:text-left",
            t
          ),
          ...s,
        });
      }
      function P(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "dialog-footer",
          className: (0, c.cn)(
            "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
            t
          ),
          ...s,
        });
      }
      function O(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(d.hE, {
          "data-slot": "dialog-title",
          className: (0, c.cn)("text-lg leading-none font-semibold", t),
          ...s,
        });
      }
      function q(e) {
        let { className: t, type: s, ...r } = e;
        return (0, a.jsx)("input", {
          type: s,
          "data-slot": "input",
          className: (0, c.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t
          ),
          ...r,
        });
      }
      var D = s(1874);
      function U(e) {
        let {
            subjects: t,
            selectedSubjectFilter: s,
            setSelectedSubjectFilter: r,
            addSubject: n,
            removeSubject: d,
            isLoading: o,
            isConnectionError: u,
          } = e,
          [x, m] = l.useState(!1),
          [h, g] = l.useState(""),
          [f, p] = l.useState(!1),
          j = async () => {
            if (!h.trim())
              return void D.oR.error("Subject required", {
                description: "Please provide a name for your subject.",
              });
            try {
              p(!0),
                await n(h),
                g(""),
                m(!1),
                D.oR.success("Subject added", {
                  description: "Your subject has been added successfully.",
                });
            } catch (e) {
            } finally {
              p(!1);
            }
          },
          b = async (e) => {
            try {
              await d(e),
                D.oR.success("Subject removed", {
                  description: "The subject has been removed.",
                });
            } catch (e) {}
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)(S.A, { size: 16 }),
                    (0, a.jsx)("span", {
                      className: "text-sm font-medium",
                      children: "Subjects",
                    }),
                  ],
                }),
                (0, a.jsxs)(T, {
                  open: x,
                  onOpenChange: m,
                  children: [
                    (0, a.jsx)(_, {
                      asChild: !0,
                      children: (0, a.jsxs)(i.$, {
                        variant: "default",
                        size: "sm",
                        disabled: !!u,
                        className:
                          "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                        children: [
                          (0, a.jsx)(N.A, { size: 14, className: "mr-1" }),
                          "Add Subject",
                        ],
                      }),
                    }),
                    (0, a.jsxs)(R, {
                      children: [
                        (0, a.jsx)(M, {
                          children: (0, a.jsx)(O, { children: "Add Subject" }),
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
                              (0, a.jsx)(q, {
                                id: "subject",
                                placeholder: "e.g., Computer Science",
                                value: h,
                                onChange: (e) => g(e.target.value),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)(P, {
                          children: [
                            (0, a.jsx)(i.$, {
                              variant: "outline",
                              onClick: () => m(!1),
                              disabled: f,
                              children: "Cancel",
                            }),
                            (0, a.jsx)(i.$, {
                              onClick: j,
                              disabled: f,
                              children: f
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(w.A, {
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
                o
                  ? (0, a.jsxs)("div", {
                      className: "flex items-center justify-center w-full py-2",
                      children: [
                        (0, a.jsx)(w.A, {
                          className: "h-4 w-4 animate-spin mr-2",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-sm",
                          children: "Loading subjects...",
                        }),
                      ],
                    })
                  : t.length > 0
                    ? t.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: (0, c.cn)(
                              "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border",
                              s === e
                                ? "bg-primary text-sidebar-primary-foreground border-sidebar-primary"
                                : "bg-sidebar-background text-sidebar-foreground border-sidebar-border"
                            ),
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => r(s === e ? null : e),
                                className: "flex items-center gap-1",
                                children: [(0, a.jsx)(E.A, { size: 12 }), e],
                              }),
                              (0, a.jsx)("button", {
                                onClick: () => b(e),
                                children: (0, a.jsx)(F.A, { size: 12 }),
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
                s &&
                  (0, a.jsx)("button", {
                    onClick: () => r(null),
                    className:
                      "px-2 py-1 rounded-full text-xs font-medium bg-sidebar-background text-sidebar-foreground border border-border",
                    children: "Clear Filter",
                  }),
              ],
            }),
          ],
        });
      }
      var V = s(9388),
        Y = s(3425),
        B = s(5145);
      function I(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(B.bL, {
          "data-slot": "switch",
          className: (0, c.cn)(
            "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            t
          ),
          ...s,
          children: (0, a.jsx)(B.zi, {
            "data-slot": "switch-thumb",
            className: (0, c.cn)(
              "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
            ),
          }),
        });
      }
      function K(e) {
        let { entry: t, onRemove: s, onEdit: r } = e,
          [n, d] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)(!1),
          u = async () => {
            try {
              c(!0),
                await s(),
                D.oR.success("Entry removed", {
                  description: "Text entry has been removed.",
                });
            } catch (e) {
            } finally {
              c(!1);
            }
          };
        return (0, a.jsxs)("div", {
          className: "bg-background rounded border p-2",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("button", {
                  onClick: () => d(!n),
                  className:
                    "text-sm font-medium hover:text-primary flex-grow text-left",
                  children: t.title,
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "h-5 w-5 hover:text-primary cursor-pointer group",
                      onClick: r,
                      children: (0, a.jsx)(V.A, {
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
                      onClick: u,
                      disabled: o,
                      children: o
                        ? (0, a.jsx)(w.A, {
                            size: 12,
                            className: "animate-spin",
                          })
                        : (0, a.jsx)(F.A, {
                            size: 12,
                            className:
                              "text-muted-foreground hover:text-destructive cursor-pointer group-hover:text-destructive",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            n &&
              (0, a.jsx)("div", {
                className:
                  "mt-2 text-xs text-sidebar-foreground/60 border-t pt-2",
                children: t.content,
              }),
            (0, a.jsx)("div", {
              className: "mt-1 flex justify-end",
              children: (0, a.jsx)("span", {
                className: "text-[10px] text-sidebar-foreground/60",
                children: new Date(t.dateAdded).toLocaleDateString(),
              }),
            }),
          ],
        });
      }
      var Z = s(3709),
        Q = s(4711),
        J = s(4931),
        W = s(6430);
      function H(e) {
        let { ...t } = e;
        return (0, a.jsx)(Z.bL, { "data-slot": "select", ...t });
      }
      function X(e) {
        let { ...t } = e;
        return (0, a.jsx)(Z.WT, { "data-slot": "select-value", ...t });
      }
      function G(e) {
        let { className: t, size: s = "default", children: r, ...i } = e;
        return (0, a.jsxs)(Z.l9, {
          "data-slot": "select-trigger",
          "data-size": s,
          className: (0, c.cn)(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...i,
          children: [
            r,
            (0, a.jsx)(Z.In, {
              asChild: !0,
              children: (0, a.jsx)(Q.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function ee(e) {
        let { className: t, children: s, position: r = "popper", ...i } = e;
        return (0, a.jsx)(Z.ZL, {
          children: (0, a.jsxs)(Z.UC, {
            "data-slot": "select-content",
            className: (0, c.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === r &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              t
            ),
            position: r,
            ...i,
            children: [
              (0, a.jsx)(es, {}),
              (0, a.jsx)(Z.LM, {
                className: (0, c.cn)(
                  "p-1",
                  "popper" === r &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
                ),
                children: s,
              }),
              (0, a.jsx)(ea, {}),
            ],
          }),
        });
      }
      function et(e) {
        let { className: t, children: s, ...r } = e;
        return (0, a.jsxs)(Z.q7, {
          "data-slot": "select-item",
          className: (0, c.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            t
          ),
          ...r,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, a.jsx)(Z.VF, {
                children: (0, a.jsx)(J.A, { className: "size-4" }),
              }),
            }),
            (0, a.jsx)(Z.p4, { children: s }),
          ],
        });
      }
      function es(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(Z.PP, {
          "data-slot": "select-scroll-up-button",
          className: (0, c.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...s,
          children: (0, a.jsx)(W.A, { className: "size-4" }),
        });
      }
      function ea(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(Z.wn, {
          "data-slot": "select-scroll-down-button",
          className: (0, c.cn)(
            "flex cursor-default items-center justify-center py-1",
            t
          ),
          ...s,
          children: (0, a.jsx)(Q.A, { className: "size-4" }),
        });
      }
      function er(e) {
        let {
            isOpen: t,
            onOpenChange: s,
            material: r,
            subjects: n,
            updateMaterial: d,
          } = e,
          [o, c] = (0, l.useState)(""),
          [u, x] = (0, l.useState)(""),
          [m, h] = (0, l.useState)(""),
          [g, f] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          r && (c(r.title), x(r.description), h(r.subject));
        }, [r]);
        let p = async () => {
          if (r) {
            if (!o.trim())
              return void D.oR.error("Title required", {
                description:
                  "Please provide a title for your learning material.",
              });
            if (!m)
              return void D.oR.error("Subject required", {
                description: "Please select a subject for your material.",
              });
            try {
              f(!0),
                await d(r.id, o, u, m),
                s(!1),
                D.oR.success("Material updated", {
                  description:
                    "Your learning material has been updated successfully.",
                });
            } catch (e) {
            } finally {
              f(!1);
            }
          }
        };
        return (0, a.jsx)(T, {
          open: t,
          onOpenChange: (e) => {
            !e && r && (c(r.title), x(r.description), h(r.subject)), s(e);
          },
          children: (0, a.jsxs)(R, {
            children: [
              (0, a.jsx)(M, {
                children: (0, a.jsx)(O, { children: "Edit Learning Material" }),
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
                      (0, a.jsx)(q, {
                        id: "title",
                        placeholder: "e.g., Algebra Basics",
                        value: o,
                        onChange: (e) => c(e.target.value),
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
                      (0, a.jsx)(q, {
                        id: "description",
                        placeholder: "Brief description of the material",
                        value: u,
                        onChange: (e) => x(e.target.value),
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
                      n.length > 0
                        ? (0, a.jsxs)(H, {
                            value: m,
                            onValueChange: h,
                            children: [
                              (0, a.jsx)(G, {
                                children: (0, a.jsx)(X, {
                                  placeholder: "Select a subject",
                                }),
                              }),
                              (0, a.jsx)(ee, {
                                children: n.map((e) =>
                                  (0, a.jsx)(et, { value: e, children: e }, e)
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
              (0, a.jsxs)(P, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => s(!1),
                    disabled: g,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: p,
                    disabled: g || 0 === n.length,
                    children: g
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(w.A, {
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
      function ei(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("textarea", {
          "data-slot": "textarea",
          className: (0, c.cn)(
            "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            t
          ),
          ...s,
        });
      }
      function en(e) {
        let {
            isOpen: t,
            onOpenChange: s,
            materialId: r,
            textEntry: n,
            updateTextEntry: d,
          } = e,
          [o, c] = (0, l.useState)(""),
          [u, x] = (0, l.useState)(""),
          [m, h] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          n && (c(n.title), x(n.content));
        }, [n]);
        let g = async () => {
          if (r && n) {
            if (!o.trim())
              return void D.oR.error("Title required", {
                description: "Please provide a title for your text entry.",
              });
            if (!u.trim())
              return void D.oR.error("Content required", {
                description: "Please provide some content for your text entry.",
              });
            try {
              h(!0),
                await d(r, n.id, o, u),
                s(!1),
                D.oR.success("Text entry updated", {
                  description: "Your text entry has been updated successfully.",
                });
            } catch (e) {
            } finally {
              h(!1);
            }
          }
        };
        return (0, a.jsx)(T, {
          open: t,
          onOpenChange: (e) => {
            !e && n && (c(n.title), x(n.content)), s(e);
          },
          children: (0, a.jsxs)(R, {
            children: [
              (0, a.jsx)(M, {
                children: (0, a.jsx)(O, { children: "Edit Text Entry" }),
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
                      (0, a.jsx)(q, {
                        id: "entry-title",
                        placeholder: "e.g., Key Concepts",
                        value: o,
                        onChange: (e) => c(e.target.value),
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
                      (0, a.jsx)(ei, {
                        id: "entry-content",
                        placeholder: "Enter your text content here...",
                        className: "h-40",
                        value: u,
                        onChange: (e) => x(e.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(P, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => s(!1),
                    disabled: m,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: g,
                    disabled: m,
                    children: m
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(w.A, {
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
      function el(e) {
        let {
            material: t,
            subjects: s,
            toggleMaterial: r,
            removeMaterial: n,
            updateMaterial: d,
            onAddTextEntry: o,
            removeTextEntry: u,
            updateTextEntry: x,
          } = e,
          [m, h] = (0, l.useState)(!1),
          [g, f] = (0, l.useState)(!1),
          [p, j] = (0, l.useState)(!1),
          [b, v] = (0, l.useState)(!1),
          [y, N] = (0, l.useState)(null),
          k = async () => {
            try {
              f(!0),
                await n(t.id),
                D.oR.success("Material removed", {
                  description: "The learning material has been removed.",
                });
            } catch (e) {
            } finally {
              f(!1);
            }
          },
          C = (e) => {
            N(e), v(!0);
          };
        return (0, a.jsxs)("div", {
          className: (0, c.cn)(
            "rounded-lg border p-3 transition-all",
            t.isActive && "border-primary bg-primary/20"
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("h3", {
                  className: "font-medium",
                  children: t.title,
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className: "h-7 w-7",
                      onClick: () => j(!0),
                      children: (0, a.jsx)(V.A, {
                        size: 14,
                        className: "text-muted-foreground",
                      }),
                    }),
                    (0, a.jsx)(i.$, {
                      variant: "ghost",
                      size: "icon",
                      className: "h-7 w-7",
                      onClick: k,
                      disabled: g,
                      children: g
                        ? (0, a.jsx)(w.A, {
                            size: 14,
                            className: "animate-spin",
                          })
                        : (0, a.jsx)(F.A, {
                            size: 14,
                            className: "text-muted-foreground",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            t.subject &&
              (0, a.jsx)("div", {
                className: "mt-1 flex items-center",
                children: (0, a.jsxs)("span", {
                  className:
                    "text-xs bg-sidebar-background text-sidebar-foreground px-2 py-0.5 rounded-full flex items-center",
                  children: [
                    (0, a.jsx)(E.A, { size: 10, className: "mr-1" }),
                    t.subject,
                  ],
                }),
              }),
            (0, a.jsx)("p", {
              className: "mt-1 line-clamp-2 text-xs text-sidebar-foreground/60",
              children: t.description,
            }),
            (0, a.jsxs)("div", {
              className: "mt-3 flex items-center justify-between",
              children: [
                (0, a.jsx)("span", {
                  className: "text-xs text-sidebar-foreground/60",
                  children: new Date(t.dateAdded).toLocaleDateString(),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-xs font-medium",
                      children: t.isActive ? "Active" : "Inactive",
                    }),
                    (0, a.jsx)(I, {
                      checked: t.isActive,
                      onCheckedChange: () => {
                        r(t.id),
                          (0, D.oR)(
                            t.isActive
                              ? "Context deactivated"
                              : '"'.concat(t.title, '" context is now active'),
                            {
                              description: t.isActive
                                ? "Default context is now active"
                                : '"'.concat(
                                    t.title,
                                    '" context is now active'
                                  ),
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
                onClick: o,
                children: [
                  (0, a.jsx)(Y.A, { size: 14, className: "mr-2" }),
                  "Add Text Entry",
                ],
              }),
            }),
            t.textEntries && t.textEntries.length > 0
              ? (0, a.jsxs)("div", {
                  className: "mt-3",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center justify-between",
                      children: (0, a.jsxs)(i.$, {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => h(!m),
                        className: "text-xs p-1 h-auto",
                        children: [
                          m ? "Hide Text Entries" : "Show Text Entries",
                          " (",
                          t.textEntries.length,
                          ")",
                        ],
                      }),
                    }),
                    m &&
                      (0, a.jsx)("div", {
                        className:
                          "mt-2 space-y-2 max-h-60 overflow-y-auto p-2 bg-sidebar-background rounded-md",
                        children: t.textEntries.map((e) =>
                          (0, a.jsx)(
                            K,
                            {
                              entry: e,
                              onRemove: () => u(e.id),
                              onEdit: () => C(e),
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
            (0, a.jsx)(er, {
              isOpen: p,
              onOpenChange: j,
              material: t,
              subjects: s,
              updateMaterial: d,
            }),
            (0, a.jsx)(en, {
              isOpen: b,
              onOpenChange: v,
              materialId: t.id,
              textEntry: y,
              updateTextEntry: x,
            }),
          ],
        });
      }
      function ed(e) {
        let { isOpen: t, onOpenChange: s, subjects: r, addMaterial: n } = e,
          [d, o] = (0, l.useState)(""),
          [c, u] = (0, l.useState)(""),
          [x, m] = (0, l.useState)(""),
          [h, g] = (0, l.useState)(!1),
          f = async () => {
            if (!d.trim())
              return void D.oR.error("Title required", {
                description:
                  "Please provide a title for your learning material.",
              });
            if (!x)
              return void D.oR.error("Subject required", {
                description: "Please select a subject for your material.",
              });
            try {
              g(!0),
                await n(d, c, x),
                o(""),
                u(""),
                m(""),
                s(!1),
                D.oR.success("Material added", {
                  description:
                    "Your learning material has been added successfully.",
                });
            } catch (e) {
            } finally {
              g(!1);
            }
          };
        return (0, a.jsx)(T, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(R, {
            children: [
              (0, a.jsx)(M, {
                children: (0, a.jsx)(O, { children: "Add Learning Material" }),
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
                      (0, a.jsx)(q, {
                        id: "title",
                        placeholder: "e.g., Algebra Basics",
                        value: d,
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
                      (0, a.jsx)(q, {
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
                        ? (0, a.jsxs)(H, {
                            value: x,
                            onValueChange: m,
                            children: [
                              (0, a.jsx)(G, {
                                children: (0, a.jsx)(X, {
                                  placeholder: "Select a subject",
                                }),
                              }),
                              (0, a.jsx)(ee, {
                                children: r.map((e) =>
                                  (0, a.jsx)(et, { value: e, children: e }, e)
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
              (0, a.jsxs)(P, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => s(!1),
                    disabled: h,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: f,
                    disabled: h || 0 === r.length,
                    children: h
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(w.A, {
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
      function eo(e) {
        let {
            isOpen: t,
            onOpenChange: s,
            materialId: r,
            addTextEntryToMaterial: n,
          } = e,
          [d, o] = (0, l.useState)(""),
          [c, u] = (0, l.useState)(""),
          [x, m] = (0, l.useState)(!1),
          h = async () => {
            if (r) {
              if (!d.trim())
                return void D.oR.error("Title required", {
                  description: "Please provide a title for your text entry.",
                });
              if (!c.trim())
                return void D.oR.error("Content required", {
                  description:
                    "Please provide some content for your text entry.",
                });
              try {
                m(!0),
                  await n(r, d, c),
                  o(""),
                  u(""),
                  s(!1),
                  D.oR.success("Text entry added", {
                    description:
                      "Your text entry has been added to the material.",
                  });
              } catch (e) {
              } finally {
                m(!1);
              }
            }
          };
        return (0, a.jsx)(T, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(R, {
            children: [
              (0, a.jsx)(M, {
                children: (0, a.jsx)(O, { children: "Add Text Entry" }),
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
                      (0, a.jsx)(q, {
                        id: "entry-title",
                        placeholder: "e.g., Key Concepts",
                        value: d,
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
                      (0, a.jsx)(ei, {
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
              (0, a.jsxs)(P, {
                children: [
                  (0, a.jsx)(i.$, {
                    variant: "outline",
                    onClick: () => s(!1),
                    disabled: x,
                    children: "Cancel",
                  }),
                  (0, a.jsx)(i.$, {
                    onClick: h,
                    disabled: x,
                    children: x
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(w.A, {
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
      var ec = s(6350),
        eu = s(4411);
      function ex(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card",
          className: (0, c.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            t
          ),
          ...s,
        });
      }
      function em(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-header",
          className: (0, c.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t
          ),
          ...s,
        });
      }
      function eh(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-title",
          className: (0, c.cn)("leading-none font-semibold", t),
          ...s,
        });
      }
      function eg(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-description",
          className: (0, c.cn)("text-muted-foreground text-sm", t),
          ...s,
        });
      }
      function ef(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-content",
          className: (0, c.cn)("px-6", t),
          ...s,
        });
      }
      function ep(e) {
        let { onLogin: t } = e;
        return (0, a.jsxs)(ex, {
          className: "border-amber-200 bg-amber-50",
          children: [
            (0, a.jsxs)(em, {
              className: "pb-2",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, a.jsx)(ec.A, {
                      className: "h-5 w-5 text-amber-500 mr-2",
                    }),
                    (0, a.jsx)(eh, {
                      className: "text-amber-700 text-base",
                      children: "Authentication Required",
                    }),
                  ],
                }),
                (0, a.jsx)(eg, {
                  className: "text-amber-600",
                  children: "Please sign in to access learning materials",
                }),
              ],
            }),
            (0, a.jsxs)(ef, {
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
                    onClick: t,
                    children: [
                      (0, a.jsx)(eu.A, { className: "h-4 w-4 mr-2" }),
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
            addSubject: d,
            removeSubject: o,
            addMaterial: m,
            updateMaterial: h,
            addTextEntryToMaterial: C,
            updateTextEntry: S,
            toggleMaterial: E,
            removeMaterial: F,
            removeTextEntryFromMaterial: T,
          } = (0, k.Q)(),
          [_, $] = (0, l.useState)(!1),
          [L, R] = (0, l.useState)(!1),
          [M, P] = (0, l.useState)(null),
          [O, q] = (0, l.useState)(!1),
          [D, V] = (0, l.useState)(null),
          Y =
            n &&
            (n.message.includes("fetch") ||
              n.message.includes("network") ||
              n.message.includes("Failed to fetch")),
          B =
            n &&
            (n.message.includes("Unauthorized") ||
              n.message.includes("Authentication required") ||
              n.message.includes("401")),
          I = e.find((e) => e.isActive),
          K = t || I,
          Z = D ? e.filter((e) => e.subject === D) : e,
          Q = s.length > 0;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(u, {
              open: _,
              onOpenChange: $,
              children: [
                (0, a.jsx)(x, {
                  asChild: !0,
                  children: (0, a.jsxs)(i.$, {
                    variant: "outline",
                    size: "sm",
                    className: (0, c.cn)(
                      "flex items-center gap-1 mr-2",
                      K && "bg-primary/10 text-primary border-primary/20"
                    ),
                    children: [
                      (0, a.jsx)(j.A, { size: 16 }),
                      (0, a.jsx)("span", {
                        className: "hidden sm:inline",
                        children: "Materials",
                      }),
                      K &&
                        (0, a.jsx)("span", {
                          className:
                            "flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary ml-1",
                          children: "1",
                        }),
                      (0, a.jsx)(b.A, { size: 14 }),
                    ],
                  }),
                }),
                (0, a.jsxs)(g, {
                  side: "left",
                  className:
                    "w-[300px] sm:w-[400px] bg-sidebar text-sidebar-foreground",
                  children: [
                    (0, a.jsx)(f, {
                      children: (0, a.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, a.jsxs)(p, {
                          className:
                            "flex items-center text-sidebar-foreground",
                          children: [
                            (0, a.jsx)(v.A, { className: "mr-2", size: 20 }),
                            "Learning Materials",
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "mt-6 flex flex-col gap-4 px-4",
                      children: [
                        Y
                          ? (0, a.jsx)(a.Fragment, { children: " " })
                          : B
                            ? (0, a.jsx)(ep, {
                                onLogin: () => {
                                  window.location.href = "/";
                                },
                              })
                            : !n || Y || B
                              ? null
                              : (0, a.jsxs)(z, {
                                  variant: "destructive",
                                  className: "mb-4",
                                  children: [
                                    (0, a.jsx)(y.A, { className: "h-4 w-4" }),
                                    (0, a.jsx)(A, {
                                      children:
                                        "Unauthorized. Please log in first." ===
                                        n.message
                                          ? "Please log in to access your materials."
                                          : "There was a problem loading your data. Try refreshing.",
                                    }),
                                  ],
                                }),
                        (0, a.jsx)(U, {
                          subjects: s,
                          selectedSubjectFilter: D,
                          setSelectedSubjectFilter: V,
                          addSubject: d,
                          removeSubject: o,
                          isLoading: r,
                          isConnectionError: !!Y,
                        }),
                        (0, a.jsxs)(i.$, {
                          className:
                            "w-full bg-primary text-primary-foreground hover:bg-primary/90",
                          onClick: () => R(!0),
                          disabled: !Q || !!Y,
                          children: [
                            (0, a.jsx)(N.A, { size: 16, className: "mr-2" }),
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
                                (0, a.jsx)(w.A, {
                                  className:
                                    "h-8 w-8 animate-spin mb-2 text-foreground",
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-sm text-foreground/60",
                                  children: "Loading materials...",
                                }),
                              ],
                            })
                          : 0 === Z.length
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center py-8 text-center text-sidebar-foreground/60",
                                children: [
                                  (0, a.jsx)(v.A, {
                                    size: 40,
                                    strokeWidth: 1,
                                    className: "mb-2 opacity-40",
                                  }),
                                  Q
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsxs)("p", {
                                            children: [
                                              "No learning materials",
                                              " ",
                                              D ? "for ".concat(D) : "",
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
                                children: Z.map((e) =>
                                  (0, a.jsx)(
                                    el,
                                    {
                                      material: e,
                                      subjects: s,
                                      toggleMaterial: E,
                                      removeMaterial: F,
                                      updateMaterial: h,
                                      onAddTextEntry: () => {
                                        P(e.id), q(!0);
                                      },
                                      removeTextEntry: (t) => T(e.id, t),
                                      updateTextEntry: S,
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
            (0, a.jsx)(ed, {
              isOpen: L,
              onOpenChange: R,
              subjects: s,
              addMaterial: m,
            }),
            (0, a.jsx)(eo, {
              isOpen: O,
              onOpenChange: q,
              materialId: M,
              addTextEntryToMaterial: C,
            }),
          ],
        });
      }
      var eb = s(1261),
        ev = s(3672),
        ey = s(8309),
        eN = s(212);
      function ew(e) {
        let { ...t } = e;
        return (0, a.jsx)(eN.bL, { "data-slot": "dropdown-menu", ...t });
      }
      function ek(e) {
        let { ...t } = e;
        return (0, a.jsx)(eN.l9, {
          "data-slot": "dropdown-menu-trigger",
          ...t,
        });
      }
      function eC(e) {
        let { className: t, sideOffset: s = 4, ...r } = e;
        return (0, a.jsx)(eN.ZL, {
          children: (0, a.jsx)(eN.UC, {
            "data-slot": "dropdown-menu-content",
            sideOffset: s,
            className: (0, c.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
              t
            ),
            ...r,
          }),
        });
      }
      function ez(e) {
        let { className: t, inset: s, variant: r = "default", ...i } = e;
        return (0, a.jsx)(eN.q7, {
          "data-slot": "dropdown-menu-item",
          "data-inset": s,
          "data-variant": r,
          className: (0, c.cn)(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...i,
        });
      }
      function eA() {
        let { setTheme: e } = (0, ey.D)();
        return (0, a.jsxs)(ew, {
          children: [
            (0, a.jsx)(ek, {
              asChild: !0,
              children: (0, a.jsxs)(i.$, {
                variant: "outline",
                size: "icon",
                children: [
                  (0, a.jsx)(eb.A, {
                    className:
                      "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                  }),
                  (0, a.jsx)(ev.A, {
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
            (0, a.jsxs)(eC, {
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
      var eS = s(2942),
        eE = s(1773);
      function eF() {
        var e;
        let t = (0, eS.useRouter)(),
          { data: s } = (0, r.wV)();
        return (
          s || t.push("/login"),
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
                              null != (e = null == s ? void 0 : s.user.image)
                                ? e
                                : "https://avatar.vercel.sh/" +
                                  (null == s ? void 0 : s.user.email),
                            alt:
                              (null == s ? void 0 : s.user.name) + "'s avatar",
                            width: 24,
                            height: 24,
                            className: "h-6 w-6 rounded-full",
                          }),
                          (0, a.jsx)("span", {
                            className: "hidden sm:inline",
                            children: null == s ? void 0 : s.user.name,
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
                  (0, a.jsx)(eA, {}),
                  (0, a.jsxs)(i.$, {
                    variant: "ghost",
                    size: "sm",
                    onClick: async () => {
                      await (0, r.CI)(), t.push("/");
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
      var eT = s(3908),
        e_ = s(2568);
      function e$(e) {
        let { className: t, children: s, ...r } = e;
        return (0, a.jsxs)(e_.bL, {
          "data-slot": "scroll-area",
          className: (0, c.cn)("relative", t),
          ...r,
          children: [
            (0, a.jsx)(e_.LM, {
              "data-slot": "scroll-area-viewport",
              className:
                "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
              children: s,
            }),
            (0, a.jsx)(eL, {}),
            (0, a.jsx)(e_.OK, {}),
          ],
        });
      }
      function eL(e) {
        let { className: t, orientation: s = "vertical", ...r } = e;
        return (0, a.jsx)(e_.VM, {
          "data-slot": "scroll-area-scrollbar",
          orientation: s,
          className: (0, c.cn)(
            "flex touch-none p-px transition-colors select-none",
            "vertical" === s && "h-full w-2.5 border-l border-l-transparent",
            "horizontal" === s &&
              "h-2.5 flex-col border-t border-t-transparent",
            t
          ),
          ...r,
          children: (0, a.jsx)(e_.lr, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full",
          }),
        });
      }
      var eR = s(8762);
      function eM() {
        let e = (0, eS.useRouter)(),
          {
            data: t,
            isLoading: s,
            refetch: r,
          } = (0, eR.useQuery)({
            queryKey: ["threads"],
            queryFn: async () => {
              let e = await fetch((0, c.j)("/api/threads"), {
                credentials: "include",
              });
              return await e.json();
            },
          }),
          n = (0, eR.useMutation)({
            mutationFn: async (e) => {
              let t = await fetch((0, c.j)("/api/threads/".concat(e)), {
                method: "DELETE",
                credentials: "include",
              });
              return await t.json();
            },
            onSuccess: (t, s) => {
              r(), s === o && e.push("/chat");
            },
          }),
          l = null == t ? void 0 : t.threads,
          { threadId: d } = (0, eS.useParams)(),
          o = d,
          u = (t) => {
            e.push("/chat/".concat(t));
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
                  (0, a.jsx)(N.A, { className: "h-4 w-4" }),
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
                    children: (0, a.jsx)(w.A, {
                      className: "h-5 w-5 animate-spin text-muted-foreground",
                    }),
                  })
                : 0 === l.length
                  ? (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center h-32 text-center p-4",
                      children: [
                        (0, a.jsx)(eT.A, {
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
                      children: l.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className:
                              "cursor-pointer transition-colors hover:bg-accent/50 border-b border-border rounded-lg ".concat(
                                e.id === o
                                  ? "bg-accent border-primary border"
                                  : "bg-background"
                              ),
                            onClick: () => u(e.id),
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
                                  children: (0, a.jsx)(F.A, {
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
      function eP(e) {
        let { children: t } = e,
          { data: s } = (0, r.wV)();
        return (
          s || (0, eS.redirect)("/login"),
          (0, a.jsxs)("div", {
            className: "flex flex-col h-screen",
            children: [
              (0, a.jsx)(eF, {}),
              (0, a.jsxs)("main", {
                className: "flex flex-row flex-1 overflow-hidden",
                children: [
                  (0, a.jsx)("div", {
                    className: "min-w-[320px] max-w-[320px] flex",
                    children: (0, a.jsx)(eM, {}),
                  }),
                  (0, a.jsx)("div", {
                    className: "flex-1 overflow-hidden",
                    children: t,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    3928: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => i, j: () => n });
      var a = s(2987),
        r = s(607);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
      function n(e) {
        return "".concat(e);
      }
    },
    7227: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => d });
      var a = s(4568);
      s(7620);
      var r = s(9649),
        i = s(615),
        n = s(3928);
      let l = (0, i.F)(
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
      function d(e) {
        let { className: t, variant: s, size: i, asChild: d = !1, ...o } = e,
          c = d ? r.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          className: (0, n.cn)(l({ variant: s, size: i, className: t })),
          ...o,
        });
      }
    },
    8313: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 1223));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [495, 534, 762, 188, 478, 381, 848, 587, 315, 358], () => t(8313)),
      (_N_E = e.O());
  },
]);
