(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [762],
  {
    284: (t, e, n) => {
      "use strict";
      n.d(e, { t: () => u });
      var i = n(6327),
        r = n(8663),
        s = n(1959),
        u = new ((function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).setup = function (t) {
                var e;
                if (
                  !s.S$ &&
                  (null == (e = window) ? void 0 : e.addEventListener)
                ) {
                  var n = function () {
                    return t();
                  };
                  return (
                    window.addEventListener("online", n, !1),
                    window.addEventListener("offline", n, !1),
                    function () {
                      window.removeEventListener("online", n),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              }),
              e
            );
          }
          (0, i.A)(e, t);
          var n = e.prototype;
          return (
            (n.onSubscribe = function () {
              this.cleanup || this.setEventListener(this.setup);
            }),
            (n.onUnsubscribe = function () {
              if (!this.hasListeners()) {
                var t;
                null == (t = this.cleanup) || t.call(this),
                  (this.cleanup = void 0);
              }
            }),
            (n.setEventListener = function (t) {
              var e,
                n = this;
              (this.setup = t),
                null == (e = this.cleanup) || e.call(this),
                (this.cleanup = t(function (t) {
                  "boolean" == typeof t ? n.setOnline(t) : n.onOnline();
                }));
            }),
            (n.setOnline = function (t) {
              (this.online = t), t && this.onOnline();
            }),
            (n.onOnline = function () {
              this.listeners.forEach(function (t) {
                t();
              });
            }),
            (n.isOnline = function () {
              return "boolean" == typeof this.online
                ? this.online
                : "undefined" == typeof navigator ||
                    void 0 === navigator.onLine ||
                    navigator.onLine;
            }),
            e
          );
        })(r.Q))();
    },
    429: (t, e, n) => {
      "use strict";
      n.d(e, { m: () => u });
      var i = n(6327),
        r = n(8663),
        s = n(1959),
        u = new ((function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).setup = function (t) {
                var e;
                if (
                  !s.S$ &&
                  (null == (e = window) ? void 0 : e.addEventListener)
                ) {
                  var n = function () {
                    return t();
                  };
                  return (
                    window.addEventListener("visibilitychange", n, !1),
                    window.addEventListener("focus", n, !1),
                    function () {
                      window.removeEventListener("visibilitychange", n),
                        window.removeEventListener("focus", n);
                    }
                  );
                }
              }),
              e
            );
          }
          (0, i.A)(e, t);
          var n = e.prototype;
          return (
            (n.onSubscribe = function () {
              this.cleanup || this.setEventListener(this.setup);
            }),
            (n.onUnsubscribe = function () {
              if (!this.hasListeners()) {
                var t;
                null == (t = this.cleanup) || t.call(this),
                  (this.cleanup = void 0);
              }
            }),
            (n.setEventListener = function (t) {
              var e,
                n = this;
              (this.setup = t),
                null == (e = this.cleanup) || e.call(this),
                (this.cleanup = t(function (t) {
                  "boolean" == typeof t ? n.setFocused(t) : n.onFocus();
                }));
            }),
            (n.setFocused = function (t) {
              (this.focused = t), t && this.onFocus();
            }),
            (n.onFocus = function () {
              this.listeners.forEach(function (t) {
                t();
              });
            }),
            (n.isFocused = function () {
              return "boolean" == typeof this.focused
                ? this.focused
                : "undefined" == typeof document ||
                    [void 0, "visible", "prerender"].includes(
                      document.visibilityState
                    );
            }),
            e
          );
        })(r.Q))();
    },
    1955: () => {},
    1959: (t, e, n) => {
      "use strict";
      n.d(e, {
        BH: () =>
          function t(e, n) {
            if (e === n) return e;
            var i = Array.isArray(e) && Array.isArray(n);
            if (i || (g(e) && g(n))) {
              for (
                var r = i ? e.length : Object.keys(e).length,
                  s = i ? n : Object.keys(n),
                  u = s.length,
                  o = i ? [] : {},
                  a = 0,
                  c = 0;
                c < u;
                c++
              ) {
                var l = i ? c : s[c];
                (o[l] = t(e[l], n[l])), o[l] === e[l] && a++;
              }
              return r === u && a === r ? e : o;
            }
            return n;
          },
        Cp: () => m,
        F$: () => p,
        G6: () => R,
        GR: () => h,
        HN: () => a,
        MK: () => d,
        Od: () => y,
        S$: () => r,
        Zw: () => u,
        b_: () => f,
        f8: () => b,
        gn: () => o,
        j3: () => c,
        jY: () => S,
        lQ: () => s,
        nJ: () => v,
        vh: () => l,
        yy: () => Q,
      });
      var i = n(8059),
        r = "undefined" == typeof window;
      function s() {}
      function u(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function a(t) {
        return Array.isArray(t) ? t : [t];
      }
      function c(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function l(t, e, n) {
        return O(t)
          ? "function" == typeof e
            ? (0, i.A)({}, n, { queryKey: t, queryFn: e })
            : (0, i.A)({}, e, { queryKey: t })
          : t;
      }
      function h(t, e, n) {
        return O(t)
          ? "function" == typeof e
            ? (0, i.A)({}, n, { mutationKey: t, mutationFn: e })
            : (0, i.A)({}, e, { mutationKey: t })
          : "function" == typeof t
            ? (0, i.A)({}, e, { mutationFn: t })
            : (0, i.A)({}, t);
      }
      function f(t, e, n) {
        return O(t) ? [(0, i.A)({}, e, { queryKey: t }), n] : [t || {}, e];
      }
      function d(t, e) {
        var n = t.active,
          i = t.exact,
          r = t.fetching,
          s = t.inactive,
          u = t.predicate,
          o = t.queryKey,
          a = t.stale;
        if (O(o)) {
          if (i) {
            if (e.queryHash !== p(o, e.options)) return !1;
          } else if (!m(e.queryKey, o)) return !1;
        }
        var c =
          (!0 === n && !0 === s) || (null == n && null == s)
            ? "all"
            : !1 === n && !1 === s
              ? "none"
              : (null != n ? n : !s)
                ? "active"
                : "inactive";
        if ("none" === c) return !1;
        if ("all" !== c) {
          var l = e.isActive();
          if (("active" === c && !l) || ("inactive" === c && l)) return !1;
        }
        return (
          ("boolean" != typeof a || e.isStale() === a) &&
          ("boolean" != typeof r || e.isFetching() === r) &&
          (!u || !!u(e))
        );
      }
      function v(t, e) {
        var n = t.exact,
          i = t.fetching,
          r = t.predicate,
          s = t.mutationKey;
        if (O(s)) {
          if (!e.options.mutationKey) return !1;
          if (n) {
            if (y(e.options.mutationKey) !== y(s)) return !1;
          } else if (!m(e.options.mutationKey, s)) return !1;
        }
        return (
          ("boolean" != typeof i || ("loading" === e.state.status) === i) &&
          (!r || !!r(e))
        );
      }
      function p(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || y)(t);
      }
      function y(t) {
        return JSON.stringify(a(t), function (t, e) {
          return g(e)
            ? Object.keys(e)
                .sort()
                .reduce(function (t, n) {
                  return (t[n] = e[n]), t;
                }, {})
            : e;
        });
      }
      function m(t, e) {
        return (function t(e, n) {
          return (
            e === n ||
            (typeof e == typeof n &&
              !!e &&
              !!n &&
              "object" == typeof e &&
              "object" == typeof n &&
              !Object.keys(n).some(function (i) {
                return !t(e[i], n[i]);
              }))
          );
        })(a(t), a(e));
      }
      function b(t, e) {
        if ((t && !e) || (e && !t)) return !1;
        for (var n in t) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function g(t) {
        if (!C(t)) return !1;
        var e = t.constructor;
        if (void 0 === e) return !0;
        var n = e.prototype;
        return !!C(n) && !!n.hasOwnProperty("isPrototypeOf");
      }
      function C(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function O(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function Q(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function R(t) {
        Promise.resolve()
          .then(t)
          .catch(function (t) {
            return setTimeout(function () {
              throw t;
            });
          });
      }
      function S() {
        if ("function" == typeof AbortController) return new AbortController();
      }
    },
    4034: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => s, t: () => r });
      var i = console;
      function r() {
        return i;
      }
      function s(t) {
        i = t;
      }
    },
    4911: (t, e, n) => {
      "use strict";
      n.d(e, { dd: () => o, eJ: () => l, wm: () => c });
      var i = n(429),
        r = n(284),
        s = n(1959);
      function u(t) {
        return Math.min(1e3 * Math.pow(2, t), 3e4);
      }
      function o(t) {
        return "function" == typeof (null == t ? void 0 : t.cancel);
      }
      var a = function (t) {
        (this.revert = null == t ? void 0 : t.revert),
          (this.silent = null == t ? void 0 : t.silent);
      };
      function c(t) {
        return t instanceof a;
      }
      var l = function (t) {
        var e,
          n,
          c,
          l,
          h = this,
          f = !1;
        (this.abort = t.abort),
          (this.cancel = function (t) {
            return null == e ? void 0 : e(t);
          }),
          (this.cancelRetry = function () {
            f = !0;
          }),
          (this.continueRetry = function () {
            f = !1;
          }),
          (this.continue = function () {
            return null == n ? void 0 : n();
          }),
          (this.failureCount = 0),
          (this.isPaused = !1),
          (this.isResolved = !1),
          (this.isTransportCancelable = !1),
          (this.promise = new Promise(function (t, e) {
            (c = t), (l = e);
          }));
        var d = function (e) {
            h.isResolved ||
              ((h.isResolved = !0),
              null == t.onSuccess || t.onSuccess(e),
              null == n || n(),
              c(e));
          },
          v = function (e) {
            h.isResolved ||
              ((h.isResolved = !0),
              null == t.onError || t.onError(e),
              null == n || n(),
              l(e));
          };
        !(function c() {
          var l;
          if (!h.isResolved) {
            try {
              l = t.fn();
            } catch (t) {
              l = Promise.reject(t);
            }
            (e = function (t) {
              if (
                !h.isResolved &&
                (v(new a(t)), null == h.abort || h.abort(), o(l))
              )
                try {
                  l.cancel();
                } catch (t) {}
            }),
              (h.isTransportCancelable = o(l)),
              Promise.resolve(l)
                .then(d)
                .catch(function (e) {
                  if (!h.isResolved) {
                    var o,
                      a,
                      l = null != (o = t.retry) ? o : 3,
                      d = null != (a = t.retryDelay) ? a : u,
                      p = "function" == typeof d ? d(h.failureCount, e) : d,
                      y =
                        !0 === l ||
                        ("number" == typeof l && h.failureCount < l) ||
                        ("function" == typeof l && l(h.failureCount, e));
                    if (f || !y) return void v(e);
                    h.failureCount++,
                      null == t.onFail || t.onFail(h.failureCount, e),
                      (0, s.yy)(p)
                        .then(function () {
                          if (!i.m.isFocused() || !r.t.isOnline())
                            return new Promise(function (e) {
                              (n = e),
                                (h.isPaused = !0),
                                null == t.onPause || t.onPause();
                            }).then(function () {
                              (n = void 0),
                                (h.isPaused = !1),
                                null == t.onContinue || t.onContinue();
                            });
                        })
                        .then(function () {
                          f ? v(e) : c();
                        });
                  }
                });
          }
        })();
      };
    },
    5249: (t, e, n) => {
      "use strict";
      n.d(e, {
        QueryClientProvider: () => f,
        useMutation: () => C,
        useQuery: () => E,
        useQueryClient: () => h,
      });
      var i = n(8398),
        r = n(7509).unstable_batchedUpdates;
      i.j.setBatchNotifyFunction(r);
      var s = n(4034),
        u = console;
      (0, s.B)(u);
      var o = n(7620),
        a = o.createContext(void 0),
        c = o.createContext(!1);
      function l(t) {
        return t && "undefined" != typeof window
          ? (window.ReactQueryClientContext ||
              (window.ReactQueryClientContext = a),
            window.ReactQueryClientContext)
          : a;
      }
      var h = function () {
          var t = o.useContext(l(o.useContext(c)));
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        f = function (t) {
          var e = t.client,
            n = t.contextSharing,
            i = void 0 !== n && n,
            r = t.children;
          o.useEffect(
            function () {
              return (
                e.mount(),
                function () {
                  e.unmount();
                }
              );
            },
            [e]
          );
          var s = l(i);
          return o.createElement(
            c.Provider,
            { value: i },
            o.createElement(s.Provider, { value: e }, r)
          );
        },
        d = n(8059),
        v = n(1959),
        p = n(6327),
        y = n(5293),
        m = n(8663),
        b = (function (t) {
          function e(e, n) {
            var i;
            return (
              ((i = t.call(this) || this).client = e),
              i.setOptions(n),
              i.bindMethods(),
              i.updateResult(),
              i
            );
          }
          (0, p.A)(e, t);
          var n = e.prototype;
          return (
            (n.bindMethods = function () {
              (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
            }),
            (n.setOptions = function (t) {
              this.options = this.client.defaultMutationOptions(t);
            }),
            (n.onUnsubscribe = function () {
              if (!this.listeners.length) {
                var t;
                null == (t = this.currentMutation) || t.removeObserver(this);
              }
            }),
            (n.onMutationUpdate = function (t) {
              this.updateResult();
              var e = { listeners: !0 };
              "success" === t.type
                ? (e.onSuccess = !0)
                : "error" === t.type && (e.onError = !0),
                this.notify(e);
            }),
            (n.getCurrentResult = function () {
              return this.currentResult;
            }),
            (n.reset = function () {
              (this.currentMutation = void 0),
                this.updateResult(),
                this.notify({ listeners: !0 });
            }),
            (n.mutate = function (t, e) {
              return (
                (this.mutateOptions = e),
                this.currentMutation &&
                  this.currentMutation.removeObserver(this),
                (this.currentMutation = this.client
                  .getMutationCache()
                  .build(
                    this.client,
                    (0, d.A)({}, this.options, {
                      variables: void 0 !== t ? t : this.options.variables,
                    })
                  )),
                this.currentMutation.addObserver(this),
                this.currentMutation.execute()
              );
            }),
            (n.updateResult = function () {
              var t = this.currentMutation
                  ? this.currentMutation.state
                  : (0, y.$)(),
                e = (0, d.A)({}, t, {
                  isLoading: "loading" === t.status,
                  isSuccess: "success" === t.status,
                  isError: "error" === t.status,
                  isIdle: "idle" === t.status,
                  mutate: this.mutate,
                  reset: this.reset,
                });
              this.currentResult = e;
            }),
            (n.notify = function (t) {
              var e = this;
              i.j.batch(function () {
                e.mutateOptions &&
                  (t.onSuccess
                    ? (null == e.mutateOptions.onSuccess ||
                        e.mutateOptions.onSuccess(
                          e.currentResult.data,
                          e.currentResult.variables,
                          e.currentResult.context
                        ),
                      null == e.mutateOptions.onSettled ||
                        e.mutateOptions.onSettled(
                          e.currentResult.data,
                          null,
                          e.currentResult.variables,
                          e.currentResult.context
                        ))
                    : t.onError &&
                      (null == e.mutateOptions.onError ||
                        e.mutateOptions.onError(
                          e.currentResult.error,
                          e.currentResult.variables,
                          e.currentResult.context
                        ),
                      null == e.mutateOptions.onSettled ||
                        e.mutateOptions.onSettled(
                          void 0,
                          e.currentResult.error,
                          e.currentResult.variables,
                          e.currentResult.context
                        ))),
                  t.listeners &&
                    e.listeners.forEach(function (t) {
                      t(e.currentResult);
                    });
              });
            }),
            e
          );
        })(m.Q);
      function g(t, e, n) {
        return "function" == typeof e
          ? e.apply(void 0, n)
          : "boolean" == typeof e
            ? e
            : !!t;
      }
      function C(t, e, n) {
        var r = o.useRef(!1),
          s = o.useState(0)[1],
          u = (0, v.GR)(t, e, n),
          a = h(),
          c = o.useRef();
        c.current ? c.current.setOptions(u) : (c.current = new b(a, u));
        var l = c.current.getCurrentResult();
        o.useEffect(function () {
          r.current = !0;
          var t = c.current.subscribe(
            i.j.batchCalls(function () {
              r.current &&
                s(function (t) {
                  return t + 1;
                });
            })
          );
          return function () {
            (r.current = !1), t();
          };
        }, []);
        var f = o.useCallback(function (t, e) {
          c.current.mutate(t, e).catch(v.lQ);
        }, []);
        if (l.error && g(void 0, c.current.options.useErrorBoundary, [l.error]))
          throw l.error;
        return (0, d.A)({}, l, { mutate: f, mutateAsync: l.mutate });
      }
      var O = n(429),
        Q = n(4911),
        R = (function (t) {
          function e(e, n) {
            var i;
            return (
              ((i = t.call(this) || this).client = e),
              (i.options = n),
              (i.trackedProps = []),
              (i.selectError = null),
              i.bindMethods(),
              i.setOptions(n),
              i
            );
          }
          (0, p.A)(e, t);
          var n = e.prototype;
          return (
            (n.bindMethods = function () {
              (this.remove = this.remove.bind(this)),
                (this.refetch = this.refetch.bind(this));
            }),
            (n.onSubscribe = function () {
              1 === this.listeners.length &&
                (this.currentQuery.addObserver(this),
                S(this.currentQuery, this.options) && this.executeFetch(),
                this.updateTimers());
            }),
            (n.onUnsubscribe = function () {
              this.listeners.length || this.destroy();
            }),
            (n.shouldFetchOnReconnect = function () {
              return P(
                this.currentQuery,
                this.options,
                this.options.refetchOnReconnect
              );
            }),
            (n.shouldFetchOnWindowFocus = function () {
              return P(
                this.currentQuery,
                this.options,
                this.options.refetchOnWindowFocus
              );
            }),
            (n.destroy = function () {
              (this.listeners = []),
                this.clearTimers(),
                this.currentQuery.removeObserver(this);
            }),
            (n.setOptions = function (t, e) {
              var n = this.options,
                i = this.currentQuery;
              if (
                ((this.options = this.client.defaultQueryObserverOptions(t)),
                void 0 !== this.options.enabled &&
                  "boolean" != typeof this.options.enabled)
              )
                throw Error("Expected enabled to be a boolean");
              this.options.queryKey || (this.options.queryKey = n.queryKey),
                this.updateQuery();
              var r = this.hasListeners();
              r &&
                A(this.currentQuery, i, this.options, n) &&
                this.executeFetch(),
                this.updateResult(e),
                r &&
                  (this.currentQuery !== i ||
                    this.options.enabled !== n.enabled ||
                    this.options.staleTime !== n.staleTime) &&
                  this.updateStaleTimeout();
              var s = this.computeRefetchInterval();
              r &&
                (this.currentQuery !== i ||
                  this.options.enabled !== n.enabled ||
                  s !== this.currentRefetchInterval) &&
                this.updateRefetchInterval(s);
            }),
            (n.getOptimisticResult = function (t) {
              var e = this.client.defaultQueryObserverOptions(t),
                n = this.client.getQueryCache().build(this.client, e);
              return this.createResult(n, e);
            }),
            (n.getCurrentResult = function () {
              return this.currentResult;
            }),
            (n.trackResult = function (t, e) {
              var n = this,
                i = {},
                r = function (t) {
                  n.trackedProps.includes(t) || n.trackedProps.push(t);
                };
              return (
                Object.keys(t).forEach(function (e) {
                  Object.defineProperty(i, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: function () {
                      return r(e), t[e];
                    },
                  });
                }),
                (e.useErrorBoundary || e.suspense) && r("error"),
                i
              );
            }),
            (n.getNextResult = function (t) {
              var e = this;
              return new Promise(function (n, i) {
                var r = e.subscribe(function (e) {
                  e.isFetching ||
                    (r(),
                    e.isError && (null == t ? void 0 : t.throwOnError)
                      ? i(e.error)
                      : n(e));
                });
              });
            }),
            (n.getCurrentQuery = function () {
              return this.currentQuery;
            }),
            (n.remove = function () {
              this.client.getQueryCache().remove(this.currentQuery);
            }),
            (n.refetch = function (t) {
              return this.fetch(
                (0, d.A)({}, t, {
                  meta: { refetchPage: null == t ? void 0 : t.refetchPage },
                })
              );
            }),
            (n.fetchOptimistic = function (t) {
              var e = this,
                n = this.client.defaultQueryObserverOptions(t),
                i = this.client.getQueryCache().build(this.client, n);
              return i.fetch().then(function () {
                return e.createResult(i, n);
              });
            }),
            (n.fetch = function (t) {
              var e = this;
              return this.executeFetch(t).then(function () {
                return e.updateResult(), e.currentResult;
              });
            }),
            (n.executeFetch = function (t) {
              this.updateQuery();
              var e = this.currentQuery.fetch(this.options, t);
              return (
                (null == t ? void 0 : t.throwOnError) || (e = e.catch(v.lQ)), e
              );
            }),
            (n.updateStaleTimeout = function () {
              var t = this;
              if (
                (this.clearStaleTimeout(),
                !v.S$ &&
                  !this.currentResult.isStale &&
                  (0, v.gn)(this.options.staleTime))
              ) {
                var e = (0, v.j3)(
                  this.currentResult.dataUpdatedAt,
                  this.options.staleTime
                );
                this.staleTimeoutId = setTimeout(function () {
                  t.currentResult.isStale || t.updateResult();
                }, e + 1);
              }
            }),
            (n.computeRefetchInterval = function () {
              var t;
              return "function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(
                    this.currentResult.data,
                    this.currentQuery
                  )
                : null != (t = this.options.refetchInterval) && t;
            }),
            (n.updateRefetchInterval = function (t) {
              var e = this;
              this.clearRefetchInterval(),
                (this.currentRefetchInterval = t),
                !v.S$ &&
                  !1 !== this.options.enabled &&
                  (0, v.gn)(this.currentRefetchInterval) &&
                  0 !== this.currentRefetchInterval &&
                  (this.refetchIntervalId = setInterval(function () {
                    (e.options.refetchIntervalInBackground ||
                      O.m.isFocused()) &&
                      e.executeFetch();
                  }, this.currentRefetchInterval));
            }),
            (n.updateTimers = function () {
              this.updateStaleTimeout(),
                this.updateRefetchInterval(this.computeRefetchInterval());
            }),
            (n.clearTimers = function () {
              this.clearStaleTimeout(), this.clearRefetchInterval();
            }),
            (n.clearStaleTimeout = function () {
              this.staleTimeoutId &&
                (clearTimeout(this.staleTimeoutId),
                (this.staleTimeoutId = void 0));
            }),
            (n.clearRefetchInterval = function () {
              this.refetchIntervalId &&
                (clearInterval(this.refetchIntervalId),
                (this.refetchIntervalId = void 0));
            }),
            (n.createResult = function (t, e) {
              var n,
                i,
                r = this.currentQuery,
                u = this.options,
                o = this.currentResult,
                a = this.currentResultState,
                c = this.currentResultOptions,
                l = t !== r,
                h = l ? t.state : this.currentQueryInitialState,
                f = l ? this.currentResult : this.previousQueryResult,
                d = t.state,
                p = d.dataUpdatedAt,
                y = d.error,
                m = d.errorUpdatedAt,
                b = d.isFetching,
                g = d.status,
                C = !1,
                O = !1;
              if (e.optimisticResults) {
                var Q = this.hasListeners(),
                  R = !Q && S(t, e),
                  P = Q && A(t, r, e, u);
                (R || P) && ((b = !0), p || (g = "loading"));
              }
              if (
                e.keepPreviousData &&
                !d.dataUpdateCount &&
                (null == f ? void 0 : f.isSuccess) &&
                "error" !== g
              )
                (n = f.data), (p = f.dataUpdatedAt), (g = f.status), (C = !0);
              else if (e.select && void 0 !== d.data)
                if (
                  o &&
                  d.data === (null == a ? void 0 : a.data) &&
                  e.select === this.selectFn
                )
                  n = this.selectResult;
                else
                  try {
                    (this.selectFn = e.select),
                      (n = e.select(d.data)),
                      !1 !== e.structuralSharing &&
                        (n = (0, v.BH)(null == o ? void 0 : o.data, n)),
                      (this.selectResult = n),
                      (this.selectError = null);
                  } catch (t) {
                    (0, s.t)().error(t), (this.selectError = t);
                  }
              else n = d.data;
              if (
                void 0 !== e.placeholderData &&
                void 0 === n &&
                ("loading" === g || "idle" === g)
              ) {
                if (
                  (null == o ? void 0 : o.isPlaceholderData) &&
                  e.placeholderData === (null == c ? void 0 : c.placeholderData)
                )
                  i = o.data;
                else if (
                  ((i =
                    "function" == typeof e.placeholderData
                      ? e.placeholderData()
                      : e.placeholderData),
                  e.select && void 0 !== i)
                )
                  try {
                    (i = e.select(i)),
                      !1 !== e.structuralSharing &&
                        (i = (0, v.BH)(null == o ? void 0 : o.data, i)),
                      (this.selectError = null);
                  } catch (t) {
                    (0, s.t)().error(t), (this.selectError = t);
                  }
                void 0 !== i && ((g = "success"), (n = i), (O = !0));
              }
              return (
                this.selectError &&
                  ((y = this.selectError),
                  (n = this.selectResult),
                  (m = Date.now()),
                  (g = "error")),
                {
                  status: g,
                  isLoading: "loading" === g,
                  isSuccess: "success" === g,
                  isError: "error" === g,
                  isIdle: "idle" === g,
                  data: n,
                  dataUpdatedAt: p,
                  error: y,
                  errorUpdatedAt: m,
                  failureCount: d.fetchFailureCount,
                  errorUpdateCount: d.errorUpdateCount,
                  isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                  isFetchedAfterMount:
                    d.dataUpdateCount > h.dataUpdateCount ||
                    d.errorUpdateCount > h.errorUpdateCount,
                  isFetching: b,
                  isRefetching: b && "loading" !== g,
                  isLoadingError: "error" === g && 0 === d.dataUpdatedAt,
                  isPlaceholderData: O,
                  isPreviousData: C,
                  isRefetchError: "error" === g && 0 !== d.dataUpdatedAt,
                  isStale: q(t, e),
                  refetch: this.refetch,
                  remove: this.remove,
                }
              );
            }),
            (n.shouldNotifyListeners = function (t, e) {
              if (!e) return !0;
              var n = this.options,
                i = n.notifyOnChangeProps,
                r = n.notifyOnChangePropsExclusions;
              if ((!i && !r) || ("tracked" === i && !this.trackedProps.length))
                return !0;
              var s = "tracked" === i ? this.trackedProps : i;
              return Object.keys(t).some(function (n) {
                var i = t[n] !== e[n],
                  u =
                    null == s
                      ? void 0
                      : s.some(function (t) {
                          return t === n;
                        }),
                  o =
                    null == r
                      ? void 0
                      : r.some(function (t) {
                          return t === n;
                        });
                return i && !o && (!s || u);
              });
            }),
            (n.updateResult = function (t) {
              var e = this.currentResult;
              if (
                ((this.currentResult = this.createResult(
                  this.currentQuery,
                  this.options
                )),
                (this.currentResultState = this.currentQuery.state),
                (this.currentResultOptions = this.options),
                !(0, v.f8)(this.currentResult, e))
              ) {
                var n = { cache: !0 };
                (null == t ? void 0 : t.listeners) !== !1 &&
                  this.shouldNotifyListeners(this.currentResult, e) &&
                  (n.listeners = !0),
                  this.notify((0, d.A)({}, n, t));
              }
            }),
            (n.updateQuery = function () {
              var t = this.client
                .getQueryCache()
                .build(this.client, this.options);
              if (t !== this.currentQuery) {
                var e = this.currentQuery;
                (this.currentQuery = t),
                  (this.currentQueryInitialState = t.state),
                  (this.previousQueryResult = this.currentResult),
                  this.hasListeners() &&
                    (null == e || e.removeObserver(this), t.addObserver(this));
              }
            }),
            (n.onQueryUpdate = function (t) {
              var e = {};
              "success" === t.type
                ? (e.onSuccess = !0)
                : "error" !== t.type || (0, Q.wm)(t.error) || (e.onError = !0),
                this.updateResult(e),
                this.hasListeners() && this.updateTimers();
            }),
            (n.notify = function (t) {
              var e = this;
              i.j.batch(function () {
                t.onSuccess
                  ? (null == e.options.onSuccess ||
                      e.options.onSuccess(e.currentResult.data),
                    null == e.options.onSettled ||
                      e.options.onSettled(e.currentResult.data, null))
                  : t.onError &&
                    (null == e.options.onError ||
                      e.options.onError(e.currentResult.error),
                    null == e.options.onSettled ||
                      e.options.onSettled(void 0, e.currentResult.error)),
                  t.listeners &&
                    e.listeners.forEach(function (t) {
                      t(e.currentResult);
                    }),
                  t.cache &&
                    e.client
                      .getQueryCache()
                      .notify({
                        query: e.currentQuery,
                        type: "observerResultsUpdated",
                      });
              });
            }),
            e
          );
        })(m.Q);
      function S(t, e) {
        return (
          (!1 !== e.enabled &&
            !t.state.dataUpdatedAt &&
            ("error" !== t.state.status || !1 !== e.retryOnMount)) ||
          (t.state.dataUpdatedAt > 0 && P(t, e, e.refetchOnMount))
        );
      }
      function P(t, e, n) {
        if (!1 !== e.enabled) {
          var i = "function" == typeof n ? n(t) : n;
          return "always" === i || (!1 !== i && q(t, e));
        }
        return !1;
      }
      function A(t, e, n, i) {
        return (
          !1 !== n.enabled &&
          (t !== e || !1 === i.enabled) &&
          (!n.suspense || "error" !== t.state.status) &&
          q(t, n)
        );
      }
      function q(t, e) {
        return t.isStaleByTime(e.staleTime);
      }
      var F = o.createContext(
        (function () {
          var t = !1;
          return {
            clearReset: function () {
              t = !1;
            },
            reset: function () {
              t = !0;
            },
            isReset: function () {
              return t;
            },
          };
        })()
      );
      function E(t, e, n) {
        return (function (t, e) {
          var n = o.useRef(!1),
            r = o.useState(0)[1],
            s = h(),
            u = o.useContext(F),
            a = s.defaultQueryObserverOptions(t);
          (a.optimisticResults = !0),
            a.onError && (a.onError = i.j.batchCalls(a.onError)),
            a.onSuccess && (a.onSuccess = i.j.batchCalls(a.onSuccess)),
            a.onSettled && (a.onSettled = i.j.batchCalls(a.onSettled)),
            a.suspense &&
              ("number" != typeof a.staleTime && (a.staleTime = 1e3),
              0 === a.cacheTime && (a.cacheTime = 1)),
            (a.suspense || a.useErrorBoundary) &&
              !u.isReset() &&
              (a.retryOnMount = !1);
          var c = o.useState(function () {
              return new e(s, a);
            })[0],
            l = c.getOptimisticResult(a);
          if (
            (o.useEffect(
              function () {
                (n.current = !0), u.clearReset();
                var t = c.subscribe(
                  i.j.batchCalls(function () {
                    n.current &&
                      r(function (t) {
                        return t + 1;
                      });
                  })
                );
                return (
                  c.updateResult(),
                  function () {
                    (n.current = !1), t();
                  }
                );
              },
              [u, c]
            ),
            o.useEffect(
              function () {
                c.setOptions(a, { listeners: !1 });
              },
              [a, c]
            ),
            a.suspense && l.isLoading)
          )
            throw c
              .fetchOptimistic(a)
              .then(function (t) {
                var e = t.data;
                null == a.onSuccess || a.onSuccess(e),
                  null == a.onSettled || a.onSettled(e, null);
              })
              .catch(function (t) {
                u.clearReset(),
                  null == a.onError || a.onError(t),
                  null == a.onSettled || a.onSettled(void 0, t);
              });
          if (
            l.isError &&
            !u.isReset() &&
            !l.isFetching &&
            g(a.suspense, a.useErrorBoundary, [l.error, c.getCurrentQuery()])
          )
            throw l.error;
          return (
            "tracked" === a.notifyOnChangeProps && (l = c.trackResult(l, a)), l
          );
        })((0, v.vh)(t, e, n), R);
      }
    },
    5293: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => c, s: () => a });
      var i = n(8059),
        r = n(4034),
        s = n(8398),
        u = n(4911),
        o = n(1959),
        a = (function () {
          function t(t) {
            (this.options = (0, i.A)({}, t.defaultOptions, t.options)),
              (this.mutationId = t.mutationId),
              (this.mutationCache = t.mutationCache),
              (this.observers = []),
              (this.state = t.state || c()),
              (this.meta = t.meta);
          }
          var e = t.prototype;
          return (
            (e.setState = function (t) {
              this.dispatch({ type: "setState", state: t });
            }),
            (e.addObserver = function (t) {
              -1 === this.observers.indexOf(t) && this.observers.push(t);
            }),
            (e.removeObserver = function (t) {
              this.observers = this.observers.filter(function (e) {
                return e !== t;
              });
            }),
            (e.cancel = function () {
              return this.retryer
                ? (this.retryer.cancel(),
                  this.retryer.promise.then(o.lQ).catch(o.lQ))
                : Promise.resolve();
            }),
            (e.continue = function () {
              return this.retryer
                ? (this.retryer.continue(), this.retryer.promise)
                : this.execute();
            }),
            (e.execute = function () {
              var t,
                e = this,
                n = "loading" === this.state.status,
                i = Promise.resolve();
              return (
                n ||
                  (this.dispatch({
                    type: "loading",
                    variables: this.options.variables,
                  }),
                  (i = i
                    .then(function () {
                      null == e.mutationCache.config.onMutate ||
                        e.mutationCache.config.onMutate(e.state.variables, e);
                    })
                    .then(function () {
                      return null == e.options.onMutate
                        ? void 0
                        : e.options.onMutate(e.state.variables);
                    })
                    .then(function (t) {
                      t !== e.state.context &&
                        e.dispatch({
                          type: "loading",
                          context: t,
                          variables: e.state.variables,
                        });
                    }))),
                i
                  .then(function () {
                    return e.executeMutation();
                  })
                  .then(function (n) {
                    (t = n),
                      null == e.mutationCache.config.onSuccess ||
                        e.mutationCache.config.onSuccess(
                          t,
                          e.state.variables,
                          e.state.context,
                          e
                        );
                  })
                  .then(function () {
                    return null == e.options.onSuccess
                      ? void 0
                      : e.options.onSuccess(
                          t,
                          e.state.variables,
                          e.state.context
                        );
                  })
                  .then(function () {
                    return null == e.options.onSettled
                      ? void 0
                      : e.options.onSettled(
                          t,
                          null,
                          e.state.variables,
                          e.state.context
                        );
                  })
                  .then(function () {
                    return e.dispatch({ type: "success", data: t }), t;
                  })
                  .catch(function (t) {
                    return (
                      null == e.mutationCache.config.onError ||
                        e.mutationCache.config.onError(
                          t,
                          e.state.variables,
                          e.state.context,
                          e
                        ),
                      (0, r.t)().error(t),
                      Promise.resolve()
                        .then(function () {
                          return null == e.options.onError
                            ? void 0
                            : e.options.onError(
                                t,
                                e.state.variables,
                                e.state.context
                              );
                        })
                        .then(function () {
                          return null == e.options.onSettled
                            ? void 0
                            : e.options.onSettled(
                                void 0,
                                t,
                                e.state.variables,
                                e.state.context
                              );
                        })
                        .then(function () {
                          throw (e.dispatch({ type: "error", error: t }), t);
                        })
                    );
                  })
              );
            }),
            (e.executeMutation = function () {
              var t,
                e = this;
              return (
                (this.retryer = new u.eJ({
                  fn: function () {
                    return e.options.mutationFn
                      ? e.options.mutationFn(e.state.variables)
                      : Promise.reject("No mutationFn found");
                  },
                  onFail: function () {
                    e.dispatch({ type: "failed" });
                  },
                  onPause: function () {
                    e.dispatch({ type: "pause" });
                  },
                  onContinue: function () {
                    e.dispatch({ type: "continue" });
                  },
                  retry: null != (t = this.options.retry) ? t : 0,
                  retryDelay: this.options.retryDelay,
                })),
                this.retryer.promise
              );
            }),
            (e.dispatch = function (t) {
              var e = this;
              (this.state = (function (t, e) {
                switch (e.type) {
                  case "failed":
                    return (0, i.A)({}, t, {
                      failureCount: t.failureCount + 1,
                    });
                  case "pause":
                    return (0, i.A)({}, t, { isPaused: !0 });
                  case "continue":
                    return (0, i.A)({}, t, { isPaused: !1 });
                  case "loading":
                    return (0, i.A)({}, t, {
                      context: e.context,
                      data: void 0,
                      error: null,
                      isPaused: !1,
                      status: "loading",
                      variables: e.variables,
                    });
                  case "success":
                    return (0, i.A)({}, t, {
                      data: e.data,
                      error: null,
                      status: "success",
                      isPaused: !1,
                    });
                  case "error":
                    return (0, i.A)({}, t, {
                      data: void 0,
                      error: e.error,
                      failureCount: t.failureCount + 1,
                      isPaused: !1,
                      status: "error",
                    });
                  case "setState":
                    return (0, i.A)({}, t, e.state);
                  default:
                    return t;
                }
              })(this.state, t)),
                s.j.batch(function () {
                  e.observers.forEach(function (e) {
                    e.onMutationUpdate(t);
                  }),
                    e.mutationCache.notify(e);
                });
            }),
            t
          );
        })();
      function c() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          isPaused: !1,
          status: "idle",
          variables: void 0,
        };
      }
    },
    6327: (t, e, n) => {
      "use strict";
      function i(t, e) {
        return (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          i(t, e);
      }
      n.d(e, { A: () => r });
    },
    8059: (t, e, n) => {
      "use strict";
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  ({}).hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            }).apply(null, arguments);
      }
      n.d(e, { A: () => i });
    },
    8398: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => r });
      var i = n(1959),
        r = new ((function () {
          function t() {
            (this.queue = []),
              (this.transactions = 0),
              (this.notifyFn = function (t) {
                t();
              }),
              (this.batchNotifyFn = function (t) {
                t();
              });
          }
          var e = t.prototype;
          return (
            (e.batch = function (t) {
              var e;
              this.transactions++;
              try {
                e = t();
              } finally {
                this.transactions--, this.transactions || this.flush();
              }
              return e;
            }),
            (e.schedule = function (t) {
              var e = this;
              this.transactions
                ? this.queue.push(t)
                : (0, i.G6)(function () {
                    e.notifyFn(t);
                  });
            }),
            (e.batchCalls = function (t) {
              var e = this;
              return function () {
                for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                  i[r] = arguments[r];
                e.schedule(function () {
                  t.apply(void 0, i);
                });
              };
            }),
            (e.flush = function () {
              var t = this,
                e = this.queue;
              (this.queue = []),
                e.length &&
                  (0, i.G6)(function () {
                    t.batchNotifyFn(function () {
                      e.forEach(function (e) {
                        t.notifyFn(e);
                      });
                    });
                  });
            }),
            (e.setNotifyFunction = function (t) {
              this.notifyFn = t;
            }),
            (e.setBatchNotifyFunction = function (t) {
              this.batchNotifyFn = t;
            }),
            t
          );
        })())();
    },
    8663: (t, e, n) => {
      "use strict";
      n.d(e, { Q: () => i });
      var i = (function () {
        function t() {
          this.listeners = [];
        }
        var e = t.prototype;
        return (
          (e.subscribe = function (t) {
            var e = this,
              n = t || function () {};
            return (
              this.listeners.push(n),
              this.onSubscribe(),
              function () {
                (e.listeners = e.listeners.filter(function (t) {
                  return t !== n;
                })),
                  e.onUnsubscribe();
              }
            );
          }),
          (e.hasListeners = function () {
            return this.listeners.length > 0;
          }),
          (e.onSubscribe = function () {}),
          (e.onUnsubscribe = function () {}),
          t
        );
      })();
    },
    8762: (t, e, n) => {
      "use strict";
      n.d(e, {
        QueryClient: () => i.QueryClient,
        QueryClientProvider: () => r.QueryClientProvider,
        useMutation: () => r.useMutation,
        useQuery: () => r.useQuery,
        useQueryClient: () => r.useQueryClient,
      });
      var i = n(9946);
      n.o(i, "QueryClientProvider") &&
        n.d(e, {
          QueryClientProvider: function () {
            return i.QueryClientProvider;
          },
        }),
        n.o(i, "useMutation") &&
          n.d(e, {
            useMutation: function () {
              return i.useMutation;
            },
          }),
        n.o(i, "useQuery") &&
          n.d(e, {
            useQuery: function () {
              return i.useQuery;
            },
          }),
        n.o(i, "useQueryClient") &&
          n.d(e, {
            useQueryClient: function () {
              return i.useQueryClient;
            },
          });
      var r = n(5249);
    },
    9176: (t, e, n) => {
      "use strict";
      n.d(e, { E: () => m });
      var i = n(8059),
        r = n(1959),
        s = n(6327),
        u = n(8398),
        o = n(4034),
        a = n(4911),
        c = (function () {
          function t(t) {
            (this.abortSignalConsumed = !1),
              (this.hadObservers = !1),
              (this.defaultOptions = t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              (this.cache = t.cache),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              (this.initialState =
                t.state || this.getDefaultState(this.options)),
              (this.state = this.initialState),
              (this.meta = t.meta),
              this.scheduleGc();
          }
          var e = t.prototype;
          return (
            (e.setOptions = function (t) {
              var e;
              (this.options = (0, i.A)({}, this.defaultOptions, t)),
                (this.meta = null == t ? void 0 : t.meta),
                (this.cacheTime = Math.max(
                  this.cacheTime || 0,
                  null != (e = this.options.cacheTime) ? e : 3e5
                ));
            }),
            (e.setDefaultOptions = function (t) {
              this.defaultOptions = t;
            }),
            (e.scheduleGc = function () {
              var t = this;
              this.clearGcTimeout(),
                (0, r.gn)(this.cacheTime) &&
                  (this.gcTimeout = setTimeout(function () {
                    t.optionalRemove();
                  }, this.cacheTime));
            }),
            (e.clearGcTimeout = function () {
              this.gcTimeout &&
                (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
            }),
            (e.optionalRemove = function () {
              !this.observers.length &&
                (this.state.isFetching
                  ? this.hadObservers && this.scheduleGc()
                  : this.cache.remove(this));
            }),
            (e.setData = function (t, e) {
              var n,
                i,
                s = this.state.data,
                u = (0, r.Zw)(t, s);
              return (
                (
                  null == (n = (i = this.options).isDataEqual)
                    ? void 0
                    : n.call(i, s, u)
                )
                  ? (u = s)
                  : !1 !== this.options.structuralSharing &&
                    (u = (0, r.BH)(s, u)),
                this.dispatch({
                  data: u,
                  type: "success",
                  dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                }),
                u
              );
            }),
            (e.setState = function (t, e) {
              this.dispatch({ type: "setState", state: t, setStateOptions: e });
            }),
            (e.cancel = function (t) {
              var e,
                n = this.promise;
              return (
                null == (e = this.retryer) || e.cancel(t),
                n ? n.then(r.lQ).catch(r.lQ) : Promise.resolve()
              );
            }),
            (e.destroy = function () {
              this.clearGcTimeout(), this.cancel({ silent: !0 });
            }),
            (e.reset = function () {
              this.destroy(), this.setState(this.initialState);
            }),
            (e.isActive = function () {
              return this.observers.some(function (t) {
                return !1 !== t.options.enabled;
              });
            }),
            (e.isFetching = function () {
              return this.state.isFetching;
            }),
            (e.isStale = function () {
              return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                this.observers.some(function (t) {
                  return t.getCurrentResult().isStale;
                })
              );
            }),
            (e.isStaleByTime = function (t) {
              return (
                void 0 === t && (t = 0),
                this.state.isInvalidated ||
                  !this.state.dataUpdatedAt ||
                  !(0, r.j3)(this.state.dataUpdatedAt, t)
              );
            }),
            (e.onFocus = function () {
              var t,
                e = this.observers.find(function (t) {
                  return t.shouldFetchOnWindowFocus();
                });
              e && e.refetch(), null == (t = this.retryer) || t.continue();
            }),
            (e.onOnline = function () {
              var t,
                e = this.observers.find(function (t) {
                  return t.shouldFetchOnReconnect();
                });
              e && e.refetch(), null == (t = this.retryer) || t.continue();
            }),
            (e.addObserver = function (t) {
              -1 === this.observers.indexOf(t) &&
                (this.observers.push(t),
                (this.hadObservers = !0),
                this.clearGcTimeout(),
                this.cache.notify({
                  type: "observerAdded",
                  query: this,
                  observer: t,
                }));
            }),
            (e.removeObserver = function (t) {
              -1 !== this.observers.indexOf(t) &&
                ((this.observers = this.observers.filter(function (e) {
                  return e !== t;
                })),
                this.observers.length ||
                  (this.retryer &&
                    (this.retryer.isTransportCancelable ||
                    this.abortSignalConsumed
                      ? this.retryer.cancel({ revert: !0 })
                      : this.retryer.cancelRetry()),
                  this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
                this.cache.notify({
                  type: "observerRemoved",
                  query: this,
                  observer: t,
                }));
            }),
            (e.getObserversCount = function () {
              return this.observers.length;
            }),
            (e.invalidate = function () {
              this.state.isInvalidated || this.dispatch({ type: "invalidate" });
            }),
            (e.fetch = function (t, e) {
              var n,
                i,
                s,
                u,
                c,
                l,
                h = this;
              if (this.state.isFetching) {
                if (
                  this.state.dataUpdatedAt &&
                  (null == e ? void 0 : e.cancelRefetch)
                )
                  this.cancel({ silent: !0 });
                else if (this.promise)
                  return (
                    null == (n = this.retryer) || n.continueRetry(),
                    this.promise
                  );
              }
              if ((t && this.setOptions(t), !this.options.queryFn)) {
                var f = this.observers.find(function (t) {
                  return t.options.queryFn;
                });
                f && this.setOptions(f.options);
              }
              var d = (0, r.HN)(this.queryKey),
                v = (0, r.jY)(),
                p = { queryKey: d, pageParam: void 0, meta: this.meta };
              Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: function () {
                  if (v) return (h.abortSignalConsumed = !0), v.signal;
                },
              });
              var y = {
                fetchOptions: e,
                options: this.options,
                queryKey: d,
                state: this.state,
                fetchFn: function () {
                  return h.options.queryFn
                    ? ((h.abortSignalConsumed = !1), h.options.queryFn(p))
                    : Promise.reject("Missing queryFn");
                },
                meta: this.meta,
              };
              return (
                (null == (u = this.options.behavior) ? void 0 : u.onFetch) &&
                  (null == (i = this.options.behavior) || i.onFetch(y)),
                (this.revertState = this.state),
                (this.state.isFetching &&
                  this.state.fetchMeta ===
                    (null == (c = y.fetchOptions) ? void 0 : c.meta)) ||
                  this.dispatch({
                    type: "fetch",
                    meta: null == (s = y.fetchOptions) ? void 0 : s.meta,
                  }),
                (this.retryer = new a.eJ({
                  fn: y.fetchFn,
                  abort:
                    null == v || null == (l = v.abort) ? void 0 : l.bind(v),
                  onSuccess: function (t) {
                    h.setData(t),
                      null == h.cache.config.onSuccess ||
                        h.cache.config.onSuccess(t, h),
                      0 === h.cacheTime && h.optionalRemove();
                  },
                  onError: function (t) {
                    ((0, a.wm)(t) && t.silent) ||
                      h.dispatch({ type: "error", error: t }),
                      (0, a.wm)(t) ||
                        (null == h.cache.config.onError ||
                          h.cache.config.onError(t, h),
                        (0, o.t)().error(t)),
                      0 === h.cacheTime && h.optionalRemove();
                  },
                  onFail: function () {
                    h.dispatch({ type: "failed" });
                  },
                  onPause: function () {
                    h.dispatch({ type: "pause" });
                  },
                  onContinue: function () {
                    h.dispatch({ type: "continue" });
                  },
                  retry: y.options.retry,
                  retryDelay: y.options.retryDelay,
                })),
                (this.promise = this.retryer.promise),
                this.promise
              );
            }),
            (e.dispatch = function (t) {
              var e = this;
              (this.state = this.reducer(this.state, t)),
                u.j.batch(function () {
                  e.observers.forEach(function (e) {
                    e.onQueryUpdate(t);
                  }),
                    e.cache.notify({
                      query: e,
                      type: "queryUpdated",
                      action: t,
                    });
                });
            }),
            (e.getDefaultState = function (t) {
              var e =
                  "function" == typeof t.initialData
                    ? t.initialData()
                    : t.initialData,
                n =
                  void 0 !== t.initialData
                    ? "function" == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0,
                i = void 0 !== e;
              return {
                data: e,
                dataUpdateCount: 0,
                dataUpdatedAt: i ? (null != n ? n : Date.now()) : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: i ? "success" : "idle",
              };
            }),
            (e.reducer = function (t, e) {
              var n, r;
              switch (e.type) {
                case "failed":
                  return (0, i.A)({}, t, {
                    fetchFailureCount: t.fetchFailureCount + 1,
                  });
                case "pause":
                  return (0, i.A)({}, t, { isPaused: !0 });
                case "continue":
                  return (0, i.A)({}, t, { isPaused: !1 });
                case "fetch":
                  return (0, i.A)(
                    {},
                    t,
                    {
                      fetchFailureCount: 0,
                      fetchMeta: null != (n = e.meta) ? n : null,
                      isFetching: !0,
                      isPaused: !1,
                    },
                    !t.dataUpdatedAt && { error: null, status: "loading" }
                  );
                case "success":
                  return (0, i.A)({}, t, {
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt:
                      null != (r = e.dataUpdatedAt) ? r : Date.now(),
                    error: null,
                    fetchFailureCount: 0,
                    isFetching: !1,
                    isInvalidated: !1,
                    isPaused: !1,
                    status: "success",
                  });
                case "error":
                  var s = e.error;
                  if ((0, a.wm)(s) && s.revert && this.revertState)
                    return (0, i.A)({}, this.revertState);
                  return (0, i.A)({}, t, {
                    error: s,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    isFetching: !1,
                    isPaused: !1,
                    status: "error",
                  });
                case "invalidate":
                  return (0, i.A)({}, t, { isInvalidated: !0 });
                case "setState":
                  return (0, i.A)({}, t, e.state);
                default:
                  return t;
              }
            }),
            t
          );
        })(),
        l = n(8663),
        h = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this) || this).config = e || {}),
              (n.queries = []),
              (n.queriesMap = {}),
              n
            );
          }
          (0, s.A)(e, t);
          var n = e.prototype;
          return (
            (n.build = function (t, e, n) {
              var i,
                s = e.queryKey,
                u = null != (i = e.queryHash) ? i : (0, r.F$)(s, e),
                o = this.get(u);
              return (
                o ||
                  ((o = new c({
                    cache: this,
                    queryKey: s,
                    queryHash: u,
                    options: t.defaultQueryOptions(e),
                    state: n,
                    defaultOptions: t.getQueryDefaults(s),
                    meta: e.meta,
                  })),
                  this.add(o)),
                o
              );
            }),
            (n.add = function (t) {
              this.queriesMap[t.queryHash] ||
                ((this.queriesMap[t.queryHash] = t),
                this.queries.push(t),
                this.notify({ type: "queryAdded", query: t }));
            }),
            (n.remove = function (t) {
              var e = this.queriesMap[t.queryHash];
              e &&
                (t.destroy(),
                (this.queries = this.queries.filter(function (e) {
                  return e !== t;
                })),
                e === t && delete this.queriesMap[t.queryHash],
                this.notify({ type: "queryRemoved", query: t }));
            }),
            (n.clear = function () {
              var t = this;
              u.j.batch(function () {
                t.queries.forEach(function (e) {
                  t.remove(e);
                });
              });
            }),
            (n.get = function (t) {
              return this.queriesMap[t];
            }),
            (n.getAll = function () {
              return this.queries;
            }),
            (n.find = function (t, e) {
              var n = (0, r.b_)(t, e)[0];
              return (
                void 0 === n.exact && (n.exact = !0),
                this.queries.find(function (t) {
                  return (0, r.MK)(n, t);
                })
              );
            }),
            (n.findAll = function (t, e) {
              var n = (0, r.b_)(t, e)[0];
              return Object.keys(n).length > 0
                ? this.queries.filter(function (t) {
                    return (0, r.MK)(n, t);
                  })
                : this.queries;
            }),
            (n.notify = function (t) {
              var e = this;
              u.j.batch(function () {
                e.listeners.forEach(function (e) {
                  e(t);
                });
              });
            }),
            (n.onFocus = function () {
              var t = this;
              u.j.batch(function () {
                t.queries.forEach(function (t) {
                  t.onFocus();
                });
              });
            }),
            (n.onOnline = function () {
              var t = this;
              u.j.batch(function () {
                t.queries.forEach(function (t) {
                  t.onOnline();
                });
              });
            }),
            e
          );
        })(l.Q),
        f = n(5293),
        d = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this) || this).config = e || {}),
              (n.mutations = []),
              (n.mutationId = 0),
              n
            );
          }
          (0, s.A)(e, t);
          var n = e.prototype;
          return (
            (n.build = function (t, e, n) {
              var i = new f.s({
                mutationCache: this,
                mutationId: ++this.mutationId,
                options: t.defaultMutationOptions(e),
                state: n,
                defaultOptions: e.mutationKey
                  ? t.getMutationDefaults(e.mutationKey)
                  : void 0,
                meta: e.meta,
              });
              return this.add(i), i;
            }),
            (n.add = function (t) {
              this.mutations.push(t), this.notify(t);
            }),
            (n.remove = function (t) {
              (this.mutations = this.mutations.filter(function (e) {
                return e !== t;
              })),
                t.cancel(),
                this.notify(t);
            }),
            (n.clear = function () {
              var t = this;
              u.j.batch(function () {
                t.mutations.forEach(function (e) {
                  t.remove(e);
                });
              });
            }),
            (n.getAll = function () {
              return this.mutations;
            }),
            (n.find = function (t) {
              return (
                void 0 === t.exact && (t.exact = !0),
                this.mutations.find(function (e) {
                  return (0, r.nJ)(t, e);
                })
              );
            }),
            (n.findAll = function (t) {
              return this.mutations.filter(function (e) {
                return (0, r.nJ)(t, e);
              });
            }),
            (n.notify = function (t) {
              var e = this;
              u.j.batch(function () {
                e.listeners.forEach(function (e) {
                  e(t);
                });
              });
            }),
            (n.onFocus = function () {
              this.resumePausedMutations();
            }),
            (n.onOnline = function () {
              this.resumePausedMutations();
            }),
            (n.resumePausedMutations = function () {
              var t = this.mutations.filter(function (t) {
                return t.state.isPaused;
              });
              return u.j.batch(function () {
                return t.reduce(function (t, e) {
                  return t.then(function () {
                    return e.continue().catch(r.lQ);
                  });
                }, Promise.resolve());
              });
            }),
            e
          );
        })(l.Q),
        v = n(429),
        p = n(284);
      function y(t, e) {
        return null == t.getNextPageParam
          ? void 0
          : t.getNextPageParam(e[e.length - 1], e);
      }
      var m = (function () {
        function t(t) {
          void 0 === t && (t = {}),
            (this.queryCache = t.queryCache || new h()),
            (this.mutationCache = t.mutationCache || new d()),
            (this.defaultOptions = t.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []);
        }
        var e = t.prototype;
        return (
          (e.mount = function () {
            var t = this;
            (this.unsubscribeFocus = v.m.subscribe(function () {
              v.m.isFocused() &&
                p.t.isOnline() &&
                (t.mutationCache.onFocus(), t.queryCache.onFocus());
            })),
              (this.unsubscribeOnline = p.t.subscribe(function () {
                v.m.isFocused() &&
                  p.t.isOnline() &&
                  (t.mutationCache.onOnline(), t.queryCache.onOnline());
              }));
          }),
          (e.unmount = function () {
            var t, e;
            null == (t = this.unsubscribeFocus) || t.call(this),
              null == (e = this.unsubscribeOnline) || e.call(this);
          }),
          (e.isFetching = function (t, e) {
            var n = (0, r.b_)(t, e)[0];
            return (n.fetching = !0), this.queryCache.findAll(n).length;
          }),
          (e.isMutating = function (t) {
            return this.mutationCache.findAll((0, i.A)({}, t, { fetching: !0 }))
              .length;
          }),
          (e.getQueryData = function (t, e) {
            var n;
            return null == (n = this.queryCache.find(t, e))
              ? void 0
              : n.state.data;
          }),
          (e.getQueriesData = function (t) {
            return this.getQueryCache()
              .findAll(t)
              .map(function (t) {
                return [t.queryKey, t.state.data];
              });
          }),
          (e.setQueryData = function (t, e, n) {
            var i = (0, r.vh)(t),
              s = this.defaultQueryOptions(i);
            return this.queryCache.build(this, s).setData(e, n);
          }),
          (e.setQueriesData = function (t, e, n) {
            var i = this;
            return u.j.batch(function () {
              return i
                .getQueryCache()
                .findAll(t)
                .map(function (t) {
                  var r = t.queryKey;
                  return [r, i.setQueryData(r, e, n)];
                });
            });
          }),
          (e.getQueryState = function (t, e) {
            var n;
            return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state;
          }),
          (e.removeQueries = function (t, e) {
            var n = (0, r.b_)(t, e)[0],
              i = this.queryCache;
            u.j.batch(function () {
              i.findAll(n).forEach(function (t) {
                i.remove(t);
              });
            });
          }),
          (e.resetQueries = function (t, e, n) {
            var s = this,
              o = (0, r.b_)(t, e, n),
              a = o[0],
              c = o[1],
              l = this.queryCache,
              h = (0, i.A)({}, a, { active: !0 });
            return u.j.batch(function () {
              return (
                l.findAll(a).forEach(function (t) {
                  t.reset();
                }),
                s.refetchQueries(h, c)
              );
            });
          }),
          (e.cancelQueries = function (t, e, n) {
            var i = this,
              s = (0, r.b_)(t, e, n),
              o = s[0],
              a = s[1],
              c = void 0 === a ? {} : a;
            return (
              void 0 === c.revert && (c.revert = !0),
              Promise.all(
                u.j.batch(function () {
                  return i.queryCache.findAll(o).map(function (t) {
                    return t.cancel(c);
                  });
                })
              )
                .then(r.lQ)
                .catch(r.lQ)
            );
          }),
          (e.invalidateQueries = function (t, e, n) {
            var s,
              o,
              a,
              c = this,
              l = (0, r.b_)(t, e, n),
              h = l[0],
              f = l[1],
              d = (0, i.A)({}, h, {
                active:
                  null == (s = null != (o = h.refetchActive) ? o : h.active) ||
                  s,
                inactive: null != (a = h.refetchInactive) && a,
              });
            return u.j.batch(function () {
              return (
                c.queryCache.findAll(h).forEach(function (t) {
                  t.invalidate();
                }),
                c.refetchQueries(d, f)
              );
            });
          }),
          (e.refetchQueries = function (t, e, n) {
            var s = this,
              o = (0, r.b_)(t, e, n),
              a = o[0],
              c = o[1],
              l = Promise.all(
                u.j.batch(function () {
                  return s.queryCache.findAll(a).map(function (t) {
                    return t.fetch(
                      void 0,
                      (0, i.A)({}, c, {
                        meta: {
                          refetchPage: null == a ? void 0 : a.refetchPage,
                        },
                      })
                    );
                  });
                })
              ).then(r.lQ);
            return (
              (null == c ? void 0 : c.throwOnError) || (l = l.catch(r.lQ)), l
            );
          }),
          (e.fetchQuery = function (t, e, n) {
            var i = (0, r.vh)(t, e, n),
              s = this.defaultQueryOptions(i);
            void 0 === s.retry && (s.retry = !1);
            var u = this.queryCache.build(this, s);
            return u.isStaleByTime(s.staleTime)
              ? u.fetch(s)
              : Promise.resolve(u.state.data);
          }),
          (e.prefetchQuery = function (t, e, n) {
            return this.fetchQuery(t, e, n).then(r.lQ).catch(r.lQ);
          }),
          (e.fetchInfiniteQuery = function (t, e, n) {
            var i = (0, r.vh)(t, e, n);
            return (
              (i.behavior = {
                onFetch: function (t) {
                  t.fetchFn = function () {
                    var e,
                      n,
                      i,
                      s,
                      u,
                      o,
                      c,
                      l =
                        null == (e = t.fetchOptions) || null == (n = e.meta)
                          ? void 0
                          : n.refetchPage,
                      h =
                        null == (i = t.fetchOptions) || null == (s = i.meta)
                          ? void 0
                          : s.fetchMore,
                      f = null == h ? void 0 : h.pageParam,
                      d = (null == h ? void 0 : h.direction) === "forward",
                      v = (null == h ? void 0 : h.direction) === "backward",
                      p = (null == (u = t.state.data) ? void 0 : u.pages) || [],
                      m =
                        (null == (o = t.state.data) ? void 0 : o.pageParams) ||
                        [],
                      b = (0, r.jY)(),
                      g = null == b ? void 0 : b.signal,
                      C = m,
                      O = !1,
                      Q =
                        t.options.queryFn ||
                        function () {
                          return Promise.reject("Missing queryFn");
                        },
                      R = function (t, e, n, i) {
                        return (
                          (C = i ? [e].concat(C) : [].concat(C, [e])),
                          i ? [n].concat(t) : [].concat(t, [n])
                        );
                      },
                      S = function (e, n, i, r) {
                        if (O) return Promise.reject("Cancelled");
                        if (void 0 === i && !n && e.length)
                          return Promise.resolve(e);
                        var s = Q({
                            queryKey: t.queryKey,
                            signal: g,
                            pageParam: i,
                            meta: t.meta,
                          }),
                          u = Promise.resolve(s).then(function (t) {
                            return R(e, i, t, r);
                          });
                        return (0, a.dd)(s) && (u.cancel = s.cancel), u;
                      };
                    if (p.length)
                      if (d) {
                        var P = void 0 !== f,
                          A = P ? f : y(t.options, p);
                        c = S(p, P, A);
                      } else if (v) {
                        var q,
                          F,
                          E = void 0 !== f,
                          w = E
                            ? f
                            : ((q = t.options),
                              (F = p),
                              null == q.getPreviousPageParam
                                ? void 0
                                : q.getPreviousPageParam(F[0], F));
                        c = S(p, E, w, !0);
                      } else {
                        C = [];
                        var M = void 0 === t.options.getNextPageParam;
                        c =
                          !l || !p[0] || l(p[0], 0, p)
                            ? S([], M, m[0])
                            : Promise.resolve(R([], m[0], p[0]));
                        for (
                          var D = function (e) {
                              c = c.then(function (n) {
                                if (!l || !p[e] || l(p[e], e, p)) {
                                  var i = M ? m[e] : y(t.options, n);
                                  return S(n, M, i);
                                }
                                return Promise.resolve(R(n, m[e], p[e]));
                              });
                            },
                            j = 1;
                          j < p.length;
                          j++
                        )
                          D(j);
                      }
                    else c = S([]);
                    var x = c.then(function (t) {
                      return { pages: t, pageParams: C };
                    });
                    return (
                      (x.cancel = function () {
                        (O = !0),
                          null == b || b.abort(),
                          (0, a.dd)(c) && c.cancel();
                      }),
                      x
                    );
                  };
                },
              }),
              this.fetchQuery(i)
            );
          }),
          (e.prefetchInfiniteQuery = function (t, e, n) {
            return this.fetchInfiniteQuery(t, e, n).then(r.lQ).catch(r.lQ);
          }),
          (e.cancelMutations = function () {
            var t = this;
            return Promise.all(
              u.j.batch(function () {
                return t.mutationCache.getAll().map(function (t) {
                  return t.cancel();
                });
              })
            )
              .then(r.lQ)
              .catch(r.lQ);
          }),
          (e.resumePausedMutations = function () {
            return this.getMutationCache().resumePausedMutations();
          }),
          (e.executeMutation = function (t) {
            return this.mutationCache.build(this, t).execute();
          }),
          (e.getQueryCache = function () {
            return this.queryCache;
          }),
          (e.getMutationCache = function () {
            return this.mutationCache;
          }),
          (e.getDefaultOptions = function () {
            return this.defaultOptions;
          }),
          (e.setDefaultOptions = function (t) {
            this.defaultOptions = t;
          }),
          (e.setQueryDefaults = function (t, e) {
            var n = this.queryDefaults.find(function (e) {
              return (0, r.Od)(t) === (0, r.Od)(e.queryKey);
            });
            n
              ? (n.defaultOptions = e)
              : this.queryDefaults.push({ queryKey: t, defaultOptions: e });
          }),
          (e.getQueryDefaults = function (t) {
            var e;
            return t
              ? null ==
                (e = this.queryDefaults.find(function (e) {
                  return (0, r.Cp)(t, e.queryKey);
                }))
                ? void 0
                : e.defaultOptions
              : void 0;
          }),
          (e.setMutationDefaults = function (t, e) {
            var n = this.mutationDefaults.find(function (e) {
              return (0, r.Od)(t) === (0, r.Od)(e.mutationKey);
            });
            n
              ? (n.defaultOptions = e)
              : this.mutationDefaults.push({
                  mutationKey: t,
                  defaultOptions: e,
                });
          }),
          (e.getMutationDefaults = function (t) {
            var e;
            return t
              ? null ==
                (e = this.mutationDefaults.find(function (e) {
                  return (0, r.Cp)(t, e.mutationKey);
                }))
                ? void 0
                : e.defaultOptions
              : void 0;
          }),
          (e.defaultQueryOptions = function (t) {
            if (null == t ? void 0 : t._defaulted) return t;
            var e = (0, i.A)(
              {},
              this.defaultOptions.queries,
              this.getQueryDefaults(null == t ? void 0 : t.queryKey),
              t,
              { _defaulted: !0 }
            );
            return (
              !e.queryHash &&
                e.queryKey &&
                (e.queryHash = (0, r.F$)(e.queryKey, e)),
              e
            );
          }),
          (e.defaultQueryObserverOptions = function (t) {
            return this.defaultQueryOptions(t);
          }),
          (e.defaultMutationOptions = function (t) {
            return (null == t ? void 0 : t._defaulted)
              ? t
              : (0, i.A)(
                  {},
                  this.defaultOptions.mutations,
                  this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                  t,
                  { _defaulted: !0 }
                );
          }),
          (e.clear = function () {
            this.queryCache.clear(), this.mutationCache.clear();
          }),
          t
        );
      })();
    },
    9946: (t, e, n) => {
      "use strict";
      n.d(e, { QueryClient: () => i.E });
      var i = n(9176),
        r = n(1955);
      n.o(r, "QueryClientProvider") &&
        n.d(e, {
          QueryClientProvider: function () {
            return r.QueryClientProvider;
          },
        }),
        n.o(r, "useMutation") &&
          n.d(e, {
            useMutation: function () {
              return r.useMutation;
            },
          }),
        n.o(r, "useQuery") &&
          n.d(e, {
            useQuery: function () {
              return r.useQuery;
            },
          }),
        n.o(r, "useQueryClient") &&
          n.d(e, {
            useQueryClient: function () {
              return r.useQueryClient;
            },
          });
    },
  },
]);
