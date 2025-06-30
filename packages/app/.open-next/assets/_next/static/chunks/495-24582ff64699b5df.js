"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    5495: (t, e, n) => {
      n.d(e, { MB: () => Y });
      var r,
        o = Object.defineProperty,
        s = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        c = (t, e, n) =>
          e in t
            ? o(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        f = (t, e) => {
          for (var n in e || (e = {})) a.call(e, n) && c(t, n, e[n]);
          if (l) for (var n of l(e)) u.call(e, n) && c(t, n, e[n]);
          return t;
        },
        p = (t, e) => s(t, i(e)),
        d = class extends Error {
          constructor(t, e, n) {
            super(e || t.toString(), { cause: n }),
              (this.status = t),
              (this.statusText = e),
              (this.error = n);
          }
        },
        h = async (t, e) => {
          var n, r, o, s, i, l;
          let a = e || {},
            u = {
              onRequest: [null == e ? void 0 : e.onRequest],
              onResponse: [null == e ? void 0 : e.onResponse],
              onSuccess: [null == e ? void 0 : e.onSuccess],
              onError: [null == e ? void 0 : e.onError],
              onRetry: [null == e ? void 0 : e.onRetry],
            };
          if (!e || !(null == e ? void 0 : e.plugins))
            return { url: t, options: a, hooks: u };
          for (let c of (null == e ? void 0 : e.plugins) || []) {
            if (c.init) {
              let r = await (null == (n = c.init)
                ? void 0
                : n.call(c, t.toString(), e));
              (a = r.options || a), (t = r.url);
            }
            u.onRequest.push(null == (r = c.hooks) ? void 0 : r.onRequest),
              u.onResponse.push(null == (o = c.hooks) ? void 0 : o.onResponse),
              u.onSuccess.push(null == (s = c.hooks) ? void 0 : s.onSuccess),
              u.onError.push(null == (i = c.hooks) ? void 0 : i.onError),
              u.onRetry.push(null == (l = c.hooks) ? void 0 : l.onRetry);
          }
          return { url: t, options: a, hooks: u };
        },
        y = class {
          constructor(t) {
            this.options = t;
          }
          shouldAttemptRetry(t, e) {
            return this.options.shouldRetry
              ? Promise.resolve(
                  t < this.options.attempts && this.options.shouldRetry(e)
                )
              : Promise.resolve(t < this.options.attempts);
          }
          getDelay() {
            return this.options.delay;
          }
        },
        v = class {
          constructor(t) {
            this.options = t;
          }
          shouldAttemptRetry(t, e) {
            return this.options.shouldRetry
              ? Promise.resolve(
                  t < this.options.attempts && this.options.shouldRetry(e)
                )
              : Promise.resolve(t < this.options.attempts);
          }
          getDelay(t) {
            return Math.min(
              this.options.maxDelay,
              this.options.baseDelay * 2 ** t
            );
          }
        },
        g = async (t) => {
          let e = {},
            n = async (t) => ("function" == typeof t ? await t() : t);
          if (null == t ? void 0 : t.auth) {
            if ("Bearer" === t.auth.type) {
              let r = await n(t.auth.token);
              if (!r) return e;
              e.authorization = `Bearer ${r}`;
            } else if ("Basic" === t.auth.type) {
              let r = n(t.auth.username),
                o = n(t.auth.password);
              if (!r || !o) return e;
              e.authorization = `Basic ${btoa(`${r}:${o}`)}`;
            } else if ("Custom" === t.auth.type) {
              let r = n(t.auth.value);
              if (!r) return e;
              e.authorization = `${n(t.auth.prefix)} ${r}`;
            }
          }
          return e;
        },
        m = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
      function w(t) {
        if (void 0 === t) return !1;
        let e = typeof t;
        return (
          "string" === e ||
          "number" === e ||
          "boolean" === e ||
          null === e ||
          ("object" === e &&
            (!!Array.isArray(t) ||
              (!t.buffer &&
                ((t.constructor && "Object" === t.constructor.name) ||
                  "function" == typeof t.toJSON))))
        );
      }
      function b(t) {
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      }
      function R(t) {
        return "function" == typeof t;
      }
      async function T(t) {
        let e = new Headers(null == t ? void 0 : t.headers);
        for (let [n, r] of Object.entries((await g(t)) || {})) e.set(n, r);
        if (!e.has("content-type")) {
          let n = w(null == t ? void 0 : t.body) ? "application/json" : null;
          n && e.set("content-type", n);
        }
        return e;
      }
      var O = class t extends Error {
        constructor(e, n) {
          super(n || JSON.stringify(e, null, 2)),
            (this.issues = e),
            Object.setPrototypeOf(this, t.prototype);
        }
      };
      async function S(t, e) {
        let n = await t["~standard"].validate(e);
        if (n.issues) throw new O(n.issues);
        return n.value;
      }
      var E = ["get", "post", "put", "patch", "delete"],
        P = (t) => ({
          id: "apply-schema",
          name: "Apply Schema",
          version: "1.0.0",
          async init(e, n) {
            var r, o, s, i;
            let l =
              (null ==
              (o =
                null == (r = t.plugins)
                  ? void 0
                  : r.find((t) => {
                      var n;
                      return (
                        null != (n = t.schema) &&
                        !!n.config &&
                        (e.startsWith(t.schema.config.baseURL || "") ||
                          e.startsWith(t.schema.config.prefix || ""))
                      );
                    }))
                ? void 0
                : o.schema) || t.schema;
            if (l) {
              let t = e;
              (null == (s = l.config) ? void 0 : s.prefix) &&
                t.startsWith(l.config.prefix) &&
                ((t = t.replace(l.config.prefix, "")),
                l.config.baseURL &&
                  (e = e.replace(l.config.prefix, l.config.baseURL))),
                (null == (i = l.config) ? void 0 : i.baseURL) &&
                  t.startsWith(l.config.baseURL) &&
                  (t = t.replace(l.config.baseURL, ""));
              let r = l.schema[t];
              if (r) {
                let t = p(f({}, n), { method: r.method, output: r.output });
                return (
                  (null == n ? void 0 : n.disableValidation) ||
                    (t = p(f({}, t), {
                      body: r.input
                        ? await S(r.input, null == n ? void 0 : n.body)
                        : null == n
                          ? void 0
                          : n.body,
                      params: r.params
                        ? await S(r.params, null == n ? void 0 : n.params)
                        : null == n
                          ? void 0
                          : n.params,
                      query: r.query
                        ? await S(r.query, null == n ? void 0 : n.query)
                        : null == n
                          ? void 0
                          : n.query,
                    })),
                  { url: e, options: t }
                );
              }
            }
            return { url: e, options: n };
          },
        }),
        j = (t) =>
          async function (e, n) {
            let r = p(f(f({}, t), n), {
              plugins: [
                ...((null == t ? void 0 : t.plugins) || []),
                P(t || {}),
              ],
            });
            if (null == t ? void 0 : t.catchAllError)
              try {
                return await U(e, r);
              } catch (t) {
                return {
                  data: null,
                  error: {
                    status: 500,
                    statusText: "Fetch Error",
                    message:
                      "Fetch related error. Captured by catchAllError option. See error property for more details.",
                    error: t,
                  },
                };
              }
            return await U(e, r);
          },
        U = async (t, e) => {
          var n, r, o, s, i, l, a, u;
          let { hooks: c, url: g, options: O } = await h(t, e),
            P = (function (t) {
              if (null == t ? void 0 : t.customFetchImpl)
                return t.customFetchImpl;
              if ("undefined" != typeof globalThis && R(globalThis.fetch))
                return globalThis.fetch;
              if ("undefined" != typeof window && R(window.fetch))
                return window.fetch;
              throw Error("No fetch implementation found");
            })(O),
            j = new AbortController(),
            _ = null != (n = O.signal) ? n : j.signal,
            x = (function (t, e) {
              let {
                  baseURL: n,
                  params: r,
                  query: o,
                } = e || { query: {}, params: {}, baseURL: "" },
                s = t.startsWith("http")
                  ? t.split("/").slice(0, 3).join("/")
                  : n || "";
              if (t.startsWith("@")) {
                let e = t.toString().split("@")[1].split("/")[0];
                E.includes(e) && (t = t.replace(`@${e}/`, "/"));
              }
              s.endsWith("/") || (s += "/");
              let [i, l] = t.replace(s, "").split("?"),
                a = new URLSearchParams(l);
              for (let [t, e] of Object.entries(o || {}))
                null != e && a.set(t, String(e));
              if (r)
                if (Array.isArray(r))
                  for (let [t, e] of i
                    .split("/")
                    .filter((t) => t.startsWith(":"))
                    .entries()) {
                    let n = r[t];
                    i = i.replace(e, n);
                  }
                else
                  for (let [t, e] of Object.entries(r))
                    i = i.replace(`:${t}`, String(e));
              (i = i.split("/").map(encodeURIComponent).join("/")).startsWith(
                "/"
              ) && (i = i.slice(1));
              let u = a.toString();
              return ((u = u.length > 0 ? `?${u}`.replace(/\+/g, "%20") : ""),
              s.startsWith("http"))
                ? new URL(`${i}${u}`, s)
                : `${s}${i}${u}`;
            })(g, O),
            A = (function (t) {
              if (!(null == t ? void 0 : t.body)) return null;
              let e = new Headers(null == t ? void 0 : t.headers);
              if (w(t.body) && !e.has("content-type")) {
                for (let [e, n] of Object.entries(null == t ? void 0 : t.body))
                  n instanceof Date && (t.body[e] = n.toISOString());
                return JSON.stringify(t.body);
              }
              return t.body;
            })(O),
            I = await T(O),
            $ = (function (t, e) {
              var n;
              if (null == e ? void 0 : e.method) return e.method.toUpperCase();
              if (t.startsWith("@")) {
                let r =
                  null == (n = t.split("@")[1]) ? void 0 : n.split("/")[0];
                return E.includes(r)
                  ? r.toUpperCase()
                  : (null == e ? void 0 : e.body)
                    ? "POST"
                    : "GET";
              }
              return (null == e ? void 0 : e.body) ? "POST" : "GET";
            })(g, O),
            L = p(f({}, O), {
              url: x,
              headers: I,
              body: A,
              method: $,
              signal: _,
            });
          for (let t of c.onRequest)
            if (t) {
              let e = await t(L);
              e instanceof Object && (L = e);
            }
          (("pipeTo" in L && "function" == typeof L.pipeTo) ||
            "function" ==
              typeof (null == (r = null == e ? void 0 : e.body)
                ? void 0
                : r.pipe)) &&
            !("duplex" in L) &&
            (L.duplex = "half");
          let { clearTimeout: N } = (function (t, e) {
              let n;
              return (
                !(null == t ? void 0 : t.signal) &&
                  (null == t ? void 0 : t.timeout) &&
                  (n = setTimeout(
                    () => (null == e ? void 0 : e.abort()),
                    null == t ? void 0 : t.timeout
                  )),
                {
                  abortTimeout: n,
                  clearTimeout: () => {
                    n && clearTimeout(n);
                  },
                }
              );
            })(O, j),
            k = await P(L.url, L);
          N();
          let q = { response: k, request: L };
          for (let t of c.onResponse)
            if (t) {
              let n = await t(
                p(f({}, q), {
                  response: (
                    null == (o = null == e ? void 0 : e.hookOptions)
                      ? void 0
                      : o.cloneResponse
                  )
                    ? k.clone()
                    : k,
                })
              );
              n instanceof Response
                ? (k = n)
                : n instanceof Object && (k = n.response);
            }
          if (k.ok) {
            if ("HEAD" === L.method) return { data: "", error: null };
            let t = (function (t) {
                let e = t.headers.get("content-type"),
                  n = new Set([
                    "image/svg",
                    "application/xml",
                    "application/xhtml",
                    "application/html",
                  ]);
                if (!e) return "json";
                let r = e.split(";").shift() || "";
                return m.test(r)
                  ? "json"
                  : n.has(r) || r.startsWith("text/")
                    ? "text"
                    : "blob";
              })(k),
              n = { data: "", response: k, request: L };
            if ("json" === t || "text" === t) {
              let t = await k.text(),
                e = null != (s = L.jsonParser) ? s : b;
              n.data = await e(t);
            } else n.data = await k[t]();
            for (let t of ((null == L ? void 0 : L.output) &&
              L.output &&
              !L.disableValidation &&
              (n.data = await S(L.output, n.data)),
            c.onSuccess))
              t &&
                (await t(
                  p(f({}, n), {
                    response: (
                      null == (i = null == e ? void 0 : e.hookOptions)
                        ? void 0
                        : i.cloneResponse
                    )
                      ? k.clone()
                      : k,
                  })
                ));
            return (null == e ? void 0 : e.throw)
              ? n.data
              : { data: n.data, error: null };
          }
          let C = null != (l = null == e ? void 0 : e.jsonParser) ? l : b,
            B = await k.text(),
            W = (function (t) {
              try {
                return JSON.parse(t), !0;
              } catch (t) {
                return !1;
              }
            })(B),
            D = W ? await C(B) : null,
            F = {
              response: k,
              responseText: B,
              request: L,
              error: p(f({}, D), {
                status: k.status,
                statusText: k.statusText,
              }),
            };
          for (let t of c.onError)
            t &&
              (await t(
                p(f({}, F), {
                  response: (
                    null == (a = null == e ? void 0 : e.hookOptions)
                      ? void 0
                      : a.cloneResponse
                  )
                    ? k.clone()
                    : k,
                })
              ));
          if (null == e ? void 0 : e.retry) {
            let n = (function (t) {
                if ("number" == typeof t)
                  return new y({ type: "linear", attempts: t, delay: 1e3 });
                switch (t.type) {
                  case "linear":
                    return new y(t);
                  case "exponential":
                    return new v(t);
                  default:
                    throw Error("Invalid retry strategy");
                }
              })(e.retry),
              r = null != (u = e.retryAttempt) ? u : 0;
            if (await n.shouldAttemptRetry(r, k)) {
              for (let t of c.onRetry) t && (await t(q));
              let o = n.getDelay(r);
              return (
                await new Promise((t) => setTimeout(t, o)),
                await U(t, p(f({}, e), { retryAttempt: r + 1 }))
              );
            }
          }
          if (null == e ? void 0 : e.throw)
            throw new d(k.status, k.statusText, W ? D : B);
          return {
            data: null,
            error: p(f({}, D), { status: k.status, statusText: k.statusText }),
          };
        },
        _ = n(4338);
      let x = Object.create(null),
        A = (t) =>
          globalThis.process?.env ||
          globalThis.Deno?.env.toObject() ||
          globalThis.__env__ ||
          (t ? x : globalThis),
        I = new Proxy(x, {
          get: (t, e) => A()[e] ?? x[e],
          has: (t, e) => e in A() || e in x,
          set: (t, e, n) => ((A(!0)[e] = n), !0),
          deleteProperty(t, e) {
            if (!e) return !1;
            let n = A(!0);
            return delete n[e], !0;
          },
          ownKeys: () => Object.keys(A(!0)),
        });
      "test" === ((void 0 !== _ && _.env && "production") || "") ||
        (r = I.TEST);
      class $ extends Error {
        constructor(t, e) {
          super(t),
            (this.name = "BetterAuthError"),
            (this.message = t),
            (this.cause = e),
            (this.stack = "");
        }
      }
      function L(t, e = "/api/auth") {
        return !(function (t) {
          try {
            let e = new URL(t);
            return "/" !== e.pathname;
          } catch (e) {
            throw new $(
              `Invalid base URL: ${t}. Please provide a valid base URL.`
            );
          }
        })(t)
          ? ((e = e.startsWith("/") ? e : `/${e}`),
            `${t.replace(/\/+$/, "")}${e}`)
          : t;
      }
      let N = [],
        k = 0,
        q = 0,
        C = (t) => {
          let e = [],
            n = {
              get: () => (n.lc || n.listen(() => {})(), n.value),
              lc: 0,
              listen: (t) => (
                (n.lc = e.push(t)),
                () => {
                  for (let e = k + 4; e < N.length; )
                    N[e] === t ? N.splice(e, 4) : (e += 4);
                  let r = e.indexOf(t);
                  ~r && (e.splice(r, 1), --n.lc || n.off());
                }
              ),
              notify(t, r) {
                q++;
                let o = !N.length;
                for (let o of e) N.push(o, n.value, t, r);
                if (o) {
                  for (k = 0; k < N.length; k += 4)
                    N[k](N[k + 1], N[k + 2], N[k + 3]);
                  N.length = 0;
                }
              },
              off() {},
              set(t) {
                let e = n.value;
                e !== t && ((n.value = t), n.notify(e));
              },
              subscribe(t) {
                let e = n.listen(t);
                return t(n.value), e;
              },
              value: t,
            };
          return n;
        },
        B = (t, e, n, r) => (
          (t.events = t.events || {}),
          t.events[n + 10] ||
            (t.events[n + 10] = r((e) => {
              t.events[n].reduceRight((t, e) => (e(t), t), {
                shared: {},
                ...e,
              });
            })),
          (t.events[n] = t.events[n] || []),
          t.events[n].push(e),
          () => {
            let r = t.events[n],
              o = r.indexOf(e);
            r.splice(o, 1),
              r.length ||
                (delete t.events[n],
                t.events[n + 10](),
                delete t.events[n + 10]);
          }
        ),
        W = (t, e) =>
          B(
            t,
            (n) => {
              let r = e(n);
              r && t.events[6].push(r);
            },
            5,
            (e) => {
              let n = t.listen;
              t.listen = (...r) => (
                t.lc || t.active || ((t.active = !0), e()), n(...r)
              );
              let r = t.off;
              return (
                (t.events[6] = []),
                (t.off = () => {
                  r(),
                    setTimeout(() => {
                      if (t.active && !t.lc) {
                        for (let e of ((t.active = !1), t.events[6])) e();
                        t.events[6] = [];
                      }
                    }, 1e3);
                }),
                () => {
                  (t.listen = n), (t.off = r);
                }
              );
            }
          ),
        D = "undefined" == typeof window,
        F = (t, e, n, r) => {
          let o = C({
              data: null,
              error: null,
              isPending: !0,
              isRefetching: !1,
              refetch: () => s(),
            }),
            s = () => {
              let t =
                "function" == typeof r
                  ? r({
                      data: o.get().data,
                      error: o.get().error,
                      isPending: o.get().isPending,
                    })
                  : r;
              return n(e, {
                ...t,
                async onSuccess(e) {
                  o.set({
                    data: e.data,
                    error: null,
                    isPending: !1,
                    isRefetching: !1,
                    refetch: o.value.refetch,
                  }),
                    await t?.onSuccess?.(e);
                },
                async onError(e) {
                  let { request: n } = e,
                    r =
                      "number" == typeof n.retry ? n.retry : n.retry?.attempts,
                    s = n.retryAttempt || 0;
                  (r && s < r) ||
                    (o.set({
                      error: e.error,
                      data: null,
                      isPending: !1,
                      isRefetching: !1,
                      refetch: o.value.refetch,
                    }),
                    await t?.onError?.(e));
                },
                async onRequest(e) {
                  let n = o.get();
                  o.set({
                    isPending: null === n.data,
                    data: n.data,
                    error: null,
                    isRefetching: !0,
                    refetch: o.value.refetch,
                  }),
                    await t?.onRequest?.(e);
                },
              });
            };
          t = Array.isArray(t) ? t : [t];
          let i = !1;
          for (let e of t)
            e.subscribe(() => {
              D ||
                (i
                  ? s()
                  : W(
                      o,
                      () => (
                        setTimeout(() => {
                          s();
                        }, 0),
                        (i = !0),
                        () => {
                          o.off(), e.off();
                        }
                      )
                    ));
            });
          return o;
        },
        H = {
          proto:
            /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
          constructor:
            /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
          protoShort: /"__proto__"\s*:/,
          constructorShort: /"constructor"\s*:/,
        },
        G = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
        J = {
          true: !0,
          false: !1,
          null: null,
          undefined: void 0,
          nan: Number.NaN,
          infinity: Number.POSITIVE_INFINITY,
          "-infinity": Number.NEGATIVE_INFINITY,
        },
        M =
          /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/,
        V = {
          id: "redirect",
          name: "Redirect",
          hooks: {
            onSuccess(t) {
              if (
                t.data?.url &&
                t.data?.redirect &&
                "undefined" != typeof window &&
                window.location &&
                window.location
              )
                try {
                  window.location.href = t.data.url;
                } catch {}
            },
          },
        },
        z = (t) => {
          let e = "credentials" in Request.prototype,
            n = (function (t, e, n) {
              if (t) return L(t, e);
              let r =
                I.BETTER_AUTH_URL ||
                I.NEXT_PUBLIC_BETTER_AUTH_URL ||
                I.PUBLIC_BETTER_AUTH_URL ||
                I.NUXT_PUBLIC_BETTER_AUTH_URL ||
                I.NUXT_PUBLIC_AUTH_URL ||
                ("/" !== I.BASE_URL ? I.BASE_URL : void 0);
              if (r) return L(r, e);
              let o = void 0,
                s = void 0;
              if (o && s) return L(`${s}://${o}`, e);
              if (n) {
                let t = (function (t) {
                  try {
                    return new URL(t).origin;
                  } catch (t) {
                    return null;
                  }
                })(n.url);
                if (!t)
                  throw new $(
                    "Could not get origin from request. Please provide a valid base URL."
                  );
                return L(t, e);
              }
              if ("undefined" != typeof window && window.location)
                return L(window.location.origin, e);
            })(t?.baseURL, t?.basePath),
            r =
              t?.plugins
                ?.flatMap((t) => t.fetchPlugins)
                .filter((t) => void 0 !== t) || [],
            o = j({
              baseURL: n,
              ...(e ? { credentials: "include" } : {}),
              method: "GET",
              jsonParser: (t) =>
                t
                  ? (function (t, e = { strict: !0 }) {
                      return (function (t, e = {}) {
                        let {
                          strict: n = !1,
                          warnings: r = !1,
                          reviver: o,
                          parseDates: s = !0,
                        } = e;
                        if ("string" != typeof t) return t;
                        let i = t.trim();
                        if (
                          '"' === i[0] &&
                          i.endsWith('"') &&
                          !i.slice(1, -1).includes('"')
                        )
                          return i.slice(1, -1);
                        let l = i.toLowerCase();
                        if (l.length <= 9 && l in J) return J[l];
                        if (!G.test(i)) {
                          if (n)
                            throw SyntaxError("[better-json] Invalid JSON");
                          return t;
                        }
                        if (
                          Object.entries(H).some(([t, e]) => {
                            let n = e.test(i);
                            return (
                              n &&
                                r &&
                                console.warn(
                                  `[better-json] Detected potential prototype pollution attempt using ${t} pattern`
                                ),
                              n
                            );
                          }) &&
                          n
                        )
                          throw Error(
                            "[better-json] Potential prototype pollution attempt detected"
                          );
                        try {
                          return JSON.parse(i, (t, e) => {
                            if (
                              "__proto__" === t ||
                              ("constructor" === t &&
                                e &&
                                "object" == typeof e &&
                                "prototype" in e)
                            ) {
                              r &&
                                console.warn(
                                  `[better-json] Dropping "${t}" key to prevent prototype pollution`
                                );
                              return;
                            }
                            if (s && "string" == typeof e) {
                              let t = (function (t) {
                                let e = M.exec(t);
                                if (!e) return null;
                                let [, n, r, o, s, i, l, a, u, c, f] = e,
                                  p = new Date(
                                    Date.UTC(
                                      parseInt(n, 10),
                                      parseInt(r, 10) - 1,
                                      parseInt(o, 10),
                                      parseInt(s, 10),
                                      parseInt(i, 10),
                                      parseInt(l, 10),
                                      a ? parseInt(a.padEnd(3, "0"), 10) : 0
                                    )
                                  );
                                if (u) {
                                  let t =
                                    (60 * parseInt(c, 10) + parseInt(f, 10)) *
                                    ("+" === u ? -1 : 1);
                                  p.setUTCMinutes(p.getUTCMinutes() + t);
                                }
                                return p instanceof Date && !isNaN(p.getTime())
                                  ? p
                                  : null;
                              })(e);
                              if (t) return t;
                            }
                            return o ? o(t, e) : e;
                          });
                        } catch (e) {
                          if (n) throw e;
                          return t;
                        }
                      })(t, e);
                    })(t, { strict: !1 })
                  : null,
              customFetchImpl: async (t, e) => {
                try {
                  return await fetch(t, e);
                } catch (t) {
                  return Response.error();
                }
              },
              ...t?.fetchOptions,
              plugins: t?.disableDefaultFetchPlugins
                ? [...(t?.fetchOptions?.plugins || []), ...r]
                : [V, ...(t?.fetchOptions?.plugins || []), ...r],
            }),
            { $sessionSignal: s, session: i } = (function (t) {
              let e = C(!1);
              return {
                session: F(e, "/get-session", t, { method: "GET" }),
                $sessionSignal: e,
              };
            })(o),
            l = t?.plugins || [],
            a = {},
            u = { $sessionSignal: s, session: i },
            c = {
              "/sign-out": "POST",
              "/revoke-sessions": "POST",
              "/revoke-other-sessions": "POST",
              "/delete-user": "POST",
            },
            f = [
              {
                signal: "$sessionSignal",
                matcher: (t) =>
                  "/sign-out" === t ||
                  "/update-user" === t ||
                  t.startsWith("/sign-in") ||
                  t.startsWith("/sign-up") ||
                  "/delete-user" === t ||
                  "/verify-email" === t,
              },
            ];
          for (let t of l)
            t.getAtoms && Object.assign(u, t.getAtoms?.(o)),
              t.pathMethods && Object.assign(c, t.pathMethods),
              t.atomListeners && f.push(...t.atomListeners);
          let p = {
            notify: (t) => {
              u[t].set(!u[t].get());
            },
            listen: (t, e) => {
              u[t].subscribe(e);
            },
            atoms: u,
          };
          for (let e of l)
            e.getActions && Object.assign(a, e.getActions?.(o, p, t));
          return {
            pluginsActions: a,
            pluginsAtoms: u,
            pluginPathMethods: c,
            atomListeners: f,
            $fetch: o,
            $store: p,
          };
        };
      var X = n(7620);
      function Y(t) {
        var e, n;
        let {
            pluginPathMethods: r,
            pluginsActions: o,
            pluginsAtoms: s,
            $fetch: i,
            $store: l,
            atomListeners: a,
          } = z(t),
          u = {};
        for (let [t, e] of Object.entries(s)) {
          u[`use${(n = t).charAt(0).toUpperCase() + n.slice(1)}`] = () =>
            (function (t, e = {}) {
              let n = (0, X.useRef)(t.get()),
                { keys: r, deps: o = [t, r] } = e,
                s = (0, X.useCallback)((e) => {
                  let o = (t) => {
                    n.current !== t && ((n.current = t), e());
                  };
                  return (o(t.value), r?.length)
                    ? (function (t, e, n) {
                        let r = new Set(e).add(void 0);
                        return t.listen((t, e, o) => {
                          r.has(o) && n(t, e, o);
                        });
                      })(t, r, o)
                    : t.listen(o);
                }, o),
                i = () => n.current;
              return (0, X.useSyncExternalStore)(s, i, i);
            })(e);
        }
        return (
          (e = { ...o, ...u, $fetch: i, $store: l }),
          (function t(n = []) {
            return new Proxy(function () {}, {
              get(r, o) {
                let s = [...n, o],
                  i = e;
                for (let t of s)
                  if (i && "object" == typeof i && t in i) i = i[t];
                  else {
                    i = void 0;
                    break;
                  }
                return "function" == typeof i ? i : t(s);
              },
              apply: async (t, e, o) => {
                let l =
                    "/" +
                    n
                      .map((t) =>
                        t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
                      )
                      .join("/"),
                  u = o[0] || {},
                  c = o[1] || {},
                  { query: f, fetchOptions: p, ...d } = u,
                  h = { ...c, ...p },
                  y = (function (t, e, n) {
                    let r = e[t],
                      { fetchOptions: o, query: s, ...i } = n || {};
                    return (
                      r ||
                      (o?.method
                        ? o.method
                        : i && Object.keys(i).length > 0
                          ? "POST"
                          : "GET")
                    );
                  })(l, r, u);
                return await i(l, {
                  ...h,
                  body: "GET" === y ? void 0 : { ...d, ...(h?.body || {}) },
                  query: f || h?.query,
                  method: y,
                  async onSuccess(t) {
                    await h?.onSuccess?.(t);
                    let e = a?.find((t) => t.matcher(l));
                    if (!e) return;
                    let n = s[e.signal];
                    if (!n) return;
                    let r = n.get();
                    setTimeout(() => {
                      n.set(!r);
                    }, 10);
                  },
                });
              },
            });
          })()
        );
      }
    },
  },
]);
