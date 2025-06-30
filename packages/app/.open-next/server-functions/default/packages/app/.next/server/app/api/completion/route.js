(() => {
  var e = {};
  (e.id = 916),
    (e.ids = [916]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      44870: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      80408: () => {},
      87032: () => {},
      96229: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => x,
            routeModule: () => d,
            serverHooks: () => m,
            workAsyncStorage: () => c,
            workUnitAsyncStorage: () => l,
          });
        var s = {};
        r.r(s), r.d(s, { POST: () => u });
        var o = r(48106),
          a = r(48819),
          n = r(12050),
          i = r(65942),
          p = r(36545);
        async function u(e) {
          let { prompt: t } = await e.json();
          return (0, i.gM)({
            model: (0, p.N)("gpt-4o-mini"),
            system: "You are a helpful assistant.",
            prompt: t,
          }).toDataStreamResponse();
        }
        let d = new o.AppRouteRouteModule({
            definition: {
              kind: a.RouteKind.APP_ROUTE,
              page: "/api/completion/route",
              pathname: "/api/completion",
              filename: "route",
              bundlePath: "app/api/completion/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/completion/route.ts",
            nextConfigOutput: "standalone",
            userland: s,
          }),
          { workAsyncStorage: c, workUnitAsyncStorage: l, serverHooks: m } = d;
        function x() {
          return (0, n.patchFetch)({
            workAsyncStorage: c,
            workUnitAsyncStorage: l,
          });
        }
      },
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [50, 151, 843], () => r(96229));
  module.exports = s;
})();
