"use strict";
(exports.id = 843),
  (exports.ids = [843]),
  (exports.modules = {
    36545: (e, t, r) => {
      r.d(t, { N: () => K, r: () => G });
      var a = r(64473),
        n = r(81362),
        s = r(16151);
      function o(e) {
        var t, r;
        return null !=
          (r =
            null == (t = null == e ? void 0 : e.content)
              ? void 0
              : t.map(({ token: e, logprob: t, top_logprobs: r }) => ({
                  token: e,
                  logprob: t,
                  topLogprobs: r
                    ? r.map(({ token: e, logprob: t }) => ({
                        token: e,
                        logprob: t,
                      }))
                    : [],
                })))
          ? r
          : void 0;
      }
      function i(e) {
        switch (e) {
          case "stop":
            return "stop";
          case "length":
            return "length";
          case "content_filter":
            return "content-filter";
          case "function_call":
          case "tool_calls":
            return "tool-calls";
          default:
            return "unknown";
        }
      }
      var l = s.z.object({
          error: s.z.object({
            message: s.z.string(),
            type: s.z.string().nullish(),
            param: s.z.any().nullish(),
            code: s.z.union([s.z.string(), s.z.number()]).nullish(),
          }),
        }),
        u = (0, a.sl)({
          errorSchema: l,
          errorToMessage: (e) => e.error.message,
        });
      function p({ id: e, model: t, created: r }) {
        return {
          id: null != e ? e : void 0,
          modelId: null != t ? t : void 0,
          timestamp: null != r ? new Date(1e3 * r) : void 0,
        };
      }
      var c = class {
          constructor(e, t, r) {
            (this.specificationVersion = "v1"),
              (this.modelId = e),
              (this.settings = t),
              (this.config = r);
          }
          get supportsStructuredOutputs() {
            var e;
            return null != (e = this.settings.structuredOutputs)
              ? e
              : g(this.modelId);
          }
          get defaultObjectGenerationMode() {
            return this.modelId.startsWith("gpt-4o-audio-preview")
              ? "tool"
              : this.supportsStructuredOutputs
                ? "json"
                : "tool";
          }
          get provider() {
            return this.config.provider;
          }
          get supportsImageUrls() {
            return !this.settings.downloadImages;
          }
          getArgs({
            mode: e,
            prompt: t,
            maxTokens: r,
            temperature: s,
            topP: o,
            topK: i,
            frequencyPenalty: l,
            presencePenalty: u,
            stopSequences: p,
            responseFormat: c,
            seed: d,
            providerMetadata: m,
          }) {
            var h, y, v, b, _, w, x, k, z, T, I;
            let S = e.type,
              E = [];
            null != i &&
              E.push({ type: "unsupported-setting", setting: "topK" }),
              (null == c ? void 0 : c.type) !== "json" ||
                null == c.schema ||
                this.supportsStructuredOutputs ||
                E.push({
                  type: "unsupported-setting",
                  setting: "responseFormat",
                  details:
                    "JSON response format schema is only supported with structuredOutputs",
                });
            let j = this.settings.useLegacyFunctionCalling;
            if (j && !0 === this.settings.parallelToolCalls)
              throw new n.b8({
                functionality:
                  "useLegacyFunctionCalling with parallelToolCalls",
              });
            if (j && this.supportsStructuredOutputs)
              throw new n.b8({
                functionality:
                  "structuredOutputs with useLegacyFunctionCalling",
              });
            let { messages: R, warnings: C } = (function ({
              prompt: e,
              useLegacyFunctionCalling: t = !1,
              systemMessageMode: r = "system",
            }) {
              let s = [],
                o = [];
              for (let { role: i, content: l } of e)
                switch (i) {
                  case "system":
                    switch (r) {
                      case "system":
                        s.push({ role: "system", content: l });
                        break;
                      case "developer":
                        s.push({ role: "developer", content: l });
                        break;
                      case "remove":
                        o.push({
                          type: "other",
                          message: "system messages are removed for this model",
                        });
                        break;
                      default:
                        throw Error(`Unsupported system message mode: ${r}`);
                    }
                    break;
                  case "user":
                    if (1 === l.length && "text" === l[0].type) {
                      s.push({ role: "user", content: l[0].text });
                      break;
                    }
                    s.push({
                      role: "user",
                      content: l.map((e, t) => {
                        var r, s, o, i;
                        switch (e.type) {
                          case "text":
                            return { type: "text", text: e.text };
                          case "image":
                            return {
                              type: "image_url",
                              image_url: {
                                url:
                                  e.image instanceof URL
                                    ? e.image.toString()
                                    : `data:${null != (r = e.mimeType) ? r : "image/jpeg"};base64,${(0, a.n_)(e.image)}`,
                                detail:
                                  null ==
                                  (o =
                                    null == (s = e.providerMetadata)
                                      ? void 0
                                      : s.openai)
                                    ? void 0
                                    : o.imageDetail,
                              },
                            };
                          case "file":
                            if (e.data instanceof URL)
                              throw new n.b8({
                                functionality:
                                  "'File content parts with URL data' functionality not supported.",
                              });
                            switch (e.mimeType) {
                              case "audio/wav":
                                return {
                                  type: "input_audio",
                                  input_audio: { data: e.data, format: "wav" },
                                };
                              case "audio/mp3":
                              case "audio/mpeg":
                                return {
                                  type: "input_audio",
                                  input_audio: { data: e.data, format: "mp3" },
                                };
                              case "application/pdf":
                                return {
                                  type: "file",
                                  file: {
                                    filename:
                                      null != (i = e.filename)
                                        ? i
                                        : `part-${t}.pdf`,
                                    file_data: `data:application/pdf;base64,${e.data}`,
                                  },
                                };
                              default:
                                throw new n.b8({
                                  functionality: `File content part type ${e.mimeType} in user messages`,
                                });
                            }
                        }
                      }),
                    });
                    break;
                  case "assistant": {
                    let e = "",
                      r = [];
                    for (let t of l)
                      switch (t.type) {
                        case "text":
                          e += t.text;
                          break;
                        case "tool-call":
                          r.push({
                            id: t.toolCallId,
                            type: "function",
                            function: {
                              name: t.toolName,
                              arguments: JSON.stringify(t.args),
                            },
                          });
                      }
                    if (t) {
                      if (r.length > 1)
                        throw new n.b8({
                          functionality:
                            "useLegacyFunctionCalling with multiple tool calls in one message",
                        });
                      s.push({
                        role: "assistant",
                        content: e,
                        function_call: r.length > 0 ? r[0].function : void 0,
                      });
                    } else
                      s.push({
                        role: "assistant",
                        content: e,
                        tool_calls: r.length > 0 ? r : void 0,
                      });
                    break;
                  }
                  case "tool":
                    for (let e of l)
                      t
                        ? s.push({
                            role: "function",
                            name: e.toolName,
                            content: JSON.stringify(e.result),
                          })
                        : s.push({
                            role: "tool",
                            tool_call_id: e.toolCallId,
                            content: JSON.stringify(e.result),
                          });
                    break;
                  default:
                    throw Error(`Unsupported role: ${i}`);
                }
              return { messages: s, warnings: o };
            })({
              prompt: t,
              useLegacyFunctionCalling: j,
              systemMessageMode: g((z = this.modelId))
                ? null !=
                  (I = null == (T = f[z]) ? void 0 : T.systemMessageMode)
                  ? I
                  : "developer"
                : "system",
            });
            E.push(...C);
            let A = {
              model: this.modelId,
              logit_bias: this.settings.logitBias,
              logprobs:
                !0 === this.settings.logprobs ||
                "number" == typeof this.settings.logprobs ||
                void 0,
              top_logprobs:
                "number" == typeof this.settings.logprobs
                  ? this.settings.logprobs
                  : "boolean" == typeof this.settings.logprobs &&
                      this.settings.logprobs
                    ? 0
                    : void 0,
              user: this.settings.user,
              parallel_tool_calls: this.settings.parallelToolCalls,
              max_tokens: r,
              temperature: s,
              top_p: o,
              frequency_penalty: l,
              presence_penalty: u,
              response_format:
                (null == c ? void 0 : c.type) === "json"
                  ? this.supportsStructuredOutputs && null != c.schema
                    ? {
                        type: "json_schema",
                        json_schema: {
                          schema: c.schema,
                          strict: !0,
                          name: null != (h = c.name) ? h : "response",
                          description: c.description,
                        },
                      }
                    : { type: "json_object" }
                  : void 0,
              stop: p,
              seed: d,
              max_completion_tokens:
                null == (y = null == m ? void 0 : m.openai)
                  ? void 0
                  : y.maxCompletionTokens,
              store:
                null == (v = null == m ? void 0 : m.openai) ? void 0 : v.store,
              metadata:
                null == (b = null == m ? void 0 : m.openai)
                  ? void 0
                  : b.metadata,
              prediction:
                null == (_ = null == m ? void 0 : m.openai)
                  ? void 0
                  : _.prediction,
              reasoning_effort:
                null !=
                (x =
                  null == (w = null == m ? void 0 : m.openai)
                    ? void 0
                    : w.reasoningEffort)
                  ? x
                  : this.settings.reasoningEffort,
              messages: R,
            };
            switch (
              (g(this.modelId)
                ? (null != A.temperature &&
                    ((A.temperature = void 0),
                    E.push({
                      type: "unsupported-setting",
                      setting: "temperature",
                      details:
                        "temperature is not supported for reasoning models",
                    })),
                  null != A.top_p &&
                    ((A.top_p = void 0),
                    E.push({
                      type: "unsupported-setting",
                      setting: "topP",
                      details: "topP is not supported for reasoning models",
                    })),
                  null != A.frequency_penalty &&
                    ((A.frequency_penalty = void 0),
                    E.push({
                      type: "unsupported-setting",
                      setting: "frequencyPenalty",
                      details:
                        "frequencyPenalty is not supported for reasoning models",
                    })),
                  null != A.presence_penalty &&
                    ((A.presence_penalty = void 0),
                    E.push({
                      type: "unsupported-setting",
                      setting: "presencePenalty",
                      details:
                        "presencePenalty is not supported for reasoning models",
                    })),
                  null != A.logit_bias &&
                    ((A.logit_bias = void 0),
                    E.push({
                      type: "other",
                      message:
                        "logitBias is not supported for reasoning models",
                    })),
                  null != A.logprobs &&
                    ((A.logprobs = void 0),
                    E.push({
                      type: "other",
                      message: "logprobs is not supported for reasoning models",
                    })),
                  null != A.top_logprobs &&
                    ((A.top_logprobs = void 0),
                    E.push({
                      type: "other",
                      message:
                        "topLogprobs is not supported for reasoning models",
                    })),
                  null != A.max_tokens &&
                    (null == A.max_completion_tokens &&
                      (A.max_completion_tokens = A.max_tokens),
                    (A.max_tokens = void 0)))
                : (this.modelId.startsWith("gpt-4o-search-preview") ||
                    this.modelId.startsWith("gpt-4o-mini-search-preview")) &&
                  null != A.temperature &&
                  ((A.temperature = void 0),
                  E.push({
                    type: "unsupported-setting",
                    setting: "temperature",
                    details:
                      "temperature is not supported for the search preview models and has been removed.",
                  })),
              S)
            ) {
              case "regular": {
                let {
                  tools: t,
                  tool_choice: r,
                  functions: a,
                  function_call: s,
                  toolWarnings: o,
                } = (function ({
                  mode: e,
                  useLegacyFunctionCalling: t = !1,
                  structuredOutputs: r,
                }) {
                  var a;
                  let s = (null == (a = e.tools) ? void 0 : a.length)
                      ? e.tools
                      : void 0,
                    o = [];
                  if (null == s)
                    return {
                      tools: void 0,
                      tool_choice: void 0,
                      toolWarnings: o,
                    };
                  let i = e.toolChoice;
                  if (t) {
                    let e = [];
                    for (let t of s)
                      "provider-defined" === t.type
                        ? o.push({ type: "unsupported-tool", tool: t })
                        : e.push({
                            name: t.name,
                            description: t.description,
                            parameters: t.parameters,
                          });
                    if (null == i)
                      return {
                        functions: e,
                        function_call: void 0,
                        toolWarnings: o,
                      };
                    switch (i.type) {
                      case "auto":
                      case "none":
                      case void 0:
                        return {
                          functions: e,
                          function_call: void 0,
                          toolWarnings: o,
                        };
                      case "required":
                        throw new n.b8({
                          functionality:
                            "useLegacyFunctionCalling and toolChoice: required",
                        });
                      default:
                        return {
                          functions: e,
                          function_call: { name: i.toolName },
                          toolWarnings: o,
                        };
                    }
                  }
                  let l = [];
                  for (let e of s)
                    "provider-defined" === e.type
                      ? o.push({ type: "unsupported-tool", tool: e })
                      : l.push({
                          type: "function",
                          function: {
                            name: e.name,
                            description: e.description,
                            parameters: e.parameters,
                            strict: !!r || void 0,
                          },
                        });
                  if (null == i)
                    return { tools: l, tool_choice: void 0, toolWarnings: o };
                  let u = i.type;
                  switch (u) {
                    case "auto":
                    case "none":
                    case "required":
                      return { tools: l, tool_choice: u, toolWarnings: o };
                    case "tool":
                      return {
                        tools: l,
                        tool_choice: {
                          type: "function",
                          function: { name: i.toolName },
                        },
                        toolWarnings: o,
                      };
                    default:
                      throw new n.b8({
                        functionality: `Unsupported tool choice type: ${u}`,
                      });
                  }
                })({
                  mode: e,
                  useLegacyFunctionCalling: j,
                  structuredOutputs: this.supportsStructuredOutputs,
                });
                return {
                  args: {
                    ...A,
                    tools: t,
                    tool_choice: r,
                    functions: a,
                    function_call: s,
                  },
                  warnings: [...E, ...o],
                };
              }
              case "object-json":
                return {
                  args: {
                    ...A,
                    response_format:
                      this.supportsStructuredOutputs && null != e.schema
                        ? {
                            type: "json_schema",
                            json_schema: {
                              schema: e.schema,
                              strict: !0,
                              name: null != (k = e.name) ? k : "response",
                              description: e.description,
                            },
                          }
                        : { type: "json_object" },
                  },
                  warnings: E,
                };
              case "object-tool":
                return {
                  args: j
                    ? {
                        ...A,
                        function_call: { name: e.tool.name },
                        functions: [
                          {
                            name: e.tool.name,
                            description: e.tool.description,
                            parameters: e.tool.parameters,
                          },
                        ],
                      }
                    : {
                        ...A,
                        tool_choice: {
                          type: "function",
                          function: { name: e.tool.name },
                        },
                        tools: [
                          {
                            type: "function",
                            function: {
                              name: e.tool.name,
                              description: e.tool.description,
                              parameters: e.tool.parameters,
                              strict:
                                !!this.supportsStructuredOutputs || void 0,
                            },
                          },
                        ],
                      },
                  warnings: E,
                };
              default:
                throw Error(`Unsupported type: ${S}`);
            }
          }
          async doGenerate(e) {
            var t, r, n, s, l, c, d, h;
            let { args: g, warnings: f } = this.getArgs(e),
              {
                responseHeaders: y,
                value: v,
                rawValue: b,
              } = await (0, a.GU)({
                url: this.config.url({
                  path: "/chat/completions",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: g,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.cV)(m),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              { messages: _, ...w } = g,
              x = v.choices[0],
              k = null == (t = v.usage) ? void 0 : t.completion_tokens_details,
              z = null == (r = v.usage) ? void 0 : r.prompt_tokens_details,
              T = { openai: {} };
            return (
              (null == k ? void 0 : k.reasoning_tokens) != null &&
                (T.openai.reasoningTokens =
                  null == k ? void 0 : k.reasoning_tokens),
              (null == k ? void 0 : k.accepted_prediction_tokens) != null &&
                (T.openai.acceptedPredictionTokens =
                  null == k ? void 0 : k.accepted_prediction_tokens),
              (null == k ? void 0 : k.rejected_prediction_tokens) != null &&
                (T.openai.rejectedPredictionTokens =
                  null == k ? void 0 : k.rejected_prediction_tokens),
              (null == z ? void 0 : z.cached_tokens) != null &&
                (T.openai.cachedPromptTokens =
                  null == z ? void 0 : z.cached_tokens),
              {
                text: null != (n = x.message.content) ? n : void 0,
                toolCalls:
                  this.settings.useLegacyFunctionCalling &&
                  x.message.function_call
                    ? [
                        {
                          toolCallType: "function",
                          toolCallId: (0, a.$C)(),
                          toolName: x.message.function_call.name,
                          args: x.message.function_call.arguments,
                        },
                      ]
                    : null == (s = x.message.tool_calls)
                      ? void 0
                      : s.map((e) => {
                          var t;
                          return {
                            toolCallType: "function",
                            toolCallId: null != (t = e.id) ? t : (0, a.$C)(),
                            toolName: e.function.name,
                            args: e.function.arguments,
                          };
                        }),
                finishReason: i(x.finish_reason),
                usage: {
                  promptTokens:
                    null !=
                    (c = null == (l = v.usage) ? void 0 : l.prompt_tokens)
                      ? c
                      : NaN,
                  completionTokens:
                    null !=
                    (h = null == (d = v.usage) ? void 0 : d.completion_tokens)
                      ? h
                      : NaN,
                },
                rawCall: { rawPrompt: _, rawSettings: w },
                rawResponse: { headers: y, body: b },
                request: { body: JSON.stringify(g) },
                response: p(v),
                warnings: f,
                logprobs: o(x.logprobs),
                providerMetadata: T,
              }
            );
          }
          async doStream(e) {
            let t;
            if (this.settings.simulateStreaming) {
              let t = await this.doGenerate(e);
              return {
                stream: new ReadableStream({
                  start(e) {
                    if (
                      (e.enqueue({ type: "response-metadata", ...t.response }),
                      t.text &&
                        e.enqueue({ type: "text-delta", textDelta: t.text }),
                      t.toolCalls)
                    )
                      for (let r of t.toolCalls)
                        e.enqueue({
                          type: "tool-call-delta",
                          toolCallType: "function",
                          toolCallId: r.toolCallId,
                          toolName: r.toolName,
                          argsTextDelta: r.args,
                        }),
                          e.enqueue({ type: "tool-call", ...r });
                    e.enqueue({
                      type: "finish",
                      finishReason: t.finishReason,
                      usage: t.usage,
                      logprobs: t.logprobs,
                      providerMetadata: t.providerMetadata,
                    }),
                      e.close();
                  },
                }),
                rawCall: t.rawCall,
                rawResponse: t.rawResponse,
                warnings: t.warnings,
              };
            }
            let { args: r, warnings: s } = this.getArgs(e),
              l = {
                ...r,
                stream: !0,
                stream_options:
                  "strict" === this.config.compatibility
                    ? { include_usage: !0 }
                    : void 0,
              },
              { responseHeaders: c, value: d } = await (0, a.GU)({
                url: this.config.url({
                  path: "/chat/completions",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: l,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.Ds)(h),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              { messages: m, ...g } = r,
              f = [],
              y = "unknown",
              v = { promptTokens: void 0, completionTokens: void 0 },
              b = !0,
              { useLegacyFunctionCalling: _ } = this.settings,
              w = { openai: {} };
            return {
              stream: d.pipeThrough(
                new TransformStream({
                  transform(e, r) {
                    var s, l, u, c, d, m, h, g, x, k, z, T;
                    if (!e.success) {
                      (y = "error"),
                        r.enqueue({ type: "error", error: e.error });
                      return;
                    }
                    let I = e.value;
                    if ("error" in I) {
                      (y = "error"),
                        r.enqueue({ type: "error", error: I.error });
                      return;
                    }
                    if (
                      (b &&
                        ((b = !1),
                        r.enqueue({ type: "response-metadata", ...p(I) })),
                      null != I.usage)
                    ) {
                      let {
                        prompt_tokens: e,
                        completion_tokens: t,
                        prompt_tokens_details: r,
                        completion_tokens_details: a,
                      } = I.usage;
                      (v = {
                        promptTokens: null != e ? e : void 0,
                        completionTokens: null != t ? t : void 0,
                      }),
                        (null == a ? void 0 : a.reasoning_tokens) != null &&
                          (w.openai.reasoningTokens =
                            null == a ? void 0 : a.reasoning_tokens),
                        (null == a ? void 0 : a.accepted_prediction_tokens) !=
                          null &&
                          (w.openai.acceptedPredictionTokens =
                            null == a ? void 0 : a.accepted_prediction_tokens),
                        (null == a ? void 0 : a.rejected_prediction_tokens) !=
                          null &&
                          (w.openai.rejectedPredictionTokens =
                            null == a ? void 0 : a.rejected_prediction_tokens),
                        (null == r ? void 0 : r.cached_tokens) != null &&
                          (w.openai.cachedPromptTokens =
                            null == r ? void 0 : r.cached_tokens);
                    }
                    let S = I.choices[0];
                    if (
                      ((null == S ? void 0 : S.finish_reason) != null &&
                        (y = i(S.finish_reason)),
                      (null == S ? void 0 : S.delta) == null)
                    )
                      return;
                    let E = S.delta;
                    null != E.content &&
                      r.enqueue({ type: "text-delta", textDelta: E.content });
                    let j = o(null == S ? void 0 : S.logprobs);
                    (null == j ? void 0 : j.length) &&
                      (void 0 === t && (t = []), t.push(...j));
                    let R =
                      _ && null != E.function_call
                        ? [
                            {
                              type: "function",
                              id: (0, a.$C)(),
                              function: E.function_call,
                              index: 0,
                            },
                          ]
                        : E.tool_calls;
                    if (null != R)
                      for (let e of R) {
                        let t = e.index;
                        if (null == f[t]) {
                          if ("function" !== e.type)
                            throw new n.xn({
                              data: e,
                              message: "Expected 'function' type.",
                            });
                          if (null == e.id)
                            throw new n.xn({
                              data: e,
                              message: "Expected 'id' to be a string.",
                            });
                          if (
                            (null == (s = e.function) ? void 0 : s.name) == null
                          )
                            throw new n.xn({
                              data: e,
                              message:
                                "Expected 'function.name' to be a string.",
                            });
                          f[t] = {
                            id: e.id,
                            type: "function",
                            function: {
                              name: e.function.name,
                              arguments:
                                null != (l = e.function.arguments) ? l : "",
                            },
                            hasFinished: !1,
                          };
                          let o = f[t];
                          (null == (u = o.function) ? void 0 : u.name) !=
                            null &&
                            (null == (c = o.function) ? void 0 : c.arguments) !=
                              null &&
                            (o.function.arguments.length > 0 &&
                              r.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: o.id,
                                toolName: o.function.name,
                                argsTextDelta: o.function.arguments,
                              }),
                            (0, a.v0)(o.function.arguments) &&
                              (r.enqueue({
                                type: "tool-call",
                                toolCallType: "function",
                                toolCallId:
                                  null != (d = o.id) ? d : (0, a.$C)(),
                                toolName: o.function.name,
                                args: o.function.arguments,
                              }),
                              (o.hasFinished = !0)));
                          continue;
                        }
                        let o = f[t];
                        !o.hasFinished &&
                          ((null == (m = e.function) ? void 0 : m.arguments) !=
                            null &&
                            (o.function.arguments +=
                              null !=
                              (g =
                                null == (h = e.function) ? void 0 : h.arguments)
                                ? g
                                : ""),
                          r.enqueue({
                            type: "tool-call-delta",
                            toolCallType: "function",
                            toolCallId: o.id,
                            toolName: o.function.name,
                            argsTextDelta:
                              null != (x = e.function.arguments) ? x : "",
                          }),
                          (null == (k = o.function) ? void 0 : k.name) !=
                            null &&
                            (null == (z = o.function) ? void 0 : z.arguments) !=
                              null &&
                            (0, a.v0)(o.function.arguments) &&
                            (r.enqueue({
                              type: "tool-call",
                              toolCallType: "function",
                              toolCallId: null != (T = o.id) ? T : (0, a.$C)(),
                              toolName: o.function.name,
                              args: o.function.arguments,
                            }),
                            (o.hasFinished = !0)));
                      }
                  },
                  flush(e) {
                    var r, a;
                    e.enqueue({
                      type: "finish",
                      finishReason: y,
                      logprobs: t,
                      usage: {
                        promptTokens: null != (r = v.promptTokens) ? r : NaN,
                        completionTokens:
                          null != (a = v.completionTokens) ? a : NaN,
                      },
                      ...(null != w ? { providerMetadata: w } : {}),
                    });
                  },
                })
              ),
              rawCall: { rawPrompt: m, rawSettings: g },
              rawResponse: { headers: c },
              request: { body: JSON.stringify(l) },
              warnings: s,
            };
          }
        },
        d = s.z
          .object({
            prompt_tokens: s.z.number().nullish(),
            completion_tokens: s.z.number().nullish(),
            prompt_tokens_details: s.z
              .object({ cached_tokens: s.z.number().nullish() })
              .nullish(),
            completion_tokens_details: s.z
              .object({
                reasoning_tokens: s.z.number().nullish(),
                accepted_prediction_tokens: s.z.number().nullish(),
                rejected_prediction_tokens: s.z.number().nullish(),
              })
              .nullish(),
          })
          .nullish(),
        m = s.z.object({
          id: s.z.string().nullish(),
          created: s.z.number().nullish(),
          model: s.z.string().nullish(),
          choices: s.z.array(
            s.z.object({
              message: s.z.object({
                role: s.z.literal("assistant").nullish(),
                content: s.z.string().nullish(),
                function_call: s.z
                  .object({ arguments: s.z.string(), name: s.z.string() })
                  .nullish(),
                tool_calls: s.z
                  .array(
                    s.z.object({
                      id: s.z.string().nullish(),
                      type: s.z.literal("function"),
                      function: s.z.object({
                        name: s.z.string(),
                        arguments: s.z.string(),
                      }),
                    })
                  )
                  .nullish(),
              }),
              index: s.z.number(),
              logprobs: s.z
                .object({
                  content: s.z
                    .array(
                      s.z.object({
                        token: s.z.string(),
                        logprob: s.z.number(),
                        top_logprobs: s.z.array(
                          s.z.object({
                            token: s.z.string(),
                            logprob: s.z.number(),
                          })
                        ),
                      })
                    )
                    .nullable(),
                })
                .nullish(),
              finish_reason: s.z.string().nullish(),
            })
          ),
          usage: d,
        }),
        h = s.z.union([
          s.z.object({
            id: s.z.string().nullish(),
            created: s.z.number().nullish(),
            model: s.z.string().nullish(),
            choices: s.z.array(
              s.z.object({
                delta: s.z
                  .object({
                    role: s.z.enum(["assistant"]).nullish(),
                    content: s.z.string().nullish(),
                    function_call: s.z
                      .object({
                        name: s.z.string().optional(),
                        arguments: s.z.string().optional(),
                      })
                      .nullish(),
                    tool_calls: s.z
                      .array(
                        s.z.object({
                          index: s.z.number(),
                          id: s.z.string().nullish(),
                          type: s.z.literal("function").nullish(),
                          function: s.z.object({
                            name: s.z.string().nullish(),
                            arguments: s.z.string().nullish(),
                          }),
                        })
                      )
                      .nullish(),
                  })
                  .nullish(),
                logprobs: s.z
                  .object({
                    content: s.z
                      .array(
                        s.z.object({
                          token: s.z.string(),
                          logprob: s.z.number(),
                          top_logprobs: s.z.array(
                            s.z.object({
                              token: s.z.string(),
                              logprob: s.z.number(),
                            })
                          ),
                        })
                      )
                      .nullable(),
                  })
                  .nullish(),
                finish_reason: s.z.string().nullish(),
                index: s.z.number(),
              })
            ),
            usage: d,
          }),
          l,
        ]);
      function g(e) {
        return e.startsWith("o");
      }
      var f = {
        "o1-mini": { systemMessageMode: "remove" },
        "o1-mini-2024-09-12": { systemMessageMode: "remove" },
        "o1-preview": { systemMessageMode: "remove" },
        "o1-preview-2024-09-12": { systemMessageMode: "remove" },
        o3: { systemMessageMode: "developer" },
        "o3-2025-04-16": { systemMessageMode: "developer" },
        "o3-mini": { systemMessageMode: "developer" },
        "o3-mini-2025-01-31": { systemMessageMode: "developer" },
        "o4-mini": { systemMessageMode: "developer" },
        "o4-mini-2025-04-16": { systemMessageMode: "developer" },
      };
      function y(e) {
        return null == e
          ? void 0
          : e.tokens.map((t, r) => ({
              token: t,
              logprob: e.token_logprobs[r],
              topLogprobs: e.top_logprobs
                ? Object.entries(e.top_logprobs[r]).map(([e, t]) => ({
                    token: e,
                    logprob: t,
                  }))
                : [],
            }));
      }
      var v = class {
          constructor(e, t, r) {
            (this.specificationVersion = "v1"),
              (this.defaultObjectGenerationMode = void 0),
              (this.modelId = e),
              (this.settings = t),
              (this.config = r);
          }
          get provider() {
            return this.config.provider;
          }
          getArgs({
            mode: e,
            inputFormat: t,
            prompt: r,
            maxTokens: a,
            temperature: s,
            topP: o,
            topK: i,
            frequencyPenalty: l,
            presencePenalty: u,
            stopSequences: p,
            responseFormat: c,
            seed: d,
          }) {
            var m;
            let h = e.type,
              g = [];
            null != i &&
              g.push({ type: "unsupported-setting", setting: "topK" }),
              null != c &&
                "text" !== c.type &&
                g.push({
                  type: "unsupported-setting",
                  setting: "responseFormat",
                  details: "JSON response format is not supported.",
                });
            let { prompt: f, stopSequences: y } = (function ({
                prompt: e,
                inputFormat: t,
                user: r = "user",
                assistant: a = "assistant",
              }) {
                if (
                  "prompt" === t &&
                  1 === e.length &&
                  "user" === e[0].role &&
                  1 === e[0].content.length &&
                  "text" === e[0].content[0].type
                )
                  return { prompt: e[0].content[0].text };
                let s = "";
                for (let { role: t, content: o } of ("system" === e[0].role &&
                  ((s += `${e[0].content}

`),
                  (e = e.slice(1))),
                e))
                  switch (t) {
                    case "system":
                      throw new n.M3({
                        message:
                          "Unexpected system message in prompt: ${content}",
                        prompt: e,
                      });
                    case "user": {
                      let e = o
                        .map((e) => {
                          switch (e.type) {
                            case "text":
                              return e.text;
                            case "image":
                              throw new n.b8({ functionality: "images" });
                          }
                        })
                        .join("");
                      s += `${r}:
${e}

`;
                      break;
                    }
                    case "assistant": {
                      let e = o
                        .map((e) => {
                          switch (e.type) {
                            case "text":
                              return e.text;
                            case "tool-call":
                              throw new n.b8({
                                functionality: "tool-call messages",
                              });
                          }
                        })
                        .join("");
                      s += `${a}:
${e}

`;
                      break;
                    }
                    case "tool":
                      throw new n.b8({ functionality: "tool messages" });
                    default:
                      throw Error(`Unsupported role: ${t}`);
                  }
                return {
                  prompt: (s += `${a}:
`),
                  stopSequences: [
                    `
${r}:`,
                  ],
                };
              })({ prompt: r, inputFormat: t }),
              v = [...(null != y ? y : []), ...(null != p ? p : [])],
              b = {
                model: this.modelId,
                echo: this.settings.echo,
                logit_bias: this.settings.logitBias,
                logprobs:
                  "number" == typeof this.settings.logprobs
                    ? this.settings.logprobs
                    : "boolean" == typeof this.settings.logprobs &&
                        this.settings.logprobs
                      ? 0
                      : void 0,
                suffix: this.settings.suffix,
                user: this.settings.user,
                max_tokens: a,
                temperature: s,
                top_p: o,
                frequency_penalty: l,
                presence_penalty: u,
                seed: d,
                prompt: f,
                stop: v.length > 0 ? v : void 0,
              };
            switch (h) {
              case "regular":
                if (null == (m = e.tools) ? void 0 : m.length)
                  throw new n.b8({ functionality: "tools" });
                if (e.toolChoice)
                  throw new n.b8({ functionality: "toolChoice" });
                return { args: b, warnings: g };
              case "object-json":
                throw new n.b8({ functionality: "object-json mode" });
              case "object-tool":
                throw new n.b8({ functionality: "object-tool mode" });
              default:
                throw Error(`Unsupported type: ${h}`);
            }
          }
          async doGenerate(e) {
            let { args: t, warnings: r } = this.getArgs(e),
              {
                responseHeaders: n,
                value: s,
                rawValue: o,
              } = await (0, a.GU)({
                url: this.config.url({
                  path: "/completions",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: t,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.cV)(b),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              { prompt: l, ...c } = t,
              d = s.choices[0];
            return {
              text: d.text,
              usage: {
                promptTokens: s.usage.prompt_tokens,
                completionTokens: s.usage.completion_tokens,
              },
              finishReason: i(d.finish_reason),
              logprobs: y(d.logprobs),
              rawCall: { rawPrompt: l, rawSettings: c },
              rawResponse: { headers: n, body: o },
              response: p(s),
              warnings: r,
              request: { body: JSON.stringify(t) },
            };
          }
          async doStream(e) {
            let t,
              { args: r, warnings: n } = this.getArgs(e),
              s = {
                ...r,
                stream: !0,
                stream_options:
                  "strict" === this.config.compatibility
                    ? { include_usage: !0 }
                    : void 0,
              },
              { responseHeaders: o, value: l } = await (0, a.GU)({
                url: this.config.url({
                  path: "/completions",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: s,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.Ds)(_),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              { prompt: c, ...d } = r,
              m = "unknown",
              h = { promptTokens: Number.NaN, completionTokens: Number.NaN },
              g = !0;
            return {
              stream: l.pipeThrough(
                new TransformStream({
                  transform(e, r) {
                    if (!e.success) {
                      (m = "error"),
                        r.enqueue({ type: "error", error: e.error });
                      return;
                    }
                    let a = e.value;
                    if ("error" in a) {
                      (m = "error"),
                        r.enqueue({ type: "error", error: a.error });
                      return;
                    }
                    g &&
                      ((g = !1),
                      r.enqueue({ type: "response-metadata", ...p(a) })),
                      null != a.usage &&
                        (h = {
                          promptTokens: a.usage.prompt_tokens,
                          completionTokens: a.usage.completion_tokens,
                        });
                    let n = a.choices[0];
                    (null == n ? void 0 : n.finish_reason) != null &&
                      (m = i(n.finish_reason)),
                      (null == n ? void 0 : n.text) != null &&
                        r.enqueue({ type: "text-delta", textDelta: n.text });
                    let s = y(null == n ? void 0 : n.logprobs);
                    (null == s ? void 0 : s.length) &&
                      (void 0 === t && (t = []), t.push(...s));
                  },
                  flush(e) {
                    e.enqueue({
                      type: "finish",
                      finishReason: m,
                      logprobs: t,
                      usage: h,
                    });
                  },
                })
              ),
              rawCall: { rawPrompt: c, rawSettings: d },
              rawResponse: { headers: o },
              warnings: n,
              request: { body: JSON.stringify(s) },
            };
          }
        },
        b = s.z.object({
          id: s.z.string().nullish(),
          created: s.z.number().nullish(),
          model: s.z.string().nullish(),
          choices: s.z.array(
            s.z.object({
              text: s.z.string(),
              finish_reason: s.z.string(),
              logprobs: s.z
                .object({
                  tokens: s.z.array(s.z.string()),
                  token_logprobs: s.z.array(s.z.number()),
                  top_logprobs: s.z
                    .array(s.z.record(s.z.string(), s.z.number()))
                    .nullable(),
                })
                .nullish(),
            })
          ),
          usage: s.z.object({
            prompt_tokens: s.z.number(),
            completion_tokens: s.z.number(),
          }),
        }),
        _ = s.z.union([
          s.z.object({
            id: s.z.string().nullish(),
            created: s.z.number().nullish(),
            model: s.z.string().nullish(),
            choices: s.z.array(
              s.z.object({
                text: s.z.string(),
                finish_reason: s.z.string().nullish(),
                index: s.z.number(),
                logprobs: s.z
                  .object({
                    tokens: s.z.array(s.z.string()),
                    token_logprobs: s.z.array(s.z.number()),
                    top_logprobs: s.z
                      .array(s.z.record(s.z.string(), s.z.number()))
                      .nullable(),
                  })
                  .nullish(),
              })
            ),
            usage: s.z
              .object({
                prompt_tokens: s.z.number(),
                completion_tokens: s.z.number(),
              })
              .nullish(),
          }),
          l,
        ]),
        w = class {
          constructor(e, t, r) {
            (this.specificationVersion = "v1"),
              (this.modelId = e),
              (this.settings = t),
              (this.config = r);
          }
          get provider() {
            return this.config.provider;
          }
          get maxEmbeddingsPerCall() {
            var e;
            return null != (e = this.settings.maxEmbeddingsPerCall) ? e : 2048;
          }
          get supportsParallelCalls() {
            var e;
            return null == (e = this.settings.supportsParallelCalls) || e;
          }
          async doEmbed({ values: e, headers: t, abortSignal: r }) {
            if (e.length > this.maxEmbeddingsPerCall)
              throw new n.Ch({
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values: e,
              });
            let { responseHeaders: s, value: o } = await (0, a.GU)({
              url: this.config.url({
                path: "/embeddings",
                modelId: this.modelId,
              }),
              headers: (0, a.m2)(this.config.headers(), t),
              body: {
                model: this.modelId,
                input: e,
                encoding_format: "float",
                dimensions: this.settings.dimensions,
                user: this.settings.user,
              },
              failedResponseHandler: u,
              successfulResponseHandler: (0, a.cV)(x),
              abortSignal: r,
              fetch: this.config.fetch,
            });
            return {
              embeddings: o.data.map((e) => e.embedding),
              usage: o.usage ? { tokens: o.usage.prompt_tokens } : void 0,
              rawResponse: { headers: s },
            };
          }
        },
        x = s.z.object({
          data: s.z.array(s.z.object({ embedding: s.z.array(s.z.number()) })),
          usage: s.z.object({ prompt_tokens: s.z.number() }).nullish(),
        }),
        k = { "dall-e-3": 1, "dall-e-2": 10, "gpt-image-1": 10 },
        z = new Set(["gpt-image-1"]),
        T = class {
          constructor(e, t, r) {
            (this.modelId = e),
              (this.settings = t),
              (this.config = r),
              (this.specificationVersion = "v1");
          }
          get maxImagesPerCall() {
            var e, t;
            return null !=
              (t =
                null != (e = this.settings.maxImagesPerCall)
                  ? e
                  : k[this.modelId])
              ? t
              : 1;
          }
          get provider() {
            return this.config.provider;
          }
          async doGenerate({
            prompt: e,
            n: t,
            size: r,
            aspectRatio: n,
            seed: s,
            providerOptions: o,
            headers: i,
            abortSignal: l,
          }) {
            var p, c, d, m;
            let h = [];
            null != n &&
              h.push({
                type: "unsupported-setting",
                setting: "aspectRatio",
                details:
                  "This model does not support aspect ratio. Use `size` instead.",
              }),
              null != s &&
                h.push({ type: "unsupported-setting", setting: "seed" });
            let g =
                null !=
                (d =
                  null ==
                  (c =
                    null == (p = this.config._internal)
                      ? void 0
                      : p.currentDate)
                    ? void 0
                    : c.call(p))
                  ? d
                  : new Date(),
              { value: f, responseHeaders: y } = await (0, a.GU)({
                url: this.config.url({
                  path: "/images/generations",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), i),
                body: {
                  model: this.modelId,
                  prompt: e,
                  n: t,
                  size: r,
                  ...(null != (m = o.openai) ? m : {}),
                  ...(!z.has(this.modelId)
                    ? { response_format: "b64_json" }
                    : {}),
                },
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.cV)(I),
                abortSignal: l,
                fetch: this.config.fetch,
              });
            return {
              images: f.data.map((e) => e.b64_json),
              warnings: h,
              response: { timestamp: g, modelId: this.modelId, headers: y },
            };
          }
        },
        I = s.z.object({
          data: s.z.array(s.z.object({ b64_json: s.z.string() })),
        }),
        S = s.z.object({
          include: s.z.array(s.z.string()).nullish(),
          language: s.z.string().nullish(),
          prompt: s.z.string().nullish(),
          temperature: s.z.number().min(0).max(1).nullish().default(0),
          timestampGranularities: s.z
            .array(s.z.enum(["word", "segment"]))
            .nullish()
            .default(["segment"]),
        }),
        E = {
          afrikaans: "af",
          arabic: "ar",
          armenian: "hy",
          azerbaijani: "az",
          belarusian: "be",
          bosnian: "bs",
          bulgarian: "bg",
          catalan: "ca",
          chinese: "zh",
          croatian: "hr",
          czech: "cs",
          danish: "da",
          dutch: "nl",
          english: "en",
          estonian: "et",
          finnish: "fi",
          french: "fr",
          galician: "gl",
          german: "de",
          greek: "el",
          hebrew: "he",
          hindi: "hi",
          hungarian: "hu",
          icelandic: "is",
          indonesian: "id",
          italian: "it",
          japanese: "ja",
          kannada: "kn",
          kazakh: "kk",
          korean: "ko",
          latvian: "lv",
          lithuanian: "lt",
          macedonian: "mk",
          malay: "ms",
          marathi: "mr",
          maori: "mi",
          nepali: "ne",
          norwegian: "no",
          persian: "fa",
          polish: "pl",
          portuguese: "pt",
          romanian: "ro",
          russian: "ru",
          serbian: "sr",
          slovak: "sk",
          slovenian: "sl",
          spanish: "es",
          swahili: "sw",
          swedish: "sv",
          tagalog: "tl",
          tamil: "ta",
          thai: "th",
          turkish: "tr",
          ukrainian: "uk",
          urdu: "ur",
          vietnamese: "vi",
          welsh: "cy",
        },
        j = class {
          constructor(e, t) {
            (this.modelId = e),
              (this.config = t),
              (this.specificationVersion = "v1");
          }
          get provider() {
            return this.config.provider;
          }
          getArgs({ audio: e, mediaType: t, providerOptions: r }) {
            var n, s, o, i, l;
            let u = (0, a.xI)({
                provider: "openai",
                providerOptions: r,
                schema: S,
              }),
              p = new FormData(),
              c =
                e instanceof Uint8Array
                  ? new Blob([e])
                  : new Blob([(0, a.Z9)(e)]);
            if (
              (p.append("model", this.modelId),
              p.append("file", new File([c], "audio", { type: t })),
              u)
            ) {
              let e = {
                include: null != (n = u.include) ? n : void 0,
                language: null != (s = u.language) ? s : void 0,
                prompt: null != (o = u.prompt) ? o : void 0,
                temperature: null != (i = u.temperature) ? i : void 0,
                timestamp_granularities:
                  null != (l = u.timestampGranularities) ? l : void 0,
              };
              for (let t in e) {
                let r = e[t];
                void 0 !== r && p.append(t, String(r));
              }
            }
            return { formData: p, warnings: [] };
          }
          async doGenerate(e) {
            var t, r, n, s, o, i;
            let l =
                null !=
                (n =
                  null ==
                  (r =
                    null == (t = this.config._internal)
                      ? void 0
                      : t.currentDate)
                    ? void 0
                    : r.call(t))
                  ? n
                  : new Date(),
              { formData: p, warnings: c } = this.getArgs(e),
              {
                value: d,
                responseHeaders: m,
                rawValue: h,
              } = await (0, a.S)({
                url: this.config.url({
                  path: "/audio/transcriptions",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                formData: p,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.cV)(R),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              g =
                null != d.language && d.language in E ? E[d.language] : void 0;
            return {
              text: d.text,
              segments:
                null !=
                (o =
                  null == (s = d.words)
                    ? void 0
                    : s.map((e) => ({
                        text: e.word,
                        startSecond: e.start,
                        endSecond: e.end,
                      })))
                  ? o
                  : [],
              language: g,
              durationInSeconds: null != (i = d.duration) ? i : void 0,
              warnings: c,
              response: {
                timestamp: l,
                modelId: this.modelId,
                headers: m,
                body: h,
              },
            };
          }
        },
        R = s.z.object({
          text: s.z.string(),
          language: s.z.string().nullish(),
          duration: s.z.number().nullish(),
          words: s.z
            .array(
              s.z.object({
                word: s.z.string(),
                start: s.z.number(),
                end: s.z.number(),
              })
            )
            .nullish(),
        });
      function C({ finishReason: e, hasToolCalls: t }) {
        switch (e) {
          case void 0:
          case null:
            return t ? "tool-calls" : "stop";
          case "max_output_tokens":
            return "length";
          case "content_filter":
            return "content-filter";
          default:
            return t ? "tool-calls" : "unknown";
        }
      }
      var A = class {
          constructor(e, t) {
            (this.specificationVersion = "v1"),
              (this.defaultObjectGenerationMode = "json"),
              (this.supportsStructuredOutputs = !0),
              (this.modelId = e),
              (this.config = t);
          }
          get provider() {
            return this.config.provider;
          }
          getArgs({
            mode: e,
            maxTokens: t,
            temperature: r,
            stopSequences: s,
            topP: o,
            topK: i,
            presencePenalty: l,
            frequencyPenalty: u,
            seed: p,
            prompt: c,
            providerMetadata: d,
            responseFormat: m,
          }) {
            var h, g, f, y;
            let v = [],
              b = (y = this.modelId).startsWith("o")
                ? y.startsWith("o1-mini") || y.startsWith("o1-preview")
                  ? {
                      isReasoningModel: !0,
                      systemMessageMode: "remove",
                      requiredAutoTruncation: !1,
                    }
                  : {
                      isReasoningModel: !0,
                      systemMessageMode: "developer",
                      requiredAutoTruncation: !1,
                    }
                : {
                    isReasoningModel: !1,
                    systemMessageMode: "system",
                    requiredAutoTruncation: !1,
                  },
              _ = e.type;
            null != i &&
              v.push({ type: "unsupported-setting", setting: "topK" }),
              null != p &&
                v.push({ type: "unsupported-setting", setting: "seed" }),
              null != l &&
                v.push({
                  type: "unsupported-setting",
                  setting: "presencePenalty",
                }),
              null != u &&
                v.push({
                  type: "unsupported-setting",
                  setting: "frequencyPenalty",
                }),
              null != s &&
                v.push({
                  type: "unsupported-setting",
                  setting: "stopSequences",
                });
            let { messages: w, warnings: x } = (function ({
              prompt: e,
              systemMessageMode: t,
            }) {
              let r = [],
                s = [];
              for (let { role: o, content: i } of e)
                switch (o) {
                  case "system":
                    switch (t) {
                      case "system":
                        r.push({ role: "system", content: i });
                        break;
                      case "developer":
                        r.push({ role: "developer", content: i });
                        break;
                      case "remove":
                        s.push({
                          type: "other",
                          message: "system messages are removed for this model",
                        });
                        break;
                      default:
                        throw Error(`Unsupported system message mode: ${t}`);
                    }
                    break;
                  case "user":
                    r.push({
                      role: "user",
                      content: i.map((e, t) => {
                        var r, s, o, i;
                        switch (e.type) {
                          case "text":
                            return { type: "input_text", text: e.text };
                          case "image":
                            return {
                              type: "input_image",
                              image_url:
                                e.image instanceof URL
                                  ? e.image.toString()
                                  : `data:${null != (r = e.mimeType) ? r : "image/jpeg"};base64,${(0, a.n_)(e.image)}`,
                              detail:
                                null ==
                                (o =
                                  null == (s = e.providerMetadata)
                                    ? void 0
                                    : s.openai)
                                  ? void 0
                                  : o.imageDetail,
                            };
                          case "file":
                            if (e.data instanceof URL)
                              throw new n.b8({
                                functionality: "File URLs in user messages",
                              });
                            if ("application/pdf" === e.mimeType)
                              return {
                                type: "input_file",
                                filename:
                                  null != (i = e.filename)
                                    ? i
                                    : `part-${t}.pdf`,
                                file_data: `data:application/pdf;base64,${e.data}`,
                              };
                            throw new n.b8({
                              functionality:
                                "Only PDF files are supported in user messages",
                            });
                        }
                      }),
                    });
                    break;
                  case "assistant":
                    for (let e of i)
                      switch (e.type) {
                        case "text":
                          r.push({
                            role: "assistant",
                            content: [{ type: "output_text", text: e.text }],
                          });
                          break;
                        case "tool-call":
                          r.push({
                            type: "function_call",
                            call_id: e.toolCallId,
                            name: e.toolName,
                            arguments: JSON.stringify(e.args),
                          });
                      }
                    break;
                  case "tool":
                    for (let e of i)
                      r.push({
                        type: "function_call_output",
                        call_id: e.toolCallId,
                        output: JSON.stringify(e.result),
                      });
                    break;
                  default:
                    throw Error(`Unsupported role: ${o}`);
                }
              return { messages: r, warnings: s };
            })({ prompt: c, systemMessageMode: b.systemMessageMode });
            v.push(...x);
            let k = (0, a.xI)({
                provider: "openai",
                providerOptions: d,
                schema: Z,
              }),
              z = null == (h = null == k ? void 0 : k.strictSchemas) || h,
              T = {
                model: this.modelId,
                input: w,
                temperature: r,
                top_p: o,
                max_output_tokens: t,
                ...((null == m ? void 0 : m.type) === "json" && {
                  text: {
                    format:
                      null != m.schema
                        ? {
                            type: "json_schema",
                            strict: z,
                            name: null != (g = m.name) ? g : "response",
                            description: m.description,
                            schema: m.schema,
                          }
                        : { type: "json_object" },
                  },
                }),
                metadata: null == k ? void 0 : k.metadata,
                parallel_tool_calls: null == k ? void 0 : k.parallelToolCalls,
                previous_response_id: null == k ? void 0 : k.previousResponseId,
                store: null == k ? void 0 : k.store,
                user: null == k ? void 0 : k.user,
                instructions: null == k ? void 0 : k.instructions,
                ...(b.isReasoningModel &&
                  ((null == k ? void 0 : k.reasoningEffort) != null ||
                    (null == k ? void 0 : k.reasoningSummary) != null) && {
                    reasoning: {
                      ...((null == k ? void 0 : k.reasoningEffort) != null && {
                        effort: k.reasoningEffort,
                      }),
                      ...((null == k ? void 0 : k.reasoningSummary) != null && {
                        summary: k.reasoningSummary,
                      }),
                    },
                  }),
                ...(b.requiredAutoTruncation && { truncation: "auto" }),
              };
            switch (
              (b.isReasoningModel &&
                (null != T.temperature &&
                  ((T.temperature = void 0),
                  v.push({
                    type: "unsupported-setting",
                    setting: "temperature",
                    details:
                      "temperature is not supported for reasoning models",
                  })),
                null != T.top_p &&
                  ((T.top_p = void 0),
                  v.push({
                    type: "unsupported-setting",
                    setting: "topP",
                    details: "topP is not supported for reasoning models",
                  }))),
              _)
            ) {
              case "regular": {
                let {
                  tools: t,
                  tool_choice: r,
                  toolWarnings: a,
                } = (function ({ mode: e, strict: t }) {
                  var r;
                  let a = (null == (r = e.tools) ? void 0 : r.length)
                      ? e.tools
                      : void 0,
                    s = [];
                  if (null == a)
                    return {
                      tools: void 0,
                      tool_choice: void 0,
                      toolWarnings: s,
                    };
                  let o = e.toolChoice,
                    i = [];
                  for (let e of a)
                    switch (e.type) {
                      case "function":
                        i.push({
                          type: "function",
                          name: e.name,
                          description: e.description,
                          parameters: e.parameters,
                          strict: !!t || void 0,
                        });
                        break;
                      case "provider-defined":
                        "openai.web_search_preview" === e.id
                          ? i.push({
                              type: "web_search_preview",
                              search_context_size: e.args.searchContextSize,
                              user_location: e.args.userLocation,
                            })
                          : s.push({ type: "unsupported-tool", tool: e });
                        break;
                      default:
                        s.push({ type: "unsupported-tool", tool: e });
                    }
                  if (null == o)
                    return { tools: i, tool_choice: void 0, toolWarnings: s };
                  let l = o.type;
                  switch (l) {
                    case "auto":
                    case "none":
                    case "required":
                      return { tools: i, tool_choice: l, toolWarnings: s };
                    case "tool":
                      if ("web_search_preview" === o.toolName)
                        return {
                          tools: i,
                          tool_choice: { type: "web_search_preview" },
                          toolWarnings: s,
                        };
                      return {
                        tools: i,
                        tool_choice: { type: "function", name: o.toolName },
                        toolWarnings: s,
                      };
                    default:
                      throw new n.b8({
                        functionality: `Unsupported tool choice type: ${l}`,
                      });
                  }
                })({ mode: e, strict: z });
                return {
                  args: { ...T, tools: t, tool_choice: r },
                  warnings: [...v, ...a],
                };
              }
              case "object-json":
                return {
                  args: {
                    ...T,
                    text: {
                      format:
                        null != e.schema
                          ? {
                              type: "json_schema",
                              strict: z,
                              name: null != (f = e.name) ? f : "response",
                              description: e.description,
                              schema: e.schema,
                            }
                          : { type: "json_object" },
                    },
                  },
                  warnings: v,
                };
              case "object-tool":
                return {
                  args: {
                    ...T,
                    tool_choice: { type: "function", name: e.tool.name },
                    tools: [
                      {
                        type: "function",
                        name: e.tool.name,
                        description: e.tool.description,
                        parameters: e.tool.parameters,
                        strict: z,
                      },
                    ],
                  },
                  warnings: v,
                };
              default:
                throw Error(`Unsupported type: ${_}`);
            }
          }
          async doGenerate(e) {
            var t, r, n, o, i, l, p;
            let { args: c, warnings: d } = this.getArgs(e),
              {
                responseHeaders: m,
                value: h,
                rawValue: g,
              } = await (0, a.GU)({
                url: this.config.url({
                  path: "/responses",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: c,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.cV)(
                  s.z.object({
                    id: s.z.string(),
                    created_at: s.z.number(),
                    model: s.z.string(),
                    output: s.z.array(
                      s.z.discriminatedUnion("type", [
                        s.z.object({
                          type: s.z.literal("message"),
                          role: s.z.literal("assistant"),
                          content: s.z.array(
                            s.z.object({
                              type: s.z.literal("output_text"),
                              text: s.z.string(),
                              annotations: s.z.array(
                                s.z.object({
                                  type: s.z.literal("url_citation"),
                                  start_index: s.z.number(),
                                  end_index: s.z.number(),
                                  url: s.z.string(),
                                  title: s.z.string(),
                                })
                              ),
                            })
                          ),
                        }),
                        s.z.object({
                          type: s.z.literal("function_call"),
                          call_id: s.z.string(),
                          name: s.z.string(),
                          arguments: s.z.string(),
                        }),
                        s.z.object({ type: s.z.literal("web_search_call") }),
                        s.z.object({ type: s.z.literal("computer_call") }),
                        s.z.object({
                          type: s.z.literal("reasoning"),
                          summary: s.z.array(
                            s.z.object({
                              type: s.z.literal("summary_text"),
                              text: s.z.string(),
                            })
                          ),
                        }),
                      ])
                    ),
                    incomplete_details: s.z
                      .object({ reason: s.z.string() })
                      .nullable(),
                    usage: N,
                  })
                ),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              f = h.output
                .filter((e) => "message" === e.type)
                .flatMap((e) => e.content)
                .filter((e) => "output_text" === e.type),
              y = h.output
                .filter((e) => "function_call" === e.type)
                .map((e) => ({
                  toolCallType: "function",
                  toolCallId: e.call_id,
                  toolName: e.name,
                  args: e.arguments,
                })),
              v =
                null !=
                (r =
                  null == (t = h.output.find((e) => "reasoning" === e.type))
                    ? void 0
                    : t.summary)
                  ? r
                  : null;
            return {
              text: f.map((e) => e.text).join("\n"),
              sources: f.flatMap((e) =>
                e.annotations.map((e) => {
                  var t, r, n;
                  return {
                    sourceType: "url",
                    id:
                      null !=
                      (n =
                        null == (r = (t = this.config).generateId)
                          ? void 0
                          : r.call(t))
                        ? n
                        : (0, a.$C)(),
                    url: e.url,
                    title: e.title,
                  };
                })
              ),
              finishReason: C({
                finishReason:
                  null == (n = h.incomplete_details) ? void 0 : n.reason,
                hasToolCalls: y.length > 0,
              }),
              toolCalls: y.length > 0 ? y : void 0,
              reasoning: v
                ? v.map((e) => ({ type: "text", text: e.text }))
                : void 0,
              usage: {
                promptTokens: h.usage.input_tokens,
                completionTokens: h.usage.output_tokens,
              },
              rawCall: { rawPrompt: void 0, rawSettings: {} },
              rawResponse: { headers: m, body: g },
              request: { body: JSON.stringify(c) },
              response: {
                id: h.id,
                timestamp: new Date(1e3 * h.created_at),
                modelId: h.model,
              },
              providerMetadata: {
                openai: {
                  responseId: h.id,
                  cachedPromptTokens:
                    null !=
                    (i =
                      null == (o = h.usage.input_tokens_details)
                        ? void 0
                        : o.cached_tokens)
                      ? i
                      : null,
                  reasoningTokens:
                    null !=
                    (p =
                      null == (l = h.usage.output_tokens_details)
                        ? void 0
                        : l.reasoning_tokens)
                      ? p
                      : null,
                },
              },
              warnings: d,
            };
          }
          async doStream(e) {
            let { args: t, warnings: r } = this.getArgs(e),
              { responseHeaders: n, value: s } = await (0, a.GU)({
                url: this.config.url({
                  path: "/responses",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: { ...t, stream: !0 },
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.Ds)(L),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              }),
              o = this,
              i = "unknown",
              l = NaN,
              p = NaN,
              c = null,
              d = null,
              m = null,
              h = {},
              g = !1;
            return {
              stream: s.pipeThrough(
                new TransformStream({
                  transform(e, t) {
                    var r, n, s, u, f, y, v, b, _;
                    if (!e.success) {
                      (i = "error"),
                        t.enqueue({ type: "error", error: e.error });
                      return;
                    }
                    let w = e.value;
                    if ("response.output_item.added" === w.type)
                      "function_call" === w.item.type &&
                        ((h[w.output_index] = {
                          toolName: w.item.name,
                          toolCallId: w.item.call_id,
                        }),
                        t.enqueue({
                          type: "tool-call-delta",
                          toolCallType: "function",
                          toolCallId: w.item.call_id,
                          toolName: w.item.name,
                          argsTextDelta: w.item.arguments,
                        }));
                    else if (
                      "response.function_call_arguments.delta" === w.type
                    ) {
                      let e = h[w.output_index];
                      null != e &&
                        t.enqueue({
                          type: "tool-call-delta",
                          toolCallType: "function",
                          toolCallId: e.toolCallId,
                          toolName: e.toolName,
                          argsTextDelta: w.delta,
                        });
                    } else {
                      "response.created" === w.type
                        ? ((m = w.response.id),
                          t.enqueue({
                            type: "response-metadata",
                            id: w.response.id,
                            timestamp: new Date(1e3 * w.response.created_at),
                            modelId: w.response.model,
                          }))
                        : "response.output_text.delta" === w.type
                          ? t.enqueue({
                              type: "text-delta",
                              textDelta: w.delta,
                            })
                          : "response.reasoning_summary_text.delta" === w.type
                            ? t.enqueue({
                                type: "reasoning",
                                textDelta: w.delta,
                              })
                            : "response.output_item.done" === w.type &&
                                "function_call" === w.item.type
                              ? ((h[w.output_index] = void 0),
                                (g = !0),
                                t.enqueue({
                                  type: "tool-call",
                                  toolCallType: "function",
                                  toolCallId: w.item.call_id,
                                  toolName: w.item.name,
                                  args: w.item.arguments,
                                }))
                              : "response.completed" === (_ = w).type ||
                                  "response.incomplete" === _.type
                                ? ((i = C({
                                    finishReason:
                                      null ==
                                      (r = w.response.incomplete_details)
                                        ? void 0
                                        : r.reason,
                                    hasToolCalls: g,
                                  })),
                                  (l = w.response.usage.input_tokens),
                                  (p = w.response.usage.output_tokens),
                                  (c =
                                    null !=
                                    (s =
                                      null ==
                                      (n =
                                        w.response.usage.input_tokens_details)
                                        ? void 0
                                        : n.cached_tokens)
                                      ? s
                                      : c),
                                  (d =
                                    null !=
                                    (f =
                                      null ==
                                      (u =
                                        w.response.usage.output_tokens_details)
                                        ? void 0
                                        : u.reasoning_tokens)
                                      ? f
                                      : d))
                                : "response.output_text.annotation.added" ===
                                    w.type &&
                                  t.enqueue({
                                    type: "source",
                                    source: {
                                      sourceType: "url",
                                      id:
                                        null !=
                                        (b =
                                          null ==
                                          (v = (y = o.config).generateId)
                                            ? void 0
                                            : v.call(y))
                                          ? b
                                          : (0, a.$C)(),
                                      url: w.annotation.url,
                                      title: w.annotation.title,
                                    },
                                  });
                    }
                  },
                  flush(e) {
                    e.enqueue({
                      type: "finish",
                      finishReason: i,
                      usage: { promptTokens: l, completionTokens: p },
                      ...((null != c || null != d) && {
                        providerMetadata: {
                          openai: {
                            responseId: m,
                            cachedPromptTokens: c,
                            reasoningTokens: d,
                          },
                        },
                      }),
                    });
                  },
                })
              ),
              rawCall: { rawPrompt: void 0, rawSettings: {} },
              rawResponse: { headers: n },
              request: { body: JSON.stringify(t) },
              warnings: r,
            };
          }
        },
        N = s.z.object({
          input_tokens: s.z.number(),
          input_tokens_details: s.z
            .object({ cached_tokens: s.z.number().nullish() })
            .nullish(),
          output_tokens: s.z.number(),
          output_tokens_details: s.z
            .object({ reasoning_tokens: s.z.number().nullish() })
            .nullish(),
        }),
        M = s.z.object({
          type: s.z.literal("response.output_text.delta"),
          delta: s.z.string(),
        }),
        P = s.z.object({
          type: s.z.enum(["response.completed", "response.incomplete"]),
          response: s.z.object({
            incomplete_details: s.z.object({ reason: s.z.string() }).nullish(),
            usage: N,
          }),
        }),
        O = s.z.object({
          type: s.z.literal("response.created"),
          response: s.z.object({
            id: s.z.string(),
            created_at: s.z.number(),
            model: s.z.string(),
          }),
        }),
        $ = s.z.object({
          type: s.z.literal("response.output_item.done"),
          output_index: s.z.number(),
          item: s.z.discriminatedUnion("type", [
            s.z.object({ type: s.z.literal("message") }),
            s.z.object({
              type: s.z.literal("function_call"),
              id: s.z.string(),
              call_id: s.z.string(),
              name: s.z.string(),
              arguments: s.z.string(),
              status: s.z.literal("completed"),
            }),
          ]),
        }),
        D = s.z.object({
          type: s.z.literal("response.function_call_arguments.delta"),
          item_id: s.z.string(),
          output_index: s.z.number(),
          delta: s.z.string(),
        }),
        q = s.z.object({
          type: s.z.literal("response.output_item.added"),
          output_index: s.z.number(),
          item: s.z.discriminatedUnion("type", [
            s.z.object({ type: s.z.literal("message") }),
            s.z.object({
              type: s.z.literal("function_call"),
              id: s.z.string(),
              call_id: s.z.string(),
              name: s.z.string(),
              arguments: s.z.string(),
            }),
          ]),
        }),
        U = s.z.object({
          type: s.z.literal("response.output_text.annotation.added"),
          annotation: s.z.object({
            type: s.z.literal("url_citation"),
            url: s.z.string(),
            title: s.z.string(),
          }),
        }),
        F = s.z.object({
          type: s.z.literal("response.reasoning_summary_text.delta"),
          item_id: s.z.string(),
          output_index: s.z.number(),
          summary_index: s.z.number(),
          delta: s.z.string(),
        }),
        L = s.z.union([
          M,
          P,
          O,
          $,
          D,
          q,
          U,
          F,
          s.z.object({ type: s.z.string() }).passthrough(),
        ]),
        Z = s.z.object({
          metadata: s.z.any().nullish(),
          parallelToolCalls: s.z.boolean().nullish(),
          previousResponseId: s.z.string().nullish(),
          store: s.z.boolean().nullish(),
          user: s.z.string().nullish(),
          reasoningEffort: s.z.string().nullish(),
          strictSchemas: s.z.boolean().nullish(),
          instructions: s.z.string().nullish(),
          reasoningSummary: s.z.string().nullish(),
        }),
        J = s.z.object({}),
        B = {
          webSearchPreview: function ({
            searchContextSize: e,
            userLocation: t,
          } = {}) {
            return {
              type: "provider-defined",
              id: "openai.web_search_preview",
              args: { searchContextSize: e, userLocation: t },
              parameters: J,
            };
          },
        },
        V = s.z.object({
          instructions: s.z.string().nullish(),
          speed: s.z.number().min(0.25).max(4).default(1).nullish(),
        }),
        Y = class {
          constructor(e, t) {
            (this.modelId = e),
              (this.config = t),
              (this.specificationVersion = "v1");
          }
          get provider() {
            return this.config.provider;
          }
          getArgs({
            text: e,
            voice: t = "alloy",
            outputFormat: r = "mp3",
            speed: n,
            instructions: s,
            providerOptions: o,
          }) {
            let i = [],
              l = (0, a.xI)({
                provider: "openai",
                providerOptions: o,
                schema: V,
              }),
              u = {
                model: this.modelId,
                input: e,
                voice: t,
                response_format: "mp3",
                speed: n,
                instructions: s,
              };
            if (
              (r &&
                (["mp3", "opus", "aac", "flac", "wav", "pcm"].includes(r)
                  ? (u.response_format = r)
                  : i.push({
                      type: "unsupported-setting",
                      setting: "outputFormat",
                      details: `Unsupported output format: ${r}. Using mp3 instead.`,
                    })),
              l)
            ) {
              let e = {};
              for (let t in e) {
                let r = e[t];
                void 0 !== r && (u[t] = r);
              }
            }
            return { requestBody: u, warnings: i };
          }
          async doGenerate(e) {
            var t, r, n;
            let s =
                null !=
                (n =
                  null ==
                  (r =
                    null == (t = this.config._internal)
                      ? void 0
                      : t.currentDate)
                    ? void 0
                    : r.call(t))
                  ? n
                  : new Date(),
              { requestBody: o, warnings: i } = this.getArgs(e),
              {
                value: l,
                responseHeaders: p,
                rawValue: c,
              } = await (0, a.GU)({
                url: this.config.url({
                  path: "/audio/speech",
                  modelId: this.modelId,
                }),
                headers: (0, a.m2)(this.config.headers(), e.headers),
                body: o,
                failedResponseHandler: u,
                successfulResponseHandler: (0, a.HD)(),
                abortSignal: e.abortSignal,
                fetch: this.config.fetch,
              });
            return {
              audio: l,
              warnings: i,
              request: { body: JSON.stringify(o) },
              response: {
                timestamp: s,
                modelId: this.modelId,
                headers: p,
                body: c,
              },
            };
          }
        };
      function G(e = {}) {
        var t, r, n;
        let s =
            null != (t = (0, a.ae)(e.baseURL))
              ? t
              : "https://api.openai.com/v1",
          o = null != (r = e.compatibility) ? r : "compatible",
          i = null != (n = e.name) ? n : "openai",
          l = () => ({
            Authorization: `Bearer ${(0, a.WL)({ apiKey: e.apiKey, environmentVariableName: "OPENAI_API_KEY", description: "OpenAI" })}`,
            "OpenAI-Organization": e.organization,
            "OpenAI-Project": e.project,
            ...e.headers,
          }),
          u = (t, r = {}) =>
            new c(t, r, {
              provider: `${i}.chat`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              compatibility: o,
              fetch: e.fetch,
            }),
          p = (t, r = {}) =>
            new v(t, r, {
              provider: `${i}.completion`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              compatibility: o,
              fetch: e.fetch,
            }),
          d = (t, r = {}) =>
            new w(t, r, {
              provider: `${i}.embedding`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              fetch: e.fetch,
            }),
          m = (t, r = {}) =>
            new T(t, r, {
              provider: `${i}.image`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              fetch: e.fetch,
            }),
          h = (t) =>
            new j(t, {
              provider: `${i}.transcription`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              fetch: e.fetch,
            }),
          g = (t) =>
            new Y(t, {
              provider: `${i}.speech`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              fetch: e.fetch,
            }),
          f = (e, t) => {
            if (new.target)
              throw Error(
                "The OpenAI model function cannot be called with the new keyword."
              );
            return "gpt-3.5-turbo-instruct" === e ? p(e, t) : u(e, t);
          },
          y = function (e, t) {
            return f(e, t);
          };
        return (
          (y.languageModel = f),
          (y.chat = u),
          (y.completion = p),
          (y.responses = (t) =>
            new A(t, {
              provider: `${i}.responses`,
              url: ({ path: e }) => `${s}${e}`,
              headers: l,
              fetch: e.fetch,
            })),
          (y.embedding = d),
          (y.textEmbedding = d),
          (y.textEmbeddingModel = d),
          (y.image = m),
          (y.imageModel = m),
          (y.transcription = h),
          (y.transcriptionModel = h),
          (y.speech = g),
          (y.speechModel = g),
          (y.tools = B),
          y
        );
      }
      var K = G({ compatibility: "strict" });
    },
    45175: (e) => {
      let t = "undefined" != typeof Buffer,
        r =
          /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
        a =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
      function n(e, n, o) {
        null == o &&
          null !== n &&
          "object" == typeof n &&
          ((o = n), (n = void 0)),
          t && Buffer.isBuffer(e) && (e = e.toString()),
          e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
        let i = JSON.parse(e, n);
        if (null === i || "object" != typeof i) return i;
        let l = (o && o.protoAction) || "error",
          u = (o && o.constructorAction) || "error";
        if ("ignore" === l && "ignore" === u) return i;
        if ("ignore" !== l && "ignore" !== u) {
          if (!1 === r.test(e) && !1 === a.test(e)) return i;
        } else if ("ignore" !== l && "ignore" === u) {
          if (!1 === r.test(e)) return i;
        } else if (!1 === a.test(e)) return i;
        return s(i, {
          protoAction: l,
          constructorAction: u,
          safe: o && o.safe,
        });
      }
      function s(
        e,
        {
          protoAction: t = "error",
          constructorAction: r = "error",
          safe: a,
        } = {}
      ) {
        let n = [e];
        for (; n.length; ) {
          let e = n;
          for (let s of ((n = []), e)) {
            if (
              "ignore" !== t &&
              Object.prototype.hasOwnProperty.call(s, "__proto__")
            ) {
              if (!0 === a) return null;
              if ("error" === t)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete s.__proto__;
            }
            if (
              "ignore" !== r &&
              Object.prototype.hasOwnProperty.call(s, "constructor") &&
              Object.prototype.hasOwnProperty.call(s.constructor, "prototype")
            ) {
              if (!0 === a) return null;
              if ("error" === r)
                throw SyntaxError(
                  "Object contains forbidden prototype property"
                );
              delete s.constructor;
            }
            for (let e in s) {
              let t = s[e];
              t && "object" == typeof t && n.push(t);
            }
          }
        }
        return e;
      }
      function o(e, t, r) {
        let a = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        try {
          return n(e, t, r);
        } finally {
          Error.stackTraceLimit = a;
        }
      }
      (e.exports = o),
        (e.exports.default = o),
        (e.exports.parse = o),
        (e.exports.safeParse = function (e, t) {
          let r = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            return n(e, t, { safe: !0 });
          } catch (e) {
            return null;
          } finally {
            Error.stackTraceLimit = r;
          }
        }),
        (e.exports.scan = s);
    },
    48106: (e, t, r) => {
      e.exports = r(44870);
    },
    64473: (e, t, r) => {
      r.d(t, {
        m2: () => o,
        NR: () => i,
        Z9: () => R,
        n_: () => C,
        HD: () => S,
        Ds: () => T,
        hK: () => p,
        sl: () => z,
        cV: () => I,
        cb: () => l,
        $C: () => c,
        u1: () => d,
        zf: () => m,
        v0: () => v,
        WL: () => h,
        xI: () => b,
        S: () => x,
        GU: () => w,
        N8: () => y,
        ZZ: () => f,
        eu: () => g,
        ae: () => A,
      });
      var a = r(81362);
      let n =
        (e, t = 21) =>
        (r = t) => {
          let a = "",
            n = 0 | r;
          for (; n--; ) a += e[(Math.random() * e.length) | 0];
          return a;
        };
      var s = r(45175);
      function o(...e) {
        return e.reduce((e, t) => ({ ...e, ...(null != t ? t : {}) }), {});
      }
      function i(e) {
        return new ReadableStream({
          async pull(t) {
            try {
              let { value: r, done: a } = await e.next();
              a ? t.close() : t.enqueue(r);
            } catch (e) {
              t.error(e);
            }
          },
          cancel() {},
        });
      }
      async function l(e) {
        return null == e
          ? Promise.resolve()
          : new Promise((t) => setTimeout(t, e));
      }
      function u(e) {
        let t = {};
        return (
          e.headers.forEach((e, r) => {
            t[r] = e;
          }),
          t
        );
      }
      var p = ({
          prefix: e,
          size: t = 16,
          alphabet:
            r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
          separator: s = "-",
        } = {}) => {
          let o = n(r, t);
          if (null == e) return o;
          if (r.includes(s))
            throw new a.Di({
              argument: "separator",
              message: `The separator "${s}" must not be part of the alphabet "${r}".`,
            });
          return (t) => `${e}${s}${o(t)}`;
        },
        c = p();
      function d(e) {
        return null == e
          ? "unknown error"
          : "string" == typeof e
            ? e
            : e instanceof Error
              ? e.message
              : JSON.stringify(e);
      }
      function m(e) {
        return (
          e instanceof Error &&
          ("AbortError" === e.name || "TimeoutError" === e.name)
        );
      }
      function h({
        apiKey: e,
        environmentVariableName: t,
        apiKeyParameterName: r = "apiKey",
        description: n,
      }) {
        if ("string" == typeof e) return e;
        if (null != e)
          throw new a.Kq({ message: `${n} API key must be a string.` });
        if ("undefined" == typeof process)
          throw new a.Kq({
            message: `${n} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`,
          });
        if (null == (e = process.env[t]))
          throw new a.Kq({
            message: `${n} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`,
          });
        if ("string" != typeof e)
          throw new a.Kq({
            message: `${n} API key must be a string. The value of the ${t} environment variable is not a string.`,
          });
        return e;
      }
      var g = Symbol.for("vercel.ai.validator");
      function f({ value: e, schema: t }) {
        var r;
        let n =
          "object" == typeof t &&
          null !== t &&
          g in t &&
          !0 === t[g] &&
          "validate" in t
            ? t
            : ((r = t),
              {
                [g]: !0,
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
            error: a.iM.wrap({ value: e, cause: t.error }),
          };
        } catch (t) {
          return { success: !1, error: a.iM.wrap({ value: e, cause: t }) };
        }
      }
      function y({ text: e, schema: t }) {
        try {
          let r = s.parse(e);
          if (null == t) return { success: !0, value: r, rawValue: r };
          let a = f({ value: r, schema: t });
          return a.success ? { ...a, rawValue: r } : a;
        } catch (t) {
          return {
            success: !1,
            error: a.u6.isInstance(t) ? t : new a.u6({ text: e, cause: t }),
          };
        }
      }
      function v(e) {
        try {
          return s.parse(e), !0;
        } catch (e) {
          return !1;
        }
      }
      function b({ provider: e, providerOptions: t, schema: r }) {
        if ((null == t ? void 0 : t[e]) == null) return;
        let n = f({ value: t[e], schema: r });
        if (!n.success)
          throw new a.Di({
            argument: "providerOptions",
            message: `invalid ${e} provider options`,
            cause: n.error,
          });
        return n.value;
      }
      var _ = () => globalThis.fetch,
        w = async ({
          url: e,
          headers: t,
          body: r,
          failedResponseHandler: a,
          successfulResponseHandler: n,
          abortSignal: s,
          fetch: o,
        }) =>
          k({
            url: e,
            headers: { "Content-Type": "application/json", ...t },
            body: { content: JSON.stringify(r), values: r },
            failedResponseHandler: a,
            successfulResponseHandler: n,
            abortSignal: s,
            fetch: o,
          }),
        x = async ({
          url: e,
          headers: t,
          formData: r,
          failedResponseHandler: a,
          successfulResponseHandler: n,
          abortSignal: s,
          fetch: o,
        }) =>
          k({
            url: e,
            headers: t,
            body: { content: r, values: Object.fromEntries(r.entries()) },
            failedResponseHandler: a,
            successfulResponseHandler: n,
            abortSignal: s,
            fetch: o,
          }),
        k = async ({
          url: e,
          headers: t = {},
          body: r,
          successfulResponseHandler: n,
          failedResponseHandler: s,
          abortSignal: o,
          fetch: i = _(),
        }) => {
          try {
            var l;
            let p = await i(e, {
                method: "POST",
                headers:
                  ((l = t),
                  Object.fromEntries(
                    Object.entries(l).filter(([e, t]) => null != t)
                  )),
                body: r.content,
                signal: o,
              }),
              c = u(p);
            if (!p.ok) {
              let t;
              try {
                t = await s({
                  response: p,
                  url: e,
                  requestBodyValues: r.values,
                });
              } catch (t) {
                if (m(t) || a.hL.isInstance(t)) throw t;
                throw new a.hL({
                  message: "Failed to process error response",
                  cause: t,
                  statusCode: p.status,
                  url: e,
                  responseHeaders: c,
                  requestBodyValues: r.values,
                });
              }
              throw t.value;
            }
            try {
              return await n({
                response: p,
                url: e,
                requestBodyValues: r.values,
              });
            } catch (t) {
              if (t instanceof Error && (m(t) || a.hL.isInstance(t))) throw t;
              throw new a.hL({
                message: "Failed to process successful response",
                cause: t,
                statusCode: p.status,
                url: e,
                responseHeaders: c,
                requestBodyValues: r.values,
              });
            }
          } catch (t) {
            if (m(t)) throw t;
            if (t instanceof TypeError && "fetch failed" === t.message) {
              let n = t.cause;
              if (null != n)
                throw new a.hL({
                  message: `Cannot connect to API: ${n.message}`,
                  cause: n,
                  url: e,
                  requestBodyValues: r.values,
                  isRetryable: !0,
                });
            }
            throw t;
          }
        },
        z =
          ({ errorSchema: e, errorToMessage: t, isRetryable: r }) =>
          async ({ response: n, url: o, requestBodyValues: i }) => {
            let l = await n.text(),
              p = u(n);
            if ("" === l.trim())
              return {
                responseHeaders: p,
                value: new a.hL({
                  message: n.statusText,
                  url: o,
                  requestBodyValues: i,
                  statusCode: n.status,
                  responseHeaders: p,
                  responseBody: l,
                  isRetryable: null == r ? void 0 : r(n),
                }),
              };
            try {
              let u = (function ({ text: e, schema: t }) {
                try {
                  let r = s.parse(e);
                  if (null == t) return r;
                  return (function ({ value: e, schema: t }) {
                    let r = f({ value: e, schema: t });
                    if (!r.success)
                      throw a.iM.wrap({ value: e, cause: r.error });
                    return r.value;
                  })({ value: r, schema: t });
                } catch (t) {
                  if (a.u6.isInstance(t) || a.iM.isInstance(t)) throw t;
                  throw new a.u6({ text: e, cause: t });
                }
              })({ text: l, schema: e });
              return {
                responseHeaders: p,
                value: new a.hL({
                  message: t(u),
                  url: o,
                  requestBodyValues: i,
                  statusCode: n.status,
                  responseHeaders: p,
                  responseBody: l,
                  data: u,
                  isRetryable: null == r ? void 0 : r(n, u),
                }),
              };
            } catch (e) {
              return {
                responseHeaders: p,
                value: new a.hL({
                  message: n.statusText,
                  url: o,
                  requestBodyValues: i,
                  statusCode: n.status,
                  responseHeaders: p,
                  responseBody: l,
                  isRetryable: null == r ? void 0 : r(n),
                }),
              };
            }
          },
        T =
          (e) =>
          async ({ response: t }) => {
            let r = u(t);
            if (null == t.body) throw new a.Tt({});
            return {
              responseHeaders: r,
              value: t.body
                .pipeThrough(new TextDecoderStream())
                .pipeThrough(
                  (function () {
                    let e,
                      t,
                      r,
                      a = "",
                      n = [];
                    function s(e, t) {
                      if ("" === e) return void o(t);
                      if (e.startsWith(":")) return;
                      let r = e.indexOf(":");
                      if (-1 === r) return void i(e, "");
                      let a = e.slice(0, r),
                        n = r + 1;
                      i(
                        a,
                        n < e.length && " " === e[n]
                          ? e.slice(n + 1)
                          : e.slice(n)
                      );
                    }
                    function o(a) {
                      n.length > 0 &&
                        (a.enqueue({
                          event: e,
                          data: n.join("\n"),
                          id: t,
                          retry: r,
                        }),
                        (n = []),
                        (e = void 0),
                        (r = void 0));
                    }
                    function i(a, s) {
                      switch (a) {
                        case "event":
                          e = s;
                          break;
                        case "data":
                          n.push(s);
                          break;
                        case "id":
                          t = s;
                          break;
                        case "retry":
                          let o = parseInt(s, 10);
                          isNaN(o) || (r = o);
                      }
                    }
                    return new TransformStream({
                      transform(e, t) {
                        let { lines: r, incompleteLine: n } = (function (e, t) {
                          let r = [],
                            a = e;
                          for (let e = 0; e < t.length; ) {
                            let n = t[e++];
                            "\n" === n
                              ? (r.push(a), (a = ""))
                              : "\r" === n
                                ? (r.push(a), (a = ""), "\n" === t[e] && e++)
                                : (a += n);
                          }
                          return { lines: r, incompleteLine: a };
                        })(a, e);
                        a = n;
                        for (let e = 0; e < r.length; e++) s(r[e], t);
                      },
                      flush(e) {
                        s(a, e), o(e);
                      },
                    });
                  })()
                )
                .pipeThrough(
                  new TransformStream({
                    transform({ data: t }, r) {
                      "[DONE]" !== t && r.enqueue(y({ text: t, schema: e }));
                    },
                  })
                ),
            };
          },
        I =
          (e) =>
          async ({ response: t, url: r, requestBodyValues: n }) => {
            let s = await t.text(),
              o = y({ text: s, schema: e }),
              i = u(t);
            if (!o.success)
              throw new a.hL({
                message: "Invalid JSON response",
                cause: o.error,
                statusCode: t.status,
                responseHeaders: i,
                responseBody: s,
                url: r,
                requestBodyValues: n,
              });
            return { responseHeaders: i, value: o.value, rawValue: o.rawValue };
          },
        S =
          () =>
          async ({ response: e, url: t, requestBodyValues: r }) => {
            let n = u(e);
            if (!e.body)
              throw new a.hL({
                message: "Response body is empty",
                url: t,
                requestBodyValues: r,
                statusCode: e.status,
                responseHeaders: n,
                responseBody: void 0,
              });
            try {
              let t = await e.arrayBuffer();
              return { responseHeaders: n, value: new Uint8Array(t) };
            } catch (s) {
              throw new a.hL({
                message: "Failed to read response as array buffer",
                url: t,
                requestBodyValues: r,
                statusCode: e.status,
                responseHeaders: n,
                responseBody: void 0,
                cause: s,
              });
            }
          },
        { btoa: E, atob: j } = globalThis;
      function R(e) {
        let t = j(e.replace(/-/g, "+").replace(/_/g, "/"));
        return Uint8Array.from(t, (e) => e.codePointAt(0));
      }
      function C(e) {
        let t = "";
        for (let r = 0; r < e.length; r++) t += String.fromCodePoint(e[r]);
        return E(t);
      }
      function A(e) {
        return null == e ? void 0 : e.replace(/\/$/, "");
      }
    },
    65942: (e, t, r) => {
      let a;
      r.d(t, { Df: () => ri, gM: () => rT });
      var n,
        s,
        o,
        i,
        l,
        u,
        p,
        c,
        d,
        m,
        h,
        g,
        f,
        y,
        v,
        b,
        _ = r(81362),
        w = r(64473),
        x = r(60384),
        k = r(61164),
        z = r(16151);
      let T = Symbol("Let zodToJsonSchema decide on which parser to use"),
        I = {
          name: void 0,
          $refStrategy: "root",
          basePath: ["#"],
          effectStrategy: "input",
          pipeStrategy: "all",
          dateStrategy: "format:date-time",
          mapStrategy: "entries",
          removeAdditionalStrategy: "passthrough",
          allowedAdditionalProperties: !0,
          rejectedAdditionalProperties: !1,
          definitionPath: "definitions",
          target: "jsonSchema7",
          strictUnions: !1,
          definitions: {},
          errorMessages: !1,
          markdownDescription: !1,
          patternStrategy: "escape",
          applyRegexFlags: !1,
          emailStrategy: "format:email",
          base64Strategy: "contentEncoding:base64",
          nameStrategy: "ref",
        },
        S = (e) => ("string" == typeof e ? { ...I, name: e } : { ...I, ...e }),
        E = (e) => {
          let t = S(e),
            r =
              void 0 !== t.name
                ? [...t.basePath, t.definitionPath, t.name]
                : t.basePath;
          return {
            ...t,
            currentPath: r,
            propertyPath: void 0,
            seen: new Map(
              Object.entries(t.definitions).map(([e, r]) => [
                r._def,
                {
                  def: r._def,
                  path: [...t.basePath, t.definitionPath, e],
                  jsonSchema: void 0,
                },
              ])
            ),
          };
        };
      function j(e, t, r, a) {
        a?.errorMessages &&
          r &&
          (e.errorMessage = { ...e.errorMessage, [t]: r });
      }
      function R(e, t, r, a, n) {
        (e[t] = r), j(e, t, a, n);
      }
      function C(e, t) {
        return K(e.type._def, t);
      }
      let A = (e, t) => K(e.innerType._def, t),
        N = (e, t) => {
          let r = { type: "integer", format: "unix-time" };
          if ("openApi3" === t.target) return r;
          for (let a of e.checks)
            switch (a.kind) {
              case "min":
                R(r, "minimum", a.value, a.message, t);
                break;
              case "max":
                R(r, "maximum", a.value, a.message, t);
            }
          return r;
        },
        M = (e) => (!("type" in e) || "string" !== e.type) && "allOf" in e,
        P = {
          cuid: /^[cC][^\s-]{8,}$/,
          cuid2: /^[0-9a-z]+$/,
          ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
          email:
            /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
          emoji: () => (
            void 0 === a &&
              (a = RegExp(
                "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                "u"
              )),
            a
          ),
          ipv4Cidr:
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
          ipv6Cidr:
            /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
          base64:
            /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
          base64url:
            /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
          nanoid: /^[a-zA-Z0-9_-]{21}$/,
          jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        };
      function O(e, t) {
        let r = { type: "string" };
        if (e.checks)
          for (let a of e.checks)
            switch (a.kind) {
              case "min":
                R(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, a.value)
                    : a.value,
                  a.message,
                  t
                );
                break;
              case "max":
                R(
                  r,
                  "maxLength",
                  "number" == typeof r.maxLength
                    ? Math.min(r.maxLength, a.value)
                    : a.value,
                  a.message,
                  t
                );
                break;
              case "email":
                switch (t.emailStrategy) {
                  case "format:email":
                    q(r, "email", a.message, t);
                    break;
                  case "format:idn-email":
                    q(r, "idn-email", a.message, t);
                    break;
                  case "pattern:zod":
                    U(r, P.email, a.message, t);
                }
                break;
              case "url":
                q(r, "uri", a.message, t);
                break;
              case "uuid":
                q(r, "uuid", a.message, t);
                break;
              case "regex":
                U(r, a.regex, a.message, t);
                break;
              case "cuid":
                U(r, P.cuid, a.message, t);
                break;
              case "cuid2":
                U(r, P.cuid2, a.message, t);
                break;
              case "startsWith":
                U(r, RegExp(`^${$(a.value, t)}`), a.message, t);
                break;
              case "endsWith":
                U(r, RegExp(`${$(a.value, t)}$`), a.message, t);
                break;
              case "datetime":
                q(r, "date-time", a.message, t);
                break;
              case "date":
                q(r, "date", a.message, t);
                break;
              case "time":
                q(r, "time", a.message, t);
                break;
              case "duration":
                q(r, "duration", a.message, t);
                break;
              case "length":
                R(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, a.value)
                    : a.value,
                  a.message,
                  t
                ),
                  R(
                    r,
                    "maxLength",
                    "number" == typeof r.maxLength
                      ? Math.min(r.maxLength, a.value)
                      : a.value,
                    a.message,
                    t
                  );
                break;
              case "includes":
                U(r, RegExp($(a.value, t)), a.message, t);
                break;
              case "ip":
                "v6" !== a.version && q(r, "ipv4", a.message, t),
                  "v4" !== a.version && q(r, "ipv6", a.message, t);
                break;
              case "base64url":
                U(r, P.base64url, a.message, t);
                break;
              case "jwt":
                U(r, P.jwt, a.message, t);
                break;
              case "cidr":
                "v6" !== a.version && U(r, P.ipv4Cidr, a.message, t),
                  "v4" !== a.version && U(r, P.ipv6Cidr, a.message, t);
                break;
              case "emoji":
                U(r, P.emoji(), a.message, t);
                break;
              case "ulid":
                U(r, P.ulid, a.message, t);
                break;
              case "base64":
                switch (t.base64Strategy) {
                  case "format:binary":
                    q(r, "binary", a.message, t);
                    break;
                  case "contentEncoding:base64":
                    R(r, "contentEncoding", "base64", a.message, t);
                    break;
                  case "pattern:zod":
                    U(r, P.base64, a.message, t);
                }
                break;
              case "nanoid":
                U(r, P.nanoid, a.message, t);
            }
        return r;
      }
      function $(e, t) {
        return "escape" === t.patternStrategy
          ? (function (e) {
              let t = "";
              for (let r = 0; r < e.length; r++)
                D.has(e[r]) || (t += "\\"), (t += e[r]);
              return t;
            })(e)
          : e;
      }
      let D = new Set(
        "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
      );
      function q(e, t, r, a) {
        e.format || e.anyOf?.some((e) => e.format)
          ? (e.anyOf || (e.anyOf = []),
            e.format &&
              (e.anyOf.push({
                format: e.format,
                ...(e.errorMessage &&
                  a.errorMessages && {
                    errorMessage: { format: e.errorMessage.format },
                  }),
              }),
              delete e.format,
              e.errorMessage &&
                (delete e.errorMessage.format,
                0 === Object.keys(e.errorMessage).length &&
                  delete e.errorMessage)),
            e.anyOf.push({
              format: t,
              ...(r && a.errorMessages && { errorMessage: { format: r } }),
            }))
          : R(e, "format", t, r, a);
      }
      function U(e, t, r, a) {
        e.pattern || e.allOf?.some((e) => e.pattern)
          ? (e.allOf || (e.allOf = []),
            e.pattern &&
              (e.allOf.push({
                pattern: e.pattern,
                ...(e.errorMessage &&
                  a.errorMessages && {
                    errorMessage: { pattern: e.errorMessage.pattern },
                  }),
              }),
              delete e.pattern,
              e.errorMessage &&
                (delete e.errorMessage.pattern,
                0 === Object.keys(e.errorMessage).length &&
                  delete e.errorMessage)),
            e.allOf.push({
              pattern: F(t, a),
              ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
            }))
          : R(e, "pattern", F(t, a), r, a);
      }
      function F(e, t) {
        if (!t.applyRegexFlags || !e.flags) return e.source;
        let r = {
            i: e.flags.includes("i"),
            m: e.flags.includes("m"),
            s: e.flags.includes("s"),
          },
          a = r.i ? e.source.toLowerCase() : e.source,
          n = "",
          s = !1,
          o = !1,
          i = !1;
        for (let e = 0; e < a.length; e++) {
          if (s) {
            (n += a[e]), (s = !1);
            continue;
          }
          if (r.i) {
            if (o) {
              if (a[e].match(/[a-z]/)) {
                i
                  ? ((n += a[e]),
                    (n += `${a[e - 2]}-${a[e]}`.toUpperCase()),
                    (i = !1))
                  : "-" === a[e + 1] && a[e + 2]?.match(/[a-z]/)
                    ? ((n += a[e]), (i = !0))
                    : (n += `${a[e]}${a[e].toUpperCase()}`);
                continue;
              }
            } else if (a[e].match(/[a-z]/)) {
              n += `[${a[e]}${a[e].toUpperCase()}]`;
              continue;
            }
          }
          if (r.m) {
            if ("^" === a[e]) {
              n += `(^|(?<=[\r
]))`;
              continue;
            } else if ("$" === a[e]) {
              n += `($|(?=[\r
]))`;
              continue;
            }
          }
          if (r.s && "." === a[e]) {
            n += o
              ? `${a[e]}\r
`
              : `[${a[e]}\r
]`;
            continue;
          }
          (n += a[e]),
            "\\" === a[e]
              ? (s = !0)
              : o && "]" === a[e]
                ? (o = !1)
                : o || "[" !== a[e] || (o = !0);
        }
        try {
          new RegExp(n);
        } catch {
          return (
            console.warn(
              `Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`
            ),
            e.source
          );
        }
        return n;
      }
      function L(e, t) {
        if (
          ("openAi" === t.target &&
            console.warn(
              "Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."
            ),
          "openApi3" === t.target && e.keyType?._def.typeName === z.kY.ZodEnum)
        )
          return {
            type: "object",
            required: e.keyType._def.values,
            properties: e.keyType._def.values.reduce(
              (r, a) => ({
                ...r,
                [a]:
                  K(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "properties", a],
                  }) ?? {},
              }),
              {}
            ),
            additionalProperties: t.rejectedAdditionalProperties,
          };
        let r = {
          type: "object",
          additionalProperties:
            K(e.valueType._def, {
              ...t,
              currentPath: [...t.currentPath, "additionalProperties"],
            }) ?? t.allowedAdditionalProperties,
        };
        if ("openApi3" === t.target) return r;
        if (
          e.keyType?._def.typeName === z.kY.ZodString &&
          e.keyType._def.checks?.length
        ) {
          let { type: a, ...n } = O(e.keyType._def, t);
          return { ...r, propertyNames: n };
        }
        if (e.keyType?._def.typeName === z.kY.ZodEnum)
          return { ...r, propertyNames: { enum: e.keyType._def.values } };
        if (
          e.keyType?._def.typeName === z.kY.ZodBranded &&
          e.keyType._def.type._def.typeName === z.kY.ZodString &&
          e.keyType._def.type._def.checks?.length
        ) {
          let { type: a, ...n } = C(e.keyType._def, t);
          return { ...r, propertyNames: n };
        }
        return r;
      }
      let Z = {
          ZodString: "string",
          ZodNumber: "number",
          ZodBigInt: "integer",
          ZodBoolean: "boolean",
          ZodNull: "null",
        },
        J = (e, t) => {
          let r = (
            e.options instanceof Map
              ? Array.from(e.options.values())
              : e.options
          )
            .map((e, r) =>
              K(e._def, {
                ...t,
                currentPath: [...t.currentPath, "anyOf", `${r}`],
              })
            )
            .filter(
              (e) =>
                !!e &&
                (!t.strictUnions ||
                  ("object" == typeof e && Object.keys(e).length > 0))
            );
          return r.length ? { anyOf: r } : void 0;
        },
        B = (e, t) => {
          if (t.currentPath.toString() === t.propertyPath?.toString())
            return K(e.innerType._def, t);
          let r = K(e.innerType._def, {
            ...t,
            currentPath: [...t.currentPath, "anyOf", "1"],
          });
          return r ? { anyOf: [{ not: {} }, r] } : {};
        },
        V = (e, t) => {
          if ("input" === t.pipeStrategy) return K(e.in._def, t);
          if ("output" === t.pipeStrategy) return K(e.out._def, t);
          let r = K(e.in._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", "0"],
            }),
            a = K(e.out._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", r ? "1" : "0"],
            });
          return { allOf: [r, a].filter((e) => void 0 !== e) };
        },
        Y = (e, t) => K(e.innerType._def, t),
        G = (e, t, r) => {
          switch (t) {
            case z.kY.ZodString:
              return O(e, r);
            case z.kY.ZodNumber:
              return (function (e, t) {
                let r = { type: "number" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "int":
                      (r.type = "integer"), j(r, "type", a.message, t);
                      break;
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? R(r, "minimum", a.value, a.message, t)
                          : R(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          R(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? R(r, "maximum", a.value, a.message, t)
                          : R(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          R(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      R(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case z.kY.ZodObject:
              return (function (e, t) {
                let r = "openAi" === t.target,
                  a = { type: "object", properties: {} },
                  n = [],
                  s = e.shape();
                for (let e in s) {
                  let o = s[e];
                  if (void 0 === o || void 0 === o._def) continue;
                  let i = (function (e) {
                    try {
                      return e.isOptional();
                    } catch {
                      return !0;
                    }
                  })(o);
                  i &&
                    r &&
                    (o instanceof z.Ii && (o = o._def.innerType),
                    o.isNullable() || (o = o.nullable()),
                    (i = !1));
                  let l = K(o._def, {
                    ...t,
                    currentPath: [...t.currentPath, "properties", e],
                    propertyPath: [...t.currentPath, "properties", e],
                  });
                  void 0 !== l && ((a.properties[e] = l), i || n.push(e));
                }
                n.length && (a.required = n);
                let o = (function (e, t) {
                  if ("ZodNever" !== e.catchall._def.typeName)
                    return K(e.catchall._def, {
                      ...t,
                      currentPath: [...t.currentPath, "additionalProperties"],
                    });
                  switch (e.unknownKeys) {
                    case "passthrough":
                      return t.allowedAdditionalProperties;
                    case "strict":
                      return t.rejectedAdditionalProperties;
                    case "strip":
                      return "strict" === t.removeAdditionalStrategy
                        ? t.allowedAdditionalProperties
                        : t.rejectedAdditionalProperties;
                  }
                })(e, t);
                return void 0 !== o && (a.additionalProperties = o), a;
              })(e, r);
            case z.kY.ZodBigInt:
              return (function (e, t) {
                let r = { type: "integer", format: "int64" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? R(r, "minimum", a.value, a.message, t)
                          : R(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          R(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? R(r, "maximum", a.value, a.message, t)
                          : R(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          R(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      R(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case z.kY.ZodBoolean:
              return { type: "boolean" };
            case z.kY.ZodDate:
              return (function e(t, r, a) {
                let n = a ?? r.dateStrategy;
                if (Array.isArray(n))
                  return { anyOf: n.map((a, n) => e(t, r, a)) };
                switch (n) {
                  case "string":
                  case "format:date-time":
                    return { type: "string", format: "date-time" };
                  case "format:date":
                    return { type: "string", format: "date" };
                  case "integer":
                    return N(t, r);
                }
              })(e, r);
            case z.kY.ZodUndefined:
              return { not: {} };
            case z.kY.ZodNull:
              return "openApi3" === r.target
                ? { enum: ["null"], nullable: !0 }
                : { type: "null" };
            case z.kY.ZodArray:
              return (function (e, t) {
                let r = { type: "array" };
                return (
                  e.type?._def &&
                    e.type?._def?.typeName !== z.kY.ZodAny &&
                    (r.items = K(e.type._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items"],
                    })),
                  e.minLength &&
                    R(r, "minItems", e.minLength.value, e.minLength.message, t),
                  e.maxLength &&
                    R(r, "maxItems", e.maxLength.value, e.maxLength.message, t),
                  e.exactLength &&
                    (R(
                      r,
                      "minItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    ),
                    R(
                      r,
                      "maxItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    )),
                  r
                );
              })(e, r);
            case z.kY.ZodUnion:
            case z.kY.ZodDiscriminatedUnion:
              return (function (e, t) {
                if ("openApi3" === t.target) return J(e, t);
                let r =
                  e.options instanceof Map
                    ? Array.from(e.options.values())
                    : e.options;
                if (
                  r.every(
                    (e) =>
                      e._def.typeName in Z &&
                      (!e._def.checks || !e._def.checks.length)
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = Z[t._def.typeName];
                    return r && !e.includes(r) ? [...e, r] : e;
                  }, []);
                  return { type: e.length > 1 ? e : e[0] };
                }
                if (
                  r.every(
                    (e) => "ZodLiteral" === e._def.typeName && !e.description
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = typeof t._def.value;
                    switch (r) {
                      case "string":
                      case "number":
                      case "boolean":
                        return [...e, r];
                      case "bigint":
                        return [...e, "integer"];
                      case "object":
                        if (null === t._def.value) return [...e, "null"];
                      default:
                        return e;
                    }
                  }, []);
                  if (e.length === r.length) {
                    let t = e.filter((e, t, r) => r.indexOf(e) === t);
                    return {
                      type: t.length > 1 ? t : t[0],
                      enum: r.reduce(
                        (e, t) =>
                          e.includes(t._def.value) ? e : [...e, t._def.value],
                        []
                      ),
                    };
                  }
                } else if (r.every((e) => "ZodEnum" === e._def.typeName))
                  return {
                    type: "string",
                    enum: r.reduce(
                      (e, t) => [
                        ...e,
                        ...t._def.values.filter((t) => !e.includes(t)),
                      ],
                      []
                    ),
                  };
                return J(e, t);
              })(e, r);
            case z.kY.ZodIntersection:
              return (function (e, t) {
                let r = [
                    K(e.left._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "0"],
                    }),
                    K(e.right._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "1"],
                    }),
                  ].filter((e) => !!e),
                  a =
                    "jsonSchema2019-09" === t.target
                      ? { unevaluatedProperties: !1 }
                      : void 0,
                  n = [];
                return (
                  r.forEach((e) => {
                    if (M(e))
                      n.push(...e.allOf),
                        void 0 === e.unevaluatedProperties && (a = void 0);
                    else {
                      let t = e;
                      if (
                        "additionalProperties" in e &&
                        !1 === e.additionalProperties
                      ) {
                        let { additionalProperties: r, ...a } = e;
                        t = a;
                      } else a = void 0;
                      n.push(t);
                    }
                  }),
                  n.length ? { allOf: n, ...a } : void 0
                );
              })(e, r);
            case z.kY.ZodTuple:
              return (function (e, t) {
                return e.rest
                  ? {
                      type: "array",
                      minItems: e.items.length,
                      items: e.items
                        .map((e, r) =>
                          K(e._def, {
                            ...t,
                            currentPath: [...t.currentPath, "items", `${r}`],
                          })
                        )
                        .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                      additionalItems: K(e.rest._def, {
                        ...t,
                        currentPath: [...t.currentPath, "additionalItems"],
                      }),
                    }
                  : {
                      type: "array",
                      minItems: e.items.length,
                      maxItems: e.items.length,
                      items: e.items
                        .map((e, r) =>
                          K(e._def, {
                            ...t,
                            currentPath: [...t.currentPath, "items", `${r}`],
                          })
                        )
                        .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                    };
              })(e, r);
            case z.kY.ZodRecord:
              return L(e, r);
            case z.kY.ZodLiteral:
              return (function (e, t) {
                let r = typeof e.value;
                return "bigint" !== r &&
                  "number" !== r &&
                  "boolean" !== r &&
                  "string" !== r
                  ? { type: Array.isArray(e.value) ? "array" : "object" }
                  : "openApi3" === t.target
                    ? { type: "bigint" === r ? "integer" : r, enum: [e.value] }
                    : { type: "bigint" === r ? "integer" : r, const: e.value };
              })(e, r);
            case z.kY.ZodEnum:
              return { type: "string", enum: Array.from(e.values) };
            case z.kY.ZodNativeEnum:
              return (function (e) {
                let t = e.values,
                  r = Object.keys(e.values)
                    .filter((e) => "number" != typeof t[t[e]])
                    .map((e) => t[e]),
                  a = Array.from(new Set(r.map((e) => typeof e)));
                return {
                  type:
                    1 === a.length
                      ? "string" === a[0]
                        ? "string"
                        : "number"
                      : ["string", "number"],
                  enum: r,
                };
              })(e);
            case z.kY.ZodNullable:
              return (function (e, t) {
                if (
                  [
                    "ZodString",
                    "ZodNumber",
                    "ZodBigInt",
                    "ZodBoolean",
                    "ZodNull",
                  ].includes(e.innerType._def.typeName) &&
                  (!e.innerType._def.checks || !e.innerType._def.checks.length)
                )
                  return "openApi3" === t.target
                    ? { type: Z[e.innerType._def.typeName], nullable: !0 }
                    : { type: [Z[e.innerType._def.typeName], "null"] };
                if ("openApi3" === t.target) {
                  let r = K(e.innerType._def, {
                    ...t,
                    currentPath: [...t.currentPath],
                  });
                  return r && "$ref" in r
                    ? { allOf: [r], nullable: !0 }
                    : r && { ...r, nullable: !0 };
                }
                let r = K(e.innerType._def, {
                  ...t,
                  currentPath: [...t.currentPath, "anyOf", "0"],
                });
                return r && { anyOf: [r, { type: "null" }] };
              })(e, r);
            case z.kY.ZodOptional:
              return B(e, r);
            case z.kY.ZodMap:
              return (function (e, t) {
                return "record" === t.mapStrategy
                  ? L(e, t)
                  : {
                      type: "array",
                      maxItems: 125,
                      items: {
                        type: "array",
                        items: [
                          K(e.keyType._def, {
                            ...t,
                            currentPath: [
                              ...t.currentPath,
                              "items",
                              "items",
                              "0",
                            ],
                          }) || {},
                          K(e.valueType._def, {
                            ...t,
                            currentPath: [
                              ...t.currentPath,
                              "items",
                              "items",
                              "1",
                            ],
                          }) || {},
                        ],
                        minItems: 2,
                        maxItems: 2,
                      },
                    };
              })(e, r);
            case z.kY.ZodSet:
              return (function (e, t) {
                let r = {
                  type: "array",
                  uniqueItems: !0,
                  items: K(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "items"],
                  }),
                };
                return (
                  e.minSize &&
                    R(r, "minItems", e.minSize.value, e.minSize.message, t),
                  e.maxSize &&
                    R(r, "maxItems", e.maxSize.value, e.maxSize.message, t),
                  r
                );
              })(e, r);
            case z.kY.ZodLazy:
              return () => e.getter()._def;
            case z.kY.ZodPromise:
              return K(e.type._def, r);
            case z.kY.ZodNaN:
            case z.kY.ZodNever:
              return { not: {} };
            case z.kY.ZodEffects:
              return (function (e, t) {
                return "input" === t.effectStrategy ? K(e.schema._def, t) : {};
              })(e, r);
            case z.kY.ZodAny:
            case z.kY.ZodUnknown:
              return {};
            case z.kY.ZodDefault:
              return (function (e, t) {
                return { ...K(e.innerType._def, t), default: e.defaultValue() };
              })(e, r);
            case z.kY.ZodBranded:
              return C(e, r);
            case z.kY.ZodReadonly:
              return Y(e, r);
            case z.kY.ZodCatch:
              return A(e, r);
            case z.kY.ZodPipeline:
              return V(e, r);
            case z.kY.ZodFunction:
            case z.kY.ZodVoid:
            case z.kY.ZodSymbol:
            default:
              return;
          }
        };
      function K(e, t, r = !1) {
        let a = t.seen.get(e);
        if (t.override) {
          let n = t.override?.(e, t, a, r);
          if (n !== T) return n;
        }
        if (a && !r) {
          let e = W(a, t);
          if (void 0 !== e) return e;
        }
        let n = { def: e, path: t.currentPath, jsonSchema: void 0 };
        t.seen.set(e, n);
        let s = G(e, e.typeName, t),
          o = "function" == typeof s ? K(s(), t) : s;
        if ((o && X(e, t, o), t.postProcess)) {
          let r = t.postProcess(o, e, t);
          return (n.jsonSchema = o), r;
        }
        return (n.jsonSchema = o), o;
      }
      let W = (e, t) => {
          switch (t.$refStrategy) {
            case "root":
              return { $ref: e.path.join("/") };
            case "relative":
              return { $ref: H(t.currentPath, e.path) };
            case "none":
            case "seen":
              if (
                e.path.length < t.currentPath.length &&
                e.path.every((e, r) => t.currentPath[r] === e)
              )
                return (
                  console.warn(
                    `Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`
                  ),
                  {}
                );
              return "seen" === t.$refStrategy ? {} : void 0;
          }
        },
        H = (e, t) => {
          let r = 0;
          for (; r < e.length && r < t.length && e[r] === t[r]; r++);
          return [(e.length - r).toString(), ...t.slice(r)].join("/");
        },
        X = (e, t, r) => (
          e.description &&
            ((r.description = e.description),
            t.markdownDescription && (r.markdownDescription = e.description)),
          r
        ),
        Q = (e, t) => {
          let r = E(t),
            a =
              "object" == typeof t && t.definitions
                ? Object.entries(t.definitions).reduce(
                    (e, [t, a]) => ({
                      ...e,
                      [t]:
                        K(
                          a._def,
                          {
                            ...r,
                            currentPath: [...r.basePath, r.definitionPath, t],
                          },
                          !0
                        ) ?? {},
                    }),
                    {}
                  )
                : void 0,
            n =
              "string" == typeof t
                ? t
                : t?.nameStrategy === "title"
                  ? void 0
                  : t?.name,
            s =
              K(
                e._def,
                void 0 === n
                  ? r
                  : { ...r, currentPath: [...r.basePath, r.definitionPath, n] },
                !1
              ) ?? {},
            o =
              "object" == typeof t &&
              void 0 !== t.name &&
              "title" === t.nameStrategy
                ? t.name
                : void 0;
          void 0 !== o && (s.title = o);
          let i =
            void 0 === n
              ? a
                ? { ...s, [r.definitionPath]: a }
                : s
              : {
                  $ref: [
                    ...("relative" === r.$refStrategy ? [] : r.basePath),
                    r.definitionPath,
                    n,
                  ].join("/"),
                  [r.definitionPath]: { ...a, [n]: s },
                };
          return (
            "jsonSchema7" === r.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : ("jsonSchema2019-09" === r.target || "openAi" === r.target) &&
                (i.$schema = "https://json-schema.org/draft/2019-09/schema#"),
            "openAi" === r.target &&
              ("anyOf" in i ||
                "oneOf" in i ||
                "allOf" in i ||
                ("type" in i && Array.isArray(i.type))) &&
              console.warn(
                "Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."
              ),
            i
          );
        };
      var ee = {
          code: "0",
          name: "text",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"text" parts expect a string value.');
            return { type: "text", value: e };
          },
        },
        et = {
          code: "3",
          name: "error",
          parse: (e) => {
            if ("string" != typeof e)
              throw Error('"error" parts expect a string value.');
            return { type: "error", value: e };
          },
        },
        er = {
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
        ea = {
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
        en = {
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
        es = [ee, et, er, ea, en],
        eo = {
          [ee.code]: ee,
          [et.code]: et,
          [er.code]: er,
          [ea.code]: ea,
          [en.code]: en,
        };
      ee.name,
        ee.code,
        et.name,
        et.code,
        er.name,
        er.code,
        ea.name,
        ea.code,
        en.name,
        en.code;
      var ei = es.map((e) => e.code);
      function el(e) {
        if (void 0 === e) return { value: void 0, state: "undefined-input" };
        let t = (0, w.N8)({ text: e });
        return t.success
          ? { value: t.value, state: "successful-parse" }
          : (t = (0, w.N8)({
                text: (function (e) {
                  let t = ["ROOT"],
                    r = -1,
                    a = null;
                  function n(e, n, s) {
                    switch (e) {
                      case '"':
                        (r = n), t.pop(), t.push(s), t.push("INSIDE_STRING");
                        break;
                      case "f":
                      case "t":
                      case "n":
                        (r = n),
                          (a = n),
                          t.pop(),
                          t.push(s),
                          t.push("INSIDE_LITERAL");
                        break;
                      case "-":
                        t.pop(), t.push(s), t.push("INSIDE_NUMBER");
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
                        (r = n), t.pop(), t.push(s), t.push("INSIDE_NUMBER");
                        break;
                      case "{":
                        (r = n),
                          t.pop(),
                          t.push(s),
                          t.push("INSIDE_OBJECT_START");
                        break;
                      case "[":
                        (r = n),
                          t.pop(),
                          t.push(s),
                          t.push("INSIDE_ARRAY_START");
                    }
                  }
                  function s(e, a) {
                    switch (e) {
                      case ",":
                        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
                        break;
                      case "}":
                        (r = a), t.pop();
                    }
                  }
                  function o(e, a) {
                    switch (e) {
                      case ",":
                        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                        break;
                      case "]":
                        (r = a), t.pop();
                    }
                  }
                  for (let i = 0; i < e.length; i++) {
                    let l = e[i];
                    switch (t[t.length - 1]) {
                      case "ROOT":
                        n(l, i, "FINISH");
                        break;
                      case "INSIDE_OBJECT_START":
                        switch (l) {
                          case '"':
                            t.pop(), t.push("INSIDE_OBJECT_KEY");
                            break;
                          case "}":
                            (r = i), t.pop();
                        }
                        break;
                      case "INSIDE_OBJECT_AFTER_COMMA":
                        '"' === l && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
                        break;
                      case "INSIDE_OBJECT_KEY":
                        '"' === l &&
                          (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
                        break;
                      case "INSIDE_OBJECT_AFTER_KEY":
                        ":" === l &&
                          (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
                        break;
                      case "INSIDE_OBJECT_BEFORE_VALUE":
                        n(l, i, "INSIDE_OBJECT_AFTER_VALUE");
                        break;
                      case "INSIDE_OBJECT_AFTER_VALUE":
                        s(l, i);
                        break;
                      case "INSIDE_STRING":
                        switch (l) {
                          case '"':
                            t.pop(), (r = i);
                            break;
                          case "\\":
                            t.push("INSIDE_STRING_ESCAPE");
                            break;
                          default:
                            r = i;
                        }
                        break;
                      case "INSIDE_ARRAY_START":
                        "]" === l
                          ? ((r = i), t.pop())
                          : ((r = i), n(l, i, "INSIDE_ARRAY_AFTER_VALUE"));
                        break;
                      case "INSIDE_ARRAY_AFTER_VALUE":
                        switch (l) {
                          case ",":
                            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
                            break;
                          case "]":
                            (r = i), t.pop();
                            break;
                          default:
                            r = i;
                        }
                        break;
                      case "INSIDE_ARRAY_AFTER_COMMA":
                        n(l, i, "INSIDE_ARRAY_AFTER_VALUE");
                        break;
                      case "INSIDE_STRING_ESCAPE":
                        t.pop(), (r = i);
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
                            r = i;
                            break;
                          case "e":
                          case "E":
                          case "-":
                          case ".":
                            break;
                          case ",":
                            t.pop(),
                              "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] &&
                                o(l, i),
                              "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] &&
                                s(l, i);
                            break;
                          case "}":
                            t.pop(),
                              "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1] &&
                                s(l, i);
                            break;
                          case "]":
                            t.pop(),
                              "INSIDE_ARRAY_AFTER_VALUE" === t[t.length - 1] &&
                                o(l, i);
                            break;
                          default:
                            t.pop();
                        }
                        break;
                      case "INSIDE_LITERAL": {
                        let n = e.substring(a, i + 1);
                        "false".startsWith(n) ||
                        "true".startsWith(n) ||
                        "null".startsWith(n)
                          ? (r = i)
                          : (t.pop(),
                            "INSIDE_OBJECT_AFTER_VALUE" === t[t.length - 1]
                              ? s(l, i)
                              : "INSIDE_ARRAY_AFTER_VALUE" ===
                                  t[t.length - 1] && o(l, i));
                      }
                    }
                  }
                  let i = e.slice(0, r + 1);
                  for (let r = t.length - 1; r >= 0; r--)
                    switch (t[r]) {
                      case "INSIDE_STRING":
                        i += '"';
                        break;
                      case "INSIDE_OBJECT_KEY":
                      case "INSIDE_OBJECT_AFTER_KEY":
                      case "INSIDE_OBJECT_AFTER_COMMA":
                      case "INSIDE_OBJECT_START":
                      case "INSIDE_OBJECT_BEFORE_VALUE":
                      case "INSIDE_OBJECT_AFTER_VALUE":
                        i += "}";
                        break;
                      case "INSIDE_ARRAY_START":
                      case "INSIDE_ARRAY_AFTER_COMMA":
                      case "INSIDE_ARRAY_AFTER_VALUE":
                        i += "]";
                        break;
                      case "INSIDE_LITERAL": {
                        let t = e.substring(a, e.length);
                        "true".startsWith(t)
                          ? (i += "true".slice(t.length))
                          : "false".startsWith(t)
                            ? (i += "false".slice(t.length))
                            : "null".startsWith(t) &&
                              (i += "null".slice(t.length));
                      }
                    }
                  return i;
                })(e),
              })).success
            ? { value: t.value, state: "repaired-parse" }
            : { value: void 0, state: "failed-parse" };
      }
      var eu = [
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
        ep = Object.fromEntries(eu.map((e) => [e.code, e]));
      Object.fromEntries(eu.map((e) => [e.name, e.code]));
      var ec = eu.map((e) => e.code),
        ed = (e) => {
          let t = e.indexOf(":");
          if (-1 === t)
            throw Error("Failed to parse stream string. No separator found.");
          let r = e.slice(0, t);
          if (!ec.includes(r))
            throw Error(`Failed to parse stream string. Invalid code ${r}.`);
          let a = JSON.parse(e.slice(t + 1));
          return ep[r].parse(a);
        };
      function em(e, t) {
        let r = eu.find((t) => t.name === e);
        if (!r) throw Error(`Invalid stream part type: ${e}`);
        return `${r.code}:${JSON.stringify(t)}
`;
      }
      async function eh({
        stream: e,
        onTextPart: t,
        onReasoningPart: r,
        onReasoningSignaturePart: a,
        onRedactedReasoningPart: n,
        onSourcePart: s,
        onFilePart: o,
        onDataPart: i,
        onErrorPart: l,
        onToolCallStreamingStartPart: u,
        onToolCallDeltaPart: p,
        onToolCallPart: c,
        onToolResultPart: d,
        onMessageAnnotationsPart: m,
        onFinishMessagePart: h,
        onFinishStepPart: g,
        onStartStepPart: f,
      }) {
        let y = e.getReader(),
          v = new TextDecoder(),
          b = [],
          _ = 0;
        for (;;) {
          let { value: e } = await y.read();
          if (e && (b.push(e), (_ += e.length), 10 !== e[e.length - 1]))
            continue;
          if (0 === b.length) break;
          let w = (function (e, t) {
            let r = new Uint8Array(t),
              a = 0;
            for (let t of e) r.set(t, a), (a += t.length);
            return (e.length = 0), r;
          })(b, _);
          for (let { type: e, value: y } of ((_ = 0),
          v
            .decode(w, { stream: !0 })
            .split("\n")
            .filter((e) => "" !== e)
            .map(ed)))
            switch (e) {
              case "text":
                await (null == t ? void 0 : t(y));
                break;
              case "reasoning":
                await (null == r ? void 0 : r(y));
                break;
              case "reasoning_signature":
                await (null == a ? void 0 : a(y));
                break;
              case "redacted_reasoning":
                await (null == n ? void 0 : n(y));
                break;
              case "file":
                await (null == o ? void 0 : o(y));
                break;
              case "source":
                await (null == s ? void 0 : s(y));
                break;
              case "data":
                await (null == i ? void 0 : i(y));
                break;
              case "error":
                await (null == l ? void 0 : l(y));
                break;
              case "message_annotations":
                await (null == m ? void 0 : m(y));
                break;
              case "tool_call_streaming_start":
                await (null == u ? void 0 : u(y));
                break;
              case "tool_call_delta":
                await (null == p ? void 0 : p(y));
                break;
              case "tool_call":
                await (null == c ? void 0 : c(y));
                break;
              case "tool_result":
                await (null == d ? void 0 : d(y));
                break;
              case "finish_message":
                await (null == h ? void 0 : h(y));
                break;
              case "finish_step":
                await (null == g ? void 0 : g(y));
                break;
              case "start_step":
                await (null == f ? void 0 : f(y));
                break;
              default:
                throw Error(`Unknown stream part type: ${e}`);
            }
        }
      }
      async function eg({ stream: e, onTextPart: t }) {
        let r = e.pipeThrough(new TextDecoderStream()).getReader();
        for (;;) {
          let { done: e, value: a } = await r.read();
          if (e) break;
          await t(a);
        }
      }
      var ef = Symbol.for("vercel.ai.schema");
      function ey(e) {
        return "object" == typeof e &&
          null !== e &&
          ef in e &&
          !0 === e[ef] &&
          "jsonSchema" in e &&
          "validate" in e
          ? e
          : (function (e, { validate: t } = {}) {
              return {
                [ef]: !0,
                _type: void 0,
                [w.eu]: !0,
                jsonSchema: e,
                validate: t,
              };
            })(Q(e, { $refStrategy: "none", target: "jsonSchema7" }), {
              validate: (t) => {
                let r = e.safeParse(t);
                return r.success
                  ? { success: !0, value: r.data }
                  : { success: !1, error: r.error };
              },
            });
      }
      var ev = Object.defineProperty,
        eb = (e, t) => {
          for (var r in t) ev(e, r, { get: t[r], enumerable: !0 });
        };
      function e_(e, { contentType: t, dataStreamVersion: r }) {
        let a = new Headers(null != e ? e : {});
        return (
          a.has("Content-Type") || a.set("Content-Type", t),
          void 0 !== r && a.set("X-Vercel-AI-Data-Stream", r),
          a
        );
      }
      function ew(e, { contentType: t, dataStreamVersion: r }) {
        let a = {};
        if (null != e) for (let [t, r] of Object.entries(e)) a[t] = r;
        return (
          null == a["Content-Type"] && (a["Content-Type"] = t),
          void 0 !== r && (a["X-Vercel-AI-Data-Stream"] = r),
          a
        );
      }
      function ex({
        response: e,
        status: t,
        statusText: r,
        headers: a,
        stream: n,
      }) {
        e.writeHead(null != t ? t : 200, r, a);
        let s = n.getReader();
        (async () => {
          try {
            for (;;) {
              let { done: t, value: r } = await s.read();
              if (t) break;
              e.write(r);
            }
          } catch (e) {
            throw e;
          } finally {
            e.end();
          }
        })();
      }
      var ek = "AI_InvalidArgumentError",
        ez = `vercel.ai.error.${ek}`,
        eT = Symbol.for(ez),
        eI = class extends _.bD {
          constructor({ parameter: e, value: t, message: r }) {
            super({
              name: ek,
              message: `Invalid argument for parameter ${e}: ${r}`,
            }),
              (this[n] = !0),
              (this.parameter = e),
              (this.value = t);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, ez);
          }
        };
      n = eT;
      var eS = "AI_RetryError",
        eE = `vercel.ai.error.${eS}`,
        ej = Symbol.for(eE),
        eR = class extends _.bD {
          constructor({ message: e, reason: t, errors: r }) {
            super({ name: eS, message: e }),
              (this[s] = !0),
              (this.reason = t),
              (this.errors = r),
              (this.lastError = r[r.length - 1]);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, eE);
          }
        };
      s = ej;
      var eC =
        ({
          maxRetries: e = 2,
          initialDelayInMs: t = 2e3,
          backoffFactor: r = 2,
        } = {}) =>
        async (a) =>
          eA(a, { maxRetries: e, delayInMs: t, backoffFactor: r });
      async function eA(
        e,
        { maxRetries: t, delayInMs: r, backoffFactor: a },
        n = []
      ) {
        try {
          return await e();
        } catch (l) {
          if ((0, w.zf)(l) || 0 === t) throw l;
          let s = (0, w.u1)(l),
            o = [...n, l],
            i = o.length;
          if (i > t)
            throw new eR({
              message: `Failed after ${i} attempts. Last error: ${s}`,
              reason: "maxRetriesExceeded",
              errors: o,
            });
          if (
            l instanceof Error &&
            _.hL.isInstance(l) &&
            !0 === l.isRetryable &&
            i <= t
          )
            return (
              await (0, w.cb)(r),
              eA(e, { maxRetries: t, delayInMs: a * r, backoffFactor: a }, o)
            );
          if (1 === i) throw l;
          throw new eR({
            message: `Failed after ${i} attempts with non-retryable error: '${s}'`,
            reason: "errorNotRetryable",
            errors: o,
          });
        }
      }
      function eN({ maxRetries: e }) {
        if (null != e) {
          if (!Number.isInteger(e))
            throw new eI({
              parameter: "maxRetries",
              value: e,
              message: "maxRetries must be an integer",
            });
          if (e < 0)
            throw new eI({
              parameter: "maxRetries",
              value: e,
              message: "maxRetries must be >= 0",
            });
        }
        let t = null != e ? e : 2;
        return { maxRetries: t, retry: eC({ maxRetries: t }) };
      }
      function eM({ operationId: e, telemetry: t }) {
        return {
          "operation.name": `${e}${(null == t ? void 0 : t.functionId) != null ? ` ${t.functionId}` : ""}`,
          "resource.name": null == t ? void 0 : t.functionId,
          "ai.operationId": e,
          "ai.telemetry.functionId": null == t ? void 0 : t.functionId,
        };
      }
      function eP({ model: e, settings: t, telemetry: r, headers: a }) {
        var n;
        return {
          "ai.model.provider": e.provider,
          "ai.model.id": e.modelId,
          ...Object.entries(t).reduce(
            (e, [t, r]) => ((e[`ai.settings.${t}`] = r), e),
            {}
          ),
          ...Object.entries(
            null != (n = null == r ? void 0 : r.metadata) ? n : {}
          ).reduce(
            (e, [t, r]) => ((e[`ai.telemetry.metadata.${t}`] = r), e),
            {}
          ),
          ...Object.entries(null != a ? a : {}).reduce(
            (e, [t, r]) => (
              void 0 !== r && (e[`ai.request.headers.${t}`] = r), e
            ),
            {}
          ),
        };
      }
      var eO = {
          startSpan: () => e$,
          startActiveSpan: (e, t, r, a) =>
            "function" == typeof t
              ? t(e$)
              : "function" == typeof r
                ? r(e$)
                : "function" == typeof a
                  ? a(e$)
                  : void 0,
        },
        e$ = {
          spanContext: () => eD,
          setAttribute() {
            return this;
          },
          setAttributes() {
            return this;
          },
          addEvent() {
            return this;
          },
          addLink() {
            return this;
          },
          addLinks() {
            return this;
          },
          setStatus() {
            return this;
          },
          updateName() {
            return this;
          },
          end() {
            return this;
          },
          isRecording: () => !1,
          recordException() {
            return this;
          },
        },
        eD = { traceId: "", spanId: "", traceFlags: 0 };
      function eq({ isEnabled: e = !1, tracer: t } = {}) {
        return e ? t || x.u.getTracer("ai") : eO;
      }
      function eU({
        name: e,
        tracer: t,
        attributes: r,
        fn: a,
        endWhenDone: n = !0,
      }) {
        return t.startActiveSpan(e, { attributes: r }, async (e) => {
          try {
            let t = await a(e);
            return n && e.end(), t;
          } catch (t) {
            try {
              t instanceof Error
                ? (e.recordException({
                    name: t.name,
                    message: t.message,
                    stack: t.stack,
                  }),
                  e.setStatus({ code: k.s.ERROR, message: t.message }))
                : e.setStatus({ code: k.s.ERROR });
            } finally {
              e.end();
            }
            throw t;
          }
        });
      }
      function eF({ telemetry: e, attributes: t }) {
        return (null == e ? void 0 : e.isEnabled) !== !0
          ? {}
          : Object.entries(t).reduce((t, [r, a]) => {
              if (void 0 === a) return t;
              if (
                "object" == typeof a &&
                "input" in a &&
                "function" == typeof a.input
              ) {
                if ((null == e ? void 0 : e.recordInputs) === !1) return t;
                let n = a.input();
                return void 0 === n ? t : { ...t, [r]: n };
              }
              if (
                "object" == typeof a &&
                "output" in a &&
                "function" == typeof a.output
              ) {
                if ((null == e ? void 0 : e.recordOutputs) === !1) return t;
                let n = a.output();
                return void 0 === n ? t : { ...t, [r]: n };
              }
              return { ...t, [r]: a };
            }, {});
      }
      var eL = "AI_NoImageGeneratedError",
        eZ = `vercel.ai.error.${eL}`,
        eJ = Symbol.for(eZ);
      _.bD, (o = eJ);
      var eB = class {
          constructor({ data: e, mimeType: t }) {
            let r = e instanceof Uint8Array;
            (this.base64Data = r ? void 0 : e),
              (this.uint8ArrayData = r ? e : void 0),
              (this.mimeType = t);
          }
          get base64() {
            return (
              null == this.base64Data &&
                (this.base64Data = (0, w.n_)(this.uint8ArrayData)),
              this.base64Data
            );
          }
          get uint8Array() {
            return (
              null == this.uint8ArrayData &&
                (this.uint8ArrayData = (0, w.Z9)(this.base64Data)),
              this.uint8ArrayData
            );
          }
        },
        eV = class extends eB {
          constructor(e) {
            super(e), (this.type = "file");
          }
        },
        eY = [
          {
            mimeType: "image/gif",
            bytesPrefix: [71, 73, 70],
            base64Prefix: "R0lG",
          },
          {
            mimeType: "image/png",
            bytesPrefix: [137, 80, 78, 71],
            base64Prefix: "iVBORw",
          },
          {
            mimeType: "image/jpeg",
            bytesPrefix: [255, 216],
            base64Prefix: "/9j/",
          },
          {
            mimeType: "image/webp",
            bytesPrefix: [82, 73, 70, 70],
            base64Prefix: "UklGRg",
          },
          { mimeType: "image/bmp", bytesPrefix: [66, 77], base64Prefix: "Qk" },
          {
            mimeType: "image/tiff",
            bytesPrefix: [73, 73, 42, 0],
            base64Prefix: "SUkqAA",
          },
          {
            mimeType: "image/tiff",
            bytesPrefix: [77, 77, 0, 42],
            base64Prefix: "TU0AKg",
          },
          {
            mimeType: "image/avif",
            bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 97, 118, 105, 102],
            base64Prefix: "AAAAIGZ0eXBhdmlm",
          },
          {
            mimeType: "image/heic",
            bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 104, 101, 105, 99],
            base64Prefix: "AAAAIGZ0eXBoZWlj",
          },
        ],
        eG = (e) => {
          let t = "string" == typeof e ? (0, w.Z9)(e) : e,
            r =
              ((127 & t[6]) << 21) |
              ((127 & t[7]) << 14) |
              ((127 & t[8]) << 7) |
              (127 & t[9]);
          return t.slice(r + 10);
        },
        eK = "AI_NoObjectGeneratedError",
        eW = `vercel.ai.error.${eK}`,
        eH = Symbol.for(eW),
        eX = class extends _.bD {
          constructor({
            message: e = "No object generated.",
            cause: t,
            text: r,
            response: a,
            usage: n,
            finishReason: s,
          }) {
            super({ name: eK, message: e, cause: t }),
              (this[i] = !0),
              (this.text = r),
              (this.response = a),
              (this.usage = n),
              (this.finishReason = s);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, eW);
          }
        };
      i = eH;
      var eQ = "AI_DownloadError",
        e0 = `vercel.ai.error.${eQ}`,
        e1 = Symbol.for(e0),
        e4 = class extends _.bD {
          constructor({
            url: e,
            statusCode: t,
            statusText: r,
            cause: a,
            message: n = null == a
              ? `Failed to download ${e}: ${t} ${r}`
              : `Failed to download ${e}: ${a}`,
          }) {
            super({ name: eQ, message: n, cause: a }),
              (this[l] = !0),
              (this.url = e),
              (this.statusCode = t),
              (this.statusText = r);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, e0);
          }
        };
      async function e2({ url: e }) {
        var t;
        let r = e.toString();
        try {
          let e = await fetch(r);
          if (!e.ok)
            throw new e4({
              url: r,
              statusCode: e.status,
              statusText: e.statusText,
            });
          return {
            data: new Uint8Array(await e.arrayBuffer()),
            mimeType: null != (t = e.headers.get("content-type")) ? t : void 0,
          };
        } catch (e) {
          if (e4.isInstance(e)) throw e;
          throw new e4({ url: r, cause: e });
        }
      }
      l = e1;
      var e6 = "AI_InvalidDataContentError",
        e9 = `vercel.ai.error.${e6}`,
        e3 = Symbol.for(e9),
        e8 = class extends _.bD {
          constructor({
            content: e,
            cause: t,
            message:
              r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`,
          }) {
            super({ name: e6, message: r, cause: t }),
              (this[u] = !0),
              (this.content = e);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, e9);
          }
        };
      u = e3;
      var e7 = z.z.union([
        z.z.string(),
        z.z.instanceof(Uint8Array),
        z.z.instanceof(ArrayBuffer),
        z.z.custom(
          (e) => {
            var t, r;
            return (
              null !=
                (r =
                  null == (t = globalThis.Buffer) ? void 0 : t.isBuffer(e)) && r
            );
          },
          { message: "Must be a Buffer" }
        ),
      ]);
      function e5(e) {
        return "string" == typeof e
          ? e
          : e instanceof ArrayBuffer
            ? (0, w.n_)(new Uint8Array(e))
            : (0, w.n_)(e);
      }
      function te(e) {
        if (e instanceof Uint8Array) return e;
        if ("string" == typeof e)
          try {
            return (0, w.Z9)(e);
          } catch (t) {
            throw new e8({
              message:
                "Invalid data content. Content string is not a base64-encoded media.",
              content: e,
              cause: t,
            });
          }
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        throw new e8({ content: e });
      }
      var tt = "AI_InvalidMessageRoleError",
        tr = `vercel.ai.error.${tt}`,
        ta = Symbol.for(tr),
        tn = class extends _.bD {
          constructor({
            role: e,
            message:
              t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`,
          }) {
            super({ name: tt, message: t }), (this[p] = !0), (this.role = e);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, tr);
          }
        };
      async function ts({
        prompt: e,
        modelSupportsImageUrls: t = !0,
        modelSupportsUrl: r = () => !1,
        downloadImplementation: a = e2,
      }) {
        let n = await to(e.messages, a, t, r);
        return [
          ...(null != e.system ? [{ role: "system", content: e.system }] : []),
          ...e.messages.map((e) =>
            (function (e, t) {
              var r, a, n, s, o, i;
              let l = e.role;
              switch (l) {
                case "system":
                  return {
                    role: "system",
                    content: e.content,
                    providerMetadata:
                      null != (r = e.providerOptions)
                        ? r
                        : e.experimental_providerMetadata,
                  };
                case "user":
                  if ("string" == typeof e.content)
                    return {
                      role: "user",
                      content: [{ type: "text", text: e.content }],
                      providerMetadata:
                        null != (a = e.providerOptions)
                          ? a
                          : e.experimental_providerMetadata,
                    };
                  return {
                    role: "user",
                    content: e.content
                      .map((e) =>
                        (function (e, t) {
                          var r, a, n, s;
                          let o, i, l;
                          if ("text" === e.type)
                            return {
                              type: "text",
                              text: e.text,
                              providerMetadata:
                                null != (r = e.providerOptions)
                                  ? r
                                  : e.experimental_providerMetadata,
                            };
                          let u = e.mimeType,
                            p = e.type;
                          switch (p) {
                            case "image":
                              o = e.image;
                              break;
                            case "file":
                              o = e.data;
                              break;
                            default:
                              throw Error(`Unsupported part type: ${p}`);
                          }
                          try {
                            i = "string" == typeof o ? new URL(o) : o;
                          } catch (e) {
                            i = o;
                          }
                          if (i instanceof URL)
                            if ("data:" === i.protocol) {
                              let { mimeType: e, base64Content: t } =
                                (function (e) {
                                  try {
                                    let [t, r] = e.split(",");
                                    return {
                                      mimeType: t.split(";")[0].split(":")[1],
                                      base64Content: r,
                                    };
                                  } catch (e) {
                                    return {
                                      mimeType: void 0,
                                      base64Content: void 0,
                                    };
                                  }
                                })(i.toString());
                              if (null == e || null == t)
                                throw Error(
                                  `Invalid data URL format in part ${p}`
                                );
                              (u = e), (l = te(t));
                            } else {
                              let e = t[i.toString()];
                              e
                                ? ((l = e.data), null != u || (u = e.mimeType))
                                : (l = i);
                            }
                          else l = te(i);
                          switch (p) {
                            case "image":
                              return (
                                l instanceof Uint8Array &&
                                  (u =
                                    null !=
                                    (a = (function ({
                                      data: e,
                                      signatures: t,
                                    }) {
                                      let r =
                                        ("string" == typeof e &&
                                          e.startsWith("SUQz")) ||
                                        ("string" != typeof e &&
                                          e.length > 10 &&
                                          73 === e[0] &&
                                          68 === e[1] &&
                                          51 === e[2])
                                          ? eG(e)
                                          : e;
                                      for (let e of t)
                                        if (
                                          "string" == typeof r
                                            ? r.startsWith(e.base64Prefix)
                                            : r.length >=
                                                e.bytesPrefix.length &&
                                              e.bytesPrefix.every(
                                                (e, t) => r[t] === e
                                              )
                                        )
                                          return e.mimeType;
                                    })({ data: l, signatures: eY }))
                                      ? a
                                      : u),
                                {
                                  type: "image",
                                  image: l,
                                  mimeType: u,
                                  providerMetadata:
                                    null != (n = e.providerOptions)
                                      ? n
                                      : e.experimental_providerMetadata,
                                }
                              );
                            case "file":
                              if (null == u)
                                throw Error(
                                  "Mime type is missing for file part"
                                );
                              return {
                                type: "file",
                                data: l instanceof Uint8Array ? e5(l) : l,
                                filename: e.filename,
                                mimeType: u,
                                providerMetadata:
                                  null != (s = e.providerOptions)
                                    ? s
                                    : e.experimental_providerMetadata,
                              };
                          }
                        })(e, t)
                      )
                      .filter((e) => "text" !== e.type || "" !== e.text),
                    providerMetadata:
                      null != (n = e.providerOptions)
                        ? n
                        : e.experimental_providerMetadata,
                  };
                case "assistant":
                  if ("string" == typeof e.content)
                    return {
                      role: "assistant",
                      content: [{ type: "text", text: e.content }],
                      providerMetadata:
                        null != (s = e.providerOptions)
                          ? s
                          : e.experimental_providerMetadata,
                    };
                  return {
                    role: "assistant",
                    content: e.content
                      .filter((e) => "text" !== e.type || "" !== e.text)
                      .map((e) => {
                        var t;
                        let r =
                          null != (t = e.providerOptions)
                            ? t
                            : e.experimental_providerMetadata;
                        switch (e.type) {
                          case "file":
                            return {
                              type: "file",
                              data: e.data instanceof URL ? e.data : e5(e.data),
                              filename: e.filename,
                              mimeType: e.mimeType,
                              providerMetadata: r,
                            };
                          case "reasoning":
                            return {
                              type: "reasoning",
                              text: e.text,
                              signature: e.signature,
                              providerMetadata: r,
                            };
                          case "redacted-reasoning":
                            return {
                              type: "redacted-reasoning",
                              data: e.data,
                              providerMetadata: r,
                            };
                          case "text":
                            return {
                              type: "text",
                              text: e.text,
                              providerMetadata: r,
                            };
                          case "tool-call":
                            return {
                              type: "tool-call",
                              toolCallId: e.toolCallId,
                              toolName: e.toolName,
                              args: e.args,
                              providerMetadata: r,
                            };
                        }
                      }),
                    providerMetadata:
                      null != (o = e.providerOptions)
                        ? o
                        : e.experimental_providerMetadata,
                  };
                case "tool":
                  return {
                    role: "tool",
                    content: e.content.map((e) => {
                      var t;
                      return {
                        type: "tool-result",
                        toolCallId: e.toolCallId,
                        toolName: e.toolName,
                        result: e.result,
                        content: e.experimental_content,
                        isError: e.isError,
                        providerMetadata:
                          null != (t = e.providerOptions)
                            ? t
                            : e.experimental_providerMetadata,
                      };
                    }),
                    providerMetadata:
                      null != (i = e.providerOptions)
                        ? i
                        : e.experimental_providerMetadata,
                  };
                default:
                  throw new tn({ role: l });
              }
            })(e, n)
          ),
        ];
      }
      async function to(e, t, r, a) {
        let n = e
          .filter((e) => "user" === e.role)
          .map((e) => e.content)
          .filter((e) => Array.isArray(e))
          .flat()
          .filter((e) => "image" === e.type || "file" === e.type)
          .filter((e) => "image" !== e.type || !0 !== r)
          .map((e) => ("image" === e.type ? e.image : e.data))
          .map((e) =>
            "string" == typeof e &&
            (e.startsWith("http:") || e.startsWith("https:"))
              ? new URL(e)
              : e
          )
          .filter((e) => e instanceof URL)
          .filter((e) => !a(e));
        return Object.fromEntries(
          (
            await Promise.all(
              n.map(async (e) => ({ url: e, data: await t({ url: e }) }))
            )
          ).map(({ url: e, data: t }) => [e.toString(), t])
        );
      }
      function ti({
        maxTokens: e,
        temperature: t,
        topP: r,
        topK: a,
        presencePenalty: n,
        frequencyPenalty: s,
        stopSequences: o,
        seed: i,
      }) {
        if (null != e) {
          if (!Number.isInteger(e))
            throw new eI({
              parameter: "maxTokens",
              value: e,
              message: "maxTokens must be an integer",
            });
          if (e < 1)
            throw new eI({
              parameter: "maxTokens",
              value: e,
              message: "maxTokens must be >= 1",
            });
        }
        if (null != t && "number" != typeof t)
          throw new eI({
            parameter: "temperature",
            value: t,
            message: "temperature must be a number",
          });
        if (null != r && "number" != typeof r)
          throw new eI({
            parameter: "topP",
            value: r,
            message: "topP must be a number",
          });
        if (null != a && "number" != typeof a)
          throw new eI({
            parameter: "topK",
            value: a,
            message: "topK must be a number",
          });
        if (null != n && "number" != typeof n)
          throw new eI({
            parameter: "presencePenalty",
            value: n,
            message: "presencePenalty must be a number",
          });
        if (null != s && "number" != typeof s)
          throw new eI({
            parameter: "frequencyPenalty",
            value: s,
            message: "frequencyPenalty must be a number",
          });
        if (null != i && !Number.isInteger(i))
          throw new eI({
            parameter: "seed",
            value: i,
            message: "seed must be an integer",
          });
        return {
          maxTokens: e,
          temperature: null != t ? t : 0,
          topP: r,
          topK: a,
          presencePenalty: n,
          frequencyPenalty: s,
          stopSequences: null != o && o.length > 0 ? o : void 0,
          seed: i,
        };
      }
      function tl(e) {
        var t, r, a;
        let n = [];
        for (let s of e) {
          let e;
          try {
            e = new URL(s.url);
          } catch (e) {
            throw Error(`Invalid URL: ${s.url}`);
          }
          switch (e.protocol) {
            case "http:":
            case "https:":
              if (null == (t = s.contentType) ? void 0 : t.startsWith("image/"))
                n.push({ type: "image", image: e });
              else {
                if (!s.contentType)
                  throw Error(
                    "If the attachment is not an image, it must specify a content type"
                  );
                n.push({ type: "file", data: e, mimeType: s.contentType });
              }
              break;
            case "data:": {
              let e, t, o;
              try {
                ([e, t] = s.url.split(",")),
                  (o = e.split(";")[0].split(":")[1]);
              } catch (e) {
                throw Error(`Error processing data URL: ${s.url}`);
              }
              if (null == o || null == t)
                throw Error(`Invalid data URL format: ${s.url}`);
              if (null == (r = s.contentType) ? void 0 : r.startsWith("image/"))
                n.push({ type: "image", image: te(t) });
              else if (
                null == (a = s.contentType) ? void 0 : a.startsWith("text/")
              )
                n.push({
                  type: "text",
                  text: (function (e) {
                    try {
                      return new TextDecoder().decode(e);
                    } catch (e) {
                      throw Error("Error decoding Uint8Array to text");
                    }
                  })(te(t)),
                });
              else {
                if (!s.contentType)
                  throw Error(
                    "If the attachment is not an image or text, it must specify a content type"
                  );
                n.push({ type: "file", data: t, mimeType: s.contentType });
              }
              break;
            }
            default:
              throw Error(`Unsupported URL protocol: ${e.protocol}`);
          }
        }
        return n;
      }
      p = ta;
      var tu = "AI_MessageConversionError",
        tp = `vercel.ai.error.${tu}`,
        tc = Symbol.for(tp),
        td = class extends _.bD {
          constructor({ originalMessage: e, message: t }) {
            super({ name: tu, message: t }),
              (this[c] = !0),
              (this.originalMessage = e);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, tp);
          }
        };
      c = tc;
      var tm = z.z.lazy(() =>
          z.z.union([
            z.z.null(),
            z.z.string(),
            z.z.number(),
            z.z.boolean(),
            z.z.record(z.z.string(), tm),
            z.z.array(tm),
          ])
        ),
        th = z.z.record(z.z.string(), z.z.record(z.z.string(), tm)),
        tg = z.z.array(
          z.z.union([
            z.z.object({ type: z.z.literal("text"), text: z.z.string() }),
            z.z.object({
              type: z.z.literal("image"),
              data: z.z.string(),
              mimeType: z.z.string().optional(),
            }),
          ])
        ),
        tf = z.z.object({
          type: z.z.literal("text"),
          text: z.z.string(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        ty = z.z.object({
          type: z.z.literal("image"),
          image: z.z.union([e7, z.z.instanceof(URL)]),
          mimeType: z.z.string().optional(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tv = z.z.object({
          type: z.z.literal("file"),
          data: z.z.union([e7, z.z.instanceof(URL)]),
          filename: z.z.string().optional(),
          mimeType: z.z.string(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tb = z.z.object({
          type: z.z.literal("reasoning"),
          text: z.z.string(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        t_ = z.z.object({
          type: z.z.literal("redacted-reasoning"),
          data: z.z.string(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tw = z.z.object({
          type: z.z.literal("tool-call"),
          toolCallId: z.z.string(),
          toolName: z.z.string(),
          args: z.z.unknown(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tx = z.z.object({
          type: z.z.literal("tool-result"),
          toolCallId: z.z.string(),
          toolName: z.z.string(),
          result: z.z.unknown(),
          content: tg.optional(),
          isError: z.z.boolean().optional(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tk = z.z.object({
          role: z.z.literal("system"),
          content: z.z.string(),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tz = z.z.object({
          role: z.z.literal("user"),
          content: z.z.union([
            z.z.string(),
            z.z.array(z.z.union([tf, ty, tv])),
          ]),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tT = z.z.object({
          role: z.z.literal("assistant"),
          content: z.z.union([
            z.z.string(),
            z.z.array(z.z.union([tf, tv, tb, t_, tw])),
          ]),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tI = z.z.object({
          role: z.z.literal("tool"),
          content: z.z.array(tx),
          providerOptions: th.optional(),
          experimental_providerMetadata: th.optional(),
        }),
        tS = z.z.union([tk, tz, tT, tI]);
      function tE({ prompt: e, tools: t }) {
        if (null == e.prompt && null == e.messages)
          throw new _.M3({
            prompt: e,
            message: "prompt or messages must be defined",
          });
        if (null != e.prompt && null != e.messages)
          throw new _.M3({
            prompt: e,
            message: "prompt and messages cannot be defined at the same time",
          });
        if (null != e.system && "string" != typeof e.system)
          throw new _.M3({ prompt: e, message: "system must be a string" });
        if (null != e.prompt) {
          if ("string" != typeof e.prompt)
            throw new _.M3({ prompt: e, message: "prompt must be a string" });
          return {
            type: "prompt",
            system: e.system,
            messages: [{ role: "user", content: e.prompt }],
          };
        }
        if (null != e.messages) {
          let r =
            "ui-messages" ===
            (function (e) {
              if (!Array.isArray(e))
                throw new _.M3({
                  prompt: e,
                  message: `messages must be an array of CoreMessage or UIMessage
Received non-array value: ${JSON.stringify(e)}`,
                  cause: e,
                });
              if (0 === e.length) return "messages";
              let t = e.map(tj);
              if (t.some((e) => "has-ui-specific-parts" === e))
                return "ui-messages";
              let r = t.findIndex(
                (e) => "has-core-specific-parts" !== e && "message" !== e
              );
              if (-1 === r) return "messages";
              throw new _.M3({
                prompt: e,
                message: `messages must be an array of CoreMessage or UIMessage
Received message of type: "${t[r]}" at index ${r}
messages[${r}]: ${JSON.stringify(e[r])}`,
                cause: e,
              });
            })(e.messages)
              ? (function (e, t) {
                  var r, a;
                  let n = null != (r = null == t ? void 0 : t.tools) ? r : {},
                    s = [];
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t],
                      o = t === e.length - 1,
                      { role: i, content: l, experimental_attachments: u } = r;
                    switch (i) {
                      case "system":
                        s.push({ role: "system", content: l });
                        break;
                      case "user":
                        if (null == r.parts)
                          s.push({
                            role: "user",
                            content: u
                              ? [{ type: "text", text: l }, ...tl(u)]
                              : l,
                          });
                        else {
                          let e = r.parts
                            .filter((e) => "text" === e.type)
                            .map((e) => ({ type: "text", text: e.text }));
                          s.push({
                            role: "user",
                            content: u ? [...e, ...tl(u)] : e,
                          });
                        }
                        break;
                      case "assistant": {
                        if (null != r.parts) {
                          let e = function () {
                              let e = [];
                              for (let t of i)
                                switch (t.type) {
                                  case "file":
                                  case "text":
                                    e.push(t);
                                    break;
                                  case "reasoning":
                                    for (let r of t.details)
                                      switch (r.type) {
                                        case "text":
                                          e.push({
                                            type: "reasoning",
                                            text: r.text,
                                            signature: r.signature,
                                          });
                                          break;
                                        case "redacted":
                                          e.push({
                                            type: "redacted-reasoning",
                                            data: r.data,
                                          });
                                      }
                                    break;
                                  case "tool-invocation":
                                    e.push({
                                      type: "tool-call",
                                      toolCallId: t.toolInvocation.toolCallId,
                                      toolName: t.toolInvocation.toolName,
                                      args: t.toolInvocation.args,
                                    });
                                    break;
                                  default:
                                    throw Error(`Unsupported part: ${t}`);
                                }
                              s.push({ role: "assistant", content: e });
                              let a = i
                                .filter((e) => "tool-invocation" === e.type)
                                .map((e) => e.toolInvocation);
                              a.length > 0 &&
                                s.push({
                                  role: "tool",
                                  content: a.map((e) => {
                                    if (!("result" in e))
                                      throw new td({
                                        originalMessage: r,
                                        message:
                                          "ToolInvocation must have a result: " +
                                          JSON.stringify(e),
                                      });
                                    let {
                                        toolCallId: t,
                                        toolName: a,
                                        result: s,
                                      } = e,
                                      o = n[a];
                                    return (null == o
                                      ? void 0
                                      : o.experimental_toToolResultContent) !=
                                      null
                                      ? {
                                          type: "tool-result",
                                          toolCallId: t,
                                          toolName: a,
                                          result:
                                            o.experimental_toToolResultContent(
                                              s
                                            ),
                                          experimental_content:
                                            o.experimental_toToolResultContent(
                                              s
                                            ),
                                        }
                                      : {
                                          type: "tool-result",
                                          toolCallId: t,
                                          toolName: a,
                                          result: s,
                                        };
                                  }),
                                }),
                                (i = []),
                                (o = !1),
                                t++;
                            },
                            t = 0,
                            o = !1,
                            i = [];
                          for (let n of r.parts)
                            switch (n.type) {
                              case "text":
                                o && e(), i.push(n);
                                break;
                              case "file":
                              case "reasoning":
                                i.push(n);
                                break;
                              case "tool-invocation":
                                (null != (a = n.toolInvocation.step)
                                  ? a
                                  : 0) !== t && e(),
                                  i.push(n),
                                  (o = !0);
                            }
                          e();
                          break;
                        }
                        let e = r.toolInvocations;
                        if (null == e || 0 === e.length) {
                          s.push({ role: "assistant", content: l });
                          break;
                        }
                        let t = e.reduce((e, t) => {
                          var r;
                          return Math.max(e, null != (r = t.step) ? r : 0);
                        }, 0);
                        for (let a = 0; a <= t; a++) {
                          let t = e.filter((e) => {
                            var t;
                            return (null != (t = e.step) ? t : 0) === a;
                          });
                          0 !== t.length &&
                            (s.push({
                              role: "assistant",
                              content: [
                                ...(o && l && 0 === a
                                  ? [{ type: "text", text: l }]
                                  : []),
                                ...t.map(
                                  ({
                                    toolCallId: e,
                                    toolName: t,
                                    args: r,
                                  }) => ({
                                    type: "tool-call",
                                    toolCallId: e,
                                    toolName: t,
                                    args: r,
                                  })
                                ),
                              ],
                            }),
                            s.push({
                              role: "tool",
                              content: t.map((e) => {
                                if (!("result" in e))
                                  throw new td({
                                    originalMessage: r,
                                    message:
                                      "ToolInvocation must have a result: " +
                                      JSON.stringify(e),
                                  });
                                let {
                                    toolCallId: t,
                                    toolName: a,
                                    result: s,
                                  } = e,
                                  o = n[a];
                                return (null == o
                                  ? void 0
                                  : o.experimental_toToolResultContent) != null
                                  ? {
                                      type: "tool-result",
                                      toolCallId: t,
                                      toolName: a,
                                      result:
                                        o.experimental_toToolResultContent(s),
                                      experimental_content:
                                        o.experimental_toToolResultContent(s),
                                    }
                                  : {
                                      type: "tool-result",
                                      toolCallId: t,
                                      toolName: a,
                                      result: s,
                                    };
                              }),
                            }));
                        }
                        l && !o && s.push({ role: "assistant", content: l });
                        break;
                      }
                      case "data":
                        break;
                      default:
                        throw new td({
                          originalMessage: r,
                          message: `Unsupported role: ${i}`,
                        });
                    }
                  }
                  return s;
                })(e.messages, { tools: t })
              : e.messages;
          if (0 === r.length)
            throw new _.M3({
              prompt: e,
              message: "messages must not be empty",
            });
          let a = (0, w.ZZ)({ value: r, schema: z.z.array(tS) });
          if (!a.success)
            throw new _.M3({
              prompt: e,
              message: `message must be a CoreMessage or a UI message
Validation error: ${a.error.message}`,
              cause: a.error,
            });
          return { type: "messages", messages: r, system: e.system };
        }
        throw Error("unreachable");
      }
      function tj(e) {
        return "object" == typeof e &&
          null !== e &&
          ("function" === e.role ||
            "data" === e.role ||
            "toolInvocations" in e ||
            "parts" in e ||
            "experimental_attachments" in e)
          ? "has-ui-specific-parts"
          : "object" == typeof e &&
              null !== e &&
              "content" in e &&
              (Array.isArray(e.content) ||
                "experimental_providerMetadata" in e ||
                "providerOptions" in e)
            ? "has-core-specific-parts"
            : "object" == typeof e &&
                null !== e &&
                "role" in e &&
                "content" in e &&
                "string" == typeof e.content &&
                ["system", "user", "assistant", "tool"].includes(e.role)
              ? "message"
              : "other";
      }
      function tR({ promptTokens: e, completionTokens: t }) {
        return { promptTokens: e, completionTokens: t, totalTokens: e + t };
      }
      function tC(e, t) {
        return {
          promptTokens: e.promptTokens + t.promptTokens,
          completionTokens: e.completionTokens + t.completionTokens,
          totalTokens: e.totalTokens + t.totalTokens,
        };
      }
      function tA({
        prompt: e,
        schema: t,
        schemaPrefix: r = null != t ? "JSON schema:" : void 0,
        schemaSuffix: a = null != t
          ? "You MUST answer with a JSON object that matches the JSON schema above."
          : "You MUST answer with JSON.",
      }) {
        return [
          null != e && e.length > 0 ? e : void 0,
          null != e && e.length > 0 ? "" : void 0,
          r,
          null != t ? JSON.stringify(t) : void 0,
          a,
        ]
          .filter((e) => null != e)
          .join("\n");
      }
      function tN(e) {
        let t = e.pipeThrough(new TransformStream());
        return (
          (t[Symbol.asyncIterator] = () => {
            let e = t.getReader();
            return {
              async next() {
                let { done: t, value: r } = await e.read();
                return t ? { done: !0, value: void 0 } : { done: !1, value: r };
              },
            };
          }),
          t
        );
      }
      var tM = {
          type: "no-schema",
          jsonSchema: void 0,
          validatePartialResult: ({ value: e, textDelta: t }) => ({
            success: !0,
            value: { partial: e, textDelta: t },
          }),
          validateFinalResult: (e, t) =>
            void 0 === e
              ? {
                  success: !1,
                  error: new eX({
                    message:
                      "No object generated: response did not match schema.",
                    text: t.text,
                    response: t.response,
                    usage: t.usage,
                    finishReason: t.finishReason,
                  }),
                }
              : { success: !0, value: e },
          createElementStream() {
            throw new _.b8({
              functionality: "element streams in no-schema mode",
            });
          },
        },
        tP = (e) => ({
          type: "object",
          jsonSchema: e.jsonSchema,
          validatePartialResult: ({ value: e, textDelta: t }) => ({
            success: !0,
            value: { partial: e, textDelta: t },
          }),
          validateFinalResult: (t) =>
            safeValidateTypes2({ value: t, schema: e }),
          createElementStream() {
            throw new UnsupportedFunctionalityError({
              functionality: "element streams in object mode",
            });
          },
        }),
        tO = (e) => {
          let { $schema: t, ...r } = e.jsonSchema;
          return {
            type: "enum",
            jsonSchema: {
              $schema: "http://json-schema.org/draft-07/schema#",
              type: "object",
              properties: { elements: { type: "array", items: r } },
              required: ["elements"],
              additionalProperties: !1,
            },
            validatePartialResult({
              value: t,
              latestObject: r,
              isFirstDelta: a,
              isFinalDelta: n,
            }) {
              var s;
              if (!isJSONObject(t) || !isJSONArray(t.elements))
                return {
                  success: !1,
                  error: new TypeValidationError({
                    value: t,
                    cause:
                      "value must be an object that contains an array of elements",
                  }),
                };
              let o = t.elements,
                i = [];
              for (let t = 0; t < o.length; t++) {
                let r = safeValidateTypes2({ value: o[t], schema: e });
                if (t !== o.length - 1 || n) {
                  if (!r.success) return r;
                  i.push(r.value);
                }
              }
              let l = null != (s = null == r ? void 0 : r.length) ? s : 0,
                u = "";
              return (
                a && (u += "["),
                l > 0 && (u += ","),
                (u += i
                  .slice(l)
                  .map((e) => JSON.stringify(e))
                  .join(",")),
                n && (u += "]"),
                { success: !0, value: { partial: i, textDelta: u } }
              );
            },
            validateFinalResult(t) {
              if (!isJSONObject(t) || !isJSONArray(t.elements))
                return {
                  success: !1,
                  error: new TypeValidationError({
                    value: t,
                    cause:
                      "value must be an object that contains an array of elements",
                  }),
                };
              let r = t.elements;
              for (let t of r) {
                let r = safeValidateTypes2({ value: t, schema: e });
                if (!r.success) return r;
              }
              return { success: !0, value: r };
            },
            createElementStream(e) {
              let t = 0;
              return tN(
                e.pipeThrough(
                  new TransformStream({
                    transform(e, r) {
                      switch (e.type) {
                        case "object": {
                          let a = e.object;
                          for (; t < a.length; t++) r.enqueue(a[t]);
                          break;
                        }
                        case "text-delta":
                        case "finish":
                        case "error":
                          break;
                        default:
                          throw Error(`Unsupported chunk type: ${e}`);
                      }
                    },
                  })
                )
              );
            },
          };
        },
        t$ = (e) => ({
          type: "enum",
          jsonSchema: {
            $schema: "http://json-schema.org/draft-07/schema#",
            type: "object",
            properties: { result: { type: "string", enum: e } },
            required: ["result"],
            additionalProperties: !1,
          },
          validateFinalResult(t) {
            if (!isJSONObject(t) || "string" != typeof t.result)
              return {
                success: !1,
                error: new TypeValidationError({
                  value: t,
                  cause:
                    'value must be an object that contains a string in the "result" property.',
                }),
              };
            let r = t.result;
            return e.includes(r)
              ? { success: !0, value: r }
              : {
                  success: !1,
                  error: new TypeValidationError({
                    value: t,
                    cause: "value must be a string in the enum",
                  }),
                };
          },
          validatePartialResult() {
            throw new UnsupportedFunctionalityError({
              functionality: "partial results in enum mode",
            });
          },
          createElementStream() {
            throw new UnsupportedFunctionalityError({
              functionality: "element streams in enum mode",
            });
          },
        });
      (0, w.hK)({ prefix: "aiobj", size: 24 });
      var tD = class {
        constructor() {
          (this.status = { type: "pending" }),
            (this._resolve = void 0),
            (this._reject = void 0);
        }
        get value() {
          return (
            this.promise ||
              (this.promise = new Promise((e, t) => {
                "resolved" === this.status.type
                  ? e(this.status.value)
                  : "rejected" === this.status.type && t(this.status.error),
                  (this._resolve = e),
                  (this._reject = t);
              })),
            this.promise
          );
        }
        resolve(e) {
          var t;
          (this.status = { type: "resolved", value: e }),
            this.promise && (null == (t = this._resolve) || t.call(this, e));
        }
        reject(e) {
          var t;
          (this.status = { type: "rejected", error: e }),
            this.promise && (null == (t = this._reject) || t.call(this, e));
        }
      };
      function tq() {
        let e, t;
        return {
          promise: new Promise((r, a) => {
            (e = r), (t = a);
          }),
          resolve: e,
          reject: t,
        };
      }
      function tU() {
        let e = [],
          t = null,
          r = !1,
          a = tq(),
          n = async () => {
            if (r && 0 === e.length) {
              null == t || t.close();
              return;
            }
            if (0 === e.length) return (a = tq()), await a.promise, n();
            try {
              let { value: a, done: s } = await e[0].read();
              s
                ? (e.shift(),
                  e.length > 0 ? await n() : r && (null == t || t.close()))
                : null == t || t.enqueue(a);
            } catch (a) {
              null == t || t.error(a),
                e.shift(),
                r && 0 === e.length && (null == t || t.close());
            }
          };
        return {
          stream: new ReadableStream({
            start(e) {
              t = e;
            },
            pull: n,
            async cancel() {
              for (let t of e) await t.cancel();
              (e = []), (r = !0);
            },
          }),
          addStream: (t) => {
            if (r)
              throw Error("Cannot add inner stream: outer stream is closed");
            e.push(t.getReader()), a.resolve();
          },
          close: () => {
            (r = !0), a.resolve(), 0 === e.length && (null == t || t.close());
          },
          terminate: () => {
            (r = !0),
              a.resolve(),
              e.forEach((e) => e.cancel()),
              (e = []),
              null == t || t.close();
          },
        };
      }
      function tF() {
        var e, t;
        return null !=
          (t =
            null == (e = null == globalThis ? void 0 : globalThis.performance)
              ? void 0
              : e.now())
          ? t
          : Date.now();
      }
      (0, w.hK)({ prefix: "aiobj", size: 24 });
      var tL = "AI_NoOutputSpecifiedError",
        tZ = `vercel.ai.error.${tL}`,
        tJ = Symbol.for(tZ),
        tB = class extends _.bD {
          constructor({ message: e = "No output specified." } = {}) {
            super({ name: tL, message: e }), (this[d] = !0);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, tZ);
          }
        };
      d = tJ;
      var tV = "AI_ToolExecutionError",
        tY = `vercel.ai.error.${tV}`,
        tG = Symbol.for(tY),
        tK = class extends _.bD {
          constructor({
            toolArgs: e,
            toolName: t,
            toolCallId: r,
            cause: a,
            message: n = `Error executing tool ${t}: ${(0, _.u1)(a)}`,
          }) {
            super({ name: tV, message: n, cause: a }),
              (this[m] = !0),
              (this.toolArgs = e),
              (this.toolName = t),
              (this.toolCallId = r);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, tY);
          }
        };
      function tW({ tools: e, toolChoice: t, activeTools: r }) {
        return null != e && Object.keys(e).length > 0
          ? {
              tools: (null != r
                ? Object.entries(e).filter(([e]) => r.includes(e))
                : Object.entries(e)
              ).map(([e, t]) => {
                let r = t.type;
                switch (r) {
                  case void 0:
                  case "function":
                    return {
                      type: "function",
                      name: e,
                      description: t.description,
                      parameters: ey(t.parameters).jsonSchema,
                    };
                  case "provider-defined":
                    return {
                      type: "provider-defined",
                      name: e,
                      id: t.id,
                      args: t.args,
                    };
                  default:
                    throw Error(`Unsupported tool type: ${r}`);
                }
              }),
              toolChoice:
                null == t
                  ? { type: "auto" }
                  : "string" == typeof t
                    ? { type: t }
                    : { type: "tool", toolName: t.toolName },
            }
          : { tools: void 0, toolChoice: void 0 };
      }
      m = tG;
      var tH = /^([\s\S]*?)(\s+)(\S*)$/;
      function tX(e) {
        let t = e.match(tH);
        return t ? { prefix: t[1], whitespace: t[2], suffix: t[3] } : void 0;
      }
      var tQ = "AI_InvalidToolArgumentsError",
        t0 = `vercel.ai.error.${tQ}`,
        t1 = Symbol.for(t0),
        t4 = class extends _.bD {
          constructor({
            toolArgs: e,
            toolName: t,
            cause: r,
            message: a = `Invalid arguments for tool ${t}: ${(0, _.u1)(r)}`,
          }) {
            super({ name: tQ, message: a, cause: r }),
              (this[h] = !0),
              (this.toolArgs = e),
              (this.toolName = t);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, t0);
          }
        };
      h = t1;
      var t2 = "AI_NoSuchToolError",
        t6 = `vercel.ai.error.${t2}`,
        t9 = Symbol.for(t6),
        t3 = class extends _.bD {
          constructor({
            toolName: e,
            availableTools: t,
            message:
              r = `Model tried to call unavailable tool '${e}'. ${void 0 === t ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`,
          }) {
            super({ name: t2, message: r }),
              (this[g] = !0),
              (this.toolName = e),
              (this.availableTools = t);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, t6);
          }
        };
      g = t9;
      var t8 = "AI_ToolCallRepairError",
        t7 = `vercel.ai.error.${t8}`,
        t5 = Symbol.for(t7),
        re = class extends _.bD {
          constructor({
            cause: e,
            originalError: t,
            message: r = `Error repairing tool call: ${(0, _.u1)(e)}`,
          }) {
            super({ name: t8, message: r, cause: e }),
              (this[f] = !0),
              (this.originalError = t);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, t7);
          }
        };
      async function rt({
        toolCall: e,
        tools: t,
        repairToolCall: r,
        system: a,
        messages: n,
      }) {
        if (null == t) throw new t3({ toolName: e.toolName });
        try {
          return await rr({ toolCall: e, tools: t });
        } catch (o) {
          if (null == r || !(t3.isInstance(o) || t4.isInstance(o))) throw o;
          let s = null;
          try {
            s = await r({
              toolCall: e,
              tools: t,
              parameterSchema: ({ toolName: e }) =>
                ey(t[e].parameters).jsonSchema,
              system: a,
              messages: n,
              error: o,
            });
          } catch (e) {
            throw new re({ cause: e, originalError: o });
          }
          if (null == s) throw o;
          return await rr({ toolCall: s, tools: t });
        }
      }
      async function rr({ toolCall: e, tools: t }) {
        let r = e.toolName,
          a = t[r];
        if (null == a)
          throw new t3({
            toolName: e.toolName,
            availableTools: Object.keys(t),
          });
        let n = ey(a.parameters),
          s =
            "" === e.args.trim()
              ? (0, w.ZZ)({ value: {}, schema: n })
              : (0, w.N8)({ text: e.args, schema: n });
        if (!1 === s.success)
          throw new t4({ toolName: r, toolArgs: e.args, cause: s.error });
        return {
          type: "tool-call",
          toolCallId: e.toolCallId,
          toolName: r,
          args: s.value,
        };
      }
      function ra(e) {
        let t = e
          .filter((e) => "text" === e.type)
          .map((e) => e.text)
          .join("");
        return t.length > 0 ? t : void 0;
      }
      function rn({
        text: e = "",
        files: t,
        reasoning: r,
        tools: a,
        toolCalls: n,
        toolResults: s,
        messageId: o,
        generateMessageId: i,
      }) {
        let l = [],
          u = [];
        return (
          r.length > 0 &&
            u.push(
              ...r.map((e) =>
                "text" === e.type
                  ? { ...e, type: "reasoning" }
                  : { ...e, type: "redacted-reasoning" }
              )
            ),
          t.length > 0 &&
            u.push(
              ...t.map((e) => ({
                type: "file",
                data: e.base64,
                mimeType: e.mimeType,
              }))
            ),
          e.length > 0 && u.push({ type: "text", text: e }),
          n.length > 0 && u.push(...n),
          u.length > 0 && l.push({ role: "assistant", content: u, id: o }),
          s.length > 0 &&
            l.push({
              role: "tool",
              id: i(),
              content: s.map((e) => {
                let t = a[e.toolName];
                return (null == t
                  ? void 0
                  : t.experimental_toToolResultContent) != null
                  ? {
                      type: "tool-result",
                      toolCallId: e.toolCallId,
                      toolName: e.toolName,
                      result: t.experimental_toToolResultContent(e.result),
                      experimental_content: t.experimental_toToolResultContent(
                        e.result
                      ),
                    }
                  : {
                      type: "tool-result",
                      toolCallId: e.toolCallId,
                      toolName: e.toolName,
                      result: e.result,
                    };
              }),
            }),
          l
        );
      }
      f = t5;
      var rs = (0, w.hK)({ prefix: "aitxt", size: 24 }),
        ro = (0, w.hK)({ prefix: "msg", size: 24 });
      async function ri({
        model: e,
        tools: t,
        toolChoice: r,
        system: a,
        prompt: n,
        messages: s,
        maxRetries: o,
        abortSignal: i,
        headers: l,
        maxSteps: u = 1,
        experimental_generateMessageId: p = ro,
        experimental_output: c,
        experimental_continueSteps: d = !1,
        experimental_telemetry: m,
        experimental_providerMetadata: h,
        providerOptions: g = h,
        experimental_activeTools: f,
        experimental_prepareStep: y,
        experimental_repairToolCall: v,
        _internal: {
          generateId: b = rs,
          currentDate: _ = () => new Date(),
        } = {},
        onStepFinish: w,
        ...x
      }) {
        var k;
        if (u < 1)
          throw new eI({
            parameter: "maxSteps",
            value: u,
            message: "maxSteps must be at least 1",
          });
        let { maxRetries: z, retry: T } = eN({ maxRetries: o }),
          I = eP({
            model: e,
            telemetry: m,
            headers: l,
            settings: { ...x, maxRetries: z },
          }),
          S = tE({
            prompt: {
              system:
                null !=
                (k =
                  null == c
                    ? void 0
                    : c.injectIntoSystemPrompt({ system: a, model: e }))
                  ? k
                  : a,
              prompt: n,
              messages: s,
            },
            tools: t,
          }),
          E = eq(m);
        return eU({
          name: "ai.generateText",
          attributes: eF({
            telemetry: m,
            attributes: {
              ...eM({ operationId: "ai.generateText", telemetry: m }),
              ...I,
              "ai.model.provider": e.provider,
              "ai.model.id": e.modelId,
              "ai.prompt": {
                input: () =>
                  JSON.stringify({ system: a, prompt: n, messages: s }),
              },
              "ai.settings.maxSteps": u,
            },
          }),
          tracer: E,
          fn: async (n) => {
            var s, o, h, k, z, j, R, C, A, N, M, P, O, $;
            let D,
              q = ti(x),
              U = [],
              F = [],
              L = [],
              Z = 0,
              J = [],
              B = "",
              V = [],
              Y = [],
              G = { completionTokens: 0, promptTokens: 0, totalTokens: 0 },
              K = "initial";
            do {
              let n = 0 === Z ? S.type : "messages",
                P = [...S.messages, ...J],
                O = await (null == y
                  ? void 0
                  : y({ model: e, steps: Y, maxSteps: u, stepNumber: Z })),
                $ = null != (s = null == O ? void 0 : O.toolChoice) ? s : r,
                W =
                  null != (o = null == O ? void 0 : O.experimental_activeTools)
                    ? o
                    : f,
                H = null != (h = null == O ? void 0 : O.model) ? h : e,
                X = await ts({
                  prompt: { type: n, system: S.system, messages: P },
                  modelSupportsImageUrls: H.supportsImageUrls,
                  modelSupportsUrl:
                    null == (k = H.supportsUrl) ? void 0 : k.bind(H),
                }),
                Q = {
                  type: "regular",
                  ...tW({ tools: t, toolChoice: $, activeTools: W }),
                };
              (D = await T(() =>
                eU({
                  name: "ai.generateText.doGenerate",
                  attributes: eF({
                    telemetry: m,
                    attributes: {
                      ...eM({
                        operationId: "ai.generateText.doGenerate",
                        telemetry: m,
                      }),
                      ...I,
                      "ai.model.provider": H.provider,
                      "ai.model.id": H.modelId,
                      "ai.prompt.format": { input: () => n },
                      "ai.prompt.messages": { input: () => JSON.stringify(X) },
                      "ai.prompt.tools": {
                        input: () => {
                          var e;
                          return null == (e = Q.tools)
                            ? void 0
                            : e.map((e) => JSON.stringify(e));
                        },
                      },
                      "ai.prompt.toolChoice": {
                        input: () =>
                          null != Q.toolChoice
                            ? JSON.stringify(Q.toolChoice)
                            : void 0,
                      },
                      "gen_ai.system": H.provider,
                      "gen_ai.request.model": H.modelId,
                      "gen_ai.request.frequency_penalty": x.frequencyPenalty,
                      "gen_ai.request.max_tokens": x.maxTokens,
                      "gen_ai.request.presence_penalty": x.presencePenalty,
                      "gen_ai.request.stop_sequences": x.stopSequences,
                      "gen_ai.request.temperature": x.temperature,
                      "gen_ai.request.top_k": x.topK,
                      "gen_ai.request.top_p": x.topP,
                    },
                  }),
                  tracer: E,
                  fn: async (t) => {
                    var r, a, s, o, u, p;
                    let d = await H.doGenerate({
                        mode: Q,
                        ...q,
                        inputFormat: n,
                        responseFormat:
                          null == c ? void 0 : c.responseFormat({ model: e }),
                        prompt: X,
                        providerMetadata: g,
                        abortSignal: i,
                        headers: l,
                      }),
                      h = {
                        id:
                          null != (a = null == (r = d.response) ? void 0 : r.id)
                            ? a
                            : b(),
                        timestamp:
                          null !=
                          (o = null == (s = d.response) ? void 0 : s.timestamp)
                            ? o
                            : _(),
                        modelId:
                          null !=
                          (p = null == (u = d.response) ? void 0 : u.modelId)
                            ? p
                            : H.modelId,
                      };
                    return (
                      t.setAttributes(
                        eF({
                          telemetry: m,
                          attributes: {
                            "ai.response.finishReason": d.finishReason,
                            "ai.response.text": { output: () => d.text },
                            "ai.response.toolCalls": {
                              output: () => JSON.stringify(d.toolCalls),
                            },
                            "ai.response.id": h.id,
                            "ai.response.model": h.modelId,
                            "ai.response.timestamp": h.timestamp.toISOString(),
                            "ai.usage.promptTokens": d.usage.promptTokens,
                            "ai.usage.completionTokens":
                              d.usage.completionTokens,
                            "gen_ai.response.finish_reasons": [d.finishReason],
                            "gen_ai.response.id": h.id,
                            "gen_ai.response.model": h.modelId,
                            "gen_ai.usage.input_tokens": d.usage.promptTokens,
                            "gen_ai.usage.output_tokens":
                              d.usage.completionTokens,
                          },
                        })
                      ),
                      { ...d, response: h }
                    );
                  },
                })
              )),
                (U = await Promise.all(
                  (null != (z = D.toolCalls) ? z : []).map((e) =>
                    rt({
                      toolCall: e,
                      tools: t,
                      repairToolCall: v,
                      system: a,
                      messages: P,
                    })
                  )
                )),
                (F =
                  null == t
                    ? []
                    : await rl({
                        toolCalls: U,
                        tools: t,
                        tracer: E,
                        telemetry: m,
                        messages: P,
                        abortSignal: i,
                      }));
              let ee = tR(D.usage);
              G = tC(G, ee);
              let et = "done";
              ++Z < u &&
                (d && "length" === D.finishReason && 0 === U.length
                  ? (et = "continue")
                  : U.length > 0 &&
                    F.length === U.length &&
                    (et = "tool-result"));
              let er = null != (j = D.text) ? j : "",
                ea =
                  "continue" === K && B.trimEnd() !== B ? er.trimStart() : er,
                en =
                  "continue" === et
                    ? (function (e) {
                        let t = tX(e);
                        return t ? t.prefix + t.whitespace : e;
                      })(ea)
                    : ea;
              if (
                ((B = "continue" === et || "continue" === K ? B + en : en),
                (L = rp(D.reasoning)),
                V.push(...(null != (R = D.sources) ? R : [])),
                "continue" === K)
              ) {
                let e = J[J.length - 1];
                "string" == typeof e.content
                  ? (e.content += en)
                  : e.content.push({ text: en, type: "text" });
              } else
                J.push(
                  ...rn({
                    text: B,
                    files: rc(D.files),
                    reasoning: rp(D.reasoning),
                    tools: null != t ? t : {},
                    toolCalls: U,
                    toolResults: F,
                    messageId: p(),
                    generateMessageId: p,
                  })
                );
              let es = {
                stepType: K,
                text: en,
                reasoning: ra(L),
                reasoningDetails: L,
                files: rc(D.files),
                sources: null != (C = D.sources) ? C : [],
                toolCalls: U,
                toolResults: F,
                finishReason: D.finishReason,
                usage: ee,
                warnings: D.warnings,
                logprobs: D.logprobs,
                request: null != (A = D.request) ? A : {},
                response: {
                  ...D.response,
                  headers: null == (N = D.rawResponse) ? void 0 : N.headers,
                  body: null == (M = D.rawResponse) ? void 0 : M.body,
                  messages: structuredClone(J),
                },
                providerMetadata: D.providerMetadata,
                experimental_providerMetadata: D.providerMetadata,
                isContinued: "continue" === et,
              };
              Y.push(es), await (null == w ? void 0 : w(es)), (K = et);
            } while ("done" !== K);
            return (
              n.setAttributes(
                eF({
                  telemetry: m,
                  attributes: {
                    "ai.response.finishReason": D.finishReason,
                    "ai.response.text": { output: () => D.text },
                    "ai.response.toolCalls": {
                      output: () => JSON.stringify(D.toolCalls),
                    },
                    "ai.usage.promptTokens": D.usage.promptTokens,
                    "ai.usage.completionTokens": D.usage.completionTokens,
                  },
                })
              ),
              new ru({
                text: B,
                files: rc(D.files),
                reasoning: ra(L),
                reasoningDetails: L,
                sources: V,
                outputResolver: () => {
                  if (null == c) throw new tB();
                  return c.parseOutput(
                    { text: B },
                    {
                      response: D.response,
                      usage: G,
                      finishReason: D.finishReason,
                    }
                  );
                },
                toolCalls: U,
                toolResults: F,
                finishReason: D.finishReason,
                usage: G,
                warnings: D.warnings,
                request: null != (P = D.request) ? P : {},
                response: {
                  ...D.response,
                  headers: null == (O = D.rawResponse) ? void 0 : O.headers,
                  body: null == ($ = D.rawResponse) ? void 0 : $.body,
                  messages: J,
                },
                logprobs: D.logprobs,
                steps: Y,
                providerMetadata: D.providerMetadata,
              })
            );
          },
        });
      }
      async function rl({
        toolCalls: e,
        tools: t,
        tracer: r,
        telemetry: a,
        messages: n,
        abortSignal: s,
      }) {
        return (
          await Promise.all(
            e.map(async ({ toolCallId: e, toolName: o, args: i }) => {
              let l = t[o];
              if ((null == l ? void 0 : l.execute) == null) return;
              let u = await eU({
                name: "ai.toolCall",
                attributes: eF({
                  telemetry: a,
                  attributes: {
                    ...eM({ operationId: "ai.toolCall", telemetry: a }),
                    "ai.toolCall.name": o,
                    "ai.toolCall.id": e,
                    "ai.toolCall.args": { output: () => JSON.stringify(i) },
                  },
                }),
                tracer: r,
                fn: async (t) => {
                  try {
                    let r = await l.execute(i, {
                      toolCallId: e,
                      messages: n,
                      abortSignal: s,
                    });
                    try {
                      t.setAttributes(
                        eF({
                          telemetry: a,
                          attributes: {
                            "ai.toolCall.result": {
                              output: () => JSON.stringify(r),
                            },
                          },
                        })
                      );
                    } catch (e) {}
                    return r;
                  } catch (t) {
                    throw new tK({
                      toolCallId: e,
                      toolName: o,
                      toolArgs: i,
                      cause: t,
                    });
                  }
                },
              });
              return {
                type: "tool-result",
                toolCallId: e,
                toolName: o,
                args: i,
                result: u,
              };
            })
          )
        ).filter((e) => null != e);
      }
      var ru = class {
        constructor(e) {
          (this.text = e.text),
            (this.files = e.files),
            (this.reasoning = e.reasoning),
            (this.reasoningDetails = e.reasoningDetails),
            (this.toolCalls = e.toolCalls),
            (this.toolResults = e.toolResults),
            (this.finishReason = e.finishReason),
            (this.usage = e.usage),
            (this.warnings = e.warnings),
            (this.request = e.request),
            (this.response = e.response),
            (this.steps = e.steps),
            (this.experimental_providerMetadata = e.providerMetadata),
            (this.providerMetadata = e.providerMetadata),
            (this.logprobs = e.logprobs),
            (this.outputResolver = e.outputResolver),
            (this.sources = e.sources);
        }
        get experimental_output() {
          return this.outputResolver();
        }
      };
      function rp(e) {
        return null == e
          ? []
          : "string" == typeof e
            ? [{ type: "text", text: e }]
            : e;
      }
      function rc(e) {
        var t;
        return null != (t = null == e ? void 0 : e.map((e) => new eB(e)))
          ? t
          : [];
      }
      eb({}, { object: () => r_, text: () => rb });
      var rd = "AI_InvalidStreamPartError",
        rm = `vercel.ai.error.${rd}`,
        rh = Symbol.for(rm),
        rg = class extends _.bD {
          constructor({ chunk: e, message: t }) {
            super({ name: rd, message: t }), (this[y] = !0), (this.chunk = e);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, rm);
          }
        };
      y = rh;
      var rf = "vercel.ai.error.AI_MCPClientError",
        ry = Symbol.for(rf),
        rv = class extends _.bD {
          constructor({ name: e = "MCPClientError", message: t, cause: r }) {
            super({ name: e, message: t, cause: r }), (this[v] = !0);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, rf);
          }
        };
      v = ry;
      var rb = () => ({
          type: "text",
          responseFormat: () => ({ type: "text" }),
          injectIntoSystemPrompt: ({ system: e }) => e,
          parsePartial: ({ text: e }) => ({ partial: e }),
          parseOutput: ({ text: e }) => e,
        }),
        r_ = ({ schema: e }) => {
          let t = ey(e);
          return {
            type: "object",
            responseFormat: ({ model: e }) => ({
              type: "json",
              schema: e.supportsStructuredOutputs ? t.jsonSchema : void 0,
            }),
            injectIntoSystemPrompt: ({ system: e, model: r }) =>
              r.supportsStructuredOutputs
                ? e
                : tA({ prompt: e, schema: t.jsonSchema }),
            parsePartial({ text: e }) {
              let t = el(e);
              switch (t.state) {
                case "failed-parse":
                case "undefined-input":
                  return;
                case "repaired-parse":
                case "successful-parse":
                  return { partial: t.value };
                default: {
                  let e = t.state;
                  throw Error(`Unsupported parse state: ${e}`);
                }
              }
            },
            parseOutput({ text: e }, r) {
              let a = (0, w.N8)({ text: e });
              if (!a.success)
                throw new eX({
                  message: "No object generated: could not parse the response.",
                  cause: a.error,
                  text: e,
                  response: r.response,
                  usage: r.usage,
                  finishReason: r.finishReason,
                });
              let n = (0, w.ZZ)({ value: a.value, schema: t });
              if (!n.success)
                throw new eX({
                  message:
                    "No object generated: response did not match schema.",
                  cause: n.error,
                  text: e,
                  response: r.response,
                  usage: r.usage,
                  finishReason: r.finishReason,
                });
              return n.value;
            },
          };
        };
      async function rw({ stream: e, onError: t }) {
        let r = e.getReader();
        try {
          for (;;) {
            let { done: e } = await r.read();
            if (e) break;
          }
        } catch (e) {
          null == t || t(e);
        } finally {
          r.releaseLock();
        }
      }
      function rx(e, t) {
        let r,
          a,
          n = e.getReader(),
          s = t.getReader(),
          o = !1,
          i = !1;
        async function l(e) {
          try {
            null == r && (r = n.read());
            let t = await r;
            (r = void 0), t.done ? e.close() : e.enqueue(t.value);
          } catch (t) {
            e.error(t);
          }
        }
        async function u(e) {
          try {
            null == a && (a = s.read());
            let t = await a;
            (a = void 0), t.done ? e.close() : e.enqueue(t.value);
          } catch (t) {
            e.error(t);
          }
        }
        return new ReadableStream({
          async pull(e) {
            try {
              if (o) return void (await u(e));
              if (i) return void (await l(e));
              null == r && (r = n.read()), null == a && (a = s.read());
              let { result: t, reader: p } = await Promise.race([
                r.then((e) => ({ result: e, reader: n })),
                a.then((e) => ({ result: e, reader: s })),
              ]);
              t.done || e.enqueue(t.value),
                p === n
                  ? ((r = void 0), t.done && (await u(e), (o = !0)))
                  : ((a = void 0), t.done && ((i = !0), await l(e)));
            } catch (t) {
              e.error(t);
            }
          },
          cancel() {
            n.cancel(), s.cancel();
          },
        });
      }
      var rk = (0, w.hK)({ prefix: "aitxt", size: 24 }),
        rz = (0, w.hK)({ prefix: "msg", size: 24 });
      function rT({
        model: e,
        tools: t,
        toolChoice: r,
        system: a,
        prompt: n,
        messages: s,
        maxRetries: o,
        abortSignal: i,
        headers: l,
        maxSteps: u = 1,
        experimental_generateMessageId: p = rz,
        experimental_output: c,
        experimental_continueSteps: d = !1,
        experimental_telemetry: m,
        experimental_providerMetadata: h,
        providerOptions: g = h,
        experimental_toolCallStreaming: f = !1,
        toolCallStreaming: y = f,
        experimental_activeTools: v,
        experimental_repairToolCall: b,
        experimental_transform: _,
        onChunk: w,
        onError: x,
        onFinish: k,
        onStepFinish: z,
        _internal: {
          now: T = tF,
          generateId: I = rk,
          currentDate: S = () => new Date(),
        } = {},
        ...E
      }) {
        var j;
        return new rI({
          model: e,
          telemetry: m,
          headers: l,
          settings: E,
          maxRetries: o,
          abortSignal: i,
          system: a,
          prompt: n,
          messages: s,
          tools: t,
          toolChoice: r,
          toolCallStreaming: y,
          transforms: void 0 === (j = _) ? [] : Array.isArray(j) ? j : [j],
          activeTools: v,
          repairToolCall: b,
          maxSteps: u,
          output: c,
          continueSteps: d,
          providerOptions: g,
          onChunk: w,
          onError: x,
          onFinish: k,
          onStepFinish: z,
          now: T,
          currentDate: S,
          generateId: I,
          generateMessageId: p,
        });
      }
      var rI = class {
          constructor({
            model: e,
            telemetry: t,
            headers: r,
            settings: a,
            maxRetries: n,
            abortSignal: s,
            system: o,
            prompt: i,
            messages: l,
            tools: u,
            toolChoice: p,
            toolCallStreaming: c,
            transforms: d,
            activeTools: m,
            repairToolCall: h,
            maxSteps: g,
            output: f,
            continueSteps: y,
            providerOptions: v,
            now: b,
            currentDate: x,
            generateId: k,
            generateMessageId: z,
            onChunk: T,
            onError: I,
            onFinish: S,
            onStepFinish: E,
          }) {
            var j;
            let R, C, A, N;
            if (
              ((this.warningsPromise = new tD()),
              (this.usagePromise = new tD()),
              (this.finishReasonPromise = new tD()),
              (this.providerMetadataPromise = new tD()),
              (this.textPromise = new tD()),
              (this.reasoningPromise = new tD()),
              (this.reasoningDetailsPromise = new tD()),
              (this.sourcesPromise = new tD()),
              (this.filesPromise = new tD()),
              (this.toolCallsPromise = new tD()),
              (this.toolResultsPromise = new tD()),
              (this.requestPromise = new tD()),
              (this.responsePromise = new tD()),
              (this.stepsPromise = new tD()),
              g < 1)
            )
              throw new eI({
                parameter: "maxSteps",
                value: g,
                message: "maxSteps must be at least 1",
              });
            this.output = f;
            let M = "",
              P = "",
              O = "",
              $ = [],
              D = [],
              q = [],
              U = [],
              F = { id: k(), timestamp: x(), modelId: e.modelId, messages: [] },
              L = [],
              Z = [],
              J = "initial",
              B = [],
              V = new TransformStream({
                async transform(e, t) {
                  t.enqueue(e);
                  let { part: r } = e;
                  if (
                    (("text-delta" === r.type ||
                      "reasoning" === r.type ||
                      "source" === r.type ||
                      "tool-call" === r.type ||
                      "tool-result" === r.type ||
                      "tool-call-streaming-start" === r.type ||
                      "tool-call-delta" === r.type) &&
                      (await (null == T ? void 0 : T({ chunk: r }))),
                    "error" === r.type &&
                      (await (null == I ? void 0 : I({ error: r.error }))),
                    "text-delta" === r.type &&
                      ((M += r.textDelta),
                      (P += r.textDelta),
                      (O += r.textDelta)),
                    "reasoning" === r.type &&
                      (null == C
                        ? ((C = { type: "text", text: r.textDelta }), $.push(C))
                        : (C.text += r.textDelta)),
                    "reasoning-signature" === r.type)
                  ) {
                    if (null == C)
                      throw new _.bD({
                        name: "InvalidStreamPart",
                        message: "reasoning-signature without reasoning",
                      });
                    (C.signature = r.signature), (C = void 0);
                  }
                  if (
                    ("redacted-reasoning" === r.type &&
                      $.push({ type: "redacted", data: r.data }),
                    "file" === r.type && D.push(r),
                    "source" === r.type && (U.push(r.source), q.push(r.source)),
                    "tool-call" === r.type && L.push(r),
                    "tool-result" === r.type && Z.push(r),
                    "step-finish" === r.type)
                  ) {
                    let e = rn({
                        text: P,
                        files: D,
                        reasoning: $,
                        tools: null != u ? u : {},
                        toolCalls: L,
                        toolResults: Z,
                        messageId: r.messageId,
                        generateMessageId: z,
                      }),
                      t = B.length,
                      a = "done";
                    t + 1 < g &&
                      (y && "length" === r.finishReason && 0 === L.length
                        ? (a = "continue")
                        : L.length > 0 &&
                          Z.length === L.length &&
                          (a = "tool-result"));
                    let n = {
                      stepType: J,
                      text: M,
                      reasoning: ra($),
                      reasoningDetails: $,
                      files: D,
                      sources: q,
                      toolCalls: L,
                      toolResults: Z,
                      finishReason: r.finishReason,
                      usage: r.usage,
                      warnings: r.warnings,
                      logprobs: r.logprobs,
                      request: r.request,
                      response: {
                        ...r.response,
                        messages: [...F.messages, ...e],
                      },
                      providerMetadata: r.experimental_providerMetadata,
                      experimental_providerMetadata:
                        r.experimental_providerMetadata,
                      isContinued: r.isContinued,
                    };
                    await (null == E ? void 0 : E(n)),
                      B.push(n),
                      (L = []),
                      (Z = []),
                      (M = ""),
                      (q = []),
                      ($ = []),
                      (D = []),
                      (C = void 0),
                      "done" !== a && (J = a),
                      "continue" !== a && (F.messages.push(...e), (P = ""));
                  }
                  "finish" === r.type &&
                    ((F.id = r.response.id),
                    (F.timestamp = r.response.timestamp),
                    (F.modelId = r.response.modelId),
                    (F.headers = r.response.headers),
                    (N = r.usage),
                    (A = r.finishReason));
                },
                async flush(e) {
                  var r;
                  try {
                    if (0 === B.length) return;
                    let e = B[B.length - 1];
                    ee.warningsPromise.resolve(e.warnings),
                      ee.requestPromise.resolve(e.request),
                      ee.responsePromise.resolve(e.response),
                      ee.toolCallsPromise.resolve(e.toolCalls),
                      ee.toolResultsPromise.resolve(e.toolResults),
                      ee.providerMetadataPromise.resolve(
                        e.experimental_providerMetadata
                      ),
                      ee.reasoningPromise.resolve(e.reasoning),
                      ee.reasoningDetailsPromise.resolve(e.reasoningDetails);
                    let a = null != A ? A : "unknown",
                      n =
                        null != N
                          ? N
                          : {
                              completionTokens: NaN,
                              promptTokens: NaN,
                              totalTokens: NaN,
                            };
                    ee.finishReasonPromise.resolve(a),
                      ee.usagePromise.resolve(n),
                      ee.textPromise.resolve(O),
                      ee.sourcesPromise.resolve(U),
                      ee.filesPromise.resolve(e.files),
                      ee.stepsPromise.resolve(B),
                      await (null == S
                        ? void 0
                        : S({
                            finishReason: a,
                            logprobs: void 0,
                            usage: n,
                            text: O,
                            reasoning: e.reasoning,
                            reasoningDetails: e.reasoningDetails,
                            files: e.files,
                            sources: e.sources,
                            toolCalls: e.toolCalls,
                            toolResults: e.toolResults,
                            request: null != (r = e.request) ? r : {},
                            response: e.response,
                            warnings: e.warnings,
                            providerMetadata: e.providerMetadata,
                            experimental_providerMetadata:
                              e.experimental_providerMetadata,
                            steps: B,
                          })),
                      R.setAttributes(
                        eF({
                          telemetry: t,
                          attributes: {
                            "ai.response.finishReason": a,
                            "ai.response.text": { output: () => O },
                            "ai.response.toolCalls": {
                              output: () => {
                                var t;
                                return (
                                  null == (t = e.toolCalls) ? void 0 : t.length
                                )
                                  ? JSON.stringify(e.toolCalls)
                                  : void 0;
                              },
                            },
                            "ai.usage.promptTokens": n.promptTokens,
                            "ai.usage.completionTokens": n.completionTokens,
                          },
                        })
                      );
                  } catch (t) {
                    e.error(t);
                  } finally {
                    R.end();
                  }
                },
              }),
              Y = tU();
            (this.addStream = Y.addStream), (this.closeStream = Y.close);
            let G = Y.stream;
            for (let e of d)
              G = G.pipeThrough(
                e({
                  tools: u,
                  stopStream() {
                    Y.terminate();
                  },
                })
              );
            this.baseStream = G.pipeThrough(
              (function (e) {
                if (!e)
                  return new TransformStream({
                    transform(e, t) {
                      t.enqueue({ part: e, partialOutput: void 0 });
                    },
                  });
                let t = "",
                  r = "",
                  a = "";
                function n({ controller: e, partialOutput: t }) {
                  e.enqueue({
                    part: { type: "text-delta", textDelta: r },
                    partialOutput: t,
                  }),
                    (r = "");
                }
                return new TransformStream({
                  transform(s, o) {
                    if (
                      ("step-finish" === s.type && n({ controller: o }),
                      "text-delta" !== s.type)
                    )
                      return void o.enqueue({ part: s, partialOutput: void 0 });
                    (t += s.textDelta), (r += s.textDelta);
                    let i = e.parsePartial({ text: t });
                    if (null != i) {
                      let e = JSON.stringify(i.partial);
                      e !== a &&
                        (n({ controller: o, partialOutput: i.partial }),
                        (a = e));
                    }
                  },
                  flush(e) {
                    r.length > 0 && n({ controller: e });
                  },
                });
              })(f)
            ).pipeThrough(V);
            let { maxRetries: K, retry: W } = eN({ maxRetries: n }),
              H = eq(t),
              X = eP({
                model: e,
                telemetry: t,
                headers: r,
                settings: { ...a, maxRetries: K },
              }),
              Q = tE({
                prompt: {
                  system:
                    null !=
                    (j =
                      null == f
                        ? void 0
                        : f.injectIntoSystemPrompt({ system: o, model: e }))
                      ? j
                      : o,
                  prompt: i,
                  messages: l,
                },
                tools: u,
              }),
              ee = this;
            eU({
              name: "ai.streamText",
              attributes: eF({
                telemetry: t,
                attributes: {
                  ...eM({ operationId: "ai.streamText", telemetry: t }),
                  ...X,
                  "ai.prompt": {
                    input: () =>
                      JSON.stringify({ system: o, prompt: i, messages: l }),
                  },
                  "ai.settings.maxSteps": g,
                },
              }),
              tracer: H,
              endWhenDone: !1,
              fn: async (n) => {
                async function i({
                  currentStep: n,
                  responseMessages: l,
                  usage: d,
                  stepType: _,
                  previousStepText: T,
                  hasLeadingWhitespace: I,
                  messageId: S,
                }) {
                  var E;
                  let j,
                    R,
                    C,
                    A = 0 === l.length ? Q.type : "messages",
                    N = [...Q.messages, ...l],
                    M = await ts({
                      prompt: { type: A, system: Q.system, messages: N },
                      modelSupportsImageUrls: e.supportsImageUrls,
                      modelSupportsUrl:
                        null == (E = e.supportsUrl) ? void 0 : E.bind(e),
                    }),
                    P = {
                      type: "regular",
                      ...tW({ tools: u, toolChoice: p, activeTools: m }),
                    },
                    {
                      result: {
                        stream: O,
                        warnings: $,
                        rawResponse: D,
                        request: q,
                      },
                      doStreamSpan: U,
                      startTimestampMs: F,
                    } = await W(() =>
                      eU({
                        name: "ai.streamText.doStream",
                        attributes: eF({
                          telemetry: t,
                          attributes: {
                            ...eM({
                              operationId: "ai.streamText.doStream",
                              telemetry: t,
                            }),
                            ...X,
                            "ai.prompt.format": { input: () => A },
                            "ai.prompt.messages": {
                              input: () => JSON.stringify(M),
                            },
                            "ai.prompt.tools": {
                              input: () => {
                                var e;
                                return null == (e = P.tools)
                                  ? void 0
                                  : e.map((e) => JSON.stringify(e));
                              },
                            },
                            "ai.prompt.toolChoice": {
                              input: () =>
                                null != P.toolChoice
                                  ? JSON.stringify(P.toolChoice)
                                  : void 0,
                            },
                            "gen_ai.system": e.provider,
                            "gen_ai.request.model": e.modelId,
                            "gen_ai.request.frequency_penalty":
                              a.frequencyPenalty,
                            "gen_ai.request.max_tokens": a.maxTokens,
                            "gen_ai.request.presence_penalty":
                              a.presencePenalty,
                            "gen_ai.request.stop_sequences": a.stopSequences,
                            "gen_ai.request.temperature": a.temperature,
                            "gen_ai.request.top_k": a.topK,
                            "gen_ai.request.top_p": a.topP,
                          },
                        }),
                        tracer: H,
                        endWhenDone: !1,
                        fn: async (t) => ({
                          startTimestampMs: b(),
                          doStreamSpan: t,
                          result: await e.doStream({
                            mode: P,
                            ...ti(a),
                            inputFormat: A,
                            responseFormat:
                              null == f
                                ? void 0
                                : f.responseFormat({ model: e }),
                            prompt: M,
                            providerMetadata: v,
                            abortSignal: s,
                            headers: r,
                          }),
                        }),
                      })
                    ),
                    L = (function ({
                      tools: e,
                      generatorStream: t,
                      toolCallStreaming: r,
                      tracer: a,
                      telemetry: n,
                      system: s,
                      messages: o,
                      abortSignal: i,
                      repairToolCall: l,
                    }) {
                      let u,
                        p = null,
                        c = new ReadableStream({
                          start(e) {
                            p = e;
                          },
                        }),
                        d = {},
                        m = new Set(),
                        h = !1;
                      function g() {
                        h &&
                          0 === m.size &&
                          (null != u && p.enqueue(u), p.close());
                      }
                      let f = new TransformStream({
                        async transform(t, c) {
                          let h = t.type;
                          switch (h) {
                            case "text-delta":
                            case "reasoning":
                            case "reasoning-signature":
                            case "redacted-reasoning":
                            case "source":
                            case "response-metadata":
                            case "error":
                              c.enqueue(t);
                              break;
                            case "file":
                              c.enqueue(
                                new eV({ data: t.data, mimeType: t.mimeType })
                              );
                              break;
                            case "tool-call-delta":
                              r &&
                                (d[t.toolCallId] ||
                                  (c.enqueue({
                                    type: "tool-call-streaming-start",
                                    toolCallId: t.toolCallId,
                                    toolName: t.toolName,
                                  }),
                                  (d[t.toolCallId] = !0)),
                                c.enqueue({
                                  type: "tool-call-delta",
                                  toolCallId: t.toolCallId,
                                  toolName: t.toolName,
                                  argsTextDelta: t.argsTextDelta,
                                }));
                              break;
                            case "tool-call":
                              try {
                                let r = await rt({
                                  toolCall: t,
                                  tools: e,
                                  repairToolCall: l,
                                  system: s,
                                  messages: o,
                                });
                                c.enqueue(r);
                                let u = e[r.toolName];
                                if (null != u.execute) {
                                  let e = (0, w.$C)();
                                  m.add(e),
                                    eU({
                                      name: "ai.toolCall",
                                      attributes: eF({
                                        telemetry: n,
                                        attributes: {
                                          ...eM({
                                            operationId: "ai.toolCall",
                                            telemetry: n,
                                          }),
                                          "ai.toolCall.name": r.toolName,
                                          "ai.toolCall.id": r.toolCallId,
                                          "ai.toolCall.args": {
                                            output: () =>
                                              JSON.stringify(r.args),
                                          },
                                        },
                                      }),
                                      tracer: a,
                                      fn: async (t) =>
                                        u
                                          .execute(r.args, {
                                            toolCallId: r.toolCallId,
                                            messages: o,
                                            abortSignal: i,
                                          })
                                          .then(
                                            (a) => {
                                              p.enqueue({
                                                ...r,
                                                type: "tool-result",
                                                result: a,
                                              }),
                                                m.delete(e),
                                                g();
                                              try {
                                                t.setAttributes(
                                                  eF({
                                                    telemetry: n,
                                                    attributes: {
                                                      "ai.toolCall.result": {
                                                        output: () =>
                                                          JSON.stringify(a),
                                                      },
                                                    },
                                                  })
                                                );
                                              } catch (e) {}
                                            },
                                            (t) => {
                                              p.enqueue({
                                                type: "error",
                                                error: new tK({
                                                  toolCallId: r.toolCallId,
                                                  toolName: r.toolName,
                                                  toolArgs: r.args,
                                                  cause: t,
                                                }),
                                              }),
                                                m.delete(e),
                                                g();
                                            }
                                          ),
                                    });
                                }
                              } catch (e) {
                                p.enqueue({ type: "error", error: e });
                              }
                              break;
                            case "finish":
                              u = {
                                type: "finish",
                                finishReason: t.finishReason,
                                logprobs: t.logprobs,
                                usage: tR(t.usage),
                                experimental_providerMetadata:
                                  t.providerMetadata,
                              };
                              break;
                            default:
                              throw Error(`Unhandled chunk type: ${h}`);
                          }
                        },
                        flush() {
                          (h = !0), g();
                        },
                      });
                      return new ReadableStream({
                        start: async (e) =>
                          Promise.all([
                            t.pipeThrough(f).pipeTo(
                              new WritableStream({
                                write(t) {
                                  e.enqueue(t);
                                },
                                close() {},
                              })
                            ),
                            c.pipeTo(
                              new WritableStream({
                                write(t) {
                                  e.enqueue(t);
                                },
                                close() {
                                  e.close();
                                },
                              })
                            ),
                          ]),
                      });
                    })({
                      tools: u,
                      generatorStream: O,
                      toolCallStreaming: c,
                      tracer: H,
                      telemetry: t,
                      system: o,
                      messages: N,
                      repairToolCall: h,
                      abortSignal: s,
                    }),
                    Z = null != q ? q : {},
                    J = [],
                    B = [],
                    V = [],
                    Y = [],
                    G = "unknown",
                    K = {
                      promptTokens: 0,
                      completionTokens: 0,
                      totalTokens: 0,
                    },
                    et = !0,
                    er = "",
                    ea = "continue" === _ ? T : "",
                    en = { id: k(), timestamp: x(), modelId: e.modelId },
                    es = "",
                    eo = !1,
                    ei = !0,
                    el = !1;
                  async function eu({ controller: e, chunk: t }) {
                    e.enqueue(t),
                      (er += t.textDelta),
                      (ea += t.textDelta),
                      (eo = !0),
                      (el = t.textDelta.trimEnd() !== t.textDelta);
                  }
                  ee.addStream(
                    L.pipeThrough(
                      new TransformStream({
                        async transform(e, t) {
                          var r, a, n;
                          if (et) {
                            let e = b() - F;
                            (et = !1),
                              U.addEvent("ai.stream.firstChunk", {
                                "ai.response.msToFirstChunk": e,
                              }),
                              U.setAttributes({
                                "ai.response.msToFirstChunk": e,
                              }),
                              t.enqueue({
                                type: "step-start",
                                messageId: S,
                                request: Z,
                                warnings: null != $ ? $ : [],
                              });
                          }
                          if (
                            "text-delta" === e.type &&
                            0 === e.textDelta.length
                          )
                            return;
                          let s = e.type;
                          switch (s) {
                            case "text-delta":
                              if (y) {
                                let r =
                                  ei && I
                                    ? e.textDelta.trimStart()
                                    : e.textDelta;
                                if (0 === r.length) break;
                                ei = !1;
                                let a = tX((es += r));
                                null != a &&
                                  ((es = a.suffix),
                                  await eu({
                                    controller: t,
                                    chunk: {
                                      type: "text-delta",
                                      textDelta: a.prefix + a.whitespace,
                                    },
                                  }));
                              } else await eu({ controller: t, chunk: e });
                              break;
                            case "reasoning":
                              t.enqueue(e),
                                null == C
                                  ? ((C = { type: "text", text: e.textDelta }),
                                    V.push(C))
                                  : (C.text += e.textDelta);
                              break;
                            case "reasoning-signature":
                              if ((t.enqueue(e), null == C))
                                throw new rg({
                                  chunk: e,
                                  message:
                                    "reasoning-signature without reasoning",
                                });
                              (C.signature = e.signature), (C = void 0);
                              break;
                            case "redacted-reasoning":
                              t.enqueue(e),
                                V.push({ type: "redacted", data: e.data });
                              break;
                            case "tool-call":
                              t.enqueue(e), J.push(e);
                              break;
                            case "tool-result":
                              t.enqueue(e), B.push(e);
                              break;
                            case "response-metadata":
                              en = {
                                id: null != (r = e.id) ? r : en.id,
                                timestamp:
                                  null != (a = e.timestamp) ? a : en.timestamp,
                                modelId:
                                  null != (n = e.modelId) ? n : en.modelId,
                              };
                              break;
                            case "finish": {
                              (K = e.usage),
                                (G = e.finishReason),
                                (j = e.experimental_providerMetadata),
                                (R = e.logprobs);
                              let t = b() - F;
                              U.addEvent("ai.stream.finish"),
                                U.setAttributes({
                                  "ai.response.msToFinish": t,
                                  "ai.response.avgCompletionTokensPerSecond":
                                    (1e3 * K.completionTokens) / t,
                                });
                              break;
                            }
                            case "file":
                              Y.push(e), t.enqueue(e);
                              break;
                            case "source":
                            case "tool-call-streaming-start":
                            case "tool-call-delta":
                              t.enqueue(e);
                              break;
                            case "error":
                              t.enqueue(e), (G = "error");
                              break;
                            default:
                              throw Error(`Unknown chunk type: ${s}`);
                          }
                        },
                        async flush(e) {
                          let r = J.length > 0 ? JSON.stringify(J) : void 0,
                            a = "done";
                          n + 1 < g &&
                            (y && "length" === G && 0 === J.length
                              ? (a = "continue")
                              : J.length > 0 &&
                                B.length === J.length &&
                                (a = "tool-result")),
                            y &&
                              es.length > 0 &&
                              ("continue" !== a || ("continue" === _ && !eo)) &&
                              (await eu({
                                controller: e,
                                chunk: { type: "text-delta", textDelta: es },
                              }),
                              (es = ""));
                          try {
                            U.setAttributes(
                              eF({
                                telemetry: t,
                                attributes: {
                                  "ai.response.finishReason": G,
                                  "ai.response.text": { output: () => er },
                                  "ai.response.toolCalls": { output: () => r },
                                  "ai.response.id": en.id,
                                  "ai.response.model": en.modelId,
                                  "ai.response.timestamp":
                                    en.timestamp.toISOString(),
                                  "ai.usage.promptTokens": K.promptTokens,
                                  "ai.usage.completionTokens":
                                    K.completionTokens,
                                  "gen_ai.response.finish_reasons": [G],
                                  "gen_ai.response.id": en.id,
                                  "gen_ai.response.model": en.modelId,
                                  "gen_ai.usage.input_tokens": K.promptTokens,
                                  "gen_ai.usage.output_tokens":
                                    K.completionTokens,
                                },
                              })
                            );
                          } catch (e) {
                          } finally {
                            U.end();
                          }
                          e.enqueue({
                            type: "step-finish",
                            finishReason: G,
                            usage: K,
                            providerMetadata: j,
                            experimental_providerMetadata: j,
                            logprobs: R,
                            request: Z,
                            response: {
                              ...en,
                              headers: null == D ? void 0 : D.headers,
                            },
                            warnings: $,
                            isContinued: "continue" === a,
                            messageId: S,
                          });
                          let s = tC(d, K);
                          if ("done" === a)
                            e.enqueue({
                              type: "finish",
                              finishReason: G,
                              usage: s,
                              providerMetadata: j,
                              experimental_providerMetadata: j,
                              logprobs: R,
                              response: {
                                ...en,
                                headers: null == D ? void 0 : D.headers,
                              },
                            }),
                              ee.closeStream();
                          else {
                            if ("continue" === _) {
                              let e = l[l.length - 1];
                              "string" == typeof e.content
                                ? (e.content += er)
                                : e.content.push({ text: er, type: "text" });
                            } else
                              l.push(
                                ...rn({
                                  text: er,
                                  files: Y,
                                  reasoning: V,
                                  tools: null != u ? u : {},
                                  toolCalls: J,
                                  toolResults: B,
                                  messageId: S,
                                  generateMessageId: z,
                                })
                              );
                            await i({
                              currentStep: n + 1,
                              responseMessages: l,
                              usage: s,
                              stepType: a,
                              previousStepText: ea,
                              hasLeadingWhitespace: el,
                              messageId: "continue" === a ? S : z(),
                            });
                          }
                        },
                      })
                    )
                  );
                }
                (R = n),
                  await i({
                    currentStep: 0,
                    responseMessages: [],
                    usage: {
                      promptTokens: 0,
                      completionTokens: 0,
                      totalTokens: 0,
                    },
                    previousStepText: "",
                    stepType: "initial",
                    hasLeadingWhitespace: !1,
                    messageId: z(),
                  });
              },
            }).catch((e) => {
              ee.addStream(
                new ReadableStream({
                  start(t) {
                    t.enqueue({ type: "error", error: e }), t.close();
                  },
                })
              ),
                ee.closeStream();
            });
          }
          get warnings() {
            return this.warningsPromise.value;
          }
          get usage() {
            return this.usagePromise.value;
          }
          get finishReason() {
            return this.finishReasonPromise.value;
          }
          get experimental_providerMetadata() {
            return this.providerMetadataPromise.value;
          }
          get providerMetadata() {
            return this.providerMetadataPromise.value;
          }
          get text() {
            return this.textPromise.value;
          }
          get reasoning() {
            return this.reasoningPromise.value;
          }
          get reasoningDetails() {
            return this.reasoningDetailsPromise.value;
          }
          get sources() {
            return this.sourcesPromise.value;
          }
          get files() {
            return this.filesPromise.value;
          }
          get toolCalls() {
            return this.toolCallsPromise.value;
          }
          get toolResults() {
            return this.toolResultsPromise.value;
          }
          get request() {
            return this.requestPromise.value;
          }
          get response() {
            return this.responsePromise.value;
          }
          get steps() {
            return this.stepsPromise.value;
          }
          teeStream() {
            let [e, t] = this.baseStream.tee();
            return (this.baseStream = t), e;
          }
          get textStream() {
            return tN(
              this.teeStream().pipeThrough(
                new TransformStream({
                  transform({ part: e }, t) {
                    "text-delta" === e.type && t.enqueue(e.textDelta);
                  },
                })
              )
            );
          }
          get fullStream() {
            return tN(
              this.teeStream().pipeThrough(
                new TransformStream({
                  transform({ part: e }, t) {
                    t.enqueue(e);
                  },
                })
              )
            );
          }
          async consumeStream(e) {
            var t;
            try {
              await rw({
                stream: this.fullStream,
                onError: null == e ? void 0 : e.onError,
              });
            } catch (r) {
              null == (t = null == e ? void 0 : e.onError) || t.call(e, r);
            }
          }
          get experimental_partialOutputStream() {
            if (null == this.output) throw new tB();
            return tN(
              this.teeStream().pipeThrough(
                new TransformStream({
                  transform({ partialOutput: e }, t) {
                    null != e && t.enqueue(e);
                  },
                })
              )
            );
          }
          toDataStreamInternal({
            getErrorMessage: e = () => "An error occurred.",
            sendUsage: t = !0,
            sendReasoning: r = !1,
            sendSources: a = !1,
            experimental_sendFinish: n = !0,
          }) {
            return this.fullStream.pipeThrough(
              new TransformStream({
                transform: async (s, o) => {
                  let i = s.type;
                  switch (i) {
                    case "text-delta":
                      o.enqueue(em("text", s.textDelta));
                      break;
                    case "reasoning":
                      r && o.enqueue(em("reasoning", s.textDelta));
                      break;
                    case "redacted-reasoning":
                      r &&
                        o.enqueue(em("redacted_reasoning", { data: s.data }));
                      break;
                    case "reasoning-signature":
                      r &&
                        o.enqueue(
                          em("reasoning_signature", { signature: s.signature })
                        );
                      break;
                    case "file":
                      o.enqueue(
                        em("file", { mimeType: s.mimeType, data: s.base64 })
                      );
                      break;
                    case "source":
                      a && o.enqueue(em("source", s.source));
                      break;
                    case "tool-call-streaming-start":
                      o.enqueue(
                        em("tool_call_streaming_start", {
                          toolCallId: s.toolCallId,
                          toolName: s.toolName,
                        })
                      );
                      break;
                    case "tool-call-delta":
                      o.enqueue(
                        em("tool_call_delta", {
                          toolCallId: s.toolCallId,
                          argsTextDelta: s.argsTextDelta,
                        })
                      );
                      break;
                    case "tool-call":
                      o.enqueue(
                        em("tool_call", {
                          toolCallId: s.toolCallId,
                          toolName: s.toolName,
                          args: s.args,
                        })
                      );
                      break;
                    case "tool-result":
                      o.enqueue(
                        em("tool_result", {
                          toolCallId: s.toolCallId,
                          result: s.result,
                        })
                      );
                      break;
                    case "error":
                      o.enqueue(em("error", e(s.error)));
                      break;
                    case "step-start":
                      o.enqueue(em("start_step", { messageId: s.messageId }));
                      break;
                    case "step-finish":
                      o.enqueue(
                        em("finish_step", {
                          finishReason: s.finishReason,
                          usage: t
                            ? {
                                promptTokens: s.usage.promptTokens,
                                completionTokens: s.usage.completionTokens,
                              }
                            : void 0,
                          isContinued: s.isContinued,
                        })
                      );
                      break;
                    case "finish":
                      n &&
                        o.enqueue(
                          em("finish_message", {
                            finishReason: s.finishReason,
                            usage: t
                              ? {
                                  promptTokens: s.usage.promptTokens,
                                  completionTokens: s.usage.completionTokens,
                                }
                              : void 0,
                          })
                        );
                      break;
                    default:
                      throw Error(`Unknown chunk type: ${i}`);
                  }
                },
              })
            );
          }
          pipeDataStreamToResponse(
            e,
            {
              status: t,
              statusText: r,
              headers: a,
              data: n,
              getErrorMessage: s,
              sendUsage: o,
              sendReasoning: i,
              sendSources: l,
              experimental_sendFinish: u,
            } = {}
          ) {
            ex({
              response: e,
              status: t,
              statusText: r,
              headers: ew(a, {
                contentType: "text/plain; charset=utf-8",
                dataStreamVersion: "v1",
              }),
              stream: this.toDataStream({
                data: n,
                getErrorMessage: s,
                sendUsage: o,
                sendReasoning: i,
                sendSources: l,
                experimental_sendFinish: u,
              }),
            });
          }
          pipeTextStreamToResponse(e, t) {
            ex({
              response: e,
              status: null == t ? void 0 : t.status,
              statusText: null == t ? void 0 : t.statusText,
              headers: ew(null == t ? void 0 : t.headers, {
                contentType: "text/plain; charset=utf-8",
              }),
              stream: this.textStream.pipeThrough(new TextEncoderStream()),
            });
          }
          toDataStream(e) {
            let t = this.toDataStreamInternal({
              getErrorMessage: null == e ? void 0 : e.getErrorMessage,
              sendUsage: null == e ? void 0 : e.sendUsage,
              sendReasoning: null == e ? void 0 : e.sendReasoning,
              sendSources: null == e ? void 0 : e.sendSources,
              experimental_sendFinish:
                null == e ? void 0 : e.experimental_sendFinish,
            }).pipeThrough(new TextEncoderStream());
            return (null == e ? void 0 : e.data)
              ? rx(null == e ? void 0 : e.data.stream, t)
              : t;
          }
          mergeIntoDataStream(e, t) {
            e.merge(
              this.toDataStreamInternal({
                getErrorMessage: e.onError,
                sendUsage: null == t ? void 0 : t.sendUsage,
                sendReasoning: null == t ? void 0 : t.sendReasoning,
                sendSources: null == t ? void 0 : t.sendSources,
                experimental_sendFinish:
                  null == t ? void 0 : t.experimental_sendFinish,
              })
            );
          }
          toDataStreamResponse({
            headers: e,
            status: t,
            statusText: r,
            data: a,
            getErrorMessage: n,
            sendUsage: s,
            sendReasoning: o,
            sendSources: i,
            experimental_sendFinish: l,
          } = {}) {
            return new Response(
              this.toDataStream({
                data: a,
                getErrorMessage: n,
                sendUsage: s,
                sendReasoning: o,
                sendSources: i,
                experimental_sendFinish: l,
              }),
              {
                status: t,
                statusText: r,
                headers: e_(e, {
                  contentType: "text/plain; charset=utf-8",
                  dataStreamVersion: "v1",
                }),
              }
            );
          }
          toTextStreamResponse(e) {
            var t;
            return new Response(
              this.textStream.pipeThrough(new TextEncoderStream()),
              {
                status: null != (t = null == e ? void 0 : e.status) ? t : 200,
                headers: e_(null == e ? void 0 : e.headers, {
                  contentType: "text/plain; charset=utf-8",
                }),
              }
            );
          }
        },
        rS = (_.bD, _.bD, "AI_NoSuchProviderError"),
        rE = `vercel.ai.error.${rS}`,
        rj = Symbol.for(rE),
        rR = class extends _.eM {
          constructor({
            modelId: e,
            modelType: t,
            providerId: r,
            availableProviders: a,
            message:
              n = `No such provider: ${r} (available providers: ${a.join()})`,
          }) {
            super({ errorName: rS, modelId: e, modelType: t, message: n }),
              (this[b] = !0),
              (this.providerId = r),
              (this.availableProviders = a);
          }
          static isInstance(e) {
            return _.bD.hasMarker(e, rE);
          }
        };
      b = rj;
      var rC = "2024-11-05",
        rA = [rC, "2024-10-07"],
        rN = z.z
          .object({ name: z.z.string(), version: z.z.string() })
          .passthrough(),
        rM = z.z
          .object({ _meta: z.z.optional(z.z.object({}).passthrough()) })
          .passthrough(),
        rP = z.z.object({ method: z.z.string(), params: z.z.optional(rM) }),
        rO = z.z
          .object({
            experimental: z.z.optional(z.z.object({}).passthrough()),
            logging: z.z.optional(z.z.object({}).passthrough()),
            prompts: z.z.optional(
              z.z
                .object({ listChanged: z.z.optional(z.z.boolean()) })
                .passthrough()
            ),
            resources: z.z.optional(
              z.z
                .object({
                  subscribe: z.z.optional(z.z.boolean()),
                  listChanged: z.z.optional(z.z.boolean()),
                })
                .passthrough()
            ),
            tools: z.z.optional(
              z.z
                .object({ listChanged: z.z.optional(z.z.boolean()) })
                .passthrough()
            ),
          })
          .passthrough(),
        r$ = rM.extend({
          protocolVersion: z.z.string(),
          capabilities: rO,
          serverInfo: rN,
          instructions: z.z.optional(z.z.string()),
        }),
        rD = rM.extend({ nextCursor: z.z.optional(z.z.string()) }),
        rq = z.z
          .object({
            name: z.z.string(),
            description: z.z.optional(z.z.string()),
            inputSchema: z.z
              .object({
                type: z.z.literal("object"),
                properties: z.z.optional(z.z.object({}).passthrough()),
              })
              .passthrough(),
          })
          .passthrough(),
        rU = rD.extend({ tools: z.z.array(rq) }),
        rF = z.z
          .object({ type: z.z.literal("text"), text: z.z.string() })
          .passthrough(),
        rL = z.z
          .object({
            type: z.z.literal("image"),
            data: z.z.string().base64(),
            mimeType: z.z.string(),
          })
          .passthrough(),
        rZ = z.z
          .object({ uri: z.z.string(), mimeType: z.z.optional(z.z.string()) })
          .passthrough(),
        rJ = rZ.extend({ text: z.z.string() }),
        rB = rZ.extend({ blob: z.z.string().base64() }),
        rV = z.z
          .object({
            type: z.z.literal("resource"),
            resource: z.z.union([rJ, rB]),
          })
          .passthrough(),
        rY = rM
          .extend({
            content: z.z.array(z.z.union([rF, rL, rV])),
            isError: z.z.boolean().default(!1).optional(),
          })
          .or(rM.extend({ toolResult: z.z.unknown() })),
        rG = z.z
          .object({
            jsonrpc: z.z.literal("2.0"),
            id: z.z.union([z.z.string(), z.z.number().int()]),
          })
          .merge(rP)
          .strict(),
        rK = z.z
          .object({
            jsonrpc: z.z.literal("2.0"),
            id: z.z.union([z.z.string(), z.z.number().int()]),
            result: rM,
          })
          .strict(),
        rW = z.z
          .object({
            jsonrpc: z.z.literal("2.0"),
            id: z.z.union([z.z.string(), z.z.number().int()]),
            error: z.z.object({
              code: z.z.number().int(),
              message: z.z.string(),
              data: z.z.optional(z.z.unknown()),
            }),
          })
          .strict(),
        rH = z.z
          .object({ jsonrpc: z.z.literal("2.0") })
          .merge(z.z.object({ method: z.z.string(), params: z.z.optional(rM) }))
          .strict(),
        rX = z.z.union([rG, rH, rK, rW]),
        rQ = class {
          constructor({ url: e, headers: t }) {
            (this.connected = !1), (this.url = new URL(e)), (this.headers = t);
          }
          async start() {
            return new Promise((e, t) => {
              if (this.connected) return e();
              (this.abortController = new AbortController()),
                (async () => {
                  var r, a, n;
                  try {
                    let n = new Headers(this.headers);
                    n.set("Accept", "text/event-stream");
                    let s = await fetch(this.url.href, {
                      headers: n,
                      signal:
                        null == (r = this.abortController) ? void 0 : r.signal,
                    });
                    if (!s.ok || !s.body) {
                      let e = new rv({
                        message: `MCP SSE Transport Error: ${s.status} ${s.statusText}`,
                      });
                      return (
                        null == (a = this.onerror) || a.call(this, e), t(e)
                      );
                    }
                    let o = s.body
                        .pipeThrough(new TextDecoderStream())
                        .pipeThrough(createEventSourceParserStream())
                        .getReader(),
                      i = async () => {
                        var r, a, n;
                        try {
                          for (;;) {
                            let { done: t, value: n } = await o.read();
                            if (t) {
                              if (this.connected)
                                throw (
                                  ((this.connected = !1),
                                  new rv({
                                    message:
                                      "MCP SSE Transport Error: Connection closed unexpectedly",
                                  }))
                                );
                              return;
                            }
                            let { event: s, data: i } = n;
                            if ("endpoint" === s) {
                              if (
                                ((this.endpoint = new URL(i, this.url)),
                                this.endpoint.origin !== this.url.origin)
                              )
                                throw new rv({
                                  message: `MCP SSE Transport Error: Endpoint origin does not match connection origin: ${this.endpoint.origin}`,
                                });
                              (this.connected = !0), e();
                            } else if ("message" === s)
                              try {
                                let e = rX.parse(JSON.parse(i));
                                null == (r = this.onmessage) || r.call(this, e);
                              } catch (t) {
                                let e = new rv({
                                  message:
                                    "MCP SSE Transport Error: Failed to parse message",
                                  cause: t,
                                });
                                null == (a = this.onerror) || a.call(this, e);
                              }
                          }
                        } catch (e) {
                          if (e instanceof Error && "AbortError" === e.name)
                            return;
                          null == (n = this.onerror) || n.call(this, e), t(e);
                        }
                      };
                    (this.sseConnection = { close: () => o.cancel() }), i();
                  } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return;
                    null == (n = this.onerror) || n.call(this, e), t(e);
                  }
                })();
            });
          }
          async close() {
            var e, t, r;
            (this.connected = !1),
              null == (e = this.sseConnection) || e.close(),
              null == (t = this.abortController) || t.abort(),
              null == (r = this.onclose) || r.call(this);
          }
          async send(e) {
            var t, r, a;
            if (!this.endpoint || !this.connected)
              throw new rv({
                message: "MCP SSE Transport Error: Not connected",
              });
            try {
              let a = new Headers(this.headers);
              a.set("Content-Type", "application/json");
              let n = {
                  method: "POST",
                  headers: a,
                  body: JSON.stringify(e),
                  signal:
                    null == (t = this.abortController) ? void 0 : t.signal,
                },
                s = await fetch(this.endpoint, n);
              if (!s.ok) {
                let e = await s.text().catch(() => null),
                  t = new rv({
                    message: `MCP SSE Transport Error: POSTing to endpoint (HTTP ${s.status}): ${e}`,
                  });
                null == (r = this.onerror) || r.call(this, t);
                return;
              }
            } catch (e) {
              null == (a = this.onerror) || a.call(this, e);
              return;
            }
          }
        };
      function r0(e = {}) {
        let t = new TextEncoder(),
          r = "";
        return new TransformStream({
          async start() {
            e.onStart && (await e.onStart());
          },
          async transform(a, n) {
            n.enqueue(t.encode(a)),
              (r += a),
              e.onToken && (await e.onToken(a)),
              e.onText && "string" == typeof a && (await e.onText(a));
          },
          async flush() {
            e.onCompletion && (await e.onCompletion(r)),
              e.onFinal && (await e.onFinal(r));
          },
        });
      }
      function r1(e, t) {
        return e
          .pipeThrough(
            new TransformStream({
              transform: async (e, t) => {
                var r;
                if ("string" == typeof e) return void t.enqueue(e);
                if ("event" in e) {
                  "on_chat_model_stream" === e.event &&
                    r9(null == (r = e.data) ? void 0 : r.chunk, t);
                  return;
                }
                r9(e, t);
              },
            })
          )
          .pipeThrough(r0(t))
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(
            new TransformStream({
              transform: async (e, t) => {
                t.enqueue(em("text", e));
              },
            })
          );
      }
      function r4(e, t) {
        return r1(e, t).pipeThrough(new TextEncoderStream());
      }
      function r2(e, t) {
        var r;
        let a = r1(e, null == t ? void 0 : t.callbacks).pipeThrough(
            new TextEncoderStream()
          ),
          n = null == t ? void 0 : t.data,
          s = null == t ? void 0 : t.init;
        return new Response(n ? rx(n.stream, a) : a, {
          status: null != (r = null == s ? void 0 : s.status) ? r : 200,
          statusText: null == s ? void 0 : s.statusText,
          headers: e_(null == s ? void 0 : s.headers, {
            contentType: "text/plain; charset=utf-8",
            dataStreamVersion: "v1",
          }),
        });
      }
      function r6(e, t) {
        t.dataStream.merge(r1(e, t.callbacks));
      }
      function r9(e, t) {
        if ("string" == typeof e.content) t.enqueue(e.content);
        else for (let r of e.content) "text" === r.type && t.enqueue(r.text);
      }
      function r3(e, t) {
        let r,
          a = ((r = !0), (e) => (r && (e = e.trimStart()) && (r = !1), e));
        return (0, w.NR)(e[Symbol.asyncIterator]())
          .pipeThrough(
            new TransformStream({
              async transform(e, t) {
                t.enqueue(a(e.delta));
              },
            })
          )
          .pipeThrough(r0(t))
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(
            new TransformStream({
              transform: async (e, t) => {
                t.enqueue(em("text", e));
              },
            })
          );
      }
      function r8(e, t) {
        return r3(e, t).pipeThrough(new TextEncoderStream());
      }
      function r7(e, t = {}) {
        var r;
        let { init: a, data: n, callbacks: s } = t,
          o = r3(e, s).pipeThrough(new TextEncoderStream());
        return new Response(n ? rx(n.stream, o) : o, {
          status: null != (r = null == a ? void 0 : a.status) ? r : 200,
          statusText: null == a ? void 0 : a.statusText,
          headers: e_(null == a ? void 0 : a.headers, {
            contentType: "text/plain; charset=utf-8",
            dataStreamVersion: "v1",
          }),
        });
      }
      function r5(e, t) {
        t.dataStream.merge(r3(e, t.callbacks));
      }
      eb(
        {},
        {
          mergeIntoDataStream: () => r6,
          toDataStream: () => r4,
          toDataStreamResponse: () => r2,
        }
      ),
        eb(
          {},
          {
            mergeIntoDataStream: () => r5,
            toDataStream: () => r8,
            toDataStreamResponse: () => r7,
          }
        );
    },
    81362: (e, t, r) => {
      r.d(t, {
        Ch: () => ea,
        Di: () => C,
        Kq: () => Y,
        M3: () => P,
        Tt: () => I,
        b8: () => ed,
        bD: () => v,
        eM: () => Q,
        hL: () => x,
        iM: () => el,
        u1: () => S,
        u6: () => Z,
        xn: () => q,
      });
      var a,
        n,
        s,
        o,
        i,
        l,
        u,
        p,
        c,
        d,
        m,
        h,
        g = "vercel.ai.error",
        f = Symbol.for(g),
        y = class e extends Error {
          constructor({ name: e, message: t, cause: r }) {
            super(t), (this[a] = !0), (this.name = e), (this.cause = r);
          }
          static isInstance(t) {
            return e.hasMarker(t, g);
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
      var v = y,
        b = "AI_APICallError",
        _ = `vercel.ai.error.${b}`,
        w = Symbol.for(_),
        x = class extends v {
          constructor({
            message: e,
            url: t,
            requestBodyValues: r,
            statusCode: a,
            responseHeaders: s,
            responseBody: o,
            cause: i,
            isRetryable: l = null != a &&
              (408 === a || 409 === a || 429 === a || a >= 500),
            data: u,
          }) {
            super({ name: b, message: e, cause: i }),
              (this[n] = !0),
              (this.url = t),
              (this.requestBodyValues = r),
              (this.statusCode = a),
              (this.responseHeaders = s),
              (this.responseBody = o),
              (this.isRetryable = l),
              (this.data = u);
          }
          static isInstance(e) {
            return v.hasMarker(e, _);
          }
        };
      n = w;
      var k = "AI_EmptyResponseBodyError",
        z = `vercel.ai.error.${k}`,
        T = Symbol.for(z),
        I = class extends v {
          constructor({ message: e = "Empty response body" } = {}) {
            super({ name: k, message: e }), (this[s] = !0);
          }
          static isInstance(e) {
            return v.hasMarker(e, z);
          }
        };
      function S(e) {
        return null == e
          ? "unknown error"
          : "string" == typeof e
            ? e
            : e instanceof Error
              ? e.message
              : JSON.stringify(e);
      }
      s = T;
      var E = "AI_InvalidArgumentError",
        j = `vercel.ai.error.${E}`,
        R = Symbol.for(j),
        C = class extends v {
          constructor({ message: e, cause: t, argument: r }) {
            super({ name: E, message: e, cause: t }),
              (this[o] = !0),
              (this.argument = r);
          }
          static isInstance(e) {
            return v.hasMarker(e, j);
          }
        };
      o = R;
      var A = "AI_InvalidPromptError",
        N = `vercel.ai.error.${A}`,
        M = Symbol.for(N),
        P = class extends v {
          constructor({ prompt: e, message: t, cause: r }) {
            super({ name: A, message: `Invalid prompt: ${t}`, cause: r }),
              (this[i] = !0),
              (this.prompt = e);
          }
          static isInstance(e) {
            return v.hasMarker(e, N);
          }
        };
      i = M;
      var O = "AI_InvalidResponseDataError",
        $ = `vercel.ai.error.${O}`,
        D = Symbol.for($),
        q = class extends v {
          constructor({
            data: e,
            message: t = `Invalid response data: ${JSON.stringify(e)}.`,
          }) {
            super({ name: O, message: t }), (this[l] = !0), (this.data = e);
          }
          static isInstance(e) {
            return v.hasMarker(e, $);
          }
        };
      l = D;
      var U = "AI_JSONParseError",
        F = `vercel.ai.error.${U}`,
        L = Symbol.for(F),
        Z = class extends v {
          constructor({ text: e, cause: t }) {
            super({
              name: U,
              message: `JSON parsing failed: Text: ${e}.
Error message: ${S(t)}`,
              cause: t,
            }),
              (this[u] = !0),
              (this.text = e);
          }
          static isInstance(e) {
            return v.hasMarker(e, F);
          }
        };
      u = L;
      var J = "AI_LoadAPIKeyError",
        B = `vercel.ai.error.${J}`,
        V = Symbol.for(B),
        Y = class extends v {
          constructor({ message: e }) {
            super({ name: J, message: e }), (this[p] = !0);
          }
          static isInstance(e) {
            return v.hasMarker(e, B);
          }
        };
      p = V;
      var G = Symbol.for("vercel.ai.error.AI_LoadSettingError"),
        K = Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"),
        W = "AI_NoSuchModelError",
        H = `vercel.ai.error.${W}`,
        X = Symbol.for(H),
        Q = class extends v {
          constructor({
            errorName: e = W,
            modelId: t,
            modelType: r,
            message: a = `No such ${r}: ${t}`,
          }) {
            super({ name: e, message: a }),
              (this[c] = !0),
              (this.modelId = t),
              (this.modelType = r);
          }
          static isInstance(e) {
            return v.hasMarker(e, H);
          }
        };
      c = X;
      var ee = "AI_TooManyEmbeddingValuesForCallError",
        et = `vercel.ai.error.${ee}`,
        er = Symbol.for(et),
        ea = class extends v {
          constructor(e) {
            super({
              name: ee,
              message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`,
            }),
              (this[d] = !0),
              (this.provider = e.provider),
              (this.modelId = e.modelId),
              (this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall),
              (this.values = e.values);
          }
          static isInstance(e) {
            return v.hasMarker(e, et);
          }
        };
      d = er;
      var en = "AI_TypeValidationError",
        es = `vercel.ai.error.${en}`,
        eo = Symbol.for(es),
        ei = class e extends v {
          constructor({ value: e, cause: t }) {
            super({
              name: en,
              message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${S(t)}`,
              cause: t,
            }),
              (this[m] = !0),
              (this.value = e);
          }
          static isInstance(e) {
            return v.hasMarker(e, es);
          }
          static wrap({ value: t, cause: r }) {
            return e.isInstance(r) && r.value === t
              ? r
              : new e({ value: t, cause: r });
          }
        };
      m = eo;
      var el = ei,
        eu = "AI_UnsupportedFunctionalityError",
        ep = `vercel.ai.error.${eu}`,
        ec = Symbol.for(ep),
        ed = class extends v {
          constructor({
            functionality: e,
            message: t = `'${e}' functionality not supported.`,
          }) {
            super({ name: eu, message: t }),
              (this[h] = !0),
              (this.functionality = e);
          }
          static isInstance(e) {
            return v.hasMarker(e, ep);
          }
        };
      function em(e) {
        return (
          null === e ||
          "string" == typeof e ||
          "number" == typeof e ||
          "boolean" == typeof e ||
          (Array.isArray(e)
            ? e.every(em)
            : "object" == typeof e &&
              Object.entries(e).every(
                ([e, t]) => "string" == typeof e && em(t)
              ))
        );
      }
      h = ec;
    },
  });
