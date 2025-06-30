(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1885: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_5cfdac",
        variable: "__variable_5cfdac",
      };
    },
    2137: (e, a, l) => {
      "use strict";
      l.d(a, { Providers: () => c });
      var s = l(4568);
      l(7620);
      var t = l(8762),
        n = l(2848),
        r = l(8309);
      function i(e) {
        let { children: a, ...l } = e;
        return (0, s.jsx)(r.N, { ...l, children: a });
      }
      let o = new t.QueryClient();
      function c(e) {
        let { children: a } = e;
        return (0, s.jsx)(i, {
          attribute: "class",
          defaultTheme: "dark",
          enableSystem: !0,
          disableTransitionOnChange: !0,
          children: (0, s.jsx)(t.QueryClientProvider, {
            client: o,
            children: (0, s.jsx)(n.k, { children: a }),
          }),
        });
      }
    },
    3139: () => {},
    3287: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal",
        },
        className: "__className_9a8899",
        variable: "__variable_9a8899",
      };
    },
    9754: (e, a, l) => {
      Promise.resolve().then(l.t.bind(l, 1885, 23)),
        Promise.resolve().then(l.t.bind(l, 3287, 23)),
        Promise.resolve().then(l.t.bind(l, 3139, 23)),
        Promise.resolve().then(l.bind(l, 2137));
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [388, 495, 762, 478, 848, 587, 315, 358], () => a(9754)),
      (_N_E = e.O());
  },
]);
