import { createRequire as topLevelCreateRequire } from "module";
const require = topLevelCreateRequire(import.meta.url);
import bannerUrl from "url";
const __dirname = bannerUrl.fileURLToPath(new URL(".", import.meta.url));
globalThis.openNextDebug = false;
globalThis.openNextVersion = "3.6.5";
var n5 = Object.create;
var Sp = Object.defineProperty;
var s5 = Object.getOwnPropertyDescriptor;
var i5 = Object.getOwnPropertyNames;
var a5 = Object.getPrototypeOf,
  c5 = Object.prototype.hasOwnProperty;
var s = (e, t) => () => (e && (t = e((e = 0))), t);
var nt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Me = (e, t) => {
    for (var r in t) Sp(e, r, { get: t[r], enumerable: !0 });
  },
  m5 = (e, t, r, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of i5(t))
        !c5.call(e, n) &&
          n !== r &&
          Sp(e, n, {
            get: () => t[n],
            enumerable: !(o = s5(t, n)) || o.enumerable,
          });
    return e;
  };
var TS = (e, t, r) => (
  (r = e != null ? n5(a5(e)) : {}),
  m5(
    t || !e || !e.__esModule
      ? Sp(r, "default", { value: e, enumerable: !0 })
      : r,
    e
  )
);
function ns(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return !1;
  }
}
var AS = s(() => {});
function No(...e) {
  globalThis.openNextDebug && console.log(...e);
}
function d5(...e) {
  console.warn(...e);
}
function Cp(...e) {
  if (e.some((t) => p5(t))) return No(...e);
  if (e.some((t) => ns(t))) {
    let t = e.find((r) => ns(r));
    return t.logLevel < u5()
      ? void 0
      : t.logLevel === 0
        ? console.log(...e.map((r) => (ns(r) ? `${r.name}: ${r.message}` : r)))
        : t.logLevel === 1
          ? d5(...e.map((r) => (ns(r) ? `${r.name}: ${r.message}` : r)))
          : console.error(...e);
  }
  console.error(...e);
}
function u5() {
  switch ((process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1").toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var f5,
  p5,
  bp = s(() => {
    AS();
    (f5 = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey",
      },
    ]),
      (p5 = (e) =>
        f5.some(
          (t) =>
            t.clientName === e?.clientName &&
            t.commandName === e?.commandName &&
            (t.errorName === e?.error?.name || t.errorName === e?.error?.Code)
        ));
  });
var _S = {};
Me(_S, { default: () => h5 });
var l5,
  h5,
  RS = s(() => {
    (l5 = {
      convertFrom(e) {
        return Promise.resolve({ type: "dummy", original: e });
      },
      convertTo(e) {
        return Promise.resolve({ type: "dummy", original: e });
      },
      name: "dummy",
    }),
      (h5 = l5);
  });
var IS = {};
Me(IS, { default: () => x5, formatWarmerResponse: () => vS });
import { Writable as g5 } from "node:stream";
function vS(e) {
  return new Promise((t) => {
    setTimeout(() => {
      t({ serverId, type: "warmer" });
    }, e.delay);
  });
}
var y5,
  x5,
  PS = s(() => {
    (y5 = async (e, t) => async (r) => {
      if ("type" in r) return vS(r);
      let o = await t.convertFrom(r),
        i = await e(o, {
          streamCreator: {
            writeHeaders: () =>
              new g5({
                write: (a, c, m) => {
                  m();
                },
              }),
          },
        });
      return t.convertTo(i, r);
    }),
      (x5 = { wrapper: y5, name: "aws-lambda", supportStreaming: !1 });
  });
var lc,
  hc,
  NS = s(() => {
    (lc = (e) => ({
      setHttpHandler(t) {
        e.httpHandler = t;
      },
      httpHandler() {
        return e.httpHandler;
      },
      updateHttpClientConfig(t, r) {
        e.httpHandler?.updateHttpClientConfig(t, r);
      },
      httpHandlerConfigs() {
        return e.httpHandler.httpHandlerConfigs();
      },
    })),
      (hc = (e) => ({ httpHandler: e.httpHandler() }));
  });
var OS = s(() => {
  NS();
});
var DS = s(() => {});
var FS,
  MS = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(FS || (FS = {}));
  });
var kS,
  LS = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(kS || (kS = {}));
  });
var $S = s(() => {});
var US = s(() => {});
var BS = s(() => {});
var HS = s(() => {});
var zS = s(() => {
  MS();
  LS();
  $S();
  US();
  BS();
  HS();
});
var VS = s(() => {});
var jS = s(() => {});
var GS = s(() => {});
var WS = s(() => {});
var qS = s(() => {});
var KS = s(() => {});
var YS = s(() => {});
var XS = s(() => {
  qS();
  KS();
  YS();
});
var JS = s(() => {});
var QS = s(() => {});
var ZS,
  eC = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(ZS || (ZS = {}));
  });
var tC = s(() => {});
var rC = s(() => {});
var oC = s(() => {});
var nC = s(() => {});
var sC = s(() => {});
var iC = s(() => {
  tC();
  rC();
  oC();
  nC();
  sC();
});
var aC = s(() => {});
var Oo,
  wp = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(Oo || (Oo = {}));
  });
var cC = s(() => {
  wp();
});
var mC = s(() => {});
var dC = s(() => {
  cC();
  mC();
  wp();
});
var fC = s(() => {});
var Tp,
  pC = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(Tp || (Tp = {}));
  });
var uC = s(() => {});
var lC = s(() => {});
var hC = s(() => {});
var gC = s(() => {});
var yC = s(() => {});
var xC = s(() => {
  lC();
  hC();
  gC();
  yC();
});
var EC = s(() => {});
var SC,
  CC = s(() => {
    SC = "__smithy_context";
  });
var bC = s(() => {});
var Zt,
  wC = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(Zt || (Zt = {}));
  });
var TC = s(() => {});
var AC = s(() => {});
var _C = s(() => {});
var RC = s(() => {});
var vC = s(() => {});
var IC = s(() => {});
var PC = s(() => {});
var NC = s(() => {});
var OC = s(() => {});
var DC = s(() => {});
var FC = s(() => {});
var MC,
  kC = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(MC || (MC = {}));
  });
var LC = s(() => {});
var $C = s(() => {});
var UC = s(() => {});
var BC = s(() => {});
var HC = s(() => {});
var zC = s(() => {});
var VC = s(() => {});
var Kr = s(() => {
  DS();
  zS();
  VS();
  jS();
  GS();
  WS();
  XS();
  JS();
  QS();
  eC();
  iC();
  aC();
  dC();
  fC();
  pC();
  uC();
  xC();
  EC();
  CC();
  bC();
  wC();
  TC();
  AC();
  _C();
  RC();
  vC();
  IC();
  PC();
  NC();
  OC();
  DC();
  FC();
  kC();
  LC();
  $C();
  UC();
  BC();
  HC();
  zC();
  VC();
});
var jC = s(() => {
  Kr();
});
var GC = s(() => {});
var WC = s(() => {});
function E5(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var je,
  qC = s(() => {
    je = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = E5(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var Nt,
  KC = s(() => {
    Nt = class {
      constructor(t) {
        (this.statusCode = t.statusCode),
          (this.reason = t.reason),
          (this.headers = t.headers || {}),
          (this.body = t.body);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return typeof r.statusCode == "number" && typeof r.headers == "object";
      }
    };
  });
var YC = s(() => {});
var XC = s(() => {});
var Qe = s(() => {
  OS();
  jC();
  GC();
  WC();
  qC();
  KC();
  YC();
  XC();
});
var S5,
  C5,
  gc,
  Ap = s(() => {
    Qe();
    (S5 = (e) => (t) => async (r) => {
      if (!je.isInstance(r.request)) return t(r);
      let { request: o } = r,
        { handlerProtocol: n = "" } = e.requestHandler.metadata || {};
      if (n.indexOf("h2") >= 0 && !o.headers[":authority"])
        delete o.headers.host,
          (o.headers[":authority"] = o.hostname + (o.port ? ":" + o.port : ""));
      else if (!o.headers.host) {
        let i = o.hostname;
        o.port != null && (i += `:${o.port}`), (o.headers.host = i);
      }
      return t(r);
    }),
      (C5 = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: ["HOST"],
        override: !0,
      }),
      (gc = (e) => ({
        applyToStack: (t) => {
          t.add(S5(e), C5);
        },
      }));
  });
var b5,
  w5,
  yc,
  JC = s(() => {
    (b5 = () => (e, t) => async (r) => {
      try {
        let o = await e(r),
          {
            clientName: n,
            commandName: i,
            logger: a,
            dynamoDbDocumentClientOptions: c = {},
          } = t,
          {
            overrideInputFilterSensitiveLog: m,
            overrideOutputFilterSensitiveLog: f,
          } = c,
          u = m ?? t.inputFilterSensitiveLog,
          p = f ?? t.outputFilterSensitiveLog,
          { $metadata: h, ...g } = o.output;
        return (
          a?.info?.({
            clientName: n,
            commandName: i,
            input: u(r.input),
            output: p(g),
            metadata: h,
          }),
          o
        );
      } catch (o) {
        let {
            clientName: n,
            commandName: i,
            logger: a,
            dynamoDbDocumentClientOptions: c = {},
          } = t,
          { overrideInputFilterSensitiveLog: m } = c,
          f = m ?? t.inputFilterSensitiveLog;
        throw (
          (a?.error?.({
            clientName: n,
            commandName: i,
            input: f(r.input),
            error: o,
            metadata: o.$metadata,
          }),
          o)
        );
      }
    }),
      (w5 = {
        name: "loggerMiddleware",
        tags: ["LOGGER"],
        step: "initialize",
        override: !0,
      }),
      (yc = (e) => ({
        applyToStack: (t) => {
          t.add(b5(), w5);
        },
      }));
  });
var _p = s(() => {
  JC();
});
var Rp,
  T5,
  A5,
  _5,
  R5,
  xc,
  vp = s(() => {
    Qe();
    (Rp = "X-Amzn-Trace-Id"),
      (T5 = "AWS_LAMBDA_FUNCTION_NAME"),
      (A5 = "_X_AMZN_TRACE_ID"),
      (_5 = (e) => (t) => async (r) => {
        let { request: o } = r;
        if (!je.isInstance(o) || e.runtime !== "node") return t(r);
        let n =
          Object.keys(o.headers ?? {}).find(
            (m) => m.toLowerCase() === Rp.toLowerCase()
          ) ?? Rp;
        if (o.headers.hasOwnProperty(n)) return t(r);
        let i = process.env[T5],
          a = process.env[A5],
          c = (m) => typeof m == "string" && m.length > 0;
        return c(i) && c(a) && (o.headers[Rp] = a), t({ ...r, request: o });
      }),
      (R5 = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: !0,
        priority: "low",
      }),
      (xc = (e) => ({
        applyToStack: (t) => {
          t.add(_5(e), R5);
        },
      }));
  });
var QC = s(() => {});
var ZC,
  eb = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(ZC || (ZC = {}));
  });
var Ip,
  tb = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(Ip || (Ip = {}));
  });
var rb = s(() => {});
var ob = s(() => {});
var nb = s(() => {});
var sb = s(() => {});
var ib = s(() => {
  eb();
  tb();
  rb();
  ob();
  nb();
  sb();
});
var ab = s(() => {});
var cb = s(() => {});
var mb = s(() => {});
var db = s(() => {});
var fb = s(() => {});
var pb = s(() => {});
var ub = s(() => {});
var lb = s(() => {
  fb();
  pb();
  ub();
});
var hb = s(() => {});
var gb = s(() => {});
var yb,
  xb = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(yb || (yb = {}));
  });
var Eb = s(() => {});
var Sb = s(() => {});
var Cb = s(() => {});
var bb = s(() => {});
var wb = s(() => {});
var Tb = s(() => {
  Eb();
  Sb();
  Cb();
  bb();
  wb();
});
var Ab = s(() => {});
var Pp,
  Np = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(Pp || (Pp = {}));
  });
var _b = s(() => {
  Np();
});
var Rb = s(() => {});
var vb = s(() => {
  _b();
  Rb();
  Np();
});
var Ib = s(() => {});
var Op,
  Pb = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(Op || (Op = {}));
  });
var Nb = s(() => {});
var Ob = s(() => {});
var Db = s(() => {});
var Fb = s(() => {});
var Mb = s(() => {});
var kb = s(() => {
  Ob();
  Db();
  Fb();
  Mb();
});
var Lb = s(() => {});
var $b = s(() => {});
var Ub = s(() => {});
var Bb,
  Hb = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(Bb || (Bb = {}));
  });
var zb = s(() => {});
var Vb = s(() => {});
var jb = s(() => {});
var Gb = s(() => {});
var Wb = s(() => {});
var qb = s(() => {});
var Kb = s(() => {});
var Yb = s(() => {});
var Xb = s(() => {});
var Jb = s(() => {});
var Qb = s(() => {});
var Zb,
  ew = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(Zb || (Zb = {}));
  });
var tw = s(() => {});
var rw = s(() => {});
var ow = s(() => {});
var nw = s(() => {});
var sw = s(() => {});
var iw = s(() => {});
var aw = s(() => {});
var Do = s(() => {
  QC();
  ib();
  ab();
  cb();
  mb();
  db();
  lb();
  hb();
  gb();
  xb();
  Tb();
  Ab();
  vb();
  Ib();
  Pb();
  Nb();
  kb();
  Lb();
  $b();
  Ub();
  Hb();
  zb();
  Vb();
  jb();
  Gb();
  Wb();
  qb();
  Kb();
  Yb();
  Xb();
  Jb();
  Qb();
  ew();
  tw();
  rw();
  ow();
  nw();
  sw();
  iw();
  aw();
});
var cw = s(() => {
  Do();
});
var mw = s(() => {});
var dw,
  fw = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(dw || (dw = {}));
  });
var pw,
  uw = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(pw || (pw = {}));
  });
var lw = s(() => {});
var hw = s(() => {});
var gw = s(() => {});
var yw = s(() => {});
var xw = s(() => {
  fw();
  uw();
  lw();
  hw();
  gw();
  yw();
});
var Ew = s(() => {});
var Sw = s(() => {});
var Cw = s(() => {});
var bw = s(() => {});
var ww = s(() => {});
var Tw = s(() => {});
var Aw = s(() => {});
var _w = s(() => {
  ww();
  Tw();
  Aw();
});
var Rw = s(() => {});
var vw = s(() => {});
var Iw,
  Pw = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(Iw || (Iw = {}));
  });
var Nw = s(() => {});
var Ow = s(() => {});
var Dw = s(() => {});
var Fw = s(() => {});
var Mw = s(() => {});
var kw = s(() => {
  Nw();
  Ow();
  Dw();
  Fw();
  Mw();
});
var Lw = s(() => {});
var Dp,
  Fp = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(Dp || (Dp = {}));
  });
var $w = s(() => {
  Fp();
});
var Uw = s(() => {});
var Bw = s(() => {
  $w();
  Uw();
  Fp();
});
var Hw = s(() => {});
var zw,
  Vw = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(zw || (zw = {}));
  });
var jw = s(() => {});
var Gw = s(() => {});
var Ww = s(() => {});
var qw = s(() => {});
var Kw = s(() => {});
var Yw = s(() => {
  Gw();
  Ww();
  qw();
  Kw();
});
var Xw = s(() => {});
var Mp,
  Jw = s(() => {
    Mp = "__smithy_context";
  });
var Qw = s(() => {});
var Zw,
  eT = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(Zw || (Zw = {}));
  });
var tT = s(() => {});
var rT = s(() => {});
var oT = s(() => {});
var nT = s(() => {});
var sT = s(() => {});
var iT = s(() => {});
var aT = s(() => {});
var cT = s(() => {});
var mT = s(() => {});
var dT = s(() => {});
var fT = s(() => {});
var pT,
  uT = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(pT || (pT = {}));
  });
var lT = s(() => {});
var hT = s(() => {});
var gT = s(() => {});
var yT = s(() => {});
var xT = s(() => {});
var ET = s(() => {});
var ST = s(() => {});
var CT = s(() => {
  mw();
  xw();
  Ew();
  Sw();
  Cw();
  bw();
  _w();
  Rw();
  vw();
  Pw();
  kw();
  Lw();
  Bw();
  Hw();
  Vw();
  jw();
  Yw();
  Xw();
  Jw();
  Qw();
  eT();
  tT();
  rT();
  oT();
  nT();
  sT();
  iT();
  aT();
  cT();
  mT();
  dT();
  fT();
  uT();
  lT();
  hT();
  gT();
  yT();
  xT();
  ET();
  ST();
});
var Te,
  bT = s(() => {
    CT();
    Te = (e) => e[Mp] || (e[Mp] = {});
  });
var Y,
  wT = s(() => {
    Y = (e) => {
      if (typeof e == "function") return e;
      let t = Promise.resolve(e);
      return () => t;
    };
  });
var he = s(() => {
  bT();
  wT();
});
var TT,
  AT = s(() => {
    TT = (e, t) => {
      if (!t || t.length === 0) return e;
      let r = [];
      for (let o of t)
        for (let n of e) n.schemeId.split("#")[1] === o && r.push(n);
      for (let o of e)
        r.find(({ schemeId: n }) => n === o.schemeId) || r.push(o);
      return r;
    };
  });
function v5(e) {
  let t = new Map();
  for (let r of e) t.set(r.schemeId, r);
  return t;
}
var kp,
  Ec = s(() => {
    Do();
    he();
    AT();
    kp = (e, t) => (r, o) => async (n) => {
      let i = e.httpAuthSchemeProvider(
          await t.httpAuthSchemeParametersProvider(e, o, n.input)
        ),
        a = e.authSchemePreference ? await e.authSchemePreference() : [],
        c = TT(i, a),
        m = v5(e.httpAuthSchemes),
        f = Te(o),
        u = [];
      for (let p of c) {
        let h = m.get(p.schemeId);
        if (!h) {
          u.push(
            `HttpAuthScheme \`${p.schemeId}\` was not enabled for this service.`
          );
          continue;
        }
        let g = h.identityProvider(await t.identityProviderConfigProvider(e));
        if (!g) {
          u.push(
            `HttpAuthScheme \`${p.schemeId}\` did not have an IdentityProvider configured.`
          );
          continue;
        }
        let { identityProperties: x = {}, signingProperties: _ = {} } =
          p.propertiesExtractor?.(e, o) || {};
        (p.identityProperties = Object.assign(p.identityProperties || {}, x)),
          (p.signingProperties = Object.assign(p.signingProperties || {}, _)),
          (f.selectedHttpAuthScheme = {
            httpAuthOption: p,
            identity: await g(p.identityProperties),
            signer: h.signer,
          });
        break;
      }
      if (!f.selectedHttpAuthScheme)
        throw new Error(
          u.join(`
`)
        );
      return r(n);
    };
  });
var I5,
  dr,
  _T = s(() => {
    Ec();
    (I5 = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: "endpointV2Middleware",
    }),
      (dr = (
        e,
        {
          httpAuthSchemeParametersProvider: t,
          identityProviderConfigProvider: r,
        }
      ) => ({
        applyToStack: (o) => {
          o.addRelativeTo(
            kp(e, {
              httpAuthSchemeParametersProvider: t,
              identityProviderConfigProvider: r,
            }),
            I5
          );
        },
      }));
  });
var RT = s(() => {});
var vT = s(() => {
  RT();
});
var IT = s(() => {
  Do();
});
var PT = s(() => {});
var NT = s(() => {});
function P5(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var St,
  OT = s(() => {
    St = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = P5(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var DT = s(() => {});
var FT = s(() => {});
var MT = s(() => {});
var Ze = s(() => {
  vT();
  IT();
  PT();
  NT();
  OT();
  DT();
  FT();
  MT();
});
var Lp = s(() => {
  Ze();
});
var $p = s(() => {});
var kT,
  LT = s(() => {
    Lp();
    $p();
    kT = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: !0,
    };
  });
var $T = s(() => {
  Lp();
  LT();
  $p();
});
var mce,
  UT = s(() => {
    $T();
    Ec();
    mce = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: kT.name,
    };
  });
var BT = s(() => {
  Ec();
  _T();
  UT();
});
var N5,
  O5,
  HT,
  Up = s(() => {
    Ze();
    Do();
    he();
    (N5 = (e) => (t) => {
      throw t;
    }),
      (O5 = (e, t) => {}),
      (HT = (e) => (t, r) => async (o) => {
        if (!St.isInstance(o.request)) return t(o);
        let i = Te(r).selectedHttpAuthScheme;
        if (!i)
          throw new Error(
            "No HttpAuthScheme was selected: unable to sign request"
          );
        let {
            httpAuthOption: { signingProperties: a = {} },
            identity: c,
            signer: m,
          } = i,
          f = await t({ ...o, request: await m.sign(o.request, c, a) }).catch(
            (m.errorHandler || N5)(a)
          );
        return (m.successHandler || O5)(f.response, a), f;
      });
  });
var D5,
  fr,
  zT = s(() => {
    Up();
    (D5 = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: !0,
      relation: "after",
      toMiddleware: "retryMiddleware",
    }),
      (fr = (e) => ({
        applyToStack: (t) => {
          t.addRelativeTo(HT(e), D5);
        },
      }));
  });
var VT = s(() => {
  Up();
  zT();
});
var Ot,
  jT = s(() => {
    Ot = (e) => {
      if (typeof e == "function") return e;
      let t = Promise.resolve(e);
      return () => t;
    };
  });
function te(e, t, r, o, n) {
  return async function* (a, c, ...m) {
    let f = c,
      u = a.startingToken ?? f[r],
      p = !0,
      h;
    for (; p; ) {
      if (((f[r] = u), n && (f[n] = f[n] ?? a.pageSize), a.client instanceof e))
        h = await F5(t, a.client, c, a.withCommand, ...m);
      else throw new Error(`Invalid client, expected instance of ${e.name}`);
      yield h;
      let g = u;
      (u = M5(h, o)), (p = !!(u && (!a.stopOnSameToken || u !== g)));
    }
    return void 0;
  };
}
var F5,
  M5,
  GT = s(() => {
    F5 = async (e, t, r, o = (i) => i, ...n) => {
      let i = new e(r);
      return (i = o(i) ?? i), await t.send(i, ...n);
    };
    M5 = (e, t) => {
      let r = e,
        o = t.split(".");
      for (let n of o) {
        if (!r || typeof r != "object") return;
        r = r[n];
      }
      return r;
    };
  });
var ge,
  st = s(() => {
    ge = (e) =>
      (typeof ArrayBuffer == "function" && e instanceof ArrayBuffer) ||
      Object.prototype.toString.call(e) === "[object ArrayBuffer]";
  });
import { Buffer as Bp } from "buffer";
var is,
  Sc,
  Fo = s(() => {
    st();
    (is = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Bp.from(e, t, r);
    }),
      (Sc = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Bp.from(e, t) : Bp.from(e);
      });
  });
var k5,
  Cc,
  WT = s(() => {
    Fo();
    (k5 = /^[A-Za-z0-9+/]*={0,2}$/),
      (Cc = (e) => {
        if ((e.length * 3) % 4 !== 0)
          throw new TypeError("Incorrect padding on base64 string.");
        if (!k5.exec(e)) throw new TypeError("Invalid base64 string.");
        let t = Sc(e, "base64");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      });
  });
var Mo,
  Hp = s(() => {
    Fo();
    Mo = (e) => {
      let t = Sc(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var qT = s(() => {
  Hp();
});
var as,
  KT = s(() => {
    Fo();
    as = (e) => {
      if (typeof e == "string") return e;
      if (
        typeof e != "object" ||
        typeof e.byteOffset != "number" ||
        typeof e.byteLength != "number"
      )
        throw new Error(
          "@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."
        );
      return is(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    };
  });
var ko = s(() => {
  Hp();
  qT();
  KT();
});
var Lo,
  YT = s(() => {
    Fo();
    ko();
    Lo = (e) => {
      let t;
      if (
        (typeof e == "string" ? (t = Mo(e)) : (t = e),
        typeof t != "object" ||
          typeof t.byteOffset != "number" ||
          typeof t.byteLength != "number")
      )
        throw new Error(
          "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."
        );
      return is(t.buffer, t.byteOffset, t.byteLength).toString("base64");
    };
  });
var pr = s(() => {
  WT();
  YT();
});
function XT(e, t = "utf-8") {
  return t === "base64" ? Lo(e) : as(e);
}
function JT(e, t) {
  return t === "base64" ? er.mutate(Cc(e)) : er.mutate(Mo(e));
}
var QT = s(() => {
  pr();
  ko();
  zp();
});
var er,
  zp = s(() => {
    QT();
    er = class e extends Uint8Array {
      static fromString(t, r = "utf-8") {
        switch (typeof t) {
          case "string":
            return JT(t, r);
          default:
            throw new Error(
              `Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`
            );
        }
      }
      static mutate(t) {
        return Object.setPrototypeOf(t, e.prototype), t;
      }
      transformToString(t = "utf-8") {
        return XT(this, t);
      }
    };
  });
var Vp = s(() => {
  pr();
});
var ur = s(() => {});
var ZT = s(() => {});
var eA = s(() => {
  pr();
  ur();
  ZT();
});
var tA = s(() => {
  ur();
  Vp();
  eA();
});
var jp = s(() => {});
var rA = s(() => {
  jp();
});
var oA = s(() => {
  jp();
  rA();
  ur();
});
var nA = s(() => {});
var sA = s(() => {});
var iA = s(() => {
  sA();
  ur();
});
var Gp = s(() => {});
var aA = s(() => {
  Gp();
});
var cA = s(() => {
  Gp();
  aA();
});
var bc = s(() => {
  cA();
});
var mA = s(() => {});
var Wp = s(() => {});
var $o = s(() => {});
var dA = s(() => {
  $o();
});
var fA = s(() => {
  $o();
});
var pA = s(() => {
  qp();
  $o();
});
var Kp = s(() => {
  $o();
});
var qp = s(() => {
  Ze();
  bc();
  mA();
  Wp();
  dA();
  fA();
  pA();
  $o();
  Kp();
});
var lA = s(() => {});
var hA = s(() => {
  lA();
});
var gA = s(() => {
  Ze();
  bc();
  Wp();
  hA();
  Kp();
});
var yA = s(() => {});
var xA = s(() => {
  yA();
});
var EA = s(() => {
  qp();
  gA();
  xA();
});
var SA = s(() => {});
var CA = s(() => {});
var bA = s(() => {
  Ze();
  bc();
  SA();
  CA();
});
var wA = s(() => {
  pr();
});
var TA = s(() => {
  bA();
  wA();
});
function Tc(e) {
  if (e.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length");
  let t = new Uint8Array(e.length / 2);
  for (let r = 0; r < e.length; r += 2) {
    let o = e.slice(r, r + 2).toLowerCase();
    if (o in Yp) t[r / 2] = Yp[o];
    else
      throw new Error(
        `Cannot decode unrecognized sequence ${o} as hexadecimal`
      );
  }
  return t;
}
function ae(e) {
  let t = "";
  for (let r = 0; r < e.byteLength; r++) t += AA[e[r]];
  return t;
}
var AA,
  Yp,
  Dt = s(() => {
    (AA = {}), (Yp = {});
    for (let e = 0; e < 256; e++) {
      let t = e.toString(16).toLowerCase();
      t.length === 1 && (t = `0${t}`), (AA[e] = t), (Yp[t] = e);
    }
  });
var _A = s(() => {
  TA();
  pr();
  Dt();
  ko();
  ur();
});
var RA = s(() => {
  EA();
  Fo();
  _A();
});
var vA = s(() => {});
var IA = s(() => {
  vA();
  ur();
});
var Xp = s(() => {
  zp();
  Vp();
  tA();
  oA();
  nA();
  iA();
  RA();
  IA();
  ur();
});
var ee,
  ms = s(() => {
    Xp();
    ee = async (e = new Uint8Array(), t) => {
      if (e instanceof Uint8Array) return er.mutate(e);
      if (!e) return er.mutate(new Uint8Array());
      let r = t.streamCollector(e);
      return er.mutate(await r);
    };
  });
function Ct(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
var Ac = s(() => {});
var Jp = s(() => {});
var PA = s(() => {
  Ze();
  he();
});
var NA = s(() => {
  he();
});
var OA = s(() => {
  PA();
  NA();
});
var et,
  lr = s(() => {
    et = class e {
      constructor(t, r = new Map()) {
        (this.namespace = t), (this.schemas = r);
      }
      static for(t) {
        return (
          e.registries.has(t) || e.registries.set(t, new e(t)),
          e.registries.get(t)
        );
      }
      register(t, r) {
        let o = this.normalizeShapeId(t);
        e.for(this.getNamespace(t)).schemas.set(o, r);
      }
      getSchema(t) {
        let r = this.normalizeShapeId(t);
        if (!this.schemas.has(r))
          throw new Error(`@smithy/core/schema - schema not found for ${r}`);
        return this.schemas.get(r);
      }
      getBaseException() {
        for (let [t, r] of this.schemas.entries())
          if (
            t.startsWith("smithy.ts.sdk.synthetic.") &&
            t.endsWith("ServiceException")
          )
            return r;
      }
      find(t) {
        return [...this.schemas.values()].find(t);
      }
      destroy() {
        e.registries.delete(this.namespace), this.schemas.clear();
      }
      normalizeShapeId(t) {
        return t.includes("#") ? t : this.namespace + "#" + t;
      }
      getNamespace(t) {
        return this.normalizeShapeId(t).split("#")[0];
      }
    };
    et.registries = new Map();
  });
var Yr = s(() => {});
var Qp = s(() => {
  lr();
  Yr();
});
var Zp = s(() => {
  lr();
  Yr();
});
var DA = s(() => {
  lr();
  Yr();
});
var Rc = s(() => {
  lr();
  Yr();
});
var FA = s(() => {
  lr();
  Rc();
});
var eu = s(() => {});
var tu = s(() => {
  lr();
  Yr();
});
var kA = s(() => {
  Jp();
  Qp();
  Zp();
  eu();
  tu();
  Rc();
});
var Ae = s(() => {
  Jp();
  OA();
  Qp();
  Zp();
  DA();
  FA();
  kA();
  Yr();
  tu();
  Rc();
  eu();
  lr();
});
var LA = s(() => {
  Ae();
});
var Uo,
  xe,
  z5,
  $A,
  Ft,
  U,
  UA,
  BA,
  ru,
  V5,
  P,
  z,
  d,
  HA,
  zA,
  j5,
  ds,
  VA,
  G5,
  ou,
  nu,
  jA,
  vc,
  Ic,
  su = s(() => {
    (Uo = (e) => {
      if (e != null) {
        if (typeof e == "number") {
          if (
            ((e === 0 || e === 1) &&
              Ic.warn(vc(`Expected boolean, got ${typeof e}: ${e}`)),
            e === 0)
          )
            return !1;
          if (e === 1) return !0;
        }
        if (typeof e == "string") {
          let t = e.toLowerCase();
          if (
            ((t === "false" || t === "true") &&
              Ic.warn(vc(`Expected boolean, got ${typeof e}: ${e}`)),
            t === "false")
          )
            return !1;
          if (t === "true") return !0;
        }
        if (typeof e == "boolean") return e;
        throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`);
      }
    }),
      (xe = (e) => {
        if (e != null) {
          if (typeof e == "string") {
            let t = parseFloat(e);
            if (!Number.isNaN(t))
              return (
                String(t) !== String(e) &&
                  Ic.warn(vc(`Expected number but observed string: ${e}`)),
                t
              );
          }
          if (typeof e == "number") return e;
          throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
        }
      }),
      (z5 = Math.ceil(34028234663852886e22)),
      ($A = (e) => {
        let t = xe(e);
        if (
          t !== void 0 &&
          !Number.isNaN(t) &&
          t !== 1 / 0 &&
          t !== -1 / 0 &&
          Math.abs(t) > z5
        )
          throw new TypeError(`Expected 32-bit float, got ${e}`);
        return t;
      }),
      (Ft = (e) => {
        if (e != null) {
          if (Number.isInteger(e) && !Number.isNaN(e)) return e;
          throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
        }
      }),
      (U = (e) => ru(e, 32)),
      (UA = (e) => ru(e, 16)),
      (BA = (e) => ru(e, 8)),
      (ru = (e, t) => {
        let r = Ft(e);
        if (r !== void 0 && V5(r, t) !== r)
          throw new TypeError(`Expected ${t}-bit integer, got ${e}`);
        return r;
      }),
      (V5 = (e, t) => {
        switch (t) {
          case 32:
            return Int32Array.of(e)[0];
          case 16:
            return Int16Array.of(e)[0];
          case 8:
            return Int8Array.of(e)[0];
        }
      }),
      (P = (e, t) => {
        if (e == null)
          throw t
            ? new TypeError(`Expected a non-null value for ${t}`)
            : new TypeError("Expected a non-null value");
        return e;
      }),
      (z = (e) => {
        if (e == null) return;
        if (typeof e == "object" && !Array.isArray(e)) return e;
        let t = Array.isArray(e) ? "array" : typeof e;
        throw new TypeError(`Expected object, got ${t}: ${e}`);
      }),
      (d = (e) => {
        if (e != null) {
          if (typeof e == "string") return e;
          if (["boolean", "number", "bigint"].includes(typeof e))
            return (
              Ic.warn(vc(`Expected string, got ${typeof e}: ${e}`)), String(e)
            );
          throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
        }
      }),
      (HA = (e) => xe(typeof e == "string" ? ds(e) : e)),
      (zA = (e) => $A(typeof e == "string" ? ds(e) : e)),
      (j5 =
        /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g),
      (ds = (e) => {
        let t = e.match(j5);
        if (t === null || t[0].length !== e.length)
          throw new TypeError("Expected real number, got implicit NaN");
        return parseFloat(e);
      }),
      (VA = (e) => (typeof e == "string" ? G5(e) : xe(e))),
      (G5 = (e) => {
        switch (e) {
          case "NaN":
            return NaN;
          case "Infinity":
            return 1 / 0;
          case "-Infinity":
            return -1 / 0;
          default:
            throw new Error(`Unable to parse float value: ${e}`);
        }
      }),
      (ou = (e) => U(typeof e == "string" ? ds(e) : e)),
      (nu = (e) => UA(typeof e == "string" ? ds(e) : e)),
      (jA = (e) => BA(typeof e == "string" ? ds(e) : e)),
      (vc = (e) =>
        String(new TypeError(e).stack || e)
          .split(
            `
`
          )
          .slice(0, 5)
          .filter((t) => !t.includes("stackTraceWarning")).join(`
`)),
      (Ic = { warn: console.warn });
  });
var W5,
  q5,
  GA,
  K5,
  Pc,
  Ope,
  Dpe,
  Fpe,
  ve,
  WA,
  Mpe,
  Y5,
  X5,
  J5,
  Xr,
  Q5,
  Z5,
  iu,
  qA = s(() => {
    su();
    (W5 = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]),
      (q5 = new RegExp(
        /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/
      )),
      (GA = (e) => {
        if (e == null) return;
        if (typeof e != "string")
          throw new TypeError(
            "RFC-3339 date-times must be expressed as strings"
          );
        let t = q5.exec(e);
        if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
        let [r, o, n, i, a, c, m, f] = t,
          u = nu(iu(o)),
          p = Xr(n, "month", 1, 12),
          h = Xr(i, "day", 1, 31);
        return WA(u, p, h, {
          hours: a,
          minutes: c,
          seconds: m,
          fractionalMilliseconds: f,
        });
      }),
      (K5 = new RegExp(
        /^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/
      )),
      (Pc = (e) => {
        if (e == null) return;
        if (typeof e != "string")
          throw new TypeError(
            "RFC-3339 date-times must be expressed as strings"
          );
        let t = K5.exec(e);
        if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
        let [r, o, n, i, a, c, m, f, u] = t,
          p = nu(iu(o)),
          h = Xr(n, "month", 1, 12),
          g = Xr(i, "day", 1, 31),
          x = WA(p, h, g, {
            hours: a,
            minutes: c,
            seconds: m,
            fractionalMilliseconds: f,
          });
        return u.toUpperCase() != "Z" && x.setTime(x.getTime() - Z5(u)), x;
      }),
      (Ope = new RegExp(
        /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
      )),
      (Dpe = new RegExp(
        /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/
      )),
      (Fpe = new RegExp(
        /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/
      )),
      (ve = (e) => {
        if (e == null) return;
        let t;
        if (typeof e == "number") t = e;
        else if (typeof e == "string") t = HA(e);
        else if (typeof e == "object" && e.tag === 1) t = e.value;
        else
          throw new TypeError(
            "Epoch timestamps must be expressed as floating point numbers or their string representation"
          );
        if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
          throw new TypeError(
            "Epoch timestamps must be valid, non-Infinite, non-NaN numerics"
          );
        return new Date(Math.round(t * 1e3));
      }),
      (WA = (e, t, r, o) => {
        let n = t - 1;
        return (
          X5(e, n, r),
          new Date(
            Date.UTC(
              e,
              n,
              r,
              Xr(o.hours, "hour", 0, 23),
              Xr(o.minutes, "minute", 0, 59),
              Xr(o.seconds, "seconds", 0, 60),
              Q5(o.fractionalMilliseconds)
            )
          )
        );
      }),
      (Mpe = 50 * 365 * 24 * 60 * 60 * 1e3),
      (Y5 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
      (X5 = (e, t, r) => {
        let o = Y5[t];
        if ((t === 1 && J5(e) && (o = 29), r > o))
          throw new TypeError(`Invalid day for ${W5[t]} in ${e}: ${r}`);
      }),
      (J5 = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)),
      (Xr = (e, t, r, o) => {
        let n = jA(iu(e));
        if (n < r || n > o)
          throw new TypeError(`${t} must be between ${r} and ${o}, inclusive`);
        return n;
      }),
      (Q5 = (e) => (e == null ? 0 : zA("0." + e) * 1e3)),
      (Z5 = (e) => {
        let t = e[0],
          r = 1;
        if (t == "+") r = 1;
        else if (t == "-") r = -1;
        else throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);
        let o = Number(e.substring(1, 3)),
          n = Number(e.substring(4, 6));
        return r * (o * 60 + n) * 60 * 1e3;
      }),
      (iu = (e) => {
        let t = 0;
        for (; t < e.length - 1 && e.charAt(t) === "0"; ) t++;
        return t === 0 ? e : e.slice(t);
      });
  });
var Mt,
  KA = s(() => {
    Mt = function (t) {
      return Object.assign(new String(t), {
        deserializeJSON() {
          return JSON.parse(String(t));
        },
        toString() {
          return String(t);
        },
        toJSON() {
          return String(t);
        },
      });
    };
    Mt.from = (e) =>
      e && typeof e == "object" && (e instanceof Mt || "deserializeJSON" in e)
        ? e
        : typeof e == "string" || Object.getPrototypeOf(e) === String.prototype
          ? Mt(String(e))
          : Mt(JSON.stringify(e));
    Mt.fromObject = Mt.from;
  });
var YA = s(() => {});
var XA = s(() => {});
var JA = s(() => {});
var QA = s(() => {});
var it = s(() => {
  LA();
  qA();
  KA();
  su();
  YA();
  XA();
  JA();
  QA();
});
var au = s(() => {
  Ae();
  it();
  Ze();
  Xp();
  ms();
});
var ZA = s(() => {
  Ae();
  Ze();
  ms();
  Ac();
  au();
});
var e_ = s(() => {
  Ae();
  Ze();
  ms();
  au();
});
var Bo,
  cu = s(() => {
    Ac();
    Bo = (e, t, r, o, n, i) => {
      if (t != null && t[r] !== void 0) {
        let a = o();
        if (a.length <= 0)
          throw new Error(
            "Empty value provided for input HTTP label: " + r + "."
          );
        e = e.replace(
          n,
          i
            ? a
                .split("/")
                .map((c) => Ct(c))
                .join("/")
            : Ct(a)
        );
      } else
        throw new Error("No value provided for input HTTP label: " + r + ".");
      return e;
    };
  });
function N(e, t) {
  return new mu(e, t);
}
var mu,
  t_ = s(() => {
    Ze();
    cu();
    mu = class {
      constructor(t, r) {
        (this.input = t),
          (this.context = r),
          (this.query = {}),
          (this.method = ""),
          (this.headers = {}),
          (this.path = ""),
          (this.body = null),
          (this.hostname = ""),
          (this.resolvePathStack = []);
      }
      async build() {
        let {
          hostname: t,
          protocol: r = "https",
          port: o,
          path: n,
        } = await this.context.endpoint();
        this.path = n;
        for (let i of this.resolvePathStack) i(this.path);
        return new St({
          protocol: r,
          hostname: this.hostname || t,
          port: o,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers,
        });
      }
      hn(t) {
        return (this.hostname = t), this;
      }
      bp(t) {
        return (
          this.resolvePathStack.push((r) => {
            this.path = `${r?.endsWith("/") ? r.slice(0, -1) : r || ""}` + t;
          }),
          this
        );
      }
      p(t, r, o, n) {
        return (
          this.resolvePathStack.push((i) => {
            this.path = Bo(i, this.input, t, r, o, n);
          }),
          this
        );
      }
      h(t) {
        return (this.headers = t), this;
      }
      q(t) {
        return (this.query = t), this;
      }
      b(t) {
        return (this.body = t), this;
      }
      m(t) {
        return (this.method = t), this;
      }
    };
  });
var Nc = s(() => {
  Ae();
});
var du = s(() => {
  Ae();
  it();
  pr();
  ko();
  Nc();
});
var o_ = s(() => {
  Ae();
  ko();
  du();
});
var fu = s(() => {
  Ae();
  it();
  pr();
  Nc();
});
var s_ = s(() => {
  Ae();
  fu();
});
var Ee = s(() => {
  ms();
  Ac();
  ZA();
  e_();
  t_();
  cu();
  du();
  o_();
  s_();
  fu();
  Nc();
});
var i_ = s(() => {
  Ee();
});
function Oc(e, t, r) {
  e.__smithy_context
    ? e.__smithy_context.features || (e.__smithy_context.features = {})
    : (e.__smithy_context = { features: {} }),
    (e.__smithy_context.features[t] = r);
}
var a_ = s(() => {});
var kt,
  c_ = s(() => {
    kt = class {
      constructor(t) {
        this.authSchemes = new Map();
        for (let [r, o] of Object.entries(t))
          o !== void 0 && this.authSchemes.set(r, o);
      }
      getIdentityProvider(t) {
        return this.authSchemes.get(t);
      }
    };
  });
var m_ = s(() => {
  Ze();
  Do();
});
var d_ = s(() => {
  Ze();
});
var Lt,
  f_ = s(() => {
    Lt = class {
      async sign(t, r, o) {
        return t;
      }
    };
  });
var p_ = s(() => {
  m_();
  d_();
  f_();
});
var sK,
  u_,
  pu,
  l_,
  h_ = s(() => {
    (sK = (e) => (t) => pu(t) && t.expiration.getTime() - Date.now() < e),
      (u_ = sK(3e5)),
      (pu = (e) => e.expiration !== void 0),
      (l_ = (e, t, r) => {
        if (e === void 0) return;
        let o = typeof e != "function" ? async () => Promise.resolve(e) : e,
          n,
          i,
          a,
          c = !1,
          m = async (f) => {
            i || (i = o(f));
            try {
              (n = await i), (a = !0), (c = !1);
            } finally {
              i = void 0;
            }
            return n;
          };
        return t === void 0
          ? async (f) => ((!a || f?.forceRefresh) && (n = await m(f)), n)
          : async (f) => (
              (!a || f?.forceRefresh) && (n = await m(f)),
              c ? n : r(n) ? (t(n) && (await m(f)), n) : ((c = !0), n)
            );
      });
  });
var g_ = s(() => {
  c_();
  p_();
  h_();
});
var Q = s(() => {
  cw();
  BT();
  VT();
  jT();
  GT();
  i_();
  a_();
  g_();
});
function iK(e) {
  return e === void 0 ? !0 : typeof e == "string" && e.length <= 50;
}
function Dc(e) {
  let t = Ot(e.userAgentAppId ?? uu),
    { customUserAgent: r } = e;
  return Object.assign(e, {
    customUserAgent: typeof r == "string" ? [[r]] : r,
    userAgentAppId: async () => {
      let o = await t();
      if (!iK(o)) {
        let n =
          e.logger?.constructor?.name === "NoOpLogger" || !e.logger
            ? console
            : e.logger;
        typeof o != "string"
          ? n?.warn("userAgentAppId must be a string or undefined.")
          : o.length > 50 &&
            n?.warn(
              "The provided userAgentAppId exceeds the maximum length of 50 characters."
            );
      }
      return o;
    },
  });
}
var uu,
  y_ = s(() => {
    Q();
    uu = void 0;
  });
var $t,
  x_ = s(() => {
    $t = class {
      constructor({ size: t, params: r }) {
        (this.data = new Map()),
          (this.parameters = []),
          (this.capacity = t ?? 50),
          r && (this.parameters = r);
      }
      get(t, r) {
        let o = this.hash(t);
        if (o === !1) return r();
        if (!this.data.has(o)) {
          if (this.data.size > this.capacity + 10) {
            let n = this.data.keys(),
              i = 0;
            for (;;) {
              let { value: a, done: c } = n.next();
              if ((this.data.delete(a), c || ++i > 10)) break;
            }
          }
          this.data.set(o, r());
        }
        return this.data.get(o);
      }
      size() {
        return this.data.size;
      }
      hash(t) {
        let r = "",
          { parameters: o } = this;
        if (o.length === 0) return !1;
        for (let n of o) {
          let i = String(t[n] ?? "");
          if (i.includes("|;")) return !1;
          r += i + "|;";
        }
        return r;
      }
    };
  });
var aK,
  hr,
  lu = s(() => {
    (aK = new RegExp(
      "^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"
    )),
      (hr = (e) => aK.test(e) || (e.startsWith("[") && e.endsWith("]")));
  });
var cK,
  Jr,
  hu = s(() => {
    (cK = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$")),
      (Jr = (e, t = !1) => {
        if (!t) return cK.test(e);
        let r = e.split(".");
        for (let o of r) if (!Jr(o)) return !1;
        return !0;
      });
  });
var Le,
  Fc = s(() => {
    Le = {};
  });
var tr,
  E_ = s(() => {
    tr = "endpoints";
  });
function at(e) {
  return typeof e != "object" || e == null
    ? e
    : "ref" in e
      ? `$${at(e.ref)}`
      : "fn" in e
        ? `${e.fn}(${(e.argv || []).map(at).join(", ")})`
        : JSON.stringify(e, null, 2);
}
var S_ = s(() => {});
var fs = s(() => {
  E_();
  S_();
});
var re,
  C_ = s(() => {
    re = class extends Error {
      constructor(t) {
        super(t), (this.name = "EndpointError");
      }
    };
  });
var b_ = s(() => {});
var w_ = s(() => {});
var T_ = s(() => {});
var A_ = s(() => {});
var __ = s(() => {});
var R_ = s(() => {});
var ct = s(() => {
  C_();
  b_();
  w_();
  T_();
  A_();
  __();
  R_();
});
var v_,
  I_ = s(() => {
    v_ = (e, t) => e === t;
  });
var P_,
  N_ = s(() => {
    ct();
    P_ = (e) => {
      let t = e.split("."),
        r = [];
      for (let o of t) {
        let n = o.indexOf("[");
        if (n !== -1) {
          if (o.indexOf("]") !== o.length - 1)
            throw new re(`Path: '${e}' does not end with ']'`);
          let i = o.slice(n + 1, -1);
          if (Number.isNaN(parseInt(i)))
            throw new re(`Invalid array index: '${i}' in path: '${e}'`);
          n !== 0 && r.push(o.slice(0, n)), r.push(i);
        } else r.push(o);
      }
      return r;
    };
  });
var Mc,
  O_ = s(() => {
    ct();
    N_();
    Mc = (e, t) =>
      P_(t).reduce((r, o) => {
        if (typeof r != "object")
          throw new re(
            `Index '${o}' in '${t}' not found in '${JSON.stringify(e)}'`
          );
        return Array.isArray(r) ? r[parseInt(o)] : r[o];
      }, e);
  });
var D_,
  F_ = s(() => {
    D_ = (e) => e != null;
  });
var M_,
  k_ = s(() => {
    M_ = (e) => !e;
  });
var L_ = s(() => {});
var $_,
  U_ = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })($_ || ($_ = {}));
  });
var B_,
  H_ = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(B_ || (B_ = {}));
  });
var z_ = s(() => {});
var V_ = s(() => {});
var j_ = s(() => {});
var G_ = s(() => {});
var W_ = s(() => {
  U_();
  H_();
  z_();
  V_();
  j_();
  G_();
});
var q_ = s(() => {});
var K_ = s(() => {});
var Y_ = s(() => {});
var X_ = s(() => {});
var J_ = s(() => {});
var Q_ = s(() => {});
var Z_ = s(() => {});
var eR = s(() => {
  J_();
  Q_();
  Z_();
});
var tR = s(() => {});
var rR = s(() => {});
var Ho,
  oR = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(Ho || (Ho = {}));
  });
var nR = s(() => {});
var sR = s(() => {});
var iR = s(() => {});
var aR = s(() => {});
var cR = s(() => {});
var mR = s(() => {
  nR();
  sR();
  iR();
  aR();
  cR();
});
var dR = s(() => {});
var gu,
  yu = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(gu || (gu = {}));
  });
var fR = s(() => {
  yu();
});
var pR = s(() => {});
var uR = s(() => {
  fR();
  pR();
  yu();
});
var lR = s(() => {});
var hR,
  gR = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(hR || (hR = {}));
  });
var yR = s(() => {});
var xR = s(() => {});
var ER = s(() => {});
var SR = s(() => {});
var CR = s(() => {});
var bR = s(() => {
  xR();
  ER();
  SR();
  CR();
});
var wR = s(() => {});
var TR = s(() => {});
var AR = s(() => {});
var _R,
  RR = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(_R || (_R = {}));
  });
var vR = s(() => {});
var IR = s(() => {});
var PR = s(() => {});
var NR = s(() => {});
var OR = s(() => {});
var DR = s(() => {});
var FR = s(() => {});
var MR = s(() => {});
var kR = s(() => {});
var LR = s(() => {});
var $R = s(() => {});
var UR,
  BR = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(UR || (UR = {}));
  });
var HR = s(() => {});
var zR = s(() => {});
var VR = s(() => {});
var jR = s(() => {});
var GR = s(() => {});
var WR = s(() => {});
var qR = s(() => {});
var KR = s(() => {
  L_();
  W_();
  q_();
  K_();
  Y_();
  X_();
  eR();
  tR();
  rR();
  oR();
  mR();
  dR();
  uR();
  lR();
  gR();
  yR();
  bR();
  wR();
  TR();
  AR();
  RR();
  vR();
  IR();
  PR();
  NR();
  OR();
  DR();
  FR();
  MR();
  kR();
  LR();
  $R();
  BR();
  HR();
  zR();
  VR();
  jR();
  GR();
  WR();
  qR();
});
var xu,
  YR,
  XR = s(() => {
    KR();
    lu();
    (xu = { [Ho.HTTP]: 80, [Ho.HTTPS]: 443 }),
      (YR = (e) => {
        let t = (() => {
          try {
            if (e instanceof URL) return e;
            if (typeof e == "object" && "hostname" in e) {
              let {
                  hostname: h,
                  port: g,
                  protocol: x = "",
                  path: _ = "",
                  query: T = {},
                } = e,
                R = new URL(`${x}//${h}${g ? `:${g}` : ""}${_}`);
              return (
                (R.search = Object.entries(T)
                  .map(([$, v]) => `${$}=${v}`)
                  .join("&")),
                R
              );
            }
            return new URL(e);
          } catch {
            return null;
          }
        })();
        if (!t)
          return (
            console.error(
              `Unable to parse ${JSON.stringify(e)} as a whatwg URL.`
            ),
            null
          );
        let r = t.href,
          { host: o, hostname: n, pathname: i, protocol: a, search: c } = t;
        if (c) return null;
        let m = a.slice(0, -1);
        if (!Object.values(Ho).includes(m)) return null;
        let f = hr(n),
          u =
            r.includes(`${o}:${xu[m]}`) ||
            (typeof e == "string" && e.includes(`${o}:${xu[m]}`)),
          p = `${o}${u ? `:${xu[m]}` : ""}`;
        return {
          scheme: m,
          authority: p,
          path: i,
          normalizedPath: i.endsWith("/") ? i : `${i}/`,
          isIp: f,
        };
      });
  });
var JR,
  QR = s(() => {
    JR = (e, t) => e === t;
  });
var ZR,
  ev = s(() => {
    ZR = (e, t, r, o) =>
      t >= r || e.length < r
        ? null
        : o
          ? e.substring(e.length - r, e.length - t)
          : e.substring(t, r);
  });
var tv,
  rv = s(() => {
    tv = (e) =>
      encodeURIComponent(e).replace(
        /[!*'()]/g,
        (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
      );
  });
var Eu = s(() => {
  I_();
  O_();
  F_();
  hu();
  k_();
  XR();
  QR();
  ev();
  rv();
});
var ov,
  nv = s(() => {
    Eu();
    ov = {
      booleanEquals: v_,
      getAttr: Mc,
      isSet: D_,
      isValidHostLabel: Jr,
      not: M_,
      parseURL: YR,
      stringEquals: JR,
      substring: ZR,
      uriEncode: tv,
    };
  });
var kc,
  Su = s(() => {
    Eu();
    kc = (e, t) => {
      let r = [],
        o = { ...t.endpointParams, ...t.referenceRecord },
        n = 0;
      for (; n < e.length; ) {
        let i = e.indexOf("{", n);
        if (i === -1) {
          r.push(e.slice(n));
          break;
        }
        r.push(e.slice(n, i));
        let a = e.indexOf("}", i);
        if (a === -1) {
          r.push(e.slice(i));
          break;
        }
        e[i + 1] === "{" &&
          e[a + 1] === "}" &&
          (r.push(e.slice(i + 1, a)), (n = a + 2));
        let c = e.substring(i + 1, a);
        if (c.includes("#")) {
          let [m, f] = c.split("#");
          r.push(Mc(o[m], f));
        } else r.push(o[c]);
        n = a + 1;
      }
      return r.join("");
    };
  });
var sv,
  iv = s(() => {
    sv = ({ ref: e }, t) => ({ ...t.endpointParams, ...t.referenceRecord })[e];
  });
var gr,
  ps = s(() => {
    ct();
    Cu();
    Su();
    iv();
    gr = (e, t, r) => {
      if (typeof e == "string") return kc(e, r);
      if (e.fn) return Lc(e, r);
      if (e.ref) return sv(e, r);
      throw new re(
        `'${t}': ${String(e)} is not a string, function or reference.`
      );
    };
  });
var Lc,
  Cu = s(() => {
    Fc();
    nv();
    ps();
    Lc = ({ fn: e, argv: t }, r) => {
      let o = t.map((i) =>
          ["boolean", "number"].includes(typeof i) ? i : gr(i, "arg", r)
        ),
        n = e.split(".");
      return n[0] in Le && n[1] != null ? Le[n[0]][n[1]](...o) : ov[e](...o);
    };
  });
var av,
  cv = s(() => {
    fs();
    ct();
    Cu();
    av = ({ assign: e, ...t }, r) => {
      if (e && e in r.referenceRecord)
        throw new re(`'${e}' is already defined in Reference Record.`);
      let o = Lc(t, r);
      return (
        r.logger?.debug?.(`${tr} evaluateCondition: ${at(t)} = ${at(o)}`),
        {
          result: o === "" ? !0 : !!o,
          ...(e != null && { toAssign: { name: e, value: o } }),
        }
      );
    };
  });
var zo,
  $c = s(() => {
    fs();
    cv();
    zo = (e = [], t) => {
      let r = {};
      for (let o of e) {
        let { result: n, toAssign: i } = av(o, {
          ...t,
          referenceRecord: { ...t.referenceRecord, ...r },
        });
        if (!n) return { result: n };
        i &&
          ((r[i.name] = i.value),
          t.logger?.debug?.(`${tr} assign: ${i.name} := ${at(i.value)}`));
      }
      return { result: !0, referenceRecord: r };
    };
  });
var mv,
  dv = s(() => {
    ct();
    ps();
    mv = (e, t) =>
      Object.entries(e).reduce(
        (r, [o, n]) => ({
          ...r,
          [o]: n.map((i) => {
            let a = gr(i, "Header value entry", t);
            if (typeof a != "string")
              throw new re(`Header '${o}' value '${a}' is not a string`);
            return a;
          }),
        }),
        {}
      );
  });
var bu,
  fv = s(() => {
    ct();
    Su();
    wu();
    bu = (e, t) => {
      if (Array.isArray(e)) return e.map((r) => bu(r, t));
      switch (typeof e) {
        case "string":
          return kc(e, t);
        case "object":
          if (e === null) throw new re(`Unexpected endpoint property: ${e}`);
          return Uc(e, t);
        case "boolean":
          return e;
        default:
          throw new re(`Unexpected endpoint property type: ${typeof e}`);
      }
    };
  });
var Uc,
  wu = s(() => {
    fv();
    Uc = (e, t) =>
      Object.entries(e).reduce((r, [o, n]) => ({ ...r, [o]: bu(n, t) }), {});
  });
var pv,
  uv = s(() => {
    ct();
    ps();
    pv = (e, t) => {
      let r = gr(e, "Endpoint URL", t);
      if (typeof r == "string")
        try {
          return new URL(r);
        } catch (o) {
          throw (console.error(`Failed to construct URL with ${r}`, o), o);
        }
      throw new re(`Endpoint URL must be a string, got ${typeof r}`);
    };
  });
var lv,
  hv = s(() => {
    fs();
    $c();
    dv();
    wu();
    uv();
    lv = (e, t) => {
      let { conditions: r, endpoint: o } = e,
        { result: n, referenceRecord: i } = zo(r, t);
      if (!n) return;
      let a = { ...t, referenceRecord: { ...t.referenceRecord, ...i } },
        { url: c, properties: m, headers: f } = o;
      return (
        t.logger?.debug?.(`${tr} Resolving endpoint from template: ${at(o)}`),
        {
          ...(f != null && { headers: mv(f, a) }),
          ...(m != null && { properties: Uc(m, a) }),
          url: pv(c, a),
        }
      );
    };
  });
var gv,
  yv = s(() => {
    ct();
    $c();
    ps();
    gv = (e, t) => {
      let { conditions: r, error: o } = e,
        { result: n, referenceRecord: i } = zo(r, t);
      if (n)
        throw new re(
          gr(o, "Error", {
            ...t,
            referenceRecord: { ...t.referenceRecord, ...i },
          })
        );
    };
  });
var xv,
  Ev = s(() => {
    $c();
    Tu();
    xv = (e, t) => {
      let { conditions: r, rules: o } = e,
        { result: n, referenceRecord: i } = zo(r, t);
      if (n)
        return Bc(o, { ...t, referenceRecord: { ...t.referenceRecord, ...i } });
    };
  });
var Bc,
  Tu = s(() => {
    ct();
    hv();
    yv();
    Ev();
    Bc = (e, t) => {
      for (let r of e)
        if (r.type === "endpoint") {
          let o = lv(r, t);
          if (o) return o;
        } else if (r.type === "error") gv(r, t);
        else if (r.type === "tree") {
          let o = xv(r, t);
          if (o) return o;
        } else throw new re(`Unknown endpoint rule: ${r}`);
      throw new re("Rules evaluation failed");
    };
  });
var Sv = s(() => {
  Fc();
  Tu();
});
var Ut,
  Cv = s(() => {
    fs();
    ct();
    Sv();
    Ut = (e, t) => {
      let { endpointParams: r, logger: o } = t,
        { parameters: n, rules: i } = e;
      t.logger?.debug?.(`${tr} Initial EndpointParams: ${at(r)}`);
      let a = Object.entries(n)
        .filter(([, f]) => f.default != null)
        .map(([f, u]) => [f, u.default]);
      if (a.length > 0) for (let [f, u] of a) r[f] = r[f] ?? u;
      let c = Object.entries(n)
        .filter(([, f]) => f.required)
        .map(([f]) => f);
      for (let f of c)
        if (r[f] == null) throw new re(`Missing required parameter: '${f}'`);
      let m = Bc(i, { endpointParams: r, logger: o, referenceRecord: {} });
      return t.logger?.debug?.(`${tr} Resolved endpoint: ${at(m)}`), m;
    };
  });
var $e = s(() => {
  x_();
  lu();
  hu();
  Fc();
  Cv();
  ct();
});
var Au = s(() => {
  $e();
});
var _u,
  bv = s(() => {
    $e();
    Au();
    _u = (e, t = !1) => {
      if (t) {
        for (let r of e.split(".")) if (!_u(r)) return !1;
        return !0;
      }
      return !(
        !Jr(e) ||
        e.length < 3 ||
        e.length > 63 ||
        e !== e.toLowerCase() ||
        hr(e)
      );
    };
  });
var wv,
  mK,
  Tv,
  Av = s(() => {
    (wv = ":"),
      (mK = "/"),
      (Tv = (e) => {
        let t = e.split(wv);
        if (t.length < 6) return null;
        let [r, o, n, i, a, ...c] = t;
        if (r !== "arn" || o === "" || n === "" || c.join(wv) === "")
          return null;
        let m = c.map((f) => f.split(mK)).flat();
        return {
          partition: o,
          service: n,
          region: i,
          accountId: a,
          resourceId: m,
        };
      });
  });
var Rv,
  _v = s(() => {
    Rv = {
      partitions: [
        {
          id: "aws",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-east-1",
            name: "aws",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
          regions: {
            "af-south-1": { description: "Africa (Cape Town)" },
            "ap-east-1": { description: "Asia Pacific (Hong Kong)" },
            "ap-east-2": { description: "Asia Pacific (Taipei)" },
            "ap-northeast-1": { description: "Asia Pacific (Tokyo)" },
            "ap-northeast-2": { description: "Asia Pacific (Seoul)" },
            "ap-northeast-3": { description: "Asia Pacific (Osaka)" },
            "ap-south-1": { description: "Asia Pacific (Mumbai)" },
            "ap-south-2": { description: "Asia Pacific (Hyderabad)" },
            "ap-southeast-1": { description: "Asia Pacific (Singapore)" },
            "ap-southeast-2": { description: "Asia Pacific (Sydney)" },
            "ap-southeast-3": { description: "Asia Pacific (Jakarta)" },
            "ap-southeast-4": { description: "Asia Pacific (Melbourne)" },
            "ap-southeast-5": { description: "Asia Pacific (Malaysia)" },
            "ap-southeast-7": { description: "Asia Pacific (Thailand)" },
            "aws-global": { description: "AWS Standard global region" },
            "ca-central-1": { description: "Canada (Central)" },
            "ca-west-1": { description: "Canada West (Calgary)" },
            "eu-central-1": { description: "Europe (Frankfurt)" },
            "eu-central-2": { description: "Europe (Zurich)" },
            "eu-north-1": { description: "Europe (Stockholm)" },
            "eu-south-1": { description: "Europe (Milan)" },
            "eu-south-2": { description: "Europe (Spain)" },
            "eu-west-1": { description: "Europe (Ireland)" },
            "eu-west-2": { description: "Europe (London)" },
            "eu-west-3": { description: "Europe (Paris)" },
            "il-central-1": { description: "Israel (Tel Aviv)" },
            "me-central-1": { description: "Middle East (UAE)" },
            "me-south-1": { description: "Middle East (Bahrain)" },
            "mx-central-1": { description: "Mexico (Central)" },
            "sa-east-1": { description: "South America (Sao Paulo)" },
            "us-east-1": { description: "US East (N. Virginia)" },
            "us-east-2": { description: "US East (Ohio)" },
            "us-west-1": { description: "US West (N. California)" },
            "us-west-2": { description: "US West (Oregon)" },
          },
        },
        {
          id: "aws-cn",
          outputs: {
            dnsSuffix: "amazonaws.com.cn",
            dualStackDnsSuffix: "api.amazonwebservices.com.cn",
            implicitGlobalRegion: "cn-northwest-1",
            name: "aws-cn",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^cn\\-\\w+\\-\\d+$",
          regions: {
            "aws-cn-global": { description: "AWS China global region" },
            "cn-north-1": { description: "China (Beijing)" },
            "cn-northwest-1": { description: "China (Ningxia)" },
          },
        },
        {
          id: "aws-us-gov",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-gov-west-1",
            name: "aws-us-gov",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
          regions: {
            "aws-us-gov-global": {
              description: "AWS GovCloud (US) global region",
            },
            "us-gov-east-1": { description: "AWS GovCloud (US-East)" },
            "us-gov-west-1": { description: "AWS GovCloud (US-West)" },
          },
        },
        {
          id: "aws-iso",
          outputs: {
            dnsSuffix: "c2s.ic.gov",
            dualStackDnsSuffix: "c2s.ic.gov",
            implicitGlobalRegion: "us-iso-east-1",
            name: "aws-iso",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-global": { description: "AWS ISO (US) global region" },
            "us-iso-east-1": { description: "US ISO East" },
            "us-iso-west-1": { description: "US ISO WEST" },
          },
        },
        {
          id: "aws-iso-b",
          outputs: {
            dnsSuffix: "sc2s.sgov.gov",
            dualStackDnsSuffix: "sc2s.sgov.gov",
            implicitGlobalRegion: "us-isob-east-1",
            name: "aws-iso-b",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-b-global": { description: "AWS ISOB (US) global region" },
            "us-isob-east-1": { description: "US ISOB East (Ohio)" },
          },
        },
        {
          id: "aws-iso-e",
          outputs: {
            dnsSuffix: "cloud.adc-e.uk",
            dualStackDnsSuffix: "cloud.adc-e.uk",
            implicitGlobalRegion: "eu-isoe-west-1",
            name: "aws-iso-e",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-e-global": {
              description: "AWS ISOE (Europe) global region",
            },
            "eu-isoe-west-1": { description: "EU ISOE West" },
          },
        },
        {
          id: "aws-iso-f",
          outputs: {
            dnsSuffix: "csp.hci.ic.gov",
            dualStackDnsSuffix: "csp.hci.ic.gov",
            implicitGlobalRegion: "us-isof-south-1",
            name: "aws-iso-f",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-f-global": { description: "AWS ISOF global region" },
            "us-isof-east-1": { description: "US ISOF EAST" },
            "us-isof-south-1": { description: "US ISOF SOUTH" },
          },
        },
        {
          id: "aws-eusc",
          outputs: {
            dnsSuffix: "amazonaws.eu",
            dualStackDnsSuffix: "amazonaws.eu",
            implicitGlobalRegion: "eusc-de-east-1",
            name: "aws-eusc",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
          regions: { "eusc-de-east-1": { description: "EU (Germany)" } },
        },
      ],
      version: "1.1",
    };
  });
var fK,
  pK,
  vv,
  Iv,
  Ru = s(() => {
    _v();
    (fK = Rv),
      (pK = ""),
      (vv = (e) => {
        let { partitions: t } = fK;
        for (let o of t) {
          let { regions: n, outputs: i } = o;
          for (let [a, c] of Object.entries(n))
            if (a === e) return { ...i, ...c };
        }
        for (let o of t) {
          let { regionRegex: n, outputs: i } = o;
          if (new RegExp(n).test(e)) return { ...i };
        }
        let r = t.find((o) => o.id === "aws");
        if (!r)
          throw new Error(
            "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
          );
        return { ...r.outputs };
      }),
      (Iv = () => pK);
  });
var us,
  Pv = s(() => {
    $e();
    bv();
    Av();
    Ru();
    us = { isVirtualHostableS3Bucket: _u, parseArn: Tv, partition: vv };
    Le.aws = us;
  });
var Nv = s(() => {
  $e();
});
var Ov = s(() => {
  $e();
});
var Dv = s(() => {});
var Fv = s(() => {});
var Mv = s(() => {});
var kv = s(() => {});
var Lv = s(() => {});
var $v = s(() => {
  Ov();
  Dv();
  Fv();
  Mv();
  kv();
  Lv();
});
var Hc = s(() => {
  Pv();
  Ru();
  Au();
  Nv();
  $v();
});
var Uv,
  yr,
  Bv = s(() => {
    (Uv = { warningEmitted: !1 }),
      (yr = (e) => {
        e &&
          !Uv.warningEmitted &&
          parseInt(e.substring(1, e.indexOf("."))) < 18 &&
          ((Uv.warningEmitted = !0),
          process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`));
      });
  });
function Z(e, t, r) {
  return e.$source || (e.$source = {}), (e.$source[t] = r), e;
}
var Hv = s(() => {});
function me(e, t, r) {
  e.__aws_sdk_context
    ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {})
    : (e.__aws_sdk_context = { features: {} }),
    (e.__aws_sdk_context.features[t] = r);
}
var zv = s(() => {});
var Ue = s(() => {
  Bv();
  Hv();
  zv();
});
var Vv = s(() => {});
var jv = s(() => {
  Vv();
});
var Gv = s(() => {});
var Wv,
  qv = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(Wv || (Wv = {}));
  });
var Kv,
  Yv = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(Kv || (Kv = {}));
  });
var Xv = s(() => {});
var Jv = s(() => {});
var Qv = s(() => {});
var Zv = s(() => {});
var eI = s(() => {
  qv();
  Yv();
  Xv();
  Jv();
  Qv();
  Zv();
});
var tI = s(() => {});
var rI = s(() => {});
var oI = s(() => {});
var nI = s(() => {});
var sI = s(() => {});
var iI = s(() => {});
var aI = s(() => {});
var cI = s(() => {
  sI();
  iI();
  aI();
});
var mI = s(() => {});
var dI = s(() => {});
var fI,
  pI = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(fI || (fI = {}));
  });
var uI = s(() => {});
var lI = s(() => {});
var hI = s(() => {});
var gI = s(() => {});
var yI = s(() => {});
var xI = s(() => {
  uI();
  lI();
  hI();
  gI();
  yI();
});
var EI = s(() => {});
var zc,
  vu = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(zc || (zc = {}));
  });
var SI = s(() => {
  vu();
});
var CI = s(() => {});
var bI = s(() => {
  SI();
  CI();
  vu();
});
var wI = s(() => {});
var Iu,
  TI = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(Iu || (Iu = {}));
  });
var AI = s(() => {});
var _I = s(() => {});
var RI = s(() => {});
var vI = s(() => {});
var II = s(() => {});
var PI = s(() => {
  _I();
  RI();
  vI();
  II();
});
var NI = s(() => {});
var OI = s(() => {});
var DI = s(() => {});
var FI,
  MI = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(FI || (FI = {}));
  });
var kI = s(() => {});
var LI = s(() => {});
var $I = s(() => {});
var UI = s(() => {});
var BI = s(() => {});
var HI = s(() => {});
var zI = s(() => {});
var VI = s(() => {});
var jI = s(() => {});
var GI = s(() => {});
var WI = s(() => {});
var qI,
  KI = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(qI || (qI = {}));
  });
var YI = s(() => {});
var XI = s(() => {});
var JI = s(() => {});
var QI = s(() => {});
var ZI = s(() => {});
var e0 = s(() => {});
var t0 = s(() => {});
var Vc = s(() => {
  Gv();
  eI();
  tI();
  rI();
  oI();
  nI();
  cI();
  mI();
  dI();
  pI();
  xI();
  EI();
  bI();
  wI();
  TI();
  AI();
  PI();
  NI();
  OI();
  DI();
  MI();
  kI();
  LI();
  $I();
  UI();
  BI();
  HI();
  zI();
  VI();
  jI();
  GI();
  WI();
  KI();
  YI();
  XI();
  JI();
  QI();
  ZI();
  e0();
  t0();
});
var r0 = s(() => {
  Vc();
});
var o0 = s(() => {});
var n0 = s(() => {});
function uK(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var jc,
  s0 = s(() => {
    jc = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = uK(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var Gc,
  i0 = s(() => {
    Gc = class {
      constructor(t) {
        (this.statusCode = t.statusCode),
          (this.reason = t.reason),
          (this.headers = t.headers || {}),
          (this.body = t.body);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return typeof r.statusCode == "number" && typeof r.headers == "object";
      }
    };
  });
var a0 = s(() => {});
var c0 = s(() => {});
var Pu = s(() => {
  jv();
  r0();
  o0();
  n0();
  s0();
  i0();
  a0();
  c0();
});
var Nu,
  m0 = s(() => {
    Pu();
    Nu = (e) =>
      Gc.isInstance(e) ? (e.headers?.date ?? e.headers?.Date) : void 0;
  });
var Wc,
  Ou = s(() => {
    Wc = (e) => new Date(Date.now() + e);
  });
var d0,
  f0 = s(() => {
    Ou();
    d0 = (e, t) => Math.abs(Wc(t).getTime() - e) >= 3e5;
  });
var Du,
  p0 = s(() => {
    f0();
    Du = (e, t) => {
      let r = Date.parse(e);
      return d0(r, t) ? r - Date.now() : t;
    };
  });
var u0 = s(() => {
  m0();
  Ou();
  p0();
});
var ls,
  l0,
  rt,
  h0 = s(() => {
    Pu();
    u0();
    (ls = (e, t) => {
      if (!t)
        throw new Error(
          `Property \`${e}\` is not resolved for AWS SDK SigV4Auth`
        );
      return t;
    }),
      (l0 = async (e) => {
        let t = ls("context", e.context),
          r = ls("config", e.config),
          o = t.endpointV2?.properties?.authSchemes?.[0],
          i = await ls("signer", r.signer)(o),
          a = e?.signingRegion,
          c = e?.signingRegionSet,
          m = e?.signingName;
        return {
          config: r,
          signer: i,
          signingRegion: a,
          signingRegionSet: c,
          signingName: m,
        };
      }),
      (rt = class {
        async sign(t, r, o) {
          if (!jc.isInstance(t))
            throw new Error(
              "The request is not an instance of `HttpRequest` and cannot be signed"
            );
          let n = await l0(o),
            { config: i, signer: a } = n,
            { signingRegion: c, signingName: m } = n,
            f = o.context;
          if (f?.authSchemes?.length ?? !1) {
            let [p, h] = f.authSchemes;
            p?.name === "sigv4a" &&
              h?.name === "sigv4" &&
              ((c = h?.signingRegion ?? c), (m = h?.signingName ?? m));
          }
          return await a.sign(t, {
            signingDate: Wc(i.systemClockOffset),
            signingRegion: c,
            signingService: m,
          });
        }
        errorHandler(t) {
          return (r) => {
            let o = r.ServerTime ?? Nu(r.$response);
            if (o) {
              let n = ls("config", t.config),
                i = n.systemClockOffset;
              (n.systemClockOffset = Du(o, n.systemClockOffset)),
                n.systemClockOffset !== i &&
                  r.$metadata &&
                  (r.$metadata.clockSkewCorrected = !0);
            }
            throw r;
          };
        }
        successHandler(t, r) {
          let o = Nu(t);
          if (o) {
            let n = ls("config", r.config);
            n.systemClockOffset = Du(o, n.systemClockOffset);
          }
        }
      });
  });
var Fu,
  g0 = s(() => {
    Fu = (e) =>
      typeof e == "string" && e.length > 0
        ? e.split(",").map((t) => t.trim())
        : [];
  });
var y0,
  Mu = s(() => {
    y0 = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
  });
var x0,
  E0,
  xr,
  S0 = s(() => {
    g0();
    Mu();
    (x0 = "AWS_AUTH_SCHEME_PREFERENCE"),
      (E0 = "auth_scheme_preference"),
      (xr = {
        environmentVariableSelector: (e, t) => {
          if (t?.signingName && y0(t.signingName) in e)
            return ["httpBearerAuth"];
          if (x0 in e) return Fu(e[x0]);
        },
        configFileSelector: (e) => {
          if (E0 in e) return Fu(e[E0]);
        },
        default: [],
      });
  });
var Ie,
  hs = s(() => {
    Ie = class e extends Error {
      constructor(t, r = !0) {
        let o,
          n = !0;
        typeof r == "boolean"
          ? ((o = void 0), (n = r))
          : r != null &&
            typeof r == "object" &&
            ((o = r.logger), (n = r.tryNextLink ?? !0)),
          super(t),
          (this.name = "ProviderError"),
          (this.tryNextLink = n),
          Object.setPrototypeOf(this, e.prototype),
          o?.debug?.(`@smithy/property-provider ${n ? "->" : "(!)"} ${t}`);
      }
      static from(t, r = !0) {
        return Object.assign(new this(t.message, r), t);
      }
    };
  });
var D,
  C0 = s(() => {
    hs();
    D = class e extends Ie {
      constructor(t, r = !0) {
        super(t, r),
          (this.name = "CredentialsProviderError"),
          Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var Be,
  b0 = s(() => {
    hs();
    Be = class e extends Ie {
      constructor(t, r = !0) {
        super(t, r),
          (this.name = "TokenProviderError"),
          Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var bt,
  w0 = s(() => {
    hs();
    bt =
      (...e) =>
      async () => {
        if (e.length === 0) throw new Ie("No providers in chain");
        let t;
        for (let r of e)
          try {
            return await r();
          } catch (o) {
            if (((t = o), o?.tryNextLink)) continue;
            throw o;
          }
        throw t;
      };
  });
var qc,
  T0 = s(() => {
    qc = (e) => () => Promise.resolve(e);
  });
var wt,
  A0 = s(() => {
    wt = (e, t, r) => {
      let o,
        n,
        i,
        a = !1,
        c = async () => {
          n || (n = e());
          try {
            (o = await n), (i = !0), (a = !1);
          } finally {
            n = void 0;
          }
          return o;
        };
      return t === void 0
        ? async (m) => ((!i || m?.forceRefresh) && (o = await c()), o)
        : async (m) => (
            (!i || m?.forceRefresh) && (o = await c()),
            a ? o : r && !r(o) ? ((a = !0), o) : (t(o) && (await c()), o)
          );
    };
  });
var K = s(() => {
  C0();
  hs();
  b0();
  w0();
  T0();
  A0();
});
var _0 = s(() => {
  Q();
  K();
});
import { Buffer as R0 } from "buffer";
var v0,
  ku = s(() => {
    st();
    v0 = (e, t) => {
      if (typeof e != "string")
        throw new TypeError(
          `The "input" argument must be of type string. Received type ${typeof e} (${e})`
        );
      return t ? R0.from(e, t) : R0.from(e);
    };
  });
var gs,
  Lu = s(() => {
    ku();
    gs = (e) => {
      let t = v0(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var rr,
  I0 = s(() => {
    Lu();
    rr = (e) =>
      typeof e == "string"
        ? gs(e)
        : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
  });
var P0 = s(() => {
  ku();
});
var Vo = s(() => {
  Lu();
  I0();
  P0();
});
var N0,
  O0,
  $u,
  D0,
  F0,
  Uu,
  Bu,
  Hu,
  zu,
  lK,
  M0,
  k0,
  ys,
  L0,
  $0,
  U0,
  B0,
  Kc,
  H0,
  z0,
  V0,
  Vu,
  j0,
  Er = s(() => {
    (N0 = "X-Amz-Algorithm"),
      (O0 = "X-Amz-Credential"),
      ($u = "X-Amz-Date"),
      (D0 = "X-Amz-SignedHeaders"),
      (F0 = "X-Amz-Expires"),
      (Uu = "X-Amz-Signature"),
      (Bu = "X-Amz-Security-Token"),
      (Hu = "authorization"),
      (zu = $u.toLowerCase()),
      (lK = "date"),
      (M0 = [Hu, zu, lK]),
      (k0 = Uu.toLowerCase()),
      (ys = "x-amz-content-sha256"),
      (L0 = Bu.toLowerCase()),
      ($0 = {
        authorization: !0,
        "cache-control": !0,
        connection: !0,
        expect: !0,
        from: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        pragma: !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        "user-agent": !0,
        "x-amzn-trace-id": !0,
      }),
      (U0 = /^proxy-/),
      (B0 = /^sec-/),
      (Kc = "AWS4-HMAC-SHA256"),
      (H0 = "AWS4-HMAC-SHA256-PAYLOAD"),
      (z0 = "UNSIGNED-PAYLOAD"),
      (V0 = 50),
      (Vu = "aws4_request"),
      (j0 = 60 * 60 * 24 * 7);
  });
var Yc,
  ju,
  Xc,
  W0,
  G0,
  Gu = s(() => {
    Dt();
    Vo();
    Er();
    (Yc = {}),
      (ju = []),
      (Xc = (e, t, r) => `${e}/${t}/${r}/${Vu}`),
      (W0 = async (e, t, r, o, n) => {
        let i = await G0(e, t.secretAccessKey, t.accessKeyId),
          a = `${r}:${o}:${n}:${ae(i)}:${t.sessionToken}`;
        if (a in Yc) return Yc[a];
        for (ju.push(a); ju.length > V0; ) delete Yc[ju.shift()];
        let c = `AWS4${t.secretAccessKey}`;
        for (let m of [r, o, n, Vu]) c = await G0(e, c, m);
        return (Yc[a] = c);
      }),
      (G0 = (e, t, r) => {
        let o = new e(t);
        return o.update(rr(r)), o.digest();
      });
  });
var Jc,
  Wu = s(() => {
    Er();
    Jc = ({ headers: e }, t, r) => {
      let o = {};
      for (let n of Object.keys(e).sort()) {
        if (e[n] == null) continue;
        let i = n.toLowerCase();
        ((i in $0 || t?.has(i) || U0.test(i) || B0.test(i)) &&
          (!r || (r && !r.has(i)))) ||
          (o[i] = e[n].trim().replace(/\s+/g, " "));
      }
      return o;
    };
  });
var xs,
  qu = s(() => {
    st();
    Dt();
    Vo();
    Er();
    xs = async ({ headers: e, body: t }, r) => {
      for (let o of Object.keys(e)) if (o.toLowerCase() === ys) return e[o];
      if (t == null)
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      if (typeof t == "string" || ArrayBuffer.isView(t) || ge(t)) {
        let o = new r();
        return o.update(rr(t)), ae(await o.digest());
      }
      return z0;
    };
  });
function K0(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
var Qc,
  q0,
  hK,
  Ku,
  Y0 = s(() => {
    Dt();
    Vo();
    Qc = class {
      format(t) {
        let r = [];
        for (let i of Object.keys(t)) {
          let a = gs(i);
          r.push(
            Uint8Array.from([a.byteLength]),
            a,
            this.formatHeaderValue(t[i])
          );
        }
        let o = new Uint8Array(r.reduce((i, a) => i + a.byteLength, 0)),
          n = 0;
        for (let i of r) o.set(i, n), (n += i.byteLength);
        return o;
      }
      formatHeaderValue(t) {
        switch (t.type) {
          case "boolean":
            return Uint8Array.from([t.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, t.value]);
          case "short":
            let r = new DataView(new ArrayBuffer(3));
            return (
              r.setUint8(0, 3),
              r.setInt16(1, t.value, !1),
              new Uint8Array(r.buffer)
            );
          case "integer":
            let o = new DataView(new ArrayBuffer(5));
            return (
              o.setUint8(0, 4),
              o.setInt32(1, t.value, !1),
              new Uint8Array(o.buffer)
            );
          case "long":
            let n = new Uint8Array(9);
            return (n[0] = 5), n.set(t.value.bytes, 1), n;
          case "binary":
            let i = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            i.setUint8(0, 6), i.setUint16(1, t.value.byteLength, !1);
            let a = new Uint8Array(i.buffer);
            return a.set(t.value, 3), a;
          case "string":
            let c = gs(t.value),
              m = new DataView(new ArrayBuffer(3 + c.byteLength));
            m.setUint8(0, 7), m.setUint16(1, c.byteLength, !1);
            let f = new Uint8Array(m.buffer);
            return f.set(c, 3), f;
          case "timestamp":
            let u = new Uint8Array(9);
            return (
              (u[0] = 8), u.set(Ku.fromNumber(t.value.valueOf()).bytes, 1), u
            );
          case "uuid":
            if (!hK.test(t.value))
              throw new Error(`Invalid UUID received: ${t.value}`);
            let p = new Uint8Array(17);
            return (p[0] = 9), p.set(Tc(t.value.replace(/\-/g, "")), 1), p;
        }
      }
    };
    (function (e) {
      (e[(e.boolTrue = 0)] = "boolTrue"),
        (e[(e.boolFalse = 1)] = "boolFalse"),
        (e[(e.byte = 2)] = "byte"),
        (e[(e.short = 3)] = "short"),
        (e[(e.integer = 4)] = "integer"),
        (e[(e.long = 5)] = "long"),
        (e[(e.byteArray = 6)] = "byteArray"),
        (e[(e.string = 7)] = "string"),
        (e[(e.timestamp = 8)] = "timestamp"),
        (e[(e.uuid = 9)] = "uuid");
    })(q0 || (q0 = {}));
    (hK = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/),
      (Ku = class e {
        constructor(t) {
          if (((this.bytes = t), t.byteLength !== 8))
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
        static fromNumber(t) {
          if (t > 9223372036854776e3 || t < -9223372036854776e3)
            throw new Error(
              `${t} is too large (or, if negative, too small) to represent as an Int64`
            );
          let r = new Uint8Array(8);
          for (
            let o = 7, n = Math.abs(Math.round(t));
            o > -1 && n > 0;
            o--, n /= 256
          )
            r[o] = n;
          return t < 0 && K0(r), new e(r);
        }
        valueOf() {
          let t = this.bytes.slice(0),
            r = t[0] & 128;
          return r && K0(t), parseInt(ae(t), 16) * (r ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      });
  });
var Yu,
  Xu = s(() => {
    Yu = (e, t) => {
      e = e.toLowerCase();
      for (let r of Object.keys(t)) if (e === r.toLowerCase()) return !0;
      return !1;
    };
  });
var X0 = s(() => {});
var J0 = s(() => {
  X0();
});
var Q0 = s(() => {});
var Z0,
  eP = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(Z0 || (Z0 = {}));
  });
var tP,
  rP = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(tP || (tP = {}));
  });
var oP = s(() => {});
var nP = s(() => {});
var sP = s(() => {});
var iP = s(() => {});
var aP = s(() => {
  eP();
  rP();
  oP();
  nP();
  sP();
  iP();
});
var cP = s(() => {});
var mP = s(() => {});
var dP = s(() => {});
var fP = s(() => {});
var pP = s(() => {});
var uP = s(() => {});
var lP = s(() => {});
var hP = s(() => {
  pP();
  uP();
  lP();
});
var gP = s(() => {});
var yP = s(() => {});
var xP,
  EP = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(xP || (xP = {}));
  });
var SP = s(() => {});
var CP = s(() => {});
var bP = s(() => {});
var wP = s(() => {});
var TP = s(() => {});
var AP = s(() => {
  SP();
  CP();
  bP();
  wP();
  TP();
});
var _P = s(() => {});
var Ju,
  Qu = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(Ju || (Ju = {}));
  });
var RP = s(() => {
  Qu();
});
var vP = s(() => {});
var IP = s(() => {
  RP();
  vP();
  Qu();
});
var PP = s(() => {});
var Zu,
  NP = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(Zu || (Zu = {}));
  });
var OP = s(() => {});
var DP = s(() => {});
var FP = s(() => {});
var MP = s(() => {});
var kP = s(() => {});
var LP = s(() => {
  DP();
  FP();
  MP();
  kP();
});
var $P = s(() => {});
var UP = s(() => {});
var BP = s(() => {});
var HP,
  zP = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(HP || (HP = {}));
  });
var VP = s(() => {});
var jP = s(() => {});
var GP = s(() => {});
var WP = s(() => {});
var qP = s(() => {});
var KP = s(() => {});
var YP = s(() => {});
var XP = s(() => {});
var JP = s(() => {});
var QP = s(() => {});
var ZP = s(() => {});
var eN,
  tN = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(eN || (eN = {}));
  });
var rN = s(() => {});
var oN = s(() => {});
var nN = s(() => {});
var sN = s(() => {});
var iN = s(() => {});
var aN = s(() => {});
var cN = s(() => {});
var mN = s(() => {
  Q0();
  aP();
  cP();
  mP();
  dP();
  fP();
  hP();
  gP();
  yP();
  EP();
  AP();
  _P();
  IP();
  PP();
  NP();
  OP();
  LP();
  $P();
  UP();
  BP();
  zP();
  VP();
  jP();
  GP();
  WP();
  qP();
  KP();
  YP();
  XP();
  JP();
  QP();
  ZP();
  tN();
  rN();
  oN();
  nN();
  sN();
  iN();
  aN();
  cN();
});
var dN = s(() => {
  mN();
});
var fN = s(() => {});
var pN = s(() => {});
function gK(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var jo,
  uN = s(() => {
    jo = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = gK(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var lN = s(() => {});
var hN = s(() => {});
var gN = s(() => {});
var el = s(() => {
  J0();
  dN();
  fN();
  pN();
  uN();
  lN();
  hN();
  gN();
});
var tl,
  rl = s(() => {
    el();
    tl = (e, t = {}) => {
      let { headers: r, query: o = {} } = jo.clone(e);
      for (let n of Object.keys(r)) {
        let i = n.toLowerCase();
        ((i.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(i)) ||
          t.hoistableHeaders?.has(i)) &&
          ((o[n] = r[n]), delete r[n]);
      }
      return { ...e, headers: r, query: o };
    };
  });
var Zc,
  ol = s(() => {
    el();
    Er();
    Zc = (e) => {
      e = jo.clone(e);
      for (let t of Object.keys(e.headers))
        M0.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
      return e;
    };
  });
var Qr,
  yK,
  nl = s(() => {
    (Qr = (e) => encodeURIComponent(e).replace(/[!'()*]/g, yK)),
      (yK = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  });
var yN = s(() => {
  nl();
});
var sl = s(() => {
  nl();
  yN();
});
var il,
  al = s(() => {
    sl();
    Er();
    il = ({ query: e = {} }) => {
      let t = [],
        r = {};
      for (let o of Object.keys(e)) {
        if (o.toLowerCase() === k0) continue;
        let n = Qr(o);
        t.push(n);
        let i = e[o];
        typeof i == "string"
          ? (r[n] = `${n}=${Qr(i)}`)
          : Array.isArray(i) &&
            (r[n] = i
              .slice(0)
              .reduce((a, c) => a.concat([`${n}=${Qr(c)}`]), [])
              .sort()
              .join("&"));
      }
      return t
        .sort()
        .map((o) => r[o])
        .filter((o) => o)
        .join("&");
    };
  });
var xN,
  xK,
  EN = s(() => {
    (xN = (e) =>
      xK(e)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z")),
      (xK = (e) =>
        typeof e == "number"
          ? new Date(e * 1e3)
          : typeof e == "string"
            ? Number(e)
              ? new Date(Number(e) * 1e3)
              : new Date(e)
            : e);
  });
var Es,
  cl = s(() => {
    Dt();
    he();
    sl();
    Vo();
    al();
    EN();
    Es = class {
      constructor({
        applyChecksum: t,
        credentials: r,
        region: o,
        service: n,
        sha256: i,
        uriEscapePath: a = !0,
      }) {
        (this.service = n),
          (this.sha256 = i),
          (this.uriEscapePath = a),
          (this.applyChecksum = typeof t == "boolean" ? t : !0),
          (this.regionProvider = Y(o)),
          (this.credentialProvider = Y(r));
      }
      createCanonicalRequest(t, r, o) {
        let n = Object.keys(r).sort();
        return `${t.method}
${this.getCanonicalPath(t)}
${il(t)}
${n.map((i) => `${i}:${r[i]}`).join(`
`)}

${n.join(";")}
${o}`;
      }
      async createStringToSign(t, r, o, n) {
        let i = new this.sha256();
        i.update(rr(o));
        let a = await i.digest();
        return `${n}
${t}
${r}
${ae(a)}`;
      }
      getCanonicalPath({ path: t }) {
        if (this.uriEscapePath) {
          let r = [];
          for (let i of t.split("/"))
            i?.length !== 0 && i !== "." && (i === ".." ? r.pop() : r.push(i));
          let o = `${t?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && t?.endsWith("/") ? "/" : ""}`;
          return Qr(o).replace(/%2F/g, "/");
        }
        return t;
      }
      validateResolvedCredentials(t) {
        if (
          typeof t != "object" ||
          typeof t.accessKeyId != "string" ||
          typeof t.secretAccessKey != "string"
        )
          throw new Error("Resolved credential object is not valid");
      }
      formatDate(t) {
        let r = xN(t).replace(/[\-:]/g, "");
        return { longDate: r, shortDate: r.slice(0, 8) };
      }
      getCanonicalHeaderList(t) {
        return Object.keys(t).sort().join(";");
      }
    };
  });
var Ss,
  SN = s(() => {
    Dt();
    Vo();
    Er();
    Gu();
    Wu();
    qu();
    Y0();
    Xu();
    rl();
    ol();
    cl();
    Ss = class extends Es {
      constructor({
        applyChecksum: t,
        credentials: r,
        region: o,
        service: n,
        sha256: i,
        uriEscapePath: a = !0,
      }) {
        super({
          applyChecksum: t,
          credentials: r,
          region: o,
          service: n,
          sha256: i,
          uriEscapePath: a,
        }),
          (this.headerFormatter = new Qc());
      }
      async presign(t, r = {}) {
        let {
            signingDate: o = new Date(),
            expiresIn: n = 3600,
            unsignableHeaders: i,
            unhoistableHeaders: a,
            signableHeaders: c,
            hoistableHeaders: m,
            signingRegion: f,
            signingService: u,
          } = r,
          p = await this.credentialProvider();
        this.validateResolvedCredentials(p);
        let h = f ?? (await this.regionProvider()),
          { longDate: g, shortDate: x } = this.formatDate(o);
        if (n > j0)
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
          );
        let _ = Xc(x, h, u ?? this.service),
          T = tl(Zc(t), { unhoistableHeaders: a, hoistableHeaders: m });
        p.sessionToken && (T.query[Bu] = p.sessionToken),
          (T.query[N0] = Kc),
          (T.query[O0] = `${p.accessKeyId}/${_}`),
          (T.query[$u] = g),
          (T.query[F0] = n.toString(10));
        let R = Jc(T, i, c);
        return (
          (T.query[D0] = this.getCanonicalHeaderList(R)),
          (T.query[Uu] = await this.getSignature(
            g,
            _,
            this.getSigningKey(p, h, x, u),
            this.createCanonicalRequest(T, R, await xs(t, this.sha256))
          )),
          T
        );
      }
      async sign(t, r) {
        return typeof t == "string"
          ? this.signString(t, r)
          : t.headers && t.payload
            ? this.signEvent(t, r)
            : t.message
              ? this.signMessage(t, r)
              : this.signRequest(t, r);
      }
      async signEvent(
        { headers: t, payload: r },
        {
          signingDate: o = new Date(),
          priorSignature: n,
          signingRegion: i,
          signingService: a,
        }
      ) {
        let c = i ?? (await this.regionProvider()),
          { shortDate: m, longDate: f } = this.formatDate(o),
          u = Xc(m, c, a ?? this.service),
          p = await xs({ headers: {}, body: r }, this.sha256),
          h = new this.sha256();
        h.update(t);
        let g = ae(await h.digest()),
          x = [H0, f, u, n, g, p].join(`
`);
        return this.signString(x, {
          signingDate: o,
          signingRegion: c,
          signingService: a,
        });
      }
      async signMessage(
        t,
        { signingDate: r = new Date(), signingRegion: o, signingService: n }
      ) {
        return this.signEvent(
          {
            headers: this.headerFormatter.format(t.message.headers),
            payload: t.message.body,
          },
          {
            signingDate: r,
            signingRegion: o,
            signingService: n,
            priorSignature: t.priorSignature,
          }
        ).then((a) => ({ message: t.message, signature: a }));
      }
      async signString(
        t,
        {
          signingDate: r = new Date(),
          signingRegion: o,
          signingService: n,
        } = {}
      ) {
        let i = await this.credentialProvider();
        this.validateResolvedCredentials(i);
        let a = o ?? (await this.regionProvider()),
          { shortDate: c } = this.formatDate(r),
          m = new this.sha256(await this.getSigningKey(i, a, c, n));
        return m.update(rr(t)), ae(await m.digest());
      }
      async signRequest(
        t,
        {
          signingDate: r = new Date(),
          signableHeaders: o,
          unsignableHeaders: n,
          signingRegion: i,
          signingService: a,
        } = {}
      ) {
        let c = await this.credentialProvider();
        this.validateResolvedCredentials(c);
        let m = i ?? (await this.regionProvider()),
          f = Zc(t),
          { longDate: u, shortDate: p } = this.formatDate(r),
          h = Xc(p, m, a ?? this.service);
        (f.headers[zu] = u), c.sessionToken && (f.headers[L0] = c.sessionToken);
        let g = await xs(f, this.sha256);
        !Yu(ys, f.headers) && this.applyChecksum && (f.headers[ys] = g);
        let x = Jc(f, n, o),
          _ = await this.getSignature(
            u,
            h,
            this.getSigningKey(c, m, p, a),
            this.createCanonicalRequest(f, x, g)
          );
        return (
          (f.headers[Hu] =
            `${Kc} Credential=${c.accessKeyId}/${h}, SignedHeaders=${this.getCanonicalHeaderList(x)}, Signature=${_}`),
          f
        );
      }
      async getSignature(t, r, o, n) {
        let i = await this.createStringToSign(t, r, n, Kc),
          a = new this.sha256(await o);
        return a.update(rr(i)), ae(await a.digest());
      }
      getSigningKey(t, r, o, n) {
        return W0(this.sha256, t, o, r, n || this.service);
      }
    };
  });
var CN = s(() => {});
var bN = s(() => {
  SN();
  Er();
  Wu();
  al();
  qu();
  rl();
  ol();
  Gu();
  cl();
  Xu();
  CN();
});
function EK(e, { credentials: t, credentialDefaultProvider: r }) {
  let o;
  return (
    t
      ? t?.memoized
        ? (o = t)
        : (o = l_(t, u_, pu))
      : r
        ? (o = Ot(r(Object.assign({}, e, { parentClientConfig: e }))))
        : (o = async () => {
            throw new Error(
              "@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured."
            );
          }),
    (o.memoized = !0),
    o
  );
}
function SK(e, t) {
  if (t.configBound) return t;
  let r = async (o) => t({ ...o, callerClientConfig: e });
  return (r.memoized = t.memoized), (r.configBound = !0), r;
}
var Sr,
  wN = s(() => {
    Ue();
    Q();
    bN();
    Sr = (e) => {
      let t = e.credentials,
        r = !!e.credentials,
        o;
      Object.defineProperty(e, "credentials", {
        set(f) {
          f && f !== t && f !== o && (r = !0), (t = f);
          let u = EK(e, {
              credentials: t,
              credentialDefaultProvider: e.credentialDefaultProvider,
            }),
            p = SK(e, u);
          r && !p.attributed
            ? ((o = async (h) =>
                p(h).then((g) => Z(g, "CREDENTIALS_CODE", "e"))),
              (o.memoized = p.memoized),
              (o.configBound = p.configBound),
              (o.attributed = !0))
            : (o = p);
        },
        get() {
          return o;
        },
        enumerable: !0,
        configurable: !0,
      }),
        (e.credentials = t);
      let {
          signingEscapePath: n = !0,
          systemClockOffset: i = e.systemClockOffset || 0,
          sha256: a,
        } = e,
        c;
      return (
        e.signer
          ? (c = Ot(e.signer))
          : e.regionInfoProvider
            ? (c = () =>
                Ot(e.region)()
                  .then(async (f) => [
                    (await e.regionInfoProvider(f, {
                      useFipsEndpoint: await e.useFipsEndpoint(),
                      useDualstackEndpoint: await e.useDualstackEndpoint(),
                    })) || {},
                    f,
                  ])
                  .then(([f, u]) => {
                    let { signingRegion: p, signingService: h } = f;
                    (e.signingRegion = e.signingRegion || p || u),
                      (e.signingName = e.signingName || h || e.serviceId);
                    let g = {
                        ...e,
                        credentials: e.credentials,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: a,
                        uriEscapePath: n,
                      },
                      x = e.signerConstructor || Ss;
                    return new x(g);
                  }))
            : (c = async (f) => {
                f = Object.assign(
                  {},
                  {
                    name: "sigv4",
                    signingName: e.signingName || e.defaultSigningName,
                    signingRegion: await Ot(e.region)(),
                    properties: {},
                  },
                  f
                );
                let u = f.signingRegion,
                  p = f.signingName;
                (e.signingRegion = e.signingRegion || u),
                  (e.signingName = e.signingName || p || e.serviceId);
                let h = {
                    ...e,
                    credentials: e.credentials,
                    region: e.signingRegion,
                    service: e.signingName,
                    sha256: a,
                    uriEscapePath: n,
                  },
                  g = e.signerConstructor || Ss;
                return new g(h);
              }),
        Object.assign(e, {
          systemClockOffset: i,
          signingEscapePath: n,
          signer: c,
        })
      );
    };
  });
var TN = s(() => {
  h0();
  S0();
  _0();
  wN();
});
var AN = s(() => {
  TN();
  Mu();
});
var _N = s(() => {});
var ITe,
  RN = s(() => {
    ITe = typeof TextEncoder == "function" ? new TextEncoder() : null;
  });
var Cs = s(() => {
  RN();
});
var bs = s(() => {
  st();
});
var vN = s(() => {
  bs();
});
var ml = s(() => {
  bs();
});
var IN = s(() => {
  ml();
});
var PN = s(() => {
  bs();
});
var dl = s(() => {
  ml();
  IN();
  PN();
});
var NN = s(() => {
  bs();
  dl();
});
var fl = s(() => {
  vN();
  NN();
});
var ON = s(() => {});
var pl = s(() => {
  ON();
});
var DN = s(() => {
  pl();
});
var FN = s(() => {
  Ee();
});
var MN = s(() => {
  pl();
  Vc();
});
var kN = s(() => {});
var LN = s(() => {});
var ul = s(() => {});
var $N = s(() => {
  ul();
});
var UN = s(() => {});
var BN = s(() => {});
var HN = s(() => {
  Ee();
});
var zN = s(() => {
  Vc();
});
var VN = s(() => {});
var jN = s(() => {
  zN();
  VN();
});
var GN = s(() => {
  jN();
});
var WN = s(() => {});
var em,
  qN = s(() => {
    em = (e) => {
      let t = "#text";
      for (let r in e)
        e.hasOwnProperty(r) && e[r][t] !== void 0
          ? (e[r] = e[r][t])
          : typeof e[r] == "object" && e[r] !== null && (e[r] = em(e[r]));
      return e;
    };
  });
var KN = s(() => {});
var YN = s(() => {});
var XN = s(() => {});
var JN = s(() => {
  Ee();
});
var QN = s(() => {});
var ZN = s(() => {});
var Go = s(() => {
  DN();
  FN();
  MN();
  kN();
  LN();
  $N();
  UN();
  BN();
  ul();
  HN();
  GN();
  WN();
  qN();
  KN();
  YN();
  XN();
  JN();
  QN();
  ZN();
  it();
});
var tm,
  ll = s(() => {
    Go();
    tm = (e, t) => ee(e, t).then((r) => t.utf8Encoder(r));
  });
var B,
  Wo,
  qo,
  eO = s(() => {
    ll();
    (B = (e, t) =>
      tm(e, t).then((r) => {
        if (r.length)
          try {
            return JSON.parse(r);
          } catch (o) {
            throw (
              (o?.name === "SyntaxError" &&
                Object.defineProperty(o, "$responseBodyText", { value: r }),
              o)
            );
          }
        return {};
      })),
      (Wo = async (e, t) => {
        let r = await B(e, t);
        return (r.message = r.message ?? r.Message), r;
      }),
      (qo = (e, t) => {
        let r = (i, a) =>
            Object.keys(i).find((c) => c.toLowerCase() === a.toLowerCase()),
          o = (i) => {
            let a = i;
            return (
              typeof a == "number" && (a = a.toString()),
              a.indexOf(",") >= 0 && (a = a.split(",")[0]),
              a.indexOf(":") >= 0 && (a = a.split(":")[0]),
              a.indexOf("#") >= 0 && (a = a.split("#")[1]),
              a
            );
          },
          n = r(e.headers, "x-amzn-errortype");
        if (n !== void 0) return o(e.headers[n]);
        if (t && typeof t == "object") {
          let i = r(t, "code");
          if (i && t[i] !== void 0) return o(t[i]);
          if (t.__type !== void 0) return o(t.__type);
        }
      });
  });
var tO = s(() => {
  Ae();
  it();
  fl();
});
var rO = s(() => {
  Ae();
  it();
  it();
});
var oO = s(() => {});
var nO = s(() => {
  Ee();
  Ae();
  Cs();
});
var sO = s(() => {});
var iO = s(() => {});
var aO = s(() => {
  Ee();
  Ae();
  Cs();
});
var cO = s(() => {
  Go();
});
var rm = nt((or) => {
  "use strict";
  var mO =
      ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    PK = mO + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    dO = "[" + mO + "][" + PK + "]*",
    NK = new RegExp("^" + dO + "$"),
    OK = function (e, t) {
      let r = [],
        o = t.exec(e);
      for (; o; ) {
        let n = [];
        n.startIndex = t.lastIndex - o[0].length;
        let i = o.length;
        for (let a = 0; a < i; a++) n.push(o[a]);
        r.push(n), (o = t.exec(e));
      }
      return r;
    },
    DK = function (e) {
      let t = NK.exec(e);
      return !(t === null || typeof t > "u");
    };
  or.isExist = function (e) {
    return typeof e < "u";
  };
  or.isEmptyObject = function (e) {
    return Object.keys(e).length === 0;
  };
  or.merge = function (e, t, r) {
    if (t) {
      let o = Object.keys(t),
        n = o.length;
      for (let i = 0; i < n; i++)
        r === "strict" ? (e[o[i]] = [t[o[i]]]) : (e[o[i]] = t[o[i]]);
    }
  };
  or.getValue = function (e) {
    return or.isExist(e) ? e : "";
  };
  or.isName = DK;
  or.getAllMatches = OK;
  or.nameRegexp = dO;
});
var yl = nt((hO) => {
  "use strict";
  var gl = rm(),
    FK = { allowBooleanAttributes: !1, unpairedTags: [] };
  hO.validate = function (e, t) {
    t = Object.assign({}, FK, t);
    let r = [],
      o = !1,
      n = !1;
    e[0] === "\uFEFF" && (e = e.substr(1));
    for (let i = 0; i < e.length; i++)
      if (e[i] === "<" && e[i + 1] === "?") {
        if (((i += 2), (i = pO(e, i)), i.err)) return i;
      } else if (e[i] === "<") {
        let a = i;
        if ((i++, e[i] === "!")) {
          i = uO(e, i);
          continue;
        } else {
          let c = !1;
          e[i] === "/" && ((c = !0), i++);
          let m = "";
          for (
            ;
            i < e.length &&
            e[i] !== ">" &&
            e[i] !== " " &&
            e[i] !== "	" &&
            e[i] !==
              `
` &&
            e[i] !== "\r";
            i++
          )
            m += e[i];
          if (
            ((m = m.trim()),
            m[m.length - 1] === "/" &&
              ((m = m.substring(0, m.length - 1)), i--),
            !zK(m))
          ) {
            let p;
            return (
              m.trim().length === 0
                ? (p = "Invalid space after '<'.")
                : (p = "Tag '" + m + "' is an invalid name."),
              ue("InvalidTag", p, He(e, i))
            );
          }
          let f = LK(e, i);
          if (f === !1)
            return ue(
              "InvalidAttr",
              "Attributes for '" + m + "' have open quote.",
              He(e, i)
            );
          let u = f.value;
          if (((i = f.index), u[u.length - 1] === "/")) {
            let p = i - u.length;
            u = u.substring(0, u.length - 1);
            let h = lO(u, t);
            if (h === !0) o = !0;
            else return ue(h.err.code, h.err.msg, He(e, p + h.err.line));
          } else if (c)
            if (f.tagClosed) {
              if (u.trim().length > 0)
                return ue(
                  "InvalidTag",
                  "Closing tag '" +
                    m +
                    "' can't have attributes or invalid starting.",
                  He(e, a)
                );
              if (r.length === 0)
                return ue(
                  "InvalidTag",
                  "Closing tag '" + m + "' has not been opened.",
                  He(e, a)
                );
              {
                let p = r.pop();
                if (m !== p.tagName) {
                  let h = He(e, p.tagStartPos);
                  return ue(
                    "InvalidTag",
                    "Expected closing tag '" +
                      p.tagName +
                      "' (opened in line " +
                      h.line +
                      ", col " +
                      h.col +
                      ") instead of closing tag '" +
                      m +
                      "'.",
                    He(e, a)
                  );
                }
                r.length == 0 && (n = !0);
              }
            } else
              return ue(
                "InvalidTag",
                "Closing tag '" + m + "' doesn't have proper closing.",
                He(e, i)
              );
          else {
            let p = lO(u, t);
            if (p !== !0)
              return ue(
                p.err.code,
                p.err.msg,
                He(e, i - u.length + p.err.line)
              );
            if (n === !0)
              return ue(
                "InvalidXml",
                "Multiple possible root nodes found.",
                He(e, i)
              );
            t.unpairedTags.indexOf(m) !== -1 ||
              r.push({ tagName: m, tagStartPos: a }),
              (o = !0);
          }
          for (i++; i < e.length; i++)
            if (e[i] === "<")
              if (e[i + 1] === "!") {
                i++, (i = uO(e, i));
                continue;
              } else if (e[i + 1] === "?") {
                if (((i = pO(e, ++i)), i.err)) return i;
              } else break;
            else if (e[i] === "&") {
              let p = BK(e, i);
              if (p == -1)
                return ue("InvalidChar", "char '&' is not expected.", He(e, i));
              i = p;
            } else if (n === !0 && !fO(e[i]))
              return ue("InvalidXml", "Extra text at the end", He(e, i));
          e[i] === "<" && i--;
        }
      } else {
        if (fO(e[i])) continue;
        return ue(
          "InvalidChar",
          "char '" + e[i] + "' is not expected.",
          He(e, i)
        );
      }
    if (o) {
      if (r.length == 1)
        return ue(
          "InvalidTag",
          "Unclosed tag '" + r[0].tagName + "'.",
          He(e, r[0].tagStartPos)
        );
      if (r.length > 0)
        return ue(
          "InvalidXml",
          "Invalid '" +
            JSON.stringify(
              r.map((i) => i.tagName),
              null,
              4
            ).replace(/\r?\n/g, "") +
            "' found.",
          { line: 1, col: 1 }
        );
    } else return ue("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function fO(e) {
    return (
      e === " " ||
      e === "	" ||
      e ===
        `
` ||
      e === "\r"
    );
  }
  function pO(e, t) {
    let r = t;
    for (; t < e.length; t++)
      if (e[t] == "?" || e[t] == " ") {
        let o = e.substr(r, t - r);
        if (t > 5 && o === "xml")
          return ue(
            "InvalidXml",
            "XML declaration allowed only at the start of the document.",
            He(e, t)
          );
        if (e[t] == "?" && e[t + 1] == ">") {
          t++;
          break;
        } else continue;
      }
    return t;
  }
  function uO(e, t) {
    if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
      for (t += 3; t < e.length; t++)
        if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
          t += 2;
          break;
        }
    } else if (
      e.length > t + 8 &&
      e[t + 1] === "D" &&
      e[t + 2] === "O" &&
      e[t + 3] === "C" &&
      e[t + 4] === "T" &&
      e[t + 5] === "Y" &&
      e[t + 6] === "P" &&
      e[t + 7] === "E"
    ) {
      let r = 1;
      for (t += 8; t < e.length; t++)
        if (e[t] === "<") r++;
        else if (e[t] === ">" && (r--, r === 0)) break;
    } else if (
      e.length > t + 9 &&
      e[t + 1] === "[" &&
      e[t + 2] === "C" &&
      e[t + 3] === "D" &&
      e[t + 4] === "A" &&
      e[t + 5] === "T" &&
      e[t + 6] === "A" &&
      e[t + 7] === "["
    ) {
      for (t += 8; t < e.length; t++)
        if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
          t += 2;
          break;
        }
    }
    return t;
  }
  var MK = '"',
    kK = "'";
  function LK(e, t) {
    let r = "",
      o = "",
      n = !1;
    for (; t < e.length; t++) {
      if (e[t] === MK || e[t] === kK)
        o === "" ? (o = e[t]) : o !== e[t] || (o = "");
      else if (e[t] === ">" && o === "") {
        n = !0;
        break;
      }
      r += e[t];
    }
    return o !== "" ? !1 : { value: r, index: t, tagClosed: n };
  }
  var $K = new RegExp(
    `(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,
    "g"
  );
  function lO(e, t) {
    let r = gl.getAllMatches(e, $K),
      o = {};
    for (let n = 0; n < r.length; n++) {
      if (r[n][1].length === 0)
        return ue(
          "InvalidAttr",
          "Attribute '" + r[n][2] + "' has no space in starting.",
          ws(r[n])
        );
      if (r[n][3] !== void 0 && r[n][4] === void 0)
        return ue(
          "InvalidAttr",
          "Attribute '" + r[n][2] + "' is without value.",
          ws(r[n])
        );
      if (r[n][3] === void 0 && !t.allowBooleanAttributes)
        return ue(
          "InvalidAttr",
          "boolean attribute '" + r[n][2] + "' is not allowed.",
          ws(r[n])
        );
      let i = r[n][2];
      if (!HK(i))
        return ue(
          "InvalidAttr",
          "Attribute '" + i + "' is an invalid name.",
          ws(r[n])
        );
      if (!o.hasOwnProperty(i)) o[i] = 1;
      else
        return ue(
          "InvalidAttr",
          "Attribute '" + i + "' is repeated.",
          ws(r[n])
        );
    }
    return !0;
  }
  function UK(e, t) {
    let r = /\d/;
    for (e[t] === "x" && (t++, (r = /[\da-fA-F]/)); t < e.length; t++) {
      if (e[t] === ";") return t;
      if (!e[t].match(r)) break;
    }
    return -1;
  }
  function BK(e, t) {
    if ((t++, e[t] === ";")) return -1;
    if (e[t] === "#") return t++, UK(e, t);
    let r = 0;
    for (; t < e.length; t++, r++)
      if (!(e[t].match(/\w/) && r < 20)) {
        if (e[t] === ";") break;
        return -1;
      }
    return t;
  }
  function ue(e, t, r) {
    return { err: { code: e, msg: t, line: r.line || r, col: r.col } };
  }
  function HK(e) {
    return gl.isName(e);
  }
  function zK(e) {
    return gl.isName(e);
  }
  function He(e, t) {
    let r = e.substring(0, t).split(/\r?\n/);
    return { line: r.length, col: r[r.length - 1].length + 1 };
  }
  function ws(e) {
    return e.startIndex + e[1].length;
  }
});
var yO = nt((xl) => {
  var gO = {
      preserveOrder: !1,
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
      tagValueProcessor: function (e, t) {
        return t;
      },
      attributeValueProcessor: function (e, t) {
        return t;
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
      updateTag: function (e, t, r) {
        return e;
      },
    },
    VK = function (e) {
      return Object.assign({}, gO, e);
    };
  xl.buildOptions = VK;
  xl.defaultOptions = gO;
});
var EO = nt((L_e, xO) => {
  "use strict";
  var El = class {
    constructor(t) {
      (this.tagname = t), (this.child = []), (this[":@"] = {});
    }
    add(t, r) {
      t === "__proto__" && (t = "#__proto__"), this.child.push({ [t]: r });
    }
    addChild(t) {
      t.tagname === "__proto__" && (t.tagname = "#__proto__"),
        t[":@"] && Object.keys(t[":@"]).length > 0
          ? this.child.push({ [t.tagname]: t.child, ":@": t[":@"] })
          : this.child.push({ [t.tagname]: t.child });
    }
  };
  xO.exports = El;
});
var CO = nt(($_e, SO) => {
  var jK = rm();
  function GK(e, t) {
    let r = {};
    if (
      e[t + 3] === "O" &&
      e[t + 4] === "C" &&
      e[t + 5] === "T" &&
      e[t + 6] === "Y" &&
      e[t + 7] === "P" &&
      e[t + 8] === "E"
    ) {
      t = t + 9;
      let o = 1,
        n = !1,
        i = !1,
        a = "";
      for (; t < e.length; t++)
        if (e[t] === "<" && !i) {
          if (n && KK(e, t))
            (t += 7),
              ([entityName, val, t] = WK(e, t + 1)),
              val.indexOf("&") === -1 &&
                (r[QK(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val,
                });
          else if (n && YK(e, t)) t += 8;
          else if (n && XK(e, t)) t += 8;
          else if (n && JK(e, t)) t += 9;
          else if (qK) i = !0;
          else throw new Error("Invalid DOCTYPE");
          o++, (a = "");
        } else if (e[t] === ">") {
          if (
            (i ? e[t - 1] === "-" && e[t - 2] === "-" && ((i = !1), o--) : o--,
            o === 0)
          )
            break;
        } else e[t] === "[" ? (n = !0) : (a += e[t]);
      if (o !== 0) throw new Error("Unclosed DOCTYPE");
    } else throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: r, i: t };
  }
  function WK(e, t) {
    let r = "";
    for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++) r += e[t];
    if (((r = r.trim()), r.indexOf(" ") !== -1))
      throw new Error("External entites are not supported");
    let o = e[t++],
      n = "";
    for (; t < e.length && e[t] !== o; t++) n += e[t];
    return [r, n, t];
  }
  function qK(e, t) {
    return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-";
  }
  function KK(e, t) {
    return (
      e[t + 1] === "!" &&
      e[t + 2] === "E" &&
      e[t + 3] === "N" &&
      e[t + 4] === "T" &&
      e[t + 5] === "I" &&
      e[t + 6] === "T" &&
      e[t + 7] === "Y"
    );
  }
  function YK(e, t) {
    return (
      e[t + 1] === "!" &&
      e[t + 2] === "E" &&
      e[t + 3] === "L" &&
      e[t + 4] === "E" &&
      e[t + 5] === "M" &&
      e[t + 6] === "E" &&
      e[t + 7] === "N" &&
      e[t + 8] === "T"
    );
  }
  function XK(e, t) {
    return (
      e[t + 1] === "!" &&
      e[t + 2] === "A" &&
      e[t + 3] === "T" &&
      e[t + 4] === "T" &&
      e[t + 5] === "L" &&
      e[t + 6] === "I" &&
      e[t + 7] === "S" &&
      e[t + 8] === "T"
    );
  }
  function JK(e, t) {
    return (
      e[t + 1] === "!" &&
      e[t + 2] === "N" &&
      e[t + 3] === "O" &&
      e[t + 4] === "T" &&
      e[t + 5] === "A" &&
      e[t + 6] === "T" &&
      e[t + 7] === "I" &&
      e[t + 8] === "O" &&
      e[t + 9] === "N"
    );
  }
  function QK(e) {
    if (jK.isName(e)) return e;
    throw new Error(`Invalid entity name ${e}`);
  }
  SO.exports = GK;
});
var wO = nt((U_e, bO) => {
  var ZK = /^[-+]?0x[a-fA-F0-9]+$/,
    e9 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
    t9 = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  function r9(e, t = {}) {
    if (((t = Object.assign({}, t9, t)), !e || typeof e != "string")) return e;
    let r = e.trim();
    if (t.skipLike !== void 0 && t.skipLike.test(r)) return e;
    if (e === "0") return 0;
    if (t.hex && ZK.test(r)) return n9(r, 16);
    if (r.search(/[eE]/) !== -1) {
      let o = r.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
      if (o) {
        if (t.leadingZeros) r = (o[1] || "") + o[3];
        else if (!(o[2] === "0" && o[3][0] === ".")) return e;
        return t.eNotation ? Number(r) : e;
      } else return e;
    } else {
      let o = e9.exec(r);
      if (o) {
        let n = o[1],
          i = o[2],
          a = o9(o[3]);
        if (!t.leadingZeros && i.length > 0 && n && r[2] !== ".") return e;
        if (!t.leadingZeros && i.length > 0 && !n && r[1] !== ".") return e;
        if (t.leadingZeros && i === e) return 0;
        {
          let c = Number(r),
            m = "" + c;
          return m.search(/[eE]/) !== -1
            ? t.eNotation
              ? c
              : e
            : r.indexOf(".") !== -1
              ? (m === "0" && a === "") || m === a || (n && m === "-" + a)
                ? c
                : e
              : i
                ? a === m || n + a === m
                  ? c
                  : e
                : r === m || r === n + m
                  ? c
                  : e;
        }
      } else return e;
    }
  }
  function o9(e) {
    return (
      e &&
        e.indexOf(".") !== -1 &&
        ((e = e.replace(/0+$/, "")),
        e === "."
          ? (e = "0")
          : e[0] === "."
            ? (e = "0" + e)
            : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))),
      e
    );
  }
  function n9(e, t) {
    if (parseInt) return parseInt(e, t);
    if (Number.parseInt) return Number.parseInt(e, t);
    if (window && window.parseInt) return window.parseInt(e, t);
    throw new Error(
      "parseInt, Number.parseInt, window.parseInt are not supported"
    );
  }
  bO.exports = r9;
});
var _O = nt((B_e, AO) => {
  "use strict";
  var TO = rm(),
    Ts = EO(),
    s9 = CO(),
    i9 = wO(),
    Sl = class {
      constructor(t) {
        (this.options = t),
          (this.currentNode = null),
          (this.tagsNodeStack = []),
          (this.docTypeEntities = {}),
          (this.lastEntities = {
            apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
            gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
            lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
            quot: { regex: /&(quot|#34|#x22);/g, val: '"' },
          }),
          (this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }),
          (this.htmlEntities = {
            space: { regex: /&(nbsp|#160);/g, val: " " },
            cent: { regex: /&(cent|#162);/g, val: "\xA2" },
            pound: { regex: /&(pound|#163);/g, val: "\xA3" },
            yen: { regex: /&(yen|#165);/g, val: "\xA5" },
            euro: { regex: /&(euro|#8364);/g, val: "\u20AC" },
            copyright: { regex: /&(copy|#169);/g, val: "\xA9" },
            reg: { regex: /&(reg|#174);/g, val: "\xAE" },
            inr: { regex: /&(inr|#8377);/g, val: "\u20B9" },
            num_dec: {
              regex: /&#([0-9]{1,7});/g,
              val: (r, o) => String.fromCharCode(Number.parseInt(o, 10)),
            },
            num_hex: {
              regex: /&#x([0-9a-fA-F]{1,6});/g,
              val: (r, o) => String.fromCharCode(Number.parseInt(o, 16)),
            },
          }),
          (this.addExternalEntities = a9),
          (this.parseXml = p9),
          (this.parseTextData = c9),
          (this.resolveNameSpace = m9),
          (this.buildAttributesMap = f9),
          (this.isItStopNode = g9),
          (this.replaceEntitiesValue = l9),
          (this.readStopNodeData = x9),
          (this.saveTextToParentTag = h9),
          (this.addChild = u9);
      }
    };
  function a9(e) {
    let t = Object.keys(e);
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      this.lastEntities[o] = {
        regex: new RegExp("&" + o + ";", "g"),
        val: e[o],
      };
    }
  }
  function c9(e, t, r, o, n, i, a) {
    if (
      e !== void 0 &&
      (this.options.trimValues && !o && (e = e.trim()), e.length > 0)
    ) {
      a || (e = this.replaceEntitiesValue(e));
      let c = this.options.tagValueProcessor(t, e, r, n, i);
      return c == null
        ? e
        : typeof c != typeof e || c !== e
          ? c
          : this.options.trimValues
            ? bl(e, this.options.parseTagValue, this.options.numberParseOptions)
            : e.trim() === e
              ? bl(
                  e,
                  this.options.parseTagValue,
                  this.options.numberParseOptions
                )
              : e;
    }
  }
  function m9(e) {
    if (this.options.removeNSPrefix) {
      let t = e.split(":"),
        r = e.charAt(0) === "/" ? "/" : "";
      if (t[0] === "xmlns") return "";
      t.length === 2 && (e = r + t[1]);
    }
    return e;
  }
  var d9 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function f9(e, t, r) {
    if (!this.options.ignoreAttributes && typeof e == "string") {
      let o = TO.getAllMatches(e, d9),
        n = o.length,
        i = {};
      for (let a = 0; a < n; a++) {
        let c = this.resolveNameSpace(o[a][1]),
          m = o[a][4],
          f = this.options.attributeNamePrefix + c;
        if (c.length)
          if (
            (this.options.transformAttributeName &&
              (f = this.options.transformAttributeName(f)),
            f === "__proto__" && (f = "#__proto__"),
            m !== void 0)
          ) {
            this.options.trimValues && (m = m.trim()),
              (m = this.replaceEntitiesValue(m));
            let u = this.options.attributeValueProcessor(c, m, t);
            u == null
              ? (i[f] = m)
              : typeof u != typeof m || u !== m
                ? (i[f] = u)
                : (i[f] = bl(
                    m,
                    this.options.parseAttributeValue,
                    this.options.numberParseOptions
                  ));
          } else this.options.allowBooleanAttributes && (i[f] = !0);
      }
      if (!Object.keys(i).length) return;
      if (this.options.attributesGroupName) {
        let a = {};
        return (a[this.options.attributesGroupName] = i), a;
      }
      return i;
    }
  }
  var p9 = function (e) {
    e = e.replace(
      /\r\n?/g,
      `
`
    );
    let t = new Ts("!xml"),
      r = t,
      o = "",
      n = "";
    for (let i = 0; i < e.length; i++)
      if (e[i] === "<")
        if (e[i + 1] === "/") {
          let c = Zr(e, ">", i, "Closing Tag is not closed."),
            m = e.substring(i + 2, c).trim();
          if (this.options.removeNSPrefix) {
            let p = m.indexOf(":");
            p !== -1 && (m = m.substr(p + 1));
          }
          this.options.transformTagName &&
            (m = this.options.transformTagName(m)),
            r && (o = this.saveTextToParentTag(o, r, n));
          let f = n.substring(n.lastIndexOf(".") + 1);
          if (m && this.options.unpairedTags.indexOf(m) !== -1)
            throw new Error(
              `Unpaired tag can not be used as closing tag: </${m}>`
            );
          let u = 0;
          f && this.options.unpairedTags.indexOf(f) !== -1
            ? ((u = n.lastIndexOf(".", n.lastIndexOf(".") - 1)),
              this.tagsNodeStack.pop())
            : (u = n.lastIndexOf(".")),
            (n = n.substring(0, u)),
            (r = this.tagsNodeStack.pop()),
            (o = ""),
            (i = c);
        } else if (e[i + 1] === "?") {
          let c = Cl(e, i, !1, "?>");
          if (!c) throw new Error("Pi Tag is not closed.");
          if (
            ((o = this.saveTextToParentTag(o, r, n)),
            !(
              (this.options.ignoreDeclaration && c.tagName === "?xml") ||
              this.options.ignorePiTags
            ))
          ) {
            let m = new Ts(c.tagName);
            m.add(this.options.textNodeName, ""),
              c.tagName !== c.tagExp &&
                c.attrExpPresent &&
                (m[":@"] = this.buildAttributesMap(c.tagExp, n, c.tagName)),
              this.addChild(r, m, n);
          }
          i = c.closeIndex + 1;
        } else if (e.substr(i + 1, 3) === "!--") {
          let c = Zr(e, "-->", i + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            let m = e.substring(i + 4, c - 2);
            (o = this.saveTextToParentTag(o, r, n)),
              r.add(this.options.commentPropName, [
                { [this.options.textNodeName]: m },
              ]);
          }
          i = c;
        } else if (e.substr(i + 1, 2) === "!D") {
          let c = s9(e, i);
          (this.docTypeEntities = c.entities), (i = c.i);
        } else if (e.substr(i + 1, 2) === "![") {
          let c = Zr(e, "]]>", i, "CDATA is not closed.") - 2,
            m = e.substring(i + 9, c);
          o = this.saveTextToParentTag(o, r, n);
          let f = this.parseTextData(m, r.tagname, n, !0, !1, !0, !0);
          f == null && (f = ""),
            this.options.cdataPropName
              ? r.add(this.options.cdataPropName, [
                  { [this.options.textNodeName]: m },
                ])
              : r.add(this.options.textNodeName, f),
            (i = c + 2);
        } else {
          let c = Cl(e, i, this.options.removeNSPrefix),
            m = c.tagName,
            f = c.rawTagName,
            u = c.tagExp,
            p = c.attrExpPresent,
            h = c.closeIndex;
          this.options.transformTagName &&
            (m = this.options.transformTagName(m)),
            r &&
              o &&
              r.tagname !== "!xml" &&
              (o = this.saveTextToParentTag(o, r, n, !1));
          let g = r;
          if (
            (g &&
              this.options.unpairedTags.indexOf(g.tagname) !== -1 &&
              ((r = this.tagsNodeStack.pop()),
              (n = n.substring(0, n.lastIndexOf(".")))),
            m !== t.tagname && (n += n ? "." + m : m),
            this.isItStopNode(this.options.stopNodes, n, m))
          ) {
            let x = "";
            if (u.length > 0 && u.lastIndexOf("/") === u.length - 1)
              m[m.length - 1] === "/"
                ? ((m = m.substr(0, m.length - 1)),
                  (n = n.substr(0, n.length - 1)),
                  (u = m))
                : (u = u.substr(0, u.length - 1)),
                (i = c.closeIndex);
            else if (this.options.unpairedTags.indexOf(m) !== -1)
              i = c.closeIndex;
            else {
              let T = this.readStopNodeData(e, f, h + 1);
              if (!T) throw new Error(`Unexpected end of ${f}`);
              (i = T.i), (x = T.tagContent);
            }
            let _ = new Ts(m);
            m !== u && p && (_[":@"] = this.buildAttributesMap(u, n, m)),
              x && (x = this.parseTextData(x, m, n, !0, p, !0, !0)),
              (n = n.substr(0, n.lastIndexOf("."))),
              _.add(this.options.textNodeName, x),
              this.addChild(r, _, n);
          } else {
            if (u.length > 0 && u.lastIndexOf("/") === u.length - 1) {
              m[m.length - 1] === "/"
                ? ((m = m.substr(0, m.length - 1)),
                  (n = n.substr(0, n.length - 1)),
                  (u = m))
                : (u = u.substr(0, u.length - 1)),
                this.options.transformTagName &&
                  (m = this.options.transformTagName(m));
              let x = new Ts(m);
              m !== u && p && (x[":@"] = this.buildAttributesMap(u, n, m)),
                this.addChild(r, x, n),
                (n = n.substr(0, n.lastIndexOf(".")));
            } else {
              let x = new Ts(m);
              this.tagsNodeStack.push(r),
                m !== u && p && (x[":@"] = this.buildAttributesMap(u, n, m)),
                this.addChild(r, x, n),
                (r = x);
            }
            (o = ""), (i = h);
          }
        }
      else o += e[i];
    return t.child;
  };
  function u9(e, t, r) {
    let o = this.options.updateTag(t.tagname, r, t[":@"]);
    o === !1 || (typeof o == "string" && (t.tagname = o), e.addChild(t));
  }
  var l9 = function (e) {
    if (this.options.processEntities) {
      for (let t in this.docTypeEntities) {
        let r = this.docTypeEntities[t];
        e = e.replace(r.regx, r.val);
      }
      for (let t in this.lastEntities) {
        let r = this.lastEntities[t];
        e = e.replace(r.regex, r.val);
      }
      if (this.options.htmlEntities)
        for (let t in this.htmlEntities) {
          let r = this.htmlEntities[t];
          e = e.replace(r.regex, r.val);
        }
      e = e.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return e;
  };
  function h9(e, t, r, o) {
    return (
      e &&
        (o === void 0 && (o = Object.keys(t.child).length === 0),
        (e = this.parseTextData(
          e,
          t.tagname,
          r,
          !1,
          t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1,
          o
        )),
        e !== void 0 && e !== "" && t.add(this.options.textNodeName, e),
        (e = "")),
      e
    );
  }
  function g9(e, t, r) {
    let o = "*." + r;
    for (let n in e) {
      let i = e[n];
      if (o === i || t === i) return !0;
    }
    return !1;
  }
  function y9(e, t, r = ">") {
    let o,
      n = "";
    for (let i = t; i < e.length; i++) {
      let a = e[i];
      if (o) a === o && (o = "");
      else if (a === '"' || a === "'") o = a;
      else if (a === r[0])
        if (r[1]) {
          if (e[i + 1] === r[1]) return { data: n, index: i };
        } else return { data: n, index: i };
      else a === "	" && (a = " ");
      n += a;
    }
  }
  function Zr(e, t, r, o) {
    let n = e.indexOf(t, r);
    if (n === -1) throw new Error(o);
    return n + t.length - 1;
  }
  function Cl(e, t, r, o = ">") {
    let n = y9(e, t + 1, o);
    if (!n) return;
    let i = n.data,
      a = n.index,
      c = i.search(/\s/),
      m = i,
      f = !0;
    c !== -1 && ((m = i.substring(0, c)), (i = i.substring(c + 1).trimStart()));
    let u = m;
    if (r) {
      let p = m.indexOf(":");
      p !== -1 && ((m = m.substr(p + 1)), (f = m !== n.data.substr(p + 1)));
    }
    return {
      tagName: m,
      tagExp: i,
      closeIndex: a,
      attrExpPresent: f,
      rawTagName: u,
    };
  }
  function x9(e, t, r) {
    let o = r,
      n = 1;
    for (; r < e.length; r++)
      if (e[r] === "<")
        if (e[r + 1] === "/") {
          let i = Zr(e, ">", r, `${t} is not closed`);
          if (e.substring(r + 2, i).trim() === t && (n--, n === 0))
            return { tagContent: e.substring(o, r), i };
          r = i;
        } else if (e[r + 1] === "?")
          r = Zr(e, "?>", r + 1, "StopNode is not closed.");
        else if (e.substr(r + 1, 3) === "!--")
          r = Zr(e, "-->", r + 3, "StopNode is not closed.");
        else if (e.substr(r + 1, 2) === "![")
          r = Zr(e, "]]>", r, "StopNode is not closed.") - 2;
        else {
          let i = Cl(e, r, ">");
          i &&
            ((i && i.tagName) === t &&
              i.tagExp[i.tagExp.length - 1] !== "/" &&
              n++,
            (r = i.closeIndex));
        }
  }
  function bl(e, t, r) {
    if (t && typeof e == "string") {
      let o = e.trim();
      return o === "true" ? !0 : o === "false" ? !1 : i9(e, r);
    } else return TO.isExist(e) ? e : "";
  }
  AO.exports = Sl;
});
var IO = nt((vO) => {
  "use strict";
  function E9(e, t) {
    return RO(e, t);
  }
  function RO(e, t, r) {
    let o,
      n = {};
    for (let i = 0; i < e.length; i++) {
      let a = e[i],
        c = S9(a),
        m = "";
      if ((r === void 0 ? (m = c) : (m = r + "." + c), c === t.textNodeName))
        o === void 0 ? (o = a[c]) : (o += "" + a[c]);
      else {
        if (c === void 0) continue;
        if (a[c]) {
          let f = RO(a[c], t, m),
            u = b9(f, t);
          a[":@"]
            ? C9(f, a[":@"], m, t)
            : Object.keys(f).length === 1 &&
                f[t.textNodeName] !== void 0 &&
                !t.alwaysCreateTextNode
              ? (f = f[t.textNodeName])
              : Object.keys(f).length === 0 &&
                (t.alwaysCreateTextNode ? (f[t.textNodeName] = "") : (f = "")),
            n[c] !== void 0 && n.hasOwnProperty(c)
              ? (Array.isArray(n[c]) || (n[c] = [n[c]]), n[c].push(f))
              : t.isArray(c, m, u)
                ? (n[c] = [f])
                : (n[c] = f);
        }
      }
    }
    return (
      typeof o == "string"
        ? o.length > 0 && (n[t.textNodeName] = o)
        : o !== void 0 && (n[t.textNodeName] = o),
      n
    );
  }
  function S9(e) {
    let t = Object.keys(e);
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (o !== ":@") return o;
    }
  }
  function C9(e, t, r, o) {
    if (t) {
      let n = Object.keys(t),
        i = n.length;
      for (let a = 0; a < i; a++) {
        let c = n[a];
        o.isArray(c, r + "." + c, !0, !0) ? (e[c] = [t[c]]) : (e[c] = t[c]);
      }
    }
  }
  function b9(e, t) {
    let { textNodeName: r } = t,
      o = Object.keys(e).length;
    return !!(
      o === 0 ||
      (o === 1 && (e[r] || typeof e[r] == "boolean" || e[r] === 0))
    );
  }
  vO.prettify = E9;
});
var NO = nt((z_e, PO) => {
  var { buildOptions: w9 } = yO(),
    T9 = _O(),
    { prettify: A9 } = IO(),
    _9 = yl(),
    wl = class {
      constructor(t) {
        (this.externalEntities = {}), (this.options = w9(t));
      }
      parse(t, r) {
        if (typeof t != "string")
          if (t.toString) t = t.toString();
          else
            throw new Error("XML data is accepted in String or Bytes[] form.");
        if (r) {
          r === !0 && (r = {});
          let i = _9.validate(t, r);
          if (i !== !0) throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`);
        }
        let o = new T9(this.options);
        o.addExternalEntities(this.externalEntities);
        let n = o.parseXml(t);
        return this.options.preserveOrder || n === void 0
          ? n
          : A9(n, this.options);
      }
      addEntity(t, r) {
        if (r.indexOf("&") !== -1)
          throw new Error("Entity value can't have '&'");
        if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
          throw new Error(
            "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'"
          );
        if (r === "&")
          throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[t] = r;
      }
    };
  PO.exports = wl;
});
var kO = nt((V_e, MO) => {
  var R9 = `
`;
  function v9(e, t) {
    let r = "";
    return t.format && t.indentBy.length > 0 && (r = R9), DO(e, t, "", r);
  }
  function DO(e, t, r, o) {
    let n = "",
      i = !1;
    for (let a = 0; a < e.length; a++) {
      let c = e[a],
        m = I9(c);
      if (m === void 0) continue;
      let f = "";
      if (
        (r.length === 0 ? (f = m) : (f = `${r}.${m}`), m === t.textNodeName)
      ) {
        let x = c[m];
        P9(f, t) || ((x = t.tagValueProcessor(m, x)), (x = FO(x, t))),
          i && (n += o),
          (n += x),
          (i = !1);
        continue;
      } else if (m === t.cdataPropName) {
        i && (n += o),
          (n += `<![CDATA[${c[m][0][t.textNodeName]}]]>`),
          (i = !1);
        continue;
      } else if (m === t.commentPropName) {
        (n += o + `<!--${c[m][0][t.textNodeName]}-->`), (i = !0);
        continue;
      } else if (m[0] === "?") {
        let x = OO(c[":@"], t),
          _ = m === "?xml" ? "" : o,
          T = c[m][0][t.textNodeName];
        (T = T.length !== 0 ? " " + T : ""),
          (n += _ + `<${m}${T}${x}?>`),
          (i = !0);
        continue;
      }
      let u = o;
      u !== "" && (u += t.indentBy);
      let p = OO(c[":@"], t),
        h = o + `<${m}${p}`,
        g = DO(c[m], t, f, u);
      t.unpairedTags.indexOf(m) !== -1
        ? t.suppressUnpairedNode
          ? (n += h + ">")
          : (n += h + "/>")
        : (!g || g.length === 0) && t.suppressEmptyNode
          ? (n += h + "/>")
          : g && g.endsWith(">")
            ? (n += h + `>${g}${o}</${m}>`)
            : ((n += h + ">"),
              g && o !== "" && (g.includes("/>") || g.includes("</"))
                ? (n += o + t.indentBy + g + o)
                : (n += g),
              (n += `</${m}>`)),
        (i = !0);
    }
    return n;
  }
  function I9(e) {
    let t = Object.keys(e);
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (e.hasOwnProperty(o) && o !== ":@") return o;
    }
  }
  function OO(e, t) {
    let r = "";
    if (e && !t.ignoreAttributes)
      for (let o in e) {
        if (!e.hasOwnProperty(o)) continue;
        let n = t.attributeValueProcessor(o, e[o]);
        (n = FO(n, t)),
          n === !0 && t.suppressBooleanAttributes
            ? (r += ` ${o.substr(t.attributeNamePrefix.length)}`)
            : (r += ` ${o.substr(t.attributeNamePrefix.length)}="${n}"`);
      }
    return r;
  }
  function P9(e, t) {
    e = e.substr(0, e.length - t.textNodeName.length - 1);
    let r = e.substr(e.lastIndexOf(".") + 1);
    for (let o in t.stopNodes)
      if (t.stopNodes[o] === e || t.stopNodes[o] === "*." + r) return !0;
    return !1;
  }
  function FO(e, t) {
    if (e && e.length > 0 && t.processEntities)
      for (let r = 0; r < t.entities.length; r++) {
        let o = t.entities[r];
        e = e.replace(o.regex, o.val);
      }
    return e;
  }
  MO.exports = v9;
});
var $O = nt((j_e, LO) => {
  "use strict";
  var N9 = kO(),
    O9 = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function (e, t) {
        return t;
      },
      attributeValueProcessor: function (e, t) {
        return t;
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" },
      ],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1,
    };
  function Cr(e) {
    (this.options = Object.assign({}, O9, e)),
      this.options.ignoreAttributes || this.options.attributesGroupName
        ? (this.isAttribute = function () {
            return !1;
          })
        : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
          (this.isAttribute = M9)),
      (this.processTextOrObjNode = D9),
      this.options.format
        ? ((this.indentate = F9),
          (this.tagEndChar = `>
`),
          (this.newLine = `
`))
        : ((this.indentate = function () {
            return "";
          }),
          (this.tagEndChar = ">"),
          (this.newLine = ""));
  }
  Cr.prototype.build = function (e) {
    return this.options.preserveOrder
      ? N9(e, this.options)
      : (Array.isArray(e) &&
          this.options.arrayNodeName &&
          this.options.arrayNodeName.length > 1 &&
          (e = { [this.options.arrayNodeName]: e }),
        this.j2x(e, 0).val);
  };
  Cr.prototype.j2x = function (e, t) {
    let r = "",
      o = "";
    for (let n in e)
      if (Object.prototype.hasOwnProperty.call(e, n))
        if (typeof e[n] > "u") this.isAttribute(n) && (o += "");
        else if (e[n] === null)
          this.isAttribute(n)
            ? (o += "")
            : n[0] === "?"
              ? (o += this.indentate(t) + "<" + n + "?" + this.tagEndChar)
              : (o += this.indentate(t) + "<" + n + "/" + this.tagEndChar);
        else if (e[n] instanceof Date)
          o += this.buildTextValNode(e[n], n, "", t);
        else if (typeof e[n] != "object") {
          let i = this.isAttribute(n);
          if (i) r += this.buildAttrPairStr(i, "" + e[n]);
          else if (n === this.options.textNodeName) {
            let a = this.options.tagValueProcessor(n, "" + e[n]);
            o += this.replaceEntitiesValue(a);
          } else o += this.buildTextValNode(e[n], n, "", t);
        } else if (Array.isArray(e[n])) {
          let i = e[n].length,
            a = "",
            c = "";
          for (let m = 0; m < i; m++) {
            let f = e[n][m];
            if (!(typeof f > "u"))
              if (f === null)
                n[0] === "?"
                  ? (o += this.indentate(t) + "<" + n + "?" + this.tagEndChar)
                  : (o += this.indentate(t) + "<" + n + "/" + this.tagEndChar);
              else if (typeof f == "object")
                if (this.options.oneListGroup) {
                  let u = this.j2x(f, t + 1);
                  (a += u.val),
                    this.options.attributesGroupName &&
                      f.hasOwnProperty(this.options.attributesGroupName) &&
                      (c += u.attrStr);
                } else a += this.processTextOrObjNode(f, n, t);
              else if (this.options.oneListGroup) {
                let u = this.options.tagValueProcessor(n, f);
                (u = this.replaceEntitiesValue(u)), (a += u);
              } else a += this.buildTextValNode(f, n, "", t);
          }
          this.options.oneListGroup && (a = this.buildObjectNode(a, n, c, t)),
            (o += a);
        } else if (
          this.options.attributesGroupName &&
          n === this.options.attributesGroupName
        ) {
          let i = Object.keys(e[n]),
            a = i.length;
          for (let c = 0; c < a; c++)
            r += this.buildAttrPairStr(i[c], "" + e[n][i[c]]);
        } else o += this.processTextOrObjNode(e[n], n, t);
    return { attrStr: r, val: o };
  };
  Cr.prototype.buildAttrPairStr = function (e, t) {
    return (
      (t = this.options.attributeValueProcessor(e, "" + t)),
      (t = this.replaceEntitiesValue(t)),
      this.options.suppressBooleanAttributes && t === "true"
        ? " " + e
        : " " + e + '="' + t + '"'
    );
  };
  function D9(e, t, r) {
    let o = this.j2x(e, r + 1);
    return e[this.options.textNodeName] !== void 0 &&
      Object.keys(e).length === 1
      ? this.buildTextValNode(e[this.options.textNodeName], t, o.attrStr, r)
      : this.buildObjectNode(o.val, t, o.attrStr, r);
  }
  Cr.prototype.buildObjectNode = function (e, t, r, o) {
    if (e === "")
      return t[0] === "?"
        ? this.indentate(o) + "<" + t + r + "?" + this.tagEndChar
        : this.indentate(o) + "<" + t + r + this.closeTag(t) + this.tagEndChar;
    {
      let n = "</" + t + this.tagEndChar,
        i = "";
      return (
        t[0] === "?" && ((i = "?"), (n = "")),
        (r || r === "") && e.indexOf("<") === -1
          ? this.indentate(o) + "<" + t + r + i + ">" + e + n
          : this.options.commentPropName !== !1 &&
              t === this.options.commentPropName &&
              i.length === 0
            ? this.indentate(o) + `<!--${e}-->` + this.newLine
            : this.indentate(o) +
              "<" +
              t +
              r +
              i +
              this.tagEndChar +
              e +
              this.indentate(o) +
              n
      );
    }
  };
  Cr.prototype.closeTag = function (e) {
    let t = "";
    return (
      this.options.unpairedTags.indexOf(e) !== -1
        ? this.options.suppressUnpairedNode || (t = "/")
        : this.options.suppressEmptyNode
          ? (t = "/")
          : (t = `></${e}`),
      t
    );
  };
  Cr.prototype.buildTextValNode = function (e, t, r, o) {
    if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
      return this.indentate(o) + `<![CDATA[${e}]]>` + this.newLine;
    if (
      this.options.commentPropName !== !1 &&
      t === this.options.commentPropName
    )
      return this.indentate(o) + `<!--${e}-->` + this.newLine;
    if (t[0] === "?")
      return this.indentate(o) + "<" + t + r + "?" + this.tagEndChar;
    {
      let n = this.options.tagValueProcessor(t, e);
      return (
        (n = this.replaceEntitiesValue(n)),
        n === ""
          ? this.indentate(o) + "<" + t + r + this.closeTag(t) + this.tagEndChar
          : this.indentate(o) +
            "<" +
            t +
            r +
            ">" +
            n +
            "</" +
            t +
            this.tagEndChar
      );
    }
  };
  Cr.prototype.replaceEntitiesValue = function (e) {
    if (e && e.length > 0 && this.options.processEntities)
      for (let t = 0; t < this.options.entities.length; t++) {
        let r = this.options.entities[t];
        e = e.replace(r.regex, r.val);
      }
    return e;
  };
  function F9(e) {
    return this.options.indentBy.repeat(e);
  }
  function M9(e) {
    return e.startsWith(this.options.attributeNamePrefix) &&
      e !== this.options.textNodeName
      ? e.substr(this.attrPrefixLen)
      : !1;
  }
  LO.exports = Cr;
});
var Tl = nt((G_e, UO) => {
  "use strict";
  var k9 = yl(),
    L9 = NO(),
    $9 = $O();
  UO.exports = { XMLParser: L9, XMLValidator: k9, XMLBuilder: $9 };
});
var U9,
  BO = s(() => {
    Ee();
    Ae();
    Go();
    dl();
    U9 = TS(Tl());
  });
var HO = s(() => {
  Ee();
  Ae();
  Cs();
});
var zO = s(() => {});
var VO,
  om,
  jO,
  GO = s(() => {
    Go();
    VO = TS(Tl());
    ll();
    (om = (e, t) =>
      tm(e, t).then((r) => {
        if (r.length) {
          let o = new VO.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: !0,
            ignoreAttributes: !1,
            ignoreDeclaration: !0,
            parseTagValue: !1,
            trimValues: !1,
            tagValueProcessor: (m, f) =>
              f.trim() === "" &&
              f.includes(`
`)
                ? ""
                : void 0,
          });
          o.addEntity("#xD", "\r"),
            o.addEntity(
              "#10",
              `
`
            );
          let n;
          try {
            n = o.parse(r, !0);
          } catch (m) {
            throw (
              (m &&
                typeof m == "object" &&
                Object.defineProperty(m, "$responseBodyText", { value: r }),
              m)
            );
          }
          let i = "#text",
            a = Object.keys(n)[0],
            c = n[a];
          return c[i] && ((c[a] = c[i]), delete c[i]), em(c);
        }
        return {};
      })),
      (jO = async (e, t) => {
        let r = await om(e, t);
        return (
          r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r
        );
      });
  });
var WO = s(() => {});
var qO = s(() => {});
var Al = s(() => {
  qO();
});
var KO = s(() => {
  WO();
  Al();
});
var YO = s(() => {
  KO();
  Al();
});
var XO = s(() => {
  YO();
  Ae();
  it();
  Go();
  fl();
});
var JO = s(() => {});
var QO = s(() => {
  Ee();
  Ae();
  Cs();
});
var ZO = s(() => {
  _N();
  sO();
  iO();
  nO();
  aO();
  oO();
  tO();
  rO();
  cO();
  eO();
  zO();
  HO();
  QO();
  JO();
  BO();
  XO();
  GO();
});
var Se = s(() => {
  Ue();
  AN();
  ZO();
});
async function eD(e, t, r) {
  if (
    (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" &&
      me(e, "PROTOCOL_RPC_V2_CBOR", "M"),
    typeof t.retryStrategy == "function")
  ) {
    let i = await t.retryStrategy();
    typeof i.acquireInitialRetryToken == "function"
      ? i.constructor?.name?.includes("Adaptive")
        ? me(e, "RETRY_MODE_ADAPTIVE", "F")
        : me(e, "RETRY_MODE_STANDARD", "E")
      : me(e, "RETRY_MODE_LEGACY", "D");
  }
  if (typeof t.accountIdEndpointMode == "function") {
    let i = e.endpointV2;
    switch (
      (String(i?.url?.hostname).match(H9) && me(e, "ACCOUNT_ID_ENDPOINT", "O"),
      await t.accountIdEndpointMode?.())
    ) {
      case "disabled":
        me(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        me(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        me(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  let n = e.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (n?.$source) {
    let i = n;
    i.accountId && me(e, "RESOLVED_ACCOUNT_ID", "T");
    for (let [a, c] of Object.entries(i.$source ?? {})) me(e, a, c);
  }
}
var H9,
  tD = s(() => {
    Se();
    H9 = /\d{12}\.ddb/;
  });
var _l,
  nm,
  Rl,
  sm,
  rD,
  oD,
  vl,
  nD = s(() => {
    (_l = "user-agent"),
      (nm = "x-amz-user-agent"),
      (Rl = " "),
      (sm = "/"),
      (rD = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g),
      (oD = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g),
      (vl = "-");
  });
function sD(e) {
  let t = "";
  for (let r in e) {
    let o = e[r];
    if (t.length + o.length + 1 <= 1024) {
      t.length ? (t += "," + o) : (t += o);
      continue;
    }
    break;
  }
  return t;
}
var iD = s(() => {});
var z9,
  im,
  V9,
  am,
  aD = s(() => {
    Hc();
    Qe();
    tD();
    nD();
    iD();
    (z9 = (e) => (t, r) => async (o) => {
      let { request: n } = o;
      if (!je.isInstance(n)) return t(o);
      let { headers: i } = n,
        a = r?.userAgent?.map(im) || [],
        c = (await e.defaultUserAgentProvider()).map(im);
      await eD(r, e, o);
      let m = r;
      c.push(
        `m/${sD(Object.assign({}, r.__smithy_context?.features, m.__aws_sdk_context?.features))}`
      );
      let f = e?.customUserAgent?.map(im) || [],
        u = await e.userAgentAppId();
      u && c.push(im([`app/${u}`]));
      let p = Iv(),
        h = (p ? [p] : []).concat([...c, ...a, ...f]).join(Rl),
        g = [...c.filter((x) => x.startsWith("aws-sdk-")), ...f].join(Rl);
      return (
        e.runtime !== "browser"
          ? (g && (i[nm] = i[nm] ? `${i[_l]} ${g}` : g), (i[_l] = h))
          : (i[nm] = h),
        t({ ...o, request: n })
      );
    }),
      (im = (e) => {
        let t = e[0]
            .split(sm)
            .map((a) => a.replace(rD, vl))
            .join(sm),
          r = e[1]?.replace(oD, vl),
          o = t.indexOf(sm),
          n = t.substring(0, o),
          i = t.substring(o + 1);
        return (
          n === "api" && (i = i.toLowerCase()),
          [n, i, r]
            .filter((a) => a && a.length > 0)
            .reduce((a, c, m) => {
              switch (m) {
                case 0:
                  return c;
                case 1:
                  return `${a}/${c}`;
                default:
                  return `${a}#${c}`;
              }
            }, "")
        );
      }),
      (V9 = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: ["SET_USER_AGENT", "USER_AGENT"],
        override: !0,
      }),
      (am = (e) => ({
        applyToStack: (t) => {
          t.add(z9(e), V9);
        },
      }));
  });
var cm = s(() => {
  y_();
  aD();
});
var mt,
  cD = s(() => {
    mt = (e, t, r) => {
      if (t in e) {
        if (e[t] === "true") return !0;
        if (e[t] === "false") return !1;
        throw new Error(
          `Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`
        );
      }
    };
  });
var mD = s(() => {});
var Ge,
  dD = s(() => {
    (function (e) {
      (e.ENV = "env"), (e.CONFIG = "shared config entry");
    })(Ge || (Ge = {}));
  });
var As = s(() => {
  cD();
  mD();
  dD();
});
var j9,
  G9,
  mm,
  fD = s(() => {
    As();
    (j9 = "AWS_USE_DUALSTACK_ENDPOINT"),
      (G9 = "use_dualstack_endpoint"),
      (mm = {
        environmentVariableSelector: (e) => mt(e, j9, Ge.ENV),
        configFileSelector: (e) => mt(e, G9, Ge.CONFIG),
        default: !1,
      });
  });
var W9,
  q9,
  dm,
  pD = s(() => {
    As();
    (W9 = "AWS_USE_FIPS_ENDPOINT"),
      (q9 = "use_fips_endpoint"),
      (dm = {
        environmentVariableSelector: (e) => mt(e, W9, Ge.ENV),
        configFileSelector: (e) => mt(e, q9, Ge.CONFIG),
        default: !1,
      });
  });
var uD = s(() => {
  he();
});
var lD = s(() => {});
var hD = s(() => {
  he();
  lD();
});
var gD = s(() => {
  fD();
  pD();
  uD();
  hD();
});
var K9,
  Y9,
  Ko,
  fm,
  yD = s(() => {
    (K9 = "AWS_REGION"),
      (Y9 = "region"),
      (Ko = {
        environmentVariableSelector: (e) => e[K9],
        configFileSelector: (e) => e[Y9],
        default: () => {
          throw new Error("Region is missing");
        },
      }),
      (fm = { preferredFile: "credentials" });
  });
var pm,
  Il = s(() => {
    pm = (e) =>
      typeof e == "string" && (e.startsWith("fips-") || e.endsWith("-fips"));
  });
var Pl,
  xD = s(() => {
    Il();
    Pl = (e) =>
      pm(e)
        ? ["fips-aws-global", "aws-fips"].includes(e)
          ? "us-east-1"
          : e.replace(/fips-(dkr-|prod-)?|-fips/, "")
        : e;
  });
var um,
  ED = s(() => {
    xD();
    Il();
    um = (e) => {
      let { region: t, useFipsEndpoint: r } = e;
      if (!t) throw new Error("Region is missing");
      return Object.assign(e, {
        region: async () => {
          if (typeof t == "string") return Pl(t);
          let o = await t();
          return Pl(o);
        },
        useFipsEndpoint: async () => {
          let o = typeof t == "string" ? t : await t();
          return pm(o)
            ? !0
            : typeof r != "function"
              ? Promise.resolve(!!r)
              : r();
        },
      });
    };
  });
var SD = s(() => {
  yD();
  ED();
});
var CD = s(() => {});
var bD = s(() => {});
var wD = s(() => {});
var TD = s(() => {});
var AD = s(() => {});
var _D = s(() => {});
var RD = s(() => {
  wD();
  TD();
  AD();
  _D();
});
var vD = s(() => {
  CD();
  bD();
  RD();
});
var Yo = s(() => {
  gD();
  SD();
  vD();
});
var ID,
  PD = s(() => {
    ID = (e) =>
      Object.assign(e, {
        eventStreamMarshaller: e.eventStreamSerdeProvider(e),
      });
  });
var ND = s(() => {
  PD();
});
function X9(e) {
  return (t) => async (r) => {
    let o = r.request;
    if (je.isInstance(o)) {
      let { body: n, headers: i } = o;
      if (
        n &&
        Object.keys(i)
          .map((a) => a.toLowerCase())
          .indexOf(OD) === -1
      )
        try {
          let a = e(n);
          o.headers = { ...o.headers, [OD]: String(a) };
        } catch {}
    }
    return t({ ...r, request: o });
  };
}
var OD,
  J9,
  lm,
  Nl = s(() => {
    Qe();
    OD = "content-length";
    (J9 = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: !0,
    }),
      (lm = (e) => ({
        applyToStack: (t) => {
          t.add(X9(e.bodyLengthChecker), J9);
        },
      }));
  });
var DD,
  Q9,
  Z9,
  eY,
  tY,
  rY,
  FD = s(() => {
    (DD = async (e) => {
      let t = e?.Bucket || "";
      if (
        (typeof e.Bucket == "string" &&
          (e.Bucket = t
            .replace(/#/g, encodeURIComponent("#"))
            .replace(/\?/g, encodeURIComponent("?"))),
        rY(t))
      ) {
        if (e.ForcePathStyle === !0)
          throw new Error(
            "Path-style addressing cannot be used with ARN buckets"
          );
      } else
        (!tY(t) ||
          (t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:")) ||
          t.toLowerCase() !== t ||
          t.length < 3) &&
          (e.ForcePathStyle = !0);
      return (
        e.DisableMultiRegionAccessPoints &&
          ((e.disableMultiRegionAccessPoints = !0), (e.DisableMRAP = !0)),
        e
      );
    }),
      (Q9 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/),
      (Z9 = /(\d+\.){3}\d+/),
      (eY = /\.\./),
      (tY = (e) => Q9.test(e) && !Z9.test(e) && !eY.test(e)),
      (rY = (e) => {
        let [t, r, o, , , n] = e.split(":"),
          i = t === "arn" && e.split(":").length >= 6,
          a = !!(i && r && o && n);
        if (i && !a) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
        return a;
      });
  });
var MD = s(() => {
  FD();
});
var kD,
  LD = s(() => {
    kD = (e, t, r) => {
      let o = async () => {
        let n = r[e] ?? r[t];
        return typeof n == "function" ? n() : n;
      };
      return e === "credentialScope" || t === "CredentialScope"
        ? async () => {
            let n =
              typeof r.credentials == "function"
                ? await r.credentials()
                : r.credentials;
            return n?.credentialScope ?? n?.CredentialScope;
          }
        : e === "accountId" || t === "AccountId"
          ? async () => {
              let n =
                typeof r.credentials == "function"
                  ? await r.credentials()
                  : r.credentials;
              return n?.accountId ?? n?.AccountId;
            }
          : e === "endpoint" || t === "endpoint"
            ? async () => {
                let n = await o();
                if (n && typeof n == "object") {
                  if ("url" in n) return n.url.href;
                  if ("hostname" in n) {
                    let { protocol: i, hostname: a, port: c, path: m } = n;
                    return `${i}//${a}${c ? ":" + c : ""}${m}`;
                  }
                }
                return n;
              }
            : o;
    };
  });
function hm(e) {
  try {
    let t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
    return (
      t.delete("CONFIG"),
      t.delete("CONFIG_PREFIX_SEPARATOR"),
      t.delete("ENV"),
      [...t].join(", ")
    );
  } catch {
    return e;
  }
}
var Ol = s(() => {});
var $D,
  UD = s(() => {
    K();
    Ol();
    $D = (e, t) => async () => {
      try {
        let r = e(process.env, t);
        if (r === void 0) throw new Error();
        return r;
      } catch (r) {
        throw new D(r.message || `Not found in ENV: ${hm(e.toString())}`, {
          logger: t?.logger,
        });
      }
    };
  });
import { homedir as oY } from "os";
import { sep as nY } from "path";
var Dl,
  sY,
  br,
  Xo = s(() => {
    (Dl = {}),
      (sY = () =>
        process && process.geteuid ? `${process.geteuid()}` : "DEFAULT"),
      (br = () => {
        let {
          HOME: e,
          USERPROFILE: t,
          HOMEPATH: r,
          HOMEDRIVE: o = `C:${nY}`,
        } = process.env;
        if (e) return e;
        if (t) return t;
        if (r) return `${o}${r}`;
        let n = sY();
        return Dl[n] || (Dl[n] = oY()), Dl[n];
      });
  });
var Fl,
  iY,
  dt,
  BD = s(() => {
    (Fl = "AWS_PROFILE"),
      (iY = "default"),
      (dt = (e) => e.profile || process.env[Fl] || iY);
  });
import { createHash as aY } from "crypto";
import { join as cY } from "path";
var gm,
  Ml = s(() => {
    Xo();
    gm = (e) => {
      let r = aY("sha1").update(e).digest("hex");
      return cY(br(), ".aws", "sso", "cache", `${r}.json`);
    };
  });
import { promises as mY } from "fs";
var dY,
  ym,
  HD = s(() => {
    Ml();
    ({ readFile: dY } = mY),
      (ym = async (e) => {
        let t = gm(e),
          r = await dY(t, "utf8");
        return JSON.parse(r);
      });
  });
var zD,
  VD = s(() => {
    Kr();
    Jo();
    zD = (e) =>
      Object.entries(e)
        .filter(([t]) => {
          let r = t.indexOf(ft);
          return r === -1 ? !1 : Object.values(Zt).includes(t.substring(0, r));
        })
        .reduce(
          (t, [r, o]) => {
            let n = r.indexOf(ft),
              i = r.substring(0, n) === Zt.PROFILE ? r.substring(n + 1) : r;
            return (t[i] = o), t;
          },
          { ...(e.default && { default: e.default }) }
        );
  });
import { join as fY } from "path";
var pY,
  xm,
  kl = s(() => {
    Xo();
    (pY = "AWS_CONFIG_FILE"),
      (xm = () => process.env[pY] || fY(br(), ".aws", "config"));
  });
import { join as uY } from "path";
var lY,
  jD,
  GD = s(() => {
    Xo();
    (lY = "AWS_SHARED_CREDENTIALS_FILE"),
      (jD = () => process.env[lY] || uY(br(), ".aws", "credentials"));
  });
var hY,
  gY,
  _s,
  Ll = s(() => {
    Kr();
    Jo();
    (hY = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/),
      (gY = ["__proto__", "profile __proto__"]),
      (_s = (e) => {
        let t = {},
          r,
          o;
        for (let n of e.split(/\r?\n/)) {
          let i = n.split(/(^|\s)[;#]/)[0].trim();
          if (i[0] === "[" && i[i.length - 1] === "]") {
            (r = void 0), (o = void 0);
            let c = i.substring(1, i.length - 1),
              m = hY.exec(c);
            if (m) {
              let [, f, , u] = m;
              Object.values(Zt).includes(f) && (r = [f, u].join(ft));
            } else r = c;
            if (gY.includes(c))
              throw new Error(`Found invalid profile name "${c}"`);
          } else if (r) {
            let c = i.indexOf("=");
            if (![0, -1].includes(c)) {
              let [m, f] = [
                i.substring(0, c).trim(),
                i.substring(c + 1).trim(),
              ];
              if (f === "") o = m;
              else {
                o && n.trimStart() === n && (o = void 0), (t[r] = t[r] || {});
                let u = o ? [o, m].join(ft) : m;
                t[r][u] = f;
              }
            }
          }
        }
        return t;
      });
  });
import { promises as yY } from "fs";
var xY,
  $l,
  Rs,
  Ul = s(() => {
    ({ readFile: xY } = yY),
      ($l = {}),
      (Rs = (e, t) => (
        (!$l[e] || t?.ignoreCache) && ($l[e] = xY(e, "utf8")), $l[e]
      ));
  });
import { join as WD } from "path";
var qD,
  ft,
  Em,
  Jo = s(() => {
    VD();
    kl();
    GD();
    Xo();
    Ll();
    Ul();
    (qD = () => ({})),
      (ft = "."),
      (Em = async (e = {}) => {
        let { filepath: t = jD(), configFilepath: r = xm() } = e,
          o = br(),
          n = "~/",
          i = t;
        t.startsWith(n) && (i = WD(o, t.slice(2)));
        let a = r;
        r.startsWith(n) && (a = WD(o, r.slice(2)));
        let c = await Promise.all([
          Rs(a, { ignoreCache: e.ignoreCache }).then(_s).then(zD).catch(qD),
          Rs(i, { ignoreCache: e.ignoreCache }).then(_s).catch(qD),
        ]);
        return { configFile: c[0], credentialsFile: c[1] };
      });
  });
var KD,
  YD = s(() => {
    Kr();
    Jo();
    KD = (e) =>
      Object.entries(e)
        .filter(([t]) => t.startsWith(Zt.SSO_SESSION + ft))
        .reduce(
          (t, [r, o]) => ({ ...t, [r.substring(r.indexOf(ft) + 1)]: o }),
          {}
        );
  });
var EY,
  Sm,
  XD = s(() => {
    kl();
    YD();
    Ll();
    Ul();
    (EY = () => ({})),
      (Sm = async (e = {}) =>
        Rs(e.configFilepath ?? xm())
          .then(_s)
          .then(KD)
          .catch(EY));
  });
var JD,
  QD = s(() => {
    JD = (...e) => {
      let t = {};
      for (let r of e)
        for (let [o, n] of Object.entries(r))
          t[o] !== void 0 ? Object.assign(t[o], n) : (t[o] = n);
      return t;
    };
  });
var wr,
  ZD = s(() => {
    Jo();
    QD();
    wr = async (e) => {
      let t = await Em(e);
      return JD(t.configFile, t.credentialsFile);
    };
  });
var eF = s(() => {});
var Tt = s(() => {
  Xo();
  BD();
  Ml();
  HD();
  Jo();
  XD();
  ZD();
  eF();
});
var tF,
  rF = s(() => {
    K();
    Tt();
    Ol();
    tF =
      (e, { preferredFile: t = "config", ...r } = {}) =>
      async () => {
        let o = dt(r),
          { configFile: n, credentialsFile: i } = await Em(r),
          a = i[o] || {},
          c = n[o] || {},
          m = t === "config" ? { ...a, ...c } : { ...c, ...a };
        try {
          let u = e(m, t === "config" ? n : i);
          if (u === void 0) throw new Error();
          return u;
        } catch (f) {
          throw new D(
            f.message ||
              `Not found in config files w/ profile [${o}]: ${hm(e.toString())}`,
            { logger: r.logger }
          );
        }
      };
  });
var SY,
  oF,
  nF = s(() => {
    K();
    (SY = (e) => typeof e == "function"),
      (oF = (e) => (SY(e) ? async () => await e() : qc(e)));
  });
var ne,
  sF = s(() => {
    K();
    UD();
    rF();
    nF();
    ne = (
      { environmentVariableSelector: e, configFileSelector: t, default: r },
      o = {}
    ) => {
      let { signingName: n, logger: i } = o;
      return wt(bt($D(e, { signingName: n, logger: i }), tF(t, o), oF(r)));
    };
  });
var eo = s(() => {
  sF();
});
var iF,
  aF,
  cF,
  mF = s(() => {
    Tt();
    (iF = "AWS_ENDPOINT_URL"),
      (aF = "endpoint_url"),
      (cF = (e) => ({
        environmentVariableSelector: (t) => {
          let r = e.split(" ").map((i) => i.toUpperCase()),
            o = t[[iF, ...r].join("_")];
          if (o) return o;
          let n = t[iF];
          if (n) return n;
        },
        configFileSelector: (t, r) => {
          if (r && t.services) {
            let n = r[["services", t.services].join(ft)];
            if (n) {
              let i = e.split(" ").map((c) => c.toLowerCase()),
                a = n[[i.join("_"), aF].join(ft)];
              if (a) return a;
            }
          }
          let o = t[aF];
          if (o) return o;
        },
        default: void 0,
      }));
  });
var Cm,
  Bl = s(() => {
    eo();
    mF();
    Cm = async (e) => ne(cF(e ?? ""))();
  });
function dF(e) {
  let t = {};
  if (((e = e.replace(/^\?/, "")), e))
    for (let r of e.split("&")) {
      let [o, n = null] = r.split("=");
      (o = decodeURIComponent(o)),
        n && (n = decodeURIComponent(n)),
        o in t
          ? Array.isArray(t[o])
            ? t[o].push(n)
            : (t[o] = [t[o], n])
          : (t[o] = n);
    }
  return t;
}
var fF = s(() => {});
var Bt,
  vs = s(() => {
    fF();
    Bt = (e) => {
      if (typeof e == "string") return Bt(new URL(e));
      let { hostname: t, pathname: r, port: o, protocol: n, search: i } = e,
        a;
      return (
        i && (a = dF(i)),
        {
          hostname: t,
          port: o ? parseInt(o) : void 0,
          protocol: n,
          path: r,
          query: a,
        }
      );
    };
  });
var bm,
  wm = s(() => {
    vs();
    bm = (e) => (typeof e == "object" ? ("url" in e ? Bt(e.url) : e) : Bt(e));
  });
var pF,
  CY,
  Hl = s(() => {
    MD();
    LD();
    Bl();
    wm();
    (pF = async (e, t, r, o) => {
      if (!r.endpoint) {
        let a;
        r.serviceConfiguredEndpoint
          ? (a = await r.serviceConfiguredEndpoint())
          : (a = await Cm(r.serviceId)),
          a && (r.endpoint = () => Promise.resolve(bm(a)));
      }
      let n = await CY(e, t, r);
      if (typeof r.endpointProvider != "function")
        throw new Error("config.endpointProvider is not set.");
      return r.endpointProvider(n, o);
    }),
      (CY = async (e, t, r) => {
        let o = {},
          n = t?.getEndpointParameterInstructions?.() || {};
        for (let [i, a] of Object.entries(n))
          switch (a.type) {
            case "staticContextParams":
              o[i] = a.value;
              break;
            case "contextParams":
              o[i] = e[a.name];
              break;
            case "clientContextParams":
            case "builtInParams":
              o[i] = await kD(a.name, i, r)();
              break;
            case "operationContextParams":
              o[i] = a.get(e);
              break;
            default:
              throw new Error(
                "Unrecognized endpoint parameter instruction: " +
                  JSON.stringify(a)
              );
          }
        return (
          Object.keys(n).length === 0 && Object.assign(o, r),
          String(r.serviceId).toLowerCase() === "s3" && (await DD(o)),
          o
        );
      });
  });
var uF = s(() => {
  Hl();
  wm();
});
var lF,
  zl = s(() => {
    Q();
    he();
    Hl();
    lF =
      ({ config: e, instructions: t }) =>
      (r, o) =>
      async (n) => {
        e.endpoint && Oc(o, "ENDPOINT_OVERRIDE", "N");
        let i = await pF(
          n.input,
          {
            getEndpointParameterInstructions() {
              return t;
            },
          },
          { ...e },
          o
        );
        (o.endpointV2 = i), (o.authSchemes = i.properties?.authSchemes);
        let a = o.authSchemes?.[0];
        if (a) {
          (o.signing_region = a.signingRegion),
            (o.signing_service = a.signingName);
          let m = Te(o)?.selectedHttpAuthScheme?.httpAuthOption;
          m &&
            (m.signingProperties = Object.assign(
              m.signingProperties || {},
              {
                signing_region: a.signingRegion,
                signingRegion: a.signingRegion,
                signing_service: a.signingName,
                signingName: a.signingName,
                signingRegionSet: a.signingRegionSet,
              },
              a.properties
            ));
        }
        return r({ ...n });
      };
  });
var hF,
  Vl,
  jl = s(() => {
    Qe();
    (hF = (e, t) => (r, o) => async (n) => {
      let { response: i } = await r(n);
      try {
        let a = await t(i, e);
        return { response: i, output: a };
      } catch (a) {
        if (
          (Object.defineProperty(a, "$response", { value: i }),
          !("$metadata" in a))
        ) {
          let c =
            "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
          try {
            a.message +=
              `
  ` + c;
          } catch {
            !o.logger || o.logger?.constructor?.name === "NoOpLogger"
              ? console.warn(c)
              : o.logger?.warn?.(c);
          }
          typeof a.$responseBodyText < "u" &&
            a.$response &&
            (a.$response.body = a.$responseBodyText);
          try {
            if (Nt.isInstance(i)) {
              let { headers: m = {} } = i,
                f = Object.entries(m);
              a.$metadata = {
                httpStatusCode: i.statusCode,
                requestId: Vl(/^x-[\w-]+-request-?id$/, f),
                extendedRequestId: Vl(/^x-[\w-]+-id-2$/, f),
                cfId: Vl(/^x-[\w-]+-cf-id$/, f),
              };
            }
          } catch {}
        }
        throw a;
      }
    }),
      (Vl = (e, t) => (t.find(([r]) => r.match(e)) || [void 0, void 0])[1]);
  });
var gF,
  Gl = s(() => {
    gF = (e, t) => (r, o) => async (n) => {
      let i = e,
        a =
          o.endpointV2?.url && i.urlParser
            ? async () => i.urlParser(o.endpointV2.url)
            : i.endpoint;
      if (!a) throw new Error("No valid endpoint provider available.");
      let c = await t(n.input, { ...e, endpoint: a });
      return r({ ...n, request: c });
    };
  });
function S(e, t, r) {
  return {
    applyToStack: (o) => {
      o.add(hF(e, r), bY), o.add(gF(e, t), Wl);
    },
  };
}
var bY,
  Wl,
  yF = s(() => {
    jl();
    Gl();
    (bY = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0,
    }),
      (Wl = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: !0,
      });
  });
var F = s(() => {
  jl();
  yF();
  Gl();
});
var wY,
  C,
  xF = s(() => {
    F();
    zl();
    (wY = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: !0,
      relation: "before",
      toMiddleware: Wl.name,
    }),
      (C = (e, t) => ({
        applyToStack: (r) => {
          r.addRelativeTo(lF({ config: e, instructions: t }), wY);
        },
      }));
  });
var Tm,
  EF = s(() => {
    he();
    Bl();
    wm();
    Tm = (e) => {
      let t = e.tls ?? !0,
        { endpoint: r, useDualstackEndpoint: o, useFipsEndpoint: n } = e,
        i = r != null ? async () => bm(await Y(r)()) : void 0,
        c = Object.assign(e, {
          endpoint: i,
          tls: t,
          isCustomEndpoint: !!r,
          useDualstackEndpoint: Y(o ?? !1),
          useFipsEndpoint: Y(n ?? !1),
        }),
        m;
      return (
        (c.serviceConfiguredEndpoint = async () => (
          e.serviceId && !m && (m = Cm(e.serviceId)), m
        )),
        c
      );
    };
  });
var SF = s(() => {});
var CF = s(() => {});
var O = s(() => {
  uF();
  zl();
  xF();
  EF();
  SF();
  CF();
});
var At,
  to,
  Qo,
  Am = s(() => {
    (function (e) {
      (e.STANDARD = "standard"), (e.ADAPTIVE = "adaptive");
    })(At || (At = {}));
    (to = 3), (Qo = At.STANDARD);
  });
var bF,
  wF,
  TF,
  AF,
  _F,
  RF = s(() => {
    (bF = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException",
    ]),
      (wF = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"]),
      (TF = [500, 502, 503, 504]),
      (AF = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"]),
      (_F = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"]);
  });
var TY,
  AY,
  Zo,
  Is,
  vF,
  Ps = s(() => {
    RF();
    (TY = (e) => e.$metadata?.clockSkewCorrected),
      (AY = (e) => {
        let t = new Set([
          "Failed to fetch",
          "NetworkError when attempting to fetch resource",
          "The Internet connection appears to be offline",
          "Load failed",
          "Network request failed",
        ]);
        return e && e instanceof TypeError ? t.has(e.message) : !1;
      }),
      (Zo = (e) =>
        e.$metadata?.httpStatusCode === 429 ||
        bF.includes(e.name) ||
        e.$retryable?.throttling == !0),
      (Is = (e, t = 0) =>
        TY(e) ||
        wF.includes(e.name) ||
        AF.includes(e?.code || "") ||
        _F.includes(e?.code || "") ||
        TF.includes(e.$metadata?.httpStatusCode || 0) ||
        AY(e) ||
        (e.cause !== void 0 && t <= 10 && Is(e.cause, t + 1))),
      (vF = (e) => {
        if (e.$metadata?.httpStatusCode !== void 0) {
          let t = e.$metadata.httpStatusCode;
          return 500 <= t && t <= 599 && !Is(e);
        }
        return !1;
      });
  });
var en,
  ql = s(() => {
    Ps();
    en = class e {
      constructor(t) {
        (this.currentCapacity = 0),
          (this.enabled = !1),
          (this.lastMaxRate = 0),
          (this.measuredTxRate = 0),
          (this.requestCount = 0),
          (this.lastTimestamp = 0),
          (this.timeWindow = 0),
          (this.beta = t?.beta ?? 0.7),
          (this.minCapacity = t?.minCapacity ?? 1),
          (this.minFillRate = t?.minFillRate ?? 0.5),
          (this.scaleConstant = t?.scaleConstant ?? 0.4),
          (this.smooth = t?.smooth ?? 0.8);
        let r = this.getCurrentTimeInSeconds();
        (this.lastThrottleTime = r),
          (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
          (this.fillRate = this.minFillRate),
          (this.maxCapacity = this.minCapacity);
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(t) {
        if (this.enabled) {
          if ((this.refillTokenBucket(), t > this.currentCapacity)) {
            let r = ((t - this.currentCapacity) / this.fillRate) * 1e3;
            await new Promise((o) => e.setTimeoutFn(o, r));
          }
          this.currentCapacity = this.currentCapacity - t;
        }
      }
      refillTokenBucket() {
        let t = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = t;
          return;
        }
        let r = (t - this.lastTimestamp) * this.fillRate;
        (this.currentCapacity = Math.min(
          this.maxCapacity,
          this.currentCapacity + r
        )),
          (this.lastTimestamp = t);
      }
      updateClientSendingRate(t) {
        let r;
        if ((this.updateMeasuredRate(), Zo(t))) {
          let n = this.enabled
            ? Math.min(this.measuredTxRate, this.fillRate)
            : this.measuredTxRate;
          (this.lastMaxRate = n),
            this.calculateTimeWindow(),
            (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
            (r = this.cubicThrottle(n)),
            this.enableTokenBucket();
        } else
          this.calculateTimeWindow(),
            (r = this.cubicSuccess(this.getCurrentTimeInSeconds()));
        let o = Math.min(r, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(o);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(
          Math.pow(
            (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
            1 / 3
          )
        );
      }
      cubicThrottle(t) {
        return this.getPrecise(t * this.beta);
      }
      cubicSuccess(t) {
        return this.getPrecise(
          this.scaleConstant *
            Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) +
            this.lastMaxRate
        );
      }
      enableTokenBucket() {
        this.enabled = !0;
      }
      updateTokenBucketRate(t) {
        this.refillTokenBucket(),
          (this.fillRate = Math.max(t, this.minFillRate)),
          (this.maxCapacity = Math.max(t, this.minCapacity)),
          (this.currentCapacity = Math.min(
            this.currentCapacity,
            this.maxCapacity
          ));
      }
      updateMeasuredRate() {
        let t = this.getCurrentTimeInSeconds(),
          r = Math.floor(t * 2) / 2;
        if ((this.requestCount++, r > this.lastTxRateBucket)) {
          let o = this.requestCount / (r - this.lastTxRateBucket);
          (this.measuredTxRate = this.getPrecise(
            o * this.smooth + this.measuredTxRate * (1 - this.smooth)
          )),
            (this.requestCount = 0),
            (this.lastTxRateBucket = r);
        }
      }
      getPrecise(t) {
        return parseFloat(t.toFixed(8));
      }
    };
    en.setTimeoutFn = setTimeout;
  });
var _m,
  Rm,
  tn = s(() => {
    (_m = "amz-sdk-invocation-id"), (Rm = "amz-sdk-request");
  });
var IF,
  PF = s(() => {
    tn();
    IF = () => {
      let e = 100;
      return {
        computeNextBackoffDelay: (o) =>
          Math.floor(Math.min(2e4, Math.random() * 2 ** o * e)),
        setDelayBase: (o) => {
          e = o;
        },
      };
    };
  });
var Kl,
  NF = s(() => {
    tn();
    Kl = ({ retryDelay: e, retryCount: t, retryCost: r }) => ({
      getRetryCount: () => t,
      getRetryDelay: () => Math.min(2e4, e),
      getRetryCost: () => r,
    });
  });
var ro,
  Im = s(() => {
    Am();
    tn();
    PF();
    NF();
    ro = class {
      constructor(t) {
        (this.maxAttempts = t),
          (this.mode = At.STANDARD),
          (this.capacity = 500),
          (this.retryBackoffStrategy = IF()),
          (this.maxAttemptsProvider =
            typeof t == "function" ? t : async () => t);
      }
      async acquireInitialRetryToken(t) {
        return Kl({ retryDelay: 100, retryCount: 0 });
      }
      async refreshRetryTokenForRetry(t, r) {
        let o = await this.getMaxAttempts();
        if (this.shouldRetry(t, r, o)) {
          let n = r.errorType;
          this.retryBackoffStrategy.setDelayBase(
            n === "THROTTLING" ? 500 : 100
          );
          let i = this.retryBackoffStrategy.computeNextBackoffDelay(
              t.getRetryCount()
            ),
            a = r.retryAfterHint
              ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, i)
              : i,
            c = this.getCapacityCost(n);
          return (
            (this.capacity -= c),
            Kl({
              retryDelay: a,
              retryCount: t.getRetryCount() + 1,
              retryCost: c,
            })
          );
        }
        throw new Error("No retry token available");
      }
      recordSuccess(t) {
        this.capacity = Math.max(500, this.capacity + (t.getRetryCost() ?? 1));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch {
          return (
            console.warn(
              `Max attempts provider could not resolve. Using default of ${to}`
            ),
            to
          );
        }
      }
      shouldRetry(t, r, o) {
        return (
          t.getRetryCount() + 1 < o &&
          this.capacity >= this.getCapacityCost(r.errorType) &&
          this.isRetryableError(r.errorType)
        );
      }
      getCapacityCost(t) {
        return t === "TRANSIENT" ? 10 : 5;
      }
      isRetryableError(t) {
        return t === "THROTTLING" || t === "TRANSIENT";
      }
    };
  });
var Pm,
  kF = s(() => {
    Am();
    ql();
    Im();
    Pm = class {
      constructor(t, r) {
        (this.maxAttemptsProvider = t), (this.mode = At.ADAPTIVE);
        let { rateLimiter: o } = r ?? {};
        (this.rateLimiter = o ?? new en()),
          (this.standardRetryStrategy = new ro(t));
      }
      async acquireInitialRetryToken(t) {
        return (
          await this.rateLimiter.getSendToken(),
          this.standardRetryStrategy.acquireInitialRetryToken(t)
        );
      }
      async refreshRetryTokenForRetry(t, r) {
        return (
          this.rateLimiter.updateClientSendingRate(r),
          this.standardRetryStrategy.refreshRetryTokenForRetry(t, r)
        );
      }
      recordSuccess(t) {
        this.rateLimiter.updateClientSendingRate({}),
          this.standardRetryStrategy.recordSuccess(t);
      }
    };
  });
var LF = s(() => {
  tn();
  Im();
});
var $F = s(() => {});
var Ht = s(() => {
  kF();
  LF();
  ql();
  Im();
  Am();
  tn();
  $F();
});
import _Y from "crypto";
function Xl() {
  return (
    Nm > Om.length - 16 && (_Y.randomFillSync(Om), (Nm = 0)),
    Om.slice(Nm, (Nm += 16))
  );
}
var Om,
  Nm,
  UF = s(() => {
    (Om = new Uint8Array(256)), (Nm = Om.length);
  });
function BF(e, t = 0) {
  return (
    Pe[e[t + 0]] +
    Pe[e[t + 1]] +
    Pe[e[t + 2]] +
    Pe[e[t + 3]] +
    "-" +
    Pe[e[t + 4]] +
    Pe[e[t + 5]] +
    "-" +
    Pe[e[t + 6]] +
    Pe[e[t + 7]] +
    "-" +
    Pe[e[t + 8]] +
    Pe[e[t + 9]] +
    "-" +
    Pe[e[t + 10]] +
    Pe[e[t + 11]] +
    Pe[e[t + 12]] +
    Pe[e[t + 13]] +
    Pe[e[t + 14]] +
    Pe[e[t + 15]]
  );
}
var Pe,
  HF = s(() => {
    Pe = [];
    for (let e = 0; e < 256; ++e) Pe.push((e + 256).toString(16).slice(1));
  });
import RY from "crypto";
var Jl,
  zF = s(() => {
    Jl = { randomUUID: RY.randomUUID };
  });
function vY(e, t, r) {
  if (Jl.randomUUID && !t && !e) return Jl.randomUUID();
  e = e || {};
  let o = e.random || (e.rng || Xl)();
  if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), t)) {
    r = r || 0;
    for (let n = 0; n < 16; ++n) t[r + n] = o[n];
    return t;
  }
  return BF(o);
}
var Ns,
  VF = s(() => {
    zF();
    UF();
    HF();
    Ns = vY;
  });
var Ql = s(() => {
  VF();
});
var jF = s(() => {
  Ht();
});
var Zl = s(() => {
  Ht();
});
var eh = s(() => {
  Ps();
});
var th,
  rh = s(() => {
    th = (e) =>
      e instanceof Error
        ? e
        : e instanceof Object
          ? Object.assign(new Error(), e)
          : typeof e == "string"
            ? new Error(e)
            : new Error(`AWS SDK error wrapper for ${e}`);
  });
var oh = s(() => {
  Qe();
  Ps();
  Ht();
  jF();
  Zl();
  eh();
  rh();
});
var GF = s(() => {
  Ht();
  oh();
});
var WF,
  qF,
  Dm,
  Fm,
  IY,
  PY,
  Mm,
  KF = s(() => {
    he();
    Ht();
    (WF = "AWS_MAX_ATTEMPTS"),
      (qF = "max_attempts"),
      (Dm = {
        environmentVariableSelector: (e) => {
          let t = e[WF];
          if (!t) return;
          let r = parseInt(t);
          if (Number.isNaN(r))
            throw new Error(
              `Environment variable ${WF} mast be a number, got "${t}"`
            );
          return r;
        },
        configFileSelector: (e) => {
          let t = e[qF];
          if (!t) return;
          let r = parseInt(t);
          if (Number.isNaN(r))
            throw new Error(
              `Shared config file entry ${qF} mast be a number, got "${t}"`
            );
          return r;
        },
        default: to,
      }),
      (Fm = (e) => {
        let { retryStrategy: t, retryMode: r, maxAttempts: o } = e,
          n = Y(o ?? to);
        return Object.assign(e, {
          maxAttempts: n,
          retryStrategy: async () =>
            t || ((await Y(r)()) === At.ADAPTIVE ? new Pm(n) : new ro(n)),
        });
      }),
      (IY = "AWS_RETRY_MODE"),
      (PY = "retry_mode"),
      (Mm = {
        environmentVariableSelector: (e) => e[IY],
        configFileSelector: (e) => e[PY],
        default: Qo,
      });
  });
var YF = s(() => {
  Qe();
  Ht();
});
var oo,
  Tr,
  on,
  XF,
  JF,
  QF = s(() => {
    (oo = (e, t) => {
      let r = [];
      if ((e && r.push(e), t)) for (let o of t) r.push(o);
      return r;
    }),
      (Tr = (e, t) =>
        `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`),
      (on = () => {
        let e = [],
          t = [],
          r = !1,
          o = new Set(),
          n = (p) =>
            p.sort(
              (h, g) =>
                XF[g.step] - XF[h.step] ||
                JF[g.priority || "normal"] - JF[h.priority || "normal"]
            ),
          i = (p) => {
            let h = !1,
              g = (x) => {
                let _ = oo(x.name, x.aliases);
                if (_.includes(p)) {
                  h = !0;
                  for (let T of _) o.delete(T);
                  return !1;
                }
                return !0;
              };
            return (e = e.filter(g)), (t = t.filter(g)), h;
          },
          a = (p) => {
            let h = !1,
              g = (x) => {
                if (x.middleware === p) {
                  h = !0;
                  for (let _ of oo(x.name, x.aliases)) o.delete(_);
                  return !1;
                }
                return !0;
              };
            return (e = e.filter(g)), (t = t.filter(g)), h;
          },
          c = (p) => (
            e.forEach((h) => {
              p.add(h.middleware, { ...h });
            }),
            t.forEach((h) => {
              p.addRelativeTo(h.middleware, { ...h });
            }),
            p.identifyOnResolve?.(u.identifyOnResolve()),
            p
          ),
          m = (p) => {
            let h = [];
            return (
              p.before.forEach((g) => {
                g.before.length === 0 && g.after.length === 0
                  ? h.push(g)
                  : h.push(...m(g));
              }),
              h.push(p),
              p.after.reverse().forEach((g) => {
                g.before.length === 0 && g.after.length === 0
                  ? h.push(g)
                  : h.push(...m(g));
              }),
              h
            );
          },
          f = (p = !1) => {
            let h = [],
              g = [],
              x = {};
            return (
              e.forEach((T) => {
                let R = { ...T, before: [], after: [] };
                for (let $ of oo(R.name, R.aliases)) x[$] = R;
                h.push(R);
              }),
              t.forEach((T) => {
                let R = { ...T, before: [], after: [] };
                for (let $ of oo(R.name, R.aliases)) x[$] = R;
                g.push(R);
              }),
              g.forEach((T) => {
                if (T.toMiddleware) {
                  let R = x[T.toMiddleware];
                  if (R === void 0) {
                    if (p) return;
                    throw new Error(
                      `${T.toMiddleware} is not found when adding ${Tr(T.name, T.aliases)} middleware ${T.relation} ${T.toMiddleware}`
                    );
                  }
                  T.relation === "after" && R.after.push(T),
                    T.relation === "before" && R.before.push(T);
                }
              }),
              n(h)
                .map(m)
                .reduce((T, R) => (T.push(...R), T), [])
            );
          },
          u = {
            add: (p, h = {}) => {
              let { name: g, override: x, aliases: _ } = h,
                T = {
                  step: "initialize",
                  priority: "normal",
                  middleware: p,
                  ...h,
                },
                R = oo(g, _);
              if (R.length > 0) {
                if (R.some(($) => o.has($))) {
                  if (!x)
                    throw new Error(`Duplicate middleware name '${Tr(g, _)}'`);
                  for (let $ of R) {
                    let v = e.findIndex(
                      (Ve) =>
                        Ve.name === $ || Ve.aliases?.some((Pt) => Pt === $)
                    );
                    if (v === -1) continue;
                    let H = e[v];
                    if (H.step !== T.step || T.priority !== H.priority)
                      throw new Error(
                        `"${Tr(H.name, H.aliases)}" middleware with ${H.priority} priority in ${H.step} step cannot be overridden by "${Tr(g, _)}" middleware with ${T.priority} priority in ${T.step} step.`
                      );
                    e.splice(v, 1);
                  }
                }
                for (let $ of R) o.add($);
              }
              e.push(T);
            },
            addRelativeTo: (p, h) => {
              let { name: g, override: x, aliases: _ } = h,
                T = { middleware: p, ...h },
                R = oo(g, _);
              if (R.length > 0) {
                if (R.some(($) => o.has($))) {
                  if (!x)
                    throw new Error(`Duplicate middleware name '${Tr(g, _)}'`);
                  for (let $ of R) {
                    let v = t.findIndex(
                      (Ve) =>
                        Ve.name === $ || Ve.aliases?.some((Pt) => Pt === $)
                    );
                    if (v === -1) continue;
                    let H = t[v];
                    if (
                      H.toMiddleware !== T.toMiddleware ||
                      H.relation !== T.relation
                    )
                      throw new Error(
                        `"${Tr(H.name, H.aliases)}" middleware ${H.relation} "${H.toMiddleware}" middleware cannot be overridden by "${Tr(g, _)}" middleware ${T.relation} "${T.toMiddleware}" middleware.`
                      );
                    t.splice(v, 1);
                  }
                }
                for (let $ of R) o.add($);
              }
              t.push(T);
            },
            clone: () => c(on()),
            use: (p) => {
              p.applyToStack(u);
            },
            remove: (p) => (typeof p == "string" ? i(p) : a(p)),
            removeByTag: (p) => {
              let h = !1,
                g = (x) => {
                  let { tags: _, name: T, aliases: R } = x;
                  if (_ && _.includes(p)) {
                    let $ = oo(T, R);
                    for (let v of $) o.delete(v);
                    return (h = !0), !1;
                  }
                  return !0;
                };
              return (e = e.filter(g)), (t = t.filter(g)), h;
            },
            concat: (p) => {
              let h = c(on());
              return (
                h.use(p),
                h.identifyOnResolve(
                  r || h.identifyOnResolve() || (p.identifyOnResolve?.() ?? !1)
                ),
                h
              );
            },
            applyToStack: c,
            identify: () =>
              f(!0).map((p) => {
                let h = p.step ?? p.relation + " " + p.toMiddleware;
                return Tr(p.name, p.aliases) + " - " + h;
              }),
            identifyOnResolve(p) {
              return typeof p == "boolean" && (r = p), r;
            },
            resolve: (p, h) => {
              for (let g of f()
                .map((x) => x.middleware)
                .reverse())
                p = g(p, h);
              return r && console.log(u.identify()), p;
            },
          };
        return u;
      }),
      (XF = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1,
      }),
      (JF = { high: 3, normal: 2, low: 1 });
  });
var nh = s(() => {
  QF();
});
var no,
  ZF = s(() => {
    nh();
    no = class {
      constructor(t) {
        (this.config = t), (this.middlewareStack = on());
      }
      send(t, r, o) {
        let n = typeof r != "function" ? r : void 0,
          i = typeof r == "function" ? r : o,
          a = n === void 0 && this.config.cacheMiddleware === !0,
          c;
        if (a) {
          this.handlers || (this.handlers = new WeakMap());
          let m = this.handlers;
          m.has(t.constructor)
            ? (c = m.get(t.constructor))
            : ((c = t.resolveMiddleware(this.middlewareStack, this.config, n)),
              m.set(t.constructor, c));
        } else
          delete this.handlers,
            (c = t.resolveMiddleware(this.middlewareStack, this.config, n));
        if (i)
          c(t)
            .then(
              (m) => i(null, m.output),
              (m) => i(m)
            )
            .catch(() => {});
        else return c(t).then((m) => m.output);
      }
      destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
      }
    };
  });
var eM = s(() => {
  Ee();
});
var E,
  sh,
  tM = s(() => {
    nh();
    Kr();
    (E = class {
      constructor() {
        this.middlewareStack = on();
      }
      static classBuilder() {
        return new sh();
      }
      resolveMiddlewareWithContext(
        t,
        r,
        o,
        {
          middlewareFn: n,
          clientName: i,
          commandName: a,
          inputFilterSensitiveLog: c,
          outputFilterSensitiveLog: m,
          smithyContext: f,
          additionalContext: u,
          CommandCtor: p,
        }
      ) {
        for (let T of n.bind(this)(p, t, r, o)) this.middlewareStack.use(T);
        let h = t.concat(this.middlewareStack),
          { logger: g } = r,
          x = {
            logger: g,
            clientName: i,
            commandName: a,
            inputFilterSensitiveLog: c,
            outputFilterSensitiveLog: m,
            [SC]: { commandInstance: this, ...f },
            ...u,
          },
          { requestHandler: _ } = r;
        return h.resolve((T) => _.handle(T.request, o || {}), x);
      }
    }),
      (sh = class {
        constructor() {
          (this._init = () => {}),
            (this._ep = {}),
            (this._middlewareFn = () => []),
            (this._commandName = ""),
            (this._clientName = ""),
            (this._additionalContext = {}),
            (this._smithyContext = {}),
            (this._inputFilterSensitiveLog = (t) => t),
            (this._outputFilterSensitiveLog = (t) => t),
            (this._serializer = null),
            (this._deserializer = null);
        }
        init(t) {
          this._init = t;
        }
        ep(t) {
          return (this._ep = t), this;
        }
        m(t) {
          return (this._middlewareFn = t), this;
        }
        s(t, r, o = {}) {
          return (
            (this._smithyContext = { service: t, operation: r, ...o }), this
          );
        }
        c(t = {}) {
          return (this._additionalContext = t), this;
        }
        n(t, r) {
          return (this._clientName = t), (this._commandName = r), this;
        }
        f(t = (o) => o, r = (o) => o) {
          return (
            (this._inputFilterSensitiveLog = t),
            (this._outputFilterSensitiveLog = r),
            this
          );
        }
        ser(t) {
          return (this._serializer = t), this;
        }
        de(t) {
          return (this._deserializer = t), this;
        }
        sc(t) {
          return (
            (this._operationSchema = t),
            (this._smithyContext.operationSchema = t),
            this
          );
        }
        build() {
          let t = this,
            r;
          return (r = class extends E {
            static getEndpointParameterInstructions() {
              return t._ep;
            }
            constructor(...[o]) {
              super(),
                (this.serialize = t._serializer),
                (this.deserialize = t._deserializer),
                (this.input = o ?? {}),
                t._init(this),
                (this.schema = t._operationSchema);
            }
            resolveMiddleware(o, n, i) {
              return this.resolveMiddlewareWithContext(o, n, i, {
                CommandCtor: r,
                middlewareFn: t._middlewareFn,
                clientName: t._clientName,
                commandName: t._commandName,
                inputFilterSensitiveLog: t._inputFilterSensitiveLog,
                outputFilterSensitiveLog: t._outputFilterSensitiveLog,
                smithyContext: t._smithyContext,
                additionalContext: t._additionalContext,
              });
            }
          });
        }
      });
  });
var ye,
  rM = s(() => {
    ye = "***SensitiveInformation***";
  });
var km,
  oM = s(() => {
    km = (e, t) => {
      for (let r of Object.keys(e)) {
        let o = e[r],
          n = async function (a, c, m) {
            let f = new o(a);
            if (typeof c == "function") this.send(f, c);
            else if (typeof m == "function") {
              if (typeof c != "object")
                throw new Error(`Expected http options but got ${typeof c}`);
              this.send(f, c || {}, m);
            } else return this.send(f, c);
          },
          i = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
        t.prototype[i] = n;
      }
    };
  });
var nn,
  V,
  ih = s(() => {
    (nn = class e extends Error {
      constructor(t) {
        super(t.message),
          Object.setPrototypeOf(
            this,
            Object.getPrototypeOf(this).constructor.prototype
          ),
          (this.name = t.name),
          (this.$fault = t.$fault),
          (this.$metadata = t.$metadata);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          e.prototype.isPrototypeOf(r) ||
          (!!r.$fault &&
            !!r.$metadata &&
            (r.$fault === "client" || r.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](t) {
        if (!t) return !1;
        let r = t;
        return this === e
          ? e.isInstance(t)
          : e.isInstance(t)
            ? r.name && this.name
              ? this.prototype.isPrototypeOf(t) || r.name === this.name
              : this.prototype.isPrototypeOf(t)
            : !1;
      }
    }),
      (V = (e, t = {}) => {
        Object.entries(t)
          .filter(([, o]) => o !== void 0)
          .forEach(([o, n]) => {
            (e[o] == null || e[o] === "") && (e[o] = n);
          });
        let r = e.message || e.Message || "UnknownError";
        return (e.message = r), delete e.Message, e;
      });
  });
var NY,
  Lm,
  OY,
  nM = s(() => {
    ih();
    (NY = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: o }) => {
      let n = OY(e),
        i = n.httpStatusCode ? n.httpStatusCode + "" : void 0,
        a = new r({
          name: t?.code || t?.Code || o || i || "UnknownError",
          $fault: "client",
          $metadata: n,
        });
      throw V(a, t);
    }),
      (Lm =
        (e) =>
        ({ output: t, parsedBody: r, errorCode: o }) => {
          NY({ output: t, parsedBody: r, exceptionCtor: e, errorCode: o });
        }),
      (OY = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      }));
  });
var $m,
  sM = s(() => {
    $m = (e) => {
      switch (e) {
        case "standard":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "in-region":
          return { retryMode: "standard", connectionTimeout: 1100 };
        case "cross-region":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "mobile":
          return { retryMode: "standard", connectionTimeout: 3e4 };
        default:
          return {};
      }
    };
  });
var iM,
  Um,
  aM = s(() => {
    (iM = !1),
      (Um = (e) => {
        e && !iM && parseInt(e.substring(1, e.indexOf("."))) < 16 && (iM = !0);
      });
  });
var cM = s(() => {
  Ee();
});
var mM,
  dM,
  fM = s(() => {
    Kr();
    (mM = (e) => {
      let t = [];
      for (let r in Oo) {
        let o = Oo[r];
        e[o] !== void 0 &&
          t.push({ algorithmId: () => o, checksumConstructor: () => e[o] });
      }
      return {
        addChecksumAlgorithm(r) {
          t.push(r);
        },
        checksumAlgorithms() {
          return t;
        },
      };
    }),
      (dM = (e) => {
        let t = {};
        return (
          e.checksumAlgorithms().forEach((r) => {
            t[r.algorithmId()] = r.checksumConstructor();
          }),
          t
        );
      });
  });
var pM,
  uM,
  lM = s(() => {
    (pM = (e) => ({
      setRetryStrategy(t) {
        e.retryStrategy = t;
      },
      retryStrategy() {
        return e.retryStrategy;
      },
    })),
      (uM = (e) => {
        let t = {};
        return (t.retryStrategy = e.retryStrategy()), t;
      });
  });
var Bm,
  Hm,
  hM = s(() => {
    fM();
    lM();
    (Bm = (e) => Object.assign(mM(e), pM(e))),
      (Hm = (e) => Object.assign(dM(e), uM(e)));
  });
var gM = s(() => {
  hM();
});
var yM = s(() => {});
var xM = s(() => {});
var Ar,
  EM = s(() => {
    Ar = (e) => e != null;
  });
var _r,
  SM = s(() => {
    _r = class {
      trace() {}
      debug() {}
      info() {}
      warn() {}
      error() {}
    };
  });
function y(e, t, r) {
  let o, n, i;
  if (typeof t > "u" && typeof r > "u") (o = {}), (i = e);
  else {
    if (((o = e), typeof t == "function")) return (n = t), (i = r), DY(o, n, i);
    i = t;
  }
  for (let a of Object.keys(i)) {
    if (!Array.isArray(i[a])) {
      o[a] = i[a];
      continue;
    }
    CM(o, null, i, a);
  }
  return o;
}
var w,
  DY,
  CM,
  FY,
  MY,
  bM = s(() => {
    (w = (e, t) => {
      let r = {};
      for (let o in t) CM(r, e, t, o);
      return r;
    }),
      (DY = (e, t, r) =>
        y(
          e,
          Object.entries(r).reduce(
            (o, [n, i]) => (
              Array.isArray(i)
                ? (o[n] = i)
                : typeof i == "function"
                  ? (o[n] = [t, i()])
                  : (o[n] = [t, i]),
              o
            ),
            {}
          )
        )),
      (CM = (e, t, r, o) => {
        if (t !== null) {
          let a = r[o];
          typeof a == "function" && (a = [, a]);
          let [c = FY, m = MY, f = o] = a;
          ((typeof c == "function" && c(t[f])) ||
            (typeof c != "function" && c)) &&
            (e[o] = m(t[f]));
          return;
        }
        let [n, i] = r[o];
        if (typeof i == "function") {
          let a,
            c = n === void 0 && (a = i()) != null,
            m =
              (typeof n == "function" && !!n(void 0)) ||
              (typeof n != "function" && !!n);
          c ? (e[o] = a) : m && (e[o] = i());
        } else {
          let a = n === void 0 && i != null,
            c =
              (typeof n == "function" && !!n(i)) ||
              (typeof n != "function" && !!n);
          (a || c) && (e[o] = i);
        }
      }),
      (FY = (e) => e != null),
      (MY = (e) => e);
  });
var wM = s(() => {
  Ee();
});
var TM,
  AM = s(() => {
    TM = (e) => {
      if (e !== e) return "NaN";
      switch (e) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return e;
      }
    };
  });
var l,
  _M = s(() => {
    l = (e) => {
      if (e == null) return {};
      if (Array.isArray(e)) return e.filter((t) => t != null).map(l);
      if (typeof e == "object") {
        let t = {};
        for (let r of Object.keys(e)) e[r] != null && (t[r] = l(e[r]));
        return t;
      }
      return e;
    };
  });
var I = s(() => {
  ZF();
  eM();
  tM();
  rM();
  oM();
  nM();
  sM();
  aM();
  ih();
  cM();
  gM();
  yM();
  xM();
  EM();
  SM();
  bM();
  wM();
  AM();
  _M();
  it();
});
import { Readable as kY } from "stream";
var RM,
  vM = s(() => {
    RM = (e) =>
      e?.body instanceof kY ||
      (typeof ReadableStream < "u" && e?.body instanceof ReadableStream);
  });
var LY,
  $Y,
  UY,
  BY,
  HY,
  zm,
  zY,
  IM = s(() => {
    Qe();
    Ps();
    I();
    Ht();
    Ql();
    vM();
    rh();
    (LY = (e) => (t, r) => async (o) => {
      let n = await e.retryStrategy(),
        i = await e.maxAttempts();
      if ($Y(n)) {
        n = n;
        let a = await n.acquireInitialRetryToken(r.partition_id),
          c = new Error(),
          m = 0,
          f = 0,
          { request: u } = o,
          p = je.isInstance(u);
        for (p && (u.headers[_m] = Ns()); ; )
          try {
            p && (u.headers[Rm] = `attempt=${m + 1}; max=${i}`);
            let { response: h, output: g } = await t(o);
            return (
              n.recordSuccess(a),
              (g.$metadata.attempts = m + 1),
              (g.$metadata.totalRetryDelay = f),
              { response: h, output: g }
            );
          } catch (h) {
            let g = UY(h);
            if (((c = th(h)), p && RM(u)))
              throw (
                ((r.logger instanceof _r ? console : r.logger)?.warn(
                  "An error was encountered in a non-retryable streaming request."
                ),
                c)
              );
            try {
              a = await n.refreshRetryTokenForRetry(a, g);
            } catch {
              throw (
                (c.$metadata || (c.$metadata = {}),
                (c.$metadata.attempts = m + 1),
                (c.$metadata.totalRetryDelay = f),
                c)
              );
            }
            m = a.getRetryCount();
            let x = a.getRetryDelay();
            (f += x), await new Promise((_) => setTimeout(_, x));
          }
      } else
        return (
          (n = n),
          n?.mode &&
            (r.userAgent = [
              ...(r.userAgent || []),
              ["cfg/retry-mode", n.mode],
            ]),
          n.retry(t, o)
        );
    }),
      ($Y = (e) =>
        typeof e.acquireInitialRetryToken < "u" &&
        typeof e.refreshRetryTokenForRetry < "u" &&
        typeof e.recordSuccess < "u"),
      (UY = (e) => {
        let t = { error: e, errorType: BY(e) },
          r = zY(e.$response);
        return r && (t.retryAfterHint = r), t;
      }),
      (BY = (e) =>
        Zo(e)
          ? "THROTTLING"
          : Is(e)
            ? "TRANSIENT"
            : vF(e)
              ? "SERVER_ERROR"
              : "CLIENT_ERROR"),
      (HY = {
        name: "retryMiddleware",
        tags: ["RETRY"],
        step: "finalizeRequest",
        priority: "high",
        override: !0,
      }),
      (zm = (e) => ({
        applyToStack: (t) => {
          t.add(LY(e), HY);
        },
      })),
      (zY = (e) => {
        if (!Nt.isInstance(e)) return;
        let t = Object.keys(e.headers).find(
          (i) => i.toLowerCase() === "retry-after"
        );
        if (!t) return;
        let r = e.headers[t],
          o = Number(r);
        return Number.isNaN(o) ? new Date(r) : new Date(o * 1e3);
      });
  });
var Os = s(() => {
  GF();
  oh();
  KF();
  Zl();
  YF();
  eh();
  IM();
});
function VY(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "lambda", region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  };
}
var PM,
  NM,
  OM,
  ah = s(() => {
    Se();
    he();
    PM = async (e, t, r) => ({
      operation: Te(t).operation,
      region:
        (await Y(e.region)()) ||
        (() => {
          throw new Error(
            "expected `region` to be configured for `aws.auth#sigv4`"
          );
        })(),
    });
    (NM = (e) => {
      let t = [];
      switch (e.operation) {
        default:
          t.push(VY(e));
      }
      return t;
    }),
      (OM = (e) => {
        let t = Sr(e);
        return Object.assign(t, {
          authSchemePreference: Y(e.authSchemePreference ?? []),
        });
      });
  });
var DM,
  b,
  M = s(() => {
    (DM = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        defaultSigningName: "lambda",
      })),
      (b = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      });
  });
var MM,
  FM = s(() => {
    MM = {
      name: "@aws-sdk/client-lambda",
      description:
        "AWS SDK for JavaScript Lambda Client for Node.js, Browser and React Native",
      version: "3.839.0",
      scripts: {
        build:
          "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-lambda",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps":
          "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client":
          "node ../../scripts/generate-clients/single-service --solo lambda",
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: !1,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.839.0",
        "@aws-sdk/credential-provider-node": "3.839.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.839.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.828.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.839.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.6.0",
        "@smithy/eventstream-serde-browser": "^4.0.4",
        "@smithy/eventstream-serde-config-resolver": "^4.1.2",
        "@smithy/eventstream-serde-node": "^4.0.4",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.13",
        "@smithy/middleware-retry": "^4.1.14",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.5",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.21",
        "@smithy/util-defaults-mode-node": "^4.0.21",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.6",
        "@smithy/util-stream": "^4.2.2",
        "@smithy/util-utf8": "^4.0.0",
        "@smithy/util-waiter": "^4.0.6",
        tslib: "^2.6.2",
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3",
      },
      engines: { node: ">=18.0.0" },
      typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
      files: ["dist-*/**"],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/",
      },
      license: "Apache-2.0",
      browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native",
      },
      homepage:
        "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-lambda",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-lambda",
      },
    };
  });
var Vm,
  jm,
  kM,
  LM,
  $M,
  UM,
  ch,
  BM = s(() => {
    Ue();
    K();
    (Vm = "AWS_ACCESS_KEY_ID"),
      (jm = "AWS_SECRET_ACCESS_KEY"),
      (kM = "AWS_SESSION_TOKEN"),
      (LM = "AWS_CREDENTIAL_EXPIRATION"),
      ($M = "AWS_CREDENTIAL_SCOPE"),
      (UM = "AWS_ACCOUNT_ID"),
      (ch = (e) => async () => {
        e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
        let t = process.env[Vm],
          r = process.env[jm],
          o = process.env[kM],
          n = process.env[LM],
          i = process.env[$M],
          a = process.env[UM];
        if (t && r) {
          let c = {
            accessKeyId: t,
            secretAccessKey: r,
            ...(o && { sessionToken: o }),
            ...(n && { expiration: new Date(n) }),
            ...(i && { credentialScope: i }),
            ...(a && { accountId: a }),
          };
          return Z(c, "CREDENTIALS_ENV_VARS", "g"), c;
        }
        throw new D("Unable to find environment variable credentials.", {
          logger: e?.logger,
        });
      });
  });
var HM = {};
Me(HM, {
  ENV_ACCOUNT_ID: () => UM,
  ENV_CREDENTIAL_SCOPE: () => $M,
  ENV_EXPIRATION: () => LM,
  ENV_KEY: () => Vm,
  ENV_SECRET: () => jm,
  ENV_SESSION: () => kM,
  fromEnv: () => ch,
});
var mh = s(() => {
  BM();
});
import { Buffer as GY } from "buffer";
import { request as WY } from "http";
function Rr(e) {
  return new Promise((t, r) => {
    let o = WY({
      method: "GET",
      ...e,
      hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1"),
    });
    o.on("error", (n) => {
      r(
        Object.assign(
          new Ie("Unable to connect to instance metadata service"),
          n
        )
      ),
        o.destroy();
    }),
      o.on("timeout", () => {
        r(new Ie("TimeoutError from instance metadata service")), o.destroy();
      }),
      o.on("response", (n) => {
        let { statusCode: i = 400 } = n;
        (i < 200 || 300 <= i) &&
          (r(
            Object.assign(
              new Ie("Error response received from instance metadata service"),
              { statusCode: i }
            )
          ),
          o.destroy());
        let a = [];
        n.on("data", (c) => {
          a.push(c);
        }),
          n.on("end", () => {
            t(GY.concat(a)), o.destroy();
          });
      }),
      o.end();
  });
}
var Gm = s(() => {
  K();
});
var Wm,
  qm,
  dh = s(() => {
    (Wm = (e) =>
      !!e &&
      typeof e == "object" &&
      typeof e.AccessKeyId == "string" &&
      typeof e.SecretAccessKey == "string" &&
      typeof e.Token == "string" &&
      typeof e.Expiration == "string"),
      (qm = (e) => ({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration),
        ...(e.AccountId && { accountId: e.AccountId }),
      }));
  });
var ODe,
  DDe,
  Ds,
  Km = s(() => {
    (ODe = 1e3),
      (DDe = 0),
      (Ds = ({ maxRetries: e = 0, timeout: t = 1e3 }) => ({
        maxRetries: e,
        timeout: t,
      }));
  });
var Fs,
  fh = s(() => {
    Fs = (e, t) => {
      let r = e();
      for (let o = 0; o < t; o++) r = r.catch(e);
      return r;
    };
  });
import { parse as qY } from "url";
var Ym,
  Xm,
  ph,
  KY,
  YY,
  XY,
  JY,
  QY,
  ZY,
  zM = s(() => {
    K();
    Gm();
    dh();
    Km();
    fh();
    (Ym = "AWS_CONTAINER_CREDENTIALS_FULL_URI"),
      (Xm = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI"),
      (ph = "AWS_CONTAINER_AUTHORIZATION_TOKEN"),
      (KY = (e = {}) => {
        let { timeout: t, maxRetries: r } = Ds(e);
        return () =>
          Fs(async () => {
            let o = await ZY({ logger: e.logger }),
              n = JSON.parse(await YY(t, o));
            if (!Wm(n))
              throw new D(
                "Invalid response received from instance metadata service.",
                { logger: e.logger }
              );
            return qm(n);
          }, r);
      }),
      (YY = async (e, t) => (
        process.env[ph] &&
          (t.headers = { ...t.headers, Authorization: process.env[ph] }),
        (await Rr({ ...t, timeout: e })).toString()
      )),
      (XY = "169.254.170.2"),
      (JY = { localhost: !0, "127.0.0.1": !0 }),
      (QY = { "http:": !0, "https:": !0 }),
      (ZY = async ({ logger: e }) => {
        if (process.env[Xm]) return { hostname: XY, path: process.env[Xm] };
        if (process.env[Ym]) {
          let t = qY(process.env[Ym]);
          if (!t.hostname || !(t.hostname in JY))
            throw new D(
              `${t.hostname} is not a valid container metadata service hostname`,
              { tryNextLink: !1, logger: e }
            );
          if (!t.protocol || !(t.protocol in QY))
            throw new D(
              `${t.protocol} is not a valid container metadata service protocol`,
              { tryNextLink: !1, logger: e }
            );
          return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
        }
        throw new D(
          `The container metadata credential provider cannot be used unless the ${Xm} or ${Ym} environment variable is set`,
          { tryNextLink: !1, logger: e }
        );
      });
  });
var Jm,
  VM = s(() => {
    K();
    Jm = class e extends D {
      constructor(t, r = !0) {
        super(t, r),
          (this.tryNextLink = r),
          (this.name = "InstanceMetadataV1FallbackError"),
          Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var so,
  uh = s(() => {
    (function (e) {
      (e.IPv4 = "http://169.254.169.254"), (e.IPv6 = "http://[fd00:ec2::254]");
    })(so || (so = {}));
  });
var e7,
  t7,
  jM,
  GM = s(() => {
    (e7 = "AWS_EC2_METADATA_SERVICE_ENDPOINT"),
      (t7 = "ec2_metadata_service_endpoint"),
      (jM = {
        environmentVariableSelector: (e) => e[e7],
        configFileSelector: (e) => e[t7],
        default: void 0,
      });
  });
var vr,
  lh = s(() => {
    (function (e) {
      (e.IPv4 = "IPv4"), (e.IPv6 = "IPv6");
    })(vr || (vr = {}));
  });
var r7,
  o7,
  WM,
  qM = s(() => {
    lh();
    (r7 = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE"),
      (o7 = "ec2_metadata_service_endpoint_mode"),
      (WM = {
        environmentVariableSelector: (e) => e[r7],
        configFileSelector: (e) => e[o7],
        default: vr.IPv4,
      });
  });
var Qm,
  n7,
  s7,
  hh = s(() => {
    eo();
    vs();
    uh();
    GM();
    lh();
    qM();
    (Qm = async () => Bt((await n7()) || (await s7()))),
      (n7 = async () => ne(jM)()),
      (s7 = async () => {
        let e = await ne(WM)();
        switch (e) {
          case vr.IPv4:
            return so.IPv4;
          case vr.IPv6:
            return so.IPv6;
          default:
            throw new Error(
              `Unsupported endpoint mode: ${e}. Select from ${Object.values(vr)}`
            );
        }
      });
  });
var i7,
  gh,
  KM = s(() => {
    (i7 =
      "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html"),
      (gh = (e, t) => {
        let r = 300 + Math.floor(Math.random() * 300),
          o = new Date(Date.now() + r * 1e3);
        t.warn(
          `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(o)}.
For more information, please visit: ` + i7
        );
        let n = e.originalExpiration ?? e.expiration;
        return { ...e, ...(n ? { originalExpiration: n } : {}), expiration: o };
      });
  });
var YM,
  XM = s(() => {
    KM();
    YM = (e, t = {}) => {
      let r = t?.logger || console,
        o;
      return async () => {
        let n;
        try {
          (n = await e()),
            n.expiration &&
              n.expiration.getTime() < Date.now() &&
              (n = gh(n, r));
        } catch (i) {
          if (o) r.warn("Credential renew failed: ", i), (n = gh(o, r));
          else throw i;
        }
        return (o = n), n;
      };
    };
  });
var ZM,
  a7,
  yh,
  JM,
  QM,
  c7,
  m7,
  d7,
  f7,
  p7,
  ek = s(() => {
    eo();
    K();
    VM();
    Gm();
    dh();
    Km();
    fh();
    hh();
    XM();
    (ZM = "/latest/meta-data/iam/security-credentials/"),
      (a7 = "/latest/api/token"),
      (yh = "AWS_EC2_METADATA_V1_DISABLED"),
      (JM = "ec2_metadata_v1_disabled"),
      (QM = "x-aws-ec2-metadata-token"),
      (c7 = (e = {}) => YM(m7(e), { logger: e.logger })),
      (m7 = (e = {}) => {
        let t = !1,
          { logger: r, profile: o } = e,
          { timeout: n, maxRetries: i } = Ds(e),
          a = async (c, m) => {
            if (t || m.headers?.[QM] == null) {
              let p = !1,
                h = !1,
                g = await ne(
                  {
                    environmentVariableSelector: (x) => {
                      let _ = x[yh];
                      if (((h = !!_ && _ !== "false"), _ === void 0))
                        throw new D(
                          `${yh} not set in env, checking config file next.`,
                          { logger: e.logger }
                        );
                      return h;
                    },
                    configFileSelector: (x) => {
                      let _ = x[JM];
                      return (p = !!_ && _ !== "false"), p;
                    },
                    default: !1,
                  },
                  { profile: o }
                )();
              if (e.ec2MetadataV1Disabled || g) {
                let x = [];
                throw (
                  (e.ec2MetadataV1Disabled &&
                    x.push(
                      "credential provider initialization (runtime option ec2MetadataV1Disabled)"
                    ),
                  p && x.push(`config file profile (${JM})`),
                  h && x.push(`process environment variable (${yh})`),
                  new Jm(
                    `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${x.join(", ")}].`
                  ))
                );
              }
            }
            let u = (
              await Fs(async () => {
                let p;
                try {
                  p = await f7(m);
                } catch (h) {
                  throw (h.statusCode === 401 && (t = !1), h);
                }
                return p;
              }, c)
            ).trim();
            return Fs(async () => {
              let p;
              try {
                p = await p7(u, m, e);
              } catch (h) {
                throw (h.statusCode === 401 && (t = !1), h);
              }
              return p;
            }, c);
          };
        return async () => {
          let c = await Qm();
          if (t)
            return (
              r?.debug(
                "AWS SDK Instance Metadata",
                "using v1 fallback (no token fetch)"
              ),
              a(i, { ...c, timeout: n })
            );
          {
            let m;
            try {
              m = (await d7({ ...c, timeout: n })).toString();
            } catch (f) {
              if (f?.statusCode === 400)
                throw Object.assign(f, {
                  message: "EC2 Metadata token request returned error",
                });
              return (
                (f.message === "TimeoutError" ||
                  [403, 404, 405].includes(f.statusCode)) &&
                  (t = !0),
                r?.debug(
                  "AWS SDK Instance Metadata",
                  "using v1 fallback (initial)"
                ),
                a(i, { ...c, timeout: n })
              );
            }
            return a(i, { ...c, headers: { [QM]: m }, timeout: n });
          }
        };
      }),
      (d7 = async (e) =>
        Rr({
          ...e,
          path: a7,
          method: "PUT",
          headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" },
        })),
      (f7 = async (e) => (await Rr({ ...e, path: ZM })).toString()),
      (p7 = async (e, t, r) => {
        let o = JSON.parse((await Rr({ ...t, path: ZM + e })).toString());
        if (!Wm(o))
          throw new D(
            "Invalid response received from instance metadata service.",
            { logger: r.logger }
          );
        return qm(o);
      });
  });
var tk = s(() => {});
var Ms = {};
Me(Ms, {
  DEFAULT_MAX_RETRIES: () => DDe,
  DEFAULT_TIMEOUT: () => ODe,
  ENV_CMDS_AUTH_TOKEN: () => ph,
  ENV_CMDS_FULL_URI: () => Ym,
  ENV_CMDS_RELATIVE_URI: () => Xm,
  Endpoint: () => so,
  fromContainerMetadata: () => KY,
  fromInstanceMetadata: () => c7,
  getInstanceMetadataEndpoint: () => Qm,
  httpRequest: () => Rr,
  providerConfigFromInit: () => Ds,
});
var ks = s(() => {
  zM();
  ek();
  Km();
  tk();
  Gm();
  hh();
  uh();
});
var rk = s(() => {});
var ok = s(() => {
  rk();
});
var nk = s(() => {});
var sk,
  ik = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(sk || (sk = {}));
  });
var ak,
  ck = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(ak || (ak = {}));
  });
var mk = s(() => {});
var dk = s(() => {});
var fk = s(() => {});
var pk = s(() => {});
var uk = s(() => {
  ik();
  ck();
  mk();
  dk();
  fk();
  pk();
});
var lk = s(() => {});
var hk = s(() => {});
var gk = s(() => {});
var yk = s(() => {});
var xk = s(() => {});
var Ek = s(() => {});
var Sk = s(() => {});
var Ck = s(() => {
  xk();
  Ek();
  Sk();
});
var bk = s(() => {});
var wk = s(() => {});
var Tk,
  Ak = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(Tk || (Tk = {}));
  });
var _k = s(() => {});
var Rk = s(() => {});
var vk = s(() => {});
var Ik = s(() => {});
var Pk = s(() => {});
var Nk = s(() => {
  _k();
  Rk();
  vk();
  Ik();
  Pk();
});
var Ok = s(() => {});
var Zm,
  xh = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(Zm || (Zm = {}));
  });
var Dk = s(() => {
  xh();
});
var Fk = s(() => {});
var Mk = s(() => {
  Dk();
  Fk();
  xh();
});
var kk = s(() => {});
var Eh,
  Lk = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(Eh || (Eh = {}));
  });
var $k = s(() => {});
var Uk = s(() => {});
var Bk = s(() => {});
var Hk = s(() => {});
var zk = s(() => {});
var Vk = s(() => {
  Uk();
  Bk();
  Hk();
  zk();
});
var jk = s(() => {});
var Gk = s(() => {});
var Wk = s(() => {});
var qk,
  Kk = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(qk || (qk = {}));
  });
var Yk = s(() => {});
var Xk = s(() => {});
var Jk = s(() => {});
var Qk = s(() => {});
var Zk = s(() => {});
var eL = s(() => {});
var tL = s(() => {});
var rL = s(() => {});
var oL = s(() => {});
var nL = s(() => {});
var sL = s(() => {});
var iL,
  aL = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(iL || (iL = {}));
  });
var cL = s(() => {});
var mL = s(() => {});
var dL = s(() => {});
var fL = s(() => {});
var pL = s(() => {});
var uL = s(() => {});
var lL = s(() => {});
var ed = s(() => {
  nk();
  uk();
  lk();
  hk();
  gk();
  yk();
  Ck();
  bk();
  wk();
  Ak();
  Nk();
  Ok();
  Mk();
  kk();
  Lk();
  $k();
  Vk();
  jk();
  Gk();
  Wk();
  Kk();
  Yk();
  Xk();
  Jk();
  Qk();
  Zk();
  eL();
  tL();
  rL();
  oL();
  nL();
  sL();
  aL();
  cL();
  mL();
  dL();
  fL();
  pL();
  uL();
  lL();
});
var hL = s(() => {
  ed();
});
var gL = s(() => {});
var yL = s(() => {});
function u7(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var td,
  xL = s(() => {
    td = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = u7(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var sn,
  EL = s(() => {
    sn = class {
      constructor(t) {
        (this.statusCode = t.statusCode),
          (this.reason = t.reason),
          (this.headers = t.headers || {}),
          (this.body = t.body);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return typeof r.statusCode == "number" && typeof r.headers == "object";
      }
    };
  });
var SL = s(() => {});
var CL = s(() => {});
var Ls = s(() => {
  ok();
  hL();
  gL();
  yL();
  xL();
  EL();
  SL();
  CL();
});
var $s,
  l7,
  Sh = s(() => {
    ($s = (e) => encodeURIComponent(e).replace(/[!'()*]/g, l7)),
      (l7 = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  });
var bL = s(() => {
  Sh();
});
var wL = s(() => {
  Sh();
  bL();
});
function rd(e) {
  let t = [];
  for (let r of Object.keys(e).sort()) {
    let o = e[r];
    if (((r = $s(r)), Array.isArray(o)))
      for (let n = 0, i = o.length; n < i; n++) t.push(`${r}=${$s(o[n])}`);
    else {
      let n = r;
      (o || typeof o == "string") && (n += `=${$s(o)}`), t.push(n);
    }
  }
  return t.join("&");
}
var od = s(() => {
  wL();
});
var TL,
  AL = s(() => {
    TL = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  });
var Ch,
  bh = s(() => {
    Ch = (e) => {
      let t = {};
      for (let r of Object.keys(e)) {
        let o = e[r];
        t[r] = Array.isArray(o) ? o.join(",") : o;
      }
      return t;
    };
  });
var Ce,
  an = s(() => {
    Ce = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: (e) => clearTimeout(e),
    };
  });
var _L,
  RL,
  vL = s(() => {
    an();
    (_L = 1e3),
      (RL = (e, t, r = 0) => {
        if (!r) return -1;
        let o = (n) => {
          let i = Ce.setTimeout(() => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(
                      `Socket timed out without establishing a connection within ${r} ms`
                    ),
                    { name: "TimeoutError" }
                  )
                );
            }, r - n),
            a = (c) => {
              c?.connecting
                ? c.on("connect", () => {
                    Ce.clearTimeout(i);
                  })
                : Ce.clearTimeout(i);
            };
          e.socket ? a(e.socket) : e.on("socket", a);
        };
        return r < 2e3 ? (o(0), 0) : Ce.setTimeout(o.bind(null, _L), _L);
      });
  });
var h7,
  IL,
  PL = s(() => {
    an();
    (h7 = 3e3),
      (IL = (e, { keepAlive: t, keepAliveMsecs: r }, o = h7) => {
        if (t !== !0) return -1;
        let n = () => {
          e.socket
            ? e.socket.setKeepAlive(t, r || 0)
            : e.on("socket", (i) => {
                i.setKeepAlive(t, r || 0);
              });
        };
        return o === 0 ? (n(), 0) : Ce.setTimeout(n, o);
      });
  });
var NL,
  OL,
  DL = s(() => {
    wh();
    an();
    (NL = 3e3),
      (OL = (e, t, r = FL) => {
        let o = (n) => {
          let i = r - n,
            a = () => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(`Connection timed out after ${r} ms`),
                    { name: "TimeoutError" }
                  )
                );
            };
          e.socket
            ? (e.socket.setTimeout(i, a),
              e.on("close", () => e.socket?.removeListener("timeout", a)))
            : e.setTimeout(i, a);
        };
        return 0 < r && r < 6e3
          ? (o(0), 0)
          : Ce.setTimeout(o.bind(null, r === 0 ? 0 : NL), NL);
      });
  });
import { Readable as g7 } from "stream";
async function Th(e, t, r = ML) {
  let o = t.headers ?? {},
    n = o.Expect || o.expect,
    i = -1,
    a = !0;
  n === "100-continue" &&
    (a = await Promise.race([
      new Promise((c) => {
        i = Number(Ce.setTimeout(() => c(!0), Math.max(ML, r)));
      }),
      new Promise((c) => {
        e.on("continue", () => {
          Ce.clearTimeout(i), c(!0);
        }),
          e.on("response", () => {
            Ce.clearTimeout(i), c(!1);
          }),
          e.on("error", () => {
            Ce.clearTimeout(i), c(!1);
          });
      }),
    ])),
    a && y7(e, t.body);
}
function y7(e, t) {
  if (t instanceof g7) {
    t.pipe(e);
    return;
  }
  if (t) {
    if (Buffer.isBuffer(t) || typeof t == "string") {
      e.end(t);
      return;
    }
    let r = t;
    if (
      typeof r == "object" &&
      r.buffer &&
      typeof r.byteOffset == "number" &&
      typeof r.byteLength == "number"
    ) {
      e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
      return;
    }
    e.end(Buffer.from(t));
    return;
  }
  e.end();
}
var ML,
  Ah = s(() => {
    an();
    ML = 6e3;
  });
import { Agent as kL, request as x7 } from "http";
import { Agent as LL, request as E7 } from "https";
var FL,
  nd,
  wh = s(() => {
    Ls();
    od();
    AL();
    bh();
    vL();
    PL();
    DL();
    an();
    Ah();
    (FL = 0),
      (nd = class e {
        static create(t) {
          return typeof t?.handle == "function" ? t : new e(t);
        }
        static checkSocketUsage(t, r, o = console) {
          let { sockets: n, requests: i, maxSockets: a } = t;
          if (typeof a != "number" || a === 1 / 0 || Date.now() - 15e3 < r)
            return r;
          if (n && i)
            for (let m in n) {
              let f = n[m]?.length ?? 0,
                u = i[m]?.length ?? 0;
              if (f >= a && u >= 2 * a)
                return (
                  o?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${f} and ${u} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                  Date.now()
                );
            }
          return r;
        }
        constructor(t) {
          (this.socketWarningTimestamp = 0),
            (this.metadata = { handlerProtocol: "http/1.1" }),
            (this.configProvider = new Promise((r, o) => {
              typeof t == "function"
                ? t()
                    .then((n) => {
                      r(this.resolveDefaultConfig(n));
                    })
                    .catch(o)
                : r(this.resolveDefaultConfig(t));
            }));
        }
        resolveDefaultConfig(t) {
          let {
              requestTimeout: r,
              connectionTimeout: o,
              socketTimeout: n,
              socketAcquisitionWarningTimeout: i,
              httpAgent: a,
              httpsAgent: c,
            } = t || {},
            m = !0,
            f = 50;
          return {
            connectionTimeout: o,
            requestTimeout: r ?? n,
            socketAcquisitionWarningTimeout: i,
            httpAgent:
              a instanceof kL || typeof a?.destroy == "function"
                ? a
                : new kL({ keepAlive: m, maxSockets: f, ...a }),
            httpsAgent:
              c instanceof LL || typeof c?.destroy == "function"
                ? c
                : new LL({ keepAlive: m, maxSockets: f, ...c }),
            logger: console,
          };
        }
        destroy() {
          this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
        }
        async handle(t, { abortSignal: r } = {}) {
          return (
            this.config || (this.config = await this.configProvider),
            new Promise((o, n) => {
              let i,
                a = [],
                c = async (v) => {
                  await i, a.forEach(Ce.clearTimeout), o(v);
                },
                m = async (v) => {
                  await i, a.forEach(Ce.clearTimeout), n(v);
                };
              if (!this.config)
                throw new Error(
                  "Node HTTP request handler config is not resolved"
                );
              if (r?.aborted) {
                let v = new Error("Request aborted");
                (v.name = "AbortError"), m(v);
                return;
              }
              let f = t.protocol === "https:",
                u = f ? this.config.httpsAgent : this.config.httpAgent;
              a.push(
                Ce.setTimeout(
                  () => {
                    this.socketWarningTimestamp = e.checkSocketUsage(
                      u,
                      this.socketWarningTimestamp,
                      this.config.logger
                    );
                  },
                  this.config.socketAcquisitionWarningTimeout ??
                    (this.config.requestTimeout ?? 2e3) +
                      (this.config.connectionTimeout ?? 1e3)
                )
              );
              let p = rd(t.query || {}),
                h;
              if (t.username != null || t.password != null) {
                let v = t.username ?? "",
                  H = t.password ?? "";
                h = `${v}:${H}`;
              }
              let g = t.path;
              p && (g += `?${p}`), t.fragment && (g += `#${t.fragment}`);
              let x = t.hostname ?? "";
              x[0] === "[" && x.endsWith("]")
                ? (x = t.hostname.slice(1, -1))
                : (x = t.hostname);
              let _ = {
                  headers: t.headers,
                  host: x,
                  method: t.method,
                  path: g,
                  port: t.port,
                  agent: u,
                  auth: h,
                },
                R = (f ? E7 : x7)(_, (v) => {
                  let H = new sn({
                    statusCode: v.statusCode || -1,
                    reason: v.statusMessage,
                    headers: Ch(v.headers),
                    body: v,
                  });
                  c({ response: H });
                });
              if (
                (R.on("error", (v) => {
                  TL.includes(v.code)
                    ? m(Object.assign(v, { name: "TimeoutError" }))
                    : m(v);
                }),
                r)
              ) {
                let v = () => {
                  R.destroy();
                  let H = new Error("Request aborted");
                  (H.name = "AbortError"), m(H);
                };
                if (typeof r.addEventListener == "function") {
                  let H = r;
                  H.addEventListener("abort", v, { once: !0 }),
                    R.once("close", () => H.removeEventListener("abort", v));
                } else r.onabort = v;
              }
              a.push(RL(R, m, this.config.connectionTimeout)),
                a.push(OL(R, m, this.config.requestTimeout));
              let $ = _.agent;
              typeof $ == "object" &&
                "keepAlive" in $ &&
                a.push(
                  IL(R, {
                    keepAlive: $.keepAlive,
                    keepAliveMsecs: $.keepAliveMsecs,
                  })
                ),
                (i = Th(R, t, this.config.requestTimeout).catch(
                  (v) => (a.forEach(Ce.clearTimeout), n(v))
                ));
            })
          );
        }
        updateHttpClientConfig(t, r) {
          (this.config = void 0),
            (this.configProvider = this.configProvider.then((o) => ({
              ...o,
              [t]: r,
            })));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      });
  });
var $L = s(() => {});
var UL = s(() => {
  $L();
});
var BL = s(() => {
  Ls();
  od();
  bh();
  UL();
  Ah();
});
import { Writable as S7 } from "stream";
var sd,
  HL = s(() => {
    sd = class extends S7 {
      constructor() {
        super(...arguments), (this.bufferedBytes = []);
      }
      _write(t, r, o) {
        this.bufferedBytes.push(t), o();
      }
    };
  });
async function b7(e) {
  let t = [],
    r = e.getReader(),
    o = !1,
    n = 0;
  for (; !o; ) {
    let { done: c, value: m } = await r.read();
    m && (t.push(m), (n += m.length)), (o = c);
  }
  let i = new Uint8Array(n),
    a = 0;
  for (let c of t) i.set(c, a), (a += c.length);
  return i;
}
var zL,
  C7,
  VL = s(() => {
    HL();
    (zL = (e) =>
      C7(e)
        ? b7(e)
        : new Promise((t, r) => {
            let o = new sd();
            e.pipe(o),
              e.on("error", (n) => {
                o.end(), r(n);
              }),
              o.on("error", r),
              o.on("finish", function () {
                let n = new Uint8Array(Buffer.concat(this.bufferedBytes));
                t(n);
              });
          })),
      (C7 = (e) =>
        typeof ReadableStream == "function" && e instanceof ReadableStream);
  });
var _h = s(() => {
  wh();
  BL();
  VL();
});
var w7,
  T7,
  A7,
  jL,
  GL = s(() => {
    K();
    (w7 = "169.254.170.2"),
      (T7 = "169.254.170.23"),
      (A7 = "[fd00:ec2::23]"),
      (jL = (e, t) => {
        if (
          e.protocol !== "https:" &&
          !(e.hostname === w7 || e.hostname === T7 || e.hostname === A7)
        ) {
          if (e.hostname.includes("[")) {
            if (
              e.hostname === "[::1]" ||
              e.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]"
            )
              return;
          } else {
            if (e.hostname === "localhost") return;
            let r = e.hostname.split("."),
              o = (n) => {
                let i = parseInt(n, 10);
                return 0 <= i && i <= 255;
              };
            if (
              r[0] === "127" &&
              o(r[1]) &&
              o(r[2]) &&
              o(r[3]) &&
              r.length === 4
            )
              return;
          }
          throw new D(
            `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,
            { logger: t }
          );
        }
      });
  });
var WL = s(() => {});
var Rh = s(() => {
  WL();
});
var qL = s(() => {
  Rh();
});
var KL = s(() => {
  Ee();
});
var YL = s(() => {
  Rh();
  ed();
});
var XL = s(() => {});
var JL = s(() => {});
var vh = s(() => {});
var QL = s(() => {
  vh();
});
var ZL = s(() => {});
var e$ = s(() => {});
var t$ = s(() => {
  Ee();
});
var r$ = s(() => {
  ed();
});
var o$ = s(() => {});
var n$ = s(() => {
  r$();
  o$();
});
var s$ = s(() => {
  n$();
});
var i$ = s(() => {});
var a$ = s(() => {});
var c$ = s(() => {});
var m$ = s(() => {});
var d$ = s(() => {});
var f$ = s(() => {
  Ee();
});
var p$ = s(() => {});
var u$ = s(() => {});
var l$ = s(() => {
  qL();
  KL();
  YL();
  XL();
  JL();
  QL();
  ZL();
  e$();
  vh();
  t$();
  s$();
  i$();
  a$();
  c$();
  m$();
  d$();
  f$();
  p$();
  u$();
  it();
});
import { Buffer as Ih } from "buffer";
var cn,
  id,
  mn = s(() => {
    st();
    (cn = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Ih.from(e, t, r);
    }),
      (id = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Ih.from(e, t) : Ih.from(e);
      });
  });
var R7,
  Ph,
  h$ = s(() => {
    mn();
    (R7 = /^[A-Za-z0-9+/]*={0,2}$/),
      (Ph = (e) => {
        if ((e.length * 3) % 4 !== 0)
          throw new TypeError("Incorrect padding on base64 string.");
        if (!R7.exec(e)) throw new TypeError("Invalid base64 string.");
        let t = id(e, "base64");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      });
  });
var ad,
  Nh = s(() => {
    mn();
    ad = (e) => {
      let t = id(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var g$ = s(() => {
  Nh();
});
var Oh,
  y$ = s(() => {
    mn();
    Oh = (e) => {
      if (typeof e == "string") return e;
      if (
        typeof e != "object" ||
        typeof e.byteOffset != "number" ||
        typeof e.byteLength != "number"
      )
        throw new Error(
          "@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."
        );
      return cn(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    };
  });
var cd = s(() => {
  Nh();
  g$();
  y$();
});
var Us,
  x$ = s(() => {
    mn();
    cd();
    Us = (e) => {
      let t;
      if (
        (typeof e == "string" ? (t = ad(e)) : (t = e),
        typeof t != "object" ||
          typeof t.byteOffset != "number" ||
          typeof t.byteLength != "number")
      )
        throw new Error(
          "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."
        );
      return cn(t.buffer, t.byteOffset, t.byteLength).toString("base64");
    };
  });
var dn = s(() => {
  h$();
  x$();
});
var E$ = s(() => {
  dn();
  cd();
  Dh();
});
var Dh = s(() => {
  E$();
});
var Fh = s(() => {
  dn();
});
var Ir,
  Pr = s(() => {
    Ir = (e) =>
      typeof ReadableStream == "function" &&
      (e?.constructor?.name === ReadableStream.name ||
        e instanceof ReadableStream);
  });
var S$ = s(() => {});
var C$ = s(() => {
  dn();
  Pr();
  S$();
});
var b$ = s(() => {
  Pr();
  Fh();
  C$();
});
var Mh = s(() => {});
var w$ = s(() => {
  Mh();
});
var T$ = s(() => {
  Mh();
  w$();
  Pr();
});
var A$ = s(() => {});
var _$ = s(() => {});
var R$ = s(() => {
  _$();
  Pr();
});
var v$ = s(() => {});
var I$ = s(() => {});
var P$ = s(() => {
  Ls();
  od();
  v$();
  I$();
});
async function I7(e) {
  let t = await N7(e),
    r = Ph(t);
  return new Uint8Array(r);
}
async function P7(e) {
  let t = [],
    r = e.getReader(),
    o = !1,
    n = 0;
  for (; !o; ) {
    let { done: c, value: m } = await r.read();
    m && (t.push(m), (n += m.length)), (o = c);
  }
  let i = new Uint8Array(n),
    a = 0;
  for (let c of t) i.set(c, a), (a += c.length);
  return i;
}
function N7(e) {
  return new Promise((t, r) => {
    let o = new FileReader();
    (o.onloadend = () => {
      if (o.readyState !== 2) return r(new Error("Reader aborted too early"));
      let n = o.result ?? "",
        i = n.indexOf(","),
        a = i > -1 ? i + 1 : n.length;
      t(n.substring(a));
    }),
      (o.onabort = () => r(new Error("Read aborted"))),
      (o.onerror = () => r(o.error)),
      o.readAsDataURL(e);
  });
}
var N$,
  O$ = s(() => {
    dn();
    N$ = async (e) =>
      (typeof Blob == "function" && e instanceof Blob) ||
      e.constructor?.name === "Blob"
        ? Blob.prototype.arrayBuffer !== void 0
          ? new Uint8Array(await e.arrayBuffer())
          : I7(e)
        : P7(e);
  });
var D$ = s(() => {
  P$();
  O$();
});
var F$,
  k$,
  M$,
  L$ = s(() => {
    D$();
    dn();
    Dt();
    cd();
    Pr();
    (F$ = "The stream has already been transformed."),
      (k$ = (e) => {
        if (!M$(e) && !Ir(e)) {
          let n = e?.__proto__?.constructor?.name || e;
          throw new Error(
            `Unexpected stream implementation, expect Blob or ReadableStream, got ${n}`
          );
        }
        let t = !1,
          r = async () => {
            if (t) throw new Error(F$);
            return (t = !0), await N$(e);
          },
          o = (n) => {
            if (typeof n.stream != "function")
              throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
            return n.stream();
          };
        return Object.assign(e, {
          transformToByteArray: r,
          transformToString: async (n) => {
            let i = await r();
            if (n === "base64") return Us(i);
            if (n === "hex") return ae(i);
            if (n === void 0 || n === "utf8" || n === "utf-8") return Oh(i);
            if (typeof TextDecoder == "function")
              return new TextDecoder(n).decode(i);
            throw new Error(
              "TextDecoder is not available, please make sure polyfill is provided."
            );
          },
          transformToWebStream: () => {
            if (t) throw new Error(F$);
            if (((t = !0), M$(e))) return o(e);
            if (Ir(e)) return e;
            throw new Error(`Cannot transform payload to web stream, got ${e}`);
          },
        });
      }),
      (M$ = (e) => typeof Blob == "function" && e instanceof Blob);
  });
import { Readable as kh } from "stream";
var $$,
  U$,
  B$ = s(() => {
    _h();
    mn();
    L$();
    ($$ = "The stream has already been transformed."),
      (U$ = (e) => {
        if (!(e instanceof kh))
          try {
            return k$(e);
          } catch {
            let n = e?.__proto__?.constructor?.name || e;
            throw new Error(
              `Unexpected stream implementation, expect Stream.Readable instance, got ${n}`
            );
          }
        let t = !1,
          r = async () => {
            if (t) throw new Error($$);
            return (t = !0), await zL(e);
          };
        return Object.assign(e, {
          transformToByteArray: r,
          transformToString: async (o) => {
            let n = await r();
            return o === void 0 || Buffer.isEncoding(o)
              ? cn(n.buffer, n.byteOffset, n.byteLength).toString(o)
              : new TextDecoder(o).decode(n);
          },
          transformToWebStream: () => {
            if (t) throw new Error($$);
            if (e.readableFlowing !== null)
              throw new Error(
                "The stream has been consumed by other callbacks."
              );
            if (typeof kh.toWeb != "function")
              throw new Error(
                "Readable.toWeb() is not supported. Please ensure a polyfill is available."
              );
            return (t = !0), kh.toWeb(e);
          },
        });
      });
  });
var H$ = s(() => {});
var z$ = s(() => {
  H$();
  Pr();
});
var V$ = s(() => {
  Dh();
  Fh();
  b$();
  T$();
  A$();
  R$();
  B$();
  z$();
  Pr();
});
function j$(e) {
  return new td({
    protocol: e.protocol,
    hostname: e.hostname,
    port: Number(e.port),
    path: e.pathname,
    query: Array.from(e.searchParams.entries()).reduce(
      (t, [r, o]) => ((t[r] = o), t),
      {}
    ),
    fragment: e.hash,
  });
}
async function G$(e, t) {
  let o = await U$(e.body).transformToString();
  if (e.statusCode === 200) {
    let n = JSON.parse(o);
    if (
      typeof n.AccessKeyId != "string" ||
      typeof n.SecretAccessKey != "string" ||
      typeof n.Token != "string" ||
      typeof n.Expiration != "string"
    )
      throw new D(
        "HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",
        { logger: t }
      );
    return {
      accessKeyId: n.AccessKeyId,
      secretAccessKey: n.SecretAccessKey,
      sessionToken: n.Token,
      expiration: GA(n.Expiration),
    };
  }
  if (e.statusCode >= 400 && e.statusCode < 500) {
    let n = {};
    try {
      n = JSON.parse(o);
    } catch {}
    throw Object.assign(
      new D(`Server responded with status: ${e.statusCode}`, { logger: t }),
      { Code: n.Code, Message: n.Message }
    );
  }
  throw new D(`Server responded with status: ${e.statusCode}`, { logger: t });
}
var W$ = s(() => {
  K();
  Ls();
  l$();
  V$();
});
var q$,
  K$ = s(() => {
    q$ = (e, t, r) => async () => {
      for (let o = 0; o < t; ++o)
        try {
          return await e();
        } catch {
          await new Promise((i) => setTimeout(i, r));
        }
      return await e();
    };
  });
import O7 from "fs/promises";
var D7,
  F7,
  M7,
  k7,
  L7,
  Y$,
  X$ = s(() => {
    Ue();
    _h();
    K();
    GL();
    W$();
    K$();
    (D7 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI"),
      (F7 = "http://169.254.170.2"),
      (M7 = "AWS_CONTAINER_CREDENTIALS_FULL_URI"),
      (k7 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE"),
      (L7 = "AWS_CONTAINER_AUTHORIZATION_TOKEN"),
      (Y$ = (e = {}) => {
        e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
        let t,
          r = e.awsContainerCredentialsRelativeUri ?? process.env[D7],
          o = e.awsContainerCredentialsFullUri ?? process.env[M7],
          n = e.awsContainerAuthorizationToken ?? process.env[L7],
          i = e.awsContainerAuthorizationTokenFile ?? process.env[k7],
          a =
            e.logger?.constructor?.name === "NoOpLogger" || !e.logger
              ? console.warn
              : e.logger.warn;
        if (
          (r &&
            o &&
            (a(
              "@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."
            ),
            a("awsContainerCredentialsFullUri will take precedence.")),
          n &&
            i &&
            (a(
              "@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."
            ),
            a("awsContainerAuthorizationToken will take precedence.")),
          o)
        )
          t = o;
        else if (r) t = `${F7}${r}`;
        else
          throw new D(
            `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
            { logger: e.logger }
          );
        let c = new URL(t);
        jL(c, e.logger);
        let m = new nd({
          requestTimeout: e.timeout ?? 1e3,
          connectionTimeout: e.timeout ?? 1e3,
        });
        return q$(
          async () => {
            let f = j$(c);
            n
              ? (f.headers.Authorization = n)
              : i &&
                (f.headers.Authorization = (await O7.readFile(i)).toString());
            try {
              let u = await m.handle(f);
              return G$(u.response).then((p) => Z(p, "CREDENTIALS_HTTP", "z"));
            } catch (u) {
              throw new D(String(u), { logger: e.logger });
            }
          },
          e.maxRetries ?? 3,
          e.timeout ?? 1e3
        );
      });
  });
var Lh = {};
Me(Lh, { fromHttp: () => Y$ });
var $h = s(() => {
  X$();
});
var J$,
  Q$,
  Z$ = s(() => {
    K();
    (J$ = "AWS_EC2_METADATA_DISABLED"),
      (Q$ = async (e) => {
        let {
          ENV_CMDS_FULL_URI: t,
          ENV_CMDS_RELATIVE_URI: r,
          fromContainerMetadata: o,
          fromInstanceMetadata: n,
        } = await Promise.resolve().then(() => (ks(), Ms));
        if (process.env[r] || process.env[t]) {
          e.logger?.debug(
            "@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata"
          );
          let { fromHttp: i } = await Promise.resolve().then(() => ($h(), Lh));
          return bt(i(e), o(e));
        }
        return process.env[J$] && process.env[J$] !== "false"
          ? async () => {
              throw new D("EC2 Instance Metadata Service access disabled", {
                logger: e.logger,
              });
            }
          : (e.logger?.debug(
              "@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"
            ),
            n(e));
      });
  });
var Uh,
  Bh = s(() => {
    Uh = (e) =>
      e &&
      (typeof e.sso_start_url == "string" ||
        typeof e.sso_account_id == "string" ||
        typeof e.sso_session == "string" ||
        typeof e.sso_region == "string" ||
        typeof e.sso_role_name == "string");
  });
var e1 = s(() => {
  K();
});
var fn,
  md = s(() => {
    fn =
      "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
  });
var dd,
  fd,
  t1 = s(() => {
    (dd = (e) => ({
      setHttpHandler(t) {
        e.httpHandler = t;
      },
      httpHandler() {
        return e.httpHandler;
      },
      updateHttpClientConfig(t, r) {
        e.httpHandler?.updateHttpClientConfig(t, r);
      },
      httpHandlerConfigs() {
        return e.httpHandler.httpHandlerConfigs();
      },
    })),
      (fd = (e) => ({ httpHandler: e.httpHandler() }));
  });
var r1 = s(() => {
  t1();
});
var o1 = s(() => {});
var n1,
  s1 = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(n1 || (n1 = {}));
  });
var i1,
  a1 = s(() => {
    (function (e) {
      (e.HEADER = "header"), (e.QUERY = "query");
    })(i1 || (i1 = {}));
  });
var c1 = s(() => {});
var m1 = s(() => {});
var d1 = s(() => {});
var f1 = s(() => {});
var p1 = s(() => {
  s1();
  a1();
  c1();
  m1();
  d1();
  f1();
});
var u1 = s(() => {});
var l1 = s(() => {});
var h1 = s(() => {});
var g1 = s(() => {});
var y1 = s(() => {});
var x1 = s(() => {});
var E1 = s(() => {});
var S1 = s(() => {
  y1();
  x1();
  E1();
});
var C1 = s(() => {});
var b1 = s(() => {});
var w1,
  T1 = s(() => {
    (function (e) {
      (e.HTTP = "http"), (e.HTTPS = "https");
    })(w1 || (w1 = {}));
  });
var A1 = s(() => {});
var _1 = s(() => {});
var R1 = s(() => {});
var v1 = s(() => {});
var I1 = s(() => {});
var P1 = s(() => {
  A1();
  _1();
  R1();
  v1();
  I1();
});
var N1 = s(() => {});
var pn,
  Hh = s(() => {
    (function (e) {
      (e.MD5 = "md5"),
        (e.CRC32 = "crc32"),
        (e.CRC32C = "crc32c"),
        (e.SHA1 = "sha1"),
        (e.SHA256 = "sha256");
    })(pn || (pn = {}));
  });
var O1 = s(() => {
  Hh();
});
var D1 = s(() => {});
var F1 = s(() => {
  O1();
  D1();
  Hh();
});
var M1 = s(() => {});
var zh,
  k1 = s(() => {
    (function (e) {
      (e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER");
    })(zh || (zh = {}));
  });
var L1 = s(() => {});
var $1 = s(() => {});
var U1 = s(() => {});
var B1 = s(() => {});
var H1 = s(() => {});
var z1 = s(() => {
  $1();
  U1();
  B1();
  H1();
});
var V1 = s(() => {});
var j1,
  G1 = s(() => {
    j1 = "__smithy_context";
  });
var W1 = s(() => {});
var Nr,
  q1 = s(() => {
    (function (e) {
      (e.PROFILE = "profile"),
        (e.SSO_SESSION = "sso-session"),
        (e.SERVICES = "services");
    })(Nr || (Nr = {}));
  });
var K1 = s(() => {});
var Y1 = s(() => {});
var X1 = s(() => {});
var J1 = s(() => {});
var Q1 = s(() => {});
var Z1 = s(() => {});
var eU = s(() => {});
var tU = s(() => {});
var rU = s(() => {});
var oU = s(() => {});
var nU = s(() => {});
var sU,
  iU = s(() => {
    (function (e) {
      (e.HTTP_0_9 = "http/0.9"),
        (e.HTTP_1_0 = "http/1.0"),
        (e.TDS_8_0 = "tds/8.0");
    })(sU || (sU = {}));
  });
var aU = s(() => {});
var cU = s(() => {});
var mU = s(() => {});
var dU = s(() => {});
var fU = s(() => {});
var pU = s(() => {});
var uU = s(() => {});
var io = s(() => {
  o1();
  p1();
  u1();
  l1();
  h1();
  g1();
  S1();
  C1();
  b1();
  T1();
  P1();
  N1();
  F1();
  M1();
  k1();
  L1();
  z1();
  V1();
  G1();
  W1();
  q1();
  K1();
  Y1();
  X1();
  J1();
  Q1();
  Z1();
  eU();
  tU();
  rU();
  oU();
  nU();
  iU();
  aU();
  cU();
  mU();
  dU();
  fU();
  pU();
  uU();
});
var lU = s(() => {
  io();
});
var hU = s(() => {});
var gU = s(() => {});
function $7(e) {
  return Object.keys(e).reduce((t, r) => {
    let o = e[r];
    return { ...t, [r]: Array.isArray(o) ? [...o] : o };
  }, {});
}
var De,
  yU = s(() => {
    De = class e {
      constructor(t) {
        (this.method = t.method || "GET"),
          (this.hostname = t.hostname || "localhost"),
          (this.port = t.port),
          (this.query = t.query || {}),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.protocol = t.protocol
            ? t.protocol.slice(-1) !== ":"
              ? `${t.protocol}:`
              : t.protocol
            : "https:"),
          (this.path = t.path
            ? t.path.charAt(0) !== "/"
              ? `/${t.path}`
              : t.path
            : "/"),
          (this.username = t.username),
          (this.password = t.password),
          (this.fragment = t.fragment);
      }
      static clone(t) {
        let r = new e({ ...t, headers: { ...t.headers } });
        return r.query && (r.query = $7(r.query)), r;
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return e.clone(this);
      }
    };
  });
var zt,
  xU = s(() => {
    zt = class {
      constructor(t) {
        (this.statusCode = t.statusCode),
          (this.reason = t.reason),
          (this.headers = t.headers || {}),
          (this.body = t.body);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return typeof r.statusCode == "number" && typeof r.headers == "object";
      }
    };
  });
var EU = s(() => {});
var SU = s(() => {});
var We = s(() => {
  r1();
  lU();
  hU();
  gU();
  yU();
  xU();
  EU();
  SU();
});
var U7,
  B7,
  pd,
  Vh = s(() => {
    We();
    (U7 = (e) => (t) => async (r) => {
      if (!De.isInstance(r.request)) return t(r);
      let { request: o } = r,
        { handlerProtocol: n = "" } = e.requestHandler.metadata || {};
      if (n.indexOf("h2") >= 0 && !o.headers[":authority"])
        delete o.headers.host,
          (o.headers[":authority"] = o.hostname + (o.port ? ":" + o.port : ""));
      else if (!o.headers.host) {
        let i = o.hostname;
        o.port != null && (i += `:${o.port}`), (o.headers.host = i);
      }
      return t(r);
    }),
      (B7 = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: ["HOST"],
        override: !0,
      }),
      (pd = (e) => ({
        applyToStack: (t) => {
          t.add(U7(e), B7);
        },
      }));
  });
var H7,
  z7,
  ud,
  CU = s(() => {
    (H7 = () => (e, t) => async (r) => {
      try {
        let o = await e(r),
          {
            clientName: n,
            commandName: i,
            logger: a,
            dynamoDbDocumentClientOptions: c = {},
          } = t,
          {
            overrideInputFilterSensitiveLog: m,
            overrideOutputFilterSensitiveLog: f,
          } = c,
          u = m ?? t.inputFilterSensitiveLog,
          p = f ?? t.outputFilterSensitiveLog,
          { $metadata: h, ...g } = o.output;
        return (
          a?.info?.({
            clientName: n,
            commandName: i,
            input: u(r.input),
            output: p(g),
            metadata: h,
          }),
          o
        );
      } catch (o) {
        let {
            clientName: n,
            commandName: i,
            logger: a,
            dynamoDbDocumentClientOptions: c = {},
          } = t,
          { overrideInputFilterSensitiveLog: m } = c,
          f = m ?? t.inputFilterSensitiveLog;
        throw (
          (a?.error?.({
            clientName: n,
            commandName: i,
            input: f(r.input),
            error: o,
            metadata: o.$metadata,
          }),
          o)
        );
      }
    }),
      (z7 = {
        name: "loggerMiddleware",
        tags: ["LOGGER"],
        step: "initialize",
        override: !0,
      }),
      (ud = (e) => ({
        applyToStack: (t) => {
          t.add(H7(), z7);
        },
      }));
  });
var jh = s(() => {
  CU();
});
var Gh,
  V7,
  j7,
  G7,
  W7,
  ld,
  Wh = s(() => {
    We();
    (Gh = "X-Amzn-Trace-Id"),
      (V7 = "AWS_LAMBDA_FUNCTION_NAME"),
      (j7 = "_X_AMZN_TRACE_ID"),
      (G7 = (e) => (t) => async (r) => {
        let { request: o } = r;
        if (!De.isInstance(o) || e.runtime !== "node") return t(r);
        let n =
          Object.keys(o.headers ?? {}).find(
            (m) => m.toLowerCase() === Gh.toLowerCase()
          ) ?? Gh;
        if (o.headers.hasOwnProperty(n)) return t(r);
        let i = process.env[V7],
          a = process.env[j7],
          c = (m) => typeof m == "string" && m.length > 0;
        return c(i) && c(a) && (o.headers[Gh] = a), t({ ...r, request: o });
      }),
      (W7 = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: !0,
        priority: "low",
      }),
      (ld = (e) => ({
        applyToStack: (t) => {
          t.add(G7(e), W7);
        },
      }));
  });
function q7(e) {
  return e === void 0 ? !0 : typeof e == "string" && e.length <= 50;
}
function hd(e) {
  let t = Ot(e.userAgentAppId ?? qh),
    { customUserAgent: r } = e;
  return Object.assign(e, {
    customUserAgent: typeof r == "string" ? [[r]] : r,
    userAgentAppId: async () => {
      let o = await t();
      if (!q7(o)) {
        let n =
          e.logger?.constructor?.name === "NoOpLogger" || !e.logger
            ? console
            : e.logger;
        typeof o != "string"
          ? n?.warn("userAgentAppId must be a string or undefined.")
          : o.length > 50 &&
            n?.warn(
              "The provided userAgentAppId exceeds the maximum length of 50 characters."
            );
      }
      return o;
    },
  });
}
var qh,
  bU = s(() => {
    Q();
    qh = void 0;
  });
var Kh = s(() => {
  $e();
});
var Yh,
  wU = s(() => {
    $e();
    Kh();
    Yh = (e, t = !1) => {
      if (t) {
        for (let r of e.split(".")) if (!Yh(r)) return !1;
        return !0;
      }
      return !(
        !Jr(e) ||
        e.length < 3 ||
        e.length > 63 ||
        e !== e.toLowerCase() ||
        hr(e)
      );
    };
  });
var TU,
  K7,
  AU,
  _U = s(() => {
    (TU = ":"),
      (K7 = "/"),
      (AU = (e) => {
        let t = e.split(TU);
        if (t.length < 6) return null;
        let [r, o, n, i, a, ...c] = t;
        if (r !== "arn" || o === "" || n === "" || c.join(TU) === "")
          return null;
        let m = c.map((f) => f.split(K7)).flat();
        return {
          partition: o,
          service: n,
          region: i,
          accountId: a,
          resourceId: m,
        };
      });
  });
var vU,
  RU = s(() => {
    vU = {
      partitions: [
        {
          id: "aws",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-east-1",
            name: "aws",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
          regions: {
            "af-south-1": { description: "Africa (Cape Town)" },
            "ap-east-1": { description: "Asia Pacific (Hong Kong)" },
            "ap-east-2": { description: "Asia Pacific (Taipei)" },
            "ap-northeast-1": { description: "Asia Pacific (Tokyo)" },
            "ap-northeast-2": { description: "Asia Pacific (Seoul)" },
            "ap-northeast-3": { description: "Asia Pacific (Osaka)" },
            "ap-south-1": { description: "Asia Pacific (Mumbai)" },
            "ap-south-2": { description: "Asia Pacific (Hyderabad)" },
            "ap-southeast-1": { description: "Asia Pacific (Singapore)" },
            "ap-southeast-2": { description: "Asia Pacific (Sydney)" },
            "ap-southeast-3": { description: "Asia Pacific (Jakarta)" },
            "ap-southeast-4": { description: "Asia Pacific (Melbourne)" },
            "ap-southeast-5": { description: "Asia Pacific (Malaysia)" },
            "ap-southeast-7": { description: "Asia Pacific (Thailand)" },
            "aws-global": { description: "AWS Standard global region" },
            "ca-central-1": { description: "Canada (Central)" },
            "ca-west-1": { description: "Canada West (Calgary)" },
            "eu-central-1": { description: "Europe (Frankfurt)" },
            "eu-central-2": { description: "Europe (Zurich)" },
            "eu-north-1": { description: "Europe (Stockholm)" },
            "eu-south-1": { description: "Europe (Milan)" },
            "eu-south-2": { description: "Europe (Spain)" },
            "eu-west-1": { description: "Europe (Ireland)" },
            "eu-west-2": { description: "Europe (London)" },
            "eu-west-3": { description: "Europe (Paris)" },
            "il-central-1": { description: "Israel (Tel Aviv)" },
            "me-central-1": { description: "Middle East (UAE)" },
            "me-south-1": { description: "Middle East (Bahrain)" },
            "mx-central-1": { description: "Mexico (Central)" },
            "sa-east-1": { description: "South America (Sao Paulo)" },
            "us-east-1": { description: "US East (N. Virginia)" },
            "us-east-2": { description: "US East (Ohio)" },
            "us-west-1": { description: "US West (N. California)" },
            "us-west-2": { description: "US West (Oregon)" },
          },
        },
        {
          id: "aws-cn",
          outputs: {
            dnsSuffix: "amazonaws.com.cn",
            dualStackDnsSuffix: "api.amazonwebservices.com.cn",
            implicitGlobalRegion: "cn-northwest-1",
            name: "aws-cn",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^cn\\-\\w+\\-\\d+$",
          regions: {
            "aws-cn-global": { description: "AWS China global region" },
            "cn-north-1": { description: "China (Beijing)" },
            "cn-northwest-1": { description: "China (Ningxia)" },
          },
        },
        {
          id: "aws-us-gov",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-gov-west-1",
            name: "aws-us-gov",
            supportsDualStack: !0,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
          regions: {
            "aws-us-gov-global": {
              description: "AWS GovCloud (US) global region",
            },
            "us-gov-east-1": { description: "AWS GovCloud (US-East)" },
            "us-gov-west-1": { description: "AWS GovCloud (US-West)" },
          },
        },
        {
          id: "aws-iso",
          outputs: {
            dnsSuffix: "c2s.ic.gov",
            dualStackDnsSuffix: "c2s.ic.gov",
            implicitGlobalRegion: "us-iso-east-1",
            name: "aws-iso",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-global": { description: "AWS ISO (US) global region" },
            "us-iso-east-1": { description: "US ISO East" },
            "us-iso-west-1": { description: "US ISO WEST" },
          },
        },
        {
          id: "aws-iso-b",
          outputs: {
            dnsSuffix: "sc2s.sgov.gov",
            dualStackDnsSuffix: "sc2s.sgov.gov",
            implicitGlobalRegion: "us-isob-east-1",
            name: "aws-iso-b",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-b-global": { description: "AWS ISOB (US) global region" },
            "us-isob-east-1": { description: "US ISOB East (Ohio)" },
          },
        },
        {
          id: "aws-iso-e",
          outputs: {
            dnsSuffix: "cloud.adc-e.uk",
            dualStackDnsSuffix: "cloud.adc-e.uk",
            implicitGlobalRegion: "eu-isoe-west-1",
            name: "aws-iso-e",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-e-global": {
              description: "AWS ISOE (Europe) global region",
            },
            "eu-isoe-west-1": { description: "EU ISOE West" },
          },
        },
        {
          id: "aws-iso-f",
          outputs: {
            dnsSuffix: "csp.hci.ic.gov",
            dualStackDnsSuffix: "csp.hci.ic.gov",
            implicitGlobalRegion: "us-isof-south-1",
            name: "aws-iso-f",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-f-global": { description: "AWS ISOF global region" },
            "us-isof-east-1": { description: "US ISOF EAST" },
            "us-isof-south-1": { description: "US ISOF SOUTH" },
          },
        },
        {
          id: "aws-eusc",
          outputs: {
            dnsSuffix: "amazonaws.eu",
            dualStackDnsSuffix: "amazonaws.eu",
            implicitGlobalRegion: "eusc-de-east-1",
            name: "aws-eusc",
            supportsDualStack: !1,
            supportsFIPS: !0,
          },
          regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
          regions: { "eusc-de-east-1": { description: "EU (Germany)" } },
        },
      ],
      version: "1.1",
    };
  });
var X7,
  J7,
  IU,
  PU,
  Xh = s(() => {
    RU();
    (X7 = vU),
      (J7 = ""),
      (IU = (e) => {
        let { partitions: t } = X7;
        for (let o of t) {
          let { regions: n, outputs: i } = o;
          for (let [a, c] of Object.entries(n))
            if (a === e) return { ...i, ...c };
        }
        for (let o of t) {
          let { regionRegex: n, outputs: i } = o;
          if (new RegExp(n).test(e)) return { ...i };
        }
        let r = t.find((o) => o.id === "aws");
        if (!r)
          throw new Error(
            "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
          );
        return { ...r.outputs };
      }),
      (PU = () => J7);
  });
var Bs,
  NU = s(() => {
    $e();
    wU();
    _U();
    Xh();
    Bs = { isVirtualHostableS3Bucket: Yh, parseArn: AU, partition: IU };
    Le.aws = Bs;
  });
var OU = s(() => {
  $e();
});
var DU = s(() => {
  $e();
});
var FU = s(() => {});
var MU = s(() => {});
var kU = s(() => {});
var LU = s(() => {});
var $U = s(() => {});
var UU = s(() => {
  DU();
  FU();
  MU();
  kU();
  LU();
  $U();
});
var gd = s(() => {
  NU();
  Xh();
  Kh();
  OU();
  UU();
});
async function BU(e, t, r) {
  if (
    (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" &&
      me(e, "PROTOCOL_RPC_V2_CBOR", "M"),
    typeof t.retryStrategy == "function")
  ) {
    let i = await t.retryStrategy();
    typeof i.acquireInitialRetryToken == "function"
      ? i.constructor?.name?.includes("Adaptive")
        ? me(e, "RETRY_MODE_ADAPTIVE", "F")
        : me(e, "RETRY_MODE_STANDARD", "E")
      : me(e, "RETRY_MODE_LEGACY", "D");
  }
  if (typeof t.accountIdEndpointMode == "function") {
    let i = e.endpointV2;
    switch (
      (String(i?.url?.hostname).match(Q7) && me(e, "ACCOUNT_ID_ENDPOINT", "O"),
      await t.accountIdEndpointMode?.())
    ) {
      case "disabled":
        me(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        me(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        me(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  let n = e.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (n?.$source) {
    let i = n;
    i.accountId && me(e, "RESOLVED_ACCOUNT_ID", "T");
    for (let [a, c] of Object.entries(i.$source ?? {})) me(e, a, c);
  }
}
var Q7,
  HU = s(() => {
    Se();
    Q7 = /\d{12}\.ddb/;
  });
var Jh,
  yd,
  Qh,
  xd,
  zU,
  VU,
  Zh,
  jU = s(() => {
    (Jh = "user-agent"),
      (yd = "x-amz-user-agent"),
      (Qh = " "),
      (xd = "/"),
      (zU = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g),
      (VU = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g),
      (Zh = "-");
  });
function GU(e) {
  let t = "";
  for (let r in e) {
    let o = e[r];
    if (t.length + o.length + 1 <= 1024) {
      t.length ? (t += "," + o) : (t += o);
      continue;
    }
    break;
  }
  return t;
}
var WU = s(() => {});
var Z7,
  Ed,
  eX,
  Sd,
  qU = s(() => {
    gd();
    We();
    HU();
    jU();
    WU();
    (Z7 = (e) => (t, r) => async (o) => {
      let { request: n } = o;
      if (!De.isInstance(n)) return t(o);
      let { headers: i } = n,
        a = r?.userAgent?.map(Ed) || [],
        c = (await e.defaultUserAgentProvider()).map(Ed);
      await BU(r, e, o);
      let m = r;
      c.push(
        `m/${GU(Object.assign({}, r.__smithy_context?.features, m.__aws_sdk_context?.features))}`
      );
      let f = e?.customUserAgent?.map(Ed) || [],
        u = await e.userAgentAppId();
      u && c.push(Ed([`app/${u}`]));
      let p = PU(),
        h = (p ? [p] : []).concat([...c, ...a, ...f]).join(Qh),
        g = [...c.filter((x) => x.startsWith("aws-sdk-")), ...f].join(Qh);
      return (
        e.runtime !== "browser"
          ? (g && (i[yd] = i[yd] ? `${i[Jh]} ${g}` : g), (i[Jh] = h))
          : (i[yd] = h),
        t({ ...o, request: n })
      );
    }),
      (Ed = (e) => {
        let t = e[0]
            .split(xd)
            .map((a) => a.replace(zU, Zh))
            .join(xd),
          r = e[1]?.replace(VU, Zh),
          o = t.indexOf(xd),
          n = t.substring(0, o),
          i = t.substring(o + 1);
        return (
          n === "api" && (i = i.toLowerCase()),
          [n, i, r]
            .filter((a) => a && a.length > 0)
            .reduce((a, c, m) => {
              switch (m) {
                case 0:
                  return c;
                case 1:
                  return `${a}/${c}`;
                default:
                  return `${a}#${c}`;
              }
            }, "")
        );
      }),
      (eX = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: ["SET_USER_AGENT", "USER_AGENT"],
        override: !0,
      }),
      (Sd = (e) => ({
        applyToStack: (t) => {
          t.add(Z7(e), eX);
        },
      }));
  });
var Cd = s(() => {
  bU();
  qU();
});
var tX,
  rX,
  bd,
  KU = s(() => {
    As();
    (tX = "AWS_USE_DUALSTACK_ENDPOINT"),
      (rX = "use_dualstack_endpoint"),
      (bd = {
        environmentVariableSelector: (e) => mt(e, tX, Ge.ENV),
        configFileSelector: (e) => mt(e, rX, Ge.CONFIG),
        default: !1,
      });
  });
var oX,
  nX,
  wd,
  YU = s(() => {
    As();
    (oX = "AWS_USE_FIPS_ENDPOINT"),
      (nX = "use_fips_endpoint"),
      (wd = {
        environmentVariableSelector: (e) => mt(e, oX, Ge.ENV),
        configFileSelector: (e) => mt(e, nX, Ge.CONFIG),
        default: !1,
      });
  });
var XU = s(() => {
  he();
});
var JU = s(() => {});
var QU = s(() => {
  he();
  JU();
});
var ZU = s(() => {
  KU();
  YU();
  XU();
  QU();
});
var sX,
  iX,
  un,
  Td,
  eB = s(() => {
    (sX = "AWS_REGION"),
      (iX = "region"),
      (un = {
        environmentVariableSelector: (e) => e[sX],
        configFileSelector: (e) => e[iX],
        default: () => {
          throw new Error("Region is missing");
        },
      }),
      (Td = { preferredFile: "credentials" });
  });
var Ad,
  eg = s(() => {
    Ad = (e) =>
      typeof e == "string" && (e.startsWith("fips-") || e.endsWith("-fips"));
  });
var tg,
  tB = s(() => {
    eg();
    tg = (e) =>
      Ad(e)
        ? ["fips-aws-global", "aws-fips"].includes(e)
          ? "us-east-1"
          : e.replace(/fips-(dkr-|prod-)?|-fips/, "")
        : e;
  });
var _d,
  rB = s(() => {
    tB();
    eg();
    _d = (e) => {
      let { region: t, useFipsEndpoint: r } = e;
      if (!t) throw new Error("Region is missing");
      return Object.assign(e, {
        region: async () => {
          if (typeof t == "string") return tg(t);
          let o = await t();
          return tg(o);
        },
        useFipsEndpoint: async () => {
          let o = typeof t == "string" ? t : await t();
          return Ad(o)
            ? !0
            : typeof r != "function"
              ? Promise.resolve(!!r)
              : r();
        },
      });
    };
  });
var oB = s(() => {
  eB();
  rB();
});
var nB = s(() => {});
var sB = s(() => {});
var iB = s(() => {});
var aB = s(() => {});
var cB = s(() => {});
var mB = s(() => {});
var dB = s(() => {
  iB();
  aB();
  cB();
  mB();
});
var fB = s(() => {
  nB();
  sB();
  dB();
});
var ln = s(() => {
  ZU();
  oB();
  fB();
});
function aX(e) {
  return (t) => async (r) => {
    let o = r.request;
    if (De.isInstance(o)) {
      let { body: n, headers: i } = o;
      if (
        n &&
        Object.keys(i)
          .map((a) => a.toLowerCase())
          .indexOf(pB) === -1
      )
        try {
          let a = e(n);
          o.headers = { ...o.headers, [pB]: String(a) };
        } catch {}
    }
    return t({ ...r, request: o });
  };
}
var pB,
  cX,
  Rd,
  rg = s(() => {
    We();
    pB = "content-length";
    (cX = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: !0,
    }),
      (Rd = (e) => ({
        applyToStack: (t) => {
          t.add(aX(e.bodyLengthChecker), cX);
        },
      }));
  });
var uB,
  mX,
  dX,
  fX,
  pX,
  uX,
  lB = s(() => {
    (uB = async (e) => {
      let t = e?.Bucket || "";
      if (
        (typeof e.Bucket == "string" &&
          (e.Bucket = t
            .replace(/#/g, encodeURIComponent("#"))
            .replace(/\?/g, encodeURIComponent("?"))),
        uX(t))
      ) {
        if (e.ForcePathStyle === !0)
          throw new Error(
            "Path-style addressing cannot be used with ARN buckets"
          );
      } else
        (!pX(t) ||
          (t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:")) ||
          t.toLowerCase() !== t ||
          t.length < 3) &&
          (e.ForcePathStyle = !0);
      return (
        e.DisableMultiRegionAccessPoints &&
          ((e.disableMultiRegionAccessPoints = !0), (e.DisableMRAP = !0)),
        e
      );
    }),
      (mX = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/),
      (dX = /(\d+\.){3}\d+/),
      (fX = /\.\./),
      (pX = (e) => mX.test(e) && !dX.test(e) && !fX.test(e)),
      (uX = (e) => {
        let [t, r, o, , , n] = e.split(":"),
          i = t === "arn" && e.split(":").length >= 6,
          a = !!(i && r && o && n);
        if (i && !a) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
        return a;
      });
  });
var hB = s(() => {
  lB();
});
var gB,
  yB = s(() => {
    gB = (e, t, r) => {
      let o = async () => {
        let n = r[e] ?? r[t];
        return typeof n == "function" ? n() : n;
      };
      return e === "credentialScope" || t === "CredentialScope"
        ? async () => {
            let n =
              typeof r.credentials == "function"
                ? await r.credentials()
                : r.credentials;
            return n?.credentialScope ?? n?.CredentialScope;
          }
        : e === "accountId" || t === "AccountId"
          ? async () => {
              let n =
                typeof r.credentials == "function"
                  ? await r.credentials()
                  : r.credentials;
              return n?.accountId ?? n?.AccountId;
            }
          : e === "endpoint" || t === "endpoint"
            ? async () => {
                let n = await o();
                if (n && typeof n == "object") {
                  if ("url" in n) return n.url.href;
                  if ("hostname" in n) {
                    let { protocol: i, hostname: a, port: c, path: m } = n;
                    return `${i}//${a}${c ? ":" + c : ""}${m}`;
                  }
                }
                return n;
              }
            : o;
    };
  });
function vd(e) {
  try {
    let t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
    return (
      t.delete("CONFIG"),
      t.delete("CONFIG_PREFIX_SEPARATOR"),
      t.delete("ENV"),
      [...t].join(", ")
    );
  } catch {
    return e;
  }
}
var og = s(() => {});
var xB,
  EB = s(() => {
    K();
    og();
    xB = (e, t) => async () => {
      try {
        let r = e(process.env, t);
        if (r === void 0) throw new Error();
        return r;
      } catch (r) {
        throw new D(r.message || `Not found in ENV: ${vd(e.toString())}`, {
          logger: t?.logger,
        });
      }
    };
  });
import { homedir as lX } from "os";
import { sep as hX } from "path";
var ng,
  gX,
  ao,
  hn = s(() => {
    (ng = {}),
      (gX = () =>
        process && process.geteuid ? `${process.geteuid()}` : "DEFAULT"),
      (ao = () => {
        let {
          HOME: e,
          USERPROFILE: t,
          HOMEPATH: r,
          HOMEDRIVE: o = `C:${hX}`,
        } = process.env;
        if (e) return e;
        if (t) return t;
        if (r) return `${o}${r}`;
        let n = gX();
        return ng[n] || (ng[n] = lX()), ng[n];
      });
  });
var yX,
  xX,
  SB,
  CB = s(() => {
    (yX = "AWS_PROFILE"),
      (xX = "default"),
      (SB = (e) => e.profile || process.env[yX] || xX);
  });
var sg = s(() => {
  hn();
});
import { promises as EX } from "fs";
var Oze,
  bB = s(() => {
    sg();
    ({ readFile: Oze } = EX);
  });
var wB,
  TB = s(() => {
    io();
    gn();
    wB = (e) =>
      Object.entries(e)
        .filter(([t]) => {
          let r = t.indexOf(Vt);
          return r === -1 ? !1 : Object.values(Nr).includes(t.substring(0, r));
        })
        .reduce(
          (t, [r, o]) => {
            let n = r.indexOf(Vt),
              i = r.substring(0, n) === Nr.PROFILE ? r.substring(n + 1) : r;
            return (t[i] = o), t;
          },
          { ...(e.default && { default: e.default }) }
        );
  });
import { join as SX } from "path";
var CX,
  ig,
  ag = s(() => {
    hn();
    (CX = "AWS_CONFIG_FILE"),
      (ig = () => process.env[CX] || SX(ao(), ".aws", "config"));
  });
import { join as bX } from "path";
var wX,
  AB,
  _B = s(() => {
    hn();
    (wX = "AWS_SHARED_CREDENTIALS_FILE"),
      (AB = () => process.env[wX] || bX(ao(), ".aws", "credentials"));
  });
var TX,
  AX,
  Id,
  cg = s(() => {
    io();
    gn();
    (TX = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/),
      (AX = ["__proto__", "profile __proto__"]),
      (Id = (e) => {
        let t = {},
          r,
          o;
        for (let n of e.split(/\r?\n/)) {
          let i = n.split(/(^|\s)[;#]/)[0].trim();
          if (i[0] === "[" && i[i.length - 1] === "]") {
            (r = void 0), (o = void 0);
            let c = i.substring(1, i.length - 1),
              m = TX.exec(c);
            if (m) {
              let [, f, , u] = m;
              Object.values(Nr).includes(f) && (r = [f, u].join(Vt));
            } else r = c;
            if (AX.includes(c))
              throw new Error(`Found invalid profile name "${c}"`);
          } else if (r) {
            let c = i.indexOf("=");
            if (![0, -1].includes(c)) {
              let [m, f] = [
                i.substring(0, c).trim(),
                i.substring(c + 1).trim(),
              ];
              if (f === "") o = m;
              else {
                o && n.trimStart() === n && (o = void 0), (t[r] = t[r] || {});
                let u = o ? [o, m].join(Vt) : m;
                t[r][u] = f;
              }
            }
          }
        }
        return t;
      });
  });
import { promises as _X } from "fs";
var RX,
  mg,
  Pd,
  dg = s(() => {
    ({ readFile: RX } = _X),
      (mg = {}),
      (Pd = (e, t) => (
        (!mg[e] || t?.ignoreCache) && (mg[e] = RX(e, "utf8")), mg[e]
      ));
  });
import { join as RB } from "path";
var vB,
  Vt,
  fg,
  gn = s(() => {
    TB();
    ag();
    _B();
    hn();
    cg();
    dg();
    (vB = () => ({})),
      (Vt = "."),
      (fg = async (e = {}) => {
        let { filepath: t = AB(), configFilepath: r = ig() } = e,
          o = ao(),
          n = "~/",
          i = t;
        t.startsWith(n) && (i = RB(o, t.slice(2)));
        let a = r;
        r.startsWith(n) && (a = RB(o, r.slice(2)));
        let c = await Promise.all([
          Pd(a, { ignoreCache: e.ignoreCache }).then(Id).then(wB).catch(vB),
          Pd(i, { ignoreCache: e.ignoreCache }).then(Id).catch(vB),
        ]);
        return { configFile: c[0], credentialsFile: c[1] };
      });
  });
var IB = s(() => {
  io();
  gn();
});
var PB = s(() => {
  ag();
  IB();
  cg();
  dg();
});
var NB = s(() => {});
var OB = s(() => {
  gn();
  NB();
});
var DB = s(() => {});
var pg = s(() => {
  hn();
  CB();
  sg();
  bB();
  gn();
  PB();
  OB();
  DB();
});
var FB,
  MB = s(() => {
    K();
    pg();
    og();
    FB =
      (e, { preferredFile: t = "config", ...r } = {}) =>
      async () => {
        let o = SB(r),
          { configFile: n, credentialsFile: i } = await fg(r),
          a = i[o] || {},
          c = n[o] || {},
          m = t === "config" ? { ...a, ...c } : { ...c, ...a };
        try {
          let u = e(m, t === "config" ? n : i);
          if (u === void 0) throw new Error();
          return u;
        } catch (f) {
          throw new D(
            f.message ||
              `Not found in config files w/ profile [${o}]: ${vd(e.toString())}`,
            { logger: r.logger }
          );
        }
      };
  });
var vX,
  kB,
  LB = s(() => {
    K();
    (vX = (e) => typeof e == "function"),
      (kB = (e) => (vX(e) ? async () => await e() : qc(e)));
  });
var se,
  $B = s(() => {
    K();
    EB();
    MB();
    LB();
    se = (
      { environmentVariableSelector: e, configFileSelector: t, default: r },
      o = {}
    ) => {
      let { signingName: n, logger: i } = o;
      return wt(bt(xB(e, { signingName: n, logger: i }), FB(t, o), kB(r)));
    };
  });
var co = s(() => {
  $B();
});
var UB,
  BB,
  HB,
  zB = s(() => {
    pg();
    (UB = "AWS_ENDPOINT_URL"),
      (BB = "endpoint_url"),
      (HB = (e) => ({
        environmentVariableSelector: (t) => {
          let r = e.split(" ").map((i) => i.toUpperCase()),
            o = t[[UB, ...r].join("_")];
          if (o) return o;
          let n = t[UB];
          if (n) return n;
        },
        configFileSelector: (t, r) => {
          if (r && t.services) {
            let n = r[["services", t.services].join(Vt)];
            if (n) {
              let i = e.split(" ").map((c) => c.toLowerCase()),
                a = n[[i.join("_"), BB].join(Vt)];
              if (a) return a;
            }
          }
          let o = t[BB];
          if (o) return o;
        },
        default: void 0,
      }));
  });
var Nd,
  ug = s(() => {
    co();
    zB();
    Nd = async (e) => se(HB(e ?? ""))();
  });
function VB(e) {
  let t = {};
  if (((e = e.replace(/^\?/, "")), e))
    for (let r of e.split("&")) {
      let [o, n = null] = r.split("=");
      (o = decodeURIComponent(o)),
        n && (n = decodeURIComponent(n)),
        o in t
          ? Array.isArray(t[o])
            ? t[o].push(n)
            : (t[o] = [t[o], n])
          : (t[o] = n);
    }
  return t;
}
var jB = s(() => {});
var jt,
  Hs = s(() => {
    jB();
    jt = (e) => {
      if (typeof e == "string") return jt(new URL(e));
      let { hostname: t, pathname: r, port: o, protocol: n, search: i } = e,
        a;
      return (
        i && (a = VB(i)),
        {
          hostname: t,
          port: o ? parseInt(o) : void 0,
          protocol: n,
          path: r,
          query: a,
        }
      );
    };
  });
var Od,
  Dd = s(() => {
    Hs();
    Od = (e) => (typeof e == "object" ? ("url" in e ? jt(e.url) : e) : jt(e));
  });
var GB,
  IX,
  lg = s(() => {
    hB();
    yB();
    ug();
    Dd();
    (GB = async (e, t, r, o) => {
      if (!r.endpoint) {
        let a;
        r.serviceConfiguredEndpoint
          ? (a = await r.serviceConfiguredEndpoint())
          : (a = await Nd(r.serviceId)),
          a && (r.endpoint = () => Promise.resolve(Od(a)));
      }
      let n = await IX(e, t, r);
      if (typeof r.endpointProvider != "function")
        throw new Error("config.endpointProvider is not set.");
      return r.endpointProvider(n, o);
    }),
      (IX = async (e, t, r) => {
        let o = {},
          n = t?.getEndpointParameterInstructions?.() || {};
        for (let [i, a] of Object.entries(n))
          switch (a.type) {
            case "staticContextParams":
              o[i] = a.value;
              break;
            case "contextParams":
              o[i] = e[a.name];
              break;
            case "clientContextParams":
            case "builtInParams":
              o[i] = await gB(a.name, i, r)();
              break;
            case "operationContextParams":
              o[i] = a.get(e);
              break;
            default:
              throw new Error(
                "Unrecognized endpoint parameter instruction: " +
                  JSON.stringify(a)
              );
          }
        return (
          Object.keys(n).length === 0 && Object.assign(o, r),
          String(r.serviceId).toLowerCase() === "s3" && (await uB(o)),
          o
        );
      });
  });
var WB = s(() => {
  lg();
  Dd();
});
var qB,
  hg = s(() => {
    Q();
    he();
    lg();
    qB =
      ({ config: e, instructions: t }) =>
      (r, o) =>
      async (n) => {
        e.endpoint && Oc(o, "ENDPOINT_OVERRIDE", "N");
        let i = await GB(
          n.input,
          {
            getEndpointParameterInstructions() {
              return t;
            },
          },
          { ...e },
          o
        );
        (o.endpointV2 = i), (o.authSchemes = i.properties?.authSchemes);
        let a = o.authSchemes?.[0];
        if (a) {
          (o.signing_region = a.signingRegion),
            (o.signing_service = a.signingName);
          let m = Te(o)?.selectedHttpAuthScheme?.httpAuthOption;
          m &&
            (m.signingProperties = Object.assign(
              m.signingProperties || {},
              {
                signing_region: a.signingRegion,
                signingRegion: a.signingRegion,
                signing_service: a.signingName,
                signingName: a.signingName,
                signingRegionSet: a.signingRegionSet,
              },
              a.properties
            ));
        }
        return r({ ...n });
      };
  });
var KB,
  gg,
  yg = s(() => {
    We();
    (KB = (e, t) => (r, o) => async (n) => {
      let { response: i } = await r(n);
      try {
        let a = await t(i, e);
        return { response: i, output: a };
      } catch (a) {
        if (
          (Object.defineProperty(a, "$response", { value: i }),
          !("$metadata" in a))
        ) {
          let c =
            "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
          try {
            a.message +=
              `
  ` + c;
          } catch {
            !o.logger || o.logger?.constructor?.name === "NoOpLogger"
              ? console.warn(c)
              : o.logger?.warn?.(c);
          }
          typeof a.$responseBodyText < "u" &&
            a.$response &&
            (a.$response.body = a.$responseBodyText);
          try {
            if (zt.isInstance(i)) {
              let { headers: m = {} } = i,
                f = Object.entries(m);
              a.$metadata = {
                httpStatusCode: i.statusCode,
                requestId: gg(/^x-[\w-]+-request-?id$/, f),
                extendedRequestId: gg(/^x-[\w-]+-id-2$/, f),
                cfId: gg(/^x-[\w-]+-cf-id$/, f),
              };
            }
          } catch {}
        }
        throw a;
      }
    }),
      (gg = (e, t) => (t.find(([r]) => r.match(e)) || [void 0, void 0])[1]);
  });
var YB,
  xg = s(() => {
    YB = (e, t) => (r, o) => async (n) => {
      let i = e,
        a =
          o.endpointV2?.url && i.urlParser
            ? async () => i.urlParser(o.endpointV2.url)
            : i.endpoint;
      if (!a) throw new Error("No valid endpoint provider available.");
      let c = await t(n.input, { ...e, endpoint: a });
      return r({ ...n, request: c });
    };
  });
function yn(e, t, r) {
  return {
    applyToStack: (o) => {
      o.add(KB(e, r), PX), o.add(YB(e, t), Eg);
    },
  };
}
var PX,
  Eg,
  XB = s(() => {
    yg();
    xg();
    (PX = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0,
    }),
      (Eg = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: !0,
      });
  });
var zs = s(() => {
  yg();
  XB();
  xg();
});
var NX,
  xn,
  JB = s(() => {
    zs();
    hg();
    (NX = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: !0,
      relation: "before",
      toMiddleware: Eg.name,
    }),
      (xn = (e, t) => ({
        applyToStack: (r) => {
          r.addRelativeTo(qB({ config: e, instructions: t }), NX);
        },
      }));
  });
var Fd,
  QB = s(() => {
    he();
    ug();
    Dd();
    Fd = (e) => {
      let t = e.tls ?? !0,
        { endpoint: r, useDualstackEndpoint: o, useFipsEndpoint: n } = e,
        i = r != null ? async () => Od(await Y(r)()) : void 0,
        c = Object.assign(e, {
          endpoint: i,
          tls: t,
          isCustomEndpoint: !!r,
          useDualstackEndpoint: Y(o ?? !1),
          useFipsEndpoint: Y(n ?? !1),
        }),
        m;
      return (
        (c.serviceConfiguredEndpoint = async () => (
          e.serviceId && !m && (m = Nd(e.serviceId)), m
        )),
        c
      );
    };
  });
var ZB = s(() => {});
var e2 = s(() => {});
var En = s(() => {
  WB();
  hg();
  JB();
  QB();
  ZB();
  e2();
});
var _t,
  mo,
  Sn,
  Md = s(() => {
    (function (e) {
      (e.STANDARD = "standard"), (e.ADAPTIVE = "adaptive");
    })(_t || (_t = {}));
    (mo = 3), (Sn = _t.STANDARD);
  });
var t2,
  r2,
  o2,
  n2,
  s2,
  i2 = s(() => {
    (t2 = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException",
    ]),
      (r2 = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"]),
      (o2 = [500, 502, 503, 504]),
      (n2 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"]),
      (s2 = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"]);
  });
var OX,
  DX,
  Cn,
  Vs,
  a2,
  js = s(() => {
    i2();
    (OX = (e) => e.$metadata?.clockSkewCorrected),
      (DX = (e) => {
        let t = new Set([
          "Failed to fetch",
          "NetworkError when attempting to fetch resource",
          "The Internet connection appears to be offline",
          "Load failed",
          "Network request failed",
        ]);
        return e && e instanceof TypeError ? t.has(e.message) : !1;
      }),
      (Cn = (e) =>
        e.$metadata?.httpStatusCode === 429 ||
        t2.includes(e.name) ||
        e.$retryable?.throttling == !0),
      (Vs = (e, t = 0) =>
        OX(e) ||
        r2.includes(e.name) ||
        n2.includes(e?.code || "") ||
        s2.includes(e?.code || "") ||
        o2.includes(e.$metadata?.httpStatusCode || 0) ||
        DX(e) ||
        (e.cause !== void 0 && t <= 10 && Vs(e.cause, t + 1))),
      (a2 = (e) => {
        if (e.$metadata?.httpStatusCode !== void 0) {
          let t = e.$metadata.httpStatusCode;
          return 500 <= t && t <= 599 && !Vs(e);
        }
        return !1;
      });
  });
var bn,
  Sg = s(() => {
    js();
    bn = class e {
      constructor(t) {
        (this.currentCapacity = 0),
          (this.enabled = !1),
          (this.lastMaxRate = 0),
          (this.measuredTxRate = 0),
          (this.requestCount = 0),
          (this.lastTimestamp = 0),
          (this.timeWindow = 0),
          (this.beta = t?.beta ?? 0.7),
          (this.minCapacity = t?.minCapacity ?? 1),
          (this.minFillRate = t?.minFillRate ?? 0.5),
          (this.scaleConstant = t?.scaleConstant ?? 0.4),
          (this.smooth = t?.smooth ?? 0.8);
        let r = this.getCurrentTimeInSeconds();
        (this.lastThrottleTime = r),
          (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
          (this.fillRate = this.minFillRate),
          (this.maxCapacity = this.minCapacity);
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(t) {
        if (this.enabled) {
          if ((this.refillTokenBucket(), t > this.currentCapacity)) {
            let r = ((t - this.currentCapacity) / this.fillRate) * 1e3;
            await new Promise((o) => e.setTimeoutFn(o, r));
          }
          this.currentCapacity = this.currentCapacity - t;
        }
      }
      refillTokenBucket() {
        let t = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = t;
          return;
        }
        let r = (t - this.lastTimestamp) * this.fillRate;
        (this.currentCapacity = Math.min(
          this.maxCapacity,
          this.currentCapacity + r
        )),
          (this.lastTimestamp = t);
      }
      updateClientSendingRate(t) {
        let r;
        if ((this.updateMeasuredRate(), Cn(t))) {
          let n = this.enabled
            ? Math.min(this.measuredTxRate, this.fillRate)
            : this.measuredTxRate;
          (this.lastMaxRate = n),
            this.calculateTimeWindow(),
            (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
            (r = this.cubicThrottle(n)),
            this.enableTokenBucket();
        } else
          this.calculateTimeWindow(),
            (r = this.cubicSuccess(this.getCurrentTimeInSeconds()));
        let o = Math.min(r, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(o);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(
          Math.pow(
            (this.lastMaxRate * (1 - this.beta)) / this.scaleConstant,
            1 / 3
          )
        );
      }
      cubicThrottle(t) {
        return this.getPrecise(t * this.beta);
      }
      cubicSuccess(t) {
        return this.getPrecise(
          this.scaleConstant *
            Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) +
            this.lastMaxRate
        );
      }
      enableTokenBucket() {
        this.enabled = !0;
      }
      updateTokenBucketRate(t) {
        this.refillTokenBucket(),
          (this.fillRate = Math.max(t, this.minFillRate)),
          (this.maxCapacity = Math.max(t, this.minCapacity)),
          (this.currentCapacity = Math.min(
            this.currentCapacity,
            this.maxCapacity
          ));
      }
      updateMeasuredRate() {
        let t = this.getCurrentTimeInSeconds(),
          r = Math.floor(t * 2) / 2;
        if ((this.requestCount++, r > this.lastTxRateBucket)) {
          let o = this.requestCount / (r - this.lastTxRateBucket);
          (this.measuredTxRate = this.getPrecise(
            o * this.smooth + this.measuredTxRate * (1 - this.smooth)
          )),
            (this.requestCount = 0),
            (this.lastTxRateBucket = r);
        }
      }
      getPrecise(t) {
        return parseFloat(t.toFixed(8));
      }
    };
    bn.setTimeoutFn = setTimeout;
  });
var kd,
  Ld,
  wn = s(() => {
    (kd = "amz-sdk-invocation-id"), (Ld = "amz-sdk-request");
  });
var c2,
  m2 = s(() => {
    wn();
    c2 = () => {
      let e = 100;
      return {
        computeNextBackoffDelay: (o) =>
          Math.floor(Math.min(2e4, Math.random() * 2 ** o * e)),
        setDelayBase: (o) => {
          e = o;
        },
      };
    };
  });
var Cg,
  d2 = s(() => {
    wn();
    Cg = ({ retryDelay: e, retryCount: t, retryCost: r }) => ({
      getRetryCount: () => t,
      getRetryDelay: () => Math.min(2e4, e),
      getRetryCost: () => r,
    });
  });
var fo,
  Ud = s(() => {
    Md();
    wn();
    m2();
    d2();
    fo = class {
      constructor(t) {
        (this.maxAttempts = t),
          (this.mode = _t.STANDARD),
          (this.capacity = 500),
          (this.retryBackoffStrategy = c2()),
          (this.maxAttemptsProvider =
            typeof t == "function" ? t : async () => t);
      }
      async acquireInitialRetryToken(t) {
        return Cg({ retryDelay: 100, retryCount: 0 });
      }
      async refreshRetryTokenForRetry(t, r) {
        let o = await this.getMaxAttempts();
        if (this.shouldRetry(t, r, o)) {
          let n = r.errorType;
          this.retryBackoffStrategy.setDelayBase(
            n === "THROTTLING" ? 500 : 100
          );
          let i = this.retryBackoffStrategy.computeNextBackoffDelay(
              t.getRetryCount()
            ),
            a = r.retryAfterHint
              ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, i)
              : i,
            c = this.getCapacityCost(n);
          return (
            (this.capacity -= c),
            Cg({
              retryDelay: a,
              retryCount: t.getRetryCount() + 1,
              retryCost: c,
            })
          );
        }
        throw new Error("No retry token available");
      }
      recordSuccess(t) {
        this.capacity = Math.max(500, this.capacity + (t.getRetryCost() ?? 1));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch {
          return (
            console.warn(
              `Max attempts provider could not resolve. Using default of ${mo}`
            ),
            mo
          );
        }
      }
      shouldRetry(t, r, o) {
        return (
          t.getRetryCount() + 1 < o &&
          this.capacity >= this.getCapacityCost(r.errorType) &&
          this.isRetryableError(r.errorType)
        );
      }
      getCapacityCost(t) {
        return t === "TRANSIENT" ? 10 : 5;
      }
      isRetryableError(t) {
        return t === "THROTTLING" || t === "TRANSIENT";
      }
    };
  });
var Bd,
  h2 = s(() => {
    Md();
    Sg();
    Ud();
    Bd = class {
      constructor(t, r) {
        (this.maxAttemptsProvider = t), (this.mode = _t.ADAPTIVE);
        let { rateLimiter: o } = r ?? {};
        (this.rateLimiter = o ?? new bn()),
          (this.standardRetryStrategy = new fo(t));
      }
      async acquireInitialRetryToken(t) {
        return (
          await this.rateLimiter.getSendToken(),
          this.standardRetryStrategy.acquireInitialRetryToken(t)
        );
      }
      async refreshRetryTokenForRetry(t, r) {
        return (
          this.rateLimiter.updateClientSendingRate(r),
          this.standardRetryStrategy.refreshRetryTokenForRetry(t, r)
        );
      }
      recordSuccess(t) {
        this.rateLimiter.updateClientSendingRate({}),
          this.standardRetryStrategy.recordSuccess(t);
      }
    };
  });
var g2 = s(() => {
  wn();
  Ud();
});
var y2 = s(() => {});
var Gt = s(() => {
  h2();
  g2();
  Sg();
  Ud();
  Md();
  wn();
  y2();
});
var x2 = s(() => {
  Gt();
});
var wg = s(() => {
  Gt();
});
var Tg = s(() => {
  js();
});
var Ag,
  _g = s(() => {
    Ag = (e) =>
      e instanceof Error
        ? e
        : e instanceof Object
          ? Object.assign(new Error(), e)
          : typeof e == "string"
            ? new Error(e)
            : new Error(`AWS SDK error wrapper for ${e}`);
  });
var Rg = s(() => {
  We();
  js();
  Gt();
  x2();
  wg();
  Tg();
  _g();
});
var E2 = s(() => {
  Gt();
  Rg();
});
var S2,
  C2,
  Hd,
  zd,
  FX,
  MX,
  Vd,
  b2 = s(() => {
    he();
    Gt();
    (S2 = "AWS_MAX_ATTEMPTS"),
      (C2 = "max_attempts"),
      (Hd = {
        environmentVariableSelector: (e) => {
          let t = e[S2];
          if (!t) return;
          let r = parseInt(t);
          if (Number.isNaN(r))
            throw new Error(
              `Environment variable ${S2} mast be a number, got "${t}"`
            );
          return r;
        },
        configFileSelector: (e) => {
          let t = e[C2];
          if (!t) return;
          let r = parseInt(t);
          if (Number.isNaN(r))
            throw new Error(
              `Shared config file entry ${C2} mast be a number, got "${t}"`
            );
          return r;
        },
        default: mo,
      }),
      (zd = (e) => {
        let { retryStrategy: t, retryMode: r, maxAttempts: o } = e,
          n = Y(o ?? mo);
        return Object.assign(e, {
          maxAttempts: n,
          retryStrategy: async () =>
            t || ((await Y(r)()) === _t.ADAPTIVE ? new Bd(n) : new fo(n)),
        });
      }),
      (FX = "AWS_RETRY_MODE"),
      (MX = "retry_mode"),
      (Vd = {
        environmentVariableSelector: (e) => e[FX],
        configFileSelector: (e) => e[MX],
        default: Sn,
      });
  });
var w2 = s(() => {
  We();
  Gt();
});
var po,
  Or,
  An,
  T2,
  A2,
  _2 = s(() => {
    (po = (e, t) => {
      let r = [];
      if ((e && r.push(e), t)) for (let o of t) r.push(o);
      return r;
    }),
      (Or = (e, t) =>
        `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`),
      (An = () => {
        let e = [],
          t = [],
          r = !1,
          o = new Set(),
          n = (p) =>
            p.sort(
              (h, g) =>
                T2[g.step] - T2[h.step] ||
                A2[g.priority || "normal"] - A2[h.priority || "normal"]
            ),
          i = (p) => {
            let h = !1,
              g = (x) => {
                let _ = po(x.name, x.aliases);
                if (_.includes(p)) {
                  h = !0;
                  for (let T of _) o.delete(T);
                  return !1;
                }
                return !0;
              };
            return (e = e.filter(g)), (t = t.filter(g)), h;
          },
          a = (p) => {
            let h = !1,
              g = (x) => {
                if (x.middleware === p) {
                  h = !0;
                  for (let _ of po(x.name, x.aliases)) o.delete(_);
                  return !1;
                }
                return !0;
              };
            return (e = e.filter(g)), (t = t.filter(g)), h;
          },
          c = (p) => (
            e.forEach((h) => {
              p.add(h.middleware, { ...h });
            }),
            t.forEach((h) => {
              p.addRelativeTo(h.middleware, { ...h });
            }),
            p.identifyOnResolve?.(u.identifyOnResolve()),
            p
          ),
          m = (p) => {
            let h = [];
            return (
              p.before.forEach((g) => {
                g.before.length === 0 && g.after.length === 0
                  ? h.push(g)
                  : h.push(...m(g));
              }),
              h.push(p),
              p.after.reverse().forEach((g) => {
                g.before.length === 0 && g.after.length === 0
                  ? h.push(g)
                  : h.push(...m(g));
              }),
              h
            );
          },
          f = (p = !1) => {
            let h = [],
              g = [],
              x = {};
            return (
              e.forEach((T) => {
                let R = { ...T, before: [], after: [] };
                for (let $ of po(R.name, R.aliases)) x[$] = R;
                h.push(R);
              }),
              t.forEach((T) => {
                let R = { ...T, before: [], after: [] };
                for (let $ of po(R.name, R.aliases)) x[$] = R;
                g.push(R);
              }),
              g.forEach((T) => {
                if (T.toMiddleware) {
                  let R = x[T.toMiddleware];
                  if (R === void 0) {
                    if (p) return;
                    throw new Error(
                      `${T.toMiddleware} is not found when adding ${Or(T.name, T.aliases)} middleware ${T.relation} ${T.toMiddleware}`
                    );
                  }
                  T.relation === "after" && R.after.push(T),
                    T.relation === "before" && R.before.push(T);
                }
              }),
              n(h)
                .map(m)
                .reduce((T, R) => (T.push(...R), T), [])
            );
          },
          u = {
            add: (p, h = {}) => {
              let { name: g, override: x, aliases: _ } = h,
                T = {
                  step: "initialize",
                  priority: "normal",
                  middleware: p,
                  ...h,
                },
                R = po(g, _);
              if (R.length > 0) {
                if (R.some(($) => o.has($))) {
                  if (!x)
                    throw new Error(`Duplicate middleware name '${Or(g, _)}'`);
                  for (let $ of R) {
                    let v = e.findIndex(
                      (Ve) =>
                        Ve.name === $ || Ve.aliases?.some((Pt) => Pt === $)
                    );
                    if (v === -1) continue;
                    let H = e[v];
                    if (H.step !== T.step || T.priority !== H.priority)
                      throw new Error(
                        `"${Or(H.name, H.aliases)}" middleware with ${H.priority} priority in ${H.step} step cannot be overridden by "${Or(g, _)}" middleware with ${T.priority} priority in ${T.step} step.`
                      );
                    e.splice(v, 1);
                  }
                }
                for (let $ of R) o.add($);
              }
              e.push(T);
            },
            addRelativeTo: (p, h) => {
              let { name: g, override: x, aliases: _ } = h,
                T = { middleware: p, ...h },
                R = po(g, _);
              if (R.length > 0) {
                if (R.some(($) => o.has($))) {
                  if (!x)
                    throw new Error(`Duplicate middleware name '${Or(g, _)}'`);
                  for (let $ of R) {
                    let v = t.findIndex(
                      (Ve) =>
                        Ve.name === $ || Ve.aliases?.some((Pt) => Pt === $)
                    );
                    if (v === -1) continue;
                    let H = t[v];
                    if (
                      H.toMiddleware !== T.toMiddleware ||
                      H.relation !== T.relation
                    )
                      throw new Error(
                        `"${Or(H.name, H.aliases)}" middleware ${H.relation} "${H.toMiddleware}" middleware cannot be overridden by "${Or(g, _)}" middleware ${T.relation} "${T.toMiddleware}" middleware.`
                      );
                    t.splice(v, 1);
                  }
                }
                for (let $ of R) o.add($);
              }
              t.push(T);
            },
            clone: () => c(An()),
            use: (p) => {
              p.applyToStack(u);
            },
            remove: (p) => (typeof p == "string" ? i(p) : a(p)),
            removeByTag: (p) => {
              let h = !1,
                g = (x) => {
                  let { tags: _, name: T, aliases: R } = x;
                  if (_ && _.includes(p)) {
                    let $ = po(T, R);
                    for (let v of $) o.delete(v);
                    return (h = !0), !1;
                  }
                  return !0;
                };
              return (e = e.filter(g)), (t = t.filter(g)), h;
            },
            concat: (p) => {
              let h = c(An());
              return (
                h.use(p),
                h.identifyOnResolve(
                  r || h.identifyOnResolve() || (p.identifyOnResolve?.() ?? !1)
                ),
                h
              );
            },
            applyToStack: c,
            identify: () =>
              f(!0).map((p) => {
                let h = p.step ?? p.relation + " " + p.toMiddleware;
                return Or(p.name, p.aliases) + " - " + h;
              }),
            identifyOnResolve(p) {
              return typeof p == "boolean" && (r = p), r;
            },
            resolve: (p, h) => {
              for (let g of f()
                .map((x) => x.middleware)
                .reverse())
                p = g(p, h);
              return r && console.log(u.identify()), p;
            },
          };
        return u;
      }),
      (T2 = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1,
      }),
      (A2 = { high: 3, normal: 2, low: 1 });
  });
var vg = s(() => {
  _2();
});
var Dr,
  R2 = s(() => {
    vg();
    Dr = class {
      constructor(t) {
        (this.config = t), (this.middlewareStack = An());
      }
      send(t, r, o) {
        let n = typeof r != "function" ? r : void 0,
          i = typeof r == "function" ? r : o,
          a = n === void 0 && this.config.cacheMiddleware === !0,
          c;
        if (a) {
          this.handlers || (this.handlers = new WeakMap());
          let m = this.handlers;
          m.has(t.constructor)
            ? (c = m.get(t.constructor))
            : ((c = t.resolveMiddleware(this.middlewareStack, this.config, n)),
              m.set(t.constructor, c));
        } else
          delete this.handlers,
            (c = t.resolveMiddleware(this.middlewareStack, this.config, n));
        if (i)
          c(t)
            .then(
              (m) => i(null, m.output),
              (m) => i(m)
            )
            .catch(() => {});
        else return c(t).then((m) => m.output);
      }
      destroy() {
        this.config?.requestHandler?.destroy?.(), delete this.handlers;
      }
    };
  });
var v2 = s(() => {
  Ee();
});
var Rt,
  Ig,
  I2 = s(() => {
    vg();
    io();
    (Rt = class {
      constructor() {
        this.middlewareStack = An();
      }
      static classBuilder() {
        return new Ig();
      }
      resolveMiddlewareWithContext(
        t,
        r,
        o,
        {
          middlewareFn: n,
          clientName: i,
          commandName: a,
          inputFilterSensitiveLog: c,
          outputFilterSensitiveLog: m,
          smithyContext: f,
          additionalContext: u,
          CommandCtor: p,
        }
      ) {
        for (let T of n.bind(this)(p, t, r, o)) this.middlewareStack.use(T);
        let h = t.concat(this.middlewareStack),
          { logger: g } = r,
          x = {
            logger: g,
            clientName: i,
            commandName: a,
            inputFilterSensitiveLog: c,
            outputFilterSensitiveLog: m,
            [j1]: { commandInstance: this, ...f },
            ...u,
          },
          { requestHandler: _ } = r;
        return h.resolve((T) => _.handle(T.request, o || {}), x);
      }
    }),
      (Ig = class {
        constructor() {
          (this._init = () => {}),
            (this._ep = {}),
            (this._middlewareFn = () => []),
            (this._commandName = ""),
            (this._clientName = ""),
            (this._additionalContext = {}),
            (this._smithyContext = {}),
            (this._inputFilterSensitiveLog = (t) => t),
            (this._outputFilterSensitiveLog = (t) => t),
            (this._serializer = null),
            (this._deserializer = null);
        }
        init(t) {
          this._init = t;
        }
        ep(t) {
          return (this._ep = t), this;
        }
        m(t) {
          return (this._middlewareFn = t), this;
        }
        s(t, r, o = {}) {
          return (
            (this._smithyContext = { service: t, operation: r, ...o }), this
          );
        }
        c(t = {}) {
          return (this._additionalContext = t), this;
        }
        n(t, r) {
          return (this._clientName = t), (this._commandName = r), this;
        }
        f(t = (o) => o, r = (o) => o) {
          return (
            (this._inputFilterSensitiveLog = t),
            (this._outputFilterSensitiveLog = r),
            this
          );
        }
        ser(t) {
          return (this._serializer = t), this;
        }
        de(t) {
          return (this._deserializer = t), this;
        }
        sc(t) {
          return (
            (this._operationSchema = t),
            (this._smithyContext.operationSchema = t),
            this
          );
        }
        build() {
          let t = this,
            r;
          return (r = class extends Rt {
            static getEndpointParameterInstructions() {
              return t._ep;
            }
            constructor(...[o]) {
              super(),
                (this.serialize = t._serializer),
                (this.deserialize = t._deserializer),
                (this.input = o ?? {}),
                t._init(this),
                (this.schema = t._operationSchema);
            }
            resolveMiddleware(o, n, i) {
              return this.resolveMiddlewareWithContext(o, n, i, {
                CommandCtor: r,
                middlewareFn: t._middlewareFn,
                clientName: t._clientName,
                commandName: t._commandName,
                inputFilterSensitiveLog: t._inputFilterSensitiveLog,
                outputFilterSensitiveLog: t._outputFilterSensitiveLog,
                smithyContext: t._smithyContext,
                additionalContext: t._additionalContext,
              });
            }
          });
        }
      });
  });
var Wt,
  P2 = s(() => {
    Wt = "***SensitiveInformation***";
  });
var jd,
  N2 = s(() => {
    jd = (e, t) => {
      for (let r of Object.keys(e)) {
        let o = e[r],
          n = async function (a, c, m) {
            let f = new o(a);
            if (typeof c == "function") this.send(f, c);
            else if (typeof m == "function") {
              if (typeof c != "object")
                throw new Error(`Expected http options but got ${typeof c}`);
              this.send(f, c || {}, m);
            } else return this.send(f, c);
          },
          i = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
        t.prototype[i] = n;
      }
    };
  });
var _n,
  de,
  Pg = s(() => {
    (_n = class e extends Error {
      constructor(t) {
        super(t.message),
          Object.setPrototypeOf(
            this,
            Object.getPrototypeOf(this).constructor.prototype
          ),
          (this.name = t.name),
          (this.$fault = t.$fault),
          (this.$metadata = t.$metadata);
      }
      static isInstance(t) {
        if (!t) return !1;
        let r = t;
        return (
          e.prototype.isPrototypeOf(r) ||
          (!!r.$fault &&
            !!r.$metadata &&
            (r.$fault === "client" || r.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](t) {
        if (!t) return !1;
        let r = t;
        return this === e
          ? e.isInstance(t)
          : e.isInstance(t)
            ? r.name && this.name
              ? this.prototype.isPrototypeOf(t) || r.name === this.name
              : this.prototype.isPrototypeOf(t)
            : !1;
      }
    }),
      (de = (e, t = {}) => {
        Object.entries(t)
          .filter(([, o]) => o !== void 0)
          .forEach(([o, n]) => {
            (e[o] == null || e[o] === "") && (e[o] = n);
          });
        let r = e.message || e.Message || "UnknownError";
        return (e.message = r), delete e.Message, e;
      });
  });
var kX,
  Gd,
  LX,
  O2 = s(() => {
    Pg();
    (kX = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: o }) => {
      let n = LX(e),
        i = n.httpStatusCode ? n.httpStatusCode + "" : void 0,
        a = new r({
          name: t?.code || t?.Code || o || i || "UnknownError",
          $fault: "client",
          $metadata: n,
        });
      throw de(a, t);
    }),
      (Gd =
        (e) =>
        ({ output: t, parsedBody: r, errorCode: o }) => {
          kX({ output: t, parsedBody: r, exceptionCtor: e, errorCode: o });
        }),
      (LX = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      }));
  });
var Wd,
  D2 = s(() => {
    Wd = (e) => {
      switch (e) {
        case "standard":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "in-region":
          return { retryMode: "standard", connectionTimeout: 1100 };
        case "cross-region":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "mobile":
          return { retryMode: "standard", connectionTimeout: 3e4 };
        default:
          return {};
      }
    };
  });
var F2,
  qd,
  M2 = s(() => {
    (F2 = !1),
      (qd = (e) => {
        e && !F2 && parseInt(e.substring(1, e.indexOf("."))) < 16 && (F2 = !0);
      });
  });
var k2 = s(() => {
  Ee();
});
var L2,
  $2,
  U2 = s(() => {
    io();
    (L2 = (e) => {
      let t = [];
      for (let r in pn) {
        let o = pn[r];
        e[o] !== void 0 &&
          t.push({ algorithmId: () => o, checksumConstructor: () => e[o] });
      }
      return {
        addChecksumAlgorithm(r) {
          t.push(r);
        },
        checksumAlgorithms() {
          return t;
        },
      };
    }),
      ($2 = (e) => {
        let t = {};
        return (
          e.checksumAlgorithms().forEach((r) => {
            t[r.algorithmId()] = r.checksumConstructor();
          }),
          t
        );
      });
  });
var B2,
  H2,
  z2 = s(() => {
    (B2 = (e) => ({
      setRetryStrategy(t) {
        e.retryStrategy = t;
      },
      retryStrategy() {
        return e.retryStrategy;
      },
    })),
      (H2 = (e) => {
        let t = {};
        return (t.retryStrategy = e.retryStrategy()), t;
      });
  });
var Kd,
  Yd,
  V2 = s(() => {
    U2();
    z2();
    (Kd = (e) => Object.assign(L2(e), B2(e))),
      (Yd = (e) => Object.assign($2(e), H2(e)));
  });
var j2 = s(() => {
  V2();
});
var G2 = s(() => {});
var W2 = s(() => {});
var q2 = s(() => {});
var Fr,
  K2 = s(() => {
    Fr = class {
      trace() {}
      debug() {}
      info() {}
      warn() {}
      error() {}
    };
  });
function qe(e, t, r) {
  let o, n, i;
  if (typeof t > "u" && typeof r > "u") (o = {}), (i = e);
  else {
    if (((o = e), typeof t == "function")) return (n = t), (i = r), $X(o, n, i);
    i = t;
  }
  for (let a of Object.keys(i)) {
    if (!Array.isArray(i[a])) {
      o[a] = i[a];
      continue;
    }
    Y2(o, null, i, a);
  }
  return o;
}
var Ke,
  $X,
  Y2,
  UX,
  BX,
  X2 = s(() => {
    (Ke = (e, t) => {
      let r = {};
      for (let o in t) Y2(r, e, t, o);
      return r;
    }),
      ($X = (e, t, r) =>
        qe(
          e,
          Object.entries(r).reduce(
            (o, [n, i]) => (
              Array.isArray(i)
                ? (o[n] = i)
                : typeof i == "function"
                  ? (o[n] = [t, i()])
                  : (o[n] = [t, i]),
              o
            ),
            {}
          )
        )),
      (Y2 = (e, t, r, o) => {
        if (t !== null) {
          let a = r[o];
          typeof a == "function" && (a = [, a]);
          let [c = UX, m = BX, f = o] = a;
          ((typeof c == "function" && c(t[f])) ||
            (typeof c != "function" && c)) &&
            (e[o] = m(t[f]));
          return;
        }
        let [n, i] = r[o];
        if (typeof i == "function") {
          let a,
            c = n === void 0 && (a = i()) != null,
            m =
              (typeof n == "function" && !!n(void 0)) ||
              (typeof n != "function" && !!n);
          c ? (e[o] = a) : m && (e[o] = i());
        } else {
          let a = n === void 0 && i != null,
            c =
              (typeof n == "function" && !!n(i)) ||
              (typeof n != "function" && !!n);
          (a || c) && (e[o] = i);
        }
      }),
      (UX = (e) => e != null),
      (BX = (e) => e);
  });
var J2 = s(() => {
  Ee();
});
var Q2 = s(() => {});
var Xd,
  Z2 = s(() => {
    Xd = (e) => {
      if (e == null) return {};
      if (Array.isArray(e)) return e.filter((t) => t != null).map(Xd);
      if (typeof e == "object") {
        let t = {};
        for (let r of Object.keys(e)) e[r] != null && (t[r] = Xd(e[r]));
        return t;
      }
      return e;
    };
  });
var ce = s(() => {
  R2();
  v2();
  I2();
  P2();
  N2();
  O2();
  D2();
  M2();
  Pg();
  k2();
  j2();
  G2();
  W2();
  q2();
  K2();
  X2();
  J2();
  Q2();
  Z2();
  it();
});
import { Readable as HX } from "stream";
var eH,
  tH = s(() => {
    eH = (e) =>
      e?.body instanceof HX ||
      (typeof ReadableStream < "u" && e?.body instanceof ReadableStream);
  });
var zX,
  VX,
  jX,
  GX,
  WX,
  Jd,
  qX,
  rH = s(() => {
    We();
    js();
    ce();
    Gt();
    Ql();
    tH();
    _g();
    (zX = (e) => (t, r) => async (o) => {
      let n = await e.retryStrategy(),
        i = await e.maxAttempts();
      if (VX(n)) {
        n = n;
        let a = await n.acquireInitialRetryToken(r.partition_id),
          c = new Error(),
          m = 0,
          f = 0,
          { request: u } = o,
          p = De.isInstance(u);
        for (p && (u.headers[kd] = Ns()); ; )
          try {
            p && (u.headers[Ld] = `attempt=${m + 1}; max=${i}`);
            let { response: h, output: g } = await t(o);
            return (
              n.recordSuccess(a),
              (g.$metadata.attempts = m + 1),
              (g.$metadata.totalRetryDelay = f),
              { response: h, output: g }
            );
          } catch (h) {
            let g = jX(h);
            if (((c = Ag(h)), p && eH(u)))
              throw (
                ((r.logger instanceof Fr ? console : r.logger)?.warn(
                  "An error was encountered in a non-retryable streaming request."
                ),
                c)
              );
            try {
              a = await n.refreshRetryTokenForRetry(a, g);
            } catch {
              throw (
                (c.$metadata || (c.$metadata = {}),
                (c.$metadata.attempts = m + 1),
                (c.$metadata.totalRetryDelay = f),
                c)
              );
            }
            m = a.getRetryCount();
            let x = a.getRetryDelay();
            (f += x), await new Promise((_) => setTimeout(_, x));
          }
      } else
        return (
          (n = n),
          n?.mode &&
            (r.userAgent = [
              ...(r.userAgent || []),
              ["cfg/retry-mode", n.mode],
            ]),
          n.retry(t, o)
        );
    }),
      (VX = (e) =>
        typeof e.acquireInitialRetryToken < "u" &&
        typeof e.refreshRetryTokenForRetry < "u" &&
        typeof e.recordSuccess < "u"),
      (jX = (e) => {
        let t = { error: e, errorType: GX(e) },
          r = qX(e.$response);
        return r && (t.retryAfterHint = r), t;
      }),
      (GX = (e) =>
        Cn(e)
          ? "THROTTLING"
          : Vs(e)
            ? "TRANSIENT"
            : a2(e)
              ? "SERVER_ERROR"
              : "CLIENT_ERROR"),
      (WX = {
        name: "retryMiddleware",
        tags: ["RETRY"],
        step: "finalizeRequest",
        priority: "high",
        override: !0,
      }),
      (Jd = (e) => ({
        applyToStack: (t) => {
          t.add(zX(e), WX);
        },
      })),
      (qX = (e) => {
        if (!zt.isInstance(e)) return;
        let t = Object.keys(e.headers).find(
          (i) => i.toLowerCase() === "retry-after"
        );
        if (!t) return;
        let r = e.headers[t],
          o = Number(r);
        return Number.isNaN(o) ? new Date(r) : new Date(o * 1e3);
      });
  });
var Gs = s(() => {
  E2();
  Rg();
  b2();
  wg();
  w2();
  Tg();
  rH();
});
function KX(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "sso-oauth", region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  };
}
function YX(e) {
  return { schemeId: "smithy.api#noAuth" };
}
var oH,
  nH,
  sH,
  Ng = s(() => {
    Se();
    he();
    oH = async (e, t, r) => ({
      operation: Te(t).operation,
      region:
        (await Y(e.region)()) ||
        (() => {
          throw new Error(
            "expected `region` to be configured for `aws.auth#sigv4`"
          );
        })(),
    });
    (nH = (e) => {
      let t = [];
      switch (e.operation) {
        case "CreateToken": {
          t.push(YX(e));
          break;
        }
        default:
          t.push(KX(e));
      }
      return t;
    }),
      (sH = (e) => {
        let t = Sr(e);
        return Object.assign(t, {
          authSchemePreference: Y(e.authSchemePreference ?? []),
        });
      });
  });
var iH,
  aH,
  Og = s(() => {
    (iH = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        defaultSigningName: "sso-oauth",
      })),
      (aH = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      });
  });
var Qd,
  Dg = s(() => {
    Qd = {
      name: "@aws-sdk/nested-clients",
      version: "3.839.0",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build:
          "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps":
          "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch",
      },
      engines: { node: ">=18.0.0" },
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/",
      },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.839.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.839.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.828.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.839.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.6.0",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.13",
        "@smithy/middleware-retry": "^4.1.14",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.5",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.21",
        "@smithy/util-defaults-mode-node": "^4.0.21",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.6",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2",
      },
      devDependencies: {
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3",
      },
      typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
      files: [
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**",
      ],
      browser: {
        "./dist-es/submodules/sso-oidc/runtimeConfig":
          "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig":
          "./dist-es/submodules/sts/runtimeConfig.browser",
      },
      "react-native": {},
      homepage:
        "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients",
      },
      exports: {
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js",
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js",
        },
      },
    };
  });
var Fg,
  Mg = s(() => {
    Fg = { isCrtAvailable: !1 };
  });
var cH,
  mH = s(() => {
    Mg();
    cH = () => (Fg.isCrtAvailable ? ["md/crt-avail"] : null);
  });
import { platform as JX, release as QX } from "os";
import { env as dH, versions as ZX } from "process";
var Zd,
  fH = s(() => {
    mH();
    Mg();
    Zd =
      ({ serviceId: e, clientVersion: t }) =>
      async (r) => {
        let o = [
            ["aws-sdk-js", t],
            ["ua", "2.1"],
            [`os/${JX()}`, QX()],
            ["lang/js"],
            ["md/nodejs", `${ZX.node}`],
          ],
          n = cH();
        n && o.push(n),
          e && o.push([`api/${e}`, t]),
          dH.AWS_EXECUTION_ENV && o.push([`exec-env/${dH.AWS_EXECUTION_ENV}`]);
        let i = await r?.userAgentAppId?.();
        return i ? [...o, [`app/${i}`]] : [...o];
      };
  });
var eJ,
  tJ,
  rJ,
  ef,
  pH = s(() => {
    Cd();
    (eJ = "AWS_SDK_UA_APP_ID"),
      (tJ = "sdk_ua_app_id"),
      (rJ = "sdk-ua-app-id"),
      (ef = {
        environmentVariableSelector: (e) => e[eJ],
        configFileSelector: (e) => e[tJ] ?? e[rJ],
        default: qh,
      });
  });
var kg = s(() => {
  fH();
  pH();
});
import { Buffer as Lg } from "buffer";
var $g,
  uH,
  lH = s(() => {
    st();
    ($g = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Lg.from(e, t, r);
    }),
      (uH = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Lg.from(e, t) : Lg.from(e);
      });
  });
import { Buffer as Ug } from "buffer";
var hH,
  gH,
  Bg = s(() => {
    st();
    (hH = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Ug.from(e, t, r);
    }),
      (gH = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Ug.from(e, t) : Ug.from(e);
      });
  });
var Mr,
  Hg = s(() => {
    Bg();
    Mr = (e) => {
      let t = gH(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var yH,
  xH = s(() => {
    Hg();
    yH = (e) =>
      typeof e == "string"
        ? Mr(e)
        : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
  });
var tf,
  EH = s(() => {
    Bg();
    tf = (e) => {
      if (typeof e == "string") return e;
      if (
        typeof e != "object" ||
        typeof e.byteOffset != "number" ||
        typeof e.byteLength != "number"
      )
        throw new Error(
          "@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."
        );
      return hH(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    };
  });
var Ws = s(() => {
  Hg();
  xH();
  EH();
});
import { Buffer as oJ } from "buffer";
import { createHash as nJ, createHmac as sJ } from "crypto";
function SH(e, t) {
  return oJ.isBuffer(e)
    ? e
    : typeof e == "string"
      ? uH(e, t)
      : ArrayBuffer.isView(e)
        ? $g(e.buffer, e.byteOffset, e.byteLength)
        : $g(e);
}
var Rn,
  zg = s(() => {
    lH();
    Ws();
    Rn = class {
      constructor(t, r) {
        (this.algorithmIdentifier = t), (this.secret = r), this.reset();
      }
      update(t, r) {
        this.hash.update(yH(SH(t, r)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret
          ? sJ(this.algorithmIdentifier, SH(this.secret))
          : nJ(this.algorithmIdentifier);
      }
    };
  });
var qs,
  iJ,
  Vg = s(() => {
    (qs = (e) => encodeURIComponent(e).replace(/[!'()*]/g, iJ)),
      (iJ = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  });
var CH = s(() => {
  Vg();
});
var bH = s(() => {
  Vg();
  CH();
});
function jg(e) {
  let t = [];
  for (let r of Object.keys(e).sort()) {
    let o = e[r];
    if (((r = qs(r)), Array.isArray(o)))
      for (let n = 0, i = o.length; n < i; n++) t.push(`${r}=${qs(o[n])}`);
    else {
      let n = r;
      (o || typeof o == "string") && (n += `=${qs(o)}`), t.push(n);
    }
  }
  return t.join("&");
}
var Gg = s(() => {
  bH();
});
var wH,
  TH = s(() => {
    wH = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  });
var Wg,
  qg = s(() => {
    Wg = (e) => {
      let t = {};
      for (let r of Object.keys(e)) {
        let o = e[r];
        t[r] = Array.isArray(o) ? o.join(",") : o;
      }
      return t;
    };
  });
var be,
  vn = s(() => {
    be = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: (e) => clearTimeout(e),
    };
  });
var AH,
  _H,
  RH = s(() => {
    vn();
    (AH = 1e3),
      (_H = (e, t, r = 0) => {
        if (!r) return -1;
        let o = (n) => {
          let i = be.setTimeout(() => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(
                      `Socket timed out without establishing a connection within ${r} ms`
                    ),
                    { name: "TimeoutError" }
                  )
                );
            }, r - n),
            a = (c) => {
              c?.connecting
                ? c.on("connect", () => {
                    be.clearTimeout(i);
                  })
                : be.clearTimeout(i);
            };
          e.socket ? a(e.socket) : e.on("socket", a);
        };
        return r < 2e3 ? (o(0), 0) : be.setTimeout(o.bind(null, AH), AH);
      });
  });
var aJ,
  vH,
  IH = s(() => {
    vn();
    (aJ = 3e3),
      (vH = (e, { keepAlive: t, keepAliveMsecs: r }, o = aJ) => {
        if (t !== !0) return -1;
        let n = () => {
          e.socket
            ? e.socket.setKeepAlive(t, r || 0)
            : e.on("socket", (i) => {
                i.setKeepAlive(t, r || 0);
              });
        };
        return o === 0 ? (n(), 0) : be.setTimeout(n, o);
      });
  });
var PH,
  NH,
  OH = s(() => {
    Kg();
    vn();
    (PH = 3e3),
      (NH = (e, t, r = DH) => {
        let o = (n) => {
          let i = r - n,
            a = () => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(`Connection timed out after ${r} ms`),
                    { name: "TimeoutError" }
                  )
                );
            };
          e.socket
            ? (e.socket.setTimeout(i, a),
              e.on("close", () => e.socket?.removeListener("timeout", a)))
            : e.setTimeout(i, a);
        };
        return 0 < r && r < 6e3
          ? (o(0), 0)
          : be.setTimeout(o.bind(null, r === 0 ? 0 : PH), PH);
      });
  });
import { Readable as cJ } from "stream";
async function Yg(e, t, r = FH) {
  let o = t.headers ?? {},
    n = o.Expect || o.expect,
    i = -1,
    a = !0;
  n === "100-continue" &&
    (a = await Promise.race([
      new Promise((c) => {
        i = Number(be.setTimeout(() => c(!0), Math.max(FH, r)));
      }),
      new Promise((c) => {
        e.on("continue", () => {
          be.clearTimeout(i), c(!0);
        }),
          e.on("response", () => {
            be.clearTimeout(i), c(!1);
          }),
          e.on("error", () => {
            be.clearTimeout(i), c(!1);
          });
      }),
    ])),
    a && mJ(e, t.body);
}
function mJ(e, t) {
  if (t instanceof cJ) {
    t.pipe(e);
    return;
  }
  if (t) {
    if (Buffer.isBuffer(t) || typeof t == "string") {
      e.end(t);
      return;
    }
    let r = t;
    if (
      typeof r == "object" &&
      r.buffer &&
      typeof r.byteOffset == "number" &&
      typeof r.byteLength == "number"
    ) {
      e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
      return;
    }
    e.end(Buffer.from(t));
    return;
  }
  e.end();
}
var FH,
  Xg = s(() => {
    vn();
    FH = 6e3;
  });
import { Agent as MH, request as dJ } from "http";
import { Agent as kH, request as fJ } from "https";
var DH,
  In,
  Kg = s(() => {
    We();
    Gg();
    TH();
    qg();
    RH();
    IH();
    OH();
    vn();
    Xg();
    (DH = 0),
      (In = class e {
        static create(t) {
          return typeof t?.handle == "function" ? t : new e(t);
        }
        static checkSocketUsage(t, r, o = console) {
          let { sockets: n, requests: i, maxSockets: a } = t;
          if (typeof a != "number" || a === 1 / 0 || Date.now() - 15e3 < r)
            return r;
          if (n && i)
            for (let m in n) {
              let f = n[m]?.length ?? 0,
                u = i[m]?.length ?? 0;
              if (f >= a && u >= 2 * a)
                return (
                  o?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${f} and ${u} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                  Date.now()
                );
            }
          return r;
        }
        constructor(t) {
          (this.socketWarningTimestamp = 0),
            (this.metadata = { handlerProtocol: "http/1.1" }),
            (this.configProvider = new Promise((r, o) => {
              typeof t == "function"
                ? t()
                    .then((n) => {
                      r(this.resolveDefaultConfig(n));
                    })
                    .catch(o)
                : r(this.resolveDefaultConfig(t));
            }));
        }
        resolveDefaultConfig(t) {
          let {
              requestTimeout: r,
              connectionTimeout: o,
              socketTimeout: n,
              socketAcquisitionWarningTimeout: i,
              httpAgent: a,
              httpsAgent: c,
            } = t || {},
            m = !0,
            f = 50;
          return {
            connectionTimeout: o,
            requestTimeout: r ?? n,
            socketAcquisitionWarningTimeout: i,
            httpAgent:
              a instanceof MH || typeof a?.destroy == "function"
                ? a
                : new MH({ keepAlive: m, maxSockets: f, ...a }),
            httpsAgent:
              c instanceof kH || typeof c?.destroy == "function"
                ? c
                : new kH({ keepAlive: m, maxSockets: f, ...c }),
            logger: console,
          };
        }
        destroy() {
          this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
        }
        async handle(t, { abortSignal: r } = {}) {
          return (
            this.config || (this.config = await this.configProvider),
            new Promise((o, n) => {
              let i,
                a = [],
                c = async (v) => {
                  await i, a.forEach(be.clearTimeout), o(v);
                },
                m = async (v) => {
                  await i, a.forEach(be.clearTimeout), n(v);
                };
              if (!this.config)
                throw new Error(
                  "Node HTTP request handler config is not resolved"
                );
              if (r?.aborted) {
                let v = new Error("Request aborted");
                (v.name = "AbortError"), m(v);
                return;
              }
              let f = t.protocol === "https:",
                u = f ? this.config.httpsAgent : this.config.httpAgent;
              a.push(
                be.setTimeout(
                  () => {
                    this.socketWarningTimestamp = e.checkSocketUsage(
                      u,
                      this.socketWarningTimestamp,
                      this.config.logger
                    );
                  },
                  this.config.socketAcquisitionWarningTimeout ??
                    (this.config.requestTimeout ?? 2e3) +
                      (this.config.connectionTimeout ?? 1e3)
                )
              );
              let p = jg(t.query || {}),
                h;
              if (t.username != null || t.password != null) {
                let v = t.username ?? "",
                  H = t.password ?? "";
                h = `${v}:${H}`;
              }
              let g = t.path;
              p && (g += `?${p}`), t.fragment && (g += `#${t.fragment}`);
              let x = t.hostname ?? "";
              x[0] === "[" && x.endsWith("]")
                ? (x = t.hostname.slice(1, -1))
                : (x = t.hostname);
              let _ = {
                  headers: t.headers,
                  host: x,
                  method: t.method,
                  path: g,
                  port: t.port,
                  agent: u,
                  auth: h,
                },
                R = (f ? fJ : dJ)(_, (v) => {
                  let H = new zt({
                    statusCode: v.statusCode || -1,
                    reason: v.statusMessage,
                    headers: Wg(v.headers),
                    body: v,
                  });
                  c({ response: H });
                });
              if (
                (R.on("error", (v) => {
                  wH.includes(v.code)
                    ? m(Object.assign(v, { name: "TimeoutError" }))
                    : m(v);
                }),
                r)
              ) {
                let v = () => {
                  R.destroy();
                  let H = new Error("Request aborted");
                  (H.name = "AbortError"), m(H);
                };
                if (typeof r.addEventListener == "function") {
                  let H = r;
                  H.addEventListener("abort", v, { once: !0 }),
                    R.once("close", () => H.removeEventListener("abort", v));
                } else r.onabort = v;
              }
              a.push(_H(R, m, this.config.connectionTimeout)),
                a.push(NH(R, m, this.config.requestTimeout));
              let $ = _.agent;
              typeof $ == "object" &&
                "keepAlive" in $ &&
                a.push(
                  vH(R, {
                    keepAlive: $.keepAlive,
                    keepAliveMsecs: $.keepAliveMsecs,
                  })
                ),
                (i = Yg(R, t, this.config.requestTimeout).catch(
                  (v) => (a.forEach(be.clearTimeout), n(v))
                ));
            })
          );
        }
        updateHttpClientConfig(t, r) {
          (this.config = void 0),
            (this.configProvider = this.configProvider.then((o) => ({
              ...o,
              [t]: r,
            })));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      });
  });
var LH = s(() => {});
var $H = s(() => {
  LH();
});
var UH = s(() => {
  We();
  Gg();
  qg();
  $H();
  Xg();
});
import { Writable as pJ } from "stream";
var rf,
  BH = s(() => {
    rf = class extends pJ {
      constructor() {
        super(...arguments), (this.bufferedBytes = []);
      }
      _write(t, r, o) {
        this.bufferedBytes.push(t), o();
      }
    };
  });
async function lJ(e) {
  let t = [],
    r = e.getReader(),
    o = !1,
    n = 0;
  for (; !o; ) {
    let { done: c, value: m } = await r.read();
    m && (t.push(m), (n += m.length)), (o = c);
  }
  let i = new Uint8Array(n),
    a = 0;
  for (let c of t) i.set(c, a), (a += c.length);
  return i;
}
var of,
  uJ,
  HH = s(() => {
    BH();
    (of = (e) =>
      uJ(e)
        ? lJ(e)
        : new Promise((t, r) => {
            let o = new rf();
            e.pipe(o),
              e.on("error", (n) => {
                o.end(), r(n);
              }),
              o.on("error", r),
              o.on("finish", function () {
                let n = new Uint8Array(Buffer.concat(this.bufferedBytes));
                t(n);
              });
          })),
      (uJ = (e) =>
        typeof ReadableStream == "function" && e instanceof ReadableStream);
  });
var Jg = s(() => {
  Kg();
  UH();
  HH();
});
import { fstatSync as hJ, lstatSync as gJ } from "fs";
var nf,
  zH = s(() => {
    nf = (e) => {
      if (!e) return 0;
      if (typeof e == "string") return Buffer.byteLength(e);
      if (typeof e.byteLength == "number") return e.byteLength;
      if (typeof e.size == "number") return e.size;
      if (typeof e.start == "number" && typeof e.end == "number")
        return e.end + 1 - e.start;
      if (typeof e.path == "string" || Buffer.isBuffer(e.path))
        return gJ(e.path).size;
      if (typeof e.fd == "number") return hJ(e.fd).size;
      throw new Error(`Body Length computation failed for ${e}`);
    };
  });
var Qg = s(() => {
  zH();
});
import { Buffer as Zg } from "buffer";
var VH,
  jH,
  ey = s(() => {
    st();
    (VH = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Zg.from(e, t, r);
    }),
      (jH = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Zg.from(e, t) : Zg.from(e);
      });
  });
var yJ,
  sf,
  GH = s(() => {
    ey();
    (yJ = /^[A-Za-z0-9+/]*={0,2}$/),
      (sf = (e) => {
        if ((e.length * 3) % 4 !== 0)
          throw new TypeError("Incorrect padding on base64 string.");
        if (!yJ.exec(e)) throw new TypeError("Invalid base64 string.");
        let t = jH(e, "base64");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      });
  });
var af,
  WH = s(() => {
    ey();
    Ws();
    af = (e) => {
      let t;
      if (
        (typeof e == "string" ? (t = Mr(e)) : (t = e),
        typeof t != "object" ||
          typeof t.byteOffset != "number" ||
          typeof t.byteLength != "number")
      )
        throw new Error(
          "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."
        );
      return VH(t.buffer, t.byteOffset, t.byteLength).toString("base64");
    };
  });
var ty = s(() => {
  GH();
  WH();
});
var rz,
  ut,
  lt,
  On,
  qH,
  Ks,
  Pn,
  Nn,
  nr,
  ry,
  oy,
  KH,
  YH,
  XH,
  oz,
  nz,
  pt,
  JH,
  sz,
  QH,
  ZH,
  ez,
  tz,
  xJ,
  iz,
  az = s(() => {
    (rz = "required"),
      (ut = "fn"),
      (lt = "argv"),
      (On = "ref"),
      (qH = "isSet"),
      (Ks = "booleanEquals"),
      (Pn = "error"),
      (Nn = "endpoint"),
      (nr = "tree"),
      (ry = "PartitionResult"),
      (oy = "getAttr"),
      (KH = { [rz]: !1, type: "String" }),
      (YH = { [rz]: !0, default: !1, type: "Boolean" }),
      (XH = { [On]: "Endpoint" }),
      (oz = { [ut]: Ks, [lt]: [{ [On]: "UseFIPS" }, !0] }),
      (nz = { [ut]: Ks, [lt]: [{ [On]: "UseDualStack" }, !0] }),
      (pt = {}),
      (JH = { [ut]: oy, [lt]: [{ [On]: ry }, "supportsFIPS"] }),
      (sz = { [On]: ry }),
      (QH = {
        [ut]: Ks,
        [lt]: [!0, { [ut]: oy, [lt]: [sz, "supportsDualStack"] }],
      }),
      (ZH = [oz]),
      (ez = [nz]),
      (tz = [{ [On]: "Region" }]),
      (xJ = {
        version: "1.0",
        parameters: { Region: KH, UseDualStack: YH, UseFIPS: YH, Endpoint: KH },
        rules: [
          {
            conditions: [{ [ut]: qH, [lt]: [XH] }],
            rules: [
              {
                conditions: ZH,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: Pn,
              },
              {
                conditions: ez,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: Pn,
              },
              { endpoint: { url: XH, properties: pt, headers: pt }, type: Nn },
            ],
            type: nr,
          },
          {
            conditions: [{ [ut]: qH, [lt]: tz }],
            rules: [
              {
                conditions: [{ [ut]: "aws.partition", [lt]: tz, assign: ry }],
                rules: [
                  {
                    conditions: [oz, nz],
                    rules: [
                      {
                        conditions: [{ [ut]: Ks, [lt]: [!0, JH] }, QH],
                        rules: [
                          {
                            endpoint: {
                              url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: pt,
                              headers: pt,
                            },
                            type: Nn,
                          },
                        ],
                        type: nr,
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        type: Pn,
                      },
                    ],
                    type: nr,
                  },
                  {
                    conditions: ZH,
                    rules: [
                      {
                        conditions: [{ [ut]: Ks, [lt]: [JH, !0] }],
                        rules: [
                          {
                            conditions: [
                              {
                                [ut]: "stringEquals",
                                [lt]: [
                                  { [ut]: oy, [lt]: [sz, "name"] },
                                  "aws-us-gov",
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://oidc.{Region}.amazonaws.com",
                              properties: pt,
                              headers: pt,
                            },
                            type: Nn,
                          },
                          {
                            endpoint: {
                              url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: pt,
                              headers: pt,
                            },
                            type: Nn,
                          },
                        ],
                        type: nr,
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        type: Pn,
                      },
                    ],
                    type: nr,
                  },
                  {
                    conditions: ez,
                    rules: [
                      {
                        conditions: [QH],
                        rules: [
                          {
                            endpoint: {
                              url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: pt,
                              headers: pt,
                            },
                            type: Nn,
                          },
                        ],
                        type: nr,
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        type: Pn,
                      },
                    ],
                    type: nr,
                  },
                  {
                    endpoint: {
                      url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                      properties: pt,
                      headers: pt,
                    },
                    type: Nn,
                  },
                ],
                type: nr,
              },
            ],
            type: nr,
          },
          { error: "Invalid Configuration: Missing Region", type: Pn },
        ],
      }),
      (iz = xJ);
  });
var EJ,
  cz,
  mz = s(() => {
    gd();
    $e();
    az();
    (EJ = new $t({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
    })),
      (cz = (e, t = {}) =>
        EJ.get(e, () => Ut(iz, { endpointParams: e, logger: t.logger })));
    Le.aws = Bs;
  });
var dz,
  fz = s(() => {
    Se();
    Q();
    ce();
    Hs();
    ty();
    Ws();
    Ng();
    mz();
    dz = (e) => ({
      apiVersion: "2019-06-10",
      base64Decoder: e?.base64Decoder ?? sf,
      base64Encoder: e?.base64Encoder ?? af,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? cz,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? nH,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
          signer: new rt(),
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (t) =>
            t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new Lt(),
        },
      ],
      logger: e?.logger ?? new Fr(),
      serviceId: e?.serviceId ?? "SSO OIDC",
      urlParser: e?.urlParser ?? jt,
      utf8Decoder: e?.utf8Decoder ?? Mr,
      utf8Encoder: e?.utf8Encoder ?? tf,
    });
  });
var pz,
  ny,
  sy,
  uz,
  lz,
  hz,
  gz = s(() => {
    (pz = "AWS_EXECUTION_ENV"),
      (ny = "AWS_REGION"),
      (sy = "AWS_DEFAULT_REGION"),
      (uz = "AWS_EC2_METADATA_DISABLED"),
      (lz = ["in-region", "cross-region", "mobile", "standard", "legacy"]),
      (hz = "/latest/meta-data/placement/region");
  });
var SJ,
  CJ,
  yz,
  xz = s(() => {
    (SJ = "AWS_DEFAULTS_MODE"),
      (CJ = "defaults_mode"),
      (yz = {
        environmentVariableSelector: (e) => e[SJ],
        configFileSelector: (e) => e[CJ],
        default: "legacy",
      });
  });
import { Buffer as bJ } from "buffer";
import { request as wJ } from "http";
function kr(e) {
  return new Promise((t, r) => {
    let o = wJ({
      method: "GET",
      ...e,
      hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1"),
    });
    o.on("error", (n) => {
      r(
        Object.assign(
          new Ie("Unable to connect to instance metadata service"),
          n
        )
      ),
        o.destroy();
    }),
      o.on("timeout", () => {
        r(new Ie("TimeoutError from instance metadata service")), o.destroy();
      }),
      o.on("response", (n) => {
        let { statusCode: i = 400 } = n;
        (i < 200 || 300 <= i) &&
          (r(
            Object.assign(
              new Ie("Error response received from instance metadata service"),
              { statusCode: i }
            )
          ),
          o.destroy());
        let a = [];
        n.on("data", (c) => {
          a.push(c);
        }),
          n.on("end", () => {
            t(bJ.concat(a)), o.destroy();
          });
      }),
      o.end();
  });
}
var cf = s(() => {
  K();
});
var mf,
  df,
  iy = s(() => {
    (mf = (e) =>
      !!e &&
      typeof e == "object" &&
      typeof e.AccessKeyId == "string" &&
      typeof e.SecretAccessKey == "string" &&
      typeof e.Token == "string" &&
      typeof e.Expiration == "string"),
      (df = (e) => ({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration),
        ...(e.AccountId && { accountId: e.AccountId }),
      }));
  });
var _8e,
  R8e,
  Ys,
  ff = s(() => {
    (_8e = 1e3),
      (R8e = 0),
      (Ys = ({ maxRetries: e = 0, timeout: t = 1e3 }) => ({
        maxRetries: e,
        timeout: t,
      }));
  });
var Xs,
  ay = s(() => {
    Xs = (e, t) => {
      let r = e();
      for (let o = 0; o < t; o++) r = r.catch(e);
      return r;
    };
  });
import { parse as TJ } from "url";
var pf,
  uf,
  cy,
  AJ,
  _J,
  RJ,
  vJ,
  IJ,
  PJ,
  Ez = s(() => {
    K();
    cf();
    iy();
    ff();
    ay();
    (pf = "AWS_CONTAINER_CREDENTIALS_FULL_URI"),
      (uf = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI"),
      (cy = "AWS_CONTAINER_AUTHORIZATION_TOKEN"),
      (AJ = (e = {}) => {
        let { timeout: t, maxRetries: r } = Ys(e);
        return () =>
          Xs(async () => {
            let o = await PJ({ logger: e.logger }),
              n = JSON.parse(await _J(t, o));
            if (!mf(n))
              throw new D(
                "Invalid response received from instance metadata service.",
                { logger: e.logger }
              );
            return df(n);
          }, r);
      }),
      (_J = async (e, t) => (
        process.env[cy] &&
          (t.headers = { ...t.headers, Authorization: process.env[cy] }),
        (await kr({ ...t, timeout: e })).toString()
      )),
      (RJ = "169.254.170.2"),
      (vJ = { localhost: !0, "127.0.0.1": !0 }),
      (IJ = { "http:": !0, "https:": !0 }),
      (PJ = async ({ logger: e }) => {
        if (process.env[uf]) return { hostname: RJ, path: process.env[uf] };
        if (process.env[pf]) {
          let t = TJ(process.env[pf]);
          if (!t.hostname || !(t.hostname in vJ))
            throw new D(
              `${t.hostname} is not a valid container metadata service hostname`,
              { tryNextLink: !1, logger: e }
            );
          if (!t.protocol || !(t.protocol in IJ))
            throw new D(
              `${t.protocol} is not a valid container metadata service protocol`,
              { tryNextLink: !1, logger: e }
            );
          return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
        }
        throw new D(
          `The container metadata credential provider cannot be used unless the ${uf} or ${pf} environment variable is set`,
          { tryNextLink: !1, logger: e }
        );
      });
  });
var lf,
  Sz = s(() => {
    K();
    lf = class e extends D {
      constructor(t, r = !0) {
        super(t, r),
          (this.tryNextLink = r),
          (this.name = "InstanceMetadataV1FallbackError"),
          Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var uo,
  my = s(() => {
    (function (e) {
      (e.IPv4 = "http://169.254.169.254"), (e.IPv6 = "http://[fd00:ec2::254]");
    })(uo || (uo = {}));
  });
var NJ,
  OJ,
  Cz,
  bz = s(() => {
    (NJ = "AWS_EC2_METADATA_SERVICE_ENDPOINT"),
      (OJ = "ec2_metadata_service_endpoint"),
      (Cz = {
        environmentVariableSelector: (e) => e[NJ],
        configFileSelector: (e) => e[OJ],
        default: void 0,
      });
  });
var Lr,
  dy = s(() => {
    (function (e) {
      (e.IPv4 = "IPv4"), (e.IPv6 = "IPv6");
    })(Lr || (Lr = {}));
  });
var DJ,
  FJ,
  wz,
  Tz = s(() => {
    dy();
    (DJ = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE"),
      (FJ = "ec2_metadata_service_endpoint_mode"),
      (wz = {
        environmentVariableSelector: (e) => e[DJ],
        configFileSelector: (e) => e[FJ],
        default: Lr.IPv4,
      });
  });
var hf,
  MJ,
  kJ,
  fy = s(() => {
    co();
    Hs();
    my();
    bz();
    dy();
    Tz();
    (hf = async () => jt((await MJ()) || (await kJ()))),
      (MJ = async () => se(Cz)()),
      (kJ = async () => {
        let e = await se(wz)();
        switch (e) {
          case Lr.IPv4:
            return uo.IPv4;
          case Lr.IPv6:
            return uo.IPv6;
          default:
            throw new Error(
              `Unsupported endpoint mode: ${e}. Select from ${Object.values(Lr)}`
            );
        }
      });
  });
var LJ,
  py,
  Az = s(() => {
    (LJ =
      "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html"),
      (py = (e, t) => {
        let r = 300 + Math.floor(Math.random() * 300),
          o = new Date(Date.now() + r * 1e3);
        t.warn(
          `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(o)}.
For more information, please visit: ` + LJ
        );
        let n = e.originalExpiration ?? e.expiration;
        return { ...e, ...(n ? { originalExpiration: n } : {}), expiration: o };
      });
  });
var _z,
  Rz = s(() => {
    Az();
    _z = (e, t = {}) => {
      let r = t?.logger || console,
        o;
      return async () => {
        let n;
        try {
          (n = await e()),
            n.expiration &&
              n.expiration.getTime() < Date.now() &&
              (n = py(n, r));
        } catch (i) {
          if (o) r.warn("Credential renew failed: ", i), (n = py(o, r));
          else throw i;
        }
        return (o = n), n;
      };
    };
  });
var Pz,
  $J,
  uy,
  vz,
  Iz,
  UJ,
  BJ,
  HJ,
  zJ,
  VJ,
  Nz = s(() => {
    co();
    K();
    Sz();
    cf();
    iy();
    ff();
    ay();
    fy();
    Rz();
    (Pz = "/latest/meta-data/iam/security-credentials/"),
      ($J = "/latest/api/token"),
      (uy = "AWS_EC2_METADATA_V1_DISABLED"),
      (vz = "ec2_metadata_v1_disabled"),
      (Iz = "x-aws-ec2-metadata-token"),
      (UJ = (e = {}) => _z(BJ(e), { logger: e.logger })),
      (BJ = (e = {}) => {
        let t = !1,
          { logger: r, profile: o } = e,
          { timeout: n, maxRetries: i } = Ys(e),
          a = async (c, m) => {
            if (t || m.headers?.[Iz] == null) {
              let p = !1,
                h = !1,
                g = await se(
                  {
                    environmentVariableSelector: (x) => {
                      let _ = x[uy];
                      if (((h = !!_ && _ !== "false"), _ === void 0))
                        throw new D(
                          `${uy} not set in env, checking config file next.`,
                          { logger: e.logger }
                        );
                      return h;
                    },
                    configFileSelector: (x) => {
                      let _ = x[vz];
                      return (p = !!_ && _ !== "false"), p;
                    },
                    default: !1,
                  },
                  { profile: o }
                )();
              if (e.ec2MetadataV1Disabled || g) {
                let x = [];
                throw (
                  (e.ec2MetadataV1Disabled &&
                    x.push(
                      "credential provider initialization (runtime option ec2MetadataV1Disabled)"
                    ),
                  p && x.push(`config file profile (${vz})`),
                  h && x.push(`process environment variable (${uy})`),
                  new lf(
                    `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${x.join(", ")}].`
                  ))
                );
              }
            }
            let u = (
              await Xs(async () => {
                let p;
                try {
                  p = await zJ(m);
                } catch (h) {
                  throw (h.statusCode === 401 && (t = !1), h);
                }
                return p;
              }, c)
            ).trim();
            return Xs(async () => {
              let p;
              try {
                p = await VJ(u, m, e);
              } catch (h) {
                throw (h.statusCode === 401 && (t = !1), h);
              }
              return p;
            }, c);
          };
        return async () => {
          let c = await hf();
          if (t)
            return (
              r?.debug(
                "AWS SDK Instance Metadata",
                "using v1 fallback (no token fetch)"
              ),
              a(i, { ...c, timeout: n })
            );
          {
            let m;
            try {
              m = (await HJ({ ...c, timeout: n })).toString();
            } catch (f) {
              if (f?.statusCode === 400)
                throw Object.assign(f, {
                  message: "EC2 Metadata token request returned error",
                });
              return (
                (f.message === "TimeoutError" ||
                  [403, 404, 405].includes(f.statusCode)) &&
                  (t = !0),
                r?.debug(
                  "AWS SDK Instance Metadata",
                  "using v1 fallback (initial)"
                ),
                a(i, { ...c, timeout: n })
              );
            }
            return a(i, { ...c, headers: { [Iz]: m }, timeout: n });
          }
        };
      }),
      (HJ = async (e) =>
        kr({
          ...e,
          path: $J,
          method: "PUT",
          headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" },
        })),
      (zJ = async (e) => (await kr({ ...e, path: Pz })).toString()),
      (VJ = async (e, t, r) => {
        let o = JSON.parse((await kr({ ...t, path: Pz + e })).toString());
        if (!mf(o))
          throw new D(
            "Invalid response received from instance metadata service.",
            { logger: r.logger }
          );
        return df(o);
      });
  });
var Oz = s(() => {});
var Dz = {};
Me(Dz, {
  DEFAULT_MAX_RETRIES: () => R8e,
  DEFAULT_TIMEOUT: () => _8e,
  ENV_CMDS_AUTH_TOKEN: () => cy,
  ENV_CMDS_FULL_URI: () => pf,
  ENV_CMDS_RELATIVE_URI: () => uf,
  Endpoint: () => uo,
  fromContainerMetadata: () => AJ,
  fromInstanceMetadata: () => UJ,
  getInstanceMetadataEndpoint: () => hf,
  httpRequest: () => kr,
  providerConfigFromInit: () => Ys,
});
var Fz = s(() => {
  Ez();
  Nz();
  ff();
  Oz();
  cf();
  fy();
  my();
});
var gf,
  jJ,
  GJ,
  Mz = s(() => {
    ln();
    co();
    K();
    gz();
    xz();
    (gf = ({ region: e = se(un), defaultsMode: t = se(yz) } = {}) =>
      wt(async () => {
        let r = typeof t == "function" ? await t() : t;
        switch (r?.toLowerCase()) {
          case "auto":
            return jJ(e);
          case "in-region":
          case "cross-region":
          case "mobile":
          case "standard":
          case "legacy":
            return Promise.resolve(r?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve("legacy");
          default:
            throw new Error(
              `Invalid parameter for "defaultsMode", expect ${lz.join(", ")}, got ${r}`
            );
        }
      })),
      (jJ = async (e) => {
        if (e) {
          let t = typeof e == "function" ? await e() : e,
            r = await GJ();
          return r ? (t === r ? "in-region" : "cross-region") : "standard";
        }
        return "standard";
      }),
      (GJ = async () => {
        if (process.env[pz] && (process.env[ny] || process.env[sy]))
          return process.env[ny] ?? process.env[sy];
        if (!process.env[uz])
          try {
            let { getInstanceMetadataEndpoint: e, httpRequest: t } =
                await Promise.resolve().then(() => (Fz(), Dz)),
              r = await e();
            return (await t({ ...r, path: hz })).toString();
          } catch {}
      });
  });
var ly = s(() => {
  Mz();
});
var kz,
  Lz = s(() => {
    Dg();
    Se();
    kg();
    ln();
    zg();
    Gs();
    co();
    Jg();
    Qg();
    Gt();
    fz();
    ce();
    ly();
    ce();
    kz = (e) => {
      qd(process.version);
      let t = gf(e),
        r = () => t().then(Wd),
        o = dz(e);
      yr(process.version);
      let n = { profile: e?.profile, logger: o.logger };
      return {
        ...o,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? se(xr, n),
        bodyLengthChecker: e?.bodyLengthChecker ?? nf,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          Zd({ serviceId: o.serviceId, clientVersion: Qd.version }),
        maxAttempts: e?.maxAttempts ?? se(Hd, e),
        region: e?.region ?? se(un, { ...Td, ...n }),
        requestHandler: In.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          se({ ...Vd, default: async () => (await r()).retryMode || Sn }, e),
        sha256: e?.sha256 ?? Rn.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? of,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? se(bd, n),
        useFipsEndpoint: e?.useFipsEndpoint ?? se(wd, n),
        userAgentAppId: e?.userAgentAppId ?? se(ef, n),
      };
    };
  });
var $r,
  Ur,
  $z = s(() => {
    ($r = (e) => ({
      setRegion(t) {
        e.region = t;
      },
      region() {
        return e.region;
      },
    })),
      (Ur = (e) => ({ region: e.region() }));
  });
var Uz = s(() => {});
var hy = s(() => {});
var Bz = s(() => {
  hy();
});
var Hz = s(() => {
  Bz();
  hy();
});
var zz = s(() => {
  Uz();
  Hz();
});
var Js = s(() => {
  $z();
  zz();
});
var Vz,
  jz,
  Gz = s(() => {
    (Vz = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        o = e.credentials;
      return {
        setHttpAuthScheme(n) {
          let i = t.findIndex((a) => a.schemeId === n.schemeId);
          i === -1 ? t.push(n) : t.splice(i, 1, n);
        },
        httpAuthSchemes() {
          return t;
        },
        setHttpAuthSchemeProvider(n) {
          r = n;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(n) {
          o = n;
        },
        credentials() {
          return o;
        },
      };
    }),
      (jz = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }));
  });
var Wz,
  qz = s(() => {
    Js();
    We();
    ce();
    Gz();
    Wz = (e, t) => {
      let r = Object.assign($r(e), Kd(e), dd(e), Vz(e));
      return (
        t.forEach((o) => o.configure(r)),
        Object.assign(e, Ur(r), Yd(r), fd(r), jz(r))
      );
    };
  });
var Qs,
  gy = s(() => {
    Vh();
    jh();
    Wh();
    Cd();
    ln();
    Q();
    rg();
    En();
    Gs();
    ce();
    Ng();
    Og();
    Lz();
    qz();
    Qs = class extends Dr {
      config;
      constructor(...[t]) {
        let r = kz(t || {});
        super(r), (this.initConfig = r);
        let o = iH(r),
          n = hd(o),
          i = zd(n),
          a = _d(i),
          c = a,
          m = Fd(c),
          f = sH(m),
          u = Wz(f, t?.extensions || []);
        (this.config = u),
          this.middlewareStack.use(Sd(this.config)),
          this.middlewareStack.use(Jd(this.config)),
          this.middlewareStack.use(Rd(this.config)),
          this.middlewareStack.use(pd(this.config)),
          this.middlewareStack.use(ud(this.config)),
          this.middlewareStack.use(ld(this.config)),
          this.middlewareStack.use(
            dr(this.config, {
              httpAuthSchemeParametersProvider: oH,
              identityProviderConfigProvider: async (p) =>
                new kt({ "aws.auth#sigv4": p.credentials }),
            })
          ),
          this.middlewareStack.use(fr(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var _e,
  yf = s(() => {
    ce();
    _e = class e extends _n {
      constructor(t) {
        super(t), Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var Zs,
  ei,
  yy,
  xy,
  ti,
  ri,
  oi,
  ni,
  si,
  ii,
  ai,
  ci,
  mi,
  xf = s(() => {
    ce();
    yf();
    (Zs = class e extends _e {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      error_description;
      constructor(t) {
        super({ name: "AccessDeniedException", $fault: "client", ...t }),
          Object.setPrototypeOf(this, e.prototype),
          (this.error = t.error),
          (this.error_description = t.error_description);
      }
    }),
      (ei = class e extends _e {
        name = "AuthorizationPendingException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (yy = (e) => ({
        ...e,
        ...(e.clientSecret && { clientSecret: Wt }),
        ...(e.refreshToken && { refreshToken: Wt }),
        ...(e.codeVerifier && { codeVerifier: Wt }),
      })),
      (xy = (e) => ({
        ...e,
        ...(e.accessToken && { accessToken: Wt }),
        ...(e.refreshToken && { refreshToken: Wt }),
        ...(e.idToken && { idToken: Wt }),
      })),
      (ti = class e extends _e {
        name = "ExpiredTokenException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "ExpiredTokenException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (ri = class e extends _e {
        name = "InternalServerException";
        $fault = "server";
        error;
        error_description;
        constructor(t) {
          super({ name: "InternalServerException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (oi = class e extends _e {
        name = "InvalidClientException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "InvalidClientException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (ni = class e extends _e {
        name = "InvalidGrantException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "InvalidGrantException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (si = class e extends _e {
        name = "InvalidRequestException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "InvalidRequestException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (ii = class e extends _e {
        name = "InvalidScopeException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "InvalidScopeException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (ai = class e extends _e {
        name = "SlowDownException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({ name: "SlowDownException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (ci = class e extends _e {
        name = "UnauthorizedClientException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      }),
      (mi = class e extends _e {
        name = "UnsupportedGrantTypeException";
        $fault = "client";
        error;
        error_description;
        constructor(t) {
          super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.error = t.error),
            (this.error_description = t.error_description);
        }
      });
  });
var Kz,
  Yz,
  KJ,
  YJ,
  XJ,
  JJ,
  QJ,
  ZJ,
  eQ,
  tQ,
  rQ,
  oQ,
  nQ,
  sQ,
  iQ,
  ht,
  Xz = s(() => {
    Se();
    Q();
    ce();
    xf();
    yf();
    (Kz = async (e, t) => {
      let r = N(e, t),
        o = { "content-type": "application/json" };
      r.bp("/token");
      let n;
      return (
        (n = JSON.stringify(
          Ke(e, {
            clientId: [],
            clientSecret: [],
            code: [],
            codeVerifier: [],
            deviceCode: [],
            grantType: [],
            redirectUri: [],
            refreshToken: [],
            scope: (i) => Xd(i),
          })
        )),
        r.m("POST").h(o).b(n),
        r.build()
      );
    }),
      (Yz = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return KJ(e, t);
        let r = qe({ $metadata: ht(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = Ke(o, {
            accessToken: d,
            expiresIn: U,
            idToken: d,
            refreshToken: d,
            tokenType: d,
          });
        return Object.assign(r, n), r;
      }),
      (KJ = async (e, t) => {
        let r = { ...e, body: await Wo(e.body, t) },
          o = qo(e, r.body);
        switch (o) {
          case "AccessDeniedException":
          case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await XJ(r, t);
          case "AuthorizationPendingException":
          case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await JJ(r, t);
          case "ExpiredTokenException":
          case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await QJ(r, t);
          case "InternalServerException":
          case "com.amazonaws.ssooidc#InternalServerException":
            throw await ZJ(r, t);
          case "InvalidClientException":
          case "com.amazonaws.ssooidc#InvalidClientException":
            throw await eQ(r, t);
          case "InvalidGrantException":
          case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await tQ(r, t);
          case "InvalidRequestException":
          case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await rQ(r, t);
          case "InvalidScopeException":
          case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await oQ(r, t);
          case "SlowDownException":
          case "com.amazonaws.ssooidc#SlowDownException":
            throw await nQ(r, t);
          case "UnauthorizedClientException":
          case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await sQ(r, t);
          case "UnsupportedGrantTypeException":
          case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await iQ(r, t);
          default:
            let n = r.body;
            return YJ({ output: e, parsedBody: n, errorCode: o });
        }
      }),
      (YJ = Gd(_e)),
      (XJ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new Zs({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (JJ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ei({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (QJ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ti({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (ZJ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ri({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (eQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new oi({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (tQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ni({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (rQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new si({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (oQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ii({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (nQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ai({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (sQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new ci({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (iQ = async (e, t) => {
        let r = qe({}),
          o = e.body,
          n = Ke(o, { error: d, error_description: d });
        Object.assign(r, n);
        let i = new mi({ $metadata: ht(e), ...r });
        return de(i, e.body);
      }),
      (ht = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      }));
  });
var di,
  Ey = s(() => {
    En();
    zs();
    ce();
    Og();
    xf();
    Xz();
    di = class extends (
      Rt.classBuilder()
        .ep(aH)
        .m(function (t, r, o, n) {
          return [
            yn(o, this.serialize, this.deserialize),
            xn(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSSOOIDCService", "CreateToken", {})
        .n("SSOOIDCClient", "CreateTokenCommand")
        .f(yy, xy)
        .ser(Kz)
        .de(Yz)
        .build()
    ) {};
  });
var aQ,
  Ef,
  Jz = s(() => {
    ce();
    Ey();
    gy();
    (aQ = { CreateTokenCommand: di }), (Ef = class extends Qs {});
    jd(aQ, Ef);
  });
var Qz = s(() => {
  Ey();
});
var Zz = s(() => {
  xf();
});
var Sy = {};
Me(Sy, {
  $Command: () => Rt,
  AccessDeniedException: () => Zs,
  AuthorizationPendingException: () => ei,
  CreateTokenCommand: () => di,
  CreateTokenRequestFilterSensitiveLog: () => yy,
  CreateTokenResponseFilterSensitiveLog: () => xy,
  ExpiredTokenException: () => ti,
  InternalServerException: () => ri,
  InvalidClientException: () => oi,
  InvalidGrantException: () => ni,
  InvalidRequestException: () => si,
  InvalidScopeException: () => ii,
  SSOOIDC: () => Ef,
  SSOOIDCClient: () => Qs,
  SSOOIDCServiceException: () => _e,
  SlowDownException: () => ai,
  UnauthorizedClientException: () => ci,
  UnsupportedGrantTypeException: () => mi,
  __Client: () => Dr,
});
var Cy = s(() => {
  gy();
  Jz();
  Qz();
  Zz();
  yf();
});
var e3,
  t3 = s(() => {
    e3 = async (e, t = {}) => {
      let { SSOOIDCClient: r } = await Promise.resolve().then(() => (Cy(), Sy));
      return new r(
        Object.assign({}, t.clientConfig ?? {}, {
          region: e ?? t.clientConfig?.region,
          logger: t.clientConfig?.logger ?? t.parentClientConfig?.logger,
        })
      );
    };
  });
var r3,
  o3 = s(() => {
    t3();
    r3 = async (e, t, r = {}) => {
      let { CreateTokenCommand: o } = await Promise.resolve().then(
        () => (Cy(), Sy)
      );
      return (await e3(t, r)).send(
        new o({
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          refreshToken: e.refreshToken,
          grantType: "refresh_token",
        })
      );
    };
  });
var by,
  n3 = s(() => {
    K();
    md();
    by = (e) => {
      if (e.expiration && e.expiration.getTime() < Date.now())
        throw new Be(`Token is expired. ${fn}`, !1);
    };
  });
var Br,
  s3 = s(() => {
    K();
    md();
    Br = (e, t, r = !1) => {
      if (typeof t > "u")
        throw new Be(
          `Value not present for '${e}' in SSO Token${r ? ". Cannot refresh" : ""}. ${fn}`,
          !1
        );
    };
  });
import { promises as cQ } from "fs";
var mQ,
  i3,
  a3 = s(() => {
    Tt();
    ({ writeFile: mQ } = cQ),
      (i3 = (e, t) => {
        let r = gm(e),
          o = JSON.stringify(t, null, 2);
        return mQ(r, o);
      });
  });
var c3,
  m3,
  d3 = s(() => {
    K();
    Tt();
    md();
    o3();
    n3();
    s3();
    a3();
    (c3 = new Date(0)),
      (m3 =
        (e = {}) =>
        async ({ callerClientConfig: t } = {}) => {
          let r = {
            ...e,
            parentClientConfig: { ...t, ...e.parentClientConfig },
          };
          r.logger?.debug("@aws-sdk/token-providers - fromSso");
          let o = await wr(r),
            n = dt({ profile: r.profile ?? t?.profile }),
            i = o[n];
          if (i) {
            if (!i.sso_session)
              throw new Be(
                `Profile '${n}' is missing required property 'sso_session'.`
              );
          } else
            throw new Be(
              `Profile '${n}' could not be found in shared credentials file.`,
              !1
            );
          let a = i.sso_session,
            m = (await Sm(r))[a];
          if (!m)
            throw new Be(
              `Sso session '${a}' could not be found in shared credentials file.`,
              !1
            );
          for (let _ of ["sso_start_url", "sso_region"])
            if (!m[_])
              throw new Be(
                `Sso session '${a}' is missing required property '${_}'.`,
                !1
              );
          let f = m.sso_start_url,
            u = m.sso_region,
            p;
          try {
            p = await ym(a);
          } catch {
            throw new Be(
              `The SSO session token associated with profile=${n} was not found or is invalid. ${fn}`,
              !1
            );
          }
          Br("accessToken", p.accessToken), Br("expiresAt", p.expiresAt);
          let { accessToken: h, expiresAt: g } = p,
            x = { token: h, expiration: new Date(g) };
          if (x.expiration.getTime() - Date.now() > 3e5) return x;
          if (Date.now() - c3.getTime() < 30 * 1e3) return by(x), x;
          Br("clientId", p.clientId, !0),
            Br("clientSecret", p.clientSecret, !0),
            Br("refreshToken", p.refreshToken, !0);
          try {
            c3.setTime(Date.now());
            let _ = await r3(p, u, r);
            Br("accessToken", _.accessToken), Br("expiresIn", _.expiresIn);
            let T = new Date(Date.now() + _.expiresIn * 1e3);
            try {
              await i3(a, {
                ...p,
                accessToken: _.accessToken,
                expiresAt: T.toISOString(),
                refreshToken: _.refreshToken,
              });
            } catch {}
            return { token: _.accessToken, expiration: T };
          } catch {
            return by(x), x;
          }
        });
  });
var f3 = s(() => {
  K();
});
var p3 = s(() => {
  K();
});
var u3 = s(() => {
  e1();
  d3();
  f3();
  p3();
});
function fQ(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "awsssoportal", region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  };
}
function Sf(e) {
  return { schemeId: "smithy.api#noAuth" };
}
var l3,
  h3,
  g3,
  wy = s(() => {
    Se();
    he();
    l3 = async (e, t, r) => ({
      operation: Te(t).operation,
      region:
        (await Y(e.region)()) ||
        (() => {
          throw new Error(
            "expected `region` to be configured for `aws.auth#sigv4`"
          );
        })(),
    });
    (h3 = (e) => {
      let t = [];
      switch (e.operation) {
        case "GetRoleCredentials": {
          t.push(Sf(e));
          break;
        }
        case "ListAccountRoles": {
          t.push(Sf(e));
          break;
        }
        case "ListAccounts": {
          t.push(Sf(e));
          break;
        }
        case "Logout": {
          t.push(Sf(e));
          break;
        }
        default:
          t.push(fQ(e));
      }
      return t;
    }),
      (g3 = (e) => {
        let t = Sr(e);
        return Object.assign(t, {
          authSchemePreference: Y(e.authSchemePreference ?? []),
        });
      });
  });
var y3,
  Hr,
  Dn = s(() => {
    (y3 = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        defaultSigningName: "awsssoportal",
      })),
      (Hr = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      });
  });
var E3,
  x3 = s(() => {
    E3 = {
      name: "@aws-sdk/client-sso",
      description:
        "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.839.0",
      scripts: {
        build:
          "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps":
          "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client":
          "node ../../scripts/generate-clients/single-service --solo sso",
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: !1,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.839.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.839.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.828.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.839.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.6.0",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.13",
        "@smithy/middleware-retry": "^4.1.14",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.5",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.21",
        "@smithy/util-defaults-mode-node": "^4.0.21",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.6",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2",
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3",
      },
      engines: { node: ">=18.0.0" },
      typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
      files: ["dist-*/**"],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/",
      },
      license: "Apache-2.0",
      browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native",
      },
      homepage:
        "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso",
      },
    };
  });
var Ty,
  Ay = s(() => {
    Ty = { isCrtAvailable: !1 };
  });
var S3,
  C3 = s(() => {
    Ay();
    S3 = () => (Ty.isCrtAvailable ? ["md/crt-avail"] : null);
  });
import { platform as uQ, release as lQ } from "os";
import { env as b3, versions as hQ } from "process";
var Cf,
  w3 = s(() => {
    C3();
    Ay();
    Cf =
      ({ serviceId: e, clientVersion: t }) =>
      async (r) => {
        let o = [
            ["aws-sdk-js", t],
            ["ua", "2.1"],
            [`os/${uQ()}`, lQ()],
            ["lang/js"],
            ["md/nodejs", `${hQ.node}`],
          ],
          n = S3();
        n && o.push(n),
          e && o.push([`api/${e}`, t]),
          b3.AWS_EXECUTION_ENV && o.push([`exec-env/${b3.AWS_EXECUTION_ENV}`]);
        let i = await r?.userAgentAppId?.();
        return i ? [...o, [`app/${i}`]] : [...o];
      };
  });
var gQ,
  yQ,
  xQ,
  bf,
  T3 = s(() => {
    cm();
    (gQ = "AWS_SDK_UA_APP_ID"),
      (yQ = "sdk_ua_app_id"),
      (xQ = "sdk-ua-app-id"),
      (bf = {
        environmentVariableSelector: (e) => e[gQ],
        configFileSelector: (e) => e[yQ] ?? e[xQ],
        default: uu,
      });
  });
var _y = s(() => {
  w3();
  T3();
});
import { Buffer as Ry } from "buffer";
var vy,
  A3,
  _3 = s(() => {
    st();
    (vy = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Ry.from(e, t, r);
    }),
      (A3 = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Ry.from(e, t) : Ry.from(e);
      });
  });
import { Buffer as Iy } from "buffer";
var R3,
  v3,
  Py = s(() => {
    st();
    (R3 = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Iy.from(e, t, r);
    }),
      (v3 = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Iy.from(e, t) : Iy.from(e);
      });
  });
var zr,
  Ny = s(() => {
    Py();
    zr = (e) => {
      let t = v3(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var I3,
  P3 = s(() => {
    Ny();
    I3 = (e) =>
      typeof e == "string"
        ? zr(e)
        : ArrayBuffer.isView(e)
          ? new Uint8Array(
              e.buffer,
              e.byteOffset,
              e.byteLength / Uint8Array.BYTES_PER_ELEMENT
            )
          : new Uint8Array(e);
  });
var wf,
  N3 = s(() => {
    Py();
    wf = (e) => {
      if (typeof e == "string") return e;
      if (
        typeof e != "object" ||
        typeof e.byteOffset != "number" ||
        typeof e.byteLength != "number"
      )
        throw new Error(
          "@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."
        );
      return R3(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    };
  });
var fi = s(() => {
  Ny();
  P3();
  N3();
});
import { Buffer as EQ } from "buffer";
import { createHash as SQ, createHmac as CQ } from "crypto";
function O3(e, t) {
  return EQ.isBuffer(e)
    ? e
    : typeof e == "string"
      ? A3(e, t)
      : ArrayBuffer.isView(e)
        ? vy(e.buffer, e.byteOffset, e.byteLength)
        : vy(e);
}
var Fn,
  Oy = s(() => {
    _3();
    fi();
    Fn = class {
      constructor(t, r) {
        (this.algorithmIdentifier = t), (this.secret = r), this.reset();
      }
      update(t, r) {
        this.hash.update(I3(O3(t, r)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret
          ? CQ(this.algorithmIdentifier, O3(this.secret))
          : SQ(this.algorithmIdentifier);
      }
    };
  });
var pi,
  bQ,
  Dy = s(() => {
    (pi = (e) => encodeURIComponent(e).replace(/[!'()*]/g, bQ)),
      (bQ = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
  });
var D3 = s(() => {
  Dy();
});
var F3 = s(() => {
  Dy();
  D3();
});
function Fy(e) {
  let t = [];
  for (let r of Object.keys(e).sort()) {
    let o = e[r];
    if (((r = pi(r)), Array.isArray(o)))
      for (let n = 0, i = o.length; n < i; n++) t.push(`${r}=${pi(o[n])}`);
    else {
      let n = r;
      (o || typeof o == "string") && (n += `=${pi(o)}`), t.push(n);
    }
  }
  return t.join("&");
}
var My = s(() => {
  F3();
});
var M3,
  k3 = s(() => {
    M3 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
  });
var ky,
  Ly = s(() => {
    ky = (e) => {
      let t = {};
      for (let r of Object.keys(e)) {
        let o = e[r];
        t[r] = Array.isArray(o) ? o.join(",") : o;
      }
      return t;
    };
  });
var we,
  Mn = s(() => {
    we = {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: (e) => clearTimeout(e),
    };
  });
var L3,
  $3,
  U3 = s(() => {
    Mn();
    (L3 = 1e3),
      ($3 = (e, t, r = 0) => {
        if (!r) return -1;
        let o = (n) => {
          let i = we.setTimeout(() => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(
                      `Socket timed out without establishing a connection within ${r} ms`
                    ),
                    { name: "TimeoutError" }
                  )
                );
            }, r - n),
            a = (c) => {
              c?.connecting
                ? c.on("connect", () => {
                    we.clearTimeout(i);
                  })
                : we.clearTimeout(i);
            };
          e.socket ? a(e.socket) : e.on("socket", a);
        };
        return r < 2e3 ? (o(0), 0) : we.setTimeout(o.bind(null, L3), L3);
      });
  });
var wQ,
  B3,
  H3 = s(() => {
    Mn();
    (wQ = 3e3),
      (B3 = (e, { keepAlive: t, keepAliveMsecs: r }, o = wQ) => {
        if (t !== !0) return -1;
        let n = () => {
          e.socket
            ? e.socket.setKeepAlive(t, r || 0)
            : e.on("socket", (i) => {
                i.setKeepAlive(t, r || 0);
              });
        };
        return o === 0 ? (n(), 0) : we.setTimeout(n, o);
      });
  });
var z3,
  V3,
  j3 = s(() => {
    $y();
    Mn();
    (z3 = 3e3),
      (V3 = (e, t, r = G3) => {
        let o = (n) => {
          let i = r - n,
            a = () => {
              e.destroy(),
                t(
                  Object.assign(
                    new Error(`Connection timed out after ${r} ms`),
                    { name: "TimeoutError" }
                  )
                );
            };
          e.socket
            ? (e.socket.setTimeout(i, a),
              e.on("close", () => e.socket?.removeListener("timeout", a)))
            : e.setTimeout(i, a);
        };
        return 0 < r && r < 6e3
          ? (o(0), 0)
          : we.setTimeout(o.bind(null, r === 0 ? 0 : z3), z3);
      });
  });
import { Readable as TQ } from "stream";
async function Uy(e, t, r = W3) {
  let o = t.headers ?? {},
    n = o.Expect || o.expect,
    i = -1,
    a = !0;
  n === "100-continue" &&
    (a = await Promise.race([
      new Promise((c) => {
        i = Number(we.setTimeout(() => c(!0), Math.max(W3, r)));
      }),
      new Promise((c) => {
        e.on("continue", () => {
          we.clearTimeout(i), c(!0);
        }),
          e.on("response", () => {
            we.clearTimeout(i), c(!1);
          }),
          e.on("error", () => {
            we.clearTimeout(i), c(!1);
          });
      }),
    ])),
    a && AQ(e, t.body);
}
function AQ(e, t) {
  if (t instanceof TQ) {
    t.pipe(e);
    return;
  }
  if (t) {
    if (Buffer.isBuffer(t) || typeof t == "string") {
      e.end(t);
      return;
    }
    let r = t;
    if (
      typeof r == "object" &&
      r.buffer &&
      typeof r.byteOffset == "number" &&
      typeof r.byteLength == "number"
    ) {
      e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
      return;
    }
    e.end(Buffer.from(t));
    return;
  }
  e.end();
}
var W3,
  By = s(() => {
    Mn();
    W3 = 6e3;
  });
import { Agent as q3, request as _Q } from "http";
import { Agent as K3, request as RQ } from "https";
var G3,
  kn,
  $y = s(() => {
    Qe();
    My();
    k3();
    Ly();
    U3();
    H3();
    j3();
    Mn();
    By();
    (G3 = 0),
      (kn = class e {
        static create(t) {
          return typeof t?.handle == "function" ? t : new e(t);
        }
        static checkSocketUsage(t, r, o = console) {
          let { sockets: n, requests: i, maxSockets: a } = t;
          if (typeof a != "number" || a === 1 / 0 || Date.now() - 15e3 < r)
            return r;
          if (n && i)
            for (let m in n) {
              let f = n[m]?.length ?? 0,
                u = i[m]?.length ?? 0;
              if (f >= a && u >= 2 * a)
                return (
                  o?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${f} and ${u} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),
                  Date.now()
                );
            }
          return r;
        }
        constructor(t) {
          (this.socketWarningTimestamp = 0),
            (this.metadata = { handlerProtocol: "http/1.1" }),
            (this.configProvider = new Promise((r, o) => {
              typeof t == "function"
                ? t()
                    .then((n) => {
                      r(this.resolveDefaultConfig(n));
                    })
                    .catch(o)
                : r(this.resolveDefaultConfig(t));
            }));
        }
        resolveDefaultConfig(t) {
          let {
              requestTimeout: r,
              connectionTimeout: o,
              socketTimeout: n,
              socketAcquisitionWarningTimeout: i,
              httpAgent: a,
              httpsAgent: c,
            } = t || {},
            m = !0,
            f = 50;
          return {
            connectionTimeout: o,
            requestTimeout: r ?? n,
            socketAcquisitionWarningTimeout: i,
            httpAgent:
              a instanceof q3 || typeof a?.destroy == "function"
                ? a
                : new q3({ keepAlive: m, maxSockets: f, ...a }),
            httpsAgent:
              c instanceof K3 || typeof c?.destroy == "function"
                ? c
                : new K3({ keepAlive: m, maxSockets: f, ...c }),
            logger: console,
          };
        }
        destroy() {
          this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
        }
        async handle(t, { abortSignal: r } = {}) {
          return (
            this.config || (this.config = await this.configProvider),
            new Promise((o, n) => {
              let i,
                a = [],
                c = async (v) => {
                  await i, a.forEach(we.clearTimeout), o(v);
                },
                m = async (v) => {
                  await i, a.forEach(we.clearTimeout), n(v);
                };
              if (!this.config)
                throw new Error(
                  "Node HTTP request handler config is not resolved"
                );
              if (r?.aborted) {
                let v = new Error("Request aborted");
                (v.name = "AbortError"), m(v);
                return;
              }
              let f = t.protocol === "https:",
                u = f ? this.config.httpsAgent : this.config.httpAgent;
              a.push(
                we.setTimeout(
                  () => {
                    this.socketWarningTimestamp = e.checkSocketUsage(
                      u,
                      this.socketWarningTimestamp,
                      this.config.logger
                    );
                  },
                  this.config.socketAcquisitionWarningTimeout ??
                    (this.config.requestTimeout ?? 2e3) +
                      (this.config.connectionTimeout ?? 1e3)
                )
              );
              let p = Fy(t.query || {}),
                h;
              if (t.username != null || t.password != null) {
                let v = t.username ?? "",
                  H = t.password ?? "";
                h = `${v}:${H}`;
              }
              let g = t.path;
              p && (g += `?${p}`), t.fragment && (g += `#${t.fragment}`);
              let x = t.hostname ?? "";
              x[0] === "[" && x.endsWith("]")
                ? (x = t.hostname.slice(1, -1))
                : (x = t.hostname);
              let _ = {
                  headers: t.headers,
                  host: x,
                  method: t.method,
                  path: g,
                  port: t.port,
                  agent: u,
                  auth: h,
                },
                R = (f ? RQ : _Q)(_, (v) => {
                  let H = new Nt({
                    statusCode: v.statusCode || -1,
                    reason: v.statusMessage,
                    headers: ky(v.headers),
                    body: v,
                  });
                  c({ response: H });
                });
              if (
                (R.on("error", (v) => {
                  M3.includes(v.code)
                    ? m(Object.assign(v, { name: "TimeoutError" }))
                    : m(v);
                }),
                r)
              ) {
                let v = () => {
                  R.destroy();
                  let H = new Error("Request aborted");
                  (H.name = "AbortError"), m(H);
                };
                if (typeof r.addEventListener == "function") {
                  let H = r;
                  H.addEventListener("abort", v, { once: !0 }),
                    R.once("close", () => H.removeEventListener("abort", v));
                } else r.onabort = v;
              }
              a.push($3(R, m, this.config.connectionTimeout)),
                a.push(V3(R, m, this.config.requestTimeout));
              let $ = _.agent;
              typeof $ == "object" &&
                "keepAlive" in $ &&
                a.push(
                  B3(R, {
                    keepAlive: $.keepAlive,
                    keepAliveMsecs: $.keepAliveMsecs,
                  })
                ),
                (i = Uy(R, t, this.config.requestTimeout).catch(
                  (v) => (a.forEach(we.clearTimeout), n(v))
                ));
            })
          );
        }
        updateHttpClientConfig(t, r) {
          (this.config = void 0),
            (this.configProvider = this.configProvider.then((o) => ({
              ...o,
              [t]: r,
            })));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      });
  });
var Y3 = s(() => {});
var X3 = s(() => {
  Y3();
});
var J3 = s(() => {
  Qe();
  My();
  Ly();
  X3();
  By();
});
import { Writable as vQ } from "stream";
var Tf,
  Q3 = s(() => {
    Tf = class extends vQ {
      constructor() {
        super(...arguments), (this.bufferedBytes = []);
      }
      _write(t, r, o) {
        this.bufferedBytes.push(t), o();
      }
    };
  });
async function PQ(e) {
  let t = [],
    r = e.getReader(),
    o = !1,
    n = 0;
  for (; !o; ) {
    let { done: c, value: m } = await r.read();
    m && (t.push(m), (n += m.length)), (o = c);
  }
  let i = new Uint8Array(n),
    a = 0;
  for (let c of t) i.set(c, a), (a += c.length);
  return i;
}
var Af,
  IQ,
  Z3 = s(() => {
    Q3();
    (Af = (e) =>
      IQ(e)
        ? PQ(e)
        : new Promise((t, r) => {
            let o = new Tf();
            e.pipe(o),
              e.on("error", (n) => {
                o.end(), r(n);
              }),
              o.on("error", r),
              o.on("finish", function () {
                let n = new Uint8Array(Buffer.concat(this.bufferedBytes));
                t(n);
              });
          })),
      (IQ = (e) =>
        typeof ReadableStream == "function" && e instanceof ReadableStream);
  });
var Hy = s(() => {
  $y();
  J3();
  Z3();
});
import { fstatSync as NQ, lstatSync as OQ } from "fs";
var _f,
  eV = s(() => {
    _f = (e) => {
      if (!e) return 0;
      if (typeof e == "string") return Buffer.byteLength(e);
      if (typeof e.byteLength == "number") return e.byteLength;
      if (typeof e.size == "number") return e.size;
      if (typeof e.start == "number" && typeof e.end == "number")
        return e.end + 1 - e.start;
      if (typeof e.path == "string" || Buffer.isBuffer(e.path))
        return OQ(e.path).size;
      if (typeof e.fd == "number") return NQ(e.fd).size;
      throw new Error(`Body Length computation failed for ${e}`);
    };
  });
var zy = s(() => {
  eV();
});
import { Buffer as Vy } from "buffer";
var tV,
  rV,
  jy = s(() => {
    st();
    (tV = (e, t = 0, r = e.byteLength - t) => {
      if (!ge(e))
        throw new TypeError(
          `The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`
        );
      return Vy.from(e, t, r);
    }),
      (rV = (e, t) => {
        if (typeof e != "string")
          throw new TypeError(
            `The "input" argument must be of type string. Received type ${typeof e} (${e})`
          );
        return t ? Vy.from(e, t) : Vy.from(e);
      });
  });
var DQ,
  Rf,
  oV = s(() => {
    jy();
    (DQ = /^[A-Za-z0-9+/]*={0,2}$/),
      (Rf = (e) => {
        if ((e.length * 3) % 4 !== 0)
          throw new TypeError("Incorrect padding on base64 string.");
        if (!DQ.exec(e)) throw new TypeError("Invalid base64 string.");
        let t = rV(e, "base64");
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      });
  });
var vf,
  nV = s(() => {
    jy();
    fi();
    vf = (e) => {
      let t;
      if (
        (typeof e == "string" ? (t = zr(e)) : (t = e),
        typeof t != "object" ||
          typeof t.byteOffset != "number" ||
          typeof t.byteLength != "number")
      )
        throw new Error(
          "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."
        );
      return tV(t.buffer, t.byteOffset, t.byteLength).toString("base64");
    };
  });
var Gy = s(() => {
  oV();
  nV();
});
var lV,
  yt,
  xt,
  Un,
  sV,
  ui,
  Ln,
  $n,
  sr,
  Wy,
  qy,
  iV,
  aV,
  cV,
  hV,
  gV,
  gt,
  mV,
  yV,
  dV,
  fV,
  pV,
  uV,
  FQ,
  xV,
  EV = s(() => {
    (lV = "required"),
      (yt = "fn"),
      (xt = "argv"),
      (Un = "ref"),
      (sV = "isSet"),
      (ui = "booleanEquals"),
      (Ln = "error"),
      ($n = "endpoint"),
      (sr = "tree"),
      (Wy = "PartitionResult"),
      (qy = "getAttr"),
      (iV = { [lV]: !1, type: "String" }),
      (aV = { [lV]: !0, default: !1, type: "Boolean" }),
      (cV = { [Un]: "Endpoint" }),
      (hV = { [yt]: ui, [xt]: [{ [Un]: "UseFIPS" }, !0] }),
      (gV = { [yt]: ui, [xt]: [{ [Un]: "UseDualStack" }, !0] }),
      (gt = {}),
      (mV = { [yt]: qy, [xt]: [{ [Un]: Wy }, "supportsFIPS"] }),
      (yV = { [Un]: Wy }),
      (dV = {
        [yt]: ui,
        [xt]: [!0, { [yt]: qy, [xt]: [yV, "supportsDualStack"] }],
      }),
      (fV = [hV]),
      (pV = [gV]),
      (uV = [{ [Un]: "Region" }]),
      (FQ = {
        version: "1.0",
        parameters: { Region: iV, UseDualStack: aV, UseFIPS: aV, Endpoint: iV },
        rules: [
          {
            conditions: [{ [yt]: sV, [xt]: [cV] }],
            rules: [
              {
                conditions: fV,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: Ln,
              },
              {
                conditions: pV,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: Ln,
              },
              { endpoint: { url: cV, properties: gt, headers: gt }, type: $n },
            ],
            type: sr,
          },
          {
            conditions: [{ [yt]: sV, [xt]: uV }],
            rules: [
              {
                conditions: [{ [yt]: "aws.partition", [xt]: uV, assign: Wy }],
                rules: [
                  {
                    conditions: [hV, gV],
                    rules: [
                      {
                        conditions: [{ [yt]: ui, [xt]: [!0, mV] }, dV],
                        rules: [
                          {
                            endpoint: {
                              url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: gt,
                              headers: gt,
                            },
                            type: $n,
                          },
                        ],
                        type: sr,
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        type: Ln,
                      },
                    ],
                    type: sr,
                  },
                  {
                    conditions: fV,
                    rules: [
                      {
                        conditions: [{ [yt]: ui, [xt]: [mV, !0] }],
                        rules: [
                          {
                            conditions: [
                              {
                                [yt]: "stringEquals",
                                [xt]: [
                                  { [yt]: qy, [xt]: [yV, "name"] },
                                  "aws-us-gov",
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://portal.sso.{Region}.amazonaws.com",
                              properties: gt,
                              headers: gt,
                            },
                            type: $n,
                          },
                          {
                            endpoint: {
                              url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: gt,
                              headers: gt,
                            },
                            type: $n,
                          },
                        ],
                        type: sr,
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        type: Ln,
                      },
                    ],
                    type: sr,
                  },
                  {
                    conditions: pV,
                    rules: [
                      {
                        conditions: [dV],
                        rules: [
                          {
                            endpoint: {
                              url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: gt,
                              headers: gt,
                            },
                            type: $n,
                          },
                        ],
                        type: sr,
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        type: Ln,
                      },
                    ],
                    type: sr,
                  },
                  {
                    endpoint: {
                      url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                      properties: gt,
                      headers: gt,
                    },
                    type: $n,
                  },
                ],
                type: sr,
              },
            ],
            type: sr,
          },
          { error: "Invalid Configuration: Missing Region", type: Ln },
        ],
      }),
      (xV = FQ);
  });
var MQ,
  SV,
  CV = s(() => {
    Hc();
    $e();
    EV();
    (MQ = new $t({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
    })),
      (SV = (e, t = {}) =>
        MQ.get(e, () => Ut(xV, { endpointParams: e, logger: t.logger })));
    Le.aws = us;
  });
var bV,
  wV = s(() => {
    Se();
    Q();
    I();
    vs();
    Gy();
    fi();
    wy();
    CV();
    bV = (e) => ({
      apiVersion: "2019-06-10",
      base64Decoder: e?.base64Decoder ?? Rf,
      base64Encoder: e?.base64Encoder ?? vf,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? SV,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? h3,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
          signer: new rt(),
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (t) =>
            t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new Lt(),
        },
      ],
      logger: e?.logger ?? new _r(),
      serviceId: e?.serviceId ?? "SSO",
      urlParser: e?.urlParser ?? Bt,
      utf8Decoder: e?.utf8Decoder ?? zr,
      utf8Encoder: e?.utf8Encoder ?? wf,
    });
  });
var TV,
  Ky,
  Yy,
  AV,
  _V,
  RV,
  vV = s(() => {
    (TV = "AWS_EXECUTION_ENV"),
      (Ky = "AWS_REGION"),
      (Yy = "AWS_DEFAULT_REGION"),
      (AV = "AWS_EC2_METADATA_DISABLED"),
      (_V = ["in-region", "cross-region", "mobile", "standard", "legacy"]),
      (RV = "/latest/meta-data/placement/region");
  });
var kQ,
  LQ,
  IV,
  PV = s(() => {
    (kQ = "AWS_DEFAULTS_MODE"),
      (LQ = "defaults_mode"),
      (IV = {
        environmentVariableSelector: (e) => e[kQ],
        configFileSelector: (e) => e[LQ],
        default: "legacy",
      });
  });
var If,
  $Q,
  UQ,
  NV = s(() => {
    Yo();
    eo();
    K();
    vV();
    PV();
    (If = ({ region: e = ne(Ko), defaultsMode: t = ne(IV) } = {}) =>
      wt(async () => {
        let r = typeof t == "function" ? await t() : t;
        switch (r?.toLowerCase()) {
          case "auto":
            return $Q(e);
          case "in-region":
          case "cross-region":
          case "mobile":
          case "standard":
          case "legacy":
            return Promise.resolve(r?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve("legacy");
          default:
            throw new Error(
              `Invalid parameter for "defaultsMode", expect ${_V.join(", ")}, got ${r}`
            );
        }
      })),
      ($Q = async (e) => {
        if (e) {
          let t = typeof e == "function" ? await e() : e,
            r = await UQ();
          return r ? (t === r ? "in-region" : "cross-region") : "standard";
        }
        return "standard";
      }),
      (UQ = async () => {
        if (process.env[TV] && (process.env[Ky] || process.env[Yy]))
          return process.env[Ky] ?? process.env[Yy];
        if (!process.env[AV])
          try {
            let { getInstanceMetadataEndpoint: e, httpRequest: t } =
                await Promise.resolve().then(() => (ks(), Ms)),
              r = await e();
            return (await t({ ...r, path: RV })).toString();
          } catch {}
      });
  });
var Xy = s(() => {
  NV();
});
var OV,
  DV = s(() => {
    x3();
    Se();
    _y();
    Yo();
    Oy();
    Os();
    eo();
    Hy();
    zy();
    Ht();
    wV();
    I();
    Xy();
    I();
    OV = (e) => {
      Um(process.version);
      let t = If(e),
        r = () => t().then($m),
        o = bV(e);
      yr(process.version);
      let n = { profile: e?.profile, logger: o.logger };
      return {
        ...o,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? ne(xr, n),
        bodyLengthChecker: e?.bodyLengthChecker ?? _f,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          Cf({ serviceId: o.serviceId, clientVersion: E3.version }),
        maxAttempts: e?.maxAttempts ?? ne(Dm, e),
        region: e?.region ?? ne(Ko, { ...fm, ...n }),
        requestHandler: kn.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          ne({ ...Mm, default: async () => (await r()).retryMode || Qo }, e),
        sha256: e?.sha256 ?? Fn.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? Af,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? ne(mm, n),
        useFipsEndpoint: e?.useFipsEndpoint ?? ne(dm, n),
        userAgentAppId: e?.userAgentAppId ?? ne(bf, n),
      };
    };
  });
var FV,
  MV,
  kV = s(() => {
    (FV = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        o = e.credentials;
      return {
        setHttpAuthScheme(n) {
          let i = t.findIndex((a) => a.schemeId === n.schemeId);
          i === -1 ? t.push(n) : t.splice(i, 1, n);
        },
        httpAuthSchemes() {
          return t;
        },
        setHttpAuthSchemeProvider(n) {
          r = n;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(n) {
          o = n;
        },
        credentials() {
          return o;
        },
      };
    }),
      (MV = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }));
  });
var LV,
  $V = s(() => {
    Js();
    Qe();
    I();
    kV();
    LV = (e, t) => {
      let r = Object.assign($r(e), Bm(e), lc(e), FV(e));
      return (
        t.forEach((o) => o.configure(r)),
        Object.assign(e, Ur(r), Hm(r), hc(r), MV(r))
      );
    };
  });
var qt,
  li = s(() => {
    Ap();
    _p();
    vp();
    cm();
    Yo();
    Q();
    Nl();
    O();
    Os();
    I();
    wy();
    Dn();
    DV();
    $V();
    qt = class extends no {
      config;
      constructor(...[t]) {
        let r = OV(t || {});
        super(r), (this.initConfig = r);
        let o = y3(r),
          n = Dc(o),
          i = Fm(n),
          a = um(i),
          c = a,
          m = Tm(c),
          f = g3(m),
          u = LV(f, t?.extensions || []);
        (this.config = u),
          this.middlewareStack.use(am(this.config)),
          this.middlewareStack.use(zm(this.config)),
          this.middlewareStack.use(lm(this.config)),
          this.middlewareStack.use(gc(this.config)),
          this.middlewareStack.use(yc(this.config)),
          this.middlewareStack.use(xc(this.config)),
          this.middlewareStack.use(
            dr(this.config, {
              httpAuthSchemeParametersProvider: l3,
              identityProviderConfigProvider: async (p) =>
                new kt({ "aws.auth#sigv4": p.credentials }),
            })
          ),
          this.middlewareStack.use(fr(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var ir,
  Jy = s(() => {
    I();
    ir = class e extends nn {
      constructor(t) {
        super(t), Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var Pf,
  Nf,
  Of,
  Df,
  UV,
  HQ,
  BV,
  HV,
  zV,
  VV,
  lo = s(() => {
    I();
    Jy();
    (Pf = class e extends ir {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(t) {
        super({ name: "InvalidRequestException", $fault: "client", ...t }),
          Object.setPrototypeOf(this, e.prototype);
      }
    }),
      (Nf = class e extends ir {
        name = "ResourceNotFoundException";
        $fault = "client";
        constructor(t) {
          super({ name: "ResourceNotFoundException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (Of = class e extends ir {
        name = "TooManyRequestsException";
        $fault = "client";
        constructor(t) {
          super({ name: "TooManyRequestsException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (Df = class e extends ir {
        name = "UnauthorizedException";
        $fault = "client";
        constructor(t) {
          super({ name: "UnauthorizedException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (UV = (e) => ({ ...e, ...(e.accessToken && { accessToken: ye }) })),
      (HQ = (e) => ({
        ...e,
        ...(e.secretAccessKey && { secretAccessKey: ye }),
        ...(e.sessionToken && { sessionToken: ye }),
      })),
      (BV = (e) => ({
        ...e,
        ...(e.roleCredentials && { roleCredentials: HQ(e.roleCredentials) }),
      })),
      (HV = (e) => ({ ...e, ...(e.accessToken && { accessToken: ye }) })),
      (zV = (e) => ({ ...e, ...(e.accessToken && { accessToken: ye }) })),
      (VV = (e) => ({ ...e, ...(e.accessToken && { accessToken: ye }) }));
  });
var jV,
  GV,
  WV,
  qV,
  KV,
  YV,
  XV,
  JV,
  Ff,
  zQ,
  VQ,
  jQ,
  GQ,
  WQ,
  Vr,
  QV,
  Mf,
  ZV,
  ej,
  tj,
  rj,
  oj,
  qQ,
  KQ,
  kf,
  hi = s(() => {
    Se();
    Q();
    I();
    lo();
    Jy();
    (jV = async (e, t) => {
      let r = N(e, t),
        o = y({}, Ar, { [kf]: e[Mf] });
      r.bp("/federation/credentials");
      let n = y({
        [KQ]: [, P(e[qQ], "roleName")],
        [ZV]: [, P(e[QV], "accountId")],
      });
      return (
        r
          .m("GET")
          .h(o)
          .q(n)
          .b(void 0),
        r.build()
      );
    }),
      (GV = async (e, t) => {
        let r = N(e, t),
          o = y({}, Ar, { [kf]: e[Mf] });
        r.bp("/assignment/roles");
        let n = y({
          [oj]: [, e[rj]],
          [tj]: [() => e.maxResults !== void 0, () => e[ej].toString()],
          [ZV]: [, P(e[QV], "accountId")],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (WV = async (e, t) => {
        let r = N(e, t),
          o = y({}, Ar, { [kf]: e[Mf] });
        r.bp("/assignment/accounts");
        let n = y({
          [oj]: [, e[rj]],
          [tj]: [() => e.maxResults !== void 0, () => e[ej].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (qV = async (e, t) => {
        let r = N(e, t),
          o = y({}, Ar, { [kf]: e[Mf] });
        return (
          r.bp("/logout"),
          r
            .m("POST")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (KV = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return Ff(e, t);
        let r = y({ $metadata: Vr(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { roleCredentials: l });
        return Object.assign(r, n), r;
      }),
      (YV = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return Ff(e, t);
        let r = y({ $metadata: Vr(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { nextToken: d, roleList: l });
        return Object.assign(r, n), r;
      }),
      (XV = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return Ff(e, t);
        let r = y({ $metadata: Vr(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { accountList: l, nextToken: d });
        return Object.assign(r, n), r;
      }),
      (JV = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return Ff(e, t);
        let r = y({ $metadata: Vr(e) });
        return await ee(e.body, t), r;
      }),
      (Ff = async (e, t) => {
        let r = { ...e, body: await Wo(e.body, t) },
          o = qo(e, r.body);
        switch (o) {
          case "InvalidRequestException":
          case "com.amazonaws.sso#InvalidRequestException":
            throw await VQ(r, t);
          case "ResourceNotFoundException":
          case "com.amazonaws.sso#ResourceNotFoundException":
            throw await jQ(r, t);
          case "TooManyRequestsException":
          case "com.amazonaws.sso#TooManyRequestsException":
            throw await GQ(r, t);
          case "UnauthorizedException":
          case "com.amazonaws.sso#UnauthorizedException":
            throw await WQ(r, t);
          default:
            let n = r.body;
            return zQ({ output: e, parsedBody: n, errorCode: o });
        }
      }),
      (zQ = Lm(ir)),
      (VQ = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { message: d });
        Object.assign(r, n);
        let i = new Pf({ $metadata: Vr(e), ...r });
        return V(i, e.body);
      }),
      (jQ = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { message: d });
        Object.assign(r, n);
        let i = new Nf({ $metadata: Vr(e), ...r });
        return V(i, e.body);
      }),
      (GQ = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { message: d });
        Object.assign(r, n);
        let i = new Of({ $metadata: Vr(e), ...r });
        return V(i, e.body);
      }),
      (WQ = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { message: d });
        Object.assign(r, n);
        let i = new Df({ $metadata: Vr(e), ...r });
        return V(i, e.body);
      }),
      (Vr = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      })),
      (QV = "accountId"),
      (Mf = "accessToken"),
      (ZV = "account_id"),
      (ej = "maxResults"),
      (tj = "max_result"),
      (rj = "nextToken"),
      (oj = "next_token"),
      (qQ = "roleName"),
      (KQ = "role_name"),
      (kf = "x-amz-sso_bearer_token");
  });
var Bn,
  Qy = s(() => {
    O();
    F();
    I();
    Dn();
    lo();
    hi();
    Bn = class extends (
      E.classBuilder()
        .ep(Hr)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("SWBPortalService", "GetRoleCredentials", {})
        .n("SSOClient", "GetRoleCredentialsCommand")
        .f(UV, BV)
        .ser(jV)
        .de(KV)
        .build()
    ) {};
  });
var Hn,
  Lf = s(() => {
    O();
    F();
    I();
    Dn();
    lo();
    hi();
    Hn = class extends (
      E.classBuilder()
        .ep(Hr)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("SWBPortalService", "ListAccountRoles", {})
        .n("SSOClient", "ListAccountRolesCommand")
        .f(HV, void 0)
        .ser(GV)
        .de(YV)
        .build()
    ) {};
  });
var zn,
  $f = s(() => {
    O();
    F();
    I();
    Dn();
    lo();
    hi();
    zn = class extends (
      E.classBuilder()
        .ep(Hr)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("SWBPortalService", "ListAccounts", {})
        .n("SSOClient", "ListAccountsCommand")
        .f(zV, void 0)
        .ser(WV)
        .de(XV)
        .build()
    ) {};
  });
var Uf,
  Zy = s(() => {
    O();
    F();
    I();
    Dn();
    lo();
    hi();
    Uf = class extends (
      E.classBuilder()
        .ep(Hr)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("SWBPortalService", "Logout", {})
        .n("SSOClient", "LogoutCommand")
        .f(VV, void 0)
        .ser(qV)
        .de(JV)
        .build()
    ) {};
  });
var YQ,
  ex,
  nj = s(() => {
    I();
    Qy();
    Lf();
    $f();
    Zy();
    li();
    (YQ = {
      GetRoleCredentialsCommand: Bn,
      ListAccountRolesCommand: Hn,
      ListAccountsCommand: zn,
      LogoutCommand: Uf,
    }),
      (ex = class extends qt {});
    km(YQ, ex);
  });
var sj = s(() => {
  Qy();
  Lf();
  $f();
  Zy();
});
var ij = s(() => {});
var O7e,
  aj = s(() => {
    Q();
    Lf();
    li();
    O7e = te(qt, Hn, "nextToken", "nextToken", "maxResults");
  });
var L7e,
  cj = s(() => {
    Q();
    $f();
    li();
    L7e = te(qt, zn, "nextToken", "nextToken", "maxResults");
  });
var mj = s(() => {
  ij();
  aj();
  cj();
});
var dj = s(() => {
  lo();
});
var fj = s(() => {
  li();
  nj();
  sj();
  mj();
  dj();
});
var pj = {};
Me(pj, { GetRoleCredentialsCommand: () => Bn, SSOClient: () => qt });
var uj = s(() => {
  fj();
});
var gi,
  tx,
  lj = s(() => {
    Ue();
    u3();
    K();
    Tt();
    (gi = !1),
      (tx = async ({
        ssoStartUrl: e,
        ssoSession: t,
        ssoAccountId: r,
        ssoRegion: o,
        ssoRoleName: n,
        ssoClient: i,
        clientConfig: a,
        parentClientConfig: c,
        profile: m,
        logger: f,
      }) => {
        let u,
          p =
            "To refresh this SSO session run aws sso login with the corresponding profile.";
        if (t)
          try {
            let qr = await m3({ profile: m })();
            u = {
              accessToken: qr.token,
              expiresAt: new Date(qr.expiration).toISOString(),
            };
          } catch (qr) {
            throw new D(qr.message, { tryNextLink: gi, logger: f });
          }
        else
          try {
            u = await ym(e);
          } catch {
            throw new D(
              `The SSO session associated with this profile is invalid. ${p}`,
              { tryNextLink: gi, logger: f }
            );
          }
        if (new Date(u.expiresAt).getTime() - Date.now() <= 0)
          throw new D(
            `The SSO session associated with this profile has expired. ${p}`,
            { tryNextLink: gi, logger: f }
          );
        let { accessToken: h } = u,
          { SSOClient: g, GetRoleCredentialsCommand: x } =
            await Promise.resolve().then(() => (uj(), pj)),
          _ =
            i ||
            new g(
              Object.assign({}, a ?? {}, {
                logger: a?.logger ?? c?.logger,
                region: a?.region ?? o,
              })
            ),
          T;
        try {
          T = await _.send(
            new x({ accountId: r, roleName: n, accessToken: h })
          );
        } catch (qr) {
          throw new D(qr, { tryNextLink: gi, logger: f });
        }
        let {
          roleCredentials: {
            accessKeyId: R,
            secretAccessKey: $,
            sessionToken: v,
            expiration: H,
            credentialScope: Ve,
            accountId: Pt,
          } = {},
        } = T;
        if (!R || !$ || !v || !H)
          throw new D("SSO returns an invalid temporary credential.", {
            tryNextLink: gi,
            logger: f,
          });
        let Ep = {
          accessKeyId: R,
          secretAccessKey: $,
          sessionToken: v,
          expiration: new Date(H),
          ...(Ve && { credentialScope: Ve }),
          ...(Pt && { accountId: Pt }),
        };
        return (
          t
            ? Z(Ep, "CREDENTIALS_SSO", "s")
            : Z(Ep, "CREDENTIALS_SSO_LEGACY", "u"),
          Ep
        );
      });
  });
var rx,
  ox = s(() => {
    K();
    rx = (e, t) => {
      let {
        sso_start_url: r,
        sso_account_id: o,
        sso_region: n,
        sso_role_name: i,
      } = e;
      if (!r || !o || !n || !i)
        throw new D(
          `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          { tryNextLink: !1, logger: t }
        );
      return e;
    };
  });
var XQ,
  hj = s(() => {
    K();
    Tt();
    Bh();
    lj();
    ox();
    XQ =
      (e = {}) =>
      async ({ callerClientConfig: t } = {}) => {
        e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
        let {
            ssoStartUrl: r,
            ssoAccountId: o,
            ssoRegion: n,
            ssoRoleName: i,
            ssoSession: a,
          } = e,
          { ssoClient: c } = e,
          m = dt({ profile: e.profile ?? t?.profile });
        if (!r && !o && !n && !i && !a) {
          let u = (await wr(e))[m];
          if (!u)
            throw new D(`Profile ${m} was not found.`, { logger: e.logger });
          if (!Uh(u))
            throw new D(
              `Profile ${m} is not configured with SSO credentials.`,
              { logger: e.logger }
            );
          if (u?.sso_session) {
            let R = (await Sm(e))[u.sso_session],
              $ = ` configurations in profile ${m} and sso-session ${u.sso_session}`;
            if (n && n !== R.sso_region)
              throw new D("Conflicting SSO region" + $, {
                tryNextLink: !1,
                logger: e.logger,
              });
            if (r && r !== R.sso_start_url)
              throw new D("Conflicting SSO start_url" + $, {
                tryNextLink: !1,
                logger: e.logger,
              });
            (u.sso_region = R.sso_region), (u.sso_start_url = R.sso_start_url);
          }
          let {
            sso_start_url: p,
            sso_account_id: h,
            sso_region: g,
            sso_role_name: x,
            sso_session: _,
          } = rx(u, e.logger);
          return tx({
            ssoStartUrl: p,
            ssoSession: _,
            ssoAccountId: h,
            ssoRegion: g,
            ssoRoleName: x,
            ssoClient: c,
            clientConfig: e.clientConfig,
            parentClientConfig: e.parentClientConfig,
            profile: m,
          });
        } else {
          if (!r || !o || !n || !i)
            throw new D(
              'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
              { tryNextLink: !1, logger: e.logger }
            );
          return tx({
            ssoStartUrl: r,
            ssoSession: a,
            ssoAccountId: o,
            ssoRegion: n,
            ssoRoleName: i,
            ssoClient: c,
            clientConfig: e.clientConfig,
            parentClientConfig: e.parentClientConfig,
            profile: m,
          });
        }
      };
  });
var gj = s(() => {});
var nx = {};
Me(nx, {
  fromSSO: () => XQ,
  isSsoProfile: () => Uh,
  validateSsoProfile: () => rx,
});
var sx = s(() => {
  hj();
  Bh();
  gj();
  ox();
});
var yj,
  ix,
  xj = s(() => {
    Ue();
    K();
    (yj = (e, t, r) => {
      let o = {
        EcsContainer: async (n) => {
          let { fromHttp: i } = await Promise.resolve().then(() => ($h(), Lh)),
            { fromContainerMetadata: a } = await Promise.resolve().then(
              () => (ks(), Ms)
            );
          return (
            r?.debug(
              "@aws-sdk/credential-provider-ini - credential_source is EcsContainer"
            ),
            async () => bt(i(n ?? {}), a(n))().then(ix)
          );
        },
        Ec2InstanceMetadata: async (n) => {
          r?.debug(
            "@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata"
          );
          let { fromInstanceMetadata: i } = await Promise.resolve().then(
            () => (ks(), Ms)
          );
          return async () => i(n)().then(ix);
        },
        Environment: async (n) => {
          r?.debug(
            "@aws-sdk/credential-provider-ini - credential_source is Environment"
          );
          let { fromEnv: i } = await Promise.resolve().then(() => (mh(), HM));
          return async () => i(n)().then(ix);
        },
      };
      if (e in o) return o[e];
      throw new D(
        `Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
        { logger: r }
      );
    }),
      (ix = (e) => Z(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"));
  });
function JQ(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "sts", region: e.region },
    propertiesExtractor: (t, r) => ({
      signingProperties: { config: t, context: r },
    }),
  };
}
function QQ(e) {
  return { schemeId: "smithy.api#noAuth" };
}
var Ej,
  Sj,
  ZQ,
  Cj,
  ax = s(() => {
    Se();
    he();
    yi();
    Ej = async (e, t, r) => ({
      operation: Te(t).operation,
      region:
        (await Y(e.region)()) ||
        (() => {
          throw new Error(
            "expected `region` to be configured for `aws.auth#sigv4`"
          );
        })(),
    });
    (Sj = (e) => {
      let t = [];
      switch (e.operation) {
        case "AssumeRoleWithWebIdentity": {
          t.push(QQ(e));
          break;
        }
        default:
          t.push(JQ(e));
      }
      return t;
    }),
      (ZQ = (e) => Object.assign(e, { stsClientCtor: Kt })),
      (Cj = (e) => {
        let t = ZQ(e),
          r = Sr(t);
        return Object.assign(r, {
          authSchemePreference: Y(e.authSchemePreference ?? []),
        });
      });
  });
var bj,
  Bf,
  Hf = s(() => {
    (bj = (e) =>
      Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
        defaultSigningName: "sts",
      })),
      (Bf = {
        UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      });
  });
var Dj,
  W,
  X,
  J,
  Gr,
  jr,
  Ne,
  Fj,
  Mj,
  kj,
  ie,
  wj,
  Yt,
  Vn,
  mx,
  Tj,
  cx,
  Lj,
  Aj,
  Oe,
  _j,
  $j,
  Uj,
  Fe,
  ot,
  Rj,
  Bj,
  Hj,
  vj,
  zj,
  Ij,
  Pj,
  Nj,
  Oj,
  eZ,
  Vj,
  jj = s(() => {
    (Dj = "required"),
      (W = "type"),
      (X = "fn"),
      (J = "argv"),
      (Gr = "ref"),
      (jr = "booleanEquals"),
      (Ne = "stringEquals"),
      (Fj = "sigv4"),
      (Mj = "sts"),
      (kj = "us-east-1"),
      (ie = "endpoint"),
      (wj = "https://sts.{Region}.{PartitionResult#dnsSuffix}"),
      (Yt = "tree"),
      (Vn = "error"),
      (mx = "getAttr"),
      (Tj = { [Dj]: !1, [W]: "String" }),
      (cx = { [Dj]: !0, default: !1, [W]: "Boolean" }),
      (Lj = { [Gr]: "Endpoint" }),
      (Aj = { [X]: "isSet", [J]: [{ [Gr]: "Region" }] }),
      (Oe = { [Gr]: "Region" }),
      (_j = { [X]: "aws.partition", [J]: [Oe], assign: "PartitionResult" }),
      ($j = { [Gr]: "UseFIPS" }),
      (Uj = { [Gr]: "UseDualStack" }),
      (Fe = {
        url: "https://sts.amazonaws.com",
        properties: {
          authSchemes: [{ name: Fj, signingName: Mj, signingRegion: kj }],
        },
        headers: {},
      }),
      (ot = {}),
      (Rj = {
        conditions: [{ [X]: Ne, [J]: [Oe, "aws-global"] }],
        [ie]: Fe,
        [W]: ie,
      }),
      (Bj = { [X]: jr, [J]: [$j, !0] }),
      (Hj = { [X]: jr, [J]: [Uj, !0] }),
      (vj = { [X]: mx, [J]: [{ [Gr]: "PartitionResult" }, "supportsFIPS"] }),
      (zj = { [Gr]: "PartitionResult" }),
      (Ij = {
        [X]: jr,
        [J]: [!0, { [X]: mx, [J]: [zj, "supportsDualStack"] }],
      }),
      (Pj = [{ [X]: "isSet", [J]: [Lj] }]),
      (Nj = [Bj]),
      (Oj = [Hj]),
      (eZ = {
        version: "1.0",
        parameters: {
          Region: Tj,
          UseDualStack: cx,
          UseFIPS: cx,
          Endpoint: Tj,
          UseGlobalEndpoint: cx,
        },
        rules: [
          {
            conditions: [
              { [X]: jr, [J]: [{ [Gr]: "UseGlobalEndpoint" }, !0] },
              { [X]: "not", [J]: Pj },
              Aj,
              _j,
              { [X]: jr, [J]: [$j, !1] },
              { [X]: jr, [J]: [Uj, !1] },
            ],
            rules: [
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "ap-northeast-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "ap-south-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "ap-southeast-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "ap-southeast-2"] }],
                endpoint: Fe,
                [W]: ie,
              },
              Rj,
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "ca-central-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "eu-central-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "eu-north-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "eu-west-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "eu-west-2"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "eu-west-3"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "sa-east-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, kj] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "us-east-2"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "us-west-1"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                conditions: [{ [X]: Ne, [J]: [Oe, "us-west-2"] }],
                endpoint: Fe,
                [W]: ie,
              },
              {
                endpoint: {
                  url: wj,
                  properties: {
                    authSchemes: [
                      { name: Fj, signingName: Mj, signingRegion: "{Region}" },
                    ],
                  },
                  headers: ot,
                },
                [W]: ie,
              },
            ],
            [W]: Yt,
          },
          {
            conditions: Pj,
            rules: [
              {
                conditions: Nj,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                [W]: Vn,
              },
              {
                conditions: Oj,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                [W]: Vn,
              },
              { endpoint: { url: Lj, properties: ot, headers: ot }, [W]: ie },
            ],
            [W]: Yt,
          },
          {
            conditions: [Aj],
            rules: [
              {
                conditions: [_j],
                rules: [
                  {
                    conditions: [Bj, Hj],
                    rules: [
                      {
                        conditions: [{ [X]: jr, [J]: [!0, vj] }, Ij],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: ot,
                              headers: ot,
                            },
                            [W]: ie,
                          },
                        ],
                        [W]: Yt,
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        [W]: Vn,
                      },
                    ],
                    [W]: Yt,
                  },
                  {
                    conditions: Nj,
                    rules: [
                      {
                        conditions: [{ [X]: jr, [J]: [vj, !0] }],
                        rules: [
                          {
                            conditions: [
                              {
                                [X]: Ne,
                                [J]: [
                                  { [X]: mx, [J]: [zj, "name"] },
                                  "aws-us-gov",
                                ],
                              },
                            ],
                            endpoint: {
                              url: "https://sts.{Region}.amazonaws.com",
                              properties: ot,
                              headers: ot,
                            },
                            [W]: ie,
                          },
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: ot,
                              headers: ot,
                            },
                            [W]: ie,
                          },
                        ],
                        [W]: Yt,
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        [W]: Vn,
                      },
                    ],
                    [W]: Yt,
                  },
                  {
                    conditions: Oj,
                    rules: [
                      {
                        conditions: [Ij],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: ot,
                              headers: ot,
                            },
                            [W]: ie,
                          },
                        ],
                        [W]: Yt,
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        [W]: Vn,
                      },
                    ],
                    [W]: Yt,
                  },
                  Rj,
                  {
                    endpoint: { url: wj, properties: ot, headers: ot },
                    [W]: ie,
                  },
                ],
                [W]: Yt,
              },
            ],
            [W]: Yt,
          },
          { error: "Invalid Configuration: Missing Region", [W]: Vn },
        ],
      }),
      (Vj = eZ);
  });
var tZ,
  Gj,
  Wj = s(() => {
    gd();
    $e();
    jj();
    (tZ = new $t({
      size: 50,
      params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS",
        "UseGlobalEndpoint",
      ],
    })),
      (Gj = (e, t = {}) =>
        tZ.get(e, () => Ut(Vj, { endpointParams: e, logger: t.logger })));
    Le.aws = Bs;
  });
var qj,
  Kj = s(() => {
    Se();
    Q();
    ce();
    Hs();
    ty();
    Ws();
    ax();
    Wj();
    qj = (e) => ({
      apiVersion: "2011-06-15",
      base64Decoder: e?.base64Decoder ?? sf,
      base64Encoder: e?.base64Encoder ?? af,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? Gj,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Sj,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
          signer: new rt(),
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (t) =>
            t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new Lt(),
        },
      ],
      logger: e?.logger ?? new Fr(),
      serviceId: e?.serviceId ?? "STS",
      urlParser: e?.urlParser ?? jt,
      utf8Decoder: e?.utf8Decoder ?? Mr,
      utf8Encoder: e?.utf8Encoder ?? tf,
    });
  });
var Yj,
  Xj = s(() => {
    Dg();
    Se();
    kg();
    ln();
    Q();
    zg();
    Gs();
    co();
    Jg();
    Qg();
    Gt();
    Kj();
    ce();
    ly();
    ce();
    Yj = (e) => {
      qd(process.version);
      let t = gf(e),
        r = () => t().then(Wd),
        o = qj(e);
      yr(process.version);
      let n = { profile: e?.profile, logger: o.logger };
      return {
        ...o,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? se(xr, n),
        bodyLengthChecker: e?.bodyLengthChecker ?? nf,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          Zd({ serviceId: o.serviceId, clientVersion: Qd.version }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (i) =>
              i.getIdentityProvider("aws.auth#sigv4") ||
              (async (a) =>
                await e.credentialDefaultProvider(a?.__config || {})()),
            signer: new rt(),
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (i) =>
              i.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new Lt(),
          },
        ],
        maxAttempts: e?.maxAttempts ?? se(Hd, e),
        region: e?.region ?? se(un, { ...Td, ...n }),
        requestHandler: In.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          se({ ...Vd, default: async () => (await r()).retryMode || Sn }, e),
        sha256: e?.sha256 ?? Rn.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? of,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? se(bd, n),
        useFipsEndpoint: e?.useFipsEndpoint ?? se(wd, n),
        userAgentAppId: e?.userAgentAppId ?? se(ef, n),
      };
    };
  });
var Jj,
  Qj,
  Zj = s(() => {
    (Jj = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        o = e.credentials;
      return {
        setHttpAuthScheme(n) {
          let i = t.findIndex((a) => a.schemeId === n.schemeId);
          i === -1 ? t.push(n) : t.splice(i, 1, n);
        },
        httpAuthSchemes() {
          return t;
        },
        setHttpAuthSchemeProvider(n) {
          r = n;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(n) {
          o = n;
        },
        credentials() {
          return o;
        },
      };
    }),
      (Qj = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }));
  });
var eG,
  tG = s(() => {
    Js();
    We();
    ce();
    Zj();
    eG = (e, t) => {
      let r = Object.assign($r(e), Kd(e), dd(e), Jj(e));
      return (
        t.forEach((o) => o.configure(r)),
        Object.assign(e, Ur(r), Yd(r), fd(r), Qj(r))
      );
    };
  });
var Kt,
  yi = s(() => {
    Vh();
    jh();
    Wh();
    Cd();
    ln();
    Q();
    rg();
    En();
    Gs();
    ce();
    ax();
    Hf();
    Xj();
    tG();
    Kt = class extends Dr {
      config;
      constructor(...[t]) {
        let r = Yj(t || {});
        super(r), (this.initConfig = r);
        let o = bj(r),
          n = hd(o),
          i = zd(n),
          a = _d(i),
          c = a,
          m = Fd(c),
          f = Cj(m),
          u = eG(f, t?.extensions || []);
        (this.config = u),
          this.middlewareStack.use(Sd(this.config)),
          this.middlewareStack.use(Jd(this.config)),
          this.middlewareStack.use(Rd(this.config)),
          this.middlewareStack.use(pd(this.config)),
          this.middlewareStack.use(ud(this.config)),
          this.middlewareStack.use(ld(this.config)),
          this.middlewareStack.use(
            dr(this.config, {
              httpAuthSchemeParametersProvider: Ej,
              identityProviderConfigProvider: async (p) =>
                new kt({ "aws.auth#sigv4": p.credentials }),
            })
          ),
          this.middlewareStack.use(fr(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var Ye,
  zf = s(() => {
    ce();
    Ye = class e extends _n {
      constructor(t) {
        super(t), Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var dx,
  fx,
  xi,
  Ei,
  Si,
  Ci,
  bi,
  wi,
  px,
  ux,
  Ti,
  Ai = s(() => {
    ce();
    zf();
    (dx = (e) => ({ ...e, ...(e.SecretAccessKey && { SecretAccessKey: Wt }) })),
      (fx = (e) => ({
        ...e,
        ...(e.Credentials && { Credentials: dx(e.Credentials) }),
      })),
      (xi = class e extends Ye {
        name = "ExpiredTokenException";
        $fault = "client";
        constructor(t) {
          super({ name: "ExpiredTokenException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (Ei = class e extends Ye {
        name = "MalformedPolicyDocumentException";
        $fault = "client";
        constructor(t) {
          super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (Si = class e extends Ye {
        name = "PackedPolicyTooLargeException";
        $fault = "client";
        constructor(t) {
          super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (Ci = class e extends Ye {
        name = "RegionDisabledException";
        $fault = "client";
        constructor(t) {
          super({ name: "RegionDisabledException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (bi = class e extends Ye {
        name = "IDPRejectedClaimException";
        $fault = "client";
        constructor(t) {
          super({ name: "IDPRejectedClaimException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (wi = class e extends Ye {
        name = "InvalidIdentityTokenException";
        $fault = "client";
        constructor(t) {
          super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype);
        }
      }),
      (px = (e) => ({
        ...e,
        ...(e.WebIdentityToken && { WebIdentityToken: Wt }),
      })),
      (ux = (e) => ({
        ...e,
        ...(e.Credentials && { Credentials: dx(e.Credentials) }),
      })),
      (Ti = class e extends Ye {
        name = "IDPCommunicationErrorException";
        $fault = "client";
        constructor(t) {
          super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype);
        }
      });
  });
var rG,
  oG,
  nG,
  sG,
  iG,
  rZ,
  oZ,
  nZ,
  sZ,
  iZ,
  aZ,
  cZ,
  mZ,
  dZ,
  aG,
  fZ,
  pZ,
  uZ,
  lZ,
  hZ,
  gZ,
  cG,
  yZ,
  xZ,
  mG,
  EZ,
  SZ,
  CZ,
  bZ,
  wZ,
  TZ,
  AZ,
  cr,
  _Z,
  dG,
  fG,
  pG,
  uG,
  lx,
  RZ,
  hx,
  jn,
  vZ,
  gx,
  yx,
  Gn,
  xx,
  Wn,
  Ex,
  Sx,
  Cx,
  qn,
  Kn,
  bx,
  wx,
  Tx,
  Yn,
  Ax,
  Xn,
  Jn,
  _x,
  Rx,
  ar,
  vx,
  Ix,
  Px,
  Nx,
  Ox,
  lG,
  Dx,
  Fx,
  Mx,
  le,
  hG,
  IZ,
  kx = s(() => {
    Se();
    We();
    ce();
    Ai();
    zf();
    (rG = async (e, t) => {
      let r = fG,
        o;
      return (
        (o = hG({ ...mZ(e, t), [uG]: RZ, [lG]: pG })), dG(t, r, "/", void 0, o)
      );
    }),
      (oG = async (e, t) => {
        let r = fG,
          o;
        return (
          (o = hG({ ...dZ(e, t), [uG]: vZ, [lG]: pG })),
          dG(t, r, "/", void 0, o)
        );
      }),
      (nG = async (e, t) => {
        if (e.statusCode >= 300) return iG(e, t);
        let r = await om(e.body, t),
          o = {};
        return (o = yZ(r.AssumeRoleResult, t)), { $metadata: cr(e), ...o };
      }),
      (sG = async (e, t) => {
        if (e.statusCode >= 300) return iG(e, t);
        let r = await om(e.body, t),
          o = {};
        return (
          (o = xZ(r.AssumeRoleWithWebIdentityResult, t)),
          { $metadata: cr(e), ...o }
        );
      }),
      (iG = async (e, t) => {
        let r = { ...e, body: await jO(e.body, t) },
          o = IZ(e, r.body);
        switch (o) {
          case "ExpiredTokenException":
          case "com.amazonaws.sts#ExpiredTokenException":
            throw await rZ(r, t);
          case "MalformedPolicyDocument":
          case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await iZ(r, t);
          case "PackedPolicyTooLarge":
          case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await aZ(r, t);
          case "RegionDisabledException":
          case "com.amazonaws.sts#RegionDisabledException":
            throw await cZ(r, t);
          case "IDPCommunicationError":
          case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await oZ(r, t);
          case "IDPRejectedClaim":
          case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await nZ(r, t);
          case "InvalidIdentityToken":
          case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await sZ(r, t);
          default:
            let n = r.body;
            return _Z({ output: e, parsedBody: n.Error, errorCode: o });
        }
      }),
      (rZ = async (e, t) => {
        let r = e.body,
          o = EZ(r.Error, t),
          n = new xi({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (oZ = async (e, t) => {
        let r = e.body,
          o = SZ(r.Error, t),
          n = new Ti({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (nZ = async (e, t) => {
        let r = e.body,
          o = CZ(r.Error, t),
          n = new bi({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (sZ = async (e, t) => {
        let r = e.body,
          o = bZ(r.Error, t),
          n = new wi({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (iZ = async (e, t) => {
        let r = e.body,
          o = wZ(r.Error, t),
          n = new Ei({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (aZ = async (e, t) => {
        let r = e.body,
          o = TZ(r.Error, t),
          n = new Si({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (cZ = async (e, t) => {
        let r = e.body,
          o = AZ(r.Error, t),
          n = new Ci({ $metadata: cr(e), ...o });
        return de(n, r);
      }),
      (mZ = (e, t) => {
        let r = {};
        if (
          (e[Xn] != null && (r[Xn] = e[Xn]),
          e[Jn] != null && (r[Jn] = e[Jn]),
          e[Kn] != null)
        ) {
          let o = aG(e[Kn], t);
          e[Kn]?.length === 0 && (r.PolicyArns = []),
            Object.entries(o).forEach(([n, i]) => {
              let a = `PolicyArns.${n}`;
              r[a] = i;
            });
        }
        if (
          (e[qn] != null && (r[qn] = e[qn]),
          e[Wn] != null && (r[Wn] = e[Wn]),
          e[Px] != null)
        ) {
          let o = gZ(e[Px], t);
          e[Px]?.length === 0 && (r.Tags = []),
            Object.entries(o).forEach(([n, i]) => {
              let a = `Tags.${n}`;
              r[a] = i;
            });
        }
        if (e[Ox] != null) {
          let o = hZ(e[Ox], t);
          e[Ox]?.length === 0 && (r.TransitiveTagKeys = []),
            Object.entries(o).forEach(([n, i]) => {
              let a = `TransitiveTagKeys.${n}`;
              r[a] = i;
            });
        }
        if (
          (e[Sx] != null && (r[Sx] = e[Sx]),
          e[vx] != null && (r[vx] = e[vx]),
          e[Nx] != null && (r[Nx] = e[Nx]),
          e[ar] != null && (r[ar] = e[ar]),
          e[wx] != null)
        ) {
          let o = uZ(e[wx], t);
          e[wx]?.length === 0 && (r.ProvidedContexts = []),
            Object.entries(o).forEach(([n, i]) => {
              let a = `ProvidedContexts.${n}`;
              r[a] = i;
            });
        }
        return r;
      }),
      (dZ = (e, t) => {
        let r = {};
        if (
          (e[Xn] != null && (r[Xn] = e[Xn]),
          e[Jn] != null && (r[Jn] = e[Jn]),
          e[Fx] != null && (r[Fx] = e[Fx]),
          e[Tx] != null && (r[Tx] = e[Tx]),
          e[Kn] != null)
        ) {
          let o = aG(e[Kn], t);
          e[Kn]?.length === 0 && (r.PolicyArns = []),
            Object.entries(o).forEach(([n, i]) => {
              let a = `PolicyArns.${n}`;
              r[a] = i;
            });
        }
        return (
          e[qn] != null && (r[qn] = e[qn]), e[Wn] != null && (r[Wn] = e[Wn]), r
        );
      }),
      (aG = (e, t) => {
        let r = {},
          o = 1;
        for (let n of e) {
          if (n === null) continue;
          let i = fZ(n, t);
          Object.entries(i).forEach(([a, c]) => {
            r[`member.${o}.${a}`] = c;
          }),
            o++;
        }
        return r;
      }),
      (fZ = (e, t) => {
        let r = {};
        return e[Mx] != null && (r[Mx] = e[Mx]), r;
      }),
      (pZ = (e, t) => {
        let r = {};
        return (
          e[bx] != null && (r[bx] = e[bx]), e[xx] != null && (r[xx] = e[xx]), r
        );
      }),
      (uZ = (e, t) => {
        let r = {},
          o = 1;
        for (let n of e) {
          if (n === null) continue;
          let i = pZ(n, t);
          Object.entries(i).forEach(([a, c]) => {
            r[`member.${o}.${a}`] = c;
          }),
            o++;
        }
        return r;
      }),
      (lZ = (e, t) => {
        let r = {};
        return (
          e[Cx] != null && (r[Cx] = e[Cx]), e[Dx] != null && (r[Dx] = e[Dx]), r
        );
      }),
      (hZ = (e, t) => {
        let r = {},
          o = 1;
        for (let n of e) n !== null && ((r[`member.${o}`] = n), o++);
        return r;
      }),
      (gZ = (e, t) => {
        let r = {},
          o = 1;
        for (let n of e) {
          if (n === null) continue;
          let i = lZ(n, t);
          Object.entries(i).forEach(([a, c]) => {
            r[`member.${o}.${a}`] = c;
          }),
            o++;
        }
        return r;
      }),
      (cG = (e, t) => {
        let r = {};
        return (
          e[hx] != null && (r[hx] = d(e[hx])),
          e[gx] != null && (r[gx] = d(e[gx])),
          r
        );
      }),
      (yZ = (e, t) => {
        let r = {};
        return (
          e[Gn] != null && (r[Gn] = mG(e[Gn], t)),
          e[jn] != null && (r[jn] = cG(e[jn], t)),
          e[Yn] != null && (r[Yn] = ou(e[Yn])),
          e[ar] != null && (r[ar] = d(e[ar])),
          r
        );
      }),
      (xZ = (e, t) => {
        let r = {};
        return (
          e[Gn] != null && (r[Gn] = mG(e[Gn], t)),
          e[Rx] != null && (r[Rx] = d(e[Rx])),
          e[jn] != null && (r[jn] = cG(e[jn], t)),
          e[Yn] != null && (r[Yn] = ou(e[Yn])),
          e[Ax] != null && (r[Ax] = d(e[Ax])),
          e[yx] != null && (r[yx] = d(e[yx])),
          e[ar] != null && (r[ar] = d(e[ar])),
          r
        );
      }),
      (mG = (e, t) => {
        let r = {};
        return (
          e[lx] != null && (r[lx] = d(e[lx])),
          e[_x] != null && (r[_x] = d(e[_x])),
          e[Ix] != null && (r[Ix] = d(e[Ix])),
          e[Ex] != null && (r[Ex] = P(Pc(e[Ex]))),
          r
        );
      }),
      (EZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (SZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (CZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (bZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (wZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (TZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (AZ = (e, t) => {
        let r = {};
        return e[le] != null && (r[le] = d(e[le])), r;
      }),
      (cr = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      })),
      (_Z = Gd(Ye)),
      (dG = async (e, t, r, o, n) => {
        let {
            hostname: i,
            protocol: a = "https",
            port: c,
            path: m,
          } = await e.endpoint(),
          f = {
            protocol: a,
            hostname: i,
            port: c,
            method: "POST",
            path: m.endsWith("/") ? m.slice(0, -1) + r : m + r,
            headers: t,
          };
        return (
          o !== void 0 && (f.hostname = o),
          n !== void 0 && (f.body = n),
          new De(f)
        );
      }),
      (fG = { "content-type": "application/x-www-form-urlencoded" }),
      (pG = "2011-06-15"),
      (uG = "Action"),
      (lx = "AccessKeyId"),
      (RZ = "AssumeRole"),
      (hx = "AssumedRoleId"),
      (jn = "AssumedRoleUser"),
      (vZ = "AssumeRoleWithWebIdentity"),
      (gx = "Arn"),
      (yx = "Audience"),
      (Gn = "Credentials"),
      (xx = "ContextAssertion"),
      (Wn = "DurationSeconds"),
      (Ex = "Expiration"),
      (Sx = "ExternalId"),
      (Cx = "Key"),
      (qn = "Policy"),
      (Kn = "PolicyArns"),
      (bx = "ProviderArn"),
      (wx = "ProvidedContexts"),
      (Tx = "ProviderId"),
      (Yn = "PackedPolicySize"),
      (Ax = "Provider"),
      (Xn = "RoleArn"),
      (Jn = "RoleSessionName"),
      (_x = "SecretAccessKey"),
      (Rx = "SubjectFromWebIdentityToken"),
      (ar = "SourceIdentity"),
      (vx = "SerialNumber"),
      (Ix = "SessionToken"),
      (Px = "Tags"),
      (Nx = "TokenCode"),
      (Ox = "TransitiveTagKeys"),
      (lG = "Version"),
      (Dx = "Value"),
      (Fx = "WebIdentityToken"),
      (Mx = "arn"),
      (le = "message"),
      (hG = (e) =>
        Object.entries(e)
          .map(([t, r]) => Ct(t) + "=" + Ct(r))
          .join("&")),
      (IZ = (e, t) => {
        if (t.Error?.Code !== void 0) return t.Error.Code;
        if (e.statusCode == 404) return "NotFound";
      });
  });
var ho,
  Vf = s(() => {
    En();
    zs();
    ce();
    Hf();
    Ai();
    kx();
    ho = class extends (
      Rt.classBuilder()
        .ep(Bf)
        .m(function (t, r, o, n) {
          return [
            yn(o, this.serialize, this.deserialize),
            xn(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
        .n("STSClient", "AssumeRoleCommand")
        .f(void 0, fx)
        .ser(rG)
        .de(nG)
        .build()
    ) {};
  });
var go,
  jf = s(() => {
    En();
    zs();
    ce();
    Hf();
    Ai();
    kx();
    go = class extends (
      Rt.classBuilder()
        .ep(Bf)
        .m(function (t, r, o, n) {
          return [
            yn(o, this.serialize, this.deserialize),
            xn(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
        .n("STSClient", "AssumeRoleWithWebIdentityCommand")
        .f(px, ux)
        .ser(oG)
        .de(sG)
        .build()
    ) {};
  });
var PZ,
  Gf,
  gG = s(() => {
    ce();
    Vf();
    jf();
    yi();
    (PZ = { AssumeRoleCommand: ho, AssumeRoleWithWebIdentityCommand: go }),
      (Gf = class extends Kt {});
    jd(PZ, Gf);
  });
var yG = s(() => {
  Vf();
  jf();
});
var xG = s(() => {
  Ai();
});
var EG,
  SG,
  CG,
  bG,
  wG,
  TG,
  AG = s(() => {
    Ue();
    Vf();
    jf();
    (EG = "us-east-1"),
      (SG = (e) => {
        if (typeof e?.Arn == "string") {
          let t = e.Arn.split(":");
          if (t.length > 4 && t[4] !== "") return t[4];
        }
      }),
      (CG = async (e, t, r) => {
        let o = typeof e == "function" ? await e() : e,
          n = typeof t == "function" ? await t() : t;
        return (
          r?.debug?.(
            "@aws-sdk/client-sts::resolveRegion",
            "accepting first of:",
            `${o} (provider)`,
            `${n} (parent client)`,
            `${EG} (STS default)`
          ),
          o ?? n ?? EG
        );
      }),
      (bG = (e, t) => {
        let r, o;
        return async (n, i) => {
          if (((o = n), !r)) {
            let {
                logger: u = e?.parentClientConfig?.logger,
                region: p,
                requestHandler: h = e?.parentClientConfig?.requestHandler,
                credentialProviderLogger: g,
              } = e,
              x = await CG(p, e?.parentClientConfig?.region, g),
              _ = !TG(h);
            r = new t({
              profile: e?.parentClientConfig?.profile,
              credentialDefaultProvider: () => async () => o,
              region: x,
              requestHandler: _ ? h : void 0,
              logger: u,
            });
          }
          let { Credentials: a, AssumedRoleUser: c } = await r.send(new ho(i));
          if (!a || !a.AccessKeyId || !a.SecretAccessKey)
            throw new Error(
              `Invalid response from STS.assumeRole call with role ${i.RoleArn}`
            );
          let m = SG(c),
            f = {
              accessKeyId: a.AccessKeyId,
              secretAccessKey: a.SecretAccessKey,
              sessionToken: a.SessionToken,
              expiration: a.Expiration,
              ...(a.CredentialScope && { credentialScope: a.CredentialScope }),
              ...(m && { accountId: m }),
            };
          return Z(f, "CREDENTIALS_STS_ASSUME_ROLE", "i"), f;
        };
      }),
      (wG = (e, t) => {
        let r;
        return async (o) => {
          if (!r) {
            let {
                logger: m = e?.parentClientConfig?.logger,
                region: f,
                requestHandler: u = e?.parentClientConfig?.requestHandler,
                credentialProviderLogger: p,
              } = e,
              h = await CG(f, e?.parentClientConfig?.region, p),
              g = !TG(u);
            r = new t({
              profile: e?.parentClientConfig?.profile,
              region: h,
              requestHandler: g ? u : void 0,
              logger: m,
            });
          }
          let { Credentials: n, AssumedRoleUser: i } = await r.send(new go(o));
          if (!n || !n.AccessKeyId || !n.SecretAccessKey)
            throw new Error(
              `Invalid response from STS.assumeRoleWithWebIdentity call with role ${o.RoleArn}`
            );
          let a = SG(i),
            c = {
              accessKeyId: n.AccessKeyId,
              secretAccessKey: n.SecretAccessKey,
              sessionToken: n.SessionToken,
              expiration: n.Expiration,
              ...(n.CredentialScope && { credentialScope: n.CredentialScope }),
              ...(a && { accountId: a }),
            };
          return (
            a && Z(c, "RESOLVED_ACCOUNT_ID", "T"),
            Z(c, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"),
            c
          );
        };
      }),
      (TG = (e) => e?.metadata?.handlerProtocol === "h2");
  });
var _G,
  RG,
  vG,
  NZ,
  IG = s(() => {
    AG();
    yi();
    (_G = (e, t) =>
      t
        ? class extends e {
            constructor(o) {
              super(o);
              for (let n of t) this.middlewareStack.use(n);
            }
          }
        : e),
      (RG = (e = {}, t) => bG(e, _G(Kt, t))),
      (vG = (e = {}, t) => wG(e, _G(Kt, t))),
      (NZ = (e) => (t) =>
        e({ roleAssumer: RG(t), roleAssumerWithWebIdentity: vG(t), ...t }));
  });
var Lx = {};
Me(Lx, {
  $Command: () => Rt,
  AssumeRoleCommand: () => ho,
  AssumeRoleResponseFilterSensitiveLog: () => fx,
  AssumeRoleWithWebIdentityCommand: () => go,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => px,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => ux,
  CredentialsFilterSensitiveLog: () => dx,
  ExpiredTokenException: () => xi,
  IDPCommunicationErrorException: () => Ti,
  IDPRejectedClaimException: () => bi,
  InvalidIdentityTokenException: () => wi,
  MalformedPolicyDocumentException: () => Ei,
  PackedPolicyTooLargeException: () => Si,
  RegionDisabledException: () => Ci,
  STS: () => Gf,
  STSClient: () => Kt,
  STSServiceException: () => Ye,
  __Client: () => Dr,
  decorateDefaultCredentialProvider: () => NZ,
  getDefaultRoleAssumer: () => RG,
  getDefaultRoleAssumerWithWebIdentity: () => vG,
});
var $x = s(() => {
  yi();
  gG();
  yG();
  xG();
  IG();
  zf();
});
var NG,
  OZ,
  DZ,
  OG,
  PG,
  DG = s(() => {
    Ue();
    K();
    Tt();
    xj();
    Ux();
    (NG = (e, { profile: t = "default", logger: r } = {}) =>
      !!e &&
      typeof e == "object" &&
      typeof e.role_arn == "string" &&
      ["undefined", "string"].indexOf(typeof e.role_session_name) > -1 &&
      ["undefined", "string"].indexOf(typeof e.external_id) > -1 &&
      ["undefined", "string"].indexOf(typeof e.mfa_serial) > -1 &&
      (OZ(e, { profile: t, logger: r }) || DZ(e, { profile: t, logger: r }))),
      (OZ = (e, { profile: t, logger: r }) => {
        let o =
          typeof e.source_profile == "string" &&
          typeof e.credential_source > "u";
        return (
          o &&
            r?.debug?.(
              `    ${t} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`
            ),
          o
        );
      }),
      (DZ = (e, { profile: t, logger: r }) => {
        let o =
          typeof e.credential_source == "string" &&
          typeof e.source_profile > "u";
        return (
          o &&
            r?.debug?.(
              `    ${t} isCredentialSourceProfile credential_source=${e.credential_source}`
            ),
          o
        );
      }),
      (OG = async (e, t, r, o = {}) => {
        r.logger?.debug(
          "@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)"
        );
        let n = t[e],
          { source_profile: i, region: a } = n;
        if (!r.roleAssumer) {
          let { getDefaultRoleAssumer: m } = await Promise.resolve().then(
            () => ($x(), Lx)
          );
          r.roleAssumer = m(
            {
              ...r.clientConfig,
              credentialProviderLogger: r.logger,
              parentClientConfig: {
                ...r?.parentClientConfig,
                region: a ?? r?.parentClientConfig?.region,
              },
            },
            r.clientPlugins
          );
        }
        if (i && i in o)
          throw new D(
            `Detected a cycle attempting to resolve credentials for profile ${dt(r)}. Profiles visited: ` +
              Object.keys(o).join(", "),
            { logger: r.logger }
          );
        r.logger?.debug(
          `@aws-sdk/credential-provider-ini - finding credential resolver using ${i ? `source_profile=[${i}]` : `profile=[${e}]`}`
        );
        let c = i
          ? Wf(i, t, r, { ...o, [i]: !0 }, PG(t[i] ?? {}))
          : (await yj(n.credential_source, e, r.logger)(r))();
        if (PG(n))
          return c.then((m) => Z(m, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
        {
          let m = {
              RoleArn: n.role_arn,
              RoleSessionName:
                n.role_session_name || `aws-sdk-js-${Date.now()}`,
              ExternalId: n.external_id,
              DurationSeconds: parseInt(n.duration_seconds || "3600", 10),
            },
            { mfa_serial: f } = n;
          if (f) {
            if (!r.mfaCodeProvider)
              throw new D(
                `Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`,
                { logger: r.logger, tryNextLink: !1 }
              );
            (m.SerialNumber = f), (m.TokenCode = await r.mfaCodeProvider(f));
          }
          let u = await c;
          return r
            .roleAssumer(u, m)
            .then((p) => Z(p, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
        }
      }),
      (PG = (e) => !e.role_arn && !!e.credential_source);
  });
var FG,
  MG = s(() => {
    Ue();
    FG = (e, t, r) => {
      if (t.Version !== 1)
        throw Error(
          `Profile ${e} credential_process did not return Version 1.`
        );
      if (t.AccessKeyId === void 0 || t.SecretAccessKey === void 0)
        throw Error(
          `Profile ${e} credential_process returned invalid credentials.`
        );
      if (t.Expiration) {
        let i = new Date();
        if (new Date(t.Expiration) < i)
          throw Error(
            `Profile ${e} credential_process returned expired credentials.`
          );
      }
      let o = t.AccountId;
      !o && r?.[e]?.aws_account_id && (o = r[e].aws_account_id);
      let n = {
        accessKeyId: t.AccessKeyId,
        secretAccessKey: t.SecretAccessKey,
        ...(t.SessionToken && { sessionToken: t.SessionToken }),
        ...(t.Expiration && { expiration: new Date(t.Expiration) }),
        ...(t.CredentialScope && { credentialScope: t.CredentialScope }),
        ...(o && { accountId: o }),
      };
      return Z(n, "CREDENTIALS_PROCESS", "w"), n;
    };
  });
import { exec as FZ } from "child_process";
import { promisify as MZ } from "util";
var kG,
  LG = s(() => {
    K();
    MG();
    kG = async (e, t, r) => {
      let o = t[e];
      if (t[e]) {
        let n = o.credential_process;
        if (n !== void 0) {
          let i = MZ(FZ);
          try {
            let { stdout: a } = await i(n),
              c;
            try {
              c = JSON.parse(a.trim());
            } catch {
              throw Error(
                `Profile ${e} credential_process returned invalid JSON.`
              );
            }
            return FG(e, c, t);
          } catch (a) {
            throw new D(a.message, { logger: r });
          }
        } else
          throw new D(`Profile ${e} did not contain credential_process.`, {
            logger: r,
          });
      } else
        throw new D(
          `Profile ${e} could not be found in shared credentials file.`,
          { logger: r }
        );
    };
  });
var kZ,
  $G = s(() => {
    Tt();
    LG();
    kZ =
      (e = {}) =>
      async ({ callerClientConfig: t } = {}) => {
        e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        let r = await wr(e);
        return kG(dt({ profile: e.profile ?? t?.profile }), r, e.logger);
      };
  });
var Bx = {};
Me(Bx, { fromProcess: () => kZ });
var Hx = s(() => {
  $G();
});
var UG,
  BG,
  HG = s(() => {
    Ue();
    (UG = (e) =>
      !!e && typeof e == "object" && typeof e.credential_process == "string"),
      (BG = async (e, t) =>
        Promise.resolve()
          .then(() => (Hx(), Bx))
          .then(({ fromProcess: r }) =>
            r({ ...e, profile: t })().then((o) =>
              Z(o, "CREDENTIALS_PROFILE_PROCESS", "v")
            )
          ));
  });
var zG,
  VG,
  jG = s(() => {
    Ue();
    (zG = async (e, t, r = {}) => {
      let { fromSSO: o } = await Promise.resolve().then(() => (sx(), nx));
      return o({
        profile: e,
        logger: r.logger,
        parentClientConfig: r.parentClientConfig,
        clientConfig: r.clientConfig,
      })().then((n) =>
        t.sso_session
          ? Z(n, "CREDENTIALS_PROFILE_SSO", "r")
          : Z(n, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
      );
    }),
      (VG = (e) =>
        e &&
        (typeof e.sso_start_url == "string" ||
          typeof e.sso_account_id == "string" ||
          typeof e.sso_session == "string" ||
          typeof e.sso_region == "string" ||
          typeof e.sso_role_name == "string"));
  });
var zx,
  Vx,
  GG = s(() => {
    Ue();
    (zx = (e) =>
      !!e &&
      typeof e == "object" &&
      typeof e.aws_access_key_id == "string" &&
      typeof e.aws_secret_access_key == "string" &&
      ["undefined", "string"].indexOf(typeof e.aws_session_token) > -1 &&
      ["undefined", "string"].indexOf(typeof e.aws_account_id) > -1),
      (Vx = async (e, t) => {
        t?.logger?.debug(
          "@aws-sdk/credential-provider-ini - resolveStaticCredentials"
        );
        let r = {
          accessKeyId: e.aws_access_key_id,
          secretAccessKey: e.aws_secret_access_key,
          sessionToken: e.aws_session_token,
          ...(e.aws_credential_scope && {
            credentialScope: e.aws_credential_scope,
          }),
          ...(e.aws_account_id && { accountId: e.aws_account_id }),
        };
        return Z(r, "CREDENTIALS_PROFILE", "n");
      });
  });
var jx,
  Gx = s(() => {
    jx = (e) => async (t) => {
      e.logger?.debug(
        "@aws-sdk/credential-provider-web-identity - fromWebToken"
      );
      let {
          roleArn: r,
          roleSessionName: o,
          webIdentityToken: n,
          providerId: i,
          policyArns: a,
          policy: c,
          durationSeconds: m,
        } = e,
        { roleAssumerWithWebIdentity: f } = e;
      if (!f) {
        let { getDefaultRoleAssumerWithWebIdentity: u } =
          await Promise.resolve().then(() => ($x(), Lx));
        f = u(
          {
            ...e.clientConfig,
            credentialProviderLogger: e.logger,
            parentClientConfig: {
              ...t?.callerClientConfig,
              ...e.parentClientConfig,
            },
          },
          e.clientPlugins
        );
      }
      return f({
        RoleArn: r,
        RoleSessionName: o ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: n,
        ProviderId: i,
        PolicyArns: a,
        Policy: c,
        DurationSeconds: m,
      });
    };
  });
import { readFileSync as LZ } from "fs";
var WG,
  $Z,
  UZ,
  BZ,
  qG = s(() => {
    Ue();
    K();
    Gx();
    (WG = "AWS_WEB_IDENTITY_TOKEN_FILE"),
      ($Z = "AWS_ROLE_ARN"),
      (UZ = "AWS_ROLE_SESSION_NAME"),
      (BZ =
        (e = {}) =>
        async () => {
          e.logger?.debug(
            "@aws-sdk/credential-provider-web-identity - fromTokenFile"
          );
          let t = e?.webIdentityTokenFile ?? process.env[WG],
            r = e?.roleArn ?? process.env[$Z],
            o = e?.roleSessionName ?? process.env[UZ];
          if (!t || !r)
            throw new D("Web identity configuration not specified", {
              logger: e.logger,
            });
          let n = await jx({
            ...e,
            webIdentityToken: LZ(t, { encoding: "ascii" }),
            roleArn: r,
            roleSessionName: o,
          })();
          return (
            t === process.env[WG] &&
              Z(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"),
            n
          );
        });
  });
var Wx = {};
Me(Wx, { fromTokenFile: () => BZ, fromWebToken: () => jx });
var qx = s(() => {
  qG();
  Gx();
});
var KG,
  YG,
  XG = s(() => {
    Ue();
    (KG = (e) =>
      !!e &&
      typeof e == "object" &&
      typeof e.web_identity_token_file == "string" &&
      typeof e.role_arn == "string" &&
      ["undefined", "string"].indexOf(typeof e.role_session_name) > -1),
      (YG = async (e, t) =>
        Promise.resolve()
          .then(() => (qx(), Wx))
          .then(({ fromTokenFile: r }) =>
            r({
              webIdentityTokenFile: e.web_identity_token_file,
              roleArn: e.role_arn,
              roleSessionName: e.role_session_name,
              roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity,
              logger: t.logger,
              parentClientConfig: t.parentClientConfig,
            })().then((o) => Z(o, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))
          ));
  });
var Wf,
  Ux = s(() => {
    K();
    DG();
    HG();
    jG();
    GG();
    XG();
    Wf = async (e, t, r, o = {}, n = !1) => {
      let i = t[e];
      if (Object.keys(o).length > 0 && zx(i)) return Vx(i, r);
      if (n || NG(i, { profile: e, logger: r.logger })) return OG(e, t, r, o);
      if (zx(i)) return Vx(i, r);
      if (KG(i)) return YG(i, r);
      if (UG(i)) return BG(r, e);
      if (VG(i)) return await zG(e, i, r);
      throw new D(
        `Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`,
        { logger: r.logger }
      );
    };
  });
var HZ,
  JG = s(() => {
    Tt();
    Ux();
    HZ =
      (e = {}) =>
      async ({ callerClientConfig: t } = {}) => {
        let r = { ...e, parentClientConfig: { ...t, ...e.parentClientConfig } };
        r.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
        let o = await wr(r);
        return Wf(dt({ profile: e.profile ?? t?.profile }), o, r);
      };
  });
var QG = {};
Me(QG, { fromIni: () => HZ });
var ZG = s(() => {
  JG();
});
var e4,
  t4,
  zZ,
  VZ,
  r4 = s(() => {
    mh();
    K();
    Tt();
    Z$();
    (e4 = !1),
      (t4 = (e = {}) =>
        wt(
          bt(
            async () => {
              if (e.profile ?? process.env[Fl])
                throw (
                  (process.env[Vm] &&
                    process.env[jm] &&
                    (e4 ||
                      ((e.logger?.warn &&
                        e.logger?.constructor?.name !== "NoOpLogger"
                        ? e.logger.warn
                        : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                      (e4 = !0))),
                  new D("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: e.logger,
                    tryNextLink: !0,
                  }))
                );
              return (
                e.logger?.debug(
                  "@aws-sdk/credential-provider-node - defaultProvider::fromEnv"
                ),
                ch(e)()
              );
            },
            async () => {
              e.logger?.debug(
                "@aws-sdk/credential-provider-node - defaultProvider::fromSSO"
              );
              let {
                ssoStartUrl: t,
                ssoAccountId: r,
                ssoRegion: o,
                ssoRoleName: n,
                ssoSession: i,
              } = e;
              if (!t && !r && !o && !n && !i)
                throw new D(
                  "Skipping SSO provider in default chain (inputs do not include SSO fields).",
                  { logger: e.logger }
                );
              let { fromSSO: a } = await Promise.resolve().then(
                () => (sx(), nx)
              );
              return a(e)();
            },
            async () => {
              e.logger?.debug(
                "@aws-sdk/credential-provider-node - defaultProvider::fromIni"
              );
              let { fromIni: t } = await Promise.resolve().then(
                () => (ZG(), QG)
              );
              return t(e)();
            },
            async () => {
              e.logger?.debug(
                "@aws-sdk/credential-provider-node - defaultProvider::fromProcess"
              );
              let { fromProcess: t } = await Promise.resolve().then(
                () => (Hx(), Bx)
              );
              return t(e)();
            },
            async () => {
              e.logger?.debug(
                "@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile"
              );
              let { fromTokenFile: t } = await Promise.resolve().then(
                () => (qx(), Wx)
              );
              return t(e)();
            },
            async () => (
              e.logger?.debug(
                "@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"
              ),
              (await Q$(e))()
            ),
            async () => {
              throw new D("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: e.logger,
              });
            }
          ),
          VZ,
          zZ
        )),
      (zZ = (e) => e?.expiration !== void 0),
      (VZ = (e) =>
        e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 3e5);
  });
var o4 = s(() => {
  r4();
});
function n4(e, t, r, o) {
  function n(i) {
    return i instanceof r
      ? i
      : new r(function (a) {
          a(i);
        });
  }
  return new (r || (r = Promise))(function (i, a) {
    function c(u) {
      try {
        f(o.next(u));
      } catch (p) {
        a(p);
      }
    }
    function m(u) {
      try {
        f(o.throw(u));
      } catch (p) {
        a(p);
      }
    }
    function f(u) {
      u.done ? i(u.value) : n(u.value).then(c, m);
    }
    f((o = o.apply(e, t || [])).next());
  });
}
function s4(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    o,
    n,
    i,
    a = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype
    );
  return (
    (a.next = c(0)),
    (a.throw = c(1)),
    (a.return = c(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function c(f) {
    return function (u) {
      return m([f, u]);
    };
  }
  function m(f) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), f[0] && (r = 0)), r; )
      try {
        if (
          ((o = 1),
          n &&
            (i =
              f[0] & 2
                ? n.return
                : f[0]
                  ? n.throw || ((i = n.return) && i.call(n), 0)
                  : n.next) &&
            !(i = i.call(n, f[1])).done)
        )
          return i;
        switch (((n = 0), i && (f = [f[0] & 2, i.value]), f[0])) {
          case 0:
          case 1:
            i = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, (n = f[1]), (f = [0]);
            continue;
          case 7:
            (f = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((i = r.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (f[0] === 6 || f[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!i || (f[1] > i[0] && f[1] < i[3]))) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < i[1]) {
              (r.label = i[1]), (i = f);
              break;
            }
            if (i && r.label < i[2]) {
              (r.label = i[2]), r.ops.push(f);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = t.call(e, r);
      } catch (u) {
        (f = [6, u]), (n = 0);
      } finally {
        o = i = 0;
      }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function i4(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    o = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
var Kx = s(() => {});
var a4 = s(() => {});
import { Buffer as c4 } from "buffer";
var m4,
  Yx = s(() => {
    a4();
    m4 = (e, t) => {
      if (typeof e != "string")
        throw new TypeError(
          `The "input" argument must be of type string. Received type ${typeof e} (${e})`
        );
      return t ? c4.from(e, t) : c4.from(e);
    };
  });
var Xx,
  Jx = s(() => {
    Yx();
    Xx = (e) => {
      let t = m4(e, "utf8");
      return new Uint8Array(
        t.buffer,
        t.byteOffset,
        t.byteLength / Uint8Array.BYTES_PER_ELEMENT
      );
    };
  });
var d4 = s(() => {
  Jx();
});
var f4 = s(() => {
  Yx();
});
var p4 = s(() => {
  Jx();
  d4();
  f4();
});
function Qx(e) {
  return e instanceof Uint8Array
    ? e
    : typeof e == "string"
      ? jZ(e)
      : ArrayBuffer.isView(e)
        ? new Uint8Array(
            e.buffer,
            e.byteOffset,
            e.byteLength / Uint8Array.BYTES_PER_ELEMENT
          )
        : new Uint8Array(e);
}
var jZ,
  u4 = s(() => {
    p4();
    jZ =
      typeof Buffer < "u" && Buffer.from
        ? function (e) {
            return Buffer.from(e, "utf8");
          }
        : Xx;
  });
function Zx(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
var l4 = s(() => {});
function eE(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255,
  ]);
}
var h4 = s(() => {});
function tE(e) {
  if (!Uint32Array.from) {
    for (var t = new Uint32Array(e.length), r = 0; r < e.length; )
      (t[r] = e[r]), (r += 1);
    return t;
  }
  return Uint32Array.from(e);
}
var g4 = s(() => {});
var rE = s(() => {
  u4();
  l4();
  h4();
  g4();
});
var GZ,
  y4 = s(() => {
    Kx();
    rE();
    qf();
    GZ = (function () {
      function e() {
        this.crc32 = new yo();
      }
      return (
        (e.prototype.update = function (t) {
          Zx(t) || this.crc32.update(Qx(t));
        }),
        (e.prototype.digest = function () {
          return n4(this, void 0, void 0, function () {
            return s4(this, function (t) {
              return [2, eE(this.crc32.digest())];
            });
          });
        }),
        (e.prototype.reset = function () {
          this.crc32 = new yo();
        }),
        e
      );
    })();
  });
var yo,
  WZ,
  qZ,
  qf = s(() => {
    Kx();
    rE();
    y4();
    (yo = (function () {
      function e() {
        this.checksum = 4294967295;
      }
      return (
        (e.prototype.update = function (t) {
          var r, o;
          try {
            for (var n = i4(t), i = n.next(); !i.done; i = n.next()) {
              var a = i.value;
              this.checksum =
                (this.checksum >>> 8) ^ qZ[(this.checksum ^ a) & 255];
            }
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              i && !i.done && (o = n.return) && o.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
          return this;
        }),
        (e.prototype.digest = function () {
          return (this.checksum ^ 4294967295) >>> 0;
        }),
        e
      );
    })()),
      (WZ = [
        0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
        3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864,
        162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
        4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639,
        325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465,
        4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
        1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684,
        3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665,
        651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731,
        3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812,
        795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534,
        2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059,
        2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813,
        2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
        1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704,
        2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405,
        1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311,
        2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856,
        1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306,
        3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015,
        1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873,
        3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842,
        3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
        225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377,
        4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355,
        426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852,
        4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558,
        953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859,
        3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669,
        829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366,
        3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608,
        733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221,
        2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151,
        1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112,
        2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610,
        1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567,
        2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745,
        1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938,
        2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836,
        1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897,
        3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203,
        1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724,
        3020668471, 3272380065, 1510334235, 755167117,
      ]),
      (qZ = tE(WZ));
  });
function x4(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
var Qn,
  oE = s(() => {
    Dt();
    Qn = class e {
      constructor(t) {
        if (((this.bytes = t), t.byteLength !== 8))
          throw new Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(t) {
        if (t > 9223372036854776e3 || t < -9223372036854776e3)
          throw new Error(
            `${t} is too large (or, if negative, too small) to represent as an Int64`
          );
        let r = new Uint8Array(8);
        for (
          let o = 7, n = Math.abs(Math.round(t));
          o > -1 && n > 0;
          o--, n /= 256
        )
          r[o] = n;
        return t < 0 && x4(r), new e(r);
      }
      valueOf() {
        let t = this.bytes.slice(0),
          r = t[0] & 128;
        return r && x4(t), parseInt(ae(t), 16) * (r ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
  });
var Kf,
  E4,
  S4,
  KZ,
  YZ,
  XZ,
  JZ,
  QZ,
  ZZ,
  eee,
  tee,
  ree,
  nE = s(() => {
    Dt();
    oE();
    Kf = class {
      constructor(t, r) {
        (this.toUtf8 = t), (this.fromUtf8 = r);
      }
      format(t) {
        let r = [];
        for (let i of Object.keys(t)) {
          let a = this.fromUtf8(i);
          r.push(
            Uint8Array.from([a.byteLength]),
            a,
            this.formatHeaderValue(t[i])
          );
        }
        let o = new Uint8Array(r.reduce((i, a) => i + a.byteLength, 0)),
          n = 0;
        for (let i of r) o.set(i, n), (n += i.byteLength);
        return o;
      }
      formatHeaderValue(t) {
        switch (t.type) {
          case "boolean":
            return Uint8Array.from([t.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, t.value]);
          case "short":
            let r = new DataView(new ArrayBuffer(3));
            return (
              r.setUint8(0, 3),
              r.setInt16(1, t.value, !1),
              new Uint8Array(r.buffer)
            );
          case "integer":
            let o = new DataView(new ArrayBuffer(5));
            return (
              o.setUint8(0, 4),
              o.setInt32(1, t.value, !1),
              new Uint8Array(o.buffer)
            );
          case "long":
            let n = new Uint8Array(9);
            return (n[0] = 5), n.set(t.value.bytes, 1), n;
          case "binary":
            let i = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            i.setUint8(0, 6), i.setUint16(1, t.value.byteLength, !1);
            let a = new Uint8Array(i.buffer);
            return a.set(t.value, 3), a;
          case "string":
            let c = this.fromUtf8(t.value),
              m = new DataView(new ArrayBuffer(3 + c.byteLength));
            m.setUint8(0, 7), m.setUint16(1, c.byteLength, !1);
            let f = new Uint8Array(m.buffer);
            return f.set(c, 3), f;
          case "timestamp":
            let u = new Uint8Array(9);
            return (
              (u[0] = 8), u.set(Qn.fromNumber(t.value.valueOf()).bytes, 1), u
            );
          case "uuid":
            if (!ree.test(t.value))
              throw new Error(`Invalid UUID received: ${t.value}`);
            let p = new Uint8Array(17);
            return (p[0] = 9), p.set(Tc(t.value.replace(/\-/g, "")), 1), p;
        }
      }
      parse(t) {
        let r = {},
          o = 0;
        for (; o < t.byteLength; ) {
          let n = t.getUint8(o++),
            i = this.toUtf8(new Uint8Array(t.buffer, t.byteOffset + o, n));
          switch (((o += n), t.getUint8(o++))) {
            case 0:
              r[i] = { type: S4, value: !0 };
              break;
            case 1:
              r[i] = { type: S4, value: !1 };
              break;
            case 2:
              r[i] = { type: KZ, value: t.getInt8(o++) };
              break;
            case 3:
              (r[i] = { type: YZ, value: t.getInt16(o, !1) }), (o += 2);
              break;
            case 4:
              (r[i] = { type: XZ, value: t.getInt32(o, !1) }), (o += 4);
              break;
            case 5:
              (r[i] = {
                type: JZ,
                value: new Qn(new Uint8Array(t.buffer, t.byteOffset + o, 8)),
              }),
                (o += 8);
              break;
            case 6:
              let a = t.getUint16(o, !1);
              (o += 2),
                (r[i] = {
                  type: QZ,
                  value: new Uint8Array(t.buffer, t.byteOffset + o, a),
                }),
                (o += a);
              break;
            case 7:
              let c = t.getUint16(o, !1);
              (o += 2),
                (r[i] = {
                  type: ZZ,
                  value: this.toUtf8(
                    new Uint8Array(t.buffer, t.byteOffset + o, c)
                  ),
                }),
                (o += c);
              break;
            case 8:
              (r[i] = {
                type: eee,
                value: new Date(
                  new Qn(
                    new Uint8Array(t.buffer, t.byteOffset + o, 8)
                  ).valueOf()
                ),
              }),
                (o += 8);
              break;
            case 9:
              let m = new Uint8Array(t.buffer, t.byteOffset + o, 16);
              (o += 16),
                (r[i] = {
                  type: tee,
                  value: `${ae(m.subarray(0, 4))}-${ae(m.subarray(4, 6))}-${ae(m.subarray(6, 8))}-${ae(m.subarray(8, 10))}-${ae(m.subarray(10))}`,
                });
              break;
            default:
              throw new Error("Unrecognized header type tag");
          }
        }
        return r;
      }
    };
    (function (e) {
      (e[(e.boolTrue = 0)] = "boolTrue"),
        (e[(e.boolFalse = 1)] = "boolFalse"),
        (e[(e.byte = 2)] = "byte"),
        (e[(e.short = 3)] = "short"),
        (e[(e.integer = 4)] = "integer"),
        (e[(e.long = 5)] = "long"),
        (e[(e.byteArray = 6)] = "byteArray"),
        (e[(e.string = 7)] = "string"),
        (e[(e.timestamp = 8)] = "timestamp"),
        (e[(e.uuid = 9)] = "uuid");
    })(E4 || (E4 = {}));
    (S4 = "boolean"),
      (KZ = "byte"),
      (YZ = "short"),
      (XZ = "integer"),
      (JZ = "long"),
      (QZ = "binary"),
      (ZZ = "string"),
      (eee = "timestamp"),
      (tee = "uuid"),
      (ree = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/);
  });
function b4({ byteLength: e, byteOffset: t, buffer: r }) {
  if (e < oee)
    throw new Error(
      "Provided message too short to accommodate event stream message overhead"
    );
  let o = new DataView(r, t, e),
    n = o.getUint32(0, !1);
  if (e !== n)
    throw new Error(
      "Reported message length does not match received message length"
    );
  let i = o.getUint32(C4, !1),
    a = o.getUint32(Wr, !1),
    c = o.getUint32(e - xo, !1),
    m = new yo().update(new Uint8Array(r, t, Wr));
  if (a !== m.digest())
    throw new Error(
      `The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${m.digest()})`
    );
  if ((m.update(new Uint8Array(r, t + Wr, e - (Wr + xo))), c !== m.digest()))
    throw new Error(
      `The message checksum (${m.digest()}) did not match the expected value of ${c}`
    );
  return {
    headers: new DataView(r, t + Wr + xo, i),
    body: new Uint8Array(r, t + Wr + xo + i, n - i - (Wr + xo + xo)),
  };
}
var C4,
  Wr,
  xo,
  oee,
  w4 = s(() => {
    qf();
    (C4 = 4), (Wr = C4 * 2), (xo = 4), (oee = Wr + xo * 2);
  });
var Yf,
  T4 = s(() => {
    qf();
    nE();
    w4();
    Yf = class {
      constructor(t, r) {
        (this.headerMarshaller = new Kf(t, r)),
          (this.messageBuffer = []),
          (this.isEndOfStream = !1);
      }
      feed(t) {
        this.messageBuffer.push(this.decode(t));
      }
      endOfStream() {
        this.isEndOfStream = !0;
      }
      getMessage() {
        let t = this.messageBuffer.pop(),
          r = this.isEndOfStream;
        return {
          getMessage() {
            return t;
          },
          isEndOfStream() {
            return r;
          },
        };
      }
      getAvailableMessages() {
        let t = this.messageBuffer;
        this.messageBuffer = [];
        let r = this.isEndOfStream;
        return {
          getMessages() {
            return t;
          },
          isEndOfStream() {
            return r;
          },
        };
      }
      encode({ headers: t, body: r }) {
        let o = this.headerMarshaller.format(t),
          n = o.byteLength + r.byteLength + 16,
          i = new Uint8Array(n),
          a = new DataView(i.buffer, i.byteOffset, i.byteLength),
          c = new yo();
        return (
          a.setUint32(0, n, !1),
          a.setUint32(4, o.byteLength, !1),
          a.setUint32(8, c.update(i.subarray(0, 8)).digest(), !1),
          i.set(o, 12),
          i.set(r, o.byteLength + 12),
          a.setUint32(n - 4, c.update(i.subarray(8, n - 4)).digest(), !1),
          i
        );
      }
      decode(t) {
        let { headers: r, body: o } = b4(t);
        return { headers: this.headerMarshaller.parse(r), body: o };
      }
      formatHeaders(t) {
        return this.headerMarshaller.format(t);
      }
    };
  });
var A4 = s(() => {});
var Xf,
  _4 = s(() => {
    Xf = class {
      constructor(t) {
        this.options = t;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let t of this.options.inputStream)
          yield this.options.decoder.decode(t);
      }
    };
  });
var Jf,
  R4 = s(() => {
    Jf = class {
      constructor(t) {
        this.options = t;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let t of this.options.messageStream)
          yield this.options.encoder.encode(t);
        this.options.includeEndFrame && (yield new Uint8Array(0));
      }
    };
  });
var Qf,
  v4 = s(() => {
    Qf = class {
      constructor(t) {
        this.options = t;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let t of this.options.messageStream) {
          let r = await this.options.deserializer(t);
          r !== void 0 && (yield r);
        }
      }
    };
  });
var Zf,
  I4 = s(() => {
    Zf = class {
      constructor(t) {
        this.options = t;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (let t of this.options.inputStream)
          yield this.options.serializer(t);
      }
    };
  });
var P4 = s(() => {
  T4();
  nE();
  oE();
  A4();
  _4();
  R4();
  v4();
  I4();
});
function N4(e) {
  let t = 0,
    r = 0,
    o = null,
    n = null,
    i = (c) => {
      if (typeof c != "number")
        throw new Error(
          "Attempted to allocate an event message where size was not a number: " +
            c
        );
      (t = c),
        (r = 4),
        (o = new Uint8Array(c)),
        new DataView(o.buffer).setUint32(0, c, !1);
    },
    a = async function* () {
      let c = e[Symbol.asyncIterator]();
      for (;;) {
        let { value: m, done: f } = await c.next();
        if (f) {
          if (t)
            if (t === r) yield o;
            else throw new Error("Truncated event message received.");
          else return;
          return;
        }
        let u = m.length,
          p = 0;
        for (; p < u; ) {
          if (!o) {
            let g = u - p;
            n || (n = new Uint8Array(4));
            let x = Math.min(4 - r, g);
            if ((n.set(m.slice(p, p + x), r), (r += x), (p += x), r < 4)) break;
            i(new DataView(n.buffer).getUint32(0, !1)), (n = null);
          }
          let h = Math.min(t - r, u - p);
          o.set(m.slice(p, p + h), r),
            (r += h),
            (p += h),
            t && t === r && (yield o, (o = null), (t = 0), (r = 0));
        }
      }
    };
  return { [Symbol.asyncIterator]: a };
}
var O4 = s(() => {});
function D4(e, t) {
  return async function (r) {
    let { value: o } = r.headers[":message-type"];
    if (o === "error") {
      let n = new Error(r.headers[":error-message"].value || "UnknownError");
      throw ((n.name = r.headers[":error-code"].value), n);
    } else if (o === "exception") {
      let n = r.headers[":exception-type"].value,
        i = { [n]: r },
        a = await e(i);
      if (a.$unknown) {
        let c = new Error(t(r.body));
        throw ((c.name = n), c);
      }
      throw a[n];
    } else if (o === "event") {
      let n = { [r.headers[":event-type"].value]: r },
        i = await e(n);
      return i.$unknown ? void 0 : i;
    } else
      throw Error(
        `Unrecognizable event type: ${r.headers[":event-type"].value}`
      );
  };
}
var F4 = s(() => {});
var _i,
  sE = s(() => {
    P4();
    O4();
    F4();
    _i = class {
      constructor({ utf8Encoder: t, utf8Decoder: r }) {
        (this.eventStreamCodec = new Yf(t, r)), (this.utfEncoder = t);
      }
      deserialize(t, r) {
        let o = N4(t);
        return new Qf({
          messageStream: new Xf({
            inputStream: o,
            decoder: this.eventStreamCodec,
          }),
          deserializer: D4(r, this.utfEncoder),
        });
      }
      serialize(t, r) {
        return new Jf({
          messageStream: new Zf({ inputStream: t, serializer: r }),
          encoder: this.eventStreamCodec,
          includeEndFrame: !0,
        });
      }
    };
  });
var M4 = s(() => {
  sE();
});
var k4 = s(() => {
  sE();
  M4();
});
async function* L4(e) {
  let t = !1,
    r = !1,
    o = new Array();
  for (
    e.on("error", (n) => {
      if ((t || (t = !0), n)) throw n;
    }),
      e.on("data", (n) => {
        o.push(n);
      }),
      e.on("end", () => {
        t = !0;
      });
    !r;

  ) {
    let n = await new Promise((i) => setTimeout(() => i(o.shift()), 0));
    n && (yield n), (r = t && o.length === 0);
  }
}
var $4 = s(() => {});
import { Readable as nee } from "stream";
var ep,
  iE = s(() => {
    k4();
    $4();
    ep = class {
      constructor({ utf8Encoder: t, utf8Decoder: r }) {
        this.universalMarshaller = new _i({ utf8Decoder: r, utf8Encoder: t });
      }
      deserialize(t, r) {
        let o = typeof t[Symbol.asyncIterator] == "function" ? t : L4(t);
        return this.universalMarshaller.deserialize(o, r);
      }
      serialize(t, r) {
        return nee.from(this.universalMarshaller.serialize(t, r));
      }
    };
  });
var U4,
  B4 = s(() => {
    iE();
    U4 = (e) => new ep(e);
  });
var H4 = s(() => {
  iE();
  B4();
});
var J4,
  Jt,
  Qt,
  es,
  z4,
  vi,
  Zn,
  Ri,
  mr,
  aE,
  V4,
  j4,
  G4,
  Q4,
  Z4,
  Xt,
  W4,
  q4,
  K4,
  Y4,
  X4,
  see,
  eW,
  tW = s(() => {
    (J4 = "required"),
      (Jt = "fn"),
      (Qt = "argv"),
      (es = "ref"),
      (z4 = "isSet"),
      (vi = "booleanEquals"),
      (Zn = "error"),
      (Ri = "endpoint"),
      (mr = "tree"),
      (aE = "PartitionResult"),
      (V4 = { [J4]: !1, type: "String" }),
      (j4 = { [J4]: !0, default: !1, type: "Boolean" }),
      (G4 = { [es]: "Endpoint" }),
      (Q4 = { [Jt]: vi, [Qt]: [{ [es]: "UseFIPS" }, !0] }),
      (Z4 = { [Jt]: vi, [Qt]: [{ [es]: "UseDualStack" }, !0] }),
      (Xt = {}),
      (W4 = { [Jt]: "getAttr", [Qt]: [{ [es]: aE }, "supportsFIPS"] }),
      (q4 = {
        [Jt]: vi,
        [Qt]: [
          !0,
          { [Jt]: "getAttr", [Qt]: [{ [es]: aE }, "supportsDualStack"] },
        ],
      }),
      (K4 = [Q4]),
      (Y4 = [Z4]),
      (X4 = [{ [es]: "Region" }]),
      (see = {
        version: "1.0",
        parameters: { Region: V4, UseDualStack: j4, UseFIPS: j4, Endpoint: V4 },
        rules: [
          {
            conditions: [{ [Jt]: z4, [Qt]: [G4] }],
            rules: [
              {
                conditions: K4,
                error:
                  "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: Zn,
              },
              {
                conditions: Y4,
                error:
                  "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: Zn,
              },
              { endpoint: { url: G4, properties: Xt, headers: Xt }, type: Ri },
            ],
            type: mr,
          },
          {
            conditions: [{ [Jt]: z4, [Qt]: X4 }],
            rules: [
              {
                conditions: [{ [Jt]: "aws.partition", [Qt]: X4, assign: aE }],
                rules: [
                  {
                    conditions: [Q4, Z4],
                    rules: [
                      {
                        conditions: [{ [Jt]: vi, [Qt]: [!0, W4] }, q4],
                        rules: [
                          {
                            endpoint: {
                              url: "https://lambda-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: Xt,
                              headers: Xt,
                            },
                            type: Ri,
                          },
                        ],
                        type: mr,
                      },
                      {
                        error:
                          "FIPS and DualStack are enabled, but this partition does not support one or both",
                        type: Zn,
                      },
                    ],
                    type: mr,
                  },
                  {
                    conditions: K4,
                    rules: [
                      {
                        conditions: [{ [Jt]: vi, [Qt]: [W4, !0] }],
                        rules: [
                          {
                            endpoint: {
                              url: "https://lambda-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: Xt,
                              headers: Xt,
                            },
                            type: Ri,
                          },
                        ],
                        type: mr,
                      },
                      {
                        error:
                          "FIPS is enabled but this partition does not support FIPS",
                        type: Zn,
                      },
                    ],
                    type: mr,
                  },
                  {
                    conditions: Y4,
                    rules: [
                      {
                        conditions: [q4],
                        rules: [
                          {
                            endpoint: {
                              url: "https://lambda.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: Xt,
                              headers: Xt,
                            },
                            type: Ri,
                          },
                        ],
                        type: mr,
                      },
                      {
                        error:
                          "DualStack is enabled but this partition does not support DualStack",
                        type: Zn,
                      },
                    ],
                    type: mr,
                  },
                  {
                    endpoint: {
                      url: "https://lambda.{Region}.{PartitionResult#dnsSuffix}",
                      properties: Xt,
                      headers: Xt,
                    },
                    type: Ri,
                  },
                ],
                type: mr,
              },
            ],
            type: mr,
          },
          { error: "Invalid Configuration: Missing Region", type: Zn },
        ],
      }),
      (eW = see);
  });
var iee,
  rW,
  oW = s(() => {
    Hc();
    $e();
    tW();
    (iee = new $t({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"],
    })),
      (rW = (e, t = {}) =>
        iee.get(e, () => Ut(eW, { endpointParams: e, logger: t.logger })));
    Le.aws = us;
  });
var nW,
  sW = s(() => {
    Se();
    I();
    vs();
    Gy();
    fi();
    ah();
    oW();
    nW = (e) => ({
      apiVersion: "2015-03-31",
      base64Decoder: e?.base64Decoder ?? Rf,
      base64Encoder: e?.base64Encoder ?? vf,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? rW,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? NM,
      httpAuthSchemes: e?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (t) => t.getIdentityProvider("aws.auth#sigv4"),
          signer: new rt(),
        },
      ],
      logger: e?.logger ?? new _r(),
      serviceId: e?.serviceId ?? "Lambda",
      urlParser: e?.urlParser ?? Bt,
      utf8Decoder: e?.utf8Decoder ?? zr,
      utf8Encoder: e?.utf8Encoder ?? wf,
    });
  });
var iW,
  aW = s(() => {
    FM();
    Se();
    o4();
    _y();
    Yo();
    H4();
    Oy();
    Os();
    eo();
    Hy();
    zy();
    Ht();
    sW();
    I();
    Xy();
    I();
    iW = (e) => {
      Um(process.version);
      let t = If(e),
        r = () => t().then($m),
        o = nW(e);
      yr(process.version);
      let n = { profile: e?.profile, logger: o.logger };
      return {
        ...o,
        ...e,
        runtime: "node",
        defaultsMode: t,
        authSchemePreference: e?.authSchemePreference ?? ne(xr, n),
        bodyLengthChecker: e?.bodyLengthChecker ?? _f,
        credentialDefaultProvider: e?.credentialDefaultProvider ?? t4,
        defaultUserAgentProvider:
          e?.defaultUserAgentProvider ??
          Cf({ serviceId: o.serviceId, clientVersion: MM.version }),
        eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? U4,
        maxAttempts: e?.maxAttempts ?? ne(Dm, e),
        region: e?.region ?? ne(Ko, { ...fm, ...n }),
        requestHandler: kn.create(e?.requestHandler ?? r),
        retryMode:
          e?.retryMode ??
          ne({ ...Mm, default: async () => (await r()).retryMode || Qo }, e),
        sha256: e?.sha256 ?? Fn.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? Af,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? ne(mm, n),
        useFipsEndpoint: e?.useFipsEndpoint ?? ne(dm, n),
        userAgentAppId: e?.userAgentAppId ?? ne(bf, n),
      };
    };
  });
var cW,
  mW,
  dW = s(() => {
    (cW = (e) => {
      let t = e.httpAuthSchemes,
        r = e.httpAuthSchemeProvider,
        o = e.credentials;
      return {
        setHttpAuthScheme(n) {
          let i = t.findIndex((a) => a.schemeId === n.schemeId);
          i === -1 ? t.push(n) : t.splice(i, 1, n);
        },
        httpAuthSchemes() {
          return t;
        },
        setHttpAuthSchemeProvider(n) {
          r = n;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(n) {
          o = n;
        },
        credentials() {
          return o;
        },
      };
    }),
      (mW = (e) => ({
        httpAuthSchemes: e.httpAuthSchemes(),
        httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
        credentials: e.credentials(),
      }));
  });
var fW,
  pW = s(() => {
    Js();
    Qe();
    I();
    dW();
    fW = (e, t) => {
      let r = Object.assign($r(e), Bm(e), lc(e), cW(e));
      return (
        t.forEach((o) => o.configure(r)),
        Object.assign(e, Ur(r), Hm(r), hc(r), mW(r))
      );
    };
  });
var oe,
  Xe = s(() => {
    Ap();
    _p();
    vp();
    cm();
    Yo();
    Q();
    ND();
    Nl();
    O();
    Os();
    I();
    ah();
    M();
    aW();
    pW();
    oe = class extends no {
      config;
      constructor(...[t]) {
        let r = iW(t || {});
        super(r), (this.initConfig = r);
        let o = DM(r),
          n = Dc(o),
          i = Fm(n),
          a = um(i),
          c = a,
          m = Tm(c),
          f = ID(m),
          u = OM(f),
          p = fW(u, t?.extensions || []);
        (this.config = p),
          this.middlewareStack.use(am(this.config)),
          this.middlewareStack.use(zm(this.config)),
          this.middlewareStack.use(lm(this.config)),
          this.middlewareStack.use(gc(this.config)),
          this.middlewareStack.use(yc(this.config)),
          this.middlewareStack.use(xc(this.config)),
          this.middlewareStack.use(
            dr(this.config, {
              httpAuthSchemeParametersProvider: PM,
              identityProviderConfigProvider: async (h) =>
                new kt({ "aws.auth#sigv4": h.credentials }),
            })
          ),
          this.middlewareStack.use(fr(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var j,
  tp = s(() => {
    I();
    j = class e extends nn {
      constructor(t) {
        super(t), Object.setPrototypeOf(this, e.prototype);
      }
    };
  });
var Ii,
  Pi,
  Ni,
  Oi,
  Di,
  Fi,
  aee,
  Mi,
  cee,
  mee,
  dee,
  fee,
  pee,
  uee,
  lee,
  hee,
  gee,
  yee,
  xee,
  Eee,
  See,
  ki,
  Li,
  $i,
  Cee,
  bee,
  wee,
  Tee,
  Aee,
  _ee,
  Ree,
  vee,
  Iee,
  Pee,
  Nee,
  Ui,
  Oee,
  Bi,
  Dee,
  Fee,
  Hi,
  Mee,
  zi,
  Vi,
  ji,
  Gi,
  Wi,
  qi,
  Ki,
  Yi,
  Xi,
  Ji,
  Qi,
  Zi,
  ea,
  kee,
  Lee,
  ta,
  ra,
  oa,
  na,
  sa,
  ia,
  aa,
  ca,
  ma,
  da,
  fa,
  pa,
  $ee,
  cE,
  Uee,
  uW,
  mE,
  dE,
  lW,
  hW,
  gW,
  yW,
  xW,
  EW,
  Je,
  fE,
  pE,
  uE,
  lE,
  hE,
  SW,
  Bee,
  gE,
  yE,
  xE,
  CW,
  EE,
  SE,
  CE,
  ze = s(() => {
    I();
    tp();
    (Ii = class e extends j {
      name = "InvalidParameterValueException";
      $fault = "client";
      Type;
      constructor(t) {
        super({
          name: "InvalidParameterValueException",
          $fault: "client",
          ...t,
        }),
          Object.setPrototypeOf(this, e.prototype),
          (this.Type = t.Type);
      }
    }),
      (Pi = class e extends j {
        name = "PolicyLengthExceededException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "PolicyLengthExceededException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (Ni = class e extends j {
        name = "PreconditionFailedException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "PreconditionFailedException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (Oi = class e extends j {
        name = "ResourceConflictException";
        $fault = "client";
        Type;
        constructor(t) {
          super({ name: "ResourceConflictException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (Di = class e extends j {
        name = "ResourceNotFoundException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "ResourceNotFoundException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Fi = class e extends j {
        name = "ServiceException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "ServiceException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (aee = {
        CallerRateLimitExceeded: "CallerRateLimitExceeded",
        ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
        ConcurrentSnapshotCreateLimitExceeded:
          "ConcurrentSnapshotCreateLimitExceeded",
        FunctionInvocationRateLimitExceeded:
          "FunctionInvocationRateLimitExceeded",
        ReservedFunctionConcurrentInvocationLimitExceeded:
          "ReservedFunctionConcurrentInvocationLimitExceeded",
        ReservedFunctionInvocationRateLimitExceeded:
          "ReservedFunctionInvocationRateLimitExceeded",
      }),
      (Mi = class e extends j {
        name = "TooManyRequestsException";
        $fault = "client";
        retryAfterSeconds;
        Type;
        Reason;
        constructor(t) {
          super({ name: "TooManyRequestsException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.retryAfterSeconds = t.retryAfterSeconds),
            (this.Type = t.Type),
            (this.Reason = t.Reason);
        }
      }),
      (cee = { AWS_IAM: "AWS_IAM", NONE: "NONE" }),
      (mee = {
        BASIC_AUTH: "BASIC_AUTH",
        CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
        SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
      }),
      (dee = { JSON: "JSON", SOURCE: "SOURCE" }),
      (fee = { KEY: "KEY", VALUE: "VALUE" }),
      (pee = {
        Debug: "DEBUG",
        Error: "ERROR",
        Fatal: "FATAL",
        Info: "INFO",
        Trace: "TRACE",
        Warn: "WARN",
      }),
      (uee = { arm64: "arm64", x86_64: "x86_64" }),
      (lee = { Enforce: "Enforce", Warn: "Warn" }),
      (hee = { Default: "Default", UpdateLookup: "UpdateLookup" }),
      (gee = { ReportBatchItemFailures: "ReportBatchItemFailures" }),
      (yee = { EventCount: "EventCount" }),
      (xee = { KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS" }),
      (Eee = {
        BASIC_AUTH: "BASIC_AUTH",
        CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
        SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH",
        SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH",
        SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
        VIRTUAL_HOST: "VIRTUAL_HOST",
        VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP",
        VPC_SUBNET: "VPC_SUBNET",
      }),
      (See = {
        AT_TIMESTAMP: "AT_TIMESTAMP",
        LATEST: "LATEST",
        TRIM_HORIZON: "TRIM_HORIZON",
      }),
      (ki = class e extends j {
        name = "CodeSigningConfigNotFoundException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({
            name: "CodeSigningConfigNotFoundException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Li = class e extends j {
        name = "CodeStorageExceededException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "CodeStorageExceededException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      ($i = class e extends j {
        name = "CodeVerificationFailedException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({
            name: "CodeVerificationFailedException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Cee = { Json: "JSON", Text: "Text" }),
      (bee = { Debug: "DEBUG", Info: "INFO", Warn: "WARN" }),
      (wee = { Image: "Image", Zip: "Zip" }),
      (Tee = {
        dotnet6: "dotnet6",
        dotnet8: "dotnet8",
        dotnetcore10: "dotnetcore1.0",
        dotnetcore20: "dotnetcore2.0",
        dotnetcore21: "dotnetcore2.1",
        dotnetcore31: "dotnetcore3.1",
        go1x: "go1.x",
        java11: "java11",
        java17: "java17",
        java21: "java21",
        java8: "java8",
        java8al2: "java8.al2",
        nodejs: "nodejs",
        nodejs10x: "nodejs10.x",
        nodejs12x: "nodejs12.x",
        nodejs14x: "nodejs14.x",
        nodejs16x: "nodejs16.x",
        nodejs18x: "nodejs18.x",
        nodejs20x: "nodejs20.x",
        nodejs22x: "nodejs22.x",
        nodejs43: "nodejs4.3",
        nodejs43edge: "nodejs4.3-edge",
        nodejs610: "nodejs6.10",
        nodejs810: "nodejs8.10",
        provided: "provided",
        providedal2: "provided.al2",
        providedal2023: "provided.al2023",
        python27: "python2.7",
        python310: "python3.10",
        python311: "python3.11",
        python312: "python3.12",
        python313: "python3.13",
        python36: "python3.6",
        python37: "python3.7",
        python38: "python3.8",
        python39: "python3.9",
        ruby25: "ruby2.5",
        ruby27: "ruby2.7",
        ruby32: "ruby3.2",
        ruby33: "ruby3.3",
        ruby34: "ruby3.4",
      }),
      (Aee = { None: "None", PublishedVersions: "PublishedVersions" }),
      (_ee = { Active: "Active", PassThrough: "PassThrough" }),
      (Ree = {
        Failed: "Failed",
        InProgress: "InProgress",
        Successful: "Successful",
      }),
      (vee = {
        DisabledKMSKey: "DisabledKMSKey",
        EFSIOError: "EFSIOError",
        EFSMountConnectivityError: "EFSMountConnectivityError",
        EFSMountFailure: "EFSMountFailure",
        EFSMountTimeout: "EFSMountTimeout",
        EniLimitExceeded: "EniLimitExceeded",
        FunctionError: "FunctionError",
        ImageAccessDenied: "ImageAccessDenied",
        ImageDeleted: "ImageDeleted",
        InsufficientRolePermissions: "InsufficientRolePermissions",
        InternalError: "InternalError",
        InvalidConfiguration: "InvalidConfiguration",
        InvalidImage: "InvalidImage",
        InvalidRuntime: "InvalidRuntime",
        InvalidSecurityGroup: "InvalidSecurityGroup",
        InvalidStateKMSKey: "InvalidStateKMSKey",
        InvalidSubnet: "InvalidSubnet",
        InvalidZipFileException: "InvalidZipFileException",
        KMSKeyAccessDenied: "KMSKeyAccessDenied",
        KMSKeyNotFound: "KMSKeyNotFound",
        SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
      }),
      (Iee = { Off: "Off", On: "On" }),
      (Pee = {
        Active: "Active",
        Failed: "Failed",
        Inactive: "Inactive",
        Pending: "Pending",
      }),
      (Nee = {
        Creating: "Creating",
        DisabledKMSKey: "DisabledKMSKey",
        EFSIOError: "EFSIOError",
        EFSMountConnectivityError: "EFSMountConnectivityError",
        EFSMountFailure: "EFSMountFailure",
        EFSMountTimeout: "EFSMountTimeout",
        EniLimitExceeded: "EniLimitExceeded",
        FunctionError: "FunctionError",
        Idle: "Idle",
        ImageAccessDenied: "ImageAccessDenied",
        ImageDeleted: "ImageDeleted",
        InsufficientRolePermissions: "InsufficientRolePermissions",
        InternalError: "InternalError",
        InvalidConfiguration: "InvalidConfiguration",
        InvalidImage: "InvalidImage",
        InvalidRuntime: "InvalidRuntime",
        InvalidSecurityGroup: "InvalidSecurityGroup",
        InvalidStateKMSKey: "InvalidStateKMSKey",
        InvalidSubnet: "InvalidSubnet",
        InvalidZipFileException: "InvalidZipFileException",
        KMSKeyAccessDenied: "KMSKeyAccessDenied",
        KMSKeyNotFound: "KMSKeyNotFound",
        Restoring: "Restoring",
        SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
      }),
      (Ui = class e extends j {
        name = "InvalidCodeSignatureException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({
            name: "InvalidCodeSignatureException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Oee = { BUFFERED: "BUFFERED", RESPONSE_STREAM: "RESPONSE_STREAM" }),
      (Bi = class e extends j {
        name = "ResourceInUseException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "ResourceInUseException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Dee = { Allow: "Allow", Terminate: "Terminate" }),
      (Fee = { FAILED: "FAILED", IN_PROGRESS: "IN_PROGRESS", READY: "READY" }),
      (Hi = class e extends j {
        name = "ProvisionedConcurrencyConfigNotFoundException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "ProvisionedConcurrencyConfigNotFoundException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (Mee = {
        Auto: "Auto",
        FunctionUpdate: "FunctionUpdate",
        Manual: "Manual",
      }),
      (zi = class e extends j {
        name = "EC2AccessDeniedException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "EC2AccessDeniedException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Vi = class e extends j {
        name = "EC2ThrottledException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "EC2ThrottledException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (ji = class e extends j {
        name = "EC2UnexpectedException";
        $fault = "server";
        Type;
        Message;
        EC2ErrorCode;
        constructor(t) {
          super({ name: "EC2UnexpectedException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message),
            (this.EC2ErrorCode = t.EC2ErrorCode);
        }
      }),
      (Gi = class e extends j {
        name = "EFSIOException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "EFSIOException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Wi = class e extends j {
        name = "EFSMountConnectivityException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({
            name: "EFSMountConnectivityException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (qi = class e extends j {
        name = "EFSMountFailureException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "EFSMountFailureException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Ki = class e extends j {
        name = "EFSMountTimeoutException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "EFSMountTimeoutException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Yi = class e extends j {
        name = "ENILimitReachedException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "ENILimitReachedException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Xi = class e extends j {
        name = "InvalidRequestContentException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "InvalidRequestContentException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (Ji = class e extends j {
        name = "InvalidRuntimeException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "InvalidRuntimeException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Qi = class e extends j {
        name = "InvalidSecurityGroupIDException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({
            name: "InvalidSecurityGroupIDException",
            $fault: "server",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (Zi = class e extends j {
        name = "InvalidSubnetIDException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "InvalidSubnetIDException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (ea = class e extends j {
        name = "InvalidZipFileException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "InvalidZipFileException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (kee = {
        DryRun: "DryRun",
        Event: "Event",
        RequestResponse: "RequestResponse",
      }),
      (Lee = { None: "None", Tail: "Tail" }),
      (ta = class e extends j {
        name = "KMSAccessDeniedException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "KMSAccessDeniedException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (ra = class e extends j {
        name = "KMSDisabledException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "KMSDisabledException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (oa = class e extends j {
        name = "KMSInvalidStateException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "KMSInvalidStateException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (na = class e extends j {
        name = "KMSNotFoundException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({ name: "KMSNotFoundException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (sa = class e extends j {
        name = "RecursiveInvocationException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({
            name: "RecursiveInvocationException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (ia = class e extends j {
        name = "RequestTooLargeException";
        $fault = "client";
        Type;
        constructor(t) {
          super({ name: "RequestTooLargeException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (aa = class e extends j {
        name = "ResourceNotReadyException";
        $fault = "server";
        Type;
        constructor(t) {
          super({ name: "ResourceNotReadyException", $fault: "server", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      (ca = class e extends j {
        name = "SnapStartException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "SnapStartException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (ma = class e extends j {
        name = "SnapStartNotReadyException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "SnapStartNotReadyException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (da = class e extends j {
        name = "SnapStartTimeoutException";
        $fault = "client";
        Type;
        Message;
        constructor(t) {
          super({ name: "SnapStartTimeoutException", $fault: "client", ...t }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (fa = class e extends j {
        name = "SubnetIPAddressLimitReachedException";
        $fault = "server";
        Type;
        Message;
        constructor(t) {
          super({
            name: "SubnetIPAddressLimitReachedException",
            $fault: "server",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type),
            (this.Message = t.Message);
        }
      }),
      (pa = class e extends j {
        name = "UnsupportedMediaTypeException";
        $fault = "client";
        Type;
        constructor(t) {
          super({
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            ...t,
          }),
            Object.setPrototypeOf(this, e.prototype),
            (this.Type = t.Type);
        }
      }),
      ($ee = { DryRun: "DryRun", RequestResponse: "RequestResponse" });
    (function (e) {
      e.visit = (t, r) =>
        t.PayloadChunk !== void 0
          ? r.PayloadChunk(t.PayloadChunk)
          : t.InvokeComplete !== void 0
            ? r.InvokeComplete(t.InvokeComplete)
            : r._(t.$unknown[0], t.$unknown[1]);
    })(cE || (cE = {}));
    (Uee = { ALL: "ALL" }),
      (uW = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: ye }) })),
      (mE = (e) => ({ ...e, ...(e.Variables && { Variables: ye }) })),
      (dE = (e) => ({
        ...e,
        ...(e.Code && { Code: uW(e.Code) }),
        ...(e.Environment && { Environment: mE(e.Environment) }),
      })),
      (lW = (e) => ({ ...e, ...(e.Message && { Message: ye }) })),
      (hW = (e) => ({
        ...e,
        ...(e.Variables && { Variables: ye }),
        ...(e.Error && { Error: lW(e.Error) }),
      })),
      (gW = (e) => ({ ...e, ...(e.Message && { Message: ye }) })),
      (yW = (e) => ({ ...e, ...(e.Error && { Error: gW(e.Error) }) })),
      (xW = (e) => ({ ...e, ...(e.Message && { Message: ye }) })),
      (EW = (e) => ({ ...e, ...(e.Error && { Error: xW(e.Error) }) })),
      (Je = (e) => ({
        ...e,
        ...(e.Environment && { Environment: hW(e.Environment) }),
        ...(e.ImageConfigResponse && {
          ImageConfigResponse: yW(e.ImageConfigResponse),
        }),
        ...(e.RuntimeVersionConfig && {
          RuntimeVersionConfig: EW(e.RuntimeVersionConfig),
        }),
      })),
      (fE = (e) => ({
        ...e,
        ...(e.Configuration && { Configuration: Je(e.Configuration) }),
      })),
      (pE = (e) => ({ ...e, ...(e.Payload && { Payload: ye }) })),
      (uE = (e) => ({ ...e, ...(e.Payload && { Payload: ye }) })),
      (lE = (e) => ({ ...e })),
      (hE = (e) => ({ ...e, ...(e.Payload && { Payload: ye }) })),
      (SW = (e) => ({ ...e, ...(e.Payload && { Payload: ye }) })),
      (Bee = (e) => {
        if (e.PayloadChunk !== void 0)
          return { PayloadChunk: SW(e.PayloadChunk) };
        if (e.InvokeComplete !== void 0)
          return { InvokeComplete: e.InvokeComplete };
        if (e.$unknown !== void 0) return { [e.$unknown[0]]: "UNKNOWN" };
      }),
      (gE = (e) => ({
        ...e,
        ...(e.EventStream && { EventStream: "STREAMING_CONTENT" }),
      })),
      (yE = (e) => ({
        ...e,
        ...(e.Functions && { Functions: e.Functions.map((t) => Je(t)) }),
      })),
      (xE = (e) => ({
        ...e,
        ...(e.Versions && { Versions: e.Versions.map((t) => Je(t)) }),
      })),
      (CW = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: ye }) })),
      (EE = (e) => ({ ...e, ...(e.Content && { Content: CW(e.Content) }) })),
      (SE = (e) => ({ ...e, ...(e.ZipFile && { ZipFile: ye }) })),
      (CE = (e) => ({
        ...e,
        ...(e.Environment && { Environment: mE(e.Environment) }),
      }));
  });
var _W,
  RW,
  vW,
  IW,
  PW,
  NW,
  OW,
  DW,
  FW,
  MW,
  kW,
  LW,
  $W,
  UW,
  BW,
  HW,
  zW,
  VW,
  jW,
  GW,
  WW,
  qW,
  KW,
  YW,
  XW,
  JW,
  QW,
  ZW,
  e8,
  t8,
  r8,
  o8,
  n8,
  s8,
  i8,
  a8,
  c8,
  m8,
  d8,
  f8,
  p8,
  u8,
  l8,
  h8,
  g8,
  y8,
  x8,
  E8,
  S8,
  C8,
  b8,
  w8,
  T8,
  A8,
  _8,
  R8,
  v8,
  I8,
  P8,
  N8,
  O8,
  D8,
  F8,
  M8,
  k8,
  L8,
  $8,
  U8,
  B8,
  H8,
  z8,
  V8,
  j8,
  G8,
  W8,
  q8,
  K8,
  Y8,
  X8,
  J8,
  Q8,
  Z8,
  e6,
  t6,
  r6,
  o6,
  n6,
  s6,
  i6,
  a6,
  c6,
  m6,
  d6,
  f6,
  p6,
  u6,
  l6,
  h6,
  g6,
  y6,
  x6,
  E6,
  S6,
  C6,
  b6,
  w6,
  T6,
  A6,
  _6,
  R6,
  v6,
  I6,
  P6,
  N6,
  O6,
  D6,
  F6,
  M6,
  k6,
  L6,
  $6,
  U6,
  B6,
  H6,
  z6,
  V6,
  j6,
  G6,
  W6,
  q6,
  K6,
  Y6,
  X6,
  J6,
  Q6,
  Z6,
  L,
  Hee,
  zee,
  Vee,
  jee,
  Gee,
  Wee,
  qee,
  Kee,
  Yee,
  Xee,
  Jee,
  Qee,
  Zee,
  ete,
  tte,
  rte,
  ote,
  nte,
  ste,
  ite,
  ate,
  cte,
  mte,
  dte,
  fte,
  pte,
  ute,
  lte,
  hte,
  gte,
  yte,
  xte,
  Ete,
  Ste,
  Cte,
  bte,
  wte,
  Tte,
  Ate,
  _te,
  Rte,
  vte,
  Ite,
  eq,
  Pte,
  Nte,
  Ote,
  Dte,
  Fte,
  sp,
  Mte,
  kte,
  Lte,
  $te,
  A,
  bW,
  rp,
  tq,
  op,
  wW,
  rq,
  Ute,
  TW,
  np,
  oq,
  Bte,
  Hte,
  nq,
  fe,
  pe,
  AW,
  G,
  ts,
  zte,
  Vte,
  jte,
  Gte,
  Wte,
  qte,
  Kte,
  sq,
  iq,
  Yte,
  aq,
  Xte,
  cq,
  k = s(() => {
    Se();
    Q();
    I();
    tp();
    ze();
    (_W = async (e, t) => {
      let r = N(e, t),
        o = { "content-type": "application/json" };
      r.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy"),
        r.p("LayerName", () => e.LayerName, "{LayerName}", !1),
        r.p(
          "VersionNumber",
          () => e.VersionNumber.toString(),
          "{VersionNumber}",
          !1
        );
      let n = y({ [ts]: [, e[ts]] }),
        i;
      return (
        (i = JSON.stringify(
          w(e, {
            Action: [],
            OrganizationId: [],
            Principal: [],
            StatementId: [],
          })
        )),
        r.m("POST").h(o).q(n).b(i),
        r.build()
      );
    }),
      (RW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/policy"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, {
              Action: [],
              EventSourceToken: [],
              FunctionUrlAuthType: [],
              Principal: [],
              PrincipalOrgID: [],
              RevisionId: [],
              SourceAccount: [],
              SourceArn: [],
              StatementId: [],
            })
          )),
          r.m("POST").h(o).q(n).b(i),
          r.build()
        );
      }),
      (vW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/aliases"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              Description: [],
              FunctionVersion: [],
              Name: [],
              RoutingConfig: (i) => eq(i, t),
            })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (IW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2020-04-22/code-signing-configs");
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              AllowedPublishers: (i) => l(i),
              CodeSigningPolicies: (i) => l(i),
              Description: [],
              Tags: (i) => l(i),
            })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (PW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/event-source-mappings");
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              AmazonManagedKafkaEventSourceConfig: (i) => l(i),
              BatchSize: [],
              BisectBatchOnFunctionError: [],
              DestinationConfig: (i) => l(i),
              DocumentDBEventSourceConfig: (i) => l(i),
              Enabled: [],
              EventSourceArn: [],
              FilterCriteria: (i) => l(i),
              FunctionName: [],
              FunctionResponseTypes: (i) => l(i),
              KMSKeyArn: [],
              MaximumBatchingWindowInSeconds: [],
              MaximumRecordAgeInSeconds: [],
              MaximumRetryAttempts: [],
              MetricsConfig: (i) => l(i),
              ParallelizationFactor: [],
              ProvisionedPollerConfig: (i) => l(i),
              Queues: (i) => l(i),
              ScalingConfig: (i) => l(i),
              SelfManagedEventSource: (i) => l(i),
              SelfManagedKafkaEventSourceConfig: (i) => l(i),
              SourceAccessConfigurations: (i) => l(i),
              StartingPosition: [],
              StartingPositionTimestamp: (i) => i.getTime() / 1e3,
              Tags: (i) => l(i),
              Topics: (i) => l(i),
              TumblingWindowInSeconds: [],
            })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (NW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions");
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              Architectures: (i) => l(i),
              Code: (i) => Pte(i, t),
              CodeSigningConfigArn: [],
              DeadLetterConfig: (i) => l(i),
              Description: [],
              Environment: (i) => l(i),
              EphemeralStorage: (i) => l(i),
              FileSystemConfigs: (i) => l(i),
              FunctionName: [],
              Handler: [],
              ImageConfig: (i) => l(i),
              KMSKeyArn: [],
              Layers: (i) => l(i),
              LoggingConfig: (i) => l(i),
              MemorySize: [],
              PackageType: [],
              Publish: [],
              Role: [],
              Runtime: [],
              SnapStart: (i) => l(i),
              Tags: (i) => l(i),
              Timeout: [],
              TracingConfig: (i) => l(i),
              VpcConfig: (i) => l(i),
            })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (OW = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2021-10-31/functions/{FunctionName}/url"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, { AuthType: [], Cors: (a) => l(a), InvokeMode: [] })
          )),
          r.m("POST").h(o).q(n).b(i),
          r.build()
        );
      }),
      (DW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r.p("Name", () => e.Name, "{Name}", !1),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (FW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}"),
          r.p(
            "CodeSigningConfigArn",
            () => e.CodeSigningConfigArn,
            "{CodeSigningConfigArn}",
            !1
          ),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (MW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2015-03-31/event-source-mappings/{UUID}"),
          r.p("UUID", () => e.UUID, "{UUID}", !1),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (kW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (LW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2020-06-30/functions/{FunctionName}/code-signing-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      ($W = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2017-10-31/functions/{FunctionName}/concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (UW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (BW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2021-10-31/functions/{FunctionName}/url"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (HW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}"),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1),
          r.p(
            "VersionNumber",
            () => e.VersionNumber.toString(),
            "{VersionNumber}",
            !1
          ),
          r
            .m("DELETE")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (zW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, P(e[G], "Qualifier")] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (VW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2016-08-19/account-settings"),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (jW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r.p("Name", () => e.Name, "{Name}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (GW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}"),
          r.p(
            "CodeSigningConfigArn",
            () => e.CodeSigningConfigArn,
            "{CodeSigningConfigArn}",
            !1
          ),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (WW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2015-03-31/event-source-mappings/{UUID}"),
          r.p("UUID", () => e.UUID, "{UUID}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (qW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (KW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2020-06-30/functions/{FunctionName}/code-signing-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (YW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2019-09-30/functions/{FunctionName}/concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (XW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}/configuration"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (JW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (QW = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2024-08-31/functions/{FunctionName}/recursion-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (ZW = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2021-10-31/functions/{FunctionName}/url"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (e8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}"),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1),
          r.p(
            "VersionNumber",
            () => e.VersionNumber.toString(),
            "{VersionNumber}",
            !1
          ),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (t8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2018-10-31/layers");
        let n = y({ [Gte]: [, "LayerVersion"], [bW]: [, P(e[bW], "Arn")] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (r8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp(
            "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy"
          ),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1),
          r.p(
            "VersionNumber",
            () => e.VersionNumber.toString(),
            "{VersionNumber}",
            !1
          ),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (o8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}/policy"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (n8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, P(e[G], "Qualifier")] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (s8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2021-07-20/functions/{FunctionName}/runtime-management-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (i8 = async (e, t) => {
        let r = N(e, t),
          o = y({}, Ar, {
            "content-type": "application/octet-stream",
            [aq]: e[oq],
            [cq]: e[nq],
            [sq]: e[tq],
          });
        r.bp("/2015-03-31/functions/{FunctionName}/invocations"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          e.Payload !== void 0 && (i = e.Payload),
          r.m("POST").h(o).q(n).b(i),
          r.build()
        );
      }),
      (a8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/octet-stream" };
        r.bp("/2014-11-13/functions/{FunctionName}/invoke-async"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          e.InvokeArgs !== void 0 && (n = e.InvokeArgs),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (c8 = async (e, t) => {
        let r = N(e, t),
          o = y({}, Ar, {
            "content-type": "application/octet-stream",
            [aq]: e[oq],
            [cq]: e[nq],
            [sq]: e[tq],
          });
        r.bp(
          "/2021-11-15/functions/{FunctionName}/response-streaming-invocations"
        ),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          e.Payload !== void 0 && (i = e.Payload),
          r.m("POST").h(o).q(n).b(i),
          r.build()
        );
      }),
      (m8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}/aliases"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({
          [np]: [, e[np]],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (d8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2020-04-22/code-signing-configs");
        let n = y({
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (f8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/event-source-mappings");
        let n = y({
          [wW]: [, e[wW]],
          [TW]: [, e[TW]],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (p8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config/list"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (u8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions");
        let n = y({
          [AW]: [, e[AW]],
          [np]: [, e[np]],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (l8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp(
          "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions"
        ),
          r.p(
            "CodeSigningConfigArn",
            () => e.CodeSigningConfigArn,
            "{CodeSigningConfigArn}",
            !1
          );
        let n = y({
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (h8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2021-10-31/functions/{FunctionName}/urls"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (g8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2018-10-31/layers");
        let n = y({
          [op]: [, e[op]],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
          [rp]: [, e[rp]],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (y8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2018-10-31/layers/{LayerName}/versions"),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1);
        let n = y({
          [op]: [, e[op]],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
          [rp]: [, e[rp]],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (x8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({
          [Bte]: [, "ALL"],
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (E8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        return (
          r.bp("/2017-03-31/tags/{Resource}"),
          r.p("Resource", () => e.Resource, "{Resource}", !1),
          r
            .m("GET")
            .h(o)
            .b(void 0),
          r.build()
        );
      }),
      (S8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}/versions"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({
          [fe]: [, e[fe]],
          [pe]: [() => e.MaxItems !== void 0, () => e[pe].toString()],
        });
        return (
          r
            .m("GET")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (C8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2018-10-31/layers/{LayerName}/versions"),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              CompatibleArchitectures: (i) => l(i),
              CompatibleRuntimes: (i) => l(i),
              Content: (i) => Nte(i, t),
              Description: [],
              LicenseInfo: [],
            })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (b8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/versions"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, { CodeSha256: [], Description: [], RevisionId: [] })
          )),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (w8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2020-06-30/functions/{FunctionName}/code-signing-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(w(e, { CodeSigningConfigArn: [] }))),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (T8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2017-10-31/functions/{FunctionName}/concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(w(e, { ReservedConcurrentExecutions: [] }))),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (A8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, {
              DestinationConfig: (a) => l(a),
              MaximumEventAgeInSeconds: [],
              MaximumRetryAttempts: [],
            })
          )),
          r.m("PUT").h(o).q(n).b(i),
          r.build()
        );
      }),
      (_8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2024-08-31/functions/{FunctionName}/recursion-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(w(e, { RecursiveLoop: [] }))),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (R8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, P(e[G], "Qualifier")] }),
          i;
        return (
          (i = JSON.stringify(w(e, { ProvisionedConcurrentExecutions: [] }))),
          r.m("PUT").h(o).q(n).b(i),
          r.build()
        );
      }),
      (v8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2021-07-20/functions/{FunctionName}/runtime-management-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, { RuntimeVersionArn: [], UpdateRuntimeOn: [] })
          )),
          r.m("PUT").h(o).q(n).b(i),
          r.build()
        );
      }),
      (I8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp(
          "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}"
        ),
          r.p("LayerName", () => e.LayerName, "{LayerName}", !1),
          r.p(
            "VersionNumber",
            () => e.VersionNumber.toString(),
            "{VersionNumber}",
            !1
          ),
          r.p("StatementId", () => e.StatementId, "{StatementId}", !1);
        let n = y({ [ts]: [, e[ts]] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (P8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2015-03-31/functions/{FunctionName}/policy/{StatementId}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r.p("StatementId", () => e.StatementId, "{StatementId}", !1);
        let n = y({ [G]: [, e[G]], [ts]: [, e[ts]] });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (N8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2017-03-31/tags/{Resource}"),
          r.p("Resource", () => e.Resource, "{Resource}", !1);
        let n;
        return (
          (n = JSON.stringify(w(e, { Tags: (i) => l(i) }))),
          r.m("POST").h(o).b(n),
          r.build()
        );
      }),
      (O8 = async (e, t) => {
        let r = N(e, t),
          o = {};
        r.bp("/2017-03-31/tags/{Resource}"),
          r.p("Resource", () => e.Resource, "{Resource}", !1);
        let n = y({
          [Kte]: [P(e.TagKeys, "TagKeys") != null, () => e[Vte] || []],
        });
        return (
          r
            .m("DELETE")
            .h(o)
            .q(n)
            .b(void 0),
          r.build()
        );
      }),
      (D8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1),
          r.p("Name", () => e.Name, "{Name}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              Description: [],
              FunctionVersion: [],
              RevisionId: [],
              RoutingConfig: (i) => eq(i, t),
            })
          )),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (F8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}"),
          r.p(
            "CodeSigningConfigArn",
            () => e.CodeSigningConfigArn,
            "{CodeSigningConfigArn}",
            !1
          );
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              AllowedPublishers: (i) => l(i),
              CodeSigningPolicies: (i) => l(i),
              Description: [],
            })
          )),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (M8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/event-source-mappings/{UUID}"),
          r.p("UUID", () => e.UUID, "{UUID}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              AmazonManagedKafkaEventSourceConfig: (i) => l(i),
              BatchSize: [],
              BisectBatchOnFunctionError: [],
              DestinationConfig: (i) => l(i),
              DocumentDBEventSourceConfig: (i) => l(i),
              Enabled: [],
              FilterCriteria: (i) => l(i),
              FunctionName: [],
              FunctionResponseTypes: (i) => l(i),
              KMSKeyArn: [],
              MaximumBatchingWindowInSeconds: [],
              MaximumRecordAgeInSeconds: [],
              MaximumRetryAttempts: [],
              MetricsConfig: (i) => l(i),
              ParallelizationFactor: [],
              ProvisionedPollerConfig: (i) => l(i),
              ScalingConfig: (i) => l(i),
              SelfManagedKafkaEventSourceConfig: (i) => l(i),
              SourceAccessConfigurations: (i) => l(i),
              TumblingWindowInSeconds: [],
            })
          )),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (k8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/code"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              Architectures: (i) => l(i),
              DryRun: [],
              ImageUri: [],
              Publish: [],
              RevisionId: [],
              S3Bucket: [],
              S3Key: [],
              S3ObjectVersion: [],
              SourceKMSKeyArn: [],
              ZipFile: (i) => t.base64Encoder(i),
            })
          )),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      (L8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2015-03-31/functions/{FunctionName}/configuration"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n;
        return (
          (n = JSON.stringify(
            w(e, {
              DeadLetterConfig: (i) => l(i),
              Description: [],
              Environment: (i) => l(i),
              EphemeralStorage: (i) => l(i),
              FileSystemConfigs: (i) => l(i),
              Handler: [],
              ImageConfig: (i) => l(i),
              KMSKeyArn: [],
              Layers: (i) => l(i),
              LoggingConfig: (i) => l(i),
              MemorySize: [],
              RevisionId: [],
              Role: [],
              Runtime: [],
              SnapStart: (i) => l(i),
              Timeout: [],
              TracingConfig: (i) => l(i),
              VpcConfig: (i) => l(i),
            })
          )),
          r.m("PUT").h(o).b(n),
          r.build()
        );
      }),
      ($8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, {
              DestinationConfig: (a) => l(a),
              MaximumEventAgeInSeconds: [],
              MaximumRetryAttempts: [],
            })
          )),
          r.m("POST").h(o).q(n).b(i),
          r.build()
        );
      }),
      (U8 = async (e, t) => {
        let r = N(e, t),
          o = { "content-type": "application/json" };
        r.bp("/2021-10-31/functions/{FunctionName}/url"),
          r.p("FunctionName", () => e.FunctionName, "{FunctionName}", !1);
        let n = y({ [G]: [, e[G]] }),
          i;
        return (
          (i = JSON.stringify(
            w(e, { AuthType: [], Cors: (a) => l(a), InvokeMode: [] })
          )),
          r.m("PUT").h(o).q(n).b(i),
          r.build()
        );
      }),
      (B8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { RevisionId: d, Statement: d });
        return Object.assign(r, n), r;
      }),
      (H8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Statement: d });
        return Object.assign(r, n), r;
      }),
      (z8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AliasArn: d,
            Description: d,
            FunctionVersion: d,
            Name: d,
            RevisionId: d,
            RoutingConfig: (i) => sp(i, t),
          });
        return Object.assign(r, n), r;
      }),
      (V8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfig: l });
        return Object.assign(r, n), r;
      }),
      (j8 = async (e, t) => {
        if (e.statusCode !== 202 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AmazonManagedKafkaEventSourceConfig: l,
            BatchSize: U,
            BisectBatchOnFunctionError: Uo,
            DestinationConfig: l,
            DocumentDBEventSourceConfig: l,
            EventSourceArn: d,
            EventSourceMappingArn: d,
            FilterCriteria: l,
            FilterCriteriaError: l,
            FunctionArn: d,
            FunctionResponseTypes: l,
            KMSKeyArn: d,
            LastModified: (i) => P(ve(xe(i))),
            LastProcessingResult: d,
            MaximumBatchingWindowInSeconds: U,
            MaximumRecordAgeInSeconds: U,
            MaximumRetryAttempts: U,
            MetricsConfig: l,
            ParallelizationFactor: U,
            ProvisionedPollerConfig: l,
            Queues: l,
            ScalingConfig: l,
            SelfManagedEventSource: l,
            SelfManagedKafkaEventSourceConfig: l,
            SourceAccessConfigurations: l,
            StartingPosition: d,
            StartingPositionTimestamp: (i) => P(ve(xe(i))),
            State: d,
            StateTransitionReason: d,
            Topics: l,
            TumblingWindowInSeconds: U,
            UUID: d,
          });
        return Object.assign(r, n), r;
      }),
      (G8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Architectures: l,
            CodeSha256: d,
            CodeSize: Ft,
            DeadLetterConfig: l,
            Description: d,
            Environment: l,
            EphemeralStorage: l,
            FileSystemConfigs: l,
            FunctionArn: d,
            FunctionName: d,
            Handler: d,
            ImageConfigResponse: l,
            KMSKeyArn: d,
            LastModified: d,
            LastUpdateStatus: d,
            LastUpdateStatusReason: d,
            LastUpdateStatusReasonCode: d,
            Layers: l,
            LoggingConfig: l,
            MasterArn: d,
            MemorySize: U,
            PackageType: d,
            RevisionId: d,
            Role: d,
            Runtime: d,
            RuntimeVersionConfig: l,
            SigningJobArn: d,
            SigningProfileVersionArn: d,
            SnapStart: l,
            State: d,
            StateReason: d,
            StateReasonCode: d,
            Timeout: U,
            TracingConfig: l,
            Version: d,
            VpcConfig: l,
          });
        return Object.assign(r, n), r;
      }),
      (W8 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AuthType: d,
            Cors: l,
            CreationTime: d,
            FunctionArn: d,
            FunctionUrl: d,
            InvokeMode: d,
          });
        return Object.assign(r, n), r;
      }),
      (q8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (K8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (Y8 = async (e, t) => {
        if (e.statusCode !== 202 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AmazonManagedKafkaEventSourceConfig: l,
            BatchSize: U,
            BisectBatchOnFunctionError: Uo,
            DestinationConfig: l,
            DocumentDBEventSourceConfig: l,
            EventSourceArn: d,
            EventSourceMappingArn: d,
            FilterCriteria: l,
            FilterCriteriaError: l,
            FunctionArn: d,
            FunctionResponseTypes: l,
            KMSKeyArn: d,
            LastModified: (i) => P(ve(xe(i))),
            LastProcessingResult: d,
            MaximumBatchingWindowInSeconds: U,
            MaximumRecordAgeInSeconds: U,
            MaximumRetryAttempts: U,
            MetricsConfig: l,
            ParallelizationFactor: U,
            ProvisionedPollerConfig: l,
            Queues: l,
            ScalingConfig: l,
            SelfManagedEventSource: l,
            SelfManagedKafkaEventSourceConfig: l,
            SourceAccessConfigurations: l,
            StartingPosition: d,
            StartingPositionTimestamp: (i) => P(ve(xe(i))),
            State: d,
            StateTransitionReason: d,
            Topics: l,
            TumblingWindowInSeconds: U,
            UUID: d,
          });
        return Object.assign(r, n), r;
      }),
      (X8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (J8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (Q8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (Z8 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (e6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (t6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (r6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (o6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { AccountLimit: l, AccountUsage: l });
        return Object.assign(r, n), r;
      }),
      (n6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AliasArn: d,
            Description: d,
            FunctionVersion: d,
            Name: d,
            RevisionId: d,
            RoutingConfig: (i) => sp(i, t),
          });
        return Object.assign(r, n), r;
      }),
      (s6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfig: l });
        return Object.assign(r, n), r;
      }),
      (i6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AmazonManagedKafkaEventSourceConfig: l,
            BatchSize: U,
            BisectBatchOnFunctionError: Uo,
            DestinationConfig: l,
            DocumentDBEventSourceConfig: l,
            EventSourceArn: d,
            EventSourceMappingArn: d,
            FilterCriteria: l,
            FilterCriteriaError: l,
            FunctionArn: d,
            FunctionResponseTypes: l,
            KMSKeyArn: d,
            LastModified: (i) => P(ve(xe(i))),
            LastProcessingResult: d,
            MaximumBatchingWindowInSeconds: U,
            MaximumRecordAgeInSeconds: U,
            MaximumRetryAttempts: U,
            MetricsConfig: l,
            ParallelizationFactor: U,
            ProvisionedPollerConfig: l,
            Queues: l,
            ScalingConfig: l,
            SelfManagedEventSource: l,
            SelfManagedKafkaEventSourceConfig: l,
            SourceAccessConfigurations: l,
            StartingPosition: d,
            StartingPositionTimestamp: (i) => P(ve(xe(i))),
            State: d,
            StateTransitionReason: d,
            Topics: l,
            TumblingWindowInSeconds: U,
            UUID: d,
          });
        return Object.assign(r, n), r;
      }),
      (a6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Code: l,
            Concurrency: l,
            Configuration: l,
            Tags: l,
            TagsError: l,
          });
        return Object.assign(r, n), r;
      }),
      (c6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfigArn: d, FunctionName: d });
        return Object.assign(r, n), r;
      }),
      (m6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { ReservedConcurrentExecutions: U });
        return Object.assign(r, n), r;
      }),
      (d6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Architectures: l,
            CodeSha256: d,
            CodeSize: Ft,
            DeadLetterConfig: l,
            Description: d,
            Environment: l,
            EphemeralStorage: l,
            FileSystemConfigs: l,
            FunctionArn: d,
            FunctionName: d,
            Handler: d,
            ImageConfigResponse: l,
            KMSKeyArn: d,
            LastModified: d,
            LastUpdateStatus: d,
            LastUpdateStatusReason: d,
            LastUpdateStatusReasonCode: d,
            Layers: l,
            LoggingConfig: l,
            MasterArn: d,
            MemorySize: U,
            PackageType: d,
            RevisionId: d,
            Role: d,
            Runtime: d,
            RuntimeVersionConfig: l,
            SigningJobArn: d,
            SigningProfileVersionArn: d,
            SnapStart: l,
            State: d,
            StateReason: d,
            StateReasonCode: d,
            Timeout: U,
            TracingConfig: l,
            Version: d,
            VpcConfig: l,
          });
        return Object.assign(r, n), r;
      }),
      (f6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            DestinationConfig: l,
            FunctionArn: d,
            LastModified: (i) => P(ve(xe(i))),
            MaximumEventAgeInSeconds: U,
            MaximumRetryAttempts: U,
          });
        return Object.assign(r, n), r;
      }),
      (p6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { RecursiveLoop: d });
        return Object.assign(r, n), r;
      }),
      (u6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AuthType: d,
            Cors: l,
            CreationTime: d,
            FunctionArn: d,
            FunctionUrl: d,
            InvokeMode: d,
            LastModifiedTime: d,
          });
        return Object.assign(r, n), r;
      }),
      (l6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            CompatibleArchitectures: l,
            CompatibleRuntimes: l,
            Content: l,
            CreatedDate: d,
            Description: d,
            LayerArn: d,
            LayerVersionArn: d,
            LicenseInfo: d,
            Version: Ft,
          });
        return Object.assign(r, n), r;
      }),
      (h6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            CompatibleArchitectures: l,
            CompatibleRuntimes: l,
            Content: l,
            CreatedDate: d,
            Description: d,
            LayerArn: d,
            LayerVersionArn: d,
            LicenseInfo: d,
            Version: Ft,
          });
        return Object.assign(r, n), r;
      }),
      (g6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Policy: d, RevisionId: d });
        return Object.assign(r, n), r;
      }),
      (y6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Policy: d, RevisionId: d });
        return Object.assign(r, n), r;
      }),
      (x6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AllocatedProvisionedConcurrentExecutions: U,
            AvailableProvisionedConcurrentExecutions: U,
            LastModified: d,
            RequestedProvisionedConcurrentExecutions: U,
            Status: d,
            StatusReason: d,
          });
        return Object.assign(r, n), r;
      }),
      (E6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            FunctionArn: d,
            RuntimeVersionArn: d,
            UpdateRuntimeOn: d,
          });
        return Object.assign(r, n), r;
      }),
      (S6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({
            $metadata: A(e),
            [Ute]: [, e.headers[Yte]],
            [Hte]: [, e.headers[Xte]],
            [rq]: [, e.headers[iq]],
          }),
          o = await ee(e.body, t);
        return (r.Payload = o), y(r, { StatusCode: [, e.statusCode] }), r;
      }),
      (C6 = async (e, t) => {
        if (e.statusCode !== 202 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return y(r, { Status: [, e.statusCode] }), await ee(e.body, t), r;
      }),
      (b6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({
            $metadata: A(e),
            [rq]: [, e.headers[iq]],
            [zte]: [, e.headers[jte]],
          }),
          o = e.body;
        return (
          (r.EventStream = _te(o, t)), y(r, { StatusCode: [, e.statusCode] }), r
        );
      }),
      (w6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Aliases: (i) => Fte(i, t), NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (T6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfigs: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (A6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { EventSourceMappings: (i) => kte(i, t), NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (_6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            FunctionEventInvokeConfigs: (i) => $te(i, t),
            NextMarker: d,
          });
        return Object.assign(r, n), r;
      }),
      (R6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Functions: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (v6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { FunctionArns: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (I6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { FunctionUrlConfigs: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (P6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Layers: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (N6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { LayerVersions: l, NextMarker: d });
        return Object.assign(r, n), r;
      }),
      (O6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { NextMarker: d, ProvisionedConcurrencyConfigs: l });
        return Object.assign(r, n), r;
      }),
      (D6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { Tags: l });
        return Object.assign(r, n), r;
      }),
      (F6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { NextMarker: d, Versions: l });
        return Object.assign(r, n), r;
      }),
      (M6 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            CompatibleArchitectures: l,
            CompatibleRuntimes: l,
            Content: l,
            CreatedDate: d,
            Description: d,
            LayerArn: d,
            LayerVersionArn: d,
            LicenseInfo: d,
            Version: Ft,
          });
        return Object.assign(r, n), r;
      }),
      (k6 = async (e, t) => {
        if (e.statusCode !== 201 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Architectures: l,
            CodeSha256: d,
            CodeSize: Ft,
            DeadLetterConfig: l,
            Description: d,
            Environment: l,
            EphemeralStorage: l,
            FileSystemConfigs: l,
            FunctionArn: d,
            FunctionName: d,
            Handler: d,
            ImageConfigResponse: l,
            KMSKeyArn: d,
            LastModified: d,
            LastUpdateStatus: d,
            LastUpdateStatusReason: d,
            LastUpdateStatusReasonCode: d,
            Layers: l,
            LoggingConfig: l,
            MasterArn: d,
            MemorySize: U,
            PackageType: d,
            RevisionId: d,
            Role: d,
            Runtime: d,
            RuntimeVersionConfig: l,
            SigningJobArn: d,
            SigningProfileVersionArn: d,
            SnapStart: l,
            State: d,
            StateReason: d,
            StateReasonCode: d,
            Timeout: U,
            TracingConfig: l,
            Version: d,
            VpcConfig: l,
          });
        return Object.assign(r, n), r;
      }),
      (L6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfigArn: d, FunctionName: d });
        return Object.assign(r, n), r;
      }),
      ($6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { ReservedConcurrentExecutions: U });
        return Object.assign(r, n), r;
      }),
      (U6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            DestinationConfig: l,
            FunctionArn: d,
            LastModified: (i) => P(ve(xe(i))),
            MaximumEventAgeInSeconds: U,
            MaximumRetryAttempts: U,
          });
        return Object.assign(r, n), r;
      }),
      (B6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { RecursiveLoop: d });
        return Object.assign(r, n), r;
      }),
      (H6 = async (e, t) => {
        if (e.statusCode !== 202 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AllocatedProvisionedConcurrentExecutions: U,
            AvailableProvisionedConcurrentExecutions: U,
            LastModified: d,
            RequestedProvisionedConcurrentExecutions: U,
            Status: d,
            StatusReason: d,
          });
        return Object.assign(r, n), r;
      }),
      (z6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            FunctionArn: d,
            RuntimeVersionArn: d,
            UpdateRuntimeOn: d,
          });
        return Object.assign(r, n), r;
      }),
      (V6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (j6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (G6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (W6 = async (e, t) => {
        if (e.statusCode !== 204 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) });
        return await ee(e.body, t), r;
      }),
      (q6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AliasArn: d,
            Description: d,
            FunctionVersion: d,
            Name: d,
            RevisionId: d,
            RoutingConfig: (i) => sp(i, t),
          });
        return Object.assign(r, n), r;
      }),
      (K6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, { CodeSigningConfig: l });
        return Object.assign(r, n), r;
      }),
      (Y6 = async (e, t) => {
        if (e.statusCode !== 202 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AmazonManagedKafkaEventSourceConfig: l,
            BatchSize: U,
            BisectBatchOnFunctionError: Uo,
            DestinationConfig: l,
            DocumentDBEventSourceConfig: l,
            EventSourceArn: d,
            EventSourceMappingArn: d,
            FilterCriteria: l,
            FilterCriteriaError: l,
            FunctionArn: d,
            FunctionResponseTypes: l,
            KMSKeyArn: d,
            LastModified: (i) => P(ve(xe(i))),
            LastProcessingResult: d,
            MaximumBatchingWindowInSeconds: U,
            MaximumRecordAgeInSeconds: U,
            MaximumRetryAttempts: U,
            MetricsConfig: l,
            ParallelizationFactor: U,
            ProvisionedPollerConfig: l,
            Queues: l,
            ScalingConfig: l,
            SelfManagedEventSource: l,
            SelfManagedKafkaEventSourceConfig: l,
            SourceAccessConfigurations: l,
            StartingPosition: d,
            StartingPositionTimestamp: (i) => P(ve(xe(i))),
            State: d,
            StateTransitionReason: d,
            Topics: l,
            TumblingWindowInSeconds: U,
            UUID: d,
          });
        return Object.assign(r, n), r;
      }),
      (X6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Architectures: l,
            CodeSha256: d,
            CodeSize: Ft,
            DeadLetterConfig: l,
            Description: d,
            Environment: l,
            EphemeralStorage: l,
            FileSystemConfigs: l,
            FunctionArn: d,
            FunctionName: d,
            Handler: d,
            ImageConfigResponse: l,
            KMSKeyArn: d,
            LastModified: d,
            LastUpdateStatus: d,
            LastUpdateStatusReason: d,
            LastUpdateStatusReasonCode: d,
            Layers: l,
            LoggingConfig: l,
            MasterArn: d,
            MemorySize: U,
            PackageType: d,
            RevisionId: d,
            Role: d,
            Runtime: d,
            RuntimeVersionConfig: l,
            SigningJobArn: d,
            SigningProfileVersionArn: d,
            SnapStart: l,
            State: d,
            StateReason: d,
            StateReasonCode: d,
            Timeout: U,
            TracingConfig: l,
            Version: d,
            VpcConfig: l,
          });
        return Object.assign(r, n), r;
      }),
      (J6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            Architectures: l,
            CodeSha256: d,
            CodeSize: Ft,
            DeadLetterConfig: l,
            Description: d,
            Environment: l,
            EphemeralStorage: l,
            FileSystemConfigs: l,
            FunctionArn: d,
            FunctionName: d,
            Handler: d,
            ImageConfigResponse: l,
            KMSKeyArn: d,
            LastModified: d,
            LastUpdateStatus: d,
            LastUpdateStatusReason: d,
            LastUpdateStatusReasonCode: d,
            Layers: l,
            LoggingConfig: l,
            MasterArn: d,
            MemorySize: U,
            PackageType: d,
            RevisionId: d,
            Role: d,
            Runtime: d,
            RuntimeVersionConfig: l,
            SigningJobArn: d,
            SigningProfileVersionArn: d,
            SnapStart: l,
            State: d,
            StateReason: d,
            StateReasonCode: d,
            Timeout: U,
            TracingConfig: l,
            Version: d,
            VpcConfig: l,
          });
        return Object.assign(r, n), r;
      }),
      (Q6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            DestinationConfig: l,
            FunctionArn: d,
            LastModified: (i) => P(ve(xe(i))),
            MaximumEventAgeInSeconds: U,
            MaximumRetryAttempts: U,
          });
        return Object.assign(r, n), r;
      }),
      (Z6 = async (e, t) => {
        if (e.statusCode !== 200 && e.statusCode >= 300) return L(e, t);
        let r = y({ $metadata: A(e) }),
          o = P(z(await B(e.body, t)), "body"),
          n = w(o, {
            AuthType: d,
            Cors: l,
            CreationTime: d,
            FunctionArn: d,
            FunctionUrl: d,
            InvokeMode: d,
            LastModifiedTime: d,
          });
        return Object.assign(r, n), r;
      }),
      (L = async (e, t) => {
        let r = { ...e, body: await Wo(e.body, t) },
          o = qo(e, r.body);
        switch (o) {
          case "InvalidParameterValueException":
          case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await ete(r, t);
          case "PolicyLengthExceededException":
          case "com.amazonaws.lambda#PolicyLengthExceededException":
            throw await dte(r, t);
          case "PreconditionFailedException":
          case "com.amazonaws.lambda#PreconditionFailedException":
            throw await fte(r, t);
          case "ResourceConflictException":
          case "com.amazonaws.lambda#ResourceConflictException":
            throw await hte(r, t);
          case "ResourceNotFoundException":
          case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await yte(r, t);
          case "ServiceException":
          case "com.amazonaws.lambda#ServiceException":
            throw await Ete(r, t);
          case "TooManyRequestsException":
          case "com.amazonaws.lambda#TooManyRequestsException":
            throw await Tte(r, t);
          case "CodeSigningConfigNotFoundException":
          case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await zee(r, t);
          case "CodeStorageExceededException":
          case "com.amazonaws.lambda#CodeStorageExceededException":
            throw await Vee(r, t);
          case "CodeVerificationFailedException":
          case "com.amazonaws.lambda#CodeVerificationFailedException":
            throw await jee(r, t);
          case "InvalidCodeSignatureException":
          case "com.amazonaws.lambda#InvalidCodeSignatureException":
            throw await Zee(r, t);
          case "ResourceInUseException":
          case "com.amazonaws.lambda#ResourceInUseException":
            throw await gte(r, t);
          case "ProvisionedConcurrencyConfigNotFoundException":
          case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
            throw await pte(r, t);
          case "EC2AccessDeniedException":
          case "com.amazonaws.lambda#EC2AccessDeniedException":
            throw await Gee(r, t);
          case "EC2ThrottledException":
          case "com.amazonaws.lambda#EC2ThrottledException":
            throw await Wee(r, t);
          case "EC2UnexpectedException":
          case "com.amazonaws.lambda#EC2UnexpectedException":
            throw await qee(r, t);
          case "EFSIOException":
          case "com.amazonaws.lambda#EFSIOException":
            throw await Kee(r, t);
          case "EFSMountConnectivityException":
          case "com.amazonaws.lambda#EFSMountConnectivityException":
            throw await Yee(r, t);
          case "EFSMountFailureException":
          case "com.amazonaws.lambda#EFSMountFailureException":
            throw await Xee(r, t);
          case "EFSMountTimeoutException":
          case "com.amazonaws.lambda#EFSMountTimeoutException":
            throw await Jee(r, t);
          case "ENILimitReachedException":
          case "com.amazonaws.lambda#ENILimitReachedException":
            throw await Qee(r, t);
          case "InvalidRequestContentException":
          case "com.amazonaws.lambda#InvalidRequestContentException":
            throw await tte(r, t);
          case "InvalidRuntimeException":
          case "com.amazonaws.lambda#InvalidRuntimeException":
            throw await rte(r, t);
          case "InvalidSecurityGroupIDException":
          case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
            throw await ote(r, t);
          case "InvalidSubnetIDException":
          case "com.amazonaws.lambda#InvalidSubnetIDException":
            throw await nte(r, t);
          case "InvalidZipFileException":
          case "com.amazonaws.lambda#InvalidZipFileException":
            throw await ste(r, t);
          case "KMSAccessDeniedException":
          case "com.amazonaws.lambda#KMSAccessDeniedException":
            throw await ite(r, t);
          case "KMSDisabledException":
          case "com.amazonaws.lambda#KMSDisabledException":
            throw await ate(r, t);
          case "KMSInvalidStateException":
          case "com.amazonaws.lambda#KMSInvalidStateException":
            throw await cte(r, t);
          case "KMSNotFoundException":
          case "com.amazonaws.lambda#KMSNotFoundException":
            throw await mte(r, t);
          case "RecursiveInvocationException":
          case "com.amazonaws.lambda#RecursiveInvocationException":
            throw await ute(r, t);
          case "RequestTooLargeException":
          case "com.amazonaws.lambda#RequestTooLargeException":
            throw await lte(r, t);
          case "ResourceNotReadyException":
          case "com.amazonaws.lambda#ResourceNotReadyException":
            throw await xte(r, t);
          case "SnapStartException":
          case "com.amazonaws.lambda#SnapStartException":
            throw await Ste(r, t);
          case "SnapStartNotReadyException":
          case "com.amazonaws.lambda#SnapStartNotReadyException":
            throw await Cte(r, t);
          case "SnapStartTimeoutException":
          case "com.amazonaws.lambda#SnapStartTimeoutException":
            throw await bte(r, t);
          case "SubnetIPAddressLimitReachedException":
          case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
            throw await wte(r, t);
          case "UnsupportedMediaTypeException":
          case "com.amazonaws.lambda#UnsupportedMediaTypeException":
            throw await Ate(r, t);
          default:
            let n = r.body;
            return Hee({ output: e, parsedBody: n, errorCode: o });
        }
      }),
      (Hee = Lm(j)),
      (zee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ki({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Vee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Li({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (jee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new $i({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Gee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new zi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Wee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Vi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (qee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { EC2ErrorCode: d, Message: d, Type: d });
        Object.assign(r, n);
        let i = new ji({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Kee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Gi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Yee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Wi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Xee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new qi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Jee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Ki({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Qee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Yi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Zee = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Ui({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ete = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Ii({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (tte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Xi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (rte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Ji({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ote = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Qi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (nte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Zi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ste = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ea({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ite = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ta({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ate = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ra({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (cte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new oa({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (mte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new na({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (dte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Pi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (fte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Ni({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (pte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Hi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (ute = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new sa({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (lte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new ia({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (hte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new Oi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (gte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Bi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (yte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Di({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (xte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new aa({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Ete = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new Fi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Ste = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ca({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Cte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new ma({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (bte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new da({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (wte = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Message: d, Type: d });
        Object.assign(r, n);
        let i = new fa({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Tte = async (e, t) => {
        let r = y({ [Wte]: [, e.headers[qte]] }),
          o = e.body,
          n = w(o, { Reason: d, Type: d, message: d });
        Object.assign(r, n);
        let i = new Mi({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (Ate = async (e, t) => {
        let r = y({}),
          o = e.body,
          n = w(o, { Type: d, message: d });
        Object.assign(r, n);
        let i = new pa({ $metadata: A(e), ...r });
        return V(i, e.body);
      }),
      (_te = (e, t) =>
        t.eventStreamMarshaller.deserialize(e, async (r) =>
          r.PayloadChunk != null
            ? { PayloadChunk: await Rte(r.PayloadChunk, t) }
            : r.InvokeComplete != null
              ? { InvokeComplete: await vte(r.InvokeComplete, t) }
              : { $unknown: r }
        )),
      (Rte = async (e, t) => {
        let r = {};
        return (r.Payload = e.body), r;
      }),
      (vte = async (e, t) => {
        let r = {},
          o = await B(e.body, t);
        return Object.assign(r, l(o)), r;
      }),
      (Ite = (e, t) =>
        Object.entries(e).reduce(
          (r, [o, n]) => (n === null || (r[o] = TM(n)), r),
          {}
        )),
      (eq = (e, t) => w(e, { AdditionalVersionWeights: (r) => Ite(r, t) })),
      (Pte = (e, t) =>
        w(e, {
          ImageUri: [],
          S3Bucket: [],
          S3Key: [],
          S3ObjectVersion: [],
          SourceKMSKeyArn: [],
          ZipFile: t.base64Encoder,
        })),
      (Nte = (e, t) =>
        w(e, {
          S3Bucket: [],
          S3Key: [],
          S3ObjectVersion: [],
          ZipFile: t.base64Encoder,
        })),
      (Ote = (e, t) =>
        Object.entries(e).reduce(
          (r, [o, n]) => (n === null || (r[o] = VA(n)), r),
          {}
        )),
      (Dte = (e, t) =>
        w(e, {
          AliasArn: d,
          Description: d,
          FunctionVersion: d,
          Name: d,
          RevisionId: d,
          RoutingConfig: (r) => sp(r, t),
        })),
      (Fte = (e, t) =>
        (e || []).filter((o) => o != null).map((o) => Dte(o, t))),
      (sp = (e, t) => w(e, { AdditionalVersionWeights: (r) => Ote(r, t) })),
      (Mte = (e, t) =>
        w(e, {
          AmazonManagedKafkaEventSourceConfig: l,
          BatchSize: U,
          BisectBatchOnFunctionError: Uo,
          DestinationConfig: l,
          DocumentDBEventSourceConfig: l,
          EventSourceArn: d,
          EventSourceMappingArn: d,
          FilterCriteria: l,
          FilterCriteriaError: l,
          FunctionArn: d,
          FunctionResponseTypes: l,
          KMSKeyArn: d,
          LastModified: (r) => P(ve(xe(r))),
          LastProcessingResult: d,
          MaximumBatchingWindowInSeconds: U,
          MaximumRecordAgeInSeconds: U,
          MaximumRetryAttempts: U,
          MetricsConfig: l,
          ParallelizationFactor: U,
          ProvisionedPollerConfig: l,
          Queues: l,
          ScalingConfig: l,
          SelfManagedEventSource: l,
          SelfManagedKafkaEventSourceConfig: l,
          SourceAccessConfigurations: l,
          StartingPosition: d,
          StartingPositionTimestamp: (r) => P(ve(xe(r))),
          State: d,
          StateTransitionReason: d,
          Topics: l,
          TumblingWindowInSeconds: U,
          UUID: d,
        })),
      (kte = (e, t) =>
        (e || []).filter((o) => o != null).map((o) => Mte(o, t))),
      (Lte = (e, t) =>
        w(e, {
          DestinationConfig: l,
          FunctionArn: d,
          LastModified: (r) => P(ve(xe(r))),
          MaximumEventAgeInSeconds: U,
          MaximumRetryAttempts: U,
        })),
      ($te = (e, t) =>
        (e || []).filter((o) => o != null).map((o) => Lte(o, t))),
      (A = (e) => ({
        httpStatusCode: e.statusCode,
        requestId:
          e.headers["x-amzn-requestid"] ??
          e.headers["x-amzn-request-id"] ??
          e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"],
      })),
      (bW = "Arn"),
      (rp = "CompatibleArchitecture"),
      (tq = "ClientContext"),
      (op = "CompatibleRuntime"),
      (wW = "EventSourceArn"),
      (rq = "ExecutedVersion"),
      (Ute = "FunctionError"),
      (TW = "FunctionName"),
      (np = "FunctionVersion"),
      (oq = "InvocationType"),
      (Bte = "List"),
      (Hte = "LogResult"),
      (nq = "LogType"),
      (fe = "Marker"),
      (pe = "MaxItems"),
      (AW = "MasterRegion"),
      (G = "Qualifier"),
      (ts = "RevisionId"),
      (zte = "ResponseStreamContentType"),
      (Vte = "TagKeys"),
      (jte = "content-type"),
      (Gte = "find"),
      (Wte = "retryAfterSeconds"),
      (qte = "retry-after"),
      (Kte = "tagKeys"),
      (sq = "x-amz-client-context"),
      (iq = "x-amz-executed-version"),
      (Yte = "x-amz-function-error"),
      (aq = "x-amz-invocation-type"),
      (Xte = "x-amz-log-result"),
      (cq = "x-amz-log-type");
  });
var ua,
  bE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ua = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "AddLayerVersionPermission", {})
        .n("LambdaClient", "AddLayerVersionPermissionCommand")
        .f(void 0, void 0)
        .ser(_W)
        .de(B8)
        .build()
    ) {};
  });
var la,
  wE = s(() => {
    O();
    F();
    I();
    M();
    k();
    la = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "AddPermission", {})
        .n("LambdaClient", "AddPermissionCommand")
        .f(void 0, void 0)
        .ser(RW)
        .de(H8)
        .build()
    ) {};
  });
var ha,
  TE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ha = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "CreateAlias", {})
        .n("LambdaClient", "CreateAliasCommand")
        .f(void 0, void 0)
        .ser(vW)
        .de(z8)
        .build()
    ) {};
  });
var ga,
  AE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ga = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "CreateCodeSigningConfig", {})
        .n("LambdaClient", "CreateCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(IW)
        .de(V8)
        .build()
    ) {};
  });
var ya,
  _E = s(() => {
    O();
    F();
    I();
    M();
    k();
    ya = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "CreateEventSourceMapping", {})
        .n("LambdaClient", "CreateEventSourceMappingCommand")
        .f(void 0, void 0)
        .ser(PW)
        .de(j8)
        .build()
    ) {};
  });
var xa,
  RE = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    xa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "CreateFunction", {})
        .n("LambdaClient", "CreateFunctionCommand")
        .f(dE, Je)
        .ser(NW)
        .de(G8)
        .build()
    ) {};
  });
var Ea,
  vE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ea = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "CreateFunctionUrlConfig", {})
        .n("LambdaClient", "CreateFunctionUrlConfigCommand")
        .f(void 0, void 0)
        .ser(OW)
        .de(W8)
        .build()
    ) {};
  });
var Sa,
  IE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Sa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteAlias", {})
        .n("LambdaClient", "DeleteAliasCommand")
        .f(void 0, void 0)
        .ser(DW)
        .de(q8)
        .build()
    ) {};
  });
var Ca,
  PE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ca = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteCodeSigningConfig", {})
        .n("LambdaClient", "DeleteCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(FW)
        .de(K8)
        .build()
    ) {};
  });
var ba,
  NE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ba = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteEventSourceMapping", {})
        .n("LambdaClient", "DeleteEventSourceMappingCommand")
        .f(void 0, void 0)
        .ser(MW)
        .de(Y8)
        .build()
    ) {};
  });
var wa,
  OE = s(() => {
    O();
    F();
    I();
    M();
    k();
    wa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteFunctionCodeSigningConfig", {})
        .n("LambdaClient", "DeleteFunctionCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(LW)
        .de(J8)
        .build()
    ) {};
  });
var Ta,
  DE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ta = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteFunction", {})
        .n("LambdaClient", "DeleteFunctionCommand")
        .f(void 0, void 0)
        .ser(kW)
        .de(X8)
        .build()
    ) {};
  });
var Aa,
  FE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Aa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteFunctionConcurrency", {})
        .n("LambdaClient", "DeleteFunctionConcurrencyCommand")
        .f(void 0, void 0)
        .ser($W)
        .de(Q8)
        .build()
    ) {};
  });
var _a,
  ME = s(() => {
    O();
    F();
    I();
    M();
    k();
    _a = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteFunctionEventInvokeConfig", {})
        .n("LambdaClient", "DeleteFunctionEventInvokeConfigCommand")
        .f(void 0, void 0)
        .ser(UW)
        .de(Z8)
        .build()
    ) {};
  });
var Ra,
  kE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ra = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteFunctionUrlConfig", {})
        .n("LambdaClient", "DeleteFunctionUrlConfigCommand")
        .f(void 0, void 0)
        .ser(BW)
        .de(e6)
        .build()
    ) {};
  });
var va,
  LE = s(() => {
    O();
    F();
    I();
    M();
    k();
    va = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteLayerVersion", {})
        .n("LambdaClient", "DeleteLayerVersionCommand")
        .f(void 0, void 0)
        .ser(HW)
        .de(t6)
        .build()
    ) {};
  });
var Ia,
  $E = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ia = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "DeleteProvisionedConcurrencyConfig", {})
        .n("LambdaClient", "DeleteProvisionedConcurrencyConfigCommand")
        .f(void 0, void 0)
        .ser(zW)
        .de(r6)
        .build()
    ) {};
  });
var Pa,
  UE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Pa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetAccountSettings", {})
        .n("LambdaClient", "GetAccountSettingsCommand")
        .f(void 0, void 0)
        .ser(VW)
        .de(o6)
        .build()
    ) {};
  });
var Na,
  BE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Na = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetAlias", {})
        .n("LambdaClient", "GetAliasCommand")
        .f(void 0, void 0)
        .ser(jW)
        .de(n6)
        .build()
    ) {};
  });
var Oa,
  HE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Oa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetCodeSigningConfig", {})
        .n("LambdaClient", "GetCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(GW)
        .de(s6)
        .build()
    ) {};
  });
var Da,
  zE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Da = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetEventSourceMapping", {})
        .n("LambdaClient", "GetEventSourceMappingCommand")
        .f(void 0, void 0)
        .ser(WW)
        .de(i6)
        .build()
    ) {};
  });
var Fa,
  VE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Fa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionCodeSigningConfig", {})
        .n("LambdaClient", "GetFunctionCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(KW)
        .de(c6)
        .build()
    ) {};
  });
var vt,
  rs = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    vt = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunction", {})
        .n("LambdaClient", "GetFunctionCommand")
        .f(void 0, fE)
        .ser(qW)
        .de(a6)
        .build()
    ) {};
  });
var Ma,
  jE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ma = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionConcurrency", {})
        .n("LambdaClient", "GetFunctionConcurrencyCommand")
        .f(void 0, void 0)
        .ser(YW)
        .de(m6)
        .build()
    ) {};
  });
var It,
  os = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    It = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionConfiguration", {})
        .n("LambdaClient", "GetFunctionConfigurationCommand")
        .f(void 0, Je)
        .ser(XW)
        .de(d6)
        .build()
    ) {};
  });
var ka,
  GE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ka = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionEventInvokeConfig", {})
        .n("LambdaClient", "GetFunctionEventInvokeConfigCommand")
        .f(void 0, void 0)
        .ser(JW)
        .de(f6)
        .build()
    ) {};
  });
var La,
  WE = s(() => {
    O();
    F();
    I();
    M();
    k();
    La = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionRecursionConfig", {})
        .n("LambdaClient", "GetFunctionRecursionConfigCommand")
        .f(void 0, void 0)
        .ser(QW)
        .de(p6)
        .build()
    ) {};
  });
var $a,
  qE = s(() => {
    O();
    F();
    I();
    M();
    k();
    $a = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetFunctionUrlConfig", {})
        .n("LambdaClient", "GetFunctionUrlConfigCommand")
        .f(void 0, void 0)
        .ser(ZW)
        .de(u6)
        .build()
    ) {};
  });
var Ua,
  KE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ua = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetLayerVersionByArn", {})
        .n("LambdaClient", "GetLayerVersionByArnCommand")
        .f(void 0, void 0)
        .ser(t8)
        .de(h6)
        .build()
    ) {};
  });
var Ba,
  YE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ba = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetLayerVersion", {})
        .n("LambdaClient", "GetLayerVersionCommand")
        .f(void 0, void 0)
        .ser(e8)
        .de(l6)
        .build()
    ) {};
  });
var Ha,
  XE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ha = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetLayerVersionPolicy", {})
        .n("LambdaClient", "GetLayerVersionPolicyCommand")
        .f(void 0, void 0)
        .ser(r8)
        .de(g6)
        .build()
    ) {};
  });
var za,
  JE = s(() => {
    O();
    F();
    I();
    M();
    k();
    za = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetPolicy", {})
        .n("LambdaClient", "GetPolicyCommand")
        .f(void 0, void 0)
        .ser(o8)
        .de(y6)
        .build()
    ) {};
  });
var Va,
  QE = s(() => {
    O();
    F();
    I();
    M();
    k();
    Va = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetProvisionedConcurrencyConfig", {})
        .n("LambdaClient", "GetProvisionedConcurrencyConfigCommand")
        .f(void 0, void 0)
        .ser(n8)
        .de(x6)
        .build()
    ) {};
  });
var ja,
  ZE = s(() => {
    O();
    F();
    I();
    M();
    k();
    ja = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "GetRuntimeManagementConfig", {})
        .n("LambdaClient", "GetRuntimeManagementConfigCommand")
        .f(void 0, void 0)
        .ser(s8)
        .de(E6)
        .build()
    ) {};
  });
var Ga,
  eS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    Ga = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "InvokeAsync", {})
        .n("LambdaClient", "InvokeAsyncCommand")
        .f(lE, void 0)
        .ser(a8)
        .de(C6)
        .build()
    ) {};
  });
var Wa,
  tS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    Wa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "Invoke", {})
        .n("LambdaClient", "InvokeCommand")
        .f(pE, uE)
        .ser(i8)
        .de(S6)
        .build()
    ) {};
  });
var qa,
  rS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    qa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "InvokeWithResponseStream", {
          eventStream: { output: !0 },
        })
        .n("LambdaClient", "InvokeWithResponseStreamCommand")
        .f(hE, gE)
        .ser(c8)
        .de(b6)
        .build()
    ) {};
  });
var Eo,
  ip = s(() => {
    O();
    F();
    I();
    M();
    k();
    Eo = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListAliases", {})
        .n("LambdaClient", "ListAliasesCommand")
        .f(void 0, void 0)
        .ser(m8)
        .de(w6)
        .build()
    ) {};
  });
var So,
  ap = s(() => {
    O();
    F();
    I();
    M();
    k();
    So = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListCodeSigningConfigs", {})
        .n("LambdaClient", "ListCodeSigningConfigsCommand")
        .f(void 0, void 0)
        .ser(d8)
        .de(T6)
        .build()
    ) {};
  });
var Co,
  cp = s(() => {
    O();
    F();
    I();
    M();
    k();
    Co = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListEventSourceMappings", {})
        .n("LambdaClient", "ListEventSourceMappingsCommand")
        .f(void 0, void 0)
        .ser(f8)
        .de(A6)
        .build()
    ) {};
  });
var bo,
  mp = s(() => {
    O();
    F();
    I();
    M();
    k();
    bo = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListFunctionEventInvokeConfigs", {})
        .n("LambdaClient", "ListFunctionEventInvokeConfigsCommand")
        .f(void 0, void 0)
        .ser(p8)
        .de(_6)
        .build()
    ) {};
  });
var wo,
  dp = s(() => {
    O();
    F();
    I();
    M();
    k();
    wo = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListFunctionsByCodeSigningConfig", {})
        .n("LambdaClient", "ListFunctionsByCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(l8)
        .de(v6)
        .build()
    ) {};
  });
var To,
  fp = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    To = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListFunctions", {})
        .n("LambdaClient", "ListFunctionsCommand")
        .f(void 0, yE)
        .ser(u8)
        .de(R6)
        .build()
    ) {};
  });
var Ao,
  pp = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ao = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListFunctionUrlConfigs", {})
        .n("LambdaClient", "ListFunctionUrlConfigsCommand")
        .f(void 0, void 0)
        .ser(h8)
        .de(I6)
        .build()
    ) {};
  });
var _o,
  up = s(() => {
    O();
    F();
    I();
    M();
    k();
    _o = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListLayers", {})
        .n("LambdaClient", "ListLayersCommand")
        .f(void 0, void 0)
        .ser(g8)
        .de(P6)
        .build()
    ) {};
  });
var Ro,
  lp = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ro = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListLayerVersions", {})
        .n("LambdaClient", "ListLayerVersionsCommand")
        .f(void 0, void 0)
        .ser(y8)
        .de(N6)
        .build()
    ) {};
  });
var vo,
  hp = s(() => {
    O();
    F();
    I();
    M();
    k();
    vo = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListProvisionedConcurrencyConfigs", {})
        .n("LambdaClient", "ListProvisionedConcurrencyConfigsCommand")
        .f(void 0, void 0)
        .ser(x8)
        .de(O6)
        .build()
    ) {};
  });
var Ka,
  oS = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ka = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListTags", {})
        .n("LambdaClient", "ListTagsCommand")
        .f(void 0, void 0)
        .ser(E8)
        .de(D6)
        .build()
    ) {};
  });
var Io,
  gp = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    Io = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "ListVersionsByFunction", {})
        .n("LambdaClient", "ListVersionsByFunctionCommand")
        .f(void 0, xE)
        .ser(S8)
        .de(F6)
        .build()
    ) {};
  });
var Ya,
  nS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    Ya = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PublishLayerVersion", {})
        .n("LambdaClient", "PublishLayerVersionCommand")
        .f(EE, void 0)
        .ser(C8)
        .de(M6)
        .build()
    ) {};
  });
var Xa,
  sS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    Xa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PublishVersion", {})
        .n("LambdaClient", "PublishVersionCommand")
        .f(void 0, Je)
        .ser(b8)
        .de(k6)
        .build()
    ) {};
  });
var Ja,
  iS = s(() => {
    O();
    F();
    I();
    M();
    k();
    Ja = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutFunctionCodeSigningConfig", {})
        .n("LambdaClient", "PutFunctionCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(w8)
        .de(L6)
        .build()
    ) {};
  });
var Qa,
  aS = s(() => {
    O();
    F();
    I();
    M();
    k();
    Qa = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutFunctionConcurrency", {})
        .n("LambdaClient", "PutFunctionConcurrencyCommand")
        .f(void 0, void 0)
        .ser(T8)
        .de($6)
        .build()
    ) {};
  });
var Za,
  cS = s(() => {
    O();
    F();
    I();
    M();
    k();
    Za = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutFunctionEventInvokeConfig", {})
        .n("LambdaClient", "PutFunctionEventInvokeConfigCommand")
        .f(void 0, void 0)
        .ser(A8)
        .de(U6)
        .build()
    ) {};
  });
var ec,
  mS = s(() => {
    O();
    F();
    I();
    M();
    k();
    ec = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutFunctionRecursionConfig", {})
        .n("LambdaClient", "PutFunctionRecursionConfigCommand")
        .f(void 0, void 0)
        .ser(_8)
        .de(B6)
        .build()
    ) {};
  });
var tc,
  dS = s(() => {
    O();
    F();
    I();
    M();
    k();
    tc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutProvisionedConcurrencyConfig", {})
        .n("LambdaClient", "PutProvisionedConcurrencyConfigCommand")
        .f(void 0, void 0)
        .ser(R8)
        .de(H6)
        .build()
    ) {};
  });
var rc,
  fS = s(() => {
    O();
    F();
    I();
    M();
    k();
    rc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "PutRuntimeManagementConfig", {})
        .n("LambdaClient", "PutRuntimeManagementConfigCommand")
        .f(void 0, void 0)
        .ser(v8)
        .de(z6)
        .build()
    ) {};
  });
var oc,
  pS = s(() => {
    O();
    F();
    I();
    M();
    k();
    oc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "RemoveLayerVersionPermission", {})
        .n("LambdaClient", "RemoveLayerVersionPermissionCommand")
        .f(void 0, void 0)
        .ser(I8)
        .de(V6)
        .build()
    ) {};
  });
var nc,
  uS = s(() => {
    O();
    F();
    I();
    M();
    k();
    nc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "RemovePermission", {})
        .n("LambdaClient", "RemovePermissionCommand")
        .f(void 0, void 0)
        .ser(P8)
        .de(j6)
        .build()
    ) {};
  });
var sc,
  lS = s(() => {
    O();
    F();
    I();
    M();
    k();
    sc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "TagResource", {})
        .n("LambdaClient", "TagResourceCommand")
        .f(void 0, void 0)
        .ser(N8)
        .de(G6)
        .build()
    ) {};
  });
var ic,
  hS = s(() => {
    O();
    F();
    I();
    M();
    k();
    ic = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UntagResource", {})
        .n("LambdaClient", "UntagResourceCommand")
        .f(void 0, void 0)
        .ser(O8)
        .de(W6)
        .build()
    ) {};
  });
var ac,
  gS = s(() => {
    O();
    F();
    I();
    M();
    k();
    ac = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateAlias", {})
        .n("LambdaClient", "UpdateAliasCommand")
        .f(void 0, void 0)
        .ser(D8)
        .de(q6)
        .build()
    ) {};
  });
var cc,
  yS = s(() => {
    O();
    F();
    I();
    M();
    k();
    cc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateCodeSigningConfig", {})
        .n("LambdaClient", "UpdateCodeSigningConfigCommand")
        .f(void 0, void 0)
        .ser(F8)
        .de(K6)
        .build()
    ) {};
  });
var mc,
  xS = s(() => {
    O();
    F();
    I();
    M();
    k();
    mc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateEventSourceMapping", {})
        .n("LambdaClient", "UpdateEventSourceMappingCommand")
        .f(void 0, void 0)
        .ser(M8)
        .de(Y6)
        .build()
    ) {};
  });
var dc,
  ES = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    dc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateFunctionCode", {})
        .n("LambdaClient", "UpdateFunctionCodeCommand")
        .f(SE, Je)
        .ser(k8)
        .de(X6)
        .build()
    ) {};
  });
var fc,
  SS = s(() => {
    O();
    F();
    I();
    M();
    ze();
    k();
    fc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateFunctionConfiguration", {})
        .n("LambdaClient", "UpdateFunctionConfigurationCommand")
        .f(CE, Je)
        .ser(L8)
        .de(J6)
        .build()
    ) {};
  });
var pc,
  CS = s(() => {
    O();
    F();
    I();
    M();
    k();
    pc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateFunctionEventInvokeConfig", {})
        .n("LambdaClient", "UpdateFunctionEventInvokeConfigCommand")
        .f(void 0, void 0)
        .ser($8)
        .de(Q6)
        .build()
    ) {};
  });
var uc,
  bS = s(() => {
    O();
    F();
    I();
    M();
    k();
    uc = class extends (
      E.classBuilder()
        .ep(b)
        .m(function (t, r, o, n) {
          return [
            S(o, this.serialize, this.deserialize),
            C(o, t.getEndpointParameterInstructions()),
          ];
        })
        .s("AWSGirApiService", "UpdateFunctionUrlConfig", {})
        .n("LambdaClient", "UpdateFunctionUrlConfigCommand")
        .f(void 0, void 0)
        .ser(U8)
        .de(Z6)
        .build()
    ) {};
  });
var Jte,
  yp,
  mq = s(() => {
    I();
    bE();
    wE();
    TE();
    AE();
    _E();
    RE();
    vE();
    IE();
    PE();
    NE();
    OE();
    DE();
    FE();
    ME();
    kE();
    LE();
    $E();
    UE();
    BE();
    HE();
    zE();
    VE();
    rs();
    jE();
    os();
    GE();
    WE();
    qE();
    KE();
    YE();
    XE();
    JE();
    QE();
    ZE();
    eS();
    tS();
    rS();
    ip();
    ap();
    cp();
    mp();
    dp();
    fp();
    pp();
    up();
    lp();
    hp();
    oS();
    gp();
    nS();
    sS();
    iS();
    aS();
    cS();
    mS();
    dS();
    fS();
    pS();
    uS();
    lS();
    hS();
    gS();
    yS();
    xS();
    ES();
    SS();
    CS();
    bS();
    Xe();
    (Jte = {
      AddLayerVersionPermissionCommand: ua,
      AddPermissionCommand: la,
      CreateAliasCommand: ha,
      CreateCodeSigningConfigCommand: ga,
      CreateEventSourceMappingCommand: ya,
      CreateFunctionCommand: xa,
      CreateFunctionUrlConfigCommand: Ea,
      DeleteAliasCommand: Sa,
      DeleteCodeSigningConfigCommand: Ca,
      DeleteEventSourceMappingCommand: ba,
      DeleteFunctionCommand: Ta,
      DeleteFunctionCodeSigningConfigCommand: wa,
      DeleteFunctionConcurrencyCommand: Aa,
      DeleteFunctionEventInvokeConfigCommand: _a,
      DeleteFunctionUrlConfigCommand: Ra,
      DeleteLayerVersionCommand: va,
      DeleteProvisionedConcurrencyConfigCommand: Ia,
      GetAccountSettingsCommand: Pa,
      GetAliasCommand: Na,
      GetCodeSigningConfigCommand: Oa,
      GetEventSourceMappingCommand: Da,
      GetFunctionCommand: vt,
      GetFunctionCodeSigningConfigCommand: Fa,
      GetFunctionConcurrencyCommand: Ma,
      GetFunctionConfigurationCommand: It,
      GetFunctionEventInvokeConfigCommand: ka,
      GetFunctionRecursionConfigCommand: La,
      GetFunctionUrlConfigCommand: $a,
      GetLayerVersionCommand: Ba,
      GetLayerVersionByArnCommand: Ua,
      GetLayerVersionPolicyCommand: Ha,
      GetPolicyCommand: za,
      GetProvisionedConcurrencyConfigCommand: Va,
      GetRuntimeManagementConfigCommand: ja,
      InvokeCommand: Wa,
      InvokeAsyncCommand: Ga,
      InvokeWithResponseStreamCommand: qa,
      ListAliasesCommand: Eo,
      ListCodeSigningConfigsCommand: So,
      ListEventSourceMappingsCommand: Co,
      ListFunctionEventInvokeConfigsCommand: bo,
      ListFunctionsCommand: To,
      ListFunctionsByCodeSigningConfigCommand: wo,
      ListFunctionUrlConfigsCommand: Ao,
      ListLayersCommand: _o,
      ListLayerVersionsCommand: Ro,
      ListProvisionedConcurrencyConfigsCommand: vo,
      ListTagsCommand: Ka,
      ListVersionsByFunctionCommand: Io,
      PublishLayerVersionCommand: Ya,
      PublishVersionCommand: Xa,
      PutFunctionCodeSigningConfigCommand: Ja,
      PutFunctionConcurrencyCommand: Qa,
      PutFunctionEventInvokeConfigCommand: Za,
      PutFunctionRecursionConfigCommand: ec,
      PutProvisionedConcurrencyConfigCommand: tc,
      PutRuntimeManagementConfigCommand: rc,
      RemoveLayerVersionPermissionCommand: oc,
      RemovePermissionCommand: nc,
      TagResourceCommand: sc,
      UntagResourceCommand: ic,
      UpdateAliasCommand: ac,
      UpdateCodeSigningConfigCommand: cc,
      UpdateEventSourceMappingCommand: mc,
      UpdateFunctionCodeCommand: dc,
      UpdateFunctionConfigurationCommand: fc,
      UpdateFunctionEventInvokeConfigCommand: pc,
      UpdateFunctionUrlConfigCommand: uc,
    }),
      (yp = class extends oe {});
    km(Jte, yp);
  });
var dq = s(() => {
  bE();
  wE();
  TE();
  AE();
  _E();
  RE();
  vE();
  IE();
  PE();
  NE();
  OE();
  DE();
  FE();
  ME();
  kE();
  LE();
  $E();
  UE();
  BE();
  HE();
  zE();
  VE();
  rs();
  jE();
  os();
  GE();
  WE();
  qE();
  KE();
  YE();
  XE();
  JE();
  QE();
  ZE();
  eS();
  tS();
  rS();
  ip();
  ap();
  cp();
  mp();
  pp();
  dp();
  fp();
  lp();
  up();
  hp();
  oS();
  gp();
  nS();
  sS();
  iS();
  aS();
  cS();
  mS();
  dS();
  fS();
  pS();
  uS();
  lS();
  hS();
  gS();
  yS();
  xS();
  ES();
  SS();
  CS();
  bS();
});
var fq = s(() => {});
var Qte,
  pq = s(() => {
    Q();
    ip();
    Xe();
    Qte = te(oe, Eo, "Marker", "NextMarker", "MaxItems");
  });
var Zte,
  uq = s(() => {
    Q();
    ap();
    Xe();
    Zte = te(oe, So, "Marker", "NextMarker", "MaxItems");
  });
var ere,
  lq = s(() => {
    Q();
    cp();
    Xe();
    ere = te(oe, Co, "Marker", "NextMarker", "MaxItems");
  });
var tre,
  hq = s(() => {
    Q();
    mp();
    Xe();
    tre = te(oe, bo, "Marker", "NextMarker", "MaxItems");
  });
var rre,
  gq = s(() => {
    Q();
    pp();
    Xe();
    rre = te(oe, Ao, "Marker", "NextMarker", "MaxItems");
  });
var ore,
  yq = s(() => {
    Q();
    dp();
    Xe();
    ore = te(oe, wo, "Marker", "NextMarker", "MaxItems");
  });
var nre,
  xq = s(() => {
    Q();
    fp();
    Xe();
    nre = te(oe, To, "Marker", "NextMarker", "MaxItems");
  });
var sre,
  Eq = s(() => {
    Q();
    lp();
    Xe();
    sre = te(oe, Ro, "Marker", "NextMarker", "MaxItems");
  });
var ire,
  Sq = s(() => {
    Q();
    up();
    Xe();
    ire = te(oe, _o, "Marker", "NextMarker", "MaxItems");
  });
var are,
  Cq = s(() => {
    Q();
    hp();
    Xe();
    are = te(oe, vo, "Marker", "NextMarker", "MaxItems");
  });
var cre,
  bq = s(() => {
    Q();
    gp();
    Xe();
    cre = te(oe, Io, "Marker", "NextMarker", "MaxItems");
  });
var wq = s(() => {
  fq();
  pq();
  uq();
  lq();
  hq();
  gq();
  yq();
  xq();
  Eq();
  Sq();
  Cq();
  bq();
});
var Tq,
  wS = s(() => {
    Tq = (e) => new Promise((t) => setTimeout(t, e * 1e3));
  });
var Aq,
  q,
  Et,
  xp = s(() => {
    Aq = { minDelay: 2, maxDelay: 120 };
    (function (e) {
      (e.ABORTED = "ABORTED"),
        (e.FAILURE = "FAILURE"),
        (e.SUCCESS = "SUCCESS"),
        (e.RETRY = "RETRY"),
        (e.TIMEOUT = "TIMEOUT");
    })(q || (q = {}));
    Et = (e) => {
      if (e.state === q.ABORTED) {
        let t = new Error(
          `${JSON.stringify({ ...e, reason: "Request was aborted" })}`
        );
        throw ((t.name = "AbortError"), t);
      } else if (e.state === q.TIMEOUT) {
        let t = new Error(
          `${JSON.stringify({ ...e, reason: "Waiter has timed out" })}`
        );
        throw ((t.name = "TimeoutError"), t);
      } else if (e.state !== q.SUCCESS) throw new Error(`${JSON.stringify(e)}`);
      return e;
    };
  });
var mre,
  dre,
  Rq,
  _q,
  vq = s(() => {
    wS();
    xp();
    (mre = (e, t, r, o) => {
      if (o > r) return t;
      let n = e * 2 ** (o - 1);
      return dre(e, n);
    }),
      (dre = (e, t) => e + Math.random() * (t - e)),
      (Rq = async (
        {
          minDelay: e,
          maxDelay: t,
          maxWaitTime: r,
          abortController: o,
          client: n,
          abortSignal: i,
        },
        a,
        c
      ) => {
        let m = {},
          { state: f, reason: u } = await c(n, a);
        if (u) {
          let x = _q(u);
          (m[x] |= 0), (m[x] += 1);
        }
        if (f !== q.RETRY) return { state: f, reason: u, observedResponses: m };
        let p = 1,
          h = Date.now() + r * 1e3,
          g = Math.log(t / e) / Math.log(2) + 1;
        for (;;) {
          if (o?.signal?.aborted || i?.aborted) {
            let R = "AbortController signal aborted.";
            return (
              (m[R] |= 0),
              (m[R] += 1),
              { state: q.ABORTED, observedResponses: m }
            );
          }
          let x = mre(e, t, g, p);
          if (Date.now() + x * 1e3 > h)
            return { state: q.TIMEOUT, observedResponses: m };
          await Tq(x);
          let { state: _, reason: T } = await c(n, a);
          if (T) {
            let R = _q(T);
            (m[R] |= 0), (m[R] += 1);
          }
          if (_ !== q.RETRY)
            return { state: _, reason: T, observedResponses: m };
          p += 1;
        }
      }),
      (_q = (e) =>
        e?.$responseBodyText
          ? `Deserialization error for body: ${e.$responseBodyText}`
          : e?.$metadata?.httpStatusCode
            ? e.$response || e.message
              ? `${e.$response.statusCode ?? e.$metadata.httpStatusCode ?? "Unknown"}: ${e.message}`
              : `${e.$metadata.httpStatusCode}: OK`
            : String(e?.message ?? JSON.stringify(e) ?? "Unknown"));
  });
var Iq,
  Pq = s(() => {
    Iq = (e) => {
      if (e.maxWaitTime <= 0)
        throw new Error(
          "WaiterConfiguration.maxWaitTime must be greater than 0"
        );
      if (e.minDelay <= 0)
        throw new Error("WaiterConfiguration.minDelay must be greater than 0");
      if (e.maxDelay <= 0)
        throw new Error("WaiterConfiguration.maxDelay must be greater than 0");
      if (e.maxWaitTime <= e.minDelay)
        throw new Error(
          `WaiterConfiguration.maxWaitTime [${e.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`
        );
      if (e.maxDelay < e.minDelay)
        throw new Error(
          `WaiterConfiguration.maxDelay [${e.maxDelay}] must be greater than WaiterConfiguration.minDelay [${e.minDelay}] for this waiter`
        );
    };
  });
var Nq = s(() => {
  wS();
  Pq();
});
var Oq,
  Re,
  Dq = s(() => {
    vq();
    Nq();
    xp();
    (Oq = (e) => {
      let t,
        r = new Promise((o) => {
          (t = () => o({ state: q.ABORTED })),
            typeof e.addEventListener == "function"
              ? e.addEventListener("abort", t)
              : (e.onabort = t);
        });
      return {
        clearListener() {
          typeof e.removeEventListener == "function" &&
            e.removeEventListener("abort", t);
        },
        aborted: r,
      };
    }),
      (Re = async (e, t, r) => {
        let o = { ...Aq, ...e };
        Iq(o);
        let n = [Rq(o, t, r)],
          i = [];
        if (e.abortSignal) {
          let { aborted: a, clearListener: c } = Oq(e.abortSignal);
          i.push(c), n.push(a);
        }
        if (e.abortController?.signal) {
          let { aborted: a, clearListener: c } = Oq(e.abortController.signal);
          i.push(c), n.push(a);
        }
        return Promise.race(n).then((a) => {
          for (let c of i) c();
          return a;
        });
      });
  });
var Po = s(() => {
  Dq();
  xp();
});
var Fq,
  fre,
  pre,
  Mq = s(() => {
    Po();
    os();
    (Fq = async (e, t) => {
      let r;
      try {
        let o = await e.send(new It(t));
        r = o;
        try {
          if (o.State === "Active") return { state: q.SUCCESS, reason: r };
        } catch {}
        try {
          if (o.State === "Failed") return { state: q.FAILURE, reason: r };
        } catch {}
        try {
          if (o.State === "Pending") return { state: q.RETRY, reason: r };
        } catch {}
      } catch (o) {
        r = o;
      }
      return { state: q.RETRY, reason: r };
    }),
      (fre = async (e, t) =>
        Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, Fq)),
      (pre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, Fq);
        return Et(o);
      });
  });
var kq,
  ure,
  lre,
  Lq = s(() => {
    Po();
    rs();
    (kq = async (e, t) => {
      let r;
      try {
        let o = await e.send(new vt(t));
        r = o;
        try {
          if (o.Configuration.State === "Active")
            return { state: q.SUCCESS, reason: r };
        } catch {}
        try {
          if (o.Configuration.State === "Failed")
            return { state: q.FAILURE, reason: r };
        } catch {}
        try {
          if (o.Configuration.State === "Pending")
            return { state: q.RETRY, reason: r };
        } catch {}
      } catch (o) {
        r = o;
      }
      return { state: q.RETRY, reason: r };
    }),
      (ure = async (e, t) =>
        Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, kq)),
      (lre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, kq);
        return Et(o);
      });
  });
var $q,
  hre,
  gre,
  Uq = s(() => {
    Po();
    rs();
    ($q = async (e, t) => {
      let r;
      try {
        return (r = await e.send(new vt(t))), { state: q.SUCCESS, reason: r };
      } catch (o) {
        if (((r = o), o.name && o.name == "ResourceNotFoundException"))
          return { state: q.RETRY, reason: r };
      }
      return { state: q.RETRY, reason: r };
    }),
      (hre = async (e, t) =>
        Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, $q)),
      (gre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, $q);
        return Et(o);
      });
  });
var Bq,
  yre,
  xre,
  Hq = s(() => {
    Po();
    os();
    (Bq = async (e, t) => {
      let r;
      try {
        let o = await e.send(new It(t));
        r = o;
        try {
          if (o.LastUpdateStatus === "Successful")
            return { state: q.SUCCESS, reason: r };
        } catch {}
        try {
          if (o.LastUpdateStatus === "Failed")
            return { state: q.FAILURE, reason: r };
        } catch {}
        try {
          if (o.LastUpdateStatus === "InProgress")
            return { state: q.RETRY, reason: r };
        } catch {}
      } catch (o) {
        r = o;
      }
      return { state: q.RETRY, reason: r };
    }),
      (yre = async (e, t) =>
        Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, Bq)),
      (xre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, Bq);
        return Et(o);
      });
  });
var zq,
  Ere,
  Sre,
  Vq = s(() => {
    Po();
    rs();
    (zq = async (e, t) => {
      let r;
      try {
        let o = await e.send(new vt(t));
        r = o;
        try {
          if (o.Configuration.LastUpdateStatus === "Successful")
            return { state: q.SUCCESS, reason: r };
        } catch {}
        try {
          if (o.Configuration.LastUpdateStatus === "Failed")
            return { state: q.FAILURE, reason: r };
        } catch {}
        try {
          if (o.Configuration.LastUpdateStatus === "InProgress")
            return { state: q.RETRY, reason: r };
        } catch {}
      } catch (o) {
        r = o;
      }
      return { state: q.RETRY, reason: r };
    }),
      (Ere = async (e, t) =>
        Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, zq)),
      (Sre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 1, maxDelay: 120 }, ...e }, t, zq);
        return Et(o);
      });
  });
var jq,
  Cre,
  bre,
  Gq = s(() => {
    Po();
    os();
    (jq = async (e, t) => {
      let r;
      try {
        let o = await e.send(new It(t));
        r = o;
        try {
          if (o.State === "Active") return { state: q.SUCCESS, reason: r };
        } catch {}
        try {
          if (o.State === "Failed") return { state: q.FAILURE, reason: r };
        } catch {}
        try {
          if (o.State === "Pending") return { state: q.RETRY, reason: r };
        } catch {}
      } catch (o) {
        r = o;
      }
      return { state: q.RETRY, reason: r };
    }),
      (Cre = async (e, t) =>
        Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, jq)),
      (bre = async (e, t) => {
        let o = await Re({ ...{ minDelay: 5, maxDelay: 120 }, ...e }, t, jq);
        return Et(o);
      });
  });
var Wq = s(() => {
  Mq();
  Lq();
  Uq();
  Hq();
  Vq();
  Gq();
});
var qq = s(() => {
  ze();
});
var Kq = {};
Me(Kq, {
  $Command: () => E,
  AddLayerVersionPermissionCommand: () => ua,
  AddPermissionCommand: () => la,
  ApplicationLogLevel: () => pee,
  Architecture: () => uee,
  CodeSigningConfigNotFoundException: () => ki,
  CodeSigningPolicy: () => lee,
  CodeStorageExceededException: () => Li,
  CodeVerificationFailedException: () => $i,
  CreateAliasCommand: () => ha,
  CreateCodeSigningConfigCommand: () => ga,
  CreateEventSourceMappingCommand: () => ya,
  CreateFunctionCommand: () => xa,
  CreateFunctionRequestFilterSensitiveLog: () => dE,
  CreateFunctionUrlConfigCommand: () => Ea,
  DeleteAliasCommand: () => Sa,
  DeleteCodeSigningConfigCommand: () => Ca,
  DeleteEventSourceMappingCommand: () => ba,
  DeleteFunctionCodeSigningConfigCommand: () => wa,
  DeleteFunctionCommand: () => Ta,
  DeleteFunctionConcurrencyCommand: () => Aa,
  DeleteFunctionEventInvokeConfigCommand: () => _a,
  DeleteFunctionUrlConfigCommand: () => Ra,
  DeleteLayerVersionCommand: () => va,
  DeleteProvisionedConcurrencyConfigCommand: () => Ia,
  EC2AccessDeniedException: () => zi,
  EC2ThrottledException: () => Vi,
  EC2UnexpectedException: () => ji,
  EFSIOException: () => Gi,
  EFSMountConnectivityException: () => Wi,
  EFSMountFailureException: () => qi,
  EFSMountTimeoutException: () => Ki,
  ENILimitReachedException: () => Yi,
  EndPointType: () => xee,
  EnvironmentErrorFilterSensitiveLog: () => lW,
  EnvironmentFilterSensitiveLog: () => mE,
  EnvironmentResponseFilterSensitiveLog: () => hW,
  EventSourceMappingMetric: () => yee,
  EventSourcePosition: () => See,
  FullDocument: () => hee,
  FunctionCodeFilterSensitiveLog: () => uW,
  FunctionConfigurationFilterSensitiveLog: () => Je,
  FunctionResponseType: () => gee,
  FunctionUrlAuthType: () => cee,
  FunctionVersion: () => Uee,
  GetAccountSettingsCommand: () => Pa,
  GetAliasCommand: () => Na,
  GetCodeSigningConfigCommand: () => Oa,
  GetEventSourceMappingCommand: () => Da,
  GetFunctionCodeSigningConfigCommand: () => Fa,
  GetFunctionCommand: () => vt,
  GetFunctionConcurrencyCommand: () => Ma,
  GetFunctionConfigurationCommand: () => It,
  GetFunctionEventInvokeConfigCommand: () => ka,
  GetFunctionRecursionConfigCommand: () => La,
  GetFunctionResponseFilterSensitiveLog: () => fE,
  GetFunctionUrlConfigCommand: () => $a,
  GetLayerVersionByArnCommand: () => Ua,
  GetLayerVersionCommand: () => Ba,
  GetLayerVersionPolicyCommand: () => Ha,
  GetPolicyCommand: () => za,
  GetProvisionedConcurrencyConfigCommand: () => Va,
  GetRuntimeManagementConfigCommand: () => ja,
  ImageConfigErrorFilterSensitiveLog: () => gW,
  ImageConfigResponseFilterSensitiveLog: () => yW,
  InvalidCodeSignatureException: () => Ui,
  InvalidParameterValueException: () => Ii,
  InvalidRequestContentException: () => Xi,
  InvalidRuntimeException: () => Ji,
  InvalidSecurityGroupIDException: () => Qi,
  InvalidSubnetIDException: () => Zi,
  InvalidZipFileException: () => ea,
  InvocationRequestFilterSensitiveLog: () => pE,
  InvocationResponseFilterSensitiveLog: () => uE,
  InvocationType: () => kee,
  InvokeAsyncCommand: () => Ga,
  InvokeAsyncRequestFilterSensitiveLog: () => lE,
  InvokeCommand: () => Wa,
  InvokeMode: () => Oee,
  InvokeResponseStreamUpdateFilterSensitiveLog: () => SW,
  InvokeWithResponseStreamCommand: () => qa,
  InvokeWithResponseStreamRequestFilterSensitiveLog: () => hE,
  InvokeWithResponseStreamResponseEvent: () => cE,
  InvokeWithResponseStreamResponseEventFilterSensitiveLog: () => Bee,
  InvokeWithResponseStreamResponseFilterSensitiveLog: () => gE,
  KMSAccessDeniedException: () => ta,
  KMSDisabledException: () => ra,
  KMSInvalidStateException: () => oa,
  KMSNotFoundException: () => na,
  KafkaSchemaRegistryAuthType: () => mee,
  KafkaSchemaValidationAttribute: () => fee,
  Lambda: () => yp,
  LambdaClient: () => oe,
  LambdaServiceException: () => j,
  LastUpdateStatus: () => Ree,
  LastUpdateStatusReasonCode: () => vee,
  LayerVersionContentInputFilterSensitiveLog: () => CW,
  ListAliasesCommand: () => Eo,
  ListCodeSigningConfigsCommand: () => So,
  ListEventSourceMappingsCommand: () => Co,
  ListFunctionEventInvokeConfigsCommand: () => bo,
  ListFunctionUrlConfigsCommand: () => Ao,
  ListFunctionsByCodeSigningConfigCommand: () => wo,
  ListFunctionsCommand: () => To,
  ListFunctionsResponseFilterSensitiveLog: () => yE,
  ListLayerVersionsCommand: () => Ro,
  ListLayersCommand: () => _o,
  ListProvisionedConcurrencyConfigsCommand: () => vo,
  ListTagsCommand: () => Ka,
  ListVersionsByFunctionCommand: () => Io,
  ListVersionsByFunctionResponseFilterSensitiveLog: () => xE,
  LogFormat: () => Cee,
  LogType: () => Lee,
  PackageType: () => wee,
  PolicyLengthExceededException: () => Pi,
  PreconditionFailedException: () => Ni,
  ProvisionedConcurrencyConfigNotFoundException: () => Hi,
  ProvisionedConcurrencyStatusEnum: () => Fee,
  PublishLayerVersionCommand: () => Ya,
  PublishLayerVersionRequestFilterSensitiveLog: () => EE,
  PublishVersionCommand: () => Xa,
  PutFunctionCodeSigningConfigCommand: () => Ja,
  PutFunctionConcurrencyCommand: () => Qa,
  PutFunctionEventInvokeConfigCommand: () => Za,
  PutFunctionRecursionConfigCommand: () => ec,
  PutProvisionedConcurrencyConfigCommand: () => tc,
  PutRuntimeManagementConfigCommand: () => rc,
  RecursiveInvocationException: () => sa,
  RecursiveLoop: () => Dee,
  RemoveLayerVersionPermissionCommand: () => oc,
  RemovePermissionCommand: () => nc,
  RequestTooLargeException: () => ia,
  ResourceConflictException: () => Oi,
  ResourceInUseException: () => Bi,
  ResourceNotFoundException: () => Di,
  ResourceNotReadyException: () => aa,
  ResponseStreamingInvocationType: () => $ee,
  Runtime: () => Tee,
  RuntimeVersionConfigFilterSensitiveLog: () => EW,
  RuntimeVersionErrorFilterSensitiveLog: () => xW,
  SchemaRegistryEventRecordFormat: () => dee,
  ServiceException: () => Fi,
  SnapStartApplyOn: () => Aee,
  SnapStartException: () => ca,
  SnapStartNotReadyException: () => ma,
  SnapStartOptimizationStatus: () => Iee,
  SnapStartTimeoutException: () => da,
  SourceAccessType: () => Eee,
  State: () => Pee,
  StateReasonCode: () => Nee,
  SubnetIPAddressLimitReachedException: () => fa,
  SystemLogLevel: () => bee,
  TagResourceCommand: () => sc,
  ThrottleReason: () => aee,
  TooManyRequestsException: () => Mi,
  TracingMode: () => _ee,
  UnsupportedMediaTypeException: () => pa,
  UntagResourceCommand: () => ic,
  UpdateAliasCommand: () => ac,
  UpdateCodeSigningConfigCommand: () => cc,
  UpdateEventSourceMappingCommand: () => mc,
  UpdateFunctionCodeCommand: () => dc,
  UpdateFunctionCodeRequestFilterSensitiveLog: () => SE,
  UpdateFunctionConfigurationCommand: () => fc,
  UpdateFunctionConfigurationRequestFilterSensitiveLog: () => CE,
  UpdateFunctionEventInvokeConfigCommand: () => pc,
  UpdateFunctionUrlConfigCommand: () => uc,
  UpdateRuntimeOn: () => Mee,
  __Client: () => no,
  paginateListAliases: () => Qte,
  paginateListCodeSigningConfigs: () => Zte,
  paginateListEventSourceMappings: () => ere,
  paginateListFunctionEventInvokeConfigs: () => tre,
  paginateListFunctionUrlConfigs: () => rre,
  paginateListFunctions: () => nre,
  paginateListFunctionsByCodeSigningConfig: () => ore,
  paginateListLayerVersions: () => sre,
  paginateListLayers: () => ire,
  paginateListProvisionedConcurrencyConfigs: () => are,
  paginateListVersionsByFunction: () => cre,
  waitForFunctionActive: () => fre,
  waitForFunctionActiveV2: () => ure,
  waitForFunctionExists: () => hre,
  waitForFunctionUpdated: () => yre,
  waitForFunctionUpdatedV2: () => Ere,
  waitForPublishedVersionActive: () => Cre,
  waitUntilFunctionActive: () => pre,
  waitUntilFunctionActiveV2: () => lre,
  waitUntilFunctionExists: () => gre,
  waitUntilFunctionUpdated: () => xre,
  waitUntilFunctionUpdatedV2: () => Sre,
  waitUntilPublishedVersionActive: () => bre,
});
var Yq = s(() => {
  Xe();
  mq();
  dq();
  wq();
  Wq();
  qq();
  tp();
});
var Xq = {};
Me(Xq, { default: () => Tre });
var wre,
  Tre,
  Jq = s(() => {
    bp();
    (wre = {
      name: "aws-invoke",
      invoke: async (e) => {
        let { InvokeCommand: t, LambdaClient: r } =
            await Promise.resolve().then(() => (Yq(), Kq)),
          o = new r({}),
          n = JSON.parse(process.env.WARM_PARAMS);
        for (let i of n) {
          let { concurrency: a, function: c } = i;
          No({
            event: "warmer invoked",
            functionName: c,
            concurrency: a,
            warmerId: e,
          });
          let f = (
            await Promise.all(
              Array.from({ length: a }, (u, p) => p).map((u) => {
                try {
                  return o.send(
                    new t({
                      FunctionName: c,
                      InvocationType: "RequestResponse",
                      Payload: Buffer.from(
                        JSON.stringify({
                          type: "warmer",
                          warmerId: e,
                          index: u,
                          concurrency: a,
                          delay: 75,
                        })
                      ),
                    })
                  );
                } catch (p) {
                  Cp(`failed to warm up #${u}`, p);
                }
              })
            )
          )
            .map((u, p) => {
              if (u?.StatusCode !== 200 || !u?.Payload) {
                Cp(`failed to warm up #${p}:`, u?.Payload?.toString());
                return;
              }
              let h = JSON.parse(Buffer.from(u.Payload).toString());
              return { statusCode: u.StatusCode, payload: h, type: "warmer" };
            })
            .filter((u) => !!u);
          No({
            event: "warmer result",
            sent: a,
            success: f.length,
            uniqueServersWarmed: [...new Set(f)].length,
          });
        }
      },
    }),
      (Tre = wre);
  });
function r5() {
  return Math.random().toString(36).slice(2, 8);
}
var o5 = s(() => {});
bp();
async function Qq(e) {
  return typeof e == "function"
    ? e()
    : (await Promise.resolve().then(() => (RS(), _S))).default;
}
async function Zq(e) {
  return typeof e == "function"
    ? e()
    : (await Promise.resolve().then(() => (PS(), IS))).default;
}
async function e5(e) {
  return typeof e == "function"
    ? e()
    : (await Promise.resolve().then(() => (Jq(), Xq))).default;
}
async function t5(e) {
  let t = await import("./open-next.config.mjs").then((a) => a.default);
  globalThis.openNextConfig = t;
  let r = t[e.type]?.override,
    o = await Qq(r?.converter),
    { name: n, wrapper: i } = await Zq(r?.wrapper);
  return No("Using wrapper", n), i(e.handler, o);
}
o5();
var wlt = await t5({ handler: Are, type: "warmer" });
async function Are() {
  let e = `warmer-${r5()}`;
  return (
    await (
      await e5(globalThis.openNextConfig.warmer?.invokeFunction)
    ).invoke(e),
    { type: "warmer" }
  );
}
export { wlt as handler };
