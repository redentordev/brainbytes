(() => {
  var e = {};
  (e.id = 457),
    (e.ids = [457]),
    (e.modules = {
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      17246: (e, r, t) => {
        "use strict";
        t.d(r, { ChatForm: () => s });
        let s = (0, t(33952).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call ChatForm() from the server but ChatForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "/home/aiz/dev/redentor/brainbytes/packages/app/src/components/chat/chat-form.tsx",
          "ChatForm"
        );
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      19771: (e) => {
        "use strict";
        e.exports = require("process");
      },
      25391: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => p });
        var s = t(38828),
          a = t(17246),
          o = t(5991),
          i = t(65208),
          n = t(42543);
        async function p() {
          return (
            (await o.j.api.getSession({ headers: await (0, i.b3)() })) ||
              (0, n.redirect)("/login"),
            (0, s.jsx)("div", {
              className: "h-full w-full flex",
              children: (0, s.jsx)(a.ChatForm, { className: "flex-1" }),
            })
          );
        }
      },
      29021: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      37067: (e) => {
        "use strict";
        e.exports = require("node:http");
      },
      38266: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 18945));
      },
      44708: (e) => {
        "use strict";
        e.exports = require("node:https");
      },
      48882: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 17246));
      },
      55511: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      57975: (e) => {
        "use strict";
        e.exports = require("node:util");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      67772: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => l,
            tree: () => d,
          });
        var s = t(24332),
          a = t(48819),
          o = t(67851),
          i = t.n(o),
          n = t(97540),
          p = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (p[e] = () => n[e]);
        t.d(r, p);
        let d = {
            children: [
              "",
              {
                children: [
                  "chat",
                  {
                    children: [
                      "__PAGE__",
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 25391)),
                          "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/page.tsx",
                        ],
                      },
                    ],
                  },
                  {
                    layout: [
                      () => Promise.resolve().then(t.bind(t, 20648)),
                      "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/layout.tsx",
                    ],
                    metadata: {
                      icon: [
                        async (e) =>
                          (
                            await Promise.resolve().then(t.bind(t, 9699))
                          ).default(e),
                      ],
                      apple: [],
                      openGraph: [],
                      twitter: [],
                      manifest: void 0,
                    },
                  },
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(t.bind(t, 20685)),
                  "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/layout.tsx",
                ],
                "not-found": [
                  () => Promise.resolve().then(t.bind(t, 87239)),
                  "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/not-found.tsx",
                ],
                forbidden: [
                  () => Promise.resolve().then(t.t.bind(t, 39956, 23)),
                  "next/dist/client/components/forbidden-error",
                ],
                unauthorized: [
                  () => Promise.resolve().then(t.t.bind(t, 92341, 23)),
                  "next/dist/client/components/unauthorized-error",
                ],
                metadata: {
                  icon: [
                    async (e) =>
                      (await Promise.resolve().then(t.bind(t, 9699))).default(
                        e
                      ),
                  ],
                  apple: [],
                  openGraph: [],
                  twitter: [],
                  manifest: void 0,
                },
              },
            ],
          }.children,
          u = [
            "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/page.tsx",
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          l = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/chat/page",
              pathname: "/chat",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      77598: (e) => {
        "use strict";
        e.exports = require("node:crypto");
      },
      78474: (e) => {
        "use strict";
        e.exports = require("node:events");
      },
      79551: (e) => {
        "use strict";
        e.exports = require("url");
      },
    });
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [50, 151, 680, 208, 289, 112, 303, 757, 424], () => t(67772));
  module.exports = s;
})();
