import { Buffer } from "node:buffer";
globalThis.Buffer = Buffer;

import { AsyncLocalStorage } from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;

const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function (o, p, a) {
  if (
    p === "__import_unsupported" &&
    Boolean(globalThis.__import_unsupported)
  ) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

const require = (await import("node:module")).createRequire(import.meta.url);
const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
const __dirname = (await import("node:path")).dirname(__filename);

globalThis.openNextDebug = false;
globalThis.openNextVersion = "3.6.5";
var kr = Object.defineProperty;
var zn = Object.getOwnPropertyDescriptor;
var Hn = Object.getOwnPropertyNames;
var Bn = Object.prototype.hasOwnProperty;
var pr = (t, s) => () => (t && (s = t((t = 0))), s);
var en = (t, s) => () => (s || t((s = { exports: {} }).exports, s), s.exports),
  Xn = (t, s) => {
    for (var u in s) kr(t, u, { get: s[u], enumerable: !0 });
  },
  Pr = (t, s, u, d) => {
    if ((s && typeof s == "object") || typeof s == "function")
      for (let k of Hn(s))
        !Bn.call(t, k) &&
          k !== u &&
          kr(t, k, {
            get: () => s[k],
            enumerable: !(d = zn(s, k)) || d.enumerable,
          });
    return t;
  },
  Pt = (t, s, u) => (Pr(t, s, "default"), u && Pr(u, s, "default"));
var tn = (t) => Pr(kr({}, "__esModule", { value: !0 }), t);
function rn(t, s) {
  return (s ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(t);
}
function Lr(t, s = !1) {
  let u = [],
    d = 0;
  for (; d < t.length; ) {
    let k = t[d],
      T = H(function (C) {
        if (!s) throw new TypeError(C);
        u.push({ type: "INVALID_CHAR", index: d, value: t[d++] });
      }, "ErrorOrInvalid");
    if (k === "*") {
      u.push({ type: "ASTERISK", index: d, value: t[d++] });
      continue;
    }
    if (k === "+" || k === "?") {
      u.push({ type: "OTHER_MODIFIER", index: d, value: t[d++] });
      continue;
    }
    if (k === "\\") {
      u.push({ type: "ESCAPED_CHAR", index: d++, value: t[d++] });
      continue;
    }
    if (k === "{") {
      u.push({ type: "OPEN", index: d, value: t[d++] });
      continue;
    }
    if (k === "}") {
      u.push({ type: "CLOSE", index: d, value: t[d++] });
      continue;
    }
    if (k === ":") {
      let C = "",
        c = d + 1;
      for (; c < t.length; ) {
        let _ = t.substr(c, 1);
        if ((c === d + 1 && Vn.test(_)) || (c !== d + 1 && Fn.test(_))) {
          C += t[c++];
          continue;
        }
        break;
      }
      if (!C) {
        T(`Missing parameter name at ${d}`);
        continue;
      }
      u.push({ type: "NAME", index: d, value: C }), (d = c);
      continue;
    }
    if (k === "(") {
      let C = 1,
        c = "",
        _ = d + 1,
        m = !1;
      if (t[_] === "?") {
        T(`Pattern cannot start with "?" at ${_}`);
        continue;
      }
      for (; _ < t.length; ) {
        if (!rn(t[_], !1)) {
          T(`Invalid character '${t[_]}' at ${_}.`), (m = !0);
          break;
        }
        if (t[_] === "\\") {
          c += t[_++] + t[_++];
          continue;
        }
        if (t[_] === ")") {
          if ((C--, C === 0)) {
            _++;
            break;
          }
        } else if (t[_] === "(" && (C++, t[_ + 1] !== "?")) {
          T(`Capturing groups are not allowed at ${_}`), (m = !0);
          break;
        }
        c += t[_++];
      }
      if (m) continue;
      if (C) {
        T(`Unbalanced pattern at ${d}`);
        continue;
      }
      if (!c) {
        T(`Missing pattern at ${d}`);
        continue;
      }
      u.push({ type: "REGEX", index: d, value: c }), (d = _);
      continue;
    }
    u.push({ type: "CHAR", index: d, value: t[d++] });
  }
  return u.push({ type: "END", index: d, value: "" }), u;
}
function Mr(t, s = {}) {
  let u = Lr(t);
  (s.delimiter ??= "/#?"), (s.prefixes ??= "./");
  let d = `[^${Te(s.delimiter)}]+?`,
    k = [],
    T = 0,
    C = 0,
    c = "",
    _ = new Set(),
    m = H((f) => {
      if (C < u.length && u[C].type === f) return u[C++].value;
    }, "tryConsume"),
    P = H(() => m("OTHER_MODIFIER") ?? m("ASTERISK"), "tryConsumeModifier"),
    I = H((f) => {
      let E = m(f);
      if (E !== void 0) return E;
      let { type: j, index: U } = u[C];
      throw new TypeError(`Unexpected ${j} at ${U}, expected ${f}`);
    }, "mustConsume"),
    y = H(() => {
      let f = "",
        E;
      for (; (E = m("CHAR") ?? m("ESCAPED_CHAR")); ) f += E;
      return f;
    }, "consumeText"),
    l = H((f) => f, "DefaultEncodePart"),
    x = s.encodePart || l,
    S = "",
    p = H((f) => {
      S += f;
    }, "appendToPendingFixedValue"),
    v = H(() => {
      S.length && (k.push(new Nt(3, "", "", x(S), "", 3)), (S = ""));
    }, "maybeAddPartFromPendingFixedValue"),
    g = H((f, E, j, U, N) => {
      let $ = 3;
      switch (N) {
        case "?":
          $ = 1;
          break;
        case "*":
          $ = 0;
          break;
        case "+":
          $ = 2;
          break;
      }
      if (!E && !j && $ === 3) {
        p(f);
        return;
      }
      if ((v(), !E && !j)) {
        if (!f) return;
        k.push(new Nt(3, "", "", x(f), "", $));
        return;
      }
      let G;
      j ? (j === "*" ? (G = Nr) : (G = j)) : (G = d);
      let W = 2;
      G === d ? ((W = 1), (G = "")) : G === Nr && ((W = 0), (G = ""));
      let ie;
      if ((E ? (ie = E) : j && (ie = T++), _.has(ie)))
        throw new TypeError(`Duplicate name '${ie}'.`);
      _.add(ie), k.push(new Nt(W, ie, x(f), G, x(U), $));
    }, "addPart");
  for (; C < u.length; ) {
    let f = m("CHAR"),
      E = m("NAME"),
      j = m("REGEX");
    if ((!E && !j && (j = m("ASTERISK")), E || j)) {
      let N = f ?? "";
      s.prefixes.indexOf(N) === -1 && (p(N), (N = "")), v();
      let $ = P();
      g(N, E, j, "", $);
      continue;
    }
    let U = f ?? m("ESCAPED_CHAR");
    if (U) {
      p(U);
      continue;
    }
    if (m("OPEN")) {
      let N = y(),
        $ = m("NAME"),
        G = m("REGEX");
      !$ && !G && (G = m("ASTERISK"));
      let W = y();
      I("CLOSE");
      let ie = P();
      g(N, $, G, W, ie);
      continue;
    }
    v(), I("END");
  }
  return k;
}
function Te(t) {
  return t.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function Ar(t) {
  return t && t.ignoreCase ? "ui" : "u";
}
function nn(t, s, u) {
  return jr(Mr(t, u), s, u);
}
function yt(t) {
  switch (t) {
    case 0:
      return "*";
    case 1:
      return "?";
    case 2:
      return "+";
    case 3:
      return "";
  }
}
function jr(t, s, u = {}) {
  (u.delimiter ??= "/#?"),
    (u.prefixes ??= "./"),
    (u.sensitive ??= !1),
    (u.strict ??= !1),
    (u.end ??= !0),
    (u.start ??= !0),
    (u.endsWith = "");
  let d = u.start ? "^" : "";
  for (let c of t) {
    if (c.type === 3) {
      c.modifier === 3
        ? (d += Te(c.value))
        : (d += `(?:${Te(c.value)})${yt(c.modifier)}`);
      continue;
    }
    s && s.push(c.name);
    let _ = `[^${Te(u.delimiter)}]+?`,
      m = c.value;
    if (
      (c.type === 1 ? (m = _) : c.type === 0 && (m = Nr),
      !c.prefix.length && !c.suffix.length)
    ) {
      c.modifier === 3 || c.modifier === 1
        ? (d += `(${m})${yt(c.modifier)}`)
        : (d += `((?:${m})${yt(c.modifier)})`);
      continue;
    }
    if (c.modifier === 3 || c.modifier === 1) {
      (d += `(?:${Te(c.prefix)}(${m})${Te(c.suffix)})`), (d += yt(c.modifier));
      continue;
    }
    (d += `(?:${Te(c.prefix)}`),
      (d += `((?:${m})(?:`),
      (d += Te(c.suffix)),
      (d += Te(c.prefix)),
      (d += `(?:${m}))*)${Te(c.suffix)})`),
      c.modifier === 0 && (d += "?");
  }
  let k = `[${Te(u.endsWith)}]|$`,
    T = `[${Te(u.delimiter)}]`;
  if (u.end)
    return (
      u.strict || (d += `${T}?`),
      u.endsWith.length ? (d += `(?=${k})`) : (d += "$"),
      new RegExp(d, Ar(u))
    );
  u.strict || (d += `(?:${T}(?=${k}))?`);
  let C = !1;
  if (t.length) {
    let c = t[t.length - 1];
    c.type === 3 && c.modifier === 3 && (C = u.delimiter.indexOf(c) > -1);
  }
  return C || (d += `(?=${T}|${k})`), new RegExp(d, Ar(u));
}
function on(t, s) {
  return t.length
    ? t[0] === "/"
      ? !0
      : !s || t.length < 2
        ? !1
        : (t[0] == "\\" || t[0] == "{") && t[1] == "/"
    : !1;
}
function Ur(t, s) {
  return t.startsWith(s) ? t.substring(s.length, t.length) : t;
}
function an(t, s) {
  return t.endsWith(s) ? t.substr(0, t.length - s.length) : t;
}
function $r(t) {
  return !t || t.length < 2
    ? !1
    : t[0] === "[" || ((t[0] === "\\" || t[0] === "{") && t[1] === "[");
}
function Dr(t) {
  if (!t) return !0;
  for (let s of sn) if (t.test(s)) return !0;
  return !1;
}
function ln(t, s) {
  if (((t = Ur(t, "#")), s || t === "")) return t;
  let u = new URL("https://example.com");
  return (u.hash = t), u.hash ? u.hash.substring(1, u.hash.length) : "";
}
function un(t, s) {
  if (((t = Ur(t, "?")), s || t === "")) return t;
  let u = new URL("https://example.com");
  return (u.search = t), u.search ? u.search.substring(1, u.search.length) : "";
}
function cn(t, s) {
  return s || t === "" ? t : $r(t) ? Hr(t) : zr(t);
}
function hn(t, s) {
  if (s || t === "") return t;
  let u = new URL("https://example.com");
  return (u.password = t), u.password;
}
function dn(t, s) {
  if (s || t === "") return t;
  let u = new URL("https://example.com");
  return (u.username = t), u.username;
}
function pn(t, s, u) {
  if (u || t === "") return t;
  if (s && !sn.includes(s)) return new URL(`${s}:${t}`).pathname;
  let d = t[0] == "/";
  return (
    (t = new URL(d ? t : "/-" + t, "https://example.com").pathname),
    d || (t = t.substring(2, t.length)),
    t
  );
}
function fn(t, s, u) {
  return qr(s) === t && (t = ""), u || t === "" ? t : Br(t);
}
function gn(t, s) {
  return (t = an(t, ":")), s || t === "" ? t : fr(t);
}
function qr(t) {
  switch (t) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
function fr(t) {
  if (t === "") return t;
  if (/^[-+.A-Za-z0-9]*$/.test(t)) return t.toLowerCase();
  throw new TypeError(`Invalid protocol '${t}'.`);
}
function mn(t) {
  if (t === "") return t;
  let s = new URL("https://example.com");
  return (s.username = t), s.username;
}
function vn(t) {
  if (t === "") return t;
  let s = new URL("https://example.com");
  return (s.password = t), s.password;
}
function zr(t) {
  if (t === "") return t;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))
    throw new TypeError(`Invalid hostname '${t}'`);
  let s = new URL("https://example.com");
  return (s.hostname = t), s.hostname;
}
function Hr(t) {
  if (t === "") return t;
  if (/[^0-9a-fA-F[\]:]/g.test(t))
    throw new TypeError(`Invalid IPv6 hostname '${t}'`);
  return t.toLowerCase();
}
function Br(t) {
  if (t === "" || (/^[0-9]*$/.test(t) && parseInt(t) <= 65535)) return t;
  throw new TypeError(`Invalid port '${t}'.`);
}
function bn(t) {
  if (t === "") return t;
  let s = new URL("https://example.com");
  return (
    (s.pathname = t[0] !== "/" ? "/-" + t : t),
    t[0] !== "/" ? s.pathname.substring(2, s.pathname.length) : s.pathname
  );
}
function wn(t) {
  return t === "" ? t : new URL(`data:${t}`).pathname;
}
function yn(t) {
  if (t === "") return t;
  let s = new URL("https://example.com");
  return (s.search = t), s.search.substring(1, s.search.length);
}
function _n(t) {
  if (t === "") return t;
  let s = new URL("https://example.com");
  return (s.hash = t), s.hash.substring(1, s.hash.length);
}
function Ir(t, s) {
  if (typeof t != "string")
    throw new TypeError("parameter 1 is not of type 'string'.");
  let u = new URL(t, s);
  return {
    protocol: u.protocol.substring(0, u.protocol.length - 1),
    username: u.username,
    password: u.password,
    hostname: u.hostname,
    port: u.port,
    pathname: u.pathname,
    search: u.search !== "" ? u.search.substring(1, u.search.length) : void 0,
    hash: u.hash !== "" ? u.hash.substring(1, u.hash.length) : void 0,
  };
}
function ze(t, s) {
  return s ? Ot(t) : t;
}
function kt(t, s, u) {
  let d;
  if (typeof s.baseURL == "string")
    try {
      (d = new URL(s.baseURL)),
        s.protocol === void 0 &&
          (t.protocol = ze(d.protocol.substring(0, d.protocol.length - 1), u)),
        !u &&
          s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          s.username === void 0 &&
          (t.username = ze(d.username, u)),
        !u &&
          s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          s.username === void 0 &&
          s.password === void 0 &&
          (t.password = ze(d.password, u)),
        s.protocol === void 0 &&
          s.hostname === void 0 &&
          (t.hostname = ze(d.hostname, u)),
        s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          (t.port = ze(d.port, u)),
        s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          s.pathname === void 0 &&
          (t.pathname = ze(d.pathname, u)),
        s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          s.pathname === void 0 &&
          s.search === void 0 &&
          (t.search = ze(d.search.substring(1, d.search.length), u)),
        s.protocol === void 0 &&
          s.hostname === void 0 &&
          s.port === void 0 &&
          s.pathname === void 0 &&
          s.search === void 0 &&
          s.hash === void 0 &&
          (t.hash = ze(d.hash.substring(1, d.hash.length), u));
    } catch {
      throw new TypeError(`invalid baseURL '${s.baseURL}'.`);
    }
  if (
    (typeof s.protocol == "string" && (t.protocol = gn(s.protocol, u)),
    typeof s.username == "string" && (t.username = dn(s.username, u)),
    typeof s.password == "string" && (t.password = hn(s.password, u)),
    typeof s.hostname == "string" && (t.hostname = cn(s.hostname, u)),
    typeof s.port == "string" && (t.port = fn(s.port, t.protocol, u)),
    typeof s.pathname == "string")
  ) {
    if (((t.pathname = s.pathname), d && !on(t.pathname, u))) {
      let k = d.pathname.lastIndexOf("/");
      k >= 0 &&
        (t.pathname = ze(d.pathname.substring(0, k + 1), u) + t.pathname);
    }
    t.pathname = pn(t.pathname, t.protocol, u);
  }
  return (
    typeof s.search == "string" && (t.search = un(s.search, u)),
    typeof s.hash == "string" && (t.hash = ln(s.hash, u)),
    t
  );
}
function Ot(t) {
  return t.replace(/([+*?:{}()\\])/g, "\\$1");
}
function En(t) {
  return t.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function Rn(t, s) {
  (s.delimiter ??= "/#?"),
    (s.prefixes ??= "./"),
    (s.sensitive ??= !1),
    (s.strict ??= !1),
    (s.end ??= !0),
    (s.start ??= !0),
    (s.endsWith = "");
  let u = ".*",
    d = `[^${En(s.delimiter)}]+?`,
    k = /[$_\u200C\u200D\p{ID_Continue}]/u,
    T = "";
  for (let C = 0; C < t.length; ++C) {
    let c = t[C];
    if (c.type === 3) {
      if (c.modifier === 3) {
        T += Ot(c.value);
        continue;
      }
      T += `{${Ot(c.value)}}${yt(c.modifier)}`;
      continue;
    }
    let _ = c.hasCustomName(),
      m =
        !!c.suffix.length ||
        (!!c.prefix.length &&
          (c.prefix.length !== 1 || !s.prefixes.includes(c.prefix))),
      P = C > 0 ? t[C - 1] : null,
      I = C < t.length - 1 ? t[C + 1] : null;
    if (
      !m &&
      _ &&
      c.type === 1 &&
      c.modifier === 3 &&
      I &&
      !I.prefix.length &&
      !I.suffix.length
    )
      if (I.type === 3) {
        let y = I.value.length > 0 ? I.value[0] : "";
        m = k.test(y);
      } else m = !I.hasCustomName();
    if (!m && !c.prefix.length && P && P.type === 3) {
      let y = P.value[P.value.length - 1];
      m = s.prefixes.includes(y);
    }
    m && (T += "{"),
      (T += Ot(c.prefix)),
      _ && (T += `:${c.name}`),
      c.type === 2
        ? (T += `(${c.value})`)
        : c.type === 1
          ? _ || (T += `(${d})`)
          : c.type === 0 &&
            (!_ &&
            (!P || P.type === 3 || P.modifier !== 3 || m || c.prefix !== "")
              ? (T += "*")
              : (T += `(${u})`)),
      c.type === 1 &&
        _ &&
        c.suffix.length &&
        k.test(c.suffix[0]) &&
        (T += "\\"),
      (T += Ot(c.suffix)),
      m && (T += "}"),
      c.modifier !== 3 && (T += yt(c.modifier));
  }
  return T;
}
var Wn,
  H,
  Nt,
  Vn,
  Fn,
  Nr,
  st,
  Gn,
  Kn,
  sn,
  xn,
  Or,
  at,
  gr,
  Sn = pr(() => {
    (Wn = Object.defineProperty),
      (H = (t, s) => Wn(t, "name", { value: s, configurable: !0 })),
      (Nt = class {
        type = 3;
        name = "";
        prefix = "";
        value = "";
        suffix = "";
        modifier = 3;
        constructor(t, s, u, d, k, T) {
          (this.type = t),
            (this.name = s),
            (this.prefix = u),
            (this.value = d),
            (this.suffix = k),
            (this.modifier = T);
        }
        hasCustomName() {
          return this.name !== "" && typeof this.name != "number";
        }
      });
    H(Nt, "Part");
    (Vn = /[$_\p{ID_Start}]/u),
      (Fn = /[$_\u200C\u200D\p{ID_Continue}]/u),
      (Nr = ".*");
    H(rn, "isASCII");
    H(Lr, "lexer");
    H(Mr, "parse");
    H(Te, "escapeString");
    H(Ar, "flags");
    H(nn, "stringToRegexp");
    H(yt, "modifierToString");
    H(jr, "partsToRegexp");
    (st = { delimiter: "", prefixes: "", sensitive: !0, strict: !0 }),
      (Gn = { delimiter: ".", prefixes: "", sensitive: !0, strict: !0 }),
      (Kn = { delimiter: "/", prefixes: "/", sensitive: !0, strict: !0 });
    H(on, "isAbsolutePathname");
    H(Ur, "maybeStripPrefix");
    H(an, "maybeStripSuffix");
    H($r, "treatAsIPv6Hostname");
    sn = ["ftp", "file", "http", "https", "ws", "wss"];
    H(Dr, "isSpecialScheme");
    H(ln, "canonicalizeHash");
    H(un, "canonicalizeSearch");
    H(cn, "canonicalizeHostname");
    H(hn, "canonicalizePassword");
    H(dn, "canonicalizeUsername");
    H(pn, "canonicalizePathname");
    H(fn, "canonicalizePort");
    H(gn, "canonicalizeProtocol");
    H(qr, "defaultPortForProtocol");
    H(fr, "protocolEncodeCallback");
    H(mn, "usernameEncodeCallback");
    H(vn, "passwordEncodeCallback");
    H(zr, "hostnameEncodeCallback");
    H(Hr, "ipv6HostnameEncodeCallback");
    H(Br, "portEncodeCallback");
    H(bn, "standardURLPathnameEncodeCallback");
    H(wn, "pathURLPathnameEncodeCallback");
    H(yn, "searchEncodeCallback");
    H(_n, "hashEncodeCallback");
    xn = class {
      #o;
      #n = [];
      #t = {};
      #e = 0;
      #i = 1;
      #u = 0;
      #s = 0;
      #p = 0;
      #f = 0;
      #g = !1;
      constructor(t) {
        this.#o = t;
      }
      get result() {
        return this.#t;
      }
      parse() {
        for (
          this.#n = Lr(this.#o, !0);
          this.#e < this.#n.length;
          this.#e += this.#i
        ) {
          if (((this.#i = 1), this.#n[this.#e].type === "END")) {
            if (this.#s === 0) {
              this.#w(),
                this.#c()
                  ? this.#r(9, 1)
                  : this.#h()
                    ? this.#r(8, 1)
                    : this.#r(7, 0);
              continue;
            } else if (this.#s === 2) {
              this.#d(5);
              continue;
            }
            this.#r(10, 0);
            break;
          }
          if (this.#p > 0)
            if (this.#C()) this.#p -= 1;
            else continue;
          if (this.#S()) {
            this.#p += 1;
            continue;
          }
          switch (this.#s) {
            case 0:
              this.#y() && this.#d(1);
              break;
            case 1:
              if (this.#y()) {
                this.#k();
                let t = 7,
                  s = 1;
                this.#x() ? ((t = 2), (s = 3)) : this.#g && (t = 2),
                  this.#r(t, s);
              }
              break;
            case 2:
              this.#v()
                ? this.#d(3)
                : (this.#b() || this.#h() || this.#c()) && this.#d(5);
              break;
            case 3:
              this.#E() ? this.#r(4, 1) : this.#v() && this.#r(5, 1);
              break;
            case 4:
              this.#v() && this.#r(5, 1);
              break;
            case 5:
              this.#T() ? (this.#f += 1) : this.#P() && (this.#f -= 1),
                this.#R() && !this.#f
                  ? this.#r(6, 1)
                  : this.#b()
                    ? this.#r(7, 0)
                    : this.#h()
                      ? this.#r(8, 1)
                      : this.#c() && this.#r(9, 1);
              break;
            case 6:
              this.#b()
                ? this.#r(7, 0)
                : this.#h()
                  ? this.#r(8, 1)
                  : this.#c() && this.#r(9, 1);
              break;
            case 7:
              this.#h() ? this.#r(8, 1) : this.#c() && this.#r(9, 1);
              break;
            case 8:
              this.#c() && this.#r(9, 1);
              break;
            case 9:
              break;
            case 10:
              break;
          }
        }
        this.#t.hostname !== void 0 &&
          this.#t.port === void 0 &&
          (this.#t.port = "");
      }
      #r(t, s) {
        switch (this.#s) {
          case 0:
            break;
          case 1:
            this.#t.protocol = this.#l();
            break;
          case 2:
            break;
          case 3:
            this.#t.username = this.#l();
            break;
          case 4:
            this.#t.password = this.#l();
            break;
          case 5:
            this.#t.hostname = this.#l();
            break;
          case 6:
            this.#t.port = this.#l();
            break;
          case 7:
            this.#t.pathname = this.#l();
            break;
          case 8:
            this.#t.search = this.#l();
            break;
          case 9:
            this.#t.hash = this.#l();
            break;
          case 10:
            break;
        }
        this.#s !== 0 &&
          t !== 10 &&
          ([1, 2, 3, 4].includes(this.#s) &&
            [6, 7, 8, 9].includes(t) &&
            (this.#t.hostname ??= ""),
          [1, 2, 3, 4, 5, 6].includes(this.#s) &&
            [8, 9].includes(t) &&
            (this.#t.pathname ??= this.#g ? "/" : ""),
          [1, 2, 3, 4, 5, 6, 7].includes(this.#s) &&
            t === 9 &&
            (this.#t.search ??= "")),
          this.#_(t, s);
      }
      #_(t, s) {
        (this.#s = t), (this.#u = this.#e + s), (this.#e += s), (this.#i = 0);
      }
      #w() {
        (this.#e = this.#u), (this.#i = 0);
      }
      #d(t) {
        this.#w(), (this.#s = t);
      }
      #m(t) {
        return (
          t < 0 && (t = this.#n.length - t),
          t < this.#n.length ? this.#n[t] : this.#n[this.#n.length - 1]
        );
      }
      #a(t, s) {
        let u = this.#m(t);
        return (
          u.value === s &&
          (u.type === "CHAR" ||
            u.type === "ESCAPED_CHAR" ||
            u.type === "INVALID_CHAR")
        );
      }
      #y() {
        return this.#a(this.#e, ":");
      }
      #x() {
        return this.#a(this.#e + 1, "/") && this.#a(this.#e + 2, "/");
      }
      #v() {
        return this.#a(this.#e, "@");
      }
      #E() {
        return this.#a(this.#e, ":");
      }
      #R() {
        return this.#a(this.#e, ":");
      }
      #b() {
        return this.#a(this.#e, "/");
      }
      #h() {
        if (this.#a(this.#e, "?")) return !0;
        if (this.#n[this.#e].value !== "?") return !1;
        let t = this.#m(this.#e - 1);
        return (
          t.type !== "NAME" &&
          t.type !== "REGEX" &&
          t.type !== "CLOSE" &&
          t.type !== "ASTERISK"
        );
      }
      #c() {
        return this.#a(this.#e, "#");
      }
      #S() {
        return this.#n[this.#e].type == "OPEN";
      }
      #C() {
        return this.#n[this.#e].type == "CLOSE";
      }
      #T() {
        return this.#a(this.#e, "[");
      }
      #P() {
        return this.#a(this.#e, "]");
      }
      #l() {
        let t = this.#n[this.#e],
          s = this.#m(this.#u).index;
        return this.#o.substring(s, t.index);
      }
      #k() {
        let t = {};
        Object.assign(t, st), (t.encodePart = fr);
        let s = nn(this.#l(), void 0, t);
        this.#g = Dr(s);
      }
    };
    H(xn, "Parser");
    (Or = [
      "protocol",
      "username",
      "password",
      "hostname",
      "port",
      "pathname",
      "search",
      "hash",
    ]),
      (at = "*");
    H(Ir, "extractValues");
    H(ze, "processBaseURLString");
    H(kt, "applyInit");
    H(Ot, "escapePatternString");
    H(En, "escapeRegexpString");
    H(Rn, "partsToPattern");
    gr = class {
      #o;
      #n = {};
      #t = {};
      #e = {};
      #i = {};
      #u = !1;
      constructor(t = {}, s, u) {
        try {
          let d;
          if (
            (typeof s == "string" ? (d = s) : (u = s), typeof t == "string")
          ) {
            let c = new xn(t);
            if (
              (c.parse(),
              (t = c.result),
              d === void 0 && typeof t.protocol != "string")
            )
              throw new TypeError(
                "A base URL must be provided for a relative constructor string."
              );
            t.baseURL = d;
          } else {
            if (!t || typeof t != "object")
              throw new TypeError(
                "parameter 1 is not of type 'string' and cannot convert to dictionary."
              );
            if (d) throw new TypeError("parameter 1 is not of type 'string'.");
          }
          typeof u > "u" && (u = { ignoreCase: !1 });
          let k = { ignoreCase: u.ignoreCase === !0 },
            T = {
              pathname: at,
              protocol: at,
              username: at,
              password: at,
              hostname: at,
              port: at,
              search: at,
              hash: at,
            };
          (this.#o = kt(T, t, !0)),
            qr(this.#o.protocol) === this.#o.port && (this.#o.port = "");
          let C;
          for (C of Or) {
            if (!(C in this.#o)) continue;
            let c = {},
              _ = this.#o[C];
            switch (((this.#t[C] = []), C)) {
              case "protocol":
                Object.assign(c, st), (c.encodePart = fr);
                break;
              case "username":
                Object.assign(c, st), (c.encodePart = mn);
                break;
              case "password":
                Object.assign(c, st), (c.encodePart = vn);
                break;
              case "hostname":
                Object.assign(c, Gn),
                  $r(_) ? (c.encodePart = Hr) : (c.encodePart = zr);
                break;
              case "port":
                Object.assign(c, st), (c.encodePart = Br);
                break;
              case "pathname":
                Dr(this.#n.protocol)
                  ? (Object.assign(c, Kn, k), (c.encodePart = bn))
                  : (Object.assign(c, st, k), (c.encodePart = wn));
                break;
              case "search":
                Object.assign(c, st, k), (c.encodePart = yn);
                break;
              case "hash":
                Object.assign(c, st, k), (c.encodePart = _n);
                break;
            }
            try {
              (this.#i[C] = Mr(_, c)),
                (this.#n[C] = jr(this.#i[C], this.#t[C], c)),
                (this.#e[C] = Rn(this.#i[C], c)),
                (this.#u = this.#u || this.#i[C].some((m) => m.type === 2));
            } catch {
              throw new TypeError(`invalid ${C} pattern '${this.#o[C]}'.`);
            }
          }
        } catch (d) {
          throw new TypeError(`Failed to construct 'URLPattern': ${d.message}`);
        }
      }
      get [Symbol.toStringTag]() {
        return "URLPattern";
      }
      test(t = {}, s) {
        let u = {
          pathname: "",
          protocol: "",
          username: "",
          password: "",
          hostname: "",
          port: "",
          search: "",
          hash: "",
        };
        if (typeof t != "string" && s)
          throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return !1;
        try {
          typeof t == "object" ? (u = kt(u, t, !1)) : (u = kt(u, Ir(t, s), !1));
        } catch {
          return !1;
        }
        let d;
        for (d of Or) if (!this.#n[d].exec(u[d])) return !1;
        return !0;
      }
      exec(t = {}, s) {
        let u = {
          pathname: "",
          protocol: "",
          username: "",
          password: "",
          hostname: "",
          port: "",
          search: "",
          hash: "",
        };
        if (typeof t != "string" && s)
          throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return;
        try {
          typeof t == "object" ? (u = kt(u, t, !1)) : (u = kt(u, Ir(t, s), !1));
        } catch {
          return null;
        }
        let d = {};
        s ? (d.inputs = [t, s]) : (d.inputs = [t]);
        let k;
        for (k of Or) {
          let T = this.#n[k].exec(u[k]);
          if (!T) return null;
          let C = {};
          for (let [c, _] of this.#t[k].entries())
            if (typeof _ == "string" || typeof _ == "number") {
              let m = T[c + 1];
              C[_] = m;
            }
          d[k] = { input: u[k] ?? "", groups: C };
        }
        return d;
      }
      static compareComponent(t, s, u) {
        let d = H((c, _) => {
            for (let m of ["type", "modifier", "prefix", "value", "suffix"]) {
              if (c[m] < _[m]) return -1;
              if (c[m] !== _[m]) return 1;
            }
            return 0;
          }, "comparePart"),
          k = new Nt(3, "", "", "", "", 3),
          T = new Nt(0, "", "", "", "", 3),
          C = H((c, _) => {
            let m = 0;
            for (; m < Math.min(c.length, _.length); ++m) {
              let P = d(c[m], _[m]);
              if (P) return P;
            }
            return c.length === _.length ? 0 : d(c[m] ?? k, _[m] ?? k);
          }, "comparePartList");
        return !s.#e[t] && !u.#e[t]
          ? 0
          : s.#e[t] && !u.#e[t]
            ? C(s.#i[t], [T])
            : !s.#e[t] && u.#e[t]
              ? C([T], u.#i[t])
              : C(s.#i[t], u.#i[t]);
      }
      get protocol() {
        return this.#e.protocol;
      }
      get username() {
        return this.#e.username;
      }
      get password() {
        return this.#e.password;
      }
      get hostname() {
        return this.#e.hostname;
      }
      get port() {
        return this.#e.port;
      }
      get pathname() {
        return this.#e.pathname;
      }
      get search() {
        return this.#e.search;
      }
      get hash() {
        return this.#e.hash;
      }
      get hasRegExpGroups() {
        return this.#u;
      }
    };
    H(gr, "URLPattern");
  });
var Cn = {};
Xn(Cn, { URLPattern: () => gr });
var Tn = pr(() => {
  Sn();
  globalThis.URLPattern || (globalThis.URLPattern = gr);
});
var Pn = en(() => {
  "use strict";
  (() => {
    "use strict";
    var t = {},
      s = {};
    function u(d) {
      var k = s[d];
      if (k !== void 0) return k.exports;
      var T = (s[d] = { exports: {} }),
        C = !0;
      try {
        t[d](T, T.exports, u), (C = !1);
      } finally {
        C && delete s[d];
      }
      return T.exports;
    }
    (u.m = t),
      (u.amdO = {}),
      (() => {
        var d = [];
        u.O = (k, T, C, c) => {
          if (T) {
            c = c || 0;
            for (var _ = d.length; _ > 0 && d[_ - 1][2] > c; _--)
              d[_] = d[_ - 1];
            d[_] = [T, C, c];
            return;
          }
          for (var m = 1 / 0, _ = 0; _ < d.length; _++) {
            for (var [T, C, c] = d[_], P = !0, I = 0; I < T.length; I++)
              (!1 & c || m >= c) && Object.keys(u.O).every((v) => u.O[v](T[I]))
                ? T.splice(I--, 1)
                : ((P = !1), c < m && (m = c));
            if (P) {
              d.splice(_--, 1);
              var y = C();
              y !== void 0 && (k = y);
            }
          }
          return k;
        };
      })(),
      (u.n = (d) => {
        var k = d && d.__esModule ? () => d.default : () => d;
        return u.d(k, { a: k }), k;
      }),
      (u.d = (d, k) => {
        for (var T in k)
          u.o(k, T) &&
            !u.o(d, T) &&
            Object.defineProperty(d, T, { enumerable: !0, get: k[T] });
      }),
      (u.g = (function () {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      })()),
      (u.o = (d, k) => Object.prototype.hasOwnProperty.call(d, k)),
      (u.r = (d) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(d, "__esModule", { value: !0 });
      }),
      (() => {
        var d = { 149: 0 };
        u.O.j = (C) => d[C] === 0;
        var k = (C, c) => {
            var _,
              m,
              [P, I, y] = c,
              l = 0;
            if (P.some((S) => d[S] !== 0)) {
              for (_ in I) u.o(I, _) && (u.m[_] = I[_]);
              if (y) var x = y(u);
            }
            for (C && C(c); l < P.length; l++)
              (m = P[l]), u.o(d, m) && d[m] && d[m][0](), (d[m] = 0);
            return u.O(x);
          },
          T = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
        T.forEach(k.bind(null, 0)), (T.push = k.bind(null, T.push.bind(T)));
      })();
  })();
});
var Kt = {};
import * as ai from "node:buffer";
var kn = pr(() => {
  Pt(Kt, ai);
});
var Yt = {};
import * as si from "node:async_hooks";
var On = pr(() => {
  Pt(Yt, si);
});
var Nn = en(() => {
  "use strict";
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [550],
    {
      239: (t, s, u) => {
        "use strict";
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (function (c, _) {
            for (var m in _)
              Object.defineProperty(c, m, { enumerable: !0, get: _[m] });
          })(s, {
            interceptTestApis: function () {
              return T;
            },
            wrapRequestHandler: function () {
              return C;
            },
          });
        let d = u(415),
          k = u(930);
        function T() {
          return (0, k.interceptFetch)(u.g.fetch);
        }
        function C(c) {
          return (_, m) => (0, d.withRequest)(_, k.reader, () => c(_, m));
        }
      },
      289: (t, s, u) => {
        "use strict";
        let d;
        u.r(s), u.d(s, { default: () => Mn });
        var k,
          T = {};
        async function C() {
          return (
            "_ENTRIES" in globalThis &&
            _ENTRIES.middleware_instrumentation &&
            (await _ENTRIES.middleware_instrumentation)
          );
        }
        u.r(T), u.d(T, { config: () => Ln, middleware: () => In });
        let c = null;
        async function _() {
          if (process.env.NEXT_PHASE === "phase-production-build") return;
          c || (c = C());
          let n = await c;
          if (n?.register)
            try {
              await n.register();
            } catch (e) {
              throw (
                ((e.message = `An error occurred while loading instrumentation hook: ${e.message}`),
                e)
              );
            }
        }
        async function m(...n) {
          let e = await C();
          try {
            var i;
            await (e == null || (i = e.onRequestError) == null
              ? void 0
              : i.call(e, ...n));
          } catch (a) {
            console.error("Error in instrumentation.onRequestError:", a);
          }
        }
        let P = null;
        function I() {
          return P || (P = _()), P;
        }
        function y(n) {
          return `The edge runtime does not support Node.js '${n}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
        }
        process !== u.g.process &&
          ((process.env = u.g.process.env), (u.g.process = process)),
          Object.defineProperty(globalThis, "__import_unsupported", {
            value: function (n) {
              let e = new Proxy(function () {}, {
                get(i, a) {
                  if (a === "then") return {};
                  throw Object.defineProperty(
                    Error(y(n)),
                    "__NEXT_ERROR_CODE",
                    { value: "E394", enumerable: !1, configurable: !0 }
                  );
                },
                construct() {
                  throw Object.defineProperty(
                    Error(y(n)),
                    "__NEXT_ERROR_CODE",
                    { value: "E394", enumerable: !1, configurable: !0 }
                  );
                },
                apply(i, a, w) {
                  if (typeof w[0] == "function") return w[0](e);
                  throw Object.defineProperty(
                    Error(y(n)),
                    "__NEXT_ERROR_CODE",
                    { value: "E394", enumerable: !1, configurable: !0 }
                  );
                },
              });
              return new Proxy({}, { get: () => e });
            },
            enumerable: !1,
            configurable: !1,
          }),
          I();
        class l extends Error {
          constructor({ page: e }) {
            super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
          }
        }
        class x extends Error {
          constructor() {
            super(
              "The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  "
            );
          }
        }
        class S extends Error {
          constructor() {
            super(
              "The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  "
            );
          }
        }
        let p = "_N_T_",
          v = {
            shared: "shared",
            reactServerComponents: "rsc",
            serverSideRendering: "ssr",
            actionBrowser: "action-browser",
            apiNode: "api-node",
            apiEdge: "api-edge",
            middleware: "middleware",
            instrument: "instrument",
            edgeAsset: "edge-asset",
            appPagesBrowser: "app-pages-browser",
            pagesDirBrowser: "pages-dir-browser",
            pagesDirEdge: "pages-dir-edge",
            pagesDirNode: "pages-dir-node",
          };
        function g(n) {
          var e,
            i,
            a,
            w,
            O,
            q = [],
            M = 0;
          function V() {
            for (; M < n.length && /\s/.test(n.charAt(M)); ) M += 1;
            return M < n.length;
          }
          for (; M < n.length; ) {
            for (e = M, O = !1; V(); )
              if ((i = n.charAt(M)) === ",") {
                for (
                  a = M, M += 1, V(), w = M;
                  M < n.length &&
                  (i = n.charAt(M)) !== "=" &&
                  i !== ";" &&
                  i !== ",";

                )
                  M += 1;
                M < n.length && n.charAt(M) === "="
                  ? ((O = !0), (M = w), q.push(n.substring(e, a)), (e = M))
                  : (M = a + 1);
              } else M += 1;
            (!O || M >= n.length) && q.push(n.substring(e, n.length));
          }
          return q;
        }
        function f(n) {
          let e = {},
            i = [];
          if (n)
            for (let [a, w] of n.entries())
              a.toLowerCase() === "set-cookie"
                ? (i.push(...g(w)), (e[a] = i.length === 1 ? i[0] : i))
                : (e[a] = w);
          return e;
        }
        function E(n) {
          try {
            return String(new URL(String(n)));
          } catch (e) {
            throw Object.defineProperty(
              Error(
                `URL is malformed "${String(n)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
                { cause: e }
              ),
              "__NEXT_ERROR_CODE",
              { value: "E61", enumerable: !1, configurable: !0 }
            );
          }
        }
        ({
          ...v,
          GROUP:
            (v.reactServerComponents,
            v.actionBrowser,
            v.reactServerComponents,
            v.actionBrowser,
            v.instrument,
            v.middleware,
            v.apiNode,
            v.apiEdge,
            v.serverSideRendering,
            v.appPagesBrowser,
            v.reactServerComponents,
            v.actionBrowser,
            v.serverSideRendering,
            v.appPagesBrowser,
            v.shared,
            v.instrument,
            v.middleware,
            v.reactServerComponents,
            v.serverSideRendering,
            v.appPagesBrowser,
            v.actionBrowser),
        });
        let j = Symbol("response"),
          U = Symbol("passThrough"),
          N = Symbol("waitUntil");
        class $ {
          constructor(e, i) {
            (this[U] = !1),
              (this[N] = i
                ? { kind: "external", function: i }
                : { kind: "internal", promises: [] });
          }
          respondWith(e) {
            this[j] || (this[j] = Promise.resolve(e));
          }
          passThroughOnException() {
            this[U] = !0;
          }
          waitUntil(e) {
            if (this[N].kind === "external") return (0, this[N].function)(e);
            this[N].promises.push(e);
          }
        }
        class G extends $ {
          constructor(e) {
            var i;
            super(e.request, (i = e.context) == null ? void 0 : i.waitUntil),
              (this.sourcePage = e.page);
          }
          get request() {
            throw Object.defineProperty(
              new l({ page: this.sourcePage }),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          }
          respondWith() {
            throw Object.defineProperty(
              new l({ page: this.sourcePage }),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          }
        }
        function W(n) {
          return n.replace(/\/$/, "") || "/";
        }
        function ie(n) {
          let e = n.indexOf("#"),
            i = n.indexOf("?"),
            a = i > -1 && (e < 0 || i < e);
          return a || e > -1
            ? {
                pathname: n.substring(0, a ? i : e),
                query: a ? n.substring(i, e > -1 ? e : void 0) : "",
                hash: e > -1 ? n.slice(e) : "",
              }
            : { pathname: n, query: "", hash: "" };
        }
        function Re(n, e) {
          if (!n.startsWith("/") || !e) return n;
          let { pathname: i, query: a, hash: w } = ie(n);
          return "" + e + i + a + w;
        }
        function we(n, e) {
          if (!n.startsWith("/") || !e) return n;
          let { pathname: i, query: a, hash: w } = ie(n);
          return "" + i + e + a + w;
        }
        function ye(n, e) {
          if (typeof n != "string") return !1;
          let { pathname: i } = ie(n);
          return i === e || i.startsWith(e + "/");
        }
        let He = new WeakMap();
        function Pe(n, e) {
          let i;
          if (!e) return { pathname: n };
          let a = He.get(e);
          a || ((a = e.map((M) => M.toLowerCase())), He.set(e, a));
          let w = n.split("/", 2);
          if (!w[1]) return { pathname: n };
          let O = w[1].toLowerCase(),
            q = a.indexOf(O);
          return q < 0
            ? { pathname: n }
            : ((i = e[q]),
              {
                pathname: (n = n.slice(i.length + 1) || "/"),
                detectedLocale: i,
              });
        }
        let Le =
          /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
        function Be(n, e) {
          return new URL(
            String(n).replace(Le, "localhost"),
            e && String(e).replace(Le, "localhost")
          );
        }
        let L = Symbol("NextURLInternal");
        class ke {
          constructor(e, i, a) {
            let w, O;
            (typeof i == "object" && "pathname" in i) || typeof i == "string"
              ? ((w = i), (O = a || {}))
              : (O = a || i || {}),
              (this[L] = { url: Be(e, w ?? O.base), options: O, basePath: "" }),
              this.analyze();
          }
          analyze() {
            var e, i, a, w, O;
            let q = (function (K, te) {
                var z, ne;
                let {
                    basePath: oe,
                    i18n: he,
                    trailingSlash: de,
                  } = (z = te.nextConfig) != null ? z : {},
                  J = {
                    pathname: K,
                    trailingSlash: K !== "/" ? K.endsWith("/") : de,
                  };
                oe &&
                  ye(J.pathname, oe) &&
                  ((J.pathname = (function (fe, F) {
                    if (!ye(fe, F)) return fe;
                    let ae = fe.slice(F.length);
                    return ae.startsWith("/") ? ae : "/" + ae;
                  })(J.pathname, oe)),
                  (J.basePath = oe));
                let De = J.pathname;
                if (
                  J.pathname.startsWith("/_next/data/") &&
                  J.pathname.endsWith(".json")
                ) {
                  let fe = J.pathname
                    .replace(/^\/_next\/data\//, "")
                    .replace(/\.json$/, "")
                    .split("/");
                  (J.buildId = fe[0]),
                    (De =
                      fe[1] !== "index" ? "/" + fe.slice(1).join("/") : "/"),
                    te.parseData === !0 && (J.pathname = De);
                }
                if (he) {
                  let fe = te.i18nProvider
                    ? te.i18nProvider.analyze(J.pathname)
                    : Pe(J.pathname, he.locales);
                  (J.locale = fe.detectedLocale),
                    (J.pathname = (ne = fe.pathname) != null ? ne : J.pathname),
                    !fe.detectedLocale &&
                      J.buildId &&
                      (fe = te.i18nProvider
                        ? te.i18nProvider.analyze(De)
                        : Pe(De, he.locales)).detectedLocale &&
                      (J.locale = fe.detectedLocale);
                }
                return J;
              })(this[L].url.pathname, {
                nextConfig: this[L].options.nextConfig,
                parseData: !0,
                i18nProvider: this[L].options.i18nProvider,
              }),
              M = (function (K, te) {
                let z;
                if (te?.host && !Array.isArray(te.host))
                  z = te.host.toString().split(":", 1)[0];
                else {
                  if (!K.hostname) return;
                  z = K.hostname;
                }
                return z.toLowerCase();
              })(this[L].url, this[L].options.headers);
            this[L].domainLocale = this[L].options.i18nProvider
              ? this[L].options.i18nProvider.detectDomainLocale(M)
              : (function (K, te, z) {
                  if (K)
                    for (let he of (z && (z = z.toLowerCase()), K)) {
                      var ne, oe;
                      if (
                        te ===
                          ((ne = he.domain) == null
                            ? void 0
                            : ne.split(":", 1)[0].toLowerCase()) ||
                        z === he.defaultLocale.toLowerCase() ||
                        ((oe = he.locales) != null &&
                          oe.some((de) => de.toLowerCase() === z))
                      )
                        return he;
                    }
                })(
                  (i = this[L].options.nextConfig) == null ||
                    (e = i.i18n) == null
                    ? void 0
                    : e.domains,
                  M
                );
            let V =
              ((a = this[L].domainLocale) == null ? void 0 : a.defaultLocale) ||
              ((O = this[L].options.nextConfig) == null || (w = O.i18n) == null
                ? void 0
                : w.defaultLocale);
            (this[L].url.pathname = q.pathname),
              (this[L].defaultLocale = V),
              (this[L].basePath = q.basePath ?? ""),
              (this[L].buildId = q.buildId),
              (this[L].locale = q.locale ?? V),
              (this[L].trailingSlash = q.trailingSlash);
          }
          formatPathname() {
            var e;
            let i;
            return (
              (i = (function (a, w, O, q) {
                if (!w || w === O) return a;
                let M = a.toLowerCase();
                return !q && (ye(M, "/api") || ye(M, "/" + w.toLowerCase()))
                  ? a
                  : Re(a, "/" + w);
              })(
                (e = {
                  basePath: this[L].basePath,
                  buildId: this[L].buildId,
                  defaultLocale: this[L].options.forceLocale
                    ? void 0
                    : this[L].defaultLocale,
                  locale: this[L].locale,
                  pathname: this[L].url.pathname,
                  trailingSlash: this[L].trailingSlash,
                }).pathname,
                e.locale,
                e.buildId ? void 0 : e.defaultLocale,
                e.ignorePrefix
              )),
              (e.buildId || !e.trailingSlash) && (i = W(i)),
              e.buildId &&
                (i = we(
                  Re(i, "/_next/data/" + e.buildId),
                  e.pathname === "/" ? "index.json" : ".json"
                )),
              (i = Re(i, e.basePath)),
              !e.buildId && e.trailingSlash
                ? i.endsWith("/")
                  ? i
                  : we(i, "/")
                : W(i)
            );
          }
          formatSearch() {
            return this[L].url.search;
          }
          get buildId() {
            return this[L].buildId;
          }
          set buildId(e) {
            this[L].buildId = e;
          }
          get locale() {
            return this[L].locale ?? "";
          }
          set locale(e) {
            var i, a;
            if (
              !this[L].locale ||
              !(
                !(
                  (a = this[L].options.nextConfig) == null ||
                  (i = a.i18n) == null
                ) && i.locales.includes(e)
              )
            )
              throw Object.defineProperty(
                TypeError(
                  `The NextURL configuration includes no locale "${e}"`
                ),
                "__NEXT_ERROR_CODE",
                { value: "E597", enumerable: !1, configurable: !0 }
              );
            this[L].locale = e;
          }
          get defaultLocale() {
            return this[L].defaultLocale;
          }
          get domainLocale() {
            return this[L].domainLocale;
          }
          get searchParams() {
            return this[L].url.searchParams;
          }
          get host() {
            return this[L].url.host;
          }
          set host(e) {
            this[L].url.host = e;
          }
          get hostname() {
            return this[L].url.hostname;
          }
          set hostname(e) {
            this[L].url.hostname = e;
          }
          get port() {
            return this[L].url.port;
          }
          set port(e) {
            this[L].url.port = e;
          }
          get protocol() {
            return this[L].url.protocol;
          }
          set protocol(e) {
            this[L].url.protocol = e;
          }
          get href() {
            let e = this.formatPathname(),
              i = this.formatSearch();
            return `${this.protocol}//${this.host}${e}${i}${this.hash}`;
          }
          set href(e) {
            (this[L].url = Be(e)), this.analyze();
          }
          get origin() {
            return this[L].url.origin;
          }
          get pathname() {
            return this[L].url.pathname;
          }
          set pathname(e) {
            this[L].url.pathname = e;
          }
          get hash() {
            return this[L].url.hash;
          }
          set hash(e) {
            this[L].url.hash = e;
          }
          get search() {
            return this[L].url.search;
          }
          set search(e) {
            this[L].url.search = e;
          }
          get password() {
            return this[L].url.password;
          }
          set password(e) {
            this[L].url.password = e;
          }
          get username() {
            return this[L].url.username;
          }
          set username(e) {
            this[L].url.username = e;
          }
          get basePath() {
            return this[L].basePath;
          }
          set basePath(e) {
            this[L].basePath = e.startsWith("/") ? e : `/${e}`;
          }
          toString() {
            return this.href;
          }
          toJSON() {
            return this.href;
          }
          [Symbol.for("edge-runtime.inspect.custom")]() {
            return {
              href: this.href,
              origin: this.origin,
              protocol: this.protocol,
              username: this.username,
              password: this.password,
              host: this.host,
              hostname: this.hostname,
              port: this.port,
              pathname: this.pathname,
              search: this.search,
              searchParams: this.searchParams,
              hash: this.hash,
            };
          }
          clone() {
            return new ke(String(this), this[L].options);
          }
        }
        var ge = u(962);
        let Xe = Symbol("internal request");
        class Ye extends Request {
          constructor(e, i = {}) {
            let a = typeof e != "string" && "url" in e ? e.url : String(e);
            E(a), e instanceof Request ? super(e, i) : super(a, i);
            let w = new ke(a, {
              headers: f(this.headers),
              nextConfig: i.nextConfig,
            });
            this[Xe] = {
              cookies: new ge.RequestCookies(this.headers),
              nextUrl: w,
              url: w.toString(),
            };
          }
          [Symbol.for("edge-runtime.inspect.custom")]() {
            return {
              cookies: this.cookies,
              nextUrl: this.nextUrl,
              url: this.url,
              bodyUsed: this.bodyUsed,
              cache: this.cache,
              credentials: this.credentials,
              destination: this.destination,
              headers: Object.fromEntries(this.headers),
              integrity: this.integrity,
              keepalive: this.keepalive,
              method: this.method,
              mode: this.mode,
              redirect: this.redirect,
              referrer: this.referrer,
              referrerPolicy: this.referrerPolicy,
              signal: this.signal,
            };
          }
          get cookies() {
            return this[Xe].cookies;
          }
          get nextUrl() {
            return this[Xe].nextUrl;
          }
          get page() {
            throw new x();
          }
          get ua() {
            throw new S();
          }
          get url() {
            return this[Xe].url;
          }
        }
        class pe {
          static get(e, i, a) {
            let w = Reflect.get(e, i, a);
            return typeof w == "function" ? w.bind(e) : w;
          }
          static set(e, i, a, w) {
            return Reflect.set(e, i, a, w);
          }
          static has(e, i) {
            return Reflect.has(e, i);
          }
          static deleteProperty(e, i) {
            return Reflect.deleteProperty(e, i);
          }
        }
        let lt = Symbol("internal response"),
          Me = new Set([301, 302, 303, 307, 308]);
        function We(n, e) {
          var i;
          if (!(n == null || (i = n.request) == null) && i.headers) {
            if (!(n.request.headers instanceof Headers))
              throw Object.defineProperty(
                Error("request.headers must be an instance of Headers"),
                "__NEXT_ERROR_CODE",
                { value: "E119", enumerable: !1, configurable: !0 }
              );
            let a = [];
            for (let [w, O] of n.request.headers)
              e.set("x-middleware-request-" + w, O), a.push(w);
            e.set("x-middleware-override-headers", a.join(","));
          }
        }
        class me extends Response {
          constructor(e, i = {}) {
            super(e, i);
            let a = this.headers,
              w = new Proxy(new ge.ResponseCookies(a), {
                get(O, q, M) {
                  switch (q) {
                    case "delete":
                    case "set":
                      return (...V) => {
                        let K = Reflect.apply(O[q], O, V),
                          te = new Headers(a);
                        return (
                          K instanceof ge.ResponseCookies &&
                            a.set(
                              "x-middleware-set-cookie",
                              K.getAll()
                                .map((z) => (0, ge.stringifyCookie)(z))
                                .join(",")
                            ),
                          We(i, te),
                          K
                        );
                      };
                    default:
                      return pe.get(O, q, M);
                  }
                },
              });
            this[lt] = {
              cookies: w,
              url: i.url
                ? new ke(i.url, { headers: f(a), nextConfig: i.nextConfig })
                : void 0,
            };
          }
          [Symbol.for("edge-runtime.inspect.custom")]() {
            return {
              cookies: this.cookies,
              url: this.url,
              body: this.body,
              bodyUsed: this.bodyUsed,
              headers: Object.fromEntries(this.headers),
              ok: this.ok,
              redirected: this.redirected,
              status: this.status,
              statusText: this.statusText,
              type: this.type,
            };
          }
          get cookies() {
            return this[lt].cookies;
          }
          static json(e, i) {
            let a = Response.json(e, i);
            return new me(a.body, a);
          }
          static redirect(e, i) {
            let a = typeof i == "number" ? i : (i?.status ?? 307);
            if (!Me.has(a))
              throw Object.defineProperty(
                RangeError(
                  'Failed to execute "redirect" on "response": Invalid status code'
                ),
                "__NEXT_ERROR_CODE",
                { value: "E529", enumerable: !1, configurable: !0 }
              );
            let w = typeof i == "object" ? i : {},
              O = new Headers(w?.headers);
            return (
              O.set("Location", E(e)),
              new me(null, { ...w, headers: O, status: a })
            );
          }
          static rewrite(e, i) {
            let a = new Headers(i?.headers);
            return (
              a.set("x-middleware-rewrite", E(e)),
              We(i, a),
              new me(null, { ...i, headers: a })
            );
          }
          static next(e) {
            let i = new Headers(e?.headers);
            return (
              i.set("x-middleware-next", "1"),
              We(e, i),
              new me(null, { ...e, headers: i })
            );
          }
        }
        function ut(n, e) {
          let i = typeof e == "string" ? new URL(e) : e,
            a = new URL(n, e),
            w = a.origin === i.origin;
          return {
            url: w ? a.toString().slice(i.origin.length) : a.toString(),
            isRelative: w,
          };
        }
        let Qe = "Next-Router-Prefetch",
          ct = [
            "RSC",
            "Next-Router-State-Tree",
            Qe,
            "Next-HMR-Refresh",
            "Next-Router-Segment-Prefetch",
          ],
          At = "_rsc";
        class je extends Error {
          constructor() {
            super(
              "Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers"
            );
          }
          static callable() {
            throw new je();
          }
        }
        class Oe extends Headers {
          constructor(e) {
            super(),
              (this.headers = new Proxy(e, {
                get(i, a, w) {
                  if (typeof a == "symbol") return pe.get(i, a, w);
                  let O = a.toLowerCase(),
                    q = Object.keys(e).find((M) => M.toLowerCase() === O);
                  if (q !== void 0) return pe.get(i, q, w);
                },
                set(i, a, w, O) {
                  if (typeof a == "symbol") return pe.set(i, a, w, O);
                  let q = a.toLowerCase(),
                    M = Object.keys(e).find((V) => V.toLowerCase() === q);
                  return pe.set(i, M ?? a, w, O);
                },
                has(i, a) {
                  if (typeof a == "symbol") return pe.has(i, a);
                  let w = a.toLowerCase(),
                    O = Object.keys(e).find((q) => q.toLowerCase() === w);
                  return O !== void 0 && pe.has(i, O);
                },
                deleteProperty(i, a) {
                  if (typeof a == "symbol") return pe.deleteProperty(i, a);
                  let w = a.toLowerCase(),
                    O = Object.keys(e).find((q) => q.toLowerCase() === w);
                  return O === void 0 || pe.deleteProperty(i, O);
                },
              }));
          }
          static seal(e) {
            return new Proxy(e, {
              get(i, a, w) {
                switch (a) {
                  case "append":
                  case "delete":
                  case "set":
                    return je.callable;
                  default:
                    return pe.get(i, a, w);
                }
              },
            });
          }
          merge(e) {
            return Array.isArray(e) ? e.join(", ") : e;
          }
          static from(e) {
            return e instanceof Headers ? e : new Oe(e);
          }
          append(e, i) {
            let a = this.headers[e];
            typeof a == "string"
              ? (this.headers[e] = [a, i])
              : Array.isArray(a)
                ? a.push(i)
                : (this.headers[e] = i);
          }
          delete(e) {
            delete this.headers[e];
          }
          get(e) {
            let i = this.headers[e];
            return i !== void 0 ? this.merge(i) : null;
          }
          has(e) {
            return this.headers[e] !== void 0;
          }
          set(e, i) {
            this.headers[e] = i;
          }
          forEach(e, i) {
            for (let [a, w] of this.entries()) e.call(i, w, a, this);
          }
          *entries() {
            for (let e of Object.keys(this.headers)) {
              let i = e.toLowerCase(),
                a = this.get(i);
              yield [i, a];
            }
          }
          *keys() {
            for (let e of Object.keys(this.headers)) yield e.toLowerCase();
          }
          *values() {
            for (let e of Object.keys(this.headers)) yield this.get(e);
          }
          [Symbol.iterator]() {
            return this.entries();
          }
        }
        let Ne = Object.defineProperty(
          Error(
            "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E504", enumerable: !1, configurable: !0 }
        );
        class ht {
          disable() {
            throw Ne;
          }
          getStore() {}
          run() {
            throw Ne;
          }
          exit() {
            throw Ne;
          }
          enterWith() {
            throw Ne;
          }
          static bind(e) {
            return e;
          }
        }
        let Ue = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
        function Ze() {
          return Ue ? new Ue() : new ht();
        }
        let Ve = Ze(),
          Fe = Ze();
        class ue extends Error {
          constructor() {
            super(
              "Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options"
            );
          }
          static callable() {
            throw new ue();
          }
        }
        class $e {
          static seal(e) {
            return new Proxy(e, {
              get(i, a, w) {
                switch (a) {
                  case "clear":
                  case "delete":
                  case "set":
                    return ue.callable;
                  default:
                    return pe.get(i, a, w);
                }
              },
            });
          }
        }
        let Je = Symbol.for("next.mutated.cookies");
        class Y {
          static wrap(e, i) {
            let a = new ge.ResponseCookies(new Headers());
            for (let V of e.getAll()) a.set(V);
            let w = [],
              O = new Set(),
              q = () => {
                let V = Ve.getStore();
                if (
                  (V && (V.pathWasRevalidated = !0),
                  (w = a.getAll().filter((K) => O.has(K.name))),
                  i)
                ) {
                  let K = [];
                  for (let te of w) {
                    let z = new ge.ResponseCookies(new Headers());
                    z.set(te), K.push(z.toString());
                  }
                  i(K);
                }
              },
              M = new Proxy(a, {
                get(V, K, te) {
                  switch (K) {
                    case Je:
                      return w;
                    case "delete":
                      return function (...z) {
                        O.add(typeof z[0] == "string" ? z[0] : z[0].name);
                        try {
                          return V.delete(...z), M;
                        } finally {
                          q();
                        }
                      };
                    case "set":
                      return function (...z) {
                        O.add(typeof z[0] == "string" ? z[0] : z[0].name);
                        try {
                          return V.set(...z), M;
                        } finally {
                          q();
                        }
                      };
                    default:
                      return pe.get(V, K, te);
                  }
                },
              });
            return M;
          }
        }
        function ee(n) {
          if (
            (function (e) {
              let i = Fe.getStore();
              switch (
                (!i &&
                  (function (a) {
                    throw Object.defineProperty(
                      Error(
                        `\`${a}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`
                      ),
                      "__NEXT_ERROR_CODE",
                      { value: "E251", enumerable: !1, configurable: !0 }
                    );
                  })(e),
                i.type)
              ) {
                case "request":
                default:
                  return i;
                case "prerender":
                case "prerender-ppr":
                case "prerender-legacy":
                  throw Object.defineProperty(
                    Error(
                      `\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E401", enumerable: !1, configurable: !0 }
                  );
                case "cache":
                  throw Object.defineProperty(
                    Error(
                      `\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E37", enumerable: !1, configurable: !0 }
                  );
                case "unstable-cache":
                  throw Object.defineProperty(
                    Error(
                      `\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E69", enumerable: !1, configurable: !0 }
                  );
              }
            })(n).phase !== "action"
          )
            throw new ue();
        }
        var X = (function (n) {
            return (
              (n.handleRequest = "BaseServer.handleRequest"),
              (n.run = "BaseServer.run"),
              (n.pipe = "BaseServer.pipe"),
              (n.getStaticHTML = "BaseServer.getStaticHTML"),
              (n.render = "BaseServer.render"),
              (n.renderToResponseWithComponents =
                "BaseServer.renderToResponseWithComponents"),
              (n.renderToResponse = "BaseServer.renderToResponse"),
              (n.renderToHTML = "BaseServer.renderToHTML"),
              (n.renderError = "BaseServer.renderError"),
              (n.renderErrorToResponse = "BaseServer.renderErrorToResponse"),
              (n.renderErrorToHTML = "BaseServer.renderErrorToHTML"),
              (n.render404 = "BaseServer.render404"),
              n
            );
          })(X || {}),
          re = (function (n) {
            return (
              (n.loadDefaultErrorComponents =
                "LoadComponents.loadDefaultErrorComponents"),
              (n.loadComponents = "LoadComponents.loadComponents"),
              n
            );
          })(re || {}),
          ve = (function (n) {
            return (
              (n.getRequestHandler = "NextServer.getRequestHandler"),
              (n.getServer = "NextServer.getServer"),
              (n.getServerRequestHandler =
                "NextServer.getServerRequestHandler"),
              (n.createServer = "createServer.createServer"),
              n
            );
          })(ve || {}),
          Q = (function (n) {
            return (
              (n.compression = "NextNodeServer.compression"),
              (n.getBuildId = "NextNodeServer.getBuildId"),
              (n.createComponentTree = "NextNodeServer.createComponentTree"),
              (n.clientComponentLoading =
                "NextNodeServer.clientComponentLoading"),
              (n.getLayoutOrPageModule =
                "NextNodeServer.getLayoutOrPageModule"),
              (n.generateStaticRoutes = "NextNodeServer.generateStaticRoutes"),
              (n.generateFsStaticRoutes =
                "NextNodeServer.generateFsStaticRoutes"),
              (n.generatePublicRoutes = "NextNodeServer.generatePublicRoutes"),
              (n.generateImageRoutes =
                "NextNodeServer.generateImageRoutes.route"),
              (n.sendRenderResult = "NextNodeServer.sendRenderResult"),
              (n.proxyRequest = "NextNodeServer.proxyRequest"),
              (n.runApi = "NextNodeServer.runApi"),
              (n.render = "NextNodeServer.render"),
              (n.renderHTML = "NextNodeServer.renderHTML"),
              (n.imageOptimizer = "NextNodeServer.imageOptimizer"),
              (n.getPagePath = "NextNodeServer.getPagePath"),
              (n.getRoutesManifest = "NextNodeServer.getRoutesManifest"),
              (n.findPageComponents = "NextNodeServer.findPageComponents"),
              (n.getFontManifest = "NextNodeServer.getFontManifest"),
              (n.getServerComponentManifest =
                "NextNodeServer.getServerComponentManifest"),
              (n.getRequestHandler = "NextNodeServer.getRequestHandler"),
              (n.renderToHTML = "NextNodeServer.renderToHTML"),
              (n.renderError = "NextNodeServer.renderError"),
              (n.renderErrorToHTML = "NextNodeServer.renderErrorToHTML"),
              (n.render404 = "NextNodeServer.render404"),
              (n.startResponse = "NextNodeServer.startResponse"),
              (n.route = "route"),
              (n.onProxyReq = "onProxyReq"),
              (n.apiResolver = "apiResolver"),
              (n.internalFetch = "internalFetch"),
              n
            );
          })(Q || {}),
          _e = (function (n) {
            return (n.startServer = "startServer.startServer"), n;
          })(_e || {}),
          B = (function (n) {
            return (
              (n.getServerSideProps = "Render.getServerSideProps"),
              (n.getStaticProps = "Render.getStaticProps"),
              (n.renderToString = "Render.renderToString"),
              (n.renderDocument = "Render.renderDocument"),
              (n.createBodyResult = "Render.createBodyResult"),
              n
            );
          })(B || {}),
          ce = (function (n) {
            return (
              (n.renderToString = "AppRender.renderToString"),
              (n.renderToReadableStream = "AppRender.renderToReadableStream"),
              (n.getBodyResult = "AppRender.getBodyResult"),
              (n.fetch = "AppRender.fetch"),
              n
            );
          })(ce || {}),
          Ge = (function (n) {
            return (n.executeRoute = "Router.executeRoute"), n;
          })(Ge || {}),
          et = (function (n) {
            return (n.runHandler = "Node.runHandler"), n;
          })(et || {}),
          mr = (function (n) {
            return (n.runHandler = "AppRouteRouteHandlers.runHandler"), n;
          })(mr || {}),
          It = (function (n) {
            return (
              (n.generateMetadata = "ResolveMetadata.generateMetadata"),
              (n.generateViewport = "ResolveMetadata.generateViewport"),
              n
            );
          })(It || {}),
          Qt = (function (n) {
            return (n.execute = "Middleware.execute"), n;
          })(Qt || {});
        let Zt = [
            "Middleware.execute",
            "BaseServer.handleRequest",
            "Render.getServerSideProps",
            "Render.getStaticProps",
            "AppRender.fetch",
            "AppRender.getBodyResult",
            "Render.renderDocument",
            "Node.runHandler",
            "AppRouteRouteHandlers.runHandler",
            "ResolveMetadata.generateMetadata",
            "ResolveMetadata.generateViewport",
            "NextNodeServer.createComponentTree",
            "NextNodeServer.findPageComponents",
            "NextNodeServer.getLayoutOrPageModule",
            "NextNodeServer.startResponse",
            "NextNodeServer.clientComponentLoading",
          ],
          Jt = [
            "NextNodeServer.findPageComponents",
            "NextNodeServer.createComponentTree",
            "NextNodeServer.clientComponentLoading",
          ];
        function er(n) {
          return (
            n !== null &&
            typeof n == "object" &&
            "then" in n &&
            typeof n.then == "function"
          );
        }
        let {
          context: xe,
          propagation: Lt,
          trace: tt,
          SpanStatusCode: Mt,
          SpanKind: Fr,
          ROOT_CONTEXT: jt,
        } = (d = u(674));
        class tr extends Error {
          constructor(e, i) {
            super(), (this.bubble = e), (this.result = i);
          }
        }
        let Ut = (n, e) => {
            (function (i) {
              return typeof i == "object" && i !== null && i instanceof tr;
            })(e) && e.bubble
              ? n.setAttribute("next.bubble", !0)
              : (e && n.recordException(e),
                n.setStatus({ code: Mt.ERROR, message: e?.message })),
              n.end();
          },
          dt = new Map(),
          $t = d.createContextKey("next.rootSpanId"),
          Dt = 0,
          qt = () => Dt++,
          vr = {
            set(n, e, i) {
              n.push({ key: e, value: i });
            },
          };
        class br {
          getTracerInstance() {
            return tt.getTracer("next.js", "0.0.1");
          }
          getContext() {
            return xe;
          }
          getTracePropagationData() {
            let e = xe.active(),
              i = [];
            return Lt.inject(e, i, vr), i;
          }
          getActiveScopeSpan() {
            return tt.getSpan(xe?.active());
          }
          withPropagatedContext(e, i, a) {
            let w = xe.active();
            if (tt.getSpanContext(w)) return i();
            let O = Lt.extract(w, e, a);
            return xe.with(O, i);
          }
          trace(...e) {
            var i;
            let [a, w, O] = e,
              { fn: q, options: M } =
                typeof w == "function"
                  ? { fn: w, options: {} }
                  : { fn: O, options: { ...w } },
              V = M.spanName ?? a;
            if (
              (!Zt.includes(a) && process.env.NEXT_OTEL_VERBOSE !== "1") ||
              M.hideSpan
            )
              return q();
            let K = this.getSpanContext(
                M?.parentSpan ?? this.getActiveScopeSpan()
              ),
              te = !1;
            K
              ? (i = tt.getSpanContext(K)) != null && i.isRemote && (te = !0)
              : ((K = xe?.active() ?? jt), (te = !0));
            let z = qt();
            return (
              (M.attributes = {
                "next.span_name": V,
                "next.span_type": a,
                ...M.attributes,
              }),
              xe.with(K.setValue($t, z), () =>
                this.getTracerInstance().startActiveSpan(V, M, (ne) => {
                  let oe =
                      "performance" in globalThis && "measure" in performance
                        ? globalThis.performance.now()
                        : void 0,
                    he = () => {
                      dt.delete(z),
                        oe &&
                          process.env.NEXT_OTEL_PERFORMANCE_PREFIX &&
                          Jt.includes(a || "") &&
                          performance.measure(
                            `${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(a.split(".").pop() || "").replace(/[A-Z]/g, (de) => "-" + de.toLowerCase())}`,
                            { start: oe, end: performance.now() }
                          );
                    };
                  te && dt.set(z, new Map(Object.entries(M.attributes ?? {})));
                  try {
                    if (q.length > 1) return q(ne, (J) => Ut(ne, J));
                    let de = q(ne);
                    return er(de)
                      ? de
                          .then((J) => (ne.end(), J))
                          .catch((J) => {
                            throw (Ut(ne, J), J);
                          })
                          .finally(he)
                      : (ne.end(), he(), de);
                  } catch (de) {
                    throw (Ut(ne, de), he(), de);
                  }
                })
              )
            );
          }
          wrap(...e) {
            let i = this,
              [a, w, O] = e.length === 3 ? e : [e[0], {}, e[1]];
            return Zt.includes(a) || process.env.NEXT_OTEL_VERBOSE === "1"
              ? function () {
                  let q = w;
                  typeof q == "function" &&
                    typeof O == "function" &&
                    (q = q.apply(this, arguments));
                  let M = arguments.length - 1,
                    V = arguments[M];
                  if (typeof V != "function")
                    return i.trace(a, q, () => O.apply(this, arguments));
                  {
                    let K = i.getContext().bind(xe.active(), V);
                    return i.trace(
                      a,
                      q,
                      (te, z) => (
                        (arguments[M] = function (ne) {
                          return z?.(ne), K.apply(this, arguments);
                        }),
                        O.apply(this, arguments)
                      )
                    );
                  }
                }
              : O;
          }
          startSpan(...e) {
            let [i, a] = e,
              w = this.getSpanContext(
                a?.parentSpan ?? this.getActiveScopeSpan()
              );
            return this.getTracerInstance().startSpan(i, a, w);
          }
          getSpanContext(e) {
            return e ? tt.setSpan(xe.active(), e) : void 0;
          }
          getRootSpanAttributes() {
            let e = xe.active().getValue($t);
            return dt.get(e);
          }
          setRootSpanAttribute(e, i) {
            let a = xe.active().getValue($t),
              w = dt.get(a);
            w && w.set(e, i);
          }
        }
        let rr = (() => {
            let n = new br();
            return () => n;
          })(),
          _t = "__prerender_bypass";
        Symbol("__next_preview_data"), Symbol(_t);
        class wr {
          constructor(e, i, a, w) {
            var O;
            let q =
                e &&
                (function (V, K) {
                  let te = Oe.from(V.headers);
                  return {
                    isOnDemandRevalidate:
                      te.get("x-prerender-revalidate") === K.previewModeId,
                    revalidateOnlyGenerated: te.has(
                      "x-prerender-revalidate-if-generated"
                    ),
                  };
                })(i, e).isOnDemandRevalidate,
              M = (O = a.get(_t)) == null ? void 0 : O.value;
            (this._isEnabled = !!(!q && M && e && M === e.previewModeId)),
              (this._previewModeId = e?.previewModeId),
              (this._mutableCookies = w);
          }
          get isEnabled() {
            return this._isEnabled;
          }
          enable() {
            if (!this._previewModeId)
              throw Object.defineProperty(
                Error(
                  "Invariant: previewProps missing previewModeId this should never happen"
                ),
                "__NEXT_ERROR_CODE",
                { value: "E93", enumerable: !1, configurable: !0 }
              );
            this._mutableCookies.set({
              name: _t,
              value: this._previewModeId,
              httpOnly: !0,
              sameSite: "none",
              secure: !0,
              path: "/",
            }),
              (this._isEnabled = !0);
          }
          disable() {
            this._mutableCookies.set({
              name: _t,
              value: "",
              httpOnly: !0,
              sameSite: "none",
              secure: !0,
              path: "/",
              expires: new Date(0),
            }),
              (this._isEnabled = !1);
          }
        }
        function zt(n, e) {
          if (
            "x-middleware-set-cookie" in n.headers &&
            typeof n.headers["x-middleware-set-cookie"] == "string"
          ) {
            let i = n.headers["x-middleware-set-cookie"],
              a = new Headers();
            for (let w of g(i)) a.append("set-cookie", w);
            for (let w of new ge.ResponseCookies(a).getAll()) e.set(w);
          }
        }
        var nr = u(572),
          yr = u.n(nr);
        class xt extends Error {
          constructor(e, i) {
            super(
              "Invariant: " +
                (e.endsWith(".") ? e : e + ".") +
                " This is a bug in Next.js.",
              i
            ),
              (this.name = "InvariantError");
          }
        }
        class ir {
          constructor(e, i) {
            (this.cache = new Map()),
              (this.sizes = new Map()),
              (this.totalSize = 0),
              (this.maxSize = e),
              (this.calculateSize = i || (() => 1));
          }
          set(e, i) {
            if (!e || !i) return;
            let a = this.calculateSize(i);
            if (a > this.maxSize)
              return void console.warn("Single item size exceeds maxSize");
            this.cache.has(e) && (this.totalSize -= this.sizes.get(e) || 0),
              this.cache.set(e, i),
              this.sizes.set(e, a),
              (this.totalSize += a),
              this.touch(e);
          }
          has(e) {
            return !!e && (this.touch(e), !!this.cache.get(e));
          }
          get(e) {
            if (!e) return;
            let i = this.cache.get(e);
            if (i !== void 0) return this.touch(e), i;
          }
          touch(e) {
            let i = this.cache.get(e);
            i !== void 0 &&
              (this.cache.delete(e),
              this.cache.set(e, i),
              this.evictIfNecessary());
          }
          evictIfNecessary() {
            for (; this.totalSize > this.maxSize && this.cache.size > 0; )
              this.evictLeastRecentlyUsed();
          }
          evictLeastRecentlyUsed() {
            let e = this.cache.keys().next().value;
            if (e !== void 0) {
              let i = this.sizes.get(e) || 0;
              (this.totalSize -= i), this.cache.delete(e), this.sizes.delete(e);
            }
          }
          reset() {
            this.cache.clear(), this.sizes.clear(), (this.totalSize = 0);
          }
          keys() {
            return [...this.cache.keys()];
          }
          remove(e) {
            this.cache.has(e) &&
              ((this.totalSize -= this.sizes.get(e) || 0),
              this.cache.delete(e),
              this.sizes.delete(e));
          }
          clear() {
            this.cache.clear(), this.sizes.clear(), (this.totalSize = 0);
          }
          get size() {
            return this.cache.size;
          }
          get currentSize() {
            return this.totalSize;
          }
        }
        u(356).Buffer,
          new ir(52428800, (n) => n.size),
          process.env.NEXT_PRIVATE_DEBUG_CACHE &&
            console.debug.bind(console, "DefaultCacheHandler:"),
          process.env.NEXT_PRIVATE_DEBUG_CACHE,
          Symbol.for("@next/cache-handlers");
        let or = Symbol.for("@next/cache-handlers-map"),
          Et = Symbol.for("@next/cache-handlers-set"),
          pt = globalThis;
        function ar() {
          if (pt[or]) return pt[or].entries();
        }
        async function _r(n, e) {
          if (!n) return e();
          let i = sr(n);
          try {
            return await e();
          } finally {
            let a = (function (w, O) {
              let q = new Set(w.pendingRevalidatedTags),
                M = new Set(w.pendingRevalidateWrites);
              return {
                pendingRevalidatedTags: O.pendingRevalidatedTags.filter(
                  (V) => !q.has(V)
                ),
                pendingRevalidates: Object.fromEntries(
                  Object.entries(O.pendingRevalidates).filter(
                    ([V]) => !(V in w.pendingRevalidates)
                  )
                ),
                pendingRevalidateWrites: O.pendingRevalidateWrites.filter(
                  (V) => !M.has(V)
                ),
              };
            })(i, sr(n));
            await xr(n, a);
          }
        }
        function sr(n) {
          return {
            pendingRevalidatedTags: n.pendingRevalidatedTags
              ? [...n.pendingRevalidatedTags]
              : [],
            pendingRevalidates: { ...n.pendingRevalidates },
            pendingRevalidateWrites: n.pendingRevalidateWrites
              ? [...n.pendingRevalidateWrites]
              : [],
          };
        }
        async function Ht(n, e) {
          if (n.length === 0) return;
          let i = [];
          e && i.push(e.revalidateTag(n));
          let a = (function () {
            if (pt[Et]) return pt[Et].values();
          })();
          if (a) for (let w of a) i.push(w.expireTags(...n));
          await Promise.all(i);
        }
        async function xr(n, e) {
          let i = e?.pendingRevalidatedTags ?? n.pendingRevalidatedTags ?? [],
            a = e?.pendingRevalidates ?? n.pendingRevalidates ?? {},
            w = e?.pendingRevalidateWrites ?? n.pendingRevalidateWrites ?? [];
          return Promise.all([
            Ht(i, n.incrementalCache),
            ...Object.values(a),
            ...w,
          ]);
        }
        let ft = Object.defineProperty(
          Error(
            "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E504", enumerable: !1, configurable: !0 }
        );
        class Rt {
          disable() {
            throw ft;
          }
          getStore() {}
          run() {
            throw ft;
          }
          exit() {
            throw ft;
          }
          enterWith() {
            throw ft;
          }
          static bind(e) {
            return e;
          }
        }
        let gt = typeof globalThis < "u" && globalThis.AsyncLocalStorage,
          lr = gt ? new gt() : new Rt();
        class r {
          constructor({ waitUntil: e, onClose: i, onTaskError: a }) {
            (this.workUnitStores = new Set()),
              (this.waitUntil = e),
              (this.onClose = i),
              (this.onTaskError = a),
              (this.callbackQueue = new (yr())()),
              this.callbackQueue.pause();
          }
          after(e) {
            if (er(e))
              this.waitUntil || o(),
                this.waitUntil(
                  e.catch((i) => this.reportTaskError("promise", i))
                );
            else if (typeof e == "function") this.addCallback(e);
            else
              throw Object.defineProperty(
                Error("`after()`: Argument must be a promise or a function"),
                "__NEXT_ERROR_CODE",
                { value: "E50", enumerable: !1, configurable: !0 }
              );
          }
          addCallback(e) {
            var i;
            this.waitUntil || o();
            let a = Fe.getStore();
            a && this.workUnitStores.add(a);
            let w = lr.getStore(),
              O = w ? w.rootTaskSpawnPhase : a?.phase;
            this.runCallbacksOnClosePromise ||
              ((this.runCallbacksOnClosePromise = this.runCallbacksOnClose()),
              this.waitUntil(this.runCallbacksOnClosePromise));
            let q =
              ((i = async () => {
                try {
                  await lr.run({ rootTaskSpawnPhase: O }, () => e());
                } catch (M) {
                  this.reportTaskError("function", M);
                }
              }),
              gt ? gt.bind(i) : Rt.bind(i));
            this.callbackQueue.add(q);
          }
          async runCallbacksOnClose() {
            return (
              await new Promise((e) => this.onClose(e)), this.runCallbacks()
            );
          }
          async runCallbacks() {
            if (this.callbackQueue.size === 0) return;
            for (let i of this.workUnitStores) i.phase = "after";
            let e = Ve.getStore();
            if (!e)
              throw Object.defineProperty(
                new xt("Missing workStore in AfterContext.runCallbacks"),
                "__NEXT_ERROR_CODE",
                { value: "E547", enumerable: !1, configurable: !0 }
              );
            return _r(
              e,
              () => (this.callbackQueue.start(), this.callbackQueue.onIdle())
            );
          }
          reportTaskError(e, i) {
            if (
              (console.error(
                e === "promise"
                  ? "A promise passed to `after()` rejected:"
                  : "An error occurred in a function passed to `after()`:",
                i
              ),
              this.onTaskError)
            )
              try {
                this.onTaskError == null || this.onTaskError.call(this, i);
              } catch (a) {
                console.error(
                  Object.defineProperty(
                    new xt(
                      "`onTaskError` threw while handling an error thrown from an `after` task",
                      { cause: a }
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E569", enumerable: !1, configurable: !0 }
                  )
                );
              }
          }
        }
        function o() {
          throw Object.defineProperty(
            Error(
              "`after()` will not work correctly, because `waitUntil` is not available in the current environment."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E91", enumerable: !1, configurable: !0 }
          );
        }
        function h(n) {
          let e,
            i = {
              then: (a, w) => (
                e || (e = n()),
                e
                  .then((O) => {
                    i.value = O;
                  })
                  .catch(() => {}),
                e.then(a, w)
              ),
            };
          return i;
        }
        class b {
          onClose(e) {
            if (this.isClosed)
              throw Object.defineProperty(
                Error("Cannot subscribe to a closed CloseController"),
                "__NEXT_ERROR_CODE",
                { value: "E365", enumerable: !1, configurable: !0 }
              );
            this.target.addEventListener("close", e), this.listeners++;
          }
          dispatchClose() {
            if (this.isClosed)
              throw Object.defineProperty(
                Error("Cannot close a CloseController multiple times"),
                "__NEXT_ERROR_CODE",
                { value: "E229", enumerable: !1, configurable: !0 }
              );
            this.listeners > 0 && this.target.dispatchEvent(new Event("close")),
              (this.isClosed = !0);
          }
          constructor() {
            (this.target = new EventTarget()),
              (this.listeners = 0),
              (this.isClosed = !1);
          }
        }
        function R() {
          return {
            previewModeId: process.env.__NEXT_PREVIEW_MODE_ID,
            previewModeSigningKey:
              process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "",
            previewModeEncryptionKey:
              process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "",
          };
        }
        let A = Symbol.for("@next/request-context"),
          D = (n) => {
            let e = ["/layout"];
            if (n.startsWith("/")) {
              let i = n.split("/");
              for (let a = 1; a < i.length + 1; a++) {
                let w = i.slice(0, a).join("/");
                w &&
                  (w.endsWith("/page") ||
                    w.endsWith("/route") ||
                    (w = `${w}${w.endsWith("/") ? "" : "/"}layout`),
                  e.push(w));
              }
            }
            return e;
          };
        async function Z(n, e, i) {
          let a = [],
            w = i && i.size > 0;
          for (let O of D(n)) (O = `${p}${O}`), a.push(O);
          if (e.pathname && !w) {
            let O = `${p}${e.pathname}`;
            a.push(O);
          }
          return {
            tags: a,
            expirationsByCacheKind: (function (O) {
              let q = new Map(),
                M = ar();
              if (M)
                for (let [V, K] of M)
                  "getExpiration" in K &&
                    q.set(
                      V,
                      h(async () => K.getExpiration(...O))
                    );
              return q;
            })(a),
          };
        }
        class Ee extends Ye {
          constructor(e) {
            super(e.input, e.init), (this.sourcePage = e.page);
          }
          get request() {
            throw Object.defineProperty(
              new l({ page: this.sourcePage }),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          }
          respondWith() {
            throw Object.defineProperty(
              new l({ page: this.sourcePage }),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          }
          waitUntil() {
            throw Object.defineProperty(
              new l({ page: this.sourcePage }),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          }
        }
        let Ke = {
            keys: (n) => Array.from(n.keys()),
            get: (n, e) => n.get(e) ?? void 0,
          },
          rt = (n, e) => rr().withPropagatedContext(n.headers, e, Ke),
          Bt = !1;
        async function mt(n) {
          var e;
          let i, a;
          if (
            !Bt &&
            ((Bt = !0), process.env.NEXT_PRIVATE_TEST_PROXY === "true")
          ) {
            let { interceptTestApis: F, wrapRequestHandler: ae } = u(239);
            F(), (rt = ae(rt));
          }
          await I();
          let w = globalThis.__BUILD_MANIFEST !== void 0;
          n.request.url = n.request.url.replace(/\.rsc($|\?)/, "$1");
          let O = new ke(n.request.url, {
            headers: n.request.headers,
            nextConfig: n.request.nextConfig,
          });
          for (let F of [...O.searchParams.keys()]) {
            let ae = O.searchParams.getAll(F),
              be = (function (Ae) {
                for (let Ie of ["nxtP", "nxtI"])
                  if (Ae !== Ie && Ae.startsWith(Ie))
                    return Ae.substring(Ie.length);
                return null;
              })(F);
            if (be) {
              for (let Ae of (O.searchParams.delete(be), ae))
                O.searchParams.append(be, Ae);
              O.searchParams.delete(F);
            }
          }
          let q = O.buildId;
          O.buildId = "";
          let M = (function (F) {
              let ae = new Headers();
              for (let [be, Ae] of Object.entries(F))
                for (let Ie of Array.isArray(Ae) ? Ae : [Ae])
                  Ie !== void 0 &&
                    (typeof Ie == "number" && (Ie = Ie.toString()),
                    ae.append(be, Ie));
              return ae;
            })(n.request.headers),
            V = M.has("x-nextjs-data"),
            K = M.get("RSC") === "1";
          V && O.pathname === "/index" && (O.pathname = "/");
          let te = new Map();
          if (!w)
            for (let F of ct) {
              let ae = F.toLowerCase(),
                be = M.get(ae);
              be !== null && (te.set(ae, be), M.delete(ae));
            }
          let z = new Ee({
            page: n.page,
            input: (function (F) {
              let ae = typeof F == "string",
                be = ae ? new URL(F) : F;
              return be.searchParams.delete(At), ae ? be.toString() : be;
            })(O).toString(),
            init: {
              body: n.request.body,
              headers: M,
              method: n.request.method,
              nextConfig: n.request.nextConfig,
              signal: n.request.signal,
            },
          });
          V &&
            Object.defineProperty(z, "__isData", { enumerable: !1, value: !0 }),
            !globalThis.__incrementalCache &&
              n.IncrementalCache &&
              (globalThis.__incrementalCache = new n.IncrementalCache({
                appDir: !0,
                fetchCache: !0,
                minimalMode: !0,
                fetchCacheKeyPrefix: "",
                dev: !1,
                requestHeaders: n.request.headers,
                requestProtocol: "https",
                getPrerenderManifest: () => ({
                  version: -1,
                  routes: {},
                  dynamicRoutes: {},
                  notFoundRoutes: [],
                  preview: R(),
                }),
              }));
          let ne =
              n.request.waitUntil ??
              ((e = (function () {
                let F = globalThis[A];
                return F?.get();
              })()) == null
                ? void 0
                : e.waitUntil),
            oe = new G({
              request: z,
              page: n.page,
              context: ne ? { waitUntil: ne } : void 0,
            });
          if (
            (i = await rt(z, () => {
              if (n.page === "/middleware" || n.page === "/src/middleware") {
                let F = oe.waitUntil.bind(oe),
                  ae = new b();
                return rr().trace(
                  Qt.execute,
                  {
                    spanName: `middleware ${z.method} ${z.nextUrl.pathname}`,
                    attributes: {
                      "http.target": z.nextUrl.pathname,
                      "http.method": z.method,
                    },
                  },
                  async () => {
                    try {
                      var be, Ae, Ie, Qr, Zr, Jr;
                      let jn = R(),
                        Un = await Z("/", z.nextUrl, null),
                        $n =
                          ((Zr = z.nextUrl),
                          (Jr = (Tt) => {
                            a = Tt;
                          }),
                          (function (
                            Tt,
                            it,
                            se,
                            cr,
                            Rr,
                            Sr,
                            Cr,
                            Gt,
                            hr,
                            qe,
                            Se
                          ) {
                            function bt(Ce) {
                              se && se.setHeader("Set-Cookie", Ce);
                            }
                            let le = {};
                            return {
                              type: "request",
                              phase: Tt,
                              implicitTags: Sr,
                              url: {
                                pathname: cr.pathname,
                                search: cr.search ?? "",
                              },
                              rootParams: Rr,
                              get headers() {
                                return (
                                  le.headers ||
                                    (le.headers = (function (Ce) {
                                      let ot = Oe.from(Ce);
                                      for (let wt of ct)
                                        ot.delete(wt.toLowerCase());
                                      return Oe.seal(ot);
                                    })(it.headers)),
                                  le.headers
                                );
                              },
                              get cookies() {
                                if (!le.cookies) {
                                  let Ce = new ge.RequestCookies(
                                    Oe.from(it.headers)
                                  );
                                  zt(it, Ce), (le.cookies = $e.seal(Ce));
                                }
                                return le.cookies;
                              },
                              set cookies(Ce) {
                                le.cookies = Ce;
                              },
                              get mutableCookies() {
                                if (!le.mutableCookies) {
                                  let Ce = (function (ot, wt) {
                                    let dr = new ge.RequestCookies(Oe.from(ot));
                                    return Y.wrap(dr, wt);
                                  })(it.headers, Cr || (se ? bt : void 0));
                                  zt(it, Ce), (le.mutableCookies = Ce);
                                }
                                return le.mutableCookies;
                              },
                              get userspaceMutableCookies() {
                                return (
                                  le.userspaceMutableCookies ||
                                    (le.userspaceMutableCookies = (function (
                                      Ce
                                    ) {
                                      let ot = new Proxy(Ce, {
                                        get(wt, dr, qn) {
                                          switch (dr) {
                                            case "delete":
                                              return function (...Tr) {
                                                return (
                                                  ee("cookies().delete"),
                                                  wt.delete(...Tr),
                                                  ot
                                                );
                                              };
                                            case "set":
                                              return function (...Tr) {
                                                return (
                                                  ee("cookies().set"),
                                                  wt.set(...Tr),
                                                  ot
                                                );
                                              };
                                            default:
                                              return pe.get(wt, dr, qn);
                                          }
                                        },
                                      });
                                      return ot;
                                    })(this.mutableCookies)),
                                  le.userspaceMutableCookies
                                );
                              },
                              get draftMode() {
                                return (
                                  le.draftMode ||
                                    (le.draftMode = new wr(
                                      hr,
                                      it,
                                      this.cookies,
                                      this.mutableCookies
                                    )),
                                  le.draftMode
                                );
                              },
                              renderResumeDataCache: Gt ?? null,
                              isHmrRefresh: qe,
                              serverComponentsHmrCache:
                                Se || globalThis.__serverComponentsHmrCache,
                            };
                          })(
                            "action",
                            z,
                            void 0,
                            Zr,
                            {},
                            Un,
                            Jr,
                            void 0,
                            jn,
                            !1,
                            void 0
                          )),
                        Dn = (function ({
                          page: Tt,
                          fallbackRouteParams: it,
                          renderOpts: se,
                          requestEndedState: cr,
                          isPrefetchRequest: Rr,
                          buildId: Sr,
                          previouslyRevalidatedTags: Cr,
                        }) {
                          var Gt;
                          let hr = {
                            isStaticGeneration:
                              !se.shouldWaitOnAllReady &&
                              !se.supportsDynamicResponse &&
                              !se.isDraftMode &&
                              !se.isPossibleServerAction,
                            page: Tt,
                            fallbackRouteParams: it,
                            route: (Gt = Tt.split("/").reduce(
                              (qe, Se, bt, le) =>
                                Se
                                  ? (Se[0] === "(" && Se.endsWith(")")) ||
                                    Se[0] === "@" ||
                                    ((Se === "page" || Se === "route") &&
                                      bt === le.length - 1)
                                    ? qe
                                    : qe + "/" + Se
                                  : qe,
                              ""
                            )).startsWith("/")
                              ? Gt
                              : "/" + Gt,
                            incrementalCache:
                              se.incrementalCache ||
                              globalThis.__incrementalCache,
                            cacheLifeProfiles: se.cacheLifeProfiles,
                            isRevalidate: se.isRevalidate,
                            isPrerendering: se.nextExport,
                            fetchCache: se.fetchCache,
                            isOnDemandRevalidate: se.isOnDemandRevalidate,
                            isDraftMode: se.isDraftMode,
                            requestEndedState: cr,
                            isPrefetchRequest: Rr,
                            buildId: Sr,
                            reactLoadableManifest:
                              se?.reactLoadableManifest || {},
                            assetPrefix: se?.assetPrefix || "",
                            afterContext: (function (qe) {
                              let {
                                waitUntil: Se,
                                onClose: bt,
                                onAfterTaskError: le,
                              } = qe;
                              return new r({
                                waitUntil: Se,
                                onClose: bt,
                                onTaskError: le,
                              });
                            })(se),
                            dynamicIOEnabled: se.experimental.dynamicIO,
                            dev: se.dev ?? !1,
                            previouslyRevalidatedTags: Cr,
                            refreshTagsByCacheKind: (function () {
                              let qe = new Map(),
                                Se = ar();
                              if (Se)
                                for (let [bt, le] of Se)
                                  "refreshTags" in le &&
                                    qe.set(
                                      bt,
                                      h(async () => le.refreshTags())
                                    );
                              return qe;
                            })(),
                          };
                          return (se.store = hr), hr;
                        })({
                          page: "/",
                          fallbackRouteParams: null,
                          renderOpts: {
                            cacheLifeProfiles:
                              (Ae = n.request.nextConfig) == null ||
                              (be = Ae.experimental) == null
                                ? void 0
                                : be.cacheLife,
                            experimental: {
                              isRoutePPREnabled: !1,
                              dynamicIO: !1,
                              authInterrupts: !!(
                                !(
                                  (Qr = n.request.nextConfig) == null ||
                                  (Ie = Qr.experimental) == null
                                ) && Ie.authInterrupts
                              ),
                            },
                            supportsDynamicResponse: !0,
                            waitUntil: F,
                            onClose: ae.onClose.bind(ae),
                            onAfterTaskError: void 0,
                          },
                          requestEndedState: { ended: !1 },
                          isPrefetchRequest: z.headers.has(Qe),
                          buildId: q ?? "",
                          previouslyRevalidatedTags: [],
                        });
                      return await Ve.run(Dn, () =>
                        Fe.run($n, n.handler, z, oe)
                      );
                    } finally {
                      setTimeout(() => {
                        ae.dispatchClose();
                      }, 0);
                    }
                  }
                );
              }
              return n.handler(z, oe);
            })) &&
            !(i instanceof Response)
          )
            throw Object.defineProperty(
              TypeError("Expected an instance of Response to be returned"),
              "__NEXT_ERROR_CODE",
              { value: "E567", enumerable: !1, configurable: !0 }
            );
          i && a && i.headers.set("set-cookie", a);
          let he = i?.headers.get("x-middleware-rewrite");
          if (i && he && (K || !w)) {
            let F = new ke(he, {
              forceLocale: !0,
              headers: n.request.headers,
              nextConfig: n.request.nextConfig,
            });
            w ||
              F.host !== z.nextUrl.host ||
              ((F.buildId = q || F.buildId),
              i.headers.set("x-middleware-rewrite", String(F)));
            let { url: ae, isRelative: be } = ut(F.toString(), O.toString());
            !w && V && i.headers.set("x-nextjs-rewrite", ae),
              K &&
                be &&
                (O.pathname !== F.pathname &&
                  i.headers.set("x-nextjs-rewritten-path", F.pathname),
                O.search !== F.search &&
                  i.headers.set("x-nextjs-rewritten-query", F.search.slice(1)));
          }
          let de = i?.headers.get("Location");
          if (i && de && !w) {
            let F = new ke(de, {
              forceLocale: !1,
              headers: n.request.headers,
              nextConfig: n.request.nextConfig,
            });
            (i = new Response(i.body, i)),
              F.host === O.host &&
                ((F.buildId = q || F.buildId),
                i.headers.set("Location", F.toString())),
              V &&
                (i.headers.delete("Location"),
                i.headers.set(
                  "x-nextjs-redirect",
                  ut(F.toString(), O.toString()).url
                ));
          }
          let J = i || me.next(),
            De = J.headers.get("x-middleware-override-headers"),
            fe = [];
          if (De) {
            for (let [F, ae] of te)
              J.headers.set(`x-middleware-request-${F}`, ae), fe.push(F);
            fe.length > 0 &&
              J.headers.set(
                "x-middleware-override-headers",
                De + "," + fe.join(",")
              );
          }
          return {
            response: J,
            waitUntil:
              (oe[N].kind === "internal"
                ? Promise.all(oe[N].promises).then(() => {})
                : void 0) ?? Promise.resolve(),
            fetchMetrics: z.fetchMetrics,
          };
        }
        u(450), typeof URLPattern > "u" || URLPattern;
        var St = u(397);
        let Ct = typeof St.unstable_postpone == "function";
        function Er(n, e) {
          return `Route ${n} needs to bail out of prerendering at this point because it used ${e}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
        }
        if (
          (function (n) {
            return (
              n.includes(
                "needs to bail out of prerendering at this point because it used"
              ) &&
              n.includes(
                "Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
              )
            );
          })(Er("%%%", "^^^")) === !1
        )
          throw Object.defineProperty(
            Error(
              "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E296", enumerable: !1, configurable: !0 }
          );
        RegExp("\\n\\s+at __next_metadata_boundary__[\\n\\s]"),
          RegExp("\\n\\s+at __next_viewport_boundary__[\\n\\s]"),
          RegExp("\\n\\s+at __next_outlet_boundary__[\\n\\s]");
        class ur extends Error {
          constructor(e, i) {
            super(e),
              (this.name = "BetterAuthError"),
              (this.message = e),
              (this.cause = i),
              (this.stack = "");
          }
        }
        let vt = Object.create(null),
          Xt = (n) =>
            globalThis.process?.env ||
            globalThis.Deno?.env.toObject() ||
            globalThis.__env__ ||
            (n ? vt : globalThis),
          nt = new Proxy(vt, {
            get: (n, e) => Xt()[e] ?? vt[e],
            has: (n, e) => e in Xt() || e in vt,
            set: (n, e, i) => ((Xt(!0)[e] = i), !0),
            deleteProperty(n, e) {
              if (!e) return !1;
              let i = Xt(!0);
              return delete i[e], !0;
            },
            ownKeys: () => Object.keys(Xt(!0)),
          });
        function Wt(n, e = "/api/auth") {
          return (function (i) {
            try {
              return new URL(i).pathname !== "/";
            } catch {
              throw new ur(
                `Invalid base URL: ${i}. Please provide a valid base URL.`
              );
            }
          })(n)
            ? n
            : ((e = e.startsWith("/") ? e : `/${e}`),
              `${n.replace(/\/+$/, "")}${e}`);
        }
        ((typeof process < "u" && process.env && "production") || "") ===
          "test" || (k = nt.TEST),
          new TextEncoder().encode;
        let Vt = (n, e) => {
            let i = {
              t: `${n}${e}`,
              value: n,
              tFormat: e,
              toMilliseconds: () => {
                switch (e) {
                  case "ms":
                    return n;
                  case "s":
                    return 1e3 * n;
                  case "m":
                    return 1e3 * n * 60;
                  case "h":
                    return 1e3 * n * 3600;
                  case "d":
                    return 1e3 * n * 86400;
                  case "w":
                    return 1e3 * n * 604800;
                  case "y":
                    return 1e3 * n * 31536e3;
                }
              },
              toSeconds: () => i.toMilliseconds() / 1e3,
              toMinutes: () => i.toSeconds() / 60,
              toHours: () => i.toMinutes() / 60,
              toDays: () => i.toHours() / 24,
              toWeeks: () => i.toDays() / 7,
              toYears: () => i.toDays() / 365,
              getDate: () => new Date(Date.now() + i.toMilliseconds()),
              add: (a) => {
                let w =
                  typeof a == "string"
                    ? Ft(a).toMilliseconds()
                    : a.toMilliseconds();
                return Vt(i.toMilliseconds() + w, "ms");
              },
              subtract: (a) => {
                let w =
                  typeof a == "string"
                    ? Ft(a).toMilliseconds()
                    : a.toMilliseconds();
                return Vt(i.toMilliseconds() - w, "ms");
              },
              multiply: (a) => Vt(i.toMilliseconds() * a, "ms"),
              divide: (a) => Vt(i.toMilliseconds() / a, "ms"),
              equals: (a) => {
                let w =
                  typeof a == "string"
                    ? Ft(a).toMilliseconds()
                    : a.toMilliseconds();
                return i.toMilliseconds() === w;
              },
              lessThan: (a) => {
                let w =
                  typeof a == "string"
                    ? Ft(a).toMilliseconds()
                    : a.toMilliseconds();
                return i.toMilliseconds() < w;
              },
              greaterThan: (a) => {
                let w =
                  typeof a == "string"
                    ? Ft(a).toMilliseconds()
                    : a.toMilliseconds();
                return i.toMilliseconds() > w;
              },
              format: (a) => {
                let w = i.getDate();
                return a.replace(/YYYY|MM|DD|HH|mm|ss/g, (O) => {
                  switch (O) {
                    case "YYYY":
                      return w.getFullYear().toString();
                    case "MM":
                      return (w.getMonth() + 1).toString().padStart(2, "0");
                    case "DD":
                      return w.getDate().toString().padStart(2, "0");
                    case "HH":
                      return w.getHours().toString().padStart(2, "0");
                    case "mm":
                      return w.getMinutes().toString().padStart(2, "0");
                    case "ss":
                      return w.getSeconds().toString().padStart(2, "0");
                    default:
                      return O;
                  }
                });
              },
              fromNow: () => {
                let a = i.toMilliseconds();
                return a < 0
                  ? i.ago()
                  : a < 1e3
                    ? "in a few seconds"
                    : a < 6e4
                      ? `in ${Math.round(a / 1e3)} seconds`
                      : a < 36e5
                        ? `in ${Math.round(a / 6e4)} minutes`
                        : a < 864e5
                          ? `in ${Math.round(a / 36e5)} hours`
                          : a < 6048e5
                            ? `in ${Math.round(a / 864e5)} days`
                            : a < 26298e5
                              ? `in ${Math.round(a / 6048e5)} weeks`
                              : a < 315576e5
                                ? `in ${Math.round(a / 26298e5)} months`
                                : `in ${Math.round(a / 315576e5)} years`;
              },
              ago: () => {
                let a = -i.toMilliseconds();
                return a < 0
                  ? i.fromNow()
                  : a < 1e3
                    ? "a few seconds ago"
                    : a < 6e4
                      ? `${Math.round(a / 1e3)} seconds ago`
                      : a < 36e5
                        ? `${Math.round(a / 6e4)} minutes ago`
                        : a < 864e5
                          ? `${Math.round(a / 36e5)} hours ago`
                          : a < 6048e5
                            ? `${Math.round(a / 864e5)} days ago`
                            : a < 26298e5
                              ? `${Math.round(a / 6048e5)} weeks ago`
                              : a < 315576e5
                                ? `${Math.round(a / 26298e5)} months ago`
                                : `${Math.round(a / 315576e5)} years ago`;
              },
            };
            return i;
          },
          Ft = (n) => {
            let e = n.match(/^(\d+)(ms|s|m|h|d|w|y)$/);
            if (!e) throw Error("Invalid time format");
            return Vt(parseInt(e[1]), e[2]);
          },
          An = (n, e) => {
            e?.cookiePrefix &&
              (e.cookieName
                ? (e.cookiePrefix = `${e.cookiePrefix}-`)
                : (e.cookiePrefix = `${e.cookiePrefix}.`));
            let i = "headers" in n ? n.headers : n,
              a = n instanceof Request ? n : void 0;
            (function (z, ne, oe) {
              if (z) return Wt(z, ne);
              let he =
                nt.BETTER_AUTH_URL ||
                nt.NEXT_PUBLIC_BETTER_AUTH_URL ||
                nt.PUBLIC_BETTER_AUTH_URL ||
                nt.NUXT_PUBLIC_BETTER_AUTH_URL ||
                nt.NUXT_PUBLIC_AUTH_URL ||
                (nt.BASE_URL !== "/" ? nt.BASE_URL : void 0);
              if (he) return Wt(he, ne);
              let de = oe?.headers.get("x-forwarded-host"),
                J = oe?.headers.get("x-forwarded-proto");
              if (de && J) return Wt(`${J}://${de}`, ne);
              if (oe) {
                let De = (function (fe) {
                  try {
                    return new URL(fe).origin;
                  } catch {
                    return null;
                  }
                })(oe.url);
                if (!De)
                  throw new ur(
                    "Could not get origin from request. Please provide a valid base URL."
                  );
                return Wt(De, ne);
              }
              typeof window < "u" &&
                window.location &&
                Wt(window.location.origin, ne);
            })(a?.url, e?.path, a);
            let w = i.get("cookie");
            if (!w) return null;
            let {
                cookieName: O = "session_token",
                cookiePrefix: q = "better-auth.",
              } = e || {},
              M = `${q}${O}`,
              V = `__Secure-${M}`,
              K = (function (z) {
                let ne = z.split("; "),
                  oe = new Map();
                return (
                  ne.forEach((he) => {
                    let [de, J] = he.split("=");
                    oe.set(de, J);
                  }),
                  oe
                );
              })(w);
            return K.get(M) || K.get(V) || null;
          };
        async function In(n) {
          if (n.nextUrl.pathname.startsWith("/api")) return me.next();
          let e = An(n);
          if (n.nextUrl.pathname.startsWith("/chat") && !e) {
            let a = new URL("/login", n.url);
            return (
              a.searchParams.set("callbackUrl", n.nextUrl.pathname),
              me.redirect(a)
            );
          }
          if (n.nextUrl.pathname === "/")
            return e
              ? me.redirect(new URL("/chat", n.url))
              : me.redirect(new URL("/login", n.url));
          let i = me.next();
          return i.headers.set("x-pathname", n.nextUrl.pathname), i;
        }
        let Ln = {
            matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
          },
          Gr =
            (Object.values({
              NOT_FOUND: 404,
              FORBIDDEN: 403,
              UNAUTHORIZED: 401,
            }),
            { ...T }),
          Kr = Gr.middleware || Gr.default,
          Yr = "/src/middleware";
        if (typeof Kr != "function")
          throw Object.defineProperty(
            Error(
              `The Middleware "${Yr}" must export a \`middleware\` or a \`default\` function`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E120", enumerable: !1, configurable: !0 }
          );
        function Mn(n) {
          return mt({
            ...n,
            page: Yr,
            handler: async (...e) => {
              try {
                return await Kr(...e);
              } catch (i) {
                let a = e[0],
                  w = new URL(a.url),
                  O = w.pathname + w.search;
                throw (
                  (await m(
                    i,
                    {
                      path: O,
                      method: a.method,
                      headers: Object.fromEntries(a.headers.entries()),
                    },
                    {
                      routerKind: "Pages Router",
                      routePath: "/middleware",
                      routeType: "middleware",
                      revalidateReason: void 0,
                    }
                  ),
                  i)
                );
              }
            },
          });
        }
      },
      356: (t) => {
        "use strict";
        t.exports = (kn(), tn(Kt));
      },
      397: (t, s, u) => {
        "use strict";
        t.exports = u(957);
      },
      415: (t, s, u) => {
        "use strict";
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (function (c, _) {
            for (var m in _)
              Object.defineProperty(c, m, { enumerable: !0, get: _[m] });
          })(s, {
            getTestReqInfo: function () {
              return C;
            },
            withRequest: function () {
              return T;
            },
          });
        let d = new (u(521).AsyncLocalStorage)();
        function k(c, _) {
          let m = _.header(c, "next-test-proxy-port");
          return m
            ? {
                url: _.url(c),
                proxyPort: Number(m),
                testData: _.header(c, "next-test-data") || "",
              }
            : void 0;
        }
        function T(c, _, m) {
          let P = k(c, _);
          return P ? d.run(P, m) : m();
        }
        function C(c, _) {
          return d.getStore() || (c && _ ? k(c, _) : void 0);
        }
      },
      424: (t) => {
        (() => {
          "use strict";
          typeof __nccwpck_require__ < "u" && (__nccwpck_require__.ab = "//");
          var s = {};
          (() => {
            (s.parse = function (C, c) {
              if (typeof C != "string")
                throw TypeError("argument str must be a string");
              for (
                var _ = {}, m = C.split(k), P = (c || {}).decode || u, I = 0;
                I < m.length;
                I++
              ) {
                var y = m[I],
                  l = y.indexOf("=");
                if (!(l < 0)) {
                  var x = y.substr(0, l).trim(),
                    S = y.substr(++l, y.length).trim();
                  S[0] == '"' && (S = S.slice(1, -1)),
                    _[x] == null &&
                      (_[x] = (function (p, v) {
                        try {
                          return v(p);
                        } catch {
                          return p;
                        }
                      })(S, P));
                }
              }
              return _;
            }),
              (s.serialize = function (C, c, _) {
                var m = _ || {},
                  P = m.encode || d;
                if (typeof P != "function")
                  throw TypeError("option encode is invalid");
                if (!T.test(C)) throw TypeError("argument name is invalid");
                var I = P(c);
                if (I && !T.test(I)) throw TypeError("argument val is invalid");
                var y = C + "=" + I;
                if (m.maxAge != null) {
                  var l = m.maxAge - 0;
                  if (isNaN(l) || !isFinite(l))
                    throw TypeError("option maxAge is invalid");
                  y += "; Max-Age=" + Math.floor(l);
                }
                if (m.domain) {
                  if (!T.test(m.domain))
                    throw TypeError("option domain is invalid");
                  y += "; Domain=" + m.domain;
                }
                if (m.path) {
                  if (!T.test(m.path))
                    throw TypeError("option path is invalid");
                  y += "; Path=" + m.path;
                }
                if (m.expires) {
                  if (typeof m.expires.toUTCString != "function")
                    throw TypeError("option expires is invalid");
                  y += "; Expires=" + m.expires.toUTCString();
                }
                if (
                  (m.httpOnly && (y += "; HttpOnly"),
                  m.secure && (y += "; Secure"),
                  m.sameSite)
                )
                  switch (
                    typeof m.sameSite == "string"
                      ? m.sameSite.toLowerCase()
                      : m.sameSite
                  ) {
                    case !0:
                    case "strict":
                      y += "; SameSite=Strict";
                      break;
                    case "lax":
                      y += "; SameSite=Lax";
                      break;
                    case "none":
                      y += "; SameSite=None";
                      break;
                    default:
                      throw TypeError("option sameSite is invalid");
                  }
                return y;
              });
            var u = decodeURIComponent,
              d = encodeURIComponent,
              k = /; */,
              T = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
          })(),
            (t.exports = s);
        })();
      },
      450: (t, s, u) => {
        var d;
        (() => {
          var k = {
              226: function (c, _) {
                (function (m, P) {
                  "use strict";
                  var I = "function",
                    y = "undefined",
                    l = "object",
                    x = "string",
                    S = "major",
                    p = "model",
                    v = "name",
                    g = "type",
                    f = "vendor",
                    E = "version",
                    j = "architecture",
                    U = "console",
                    N = "mobile",
                    $ = "tablet",
                    G = "smarttv",
                    W = "wearable",
                    ie = "embedded",
                    Re = "Amazon",
                    we = "Apple",
                    ye = "ASUS",
                    He = "BlackBerry",
                    Pe = "Browser",
                    Le = "Chrome",
                    Be = "Firefox",
                    L = "Google",
                    ke = "Huawei",
                    ge = "Microsoft",
                    Xe = "Motorola",
                    Ye = "Opera",
                    pe = "Samsung",
                    lt = "Sharp",
                    Me = "Sony",
                    We = "Xiaomi",
                    me = "Zebra",
                    ut = "Facebook",
                    Qe = "Chromium OS",
                    ct = "Mac OS",
                    At = function (Y, ee) {
                      var X = {};
                      for (var re in Y)
                        ee[re] && ee[re].length % 2 == 0
                          ? (X[re] = ee[re].concat(Y[re]))
                          : (X[re] = Y[re]);
                      return X;
                    },
                    je = function (Y) {
                      for (var ee = {}, X = 0; X < Y.length; X++)
                        ee[Y[X].toUpperCase()] = Y[X];
                      return ee;
                    },
                    Oe = function (Y, ee) {
                      return typeof Y === x && Ne(ee).indexOf(Ne(Y)) !== -1;
                    },
                    Ne = function (Y) {
                      return Y.toLowerCase();
                    },
                    ht = function (Y, ee) {
                      if (typeof Y === x)
                        return (
                          (Y = Y.replace(/^\s\s*/, "")),
                          typeof ee === y ? Y : Y.substring(0, 350)
                        );
                    },
                    Ue = function (Y, ee) {
                      for (
                        var X, re, ve, Q, _e, B, ce = 0;
                        ce < ee.length && !_e;

                      ) {
                        var Ge = ee[ce],
                          et = ee[ce + 1];
                        for (X = re = 0; X < Ge.length && !_e && Ge[X]; )
                          if ((_e = Ge[X++].exec(Y)))
                            for (ve = 0; ve < et.length; ve++)
                              (B = _e[++re]),
                                typeof (Q = et[ve]) === l && Q.length > 0
                                  ? Q.length === 2
                                    ? typeof Q[1] == I
                                      ? (this[Q[0]] = Q[1].call(this, B))
                                      : (this[Q[0]] = Q[1])
                                    : Q.length === 3
                                      ? typeof Q[1] !== I ||
                                        (Q[1].exec && Q[1].test)
                                        ? (this[Q[0]] = B
                                            ? B.replace(Q[1], Q[2])
                                            : void 0)
                                        : (this[Q[0]] = B
                                            ? Q[1].call(this, B, Q[2])
                                            : void 0)
                                      : Q.length === 4 &&
                                        (this[Q[0]] = B
                                          ? Q[3].call(
                                              this,
                                              B.replace(Q[1], Q[2])
                                            )
                                          : P)
                                  : (this[Q] = B || P);
                        ce += 2;
                      }
                    },
                    Ze = function (Y, ee) {
                      for (var X in ee)
                        if (typeof ee[X] === l && ee[X].length > 0) {
                          for (var re = 0; re < ee[X].length; re++)
                            if (Oe(ee[X][re], Y)) return X === "?" ? P : X;
                        } else if (Oe(ee[X], Y)) return X === "?" ? P : X;
                      return Y;
                    },
                    Ve = {
                      ME: "4.90",
                      "NT 3.11": "NT3.51",
                      "NT 4.0": "NT4.0",
                      2e3: "NT 5.0",
                      XP: ["NT 5.1", "NT 5.2"],
                      Vista: "NT 6.0",
                      7: "NT 6.1",
                      8: "NT 6.2",
                      8.1: "NT 6.3",
                      10: ["NT 6.4", "NT 10.0"],
                      RT: "ARM",
                    },
                    Fe = {
                      browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [E, [v, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [E, [v, "Edge"]],
                        [
                          /(opera mini)\/([-\w\.]+)/i,
                          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                        ],
                        [v, E],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [E, [v, Ye + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [E, [v, Ye]],
                        [
                          /(kindle)\/([\w\.]+)/i,
                          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                          /(?:ms|\()(ie) ([\w\.]+)/i,
                          /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                          /(heytap|ovi)browser\/([\d\.]+)/i,
                          /(weibo)__([\d\.]+)/i,
                        ],
                        [v, E],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [E, [v, "UC" + Pe]],
                        [
                          /microm.+\bqbcore\/([\w\.]+)/i,
                          /\bqbcore\/([\w\.]+).+microm/i,
                        ],
                        [E, [v, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [E, [v, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [E, [v, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [E, [v, "IE"]],
                        [/ya(?:search)?browser\/([\w\.]+)/i],
                        [E, [v, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [[v, /(.+)/, "$1 Secure " + Pe], E],
                        [/\bfocus\/([\w\.]+)/i],
                        [E, [v, Be + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [E, [v, Ye + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [E, [v, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [E, [v, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [E, [v, Ye + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [E, [v, "MIUI " + Pe]],
                        [/fxios\/([-\w\.]+)/i],
                        [E, [v, Be]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [[v, "360 " + Pe]],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [[v, /(.+)/, "$1 " + Pe], E],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [[v, /_/g, " "], E],
                        [
                          /(electron)\/([\w\.]+) safari/i,
                          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                        ],
                        [v, E],
                        [
                          /(metasr)[\/ ]?([\w\.]+)/i,
                          /(lbbrowser)/i,
                          /\[(linkedin)app\]/i,
                        ],
                        [v],
                        [
                          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                        ],
                        [[v, ut], E],
                        [
                          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                          /safari (line)\/([\w\.]+)/i,
                          /\b(line)\/([\w\.]+)\/iab/i,
                          /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                        ],
                        [v, E],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [E, [v, "GSA"]],
                        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                        [E, [v, "TikTok"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [E, [v, Le + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [[v, Le + " WebView"], E],
                        [
                          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i,
                        ],
                        [E, [v, "Android " + Pe]],
                        [
                          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                        ],
                        [v, E],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [E, [v, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [E, v],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [
                          v,
                          [
                            E,
                            Ze,
                            {
                              "1.0": "/8",
                              1.2: "/1",
                              1.3: "/3",
                              "2.0": "/412",
                              "2.0.2": "/416",
                              "2.0.3": "/417",
                              "2.0.4": "/419",
                              "?": "/",
                            },
                          ],
                        ],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [v, E],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [[v, "Netscape"], E],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [E, [v, Be + " Reality"]],
                        [
                          /ekiohf.+(flow)\/([\w\.]+)/i,
                          /(swiftfox)/i,
                          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                          /(firefox)\/([\w\.]+)/i,
                          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                          /(links) \(([\w\.]+)/i,
                          /panasonic;(viera)/i,
                        ],
                        [v, E],
                        [/(cobalt)\/([\w\.]+)/i],
                        [v, [E, /master.|lts./, ""]],
                      ],
                      cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [[j, "amd64"]],
                        [/(ia32(?=;))/i],
                        [[j, Ne]],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [[j, "ia32"]],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [[j, "arm64"]],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [[j, "armhf"]],
                        [/windows (ce|mobile); ppc;/i],
                        [[j, "arm"]],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [[j, /ower/, "", Ne]],
                        [/(sun4\w)[;\)]/i],
                        [[j, "sparc"]],
                        [
                          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                        ],
                        [[j, Ne]],
                      ],
                      device: [
                        [
                          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                        ],
                        [p, [f, pe], [g, $]],
                        [
                          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                          /samsung[- ]([-\w]+)/i,
                          /sec-(sgh\w+)/i,
                        ],
                        [p, [f, pe], [g, N]],
                        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                        [p, [f, we], [g, N]],
                        [
                          /\((ipad);[-\w\),; ]+apple/i,
                          /applecoremedia\/[\w\.]+ \((ipad)/i,
                          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                        ],
                        [p, [f, we], [g, $]],
                        [/(macintosh);/i],
                        [p, [f, we]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [p, [f, lt], [g, N]],
                        [
                          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                        ],
                        [p, [f, ke], [g, $]],
                        [
                          /(?:huawei|honor)([-\w ]+)[;\)]/i,
                          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                        ],
                        [p, [f, ke], [g, N]],
                        [
                          /\b(poco[\w ]+)(?: bui|\))/i,
                          /\b; (\w+) build\/hm\1/i,
                          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                        ],
                        [
                          [p, /_/g, " "],
                          [f, We],
                          [g, N],
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                          [p, /_/g, " "],
                          [f, We],
                          [g, $],
                        ],
                        [
                          /; (\w+) bui.+ oppo/i,
                          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                        ],
                        [p, [f, "OPPO"], [g, N]],
                        [
                          /vivo (\w+)(?: bui|\))/i,
                          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                        ],
                        [p, [f, "Vivo"], [g, N]],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [p, [f, "Realme"], [g, N]],
                        [
                          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                          /\bmot(?:orola)?[- ](\w*)/i,
                          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                        ],
                        [p, [f, Xe], [g, N]],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [p, [f, Xe], [g, $]],
                        [
                          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                        ],
                        [p, [f, "LG"], [g, $]],
                        [
                          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                          /\blg-?([\d\w]+) bui/i,
                        ],
                        [p, [f, "LG"], [g, N]],
                        [
                          /(ideatab[-\w ]+)/i,
                          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                        ],
                        [p, [f, "Lenovo"], [g, $]],
                        [
                          /(?:maemo|nokia).*(n900|lumia \d+)/i,
                          /nokia[-_ ]?([-\w\.]*)/i,
                        ],
                        [
                          [p, /_/g, " "],
                          [f, "Nokia"],
                          [g, N],
                        ],
                        [/(pixel c)\b/i],
                        [p, [f, L], [g, $]],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [p, [f, L], [g, N]],
                        [
                          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                        ],
                        [p, [f, Me], [g, N]],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                          [p, "Xperia Tablet"],
                          [f, Me],
                          [g, $],
                        ],
                        [
                          / (kb2005|in20[12]5|be20[12][59])\b/i,
                          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                        ],
                        [p, [f, "OnePlus"], [g, N]],
                        [
                          /(alexa)webm/i,
                          /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                          /(kf[a-z]+)( bui|\)).+silk\//i,
                        ],
                        [p, [f, Re], [g, $]],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                          [p, /(.+)/g, "Fire Phone $1"],
                          [f, Re],
                          [g, N],
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [p, f, [g, $]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [p, [f, He], [g, N]],
                        [
                          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                        ],
                        [p, [f, ye], [g, $]],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [p, [f, ye], [g, N]],
                        [/(nexus 9)/i],
                        [p, [f, "HTC"], [g, $]],
                        [
                          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                        ],
                        [f, [p, /_/g, " "], [g, N]],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [p, [f, "Acer"], [g, $]],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [p, [f, "Meizu"], [g, N]],
                        [
                          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                          /(hp) ([\w ]+\w)/i,
                          /(asus)-?(\w+)/i,
                          /(microsoft); (lumia[\w ]+)/i,
                          /(lenovo)[-_ ]?([-\w]+)/i,
                          /(jolla)/i,
                          /(oppo) ?([\w ]+) bui/i,
                        ],
                        [f, p, [g, N]],
                        [
                          /(kobo)\s(ereader|touch)/i,
                          /(archos) (gamepad2?)/i,
                          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                          /(kindle)\/([\w\.]+)/i,
                          /(nook)[\w ]+build\/(\w+)/i,
                          /(dell) (strea[kpr\d ]*[\dko])/i,
                          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                          /(trinity)[- ]*(t\d{3}) bui/i,
                          /(gigaset)[- ]+(q\w{1,9}) bui/i,
                          /(vodafone) ([\w ]+)(?:\)| bui)/i,
                        ],
                        [f, p, [g, $]],
                        [/(surface duo)/i],
                        [p, [f, ge], [g, $]],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [p, [f, "Fairphone"], [g, N]],
                        [/(u304aa)/i],
                        [p, [f, "AT&T"], [g, N]],
                        [/\bsie-(\w*)/i],
                        [p, [f, "Siemens"], [g, N]],
                        [/\b(rct\w+) b/i],
                        [p, [f, "RCA"], [g, $]],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [p, [f, "Dell"], [g, $]],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [p, [f, "Verizon"], [g, $]],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [p, [f, "Barnes & Noble"], [g, $]],
                        [/\b(tm\d{3}\w+) b/i],
                        [p, [f, "NuVision"], [g, $]],
                        [/\b(k88) b/i],
                        [p, [f, "ZTE"], [g, $]],
                        [/\b(nx\d{3}j) b/i],
                        [p, [f, "ZTE"], [g, N]],
                        [/\b(gen\d{3}) b.+49h/i],
                        [p, [f, "Swiss"], [g, N]],
                        [/\b(zur\d{3}) b/i],
                        [p, [f, "Swiss"], [g, $]],
                        [/\b((zeki)?tb.*\b) b/i],
                        [p, [f, "Zeki"], [g, $]],
                        [
                          /\b([yr]\d{2}) b/i,
                          /\b(dragon[- ]+touch |dt)(\w{5}) b/i,
                        ],
                        [[f, "Dragon Touch"], p, [g, $]],
                        [/\b(ns-?\w{0,9}) b/i],
                        [p, [f, "Insignia"], [g, $]],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [p, [f, "NextBook"], [g, $]],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [[f, "Voice"], p, [g, N]],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [[f, "LvTel"], p, [g, N]],
                        [/\b(ph-1) /i],
                        [p, [f, "Essential"], [g, N]],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [p, [f, "Envizen"], [g, $]],
                        [/\b(trio[-\w\. ]+) b/i],
                        [p, [f, "MachSpeed"], [g, $]],
                        [/\btu_(1491) b/i],
                        [p, [f, "Rotor"], [g, $]],
                        [/(shield[\w ]+) b/i],
                        [p, [f, "Nvidia"], [g, $]],
                        [/(sprint) (\w+)/i],
                        [f, p, [g, N]],
                        [/(kin\.[onetw]{3})/i],
                        [
                          [p, /\./g, " "],
                          [f, ge],
                          [g, N],
                        ],
                        [
                          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i,
                        ],
                        [p, [f, me], [g, $]],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [p, [f, me], [g, N]],
                        [/smart-tv.+(samsung)/i],
                        [f, [g, G]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                          [p, /^/, "SmartTV"],
                          [f, pe],
                          [g, G],
                        ],
                        [
                          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                        ],
                        [
                          [f, "LG"],
                          [g, G],
                        ],
                        [/(apple) ?tv/i],
                        [f, [p, we + " TV"], [g, G]],
                        [/crkey/i],
                        [
                          [p, Le + "cast"],
                          [f, L],
                          [g, G],
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [p, [f, Re], [g, G]],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [p, [f, lt], [g, G]],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [p, [f, Me], [g, G]],
                        [/(mitv-\w{5}) bui/i],
                        [p, [f, We], [g, G]],
                        [/Hbbtv.*(technisat) (.*);/i],
                        [f, p, [g, G]],
                        [
                          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                        ],
                        [
                          [f, ht],
                          [p, ht],
                          [g, G],
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [[g, G]],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [f, p, [g, U]],
                        [/droid.+; (shield) bui/i],
                        [p, [f, "Nvidia"], [g, U]],
                        [/(playstation [345portablevi]+)/i],
                        [p, [f, Me], [g, U]],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [p, [f, ge], [g, U]],
                        [/((pebble))app/i],
                        [f, p, [g, W]],
                        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                        [p, [f, we], [g, W]],
                        [/droid.+; (glass) \d/i],
                        [p, [f, L], [g, W]],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [p, [f, me], [g, W]],
                        [/(quest( 2| pro)?)/i],
                        [p, [f, ut], [g, W]],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [f, [g, ie]],
                        [/(aeobc)\b/i],
                        [p, [f, Re], [g, ie]],
                        [
                          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i,
                        ],
                        [p, [g, N]],
                        [
                          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                        ],
                        [p, [g, $]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [[g, $]],
                        [
                          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                        ],
                        [[g, N]],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [p, [f, "Generic"]],
                      ],
                      engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [E, [v, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [E, [v, "Blink"]],
                        [
                          /(presto)\/([\w\.]+)/i,
                          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                          /ekioh(flow)\/([\w\.]+)/i,
                          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                          /(icab)[\/ ]([23]\.[\d\.]+)/i,
                          /\b(libweb)/i,
                        ],
                        [v, E],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [E, v],
                      ],
                      os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [v, E],
                        [
                          /(windows) nt 6\.2; (arm)/i,
                          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                        ],
                        [v, [E, Ze, Ve]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                          [v, "Windows"],
                          [E, Ze, Ve],
                        ],
                        [
                          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                          /ios;fbsv\/([\d\.]+)/i,
                          /cfnetwork\/.+darwin/i,
                        ],
                        [
                          [E, /_/g, "."],
                          [v, "iOS"],
                        ],
                        [
                          /(mac os x) ?([\w\. ]*)/i,
                          /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                        ],
                        [
                          [v, ct],
                          [E, /_/g, "."],
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [E, v],
                        [
                          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                          /(blackberry)\w*\/([\w\.]*)/i,
                          /(tizen|kaios)[\/ ]([\w\.]+)/i,
                          /\((series40);/i,
                        ],
                        [v, E],
                        [/\(bb(10);/i],
                        [E, [v, He]],
                        [
                          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i,
                        ],
                        [E, [v, "Symbian"]],
                        [
                          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                        ],
                        [E, [v, Be + " OS"]],
                        [
                          /web0s;.+rt(tv)/i,
                          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
                        ],
                        [E, [v, "webOS"]],
                        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                        [E, [v, "watchOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [E, [v, Le + "cast"]],
                        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                        [[v, Qe], E],
                        [
                          /panasonic;(viera)/i,
                          /(netrange)mmh/i,
                          /(nettv)\/(\d+\.[\w\.]+)/i,
                          /(nintendo|playstation) ([wids345portablevuch]+)/i,
                          /(xbox); +xbox ([^\);]+)/i,
                          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                          /(mint)[\/\(\) ]?(\w*)/i,
                          /(mageia|vectorlinux)[; ]/i,
                          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                          /(hurd|linux) ?([\w\.]*)/i,
                          /(gnu) ?([\w\.]*)/i,
                          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                          /(haiku) (\w+)/i,
                        ],
                        [v, E],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [[v, "Solaris"], E],
                        [
                          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                          /(unix) ?([\w\.]*)/i,
                        ],
                        [v, E],
                      ],
                    },
                    ue = function (Y, ee) {
                      if (
                        (typeof Y === l && ((ee = Y), (Y = P)),
                        !(this instanceof ue))
                      )
                        return new ue(Y, ee).getResult();
                      var X = typeof m !== y && m.navigator ? m.navigator : P,
                        re = Y || (X && X.userAgent ? X.userAgent : ""),
                        ve = X && X.userAgentData ? X.userAgentData : P,
                        Q = ee ? At(Fe, ee) : Fe,
                        _e = X && X.userAgent == re;
                      return (
                        (this.getBrowser = function () {
                          var B,
                            ce = {};
                          return (
                            (ce[v] = P),
                            (ce[E] = P),
                            Ue.call(ce, re, Q.browser),
                            (ce[S] =
                              typeof (B = ce[E]) === x
                                ? B.replace(/[^\d\.]/g, "").split(".")[0]
                                : P),
                            _e &&
                              X &&
                              X.brave &&
                              typeof X.brave.isBrave == I &&
                              (ce[v] = "Brave"),
                            ce
                          );
                        }),
                        (this.getCPU = function () {
                          var B = {};
                          return (B[j] = P), Ue.call(B, re, Q.cpu), B;
                        }),
                        (this.getDevice = function () {
                          var B = {};
                          return (
                            (B[f] = P),
                            (B[p] = P),
                            (B[g] = P),
                            Ue.call(B, re, Q.device),
                            _e && !B[g] && ve && ve.mobile && (B[g] = N),
                            _e &&
                              B[p] == "Macintosh" &&
                              X &&
                              typeof X.standalone !== y &&
                              X.maxTouchPoints &&
                              X.maxTouchPoints > 2 &&
                              ((B[p] = "iPad"), (B[g] = $)),
                            B
                          );
                        }),
                        (this.getEngine = function () {
                          var B = {};
                          return (
                            (B[v] = P), (B[E] = P), Ue.call(B, re, Q.engine), B
                          );
                        }),
                        (this.getOS = function () {
                          var B = {};
                          return (
                            (B[v] = P),
                            (B[E] = P),
                            Ue.call(B, re, Q.os),
                            _e &&
                              !B[v] &&
                              ve &&
                              ve.platform != "Unknown" &&
                              (B[v] = ve.platform
                                .replace(/chrome os/i, Qe)
                                .replace(/macos/i, ct)),
                            B
                          );
                        }),
                        (this.getResult = function () {
                          return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU(),
                          };
                        }),
                        (this.getUA = function () {
                          return re;
                        }),
                        (this.setUA = function (B) {
                          return (
                            (re =
                              typeof B === x && B.length > 350
                                ? ht(B, 350)
                                : B),
                            this
                          );
                        }),
                        this.setUA(re),
                        this
                      );
                    };
                  (ue.VERSION = "1.0.35"),
                    (ue.BROWSER = je([v, E, S])),
                    (ue.CPU = je([j])),
                    (ue.DEVICE = je([p, f, g, U, N, G, $, W, ie])),
                    (ue.ENGINE = ue.OS = je([v, E])),
                    typeof _ !== y
                      ? (c.exports && (_ = c.exports = ue), (_.UAParser = ue))
                      : u.amdO
                        ? (d = function () {
                            return ue;
                          }.call(s, u, s, t)) === void 0 || (t.exports = d)
                        : typeof m !== y && (m.UAParser = ue);
                  var $e = typeof m !== y && (m.jQuery || m.Zepto);
                  if ($e && !$e.ua) {
                    var Je = new ue();
                    ($e.ua = Je.getResult()),
                      ($e.ua.get = function () {
                        return Je.getUA();
                      }),
                      ($e.ua.set = function (Y) {
                        Je.setUA(Y);
                        var ee = Je.getResult();
                        for (var X in ee) $e.ua[X] = ee[X];
                      });
                  }
                })(typeof window == "object" ? window : this);
              },
            },
            T = {};
          function C(c) {
            var _ = T[c];
            if (_ !== void 0) return _.exports;
            var m = (T[c] = { exports: {} }),
              P = !0;
            try {
              k[c].call(m.exports, m, m.exports, C), (P = !1);
            } finally {
              P && delete T[c];
            }
            return m.exports;
          }
          (C.ab = "//"), (t.exports = C(226));
        })();
      },
      521: (t) => {
        "use strict";
        t.exports = (On(), tn(Yt));
      },
      572: (t) => {
        (() => {
          "use strict";
          var s = {
              993: (T) => {
                var C = Object.prototype.hasOwnProperty,
                  c = "~";
                function _() {}
                function m(l, x, S) {
                  (this.fn = l), (this.context = x), (this.once = S || !1);
                }
                function P(l, x, S, p, v) {
                  if (typeof S != "function")
                    throw TypeError("The listener must be a function");
                  var g = new m(S, p || l, v),
                    f = c ? c + x : x;
                  return (
                    l._events[f]
                      ? l._events[f].fn
                        ? (l._events[f] = [l._events[f], g])
                        : l._events[f].push(g)
                      : ((l._events[f] = g), l._eventsCount++),
                    l
                  );
                }
                function I(l, x) {
                  --l._eventsCount == 0
                    ? (l._events = new _())
                    : delete l._events[x];
                }
                function y() {
                  (this._events = new _()), (this._eventsCount = 0);
                }
                Object.create &&
                  ((_.prototype = Object.create(null)),
                  new _().__proto__ || (c = !1)),
                  (y.prototype.eventNames = function () {
                    var l,
                      x,
                      S = [];
                    if (this._eventsCount === 0) return S;
                    for (x in (l = this._events))
                      C.call(l, x) && S.push(c ? x.slice(1) : x);
                    return Object.getOwnPropertySymbols
                      ? S.concat(Object.getOwnPropertySymbols(l))
                      : S;
                  }),
                  (y.prototype.listeners = function (l) {
                    var x = c ? c + l : l,
                      S = this._events[x];
                    if (!S) return [];
                    if (S.fn) return [S.fn];
                    for (var p = 0, v = S.length, g = Array(v); p < v; p++)
                      g[p] = S[p].fn;
                    return g;
                  }),
                  (y.prototype.listenerCount = function (l) {
                    var x = c ? c + l : l,
                      S = this._events[x];
                    return S ? (S.fn ? 1 : S.length) : 0;
                  }),
                  (y.prototype.emit = function (l, x, S, p, v, g) {
                    var f = c ? c + l : l;
                    if (!this._events[f]) return !1;
                    var E,
                      j,
                      U = this._events[f],
                      N = arguments.length;
                    if (U.fn) {
                      switch (
                        (U.once && this.removeListener(l, U.fn, void 0, !0), N)
                      ) {
                        case 1:
                          return U.fn.call(U.context), !0;
                        case 2:
                          return U.fn.call(U.context, x), !0;
                        case 3:
                          return U.fn.call(U.context, x, S), !0;
                        case 4:
                          return U.fn.call(U.context, x, S, p), !0;
                        case 5:
                          return U.fn.call(U.context, x, S, p, v), !0;
                        case 6:
                          return U.fn.call(U.context, x, S, p, v, g), !0;
                      }
                      for (j = 1, E = Array(N - 1); j < N; j++)
                        E[j - 1] = arguments[j];
                      U.fn.apply(U.context, E);
                    } else {
                      var $,
                        G = U.length;
                      for (j = 0; j < G; j++)
                        switch (
                          (U[j].once &&
                            this.removeListener(l, U[j].fn, void 0, !0),
                          N)
                        ) {
                          case 1:
                            U[j].fn.call(U[j].context);
                            break;
                          case 2:
                            U[j].fn.call(U[j].context, x);
                            break;
                          case 3:
                            U[j].fn.call(U[j].context, x, S);
                            break;
                          case 4:
                            U[j].fn.call(U[j].context, x, S, p);
                            break;
                          default:
                            if (!E)
                              for ($ = 1, E = Array(N - 1); $ < N; $++)
                                E[$ - 1] = arguments[$];
                            U[j].fn.apply(U[j].context, E);
                        }
                    }
                    return !0;
                  }),
                  (y.prototype.on = function (l, x, S) {
                    return P(this, l, x, S, !1);
                  }),
                  (y.prototype.once = function (l, x, S) {
                    return P(this, l, x, S, !0);
                  }),
                  (y.prototype.removeListener = function (l, x, S, p) {
                    var v = c ? c + l : l;
                    if (!this._events[v]) return this;
                    if (!x) return I(this, v), this;
                    var g = this._events[v];
                    if (g.fn)
                      g.fn !== x ||
                        (p && !g.once) ||
                        (S && g.context !== S) ||
                        I(this, v);
                    else {
                      for (var f = 0, E = [], j = g.length; f < j; f++)
                        (g[f].fn !== x ||
                          (p && !g[f].once) ||
                          (S && g[f].context !== S)) &&
                          E.push(g[f]);
                      E.length
                        ? (this._events[v] = E.length === 1 ? E[0] : E)
                        : I(this, v);
                    }
                    return this;
                  }),
                  (y.prototype.removeAllListeners = function (l) {
                    var x;
                    return (
                      l
                        ? ((x = c ? c + l : l), this._events[x] && I(this, x))
                        : ((this._events = new _()), (this._eventsCount = 0)),
                      this
                    );
                  }),
                  (y.prototype.off = y.prototype.removeListener),
                  (y.prototype.addListener = y.prototype.on),
                  (y.prefixed = c),
                  (y.EventEmitter = y),
                  (T.exports = y);
              },
              213: (T) => {
                T.exports = (C, c) => (
                  (c = c || (() => {})),
                  C.then(
                    (_) =>
                      new Promise((m) => {
                        m(c());
                      }).then(() => _),
                    (_) =>
                      new Promise((m) => {
                        m(c());
                      }).then(() => {
                        throw _;
                      })
                  )
                );
              },
              574: (T, C) => {
                Object.defineProperty(C, "__esModule", { value: !0 }),
                  (C.default = function (c, _, m) {
                    let P = 0,
                      I = c.length;
                    for (; I > 0; ) {
                      let y = (I / 2) | 0,
                        l = P + y;
                      0 >= m(c[l], _) ? ((P = ++l), (I -= y + 1)) : (I = y);
                    }
                    return P;
                  });
              },
              821: (T, C, c) => {
                Object.defineProperty(C, "__esModule", { value: !0 });
                let _ = c(574);
                class m {
                  constructor() {
                    this._queue = [];
                  }
                  enqueue(I, y) {
                    let l = {
                      priority: (y = Object.assign({ priority: 0 }, y))
                        .priority,
                      run: I,
                    };
                    if (
                      this.size &&
                      this._queue[this.size - 1].priority >= y.priority
                    )
                      return void this._queue.push(l);
                    let x = _.default(
                      this._queue,
                      l,
                      (S, p) => p.priority - S.priority
                    );
                    this._queue.splice(x, 0, l);
                  }
                  dequeue() {
                    let I = this._queue.shift();
                    return I?.run;
                  }
                  filter(I) {
                    return this._queue
                      .filter((y) => y.priority === I.priority)
                      .map((y) => y.run);
                  }
                  get size() {
                    return this._queue.length;
                  }
                }
                C.default = m;
              },
              816: (T, C, c) => {
                let _ = c(213);
                class m extends Error {
                  constructor(y) {
                    super(y), (this.name = "TimeoutError");
                  }
                }
                let P = (I, y, l) =>
                  new Promise((x, S) => {
                    if (typeof y != "number" || y < 0)
                      throw TypeError(
                        "Expected `milliseconds` to be a positive number"
                      );
                    if (y === 1 / 0) return void x(I);
                    let p = setTimeout(() => {
                      if (typeof l == "function") {
                        try {
                          x(l());
                        } catch (f) {
                          S(f);
                        }
                        return;
                      }
                      let v =
                          typeof l == "string"
                            ? l
                            : `Promise timed out after ${y} milliseconds`,
                        g = l instanceof Error ? l : new m(v);
                      typeof I.cancel == "function" && I.cancel(), S(g);
                    }, y);
                    _(I.then(x, S), () => {
                      clearTimeout(p);
                    });
                  });
                (T.exports = P),
                  (T.exports.default = P),
                  (T.exports.TimeoutError = m);
              },
            },
            u = {};
          function d(T) {
            var C = u[T];
            if (C !== void 0) return C.exports;
            var c = (u[T] = { exports: {} }),
              _ = !0;
            try {
              s[T](c, c.exports, d), (_ = !1);
            } finally {
              _ && delete u[T];
            }
            return c.exports;
          }
          d.ab = "//";
          var k = {};
          (() => {
            Object.defineProperty(k, "__esModule", { value: !0 });
            let T = d(993),
              C = d(816),
              c = d(821),
              _ = () => {},
              m = new C.TimeoutError();
            class P extends T {
              constructor(y) {
                var l, x, S, p;
                if (
                  (super(),
                  (this._intervalCount = 0),
                  (this._intervalEnd = 0),
                  (this._pendingCount = 0),
                  (this._resolveEmpty = _),
                  (this._resolveIdle = _),
                  !(
                    typeof (y = Object.assign(
                      {
                        carryoverConcurrencyCount: !1,
                        intervalCap: 1 / 0,
                        interval: 0,
                        concurrency: 1 / 0,
                        autoStart: !0,
                        queueClass: c.default,
                      },
                      y
                    )).intervalCap == "number" && y.intervalCap >= 1
                  ))
                )
                  throw TypeError(
                    `Expected \`intervalCap\` to be a number from 1 and up, got \`${(x = (l = y.intervalCap) == null ? void 0 : l.toString()) != null ? x : ""}\` (${typeof y.intervalCap})`
                  );
                if (
                  y.interval === void 0 ||
                  !(Number.isFinite(y.interval) && y.interval >= 0)
                )
                  throw TypeError(
                    `Expected \`interval\` to be a finite number >= 0, got \`${(p = (S = y.interval) == null ? void 0 : S.toString()) != null ? p : ""}\` (${typeof y.interval})`
                  );
                (this._carryoverConcurrencyCount = y.carryoverConcurrencyCount),
                  (this._isIntervalIgnored =
                    y.intervalCap === 1 / 0 || y.interval === 0),
                  (this._intervalCap = y.intervalCap),
                  (this._interval = y.interval),
                  (this._queue = new y.queueClass()),
                  (this._queueClass = y.queueClass),
                  (this.concurrency = y.concurrency),
                  (this._timeout = y.timeout),
                  (this._throwOnTimeout = y.throwOnTimeout === !0),
                  (this._isPaused = y.autoStart === !1);
              }
              get _doesIntervalAllowAnother() {
                return (
                  this._isIntervalIgnored ||
                  this._intervalCount < this._intervalCap
                );
              }
              get _doesConcurrentAllowAnother() {
                return this._pendingCount < this._concurrency;
              }
              _next() {
                this._pendingCount--,
                  this._tryToStartAnother(),
                  this.emit("next");
              }
              _resolvePromises() {
                this._resolveEmpty(),
                  (this._resolveEmpty = _),
                  this._pendingCount === 0 &&
                    (this._resolveIdle(),
                    (this._resolveIdle = _),
                    this.emit("idle"));
              }
              _onResumeInterval() {
                this._onInterval(),
                  this._initializeIntervalIfNeeded(),
                  (this._timeoutId = void 0);
              }
              _isIntervalPaused() {
                let y = Date.now();
                if (this._intervalId === void 0) {
                  let l = this._intervalEnd - y;
                  if (!(l < 0))
                    return (
                      this._timeoutId === void 0 &&
                        (this._timeoutId = setTimeout(() => {
                          this._onResumeInterval();
                        }, l)),
                      !0
                    );
                  this._intervalCount = this._carryoverConcurrencyCount
                    ? this._pendingCount
                    : 0;
                }
                return !1;
              }
              _tryToStartAnother() {
                if (this._queue.size === 0)
                  return (
                    this._intervalId && clearInterval(this._intervalId),
                    (this._intervalId = void 0),
                    this._resolvePromises(),
                    !1
                  );
                if (!this._isPaused) {
                  let y = !this._isIntervalPaused();
                  if (
                    this._doesIntervalAllowAnother &&
                    this._doesConcurrentAllowAnother
                  ) {
                    let l = this._queue.dequeue();
                    return (
                      !!l &&
                      (this.emit("active"),
                      l(),
                      y && this._initializeIntervalIfNeeded(),
                      !0)
                    );
                  }
                }
                return !1;
              }
              _initializeIntervalIfNeeded() {
                this._isIntervalIgnored ||
                  this._intervalId !== void 0 ||
                  ((this._intervalId = setInterval(() => {
                    this._onInterval();
                  }, this._interval)),
                  (this._intervalEnd = Date.now() + this._interval));
              }
              _onInterval() {
                this._intervalCount === 0 &&
                  this._pendingCount === 0 &&
                  this._intervalId &&
                  (clearInterval(this._intervalId),
                  (this._intervalId = void 0)),
                  (this._intervalCount = this._carryoverConcurrencyCount
                    ? this._pendingCount
                    : 0),
                  this._processQueue();
              }
              _processQueue() {
                for (; this._tryToStartAnother(); );
              }
              get concurrency() {
                return this._concurrency;
              }
              set concurrency(y) {
                if (!(typeof y == "number" && y >= 1))
                  throw TypeError(
                    `Expected \`concurrency\` to be a number from 1 and up, got \`${y}\` (${typeof y})`
                  );
                (this._concurrency = y), this._processQueue();
              }
              async add(y, l = {}) {
                return new Promise((x, S) => {
                  let p = async () => {
                    this._pendingCount++, this._intervalCount++;
                    try {
                      let v =
                        this._timeout === void 0 && l.timeout === void 0
                          ? y()
                          : C.default(
                              Promise.resolve(y()),
                              l.timeout === void 0 ? this._timeout : l.timeout,
                              () => {
                                (l.throwOnTimeout === void 0
                                  ? this._throwOnTimeout
                                  : l.throwOnTimeout) && S(m);
                              }
                            );
                      x(await v);
                    } catch (v) {
                      S(v);
                    }
                    this._next();
                  };
                  this._queue.enqueue(p, l),
                    this._tryToStartAnother(),
                    this.emit("add");
                });
              }
              async addAll(y, l) {
                return Promise.all(y.map(async (x) => this.add(x, l)));
              }
              start() {
                return (
                  this._isPaused &&
                    ((this._isPaused = !1), this._processQueue()),
                  this
                );
              }
              pause() {
                this._isPaused = !0;
              }
              clear() {
                this._queue = new this._queueClass();
              }
              async onEmpty() {
                if (this._queue.size !== 0)
                  return new Promise((y) => {
                    let l = this._resolveEmpty;
                    this._resolveEmpty = () => {
                      l(), y();
                    };
                  });
              }
              async onIdle() {
                if (this._pendingCount !== 0 || this._queue.size !== 0)
                  return new Promise((y) => {
                    let l = this._resolveIdle;
                    this._resolveIdle = () => {
                      l(), y();
                    };
                  });
              }
              get size() {
                return this._queue.size;
              }
              sizeBy(y) {
                return this._queue.filter(y).length;
              }
              get pending() {
                return this._pendingCount;
              }
              get isPaused() {
                return this._isPaused;
              }
              get timeout() {
                return this._timeout;
              }
              set timeout(y) {
                this._timeout = y;
              }
            }
            k.default = P;
          })(),
            (t.exports = k);
        })();
      },
      674: (t, s, u) => {
        "use strict";
        u.r(s),
          u.d(s, {
            DiagConsoleLogger: () => Be,
            DiagLogLevel: () => d,
            INVALID_SPANID: () => Q,
            INVALID_SPAN_CONTEXT: () => B,
            INVALID_TRACEID: () => _e,
            ProxyTracer: () => dt,
            ProxyTracerProvider: () => Dt,
            ROOT_CONTEXT: () => Pe,
            SamplingDecision: () => C,
            SpanKind: () => c,
            SpanStatusCode: () => _,
            TraceFlags: () => T,
            ValueType: () => k,
            baggageEntryMetadataFromString: () => ye,
            context: () => zt,
            createContextKey: () => He,
            createNoopMeter: () => Ze,
            createTraceState: () => wr,
            default: () => lr,
            defaultTextMapGetter: () => Ve,
            defaultTextMapSetter: () => Fe,
            diag: () => nr,
            isSpanContextValid: () => Mt,
            isValidSpanId: () => tt,
            isValidTraceId: () => Lt,
            metrics: () => ir,
            propagation: () => ft,
            trace: () => gt,
          });
        var d,
          k,
          T,
          C,
          c,
          _,
          m =
            typeof globalThis == "object"
              ? globalThis
              : typeof self == "object"
                ? self
                : typeof window == "object"
                  ? window
                  : typeof u.g == "object"
                    ? u.g
                    : {},
          P = "1.9.0",
          I = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
          y = (function (r) {
            var o = new Set([r]),
              h = new Set(),
              b = r.match(I);
            if (!b)
              return function () {
                return !1;
              };
            var R = {
              major: +b[1],
              minor: +b[2],
              patch: +b[3],
              prerelease: b[4],
            };
            if (R.prerelease != null)
              return function (D) {
                return D === r;
              };
            function A(D) {
              return h.add(D), !1;
            }
            return function (D) {
              if (o.has(D)) return !0;
              if (h.has(D)) return !1;
              var Z = D.match(I);
              if (!Z) return A(D);
              var Ee = {
                major: +Z[1],
                minor: +Z[2],
                patch: +Z[3],
                prerelease: Z[4],
              };
              return Ee.prerelease != null || R.major !== Ee.major
                ? A(D)
                : R.major === 0
                  ? R.minor === Ee.minor && R.patch <= Ee.patch
                    ? (o.add(D), !0)
                    : A(D)
                  : R.minor <= Ee.minor
                    ? (o.add(D), !0)
                    : A(D);
            };
          })(P),
          l = Symbol.for("opentelemetry.js.api." + P.split(".")[0]);
        function x(r, o, h, b) {
          b === void 0 && (b = !1);
          var R,
            A = (m[l] = (R = m[l]) != null ? R : { version: P });
          if (!b && A[r]) {
            var D = Error(
              "@opentelemetry/api: Attempted duplicate registration of API: " +
                r
            );
            return h.error(D.stack || D.message), !1;
          }
          if (A.version !== P) {
            var D = Error(
              "@opentelemetry/api: Registration of version v" +
                A.version +
                " for " +
                r +
                " does not match previously registered API v" +
                P
            );
            return h.error(D.stack || D.message), !1;
          }
          return (
            (A[r] = o),
            h.debug(
              "@opentelemetry/api: Registered a global for " +
                r +
                " v" +
                P +
                "."
            ),
            !0
          );
        }
        function S(r) {
          var o,
            h,
            b = (o = m[l]) == null ? void 0 : o.version;
          if (b && y(b)) return (h = m[l]) == null ? void 0 : h[r];
        }
        function p(r, o) {
          o.debug(
            "@opentelemetry/api: Unregistering a global for " +
              r +
              " v" +
              P +
              "."
          );
          var h = m[l];
          h && delete h[r];
        }
        var v = function (r, o) {
            var h = typeof Symbol == "function" && r[Symbol.iterator];
            if (!h) return r;
            var b,
              R,
              A = h.call(r),
              D = [];
            try {
              for (; (o === void 0 || o-- > 0) && !(b = A.next()).done; )
                D.push(b.value);
            } catch (Z) {
              R = { error: Z };
            } finally {
              try {
                b && !b.done && (h = A.return) && h.call(A);
              } finally {
                if (R) throw R.error;
              }
            }
            return D;
          },
          g = function (r, o, h) {
            if (h || arguments.length == 2)
              for (var b, R = 0, A = o.length; R < A; R++)
                (!b && R in o) ||
                  (b || (b = Array.prototype.slice.call(o, 0, R)),
                  (b[R] = o[R]));
            return r.concat(b || Array.prototype.slice.call(o));
          },
          f = (function () {
            function r(o) {
              this._namespace = o.namespace || "DiagComponentLogger";
            }
            return (
              (r.prototype.debug = function () {
                for (var o = [], h = 0; h < arguments.length; h++)
                  o[h] = arguments[h];
                return E("debug", this._namespace, o);
              }),
              (r.prototype.error = function () {
                for (var o = [], h = 0; h < arguments.length; h++)
                  o[h] = arguments[h];
                return E("error", this._namespace, o);
              }),
              (r.prototype.info = function () {
                for (var o = [], h = 0; h < arguments.length; h++)
                  o[h] = arguments[h];
                return E("info", this._namespace, o);
              }),
              (r.prototype.warn = function () {
                for (var o = [], h = 0; h < arguments.length; h++)
                  o[h] = arguments[h];
                return E("warn", this._namespace, o);
              }),
              (r.prototype.verbose = function () {
                for (var o = [], h = 0; h < arguments.length; h++)
                  o[h] = arguments[h];
                return E("verbose", this._namespace, o);
              }),
              r
            );
          })();
        function E(r, o, h) {
          var b = S("diag");
          if (b) return h.unshift(o), b[r].apply(b, g([], v(h), !1));
        }
        (function (r) {
          (r[(r.NONE = 0)] = "NONE"),
            (r[(r.ERROR = 30)] = "ERROR"),
            (r[(r.WARN = 50)] = "WARN"),
            (r[(r.INFO = 60)] = "INFO"),
            (r[(r.DEBUG = 70)] = "DEBUG"),
            (r[(r.VERBOSE = 80)] = "VERBOSE"),
            (r[(r.ALL = 9999)] = "ALL");
        })(d || (d = {}));
        var j = function (r, o) {
            var h = typeof Symbol == "function" && r[Symbol.iterator];
            if (!h) return r;
            var b,
              R,
              A = h.call(r),
              D = [];
            try {
              for (; (o === void 0 || o-- > 0) && !(b = A.next()).done; )
                D.push(b.value);
            } catch (Z) {
              R = { error: Z };
            } finally {
              try {
                b && !b.done && (h = A.return) && h.call(A);
              } finally {
                if (R) throw R.error;
              }
            }
            return D;
          },
          U = function (r, o, h) {
            if (h || arguments.length == 2)
              for (var b, R = 0, A = o.length; R < A; R++)
                (!b && R in o) ||
                  (b || (b = Array.prototype.slice.call(o, 0, R)),
                  (b[R] = o[R]));
            return r.concat(b || Array.prototype.slice.call(o));
          },
          N = (function () {
            function r() {
              function o(b) {
                return function () {
                  for (var R = [], A = 0; A < arguments.length; A++)
                    R[A] = arguments[A];
                  var D = S("diag");
                  if (D) return D[b].apply(D, U([], j(R), !1));
                };
              }
              var h = this;
              (h.setLogger = function (b, R) {
                if ((R === void 0 && (R = { logLevel: d.INFO }), b === h)) {
                  var A,
                    D,
                    Z,
                    Ee = Error(
                      "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
                    );
                  return h.error((A = Ee.stack) != null ? A : Ee.message), !1;
                }
                typeof R == "number" && (R = { logLevel: R });
                var Ke = S("diag"),
                  rt = (function (mt, St) {
                    function Ct(Er, ur) {
                      var vt = St[Er];
                      return typeof vt == "function" && mt >= ur
                        ? vt.bind(St)
                        : function () {};
                    }
                    return (
                      mt < d.NONE ? (mt = d.NONE) : mt > d.ALL && (mt = d.ALL),
                      (St = St || {}),
                      {
                        error: Ct("error", d.ERROR),
                        warn: Ct("warn", d.WARN),
                        info: Ct("info", d.INFO),
                        debug: Ct("debug", d.DEBUG),
                        verbose: Ct("verbose", d.VERBOSE),
                      }
                    );
                  })((D = R.logLevel) != null ? D : d.INFO, b);
                if (Ke && !R.suppressOverrideMessage) {
                  var Bt =
                    (Z = Error().stack) != null
                      ? Z
                      : "<failed to generate stacktrace>";
                  Ke.warn("Current logger will be overwritten from " + Bt),
                    rt.warn(
                      "Current logger will overwrite one already registered from " +
                        Bt
                    );
                }
                return x("diag", rt, h, !0);
              }),
                (h.disable = function () {
                  p("diag", h);
                }),
                (h.createComponentLogger = function (b) {
                  return new f(b);
                }),
                (h.verbose = o("verbose")),
                (h.debug = o("debug")),
                (h.info = o("info")),
                (h.warn = o("warn")),
                (h.error = o("error"));
            }
            return (
              (r.instance = function () {
                return (
                  this._instance || (this._instance = new r()), this._instance
                );
              }),
              r
            );
          })(),
          $ = function (r, o) {
            var h = typeof Symbol == "function" && r[Symbol.iterator];
            if (!h) return r;
            var b,
              R,
              A = h.call(r),
              D = [];
            try {
              for (; (o === void 0 || o-- > 0) && !(b = A.next()).done; )
                D.push(b.value);
            } catch (Z) {
              R = { error: Z };
            } finally {
              try {
                b && !b.done && (h = A.return) && h.call(A);
              } finally {
                if (R) throw R.error;
              }
            }
            return D;
          },
          G = function (r) {
            var o = typeof Symbol == "function" && Symbol.iterator,
              h = o && r[o],
              b = 0;
            if (h) return h.call(r);
            if (r && typeof r.length == "number")
              return {
                next: function () {
                  return (
                    r && b >= r.length && (r = void 0),
                    { value: r && r[b++], done: !r }
                  );
                },
              };
            throw TypeError(
              o ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          },
          W = (function () {
            function r(o) {
              this._entries = o ? new Map(o) : new Map();
            }
            return (
              (r.prototype.getEntry = function (o) {
                var h = this._entries.get(o);
                if (h) return Object.assign({}, h);
              }),
              (r.prototype.getAllEntries = function () {
                return Array.from(this._entries.entries()).map(function (o) {
                  var h = $(o, 2);
                  return [h[0], h[1]];
                });
              }),
              (r.prototype.setEntry = function (o, h) {
                var b = new r(this._entries);
                return b._entries.set(o, h), b;
              }),
              (r.prototype.removeEntry = function (o) {
                var h = new r(this._entries);
                return h._entries.delete(o), h;
              }),
              (r.prototype.removeEntries = function () {
                for (var o, h, b = [], R = 0; R < arguments.length; R++)
                  b[R] = arguments[R];
                var A = new r(this._entries);
                try {
                  for (var D = G(b), Z = D.next(); !Z.done; Z = D.next()) {
                    var Ee = Z.value;
                    A._entries.delete(Ee);
                  }
                } catch (Ke) {
                  o = { error: Ke };
                } finally {
                  try {
                    Z && !Z.done && (h = D.return) && h.call(D);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                return A;
              }),
              (r.prototype.clear = function () {
                return new r();
              }),
              r
            );
          })(),
          ie = Symbol("BaggageEntryMetadata"),
          Re = N.instance();
        function we(r) {
          return r === void 0 && (r = {}), new W(new Map(Object.entries(r)));
        }
        function ye(r) {
          return (
            typeof r != "string" &&
              (Re.error(
                "Cannot create baggage metadata from unknown type: " + typeof r
              ),
              (r = "")),
            {
              __TYPE__: ie,
              toString: function () {
                return r;
              },
            }
          );
        }
        function He(r) {
          return Symbol.for(r);
        }
        var Pe = new (function r(o) {
            var h = this;
            (h._currentContext = o ? new Map(o) : new Map()),
              (h.getValue = function (b) {
                return h._currentContext.get(b);
              }),
              (h.setValue = function (b, R) {
                var A = new r(h._currentContext);
                return A._currentContext.set(b, R), A;
              }),
              (h.deleteValue = function (b) {
                var R = new r(h._currentContext);
                return R._currentContext.delete(b), R;
              });
          })(),
          Le = [
            { n: "error", c: "error" },
            { n: "warn", c: "warn" },
            { n: "info", c: "info" },
            { n: "debug", c: "debug" },
            { n: "verbose", c: "trace" },
          ],
          Be = function () {
            for (var r = 0; r < Le.length; r++)
              this[Le[r].n] = (function (o) {
                return function () {
                  for (var h = [], b = 0; b < arguments.length; b++)
                    h[b] = arguments[b];
                  if (console) {
                    var R = console[o];
                    if (
                      (typeof R != "function" && (R = console.log),
                      typeof R == "function")
                    )
                      return R.apply(console, h);
                  }
                };
              })(Le[r].c);
          },
          L = (function () {
            var r = function (o, h) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (b, R) {
                    b.__proto__ = R;
                  }) ||
                function (b, R) {
                  for (var A in R)
                    Object.prototype.hasOwnProperty.call(R, A) && (b[A] = R[A]);
                })(o, h);
            };
            return function (o, h) {
              if (typeof h != "function" && h !== null)
                throw TypeError(
                  "Class extends value " +
                    String(h) +
                    " is not a constructor or null"
                );
              function b() {
                this.constructor = o;
              }
              r(o, h),
                (o.prototype =
                  h === null
                    ? Object.create(h)
                    : ((b.prototype = h.prototype), new b()));
            };
          })(),
          ke = (function () {
            function r() {}
            return (
              (r.prototype.createGauge = function (o, h) {
                return At;
              }),
              (r.prototype.createHistogram = function (o, h) {
                return je;
              }),
              (r.prototype.createCounter = function (o, h) {
                return ct;
              }),
              (r.prototype.createUpDownCounter = function (o, h) {
                return Oe;
              }),
              (r.prototype.createObservableGauge = function (o, h) {
                return ht;
              }),
              (r.prototype.createObservableCounter = function (o, h) {
                return Ne;
              }),
              (r.prototype.createObservableUpDownCounter = function (o, h) {
                return Ue;
              }),
              (r.prototype.addBatchObservableCallback = function (o, h) {}),
              (r.prototype.removeBatchObservableCallback = function (o) {}),
              r
            );
          })(),
          ge = function () {},
          Xe = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), (o.prototype.add = function (h, b) {}), o;
          })(ge),
          Ye = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), (o.prototype.add = function (h, b) {}), o;
          })(ge),
          pe = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), (o.prototype.record = function (h, b) {}), o;
          })(ge),
          lt = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), (o.prototype.record = function (h, b) {}), o;
          })(ge),
          Me = (function () {
            function r() {}
            return (
              (r.prototype.addCallback = function (o) {}),
              (r.prototype.removeCallback = function (o) {}),
              r
            );
          })(),
          We = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), o;
          })(Me),
          me = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), o;
          })(Me),
          ut = (function (r) {
            function o() {
              return (r !== null && r.apply(this, arguments)) || this;
            }
            return L(o, r), o;
          })(Me),
          Qe = new ke(),
          ct = new Xe(),
          At = new pe(),
          je = new lt(),
          Oe = new Ye(),
          Ne = new We(),
          ht = new me(),
          Ue = new ut();
        function Ze() {
          return Qe;
        }
        (function (r) {
          (r[(r.INT = 0)] = "INT"), (r[(r.DOUBLE = 1)] = "DOUBLE");
        })(k || (k = {}));
        var Ve = {
            get: function (r, o) {
              if (r != null) return r[o];
            },
            keys: function (r) {
              return r == null ? [] : Object.keys(r);
            },
          },
          Fe = {
            set: function (r, o, h) {
              r != null && (r[o] = h);
            },
          },
          ue = function (r, o) {
            var h = typeof Symbol == "function" && r[Symbol.iterator];
            if (!h) return r;
            var b,
              R,
              A = h.call(r),
              D = [];
            try {
              for (; (o === void 0 || o-- > 0) && !(b = A.next()).done; )
                D.push(b.value);
            } catch (Z) {
              R = { error: Z };
            } finally {
              try {
                b && !b.done && (h = A.return) && h.call(A);
              } finally {
                if (R) throw R.error;
              }
            }
            return D;
          },
          $e = function (r, o, h) {
            if (h || arguments.length == 2)
              for (var b, R = 0, A = o.length; R < A; R++)
                (!b && R in o) ||
                  (b || (b = Array.prototype.slice.call(o, 0, R)),
                  (b[R] = o[R]));
            return r.concat(b || Array.prototype.slice.call(o));
          },
          Je = (function () {
            function r() {}
            return (
              (r.prototype.active = function () {
                return Pe;
              }),
              (r.prototype.with = function (o, h, b) {
                for (var R = [], A = 3; A < arguments.length; A++)
                  R[A - 3] = arguments[A];
                return h.call.apply(h, $e([b], ue(R), !1));
              }),
              (r.prototype.bind = function (o, h) {
                return h;
              }),
              (r.prototype.enable = function () {
                return this;
              }),
              (r.prototype.disable = function () {
                return this;
              }),
              r
            );
          })(),
          Y = function (r, o) {
            var h = typeof Symbol == "function" && r[Symbol.iterator];
            if (!h) return r;
            var b,
              R,
              A = h.call(r),
              D = [];
            try {
              for (; (o === void 0 || o-- > 0) && !(b = A.next()).done; )
                D.push(b.value);
            } catch (Z) {
              R = { error: Z };
            } finally {
              try {
                b && !b.done && (h = A.return) && h.call(A);
              } finally {
                if (R) throw R.error;
              }
            }
            return D;
          },
          ee = function (r, o, h) {
            if (h || arguments.length == 2)
              for (var b, R = 0, A = o.length; R < A; R++)
                (!b && R in o) ||
                  (b || (b = Array.prototype.slice.call(o, 0, R)),
                  (b[R] = o[R]));
            return r.concat(b || Array.prototype.slice.call(o));
          },
          X = "context",
          re = new Je(),
          ve = (function () {
            function r() {}
            return (
              (r.getInstance = function () {
                return (
                  this._instance || (this._instance = new r()), this._instance
                );
              }),
              (r.prototype.setGlobalContextManager = function (o) {
                return x(X, o, N.instance());
              }),
              (r.prototype.active = function () {
                return this._getContextManager().active();
              }),
              (r.prototype.with = function (o, h, b) {
                for (var R, A = [], D = 3; D < arguments.length; D++)
                  A[D - 3] = arguments[D];
                return (R = this._getContextManager()).with.apply(
                  R,
                  ee([o, h, b], Y(A), !1)
                );
              }),
              (r.prototype.bind = function (o, h) {
                return this._getContextManager().bind(o, h);
              }),
              (r.prototype._getContextManager = function () {
                return S(X) || re;
              }),
              (r.prototype.disable = function () {
                this._getContextManager().disable(), p(X, N.instance());
              }),
              r
            );
          })();
        (function (r) {
          (r[(r.NONE = 0)] = "NONE"), (r[(r.SAMPLED = 1)] = "SAMPLED");
        })(T || (T = {}));
        var Q = "0000000000000000",
          _e = "00000000000000000000000000000000",
          B = { traceId: _e, spanId: Q, traceFlags: T.NONE },
          ce = (function () {
            function r(o) {
              o === void 0 && (o = B), (this._spanContext = o);
            }
            return (
              (r.prototype.spanContext = function () {
                return this._spanContext;
              }),
              (r.prototype.setAttribute = function (o, h) {
                return this;
              }),
              (r.prototype.setAttributes = function (o) {
                return this;
              }),
              (r.prototype.addEvent = function (o, h) {
                return this;
              }),
              (r.prototype.addLink = function (o) {
                return this;
              }),
              (r.prototype.addLinks = function (o) {
                return this;
              }),
              (r.prototype.setStatus = function (o) {
                return this;
              }),
              (r.prototype.updateName = function (o) {
                return this;
              }),
              (r.prototype.end = function (o) {}),
              (r.prototype.isRecording = function () {
                return !1;
              }),
              (r.prototype.recordException = function (o, h) {}),
              r
            );
          })(),
          Ge = He("OpenTelemetry Context Key SPAN");
        function et(r) {
          return r.getValue(Ge) || void 0;
        }
        function mr() {
          return et(ve.getInstance().active());
        }
        function It(r, o) {
          return r.setValue(Ge, o);
        }
        function Qt(r) {
          return r.deleteValue(Ge);
        }
        function Zt(r, o) {
          return It(r, new ce(o));
        }
        function Jt(r) {
          var o;
          return (o = et(r)) == null ? void 0 : o.spanContext();
        }
        var er = /^([0-9a-f]{32})$/i,
          xe = /^[0-9a-f]{16}$/i;
        function Lt(r) {
          return er.test(r) && r !== _e;
        }
        function tt(r) {
          return xe.test(r) && r !== Q;
        }
        function Mt(r) {
          return Lt(r.traceId) && tt(r.spanId);
        }
        function Fr(r) {
          return new ce(r);
        }
        var jt = ve.getInstance(),
          tr = (function () {
            function r() {}
            return (
              (r.prototype.startSpan = function (o, h, b) {
                if ((b === void 0 && (b = jt.active()), h?.root))
                  return new ce();
                var R,
                  A = b && Jt(b);
                return typeof (R = A) == "object" &&
                  typeof R.spanId == "string" &&
                  typeof R.traceId == "string" &&
                  typeof R.traceFlags == "number" &&
                  Mt(A)
                  ? new ce(A)
                  : new ce();
              }),
              (r.prototype.startActiveSpan = function (o, h, b, R) {
                if (!(arguments.length < 2)) {
                  arguments.length == 2
                    ? (Z = h)
                    : arguments.length == 3
                      ? ((A = h), (Z = b))
                      : ((A = h), (D = b), (Z = R));
                  var A,
                    D,
                    Z,
                    Ee = D ?? jt.active(),
                    Ke = this.startSpan(o, A, Ee),
                    rt = It(Ee, Ke);
                  return jt.with(rt, Z, void 0, Ke);
                }
              }),
              r
            );
          })(),
          Ut = new tr(),
          dt = (function () {
            function r(o, h, b, R) {
              (this._provider = o),
                (this.name = h),
                (this.version = b),
                (this.options = R);
            }
            return (
              (r.prototype.startSpan = function (o, h, b) {
                return this._getTracer().startSpan(o, h, b);
              }),
              (r.prototype.startActiveSpan = function (o, h, b, R) {
                var A = this._getTracer();
                return Reflect.apply(A.startActiveSpan, A, arguments);
              }),
              (r.prototype._getTracer = function () {
                if (this._delegate) return this._delegate;
                var o = this._provider.getDelegateTracer(
                  this.name,
                  this.version,
                  this.options
                );
                return o ? ((this._delegate = o), this._delegate) : Ut;
              }),
              r
            );
          })(),
          $t = new ((function () {
            function r() {}
            return (
              (r.prototype.getTracer = function (o, h, b) {
                return new tr();
              }),
              r
            );
          })())(),
          Dt = (function () {
            function r() {}
            return (
              (r.prototype.getTracer = function (o, h, b) {
                var R;
                return (R = this.getDelegateTracer(o, h, b)) != null
                  ? R
                  : new dt(this, o, h, b);
              }),
              (r.prototype.getDelegate = function () {
                var o;
                return (o = this._delegate) != null ? o : $t;
              }),
              (r.prototype.setDelegate = function (o) {
                this._delegate = o;
              }),
              (r.prototype.getDelegateTracer = function (o, h, b) {
                var R;
                return (R = this._delegate) == null
                  ? void 0
                  : R.getTracer(o, h, b);
              }),
              r
            );
          })();
        (function (r) {
          (r[(r.NOT_RECORD = 0)] = "NOT_RECORD"),
            (r[(r.RECORD = 1)] = "RECORD"),
            (r[(r.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED");
        })(C || (C = {})),
          (function (r) {
            (r[(r.INTERNAL = 0)] = "INTERNAL"),
              (r[(r.SERVER = 1)] = "SERVER"),
              (r[(r.CLIENT = 2)] = "CLIENT"),
              (r[(r.PRODUCER = 3)] = "PRODUCER"),
              (r[(r.CONSUMER = 4)] = "CONSUMER");
          })(c || (c = {})),
          (function (r) {
            (r[(r.UNSET = 0)] = "UNSET"),
              (r[(r.OK = 1)] = "OK"),
              (r[(r.ERROR = 2)] = "ERROR");
          })(_ || (_ = {}));
        var qt = "[_0-9a-z-*/]",
          vr = RegExp(
            "^(?:[a-z]" +
              qt +
              "{0,255}|" +
              ("[a-z0-9]" + qt + "{0,240}@[a-z]") +
              qt +
              "{0,13})$"
          ),
          br = /^[ -~]{0,255}[!-~]$/,
          rr = /,|=/,
          _t = (function () {
            function r(o) {
              (this._internalState = new Map()), o && this._parse(o);
            }
            return (
              (r.prototype.set = function (o, h) {
                var b = this._clone();
                return (
                  b._internalState.has(o) && b._internalState.delete(o),
                  b._internalState.set(o, h),
                  b
                );
              }),
              (r.prototype.unset = function (o) {
                var h = this._clone();
                return h._internalState.delete(o), h;
              }),
              (r.prototype.get = function (o) {
                return this._internalState.get(o);
              }),
              (r.prototype.serialize = function () {
                var o = this;
                return this._keys()
                  .reduce(function (h, b) {
                    return h.push(b + "=" + o.get(b)), h;
                  }, [])
                  .join(",");
              }),
              (r.prototype._parse = function (o) {
                !(o.length > 512) &&
                  ((this._internalState = o
                    .split(",")
                    .reverse()
                    .reduce(function (h, b) {
                      var R = b.trim(),
                        A = R.indexOf("=");
                      if (A !== -1) {
                        var D = R.slice(0, A),
                          Z = R.slice(A + 1, b.length);
                        vr.test(D) && br.test(Z) && !rr.test(Z) && h.set(D, Z);
                      }
                      return h;
                    }, new Map())),
                  this._internalState.size > 32 &&
                    (this._internalState = new Map(
                      Array.from(this._internalState.entries())
                        .reverse()
                        .slice(0, 32)
                    )));
              }),
              (r.prototype._keys = function () {
                return Array.from(this._internalState.keys()).reverse();
              }),
              (r.prototype._clone = function () {
                var o = new r();
                return (o._internalState = new Map(this._internalState)), o;
              }),
              r
            );
          })();
        function wr(r) {
          return new _t(r);
        }
        var zt = ve.getInstance(),
          nr = N.instance(),
          yr = new ((function () {
            function r() {}
            return (
              (r.prototype.getMeter = function (o, h, b) {
                return Qe;
              }),
              r
            );
          })())(),
          xt = "metrics",
          ir = (function () {
            function r() {}
            return (
              (r.getInstance = function () {
                return (
                  this._instance || (this._instance = new r()), this._instance
                );
              }),
              (r.prototype.setGlobalMeterProvider = function (o) {
                return x(xt, o, N.instance());
              }),
              (r.prototype.getMeterProvider = function () {
                return S(xt) || yr;
              }),
              (r.prototype.getMeter = function (o, h, b) {
                return this.getMeterProvider().getMeter(o, h, b);
              }),
              (r.prototype.disable = function () {
                p(xt, N.instance());
              }),
              r
            );
          })().getInstance(),
          or = (function () {
            function r() {}
            return (
              (r.prototype.inject = function (o, h) {}),
              (r.prototype.extract = function (o, h) {
                return o;
              }),
              (r.prototype.fields = function () {
                return [];
              }),
              r
            );
          })(),
          Et = He("OpenTelemetry Baggage Key");
        function pt(r) {
          return r.getValue(Et) || void 0;
        }
        function ar() {
          return pt(ve.getInstance().active());
        }
        function _r(r, o) {
          return r.setValue(Et, o);
        }
        function sr(r) {
          return r.deleteValue(Et);
        }
        var Ht = "propagation",
          xr = new or(),
          ft = (function () {
            function r() {
              (this.createBaggage = we),
                (this.getBaggage = pt),
                (this.getActiveBaggage = ar),
                (this.setBaggage = _r),
                (this.deleteBaggage = sr);
            }
            return (
              (r.getInstance = function () {
                return (
                  this._instance || (this._instance = new r()), this._instance
                );
              }),
              (r.prototype.setGlobalPropagator = function (o) {
                return x(Ht, o, N.instance());
              }),
              (r.prototype.inject = function (o, h, b) {
                return (
                  b === void 0 && (b = Fe),
                  this._getGlobalPropagator().inject(o, h, b)
                );
              }),
              (r.prototype.extract = function (o, h, b) {
                return (
                  b === void 0 && (b = Ve),
                  this._getGlobalPropagator().extract(o, h, b)
                );
              }),
              (r.prototype.fields = function () {
                return this._getGlobalPropagator().fields();
              }),
              (r.prototype.disable = function () {
                p(Ht, N.instance());
              }),
              (r.prototype._getGlobalPropagator = function () {
                return S(Ht) || xr;
              }),
              r
            );
          })().getInstance(),
          Rt = "trace",
          gt = (function () {
            function r() {
              (this._proxyTracerProvider = new Dt()),
                (this.wrapSpanContext = Fr),
                (this.isSpanContextValid = Mt),
                (this.deleteSpan = Qt),
                (this.getSpan = et),
                (this.getActiveSpan = mr),
                (this.getSpanContext = Jt),
                (this.setSpan = It),
                (this.setSpanContext = Zt);
            }
            return (
              (r.getInstance = function () {
                return (
                  this._instance || (this._instance = new r()), this._instance
                );
              }),
              (r.prototype.setGlobalTracerProvider = function (o) {
                var h = x(Rt, this._proxyTracerProvider, N.instance());
                return h && this._proxyTracerProvider.setDelegate(o), h;
              }),
              (r.prototype.getTracerProvider = function () {
                return S(Rt) || this._proxyTracerProvider;
              }),
              (r.prototype.getTracer = function (o, h) {
                return this.getTracerProvider().getTracer(o, h);
              }),
              (r.prototype.disable = function () {
                p(Rt, N.instance()), (this._proxyTracerProvider = new Dt());
              }),
              r
            );
          })().getInstance();
        let lr = {
          context: zt,
          diag: nr,
          metrics: ir,
          propagation: ft,
          trace: gt,
        };
      },
      930: (t, s, u) => {
        "use strict";
        var d = u(356).Buffer;
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (function (m, P) {
            for (var I in P)
              Object.defineProperty(m, I, { enumerable: !0, get: P[I] });
          })(s, {
            handleFetch: function () {
              return c;
            },
            interceptFetch: function () {
              return _;
            },
            reader: function () {
              return T;
            },
          });
        let k = u(415),
          T = { url: (m) => m.url, header: (m, P) => m.headers.get(P) };
        async function C(m, P) {
          let {
            url: I,
            method: y,
            headers: l,
            body: x,
            cache: S,
            credentials: p,
            integrity: v,
            mode: g,
            redirect: f,
            referrer: E,
            referrerPolicy: j,
          } = P;
          return {
            testData: m,
            api: "fetch",
            request: {
              url: I,
              method: y,
              headers: [
                ...Array.from(l),
                [
                  "next-test-stack",
                  (function () {
                    let U = (Error().stack ?? "").split(`
`);
                    for (let N = 1; N < U.length; N++)
                      if (U[N].length > 0) {
                        U = U.slice(N);
                        break;
                      }
                    return (U = (U = (U = U.filter(
                      (N) => !N.includes("/next/dist/")
                    )).slice(0, 5)).map((N) =>
                      N.replace("webpack-internal:///(rsc)/", "").trim()
                    )).join("    ");
                  })(),
                ],
              ],
              body: x ? d.from(await P.arrayBuffer()).toString("base64") : null,
              cache: S,
              credentials: p,
              integrity: v,
              mode: g,
              redirect: f,
              referrer: E,
              referrerPolicy: j,
            },
          };
        }
        async function c(m, P) {
          let I = (0, k.getTestReqInfo)(P, T);
          if (!I) return m(P);
          let { testData: y, proxyPort: l } = I,
            x = await C(y, P),
            S = await m(`http://localhost:${l}`, {
              method: "POST",
              body: JSON.stringify(x),
              next: { internal: !0 },
            });
          if (!S.ok)
            throw Object.defineProperty(
              Error(`Proxy request failed: ${S.status}`),
              "__NEXT_ERROR_CODE",
              { value: "E146", enumerable: !1, configurable: !0 }
            );
          let p = await S.json(),
            { api: v } = p;
          switch (v) {
            case "continue":
              return m(P);
            case "abort":
            case "unhandled":
              throw Object.defineProperty(
                Error(`Proxy request aborted [${P.method} ${P.url}]`),
                "__NEXT_ERROR_CODE",
                { value: "E145", enumerable: !1, configurable: !0 }
              );
          }
          let { status: g, headers: f, body: E } = p.response;
          return new Response(E ? d.from(E, "base64") : null, {
            status: g,
            headers: new Headers(f),
          });
        }
        function _(m) {
          return (
            (u.g.fetch = function (P, I) {
              var y;
              return !(I == null || (y = I.next) == null) && y.internal
                ? m(P, I)
                : c(m, new Request(P, I));
            }),
            () => {
              u.g.fetch = m;
            }
          );
        }
      },
      957: (t, s) => {
        "use strict";
        var u = Array.isArray,
          d = Symbol.for("react.transitional.element"),
          k = Symbol.for("react.portal"),
          T =
            (Symbol.for("react.fragment"),
            Symbol.for("react.strict_mode"),
            Symbol.for("react.profiler"),
            Symbol.for("react.forward_ref"),
            Symbol.for("react.suspense"),
            Symbol.for("react.memo"),
            Symbol.for("react.lazy")),
          C = Symbol.iterator,
          c = /\/+/g;
        function _(P, I) {
          var y, l;
          return typeof P == "object" && P !== null && P.key != null
            ? ((y = "" + P.key),
              (l = { "=": "=0", ":": "=2" }),
              "$" +
                y.replace(/[=:]/g, function (x) {
                  return l[x];
                }))
            : I.toString(36);
        }
        function m() {}
      },
      962: (t) => {
        "use strict";
        var s = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          d = Object.getOwnPropertyNames,
          k = Object.prototype.hasOwnProperty,
          T = {};
        function C(l) {
          var x;
          let S = [
              "path" in l && l.path && `Path=${l.path}`,
              "expires" in l &&
                (l.expires || l.expires === 0) &&
                `Expires=${(typeof l.expires == "number" ? new Date(l.expires) : l.expires).toUTCString()}`,
              "maxAge" in l &&
                typeof l.maxAge == "number" &&
                `Max-Age=${l.maxAge}`,
              "domain" in l && l.domain && `Domain=${l.domain}`,
              "secure" in l && l.secure && "Secure",
              "httpOnly" in l && l.httpOnly && "HttpOnly",
              "sameSite" in l && l.sameSite && `SameSite=${l.sameSite}`,
              "partitioned" in l && l.partitioned && "Partitioned",
              "priority" in l && l.priority && `Priority=${l.priority}`,
            ].filter(Boolean),
            p = `${l.name}=${encodeURIComponent((x = l.value) != null ? x : "")}`;
          return S.length === 0 ? p : `${p}; ${S.join("; ")}`;
        }
        function c(l) {
          let x = new Map();
          for (let S of l.split(/; */)) {
            if (!S) continue;
            let p = S.indexOf("=");
            if (p === -1) {
              x.set(S, "true");
              continue;
            }
            let [v, g] = [S.slice(0, p), S.slice(p + 1)];
            try {
              x.set(v, decodeURIComponent(g ?? "true"));
            } catch {}
          }
          return x;
        }
        function _(l) {
          if (!l) return;
          let [[x, S], ...p] = c(l),
            {
              domain: v,
              expires: g,
              httponly: f,
              maxage: E,
              path: j,
              samesite: U,
              secure: N,
              partitioned: $,
              priority: G,
            } = Object.fromEntries(
              p.map(([we, ye]) => [we.toLowerCase().replace(/-/g, ""), ye])
            );
          {
            var W,
              ie,
              Re = {
                name: x,
                value: decodeURIComponent(S),
                domain: v,
                ...(g && { expires: new Date(g) }),
                ...(f && { httpOnly: !0 }),
                ...(typeof E == "string" && { maxAge: Number(E) }),
                path: j,
                ...(U && {
                  sameSite: m.includes((W = (W = U).toLowerCase()))
                    ? W
                    : void 0,
                }),
                ...(N && { secure: !0 }),
                ...(G && {
                  priority: P.includes((ie = (ie = G).toLowerCase()))
                    ? ie
                    : void 0,
                }),
                ...($ && { partitioned: !0 }),
              };
            let we = {};
            for (let ye in Re) Re[ye] && (we[ye] = Re[ye]);
            return we;
          }
        }
        ((l, x) => {
          for (var S in x) s(l, S, { get: x[S], enumerable: !0 });
        })(T, {
          RequestCookies: () => I,
          ResponseCookies: () => y,
          parseCookie: () => c,
          parseSetCookie: () => _,
          stringifyCookie: () => C,
        }),
          (t.exports = ((l, x, S, p) => {
            if ((x && typeof x == "object") || typeof x == "function")
              for (let v of d(x))
                k.call(l, v) ||
                  v === S ||
                  s(l, v, {
                    get: () => x[v],
                    enumerable: !(p = u(x, v)) || p.enumerable,
                  });
            return l;
          })(s({}, "__esModule", { value: !0 }), T));
        var m = ["strict", "lax", "none"],
          P = ["low", "medium", "high"],
          I = class {
            constructor(l) {
              (this._parsed = new Map()), (this._headers = l);
              let x = l.get("cookie");
              if (x)
                for (let [S, p] of c(x))
                  this._parsed.set(S, { name: S, value: p });
            }
            [Symbol.iterator]() {
              return this._parsed[Symbol.iterator]();
            }
            get size() {
              return this._parsed.size;
            }
            get(...l) {
              let x = typeof l[0] == "string" ? l[0] : l[0].name;
              return this._parsed.get(x);
            }
            getAll(...l) {
              var x;
              let S = Array.from(this._parsed);
              if (!l.length) return S.map(([v, g]) => g);
              let p =
                typeof l[0] == "string"
                  ? l[0]
                  : (x = l[0]) == null
                    ? void 0
                    : x.name;
              return S.filter(([v]) => v === p).map(([v, g]) => g);
            }
            has(l) {
              return this._parsed.has(l);
            }
            set(...l) {
              let [x, S] = l.length === 1 ? [l[0].name, l[0].value] : l,
                p = this._parsed;
              return (
                p.set(x, { name: x, value: S }),
                this._headers.set(
                  "cookie",
                  Array.from(p)
                    .map(([v, g]) => C(g))
                    .join("; ")
                ),
                this
              );
            }
            delete(l) {
              let x = this._parsed,
                S = Array.isArray(l) ? l.map((p) => x.delete(p)) : x.delete(l);
              return (
                this._headers.set(
                  "cookie",
                  Array.from(x)
                    .map(([p, v]) => C(v))
                    .join("; ")
                ),
                S
              );
            }
            clear() {
              return this.delete(Array.from(this._parsed.keys())), this;
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
              return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
            }
            toString() {
              return [...this._parsed.values()]
                .map((l) => `${l.name}=${encodeURIComponent(l.value)}`)
                .join("; ");
            }
          },
          y = class {
            constructor(l) {
              var x, S, p;
              (this._parsed = new Map()), (this._headers = l);
              let v =
                (p =
                  (S = (x = l.getSetCookie) == null ? void 0 : x.call(l)) !=
                  null
                    ? S
                    : l.get("set-cookie")) != null
                  ? p
                  : [];
              for (let g of Array.isArray(v)
                ? v
                : (function (f) {
                    if (!f) return [];
                    var E,
                      j,
                      U,
                      N,
                      $,
                      G = [],
                      W = 0;
                    function ie() {
                      for (; W < f.length && /\s/.test(f.charAt(W)); ) W += 1;
                      return W < f.length;
                    }
                    for (; W < f.length; ) {
                      for (E = W, $ = !1; ie(); )
                        if ((j = f.charAt(W)) === ",") {
                          for (
                            U = W, W += 1, ie(), N = W;
                            W < f.length &&
                            (j = f.charAt(W)) !== "=" &&
                            j !== ";" &&
                            j !== ",";

                          )
                            W += 1;
                          W < f.length && f.charAt(W) === "="
                            ? (($ = !0),
                              (W = N),
                              G.push(f.substring(E, U)),
                              (E = W))
                            : (W = U + 1);
                        } else W += 1;
                      (!$ || W >= f.length) && G.push(f.substring(E, f.length));
                    }
                    return G;
                  })(v)) {
                let f = _(g);
                f && this._parsed.set(f.name, f);
              }
            }
            get(...l) {
              let x = typeof l[0] == "string" ? l[0] : l[0].name;
              return this._parsed.get(x);
            }
            getAll(...l) {
              var x;
              let S = Array.from(this._parsed.values());
              if (!l.length) return S;
              let p =
                typeof l[0] == "string"
                  ? l[0]
                  : (x = l[0]) == null
                    ? void 0
                    : x.name;
              return S.filter((v) => v.name === p);
            }
            has(l) {
              return this._parsed.has(l);
            }
            set(...l) {
              let [x, S, p] =
                  l.length === 1 ? [l[0].name, l[0].value, l[0]] : l,
                v = this._parsed;
              return (
                v.set(
                  x,
                  (function (g = { name: "", value: "" }) {
                    return (
                      typeof g.expires == "number" &&
                        (g.expires = new Date(g.expires)),
                      g.maxAge &&
                        (g.expires = new Date(Date.now() + 1e3 * g.maxAge)),
                      (g.path === null || g.path === void 0) && (g.path = "/"),
                      g
                    );
                  })({ name: x, value: S, ...p })
                ),
                (function (g, f) {
                  for (let [, E] of (f.delete("set-cookie"), g)) {
                    let j = C(E);
                    f.append("set-cookie", j);
                  }
                })(v, this._headers),
                this
              );
            }
            delete(...l) {
              let [x, S] = typeof l[0] == "string" ? [l[0]] : [l[0].name, l[0]];
              return this.set({
                ...S,
                name: x,
                value: "",
                expires: new Date(0),
              });
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
              return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
            }
            toString() {
              return [...this._parsed.values()].map(C).join("; ");
            }
          };
      },
    },
    (t) => {
      var s = t((t.s = 289));
      (_ENTRIES = typeof _ENTRIES > "u" ? {} : _ENTRIES)[
        "middleware_src/middleware"
      ] = s;
    },
  ]);
});
import "node:fs";
import "node:path";
import { webcrypto as Vr } from "node:crypto";
globalThis._ENTRIES = {};
globalThis.self = globalThis;
globalThis._ROUTES = [
  {
    name: "src/middleware",
    page: "/",
    regex: [
      "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next\\/static|_next\\/image|favicon.ico).*))(\\.json)?[\\/#\\?]?$",
    ],
  },
];
function Yn(t) {
  return typeof t > "u" || (typeof t == "object" && t.duplex === void 0)
    ? { duplex: "half", ...t }
    : t;
}
var Xr = class extends Request {
  constructor(s, u) {
    super(s, Yn(u));
  }
};
globalThis.Request = Xr;
globalThis.crypto || (globalThis.crypto = new Vr.Crypto());
globalThis.CryptoKey || (globalThis.CryptoKey = Vr.CryptoKey);
function Wr() {
  if (!(this instanceof Wr)) return new Wr();
  throw TypeError("Illegal constructor");
}
globalThis.SubtleCrypto || (globalThis.SubtleCrypto = Wr);
globalThis.Crypto || (globalThis.Crypto = Vr.Crypto);
globalThis.URLPattern || (await Promise.resolve().then(() => (Tn(), Cn)));
Pn();
Nn();
async function Qn(t) {
  let s = new URL(t.url).pathname,
    d = globalThis._ROUTES.find((c) =>
      c.regex.some((_) => new RegExp(_).test(s))
    );
  if (!d) throw new Error(`No route found for ${t.url}`);
  let T = await (
    await self._ENTRIES[`middleware_${d.name}`]
  ).default({ page: d.page, request: { ...t, page: { name: d.name } } });
  return (
    globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(T.waitUntil),
    T.response
  );
}
export { Qn as default };
