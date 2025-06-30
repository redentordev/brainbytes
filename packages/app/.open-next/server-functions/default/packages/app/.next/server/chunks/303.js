(exports.id = 303),
  (exports.ids = [303]),
  (exports.modules = {
    1039: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    1343: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => s });
      var n = r(60159),
        o = r(27134),
        a = r(11246),
        i = r(90691),
        l = r(13486);
      function s(e) {
        let t = e + "CollectionProvider",
          [r, s] = (0, o.A)(t),
          [u, c] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: r } = e,
              o = n.useRef(null),
              a = n.useRef(new Map()).current;
            return (0, l.jsx)(u, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r,
            });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = (0, i.TL)(f),
          h = n.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = c(f, r),
              i = (0, a.s)(t, o.collectionRef);
            return (0, l.jsx)(p, { ref: i, children: n });
          });
        h.displayName = f;
        let m = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          v = (0, i.TL)(m),
          y = n.forwardRef((e, t) => {
            let { scope: r, children: o, ...i } = e,
              s = n.useRef(null),
              u = (0, a.s)(t, s),
              d = c(m, r);
            return (
              n.useEffect(
                () => (
                  d.itemMap.set(s, { ref: s, ...i }),
                  () => void d.itemMap.delete(s)
                )
              ),
              (0, l.jsx)(v, { ...{ [g]: "" }, ref: u, children: o })
            );
          });
        return (
          (y.displayName = m),
          [
            { Provider: d, Slot: h, ItemSlot: y },
            function (t) {
              let r = c(e + "CollectionConsumer", t);
              return n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${g}]`));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            s,
          ]
        );
      }
      var u = new WeakMap();
      function c(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let r = (function (e, t) {
          let r = e.length,
            n = d(t),
            o = n >= 0 ? n : r + n;
          return o < 0 || o >= r ? -1 : o;
        })(e, t);
        return -1 === r ? void 0 : e[r];
      }
      function d(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
    },
    3142: (e, t, r) => {
      "use strict";
      r.d(t, {
        Kq: () => V,
        UC: () => q,
        ZL: () => K,
        bL: () => G,
        i3: () => Y,
        l9: () => $,
      });
      var n = r(60159),
        o = r(66634),
        a = r(11246),
        i = r(27134),
        l = r(72734),
        s = r(32194),
        u = r(26578),
        c = r(20829),
        d = r(78998),
        f = r(94108),
        p = r(90691),
        h = r(40594),
        m = r(50587),
        g = r(13486),
        [v, y] = (0, i.A)("Tooltip", [u.Bk]),
        w = (0, u.Bk)(),
        b = "TooltipProvider",
        x = "tooltip.open",
        [E, _] = v(b),
        R = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: a = !1,
              children: i,
            } = e,
            l = n.useRef(!0),
            s = n.useRef(!1),
            u = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = u.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, g.jsx)(E, {
              scope: t,
              isOpenDelayedRef: l,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                window.clearTimeout(u.current), (l.current = !1);
              }, []),
              onClose: n.useCallback(() => {
                window.clearTimeout(u.current),
                  (u.current = window.setTimeout(() => (l.current = !0), o));
              }, [o]),
              isPointerInTransitRef: s,
              onPointerInTransitChange: n.useCallback((e) => {
                s.current = e;
              }, []),
              disableHoverableContent: a,
              children: i,
            })
          );
        };
      R.displayName = b;
      var S = "Tooltip",
        [C, T] = v(S),
        j = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              disableHoverableContent: l,
              delayDuration: c,
            } = e,
            d = _(S, e.__scopeTooltip),
            f = w(t),
            [p, m] = n.useState(null),
            v = (0, s.B)(),
            y = n.useRef(0),
            b = l ?? d.disableHoverableContent,
            E = c ?? d.delayDuration,
            R = n.useRef(!1),
            [T, j] = (0, h.i)({
              prop: o,
              defaultProp: a ?? !1,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(x)))
                  : d.onClose(),
                  i?.(e);
              },
              caller: S,
            }),
            I = n.useMemo(
              () =>
                T ? (R.current ? "delayed-open" : "instant-open") : "closed",
              [T]
            ),
            A = n.useCallback(() => {
              window.clearTimeout(y.current),
                (y.current = 0),
                (R.current = !1),
                j(!0);
            }, [j]),
            k = n.useCallback(() => {
              window.clearTimeout(y.current), (y.current = 0), j(!1);
            }, [j]),
            O = n.useCallback(() => {
              window.clearTimeout(y.current),
                (y.current = window.setTimeout(() => {
                  (R.current = !0), j(!0), (y.current = 0);
                }, E));
            }, [E, j]);
          return (
            n.useEffect(
              () => () => {
                y.current && (window.clearTimeout(y.current), (y.current = 0));
              },
              []
            ),
            (0, g.jsx)(u.bL, {
              ...f,
              children: (0, g.jsx)(C, {
                scope: t,
                contentId: v,
                open: T,
                stateAttribute: I,
                trigger: p,
                onTriggerChange: m,
                onTriggerEnter: n.useCallback(() => {
                  d.isOpenDelayedRef.current ? O() : A();
                }, [d.isOpenDelayedRef, O, A]),
                onTriggerLeave: n.useCallback(() => {
                  b ? k() : (window.clearTimeout(y.current), (y.current = 0));
                }, [k, b]),
                onOpen: A,
                onClose: k,
                disableHoverableContent: b,
                children: r,
              }),
            })
          );
        };
      j.displayName = S;
      var I = "TooltipTrigger",
        A = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...i } = e,
            l = T(I, r),
            s = _(I, r),
            c = w(r),
            d = n.useRef(null),
            p = (0, a.s)(t, d, l.onTriggerChange),
            h = n.useRef(!1),
            m = n.useRef(!1),
            v = n.useCallback(() => (h.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener("pointerup", v),
              [v]
            ),
            (0, g.jsx)(u.Mz, {
              asChild: !0,
              ...c,
              children: (0, g.jsx)(f.sG.button, {
                "aria-describedby": l.open ? l.contentId : void 0,
                "data-state": l.stateAttribute,
                ...i,
                ref: p,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  "touch" !== e.pointerType &&
                    (m.current ||
                      s.isPointerInTransitRef.current ||
                      (l.onTriggerEnter(), (m.current = !0)));
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  l.onTriggerLeave(), (m.current = !1);
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  l.open && l.onClose(),
                    (h.current = !0),
                    document.addEventListener("pointerup", v, { once: !0 });
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  h.current || l.onOpen();
                }),
                onBlur: (0, o.m)(e.onBlur, l.onClose),
                onClick: (0, o.m)(e.onClick, l.onClose),
              }),
            })
          );
        });
      A.displayName = I;
      var k = "TooltipPortal",
        [O, P] = v(k, { forceMount: void 0 }),
        N = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            a = T(k, t);
          return (0, g.jsx)(O, {
            scope: t,
            forceMount: r,
            children: (0, g.jsx)(d.C, {
              present: r || a.open,
              children: (0, g.jsx)(c.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      N.displayName = k;
      var M = "TooltipContent",
        D = n.forwardRef((e, t) => {
          let r = P(M, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = "top", ...a } = e,
            i = T(M, e.__scopeTooltip);
          return (0, g.jsx)(d.C, {
            present: n || i.open,
            children: i.disableHoverableContent
              ? (0, g.jsx)(H, { side: o, ...a, ref: t })
              : (0, g.jsx)(L, { side: o, ...a, ref: t }),
          });
        }),
        L = n.forwardRef((e, t) => {
          let r = T(M, e.__scopeTooltip),
            o = _(M, e.__scopeTooltip),
            i = n.useRef(null),
            l = (0, a.s)(t, i),
            [s, u] = n.useState(null),
            { trigger: c, onClose: d } = r,
            f = i.current,
            { onPointerInTransitChange: p } = o,
            h = n.useCallback(() => {
              u(null), p(!1);
            }, [p]),
            m = n.useCallback(
              (e, t) => {
                let r = e.currentTarget,
                  n = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let r = Math.abs(t.top - e.y),
                      n = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      a = Math.abs(t.left - e.x);
                    switch (Math.min(r, n, o, a)) {
                      case a:
                        return "left";
                      case o:
                        return "right";
                      case r:
                        return "top";
                      case n:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(n, r.getBoundingClientRect());
                u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : 1 * !!(e.y > t.y)
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                          let n = e[r];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              r = t[t.length - 2];
                            if (
                              (e.x - r.x) * (n.y - r.y) >=
                              (e.y - r.y) * (n.x - r.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(n);
                        }
                        t.pop();
                        let r = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let n = e[t];
                          for (; r.length >= 2; ) {
                            let e = r[r.length - 1],
                              t = r[r.length - 2];
                            if (
                              (e.x - t.x) * (n.y - t.y) >=
                              (e.y - t.y) * (n.x - t.x)
                            )
                              r.pop();
                            else break;
                          }
                          r.push(n);
                        }
                        return (r.pop(),
                        1 === t.length &&
                          1 === r.length &&
                          t[0].x === r[0].x &&
                          t[0].y === r[0].y)
                          ? t
                          : t.concat(r);
                      })(t)
                    );
                  })([
                    ...(function (e, t, r = 5) {
                      let n = [];
                      switch (t) {
                        case "top":
                          n.push(
                            { x: e.x - r, y: e.y + r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "bottom":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x + r, y: e.y - r }
                          );
                          break;
                        case "left":
                          n.push(
                            { x: e.x + r, y: e.y - r },
                            { x: e.x + r, y: e.y + r }
                          );
                          break;
                        case "right":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x - r, y: e.y + r }
                          );
                      }
                      return n;
                    })(n, o),
                    ...(function (e) {
                      let { top: t, right: r, bottom: n, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: r, y: t },
                        { x: r, y: n },
                        { x: o, y: n },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  p(!0);
              },
              [p]
            );
          return (
            n.useEffect(() => () => h(), [h]),
            n.useEffect(() => {
              if (c && f) {
                let e = (e) => m(e, f),
                  t = (e) => m(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    c.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [c, f, m, h]),
            n.useEffect(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n = c?.contains(t) || f?.contains(t),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                        let i = t[e],
                          l = t[a],
                          s = i.x,
                          u = i.y,
                          c = l.x,
                          d = l.y;
                        u > n != d > n &&
                          r < ((c - s) * (n - u)) / (d - u) + s &&
                          (o = !o);
                      }
                      return o;
                    })(r, s);
                  n ? h() : o && (h(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, f, s, d, h]),
            (0, g.jsx)(H, { ...e, ref: l })
          );
        }),
        [F, z] = v(S, { isInside: !1 }),
        B = (0, p.Dc)("TooltipContent"),
        H = n.forwardRef((e, t) => {
          let {
              __scopeTooltip: r,
              children: o,
              "aria-label": a,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              ...c
            } = e,
            d = T(M, r),
            f = w(r),
            { onClose: p } = d;
          return (
            n.useEffect(
              () => (
                document.addEventListener(x, p),
                () => document.removeEventListener(x, p)
              ),
              [p]
            ),
            n.useEffect(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  t?.contains(d.trigger) && p();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, p]),
            (0, g.jsx)(l.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: p,
              children: (0, g.jsxs)(u.UC, {
                "data-state": d.stateAttribute,
                ...f,
                ...c,
                ref: t,
                style: {
                  ...c.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, g.jsx)(B, { children: o }),
                  (0, g.jsx)(F, {
                    scope: r,
                    isInside: !0,
                    children: (0, g.jsx)(m.bL, {
                      id: d.contentId,
                      role: "tooltip",
                      children: a || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      D.displayName = M;
      var W = "TooltipArrow",
        U = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...n } = e,
            o = w(r);
          return z(W, r).isInside
            ? null
            : (0, g.jsx)(u.i3, { ...o, ...n, ref: t });
        });
      U.displayName = W;
      var V = R,
        G = j,
        $ = A,
        K = N,
        q = D,
        Y = U;
    },
    5452: (e, t, r) => {
      "use strict";
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
      r.d(t, { q: () => n });
    },
    7398: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("book", [
        [
          "path",
          {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
            key: "k3hazp",
          },
        ],
      ]);
    },
    7503: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => e8,
        q7: () => e9,
        ZL: () => e3,
        bL: () => e4,
        l9: () => e5,
      });
      var n = r(60159),
        o = r(66634),
        a = r(11246),
        i = r(27134),
        l = r(40594),
        s = r(94108),
        u = r(1343),
        c = r(88200),
        d = r(72734),
        f = r(78766),
        p = r(43512),
        h = r(32194),
        m = r(26578),
        g = r(20829),
        v = r(78998),
        y = r(15250),
        w = r(13486),
        b = "rovingFocusGroup.onEntryFocus",
        x = { bubbles: !1, cancelable: !0 },
        E = "RovingFocusGroup",
        [_, R, S] = (0, u.N)(E),
        [C, T] = (0, i.A)(E, [S]),
        [j, I] = C(E),
        A = n.forwardRef((e, t) =>
          (0, w.jsx)(_.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, w.jsx)(_.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, w.jsx)(k, { ...e, ref: t }),
            }),
          })
        );
      A.displayName = E;
      var k = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: i,
              loop: u = !1,
              dir: d,
              currentTabStopId: f,
              defaultCurrentTabStopId: p,
              onCurrentTabStopIdChange: h,
              onEntryFocus: m,
              preventScrollOnEntryFocus: g = !1,
              ...v
            } = e,
            _ = n.useRef(null),
            S = (0, a.s)(t, _),
            C = (0, c.jH)(d),
            [T, I] = (0, l.i)({
              prop: f,
              defaultProp: p ?? null,
              onChange: h,
              caller: E,
            }),
            [A, k] = n.useState(!1),
            O = (0, y.c)(m),
            P = R(r),
            N = n.useRef(!1),
            [D, L] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = _.current;
              if (e)
                return (
                  e.addEventListener(b, O), () => e.removeEventListener(b, O)
                );
            }, [O]),
            (0, w.jsx)(j, {
              scope: r,
              orientation: i,
              dir: C,
              loop: u,
              currentTabStopId: T,
              onItemFocus: n.useCallback((e) => I(e), [I]),
              onItemShiftTab: n.useCallback(() => k(!0), []),
              onFocusableItemAdd: n.useCallback(() => L((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => L((e) => e - 1), []),
              children: (0, w.jsx)(s.sG.div, {
                tabIndex: A || 0 === D ? -1 : 0,
                "data-orientation": i,
                ...v,
                ref: S,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.m)(e.onMouseDown, () => {
                  N.current = !0;
                }),
                onFocus: (0, o.m)(e.onFocus, (e) => {
                  let t = !N.current;
                  if (e.target === e.currentTarget && t && !A) {
                    let t = new CustomEvent(b, x);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = P().filter((e) => e.focusable);
                      M(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === T),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        g
                      );
                    }
                  }
                  N.current = !1;
                }),
                onBlur: (0, o.m)(e.onBlur, () => k(!1)),
              }),
            })
          );
        }),
        O = "RovingFocusGroupItem",
        P = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: a = !0,
              active: i = !1,
              tabStopId: l,
              children: u,
              ...c
            } = e,
            d = (0, h.B)(),
            f = l || d,
            p = I(O, r),
            m = p.currentTabStopId === f,
            g = R(r),
            {
              onFocusableItemAdd: v,
              onFocusableItemRemove: y,
              currentTabStopId: b,
            } = p;
          return (
            n.useEffect(() => {
              if (a) return v(), () => y();
            }, [a, v, y]),
            (0, w.jsx)(_.ItemSlot, {
              scope: r,
              id: f,
              focusable: a,
              active: i,
              children: (0, w.jsx)(s.sG.span, {
                tabIndex: m ? 0 : -1,
                "data-orientation": p.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                  a ? p.onItemFocus(f) : e.preventDefault();
                }),
                onFocus: (0, o.m)(e.onFocus, () => p.onItemFocus(f)),
                onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey)
                    return void p.onItemShiftTab();
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                          ? "ArrowRight"
                          : "ArrowRight" === n
                            ? "ArrowLeft"
                            : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return N[o];
                  })(e, p.orientation, p.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = g()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) r.reverse();
                    else if ("prev" === t || "next" === t) {
                      "prev" === t && r.reverse();
                      let n = r.indexOf(e.currentTarget);
                      r = p.loop
                        ? (function (e, t) {
                            return e.map((r, n) => e[(t + n) % e.length]);
                          })(r, n + 1)
                        : r.slice(n + 1);
                    }
                    setTimeout(() => M(r));
                  }
                }),
                children:
                  "function" == typeof u
                    ? u({ isCurrentTabStop: m, hasTabStop: null != b })
                    : u,
              }),
            })
          );
        });
      P.displayName = O;
      var N = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function M(e, t = !1) {
        let r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var D = r(90691),
        L = r(69679),
        F = r(41918),
        z = ["Enter", " "],
        B = ["ArrowUp", "PageDown", "End"],
        H = ["ArrowDown", "PageUp", "Home", ...B],
        W = { ltr: [...z, "ArrowRight"], rtl: [...z, "ArrowLeft"] },
        U = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        V = "Menu",
        [G, $, K] = (0, u.N)(V),
        [q, Y] = (0, i.A)(V, [K, m.Bk, T]),
        X = (0, m.Bk)(),
        J = T(),
        [Z, Q] = q(V),
        [ee, et] = q(V),
        er = (e) => {
          let {
              __scopeMenu: t,
              open: r = !1,
              children: o,
              dir: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            s = X(t),
            [u, d] = n.useState(null),
            f = n.useRef(!1),
            p = (0, y.c)(i),
            h = (0, c.jH)(a);
          return (
            n.useEffect(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, w.jsx)(m.bL, {
              ...s,
              children: (0, w.jsx)(Z, {
                scope: t,
                open: r,
                onOpenChange: p,
                content: u,
                onContentChange: d,
                children: (0, w.jsx)(ee, {
                  scope: t,
                  onClose: n.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: h,
                  modal: l,
                  children: o,
                }),
              }),
            })
          );
        };
      er.displayName = V;
      var en = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = X(r);
        return (0, w.jsx)(m.Mz, { ...o, ...n, ref: t });
      });
      en.displayName = "MenuAnchor";
      var eo = "MenuPortal",
        [ea, ei] = q(eo, { forceMount: void 0 }),
        el = (e) => {
          let { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
            a = Q(eo, t);
          return (0, w.jsx)(ea, {
            scope: t,
            forceMount: r,
            children: (0, w.jsx)(v.C, {
              present: r || a.open,
              children: (0, w.jsx)(g.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      el.displayName = eo;
      var es = "MenuContent",
        [eu, ec] = q(es),
        ed = n.forwardRef((e, t) => {
          let r = ei(es, e.__scopeMenu),
            { forceMount: n = r.forceMount, ...o } = e,
            a = Q(es, e.__scopeMenu),
            i = et(es, e.__scopeMenu);
          return (0, w.jsx)(G.Provider, {
            scope: e.__scopeMenu,
            children: (0, w.jsx)(v.C, {
              present: n || a.open,
              children: (0, w.jsx)(G.Slot, {
                scope: e.__scopeMenu,
                children: i.modal
                  ? (0, w.jsx)(ef, { ...o, ref: t })
                  : (0, w.jsx)(ep, { ...o, ref: t }),
              }),
            }),
          });
        }),
        ef = n.forwardRef((e, t) => {
          let r = Q(es, e.__scopeMenu),
            i = n.useRef(null),
            l = (0, a.s)(t, i);
          return (
            n.useEffect(() => {
              let e = i.current;
              if (e) return (0, L.Eq)(e);
            }, []),
            (0, w.jsx)(em, {
              ...e,
              ref: l,
              trapFocus: r.open,
              disableOutsidePointerEvents: r.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, o.m)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 }
              ),
              onDismiss: () => r.onOpenChange(!1),
            })
          );
        }),
        ep = n.forwardRef((e, t) => {
          let r = Q(es, e.__scopeMenu);
          return (0, w.jsx)(em, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
          });
        }),
        eh = (0, D.TL)("MenuContent.ScrollLock"),
        em = n.forwardRef((e, t) => {
          let {
              __scopeMenu: r,
              loop: i = !1,
              trapFocus: l,
              onOpenAutoFocus: s,
              onCloseAutoFocus: u,
              disableOutsidePointerEvents: c,
              onEntryFocus: h,
              onEscapeKeyDown: g,
              onPointerDownOutside: v,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: x,
              disableOutsideScroll: E,
              ..._
            } = e,
            R = Q(es, r),
            S = et(es, r),
            C = X(r),
            T = J(r),
            j = $(r),
            [I, k] = n.useState(null),
            O = n.useRef(null),
            P = (0, a.s)(t, O, R.onContentChange),
            N = n.useRef(0),
            M = n.useRef(""),
            D = n.useRef(0),
            L = n.useRef(null),
            z = n.useRef("right"),
            W = n.useRef(0),
            U = E ? F.A : n.Fragment,
            V = (e) => {
              let t = M.current + e,
                r = j().filter((e) => !e.disabled),
                n = document.activeElement,
                o = r.find((e) => e.ref.current === n)?.textValue,
                a = (function (e, t, r) {
                  var n;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    a = r ? e.indexOf(r) : -1,
                    i =
                      ((n = Math.max(a, 0)),
                      e.map((t, r) => e[(n + r) % e.length]));
                  1 === o.length && (i = i.filter((e) => e !== r));
                  let l = i.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return l !== r ? l : void 0;
                })(
                  r.map((e) => e.textValue),
                  t,
                  o
                ),
                i = r.find((e) => e.textValue === a)?.ref.current;
              !(function e(t) {
                (M.current = t),
                  window.clearTimeout(N.current),
                  "" !== t && (N.current = window.setTimeout(() => e(""), 1e3));
              })(t),
                i && setTimeout(() => i.focus());
            };
          n.useEffect(() => () => window.clearTimeout(N.current), []),
            (0, f.Oh)();
          let G = n.useCallback(
            (e) =>
              z.current === L.current?.side &&
              (function (e, t) {
                return (
                  !!t &&
                  (function (e, t) {
                    let { x: r, y: n } = e,
                      o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      let i = t[e],
                        l = t[a],
                        s = i.x,
                        u = i.y,
                        c = l.x,
                        d = l.y;
                      u > n != d > n &&
                        r < ((c - s) * (n - u)) / (d - u) + s &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t)
                );
              })(e, L.current?.area),
            []
          );
          return (0, w.jsx)(eu, {
            scope: r,
            searchRef: M,
            onItemEnter: n.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G]
            ),
            onItemLeave: n.useCallback(
              (e) => {
                G(e) || (O.current?.focus(), k(null));
              },
              [G]
            ),
            onTriggerLeave: n.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G]
            ),
            pointerGraceTimerRef: D,
            onPointerGraceIntentChange: n.useCallback((e) => {
              L.current = e;
            }, []),
            children: (0, w.jsx)(U, {
              ...(E ? { as: eh, allowPinchZoom: !0 } : void 0),
              children: (0, w.jsx)(p.n, {
                asChild: !0,
                trapped: l,
                onMountAutoFocus: (0, o.m)(s, (e) => {
                  e.preventDefault(), O.current?.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: u,
                children: (0, w.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: g,
                  onPointerDownOutside: v,
                  onFocusOutside: y,
                  onInteractOutside: b,
                  onDismiss: x,
                  children: (0, w.jsx)(A, {
                    asChild: !0,
                    ...T,
                    dir: S.dir,
                    orientation: "vertical",
                    loop: i,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: (0, o.m)(h, (e) => {
                      S.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, w.jsx)(m.UC, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": eH(R.open),
                      "data-radix-menu-content": "",
                      dir: S.dir,
                      ...C,
                      ..._,
                      ref: P,
                      style: { outline: "none", ..._.style },
                      onKeyDown: (0, o.m)(_.onKeyDown, (e) => {
                        let t =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          r = e.ctrlKey || e.altKey || e.metaKey,
                          n = 1 === e.key.length;
                        t &&
                          ("Tab" === e.key && e.preventDefault(),
                          !r && n && V(e.key));
                        let o = O.current;
                        if (e.target !== o || !H.includes(e.key)) return;
                        e.preventDefault();
                        let a = j()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        B.includes(e.key) && a.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let r of e)
                              if (
                                r === t ||
                                (r.focus(), document.activeElement !== t)
                              )
                                return;
                          })(a);
                      }),
                      onBlur: (0, o.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(N.current), (M.current = ""));
                      }),
                      onPointerMove: (0, o.m)(
                        e.onPointerMove,
                        eV((e) => {
                          let t = e.target,
                            r = W.current !== e.clientX;
                          e.currentTarget.contains(t) &&
                            r &&
                            ((z.current =
                              e.clientX > W.current ? "right" : "left"),
                            (W.current = e.clientX));
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ed.displayName = es;
      var eg = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(s.sG.div, { role: "group", ...n, ref: t });
      });
      eg.displayName = "MenuGroup";
      var ev = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(s.sG.div, { ...n, ref: t });
      });
      ev.displayName = "MenuLabel";
      var ey = "MenuItem",
        ew = "menu.itemSelect",
        eb = n.forwardRef((e, t) => {
          let { disabled: r = !1, onSelect: i, ...l } = e,
            u = n.useRef(null),
            c = et(ey, e.__scopeMenu),
            d = ec(ey, e.__scopeMenu),
            f = (0, a.s)(t, u),
            p = n.useRef(!1);
          return (0, w.jsx)(ex, {
            ...l,
            ref: f,
            disabled: r,
            onClick: (0, o.m)(e.onClick, () => {
              let e = u.current;
              if (!r && e) {
                let t = new CustomEvent(ew, { bubbles: !0, cancelable: !0 });
                e.addEventListener(ew, (e) => i?.(e), { once: !0 }),
                  (0, s.hO)(e, t),
                  t.defaultPrevented ? (p.current = !1) : c.onClose();
              }
            }),
            onPointerDown: (t) => {
              e.onPointerDown?.(t), (p.current = !0);
            },
            onPointerUp: (0, o.m)(e.onPointerUp, (e) => {
              p.current || e.currentTarget?.click();
            }),
            onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
              let t = "" !== d.searchRef.current;
              r ||
                (t && " " === e.key) ||
                (z.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault()));
            }),
          });
        });
      eb.displayName = ey;
      var ex = n.forwardRef((e, t) => {
          let { __scopeMenu: r, disabled: i = !1, textValue: l, ...u } = e,
            c = ec(ey, r),
            d = J(r),
            f = n.useRef(null),
            p = (0, a.s)(t, f),
            [h, m] = n.useState(!1),
            [g, v] = n.useState("");
          return (
            n.useEffect(() => {
              let e = f.current;
              e && v((e.textContent ?? "").trim());
            }, [u.children]),
            (0, w.jsx)(G.ItemSlot, {
              scope: r,
              disabled: i,
              textValue: l ?? g,
              children: (0, w.jsx)(P, {
                asChild: !0,
                ...d,
                focusable: !i,
                children: (0, w.jsx)(s.sG.div, {
                  role: "menuitem",
                  "data-highlighted": h ? "" : void 0,
                  "aria-disabled": i || void 0,
                  "data-disabled": i ? "" : void 0,
                  ...u,
                  ref: p,
                  onPointerMove: (0, o.m)(
                    e.onPointerMove,
                    eV((e) => {
                      i
                        ? c.onItemLeave(e)
                        : (c.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: (0, o.m)(
                    e.onPointerLeave,
                    eV((e) => c.onItemLeave(e))
                  ),
                  onFocus: (0, o.m)(e.onFocus, () => m(!0)),
                  onBlur: (0, o.m)(e.onBlur, () => m(!1)),
                }),
              }),
            })
          );
        }),
        eE = n.forwardRef((e, t) => {
          let { checked: r = !1, onCheckedChange: n, ...a } = e;
          return (0, w.jsx)(eA, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0, w.jsx)(eb, {
              role: "menuitemcheckbox",
              "aria-checked": eW(r) ? "mixed" : r,
              ...a,
              ref: t,
              "data-state": eU(r),
              onSelect: (0, o.m)(a.onSelect, () => n?.(!!eW(r) || !r), {
                checkForDefaultPrevented: !1,
              }),
            }),
          });
        });
      eE.displayName = "MenuCheckboxItem";
      var e_ = "MenuRadioGroup",
        [eR, eS] = q(e_, { value: void 0, onValueChange: () => {} }),
        eC = n.forwardRef((e, t) => {
          let { value: r, onValueChange: n, ...o } = e,
            a = (0, y.c)(n);
          return (0, w.jsx)(eR, {
            scope: e.__scopeMenu,
            value: r,
            onValueChange: a,
            children: (0, w.jsx)(eg, { ...o, ref: t }),
          });
        });
      eC.displayName = e_;
      var eT = "MenuRadioItem",
        ej = n.forwardRef((e, t) => {
          let { value: r, ...n } = e,
            a = eS(eT, e.__scopeMenu),
            i = r === a.value;
          return (0, w.jsx)(eA, {
            scope: e.__scopeMenu,
            checked: i,
            children: (0, w.jsx)(eb, {
              role: "menuitemradio",
              "aria-checked": i,
              ...n,
              ref: t,
              "data-state": eU(i),
              onSelect: (0, o.m)(n.onSelect, () => a.onValueChange?.(r), {
                checkForDefaultPrevented: !1,
              }),
            }),
          });
        });
      ej.displayName = eT;
      var eI = "MenuItemIndicator",
        [eA, ek] = q(eI, { checked: !1 }),
        eO = n.forwardRef((e, t) => {
          let { __scopeMenu: r, forceMount: n, ...o } = e,
            a = ek(eI, r);
          return (0, w.jsx)(v.C, {
            present: n || eW(a.checked) || !0 === a.checked,
            children: (0, w.jsx)(s.sG.span, {
              ...o,
              ref: t,
              "data-state": eU(a.checked),
            }),
          });
        });
      eO.displayName = eI;
      var eP = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(s.sG.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...n,
          ref: t,
        });
      });
      eP.displayName = "MenuSeparator";
      var eN = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = X(r);
        return (0, w.jsx)(m.i3, { ...o, ...n, ref: t });
      });
      eN.displayName = "MenuArrow";
      var [eM, eD] = q("MenuSub"),
        eL = "MenuSubTrigger",
        eF = n.forwardRef((e, t) => {
          let r = Q(eL, e.__scopeMenu),
            i = et(eL, e.__scopeMenu),
            l = eD(eL, e.__scopeMenu),
            s = ec(eL, e.__scopeMenu),
            u = n.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = s,
            f = { __scopeMenu: e.__scopeMenu },
            p = n.useCallback(() => {
              u.current && window.clearTimeout(u.current), (u.current = null);
            }, []);
          return (
            n.useEffect(() => p, [p]),
            n.useEffect(() => {
              let e = c.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [c, d]),
            (0, w.jsx)(en, {
              asChild: !0,
              ...f,
              children: (0, w.jsx)(ex, {
                id: l.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": r.open,
                "aria-controls": l.contentId,
                "data-state": eH(r.open),
                ...e,
                ref: (0, a.t)(t, l.onTriggerChange),
                onClick: (t) => {
                  e.onClick?.(t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
                },
                onPointerMove: (0, o.m)(
                  e.onPointerMove,
                  eV((t) => {
                    s.onItemEnter(t),
                      !t.defaultPrevented &&
                        (e.disabled ||
                          r.open ||
                          u.current ||
                          (s.onPointerGraceIntentChange(null),
                          (u.current = window.setTimeout(() => {
                            r.onOpenChange(!0), p();
                          }, 100))));
                  })
                ),
                onPointerLeave: (0, o.m)(
                  e.onPointerLeave,
                  eV((e) => {
                    p();
                    let t = r.content?.getBoundingClientRect();
                    if (t) {
                      let n = r.content?.dataset.side,
                        o = "right" === n,
                        a = t[o ? "left" : "right"],
                        i = t[o ? "right" : "left"];
                      s.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (o ? -5 : 5), y: e.clientY },
                          { x: a, y: t.top },
                          { x: i, y: t.top },
                          { x: i, y: t.bottom },
                          { x: a, y: t.bottom },
                        ],
                        side: n,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => s.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((s.onTriggerLeave(e), e.defaultPrevented)) return;
                      s.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: (0, o.m)(e.onKeyDown, (t) => {
                  let n = "" !== s.searchRef.current;
                  e.disabled ||
                    (n && " " === t.key) ||
                    (W[i.dir].includes(t.key) &&
                      (r.onOpenChange(!0),
                      r.content?.focus(),
                      t.preventDefault()));
                }),
              }),
            })
          );
        });
      eF.displayName = eL;
      var ez = "MenuSubContent",
        eB = n.forwardRef((e, t) => {
          let r = ei(es, e.__scopeMenu),
            { forceMount: i = r.forceMount, ...l } = e,
            s = Q(es, e.__scopeMenu),
            u = et(es, e.__scopeMenu),
            c = eD(ez, e.__scopeMenu),
            d = n.useRef(null),
            f = (0, a.s)(t, d);
          return (0, w.jsx)(G.Provider, {
            scope: e.__scopeMenu,
            children: (0, w.jsx)(v.C, {
              present: i || s.open,
              children: (0, w.jsx)(G.Slot, {
                scope: e.__scopeMenu,
                children: (0, w.jsx)(em, {
                  id: c.contentId,
                  "aria-labelledby": c.triggerId,
                  ...l,
                  ref: f,
                  align: "start",
                  side: "rtl" === u.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    u.isUsingKeyboardRef.current && d.current?.focus(),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, o.m)(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && s.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, o.m)(e.onEscapeKeyDown, (e) => {
                    u.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      r = U[u.dir].includes(e.key);
                    t &&
                      r &&
                      (s.onOpenChange(!1),
                      c.trigger?.focus(),
                      e.preventDefault());
                  }),
                }),
              }),
            }),
          });
        });
      function eH(e) {
        return e ? "open" : "closed";
      }
      function eW(e) {
        return "indeterminate" === e;
      }
      function eU(e) {
        return eW(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eV(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      eB.displayName = ez;
      var eG = "DropdownMenu",
        [e$, eK] = (0, i.A)(eG, [Y]),
        eq = Y(),
        [eY, eX] = e$(eG),
        eJ = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              dir: o,
              open: a,
              defaultOpen: i,
              onOpenChange: s,
              modal: u = !0,
            } = e,
            c = eq(t),
            d = n.useRef(null),
            [f, p] = (0, l.i)({
              prop: a,
              defaultProp: i ?? !1,
              onChange: s,
              caller: eG,
            });
          return (0, w.jsx)(eY, {
            scope: t,
            triggerId: (0, h.B)(),
            triggerRef: d,
            contentId: (0, h.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: u,
            children: (0, w.jsx)(er, {
              ...c,
              open: f,
              onOpenChange: p,
              dir: o,
              modal: u,
              children: r,
            }),
          });
        };
      eJ.displayName = eG;
      var eZ = "DropdownMenuTrigger",
        eQ = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, disabled: n = !1, ...i } = e,
            l = eX(eZ, r),
            u = eq(r);
          return (0, w.jsx)(en, {
            asChild: !0,
            ...u,
            children: (0, w.jsx)(s.sG.button, {
              type: "button",
              id: l.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": l.open,
              "aria-controls": l.open ? l.contentId : void 0,
              "data-state": l.open ? "open" : "closed",
              "data-disabled": n ? "" : void 0,
              disabled: n,
              ...i,
              ref: (0, a.t)(t, l.triggerRef),
              onPointerDown: (0, o.m)(e.onPointerDown, (e) => {
                !n &&
                  0 === e.button &&
                  !1 === e.ctrlKey &&
                  (l.onOpenToggle(), l.open || e.preventDefault());
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                !n &&
                  (["Enter", " "].includes(e.key) && l.onOpenToggle(),
                  "ArrowDown" === e.key && l.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      eQ.displayName = eZ;
      var e0 = (e) => {
        let { __scopeDropdownMenu: t, ...r } = e,
          n = eq(t);
        return (0, w.jsx)(el, { ...n, ...r });
      };
      e0.displayName = "DropdownMenuPortal";
      var e1 = "DropdownMenuContent",
        e2 = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...a } = e,
            i = eX(e1, r),
            l = eq(r),
            s = n.useRef(!1);
          return (0, w.jsx)(ed, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...l,
            ...a,
            ref: t,
            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
              s.current || i.triggerRef.current?.focus(),
                (s.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, o.m)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                n = 2 === t.button || r;
              (!i.modal || n) && (s.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      (e2.displayName = e1),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eg, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(ev, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuLabel");
      var e6 = n.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = eq(r);
        return (0, w.jsx)(eb, { ...o, ...n, ref: t });
      });
      (e6.displayName = "DropdownMenuItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eE, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuCheckboxItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eC, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(ej, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eO, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuItemIndicator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eP, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSeparator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eN, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuArrow"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eF, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSubTrigger"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eq(r);
          return (0, w.jsx)(eB, {
            ...o,
            ...n,
            ref: t,
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        }).displayName = "DropdownMenuSubContent");
      var e4 = eJ,
        e5 = eQ,
        e3 = e0,
        e8 = e2,
        e9 = e6;
    },
    8450: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("arrow-up", [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
      ]);
    },
    9575: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("book-open", [
        ["path", { d: "M12 7v14", key: "1akyts" }],
        [
          "path",
          {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y",
          },
        ],
      ]);
    },
    10097: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if (
                (0, i.isNextRouterError)(t) ||
                (0, a.isBailoutToCSRError)(t) ||
                (0, s.isDynamicServerError)(t) ||
                (0, l.isDynamicPostpone)(t) ||
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
        l = r(94924),
        s = r(8194);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    10545: (e, t, r) => {
      "use strict";
      e.exports = r(69358).vendored.contexts.RouterContext;
    },
    11486: (e, t, r) => {
      "use strict";
      let n, o;
      r.d(t, { Y_: () => tc });
      var a,
        i,
        l,
        s,
        u = r(60159),
        c = "vercel.ai.error",
        d = Symbol.for(c),
        f = class e extends Error {
          constructor({ name: e, message: t, cause: r }) {
            super(t), (this[a] = !0), (this.name = e), (this.cause = r);
          }
          static isInstance(t) {
            return e.hasMarker(t, c);
          }
          static hasMarker(e, t) {
            let r = Symbol.for(t);
            return (
              null != e &&
              "object" == typeof e &&
              r in e &&
              "boolean" == typeof e[r] &&
              !0 === e[r]
            );
          }
        };
      a = d;
      var p = f,
        h = Symbol.for("vercel.ai.error.AI_APICallError"),
        m = Symbol.for("vercel.ai.error.AI_EmptyResponseBodyError");
      function g(e) {
        return null == e
          ? "unknown error"
          : "string" == typeof e
            ? e
            : e instanceof Error
              ? e.message
              : JSON.stringify(e);
      }
      var v = "AI_InvalidArgumentError",
        y = `vercel.ai.error.${v}`,
        w = Symbol.for(y),
        b = class extends p {
          constructor({ message: e, cause: t, argument: r }) {
            super({ name: v, message: e, cause: t }),
              (this[i] = !0),
              (this.argument = r);
          }
          static isInstance(e) {
            return p.hasMarker(e, y);
          }
        };
      i = w;
      var x = Symbol.for("vercel.ai.error.AI_InvalidPromptError"),
        E = Symbol.for("vercel.ai.error.AI_InvalidResponseDataError"),
        _ = "AI_JSONParseError",
        R = `vercel.ai.error.${_}`,
        S = Symbol.for(R),
        C = class extends p {
          constructor({ text: e, cause: t }) {
            super({
              name: _,
              message: `JSON parsing failed: Text: ${e}.
Error message: ${g(t)}`,
              cause: t,
            }),
              (this[l] = !0),
              (this.text = e);
          }
          static isInstance(e) {
            return p.hasMarker(e, R);
          }
        };
      l = S;
      var T = Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"),
        j = Symbol.for("vercel.ai.error.AI_LoadSettingError"),
        I = Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"),
        A = Symbol.for("vercel.ai.error.AI_NoSuchModelError"),
        k = Symbol.for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError"),
        O = "AI_TypeValidationError",
        P = `vercel.ai.error.${O}`,
        N = Symbol.for(P),
        M = class e extends p {
          constructor({ value: e, cause: t }) {
            super({
              name: O,
              message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${g(t)}`,
              cause: t,
            }),
              (this[s] = !0),
              (this.value = e);
          }
          static isInstance(e) {
            return p.hasMarker(e, P);
          }
          static wrap({ value: t, cause: r }) {
            return e.isInstance(r) && r.value === t
              ? r
              : new e({ value: t, cause: r });
          }
        };
      s = N;
      var D = Symbol.for("vercel.ai.error.AI_UnsupportedFunctionalityError");
      function L(e) {
        return (
          null === e ||
          "string" == typeof e ||
          "number" == typeof e ||
          "boolean" == typeof e ||
          (Array.isArray(e)
            ? e.every(L)
            : "object" == typeof e &&
              Object.entries(e).every(([e, t]) => "string" == typeof e && L(t)))
        );
      }
      let F =
        (e, t = 21) =>
        (r = t) => {
          let n = "",
            o = 0 | r;
          for (; o--; ) n += e[(Math.random() * e.length) | 0];
          return n;
        };
      var z = r(70821),
        B = (({
          prefix: e,
          size: t = 16,
          alphabet:
            r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
          separator: n = "-",
        } = {}) => {
          let o = F(r, t);
          if (null == e) return o;
          if (r.includes(n))
            throw new b({
              argument: "separator",
              message: `The separator "${n}" must not be part of the alphabet "${r}".`,
            });
          return (t) => `${e}${n}${o(t)}`;
        })();
      function H(e) {
        return (
          e instanceof Error &&
          ("AbortError" === e.name || "TimeoutError" === e.name)
        );
      }
      var W = Symbol.for("vercel.ai.validator");
      function U({ text: e, schema: t }) {
        try {
          let r = z.parse(e);
          if (null == t) return { success: !0, value: r, rawValue: r };
          let n = (function ({ value: e, schema: t }) {
            var r;
            let n =
              "object" == typeof t &&
              null !== t &&
              W in t &&
              !0 === t[W] &&
              "validate" in t
                ? t
                : ((r = t),
                  {
                    [W]: !0,
                    validate: (e) => {
                      let t = r.safeParse(e);
                      return t.success
                        ? { success: !0, value: t.data }
                        : { success: !1, error: t.error };
                    },
                  });
            try {
              if (null == n.validate) return { success: !0, value: e };
              let t = n.validate(e);
              if (t.success) return t;
              return {
                success: !1,
                error: M.wrap({ value: e, cause: t.error }),
              };
            } catch (t) {
              return { success: !1, error: M.wrap({ value: e, cause: t }) };
            }
          })({ value: r, schema: t });
          return n.success ? { ...n, rawValue: r } : n;
        } catch (t) {
          return {
            success: !1,
            error: C.isInstance(t) ? t : new C({ text: e, cause: t }),
          };
        }
      }
      var V = () => globalThis.fetch,
        { btoa: G, atob: $ } = globalThis;
      Symbol("Let zodToJsonSchema decide on which parser to use");
      let K = new Set(
        "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
      );
      function q(e, t) {
        if (!t.applyRegexFlags || !e.flags) return e.source;
        let r = {
            i: e.flags.includes("i"),
            m: e.flags.includes("m"),
            s: e.flags.includes("s"),
          },
          n = r.i ? e.source.toLowerCase() : e.source,
          o = "",
          a = !1,
          i = !1,
          l = !1;
        for (let e = 0; e < n.length; e++) {
          if (a) {
            (o += n[e]), (a = !1);
            continue;
          }
          if (r.i) {
            if (i) {
              if (n[e].match(/[a-z]/)) {
                l
                  ? ((o += n[e]),
                    (o += `${n[e - 2]}-${n[e]}`.toUpperCase()),
                    (l = !1))
                  : "-" === n[e + 1] && n[e + 2]?.match(/[a-z]/)
                    ? ((o += n[e]), (l = !0))
                    : (o += `${n[e]}${n[e].toUpperCase()}`);
                continue;
              }
            } else if (n[e].match(/[a-z]/)) {
              o += `[${n[e]}${n[e].toUpperCase()}]`;
              continue;
            }
          }
          if (r.m) {
            if ("^" === n[e]) {
              o += `(^|(?<=[\r
]))`;
              continue;
            } else if ("$" === n[e]) {
              o += `($|(?=[\r
]))`;
              continue;
            }
          }
          if (r.s && "." === n[e]) {
            o += i
              ? `${n[e]}\r
`
              : `[${n[e]}\r
]`;
            continue;
          }
          (o += n[e]),
            "\\" === n[e]
              ? (a = !0)
              : i && "]" === n[e]
                ? (i = !1)
                : i || "[" !== n[e] || (i = !0);
        }
        try {
          new RegExp(o);
        } catch {
          return (
            console.warn(
              `Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`
            ),
            e.source
          );
        }
        return o;
      }
      let Y = (e, t) => {
        let r = 0;
        for (; r < e.length && r < t.length && e[r] === t[r]; r++);
        return [(e.length - r).toString(), ...t.slice(r)].join("/");
      };
      var X = {
          code: "0",
          name: "text",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"text" parts expect a string value.');
            return { type: "text", value: e };
          },
        },
        J = {
          code: "3",
          name: "error",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"error" parts expect a string value.');
            return { type: "error", value: e };
          },
        },
        Z = {
          code: "4",
          name: "assistant_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("id" in e) ||
              !("role" in e) ||
              !("content" in e) ||
              "string" != typeof e.id ||
              "string" != typeof e.role ||
              "assistant" !== e.role ||
              !Array.isArray(e.content) ||
              !e.content.every(
                (e) =>
                  null != e &&
                  "object" == typeof e &&
                  "type" in e &&
                  "text" === e.type &&
                  "text" in e &&
                  null != e.text &&
                  "object" == typeof e.text &&
                  "value" in e.text &&
                  "string" == typeof e.text.value
              )
            )
              throw Error(
                '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
              );
            return { type: "assistant_message", value: e };
          },
        },
        Q = {
          code: "5",
          name: "assistant_control_data",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("threadId" in e) ||
              !("messageId" in e) ||
              "string" != typeof e.threadId ||
              "string" != typeof e.messageId
            )
              throw Error(
                '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
              );
            return {
              type: "assistant_control_data",
              value: { threadId: e.threadId, messageId: e.messageId },
            };
          },
        },
        ee = {
          code: "6",
          name: "data_message",
          parse: (e) => {
            if (
              null == e ||
              "object" != typeof e ||
              !("role" in e) ||
              !("data" in e) ||
              "string" != typeof e.role ||
              "data" !== e.role
            )
              throw Error(
                '"data_message" parts expect an object with a "role" and "data" property.'
              );
            return { type: "data_message", value: e };
          },
        },
        et = [X, J, Z, Q, ee],
        er = {
          [X.code]: X,
          [J.code]: J,
          [Z.code]: Z,
          [Q.code]: Q,
          [ee.code]: ee,
        };
      X.name,
        X.code,
        J.name,
        J.code,
        Z.name,
        Z.code,
        Q.name,
        Q.code,
        ee.name,
        ee.code;
      var en = et.map((e) => e.code),
        eo = [
          {
            code: "0",
            name: "text",
            parse: (e) => {
              if ("string" != typeof e)
                throw Error('"text" parts expect a string value.');
              return { type: "text", value: e };
            },
          },
          {
            code: "2",
            name: "data",
            parse: (e) => {
              if (!Array.isArray(e))
                throw Error('"data" parts expect an array value.');
              return { type: "data", value: e };
            },
          },
          {
            code: "3",
            name: "error",
            parse: (e) => {
              if ("string" != typeof e)
                throw Error('"error" parts expect a string value.');
              return { type: "error", value: e };
            },
          },
          {
            code: "8",
            name: "message_annotations",
            parse: (e) => {
              if (!Array.isArray(e))
                throw Error(
                  '"message_annotations" parts expect an array value.'
                );
              return { type: "message_annotations", value: e };
            },
          },
          {
            code: "9",
            name: "tool_call",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("toolName" in e) ||
                "string" != typeof e.toolName ||
                !("args" in e) ||
                "object" != typeof e.args
              )
                throw Error(
                  '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
                );
              return { type: "tool_call", value: e };
            },
          },
          {
            code: "a",
            name: "tool_result",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("result" in e)
              )
                throw Error(
                  '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
                );
              return { type: "tool_result", value: e };
            },
          },
          {
            code: "b",
            name: "tool_call_streaming_start",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("toolName" in e) ||
                "string" != typeof e.toolName
              )
                throw Error(
                  '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
                );
              return { type: "tool_call_streaming_start", value: e };
            },
          },
          {
            code: "c",
            name: "tool_call_delta",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("argsTextDelta" in e) ||
                "string" != typeof e.argsTextDelta
              )
                throw Error(
                  '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
                );
              return { type: "tool_call_delta", value: e };
            },
          },
          {
            code: "d",
            name: "finish_message",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("finishReason" in e) ||
                "string" != typeof e.finishReason
              )
                throw Error(
                  '"finish_message" parts expect an object with a "finishReason" property.'
                );
              let t = { finishReason: e.finishReason };
              return (
                "usage" in e &&
                  null != e.usage &&
                  "object" == typeof e.usage &&
                  "promptTokens" in e.usage &&
                  "completionTokens" in e.usage &&
                  (t.usage = {
                    promptTokens:
                      "number" == typeof e.usage.promptTokens
                        ? e.usage.promptTokens
                        : Number.NaN,
                    completionTokens:
                      "number" == typeof e.usage.completionTokens
                        ? e.usage.completionTokens
                        : Number.NaN,
                  }),
                { type: "finish_message", value: t }
              );
            },
          },
          {
            code: "e",
            name: "finish_step",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("finishReason" in e) ||
                "string" != typeof e.finishReason
              )
                throw Error(
                  '"finish_step" parts expect an object with a "finishReason" property.'
                );
              let t = { finishReason: e.finishReason, isContinued: !1 };
              return (
                "usage" in e &&
                  null != e.usage &&
                  "object" == typeof e.usage &&
                  "promptTokens" in e.usage &&
                  "completionTokens" in e.usage &&
                  (t.usage = {
                    promptTokens:
                      "number" == typeof e.usage.promptTokens
                        ? e.usage.promptTokens
                        : Number.NaN,
                    completionTokens:
                      "number" == typeof e.usage.completionTokens
                        ? e.usage.completionTokens
                        : Number.NaN,
                  }),
                "isContinued" in e &&
                  "boolean" == typeof e.isContinued &&
                  (t.isContinued = e.isContinued),
                { type: "finish_step", value: t }
              );
            },
          },
          {
            code: "f",
            name: "start_step",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("messageId" in e) ||
                "string" != typeof e.messageId
              )
                throw Error(
                  '"start_step" parts expect an object with an "id" property.'
                );
              return { type: "start_step", value: { messageId: e.messageId } };
            },
          },
          {
            code: "g",
            name: "reasoning",
            parse: (e) => {
              if ("string" != typeof e)
                throw Error('"reasoning" parts expect a string value.');
              return { type: "reasoning", value: e };
            },
          },
          {
            code: "h",
            name: "source",
            parse: (e) => {
              if (null == e || "object" != typeof e)
                throw Error('"source" parts expect a Source object.');
              return { type: "source", value: e };
            },
          },
          {
            code: "i",
            name: "redacted_reasoning",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("data" in e) ||
                "string" != typeof e.data
              )
                throw Error(
                  '"redacted_reasoning" parts expect an object with a "data" property.'
                );
              return { type: "redacted_reasoning", value: { data: e.data } };
            },
          },
          {
            code: "j",
            name: "reasoning_signature",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("signature" in e) ||
                "string" != typeof e.signature
              )
                throw Error(
                  '"reasoning_signature" parts expect an object with a "signature" property.'
                );
              return {
                type: "reasoning_signature",
                value: { signature: e.signature },
              };
            },
          },
          {
            code: "k",
            name: "file",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("data" in e) ||
                "string" != typeof e.data ||
                !("mimeType" in e) ||
                "string" != typeof e.mimeType
              )
                throw Error(
                  '"file" parts expect an object with a "data" and "mimeType" property.'
                );
              return { type: "file", value: e };
            },
          },
        ],
        ea = Object.fromEntries(eo.map((e) => [e.code, e]));
      Object.fromEntries(eo.map((e) => [e.name, e.code]));
      var ei = eo.map((e) => e.code),
        el = (e) => {
          let t = e.indexOf(":");
          if (-1 === t)
            throw Error("Failed to parse stream string. No separator found.");
          let r = e.slice(0, t);
          if (!ei.includes(r))
            throw Error(`Failed to parse stream string. Invalid code ${r}.`);
          let n = JSON.parse(e.slice(t + 1));
          return ea[r].parse(n);
        };
      async function es({
        stream: e,
        onTextPart: t,
        onReasoningPart: r,
        onReasoningSignaturePart: n,
        onRedactedReasoningPart: o,
        onSourcePart: a,
        onFilePart: i,
        onDataPart: l,
        onErrorPart: s,
        onToolCallStreamingStartPart: u,
        onToolCallDeltaPart: c,
        onToolCallPart: d,
        onToolResultPart: f,
        onMessageAnnotationsPart: p,
        onFinishMessagePart: h,
        onFinishStepPart: m,
        onStartStepPart: g,
      }) {
        let v = e.getReader(),
          y = new TextDecoder(),
          w = [],
          b = 0;
        for (;;) {
          let { value: e } = await v.read();
          if (e && (w.push(e), (b += e.length), 10 !== e[e.length - 1]))
            continue;
          if (0 === w.length) break;
          let x = (function (e, t) {
            let r = new Uint8Array(t),
              n = 0;
            for (let t of e) r.set(t, n), (n += t.length);
            return (e.length = 0), r;
          })(w, b);
          for (let { type: e, value: v } of ((b = 0),
          y
            .decode(x, { stream: !0 })
            .split("\n")
            .filter((e) => "" !== e)
            .map(el)))
            switch (e) {
              case "text":
                await (null == t ? void 0 : t(v));
                break;
              case "reasoning":
                await (null == r ? void 0 : r(v));
                break;
              case "reasoning_signature":
                await (null == n ? void 0 : n(v));
                break;
              case "redacted_reasoning":
                await (null == o ? void 0 : o(v));
                break;
              case "file":
                await (null == i ? void 0 : i(v));
                break;
              case "source":
                await (null == a ? void 0 : a(v));
                break;
              case "data":
                await (null == l ? void 0 : l(v));
                break;
              case "error":
                await (null == s ? void 0 : s(v));
                break;
              case "message_annotations":
                await (null == p ? void 0 : p(v));
                break;
              case "tool_call_streaming_start":
                await (null == u ? void 0 : u(v));
                break;
              case "tool_call_delta":
                await (null == c ? void 0 : c(v));
                break;
              case "tool_call":
                await (null == d ? void 0 : d(v));
                break;
              case "tool_result":
                await (null == f ? void 0 : f(v));
                break;
              case "finish_message":
                await (null == h ? void 0 : h(v));
                break;
              case "finish_step":
                await (null == m ? void 0 : m(v));
                break;
              case "start_step":
                await (null == g ? void 0 : g(v));
                break;
              default:
                throw Error(`Unknown stream part type: ${e}`);
            }
        }
      }
      async function eu({
        stream: e,
        update: t,
        onToolCall: r,
        onFinish: n,
        generateId: o = B,
        getCurrentDate: a = () => new Date(),
        lastMessage: i,
      }) {
        var l, s;
        let u,
          c,
          d,
          f = (null == i ? void 0 : i.role) === "assistant",
          p = f
            ? 1 +
              (null !=
              (s =
                null == (l = i.toolInvocations)
                  ? void 0
                  : l.reduce((e, t) => {
                      var r;
                      return Math.max(e, null != (r = t.step) ? r : 0);
                    }, 0))
                ? s
                : 0)
            : 0,
          h = f
            ? structuredClone(i)
            : {
                id: o(),
                createdAt: a(),
                role: "assistant",
                content: "",
                parts: [],
              };
        function m(e, t) {
          let r = h.parts.find(
            (t) =>
              "tool-invocation" === t.type && t.toolInvocation.toolCallId === e
          );
          null != r
            ? (r.toolInvocation = t)
            : h.parts.push({ type: "tool-invocation", toolInvocation: t });
        }
        let g = [],
          v = f ? (null == i ? void 0 : i.annotations) : void 0,
          y = {},
          w = { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
          b = "unknown";
        function x() {
          let e = [...g];
          (null == v ? void 0 : v.length) && (h.annotations = v),
            t({
              message: { ...structuredClone(h), revisionId: o() },
              data: e,
              replaceLastMessage: f,
            });
        }
        await es({
          stream: e,
          onTextPart(e) {
            null == u
              ? ((u = { type: "text", text: e }), h.parts.push(u))
              : (u.text += e),
              (h.content += e),
              x();
          },
          onReasoningPart(e) {
            var t;
            null == d
              ? ((d = { type: "text", text: e }),
                null != c && c.details.push(d))
              : (d.text += e),
              null == c
                ? ((c = { type: "reasoning", reasoning: e, details: [d] }),
                  h.parts.push(c))
                : (c.reasoning += e),
              (h.reasoning = (null != (t = h.reasoning) ? t : "") + e),
              x();
          },
          onReasoningSignaturePart(e) {
            null != d && (d.signature = e.signature);
          },
          onRedactedReasoningPart(e) {
            null == c &&
              ((c = { type: "reasoning", reasoning: "", details: [] }),
              h.parts.push(c)),
              c.details.push({ type: "redacted", data: e.data }),
              (d = void 0),
              x();
          },
          onFilePart(e) {
            h.parts.push({ type: "file", mimeType: e.mimeType, data: e.data }),
              x();
          },
          onSourcePart(e) {
            h.parts.push({ type: "source", source: e }), x();
          },
          onToolCallStreamingStartPart(e) {
            null == h.toolInvocations && (h.toolInvocations = []),
              (y[e.toolCallId] = {
                text: "",
                step: p,
                toolName: e.toolName,
                index: h.toolInvocations.length,
              });
            let t = {
              state: "partial-call",
              step: p,
              toolCallId: e.toolCallId,
              toolName: e.toolName,
              args: void 0,
            };
            h.toolInvocations.push(t), m(e.toolCallId, t), x();
          },
          onToolCallDeltaPart(e) {
            let t = y[e.toolCallId];
            t.text += e.argsTextDelta;
            let { value: r } = (function (e) {
                if (void 0 === e)
                  return { value: void 0, state: "undefined-input" };
                let t = U({ text: e });
                return t.success
                  ? { value: t.value, state: "successful-parse" }
                  : (t = U({
                        text: (function (e) {
                          let t = ["ROOT"],
                            r = -1,
                            n = null;
                          function o(e, o, a) {
                            switch (e) {
                              case '"':
                                (r = o),
                                  t.pop(),
                                  t.push(a),
                                  t.push("INSIDE_STRING");
                                break;
                              case "f":
                              case "t":
                              case "n":
                                (r = o),
                                  (n = o),
                                  t.pop(),
                                  t.push(a),
                                  t.push("INSIDE_LITERAL");
                                break;
                              case "-":
                                t.pop(), t.push(a), t.push("INSIDE_NUMBER");
                                break;
                              case "0":
                              case "1":
                              case "2":
                              case "3":
                              case "4":
                              case "5":
                              case "6":
                              case "7":
                              case "8":
                              case "9":
                                (r = o),
                                  t.pop(),
                                  t.push(a),
                                  t.push("INSIDE_NUMBER");
                                break;
                              case "{":
                                (r = o),
                                  t.pop(),
                                  t.push(a),
                                  t.push("INSIDE_OBJECT_START");
                                break;
                              case "[":
                                (r = o),
                                  t.pop(),
                                  t.push(a),
                                  t.push("INSIDE_ARRAY_START");
                            }
                          }
                          function a(e, n) {
                            switch (e) {
                              case ",":
                                t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
                                break;
                              case "}":
                                (r = n), t.pop();
                            }
                          }
                          function i(e, n) {
                            switch (e) {
                              case ",":
                                t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                                break;
                              case "]":
                                (r = n), t.pop();
                            }
                          }
                          for (let l = 0; l < e.length; l++) {
                            let s = e[l];
                            switch (t[t.length - 1]) {
                              case "ROOT":
                                o(s, l, "FINISH");
                                break;
                              case "INSIDE_OBJECT_START":
                                switch (s) {
                                  case '"':
                                    t.pop(), t.push("INSIDE_OBJECT_KEY");
                                    break;
                                  case "}":
                                    (r = l), t.pop();
                                }
                                break;
                              case "INSIDE_OBJECT_AFTER_COMMA":
                                '"' === s &&
                                  (t.pop(), t.push("INSIDE_OBJECT_KEY"));
                                break;
                              case "INSIDE_OBJECT_KEY":
                                '"' === s &&
                                  (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
                                break;
                              case "INSIDE_OBJECT_AFTER_KEY":
                                ":" === s &&
                                  (t.pop(),
                                  t.push("INSIDE_OBJECT_BEFORE_VALUE"));
                                break;
                              case "INSIDE_OBJECT_BEFORE_VALUE":
                                o(s, l, "INSIDE_OBJECT_AFTER_VALUE");
                                break;
                              case "INSIDE_OBJECT_AFTER_VALUE":
                                a(s, l);
                                break;
                              case "INSIDE_STRING":
                                switch (s) {
                                  case '"':
                                    t.pop(), (r = l);
                                    break;
                                  case "\\":
                                    t.push("INSIDE_STRING_ESCAPE");
                                    break;
                                  default:
                                    r = l;
                                }
                                break;
                              case "INSIDE_ARRAY_START":
                                "]" === s
                                  ? ((r = l), t.pop())
                                  : ((r = l),
                                    o(s, l, "INSIDE_ARRAY_AFTER_VALUE"));
                                break;
                              case "INSIDE_ARRAY_AFTER_VALUE":
                                switch (s) {
                                  case ",":
                                    t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                                    break;
                                  case "]":
                                    (r = l), t.pop();
                                    break;
                                  default:
                                    r = l;
                                }
                                break;
                              case "INSIDE_ARRAY_AFTER_COMMA":
                                o(s, l, "INSIDE_ARRAY_AFTER_VALUE");
                                break;
                              case "INSIDE_STRING_ESCAPE":
                                t.pop(), (r = l);
                                break;
                              case "INSIDE_NUMBER":
                                switch (s) {
                                  case "0":
                                  case "1":
                                  case "2":
                                  case "3":
                                  case "4":
                                  case "5":
                                  case "6":
                                  case "7":
                                  case "8":
                                  case "9":
                                    r = l;
                                    break;
                                  case "e":
                                  case "E":
                                  case "-":
                                  case ".":
                                    break;
                                  case ",":
                                    t.pop(),
                                      "INSIDE_ARRAY_AFTER_VALUE" ===
                                        t[t.length - 1] && i(s, l),
                                      "INSIDE_OBJECT_AFTER_VALUE" ===
                                        t[t.length - 1] && a(s, l);
                                    break;
                                  case "}":
                                    t.pop(),
                                      "INSIDE_OBJECT_AFTER_VALUE" ===
                                        t[t.length - 1] && a(s, l);
                                    break;
                                  case "]":
                                    t.pop(),
                                      "INSIDE_ARRAY_AFTER_VALUE" ===
                                        t[t.length - 1] && i(s, l);
                                    break;
                                  default:
                                    t.pop();
                                }
                                break;
                              case "INSIDE_LITERAL": {
                                let o = e.substring(n, l + 1);
                                "false".startsWith(o) ||
                                "true".startsWith(o) ||
                                "null".startsWith(o)
                                  ? (r = l)
                                  : (t.pop(),
                                    "INSIDE_OBJECT_AFTER_VALUE" ===
                                    t[t.length - 1]
                                      ? a(s, l)
                                      : "INSIDE_ARRAY_AFTER_VALUE" ===
                                          t[t.length - 1] && i(s, l));
                              }
                            }
                          }
                          let l = e.slice(0, r + 1);
                          for (let r = t.length - 1; r >= 0; r--)
                            switch (t[r]) {
                              case "INSIDE_STRING":
                                l += '"';
                                break;
                              case "INSIDE_OBJECT_KEY":
                              case "INSIDE_OBJECT_AFTER_KEY":
                              case "INSIDE_OBJECT_AFTER_COMMA":
                              case "INSIDE_OBJECT_START":
                              case "INSIDE_OBJECT_BEFORE_VALUE":
                              case "INSIDE_OBJECT_AFTER_VALUE":
                                l += "}";
                                break;
                              case "INSIDE_ARRAY_START":
                              case "INSIDE_ARRAY_AFTER_COMMA":
                              case "INSIDE_ARRAY_AFTER_VALUE":
                                l += "]";
                                break;
                              case "INSIDE_LITERAL": {
                                let t = e.substring(n, e.length);
                                "true".startsWith(t)
                                  ? (l += "true".slice(t.length))
                                  : "false".startsWith(t)
                                    ? (l += "false".slice(t.length))
                                    : "null".startsWith(t) &&
                                      (l += "null".slice(t.length));
                              }
                            }
                          return l;
                        })(e),
                      })).success
                    ? { value: t.value, state: "repaired-parse" }
                    : { value: void 0, state: "failed-parse" };
              })(t.text),
              n = {
                state: "partial-call",
                step: t.step,
                toolCallId: e.toolCallId,
                toolName: t.toolName,
                args: r,
              };
            (h.toolInvocations[t.index] = n), m(e.toolCallId, n), x();
          },
          async onToolCallPart(e) {
            let t = { state: "call", step: p, ...e };
            if (
              (null != y[e.toolCallId]
                ? (h.toolInvocations[y[e.toolCallId].index] = t)
                : (null == h.toolInvocations && (h.toolInvocations = []),
                  h.toolInvocations.push(t)),
              m(e.toolCallId, t),
              x(),
              r)
            ) {
              let t = await r({ toolCall: e });
              if (null != t) {
                let r = { state: "result", step: p, ...e, result: t };
                (h.toolInvocations[h.toolInvocations.length - 1] = r),
                  m(e.toolCallId, r),
                  x();
              }
            }
          },
          onToolResultPart(e) {
            let t = h.toolInvocations;
            if (null == t)
              throw Error("tool_result must be preceded by a tool_call");
            let r = t.findIndex((t) => t.toolCallId === e.toolCallId);
            if (-1 === r)
              throw Error(
                "tool_result must be preceded by a tool_call with the same toolCallId"
              );
            let n = { ...t[r], state: "result", ...e };
            (t[r] = n), m(e.toolCallId, n), x();
          },
          onDataPart(e) {
            g.push(...e), x();
          },
          onMessageAnnotationsPart(e) {
            null == v ? (v = [...e]) : v.push(...e), x();
          },
          onFinishStepPart(e) {
            (p += 1),
              (u = e.isContinued ? u : void 0),
              (c = void 0),
              (d = void 0);
          },
          onStartStepPart(e) {
            f || (h.id = e.messageId),
              h.parts.push({ type: "step-start" }),
              x();
          },
          onFinishMessagePart(e) {
            (b = e.finishReason),
              null != e.usage &&
                (w = (function ({ promptTokens: e, completionTokens: t }) {
                  return {
                    promptTokens: e,
                    completionTokens: t,
                    totalTokens: e + t,
                  };
                })(e.usage));
          },
          onErrorPart(e) {
            throw Error(e);
          },
        }),
          null == n || n({ message: h, finishReason: b, usage: w });
      }
      async function ec({ stream: e, onTextPart: t }) {
        let r = e.pipeThrough(new TextDecoderStream()).getReader();
        for (;;) {
          let { done: e, value: n } = await r.read();
          if (e) break;
          await t(n);
        }
      }
      async function ed({
        stream: e,
        update: t,
        onFinish: r,
        getCurrentDate: n = () => new Date(),
        generateId: o = B,
      }) {
        let a = { type: "text", text: "" },
          i = {
            id: o(),
            createdAt: n(),
            role: "assistant",
            content: "",
            parts: [a],
          };
        await ec({
          stream: e,
          onTextPart: (e) => {
            (i.content += e),
              (a.text += e),
              t({ message: { ...i }, data: [], replaceLastMessage: !1 });
          },
        }),
          null == r ||
            r(i, {
              usage: {
                completionTokens: NaN,
                promptTokens: NaN,
                totalTokens: NaN,
              },
              finishReason: "unknown",
            });
      }
      var ef = () => fetch;
      async function ep({
        api: e,
        body: t,
        streamProtocol: r = "data",
        credentials: n,
        headers: o,
        abortController: a,
        restoreMessagesOnFailure: i,
        onResponse: l,
        onUpdate: s,
        onFinish: u,
        onToolCall: c,
        generateId: d,
        fetch: f = ef(),
        lastMessage: p,
        requestType: h = "generate",
      }) {
        var m, g, v;
        let y =
            "resume" === h
              ? f(`${e}?chatId=${t.id}`, {
                  method: "GET",
                  headers: { "Content-Type": "application/json", ...o },
                  signal:
                    null == (m = null == a ? void 0 : a()) ? void 0 : m.signal,
                  credentials: n,
                })
              : f(e, {
                  method: "POST",
                  body: JSON.stringify(t),
                  headers: { "Content-Type": "application/json", ...o },
                  signal:
                    null == (g = null == a ? void 0 : a()) ? void 0 : g.signal,
                  credentials: n,
                }),
          w = await y.catch((e) => {
            throw (i(), e);
          });
        if (l)
          try {
            await l(w);
          } catch (e) {
            throw e;
          }
        if (!w.ok)
          throw (
            (i(),
            Error(
              null != (v = await w.text())
                ? v
                : "Failed to fetch the chat response."
            ))
          );
        if (!w.body) throw Error("The response body is empty.");
        switch (r) {
          case "text":
            return void (await ed({
              stream: w.body,
              update: s,
              onFinish: u,
              generateId: d,
            }));
          case "data":
            return void (await eu({
              stream: w.body,
              update: s,
              lastMessage: p,
              onToolCall: c,
              onFinish({ message: e, finishReason: t, usage: r }) {
                u && null != e && u(e, { usage: r, finishReason: t });
              },
              generateId: d,
            }));
          default:
            throw Error(`Unknown stream protocol: ${r}`);
        }
      }
      function eh(e) {
        return null == e
          ? void 0
          : e.reduce((e, t) => {
              var r;
              return Math.max(e, null != (r = t.step) ? r : 0);
            }, 0);
      }
      function em(e) {
        var t;
        return null != (t = e.parts)
          ? t
          : [
              ...(e.toolInvocations
                ? e.toolInvocations.map((e) => ({
                    type: "tool-invocation",
                    toolInvocation: e,
                  }))
                : []),
              ...(e.reasoning
                ? [
                    {
                      type: "reasoning",
                      reasoning: e.reasoning,
                      details: [{ type: "text", text: e.reasoning }],
                    },
                  ]
                : []),
              ...(e.content ? [{ type: "text", text: e.content }] : []),
            ];
      }
      function eg(e) {
        return e.map((e) => ({ ...e, parts: em(e) }));
      }
      async function ev(e) {
        if (!e) return [];
        if (globalThis.FileList && e instanceof globalThis.FileList)
          return Promise.all(
            Array.from(e).map(async (e) => {
              let { name: t, type: r } = e;
              return {
                name: t,
                contentType: r,
                url: await new Promise((t, r) => {
                  let n = new FileReader();
                  (n.onload = (e) => {
                    var r;
                    t(null == (r = e.target) ? void 0 : r.result);
                  }),
                    (n.onerror = (e) => r(e)),
                    n.readAsDataURL(e);
                }),
              };
            })
          );
        if (Array.isArray(e)) return e;
        throw Error("Invalid attachments type");
      }
      function ey(e) {
        if ("assistant" !== e.role) return !1;
        let t = e.parts.reduce(
            (e, t, r) => ("step-start" === t.type ? r : e),
            -1
          ),
          r = e.parts.slice(t + 1).filter((e) => "tool-invocation" === e.type);
        return r.length > 0 && r.every((e) => "result" in e.toolInvocation);
      }
      Symbol.for("vercel.ai.schema");
      var ew = r(52826),
        eb = Object.prototype.hasOwnProperty;
      let ex = new WeakMap(),
        eE = () => {},
        e_ = eE(),
        eR = Object,
        eS = (e) => e === e_,
        eC = (e) => "function" == typeof e,
        eT = (e, t) => ({ ...e, ...t }),
        ej = (e) => eC(e.then),
        eI = {},
        eA = {},
        ek = "undefined",
        eO = typeof document != ek,
        eP = !1,
        eN = () => !1,
        eM = (e, t) => {
          let r = ex.get(e);
          return [
            () => (!eS(t) && e.get(t)) || eI,
            (n) => {
              if (!eS(t)) {
                let o = e.get(t);
                t in eA || (eA[t] = o), r[5](t, eT(o, n), o || eI);
              }
            },
            r[6],
            () => (!eS(t) && t in eA ? eA[t] : (!eS(t) && e.get(t)) || eI),
          ];
        },
        eD = !0,
        [eL, eF] = [eE, eE],
        ez = {
          initFocus: (e) => (
            eO && document.addEventListener("visibilitychange", e),
            eL("focus", e),
            () => {
              eO && document.removeEventListener("visibilitychange", e),
                eF("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (eD = !0), e();
              },
              r = () => {
                eD = !1;
              };
            return (
              eL("online", t),
              eL("offline", r),
              () => {
                eF("online", t), eF("offline", r);
              }
            );
          },
        },
        eB = !u.useId,
        eH = !0,
        eW = (e) => (eN() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        eU = eH ? u.useEffect : u.useLayoutEffect,
        eV = "undefined" != typeof navigator && navigator.connection,
        eG =
          !eH &&
          eV &&
          (["slow-2g", "2g"].includes(eV.effectiveType) || eV.saveData),
        e$ = new WeakMap(),
        eK = (e, t) => eR.prototype.toString.call(e) === `[object ${t}]`,
        eq = 0,
        eY = (e) => {
          let t,
            r,
            n = typeof e,
            o = eK(e, "Date"),
            a = eK(e, "RegExp"),
            i = eK(e, "Object");
          if (eR(e) !== e || o || a)
            t = o
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = e$.get(e))) return t;
            if (((t = ++eq + "~"), e$.set(e, t), Array.isArray(e))) {
              for (r = 0, t = "@"; r < e.length; r++) t += eY(e[r]) + ",";
              e$.set(e, t);
            }
            if (i) {
              t = "#";
              let n = eR.keys(e).sort();
              for (; !eS((r = n.pop())); )
                eS(e[r]) || (t += r + ":" + eY(e[r]) + ",");
              e$.set(e, t);
            }
          }
          return t;
        },
        eX = (e) => {
          if (eC(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                  ? eY(e)
                  : ""),
            t,
          ];
        },
        eJ = 0,
        eZ = () => ++eJ;
      async function eQ(...e) {
        let [t, r, n, o] = e,
          a = eT(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof o ? { revalidate: o } : o || {}
          ),
          i = a.populateCache,
          l = a.rollbackOnError,
          s = a.optimisticData,
          u = (e) => ("function" == typeof l ? l(e) : !1 !== l),
          c = a.throwOnError;
        if (eC(r)) {
          let e = [];
          for (let n of t.keys())
            !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
          return Promise.all(e.map(d));
        }
        return d(r);
        async function d(r) {
          let o,
            [l] = eX(r);
          if (!l) return;
          let [d, f] = eM(t, l),
            [p, h, m, g] = ex.get(t),
            v = () => {
              let e = p[l];
              return (eC(a.revalidate)
                ? a.revalidate(d().data, r)
                : !1 !== a.revalidate) && (delete m[l], delete g[l], e && e[0])
                ? e[0](2).then(() => d().data)
                : d().data;
            };
          if (e.length < 3) return v();
          let y = n,
            w = eZ();
          h[l] = [w, 0];
          let b = !eS(s),
            x = d(),
            E = x.data,
            _ = x._c,
            R = eS(_) ? E : _;
          if ((b && f({ data: (s = eC(s) ? s(R, E) : s), _c: R }), eC(y)))
            try {
              y = y(R);
            } catch (e) {
              o = e;
            }
          if (y && ej(y)) {
            if (
              ((y = await y.catch((e) => {
                o = e;
              })),
              w !== h[l][0])
            ) {
              if (o) throw o;
              return y;
            }
            o && b && u(o) && ((i = !0), f({ data: R, _c: e_ }));
          }
          if (
            (i &&
              !o &&
              (eC(i)
                ? f({ data: i(y, R), error: e_, _c: e_ })
                : f({ data: y, error: e_, _c: e_ })),
            (h[l][1] = eZ()),
            Promise.resolve(v()).then(() => {
              f({ _c: e_ });
            }),
            o)
          ) {
            if (c) throw o;
            return;
          }
          return y;
        }
      }
      let e0 = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        e1 = (e, t) => {
          if (!ex.has(e)) {
            let r = eT(ez, t),
              n = Object.create(null),
              o = eQ.bind(e_, e),
              a = eE,
              i = Object.create(null),
              l = (e, t) => {
                let r = i[e] || [];
                return (i[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              s = (t, r, n) => {
                e.set(t, r);
                let o = i[t];
                if (o) for (let e of o) e(r, n);
              },
              u = () => {
                if (
                  !ex.has(e) &&
                  (ex.set(e, [
                    n,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    o,
                    s,
                    l,
                  ]),
                  !eH)
                ) {
                  let t = r.initFocus(setTimeout.bind(e_, e0.bind(e_, n, 0))),
                    o = r.initReconnect(setTimeout.bind(e_, e0.bind(e_, n, 1)));
                  a = () => {
                    t && t(), o && o(), ex.delete(e);
                  };
                }
              };
            return u(), [e, o, u, a];
          }
          return [e, ex.get(e)[4]];
        },
        [e2, e6] = e1(new Map()),
        e4 = eT(
          {
            onLoadingSlow: eE,
            onSuccess: eE,
            onError: eE,
            onErrorRetry: (e, t, r, n, o) => {
              let a = r.errorRetryCount,
                i = o.retryCount,
                l =
                  ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) *
                  r.errorRetryInterval;
              (eS(a) || !(i > a)) && setTimeout(n, l, o);
            },
            onDiscarded: eE,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: eG ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: eG ? 5e3 : 3e3,
            compare: function e(t, r) {
              var n, o;
              if (t === r) return !0;
              if (t && r && (n = t.constructor) === r.constructor) {
                if (n === Date) return t.getTime() === r.getTime();
                if (n === RegExp) return t.toString() === r.toString();
                if (n === Array) {
                  if ((o = t.length) === r.length)
                    for (; o-- && e(t[o], r[o]); );
                  return -1 === o;
                }
                if (!n || "object" == typeof t) {
                  for (n in ((o = 0), t))
                    if (
                      (eb.call(t, n) && ++o && !eb.call(r, n)) ||
                      !(n in r) ||
                      !e(t[n], r[n])
                    )
                      return !1;
                  return Object.keys(r).length === o;
                }
              }
              return t != t && r != r;
            },
            isPaused: () => !1,
            cache: e2,
            mutate: e6,
            fallback: {},
          },
          {
            isOnline: () => eD,
            isVisible: () => {
              let e = eO && document.visibilityState;
              return eS(e) || "hidden" !== e;
            },
          }
        ),
        e5 = (e, t) => {
          let r = eT(e, t);
          if (t) {
            let { use: n, fallback: o } = e,
              { use: a, fallback: i } = t;
            n && a && (r.use = n.concat(a)), o && i && (r.fallback = eT(o, i));
          }
          return r;
        },
        e3 = (0, u.createContext)({}),
        e8 = !1,
        e9 = e8 ? window.__SWR_DEVTOOLS_USE__ : [],
        e7 = (e) =>
          eC(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        te = () => eT(e4, (0, u.useContext)(e3)),
        tt = e9.concat((e) => (t, r, n) => {
          let o =
            r &&
            ((...e) => {
              let [n] = eX(t),
                [, , , o] = ex.get(e2);
              if (n.startsWith("$inf$")) return r(...e);
              let a = o[n];
              return eS(a) ? r(...e) : (delete o[n], a);
            });
          return e(t, o, n);
        }),
        tr = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      e8 && (window.__SWR_DEVTOOLS_REACT__ = u);
      let tn = () => {},
        to = tn();
      new WeakMap();
      let ta =
          u.use ||
          ((e) => {
            switch (e.status) {
              case "pending":
                throw e;
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw (
                  ((e.status = "pending"),
                  e.then(
                    (t) => {
                      (e.status = "fulfilled"), (e.value = t);
                    },
                    (t) => {
                      (e.status = "rejected"), (e.reason = t);
                    }
                  ),
                  e)
                );
            }
          }),
        ti = { dedupe: !0 };
      eR.defineProperty(
        (e) => {
          let { value: t } = e,
            r = (0, u.useContext)(e3),
            n = eC(t),
            o = (0, u.useMemo)(() => (n ? t(r) : t), [n, r, t]),
            a = (0, u.useMemo)(() => (n ? o : e5(r, o)), [n, r, o]),
            i = o && o.provider,
            l = (0, u.useRef)(e_);
          i && !l.current && (l.current = e1(i(a.cache || e2), o));
          let s = l.current;
          return (
            s && ((a.cache = s[0]), (a.mutate = s[1])),
            eU(() => {
              if (s) return s[2] && s[2](), s[3];
            }, []),
            (0, u.createElement)(e3.Provider, eT(e, { value: a }))
          );
        },
        "defaultValue",
        { value: e4 }
      );
      let tl =
        ((o = (e, t, r) => {
          let {
              cache: n,
              compare: o,
              suspense: a,
              fallbackData: i,
              revalidateOnMount: l,
              revalidateIfStale: s,
              refreshInterval: c,
              refreshWhenHidden: d,
              refreshWhenOffline: f,
              keepPreviousData: p,
            } = r,
            [h, m, g, v] = ex.get(n),
            [y, w] = eX(e),
            b = (0, u.useRef)(!1),
            x = (0, u.useRef)(!1),
            E = (0, u.useRef)(y),
            _ = (0, u.useRef)(t),
            R = (0, u.useRef)(r),
            S = () => R.current,
            C = () => S().isVisible() && S().isOnline(),
            [T, j, I, A] = eM(n, y),
            k = (0, u.useRef)({}).current,
            O = eS(i) ? (eS(r.fallback) ? e_ : r.fallback[y]) : i,
            P = (e, t) => {
              for (let r in k)
                if ("data" === r) {
                  if (!o(e[r], t[r]) && (!eS(e[r]) || !o(W, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            N = (0, u.useMemo)(() => {
              let e =
                  !!y && !!t && (eS(l) ? !S().isPaused() && !a && !1 !== s : l),
                r = (t) => {
                  let r = eT(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = T(),
                o = A(),
                i = r(n),
                u = n === o ? i : r(o),
                c = i;
              return [
                () => {
                  let e = r(T());
                  return P(e, c)
                    ? ((c.data = e.data),
                      (c.isLoading = e.isLoading),
                      (c.isValidating = e.isValidating),
                      (c.error = e.error),
                      c)
                    : ((c = e), e);
                },
                () => u,
              ];
            }, [n, y]),
            M = (0, ew.useSyncExternalStore)(
              (0, u.useCallback)(
                (e) =>
                  I(y, (t, r) => {
                    P(r, t) || e();
                  }),
                [n, y]
              ),
              N[0],
              N[1]
            ),
            D = !b.current,
            L = h[y] && h[y].length > 0,
            F = M.data,
            z = eS(F) ? (O && ej(O) ? ta(O) : O) : F,
            B = M.error,
            H = (0, u.useRef)(z),
            W = p ? (eS(F) ? (eS(H.current) ? z : H.current) : F) : z,
            U =
              (!L || !!eS(B)) &&
              (D && !eS(l)
                ? l
                : !S().isPaused() && (a ? !eS(z) && s : eS(z) || s)),
            V = !!(y && t && D && U),
            G = eS(M.isValidating) ? V : M.isValidating,
            $ = eS(M.isLoading) ? V : M.isLoading,
            K = (0, u.useCallback)(
              async (e) => {
                let t,
                  n,
                  a = _.current;
                if (!y || !a || x.current || S().isPaused()) return !1;
                let i = !0,
                  l = e || {},
                  s = !g[y] || !l.dedupe,
                  u = () =>
                    eB
                      ? !x.current && y === E.current && b.current
                      : y === E.current,
                  c = { isValidating: !1, isLoading: !1 },
                  d = () => {
                    j(c);
                  },
                  f = () => {
                    let e = g[y];
                    e && e[1] === n && delete g[y];
                  },
                  p = { isValidating: !0 };
                eS(T().data) && (p.isLoading = !0);
                try {
                  if (
                    (s &&
                      (j(p),
                      r.loadingTimeout &&
                        eS(T().data) &&
                        setTimeout(() => {
                          i && u() && S().onLoadingSlow(y, r);
                        }, r.loadingTimeout),
                      (g[y] = [a(w), eZ()])),
                    ([t, n] = g[y]),
                    (t = await t),
                    s && setTimeout(f, r.dedupingInterval),
                    !g[y] || g[y][1] !== n)
                  )
                    return s && u() && S().onDiscarded(y), !1;
                  c.error = e_;
                  let e = m[y];
                  if (!eS(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return d(), s && u() && S().onDiscarded(y), !1;
                  let l = T().data;
                  (c.data = o(l, t) ? l : t),
                    s && u() && S().onSuccess(t, y, r);
                } catch (r) {
                  f();
                  let e = S(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((c.error = r),
                    s &&
                      u() &&
                      (e.onError(r, y, e),
                      (!0 === t || (eC(t) && t(r))) &&
                        (!S().revalidateOnFocus ||
                          !S().revalidateOnReconnect ||
                          C()) &&
                        e.onErrorRetry(
                          r,
                          y,
                          e,
                          (e) => {
                            let t = h[y];
                            t && t[0] && t[0](3, e);
                          },
                          { retryCount: (l.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (i = !1), d(), !0;
              },
              [y, n]
            ),
            q = (0, u.useCallback)((...e) => eQ(n, E.current, ...e), []);
          if (
            (eU(() => {
              (_.current = t), (R.current = r), eS(F) || (H.current = F);
            }),
            eU(() => {
              if (!y) return;
              let e = K.bind(e_, ti),
                t = 0;
              S().revalidateOnFocus &&
                (t = Date.now() + S().focusThrottleInterval);
              let r = tr(y, h, (r, n = {}) => {
                if (0 == r) {
                  let r = Date.now();
                  S().revalidateOnFocus &&
                    r > t &&
                    C() &&
                    ((t = r + S().focusThrottleInterval), e());
                } else if (1 == r) S().revalidateOnReconnect && C() && e();
                else if (2 == r) return K();
                else if (3 == r) return K(n);
              });
              return (
                (x.current = !1),
                (E.current = y),
                (b.current = !0),
                j({ _k: w }),
                U && (eS(z) || eH ? e() : eW(e)),
                () => {
                  (x.current = !0), r();
                }
              );
            }, [y]),
            eU(() => {
              let e;
              function t() {
                let t = eC(c) ? c(T().data) : c;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !T().error && (d || S().isVisible()) && (f || S().isOnline())
                  ? K(ti).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [c, d, f, y]),
            (0, u.useDebugValue)(W),
            a && eS(z) && y)
          ) {
            if (!eB && eH)
              throw Error(
                "Fallback data is required when using Suspense in SSR."
              );
            (_.current = t), (R.current = r), (x.current = !1);
            let e = v[y];
            if ((eS(e) || ta(q(e)), eS(B))) {
              let e = K(ti);
              eS(W) || ((e.status = "fulfilled"), (e.value = !0)), ta(e);
            } else throw B;
          }
          return {
            mutate: q,
            get data() {
              return (k.data = !0), W;
            },
            get error() {
              return (k.error = !0), B;
            },
            get isValidating() {
              return (k.isValidating = !0), G;
            },
            get isLoading() {
              return (k.isLoading = !0), $;
            },
          };
        }),
        function (...e) {
          let t = te(),
            [r, n, a] = e7(e),
            i = e5(t, a),
            l = o,
            { use: s } = i,
            u = (s || []).concat(tt);
          for (let e = u.length; e--; ) l = u[e](l);
          return l(r, n || i.fetcher || null, i);
        });
      var ts = r(85606);
      function tu(e, t) {
        return null != t ? ts(e, t) : e;
      }
      function tc({
        api: e = "/api/chat",
        id: t,
        initialMessages: r,
        initialInput: n = "",
        sendExtraMessageFields: o,
        onToolCall: a,
        experimental_prepareRequestBody: i,
        maxSteps: l = 1,
        streamProtocol: s = "data",
        onResponse: c,
        onFinish: d,
        onError: f,
        credentials: p,
        headers: h,
        body: m,
        generateId: g = B,
        fetch: v,
        keepLastMessageOnError: y = !0,
        experimental_throttle: w,
      } = {}) {
        let [b] = (0, u.useState)(g),
          x = null != t ? t : b,
          E = "string" == typeof e ? [e, x] : x,
          _ = (function (e) {
            let [t, r] = (0, u.useState)(e);
            return (
              (0, u.useEffect)(() => {
                !(function e(t, r) {
                  if (t === r) return !0;
                  if (null == t || null == r) return !1;
                  if ("object" != typeof t && "object" != typeof r)
                    return t === r;
                  if (t.constructor !== r.constructor) return !1;
                  if (t instanceof Date && r instanceof Date)
                    return t.getTime() === r.getTime();
                  if (Array.isArray(t)) {
                    if (t.length !== r.length) return !1;
                    for (let n = 0; n < t.length; n++)
                      if (!e(t[n], r[n])) return !1;
                    return !0;
                  }
                  let n = Object.keys(t),
                    o = Object.keys(r);
                  if (n.length !== o.length) return !1;
                  for (let a of n)
                    if (!o.includes(a) || !e(t[a], r[a])) return !1;
                  return !0;
                })(e, t) && r(e);
              }, [e, t]),
              t
            );
          })(null != r ? r : []),
          { data: R, mutate: S } = tl([E, "messages"], null, {
            fallbackData: (0, u.useMemo)(() => eg(_), [_]),
          }),
          C = (0, u.useRef)(R || []);
        (0, u.useEffect)(() => {
          C.current = R || [];
        }, [R]);
        let { data: T, mutate: j } = tl([E, "streamData"], null),
          I = (0, u.useRef)(T);
        (0, u.useEffect)(() => {
          I.current = T;
        }, [T]);
        let { data: A = "ready", mutate: k } = tl([E, "status"], null),
          { data: O, mutate: P } = tl([E, "error"], null),
          N = (0, u.useRef)(null),
          M = (0, u.useRef)({ credentials: p, headers: h, body: m });
        (0, u.useEffect)(() => {
          M.current = { credentials: p, headers: h, body: m };
        }, [p, h, m]);
        let D = (0, u.useCallback)(
            async (t, r = "generate") => {
              var n, u;
              k("submitted"), P(void 0);
              let p = eg(t.messages),
                h = p.length,
                m = eh(
                  null == (n = p[p.length - 1]) ? void 0 : n.toolInvocations
                );
              try {
                N.current = new AbortController();
                let n = tu(S, w),
                  l = tu(j, w),
                  f = C.current;
                n(p, !1);
                let h = o
                    ? p
                    : p.map(
                        ({
                          role: e,
                          content: t,
                          experimental_attachments: r,
                          data: n,
                          annotations: o,
                          toolInvocations: a,
                          parts: i,
                        }) => ({
                          role: e,
                          content: t,
                          ...(void 0 !== r && { experimental_attachments: r }),
                          ...(void 0 !== n && { data: n }),
                          ...(void 0 !== o && { annotations: o }),
                          ...(void 0 !== a && { toolInvocations: a }),
                          ...(void 0 !== i && { parts: i }),
                        })
                      ),
                  m = I.current;
                await ep({
                  api: e,
                  body:
                    null !=
                    (u =
                      null == i
                        ? void 0
                        : i({
                            id: x,
                            messages: p,
                            requestData: t.data,
                            requestBody: t.body,
                          }))
                      ? u
                      : {
                          id: x,
                          messages: h,
                          data: t.data,
                          ...M.current.body,
                          ...t.body,
                        },
                  streamProtocol: s,
                  credentials: M.current.credentials,
                  headers: { ...M.current.headers, ...t.headers },
                  abortController: () => N.current,
                  restoreMessagesOnFailure() {
                    y || n(f, !1);
                  },
                  onResponse: c,
                  onUpdate({ message: e, data: t, replaceLastMessage: r }) {
                    k("streaming"),
                      n([...(r ? p.slice(0, p.length - 1) : p), e], !1),
                      (null == t ? void 0 : t.length) &&
                        l([...(null != m ? m : []), ...t], !1);
                  },
                  onToolCall: a,
                  onFinish: d,
                  generateId: g,
                  fetch: v,
                  lastMessage: p[p.length - 1],
                  requestType: r,
                }),
                  (N.current = null),
                  k("ready");
              } catch (e) {
                if ("AbortError" === e.name)
                  return (N.current = null), k("ready"), null;
                f && e instanceof Error && f(e), P(e), k("error");
              }
              let b = C.current;
              (function ({
                originalMaxToolInvocationStep: e,
                originalMessageCount: t,
                maxSteps: r,
                messages: n,
              }) {
                var o;
                let a = n[n.length - 1];
                return (
                  r > 1 &&
                  null != a &&
                  (n.length > t || eh(a.toolInvocations) !== e) &&
                  ey(a) &&
                  (null != (o = eh(a.toolInvocations)) ? o : 0) < r
                );
              })({
                originalMaxToolInvocationStep: m,
                originalMessageCount: h,
                maxSteps: l,
                messages: b,
              }) && (await D({ messages: b }));
            },
            [S, k, e, M, c, d, f, P, j, I, s, o, i, a, l, C, N, g, v, y, w, x]
          ),
          L = (0, u.useCallback)(
            async (
              e,
              {
                data: t,
                headers: r,
                body: n,
                experimental_attachments: o = e.experimental_attachments,
              } = {}
            ) => {
              var a, i;
              let l = await ev(o);
              return D({
                messages: C.current.concat({
                  ...e,
                  id: null != (a = e.id) ? a : g(),
                  createdAt: null != (i = e.createdAt) ? i : new Date(),
                  experimental_attachments: l.length > 0 ? l : void 0,
                  parts: em(e),
                }),
                headers: r,
                body: n,
                data: t,
              });
            },
            [D, g]
          ),
          F = (0, u.useCallback)(
            async ({ data: e, headers: t, body: r } = {}) => {
              let n = C.current;
              return 0 === n.length
                ? null
                : D({
                    messages:
                      "assistant" === n[n.length - 1].role ? n.slice(0, -1) : n,
                    headers: t,
                    body: r,
                    data: e,
                  });
            },
            [D]
          ),
          z = (0, u.useCallback)(() => {
            N.current && (N.current.abort(), (N.current = null));
          }, []),
          H = (0, u.useCallback)(async () => {
            D({ messages: C.current }, "resume");
          }, [D]),
          W = (0, u.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(C.current));
              let t = eg(e);
              S(t, !1), (C.current = t);
            },
            [S]
          ),
          U = (0, u.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(I.current)),
                j(e, !1),
                (I.current = e);
            },
            [j]
          ),
          [V, G] = (0, u.useState)(n),
          $ = (0, u.useCallback)(
            async (e, t = {}, r) => {
              var n;
              if (
                (null == (n = null == e ? void 0 : e.preventDefault) ||
                  n.call(e),
                !V && !t.allowEmptySubmit)
              )
                return;
              r && (M.current = { ...M.current, ...r });
              let o = await ev(t.experimental_attachments);
              D({
                messages: C.current.concat({
                  id: g(),
                  createdAt: new Date(),
                  role: "user",
                  content: V,
                  experimental_attachments: o.length > 0 ? o : void 0,
                  parts: [{ type: "text", text: V }],
                }),
                headers: t.headers,
                body: t.body,
                data: t.data,
              }),
                G("");
            },
            [V, g, D]
          ),
          K = (0, u.useCallback)(
            ({ toolCallId: e, result: t }) => {
              let r = C.current;
              !(function ({ messages: e, toolCallId: t, toolResult: r }) {
                var n;
                let o = e[e.length - 1],
                  a = o.parts.find(
                    (e) =>
                      "tool-invocation" === e.type &&
                      e.toolInvocation.toolCallId === t
                  );
                if (null == a) return;
                let i = { ...a.toolInvocation, state: "result", result: r };
                (a.toolInvocation = i),
                  (o.toolInvocations =
                    null == (n = o.toolInvocations)
                      ? void 0
                      : n.map((e) => (e.toolCallId === t ? i : e)));
              })({ messages: r, toolCallId: e, toolResult: t }),
                S([...r.slice(0, r.length - 1), { ...r[r.length - 1] }], !1),
                "submitted" !== A &&
                  "streaming" !== A &&
                  ey(r[r.length - 1]) &&
                  D({ messages: r });
            },
            [S, A, D]
          );
        return {
          messages: null != R ? R : [],
          id: x,
          setMessages: W,
          data: T,
          setData: U,
          error: O,
          append: L,
          reload: F,
          stop: z,
          experimental_resume: H,
          input: V,
          setInput: G,
          handleInputChange: (e) => {
            G(e.target.value);
          },
          handleSubmit: $,
          isLoading: "submitted" === A || "streaming" === A,
          status: A,
          addToolResult: K,
        };
      }
    },
    13918: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(60159),
        o = () => {},
        a = () => {};
      function i(e) {
        var t;
        let { headManager: r, reduceComponentsToState: i } = e;
        function l() {
          if (r && r.mountedInstances) {
            let t = n.Children.toArray(
              Array.from(r.mountedInstances).filter(Boolean)
            );
            r.updateHead(i(t, e));
          }
        }
        return (
          null == r || null == (t = r.mountedInstances) || t.add(e.children),
          l(),
          o(() => {
            var t;
            return (
              null == r ||
                null == (t = r.mountedInstances) ||
                t.add(e.children),
              () => {
                var t;
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.delete(e.children);
              }
            );
          }),
          o(
            () => (
              r && (r._pendingUpdate = l),
              () => {
                r && (r._pendingUpdate = l);
              }
            )
          ),
          a(
            () => (
              r &&
                r._pendingUpdate &&
                (r._pendingUpdate(), (r._pendingUpdate = null)),
              () => {
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    15250: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => o });
      var n = r(60159);
      function o(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    15917: (e, t, r) => {
      "use strict";
      e.exports = r(90058).style;
    },
    18268: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var n = r(60159);
      function o(e) {
        let t = n.useRef({ value: e, previous: e });
        return n.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    20829: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var n = r(60159),
        o = r(22358),
        a = r(94108),
        i = r(53959),
        l = r(13486),
        s = n.forwardRef((e, t) => {
          let { container: r, ...s } = e,
            [u, c] = n.useState(!1);
          (0, i.N)(() => c(!0), []);
          let d = r || (u && globalThis?.document?.body);
          return d
            ? o.createPortal((0, l.jsx)(a.sG.div, { ...s, ref: t }), d)
            : null;
        });
      s.displayName = "Portal";
    },
    22682: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("tags", [
        [
          "path",
          { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" },
        ],
        [
          "path",
          {
            d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
            key: "135mg7",
          },
        ],
        [
          "circle",
          {
            cx: "6.5",
            cy: "9.5",
            r: ".5",
            fill: "currentColor",
            key: "5pm5xn",
          },
        ],
      ]);
    },
    23143: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("tag", [
        [
          "path",
          {
            d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
            key: "vktsd0",
          },
        ],
        [
          "circle",
          {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944",
          },
        ],
      ]);
    },
    25704: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("chevron-up", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    26578: (e, t, r) => {
      "use strict";
      r.d(t, {
        Mz: () => eX,
        i3: () => eZ,
        UC: () => eJ,
        bL: () => eY,
        Bk: () => eP,
      });
      var n = r(60159);
      let o = ["top", "right", "bottom", "left"],
        a = Math.min,
        i = Math.max,
        l = Math.round,
        s = Math.floor,
        u = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function m(e) {
        return "x" === e ? "y" : "x";
      }
      function g(e) {
        return "y" === e ? "height" : "width";
      }
      function v(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function b(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: r, width: n, height: o } = e;
        return {
          width: n,
          height: o,
          top: r,
          left: t,
          right: t + n,
          bottom: r + o,
          x: t,
          y: r,
        };
      }
      function E(e, t, r) {
        let n,
          { reference: o, floating: a } = e,
          i = v(t),
          l = m(v(t)),
          s = g(l),
          u = p(t),
          c = "y" === i,
          d = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          y = o[s] / 2 - a[s] / 2;
        switch (u) {
          case "top":
            n = { x: d, y: o.y - a.height };
            break;
          case "bottom":
            n = { x: d, y: o.y + o.height };
            break;
          case "right":
            n = { x: o.x + o.width, y: f };
            break;
          case "left":
            n = { x: o.x - a.width, y: f };
            break;
          default:
            n = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case "start":
            n[l] -= y * (r && c ? -1 : 1);
            break;
          case "end":
            n[l] += y * (r && c ? -1 : 1);
        }
        return n;
      }
      let _ = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = r,
          l = a.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = E(u, n, s),
          f = n,
          p = {},
          h = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: a, fn: m } = l[r],
            {
              x: g,
              y: v,
              data: y,
              reset: w,
            } = await m({
              x: c,
              y: d,
              initialPlacement: n,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (d = null != v ? v : d),
            (p = { ...p, [a]: { ...p[a], ...y } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (u =
                    !0 === w.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: c, y: d } = E(u, f, s))),
              (r = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function R(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: o, platform: a, rects: i, elements: l, strategy: s } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = f(t, e),
          m = b(h),
          g = l[p ? ("floating" === d ? "reference" : "floating") : d],
          v = x(
            await a.getClippingRect({
              element:
                null ==
                  (r = await (null == a.isElement ? void 0 : a.isElement(g))) ||
                r
                  ? g
                  : g.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: s,
            })
          ),
          y =
            "floating" === d
              ? {
                  x: n,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          w = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          E = ((await (null == a.isElement ? void 0 : a.isElement(w))) &&
            (await (null == a.getScale ? void 0 : a.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          _ = x(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: y,
                  offsetParent: w,
                  strategy: s,
                })
              : y
          );
        return {
          top: (v.top - _.top + m.top) / E.y,
          bottom: (_.bottom - v.bottom + m.bottom) / E.y,
          left: (v.left - _.left + m.left) / E.x,
          right: (_.right - v.right + m.right) / E.x,
        };
      }
      function S(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function C(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function T(e, t) {
        let { placement: r, platform: n, elements: o } = e,
          a = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)),
          i = p(r),
          l = h(r),
          s = "y" === v(r),
          u = ["left", "top"].includes(i) ? -1 : 1,
          c = a && s ? -1 : 1,
          d = f(t, e),
          {
            mainAxis: m,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          l && "number" == typeof y && (g = "end" === l ? -1 * y : y),
          s ? { x: g * c, y: m * u } : { x: m * u, y: g * c }
        );
      }
      function j() {
        return "undefined" != typeof window;
      }
      function I(e) {
        return O(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function A(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function k(e) {
        var t;
        return null ==
          (t = (O(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function O(e) {
        return !!j() && (e instanceof Node || e instanceof A(e).Node);
      }
      function P(e) {
        return !!j() && (e instanceof Element || e instanceof A(e).Element);
      }
      function N(e) {
        return (
          !!j() && (e instanceof HTMLElement || e instanceof A(e).HTMLElement)
        );
      }
      function M(e) {
        return (
          !!j() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof A(e).ShadowRoot)
        );
      }
      function D(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: o } = H(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(o)
        );
      }
      function L(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function F(e) {
        let t = z(),
          r = P(e) ? H(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!r[e] && "none" !== r[e]
          ) ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (r.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function z() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function B(e) {
        return ["html", "body", "#document"].includes(I(e));
      }
      function H(e) {
        return A(e).getComputedStyle(e);
      }
      function W(e) {
        return P(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function U(e) {
        if ("html" === I(e)) return e;
        let t = e.assignedSlot || e.parentNode || (M(e) && e.host) || k(e);
        return M(t) ? t.host : t;
      }
      function V(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        let o = (function e(t) {
            let r = U(t);
            return B(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : N(r) && D(r)
                ? r
                : e(r);
          })(e),
          a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = A(o);
        if (a) {
          let e = G(i);
          return t.concat(
            i,
            i.visualViewport || [],
            D(o) ? o : [],
            e && r ? V(e) : []
          );
        }
        return t.concat(o, V(o, [], r));
      }
      function G(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function $(e) {
        let t = H(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          o = N(e),
          a = o ? e.offsetWidth : r,
          i = o ? e.offsetHeight : n,
          s = l(r) !== a || l(n) !== i;
        return s && ((r = a), (n = i)), { width: r, height: n, $: s };
      }
      function K(e) {
        return P(e) ? e : e.contextElement;
      }
      function q(e) {
        let t = K(e);
        if (!N(t)) return u(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: o, $: a } = $(t),
          i = (a ? l(r.width) : r.width) / n,
          s = (a ? l(r.height) : r.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: i, y: s }
        );
      }
      let Y = u(0);
      function X(e) {
        let t = A(e);
        return z() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Y;
      }
      function J(e, t, r, n) {
        var o;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let a = e.getBoundingClientRect(),
          i = K(e),
          l = u(1);
        t && (n ? P(n) && (l = q(n)) : (l = q(e)));
        let s = (void 0 === (o = r) && (o = !1), n && (!o || n === A(i)) && o)
            ? X(i)
            : u(0),
          c = (a.left + s.x) / l.x,
          d = (a.top + s.y) / l.y,
          f = a.width / l.x,
          p = a.height / l.y;
        if (i) {
          let e = A(i),
            t = n && P(n) ? A(n) : n,
            r = e,
            o = G(r);
          for (; o && n && t !== r; ) {
            let e = q(o),
              t = o.getBoundingClientRect(),
              n = H(o),
              a = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += a),
              (d += i),
              (o = G((r = A(o))));
          }
        }
        return x({ width: f, height: p, x: c, y: d });
      }
      function Z(e, t) {
        let r = W(e).scrollLeft;
        return t ? t.left + r : J(k(e)).left + r;
      }
      function Q(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - (r ? 0 : Z(e, n)),
          y: n.top + t.scrollTop,
        };
      }
      function ee(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = A(e),
              n = k(e),
              o = r.visualViewport,
              a = n.clientWidth,
              i = n.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = z();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: s };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = k(e),
              r = W(e),
              n = e.ownerDocument.body,
              o = i(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
              a = i(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              l = -r.scrollLeft + Z(e),
              s = -r.scrollTop;
            return (
              "rtl" === H(n).direction &&
                (l += i(t.clientWidth, n.clientWidth) - o),
              { width: o, height: a, x: l, y: s }
            );
          })(k(e));
        else if (P(t))
          n = (function (e, t) {
            let r = J(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              o = r.left + e.clientLeft,
              a = N(e) ? q(e) : u(1),
              i = e.clientWidth * a.x,
              l = e.clientHeight * a.y;
            return { width: i, height: l, x: o * a.x, y: n * a.y };
          })(t, r);
        else {
          let r = X(e);
          n = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
        }
        return x(n);
      }
      function et(e) {
        return "static" === H(e).position;
      }
      function er(e, t) {
        if (!N(e) || "fixed" === H(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return k(e) === r && (r = r.ownerDocument.body), r;
      }
      function en(e, t) {
        let r = A(e);
        if (L(e)) return r;
        if (!N(e)) {
          let t = U(e);
          for (; t && !B(t); ) {
            if (P(t) && !et(t)) return t;
            t = U(t);
          }
          return r;
        }
        let n = er(e, t);
        for (; n && ["table", "td", "th"].includes(I(n)) && et(n); )
          n = er(n, t);
        return n && B(n) && et(n) && !F(n)
          ? r
          : n ||
              (function (e) {
                let t = U(e);
                for (; N(t) && !B(t); ) {
                  if (F(t)) return t;
                  if (L(t)) break;
                  t = U(t);
                }
                return null;
              })(e) ||
              r;
      }
      let eo = async function (e) {
          let t = this.getOffsetParent || en,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: (function (e, t, r) {
              let n = N(t),
                o = k(t),
                a = "fixed" === r,
                i = J(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                s = u(0);
              if (n || (!n && !a))
                if ((("body" !== I(t) || D(o)) && (l = W(t)), n)) {
                  let e = J(t, !0, a, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else o && (s.x = Z(o));
              a && !n && o && (s.x = Z(o));
              let c = !o || n || a ? u(0) : Q(o, l);
              return {
                x: i.left + l.scrollLeft - s.x - c.x,
                y: i.top + l.scrollTop - s.y - c.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: n.width, height: n.height },
          };
        },
        ea = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: r, offsetParent: n, strategy: o } = e,
              a = "fixed" === o,
              i = k(n),
              l = !!t && L(t.floating);
            if (n === i || (l && a)) return r;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = u(1),
              d = u(0),
              f = N(n);
            if (
              (f || (!f && !a)) &&
              (("body" !== I(n) || D(i)) && (s = W(n)), N(n))
            ) {
              let e = J(n);
              (c = q(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
            }
            let p = !i || f || a ? u(0) : Q(i, s, !0);
            return {
              width: r.width * c.x,
              height: r.height * c.y,
              x: r.x * c.x - s.scrollLeft * c.x + d.x + p.x,
              y: r.y * c.y - s.scrollTop * c.y + d.y + p.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: n, strategy: o } = e,
              l = [
                ...("clippingAncestors" === r
                  ? L(t)
                    ? []
                    : (function (e, t) {
                        let r = t.get(e);
                        if (r) return r;
                        let n = V(e, [], !1).filter(
                            (e) => P(e) && "body" !== I(e)
                          ),
                          o = null,
                          a = "fixed" === H(e).position,
                          i = a ? U(e) : e;
                        for (; P(i) && !B(i); ) {
                          let t = H(i),
                            r = F(i);
                          r || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !r && !o
                                : (!r &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (D(i) &&
                                    !r &&
                                    (function e(t, r) {
                                      let n = U(t);
                                      return (
                                        !(n === r || !P(n) || B(n)) &&
                                        ("fixed" === H(n).position || e(n, r))
                                      );
                                    })(e, i))
                            )
                              ? (n = n.filter((e) => e !== i))
                              : (o = t),
                            (i = U(i));
                        }
                        return t.set(e, n), n;
                      })(t, this._c)
                  : [].concat(r)),
                n,
              ],
              s = l[0],
              u = l.reduce(
                (e, r) => {
                  let n = ee(t, r, o);
                  return (
                    (e.top = i(n.top, e.top)),
                    (e.right = a(n.right, e.right)),
                    (e.bottom = a(n.bottom, e.bottom)),
                    (e.left = i(n.left, e.left)),
                    e
                  );
                },
                ee(t, s, o)
              );
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: en,
          getElementRects: eo,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: r } = $(e);
            return { width: t, height: r };
          },
          getScale: q,
          isElement: P,
          isRTL: function (e) {
            return "rtl" === H(e).direction;
          },
        };
      function ei(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let el = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: r,
                y: n,
                placement: o,
                rects: l,
                platform: s,
                elements: u,
                middlewareData: c,
              } = t,
              { element: d, padding: p = 0 } = f(e, t) || {};
            if (null == d) return {};
            let y = b(p),
              w = { x: r, y: n },
              x = m(v(o)),
              E = g(x),
              _ = await s.getDimensions(d),
              R = "y" === x,
              S = R ? "clientHeight" : "clientWidth",
              C = l.reference[E] + l.reference[x] - w[x] - l.floating[E],
              T = w[x] - l.reference[x],
              j = await (null == s.getOffsetParent
                ? void 0
                : s.getOffsetParent(d)),
              I = j ? j[S] : 0;
            (I && (await (null == s.isElement ? void 0 : s.isElement(j)))) ||
              (I = u.floating[S] || l.floating[E]);
            let A = I / 2 - _[E] / 2 - 1,
              k = a(y[R ? "top" : "left"], A),
              O = a(y[R ? "bottom" : "right"], A),
              P = I - _[E] - O,
              N = I / 2 - _[E] / 2 + (C / 2 - T / 2),
              M = i(k, a(N, P)),
              D =
                !c.arrow &&
                null != h(o) &&
                N !== M &&
                l.reference[E] / 2 - (N < k ? k : O) - _[E] / 2 < 0,
              L = D ? (N < k ? N - k : N - P) : 0;
            return {
              [x]: w[x] + L,
              data: {
                [x]: M,
                centerOffset: N - M - L,
                ...(D && { alignmentOffset: L }),
              },
              reset: D,
            };
          },
        }),
        es = (e, t, r) => {
          let n = new Map(),
            o = { platform: ea, ...r },
            a = { ...o.platform, _c: n };
          return _(e, t, { ...o, platform: a });
        };
      var eu = r(22358),
        ec = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function ed(e, t) {
        let r, n, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (n = r; 0 != n--; ) if (!ed(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = o[n];
            if (("_owner" !== r || !e.$$typeof) && !ed(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ef(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ep(e, t) {
        let r = ef(e);
        return Math.round(t * r) / r;
      }
      function eh(e) {
        let t = n.useRef(e);
        return (
          ec(() => {
            t.current = e;
          }),
          t
        );
      }
      let em = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
            return r && {}.hasOwnProperty.call(r, "current")
              ? null != r.current
                ? el({ element: r.current, padding: n }).fn(t)
                : {}
              : r
                ? el({ element: r, padding: n }).fn(t)
                : {};
          },
        }),
        eg = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var r, n;
                  let { x: o, y: a, placement: i, middlewareData: l } = t,
                    s = await T(t, e);
                  return i ===
                    (null == (r = l.offset) ? void 0 : r.placement) &&
                    null != (n = l.arrow) &&
                    n.alignmentOffset
                    ? {}
                    : { x: o + s.x, y: a + s.y, data: { ...s, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ev = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: r, y: n, placement: o } = t,
                    {
                      mainAxis: l = !0,
                      crossAxis: s = !1,
                      limiter: u = {
                        fn: (e) => {
                          let { x: t, y: r } = e;
                          return { x: t, y: r };
                        },
                      },
                      ...c
                    } = f(e, t),
                    d = { x: r, y: n },
                    h = await R(t, c),
                    g = v(p(o)),
                    y = m(g),
                    w = d[y],
                    b = d[g];
                  if (l) {
                    let e = "y" === y ? "top" : "left",
                      t = "y" === y ? "bottom" : "right",
                      r = w + h[e],
                      n = w - h[t];
                    w = i(r, a(w, n));
                  }
                  if (s) {
                    let e = "y" === g ? "top" : "left",
                      t = "y" === g ? "bottom" : "right",
                      r = b + h[e],
                      n = b - h[t];
                    b = i(r, a(b, n));
                  }
                  let x = u.fn({ ...t, [y]: w, [g]: b });
                  return {
                    ...x,
                    data: {
                      x: x.x - r,
                      y: x.y - n,
                      enabled: { [y]: l, [g]: s },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ey = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: r,
                      y: n,
                      placement: o,
                      rects: a,
                      middlewareData: i,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: s = !0,
                      crossAxis: u = !0,
                    } = f(e, t),
                    c = { x: r, y: n },
                    d = v(o),
                    h = m(d),
                    g = c[h],
                    y = c[d],
                    w = f(l, t),
                    b =
                      "number" == typeof w
                        ? { mainAxis: w, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...w };
                  if (s) {
                    let e = "y" === h ? "height" : "width",
                      t = a.reference[h] - a.floating[e] + b.mainAxis,
                      r = a.reference[h] + a.reference[e] - b.mainAxis;
                    g < t ? (g = t) : g > r && (g = r);
                  }
                  if (u) {
                    var x, E;
                    let e = "y" === h ? "width" : "height",
                      t = ["top", "left"].includes(p(o)),
                      r =
                        a.reference[d] -
                        a.floating[e] +
                        ((t && (null == (x = i.offset) ? void 0 : x[d])) || 0) +
                        (t ? 0 : b.crossAxis),
                      n =
                        a.reference[d] +
                        a.reference[e] +
                        (t
                          ? 0
                          : (null == (E = i.offset) ? void 0 : E[d]) || 0) -
                        (t ? b.crossAxis : 0);
                    y < r ? (y = r) : y > n && (y = n);
                  }
                  return { [h]: g, [d]: y };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ew = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var r, n, o, a, i, l;
                  let {
                      placement: s,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: d,
                      platform: b,
                      elements: x,
                    } = t,
                    {
                      mainAxis: E = !0,
                      crossAxis: _ = !0,
                      fallbackPlacements: S,
                      fallbackStrategy: C = "bestFit",
                      fallbackAxisSideDirection: T = "none",
                      flipAlignment: j = !0,
                      ...I
                    } = f(e, t);
                  if (null != (r = u.arrow) && r.alignmentOffset) return {};
                  let A = p(s),
                    k = v(d),
                    O = p(d) === d,
                    P = await (null == b.isRTL ? void 0 : b.isRTL(x.floating)),
                    N =
                      S ||
                      (O || !j
                        ? [w(d)]
                        : (function (e) {
                            let t = w(e);
                            return [y(e), t, y(t)];
                          })(d)),
                    M = "none" !== T;
                  !S &&
                    M &&
                    N.push(
                      ...(function (e, t, r, n) {
                        let o = h(e),
                          a = (function (e, t, r) {
                            let n = ["left", "right"],
                              o = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (r) return t ? o : n;
                                return t ? n : o;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(p(e), "start" === r, n);
                        return (
                          o &&
                            ((a = a.map((e) => e + "-" + o)),
                            t && (a = a.concat(a.map(y)))),
                          a
                        );
                      })(d, j, T, P)
                    );
                  let D = [d, ...N],
                    L = await R(t, I),
                    F = [],
                    z = (null == (n = u.flip) ? void 0 : n.overflows) || [];
                  if ((E && F.push(L[A]), _)) {
                    let e = (function (e, t, r) {
                      void 0 === r && (r = !1);
                      let n = h(e),
                        o = m(v(e)),
                        a = g(o),
                        i =
                          "x" === o
                            ? n === (r ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === n
                              ? "bottom"
                              : "top";
                      return (
                        t.reference[a] > t.floating[a] && (i = w(i)), [i, w(i)]
                      );
                    })(s, c, P);
                    F.push(L[e[0]], L[e[1]]);
                  }
                  if (
                    ((z = [...z, { placement: s, overflows: F }]),
                    !F.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = D[e];
                    if (t) {
                      let r = "alignment" === _ && k !== v(t),
                        n = (null == (i = z[0]) ? void 0 : i.overflows[0]) > 0;
                      if (!r || n)
                        return {
                          data: { index: e, overflows: z },
                          reset: { placement: t },
                        };
                    }
                    let r =
                      null ==
                      (a = z
                        .filter((e) => e.overflows[0] <= 0)
                        .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                        ? void 0
                        : a.placement;
                    if (!r)
                      switch (C) {
                        case "bestFit": {
                          let e =
                            null ==
                            (l = z
                              .filter((e) => {
                                if (M) {
                                  let t = v(e.placement);
                                  return t === k || "y" === t;
                                }
                                return !0;
                              })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : l[0];
                          e && (r = e);
                          break;
                        }
                        case "initialPlacement":
                          r = d;
                      }
                    if (s !== r) return { reset: { placement: r } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eb = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var r, n;
                  let o,
                    l,
                    { placement: s, rects: u, platform: c, elements: d } = t,
                    { apply: m = () => {}, ...g } = f(e, t),
                    y = await R(t, g),
                    w = p(s),
                    b = h(s),
                    x = "y" === v(s),
                    { width: E, height: _ } = u.floating;
                  "top" === w || "bottom" === w
                    ? ((o = w),
                      (l =
                        b ===
                        ((await (null == c.isRTL
                          ? void 0
                          : c.isRTL(d.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((l = w), (o = "end" === b ? "top" : "bottom"));
                  let S = _ - y.top - y.bottom,
                    C = E - y.left - y.right,
                    T = a(_ - y[o], S),
                    j = a(E - y[l], C),
                    I = !t.middlewareData.shift,
                    A = T,
                    k = j;
                  if (
                    (null != (r = t.middlewareData.shift) &&
                      r.enabled.x &&
                      (k = C),
                    null != (n = t.middlewareData.shift) &&
                      n.enabled.y &&
                      (A = S),
                    I && !b)
                  ) {
                    let e = i(y.left, 0),
                      t = i(y.right, 0),
                      r = i(y.top, 0),
                      n = i(y.bottom, 0);
                    x
                      ? (k =
                          E -
                          2 * (0 !== e || 0 !== t ? e + t : i(y.left, y.right)))
                      : (A =
                          _ -
                          2 *
                            (0 !== r || 0 !== n ? r + n : i(y.top, y.bottom)));
                  }
                  await m({ ...t, availableWidth: k, availableHeight: A });
                  let O = await c.getDimensions(d.floating);
                  return E !== O.width || _ !== O.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ex = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: r } = t,
                    { strategy: n = "referenceHidden", ...o } = f(e, t);
                  switch (n) {
                    case "referenceHidden": {
                      let e = S(
                        await R(t, { ...o, elementContext: "reference" }),
                        r.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: C(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = S(
                        await R(t, { ...o, altBoundary: !0 }),
                        r.floating
                      );
                      return { data: { escapedOffsets: e, escaped: C(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eE = (e, t) => ({ ...em(e), options: [e, t] });
      var e_ = r(94108),
        eR = r(13486),
        eS = n.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...a } = e;
          return (0, eR.jsx)(e_.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, eR.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eS.displayName = "Arrow";
      var eC = r(11246),
        eT = r(27134),
        ej = r(15250),
        eI = r(53959),
        eA = r(34176),
        ek = "Popper",
        [eO, eP] = (0, eT.A)(ek),
        [eN, eM] = eO(ek),
        eD = (e) => {
          let { __scopePopper: t, children: r } = e,
            [o, a] = n.useState(null);
          return (0, eR.jsx)(eN, {
            scope: t,
            anchor: o,
            onAnchorChange: a,
            children: r,
          });
        };
      eD.displayName = ek;
      var eL = "PopperAnchor",
        eF = n.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: o, ...a } = e,
            i = eM(eL, r),
            l = n.useRef(null),
            s = (0, eC.s)(t, l);
          return (
            n.useEffect(() => {
              i.onAnchorChange(o?.current || l.current);
            }),
            o ? null : (0, eR.jsx)(e_.sG.div, { ...a, ref: s })
          );
        });
      eF.displayName = eL;
      var ez = "PopperContent",
        [eB, eH] = eO(ez),
        eW = n.forwardRef((e, t) => {
          let {
              __scopePopper: r,
              side: o = "bottom",
              sideOffset: l = 0,
              align: u = "center",
              alignOffset: c = 0,
              arrowPadding: d = 0,
              avoidCollisions: f = !0,
              collisionBoundary: p = [],
              collisionPadding: h = 0,
              sticky: m = "partial",
              hideWhenDetached: g = !1,
              updatePositionStrategy: v = "optimized",
              onPlaced: y,
              ...w
            } = e,
            b = eM(ez, r),
            [x, E] = n.useState(null),
            _ = (0, eC.s)(t, (e) => E(e)),
            [R, S] = n.useState(null),
            C = (0, eA.X)(R),
            T = C?.width ?? 0,
            j = C?.height ?? 0,
            I =
              "number" == typeof h
                ? h
                : { top: 0, right: 0, bottom: 0, left: 0, ...h },
            A = Array.isArray(p) ? p : [p],
            O = A.length > 0,
            P = { padding: I, boundary: A.filter(e$), altBoundary: O },
            {
              refs: N,
              floatingStyles: M,
              placement: D,
              isPositioned: L,
              middlewareData: F,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: r = "absolute",
                  middleware: o = [],
                  platform: a,
                  elements: { reference: i, floating: l } = {},
                  transform: s = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [d, f] = n.useState({
                  x: 0,
                  y: 0,
                  strategy: r,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = n.useState(o);
              ed(p, o) || h(o);
              let [m, g] = n.useState(null),
                [v, y] = n.useState(null),
                w = n.useCallback((e) => {
                  e !== _.current && ((_.current = e), g(e));
                }, []),
                b = n.useCallback((e) => {
                  e !== R.current && ((R.current = e), y(e));
                }, []),
                x = i || m,
                E = l || v,
                _ = n.useRef(null),
                R = n.useRef(null),
                S = n.useRef(d),
                C = null != u,
                T = eh(u),
                j = eh(a),
                I = eh(c),
                A = n.useCallback(() => {
                  if (!_.current || !R.current) return;
                  let e = { placement: t, strategy: r, middleware: p };
                  j.current && (e.platform = j.current),
                    es(_.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== I.current };
                      k.current &&
                        !ed(S.current, t) &&
                        ((S.current = t),
                        eu.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, r, j, I]);
              ec(() => {
                !1 === c &&
                  S.current.isPositioned &&
                  ((S.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let k = n.useRef(!1);
              ec(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                []
              ),
                ec(() => {
                  if ((x && (_.current = x), E && (R.current = E), x && E)) {
                    if (T.current) return T.current(x, E, A);
                    A();
                  }
                }, [x, E, A, T, C]);
              let O = n.useMemo(
                  () => ({
                    reference: _,
                    floating: R,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b]
                ),
                P = n.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                N = n.useMemo(() => {
                  let e = { position: r, left: 0, top: 0 };
                  if (!P.floating) return e;
                  let t = ep(P.floating, d.x),
                    n = ep(P.floating, d.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...(ef(P.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: r, left: t, top: n };
                }, [r, s, P.floating, d.x, d.y]);
              return n.useMemo(
                () => ({
                  ...d,
                  update: A,
                  refs: O,
                  elements: P,
                  floatingStyles: N,
                }),
                [d, A, O, P, N]
              );
            })({
              strategy: "fixed",
              placement: o + ("center" !== u ? "-" + u : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, r, n) {
                  let o;
                  void 0 === n && (n = {});
                  let {
                      ancestorScroll: l = !0,
                      ancestorResize: u = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: d = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: f = !1,
                    } = n,
                    p = K(e),
                    h = l || u ? [...(p ? V(p) : []), ...V(t)] : [];
                  h.forEach((e) => {
                    l && e.addEventListener("scroll", r, { passive: !0 }),
                      u && e.addEventListener("resize", r);
                  });
                  let m =
                      p && d
                        ? (function (e, t) {
                            let r,
                              n = null,
                              o = k(e);
                            function l() {
                              var e;
                              clearTimeout(r),
                                null == (e = n) || e.disconnect(),
                                (n = null);
                            }
                            return (
                              !(function u(c, d) {
                                void 0 === c && (c = !1),
                                  void 0 === d && (d = 1),
                                  l();
                                let f = e.getBoundingClientRect(),
                                  { left: p, top: h, width: m, height: g } = f;
                                if ((c || t(), !m || !g)) return;
                                let v = s(h),
                                  y = s(o.clientWidth - (p + m)),
                                  w = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -y +
                                      "px " +
                                      -s(o.clientHeight - (h + g)) +
                                      "px " +
                                      -s(p) +
                                      "px",
                                    threshold: i(0, a(1, d)) || 1,
                                  },
                                  b = !0;
                                function x(t) {
                                  let n = t[0].intersectionRatio;
                                  if (n !== d) {
                                    if (!b) return u();
                                    n
                                      ? u(!1, n)
                                      : (r = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== n ||
                                    ei(f, e.getBoundingClientRect()) ||
                                    u(),
                                    (b = !1);
                                }
                                try {
                                  n = new IntersectionObserver(x, {
                                    ...w,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  n = new IntersectionObserver(x, w);
                                }
                                n.observe(e);
                              })(!0),
                              l
                            );
                          })(p, r)
                        : null,
                    g = -1,
                    v = null;
                  c &&
                    ((v = new ResizeObserver((e) => {
                      let [n] = e;
                      n &&
                        n.target === p &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        r();
                    })),
                    p && !f && v.observe(p),
                    v.observe(t));
                  let y = f ? J(e) : null;
                  return (
                    f &&
                      (function t() {
                        let n = J(e);
                        y && !ei(y, n) && r(),
                          (y = n),
                          (o = requestAnimationFrame(t));
                      })(),
                    r(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        l && e.removeEventListener("scroll", r),
                          u && e.removeEventListener("resize", r);
                      }),
                        null == m || m(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        f && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === v }),
              elements: { reference: b.anchor },
              middleware: [
                eg({ mainAxis: l + j, alignmentAxis: c }),
                f &&
                  ev({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === m ? ey() : void 0,
                    ...P,
                  }),
                f && ew({ ...P }),
                eb({
                  ...P,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: r,
                    availableHeight: n,
                  }) => {
                    let { width: o, height: a } = t.reference,
                      i = e.floating.style;
                    i.setProperty("--radix-popper-available-width", `${r}px`),
                      i.setProperty(
                        "--radix-popper-available-height",
                        `${n}px`
                      ),
                      i.setProperty("--radix-popper-anchor-width", `${o}px`),
                      i.setProperty("--radix-popper-anchor-height", `${a}px`);
                  },
                }),
                R && eE({ element: R, padding: d }),
                eK({ arrowWidth: T, arrowHeight: j }),
                g && ex({ strategy: "referenceHidden", ...P }),
              ],
            }),
            [z, B] = eq(D),
            H = (0, ej.c)(y);
          (0, eI.N)(() => {
            L && H?.();
          }, [L, H]);
          let W = F.arrow?.x,
            U = F.arrow?.y,
            G = F.arrow?.centerOffset !== 0,
            [$, q] = n.useState();
          return (
            (0, eI.N)(() => {
              x && q(window.getComputedStyle(x).zIndex);
            }, [x]),
            (0, eR.jsx)("div", {
              ref: N.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...M,
                transform: L ? M.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: $,
                "--radix-popper-transform-origin": [
                  F.transformOrigin?.x,
                  F.transformOrigin?.y,
                ].join(" "),
                ...(F.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, eR.jsx)(eB, {
                scope: r,
                placedSide: z,
                onArrowChange: S,
                arrowX: W,
                arrowY: U,
                shouldHideArrow: G,
                children: (0, eR.jsx)(e_.sG.div, {
                  "data-side": z,
                  "data-align": B,
                  ...w,
                  ref: _,
                  style: { ...w.style, animation: L ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eW.displayName = ez;
      var eU = "PopperArrow",
        eV = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eG = n.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = eH(eU, r),
            a = eV[o.placedSide];
          return (0, eR.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, eR.jsx)(eS, {
              ...n,
              ref: t,
              style: { ...n.style, display: "block" },
            }),
          });
        });
      function e$(e) {
        return null !== e;
      }
      eG.displayName = eU;
      var eK = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: r, rects: n, middlewareData: o } = t,
            a = o.arrow?.centerOffset !== 0,
            i = a ? 0 : e.arrowWidth,
            l = a ? 0 : e.arrowHeight,
            [s, u] = eq(r),
            c = { start: "0%", center: "50%", end: "100%" }[u],
            d = (o.arrow?.x ?? 0) + i / 2,
            f = (o.arrow?.y ?? 0) + l / 2,
            p = "",
            h = "";
          return (
            "bottom" === s
              ? ((p = a ? c : `${d}px`), (h = `${-l}px`))
              : "top" === s
                ? ((p = a ? c : `${d}px`), (h = `${n.floating.height + l}px`))
                : "right" === s
                  ? ((p = `${-l}px`), (h = a ? c : `${f}px`))
                  : "left" === s &&
                    ((p = `${n.floating.width + l}px`), (h = a ? c : `${f}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function eq(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var eY = eD,
        eX = eF,
        eJ = eW,
        eZ = eG;
    },
    27134: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i, q: () => a });
      var n = r(60159),
        o = r(13486);
      function a(e, t) {
        let r = n.createContext(t),
          a = (e) => {
            let { children: t, ...a } = e,
              i = n.useMemo(() => a, Object.values(a));
            return (0, o.jsx)(r.Provider, { value: i, children: t });
          };
        return (
          (a.displayName = e + "Provider"),
          [
            a,
            function (o) {
              let a = n.useContext(r);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let r = [],
          a = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let i = n.createContext(a),
                l = r.length;
              r = [...r, a];
              let s = (t) => {
                let { scope: r, children: a, ...s } = t,
                  u = r?.[e]?.[l] || i,
                  c = n.useMemo(() => s, Object.values(s));
                return (0, o.jsx)(u.Provider, { value: c, children: a });
              };
              return (
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (r, o) {
                    let s = o?.[e]?.[l] || i,
                      u = n.useContext(s);
                    if (u) return u;
                    if (void 0 !== a) return a;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(a, ...t),
          ]
        );
      }
    },
    27923: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = r(50686),
        o = r(15881),
        a = r(13486),
        i = o._(r(60159)),
        l = n._(r(13918)),
        s = r(85936),
        u = r(50872),
        c = r(38523);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === i.default.Fragment
            ? e.concat(
                i.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  []
                )
              )
            : e.concat(t);
      }
      r(12405);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (a = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t))
                        if ("charSet" === t) r.has(t) ? (a = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !i) && r.has(e)
                            ? (a = !1)
                            : (r.add(e), (n[t] = r));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              process.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, i.useContext)(s.AmpStateContext),
          n = (0, i.useContext)(u.HeadManagerContext);
        return (0, a.jsx)(l.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    29699: (e, t, r) => {
      "use strict";
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
    30760: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("lock", [
        [
          "rect",
          {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1",
          },
        ],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]);
    },
    32194: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => s });
      var n,
        o = r(60159),
        a = r(53959),
        i =
          (n || (n = r.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        l = 0;
      function s(e) {
        let [t, r] = o.useState(i());
        return (
          (0, a.N)(() => {
            e || r((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    34176: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => a });
      var n = r(60159),
        o = r(53959);
      function a(e) {
        let [t, r] = n.useState(void 0);
        return (
          (0, o.N)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, o;
                if (!Array.isArray(t) || !t.length) return;
                let a = t[0];
                if ("borderBoxSize" in a) {
                  let e = a.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (o = t.blockSize);
                } else (n = e.offsetWidth), (o = e.offsetHeight);
                r({ width: n, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
    35703: (e, t, r) => {
      "use strict";
      var n = r(60159),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = n.useState,
        i = n.useEffect,
        l = n.useLayoutEffect,
        s = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                c = n[1];
              return (
                l(
                  function () {
                    (o.value = r), (o.getSnapshot = t), u(o) && c({ inst: o });
                  },
                  [e, r, t]
                ),
                i(
                  function () {
                    return (
                      u(o) && c({ inst: o }),
                      e(function () {
                        u(o) && c({ inst: o });
                      })
                    );
                  },
                  [e]
                ),
                s(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    37558: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("trash-2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
      ]);
    },
    38050: (e, t, r) => {
      "use strict";
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
    38523: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    40594: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => l });
      var n,
        o = r(60159),
        a = r(53959),
        i =
          (n || (n = r.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          a.N;
      function l({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n,
      }) {
        let [a, l, s] = (function ({ defaultProp: e, onChange: t }) {
            let [r, n] = o.useState(e),
              a = o.useRef(r),
              l = o.useRef(t);
            return (
              i(() => {
                l.current = t;
              }, [t]),
              o.useEffect(() => {
                a.current !== r && (l.current?.(r), (a.current = r));
              }, [r, a]),
              [r, n, l]
            );
          })({ defaultProp: t, onChange: r }),
          u = void 0 !== e,
          c = u ? e : a;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== u) {
              let t = u ? "controlled" : "uncontrolled";
              console.warn(
                `${n} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            t.current = u;
          }, [u, n]);
        }
        return [
          c,
          o.useCallback(
            (t) => {
              if (u) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && s.current?.(r);
              } else l(t);
            },
            [u, e, l, s]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    41918: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => $ });
      var n,
        o,
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      Object.create;
      Object.create;
      var l =
          ("function" == typeof SuppressedError && SuppressedError, r(60159)),
        s = "right-scroll-bar-position",
        u = "width-before-scroll-bar";
      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var d = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
        f = new WeakMap();
      function p(e) {
        return e;
      }
      var h = (function (e) {
          void 0 === e && (e = {});
          var t,
            r,
            n,
            o,
            i =
              ((t = null),
              void 0 === r && (r = p),
              (n = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = r(e, o);
                  return (
                    n.push(t),
                    function () {
                      n = n.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (n.length) {
                    var r = n;
                    (n = []), r.forEach(e), (t = n);
                  }
                  var a = function () {
                      var r = t;
                      (t = []), r.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  i(),
                    (n = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (i.options = a({ async: !0, ssr: !1 }, e)), i;
        })(),
        m = function () {},
        g = l.forwardRef(function (e, t) {
          var r,
            n,
            o,
            s,
            u = l.useRef(null),
            p = l.useState({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: m,
            }),
            g = p[0],
            v = p[1],
            y = e.forwardProps,
            w = e.children,
            b = e.className,
            x = e.removeScrollBar,
            E = e.enabled,
            _ = e.shards,
            R = e.sideCar,
            S = e.noIsolation,
            C = e.inert,
            T = e.allowPinchZoom,
            j = e.as,
            I = e.gapMode,
            A = i(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            k =
              ((r = [u, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return c(t, e);
                });
              }),
              ((o = (0, l.useState)(function () {
                return {
                  value: null,
                  callback: n,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = n),
              (s = o.facade),
              d(
                function () {
                  var e = f.get(s);
                  if (e) {
                    var t = new Set(e),
                      n = new Set(r),
                      o = s.current;
                    t.forEach(function (e) {
                      n.has(e) || c(e, null);
                    }),
                      n.forEach(function (e) {
                        t.has(e) || c(e, o);
                      });
                  }
                  f.set(s, r);
                },
                [r]
              ),
              s),
            O = a(a({}, A), g);
          return l.createElement(
            l.Fragment,
            null,
            E &&
              l.createElement(R, {
                sideCar: h,
                removeScrollBar: x,
                shards: _,
                noIsolation: S,
                inert: C,
                setCallbacks: v,
                allowPinchZoom: !!T,
                lockRef: u,
                gapMode: I,
              }),
            y
              ? l.cloneElement(l.Children.only(w), a(a({}, O), { ref: k }))
              : l.createElement(
                  void 0 === j ? "div" : j,
                  a({}, O, { className: b, ref: k }),
                  w
                )
          );
        });
      (g.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (g.classNames = { fullWidth: u, zeroRight: s });
      var v = function (e) {
        var t = e.sideCar,
          r = i(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return l.createElement(n, a({}, r));
      };
      v.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = n)
                  : a.appendChild(document.createTextNode(n)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = y();
          return function (t, r) {
            l.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        b = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        x = { left: 0, top: 0, right: 0, gap: 0 },
        E = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        _ = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [E(r), E(n), E(o)];
        },
        R = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return x;
          var t = _(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        S = b(),
        C = "data-scroll-locked",
        T = function (e, t, r, n) {
          var o = e.left,
            a = e.top,
            i = e.right,
            l = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  body[")
              .concat(C, "] {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(l, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body[")
              .concat(C, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        j = function () {
          var e = parseInt(document.body.getAttribute(C) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        I = function () {
          l.useEffect(function () {
            return (
              document.body.setAttribute(C, (j() + 1).toString()),
              function () {
                var e = j() - 1;
                e <= 0
                  ? document.body.removeAttribute(C)
                  : document.body.setAttribute(C, e.toString());
              }
            );
          }, []);
        },
        A = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? "margin" : n;
          I();
          var a = l.useMemo(
            function () {
              return R(o);
            },
            [o]
          );
          return l.createElement(S, {
            styles: T(a, !t, o, r ? "" : "!important"),
          });
        },
        k = !1;
      if ("undefined" != typeof window)
        try {
          var O = Object.defineProperty({}, "passive", {
            get: function () {
              return (k = !0), !0;
            },
          });
          window.addEventListener("test", O, O),
            window.removeEventListener("test", O, O);
        } catch (e) {
          k = !1;
        }
      var P = !!k && { passive: !1 },
        N = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            (r.overflowY !== r.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== r[t])
          );
        },
        M = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              D(e, n))
            ) {
              var o = L(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        D = function (e, t) {
          return "v" === e ? N(t, "overflowY") : N(t, "overflowX");
        },
        L = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        F = function (e, t, r, n, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * n,
            s = r.target,
            u = t.contains(s),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var h = L(e, s),
              m = h[0],
              g = h[1] - h[2] - i * m;
            (m || g) && D(e, s) && ((f += g), (p += m)),
              (s = s instanceof ShadowRoot ? s.host : s.parentNode);
          } while (
            (!u && s !== document.body) ||
            (u && (t.contains(s) || t === s))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0),
            c
          );
        },
        z = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        H = function (e) {
          return e && "current" in e ? e.current : e;
        },
        W = 0,
        U = [];
      let V =
        ((n = function (e) {
          var t = l.useRef([]),
            r = l.useRef([0, 0]),
            n = l.useRef(),
            o = l.useState(W++)[0],
            a = l.useState(b)[0],
            i = l.useRef(e);
          l.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            l.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, r) {
                    if (r || 2 == arguments.length)
                      for (var n, o = 0, a = t.length; o < a; o++)
                        (!n && o in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, o)),
                          (n[o] = t[o]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(H), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var s = l.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !i.current.allowPinchZoom;
              var o,
                a = z(e),
                l = r.current,
                s = "deltaX" in e ? e.deltaX : l[0] - a[0],
                u = "deltaY" in e ? e.deltaY : l[1] - a[1],
                c = e.target,
                d = Math.abs(s) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = M(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = M(d, c))), !f)
              )
                return !1;
              if (
                (!n.current &&
                  "changedTouches" in e &&
                  (s || u) &&
                  (n.current = o),
                !o)
              )
                return !0;
              var p = n.current || o;
              return F(p, t, e, "h" === p ? s : u, !0);
            }, []),
            u = l.useCallback(function (e) {
              if (U.length && U[U.length - 1] === a) {
                var r = "deltaY" in e ? B(e) : z(e),
                  n = t.current.filter(function (t) {
                    var n;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((n = t.delta), n[0] === r[0] && n[1] === r[1])
                    );
                  })[0];
                if (n && n.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!n) {
                  var o = (i.current.shards || [])
                    .map(H)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? s(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = l.useCallback(function (e, r, n, o) {
              var a = {
                name: e,
                delta: r,
                target: n,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(n),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = l.useCallback(function (e) {
              (r.current = z(e)), (n.current = void 0);
            }, []),
            f = l.useCallback(function (t) {
              c(t.type, B(t), t.target, s(t, e.lockRef.current));
            }, []),
            p = l.useCallback(function (t) {
              c(t.type, z(t), t.target, s(t, e.lockRef.current));
            }, []);
          l.useEffect(function () {
            return (
              U.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, P),
              document.addEventListener("touchmove", u, P),
              document.addEventListener("touchstart", d, P),
              function () {
                (U = U.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", u, P),
                  document.removeEventListener("touchmove", u, P),
                  document.removeEventListener("touchstart", d, P);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return l.createElement(
            l.Fragment,
            null,
            m
              ? l.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            h ? l.createElement(A, { gapMode: e.gapMode }) : null
          );
        }),
        h.useMedium(n),
        v);
      var G = l.forwardRef(function (e, t) {
        return l.createElement(g, a({}, e, { ref: t, sideCar: V }));
      });
      G.classNames = g.classNames;
      let $ = G;
    },
    42543: (e, t, r) => {
      "use strict";
      var n = r(68855);
      r.o(n, "redirect") &&
        r.d(t, {
          redirect: function () {
            return n.redirect;
          },
        });
    },
    42773: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("log-in", [
        [
          "path",
          { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" },
        ],
        ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
      ]);
    },
    43512: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => d });
      var n = r(60159),
        o = r(11246),
        a = r(94108),
        i = r(15250),
        l = r(13486),
        s = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = n.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: d = !1,
              onMountAutoFocus: g,
              onUnmountAutoFocus: v,
              ...y
            } = e,
            [w, b] = n.useState(null),
            x = (0, i.c)(g),
            E = (0, i.c)(v),
            _ = n.useRef(null),
            R = (0, o.s)(t, (e) => b(e)),
            S = n.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          n.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (S.paused || !w) return;
                  let t = e.target;
                  w.contains(t)
                    ? (_.current = t)
                    : h(_.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !w) return;
                  let t = e.relatedTarget;
                  null !== t && (w.contains(t) || h(_.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && h(w);
              });
              return (
                w && r.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [d, w, S.paused]),
            n.useEffect(() => {
              if (w) {
                m.add(S);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(s, c);
                  w.addEventListener(s, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (h(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        f(w).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && h(w));
                }
                return () => {
                  w.removeEventListener(s, x),
                    setTimeout(() => {
                      let t = new CustomEvent(u, c);
                      w.addEventListener(u, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented ||
                          h(e ?? document.body, { select: !0 }),
                        w.removeEventListener(u, E),
                        m.remove(S);
                    }, 0);
                };
              }
            }, [w, x, E, S]);
          let C = n.useCallback(
            (e) => {
              if ((!r && !d) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || n !== a
                    ? e.shiftKey &&
                      n === o &&
                      (e.preventDefault(), r && h(a, { select: !0 }))
                    : (e.preventDefault(), r && h(o, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, d, S.paused]
          );
          return (0, l.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: R,
            onKeyDown: C,
          });
        });
      function f(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function p(e, t) {
        for (let r of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function h(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var m = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && r?.pause(), (e = g(e, t)).unshift(t);
          },
          remove(t) {
            (e = g(e, t)), e[0]?.resume();
          },
        };
      })();
      function g(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
    },
    43967: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("chevron-right", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    44382: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return l;
          },
        });
      let n = r(50686),
        o = r(69356),
        a = r(75636),
        i = n._(r(92122));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let s = a.Image;
    },
    49391: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    49600: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRedirectError: function () {
            return i;
          },
          getRedirectStatusCodeFromError: function () {
            return d;
          },
          getRedirectTypeFromError: function () {
            return c;
          },
          getURLFromRedirectError: function () {
            return u;
          },
          permanentRedirect: function () {
            return s;
          },
          redirect: function () {
            return l;
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
      function l(e, t) {
        var r;
        throw (
          (null != t ||
            (t = (null == a || null == (r = a.getStore()) ? void 0 : r.isAction)
              ? o.RedirectType.push
              : o.RedirectType.replace),
          i(e, t, n.RedirectStatusCode.TemporaryRedirect))
        );
      }
      function s(e, t) {
        throw (
          (void 0 === t && (t = o.RedirectType.replace),
          i(e, t, n.RedirectStatusCode.PermanentRedirect))
        );
      }
      function u(e) {
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
      function d(e) {
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
    49933: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(44382),
        o = r.n(n);
    },
    50298: (e, t, r) => {
      "use strict";
      e.exports = r(69358).vendored.contexts.ImageConfigContext;
    },
    50587: (e, t, r) => {
      "use strict";
      r.d(t, { Qg: () => i, bL: () => s });
      var n = r(60159),
        o = r(94108),
        a = r(13486),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        l = n.forwardRef((e, t) =>
          (0, a.jsx)(o.sG.span, { ...e, ref: t, style: { ...i, ...e.style } })
        );
      l.displayName = "VisuallyHidden";
      var s = l;
    },
    50872: (e, t, r) => {
      "use strict";
      e.exports = r(69358).vendored.contexts.HeadManagerContext;
    },
    51820: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    52826: (e, t, r) => {
      "use strict";
      e.exports = r(35703);
    },
    53959: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => o });
      var n = r(60159),
        o = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    57419: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: a,
            objectFit: i,
          } = e,
          l = n ? 40 * n : t,
          s = o ? 40 * o : r,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === i
              ? "xMidYMid"
              : "cover" === i
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    58467: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => et,
        ZL: () => Q,
        bL: () => J,
        bm: () => en,
        hE: () => er,
        hJ: () => ee,
        l9: () => Z,
      });
      var n = r(60159),
        o = r(66634),
        a = r(11246),
        i = r(27134),
        l = r(32194),
        s = r(40594),
        u = r(72734),
        c = r(43512),
        d = r(20829),
        f = r(78998),
        p = r(94108),
        h = r(78766),
        m = r(41918),
        g = r(69679),
        v = r(90691),
        y = r(13486),
        w = "Dialog",
        [b, x] = (0, i.A)(w),
        [E, _] = b(w),
        R = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              modal: u = !0,
            } = e,
            c = n.useRef(null),
            d = n.useRef(null),
            [f, p] = (0, s.i)({
              prop: o,
              defaultProp: a ?? !1,
              onChange: i,
              caller: w,
            });
          return (0, y.jsx)(E, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, l.B)(),
            titleId: (0, l.B)(),
            descriptionId: (0, l.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: u,
            children: r,
          });
        };
      R.displayName = w;
      var S = "DialogTrigger",
        C = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = _(S, r),
            l = (0, a.s)(t, i.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": G(i.open),
            ...n,
            ref: l,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle),
          });
        });
      C.displayName = S;
      var T = "DialogPortal",
        [j, I] = b(T, { forceMount: void 0 }),
        A = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: a,
            } = e,
            i = _(T, t);
          return (0, y.jsx)(j, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, y.jsx)(f.C, {
                present: r || i.open,
                children: (0, y.jsx)(d.Z, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      A.displayName = T;
      var k = "DialogOverlay",
        O = n.forwardRef((e, t) => {
          let r = I(k, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            a = _(k, e.__scopeDialog);
          return a.modal
            ? (0, y.jsx)(f.C, {
                present: n || a.open,
                children: (0, y.jsx)(N, { ...o, ref: t }),
              })
            : null;
        });
      O.displayName = k;
      var P = (0, v.TL)("DialogOverlay.RemoveScroll"),
        N = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = _(k, r);
          return (0, y.jsx)(m.A, {
            as: P,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": G(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        M = "DialogContent",
        D = n.forwardRef((e, t) => {
          let r = I(M, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            a = _(M, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: n || a.open,
            children: a.modal
              ? (0, y.jsx)(L, { ...o, ref: t })
              : (0, y.jsx)(F, { ...o, ref: t }),
          });
        });
      D.displayName = M;
      var L = n.forwardRef((e, t) => {
          let r = _(M, e.__scopeDialog),
            i = n.useRef(null),
            l = (0, a.s)(t, r.contentRef, i);
          return (
            n.useEffect(() => {
              let e = i.current;
              if (e) return (0, g.Eq)(e);
            }, []),
            (0, y.jsx)(z, {
              ...e,
              ref: l,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), r.triggerRef.current?.focus();
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        F = n.forwardRef((e, t) => {
          let r = _(M, e.__scopeDialog),
            o = n.useRef(!1),
            a = n.useRef(!1);
          return (0, y.jsx)(z, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (o.current || r.triggerRef.current?.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (a.current = !0));
              let n = t.target;
              r.triggerRef.current?.contains(n) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        z = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: i,
              onCloseAutoFocus: l,
              ...s
            } = e,
            d = _(M, r),
            f = n.useRef(null),
            p = (0, a.s)(t, f);
          return (
            (0, h.Oh)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: l,
                  children: (0, y.jsx)(u.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": G(d.open),
                    ...s,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(Y, { titleId: d.titleId }),
                    (0, y.jsx)(X, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        B = "DialogTitle",
        H = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = _(B, r);
          return (0, y.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      H.displayName = B;
      var W = "DialogDescription";
      n.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          o = _(W, r);
        return (0, y.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
      }).displayName = W;
      var U = "DialogClose",
        V = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = _(U, r);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => a.onOpenChange(!1)),
          });
        });
      function G(e) {
        return e ? "open" : "closed";
      }
      V.displayName = U;
      var $ = "DialogTitleWarning",
        [K, q] = (0, i.q)($, {
          contentName: M,
          titleName: B,
          docsSlug: "dialog",
        }),
        Y = ({ titleId: e }) => {
          let t = q($),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            n.useEffect(() => {
              e && (document.getElementById(e) || console.error(r));
            }, [r, e]),
            null
          );
        },
        X = ({ contentRef: e, descriptionId: t }) => {
          let r = q("DialogDescriptionWarning"),
            o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;
          return (
            n.useEffect(() => {
              let r = e.current?.getAttribute("aria-describedby");
              t && r && (document.getElementById(t) || console.warn(o));
            }, [o, e, t]),
            null
          );
        },
        J = R,
        Z = C,
        Q = A,
        ee = O,
        et = D,
        er = H,
        en = V;
    },
    66634: (e, t, r) => {
      "use strict";
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      r.d(t, { m: () => n });
    },
    68689: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    68855: (e, t, r) => {
      "use strict";
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
            return l.unauthorized;
          },
          unstable_rethrow: function () {
            return s.unstable_rethrow;
          },
        });
      let n = r(49600),
        o = r(31903),
        a = r(38050),
        i = r(29699),
        l = r(77670),
        s = r(69938);
      class u extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
          );
        }
      }
      class c extends URLSearchParams {
        append() {
          throw new u();
        }
        delete() {
          throw new u();
        }
        set() {
          throw new u();
        }
        sort() {
          throw new u();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    69356: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(12405);
      let n = r(57419),
        o = r(51820),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function i(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function s(e, t) {
        var r, s;
        let u,
          c,
          d,
          {
            src: f,
            sizes: p,
            unoptimized: h = !1,
            priority: m = !1,
            loading: g,
            className: v,
            quality: y,
            width: w,
            height: b,
            fill: x = !1,
            style: E,
            overrideSrc: _,
            onLoad: R,
            onLoadingComplete: S,
            placeholder: C = "empty",
            blurDataURL: T,
            fetchPriority: j,
            decoding: I = "async",
            layout: A,
            objectFit: k,
            objectPosition: O,
            lazyBoundary: P,
            lazyRoot: N,
            ...M
          } = e,
          { imgConf: D, showAltText: L, blurComplete: F, defaultLoader: z } = t,
          B = D || o.imageConfigDefault;
        if ("allSizes" in B) u = B;
        else {
          let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
            t = B.deviceSizes.sort((e, t) => e - t),
            n = null == (r = B.qualities) ? void 0 : r.sort((e, t) => e - t);
          u = { ...B, allSizes: e, deviceSizes: t, qualities: n };
        }
        if (void 0 === z)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let H = M.loader || z;
        delete M.loader, delete M.srcSet;
        let W = "__next_img_default" in H;
        if (W) {
          if ("custom" === u.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  f +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = H;
          H = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (A) {
          "fill" === A && (x = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[A];
          e && (E = { ...E, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[A];
          t && !p && (p = t);
        }
        let U = "",
          V = l(w),
          G = l(b);
        if ((s = f) && "object" == typeof s && (i(s) || void 0 !== s.src)) {
          let e = i(f) ? f.default : f;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((c = e.blurWidth),
            (d = e.blurHeight),
            (T = T || e.blurDataURL),
            (U = e.src),
            !x)
          )
            if (V || G) {
              if (V && !G) {
                let t = V / e.width;
                G = Math.round(e.height * t);
              } else if (!V && G) {
                let t = G / e.height;
                V = Math.round(e.width * t);
              }
            } else (V = e.width), (G = e.height);
        }
        let $ = !m && ("lazy" === g || void 0 === g);
        (!(f = "string" == typeof f ? f : U) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((h = !0), ($ = !1)),
          u.unoptimized && (h = !0),
          W &&
            !u.dangerouslyAllowSVG &&
            f.split("?", 1)[0].endsWith(".svg") &&
            (h = !0);
        let K = l(y),
          q = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: O,
                }
              : {},
            L ? {} : { color: "transparent" },
            E
          ),
          Y =
            F || "empty" === C
              ? null
              : "blur" === C
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, n.getImageBlurSvg)({
                    widthInt: V,
                    heightInt: G,
                    blurWidth: c,
                    blurHeight: d,
                    blurDataURL: T || "",
                    objectFit: q.objectFit,
                  }) +
                  '")'
                : 'url("' + C + '")',
          X = a.includes(q.objectFit)
            ? "fill" === q.objectFit
              ? "100% 100%"
              : "cover"
            : q.objectFit,
          J = Y
            ? {
                backgroundSize: X,
                backgroundPosition: q.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: a,
              sizes: i,
              loader: l,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, i),
              c = s.length - 1;
            return {
              sizes: i || "w" !== u ? i : "100vw",
              srcSet: s
                .map(
                  (e, n) =>
                    l({ config: t, src: r, quality: a, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: l({ config: t, src: r, quality: a, width: s[c] }),
            };
          })({
            config: u,
            src: f,
            unoptimized: h,
            width: V,
            quality: K,
            sizes: p,
            loader: H,
          });
        return {
          props: {
            ...M,
            loading: $ ? "lazy" : g,
            fetchPriority: j,
            width: V,
            height: G,
            decoding: I,
            className: v,
            style: { ...q, ...J },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: _ || Z.src,
          },
          meta: { unoptimized: h, priority: m, placeholder: C, fill: x },
        };
      }
    },
    69679: (e, t, r) => {
      "use strict";
      r.d(t, { Eq: () => c });
      var n = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        o = new WeakMap(),
        a = new WeakMap(),
        i = {},
        l = 0,
        s = function (e) {
          return e && (e.host || s(e.parentNode));
        },
        u = function (e, t, r, n) {
          var u = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = s(e);
              return r && t.contains(r)
                ? r
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[r] || (i[r] = new WeakMap());
          var c = i[r],
            d = [],
            f = new Set(),
            p = new Set(u),
            h = function (e) {
              !e || f.has(e) || (f.add(e), h(e.parentNode));
            };
          u.forEach(h);
          var m = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else
                  try {
                    var t = e.getAttribute(n),
                      i = null !== t && "false" !== t,
                      l = (o.get(e) || 0) + 1,
                      s = (c.get(e) || 0) + 1;
                    o.set(e, l),
                      c.set(e, s),
                      d.push(e),
                      1 === l && i && a.set(e, !0),
                      1 === s && e.setAttribute(r, "true"),
                      i || e.setAttribute(n, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            m(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = o.get(e) - 1,
                  i = c.get(e) - 1;
                o.set(e, t),
                  c.set(e, i),
                  t || (a.has(e) || e.removeAttribute(n), a.delete(e)),
                  i || e.removeAttribute(r);
              }),
                --l ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (a = new WeakMap()),
                  (i = {}));
            }
          );
        },
        c = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var o = Array.from(Array.isArray(e) ? e : [e]),
            a = t || n(e);
          return a
            ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))),
              u(o, a, r, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    69938: (e, t, r) => {
      "use strict";
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
    70821: (e) => {
      "use strict";
      let t = "undefined" != typeof Buffer,
        r =
          /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
        n =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
      function o(e, o, i) {
        null == i &&
          null !== o &&
          "object" == typeof o &&
          ((i = o), (o = void 0)),
          t && Buffer.isBuffer(e) && (e = e.toString()),
          e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
        let l = JSON.parse(e, o);
        if (null === l || "object" != typeof l) return l;
        let s = (i && i.protoAction) || "error",
          u = (i && i.constructorAction) || "error";
        if ("ignore" === s && "ignore" === u) return l;
        if ("ignore" !== s && "ignore" !== u) {
          if (!1 === r.test(e) && !1 === n.test(e)) return l;
        } else if ("ignore" !== s && "ignore" === u) {
          if (!1 === r.test(e)) return l;
        } else if (!1 === n.test(e)) return l;
        return a(l, {
          protoAction: s,
          constructorAction: u,
          safe: i && i.safe,
        });
      }
      function a(
        e,
        {
          protoAction: t = "error",
          constructorAction: r = "error",
          safe: n,
        } = {}
      ) {
        let o = [e];
        for (; o.length; ) {
          let e = o;
          for (let a of ((o = []), e)) {
            if (
              "ignore" !== t &&
              Object.prototype.hasOwnProperty.call(a, "__proto__")
            ) {
              if (!0 === n) return null;
              if ("error" === t)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete a.__proto__;
            }
            if (
              "ignore" !== r &&
              Object.prototype.hasOwnProperty.call(a, "constructor") &&
              Object.prototype.hasOwnProperty.call(a.constructor, "prototype")
            ) {
              if (!0 === n) return null;
              if ("error" === r)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete a.constructor;
            }
            for (let e in a) {
              let t = a[e];
              t && "object" == typeof t && o.push(t);
            }
          }
        }
        return e;
      }
      function i(e, t, r) {
        let n = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        try {
          return o(e, t, r);
        } finally {
          Error.stackTraceLimit = n;
        }
      }
      (e.exports = i),
        (e.exports.default = i),
        (e.exports.parse = i),
        (e.exports.safeParse = function (e, t) {
          let r = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            return o(e, t, { safe: !0 });
          } catch (e) {
            return null;
          } finally {
            Error.stackTraceLimit = r;
          }
        }),
        (e.exports.scan = a);
    },
    72513: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("file-text", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]);
    },
    72734: (e, t, r) => {
      "use strict";
      r.d(t, { qW: () => f });
      var n,
        o = r(60159),
        a = r(66634),
        i = r(94108),
        l = r(11246),
        s = r(15250),
        u = r(13486),
        c = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: f,
              onPointerDownOutside: m,
              onFocusOutside: g,
              onInteractOutside: v,
              onDismiss: y,
              ...w
            } = e,
            b = o.useContext(d),
            [x, E] = o.useState(null),
            _ = x?.ownerDocument ?? globalThis?.document,
            [, R] = o.useState({}),
            S = (0, l.s)(t, (e) => E(e)),
            C = Array.from(b.layers),
            [T] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
            j = C.indexOf(T),
            I = x ? C.indexOf(x) : -1,
            A = b.layersWithOutsidePointerEventsDisabled.size > 0,
            k = I >= j,
            O = (function (e, t = globalThis?.document) {
              let r = (0, s.c)(e),
                n = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", a.current),
                            (a.current = n),
                            t.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : n();
                      } else t.removeEventListener("click", a.current);
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", a.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...b.branches].some((e) => e.contains(t));
              k && !r && (m?.(e), v?.(e), e.defaultPrevented || y?.());
            }, _),
            P = (function (e, t = globalThis?.document) {
              let r = (0, s.c)(e),
                n = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...b.branches].some((e) => e.contains(t)) &&
                (g?.(e), v?.(e), e.defaultPrevented || y?.());
            }, _);
          return (
            !(function (e, t = globalThis?.document) {
              let r = (0, s.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              I === b.layers.size - 1 &&
                (f?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, _),
            o.useEffect(() => {
              if (x)
                return (
                  r &&
                    (0 === b.layersWithOutsidePointerEventsDisabled.size &&
                      ((n = _.body.style.pointerEvents),
                      (_.body.style.pointerEvents = "none")),
                    b.layersWithOutsidePointerEventsDisabled.add(x)),
                  b.layers.add(x),
                  p(),
                  () => {
                    r &&
                      1 === b.layersWithOutsidePointerEventsDisabled.size &&
                      (_.body.style.pointerEvents = n);
                  }
                );
            }, [x, _, r, b]),
            o.useEffect(
              () => () => {
                x &&
                  (b.layers.delete(x),
                  b.layersWithOutsidePointerEventsDisabled.delete(x),
                  p());
              },
              [x, b]
            ),
            o.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, u.jsx)(i.sG.div, {
              ...w,
              ref: S,
              style: {
                pointerEvents: A ? (k ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, P.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, P.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                O.onPointerDownCapture
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function h(e, t, r, { discrete: n }) {
        let o = r.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        t && o.addEventListener(e, t, { once: !0 }),
          n ? (0, i.hO)(o, a) : o.dispatchEvent(a);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let r = o.useContext(d),
            n = o.useRef(null),
            a = (0, l.s)(t, n);
          return (
            o.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, u.jsx)(i.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
    },
    74439: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    75636: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(50686),
        o = r(15881),
        a = r(13486),
        i = o._(r(60159)),
        l = n._(r(22358)),
        s = n._(r(27923)),
        u = r(69356),
        c = r(51820),
        d = r(50298);
      r(12405);
      let f = r(10545),
        p = n._(r(92122)),
        h = r(76181),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, o, a, i) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function v(e) {
        return i.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      globalThis.__NEXT_IMAGE_IMPORTED = !0;
      let y = (0, i.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: l,
            width: s,
            decoding: u,
            className: c,
            style: d,
            fetchPriority: f,
            placeholder: p,
            loading: m,
            unoptimized: y,
            fill: w,
            onLoadRef: b,
            onLoadingCompleteRef: x,
            setBlurComplete: E,
            setShowAltText: _,
            sizesInput: R,
            onLoad: S,
            onError: C,
            ...T
          } = e,
          j = (0, i.useCallback)(
            (e) => {
              e && (C && (e.src = e.src), e.complete && g(e, p, b, x, E, y, R));
            },
            [r, p, b, x, E, C, y, R]
          ),
          I = (0, h.useMergedRef)(t, j);
        return (0, a.jsx)("img", {
          ...T,
          ...v(f),
          loading: m,
          width: s,
          height: l,
          decoding: u,
          "data-nimg": w ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: I,
          onLoad: (e) => {
            g(e.currentTarget, p, b, x, E, y, R);
          },
          onError: (e) => {
            _(!0), "empty" !== p && E(!0), C && C(e);
          },
        });
      });
      function w(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...v(r.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(r.src, n), null)
          : (0, a.jsx)(s.default, {
              children: (0, a.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let b = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(f.RouterContext),
          n = (0, i.useContext)(d.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            var e;
            let t = m || n || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              o = t.deviceSizes.sort((e, t) => e - t),
              a = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: o, qualities: a };
          }, [n]),
          { onLoad: l, onLoadingComplete: s } = e,
          h = (0, i.useRef)(l);
        (0, i.useEffect)(() => {
          h.current = l;
        }, [l]);
        let g = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [v, b] = (0, i.useState)(!1),
          [x, E] = (0, i.useState)(!1),
          { props: _, meta: R } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: x,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(y, {
              ..._,
              unoptimized: R.unoptimized,
              placeholder: R.placeholder,
              fill: R.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: b,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            R.priority
              ? (0, a.jsx)(w, { isAppRouter: !r, imgAttributes: _ })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    76181: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(60159);
      function o(e, t) {
        let r = (0, n.useRef)(null),
          o = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = o.current;
              t && ((o.current = null), t());
            } else e && (r.current = a(e, n)), t && (o.current = a(t, n));
          },
          [e, t]
        );
      }
      function a(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    77026: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("square-pen", [
        [
          "path",
          {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g",
          },
        ],
        [
          "path",
          {
            d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
            key: "ohrbg2",
          },
        ],
      ]);
    },
    77271: (e, t, r) => {
      "use strict";
      r.d(t, { bL: () => E, zi: () => _ });
      var n = r(60159),
        o = r(66634),
        a = r(11246),
        i = r(27134),
        l = r(40594),
        s = r(18268),
        u = r(34176),
        c = r(94108),
        d = r(13486),
        f = "Switch",
        [p, h] = (0, i.A)(f),
        [m, g] = p(f),
        v = n.forwardRef((e, t) => {
          let {
              __scopeSwitch: r,
              name: i,
              checked: s,
              defaultChecked: u,
              required: p,
              disabled: h,
              value: g = "on",
              onCheckedChange: v,
              form: y,
              ...w
            } = e,
            [E, _] = n.useState(null),
            R = (0, a.s)(t, (e) => _(e)),
            S = n.useRef(!1),
            C = !E || y || !!E.closest("form"),
            [T, j] = (0, l.i)({
              prop: s,
              defaultProp: u ?? !1,
              onChange: v,
              caller: f,
            });
          return (0, d.jsxs)(m, {
            scope: r,
            checked: T,
            disabled: h,
            children: [
              (0, d.jsx)(c.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": T,
                "aria-required": p,
                "data-state": x(T),
                "data-disabled": h ? "" : void 0,
                disabled: h,
                value: g,
                ...w,
                ref: R,
                onClick: (0, o.m)(e.onClick, (e) => {
                  j((e) => !e),
                    C &&
                      ((S.current = e.isPropagationStopped()),
                      S.current || e.stopPropagation());
                }),
              }),
              C &&
                (0, d.jsx)(b, {
                  control: E,
                  bubbles: !S.current,
                  name: i,
                  value: g,
                  checked: T,
                  required: p,
                  disabled: h,
                  form: y,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      v.displayName = f;
      var y = "SwitchThumb",
        w = n.forwardRef((e, t) => {
          let { __scopeSwitch: r, ...n } = e,
            o = g(y, r);
          return (0, d.jsx)(c.sG.span, {
            "data-state": x(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: t,
          });
        });
      w.displayName = y;
      var b = n.forwardRef(
        (
          { __scopeSwitch: e, control: t, checked: r, bubbles: o = !0, ...i },
          l
        ) => {
          let c = n.useRef(null),
            f = (0, a.s)(c, l),
            p = (0, s.Z)(r),
            h = (0, u.X)(t);
          return (
            n.useEffect(() => {
              let e = c.current;
              if (!e) return;
              let t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
              if (p !== r && t) {
                let n = new Event("click", { bubbles: o });
                t.call(e, r), e.dispatchEvent(n);
              }
            }, [p, r, o]),
            (0, d.jsx)("input", {
              type: "checkbox",
              "aria-hidden": !0,
              defaultChecked: r,
              ...i,
              tabIndex: -1,
              ref: f,
              style: {
                ...i.style,
                ...h,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0,
              },
            })
          );
        }
      );
      function x(e) {
        return e ? "checked" : "unchecked";
      }
      b.displayName = "SwitchBubbleInput";
      var E = v,
        _ = w;
    },
    77670: (e, t, r) => {
      "use strict";
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
    77816: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("log-out", [
        [
          "path",
          { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
        ],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ]);
    },
    78766: (e, t, r) => {
      "use strict";
      r.d(t, { Oh: () => a });
      var n = r(60159),
        o = 0;
      function a() {
        n.useEffect(() => {
          let e = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? i()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? i()),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    78998: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => i });
      var n = r(60159),
        o = r(11246),
        a = r(53959),
        i = (e) => {
          let { present: t, children: r } = e,
            i = (function (e) {
              var t, r;
              let [o, i] = n.useState(),
                s = n.useRef(null),
                u = n.useRef(e),
                c = n.useRef("none"),
                [d, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (r = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  n.useReducer((e, t) => r[e][t] ?? e, t));
              return (
                n.useEffect(() => {
                  let e = l(s.current);
                  c.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, a.N)(() => {
                  let t = s.current,
                    r = u.current;
                  if (r !== e) {
                    let n = c.current,
                      o = l(t);
                    e
                      ? f("MOUNT")
                      : "none" === o || t?.display === "none"
                        ? f("UNMOUNT")
                        : r && n !== o
                          ? f("ANIMATION_OUT")
                          : f("UNMOUNT"),
                      (u.current = e);
                  }
                }, [e, f]),
                (0, a.N)(() => {
                  if (o) {
                    let e,
                      t = o.ownerDocument.defaultView ?? window,
                      r = (r) => {
                        let n = l(s.current).includes(r.animationName);
                        if (
                          r.target === o &&
                          n &&
                          (f("ANIMATION_END"), !u.current)
                        ) {
                          let r = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (e = t.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = r);
                            }));
                        }
                      },
                      n = (e) => {
                        e.target === o && (c.current = l(s.current));
                      };
                    return (
                      o.addEventListener("animationstart", n),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        t.clearTimeout(e),
                          o.removeEventListener("animationstart", n),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: n.useCallback((e) => {
                    (s.current = e ? getComputedStyle(e) : null), i(e);
                  }, []),
                }
              );
            })(t),
            s =
              "function" == typeof r
                ? r({ present: i.isPresent })
                : n.Children.only(r),
            u = (0, o.s)(
              i.ref,
              (function (e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r
                  ? e.ref
                  : (r =
                        (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in t &&
                        t.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(s)
            );
          return "function" == typeof r || i.isPresent
            ? n.cloneElement(s, { ref: u })
            : null;
        };
      function l(e) {
        return e?.animationName || "none";
      }
      i.displayName = "Presence";
    },
    82e3: (e, t, r) => {
      "use strict";
      r.d(t, {
        LM: () => q,
        OK: () => Y,
        VM: () => _,
        bL: () => K,
        lr: () => N,
      });
      var n = r(60159),
        o = r(94108),
        a = r(78998),
        i = r(27134),
        l = r(11246),
        s = r(15250),
        u = r(88200),
        c = r(53959),
        d = r(5452),
        f = r(66634),
        p = r(13486),
        h = "ScrollArea",
        [m, g] = (0, i.A)(h),
        [v, y] = m(h),
        w = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              type: a = "hover",
              dir: i,
              scrollHideDelay: s = 600,
              ...c
            } = e,
            [d, f] = n.useState(null),
            [h, m] = n.useState(null),
            [g, y] = n.useState(null),
            [w, b] = n.useState(null),
            [x, E] = n.useState(null),
            [_, R] = n.useState(0),
            [S, C] = n.useState(0),
            [T, j] = n.useState(!1),
            [I, A] = n.useState(!1),
            k = (0, l.s)(t, (e) => f(e)),
            O = (0, u.jH)(i);
          return (0, p.jsx)(v, {
            scope: r,
            type: a,
            dir: O,
            scrollHideDelay: s,
            scrollArea: d,
            viewport: h,
            onViewportChange: m,
            content: g,
            onContentChange: y,
            scrollbarX: w,
            onScrollbarXChange: b,
            scrollbarXEnabled: T,
            onScrollbarXEnabledChange: j,
            scrollbarY: x,
            onScrollbarYChange: E,
            scrollbarYEnabled: I,
            onScrollbarYEnabledChange: A,
            onCornerWidthChange: R,
            onCornerHeightChange: C,
            children: (0, p.jsx)(o.sG.div, {
              dir: O,
              ...c,
              ref: k,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": _ + "px",
                "--radix-scroll-area-corner-height": S + "px",
                ...e.style,
              },
            }),
          });
        });
      w.displayName = h;
      var b = "ScrollAreaViewport",
        x = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, children: a, nonce: i, ...s } = e,
            u = y(b, r),
            c = n.useRef(null),
            d = (0, l.s)(t, c, u.onViewportChange);
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: i,
              }),
              (0, p.jsx)(o.sG.div, {
                "data-radix-scroll-area-viewport": "",
                ...s,
                ref: d,
                style: {
                  overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                  overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                  ...e.style,
                },
                children: (0, p.jsx)("div", {
                  ref: u.onContentChange,
                  style: { minWidth: "100%", display: "table" },
                  children: a,
                }),
              }),
            ],
          });
        });
      x.displayName = b;
      var E = "ScrollAreaScrollbar",
        _ = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            a = y(E, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = a,
            s = "horizontal" === e.orientation;
          return (
            n.useEffect(
              () => (
                s ? i(!0) : l(!0),
                () => {
                  s ? i(!1) : l(!1);
                }
              ),
              [s, i, l]
            ),
            "hover" === a.type
              ? (0, p.jsx)(R, { ...o, ref: t, forceMount: r })
              : "scroll" === a.type
                ? (0, p.jsx)(S, { ...o, ref: t, forceMount: r })
                : "auto" === a.type
                  ? (0, p.jsx)(C, { ...o, ref: t, forceMount: r })
                  : "always" === a.type
                    ? (0, p.jsx)(T, { ...o, ref: t })
                    : null
          );
        });
      _.displayName = E;
      var R = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            i = y(E, e.__scopeScrollArea),
            [l, s] = n.useState(!1);
          return (
            n.useEffect(() => {
              let e = i.scrollArea,
                t = 0;
              if (e) {
                let r = () => {
                    window.clearTimeout(t), s(!0);
                  },
                  n = () => {
                    t = window.setTimeout(() => s(!1), i.scrollHideDelay);
                  };
                return (
                  e.addEventListener("pointerenter", r),
                  e.addEventListener("pointerleave", n),
                  () => {
                    window.clearTimeout(t),
                      e.removeEventListener("pointerenter", r),
                      e.removeEventListener("pointerleave", n);
                  }
                );
              }
            }, [i.scrollArea, i.scrollHideDelay]),
            (0, p.jsx)(a.C, {
              present: r || l,
              children: (0, p.jsx)(C, {
                "data-state": l ? "visible" : "hidden",
                ...o,
                ref: t,
              }),
            })
          );
        }),
        S = n.forwardRef((e, t) => {
          var r, o;
          let { forceMount: i, ...l } = e,
            s = y(E, e.__scopeScrollArea),
            u = "horizontal" === e.orientation,
            c = G(() => h("SCROLL_END"), 100),
            [d, h] =
              ((r = "hidden"),
              (o = {
                hidden: { SCROLL: "scrolling" },
                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                idle: {
                  HIDE: "hidden",
                  SCROLL: "scrolling",
                  POINTER_ENTER: "interacting",
                },
              }),
              n.useReducer((e, t) => o[e][t] ?? e, r));
          return (
            n.useEffect(() => {
              if ("idle" === d) {
                let e = window.setTimeout(() => h("HIDE"), s.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [d, s.scrollHideDelay, h]),
            n.useEffect(() => {
              let e = s.viewport,
                t = u ? "scrollLeft" : "scrollTop";
              if (e) {
                let r = e[t],
                  n = () => {
                    let n = e[t];
                    r !== n && (h("SCROLL"), c()), (r = n);
                  };
                return (
                  e.addEventListener("scroll", n),
                  () => e.removeEventListener("scroll", n)
                );
              }
            }, [s.viewport, u, h, c]),
            (0, p.jsx)(a.C, {
              present: i || "hidden" !== d,
              children: (0, p.jsx)(T, {
                "data-state": "hidden" === d ? "hidden" : "visible",
                ...l,
                ref: t,
                onPointerEnter: (0, f.m)(e.onPointerEnter, () =>
                  h("POINTER_ENTER")
                ),
                onPointerLeave: (0, f.m)(e.onPointerLeave, () =>
                  h("POINTER_LEAVE")
                ),
              }),
            })
          );
        }),
        C = n.forwardRef((e, t) => {
          let r = y(E, e.__scopeScrollArea),
            { forceMount: o, ...i } = e,
            [l, s] = n.useState(!1),
            u = "horizontal" === e.orientation,
            c = G(() => {
              if (r.viewport) {
                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(u ? e : t);
              }
            }, 10);
          return (
            $(r.viewport, c),
            $(r.content, c),
            (0, p.jsx)(a.C, {
              present: o || l,
              children: (0, p.jsx)(T, {
                "data-state": l ? "visible" : "hidden",
                ...i,
                ref: t,
              }),
            })
          );
        }),
        T = n.forwardRef((e, t) => {
          let { orientation: r = "vertical", ...o } = e,
            a = y(E, e.__scopeScrollArea),
            i = n.useRef(null),
            l = n.useRef(0),
            [s, u] = n.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            c = B(s.viewport, s.content),
            d = {
              ...o,
              sizes: s,
              onSizesChange: u,
              hasThumb: !!(c > 0 && c < 1),
              onThumbChange: (e) => (i.current = e),
              onThumbPointerUp: () => (l.current = 0),
              onThumbPointerDown: (e) => (l.current = e),
            };
          function f(e, t) {
            return (function (e, t, r, n = "ltr") {
              let o = H(r),
                a = t || o / 2,
                i = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - (o - a),
                s = r.content - r.viewport;
              return U([i, l], "ltr" === n ? [0, s] : [-1 * s, 0])(e);
            })(e, l.current, s, t);
          }
          return "horizontal" === r
            ? (0, p.jsx)(j, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                  if (a.viewport && i.current) {
                    let e = W(a.viewport.scrollLeft, s, a.dir);
                    i.current.style.transform = `translate3d(${e}px, 0, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  a.viewport && (a.viewport.scrollLeft = f(e, a.dir));
                },
              })
            : "vertical" === r
              ? (0, p.jsx)(I, {
                  ...d,
                  ref: t,
                  onThumbPositionChange: () => {
                    if (a.viewport && i.current) {
                      let e = W(a.viewport.scrollTop, s);
                      i.current.style.transform = `translate3d(0, ${e}px, 0)`;
                    }
                  },
                  onWheelScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = e);
                  },
                  onDragScroll: (e) => {
                    a.viewport && (a.viewport.scrollTop = f(e));
                  },
                })
              : null;
        }),
        j = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...a } = e,
            i = y(E, e.__scopeScrollArea),
            [s, u] = n.useState(),
            c = n.useRef(null),
            d = (0, l.s)(t, c, i.onScrollbarXChange);
          return (
            n.useEffect(() => {
              c.current && u(getComputedStyle(c.current));
            }, [c]),
            (0, p.jsx)(O, {
              "data-orientation": "horizontal",
              ...a,
              ref: d,
              sizes: r,
              style: {
                bottom: 0,
                left:
                  "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                right:
                  "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": H(r) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
              onDragScroll: (t) => e.onDragScroll(t.x),
              onWheelScroll: (t, r) => {
                if (i.viewport) {
                  let n = i.viewport.scrollLeft + t.deltaX;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                c.current &&
                  i.viewport &&
                  s &&
                  o({
                    content: i.viewport.scrollWidth,
                    viewport: i.viewport.offsetWidth,
                    scrollbar: {
                      size: c.current.clientWidth,
                      paddingStart: z(s.paddingLeft),
                      paddingEnd: z(s.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        I = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...a } = e,
            i = y(E, e.__scopeScrollArea),
            [s, u] = n.useState(),
            c = n.useRef(null),
            d = (0, l.s)(t, c, i.onScrollbarYChange);
          return (
            n.useEffect(() => {
              c.current && u(getComputedStyle(c.current));
            }, [c]),
            (0, p.jsx)(O, {
              "data-orientation": "vertical",
              ...a,
              ref: d,
              sizes: r,
              style: {
                top: 0,
                right: "ltr" === i.dir ? 0 : void 0,
                left: "rtl" === i.dir ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": H(r) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
              onDragScroll: (t) => e.onDragScroll(t.y),
              onWheelScroll: (t, r) => {
                if (i.viewport) {
                  let n = i.viewport.scrollTop + t.deltaY;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                c.current &&
                  i.viewport &&
                  s &&
                  o({
                    content: i.viewport.scrollHeight,
                    viewport: i.viewport.offsetHeight,
                    scrollbar: {
                      size: c.current.clientHeight,
                      paddingStart: z(s.paddingTop),
                      paddingEnd: z(s.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [A, k] = m(E),
        O = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              sizes: a,
              hasThumb: i,
              onThumbChange: u,
              onThumbPointerUp: c,
              onThumbPointerDown: d,
              onThumbPositionChange: h,
              onDragScroll: m,
              onWheelScroll: g,
              onResize: v,
              ...w
            } = e,
            b = y(E, r),
            [x, _] = n.useState(null),
            R = (0, l.s)(t, (e) => _(e)),
            S = n.useRef(null),
            C = n.useRef(""),
            T = b.viewport,
            j = a.content - a.viewport,
            I = (0, s.c)(g),
            k = (0, s.c)(h),
            O = G(v, 10);
          function P(e) {
            S.current &&
              m({
                x: e.clientX - S.current.left,
                y: e.clientY - S.current.top,
              });
          }
          return (
            n.useEffect(() => {
              let e = (e) => {
                let t = e.target;
                x?.contains(t) && I(e, j);
              };
              return (
                document.addEventListener("wheel", e, { passive: !1 }),
                () => document.removeEventListener("wheel", e, { passive: !1 })
              );
            }, [T, x, j, I]),
            n.useEffect(k, [a, k]),
            $(x, O),
            $(b.content, O),
            (0, p.jsx)(A, {
              scope: r,
              scrollbar: x,
              hasThumb: i,
              onThumbChange: (0, s.c)(u),
              onThumbPointerUp: (0, s.c)(c),
              onThumbPositionChange: k,
              onThumbPointerDown: (0, s.c)(d),
              children: (0, p.jsx)(o.sG.div, {
                ...w,
                ref: R,
                style: { position: "absolute", ...w.style },
                onPointerDown: (0, f.m)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (S.current = x.getBoundingClientRect()),
                    (C.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    b.viewport && (b.viewport.style.scrollBehavior = "auto"),
                    P(e));
                }),
                onPointerMove: (0, f.m)(e.onPointerMove, P),
                onPointerUp: (0, f.m)(e.onPointerUp, (e) => {
                  let t = e.target;
                  t.hasPointerCapture(e.pointerId) &&
                    t.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = C.current),
                    b.viewport && (b.viewport.style.scrollBehavior = ""),
                    (S.current = null);
                }),
              }),
            })
          );
        }),
        P = "ScrollAreaThumb",
        N = n.forwardRef((e, t) => {
          let { forceMount: r, ...n } = e,
            o = k(P, e.__scopeScrollArea);
          return (0, p.jsx)(a.C, {
            present: r || o.hasThumb,
            children: (0, p.jsx)(M, { ref: t, ...n }),
          });
        }),
        M = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, style: a, ...i } = e,
            s = y(P, r),
            u = k(P, r),
            { onThumbPositionChange: c } = u,
            d = (0, l.s)(t, (e) => u.onThumbChange(e)),
            h = n.useRef(void 0),
            m = G(() => {
              h.current && (h.current(), (h.current = void 0));
            }, 100);
          return (
            n.useEffect(() => {
              let e = s.viewport;
              if (e) {
                let t = () => {
                  m(), h.current || ((h.current = V(e, c)), c());
                };
                return (
                  c(),
                  e.addEventListener("scroll", t),
                  () => e.removeEventListener("scroll", t)
                );
              }
            }, [s.viewport, m, c]),
            (0, p.jsx)(o.sG.div, {
              "data-state": u.hasThumb ? "visible" : "hidden",
              ...i,
              ref: d,
              style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...a,
              },
              onPointerDownCapture: (0, f.m)(e.onPointerDownCapture, (e) => {
                let t = e.target.getBoundingClientRect(),
                  r = e.clientX - t.left,
                  n = e.clientY - t.top;
                u.onThumbPointerDown({ x: r, y: n });
              }),
              onPointerUp: (0, f.m)(e.onPointerUp, u.onThumbPointerUp),
            })
          );
        });
      N.displayName = P;
      var D = "ScrollAreaCorner",
        L = n.forwardRef((e, t) => {
          let r = y(D, e.__scopeScrollArea),
            n = !!(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n
            ? (0, p.jsx)(F, { ...e, ref: t })
            : null;
        });
      L.displayName = D;
      var F = n.forwardRef((e, t) => {
        let { __scopeScrollArea: r, ...a } = e,
          i = y(D, r),
          [l, s] = n.useState(0),
          [u, c] = n.useState(0),
          d = !!(l && u);
        return (
          $(i.scrollbarX, () => {
            let e = i.scrollbarX?.offsetHeight || 0;
            i.onCornerHeightChange(e), c(e);
          }),
          $(i.scrollbarY, () => {
            let e = i.scrollbarY?.offsetWidth || 0;
            i.onCornerWidthChange(e), s(e);
          }),
          d
            ? (0, p.jsx)(o.sG.div, {
                ...a,
                ref: t,
                style: {
                  width: l,
                  height: u,
                  position: "absolute",
                  right: "ltr" === i.dir ? 0 : void 0,
                  left: "rtl" === i.dir ? 0 : void 0,
                  bottom: 0,
                  ...e.style,
                },
              })
            : null
        );
      });
      function z(e) {
        return e ? parseInt(e, 10) : 0;
      }
      function B(e, t) {
        let r = e / t;
        return isNaN(r) ? 0 : r;
      }
      function H(e) {
        let t = B(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - r) * t, 18);
      }
      function W(e, t, r = "ltr") {
        let n = H(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          l = (0, d.q)(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return U([0, i], [0, a - n])(l);
      }
      function U(e, t) {
        return (r) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0]);
        };
      }
      var V = (e, t = () => {}) => {
        let r = { left: e.scrollLeft, top: e.scrollTop },
          n = 0;
        return (
          !(function o() {
            let a = { left: e.scrollLeft, top: e.scrollTop },
              i = r.left !== a.left,
              l = r.top !== a.top;
            (i || l) && t(), (r = a), (n = window.requestAnimationFrame(o));
          })(),
          () => window.cancelAnimationFrame(n)
        );
      };
      function G(e, t) {
        let r = (0, s.c)(e),
          o = n.useRef(0);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []),
          n.useCallback(() => {
            window.clearTimeout(o.current),
              (o.current = window.setTimeout(r, t));
          }, [r, t])
        );
      }
      function $(e, t) {
        let r = (0, s.c)(t);
        (0, c.N)(() => {
          let t = 0;
          if (e) {
            let n = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
            });
            return (
              n.observe(e),
              () => {
                window.cancelAnimationFrame(t), n.unobserve(e);
              }
            );
          }
        }, [e, r]);
      }
      var K = w,
        q = x,
        Y = L;
    },
    85606: (e) => {
      e.exports = function (e, t) {
        let r;
        if ("function" != typeof e)
          throw TypeError(
            `Expected the first argument to be a \`function\`, got \`${typeof e}\`.`
          );
        let n = 0;
        return function (...o) {
          clearTimeout(r);
          let a = Date.now(),
            i = t - (a - n);
          i <= 0
            ? ((n = a), e.apply(this, o))
            : (r = setTimeout(() => {
                (n = Date.now()), e.apply(this, o);
              }, i));
        };
      };
    },
    85936: (e, t, r) => {
      "use strict";
      e.exports = r(69358).vendored.contexts.AmpContext;
    },
    88200: (e, t, r) => {
      "use strict";
      r.d(t, { jH: () => a });
      var n = r(60159);
      r(13486);
      var o = n.createContext(void 0);
      function a(e) {
        let t = n.useContext(o);
        return e || t || "ltr";
      }
    },
    90058: (e, t, r) => {
      "use strict";
      r(98740);
      var n = r(60159),
        o = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(n),
        a = "undefined" != typeof process && process.env && !0,
        i = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.name,
              n = void 0 === r ? "stylesheet" : r,
              o = t.optimizeForSpeed,
              l = void 0 === o ? a : o;
            s(i(n), "`name` must be a string"),
              (this._name = n),
              (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
              s("boolean" == typeof l, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = l),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0),
              (this._nonce = null);
          }
          var t,
            r = e.prototype;
          return (
            (r.setOptimizeForSpeed = function (e) {
              s(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                s(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (r.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (r.inject = function () {
              var e = this;
              s(!this._injected, "sheet already injected"),
                (this._injected = !0),
                (this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, r) {
                    return (
                      "number" == typeof r
                        ? (e._serverSheet.cssRules[r] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      r
                    );
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null;
                  },
                });
            }),
            (r.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (r.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (r.insertRule = function (e, t) {
              return (
                s(i(e), "`insertRule` accepts only strings"),
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            }),
            (r.replaceRule = function (e, t) {
              this._optimizeForSpeed;
              var r = this._serverSheet;
              if (
                (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
              )
                return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (n) {
                a ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e);
              }
              return e;
            }),
            (r.deleteRule = function (e) {
              this._serverSheet.deleteRule(e);
            }),
            (r.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                (this._serverSheet.cssRules = []);
            }),
            (r.cssRules = function () {
              return this._serverSheet.cssRules;
            }),
            (r.makeStyleTag = function (e, t, r) {
              t &&
                s(
                  i(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var n = document.createElement("style");
              this._nonce && n.setAttribute("nonce", this._nonce),
                (n.type = "text/css"),
                n.setAttribute("data-" + e, ""),
                t && n.appendChild(document.createTextNode(t));
              var o = document.head || document.getElementsByTagName("head")[0];
              return r ? o.insertBefore(n, r) : o.appendChild(n), n;
            }),
            (t = [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            })(e.prototype, t),
            e
          );
        })();
      function s(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var u = function (e) {
          for (var t = 5381, r = e.length; r; )
            t = (33 * t) ^ e.charCodeAt(--r);
          return t >>> 0;
        },
        c = {};
      function d(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
          n = e + r;
        return c[n] || (c[n] = "jsx-" + u(e + "-" + r)), c[n];
      }
      function f(e, t) {
        var r = e + (t = t.replace(/\/style/gi, "\\/style"));
        return (
          c[r] || (c[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), c[r]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.styleSheet,
              n = void 0 === r ? null : r,
              o = t.optimizeForSpeed,
              a = void 0 !== o && o;
            (this._sheet =
              n || new l({ name: "styled-jsx", optimizeForSpeed: a })),
              this._sheet.inject(),
              n &&
                "boolean" == typeof a &&
                (this._sheet.setOptimizeForSpeed(a),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()));
              var r = this.getIdAndRules(e),
                n = r.styleId,
                o = r.rules;
              if (n in this._instancesCounts) {
                this._instancesCounts[n] += 1;
                return;
              }
              var a = o
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[n] = a), (this._instancesCounts[n] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                r = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  r in this._instancesCounts,
                  "styleId: `" + r + "` not found"
                ),
                (this._instancesCounts[r] -= 1),
                this._instancesCounts[r] < 1)
              ) {
                var n = this._fromServer && this._fromServer[r];
                n
                  ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                  : (this._indices[r].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[r]),
                  delete this._instancesCounts[r];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                r = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return r[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, r;
              return (
                (t = this.cssRules()),
                void 0 === (r = e) && (r = {}),
                t.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return o.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: r.nonce ? r.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: n },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                r = e.dynamic,
                n = e.id;
              if (r) {
                var o = d(n, r);
                return {
                  styleId: o,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return f(o, e);
                      })
                    : [f(o, t)],
                };
              }
              return { styleId: d(n), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        h = n.createContext(null);
      h.displayName = "StyleSheetContext";
      o.default.useInsertionEffect || o.default.useLayoutEffect;
      var m = void 0;
      function g(e) {
        var t = m || n.useContext(h);
        return t && t.add(e), null;
      }
      (g.dynamic = function (e) {
        return e
          .map(function (e) {
            return d(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = g);
    },
    91159: (e, t, r) => {
      "use strict";
      r.d(t, {
        In: () => eA,
        LM: () => eP,
        PP: () => eL,
        UC: () => eO,
        VF: () => eD,
        WT: () => eI,
        ZL: () => ek,
        bL: () => eT,
        l9: () => ej,
        p4: () => eM,
        q7: () => eN,
        wn: () => eF,
      });
      var n = r(60159),
        o = r(22358),
        a = r(5452),
        i = r(66634),
        l = r(1343),
        s = r(11246),
        u = r(27134),
        c = r(88200),
        d = r(72734),
        f = r(78766),
        p = r(43512),
        h = r(32194),
        m = r(26578),
        g = r(20829),
        v = r(94108),
        y = r(90691),
        w = r(15250),
        b = r(40594),
        x = r(53959),
        E = r(18268),
        _ = r(50587),
        R = r(69679),
        S = r(41918),
        C = r(13486),
        T = [" ", "Enter", "ArrowUp", "ArrowDown"],
        j = [" ", "Enter"],
        I = "Select",
        [A, k, O] = (0, l.N)(I),
        [P, N] = (0, u.A)(I, [O, m.Bk]),
        M = (0, m.Bk)(),
        [D, L] = P(I),
        [F, z] = P(I),
        B = (e) => {
          let {
              __scopeSelect: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              value: l,
              defaultValue: s,
              onValueChange: u,
              dir: d,
              name: f,
              autoComplete: p,
              disabled: g,
              required: v,
              form: y,
            } = e,
            w = M(t),
            [x, E] = n.useState(null),
            [_, R] = n.useState(null),
            [S, T] = n.useState(!1),
            j = (0, c.jH)(d),
            [k, O] = (0, b.i)({
              prop: o,
              defaultProp: a ?? !1,
              onChange: i,
              caller: I,
            }),
            [P, N] = (0, b.i)({
              prop: l,
              defaultProp: s,
              onChange: u,
              caller: I,
            }),
            L = n.useRef(null),
            z = !x || y || !!x.closest("form"),
            [B, H] = n.useState(new Set()),
            W = Array.from(B)
              .map((e) => e.props.value)
              .join(";");
          return (0, C.jsx)(m.bL, {
            ...w,
            children: (0, C.jsxs)(D, {
              required: v,
              scope: t,
              trigger: x,
              onTriggerChange: E,
              valueNode: _,
              onValueNodeChange: R,
              valueNodeHasChildren: S,
              onValueNodeHasChildrenChange: T,
              contentId: (0, h.B)(),
              value: P,
              onValueChange: N,
              open: k,
              onOpenChange: O,
              dir: j,
              triggerPointerDownPosRef: L,
              disabled: g,
              children: [
                (0, C.jsx)(A.Provider, {
                  scope: t,
                  children: (0, C.jsx)(F, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: n.useCallback((e) => {
                      H((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: n.useCallback((e) => {
                      H((t) => {
                        let r = new Set(t);
                        return r.delete(e), r;
                      });
                    }, []),
                    children: r,
                  }),
                }),
                z
                  ? (0, C.jsxs)(
                      e_,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: P,
                        onChange: (e) => N(e.target.value),
                        disabled: g,
                        form: y,
                        children: [
                          void 0 === P
                            ? (0, C.jsx)("option", { value: "" })
                            : null,
                          Array.from(B),
                        ],
                      },
                      W
                    )
                  : null,
              ],
            }),
          });
        };
      B.displayName = I;
      var H = "SelectTrigger",
        W = n.forwardRef((e, t) => {
          let { __scopeSelect: r, disabled: o = !1, ...a } = e,
            l = M(r),
            u = L(H, r),
            c = u.disabled || o,
            d = (0, s.s)(t, u.onTriggerChange),
            f = k(r),
            p = n.useRef("touch"),
            [h, g, y] = eS((e) => {
              let t = f().filter((e) => !e.disabled),
                r = t.find((e) => e.value === u.value),
                n = eC(t, e, r);
              void 0 !== n && u.onValueChange(n.value);
            }),
            w = (e) => {
              c || (u.onOpenChange(!0), y()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, C.jsx)(m.Mz, {
            asChild: !0,
            ...l,
            children: (0, C.jsx)(v.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": eR(u.value) ? "" : void 0,
              ...a,
              ref: d,
              onClick: (0, i.m)(a.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && w(e);
              }),
              onPointerDown: (0, i.m)(a.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: (0, i.m)(a.onKeyDown, (e) => {
                let t = "" !== h.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (!t || " " !== e.key) &&
                    T.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      W.displayName = H;
      var U = "SelectValue",
        V = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              className: n,
              style: o,
              children: a,
              placeholder: i = "",
              ...l
            } = e,
            u = L(U, r),
            { onValueNodeHasChildrenChange: c } = u,
            d = void 0 !== a,
            f = (0, s.s)(t, u.onValueNodeChange);
          return (
            (0, x.N)(() => {
              c(d);
            }, [c, d]),
            (0, C.jsx)(v.sG.span, {
              ...l,
              ref: f,
              style: { pointerEvents: "none" },
              children: eR(u.value)
                ? (0, C.jsx)(C.Fragment, { children: i })
                : a,
            })
          );
        });
      V.displayName = U;
      var G = n.forwardRef((e, t) => {
        let { __scopeSelect: r, children: n, ...o } = e;
        return (0, C.jsx)(v.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼",
        });
      });
      G.displayName = "SelectIcon";
      var $ = (e) => (0, C.jsx)(g.Z, { asChild: !0, ...e });
      $.displayName = "SelectPortal";
      var K = "SelectContent",
        q = n.forwardRef((e, t) => {
          let r = L(K, e.__scopeSelect),
            [a, i] = n.useState();
          return ((0, x.N)(() => {
            i(new DocumentFragment());
          }, []),
          r.open)
            ? (0, C.jsx)(Z, { ...e, ref: t })
            : a
              ? o.createPortal(
                  (0, C.jsx)(Y, {
                    scope: e.__scopeSelect,
                    children: (0, C.jsx)(A.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, C.jsx)("div", { children: e.children }),
                    }),
                  }),
                  a
                )
              : null;
        });
      q.displayName = K;
      var [Y, X] = P(K),
        J = (0, y.TL)("SelectContent.RemoveScroll"),
        Z = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              position: o = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              side: c,
              sideOffset: h,
              align: m,
              alignOffset: g,
              arrowPadding: v,
              collisionBoundary: y,
              collisionPadding: w,
              sticky: b,
              hideWhenDetached: x,
              avoidCollisions: E,
              ..._
            } = e,
            T = L(K, r),
            [j, I] = n.useState(null),
            [A, O] = n.useState(null),
            P = (0, s.s)(t, (e) => I(e)),
            [N, M] = n.useState(null),
            [D, F] = n.useState(null),
            z = k(r),
            [B, H] = n.useState(!1),
            W = n.useRef(!1);
          n.useEffect(() => {
            if (j) return (0, R.Eq)(j);
          }, [j]),
            (0, f.Oh)();
          let U = n.useCallback(
              (e) => {
                let [t, ...r] = z().map((e) => e.ref.current),
                  [n] = r.slice(-1),
                  o = document.activeElement;
                for (let r of e)
                  if (
                    r === o ||
                    (r?.scrollIntoView({ block: "nearest" }),
                    r === t && A && (A.scrollTop = 0),
                    r === n && A && (A.scrollTop = A.scrollHeight),
                    r?.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [z, A]
            ),
            V = n.useCallback(() => U([N, j]), [U, N, j]);
          n.useEffect(() => {
            B && V();
          }, [B, V]);
          let { onOpenChange: G, triggerPointerDownPosRef: $ } = T;
          n.useEffect(() => {
            if (j) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - ($.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - ($.current?.y ?? 0)),
                  };
                },
                r = (r) => {
                  e.x <= 10 && e.y <= 10
                    ? r.preventDefault()
                    : j.contains(r.target) || G(!1),
                    document.removeEventListener("pointermove", t),
                    ($.current = null);
                };
              return (
                null !== $.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", r, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", r, {
                      capture: !0,
                    });
                }
              );
            }
          }, [j, G, $]),
            n.useEffect(() => {
              let e = () => G(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [G]);
          let [q, X] = eS((e) => {
              let t = z().filter((e) => !e.disabled),
                r = t.find((e) => e.ref.current === document.activeElement),
                n = eC(t, e, r);
              n && setTimeout(() => n.ref.current.focus());
            }),
            Z = n.useCallback(
              (e, t, r) => {
                let n = !W.current && !r;
                ((void 0 !== T.value && T.value === t) || n) &&
                  (M(e), n && (W.current = !0));
              },
              [T.value]
            ),
            et = n.useCallback(() => j?.focus(), [j]),
            er = n.useCallback(
              (e, t, r) => {
                let n = !W.current && !r;
                ((void 0 !== T.value && T.value === t) || n) && F(e);
              },
              [T.value]
            ),
            en = "popper" === o ? ee : Q,
            eo =
              en === ee
                ? {
                    side: c,
                    sideOffset: h,
                    align: m,
                    alignOffset: g,
                    arrowPadding: v,
                    collisionBoundary: y,
                    collisionPadding: w,
                    sticky: b,
                    hideWhenDetached: x,
                    avoidCollisions: E,
                  }
                : {};
          return (0, C.jsx)(Y, {
            scope: r,
            content: j,
            viewport: A,
            onViewportChange: O,
            itemRefCallback: Z,
            selectedItem: N,
            onItemLeave: et,
            itemTextRefCallback: er,
            focusSelectedItem: V,
            selectedItemText: D,
            position: o,
            isPositioned: B,
            searchRef: q,
            children: (0, C.jsx)(S.A, {
              as: J,
              allowPinchZoom: !0,
              children: (0, C.jsx)(p.n, {
                asChild: !0,
                trapped: T.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, i.m)(a, (e) => {
                  T.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                }),
                children: (0, C.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: u,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => T.onOpenChange(!1),
                  children: (0, C.jsx)(en, {
                    role: "listbox",
                    id: T.contentId,
                    "data-state": T.open ? "open" : "closed",
                    dir: T.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ..._,
                    ...eo,
                    onPlaced: () => H(!0),
                    ref: P,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ..._.style,
                    },
                    onKeyDown: (0, i.m)(_.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || X(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = z()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1);
                        }
                        setTimeout(() => U(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      Z.displayName = "SelectContentImpl";
      var Q = n.forwardRef((e, t) => {
        let { __scopeSelect: r, onPlaced: o, ...i } = e,
          l = L(K, r),
          u = X(K, r),
          [c, d] = n.useState(null),
          [f, p] = n.useState(null),
          h = (0, s.s)(t, (e) => p(e)),
          m = k(r),
          g = n.useRef(!1),
          y = n.useRef(!0),
          {
            viewport: w,
            selectedItem: b,
            selectedItemText: E,
            focusSelectedItem: _,
          } = u,
          R = n.useCallback(() => {
            if (l.trigger && l.valueNode && c && f && w && b && E) {
              let e = l.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                r = l.valueNode.getBoundingClientRect(),
                n = E.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let o = n.left - t.left,
                  i = r.left - o,
                  l = e.left - i,
                  s = e.width + l,
                  u = Math.max(s, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.q)(i, [10, Math.max(10, d - u)]);
                (c.style.minWidth = s + "px"), (c.style.left = f + "px");
              } else {
                let o = t.right - n.right,
                  i = window.innerWidth - r.right - o,
                  l = window.innerWidth - e.right - i,
                  s = e.width + l,
                  u = Math.max(s, t.width),
                  d = window.innerWidth - 10,
                  f = (0, a.q)(i, [10, Math.max(10, d - u)]);
                (c.style.minWidth = s + "px"), (c.style.right = f + "px");
              }
              let i = m(),
                s = window.innerHeight - 20,
                u = w.scrollHeight,
                d = window.getComputedStyle(f),
                p = parseInt(d.borderTopWidth, 10),
                h = parseInt(d.paddingTop, 10),
                v = parseInt(d.borderBottomWidth, 10),
                y = p + h + u + parseInt(d.paddingBottom, 10) + v,
                x = Math.min(5 * b.offsetHeight, y),
                _ = window.getComputedStyle(w),
                R = parseInt(_.paddingTop, 10),
                S = parseInt(_.paddingBottom, 10),
                C = e.top + e.height / 2 - 10,
                T = b.offsetHeight / 2,
                j = p + h + (b.offsetTop + T);
              if (j <= C) {
                let e = i.length > 0 && b === i[i.length - 1].ref.current;
                c.style.bottom = "0px";
                let t = Math.max(
                  s - C,
                  T +
                    (e ? S : 0) +
                    (f.clientHeight - w.offsetTop - w.offsetHeight) +
                    v
                );
                c.style.height = j + t + "px";
              } else {
                let e = i.length > 0 && b === i[0].ref.current;
                c.style.top = "0px";
                let t = Math.max(C, p + w.offsetTop + (e ? R : 0) + T);
                (c.style.height = t + (y - j) + "px"),
                  (w.scrollTop = j - C + w.offsetTop);
              }
              (c.style.margin = "10px 0"),
                (c.style.minHeight = x + "px"),
                (c.style.maxHeight = s + "px"),
                o?.(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [m, l.trigger, l.valueNode, c, f, w, b, E, l.dir, o]);
        (0, x.N)(() => R(), [R]);
        let [S, T] = n.useState();
        (0, x.N)(() => {
          f && T(window.getComputedStyle(f).zIndex);
        }, [f]);
        let j = n.useCallback(
          (e) => {
            e && !0 === y.current && (R(), _?.(), (y.current = !1));
          },
          [R, _]
        );
        return (0, C.jsx)(et, {
          scope: r,
          contentWrapper: c,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: j,
          children: (0, C.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: S,
            },
            children: (0, C.jsx)(v.sG.div, {
              ...i,
              ref: h,
              style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
            }),
          }),
        });
      });
      Q.displayName = "SelectItemAlignedPosition";
      var ee = n.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = 10,
            ...a
          } = e,
          i = M(r);
        return (0, C.jsx)(m.UC, {
          ...i,
          ...a,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      ee.displayName = "SelectPopperPosition";
      var [et, er] = P(K, {}),
        en = "SelectViewport",
        eo = n.forwardRef((e, t) => {
          let { __scopeSelect: r, nonce: o, ...a } = e,
            l = X(en, r),
            u = er(en, r),
            c = (0, s.s)(t, l.onViewportChange),
            d = n.useRef(0);
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, C.jsx)(A.Slot, {
                scope: r,
                children: (0, C.jsx)(v.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...a,
                  ref: c,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style,
                  },
                  onScroll: (0, i.m)(a.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: r, shouldExpandOnScrollRef: n } = u;
                    if (n?.current && r) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let n = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(r.style.minHeight),
                            parseFloat(r.style.height)
                          );
                        if (o < n) {
                          let a = o + e,
                            i = Math.min(n, a),
                            l = a - i;
                          (r.style.height = i + "px"),
                            "0px" === r.style.bottom &&
                              ((t.scrollTop = l > 0 ? l : 0),
                              (r.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eo.displayName = en;
      var ea = "SelectGroup",
        [ei, el] = P(ea);
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = (0, h.B)();
        return (0, C.jsx)(ei, {
          scope: r,
          id: o,
          children: (0, C.jsx)(v.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t,
          }),
        });
      }).displayName = ea;
      var es = "SelectLabel";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = el(es, r);
        return (0, C.jsx)(v.sG.div, { id: o.id, ...n, ref: t });
      }).displayName = es;
      var eu = "SelectItem",
        [ec, ed] = P(eu),
        ef = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              value: o,
              disabled: a = !1,
              textValue: l,
              ...u
            } = e,
            c = L(eu, r),
            d = X(eu, r),
            f = c.value === o,
            [p, m] = n.useState(l ?? ""),
            [g, y] = n.useState(!1),
            w = (0, s.s)(t, (e) => d.itemRefCallback?.(e, o, a)),
            b = (0, h.B)(),
            x = n.useRef("touch"),
            E = () => {
              a || (c.onValueChange(o), c.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, C.jsx)(ec, {
            scope: r,
            value: o,
            disabled: a,
            textId: b,
            isSelected: f,
            onItemTextChange: n.useCallback((e) => {
              m((t) => t || (e?.textContent ?? "").trim());
            }, []),
            children: (0, C.jsx)(A.ItemSlot, {
              scope: r,
              value: o,
              disabled: a,
              textValue: p,
              children: (0, C.jsx)(v.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": f && g,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...u,
                ref: w,
                onFocus: (0, i.m)(u.onFocus, () => y(!0)),
                onBlur: (0, i.m)(u.onBlur, () => y(!1)),
                onClick: (0, i.m)(u.onClick, () => {
                  "mouse" !== x.current && E();
                }),
                onPointerUp: (0, i.m)(u.onPointerUp, () => {
                  "mouse" === x.current && E();
                }),
                onPointerDown: (0, i.m)(u.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, i.m)(u.onPointerMove, (e) => {
                  (x.current = e.pointerType),
                    a
                      ? d.onItemLeave?.()
                      : "mouse" === x.current &&
                        e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, i.m)(u.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    d.onItemLeave?.();
                }),
                onKeyDown: (0, i.m)(u.onKeyDown, (e) => {
                  (d.searchRef?.current === "" || " " !== e.key) &&
                    (j.includes(e.key) && E(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ef.displayName = eu;
      var ep = "SelectItemText",
        eh = n.forwardRef((e, t) => {
          let { __scopeSelect: r, className: a, style: i, ...l } = e,
            u = L(ep, r),
            c = X(ep, r),
            d = ed(ep, r),
            f = z(ep, r),
            [p, h] = n.useState(null),
            m = (0, s.s)(
              t,
              (e) => h(e),
              d.onItemTextChange,
              (e) => c.itemTextRefCallback?.(e, d.value, d.disabled)
            ),
            g = p?.textContent,
            y = n.useMemo(
              () =>
                (0, C.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: g },
                  d.value
                ),
              [d.disabled, d.value, g]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: b } = f;
          return (
            (0, x.N)(() => (w(y), () => b(y)), [w, b, y]),
            (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsx)(v.sG.span, { id: d.textId, ...l, ref: m }),
                d.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? o.createPortal(l.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      eh.displayName = ep;
      var em = "SelectItemIndicator",
        eg = n.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e;
          return ed(em, r).isSelected
            ? (0, C.jsx)(v.sG.span, { "aria-hidden": !0, ...n, ref: t })
            : null;
        });
      eg.displayName = em;
      var ev = "SelectScrollUpButton",
        ey = n.forwardRef((e, t) => {
          let r = X(ev, e.__scopeSelect),
            o = er(ev, e.__scopeSelect),
            [a, i] = n.useState(!1),
            l = (0, s.s)(t, o.onScrollButtonChange);
          return (
            (0, x.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            a
              ? (0, C.jsx)(ex, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      ey.displayName = ev;
      var ew = "SelectScrollDownButton",
        eb = n.forwardRef((e, t) => {
          let r = X(ew, e.__scopeSelect),
            o = er(ew, e.__scopeSelect),
            [a, i] = n.useState(!1),
            l = (0, s.s)(t, o.onScrollButtonChange);
          return (
            (0, x.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            a
              ? (0, C.jsx)(ex, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      eb.displayName = ew;
      var ex = n.forwardRef((e, t) => {
        let { __scopeSelect: r, onAutoScroll: o, ...a } = e,
          l = X("SelectScrollButton", r),
          s = n.useRef(null),
          u = k(r),
          c = n.useCallback(() => {
            null !== s.current &&
              (window.clearInterval(s.current), (s.current = null));
          }, []);
        return (
          n.useEffect(() => () => c(), [c]),
          (0, x.N)(() => {
            let e = u().find((e) => e.ref.current === document.activeElement);
            e?.ref.current?.scrollIntoView({ block: "nearest" });
          }, [u]),
          (0, C.jsx)(v.sG.div, {
            "aria-hidden": !0,
            ...a,
            ref: t,
            style: { flexShrink: 0, ...a.style },
            onPointerDown: (0, i.m)(a.onPointerDown, () => {
              null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, i.m)(a.onPointerMove, () => {
              l.onItemLeave?.(),
                null === s.current && (s.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, i.m)(a.onPointerLeave, () => {
              c();
            }),
          })
        );
      });
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e;
        return (0, C.jsx)(v.sG.div, { "aria-hidden": !0, ...n, ref: t });
      }).displayName = "SelectSeparator";
      var eE = "SelectArrow";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = M(r),
          a = L(eE, r),
          i = X(eE, r);
        return a.open && "popper" === i.position
          ? (0, C.jsx)(m.i3, { ...o, ...n, ref: t })
          : null;
      }).displayName = eE;
      var e_ = n.forwardRef(({ __scopeSelect: e, value: t, ...r }, o) => {
        let a = n.useRef(null),
          i = (0, s.s)(o, a),
          l = (0, E.Z)(t);
        return (
          n.useEffect(() => {
            let e = a.current;
            if (!e) return;
            let r = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value"
            ).set;
            if (l !== t && r) {
              let n = new Event("change", { bubbles: !0 });
              r.call(e, t), e.dispatchEvent(n);
            }
          }, [l, t]),
          (0, C.jsx)(v.sG.select, {
            ...r,
            style: { ..._.Qg, ...r.style },
            ref: i,
            defaultValue: t,
          })
        );
      });
      function eR(e) {
        return "" === e || void 0 === e;
      }
      function eS(e) {
        let t = (0, w.c)(e),
          r = n.useRef(""),
          o = n.useRef(0),
          a = n.useCallback(
            (e) => {
              let n = r.current + e;
              t(n),
                (function e(t) {
                  (r.current = t),
                    window.clearTimeout(o.current),
                    "" !== t &&
                      (o.current = window.setTimeout(() => e(""), 1e3));
                })(n);
            },
            [t]
          ),
          i = n.useCallback(() => {
            (r.current = ""), window.clearTimeout(o.current);
          }, []);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []), [r, a, i]
        );
      }
      function eC(e, t, r) {
        var n, o;
        let a =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i = r ? e.indexOf(r) : -1,
          l =
            ((n = e),
            (o = Math.max(i, 0)),
            n.map((e, t) => n[(o + t) % n.length]));
        1 === a.length && (l = l.filter((e) => e !== r));
        let s = l.find((e) =>
          e.textValue.toLowerCase().startsWith(a.toLowerCase())
        );
        return s !== r ? s : void 0;
      }
      e_.displayName = "SelectBubbleInput";
      var eT = B,
        ej = W,
        eI = V,
        eA = G,
        ek = $,
        eO = q,
        eP = eo,
        eN = ef,
        eM = eh,
        eD = eg,
        eL = ey,
        eF = eb;
    },
    92122: (e, t) => {
      "use strict";
      function r(e) {
        var t;
        let { config: r, src: n, width: o, quality: a } = e,
          i =
            a ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          o +
          "&q=" +
          i +
          (n.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    92365: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    92816: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    },
    94108: (e, t, r) => {
      "use strict";
      r.d(t, { hO: () => s, sG: () => l });
      var n = r(60159),
        o = r(22358),
        a = r(90691),
        i = r(13486),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, a.TL)(`Primitive.${t}`),
            o = n.forwardRef((e, n) => {
              let { asChild: o, ...a } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(o ? r : t, { ...a, ref: n })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {});
      function s(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    97490: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    98398: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(84667).A)("message-square", [
        [
          "path",
          {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz",
          },
        ],
      ]);
    },
    98740: () => {},
  });
