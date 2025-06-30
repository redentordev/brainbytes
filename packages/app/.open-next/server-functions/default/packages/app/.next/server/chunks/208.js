"use strict";
(exports.id = 208),
  (exports.ids = [208]),
  (exports.modules = {
    44989: (e, t, r) => {
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
        var r = o(t);
        if (r && r.has(e)) return r.get(e);
        var n = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(n, s, i)
              : (n[s] = e[s]);
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
        s = "function" == typeof n.cache ? n.cache : (e) => e,
        i = console.warn;
      function c(e) {
        return function (...t) {
          i(e(...t));
        };
      }
      s((e) => {
        try {
          i(a.current);
        } finally {
          a.current = null;
        }
      });
    },
    52292: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          MutableRequestCookiesAdapter: function () {
            return f;
          },
          ReadonlyRequestCookiesError: function () {
            return i;
          },
          RequestCookiesAdapter: function () {
            return c;
          },
          appendMutableCookies: function () {
            return l;
          },
          areCookiesMutableInCurrentPhase: function () {
            return p;
          },
          getModifiedCookieValues: function () {
            return d;
          },
          responseCookiesToRequestCookies: function () {
            return y;
          },
          wrapWithMutableAccessCheck: function () {
            return h;
          },
        });
      let n = r(10037),
        o = r(79214),
        a = r(29294),
        s = r(63033);
      class i extends Error {
        constructor() {
          super(
            "Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options"
          );
        }
        static callable() {
          throw new i();
        }
      }
      class c {
        static seal(e) {
          return new Proxy(e, {
            get(e, t, r) {
              switch (t) {
                case "clear":
                case "delete":
                case "set":
                  return i.callable;
                default:
                  return o.ReflectAdapter.get(e, t, r);
              }
            },
          });
        }
      }
      let u = Symbol.for("next.mutated.cookies");
      function d(e) {
        let t = e[u];
        return t && Array.isArray(t) && 0 !== t.length ? t : [];
      }
      function l(e, t) {
        let r = d(t);
        if (0 === r.length) return !1;
        let o = new n.ResponseCookies(e),
          a = o.getAll();
        for (let e of r) o.set(e);
        for (let e of a) o.set(e);
        return !0;
      }
      class f {
        static wrap(e, t) {
          let r = new n.ResponseCookies(new Headers());
          for (let t of e.getAll()) r.set(t);
          let s = [],
            i = new Set(),
            c = () => {
              let e = a.workAsyncStorage.getStore();
              if (
                (e && (e.pathWasRevalidated = !0),
                (s = r.getAll().filter((e) => i.has(e.name))),
                t)
              ) {
                let e = [];
                for (let t of s) {
                  let r = new n.ResponseCookies(new Headers());
                  r.set(t), e.push(r.toString());
                }
                t(e);
              }
            },
            d = new Proxy(r, {
              get(e, t, r) {
                switch (t) {
                  case u:
                    return s;
                  case "delete":
                    return function (...t) {
                      i.add("string" == typeof t[0] ? t[0] : t[0].name);
                      try {
                        return e.delete(...t), d;
                      } finally {
                        c();
                      }
                    };
                  case "set":
                    return function (...t) {
                      i.add("string" == typeof t[0] ? t[0] : t[0].name);
                      try {
                        return e.set(...t), d;
                      } finally {
                        c();
                      }
                    };
                  default:
                    return o.ReflectAdapter.get(e, t, r);
                }
              },
            });
          return d;
        }
      }
      function h(e) {
        let t = new Proxy(e, {
          get(e, r, n) {
            switch (r) {
              case "delete":
                return function (...r) {
                  return b("cookies().delete"), e.delete(...r), t;
                };
              case "set":
                return function (...r) {
                  return b("cookies().set"), e.set(...r), t;
                };
              default:
                return o.ReflectAdapter.get(e, r, n);
            }
          },
        });
        return t;
      }
      function p(e) {
        return "action" === e.phase;
      }
      function b(e) {
        if (!p((0, s.getExpectedRequestStore)(e))) throw new i();
      }
      function y(e) {
        let t = new n.RequestCookies(new Headers());
        for (let r of e.getAll()) t.set(r);
        return t;
      }
    },
    57825: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          HeadersAdapter: function () {
            return a;
          },
          ReadonlyHeadersError: function () {
            return o;
          },
        });
      let n = r(79214);
      class o extends Error {
        constructor() {
          super(
            "Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers"
          );
        }
        static callable() {
          throw new o();
        }
      }
      class a extends Headers {
        constructor(e) {
          super(),
            (this.headers = new Proxy(e, {
              get(t, r, o) {
                if ("symbol" == typeof r) return n.ReflectAdapter.get(t, r, o);
                let a = r.toLowerCase(),
                  s = Object.keys(e).find((e) => e.toLowerCase() === a);
                if (void 0 !== s) return n.ReflectAdapter.get(t, s, o);
              },
              set(t, r, o, a) {
                if ("symbol" == typeof r)
                  return n.ReflectAdapter.set(t, r, o, a);
                let s = r.toLowerCase(),
                  i = Object.keys(e).find((e) => e.toLowerCase() === s);
                return n.ReflectAdapter.set(t, i ?? r, o, a);
              },
              has(t, r) {
                if ("symbol" == typeof r) return n.ReflectAdapter.has(t, r);
                let o = r.toLowerCase(),
                  a = Object.keys(e).find((e) => e.toLowerCase() === o);
                return void 0 !== a && n.ReflectAdapter.has(t, a);
              },
              deleteProperty(t, r) {
                if ("symbol" == typeof r)
                  return n.ReflectAdapter.deleteProperty(t, r);
                let o = r.toLowerCase(),
                  a = Object.keys(e).find((e) => e.toLowerCase() === o);
                return void 0 === a || n.ReflectAdapter.deleteProperty(t, a);
              },
            }));
        }
        static seal(e) {
          return new Proxy(e, {
            get(e, t, r) {
              switch (t) {
                case "append":
                case "delete":
                case "set":
                  return o.callable;
                default:
                  return n.ReflectAdapter.get(e, t, r);
              }
            },
          });
        }
        merge(e) {
          return Array.isArray(e) ? e.join(", ") : e;
        }
        static from(e) {
          return e instanceof Headers ? e : new a(e);
        }
        append(e, t) {
          let r = this.headers[e];
          "string" == typeof r
            ? (this.headers[e] = [r, t])
            : Array.isArray(r)
              ? r.push(t)
              : (this.headers[e] = t);
        }
        delete(e) {
          delete this.headers[e];
        }
        get(e) {
          let t = this.headers[e];
          return void 0 !== t ? this.merge(t) : null;
        }
        has(e) {
          return void 0 !== this.headers[e];
        }
        set(e, t) {
          this.headers[e] = t;
        }
        forEach(e, t) {
          for (let [r, n] of this.entries()) e.call(t, n, r, this);
        }
        *entries() {
          for (let e of Object.keys(this.headers)) {
            let t = e.toLowerCase(),
              r = this.get(t);
            yield [t, r];
          }
        }
        *keys() {
          for (let e of Object.keys(this.headers)) {
            let t = e.toLowerCase();
            yield t;
          }
        }
        *values() {
          for (let e of Object.keys(this.headers)) {
            let t = this.get(e);
            yield t;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
    },
    65208: (e, t, r) => {
      r.d(t, { b3: () => o.b, cookies: () => n.U });
      var n = r(91976),
        o = r(91753);
      r(80482);
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
    80482: (e, t, r) => {
      let n = r(63033),
        o = r(29294),
        a = r(94924),
        s = r(44989),
        i = r(10960),
        c = r(8194);
      function u() {
        let e = o.workAsyncStorage.getStore(),
          t = n.workUnitAsyncStorage.getStore();
        switch (
          ((!e || !t) && (0, n.throwForMissingRequestStore)("draftMode"),
          t.type)
        ) {
          case "request":
            return d(t.draftMode, e);
          case "cache":
          case "unstable-cache":
            let r = (0, n.getDraftModeProviderForCacheScope)(e, t);
            if (r) return d(r, e);
          case "prerender":
          case "prerender-ppr":
          case "prerender-legacy":
            return f(null);
          default:
            return t;
        }
      }
      function d(e, t) {
        let r,
          n = l.get(u);
        return n || ((r = f(e)), l.set(e, r), r);
      }
      let l = new WeakMap();
      function f(e) {
        let t = new h(e),
          r = Promise.resolve(t);
        return (
          Object.defineProperty(r, "isEnabled", {
            get: () => t.isEnabled,
            set(e) {
              Object.defineProperty(r, "isEnabled", {
                value: e,
                writable: !0,
                enumerable: !0,
              });
            },
            enumerable: !0,
            configurable: !0,
          }),
          (r.enable = t.enable.bind(t)),
          (r.disable = t.disable.bind(t)),
          r
        );
      }
      class h {
        constructor(e) {
          this._provider = e;
        }
        get isEnabled() {
          return null !== this._provider && this._provider.isEnabled;
        }
        enable() {
          b("draftMode().enable()"),
            null !== this._provider && this._provider.enable();
        }
        disable() {
          b("draftMode().disable()"),
            null !== this._provider && this._provider.disable();
        }
      }
      let p = (0, s.createDedupedByCallsiteServerErrorLoggerDev)(
        function (e, t) {
          let r = e ? `Route "${e}" ` : "This route ";
          return Object.defineProperty(
            Error(
              `${r}used ${t}. \`draftMode()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E377", enumerable: !1, configurable: !0 }
          );
        }
      );
      function b(e) {
        let t = o.workAsyncStorage.getStore(),
          r = n.workUnitAsyncStorage.getStore();
        if (t) {
          if (r) {
            if ("cache" === r.type)
              throw Object.defineProperty(
                Error(
                  `Route ${t.route} used "${e}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E246", enumerable: !1, configurable: !0 }
              );
            else if ("unstable-cache" === r.type)
              throw Object.defineProperty(
                Error(
                  `Route ${t.route} used "${e}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E259", enumerable: !1, configurable: !0 }
              );
            else if ("after" === r.phase)
              throw Object.defineProperty(
                Error(
                  `Route ${t.route} used "${e}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E348", enumerable: !1, configurable: !0 }
              );
          }
          if (t.dynamicShouldError)
            throw Object.defineProperty(
              new i.StaticGenBailoutError(
                `Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E553", enumerable: !1, configurable: !0 }
            );
          if (r) {
            if ("prerender" === r.type) {
              let n = Object.defineProperty(
                Error(
                  `Route ${t.route} used ${e} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E126", enumerable: !1, configurable: !0 }
              );
              (0, a.abortAndThrowOnSynchronousRequestDataAccess)(
                t.route,
                e,
                n,
                r
              );
            } else if ("prerender-ppr" === r.type)
              (0, a.postponeWithTracking)(t.route, e, r.dynamicTracking);
            else if ("prerender-legacy" === r.type) {
              r.revalidate = 0;
              let n = Object.defineProperty(
                new c.DynamicServerError(
                  `Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E558", enumerable: !1, configurable: !0 }
              );
              throw (
                ((t.dynamicUsageDescription = e),
                (t.dynamicUsageStack = n.stack),
                n)
              );
            }
          }
        }
      }
    },
    83374: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isRequestAPICallableInsideAfter: function () {
            return c;
          },
          throwForSearchParamsAccessInUseCache: function () {
            return i;
          },
          throwWithStaticGenerationBailoutError: function () {
            return a;
          },
          throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
            return s;
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
      function s(e, t) {
        throw Object.defineProperty(
          new n.StaticGenBailoutError(
            `Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E543", enumerable: !1, configurable: !0 }
        );
      }
      function i(e) {
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
        let e = o.afterTaskAsyncStorage.getStore();
        return (null == e ? void 0 : e.rootTaskSpawnPhase) === "action";
      }
    },
    91753: (e, t, r) => {
      Object.defineProperty(t, "b", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
      let n = r(57825),
        o = r(29294),
        a = r(63033),
        s = r(94924),
        i = r(10960),
        c = r(46049),
        u = r(44989),
        d = (r(99260), r(83374));
      function l() {
        let e = o.workAsyncStorage.getStore(),
          t = a.workUnitAsyncStorage.getStore();
        if (e) {
          if (
            t &&
            "after" === t.phase &&
            !(0, d.isRequestAPICallableInsideAfter)()
          )
            throw Object.defineProperty(
              Error(
                `Route ${e.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E367", enumerable: !1, configurable: !0 }
            );
          if (e.forceStatic) return h(n.HeadersAdapter.seal(new Headers({})));
          if (t) {
            if ("cache" === t.type)
              throw Object.defineProperty(
                Error(
                  `Route ${e.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E304", enumerable: !1, configurable: !0 }
              );
            else if ("unstable-cache" === t.type)
              throw Object.defineProperty(
                Error(
                  `Route ${e.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E127", enumerable: !1, configurable: !0 }
              );
          }
          if (e.dynamicShouldError)
            throw Object.defineProperty(
              new i.StaticGenBailoutError(
                `Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E525", enumerable: !1, configurable: !0 }
            );
          if (t)
            if ("prerender" === t.type) {
              var r = e.route,
                u = t;
              let n = f.get(u);
              if (n) return n;
              let o = (0, c.makeHangingPromise)(u.renderSignal, "`headers()`");
              return (
                f.set(u, o),
                Object.defineProperties(o, {
                  append: {
                    value: function () {
                      let e = `\`headers().append(${p(arguments[0])}, ...)\``,
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  delete: {
                    value: function () {
                      let e = `\`headers().delete(${p(arguments[0])})\``,
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  get: {
                    value: function () {
                      let e = `\`headers().get(${p(arguments[0])})\``,
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  has: {
                    value: function () {
                      let e = `\`headers().has(${p(arguments[0])})\``,
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  set: {
                    value: function () {
                      let e = `\`headers().set(${p(arguments[0])}, ...)\``,
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  getSetCookie: {
                    value: function () {
                      let e = "`headers().getSetCookie()`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  forEach: {
                    value: function () {
                      let e = "`headers().forEach(...)`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  keys: {
                    value: function () {
                      let e = "`headers().keys()`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  values: {
                    value: function () {
                      let e = "`headers().values()`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  entries: {
                    value: function () {
                      let e = "`headers().entries()`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                  [Symbol.iterator]: {
                    value: function () {
                      let e = "`headers()[Symbol.iterator]()`",
                        t = y(r, e);
                      (0, s.abortAndThrowOnSynchronousRequestDataAccess)(
                        r,
                        e,
                        t,
                        u
                      );
                    },
                  },
                }),
                o
              );
            } else
              "prerender-ppr" === t.type
                ? (0, s.postponeWithTracking)(
                    e.route,
                    "headers",
                    t.dynamicTracking
                  )
                : "prerender-legacy" === t.type &&
                  (0, s.throwToInterruptStaticGeneration)("headers", e, t);
          (0, s.trackDynamicDataInDynamicRender)(e, t);
        }
        return h((0, a.getExpectedRequestStore)("headers").headers);
      }
      let f = new WeakMap();
      function h(e) {
        let t = f.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return (
          f.set(e, r),
          Object.defineProperties(r, {
            append: { value: e.append.bind(e) },
            delete: { value: e.delete.bind(e) },
            get: { value: e.get.bind(e) },
            has: { value: e.has.bind(e) },
            set: { value: e.set.bind(e) },
            getSetCookie: { value: e.getSetCookie.bind(e) },
            forEach: { value: e.forEach.bind(e) },
            keys: { value: e.keys.bind(e) },
            values: { value: e.values.bind(e) },
            entries: { value: e.entries.bind(e) },
            [Symbol.iterator]: { value: e[Symbol.iterator].bind(e) },
          }),
          r
        );
      }
      function p(e) {
        return "string" == typeof e ? `'${e}'` : "...";
      }
      let b = (0, u.createDedupedByCallsiteServerErrorLoggerDev)(y);
      function y(e, t) {
        let r = e ? `Route "${e}" ` : "This route ";
        return Object.defineProperty(
          Error(
            `${r}used ${t}. \`headers()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E277", enumerable: !1, configurable: !0 }
        );
      }
    },
    91976: (e, t, r) => {
      Object.defineProperty(t, "U", {
        enumerable: !0,
        get: function () {
          return f;
        },
      });
      let n = r(52292),
        o = r(10037),
        a = r(29294),
        s = r(63033),
        i = r(94924),
        c = r(10960),
        u = r(46049),
        d = r(44989),
        l = (r(99260), r(83374));
      function f() {
        let e = "cookies",
          t = a.workAsyncStorage.getStore(),
          r = s.workUnitAsyncStorage.getStore();
        if (t) {
          if (
            r &&
            "after" === r.phase &&
            !(0, l.isRequestAPICallableInsideAfter)()
          )
            throw Object.defineProperty(
              Error(
                `Route ${t.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E88", enumerable: !1, configurable: !0 }
            );
          if (t.forceStatic)
            return p(
              n.RequestCookiesAdapter.seal(
                new o.RequestCookies(new Headers({}))
              )
            );
          if (r) {
            if ("cache" === r.type)
              throw Object.defineProperty(
                Error(
                  `Route ${t.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E398", enumerable: !1, configurable: !0 }
              );
            else if ("unstable-cache" === r.type)
              throw Object.defineProperty(
                Error(
                  `Route ${t.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E157", enumerable: !1, configurable: !0 }
              );
          }
          if (t.dynamicShouldError)
            throw Object.defineProperty(
              new c.StaticGenBailoutError(
                `Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
              ),
              "__NEXT_ERROR_CODE",
              { value: "E549", enumerable: !1, configurable: !0 }
            );
          if (r)
            if ("prerender" === r.type) {
              var d = t.route,
                f = r;
              let e = h.get(f);
              if (e) return e;
              let n = (0, u.makeHangingPromise)(f.renderSignal, "`cookies()`");
              return (
                h.set(f, n),
                Object.defineProperties(n, {
                  [Symbol.iterator]: {
                    value: function () {
                      let e = "`cookies()[Symbol.iterator]()`",
                        t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  size: {
                    get() {
                      let e = "`cookies().size`",
                        t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  get: {
                    value: function () {
                      let e;
                      e =
                        0 == arguments.length
                          ? "`cookies().get()`"
                          : `\`cookies().get(${b(arguments[0])})\``;
                      let t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  getAll: {
                    value: function () {
                      let e;
                      e =
                        0 == arguments.length
                          ? "`cookies().getAll()`"
                          : `\`cookies().getAll(${b(arguments[0])})\``;
                      let t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  has: {
                    value: function () {
                      let e;
                      e =
                        0 == arguments.length
                          ? "`cookies().has()`"
                          : `\`cookies().has(${b(arguments[0])})\``;
                      let t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  set: {
                    value: function () {
                      let e;
                      if (0 == arguments.length) e = "`cookies().set()`";
                      else {
                        let t = arguments[0];
                        e = t
                          ? `\`cookies().set(${b(t)}, ...)\``
                          : "`cookies().set(...)`";
                      }
                      let t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  delete: {
                    value: function () {
                      let e;
                      e =
                        0 == arguments.length
                          ? "`cookies().delete()`"
                          : 1 == arguments.length
                            ? `\`cookies().delete(${b(arguments[0])})\``
                            : `\`cookies().delete(${b(arguments[0])}, ...)\``;
                      let t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  clear: {
                    value: function () {
                      let e = "`cookies().clear()`",
                        t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                  toString: {
                    value: function () {
                      let e = "`cookies().toString()`",
                        t = g(d, e);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        d,
                        e,
                        t,
                        f
                      );
                    },
                  },
                }),
                n
              );
            } else
              "prerender-ppr" === r.type
                ? (0, i.postponeWithTracking)(t.route, e, r.dynamicTracking)
                : "prerender-legacy" === r.type &&
                  (0, i.throwToInterruptStaticGeneration)(e, t, r);
          (0, i.trackDynamicDataInDynamicRender)(t, r);
        }
        let y = (0, s.getExpectedRequestStore)(e);
        return p(
          (0, n.areCookiesMutableInCurrentPhase)(y)
            ? y.userspaceMutableCookies
            : y.cookies
        );
      }
      let h = new WeakMap();
      function p(e) {
        let t = h.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return (
          h.set(e, r),
          Object.defineProperties(r, {
            [Symbol.iterator]: {
              value: e[Symbol.iterator]
                ? e[Symbol.iterator].bind(e)
                : m.bind(e),
            },
            size: { get: () => e.size },
            get: { value: e.get.bind(e) },
            getAll: { value: e.getAll.bind(e) },
            has: { value: e.has.bind(e) },
            set: { value: e.set.bind(e) },
            delete: { value: e.delete.bind(e) },
            clear: {
              value:
                "function" == typeof e.clear ? e.clear.bind(e) : R.bind(e, r),
            },
            toString: { value: e.toString.bind(e) },
          }),
          r
        );
      }
      function b(e) {
        return "object" == typeof e && null !== e && "string" == typeof e.name
          ? `'${e.name}'`
          : "string" == typeof e
            ? `'${e}'`
            : "...";
      }
      let y = (0, d.createDedupedByCallsiteServerErrorLoggerDev)(g);
      function g(e, t) {
        let r = e ? `Route "${e}" ` : "This route ";
        return Object.defineProperty(
          Error(
            `${r}used ${t}. \`cookies()\` should be awaited before using its value. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E223", enumerable: !1, configurable: !0 }
        );
      }
      function m() {
        return this.getAll()
          .map((e) => [e.name, e])
          .values();
      }
      function R(e) {
        for (let e of this.getAll()) this.delete(e.name);
        return e;
      }
    },
  });
