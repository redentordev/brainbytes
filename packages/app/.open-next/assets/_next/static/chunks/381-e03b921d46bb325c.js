"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [381],
  {
    170: (e, t) => {
      function r(e) {
        var t;
        let { config: r, src: n, width: o, quality: l } = e,
          a =
            l ||
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
          a +
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
    212: (e, t, r) => {
      r.d(t, {
        UC: () => e7,
        q7: () => e3,
        ZL: () => e5,
        bL: () => e4,
        l9: () => e6,
      });
      var n = r(7620),
        o = r(9254),
        l = r(9640),
        a = r(482),
        i = r(7076),
        u = r(7156),
        s = r(1675),
        c = r(7644),
        d = r(2491),
        f = r(7848),
        p = r(8552),
        v = r(728),
        h = r(3992),
        m = r(5724),
        g = r(8400),
        y = r(3568),
        w = r(4568),
        b = "rovingFocusGroup.onEntryFocus",
        x = { bubbles: !1, cancelable: !0 },
        C = "RovingFocusGroup",
        [S, E, j] = (0, s.N)(C),
        [R, k] = (0, a.A)(C, [j]),
        [M, _] = R(C),
        P = n.forwardRef((e, t) =>
          (0, w.jsx)(S.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, w.jsx)(S.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, w.jsx)(A, { ...e, ref: t }),
            }),
          })
        );
      P.displayName = C;
      var A = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: a,
              loop: s = !1,
              dir: d,
              currentTabStopId: f,
              defaultCurrentTabStopId: p,
              onCurrentTabStopIdChange: v,
              onEntryFocus: h,
              preventScrollOnEntryFocus: m = !1,
              ...g
            } = e,
            S = n.useRef(null),
            j = (0, l.s)(t, S),
            R = (0, c.jH)(d),
            [k, _] = (0, i.i)({
              prop: f,
              defaultProp: null != p ? p : null,
              onChange: v,
              caller: C,
            }),
            [P, A] = n.useState(!1),
            T = (0, y.c)(h),
            D = E(r),
            I = n.useRef(!1),
            [O, L] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = S.current;
              if (e)
                return (
                  e.addEventListener(b, T), () => e.removeEventListener(b, T)
                );
            }, [T]),
            (0, w.jsx)(M, {
              scope: r,
              orientation: a,
              dir: R,
              loop: s,
              currentTabStopId: k,
              onItemFocus: n.useCallback((e) => _(e), [_]),
              onItemShiftTab: n.useCallback(() => A(!0), []),
              onFocusableItemAdd: n.useCallback(() => L((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => L((e) => e - 1), []),
              children: (0, w.jsx)(u.sG.div, {
                tabIndex: P || 0 === O ? -1 : 0,
                "data-orientation": a,
                ...g,
                ref: j,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.m)(e.onMouseDown, () => {
                  I.current = !0;
                }),
                onFocus: (0, o.m)(e.onFocus, (e) => {
                  let t = !I.current;
                  if (e.target === e.currentTarget && t && !P) {
                    let t = new CustomEvent(b, x);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = D().filter((e) => e.focusable);
                      N(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === k),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        m
                      );
                    }
                  }
                  I.current = !1;
                }),
                onBlur: (0, o.m)(e.onBlur, () => A(!1)),
              }),
            })
          );
        }),
        T = "RovingFocusGroupItem",
        D = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: l = !0,
              active: a = !1,
              tabStopId: i,
              children: s,
              ...c
            } = e,
            d = (0, v.B)(),
            f = i || d,
            p = _(T, r),
            h = p.currentTabStopId === f,
            m = E(r),
            {
              onFocusableItemAdd: g,
              onFocusableItemRemove: y,
              currentTabStopId: b,
            } = p;
          return (
            n.useEffect(() => {
              if (l) return g(), () => y();
            }, [l, g, y]),
            (0, w.jsx)(S.ItemSlot, {
              scope: r,
              id: f,
              focusable: l,
              active: a,
              children: (0, w.jsx)(u.sG.span, {
                tabIndex: h ? 0 : -1,
                "data-orientation": p.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                  l ? p.onItemFocus(f) : e.preventDefault();
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
                      return I[o];
                  })(e, p.orientation, p.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = m()
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
                    setTimeout(() => N(r));
                  }
                }),
                children:
                  "function" == typeof s
                    ? s({ isCurrentTabStop: h, hasTabStop: null != b })
                    : s,
              }),
            })
          );
        });
      D.displayName = T;
      var I = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var O = r(9649),
        L = r(3027),
        F = r(7146),
        z = ["Enter", " "],
        H = ["ArrowUp", "PageDown", "End"],
        B = ["ArrowDown", "PageUp", "Home", ...H],
        G = { ltr: [...z, "ArrowRight"], rtl: [...z, "ArrowLeft"] },
        W = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        K = "Menu",
        [U, V, q] = (0, s.N)(K),
        [X, Y] = (0, a.A)(K, [q, h.Bk, k]),
        Z = (0, h.Bk)(),
        J = k(),
        [$, Q] = X(K),
        [ee, et] = X(K),
        er = (e) => {
          let {
              __scopeMenu: t,
              open: r = !1,
              children: o,
              dir: l,
              onOpenChange: a,
              modal: i = !0,
            } = e,
            u = Z(t),
            [s, d] = n.useState(null),
            f = n.useRef(!1),
            p = (0, y.c)(a),
            v = (0, c.jH)(l);
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
            (0, w.jsx)(h.bL, {
              ...u,
              children: (0, w.jsx)($, {
                scope: t,
                open: r,
                onOpenChange: p,
                content: s,
                onContentChange: d,
                children: (0, w.jsx)(ee, {
                  scope: t,
                  onClose: n.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: v,
                  modal: i,
                  children: o,
                }),
              }),
            })
          );
        };
      er.displayName = K;
      var en = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = Z(r);
        return (0, w.jsx)(h.Mz, { ...o, ...n, ref: t });
      });
      en.displayName = "MenuAnchor";
      var eo = "MenuPortal",
        [el, ea] = X(eo, { forceMount: void 0 }),
        ei = (e) => {
          let { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
            l = Q(eo, t);
          return (0, w.jsx)(el, {
            scope: t,
            forceMount: r,
            children: (0, w.jsx)(g.C, {
              present: r || l.open,
              children: (0, w.jsx)(m.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      ei.displayName = eo;
      var eu = "MenuContent",
        [es, ec] = X(eu),
        ed = n.forwardRef((e, t) => {
          let r = ea(eu, e.__scopeMenu),
            { forceMount: n = r.forceMount, ...o } = e,
            l = Q(eu, e.__scopeMenu),
            a = et(eu, e.__scopeMenu);
          return (0, w.jsx)(U.Provider, {
            scope: e.__scopeMenu,
            children: (0, w.jsx)(g.C, {
              present: n || l.open,
              children: (0, w.jsx)(U.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, w.jsx)(ef, { ...o, ref: t })
                  : (0, w.jsx)(ep, { ...o, ref: t }),
              }),
            }),
          });
        }),
        ef = n.forwardRef((e, t) => {
          let r = Q(eu, e.__scopeMenu),
            a = n.useRef(null),
            i = (0, l.s)(t, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, L.Eq)(e);
            }, []),
            (0, w.jsx)(eh, {
              ...e,
              ref: i,
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
          let r = Q(eu, e.__scopeMenu);
          return (0, w.jsx)(eh, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
          });
        }),
        ev = (0, O.TL)("MenuContent.ScrollLock"),
        eh = n.forwardRef((e, t) => {
          let {
              __scopeMenu: r,
              loop: a = !1,
              trapFocus: i,
              onOpenAutoFocus: u,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: c,
              onEntryFocus: v,
              onEscapeKeyDown: m,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: x,
              disableOutsideScroll: C,
              ...S
            } = e,
            E = Q(eu, r),
            j = et(eu, r),
            R = Z(r),
            k = J(r),
            M = V(r),
            [_, A] = n.useState(null),
            T = n.useRef(null),
            D = (0, l.s)(t, T, E.onContentChange),
            I = n.useRef(0),
            N = n.useRef(""),
            O = n.useRef(0),
            L = n.useRef(null),
            z = n.useRef("right"),
            G = n.useRef(0),
            W = C ? F.A : n.Fragment,
            K = (e) => {
              var t, r;
              let n = N.current + e,
                o = M().filter((e) => !e.disabled),
                l = document.activeElement,
                a =
                  null == (t = o.find((e) => e.ref.current === l))
                    ? void 0
                    : t.textValue,
                i = (function (e, t, r) {
                  var n;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    l = r ? e.indexOf(r) : -1,
                    a =
                      ((n = Math.max(l, 0)),
                      e.map((t, r) => e[(n + r) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== r));
                  let i = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return i !== r ? i : void 0;
                })(
                  o.map((e) => e.textValue),
                  n,
                  a
                ),
                u =
                  null == (r = o.find((e) => e.textValue === i))
                    ? void 0
                    : r.ref.current;
              !(function e(t) {
                (N.current = t),
                  window.clearTimeout(I.current),
                  "" !== t && (I.current = window.setTimeout(() => e(""), 1e3));
              })(n),
                u && setTimeout(() => u.focus());
            };
          n.useEffect(() => () => window.clearTimeout(I.current), []),
            (0, f.Oh)();
          let U = n.useCallback((e) => {
            var t, r;
            return (
              z.current === (null == (t = L.current) ? void 0 : t.side) &&
              (function (e, t) {
                return (
                  !!t &&
                  (function (e, t) {
                    let { x: r, y: n } = e,
                      o = !1;
                    for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                      let a = t[e],
                        i = t[l],
                        u = a.x,
                        s = a.y,
                        c = i.x,
                        d = i.y;
                      s > n != d > n &&
                        r < ((c - u) * (n - s)) / (d - s) + u &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t)
                );
              })(e, null == (r = L.current) ? void 0 : r.area)
            );
          }, []);
          return (0, w.jsx)(es, {
            scope: r,
            searchRef: N,
            onItemEnter: n.useCallback(
              (e) => {
                U(e) && e.preventDefault();
              },
              [U]
            ),
            onItemLeave: n.useCallback(
              (e) => {
                var t;
                U(e) || (null == (t = T.current) || t.focus(), A(null));
              },
              [U]
            ),
            onTriggerLeave: n.useCallback(
              (e) => {
                U(e) && e.preventDefault();
              },
              [U]
            ),
            pointerGraceTimerRef: O,
            onPointerGraceIntentChange: n.useCallback((e) => {
              L.current = e;
            }, []),
            children: (0, w.jsx)(W, {
              ...(C ? { as: ev, allowPinchZoom: !0 } : void 0),
              children: (0, w.jsx)(p.n, {
                asChild: !0,
                trapped: i,
                onMountAutoFocus: (0, o.m)(u, (e) => {
                  var t;
                  e.preventDefault(),
                    null == (t = T.current) || t.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: s,
                children: (0, w.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: m,
                  onPointerDownOutside: g,
                  onFocusOutside: y,
                  onInteractOutside: b,
                  onDismiss: x,
                  children: (0, w.jsx)(P, {
                    asChild: !0,
                    ...k,
                    dir: j.dir,
                    orientation: "vertical",
                    loop: a,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: (0, o.m)(v, (e) => {
                      j.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, w.jsx)(h.UC, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": eB(E.open),
                      "data-radix-menu-content": "",
                      dir: j.dir,
                      ...R,
                      ...S,
                      ref: D,
                      style: { outline: "none", ...S.style },
                      onKeyDown: (0, o.m)(S.onKeyDown, (e) => {
                        let t =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          r = e.ctrlKey || e.altKey || e.metaKey,
                          n = 1 === e.key.length;
                        t &&
                          ("Tab" === e.key && e.preventDefault(),
                          !r && n && K(e.key));
                        let o = T.current;
                        if (e.target !== o || !B.includes(e.key)) return;
                        e.preventDefault();
                        let l = M()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        H.includes(e.key) && l.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let r of e)
                              if (
                                r === t ||
                                (r.focus(), document.activeElement !== t)
                              )
                                return;
                          })(l);
                      }),
                      onBlur: (0, o.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(I.current), (N.current = ""));
                      }),
                      onPointerMove: (0, o.m)(
                        e.onPointerMove,
                        eK((e) => {
                          let t = e.target,
                            r = G.current !== e.clientX;
                          e.currentTarget.contains(t) &&
                            r &&
                            ((z.current =
                              e.clientX > G.current ? "right" : "left"),
                            (G.current = e.clientX));
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ed.displayName = eu;
      var em = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(u.sG.div, { role: "group", ...n, ref: t });
      });
      em.displayName = "MenuGroup";
      var eg = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(u.sG.div, { ...n, ref: t });
      });
      eg.displayName = "MenuLabel";
      var ey = "MenuItem",
        ew = "menu.itemSelect",
        eb = n.forwardRef((e, t) => {
          let { disabled: r = !1, onSelect: a, ...i } = e,
            s = n.useRef(null),
            c = et(ey, e.__scopeMenu),
            d = ec(ey, e.__scopeMenu),
            f = (0, l.s)(t, s),
            p = n.useRef(!1);
          return (0, w.jsx)(ex, {
            ...i,
            ref: f,
            disabled: r,
            onClick: (0, o.m)(e.onClick, () => {
              let e = s.current;
              if (!r && e) {
                let t = new CustomEvent(ew, { bubbles: !0, cancelable: !0 });
                e.addEventListener(ew, (e) => (null == a ? void 0 : a(e)), {
                  once: !0,
                }),
                  (0, u.hO)(e, t),
                  t.defaultPrevented ? (p.current = !1) : c.onClose();
              }
            }),
            onPointerDown: (t) => {
              var r;
              null == (r = e.onPointerDown) || r.call(e, t), (p.current = !0);
            },
            onPointerUp: (0, o.m)(e.onPointerUp, (e) => {
              var t;
              p.current || null == (t = e.currentTarget) || t.click();
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
          let { __scopeMenu: r, disabled: a = !1, textValue: i, ...s } = e,
            c = ec(ey, r),
            d = J(r),
            f = n.useRef(null),
            p = (0, l.s)(t, f),
            [v, h] = n.useState(!1),
            [m, g] = n.useState("");
          return (
            n.useEffect(() => {
              let e = f.current;
              if (e) {
                var t;
                g((null != (t = e.textContent) ? t : "").trim());
              }
            }, [s.children]),
            (0, w.jsx)(U.ItemSlot, {
              scope: r,
              disabled: a,
              textValue: null != i ? i : m,
              children: (0, w.jsx)(D, {
                asChild: !0,
                ...d,
                focusable: !a,
                children: (0, w.jsx)(u.sG.div, {
                  role: "menuitem",
                  "data-highlighted": v ? "" : void 0,
                  "aria-disabled": a || void 0,
                  "data-disabled": a ? "" : void 0,
                  ...s,
                  ref: p,
                  onPointerMove: (0, o.m)(
                    e.onPointerMove,
                    eK((e) => {
                      a
                        ? c.onItemLeave(e)
                        : (c.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: (0, o.m)(
                    e.onPointerLeave,
                    eK((e) => c.onItemLeave(e))
                  ),
                  onFocus: (0, o.m)(e.onFocus, () => h(!0)),
                  onBlur: (0, o.m)(e.onBlur, () => h(!1)),
                }),
              }),
            })
          );
        }),
        eC = n.forwardRef((e, t) => {
          let { checked: r = !1, onCheckedChange: n, ...l } = e;
          return (0, w.jsx)(eP, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0, w.jsx)(eb, {
              role: "menuitemcheckbox",
              "aria-checked": eG(r) ? "mixed" : r,
              ...l,
              ref: t,
              "data-state": eW(r),
              onSelect: (0, o.m)(
                l.onSelect,
                () => (null == n ? void 0 : n(!!eG(r) || !r)),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      eC.displayName = "MenuCheckboxItem";
      var eS = "MenuRadioGroup",
        [eE, ej] = X(eS, { value: void 0, onValueChange: () => {} }),
        eR = n.forwardRef((e, t) => {
          let { value: r, onValueChange: n, ...o } = e,
            l = (0, y.c)(n);
          return (0, w.jsx)(eE, {
            scope: e.__scopeMenu,
            value: r,
            onValueChange: l,
            children: (0, w.jsx)(em, { ...o, ref: t }),
          });
        });
      eR.displayName = eS;
      var ek = "MenuRadioItem",
        eM = n.forwardRef((e, t) => {
          let { value: r, ...n } = e,
            l = ej(ek, e.__scopeMenu),
            a = r === l.value;
          return (0, w.jsx)(eP, {
            scope: e.__scopeMenu,
            checked: a,
            children: (0, w.jsx)(eb, {
              role: "menuitemradio",
              "aria-checked": a,
              ...n,
              ref: t,
              "data-state": eW(a),
              onSelect: (0, o.m)(
                n.onSelect,
                () => {
                  var e;
                  return null == (e = l.onValueChange) ? void 0 : e.call(l, r);
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      eM.displayName = ek;
      var e_ = "MenuItemIndicator",
        [eP, eA] = X(e_, { checked: !1 }),
        eT = n.forwardRef((e, t) => {
          let { __scopeMenu: r, forceMount: n, ...o } = e,
            l = eA(e_, r);
          return (0, w.jsx)(g.C, {
            present: n || eG(l.checked) || !0 === l.checked,
            children: (0, w.jsx)(u.sG.span, {
              ...o,
              ref: t,
              "data-state": eW(l.checked),
            }),
          });
        });
      eT.displayName = e_;
      var eD = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, w.jsx)(u.sG.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...n,
          ref: t,
        });
      });
      eD.displayName = "MenuSeparator";
      var eI = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = Z(r);
        return (0, w.jsx)(h.i3, { ...o, ...n, ref: t });
      });
      eI.displayName = "MenuArrow";
      var [eN, eO] = X("MenuSub"),
        eL = "MenuSubTrigger",
        eF = n.forwardRef((e, t) => {
          let r = Q(eL, e.__scopeMenu),
            a = et(eL, e.__scopeMenu),
            i = eO(eL, e.__scopeMenu),
            u = ec(eL, e.__scopeMenu),
            s = n.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = u,
            f = { __scopeMenu: e.__scopeMenu },
            p = n.useCallback(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
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
                id: i.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": r.open,
                "aria-controls": i.contentId,
                "data-state": eB(r.open),
                ...e,
                ref: (0, l.t)(t, i.onTriggerChange),
                onClick: (t) => {
                  var n;
                  null == (n = e.onClick) || n.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
                },
                onPointerMove: (0, o.m)(
                  e.onPointerMove,
                  eK((t) => {
                    u.onItemEnter(t),
                      !t.defaultPrevented &&
                        (e.disabled ||
                          r.open ||
                          s.current ||
                          (u.onPointerGraceIntentChange(null),
                          (s.current = window.setTimeout(() => {
                            r.onOpenChange(!0), p();
                          }, 100))));
                  })
                ),
                onPointerLeave: (0, o.m)(
                  e.onPointerLeave,
                  eK((e) => {
                    var t, n;
                    p();
                    let o =
                      null == (t = r.content)
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t = null == (n = r.content) ? void 0 : n.dataset.side,
                        l = "right" === t,
                        a = o[l ? "left" : "right"],
                        i = o[l ? "right" : "left"];
                      u.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (l ? -5 : 5), y: e.clientY },
                          { x: a, y: o.top },
                          { x: i, y: o.top },
                          { x: i, y: o.bottom },
                          { x: a, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => u.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                      u.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: (0, o.m)(e.onKeyDown, (t) => {
                  let n = "" !== u.searchRef.current;
                  if (
                    !e.disabled &&
                    (!n || " " !== t.key) &&
                    G[a.dir].includes(t.key)
                  ) {
                    var o;
                    r.onOpenChange(!0),
                      null == (o = r.content) || o.focus(),
                      t.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      eF.displayName = eL;
      var ez = "MenuSubContent",
        eH = n.forwardRef((e, t) => {
          let r = ea(eu, e.__scopeMenu),
            { forceMount: a = r.forceMount, ...i } = e,
            u = Q(eu, e.__scopeMenu),
            s = et(eu, e.__scopeMenu),
            c = eO(ez, e.__scopeMenu),
            d = n.useRef(null),
            f = (0, l.s)(t, d);
          return (0, w.jsx)(U.Provider, {
            scope: e.__scopeMenu,
            children: (0, w.jsx)(g.C, {
              present: a || u.open,
              children: (0, w.jsx)(U.Slot, {
                scope: e.__scopeMenu,
                children: (0, w.jsx)(eh, {
                  id: c.contentId,
                  "aria-labelledby": c.triggerId,
                  ...i,
                  ref: f,
                  align: "start",
                  side: "rtl" === s.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    s.isUsingKeyboardRef.current &&
                      (null == (t = d.current) || t.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, o.m)(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && u.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, o.m)(e.onEscapeKeyDown, (e) => {
                    s.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      r = W[s.dir].includes(e.key);
                    if (t && r) {
                      var n;
                      u.onOpenChange(!1),
                        null == (n = c.trigger) || n.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function eB(e) {
        return e ? "open" : "closed";
      }
      function eG(e) {
        return "indeterminate" === e;
      }
      function eW(e) {
        return eG(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eK(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      eH.displayName = ez;
      var eU = "DropdownMenu",
        [eV, eq] = (0, a.A)(eU, [Y]),
        eX = Y(),
        [eY, eZ] = eV(eU),
        eJ = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              dir: o,
              open: l,
              defaultOpen: a,
              onOpenChange: u,
              modal: s = !0,
            } = e,
            c = eX(t),
            d = n.useRef(null),
            [f, p] = (0, i.i)({
              prop: l,
              defaultProp: null != a && a,
              onChange: u,
              caller: eU,
            });
          return (0, w.jsx)(eY, {
            scope: t,
            triggerId: (0, v.B)(),
            triggerRef: d,
            contentId: (0, v.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: s,
            children: (0, w.jsx)(er, {
              ...c,
              open: f,
              onOpenChange: p,
              dir: o,
              modal: s,
              children: r,
            }),
          });
        };
      eJ.displayName = eU;
      var e$ = "DropdownMenuTrigger",
        eQ = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, disabled: n = !1, ...a } = e,
            i = eZ(e$, r),
            s = eX(r);
          return (0, w.jsx)(en, {
            asChild: !0,
            ...s,
            children: (0, w.jsx)(u.sG.button, {
              type: "button",
              id: i.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": i.open,
              "aria-controls": i.open ? i.contentId : void 0,
              "data-state": i.open ? "open" : "closed",
              "data-disabled": n ? "" : void 0,
              disabled: n,
              ...a,
              ref: (0, l.t)(t, i.triggerRef),
              onPointerDown: (0, o.m)(e.onPointerDown, (e) => {
                !n &&
                  0 === e.button &&
                  !1 === e.ctrlKey &&
                  (i.onOpenToggle(), i.open || e.preventDefault());
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                !n &&
                  (["Enter", " "].includes(e.key) && i.onOpenToggle(),
                  "ArrowDown" === e.key && i.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      eQ.displayName = e$;
      var e0 = (e) => {
        let { __scopeDropdownMenu: t, ...r } = e,
          n = eX(t);
        return (0, w.jsx)(ei, { ...n, ...r });
      };
      e0.displayName = "DropdownMenuPortal";
      var e1 = "DropdownMenuContent",
        e2 = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...l } = e,
            a = eZ(e1, r),
            i = eX(r),
            u = n.useRef(!1);
          return (0, w.jsx)(ed, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...i,
            ...l,
            ref: t,
            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
              var t;
              u.current || null == (t = a.triggerRef.current) || t.focus(),
                (u.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, o.m)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                n = 2 === t.button || r;
              (!a.modal || n) && (u.current = !0);
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
            o = eX(r);
          return (0, w.jsx)(em, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eg, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuLabel");
      var e8 = n.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = eX(r);
        return (0, w.jsx)(eb, { ...o, ...n, ref: t });
      });
      (e8.displayName = "DropdownMenuItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eC, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuCheckboxItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eR, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eM, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eT, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuItemIndicator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eD, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSeparator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eI, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuArrow"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eF, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSubTrigger"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eX(r);
          return (0, w.jsx)(eH, {
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
        e6 = eQ,
        e5 = e0,
        e7 = e2,
        e3 = e8;
    },
    327: (e, t) => {
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
    1261: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("sun", [
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
    1352: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(1510)._(r(7620)).default.createContext({});
    },
    1675: (e, t, r) => {
      function n(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance"
          );
        return t.get(e);
      }
      function o(e, t) {
        var r = n(e, t, "get");
        return r.get ? r.get.call(e) : r.value;
      }
      function l(e, t, r) {
        var o = n(e, t, "set");
        if (o.set) o.set.call(e, r);
        else {
          if (!o.writable)
            throw TypeError("attempted to set read only private field");
          o.value = r;
        }
        return r;
      }
      r.d(t, { N: () => f });
      var a,
        i = r(7620),
        u = r(482),
        s = r(9640),
        c = r(9649),
        d = r(4568);
      function f(e) {
        let t = e + "CollectionProvider",
          [r, n] = (0, u.A)(t),
          [o, l] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          a = (e) => {
            let { scope: t, children: r } = e,
              n = i.useRef(null),
              l = i.useRef(new Map()).current;
            return (0, d.jsx)(o, {
              scope: t,
              itemMap: l,
              collectionRef: n,
              children: r,
            });
          };
        a.displayName = t;
        let f = e + "CollectionSlot",
          p = (0, c.TL)(f),
          v = i.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = l(f, r),
              a = (0, s.s)(t, o.collectionRef);
            return (0, d.jsx)(p, { ref: a, children: n });
          });
        v.displayName = f;
        let h = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          g = (0, c.TL)(h),
          y = i.forwardRef((e, t) => {
            let { scope: r, children: n, ...o } = e,
              a = i.useRef(null),
              u = (0, s.s)(t, a),
              c = l(h, r);
            return (
              i.useEffect(
                () => (
                  c.itemMap.set(a, { ref: a, ...o }),
                  () => void c.itemMap.delete(a)
                )
              ),
              (0, d.jsx)(g, { ...{ [m]: "" }, ref: u, children: n })
            );
          });
        return (
          (y.displayName = h),
          [
            { Provider: a, Slot: v, ItemSlot: y },
            function (t) {
              let r = l(e + "CollectionConsumer", t);
              return i.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            n,
          ]
        );
      }
      var p = new WeakMap();
      function v(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let r = (function (e, t) {
          let r = e.length,
            n = h(t),
            o = n >= 0 ? n : r + n;
          return o < 0 || o >= r ? -1 : o;
        })(e, t);
        return -1 === r ? void 0 : e[r];
      }
      function h(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
      a = new WeakMap();
    },
    1773: (e, t, r) => {
      r.d(t, { default: () => o.a });
      var n = r(4930),
        o = r.n(n);
    },
    2371: (e, t) => {
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
    2463: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    2568: (e, t, r) => {
      r.d(t, {
        LM: () => X,
        OK: () => Y,
        VM: () => S,
        bL: () => q,
        lr: () => I,
      });
      var n = r(7620),
        o = r(7156),
        l = r(8400),
        a = r(482),
        i = r(9640),
        u = r(3568),
        s = r(7644),
        c = r(7247),
        d = r(5038),
        f = r(9254),
        p = r(4568),
        v = "ScrollArea",
        [h, m] = (0, a.A)(v),
        [g, y] = h(v),
        w = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              type: l = "hover",
              dir: a,
              scrollHideDelay: u = 600,
              ...c
            } = e,
            [d, f] = n.useState(null),
            [v, h] = n.useState(null),
            [m, y] = n.useState(null),
            [w, b] = n.useState(null),
            [x, C] = n.useState(null),
            [S, E] = n.useState(0),
            [j, R] = n.useState(0),
            [k, M] = n.useState(!1),
            [_, P] = n.useState(!1),
            A = (0, i.s)(t, (e) => f(e)),
            T = (0, s.jH)(a);
          return (0, p.jsx)(g, {
            scope: r,
            type: l,
            dir: T,
            scrollHideDelay: u,
            scrollArea: d,
            viewport: v,
            onViewportChange: h,
            content: m,
            onContentChange: y,
            scrollbarX: w,
            onScrollbarXChange: b,
            scrollbarXEnabled: k,
            onScrollbarXEnabledChange: M,
            scrollbarY: x,
            onScrollbarYChange: C,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: E,
            onCornerHeightChange: R,
            children: (0, p.jsx)(o.sG.div, {
              dir: T,
              ...c,
              ref: A,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": S + "px",
                "--radix-scroll-area-corner-height": j + "px",
                ...e.style,
              },
            }),
          });
        });
      w.displayName = v;
      var b = "ScrollAreaViewport",
        x = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, children: l, nonce: a, ...u } = e,
            s = y(b, r),
            c = n.useRef(null),
            d = (0, i.s)(t, c, s.onViewportChange);
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: a,
              }),
              (0, p.jsx)(o.sG.div, {
                "data-radix-scroll-area-viewport": "",
                ...u,
                ref: d,
                style: {
                  overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                  overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                  ...e.style,
                },
                children: (0, p.jsx)("div", {
                  ref: s.onContentChange,
                  style: { minWidth: "100%", display: "table" },
                  children: l,
                }),
              }),
            ],
          });
        });
      x.displayName = b;
      var C = "ScrollAreaScrollbar",
        S = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            l = y(C, e.__scopeScrollArea),
            { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = l,
            u = "horizontal" === e.orientation;
          return (
            n.useEffect(
              () => (
                u ? a(!0) : i(!0),
                () => {
                  u ? a(!1) : i(!1);
                }
              ),
              [u, a, i]
            ),
            "hover" === l.type
              ? (0, p.jsx)(E, { ...o, ref: t, forceMount: r })
              : "scroll" === l.type
                ? (0, p.jsx)(j, { ...o, ref: t, forceMount: r })
                : "auto" === l.type
                  ? (0, p.jsx)(R, { ...o, ref: t, forceMount: r })
                  : "always" === l.type
                    ? (0, p.jsx)(k, { ...o, ref: t })
                    : null
          );
        });
      S.displayName = C;
      var E = n.forwardRef((e, t) => {
          let { forceMount: r, ...o } = e,
            a = y(C, e.__scopeScrollArea),
            [i, u] = n.useState(!1);
          return (
            n.useEffect(() => {
              let e = a.scrollArea,
                t = 0;
              if (e) {
                let r = () => {
                    window.clearTimeout(t), u(!0);
                  },
                  n = () => {
                    t = window.setTimeout(() => u(!1), a.scrollHideDelay);
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
            }, [a.scrollArea, a.scrollHideDelay]),
            (0, p.jsx)(l.C, {
              present: r || i,
              children: (0, p.jsx)(R, {
                "data-state": i ? "visible" : "hidden",
                ...o,
                ref: t,
              }),
            })
          );
        }),
        j = n.forwardRef((e, t) => {
          var r, o;
          let { forceMount: a, ...i } = e,
            u = y(C, e.__scopeScrollArea),
            s = "horizontal" === e.orientation,
            c = U(() => v("SCROLL_END"), 100),
            [d, v] =
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
              n.useReducer((e, t) => {
                let r = o[e][t];
                return null != r ? r : e;
              }, r));
          return (
            n.useEffect(() => {
              if ("idle" === d) {
                let e = window.setTimeout(() => v("HIDE"), u.scrollHideDelay);
                return () => window.clearTimeout(e);
              }
            }, [d, u.scrollHideDelay, v]),
            n.useEffect(() => {
              let e = u.viewport,
                t = s ? "scrollLeft" : "scrollTop";
              if (e) {
                let r = e[t],
                  n = () => {
                    let n = e[t];
                    r !== n && (v("SCROLL"), c()), (r = n);
                  };
                return (
                  e.addEventListener("scroll", n),
                  () => e.removeEventListener("scroll", n)
                );
              }
            }, [u.viewport, s, v, c]),
            (0, p.jsx)(l.C, {
              present: a || "hidden" !== d,
              children: (0, p.jsx)(k, {
                "data-state": "hidden" === d ? "hidden" : "visible",
                ...i,
                ref: t,
                onPointerEnter: (0, f.m)(e.onPointerEnter, () =>
                  v("POINTER_ENTER")
                ),
                onPointerLeave: (0, f.m)(e.onPointerLeave, () =>
                  v("POINTER_LEAVE")
                ),
              }),
            })
          );
        }),
        R = n.forwardRef((e, t) => {
          let r = y(C, e.__scopeScrollArea),
            { forceMount: o, ...a } = e,
            [i, u] = n.useState(!1),
            s = "horizontal" === e.orientation,
            c = U(() => {
              if (r.viewport) {
                let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                u(s ? e : t);
              }
            }, 10);
          return (
            V(r.viewport, c),
            V(r.content, c),
            (0, p.jsx)(l.C, {
              present: o || i,
              children: (0, p.jsx)(k, {
                "data-state": i ? "visible" : "hidden",
                ...a,
                ref: t,
              }),
            })
          );
        }),
        k = n.forwardRef((e, t) => {
          let { orientation: r = "vertical", ...o } = e,
            l = y(C, e.__scopeScrollArea),
            a = n.useRef(null),
            i = n.useRef(0),
            [u, s] = n.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            c = H(u.viewport, u.content),
            d = {
              ...o,
              sizes: u,
              onSizesChange: s,
              hasThumb: !!(c > 0 && c < 1),
              onThumbChange: (e) => (a.current = e),
              onThumbPointerUp: () => (i.current = 0),
              onThumbPointerDown: (e) => (i.current = e),
            };
          function f(e, t) {
            return (function (e, t, r) {
              let n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "ltr",
                o = B(r),
                l = t || o / 2,
                a = r.scrollbar.paddingStart + l,
                i = r.scrollbar.size - r.scrollbar.paddingEnd - (o - l),
                u = r.content - r.viewport;
              return W([a, i], "ltr" === n ? [0, u] : [-1 * u, 0])(e);
            })(e, i.current, u, t);
          }
          return "horizontal" === r
            ? (0, p.jsx)(M, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                  if (l.viewport && a.current) {
                    let e = G(l.viewport.scrollLeft, u, l.dir);
                    a.current.style.transform = "translate3d(".concat(
                      e,
                      "px, 0, 0)"
                    );
                  }
                },
                onWheelScroll: (e) => {
                  l.viewport && (l.viewport.scrollLeft = e);
                },
                onDragScroll: (e) => {
                  l.viewport && (l.viewport.scrollLeft = f(e, l.dir));
                },
              })
            : "vertical" === r
              ? (0, p.jsx)(_, {
                  ...d,
                  ref: t,
                  onThumbPositionChange: () => {
                    if (l.viewport && a.current) {
                      let e = G(l.viewport.scrollTop, u);
                      a.current.style.transform = "translate3d(0, ".concat(
                        e,
                        "px, 0)"
                      );
                    }
                  },
                  onWheelScroll: (e) => {
                    l.viewport && (l.viewport.scrollTop = e);
                  },
                  onDragScroll: (e) => {
                    l.viewport && (l.viewport.scrollTop = f(e));
                  },
                })
              : null;
        }),
        M = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...l } = e,
            a = y(C, e.__scopeScrollArea),
            [u, s] = n.useState(),
            c = n.useRef(null),
            d = (0, i.s)(t, c, a.onScrollbarXChange);
          return (
            n.useEffect(() => {
              c.current && s(getComputedStyle(c.current));
            }, [c]),
            (0, p.jsx)(T, {
              "data-orientation": "horizontal",
              ...l,
              ref: d,
              sizes: r,
              style: {
                bottom: 0,
                left:
                  "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                right:
                  "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                "--radix-scroll-area-thumb-width": B(r) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
              onDragScroll: (t) => e.onDragScroll(t.x),
              onWheelScroll: (t, r) => {
                if (a.viewport) {
                  let n = a.viewport.scrollLeft + t.deltaX;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                c.current &&
                  a.viewport &&
                  u &&
                  o({
                    content: a.viewport.scrollWidth,
                    viewport: a.viewport.offsetWidth,
                    scrollbar: {
                      size: c.current.clientWidth,
                      paddingStart: z(u.paddingLeft),
                      paddingEnd: z(u.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        _ = n.forwardRef((e, t) => {
          let { sizes: r, onSizesChange: o, ...l } = e,
            a = y(C, e.__scopeScrollArea),
            [u, s] = n.useState(),
            c = n.useRef(null),
            d = (0, i.s)(t, c, a.onScrollbarYChange);
          return (
            n.useEffect(() => {
              c.current && s(getComputedStyle(c.current));
            }, [c]),
            (0, p.jsx)(T, {
              "data-orientation": "vertical",
              ...l,
              ref: d,
              sizes: r,
              style: {
                top: 0,
                right: "ltr" === a.dir ? 0 : void 0,
                left: "rtl" === a.dir ? 0 : void 0,
                bottom: "var(--radix-scroll-area-corner-height)",
                "--radix-scroll-area-thumb-height": B(r) + "px",
                ...e.style,
              },
              onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
              onDragScroll: (t) => e.onDragScroll(t.y),
              onWheelScroll: (t, r) => {
                if (a.viewport) {
                  let n = a.viewport.scrollTop + t.deltaY;
                  e.onWheelScroll(n),
                    (function (e, t) {
                      return e > 0 && e < t;
                    })(n, r) && t.preventDefault();
                }
              },
              onResize: () => {
                c.current &&
                  a.viewport &&
                  u &&
                  o({
                    content: a.viewport.scrollHeight,
                    viewport: a.viewport.offsetHeight,
                    scrollbar: {
                      size: c.current.clientHeight,
                      paddingStart: z(u.paddingTop),
                      paddingEnd: z(u.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [P, A] = h(C),
        T = n.forwardRef((e, t) => {
          let {
              __scopeScrollArea: r,
              sizes: l,
              hasThumb: a,
              onThumbChange: s,
              onThumbPointerUp: c,
              onThumbPointerDown: d,
              onThumbPositionChange: v,
              onDragScroll: h,
              onWheelScroll: m,
              onResize: g,
              ...w
            } = e,
            b = y(C, r),
            [x, S] = n.useState(null),
            E = (0, i.s)(t, (e) => S(e)),
            j = n.useRef(null),
            R = n.useRef(""),
            k = b.viewport,
            M = l.content - l.viewport,
            _ = (0, u.c)(m),
            A = (0, u.c)(v),
            T = U(g, 10);
          function D(e) {
            j.current &&
              h({
                x: e.clientX - j.current.left,
                y: e.clientY - j.current.top,
              });
          }
          return (
            n.useEffect(() => {
              let e = (e) => {
                let t = e.target;
                (null == x ? void 0 : x.contains(t)) && _(e, M);
              };
              return (
                document.addEventListener("wheel", e, { passive: !1 }),
                () => document.removeEventListener("wheel", e, { passive: !1 })
              );
            }, [k, x, M, _]),
            n.useEffect(A, [l, A]),
            V(x, T),
            V(b.content, T),
            (0, p.jsx)(P, {
              scope: r,
              scrollbar: x,
              hasThumb: a,
              onThumbChange: (0, u.c)(s),
              onThumbPointerUp: (0, u.c)(c),
              onThumbPositionChange: A,
              onThumbPointerDown: (0, u.c)(d),
              children: (0, p.jsx)(o.sG.div, {
                ...w,
                ref: E,
                style: { position: "absolute", ...w.style },
                onPointerDown: (0, f.m)(e.onPointerDown, (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (j.current = x.getBoundingClientRect()),
                    (R.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    b.viewport && (b.viewport.style.scrollBehavior = "auto"),
                    D(e));
                }),
                onPointerMove: (0, f.m)(e.onPointerMove, D),
                onPointerUp: (0, f.m)(e.onPointerUp, (e) => {
                  let t = e.target;
                  t.hasPointerCapture(e.pointerId) &&
                    t.releasePointerCapture(e.pointerId),
                    (document.body.style.webkitUserSelect = R.current),
                    b.viewport && (b.viewport.style.scrollBehavior = ""),
                    (j.current = null);
                }),
              }),
            })
          );
        }),
        D = "ScrollAreaThumb",
        I = n.forwardRef((e, t) => {
          let { forceMount: r, ...n } = e,
            o = A(D, e.__scopeScrollArea);
          return (0, p.jsx)(l.C, {
            present: r || o.hasThumb,
            children: (0, p.jsx)(N, { ref: t, ...n }),
          });
        }),
        N = n.forwardRef((e, t) => {
          let { __scopeScrollArea: r, style: l, ...a } = e,
            u = y(D, r),
            s = A(D, r),
            { onThumbPositionChange: c } = s,
            d = (0, i.s)(t, (e) => s.onThumbChange(e)),
            v = n.useRef(void 0),
            h = U(() => {
              v.current && (v.current(), (v.current = void 0));
            }, 100);
          return (
            n.useEffect(() => {
              let e = u.viewport;
              if (e) {
                let t = () => {
                  h(), v.current || ((v.current = K(e, c)), c());
                };
                return (
                  c(),
                  e.addEventListener("scroll", t),
                  () => e.removeEventListener("scroll", t)
                );
              }
            }, [u.viewport, h, c]),
            (0, p.jsx)(o.sG.div, {
              "data-state": s.hasThumb ? "visible" : "hidden",
              ...a,
              ref: d,
              style: {
                width: "var(--radix-scroll-area-thumb-width)",
                height: "var(--radix-scroll-area-thumb-height)",
                ...l,
              },
              onPointerDownCapture: (0, f.m)(e.onPointerDownCapture, (e) => {
                let t = e.target.getBoundingClientRect(),
                  r = e.clientX - t.left,
                  n = e.clientY - t.top;
                s.onThumbPointerDown({ x: r, y: n });
              }),
              onPointerUp: (0, f.m)(e.onPointerUp, s.onThumbPointerUp),
            })
          );
        });
      I.displayName = D;
      var O = "ScrollAreaCorner",
        L = n.forwardRef((e, t) => {
          let r = y(O, e.__scopeScrollArea),
            n = !!(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n
            ? (0, p.jsx)(F, { ...e, ref: t })
            : null;
        });
      L.displayName = O;
      var F = n.forwardRef((e, t) => {
        let { __scopeScrollArea: r, ...l } = e,
          a = y(O, r),
          [i, u] = n.useState(0),
          [s, c] = n.useState(0),
          d = !!(i && s);
        return (
          V(a.scrollbarX, () => {
            var e;
            let t = (null == (e = a.scrollbarX) ? void 0 : e.offsetHeight) || 0;
            a.onCornerHeightChange(t), c(t);
          }),
          V(a.scrollbarY, () => {
            var e;
            let t = (null == (e = a.scrollbarY) ? void 0 : e.offsetWidth) || 0;
            a.onCornerWidthChange(t), u(t);
          }),
          d
            ? (0, p.jsx)(o.sG.div, {
                ...l,
                ref: t,
                style: {
                  width: i,
                  height: s,
                  position: "absolute",
                  right: "ltr" === a.dir ? 0 : void 0,
                  left: "rtl" === a.dir ? 0 : void 0,
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
      function H(e, t) {
        let r = e / t;
        return isNaN(r) ? 0 : r;
      }
      function B(e) {
        let t = H(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
        return Math.max((e.scrollbar.size - r) * t, 18);
      }
      function G(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "ltr",
          n = B(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          l = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = (0, d.q)(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return W([0, a], [0, l - n])(i);
      }
      function W(e, t) {
        return (r) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0]);
        };
      }
      var K = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          r = { left: e.scrollLeft, top: e.scrollTop },
          n = 0;
        return (
          !(function o() {
            let l = { left: e.scrollLeft, top: e.scrollTop },
              a = r.left !== l.left,
              i = r.top !== l.top;
            (a || i) && t(), (r = l), (n = window.requestAnimationFrame(o));
          })(),
          () => window.cancelAnimationFrame(n)
        );
      };
      function U(e, t) {
        let r = (0, u.c)(e),
          o = n.useRef(0);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []),
          n.useCallback(() => {
            window.clearTimeout(o.current),
              (o.current = window.setTimeout(r, t));
          }, [r, t])
        );
      }
      function V(e, t) {
        let r = (0, u.c)(t);
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
      var q = w,
        X = x,
        Y = L;
    },
    2702: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(7620);
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
    3027: (e, t, r) => {
      r.d(t, { Eq: () => c });
      var n = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        o = new WeakMap(),
        l = new WeakMap(),
        a = {},
        i = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        s = function (e, t, r, n) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var r = u(e);
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
          a[r] || (a[r] = new WeakMap());
          var c = a[r],
            d = [],
            f = new Set(),
            p = new Set(s),
            v = function (e) {
              !e || f.has(e) || (f.add(e), v(e.parentNode));
            };
          s.forEach(v);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(n),
                      a = null !== t && "false" !== t,
                      i = (o.get(e) || 0) + 1,
                      u = (c.get(e) || 0) + 1;
                    o.set(e, i),
                      c.set(e, u),
                      d.push(e),
                      1 === i && a && l.set(e, !0),
                      1 === u && e.setAttribute(r, "true"),
                      a || e.setAttribute(n, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = o.get(e) - 1,
                  a = c.get(e) - 1;
                o.set(e, t),
                  c.set(e, a),
                  t || (l.has(e) || e.removeAttribute(n), l.delete(e)),
                  a || e.removeAttribute(r);
              }),
                --i ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (l = new WeakMap()),
                  (a = {}));
            }
          );
        },
        c = function (e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var o = Array.from(Array.isArray(e) ? e : [e]),
            l = t || n(e);
          return l
            ? (o.push.apply(o, Array.from(l.querySelectorAll("[aria-live]"))),
              s(o, l, r, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    3425: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("file-text", [
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
    3643: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("book-open", [
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
    3672: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    3709: (e, t, r) => {
      r.d(t, {
        In: () => eP,
        LM: () => eD,
        PP: () => eL,
        UC: () => eT,
        VF: () => eO,
        WT: () => e_,
        ZL: () => eA,
        bL: () => ek,
        l9: () => eM,
        p4: () => eN,
        q7: () => eI,
        wn: () => eF,
      });
      var n = r(7620),
        o = r(7509),
        l = r(5038),
        a = r(9254),
        i = r(1675),
        u = r(9640),
        s = r(482),
        c = r(7644),
        d = r(2491),
        f = r(7848),
        p = r(8552),
        v = r(728),
        h = r(3992),
        m = r(5724),
        g = r(7156),
        y = r(9649),
        w = r(3568),
        b = r(7076),
        x = r(7247),
        C = r(2702),
        S = r(1603),
        E = r(3027),
        j = r(7146),
        R = r(4568),
        k = [" ", "Enter", "ArrowUp", "ArrowDown"],
        M = [" ", "Enter"],
        _ = "Select",
        [P, A, T] = (0, i.N)(_),
        [D, I] = (0, s.A)(_, [T, h.Bk]),
        N = (0, h.Bk)(),
        [O, L] = D(_),
        [F, z] = D(_),
        H = (e) => {
          let {
              __scopeSelect: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              value: i,
              defaultValue: u,
              onValueChange: s,
              dir: d,
              name: f,
              autoComplete: p,
              disabled: m,
              required: g,
              form: y,
            } = e,
            w = N(t),
            [x, C] = n.useState(null),
            [S, E] = n.useState(null),
            [j, k] = n.useState(!1),
            M = (0, c.jH)(d),
            [A, T] = (0, b.i)({
              prop: o,
              defaultProp: null != l && l,
              onChange: a,
              caller: _,
            }),
            [D, I] = (0, b.i)({
              prop: i,
              defaultProp: u,
              onChange: s,
              caller: _,
            }),
            L = n.useRef(null),
            z = !x || y || !!x.closest("form"),
            [H, B] = n.useState(new Set()),
            G = Array.from(H)
              .map((e) => e.props.value)
              .join(";");
          return (0, R.jsx)(h.bL, {
            ...w,
            children: (0, R.jsxs)(O, {
              required: g,
              scope: t,
              trigger: x,
              onTriggerChange: C,
              valueNode: S,
              onValueNodeChange: E,
              valueNodeHasChildren: j,
              onValueNodeHasChildrenChange: k,
              contentId: (0, v.B)(),
              value: D,
              onValueChange: I,
              open: A,
              onOpenChange: T,
              dir: M,
              triggerPointerDownPosRef: L,
              disabled: m,
              children: [
                (0, R.jsx)(P.Provider, {
                  scope: t,
                  children: (0, R.jsx)(F, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: n.useCallback((e) => {
                      B((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: n.useCallback((e) => {
                      B((t) => {
                        let r = new Set(t);
                        return r.delete(e), r;
                      });
                    }, []),
                    children: r,
                  }),
                }),
                z
                  ? (0, R.jsxs)(
                      eS,
                      {
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: D,
                        onChange: (e) => I(e.target.value),
                        disabled: m,
                        form: y,
                        children: [
                          void 0 === D
                            ? (0, R.jsx)("option", { value: "" })
                            : null,
                          Array.from(H),
                        ],
                      },
                      G
                    )
                  : null,
              ],
            }),
          });
        };
      H.displayName = _;
      var B = "SelectTrigger",
        G = n.forwardRef((e, t) => {
          let { __scopeSelect: r, disabled: o = !1, ...l } = e,
            i = N(r),
            s = L(B, r),
            c = s.disabled || o,
            d = (0, u.s)(t, s.onTriggerChange),
            f = A(r),
            p = n.useRef("touch"),
            [v, m, y] = ej((e) => {
              let t = f().filter((e) => !e.disabled),
                r = t.find((e) => e.value === s.value),
                n = eR(t, e, r);
              void 0 !== n && s.onValueChange(n.value);
            }),
            w = (e) => {
              c || (s.onOpenChange(!0), y()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, R.jsx)(h.Mz, {
            asChild: !0,
            ...i,
            children: (0, R.jsx)(g.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": eE(s.value) ? "" : void 0,
              ...l,
              ref: d,
              onClick: (0, a.m)(l.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== p.current && w(e);
              }),
              onPointerDown: (0, a.m)(l.onPointerDown, (e) => {
                p.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: (0, a.m)(l.onKeyDown, (e) => {
                let t = "" !== v.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  m(e.key),
                  (!t || " " !== e.key) &&
                    k.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      G.displayName = B;
      var W = "SelectValue",
        K = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              className: n,
              style: o,
              children: l,
              placeholder: a = "",
              ...i
            } = e,
            s = L(W, r),
            { onValueNodeHasChildrenChange: c } = s,
            d = void 0 !== l,
            f = (0, u.s)(t, s.onValueNodeChange);
          return (
            (0, x.N)(() => {
              c(d);
            }, [c, d]),
            (0, R.jsx)(g.sG.span, {
              ...i,
              ref: f,
              style: { pointerEvents: "none" },
              children: eE(s.value)
                ? (0, R.jsx)(R.Fragment, { children: a })
                : l,
            })
          );
        });
      K.displayName = W;
      var U = n.forwardRef((e, t) => {
        let { __scopeSelect: r, children: n, ...o } = e;
        return (0, R.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼",
        });
      });
      U.displayName = "SelectIcon";
      var V = (e) => (0, R.jsx)(m.Z, { asChild: !0, ...e });
      V.displayName = "SelectPortal";
      var q = "SelectContent",
        X = n.forwardRef((e, t) => {
          let r = L(q, e.__scopeSelect),
            [l, a] = n.useState();
          return ((0, x.N)(() => {
            a(new DocumentFragment());
          }, []),
          r.open)
            ? (0, R.jsx)($, { ...e, ref: t })
            : l
              ? o.createPortal(
                  (0, R.jsx)(Y, {
                    scope: e.__scopeSelect,
                    children: (0, R.jsx)(P.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, R.jsx)("div", { children: e.children }),
                    }),
                  }),
                  l
                )
              : null;
        });
      X.displayName = q;
      var [Y, Z] = D(q),
        J = (0, y.TL)("SelectContent.RemoveScroll"),
        $ = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              position: o = "item-aligned",
              onCloseAutoFocus: l,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              side: c,
              sideOffset: v,
              align: h,
              alignOffset: m,
              arrowPadding: g,
              collisionBoundary: y,
              collisionPadding: w,
              sticky: b,
              hideWhenDetached: x,
              avoidCollisions: C,
              ...S
            } = e,
            k = L(q, r),
            [M, _] = n.useState(null),
            [P, T] = n.useState(null),
            D = (0, u.s)(t, (e) => _(e)),
            [I, N] = n.useState(null),
            [O, F] = n.useState(null),
            z = A(r),
            [H, B] = n.useState(!1),
            G = n.useRef(!1);
          n.useEffect(() => {
            if (M) return (0, E.Eq)(M);
          }, [M]),
            (0, f.Oh)();
          let W = n.useCallback(
              (e) => {
                let [t, ...r] = z().map((e) => e.ref.current),
                  [n] = r.slice(-1),
                  o = document.activeElement;
                for (let r of e)
                  if (
                    r === o ||
                    (null == r || r.scrollIntoView({ block: "nearest" }),
                    r === t && P && (P.scrollTop = 0),
                    r === n && P && (P.scrollTop = P.scrollHeight),
                    null == r || r.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [z, P]
            ),
            K = n.useCallback(() => W([I, M]), [W, I, M]);
          n.useEffect(() => {
            H && K();
          }, [H, K]);
          let { onOpenChange: U, triggerPointerDownPosRef: V } = k;
          n.useEffect(() => {
            if (M) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var r, n, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null != (o = null == (r = V.current) ? void 0 : r.x)
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null != (l = null == (n = V.current) ? void 0 : n.y)
                          ? l
                          : 0)
                    ),
                  };
                },
                r = (r) => {
                  e.x <= 10 && e.y <= 10
                    ? r.preventDefault()
                    : M.contains(r.target) || U(!1),
                    document.removeEventListener("pointermove", t),
                    (V.current = null);
                };
              return (
                null !== V.current &&
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
          }, [M, U, V]),
            n.useEffect(() => {
              let e = () => U(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [U]);
          let [X, Z] = ej((e) => {
              let t = z().filter((e) => !e.disabled),
                r = t.find((e) => e.ref.current === document.activeElement),
                n = eR(t, e, r);
              n && setTimeout(() => n.ref.current.focus());
            }),
            $ = n.useCallback(
              (e, t, r) => {
                let n = !G.current && !r;
                ((void 0 !== k.value && k.value === t) || n) &&
                  (N(e), n && (G.current = !0));
              },
              [k.value]
            ),
            et = n.useCallback(() => (null == M ? void 0 : M.focus()), [M]),
            er = n.useCallback(
              (e, t, r) => {
                let n = !G.current && !r;
                ((void 0 !== k.value && k.value === t) || n) && F(e);
              },
              [k.value]
            ),
            en = "popper" === o ? ee : Q,
            eo =
              en === ee
                ? {
                    side: c,
                    sideOffset: v,
                    align: h,
                    alignOffset: m,
                    arrowPadding: g,
                    collisionBoundary: y,
                    collisionPadding: w,
                    sticky: b,
                    hideWhenDetached: x,
                    avoidCollisions: C,
                  }
                : {};
          return (0, R.jsx)(Y, {
            scope: r,
            content: M,
            viewport: P,
            onViewportChange: T,
            itemRefCallback: $,
            selectedItem: I,
            onItemLeave: et,
            itemTextRefCallback: er,
            focusSelectedItem: K,
            selectedItemText: O,
            position: o,
            isPositioned: H,
            searchRef: X,
            children: (0, R.jsx)(j.A, {
              as: J,
              allowPinchZoom: !0,
              children: (0, R.jsx)(p.n, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, a.m)(l, (e) => {
                  var t;
                  null == (t = k.trigger) || t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, R.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, R.jsx)(en, {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...S,
                    ...eo,
                    onPlaced: () => B(!0),
                    ref: D,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style,
                    },
                    onKeyDown: (0, a.m)(S.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || Z(e.key),
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
                        setTimeout(() => W(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      $.displayName = "SelectContentImpl";
      var Q = n.forwardRef((e, t) => {
        let { __scopeSelect: r, onPlaced: o, ...a } = e,
          i = L(q, r),
          s = Z(q, r),
          [c, d] = n.useState(null),
          [f, p] = n.useState(null),
          v = (0, u.s)(t, (e) => p(e)),
          h = A(r),
          m = n.useRef(!1),
          y = n.useRef(!0),
          {
            viewport: w,
            selectedItem: b,
            selectedItemText: C,
            focusSelectedItem: S,
          } = s,
          E = n.useCallback(() => {
            if (i.trigger && i.valueNode && c && f && w && b && C) {
              let e = i.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                r = i.valueNode.getBoundingClientRect(),
                n = C.getBoundingClientRect();
              if ("rtl" !== i.dir) {
                let o = n.left - t.left,
                  a = r.left - o,
                  i = e.left - a,
                  u = e.width + i,
                  s = Math.max(u, t.width),
                  d = window.innerWidth - 10,
                  f = (0, l.q)(a, [10, Math.max(10, d - s)]);
                (c.style.minWidth = u + "px"), (c.style.left = f + "px");
              } else {
                let o = t.right - n.right,
                  a = window.innerWidth - r.right - o,
                  i = window.innerWidth - e.right - a,
                  u = e.width + i,
                  s = Math.max(u, t.width),
                  d = window.innerWidth - 10,
                  f = (0, l.q)(a, [10, Math.max(10, d - s)]);
                (c.style.minWidth = u + "px"), (c.style.right = f + "px");
              }
              let a = h(),
                u = window.innerHeight - 20,
                s = w.scrollHeight,
                d = window.getComputedStyle(f),
                p = parseInt(d.borderTopWidth, 10),
                v = parseInt(d.paddingTop, 10),
                g = parseInt(d.borderBottomWidth, 10),
                y = p + v + s + parseInt(d.paddingBottom, 10) + g,
                x = Math.min(5 * b.offsetHeight, y),
                S = window.getComputedStyle(w),
                E = parseInt(S.paddingTop, 10),
                j = parseInt(S.paddingBottom, 10),
                R = e.top + e.height / 2 - 10,
                k = b.offsetHeight / 2,
                M = p + v + (b.offsetTop + k);
              if (M <= R) {
                let e = a.length > 0 && b === a[a.length - 1].ref.current;
                c.style.bottom = "0px";
                let t = Math.max(
                  u - R,
                  k +
                    (e ? j : 0) +
                    (f.clientHeight - w.offsetTop - w.offsetHeight) +
                    g
                );
                c.style.height = M + t + "px";
              } else {
                let e = a.length > 0 && b === a[0].ref.current;
                c.style.top = "0px";
                let t = Math.max(R, p + w.offsetTop + (e ? E : 0) + k);
                (c.style.height = t + (y - M) + "px"),
                  (w.scrollTop = M - R + w.offsetTop);
              }
              (c.style.margin = "".concat(10, "px 0")),
                (c.style.minHeight = x + "px"),
                (c.style.maxHeight = u + "px"),
                null == o || o(),
                requestAnimationFrame(() => (m.current = !0));
            }
          }, [h, i.trigger, i.valueNode, c, f, w, b, C, i.dir, o]);
        (0, x.N)(() => E(), [E]);
        let [j, k] = n.useState();
        (0, x.N)(() => {
          f && k(window.getComputedStyle(f).zIndex);
        }, [f]);
        let M = n.useCallback(
          (e) => {
            e && !0 === y.current && (E(), null == S || S(), (y.current = !1));
          },
          [E, S]
        );
        return (0, R.jsx)(et, {
          scope: r,
          contentWrapper: c,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: M,
          children: (0, R.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: j,
            },
            children: (0, R.jsx)(g.sG.div, {
              ...a,
              ref: v,
              style: { boxSizing: "border-box", maxHeight: "100%", ...a.style },
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
            ...l
          } = e,
          a = N(r);
        return (0, R.jsx)(h.UC, {
          ...a,
          ...l,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...l.style,
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
      var [et, er] = D(q, {}),
        en = "SelectViewport",
        eo = n.forwardRef((e, t) => {
          let { __scopeSelect: r, nonce: o, ...l } = e,
            i = Z(en, r),
            s = er(en, r),
            c = (0, u.s)(t, i.onViewportChange),
            d = n.useRef(0);
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, R.jsx)(P.Slot, {
                scope: r,
                children: (0, R.jsx)(g.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...l,
                  ref: c,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...l.style,
                  },
                  onScroll: (0, a.m)(l.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: r, shouldExpandOnScrollRef: n } = s;
                    if ((null == n ? void 0 : n.current) && r) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let n = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(r.style.minHeight),
                            parseFloat(r.style.height)
                          );
                        if (o < n) {
                          let l = o + e,
                            a = Math.min(n, l),
                            i = l - a;
                          (r.style.height = a + "px"),
                            "0px" === r.style.bottom &&
                              ((t.scrollTop = i > 0 ? i : 0),
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
      var el = "SelectGroup",
        [ea, ei] = D(el);
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = (0, v.B)();
        return (0, R.jsx)(ea, {
          scope: r,
          id: o,
          children: (0, R.jsx)(g.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t,
          }),
        });
      }).displayName = el;
      var eu = "SelectLabel";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = ei(eu, r);
        return (0, R.jsx)(g.sG.div, { id: o.id, ...n, ref: t });
      }).displayName = eu;
      var es = "SelectItem",
        [ec, ed] = D(es),
        ef = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              value: o,
              disabled: l = !1,
              textValue: i,
              ...s
            } = e,
            c = L(es, r),
            d = Z(es, r),
            f = c.value === o,
            [p, h] = n.useState(null != i ? i : ""),
            [m, y] = n.useState(!1),
            w = (0, u.s)(t, (e) => {
              var t;
              return null == (t = d.itemRefCallback)
                ? void 0
                : t.call(d, e, o, l);
            }),
            b = (0, v.B)(),
            x = n.useRef("touch"),
            C = () => {
              l || (c.onValueChange(o), c.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, R.jsx)(ec, {
            scope: r,
            value: o,
            disabled: l,
            textId: b,
            isSelected: f,
            onItemTextChange: n.useCallback((e) => {
              h((t) => {
                var r;
                return (
                  t ||
                  (null != (r = null == e ? void 0 : e.textContent)
                    ? r
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, R.jsx)(P.ItemSlot, {
              scope: r,
              value: o,
              disabled: l,
              textValue: p,
              children: (0, R.jsx)(g.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": f && m,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...s,
                ref: w,
                onFocus: (0, a.m)(s.onFocus, () => y(!0)),
                onBlur: (0, a.m)(s.onBlur, () => y(!1)),
                onClick: (0, a.m)(s.onClick, () => {
                  "mouse" !== x.current && C();
                }),
                onPointerUp: (0, a.m)(s.onPointerUp, () => {
                  "mouse" === x.current && C();
                }),
                onPointerDown: (0, a.m)(s.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, a.m)(s.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), l)) {
                    var t;
                    null == (t = d.onItemLeave) || t.call(d);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, a.m)(s.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null == (t = d.onItemLeave) || t.call(d);
                  }
                }),
                onKeyDown: (0, a.m)(s.onKeyDown, (e) => {
                  var t;
                  ((null == (t = d.searchRef) ? void 0 : t.current) === "" ||
                    " " !== e.key) &&
                    (M.includes(e.key) && C(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ef.displayName = es;
      var ep = "SelectItemText",
        ev = n.forwardRef((e, t) => {
          let { __scopeSelect: r, className: l, style: a, ...i } = e,
            s = L(ep, r),
            c = Z(ep, r),
            d = ed(ep, r),
            f = z(ep, r),
            [p, v] = n.useState(null),
            h = (0, u.s)(
              t,
              (e) => v(e),
              d.onItemTextChange,
              (e) => {
                var t;
                return null == (t = c.itemTextRefCallback)
                  ? void 0
                  : t.call(c, e, d.value, d.disabled);
              }
            ),
            m = null == p ? void 0 : p.textContent,
            y = n.useMemo(
              () =>
                (0, R.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: m },
                  d.value
                ),
              [d.disabled, d.value, m]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: b } = f;
          return (
            (0, x.N)(() => (w(y), () => b(y)), [w, b, y]),
            (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(g.sG.span, { id: d.textId, ...i, ref: h }),
                d.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? o.createPortal(i.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      ev.displayName = ep;
      var eh = "SelectItemIndicator",
        em = n.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e;
          return ed(eh, r).isSelected
            ? (0, R.jsx)(g.sG.span, { "aria-hidden": !0, ...n, ref: t })
            : null;
        });
      em.displayName = eh;
      var eg = "SelectScrollUpButton",
        ey = n.forwardRef((e, t) => {
          let r = Z(eg, e.__scopeSelect),
            o = er(eg, e.__scopeSelect),
            [l, a] = n.useState(!1),
            i = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, x.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    a(t.scrollTop > 0);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            l
              ? (0, R.jsx)(ex, {
                  ...e,
                  ref: i,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      ey.displayName = eg;
      var ew = "SelectScrollDownButton",
        eb = n.forwardRef((e, t) => {
          let r = Z(ew, e.__scopeSelect),
            o = er(ew, e.__scopeSelect),
            [l, a] = n.useState(!1),
            i = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, x.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    a(Math.ceil(t.scrollTop) < e);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            l
              ? (0, R.jsx)(ex, {
                  ...e,
                  ref: i,
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
        let { __scopeSelect: r, onAutoScroll: o, ...l } = e,
          i = Z("SelectScrollButton", r),
          u = n.useRef(null),
          s = A(r),
          c = n.useCallback(() => {
            null !== u.current &&
              (window.clearInterval(u.current), (u.current = null));
          }, []);
        return (
          n.useEffect(() => () => c(), [c]),
          (0, x.N)(() => {
            var e;
            let t = s().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null == (e = t.ref.current) ||
              e.scrollIntoView({ block: "nearest" });
          }, [s]),
          (0, R.jsx)(g.sG.div, {
            "aria-hidden": !0,
            ...l,
            ref: t,
            style: { flexShrink: 0, ...l.style },
            onPointerDown: (0, a.m)(l.onPointerDown, () => {
              null === u.current && (u.current = window.setInterval(o, 50));
            }),
            onPointerMove: (0, a.m)(l.onPointerMove, () => {
              var e;
              null == (e = i.onItemLeave) || e.call(i),
                null === u.current && (u.current = window.setInterval(o, 50));
            }),
            onPointerLeave: (0, a.m)(l.onPointerLeave, () => {
              c();
            }),
          })
        );
      });
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e;
        return (0, R.jsx)(g.sG.div, { "aria-hidden": !0, ...n, ref: t });
      }).displayName = "SelectSeparator";
      var eC = "SelectArrow";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = N(r),
          l = L(eC, r),
          a = Z(eC, r);
        return l.open && "popper" === a.position
          ? (0, R.jsx)(h.i3, { ...o, ...n, ref: t })
          : null;
      }).displayName = eC;
      var eS = n.forwardRef((e, t) => {
        let { __scopeSelect: r, value: o, ...l } = e,
          a = n.useRef(null),
          i = (0, u.s)(t, a),
          s = (0, C.Z)(o);
        return (
          n.useEffect(() => {
            let e = a.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value"
            ).set;
            if (s !== o && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, o), e.dispatchEvent(r);
            }
          }, [s, o]),
          (0, R.jsx)(g.sG.select, {
            ...l,
            style: { ...S.Qg, ...l.style },
            ref: i,
            defaultValue: o,
          })
        );
      });
      function eE(e) {
        return "" === e || void 0 === e;
      }
      function ej(e) {
        let t = (0, w.c)(e),
          r = n.useRef(""),
          o = n.useRef(0),
          l = n.useCallback(
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
          a = n.useCallback(() => {
            (r.current = ""), window.clearTimeout(o.current);
          }, []);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []), [r, l, a]
        );
      }
      function eR(e, t, r) {
        var n, o;
        let l =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          a = r ? e.indexOf(r) : -1,
          i =
            ((n = e),
            (o = Math.max(a, 0)),
            n.map((e, t) => n[(o + t) % n.length]));
        1 === l.length && (i = i.filter((e) => e !== r));
        let u = i.find((e) =>
          e.textValue.toLowerCase().startsWith(l.toLowerCase())
        );
        return u !== r ? u : void 0;
      }
      eS.displayName = "SelectBubbleInput";
      var ek = H,
        eM = G,
        e_ = K,
        eP = U,
        eA = V,
        eT = X,
        eD = eo,
        eI = ef,
        eN = ev,
        eO = em,
        eL = ey,
        eF = eb;
    },
    3908: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("message-square", [
        [
          "path",
          {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz",
          },
        ],
      ]);
    },
    3970: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(1510),
        o = r(5999),
        l = r(4568),
        a = o._(r(7620)),
        i = n._(r(7509)),
        u = n._(r(8667)),
        s = r(7258),
        c = r(327),
        d = r(4117);
      r(1611);
      let f = r(9208),
        p = n._(r(170)),
        v = r(7849),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, r, n, o, l, a) {
        let i = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== i &&
          ((e["data-loaded-src"] = i),
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
      function g(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: i,
            width: u,
            decoding: s,
            className: c,
            style: d,
            fetchPriority: f,
            placeholder: p,
            loading: h,
            unoptimized: y,
            fill: w,
            onLoadRef: b,
            onLoadingCompleteRef: x,
            setBlurComplete: C,
            setShowAltText: S,
            sizesInput: E,
            onLoad: j,
            onError: R,
            ...k
          } = e,
          M = (0, a.useCallback)(
            (e) => {
              e && (R && (e.src = e.src), e.complete && m(e, p, b, x, C, y, E));
            },
            [r, p, b, x, C, R, y, E]
          ),
          _ = (0, v.useMergedRef)(t, M);
        return (0, l.jsx)("img", {
          ...k,
          ...g(f),
          loading: h,
          width: u,
          height: i,
          decoding: s,
          "data-nimg": w ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: _,
          onLoad: (e) => {
            m(e.currentTarget, p, b, x, C, y, E);
          },
          onError: (e) => {
            S(!0), "empty" !== p && C(!0), R && R(e);
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
            ...g(r.fetchPriority),
          };
        return t && i.default.preload
          ? (i.default.preload(r.src, n), null)
          : (0, l.jsx)(u.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(f.RouterContext),
          n = (0, a.useContext)(d.ImageConfigContext),
          o = (0, a.useMemo)(() => {
            var e;
            let t = h || n || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              o = t.deviceSizes.sort((e, t) => e - t),
              l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: o, qualities: l };
          }, [n]),
          { onLoad: i, onLoadingComplete: u } = e,
          v = (0, a.useRef)(i);
        (0, a.useEffect)(() => {
          v.current = i;
        }, [i]);
        let m = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          m.current = u;
        }, [u]);
        let [g, b] = (0, a.useState)(!1),
          [x, C] = (0, a.useState)(!1),
          { props: S, meta: E } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: g,
            showAltText: x,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(y, {
              ...S,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: v,
              onLoadingCompleteRef: m,
              setBlurComplete: b,
              setShowAltText: C,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, l.jsx)(w, { isAppRouter: !r, imgAttributes: S })
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
    4117: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(1510)._(r(7620)),
        o = r(327),
        l = n.default.createContext(o.imageConfigDefault);
    },
    4244: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("log-out", [
        [
          "path",
          { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
        ],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ]);
    },
    4411: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("log-in", [
        [
          "path",
          { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" },
        ],
        ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
      ]);
    },
    4529: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    4711: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    4930: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return i;
          },
        });
      let n = r(1510),
        o = r(7258),
        l = r(3970),
        a = n._(r(170));
      function i(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
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
      let u = l.Image;
    },
    4931: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    5038: (e, t, r) => {
      r.d(t, { q: () => n });
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
    },
    5132: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("tags", [
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
    5145: (e, t, r) => {
      r.d(t, { bL: () => C, zi: () => S });
      var n = r(7620),
        o = r(9254),
        l = r(9640),
        a = r(482),
        i = r(7076),
        u = r(2702),
        s = r(210),
        c = r(7156),
        d = r(4568),
        f = "Switch",
        [p, v] = (0, a.A)(f),
        [h, m] = p(f),
        g = n.forwardRef((e, t) => {
          let {
              __scopeSwitch: r,
              name: a,
              checked: u,
              defaultChecked: s,
              required: p,
              disabled: v,
              value: m = "on",
              onCheckedChange: g,
              form: y,
              ...w
            } = e,
            [C, S] = n.useState(null),
            E = (0, l.s)(t, (e) => S(e)),
            j = n.useRef(!1),
            R = !C || y || !!C.closest("form"),
            [k, M] = (0, i.i)({
              prop: u,
              defaultProp: null != s && s,
              onChange: g,
              caller: f,
            });
          return (0, d.jsxs)(h, {
            scope: r,
            checked: k,
            disabled: v,
            children: [
              (0, d.jsx)(c.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": k,
                "aria-required": p,
                "data-state": x(k),
                "data-disabled": v ? "" : void 0,
                disabled: v,
                value: m,
                ...w,
                ref: E,
                onClick: (0, o.m)(e.onClick, (e) => {
                  M((e) => !e),
                    R &&
                      ((j.current = e.isPropagationStopped()),
                      j.current || e.stopPropagation());
                }),
              }),
              R &&
                (0, d.jsx)(b, {
                  control: C,
                  bubbles: !j.current,
                  name: a,
                  value: m,
                  checked: k,
                  required: p,
                  disabled: v,
                  form: y,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      g.displayName = f;
      var y = "SwitchThumb",
        w = n.forwardRef((e, t) => {
          let { __scopeSwitch: r, ...n } = e,
            o = m(y, r);
          return (0, d.jsx)(c.sG.span, {
            "data-state": x(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: t,
          });
        });
      w.displayName = y;
      var b = n.forwardRef((e, t) => {
        let {
            __scopeSwitch: r,
            control: o,
            checked: a,
            bubbles: i = !0,
            ...c
          } = e,
          f = n.useRef(null),
          p = (0, l.s)(f, t),
          v = (0, u.Z)(a),
          h = (0, s.X)(o);
        return (
          n.useEffect(() => {
            let e = f.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked"
            ).set;
            if (v !== a && t) {
              let r = new Event("click", { bubbles: i });
              t.call(e, a), e.dispatchEvent(r);
            }
          }, [v, a, i]),
          (0, d.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: a,
            ...c,
            tabIndex: -1,
            ref: p,
            style: {
              ...c.style,
              ...h,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      });
      function x(e) {
        return e ? "checked" : "unchecked";
      }
      b.displayName = "SwitchBubbleInput";
      var C = g,
        S = w;
    },
    5173: (e, t, r) => {
      r.d(t, {
        UC: () => et,
        ZL: () => Q,
        bL: () => J,
        bm: () => en,
        hE: () => er,
        hJ: () => ee,
        l9: () => $,
      });
      var n = r(7620),
        o = r(9254),
        l = r(9640),
        a = r(482),
        i = r(728),
        u = r(7076),
        s = r(2491),
        c = r(8552),
        d = r(5724),
        f = r(8400),
        p = r(7156),
        v = r(7848),
        h = r(7146),
        m = r(3027),
        g = r(9649),
        y = r(4568),
        w = "Dialog",
        [b, x] = (0, a.A)(w),
        [C, S] = b(w),
        E = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              modal: s = !0,
            } = e,
            c = n.useRef(null),
            d = n.useRef(null),
            [f, p] = (0, u.i)({
              prop: o,
              defaultProp: null != l && l,
              onChange: a,
              caller: w,
            });
          return (0, y.jsx)(C, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, i.B)(),
            titleId: (0, i.B)(),
            descriptionId: (0, i.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p((e) => !e), [p]),
            modal: s,
            children: r,
          });
        };
      E.displayName = w;
      var j = "DialogTrigger",
        R = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            a = S(j, r),
            i = (0, l.s)(t, a.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": U(a.open),
            ...n,
            ref: i,
            onClick: (0, o.m)(e.onClick, a.onOpenToggle),
          });
        });
      R.displayName = j;
      var k = "DialogPortal",
        [M, _] = b(k, { forceMount: void 0 }),
        P = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: l,
            } = e,
            a = S(k, t);
          return (0, y.jsx)(M, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, y.jsx)(f.C, {
                present: r || a.open,
                children: (0, y.jsx)(d.Z, {
                  asChild: !0,
                  container: l,
                  children: e,
                }),
              })
            ),
          });
        };
      P.displayName = k;
      var A = "DialogOverlay",
        T = n.forwardRef((e, t) => {
          let r = _(A, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = S(A, e.__scopeDialog);
          return l.modal
            ? (0, y.jsx)(f.C, {
                present: n || l.open,
                children: (0, y.jsx)(I, { ...o, ref: t }),
              })
            : null;
        });
      T.displayName = A;
      var D = (0, g.TL)("DialogOverlay.RemoveScroll"),
        I = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = S(A, r);
          return (0, y.jsx)(h.A, {
            as: D,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": U(o.open),
              ...n,
              ref: t,
              style: { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        N = "DialogContent",
        O = n.forwardRef((e, t) => {
          let r = _(N, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            l = S(N, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: n || l.open,
            children: l.modal
              ? (0, y.jsx)(L, { ...o, ref: t })
              : (0, y.jsx)(F, { ...o, ref: t }),
          });
        });
      O.displayName = N;
      var L = n.forwardRef((e, t) => {
          let r = S(N, e.__scopeDialog),
            a = n.useRef(null),
            i = (0, l.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, m.Eq)(e);
            }, []),
            (0, y.jsx)(z, {
              ...e,
              ref: i,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = r.triggerRef.current) || t.focus();
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
          let r = S(N, e.__scopeDialog),
            o = n.useRef(!1),
            l = n.useRef(!1);
          return (0, y.jsx)(z, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var n, a;
              null == (n = e.onCloseAutoFocus) || n.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (a = r.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (l.current = !1);
            },
            onInteractOutside: (t) => {
              var n, a;
              null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (l.current = !0));
              let i = t.target;
              (null == (a = r.triggerRef.current) ? void 0 : a.contains(i)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  l.current &&
                  t.preventDefault();
            },
          });
        }),
        z = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: i,
              ...u
            } = e,
            d = S(N, r),
            f = n.useRef(null),
            p = (0, l.s)(t, f);
          return (
            (0, v.Oh)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: i,
                  children: (0, y.jsx)(s.qW, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": U(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(Y, { titleId: d.titleId }),
                    (0, y.jsx)(Z, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        H = "DialogTitle",
        B = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = S(H, r);
          return (0, y.jsx)(p.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      B.displayName = H;
      var G = "DialogDescription";
      n.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          o = S(G, r);
        return (0, y.jsx)(p.sG.p, { id: o.descriptionId, ...n, ref: t });
      }).displayName = G;
      var W = "DialogClose",
        K = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            l = S(W, r);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => l.onOpenChange(!1)),
          });
        });
      function U(e) {
        return e ? "open" : "closed";
      }
      K.displayName = W;
      var V = "DialogTitleWarning",
        [q, X] = (0, a.q)(V, {
          contentName: N,
          titleName: H,
          docsSlug: "dialog",
        }),
        Y = (e) => {
          let { titleId: t } = e,
            r = X(V),
            o = "`"
              .concat(r.contentName, "` requires a `")
              .concat(
                r.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                r.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(r.docsSlug);
          return (
            n.useEffect(() => {
              t && (document.getElementById(t) || console.error(o));
            }, [o, t]),
            null
          );
        },
        Z = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = X("DialogDescriptionWarning"),
            l =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}."
              );
          return (
            n.useEffect(() => {
              var e;
              let n =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              r && n && (document.getElementById(r) || console.warn(l));
            }, [l, t, r]),
            null
          );
        },
        J = E,
        $ = R,
        Q = P,
        ee = T,
        et = O,
        er = B,
        en = K;
    },
    5367: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("book", [
        [
          "path",
          {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
            key: "k3hazp",
          },
        ],
      ]);
    },
    6350: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("lock", [
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
    6430: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("chevron-up", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    6676: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(7620),
        o = n.useLayoutEffect,
        l = n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    6739: (e, t) => {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: l,
            objectFit: a,
          } = e,
          i = n ? 40 * n : t,
          u = o ? 40 * o : r,
          s = i && u ? "viewBox='0 0 " + i + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === a
              ? "xMidYMid"
              : "cover" === a
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
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
    7146: (e, t, r) => {
      r.d(t, { A: () => V });
      var n,
        o,
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function a(e, t) {
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
      var i =
          ("function" == typeof SuppressedError && SuppressedError, r(7620)),
        u = "right-scroll-bar-position",
        s = "width-before-scroll-bar";
      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var d = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        f = new WeakMap();
      function p(e) {
        return e;
      }
      var v = (function (e) {
          void 0 === e && (e = {});
          var t,
            r,
            n,
            o,
            a =
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
                  var l = function () {
                      var r = t;
                      (t = []), r.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(l);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (a.options = l({ async: !0, ssr: !1 }, e)), a;
        })(),
        h = function () {},
        m = i.forwardRef(function (e, t) {
          var r,
            n,
            o,
            u,
            s = i.useRef(null),
            p = i.useState({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: h,
            }),
            m = p[0],
            g = p[1],
            y = e.forwardProps,
            w = e.children,
            b = e.className,
            x = e.removeScrollBar,
            C = e.enabled,
            S = e.shards,
            E = e.sideCar,
            j = e.noIsolation,
            R = e.inert,
            k = e.allowPinchZoom,
            M = e.as,
            _ = e.gapMode,
            P = a(e, [
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
            A =
              ((r = [s, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return c(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
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
              (u = o.facade),
              d(
                function () {
                  var e = f.get(u);
                  if (e) {
                    var t = new Set(e),
                      n = new Set(r),
                      o = u.current;
                    t.forEach(function (e) {
                      n.has(e) || c(e, null);
                    }),
                      n.forEach(function (e) {
                        t.has(e) || c(e, o);
                      });
                  }
                  f.set(u, r);
                },
                [r]
              ),
              u),
            T = l(l({}, P), m);
          return i.createElement(
            i.Fragment,
            null,
            C &&
              i.createElement(E, {
                sideCar: v,
                removeScrollBar: x,
                shards: S,
                noIsolation: j,
                inert: R,
                setCallbacks: g,
                allowPinchZoom: !!k,
                lockRef: s,
                gapMode: _,
              }),
            y
              ? i.cloneElement(i.Children.only(w), l(l({}, T), { ref: A }))
              : i.createElement(
                  void 0 === M ? "div" : M,
                  l({}, T, { className: b, ref: A }),
                  w
                )
          );
        });
      (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (m.classNames = { fullWidth: s, zeroRight: u });
      var g = function (e) {
        var t = e.sideCar,
          r = a(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return i.createElement(n, l({}, r));
      };
      g.isSideCarExport = !0;
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
                var l, a;
                (l = t).styleSheet
                  ? (l.styleSheet.cssText = n)
                  : l.appendChild(document.createTextNode(n)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
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
            i.useEffect(
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
        C = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        S = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [C(r), C(n), C(o)];
        },
        E = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return x;
          var t = S(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        j = b(),
        R = "data-scroll-locked",
        k = function (e, t, r, n) {
          var o = e.left,
            l = e.top,
            a = e.right,
            i = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(i, "px ")
              .concat(n, ";\n  }\n  body[")
              .concat(R, "] {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(l, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(i, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(i, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(u, " {\n    right: ")
              .concat(i, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(s, " {\n    margin-right: ")
              .concat(i, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body[")
              .concat(R, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(i, "px;\n  }\n")
          );
        },
        M = function () {
          var e = parseInt(document.body.getAttribute(R) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        _ = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(R, (M() + 1).toString()),
              function () {
                var e = M() - 1;
                e <= 0
                  ? document.body.removeAttribute(R)
                  : document.body.setAttribute(R, e.toString());
              }
            );
          }, []);
        },
        P = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? "margin" : n;
          _();
          var l = i.useMemo(
            function () {
              return E(o);
            },
            [o]
          );
          return i.createElement(j, {
            styles: k(l, !t, o, r ? "" : "!important"),
          });
        },
        A = !1;
      if ("undefined" != typeof window)
        try {
          var T = Object.defineProperty({}, "passive", {
            get: function () {
              return (A = !0), !0;
            },
          });
          window.addEventListener("test", T, T),
            window.removeEventListener("test", T, T);
        } catch (e) {
          A = !1;
        }
      var D = !!A && { passive: !1 },
        I = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            (r.overflowY !== r.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== r[t])
          );
        },
        N = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              O(e, n))
            ) {
              var o = L(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        O = function (e, t) {
          return "v" === e ? I(t, "overflowY") : I(t, "overflowX");
        },
        L = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        F = function (e, t, r, n, o) {
          var l,
            a =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            i = a * n,
            u = r.target,
            s = t.contains(u),
            c = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = L(e, u),
              h = v[0],
              m = v[1] - v[2] - a * h;
            (h || m) && O(e, u) && ((f += m), (p += h)),
              (u = u instanceof ShadowRoot ? u.host : u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && i > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -i > p)) && (c = !0),
            c
          );
        },
        z = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        H = function (e) {
          return [e.deltaX, e.deltaY];
        },
        B = function (e) {
          return e && "current" in e ? e.current : e;
        },
        G = 0,
        W = [];
      let K =
        ((n = function (e) {
          var t = i.useRef([]),
            r = i.useRef([0, 0]),
            n = i.useRef(),
            o = i.useState(G++)[0],
            l = i.useState(b)[0],
            a = i.useRef(e);
          i.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, r) {
                    if (r || 2 == arguments.length)
                      for (var n, o = 0, l = t.length; o < l; o++)
                        (!n && o in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, o)),
                          (n[o] = t[o]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(B), !0).filter(
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
          var u = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !a.current.allowPinchZoom;
              var o,
                l = z(e),
                i = r.current,
                u = "deltaX" in e ? e.deltaX : i[0] - l[0],
                s = "deltaY" in e ? e.deltaY : i[1] - l[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = N(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = N(d, c))), !f)
              )
                return !1;
              if (
                (!n.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (n.current = o),
                !o)
              )
                return !0;
              var p = n.current || o;
              return F(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = i.useCallback(function (e) {
              if (W.length && W[W.length - 1] === l) {
                var r = "deltaY" in e ? H(e) : z(e),
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
                  var o = (a.current.shards || [])
                    .map(B)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = i.useCallback(function (e, r, n, o) {
              var l = {
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
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            d = i.useCallback(function (e) {
              (r.current = z(e)), (n.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              c(t.type, H(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = i.useCallback(function (t) {
              c(t.type, z(t), t.target, u(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              W.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, D),
              document.addEventListener("touchmove", s, D),
              document.addEventListener("touchstart", d, D),
              function () {
                (W = W.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", s, D),
                  document.removeEventListener("touchmove", s, D),
                  document.removeEventListener("touchstart", d, D);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            h = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            h
              ? i.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            v ? i.createElement(P, { gapMode: e.gapMode }) : null
          );
        }),
        v.useMedium(n),
        g);
      var U = i.forwardRef(function (e, t) {
        return i.createElement(m, l({}, e, { ref: t, sideCar: K }));
      });
      U.classNames = m.classNames;
      let V = U;
    },
    7258: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        r(1611);
      let n = r(6739),
        o = r(327),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(e) {
        return void 0 !== e.default;
      }
      function i(e) {
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
      function u(e, t) {
        var r, u;
        let s,
          c,
          d,
          {
            src: f,
            sizes: p,
            unoptimized: v = !1,
            priority: h = !1,
            loading: m,
            className: g,
            quality: y,
            width: w,
            height: b,
            fill: x = !1,
            style: C,
            overrideSrc: S,
            onLoad: E,
            onLoadingComplete: j,
            placeholder: R = "empty",
            blurDataURL: k,
            fetchPriority: M,
            decoding: _ = "async",
            layout: P,
            objectFit: A,
            objectPosition: T,
            lazyBoundary: D,
            lazyRoot: I,
            ...N
          } = e,
          { imgConf: O, showAltText: L, blurComplete: F, defaultLoader: z } = t,
          H = O || o.imageConfigDefault;
        if ("allSizes" in H) s = H;
        else {
          let e = [...H.deviceSizes, ...H.imageSizes].sort((e, t) => e - t),
            t = H.deviceSizes.sort((e, t) => e - t),
            n = null == (r = H.qualities) ? void 0 : r.sort((e, t) => e - t);
          s = { ...H, allSizes: e, deviceSizes: t, qualities: n };
        }
        if (void 0 === z)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let B = N.loader || z;
        delete N.loader, delete N.srcSet;
        let G = "__next_img_default" in B;
        if (G) {
          if ("custom" === s.loader)
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
          let e = B;
          B = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (P) {
          "fill" === P && (x = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (C = { ...C, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !p && (p = t);
        }
        let W = "",
          K = i(w),
          U = i(b);
        if ((u = f) && "object" == typeof u && (a(u) || void 0 !== u.src)) {
          let e = a(f) ? f.default : f;
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
            (k = k || e.blurDataURL),
            (W = e.src),
            !x)
          )
            if (K || U) {
              if (K && !U) {
                let t = K / e.width;
                U = Math.round(e.height * t);
              } else if (!K && U) {
                let t = U / e.height;
                K = Math.round(e.width * t);
              }
            } else (K = e.width), (U = e.height);
        }
        let V = !h && ("lazy" === m || void 0 === m);
        (!(f = "string" == typeof f ? f : W) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((v = !0), (V = !1)),
          s.unoptimized && (v = !0),
          G &&
            !s.dangerouslyAllowSVG &&
            f.split("?", 1)[0].endsWith(".svg") &&
            (v = !0);
        let q = i(y),
          X = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: T,
                }
              : {},
            L ? {} : { color: "transparent" },
            C
          ),
          Y =
            F || "empty" === R
              ? null
              : "blur" === R
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, n.getImageBlurSvg)({
                    widthInt: K,
                    heightInt: U,
                    blurWidth: c,
                    blurHeight: d,
                    blurDataURL: k || "",
                    objectFit: X.objectFit,
                  }) +
                  '")'
                : 'url("' + R + '")',
          Z = l.includes(X.objectFit)
            ? "fill" === X.objectFit
              ? "100% 100%"
              : "cover"
            : X.objectFit,
          J = Y
            ? {
                backgroundSize: Z,
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: l,
              sizes: a,
              loader: i,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, r) {
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
              })(t, o, a),
              c = u.length - 1;
            return {
              sizes: a || "w" !== s ? a : "100vw",
              srcSet: u
                .map(
                  (e, n) =>
                    i({ config: t, src: r, quality: l, width: e }) +
                    " " +
                    ("w" === s ? e : n + 1) +
                    s
                )
                .join(", "),
              src: i({ config: t, src: r, quality: l, width: u[c] }),
            };
          })({
            config: s,
            src: f,
            unoptimized: v,
            width: K,
            quality: q,
            sizes: p,
            loader: B,
          });
        return {
          props: {
            ...N,
            loading: V ? "lazy" : m,
            fetchPriority: M,
            width: K,
            height: U,
            decoding: _,
            className: g,
            style: { ...X, ...J },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: S || $.src,
          },
          meta: { unoptimized: v, priority: h, placeholder: R, fill: x },
        };
      }
    },
    7644: (e, t, r) => {
      r.d(t, { jH: () => l });
      var n = r(7620);
      r(4568);
      var o = n.createContext(void 0);
      function l(e) {
        let t = n.useContext(o);
        return e || t || "ltr";
      }
    },
    7848: (e, t, r) => {
      r.d(t, { Oh: () => l });
      var n = r(7620),
        o = 0;
      function l() {
        n.useEffect(() => {
          var e, t;
          let r = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null != (e = r[0]) ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null != (t = r[1]) ? t : a()
            ),
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
      function a() {
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
    7849: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(7620);
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
            } else e && (r.current = l(e, n)), t && (o.current = l(t, n));
          },
          [e, t]
        );
      }
      function l(e, t) {
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
    7911: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("chevron-right", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    8191: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("tag", [
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
    8262: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("trash-2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
      ]);
    },
    8552: (e, t, r) => {
      r.d(t, { n: () => d });
      var n = r(7620),
        o = r(9640),
        l = r(7156),
        a = r(3568),
        i = r(4568),
        u = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = n.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: d = !1,
              onMountAutoFocus: m,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [w, b] = n.useState(null),
            x = (0, a.c)(m),
            C = (0, a.c)(g),
            S = n.useRef(null),
            E = (0, o.s)(t, (e) => b(e)),
            j = n.useRef({
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
                  if (j.paused || !w) return;
                  let t = e.target;
                  w.contains(t)
                    ? (S.current = t)
                    : v(S.current, { select: !0 });
                },
                t = function (e) {
                  if (j.paused || !w) return;
                  let t = e.relatedTarget;
                  null !== t && (w.contains(t) || v(S.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && v(w);
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
          }, [d, w, j.paused]),
            n.useEffect(() => {
              if (w) {
                h.add(j);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(u, c);
                  w.addEventListener(u, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = document.activeElement;
                        for (let n of e)
                          if (
                            (v(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        f(w).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && v(w));
                }
                return () => {
                  w.removeEventListener(u, x),
                    setTimeout(() => {
                      let t = new CustomEvent(s, c);
                      w.addEventListener(s, C),
                        w.dispatchEvent(t),
                        t.defaultPrevented ||
                          v(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(s, C),
                        h.remove(j);
                    }, 0);
                };
              }
            }, [w, x, C, j]);
          let R = n.useCallback(
            (e) => {
              if ((!r && !d) || j.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                n = document.activeElement;
              if (t && n) {
                let t = e.currentTarget,
                  [o, l] = (function (e) {
                    let t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && l
                  ? e.shiftKey || n !== l
                    ? e.shiftKey &&
                      n === o &&
                      (e.preventDefault(), r && v(l, { select: !0 }))
                    : (e.preventDefault(), r && v(o, { select: !0 }))
                  : n === t && e.preventDefault();
              }
            },
            [r, d, j.paused]
          );
          return (0, i.jsx)(l.sG.div, {
            tabIndex: -1,
            ...y,
            ref: E,
            onKeyDown: R,
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
            !(function (e, t) {
              let { upTo: r } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === r || e !== r); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function v(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
      var h = (function () {
        let e = [];
        return {
          add(t) {
            let r = e[0];
            t !== r && (null == r || r.pause()), (e = m(e, t)).unshift(t);
          },
          remove(t) {
            var r;
            null == (r = (e = m(e, t))[0]) || r.resume();
          },
        };
      })();
      function m(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
    },
    8667: (e, t, r) => {
      var n = r(4338);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = r(1510),
        l = r(5999),
        a = r(4568),
        i = l._(r(7620)),
        u = o._(r(6676)),
        s = r(1352),
        c = r(5227),
        d = r(2371);
      function f(e) {
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
      function p(e, t) {
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
      r(1611);
      let v = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let l = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = v.length; e < t; e++) {
                      let t = v[e];
                      if (o.props.hasOwnProperty(t))
                        if ("charSet" === t) r.has(t) ? (l = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (l = !1)
                            : (r.add(e), (n[t] = r));
                        }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
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
            return i.default.cloneElement(e, { key: o });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, i.useContext)(s.AmpStateContext),
          n = (0, i.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(u.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
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
    9208: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(1510)._(r(7620)).default.createContext(null);
    },
    9369: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    9388: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("square-pen", [
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
    9966: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("triangle-alert", [
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
  },
]);
