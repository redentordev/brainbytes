(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [356],
  {
    10: (e, t, r) => {
      "use strict";
      let n, o;
      r.d(t, { Y_: () => tf });
      var a,
        i,
        s,
        l,
        u = r(7620),
        c = "vercel.ai.error",
        f = Symbol.for(c),
        h = class e extends Error {
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
      a = f;
      var p = h,
        d = Symbol.for("vercel.ai.error.AI_APICallError"),
        g = Symbol.for("vercel.ai.error.AI_EmptyResponseBodyError");
      function y(e) {
        return null == e
          ? "unknown error"
          : "string" == typeof e
            ? e
            : e instanceof Error
              ? e.message
              : JSON.stringify(e);
      }
      var m = "AI_InvalidArgumentError",
        v = `vercel.ai.error.${m}`,
        _ = Symbol.for(v),
        b = class extends p {
          constructor({ message: e, cause: t, argument: r }) {
            super({ name: m, message: e, cause: t }),
              (this[i] = !0),
              (this.argument = r);
          }
          static isInstance(e) {
            return p.hasMarker(e, v);
          }
        };
      i = _;
      var E = Symbol.for("vercel.ai.error.AI_InvalidPromptError"),
        w = Symbol.for("vercel.ai.error.AI_InvalidResponseDataError"),
        S = "AI_JSONParseError",
        I = `vercel.ai.error.${S}`,
        R = Symbol.for(I),
        T = class extends p {
          constructor({ text: e, cause: t }) {
            super({
              name: S,
              message: `JSON parsing failed: Text: ${e}.
Error message: ${y(t)}`,
              cause: t,
            }),
              (this[s] = !0),
              (this.text = e);
          }
          static isInstance(e) {
            return p.hasMarker(e, I);
          }
        };
      s = R;
      var A = Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"),
        x = Symbol.for("vercel.ai.error.AI_LoadSettingError"),
        C = Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"),
        k = Symbol.for("vercel.ai.error.AI_NoSuchModelError"),
        O = Symbol.for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError"),
        N = "AI_TypeValidationError",
        P = `vercel.ai.error.${N}`,
        j = Symbol.for(P),
        D = class e extends p {
          constructor({ value: e, cause: t }) {
            super({
              name: N,
              message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${y(t)}`,
              cause: t,
            }),
              (this[l] = !0),
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
      l = j;
      var L = Symbol.for("vercel.ai.error.AI_UnsupportedFunctionalityError");
      function F(e) {
        return (
          null === e ||
          "string" == typeof e ||
          "number" == typeof e ||
          "boolean" == typeof e ||
          (Array.isArray(e)
            ? e.every(F)
            : "object" == typeof e &&
              Object.entries(e).every(([e, t]) => "string" == typeof e && F(t)))
        );
      }
      let B =
        (e, t = 21) =>
        (r = t) => {
          let n = "",
            o = 0 | r;
          for (; o--; ) n += e[(Math.random() * e.length) | 0];
          return n;
        };
      var U = r(4585);
      r(4338);
      var M = (({
        prefix: e,
        size: t = 16,
        alphabet:
          r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        separator: n = "-",
      } = {}) => {
        let o = B(r, t);
        if (null == e) return o;
        if (r.includes(n))
          throw new b({
            argument: "separator",
            message: `The separator "${n}" must not be part of the alphabet "${r}".`,
          });
        return (t) => `${e}${n}${o(t)}`;
      })();
      function Y(e) {
        return (
          e instanceof Error &&
          ("AbortError" === e.name || "TimeoutError" === e.name)
        );
      }
      var z = Symbol.for("vercel.ai.validator");
      function V({ text: e, schema: t }) {
        try {
          let r = U.parse(e);
          if (null == t) return { success: !0, value: r, rawValue: r };
          let n = (function ({ value: e, schema: t }) {
            var r;
            let n =
              "object" == typeof t &&
              null !== t &&
              z in t &&
              !0 === t[z] &&
              "validate" in t
                ? t
                : ((r = t),
                  {
                    [z]: !0,
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
                error: D.wrap({ value: e, cause: t.error }),
              };
            } catch (t) {
              return { success: !1, error: D.wrap({ value: e, cause: t }) };
            }
          })({ value: r, schema: t });
          return n.success ? { ...n, rawValue: r } : n;
        } catch (t) {
          return {
            success: !1,
            error: T.isInstance(t) ? t : new T({ text: e, cause: t }),
          };
        }
      }
      var J = () => globalThis.fetch,
        { btoa: $, atob: q } = globalThis;
      Symbol("Let zodToJsonSchema decide on which parser to use");
      let W = new Set(
        "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
      );
      function K(e, t) {
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
          s = !1;
        for (let e = 0; e < n.length; e++) {
          if (a) {
            (o += n[e]), (a = !1);
            continue;
          }
          if (r.i) {
            if (i) {
              if (n[e].match(/[a-z]/)) {
                s
                  ? ((o += n[e]),
                    (o += `${n[e - 2]}-${n[e]}`.toUpperCase()),
                    (s = !1))
                  : "-" === n[e + 1] && n[e + 2]?.match(/[a-z]/)
                    ? ((o += n[e]), (s = !0))
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
      let G = (e, t) => {
        let r = 0;
        for (; r < e.length && r < t.length && e[r] === t[r]; r++);
        return [(e.length - r).toString(), ...t.slice(r)].join("/");
      };
      var H = {
          code: "0",
          name: "text",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"text" parts expect a string value.');
            return { type: "text", value: e };
          },
        },
        Z = {
          code: "3",
          name: "error",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"error" parts expect a string value.');
            return { type: "error", value: e };
          },
        },
        X = {
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
        et = [H, Z, X, Q, ee],
        er = {
          [H.code]: H,
          [Z.code]: Z,
          [X.code]: X,
          [Q.code]: Q,
          [ee.code]: ee,
        };
      H.name,
        H.code,
        Z.name,
        Z.code,
        X.name,
        X.code,
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
        es = (e) => {
          let t = e.indexOf(":");
          if (-1 === t)
            throw Error("Failed to parse stream string. No separator found.");
          let r = e.slice(0, t);
          if (!ei.includes(r))
            throw Error(`Failed to parse stream string. Invalid code ${r}.`);
          let n = JSON.parse(e.slice(t + 1));
          return ea[r].parse(n);
        };
      async function el({
        stream: e,
        onTextPart: t,
        onReasoningPart: r,
        onReasoningSignaturePart: n,
        onRedactedReasoningPart: o,
        onSourcePart: a,
        onFilePart: i,
        onDataPart: s,
        onErrorPart: l,
        onToolCallStreamingStartPart: u,
        onToolCallDeltaPart: c,
        onToolCallPart: f,
        onToolResultPart: h,
        onMessageAnnotationsPart: p,
        onFinishMessagePart: d,
        onFinishStepPart: g,
        onStartStepPart: y,
      }) {
        let m = e.getReader(),
          v = new TextDecoder(),
          _ = [],
          b = 0;
        for (;;) {
          let { value: e } = await m.read();
          if (e && (_.push(e), (b += e.length), 10 !== e[e.length - 1]))
            continue;
          if (0 === _.length) break;
          let E = (function (e, t) {
            let r = new Uint8Array(t),
              n = 0;
            for (let t of e) r.set(t, n), (n += t.length);
            return (e.length = 0), r;
          })(_, b);
          for (let { type: e, value: m } of ((b = 0),
          v
            .decode(E, { stream: !0 })
            .split("\n")
            .filter((e) => "" !== e)
            .map(es)))
            switch (e) {
              case "text":
                await (null == t ? void 0 : t(m));
                break;
              case "reasoning":
                await (null == r ? void 0 : r(m));
                break;
              case "reasoning_signature":
                await (null == n ? void 0 : n(m));
                break;
              case "redacted_reasoning":
                await (null == o ? void 0 : o(m));
                break;
              case "file":
                await (null == i ? void 0 : i(m));
                break;
              case "source":
                await (null == a ? void 0 : a(m));
                break;
              case "data":
                await (null == s ? void 0 : s(m));
                break;
              case "error":
                await (null == l ? void 0 : l(m));
                break;
              case "message_annotations":
                await (null == p ? void 0 : p(m));
                break;
              case "tool_call_streaming_start":
                await (null == u ? void 0 : u(m));
                break;
              case "tool_call_delta":
                await (null == c ? void 0 : c(m));
                break;
              case "tool_call":
                await (null == f ? void 0 : f(m));
                break;
              case "tool_result":
                await (null == h ? void 0 : h(m));
                break;
              case "finish_message":
                await (null == d ? void 0 : d(m));
                break;
              case "finish_step":
                await (null == g ? void 0 : g(m));
                break;
              case "start_step":
                await (null == y ? void 0 : y(m));
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
        generateId: o = M,
        getCurrentDate: a = () => new Date(),
        lastMessage: i,
      }) {
        var s, l;
        let u,
          c,
          f,
          h = (null == i ? void 0 : i.role) === "assistant",
          p = h
            ? 1 +
              (null !=
              (l =
                null == (s = i.toolInvocations)
                  ? void 0
                  : s.reduce((e, t) => {
                      var r;
                      return Math.max(e, null != (r = t.step) ? r : 0);
                    }, 0))
                ? l
                : 0)
            : 0,
          d = h
            ? structuredClone(i)
            : {
                id: o(),
                createdAt: a(),
                role: "assistant",
                content: "",
                parts: [],
              };
        function g(e, t) {
          let r = d.parts.find(
            (t) =>
              "tool-invocation" === t.type && t.toolInvocation.toolCallId === e
          );
          null != r
            ? (r.toolInvocation = t)
            : d.parts.push({ type: "tool-invocation", toolInvocation: t });
        }
        let y = [],
          m = h ? (null == i ? void 0 : i.annotations) : void 0,
          v = {},
          _ = { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
          b = "unknown";
        function E() {
          let e = [...y];
          (null == m ? void 0 : m.length) && (d.annotations = m),
            t({
              message: { ...structuredClone(d), revisionId: o() },
              data: e,
              replaceLastMessage: h,
            });
        }
        await el({
          stream: e,
          onTextPart(e) {
            null == u
              ? ((u = { type: "text", text: e }), d.parts.push(u))
              : (u.text += e),
              (d.content += e),
              E();
          },
          onReasoningPart(e) {
            var t;
            null == f
              ? ((f = { type: "text", text: e }),
                null != c && c.details.push(f))
              : (f.text += e),
              null == c
                ? ((c = { type: "reasoning", reasoning: e, details: [f] }),
                  d.parts.push(c))
                : (c.reasoning += e),
              (d.reasoning = (null != (t = d.reasoning) ? t : "") + e),
              E();
          },
          onReasoningSignaturePart(e) {
            null != f && (f.signature = e.signature);
          },
          onRedactedReasoningPart(e) {
            null == c &&
              ((c = { type: "reasoning", reasoning: "", details: [] }),
              d.parts.push(c)),
              c.details.push({ type: "redacted", data: e.data }),
              (f = void 0),
              E();
          },
          onFilePart(e) {
            d.parts.push({ type: "file", mimeType: e.mimeType, data: e.data }),
              E();
          },
          onSourcePart(e) {
            d.parts.push({ type: "source", source: e }), E();
          },
          onToolCallStreamingStartPart(e) {
            null == d.toolInvocations && (d.toolInvocations = []),
              (v[e.toolCallId] = {
                text: "",
                step: p,
                toolName: e.toolName,
                index: d.toolInvocations.length,
              });
            let t = {
              state: "partial-call",
              step: p,
              toolCallId: e.toolCallId,
              toolName: e.toolName,
              args: void 0,
            };
            d.toolInvocations.push(t), g(e.toolCallId, t), E();
          },
          onToolCallDeltaPart(e) {
            let t = v[e.toolCallId];
            t.text += e.argsTextDelta;
            let { value: r } = (function (e) {
                if (void 0 === e)
                  return { value: void 0, state: "undefined-input" };
                let t = V({ text: e });
                return t.success
                  ? { value: t.value, state: "successful-parse" }
                  : (t = V({
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
                          for (let s = 0; s < e.length; s++) {
                            let l = e[s];
                            switch (t[t.length - 1]) {
                              case "ROOT":
                                o(l, s, "FINISH");
                                break;
                              case "INSIDE_OBJECT_START":
                                switch (l) {
                                  case '"':
                                    t.pop(), t.push("INSIDE_OBJECT_KEY");
                                    break;
                                  case "}":
                                    (r = s), t.pop();
                                }
                                break;
                              case "INSIDE_OBJECT_AFTER_COMMA":
                                '"' === l &&
                                  (t.pop(), t.push("INSIDE_OBJECT_KEY"));
                                break;
                              case "INSIDE_OBJECT_KEY":
                                '"' === l &&
                                  (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
                                break;
                              case "INSIDE_OBJECT_AFTER_KEY":
                                ":" === l &&
                                  (t.pop(),
                                  t.push("INSIDE_OBJECT_BEFORE_VALUE"));
                                break;
                              case "INSIDE_OBJECT_BEFORE_VALUE":
                                o(l, s, "INSIDE_OBJECT_AFTER_VALUE");
                                break;
                              case "INSIDE_OBJECT_AFTER_VALUE":
                                a(l, s);
                                break;
                              case "INSIDE_STRING":
                                switch (l) {
                                  case '"':
                                    t.pop(), (r = s);
                                    break;
                                  case "\\":
                                    t.push("INSIDE_STRING_ESCAPE");
                                    break;
                                  default:
                                    r = s;
                                }
                                break;
                              case "INSIDE_ARRAY_START":
                                "]" === l
                                  ? ((r = s), t.pop())
                                  : ((r = s),
                                    o(l, s, "INSIDE_ARRAY_AFTER_VALUE"));
                                break;
                              case "INSIDE_ARRAY_AFTER_VALUE":
                                switch (l) {
                                  case ",":
                                    t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                                    break;
                                  case "]":
                                    (r = s), t.pop();
                                    break;
                                  default:
                                    r = s;
                                }
                                break;
                              case "INSIDE_ARRAY_AFTER_COMMA":
                                o(l, s, "INSIDE_ARRAY_AFTER_VALUE");
                                break;
                              case "INSIDE_STRING_ESCAPE":
                                t.pop(), (r = s);
                                break;
                              case "INSIDE_NUMBER":
                                switch (l) {
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
                                    r = s;
                                    break;
                                  case "e":
                                  case "E":
                                  case "-":
                                  case ".":
                                    break;
                                  case ",":
                                    t.pop(),
                                      "INSIDE_ARRAY_AFTER_VALUE" ===
                                        t[t.length - 1] && i(l, s),
                                      "INSIDE_OBJECT_AFTER_VALUE" ===
                                        t[t.length - 1] && a(l, s);
                                    break;
                                  case "}":
                                    t.pop(),
                                      "INSIDE_OBJECT_AFTER_VALUE" ===
                                        t[t.length - 1] && a(l, s);
                                    break;
                                  case "]":
                                    t.pop(),
                                      "INSIDE_ARRAY_AFTER_VALUE" ===
                                        t[t.length - 1] && i(l, s);
                                    break;
                                  default:
                                    t.pop();
                                }
                                break;
                              case "INSIDE_LITERAL": {
                                let o = e.substring(n, s + 1);
                                "false".startsWith(o) ||
                                "true".startsWith(o) ||
                                "null".startsWith(o)
                                  ? (r = s)
                                  : (t.pop(),
                                    "INSIDE_OBJECT_AFTER_VALUE" ===
                                    t[t.length - 1]
                                      ? a(l, s)
                                      : "INSIDE_ARRAY_AFTER_VALUE" ===
                                          t[t.length - 1] && i(l, s));
                              }
                            }
                          }
                          let s = e.slice(0, r + 1);
                          for (let r = t.length - 1; r >= 0; r--)
                            switch (t[r]) {
                              case "INSIDE_STRING":
                                s += '"';
                                break;
                              case "INSIDE_OBJECT_KEY":
                              case "INSIDE_OBJECT_AFTER_KEY":
                              case "INSIDE_OBJECT_AFTER_COMMA":
                              case "INSIDE_OBJECT_START":
                              case "INSIDE_OBJECT_BEFORE_VALUE":
                              case "INSIDE_OBJECT_AFTER_VALUE":
                                s += "}";
                                break;
                              case "INSIDE_ARRAY_START":
                              case "INSIDE_ARRAY_AFTER_COMMA":
                              case "INSIDE_ARRAY_AFTER_VALUE":
                                s += "]";
                                break;
                              case "INSIDE_LITERAL": {
                                let t = e.substring(n, e.length);
                                "true".startsWith(t)
                                  ? (s += "true".slice(t.length))
                                  : "false".startsWith(t)
                                    ? (s += "false".slice(t.length))
                                    : "null".startsWith(t) &&
                                      (s += "null".slice(t.length));
                              }
                            }
                          return s;
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
            (d.toolInvocations[t.index] = n), g(e.toolCallId, n), E();
          },
          async onToolCallPart(e) {
            let t = { state: "call", step: p, ...e };
            if (
              (null != v[e.toolCallId]
                ? (d.toolInvocations[v[e.toolCallId].index] = t)
                : (null == d.toolInvocations && (d.toolInvocations = []),
                  d.toolInvocations.push(t)),
              g(e.toolCallId, t),
              E(),
              r)
            ) {
              let t = await r({ toolCall: e });
              if (null != t) {
                let r = { state: "result", step: p, ...e, result: t };
                (d.toolInvocations[d.toolInvocations.length - 1] = r),
                  g(e.toolCallId, r),
                  E();
              }
            }
          },
          onToolResultPart(e) {
            let t = d.toolInvocations;
            if (null == t)
              throw Error("tool_result must be preceded by a tool_call");
            let r = t.findIndex((t) => t.toolCallId === e.toolCallId);
            if (-1 === r)
              throw Error(
                "tool_result must be preceded by a tool_call with the same toolCallId"
              );
            let n = { ...t[r], state: "result", ...e };
            (t[r] = n), g(e.toolCallId, n), E();
          },
          onDataPart(e) {
            y.push(...e), E();
          },
          onMessageAnnotationsPart(e) {
            null == m ? (m = [...e]) : m.push(...e), E();
          },
          onFinishStepPart(e) {
            (p += 1),
              (u = e.isContinued ? u : void 0),
              (c = void 0),
              (f = void 0);
          },
          onStartStepPart(e) {
            h || (d.id = e.messageId),
              d.parts.push({ type: "step-start" }),
              E();
          },
          onFinishMessagePart(e) {
            (b = e.finishReason),
              null != e.usage &&
                (_ = (function ({ promptTokens: e, completionTokens: t }) {
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
          null == n || n({ message: d, finishReason: b, usage: _ });
      }
      async function ec({ stream: e, onTextPart: t }) {
        let r = e.pipeThrough(new TextDecoderStream()).getReader();
        for (;;) {
          let { done: e, value: n } = await r.read();
          if (e) break;
          await t(n);
        }
      }
      async function ef({
        stream: e,
        update: t,
        onFinish: r,
        getCurrentDate: n = () => new Date(),
        generateId: o = M,
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
      var eh = () => fetch;
      async function ep({
        api: e,
        body: t,
        streamProtocol: r = "data",
        credentials: n,
        headers: o,
        abortController: a,
        restoreMessagesOnFailure: i,
        onResponse: s,
        onUpdate: l,
        onFinish: u,
        onToolCall: c,
        generateId: f,
        fetch: h = eh(),
        lastMessage: p,
        requestType: d = "generate",
      }) {
        var g, y, m;
        let v =
            "resume" === d
              ? h(`${e}?chatId=${t.id}`, {
                  method: "GET",
                  headers: { "Content-Type": "application/json", ...o },
                  signal:
                    null == (g = null == a ? void 0 : a()) ? void 0 : g.signal,
                  credentials: n,
                })
              : h(e, {
                  method: "POST",
                  body: JSON.stringify(t),
                  headers: { "Content-Type": "application/json", ...o },
                  signal:
                    null == (y = null == a ? void 0 : a()) ? void 0 : y.signal,
                  credentials: n,
                }),
          _ = await v.catch((e) => {
            throw (i(), e);
          });
        if (s)
          try {
            await s(_);
          } catch (e) {
            throw e;
          }
        if (!_.ok)
          throw (
            (i(),
            Error(
              null != (m = await _.text())
                ? m
                : "Failed to fetch the chat response."
            ))
          );
        if (!_.body) throw Error("The response body is empty.");
        switch (r) {
          case "text":
            return void (await ef({
              stream: _.body,
              update: l,
              onFinish: u,
              generateId: f,
            }));
          case "data":
            return void (await eu({
              stream: _.body,
              update: l,
              lastMessage: p,
              onToolCall: c,
              onFinish({ message: e, finishReason: t, usage: r }) {
                u && null != e && u(e, { usage: r, finishReason: t });
              },
              generateId: f,
            }));
          default:
            throw Error(`Unknown stream protocol: ${r}`);
        }
      }
      function ed(e) {
        return null == e
          ? void 0
          : e.reduce((e, t) => {
              var r;
              return Math.max(e, null != (r = t.step) ? r : 0);
            }, 0);
      }
      function eg(e) {
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
      function ey(e) {
        return e.map((e) => ({ ...e, parts: eg(e) }));
      }
      async function em(e) {
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
      function ev(e) {
        if ("assistant" !== e.role) return !1;
        let t = e.parts.reduce(
            (e, t, r) => ("step-start" === t.type ? r : e),
            -1
          ),
          r = e.parts.slice(t + 1).filter((e) => "tool-invocation" === e.type);
        return r.length > 0 && r.every((e) => "result" in e.toolInvocation);
      }
      Symbol.for("vercel.ai.schema");
      var e_ = r(3100),
        eb = Object.prototype.hasOwnProperty;
      let eE = new WeakMap(),
        ew = () => {},
        eS = ew(),
        eI = Object,
        eR = (e) => e === eS,
        eT = (e) => "function" == typeof e,
        eA = (e, t) => ({ ...e, ...t }),
        ex = (e) => eT(e.then),
        eC = {},
        ek = {},
        eO = "undefined",
        eN = typeof window != eO,
        eP = typeof document != eO,
        ej = eN && "Deno" in window,
        eD = () => eN && typeof window.requestAnimationFrame != eO,
        eL = (e, t) => {
          let r = eE.get(e);
          return [
            () => (!eR(t) && e.get(t)) || eC,
            (n) => {
              if (!eR(t)) {
                let o = e.get(t);
                t in ek || (ek[t] = o), r[5](t, eA(o, n), o || eC);
              }
            },
            r[6],
            () => (!eR(t) && t in ek ? ek[t] : (!eR(t) && e.get(t)) || eC),
          ];
        },
        eF = !0,
        [eB, eU] =
          eN && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [ew, ew],
        eM = {
          initFocus: (e) => (
            eP && document.addEventListener("visibilitychange", e),
            eB("focus", e),
            () => {
              eP && document.removeEventListener("visibilitychange", e),
                eU("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (eF = !0), e();
              },
              r = () => {
                eF = !1;
              };
            return (
              eB("online", t),
              eB("offline", r),
              () => {
                eU("online", t), eU("offline", r);
              }
            );
          },
        },
        eY = !u.useId,
        ez = !eN || ej,
        eV = (e) => (eD() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        eJ = ez ? u.useEffect : u.useLayoutEffect,
        e$ = "undefined" != typeof navigator && navigator.connection,
        eq =
          !ez &&
          e$ &&
          (["slow-2g", "2g"].includes(e$.effectiveType) || e$.saveData),
        eW = new WeakMap(),
        eK = (e, t) =>
          eI.prototype.toString.call(e) === "[object ".concat(t, "]"),
        eG = 0,
        eH = (e) => {
          let t,
            r,
            n = typeof e,
            o = eK(e, "Date"),
            a = eK(e, "RegExp"),
            i = eK(e, "Object");
          if (eI(e) !== e || o || a)
            t = o
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = eW.get(e))) return t;
            if (((t = ++eG + "~"), eW.set(e, t), Array.isArray(e))) {
              for (r = 0, t = "@"; r < e.length; r++) t += eH(e[r]) + ",";
              eW.set(e, t);
            }
            if (i) {
              t = "#";
              let n = eI.keys(e).sort();
              for (; !eR((r = n.pop())); )
                eR(e[r]) || (t += r + ":" + eH(e[r]) + ",");
              eW.set(e, t);
            }
          }
          return t;
        },
        eZ = (e) => {
          if (eT(e))
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
                  ? eH(e)
                  : ""),
            t,
          ];
        },
        eX = 0,
        eQ = () => ++eX;
      async function e0() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let [n, o, a, i] = t,
          s = eA(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof i ? { revalidate: i } : i || {}
          ),
          l = s.populateCache,
          u = s.rollbackOnError,
          c = s.optimisticData,
          f = (e) => ("function" == typeof u ? u(e) : !1 !== u),
          h = s.throwOnError;
        if (eT(o)) {
          let e = [];
          for (let t of n.keys())
            !/^\$(inf|sub)\$/.test(t) && o(n.get(t)._k) && e.push(t);
          return Promise.all(e.map(p));
        }
        return p(o);
        async function p(e) {
          let r,
            [o] = eZ(e);
          if (!o) return;
          let [i, u] = eL(n, o),
            [p, d, g, y] = eE.get(n),
            m = () => {
              let t = p[o];
              return (eT(s.revalidate)
                ? s.revalidate(i().data, e)
                : !1 !== s.revalidate) && (delete g[o], delete y[o], t && t[0])
                ? t[0](2).then(() => i().data)
                : i().data;
            };
          if (t.length < 3) return m();
          let v = a,
            _ = eQ();
          d[o] = [_, 0];
          let b = !eR(c),
            E = i(),
            w = E.data,
            S = E._c,
            I = eR(S) ? w : S;
          if ((b && u({ data: (c = eT(c) ? c(I, w) : c), _c: I }), eT(v)))
            try {
              v = v(I);
            } catch (e) {
              r = e;
            }
          if (v && ex(v)) {
            if (
              ((v = await v.catch((e) => {
                r = e;
              })),
              _ !== d[o][0])
            ) {
              if (r) throw r;
              return v;
            }
            r && b && f(r) && ((l = !0), u({ data: I, _c: eS }));
          }
          if (
            (l &&
              !r &&
              (eT(l)
                ? u({ data: l(v, I), error: eS, _c: eS })
                : u({ data: v, error: eS, _c: eS })),
            (d[o][1] = eQ()),
            Promise.resolve(m()).then(() => {
              u({ _c: eS });
            }),
            r)
          ) {
            if (h) throw r;
            return;
          }
          return v;
        }
      }
      let e1 = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        e2 = (e, t) => {
          if (!eE.has(e)) {
            let r = eA(eM, t),
              n = Object.create(null),
              o = e0.bind(eS, e),
              a = ew,
              i = Object.create(null),
              s = (e, t) => {
                let r = i[e] || [];
                return (i[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              l = (t, r, n) => {
                e.set(t, r);
                let o = i[t];
                if (o) for (let e of o) e(r, n);
              },
              u = () => {
                if (
                  !eE.has(e) &&
                  (eE.set(e, [
                    n,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    o,
                    l,
                    s,
                  ]),
                  !ez)
                ) {
                  let t = r.initFocus(setTimeout.bind(eS, e1.bind(eS, n, 0))),
                    o = r.initReconnect(setTimeout.bind(eS, e1.bind(eS, n, 1)));
                  a = () => {
                    t && t(), o && o(), eE.delete(e);
                  };
                }
              };
            return u(), [e, o, u, a];
          }
          return [e, eE.get(e)[4]];
        },
        [e5, e6] = e2(new Map()),
        e8 = eA(
          {
            onLoadingSlow: ew,
            onSuccess: ew,
            onError: ew,
            onErrorRetry: (e, t, r, n, o) => {
              let a = r.errorRetryCount,
                i = o.retryCount,
                s =
                  ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) *
                  r.errorRetryInterval;
              (eR(a) || !(i > a)) && setTimeout(n, s, o);
            },
            onDiscarded: ew,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: eq ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: eq ? 5e3 : 3e3,
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
            cache: e5,
            mutate: e6,
            fallback: {},
          },
          {
            isOnline: () => eF,
            isVisible: () => {
              let e = eP && document.visibilityState;
              return eR(e) || "hidden" !== e;
            },
          }
        ),
        e3 = (e, t) => {
          let r = eA(e, t);
          if (t) {
            let { use: n, fallback: o } = e,
              { use: a, fallback: i } = t;
            n && a && (r.use = n.concat(a)), o && i && (r.fallback = eA(o, i));
          }
          return r;
        },
        e4 = (0, u.createContext)({}),
        e7 = eN && window.__SWR_DEVTOOLS_USE__,
        e9 = e7 ? window.__SWR_DEVTOOLS_USE__ : [],
        te = (e) =>
          eT(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        tt = () => eA(e8, (0, u.useContext)(e4)),
        tr = e9.concat((e) => (t, r, n) => {
          let o =
            r &&
            ((...e) => {
              let [n] = eZ(t),
                [, , , o] = eE.get(e5);
              if (n.startsWith("$inf$")) return r(...e);
              let a = o[n];
              return eR(a) ? r(...e) : (delete o[n], a);
            });
          return e(t, o, n);
        }),
        tn = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      e7 && (window.__SWR_DEVTOOLS_REACT__ = u);
      let to = () => {},
        ta = to();
      new WeakMap();
      let ti =
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
        ts = { dedupe: !0 };
      eI.defineProperty(
        (e) => {
          let { value: t } = e,
            r = (0, u.useContext)(e4),
            n = eT(t),
            o = (0, u.useMemo)(() => (n ? t(r) : t), [n, r, t]),
            a = (0, u.useMemo)(() => (n ? o : e3(r, o)), [n, r, o]),
            i = o && o.provider,
            s = (0, u.useRef)(eS);
          i && !s.current && (s.current = e2(i(a.cache || e5), o));
          let l = s.current;
          return (
            l && ((a.cache = l[0]), (a.mutate = l[1])),
            eJ(() => {
              if (l) return l[2] && l[2](), l[3];
            }, []),
            (0, u.createElement)(e4.Provider, eA(e, { value: a }))
          );
        },
        "defaultValue",
        { value: e8 }
      );
      let tl =
        ((o = (e, t, r) => {
          let {
              cache: n,
              compare: o,
              suspense: a,
              fallbackData: i,
              revalidateOnMount: s,
              revalidateIfStale: l,
              refreshInterval: c,
              refreshWhenHidden: f,
              refreshWhenOffline: h,
              keepPreviousData: p,
            } = r,
            [d, g, y, m] = eE.get(n),
            [v, _] = eZ(e),
            b = (0, u.useRef)(!1),
            E = (0, u.useRef)(!1),
            w = (0, u.useRef)(v),
            S = (0, u.useRef)(t),
            I = (0, u.useRef)(r),
            R = () => I.current,
            T = () => R().isVisible() && R().isOnline(),
            [A, x, C, k] = eL(n, v),
            O = (0, u.useRef)({}).current,
            N = eR(i) ? (eR(r.fallback) ? eS : r.fallback[v]) : i,
            P = (e, t) => {
              for (let r in O)
                if ("data" === r) {
                  if (!o(e[r], t[r]) && (!eR(e[r]) || !o(z, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            j = (0, u.useMemo)(() => {
              let e =
                  !!v && !!t && (eR(s) ? !R().isPaused() && !a && !1 !== l : s),
                r = (t) => {
                  let r = eA(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = A(),
                o = k(),
                i = r(n),
                u = n === o ? i : r(o),
                c = i;
              return [
                () => {
                  let e = r(A());
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
            }, [n, v]),
            D = (0, e_.useSyncExternalStore)(
              (0, u.useCallback)(
                (e) =>
                  C(v, (t, r) => {
                    P(r, t) || e();
                  }),
                [n, v]
              ),
              j[0],
              j[1]
            ),
            L = !b.current,
            F = d[v] && d[v].length > 0,
            B = D.data,
            U = eR(B) ? (N && ex(N) ? ti(N) : N) : B,
            M = D.error,
            Y = (0, u.useRef)(U),
            z = p ? (eR(B) ? (eR(Y.current) ? U : Y.current) : B) : U,
            V =
              (!F || !!eR(M)) &&
              (L && !eR(s)
                ? s
                : !R().isPaused() && (a ? !eR(U) && l : eR(U) || l)),
            J = !!(v && t && L && V),
            $ = eR(D.isValidating) ? J : D.isValidating,
            q = eR(D.isLoading) ? J : D.isLoading,
            W = (0, u.useCallback)(
              async (e) => {
                let t,
                  n,
                  a = S.current;
                if (!v || !a || E.current || R().isPaused()) return !1;
                let i = !0,
                  s = e || {},
                  l = !y[v] || !s.dedupe,
                  u = () =>
                    eY
                      ? !E.current && v === w.current && b.current
                      : v === w.current,
                  c = { isValidating: !1, isLoading: !1 },
                  f = () => {
                    x(c);
                  },
                  h = () => {
                    let e = y[v];
                    e && e[1] === n && delete y[v];
                  },
                  p = { isValidating: !0 };
                eR(A().data) && (p.isLoading = !0);
                try {
                  if (
                    (l &&
                      (x(p),
                      r.loadingTimeout &&
                        eR(A().data) &&
                        setTimeout(() => {
                          i && u() && R().onLoadingSlow(v, r);
                        }, r.loadingTimeout),
                      (y[v] = [a(_), eQ()])),
                    ([t, n] = y[v]),
                    (t = await t),
                    l && setTimeout(h, r.dedupingInterval),
                    !y[v] || y[v][1] !== n)
                  )
                    return l && u() && R().onDiscarded(v), !1;
                  c.error = eS;
                  let e = g[v];
                  if (!eR(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return f(), l && u() && R().onDiscarded(v), !1;
                  let s = A().data;
                  (c.data = o(s, t) ? s : t),
                    l && u() && R().onSuccess(t, v, r);
                } catch (r) {
                  h();
                  let e = R(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((c.error = r),
                    l &&
                      u() &&
                      (e.onError(r, v, e),
                      (!0 === t || (eT(t) && t(r))) &&
                        (!R().revalidateOnFocus ||
                          !R().revalidateOnReconnect ||
                          T()) &&
                        e.onErrorRetry(
                          r,
                          v,
                          e,
                          (e) => {
                            let t = d[v];
                            t && t[0] && t[0](3, e);
                          },
                          { retryCount: (s.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (i = !1), f(), !0;
              },
              [v, n]
            ),
            K = (0, u.useCallback)((...e) => e0(n, w.current, ...e), []);
          if (
            (eJ(() => {
              (S.current = t), (I.current = r), eR(B) || (Y.current = B);
            }),
            eJ(() => {
              if (!v) return;
              let e = W.bind(eS, ts),
                t = 0;
              R().revalidateOnFocus &&
                (t = Date.now() + R().focusThrottleInterval);
              let r = tn(v, d, (r, n = {}) => {
                if (0 == r) {
                  let r = Date.now();
                  R().revalidateOnFocus &&
                    r > t &&
                    T() &&
                    ((t = r + R().focusThrottleInterval), e());
                } else if (1 == r) R().revalidateOnReconnect && T() && e();
                else if (2 == r) return W();
                else if (3 == r) return W(n);
              });
              return (
                (E.current = !1),
                (w.current = v),
                (b.current = !0),
                x({ _k: _ }),
                V && (eR(U) || ez ? e() : eV(e)),
                () => {
                  (E.current = !0), r();
                }
              );
            }, [v]),
            eJ(() => {
              let e;
              function t() {
                let t = eT(c) ? c(A().data) : c;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !A().error && (f || R().isVisible()) && (h || R().isOnline())
                  ? W(ts).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [c, f, h, v]),
            (0, u.useDebugValue)(z),
            a && eR(U) && v)
          ) {
            if (!eY && ez)
              throw Error(
                "Fallback data is required when using Suspense in SSR."
              );
            (S.current = t), (I.current = r), (E.current = !1);
            let e = m[v];
            if ((eR(e) || ti(K(e)), eR(M))) {
              let e = W(ts);
              eR(z) || ((e.status = "fulfilled"), (e.value = !0)), ti(e);
            } else throw M;
          }
          return {
            mutate: K,
            get data() {
              return (O.data = !0), z;
            },
            get error() {
              return (O.error = !0), M;
            },
            get isValidating() {
              return (O.isValidating = !0), $;
            },
            get isLoading() {
              return (O.isLoading = !0), q;
            },
          };
        }),
        function (...e) {
          let t = tt(),
            [r, n, a] = te(e),
            i = e3(t, a),
            s = o,
            { use: l } = i,
            u = (l || []).concat(tr);
          for (let e = u.length; e--; ) s = u[e](s);
          return s(r, n || i.fetcher || null, i);
        });
      var tu = r(3360);
      function tc(e, t) {
        return null != t ? tu(e, t) : e;
      }
      function tf({
        api: e = "/api/chat",
        id: t,
        initialMessages: r,
        initialInput: n = "",
        sendExtraMessageFields: o,
        onToolCall: a,
        experimental_prepareRequestBody: i,
        maxSteps: s = 1,
        streamProtocol: l = "data",
        onResponse: c,
        onFinish: f,
        onError: h,
        credentials: p,
        headers: d,
        body: g,
        generateId: y = M,
        fetch: m,
        keepLastMessageOnError: v = !0,
        experimental_throttle: _,
      } = {}) {
        let [b] = (0, u.useState)(y),
          E = null != t ? t : b,
          w = "string" == typeof e ? [e, E] : E,
          S = (function (e) {
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
          { data: I, mutate: R } = tl([w, "messages"], null, {
            fallbackData: (0, u.useMemo)(() => ey(S), [S]),
          }),
          T = (0, u.useRef)(I || []);
        (0, u.useEffect)(() => {
          T.current = I || [];
        }, [I]);
        let { data: A, mutate: x } = tl([w, "streamData"], null),
          C = (0, u.useRef)(A);
        (0, u.useEffect)(() => {
          C.current = A;
        }, [A]);
        let { data: k = "ready", mutate: O } = tl([w, "status"], null),
          { data: N, mutate: P } = tl([w, "error"], null),
          j = (0, u.useRef)(null),
          D = (0, u.useRef)({ credentials: p, headers: d, body: g });
        (0, u.useEffect)(() => {
          D.current = { credentials: p, headers: d, body: g };
        }, [p, d, g]);
        let L = (0, u.useCallback)(
            async (t, r = "generate") => {
              var n, u;
              O("submitted"), P(void 0);
              let p = ey(t.messages),
                d = p.length,
                g = ed(
                  null == (n = p[p.length - 1]) ? void 0 : n.toolInvocations
                );
              try {
                j.current = new AbortController();
                let n = tc(R, _),
                  s = tc(x, _),
                  h = T.current;
                n(p, !1);
                let d = o
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
                  g = C.current;
                await ep({
                  api: e,
                  body:
                    null !=
                    (u =
                      null == i
                        ? void 0
                        : i({
                            id: E,
                            messages: p,
                            requestData: t.data,
                            requestBody: t.body,
                          }))
                      ? u
                      : {
                          id: E,
                          messages: d,
                          data: t.data,
                          ...D.current.body,
                          ...t.body,
                        },
                  streamProtocol: l,
                  credentials: D.current.credentials,
                  headers: { ...D.current.headers, ...t.headers },
                  abortController: () => j.current,
                  restoreMessagesOnFailure() {
                    v || n(h, !1);
                  },
                  onResponse: c,
                  onUpdate({ message: e, data: t, replaceLastMessage: r }) {
                    O("streaming"),
                      n([...(r ? p.slice(0, p.length - 1) : p), e], !1),
                      (null == t ? void 0 : t.length) &&
                        s([...(null != g ? g : []), ...t], !1);
                  },
                  onToolCall: a,
                  onFinish: f,
                  generateId: y,
                  fetch: m,
                  lastMessage: p[p.length - 1],
                  requestType: r,
                }),
                  (j.current = null),
                  O("ready");
              } catch (e) {
                if ("AbortError" === e.name)
                  return (j.current = null), O("ready"), null;
                h && e instanceof Error && h(e), P(e), O("error");
              }
              let b = T.current;
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
                  (n.length > t || ed(a.toolInvocations) !== e) &&
                  ev(a) &&
                  (null != (o = ed(a.toolInvocations)) ? o : 0) < r
                );
              })({
                originalMaxToolInvocationStep: g,
                originalMessageCount: d,
                maxSteps: s,
                messages: b,
              }) && (await L({ messages: b }));
            },
            [R, O, e, D, c, f, h, P, x, C, l, o, i, a, s, T, j, y, m, v, _, E]
          ),
          F = (0, u.useCallback)(
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
              let s = await em(o);
              return L({
                messages: T.current.concat({
                  ...e,
                  id: null != (a = e.id) ? a : y(),
                  createdAt: null != (i = e.createdAt) ? i : new Date(),
                  experimental_attachments: s.length > 0 ? s : void 0,
                  parts: eg(e),
                }),
                headers: r,
                body: n,
                data: t,
              });
            },
            [L, y]
          ),
          B = (0, u.useCallback)(
            async ({ data: e, headers: t, body: r } = {}) => {
              let n = T.current;
              return 0 === n.length
                ? null
                : L({
                    messages:
                      "assistant" === n[n.length - 1].role ? n.slice(0, -1) : n,
                    headers: t,
                    body: r,
                    data: e,
                  });
            },
            [L]
          ),
          U = (0, u.useCallback)(() => {
            j.current && (j.current.abort(), (j.current = null));
          }, []),
          Y = (0, u.useCallback)(async () => {
            L({ messages: T.current }, "resume");
          }, [L]),
          z = (0, u.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(T.current));
              let t = ey(e);
              R(t, !1), (T.current = t);
            },
            [R]
          ),
          V = (0, u.useCallback)(
            (e) => {
              "function" == typeof e && (e = e(C.current)),
                x(e, !1),
                (C.current = e);
            },
            [x]
          ),
          [J, $] = (0, u.useState)(n),
          q = (0, u.useCallback)(
            async (e, t = {}, r) => {
              var n;
              if (
                (null == (n = null == e ? void 0 : e.preventDefault) ||
                  n.call(e),
                !J && !t.allowEmptySubmit)
              )
                return;
              r && (D.current = { ...D.current, ...r });
              let o = await em(t.experimental_attachments);
              L({
                messages: T.current.concat({
                  id: y(),
                  createdAt: new Date(),
                  role: "user",
                  content: J,
                  experimental_attachments: o.length > 0 ? o : void 0,
                  parts: [{ type: "text", text: J }],
                }),
                headers: t.headers,
                body: t.body,
                data: t.data,
              }),
                $("");
            },
            [J, y, L]
          ),
          W = (0, u.useCallback)(
            ({ toolCallId: e, result: t }) => {
              let r = T.current;
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
                R([...r.slice(0, r.length - 1), { ...r[r.length - 1] }], !1),
                "submitted" !== k &&
                  "streaming" !== k &&
                  ev(r[r.length - 1]) &&
                  L({ messages: r });
            },
            [R, k, L]
          );
        return {
          messages: null != I ? I : [],
          id: E,
          setMessages: z,
          data: A,
          setData: V,
          error: N,
          append: F,
          reload: B,
          stop: U,
          experimental_resume: Y,
          input: J,
          setInput: $,
          handleInputChange: (e) => {
            $(e.target.value);
          },
          handleSubmit: q,
          isLoading: "submitted" === k || "streaming" === k,
          status: k,
          addToolResult: W,
        };
      }
    },
    887: (e, t, r) => {
      "use strict";
      var n = r(9020),
        o = r(3765),
        a = r(2548);
      function i() {
        return l.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
      }
      function s(e, t) {
        if (i() < t) throw RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, r) {
        if (!l.TYPED_ARRAY_SUPPORT && !(this instanceof l))
          return new l(e, t, r);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw Error(
              "If encoding is specified then the first argument must be a string"
            );
          return f(this, e);
        }
        return u(this, e, t, r);
      }
      function u(e, t, r, n) {
        if ("number" == typeof t)
          throw TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                throw RangeError("'length' is out of bounds");
              return (
                (t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                      ? new Uint8Array(t, r)
                      : new Uint8Array(t, r, n)),
                l.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = l.prototype)
                  : (e = h(e, t)),
                e
              );
            })(e, t, r, n)
          : "string" == typeof t
            ? (function (e, t, r) {
                if (
                  (("string" != typeof r || "" === r) && (r = "utf8"),
                  !l.isEncoding(r))
                )
                  throw TypeError('"encoding" must be a valid string encoding');
                var n = 0 | d(t, r),
                  o = (e = s(e, n)).write(t, r);
                return o !== n && (e = e.slice(0, o)), e;
              })(e, t, r)
            : (function (e, t) {
                if (l.isBuffer(t)) {
                  var r,
                    n = 0 | p(t.length);
                  return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
                }
                if (t) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  ) {
                    return "number" != typeof t.length || (r = t.length) != r
                      ? s(e, 0)
                      : h(e, t);
                  }
                  if ("Buffer" === t.type && a(t.data)) return h(e, t.data);
                }
                throw TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
      }
      function c(e) {
        if ("number" != typeof e)
          throw TypeError('"size" argument must be a number');
        if (e < 0) throw RangeError('"size" argument must not be negative');
      }
      function f(e, t) {
        if ((c(t), (e = s(e, t < 0 ? 0 : 0 | p(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function h(e, t) {
        var r = t.length < 0 ? 0 : 0 | p(t.length);
        e = s(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function p(e) {
        if (e >= i())
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              i().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function d(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return x(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return k(e).length;
            default:
              if (n) return x(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        var o,
          a,
          i,
          s = !1;
        if (
          ((void 0 === t || t < 0) && (t = 0),
          t > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (t >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, t, r) {
                var n,
                  o = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > o) && (r = o);
                for (var a = "", i = t; i < r; ++i) {
                  a += (n = e[i]) < 16 ? "0" + n.toString(16) : n.toString(16);
                }
                return a;
              })(this, t, r);
            case "utf8":
            case "utf-8":
              return _(this, t, r);
            case "ascii":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o)
                  n += String.fromCharCode(127 & e[o]);
                return n;
              })(this, t, r);
            case "latin1":
            case "binary":
              return (function (e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n;
              })(this, t, r);
            case "base64":
              return (
                (o = this),
                (a = t),
                (i = r),
                0 === a && i === o.length
                  ? n.fromByteArray(o)
                  : n.fromByteArray(o.slice(a, i))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, t, r) {
                for (var n = e.slice(t, r), o = "", a = 0; a < n.length; a += 2)
                  o += String.fromCharCode(n[a] + 256 * n[a + 1]);
                return o;
              })(this, t, r);
            default:
              if (s) throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (s = !0);
          }
      }
      function y(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function m(e, t, r, n, o) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
          isNaN((r *= 1)) && (r = o ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        )
          if (o) return -1;
          else r = e.length - 1;
        else if (r < 0)
          if (!o) return -1;
          else r = 0;
        if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, n, o);
        if ("number" == typeof t) {
          if (
            ((t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf)
          )
            if (o) return Uint8Array.prototype.indexOf.call(e, t, r);
            else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
          return v(e, [t], r, n, o);
        }
        throw TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, n, o) {
        var a,
          i = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (i = 2), (s /= 2), (l /= 2), (r /= 2);
        }
        function u(e, t) {
          return 1 === i ? e[t] : e.readUInt16BE(t * i);
        }
        if (o) {
          var c = -1;
          for (a = r; a < s; a++)
            if (u(e, a) === u(t, -1 === c ? 0 : a - c)) {
              if ((-1 === c && (c = a), a - c + 1 === l)) return c * i;
            } else -1 !== c && (a -= a - c), (c = -1);
        } else
          for (r + l > s && (r = s - l), a = r; a >= 0; a--) {
            for (var f = !0, h = 0; h < l; h++)
              if (u(e, a + h) !== u(t, h)) {
                f = !1;
                break;
              }
            if (f) return a;
          }
        return -1;
      }
      (t.hp = l),
        (t.IS = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== r.g.TYPED_ARRAY_SUPPORT
            ? r.g.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        i(),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, r) {
          return u(null, e, t, r);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (l.alloc = function (e, t, r) {
          return (c(e), e <= 0)
            ? s(null, e)
            : void 0 !== t
              ? "string" == typeof r
                ? s(null, e).fill(t, r)
                : s(null, e).fill(t)
              : s(null, e);
        }),
        (l.allocUnsafe = function (e) {
          return f(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return f(null, e);
        }),
        (l.isBuffer = function (e) {
          return !!(null != e && e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, o = 0, a = Math.min(r, n);
            o < a;
            ++o
          )
            if (e[o] !== t[o]) {
              (r = e[o]), (n = t[o]);
              break;
            }
          return r < n ? -1 : +(n < r);
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!a(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          if (void 0 === t)
            for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
          var r,
            n = l.allocUnsafe(t),
            o = 0;
          for (r = 0; r < e.length; ++r) {
            var i = e[r];
            if (!l.isBuffer(i))
              throw TypeError('"list" argument must be an Array of Buffers');
            i.copy(n, o), (o += i.length);
          }
          return n;
        }),
        (l.byteLength = d),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            y(this, t, t + 7),
              y(this, t + 1, t + 6),
              y(this, t + 2, t + 5),
              y(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
              ? _(this, 0, e)
              : g.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            r = t.IS;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, r, n, o) {
          if (!l.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            t < 0 || r > e.length || n < 0 || o > this.length)
          )
            throw RangeError("out of range index");
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e))
            return 0;
          for (
            var a = o - n,
              i = r - t,
              s = Math.min(a, i),
              u = this.slice(n, o),
              c = e.slice(t, r),
              f = 0;
            f < s;
            ++f
          )
            if (u[f] !== c[f]) {
              (a = u[f]), (i = c[f]);
              break;
            }
          return a < i ? -1 : +(i < a);
        }),
        (l.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (l.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, !1);
        });
      function _(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], o = t; o < r; ) {
          var a,
            i,
            s,
            l,
            u = e[o],
            c = null,
            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (o + f <= r)
            switch (f) {
              case 1:
                u < 128 && (c = u);
                break;
              case 2:
                (192 & (a = e[o + 1])) == 128 &&
                  (l = ((31 & u) << 6) | (63 & a)) > 127 &&
                  (c = l);
                break;
              case 3:
                (a = e[o + 1]),
                  (i = e[o + 2]),
                  (192 & a) == 128 &&
                    (192 & i) == 128 &&
                    (l = ((15 & u) << 12) | ((63 & a) << 6) | (63 & i)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (c = l);
                break;
              case 4:
                (a = e[o + 1]),
                  (i = e[o + 2]),
                  (s = e[o + 3]),
                  (192 & a) == 128 &&
                    (192 & i) == 128 &&
                    (192 & s) == 128 &&
                    (l =
                      ((15 & u) << 18) |
                      ((63 & a) << 12) |
                      ((63 & i) << 6) |
                      (63 & s)) > 65535 &&
                    l < 1114112 &&
                    (c = l);
            }
          null === c
            ? ((c = 65533), (f = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (o += f);
        }
        var h = n,
          p = h.length;
        if (p <= 4096) return String.fromCharCode.apply(String, h);
        for (var d = "", g = 0; g < p; )
          d += String.fromCharCode.apply(String, h.slice(g, (g += 4096)));
        return d;
      }
      function b(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function E(e, t, r, n, o, a) {
        if (!l.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < a)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError("Index out of range");
      }
      function w(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, a = Math.min(e.length - r, 2); o < a; ++o)
          e[r + o] =
            (t & (255 << (8 * (n ? o : 1 - o)))) >>> ((n ? o : 1 - o) * 8);
      }
      function S(e, t, r, n) {
        t < 0 && (t = 0xffffffff + t + 1);
        for (var o = 0, a = Math.min(e.length - r, 4); o < a; ++o)
          e[r + o] = (t >>> ((n ? o : 3 - o) * 8)) & 255;
      }
      function I(e, t, r, n, o, a) {
        if (r + n > e.length || r < 0) throw RangeError("Index out of range");
      }
      function R(e, t, r, n, a) {
        return (
          a || I(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
          o.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function T(e, t, r, n, a) {
        return (
          a || I(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
          o.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (l.prototype.write = function (e, t, r, n) {
        if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
        else if (void 0 === r && "string" == typeof t)
          (n = t), (r = this.length), (t = 0);
        else if (isFinite(t))
          (t |= 0),
            isFinite(r)
              ? ((r |= 0), void 0 === n && (n = "utf8"))
              : ((n = r), (r = void 0));
        else
          throw Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        var o,
          a,
          i,
          s,
          l,
          u,
          c,
          f,
          h = this.length - t;
        if (
          ((void 0 === r || r > h) && (r = h),
          (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
        )
          throw RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var p = !1; ; )
          switch (n) {
            case "hex":
              return (function (e, t, r, n) {
                r = Number(r) || 0;
                var o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : (n = o);
                var a = t.length;
                if (a % 2 != 0) throw TypeError("Invalid hex string");
                n > a / 2 && (n = a / 2);
                for (var i = 0; i < n; ++i) {
                  var s = parseInt(t.substr(2 * i, 2), 16);
                  if (isNaN(s)) break;
                  e[r + i] = s;
                }
                return i;
              })(this, e, t, r);
            case "utf8":
            case "utf-8":
              return (o = t), (a = r), O(x(e, this.length - o), this, o, a);
            case "ascii":
              return (i = t), (s = r), O(C(e), this, i, s);
            case "latin1":
            case "binary":
              return (function (e, t, r, n) {
                return O(C(t), e, r, n);
              })(this, e, t, r);
            case "base64":
              return (l = t), (u = r), O(k(e), this, l, u);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (
                (c = t),
                (f = r),
                O(
                  (function (e, t) {
                    for (
                      var r, n, o = [], a = 0;
                      a < e.length && !((t -= 2) < 0);
                      ++a
                    )
                      (n = (r = e.charCodeAt(a)) >> 8),
                        o.push(r % 256),
                        o.push(n);
                    return o;
                  })(e, this.length - c),
                  this,
                  c,
                  f
                )
              );
            default:
              if (p) throw TypeError("Unknown encoding: " + n);
              (n = ("" + n).toLowerCase()), (p = !0);
          }
      }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (l.prototype.slice = function (e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e),
            (t = void 0 === t ? n : ~~t),
            e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e),
            l.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = l.prototype;
          else {
            var o = t - e;
            r = new l(o, void 0);
            for (var a = 0; a < o; ++a) r[a] = this[a + e];
          }
          return r;
        }),
        (l.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || b(e, t, this.length);
          for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256); )
            n += this[e + a] * o;
          return n;
        }),
        (l.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || b(e, t, this.length);
          for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); )
            n += this[e + --t] * o;
          return n;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || b(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || b(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || b(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || b(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              0x1000000 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || b(e, 4, this.length),
            0x1000000 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || b(e, t, this.length);
          for (var n = this[e], o = 1, a = 0; ++a < t && (o *= 256); )
            n += this[e + a] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (l.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || b(e, t, this.length);
          for (var n = t, o = 1, a = this[e + --n]; n > 0 && (o *= 256); )
            a += this[e + --n] * o;
          return a >= (o *= 128) && (a -= Math.pow(2, 8 * t)), a;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (t || b(e, 1, this.length), 128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || b(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || b(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || b(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || b(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || b(e, 4, this.length), o.read(this, e, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || b(e, 4, this.length), o.read(this, e, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || b(e, 8, this.length), o.read(this, e, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || b(e, 8, this.length), o.read(this, e, !1, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, r, n) {
          if (((e *= 1), (t |= 0), (r |= 0), !n)) {
            var o = Math.pow(2, 8 * r) - 1;
            E(this, e, t, r, o, 0);
          }
          var a = 1,
            i = 0;
          for (this[t] = 255 & e; ++i < r && (a *= 256); )
            this[t + i] = (e / a) & 255;
          return t + r;
        }),
        (l.prototype.writeUIntBE = function (e, t, r, n) {
          if (((e *= 1), (t |= 0), (r |= 0), !n)) {
            var o = Math.pow(2, 8 * r) - 1;
            E(this, e, t, r, o, 0);
          }
          var a = r - 1,
            i = 1;
          for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
            this[t + a] = (e / i) & 255;
          return t + r;
        }),
        (l.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : w(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : w(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 4, 0xffffffff, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : S(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 4, 0xffffffff, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : S(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, r, n) {
          if (((e *= 1), (t |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            E(this, e, t, r, o - 1, -o);
          }
          var a = 0,
            i = 1,
            s = 0;
          for (this[t] = 255 & e; ++a < r && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
              (this[t + a] = (((e / i) | 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeIntBE = function (e, t, r, n) {
          if (((e *= 1), (t |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            E(this, e, t, r, o - 1, -o);
          }
          var a = r - 1,
            i = 1,
            s = 0;
          for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
              (this[t + a] = (((e / i) | 0) - s) & 255);
          return t + r;
        }),
        (l.prototype.writeInt8 = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : w(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : w(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 4, 0x7fffffff, -0x80000000),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : S(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e *= 1),
            (t |= 0),
            r || E(this, e, t, 4, 0x7fffffff, -0x80000000),
            e < 0 && (e = 0xffffffff + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : S(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, r) {
          return R(this, e, t, !0, r);
        }),
        (l.prototype.writeFloatBE = function (e, t, r) {
          return R(this, e, t, !1, r);
        }),
        (l.prototype.writeDoubleLE = function (e, t, r) {
          return T(this, e, t, !0, r);
        }),
        (l.prototype.writeDoubleBE = function (e, t, r) {
          return T(this, e, t, !1, r);
        }),
        (l.prototype.copy = function (e, t, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (t < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw RangeError("sourceStart out of bounds");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var o,
            a = n - r;
          if (this === e && r < t && t < n)
            for (o = a - 1; o >= 0; --o) e[o + t] = this[o + r];
          else if (a < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < a; ++o) e[o + t] = this[o + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
          return a;
        }),
        (l.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === e.length)
            ) {
              var o,
                a = e.charCodeAt(0);
              a < 256 && (e = a);
            }
            if (void 0 !== n && "string" != typeof n)
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !l.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e;
          else {
            var i = l.isBuffer(e) ? e : x(new l(e, n).toString()),
              s = i.length;
            for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
          }
          return this;
        });
      var A = /[^+\/0-9A-Za-z-_]/g;
      function x(e, t) {
        t = t || 1 / 0;
        for (var r, n = e.length, o = null, a = [], i = 0; i < n; ++i) {
          if ((r = e.charCodeAt(i)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319 || i + 1 === n) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && a.push(239, 191, 189), (o = r);
              continue;
            }
            r = (((o - 55296) << 10) | (r - 56320)) + 65536;
          } else o && (t -= 3) > -1 && a.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((t -= 1) < 0) break;
            a.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            a.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            a.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return a;
      }
      function C(e) {
        for (var t = [], r = 0; r < e.length; ++r)
          t.push(255 & e.charCodeAt(r));
        return t;
      }
      function k(e) {
        return n.toByteArray(
          (function (e) {
            var t;
            if (
              (e = (
                (t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
              ).replace(A, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function O(e, t, r, n) {
        for (var o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
    },
    1907: (e, t, r) => {
      "use strict";
      var n = r(7620),
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
        s = n.useLayoutEffect,
        l = n.useDebugValue;
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
                s(
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
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    2548: (e) => {
      var t = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == t.call(e);
        };
    },
    3100: (e, t, r) => {
      "use strict";
      e.exports = r(1907);
    },
    3360: (e) => {
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
    3522: () => {},
    3765: (e, t) => {
      (t.read = function (e, t, r, n, o) {
        var a,
          i,
          s = 8 * o - n - 1,
          l = (1 << s) - 1,
          u = l >> 1,
          c = -7,
          f = r ? o - 1 : 0,
          h = r ? -1 : 1,
          p = e[t + f];
        for (
          f += h, a = p & ((1 << -c) - 1), p >>= -c, c += s;
          c > 0;
          a = 256 * a + e[t + f], f += h, c -= 8
        );
        for (
          i = a & ((1 << -c) - 1), a >>= -c, c += n;
          c > 0;
          i = 256 * i + e[t + f], f += h, c -= 8
        );
        if (0 === a) a = 1 - u;
        else {
          if (a === l) return i ? NaN : (1 / 0) * (p ? -1 : 1);
          (i += Math.pow(2, n)), (a -= u);
        }
        return (p ? -1 : 1) * i * Math.pow(2, a - n);
      }),
        (t.write = function (e, t, r, n, o, a) {
          var i,
            s,
            l,
            u = 8 * a - o - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            h = 5960464477539062e-23 * (23 === o),
            p = n ? 0 : a - 1,
            d = n ? 1 : -1,
            g = +(t < 0 || (0 === t && 1 / t < 0));
          for (
            isNaN((t = Math.abs(t))) || t === 1 / 0
              ? ((s = +!!isNaN(t)), (i = c))
              : ((i = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -i)) < 1 && (i--, (l *= 2)),
                i + f >= 1 ? (t += h / l) : (t += h * Math.pow(2, 1 - f)),
                t * l >= 2 && (i++, (l /= 2)),
                i + f >= c
                  ? ((s = 0), (i = c))
                  : i + f >= 1
                    ? ((s = (t * l - 1) * Math.pow(2, o)), (i += f))
                    : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (i = 0)));
            o >= 8;
            e[r + p] = 255 & s, p += d, s /= 256, o -= 8
          );
          for (
            i = (i << o) | s, u += o;
            u > 0;
            e[r + p] = 255 & i, p += d, i /= 256, u -= 8
          );
          e[r + p - d] |= 128 * g;
        });
    },
    4275: (e, t, r) => {
      "use strict";
      e.exports = r(8650).style;
    },
    4585: (e, t, r) => {
      "use strict";
      var n = r(887).hp;
      let o = void 0 !== n,
        a =
          /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
        i =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
      function s(e, t, r) {
        null == r &&
          null !== t &&
          "object" == typeof t &&
          ((r = t), (t = void 0)),
          o && n.isBuffer(e) && (e = e.toString()),
          e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
        let s = JSON.parse(e, t);
        if (null === s || "object" != typeof s) return s;
        let u = (r && r.protoAction) || "error",
          c = (r && r.constructorAction) || "error";
        if ("ignore" === u && "ignore" === c) return s;
        if ("ignore" !== u && "ignore" !== c) {
          if (!1 === a.test(e) && !1 === i.test(e)) return s;
        } else if ("ignore" !== u && "ignore" === c) {
          if (!1 === a.test(e)) return s;
        } else if (!1 === i.test(e)) return s;
        return l(s, {
          protoAction: u,
          constructorAction: c,
          safe: r && r.safe,
        });
      }
      function l(
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
      function u(e, t, r) {
        let n = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        try {
          return s(e, t, r);
        } finally {
          Error.stackTraceLimit = n;
        }
      }
      (e.exports = u),
        (e.exports.default = u),
        (e.exports.parse = u),
        (e.exports.safeParse = function (e, t) {
          let r = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            return s(e, t, { safe: !0 });
          } catch (e) {
            return null;
          } finally {
            Error.stackTraceLimit = r;
          }
        }),
        (e.exports.scan = l);
    },
    7754: (e, t, r) => {
      "use strict";
      r.d(t, {
        Kq: () => J,
        UC: () => K,
        ZL: () => W,
        bL: () => $,
        i3: () => G,
        l9: () => q,
      });
      var n = r(7620),
        o = r(9254),
        a = r(9640),
        i = r(482),
        s = r(2491),
        l = r(728),
        u = r(3992),
        c = r(5724),
        f = r(8400),
        h = r(7156),
        p = r(9649),
        d = r(7076),
        g = r(1603),
        y = r(4568),
        [m, v] = (0, i.A)("Tooltip", [u.Bk]),
        _ = (0, u.Bk)(),
        b = "TooltipProvider",
        E = "tooltip.open",
        [w, S] = m(b),
        I = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: a = !1,
              children: i,
            } = e,
            s = n.useRef(!0),
            l = n.useRef(!1),
            u = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = u.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, y.jsx)(w, {
              scope: t,
              isOpenDelayedRef: s,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                window.clearTimeout(u.current), (s.current = !1);
              }, []),
              onClose: n.useCallback(() => {
                window.clearTimeout(u.current),
                  (u.current = window.setTimeout(() => (s.current = !0), o));
              }, [o]),
              isPointerInTransitRef: l,
              onPointerInTransitChange: n.useCallback((e) => {
                l.current = e;
              }, []),
              disableHoverableContent: a,
              children: i,
            })
          );
        };
      I.displayName = b;
      var R = "Tooltip",
        [T, A] = m(R),
        x = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: a,
              onOpenChange: i,
              disableHoverableContent: s,
              delayDuration: c,
            } = e,
            f = S(R, e.__scopeTooltip),
            h = _(t),
            [p, g] = n.useState(null),
            m = (0, l.B)(),
            v = n.useRef(0),
            b = null != s ? s : f.disableHoverableContent,
            w = null != c ? c : f.delayDuration,
            I = n.useRef(!1),
            [A, x] = (0, d.i)({
              prop: o,
              defaultProp: null != a && a,
              onChange: (e) => {
                e
                  ? (f.onOpen(), document.dispatchEvent(new CustomEvent(E)))
                  : f.onClose(),
                  null == i || i(e);
              },
              caller: R,
            }),
            C = n.useMemo(
              () =>
                A ? (I.current ? "delayed-open" : "instant-open") : "closed",
              [A]
            ),
            k = n.useCallback(() => {
              window.clearTimeout(v.current),
                (v.current = 0),
                (I.current = !1),
                x(!0);
            }, [x]),
            O = n.useCallback(() => {
              window.clearTimeout(v.current), (v.current = 0), x(!1);
            }, [x]),
            N = n.useCallback(() => {
              window.clearTimeout(v.current),
                (v.current = window.setTimeout(() => {
                  (I.current = !0), x(!0), (v.current = 0);
                }, w));
            }, [w, x]);
          return (
            n.useEffect(
              () => () => {
                v.current && (window.clearTimeout(v.current), (v.current = 0));
              },
              []
            ),
            (0, y.jsx)(u.bL, {
              ...h,
              children: (0, y.jsx)(T, {
                scope: t,
                contentId: m,
                open: A,
                stateAttribute: C,
                trigger: p,
                onTriggerChange: g,
                onTriggerEnter: n.useCallback(() => {
                  f.isOpenDelayedRef.current ? N() : k();
                }, [f.isOpenDelayedRef, N, k]),
                onTriggerLeave: n.useCallback(() => {
                  b ? O() : (window.clearTimeout(v.current), (v.current = 0));
                }, [O, b]),
                onOpen: k,
                onClose: O,
                disableHoverableContent: b,
                children: r,
              }),
            })
          );
        };
      x.displayName = R;
      var C = "TooltipTrigger",
        k = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...i } = e,
            s = A(C, r),
            l = S(C, r),
            c = _(r),
            f = n.useRef(null),
            p = (0, a.s)(t, f, s.onTriggerChange),
            d = n.useRef(!1),
            g = n.useRef(!1),
            m = n.useCallback(() => (d.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, y.jsx)(u.Mz, {
              asChild: !0,
              ...c,
              children: (0, y.jsx)(h.sG.button, {
                "aria-describedby": s.open ? s.contentId : void 0,
                "data-state": s.stateAttribute,
                ...i,
                ref: p,
                onPointerMove: (0, o.m)(e.onPointerMove, (e) => {
                  "touch" !== e.pointerType &&
                    (g.current ||
                      l.isPointerInTransitRef.current ||
                      (s.onTriggerEnter(), (g.current = !0)));
                }),
                onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                  s.onTriggerLeave(), (g.current = !1);
                }),
                onPointerDown: (0, o.m)(e.onPointerDown, () => {
                  s.open && s.onClose(),
                    (d.current = !0),
                    document.addEventListener("pointerup", m, { once: !0 });
                }),
                onFocus: (0, o.m)(e.onFocus, () => {
                  d.current || s.onOpen();
                }),
                onBlur: (0, o.m)(e.onBlur, s.onClose),
                onClick: (0, o.m)(e.onClick, s.onClose),
              }),
            })
          );
        });
      k.displayName = C;
      var O = "TooltipPortal",
        [N, P] = m(O, { forceMount: void 0 }),
        j = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            a = A(O, t);
          return (0, y.jsx)(N, {
            scope: t,
            forceMount: r,
            children: (0, y.jsx)(f.C, {
              present: r || a.open,
              children: (0, y.jsx)(c.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      j.displayName = O;
      var D = "TooltipContent",
        L = n.forwardRef((e, t) => {
          let r = P(D, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = "top", ...a } = e,
            i = A(D, e.__scopeTooltip);
          return (0, y.jsx)(f.C, {
            present: n || i.open,
            children: i.disableHoverableContent
              ? (0, y.jsx)(Y, { side: o, ...a, ref: t })
              : (0, y.jsx)(F, { side: o, ...a, ref: t }),
          });
        }),
        F = n.forwardRef((e, t) => {
          let r = A(D, e.__scopeTooltip),
            o = S(D, e.__scopeTooltip),
            i = n.useRef(null),
            s = (0, a.s)(t, i),
            [l, u] = n.useState(null),
            { trigger: c, onClose: f } = r,
            h = i.current,
            { onPointerInTransitChange: p } = o,
            d = n.useCallback(() => {
              u(null), p(!1);
            }, [p]),
            g = n.useCallback(
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
                    ...(function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        n = [];
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
            n.useEffect(() => () => d(), [d]),
            n.useEffect(() => {
              if (c && h) {
                let e = (e) => g(e, h),
                  t = (e) => g(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  h.addEventListener("pointerleave", t),
                  () => {
                    c.removeEventListener("pointerleave", e),
                      h.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [c, h, g, d]),
            n.useEffect(() => {
              if (l) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == h ? void 0 : h.contains(t)),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                        let i = t[e],
                          s = t[a],
                          l = i.x,
                          u = i.y,
                          c = s.x,
                          f = s.y;
                        u > n != f > n &&
                          r < ((c - l) * (n - u)) / (f - u) + l &&
                          (o = !o);
                      }
                      return o;
                    })(r, l);
                  n ? d() : o && (d(), f());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, h, l, f, d]),
            (0, y.jsx)(Y, { ...e, ref: s })
          );
        }),
        [B, U] = m(R, { isInside: !1 }),
        M = (0, p.Dc)("TooltipContent"),
        Y = n.forwardRef((e, t) => {
          let {
              __scopeTooltip: r,
              children: o,
              "aria-label": a,
              onEscapeKeyDown: i,
              onPointerDownOutside: l,
              ...c
            } = e,
            f = A(D, r),
            h = _(r),
            { onClose: p } = f;
          return (
            n.useEffect(
              () => (
                document.addEventListener(E, p),
                () => document.removeEventListener(E, p)
              ),
              [p]
            ),
            n.useEffect(() => {
              if (f.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(f.trigger)) && p();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [f.trigger, p]),
            (0, y.jsx)(s.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: l,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: p,
              children: (0, y.jsxs)(u.UC, {
                "data-state": f.stateAttribute,
                ...h,
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
                  (0, y.jsx)(M, { children: o }),
                  (0, y.jsx)(B, {
                    scope: r,
                    isInside: !0,
                    children: (0, y.jsx)(g.bL, {
                      id: f.contentId,
                      role: "tooltip",
                      children: a || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      L.displayName = D;
      var z = "TooltipArrow",
        V = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...n } = e,
            o = _(r);
          return U(z, r).isInside
            ? null
            : (0, y.jsx)(u.i3, { ...o, ...n, ref: t });
        });
      V.displayName = z;
      var J = I,
        $ = x,
        q = k,
        W = j,
        K = L,
        G = V;
    },
    8650: (e, t, r) => {
      "use strict";
      var n = r(4338);
      r(3522);
      var o = r(7620),
        a = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(o),
        i = void 0 !== n && n.env && !0,
        s = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        l = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              r = t.name,
              n = void 0 === r ? "stylesheet" : r,
              o = t.optimizeForSpeed,
              a = void 0 === o ? i : o;
            u(s(n), "`name` must be a string"),
              (this._name = n),
              (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
              u("boolean" == typeof a, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = a),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l =
              "undefined" != typeof window &&
              document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null;
          }
          var t,
            r = e.prototype;
          return (
            (r.setOptimizeForSpeed = function (e) {
              u(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                u(
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
              if (
                (u(!this._injected, "sheet already injected"),
                (this._injected = !0),
                "undefined" != typeof window && this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (i ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
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
              };
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
              if (
                (u(s(e), "`insertRule` accepts only strings"),
                "undefined" == typeof window)
              )
                return (
                  "number" != typeof t &&
                    (t = this._serverSheet.cssRules.length),
                  this._serverSheet.insertRule(e, t),
                  this._rulesCount++
                );
              if (this._optimizeForSpeed) {
                var r = this.getSheet();
                "number" != typeof t && (t = r.cssRules.length);
                try {
                  r.insertRule(e, t);
                } catch (t) {
                  return (
                    i ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var n = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, n));
              }
              return this._rulesCount++;
            }),
            (r.replaceRule = function (e, t) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var r =
                  "undefined" != typeof window
                    ? this.getSheet()
                    : this._serverSheet;
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !r.cssRules[e])
                )
                  return e;
                r.deleteRule(e);
                try {
                  r.insertRule(t, e);
                } catch (n) {
                  i ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    r.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var n = this._tags[e];
                u(n, "old rule at index `" + e + "` not found"),
                  (n.textContent = t);
              }
              return e;
            }),
            (r.deleteRule = function (e) {
              if ("undefined" == typeof window)
                return void this._serverSheet.deleteRule(e);
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                u(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (r.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                "undefined" != typeof window
                  ? (this._tags.forEach(function (e) {
                      return e && e.parentNode.removeChild(e);
                    }),
                    (this._tags = []))
                  : (this._serverSheet.cssRules = []);
            }),
            (r.cssRules = function () {
              var e = this;
              return "undefined" == typeof window
                ? this._serverSheet.cssRules
                : this._tags.reduce(function (t, r) {
                    return (
                      r
                        ? (t = t.concat(
                            Array.prototype.map.call(
                              e.getSheetForTag(r).cssRules,
                              function (t) {
                                return t.cssText === e._deletedRulePlaceholder
                                  ? null
                                  : t;
                              }
                            )
                          ))
                        : t.push(null),
                      t
                    );
                  }, []);
            }),
            (r.makeStyleTag = function (e, t, r) {
              t &&
                u(
                  s(t),
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
      function u(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, r = e.length; r; )
            t = (33 * t) ^ e.charCodeAt(--r);
          return t >>> 0;
        },
        f = {};
      function h(e, t) {
        if (!t) return "jsx-" + e;
        var r = String(t),
          n = e + r;
        return f[n] || (f[n] = "jsx-" + c(e + "-" + r)), f[n];
      }
      function p(e, t) {
        "undefined" == typeof window &&
          (t = t.replace(/\/style/gi, "\\/style"));
        var r = e + t;
        return (
          f[r] || (f[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), f[r]
        );
      }
      var d = (function () {
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
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                "undefined" == typeof window ||
                  this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
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
                  return a.default.createElement("style", {
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
                var o = h(n, r);
                return {
                  styleId: o,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return p(o, e);
                      })
                    : [p(o, t)],
                };
              }
              return { styleId: h(n), rules: Array.isArray(t) ? t : [t] };
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
        g = o.createContext(null);
      g.displayName = "StyleSheetContext";
      var y = a.default.useInsertionEffect || a.default.useLayoutEffect,
        m = "undefined" != typeof window ? new d() : void 0;
      function v(e) {
        var t = m || o.useContext(g);
        return (
          t &&
            ("undefined" == typeof window
              ? t.add(e)
              : y(
                  function () {
                    return (
                      t.add(e),
                      function () {
                        t.remove(e);
                      }
                    );
                  },
                  [e.id, String(e.dynamic)]
                )),
          null
        );
      }
      (v.dynamic = function (e) {
        return e
          .map(function (e) {
            return h(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = v);
    },
    8824: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(8889).A)("arrow-up", [
        ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
        ["path", { d: "M12 19V5", key: "x0mq9r" }],
      ]);
    },
    9020: (e, t) => {
      "use strict";
      (t.byteLength = function (e) {
        var t = l(e),
          r = t[0],
          n = t[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          var t,
            r,
            a = l(e),
            i = a[0],
            s = a[1],
            u = new o(((i + s) * 3) / 4 - s),
            c = 0,
            f = s > 0 ? i - 4 : i;
          for (r = 0; r < f; r += 4)
            (t =
              (n[e.charCodeAt(r)] << 18) |
              (n[e.charCodeAt(r + 1)] << 12) |
              (n[e.charCodeAt(r + 2)] << 6) |
              n[e.charCodeAt(r + 3)]),
              (u[c++] = (t >> 16) & 255),
              (u[c++] = (t >> 8) & 255),
              (u[c++] = 255 & t);
          return (
            2 === s &&
              ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
              (u[c++] = 255 & t)),
            1 === s &&
              ((t =
                (n[e.charCodeAt(r)] << 10) |
                (n[e.charCodeAt(r + 1)] << 4) |
                (n[e.charCodeAt(r + 2)] >> 2)),
              (u[c++] = (t >> 8) & 255),
              (u[c++] = 255 & t)),
            u
          );
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, o = n % 3, a = [], i = 0, s = n - o;
            i < s;
            i += 16383
          )
            a.push(
              (function (e, t, n) {
                for (var o, a = [], i = t; i < n; i += 3)
                  (o =
                    ((e[i] << 16) & 0xff0000) +
                    ((e[i + 1] << 8) & 65280) +
                    (255 & e[i + 2])),
                    a.push(
                      r[(o >> 18) & 63] +
                        r[(o >> 12) & 63] +
                        r[(o >> 6) & 63] +
                        r[63 & o]
                    );
                return a.join("");
              })(e, i, i + 16383 > s ? s : i + 16383)
            );
          return (
            1 === o
              ? a.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
              : 2 === o &&
                a.push(
                  r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                    r[(t >> 4) & 63] +
                    r[(t << 2) & 63] +
                    "="
                ),
            a.join("")
          );
        });
      for (
        var r = [],
          n = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          i = 0,
          s = a.length;
        i < s;
        ++i
      )
        (r[i] = a[i]), (n[a.charCodeAt(i)] = i);
      function l(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        -1 === r && (r = t);
        var n = r === t ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n[45] = 62), (n[95] = 63);
    },
  },
]);
