(() => {
  var e = {};
  (e.id = 897),
    (e.ids = [897]),
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
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      19771: (e) => {
        "use strict";
        e.exports = require("process");
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
      44708: (e) => {
        "use strict";
        e.exports = require("node:https");
      },
      46370: (e, r, t) => {
        "use strict";
        t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => l,
            tree: () => p,
          });
        var s = t(24332),
          a = t(48819),
          i = t(67851),
          n = t.n(i),
          o = t(97540),
          d = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => o[e]);
        t.d(r, d);
        let p = {
            children: [
              "",
              {
                children: [
                  "chat",
                  {
                    children: [
                      "[threadId]",
                      {
                        children: [
                          "__PAGE__",
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 65221)),
                              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/[threadId]/page.tsx",
                            ],
                          },
                        ],
                      },
                      {},
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
            "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/[threadId]/page.tsx",
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          l = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/chat/[threadId]/page",
              pathname: "/chat/[threadId]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      47371: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => c });
        var s = t(13486),
          a = t(60159),
          i = t.n(a),
          n = t(18945),
          o = t(26518),
          d = t(15577),
          p = t(62924),
          u = t(2984);
        function c({ params: e }) {
          let { threadId: r } = i().use(e),
            t = (0, u.useSearchParams)().get("initialChat"),
            { data: a, isLoading: c } = (0, p.useQuery)({
              queryKey: ["initial-messages", r],
              queryFn: async () => {
                let e = await fetch((0, o.j)(`/api/chat/${r}`), {
                  credentials: "include",
                });
                return await e.json();
              },
            });
          return (0, s.jsx)("div", {
            className: "h-full w-full flex",
            children: c
              ? (0, s.jsx)("div", {
                  className: "flex-1 flex items-center justify-center",
                  children: (0, s.jsx)(d.A, {
                    className: "w-10 h-10 animate-spin",
                  }),
                })
              : (0, s.jsx)(n.ChatForm, {
                  threadId: r,
                  initialMessages: a?.messages,
                  initialChat: t ?? void 0,
                  className: "flex-1",
                }),
          });
        }
      },
      54853: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 65221));
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
      65221: (e, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => s });
        let s = (0, t(33952).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/[threadId]/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/chat/[threadId]/page.tsx",
          "default"
        );
      },
      68005: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 47371));
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
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [50, 151, 680, 208, 289, 112, 303, 757, 424], () => t(46370));
  module.exports = s;
})();
