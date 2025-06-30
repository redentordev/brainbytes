(() => {
  var e = {};
  (e.id = 598),
    (e.ids = [598]),
    (e.modules = {
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      5668: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => v,
            routeModule: () => c,
            serverHooks: () => h,
            workAsyncStorage: () => p,
            workUnitAsyncStorage: () => f,
          });
        var s = {};
        r.r(s), r.d(s, { GET: () => u, POST: () => l });
        var a = r(48106),
          n = r(48819),
          i = r(12050),
          d = r(5991),
          o = r(90970);
        async function u(e, { params: t }) {
          try {
            let r = await d.j.api.getSession({ headers: e.headers });
            if (!r)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let s = r.user;
            if (!s || !s.id)
              return Response.json(
                { error: "User not found" },
                { status: 401 }
              );
            let { threadId: a } = await t;
            if (!(await o.jV.getById(a)))
              return Response.json(
                { error: "Thread not found" },
                { status: 404 }
              );
            let n = await o.jV.Message.getByThreadId(a);
            return Response.json({ messages: n });
          } catch (e) {
            return (
              console.error("Get chat thread error:", e),
              Response.json(
                { error: "Failed to get chat thread" },
                { status: 500 }
              )
            );
          }
        }
        async function l(e, { params: t }) {
          try {
            let r = await d.j.api.getSession({ headers: e.headers });
            if (!r)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let s = r.user;
            if (!s || !s.id)
              return Response.json(
                { error: "User not found" },
                { status: 401 }
              );
            let { threadId: a } = await t,
              { messages: n } = await e.json();
            return (
              await o.jV.Message.save(a, n), Response.json({ success: !0 })
            );
          } catch (e) {
            return (
              console.error("Save chat messages error:", e),
              Response.json(
                { error: "Failed to save chat messages" },
                { status: 500 }
              )
            );
          }
        }
        let c = new a.AppRouteRouteModule({
            definition: {
              kind: n.RouteKind.APP_ROUTE,
              page: "/api/chat/[threadId]/route",
              pathname: "/api/chat/[threadId]",
              filename: "route",
              bundlePath: "app/api/chat/[threadId]/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/chat/[threadId]/route.ts",
            nextConfigOutput: "standalone",
            userland: s,
          }),
          { workAsyncStorage: p, workUnitAsyncStorage: f, serverHooks: h } = c;
        function v() {
          return (0, i.patchFetch)({
            workAsyncStorage: p,
            workUnitAsyncStorage: f,
          });
        }
      },
      5991: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => o });
        var s = r(78116),
          a = r(40856),
          n = r(42918),
          i = r(32385),
          d = r(69290);
        let o = (0, s.li)({
          database: (0, a.y)(i.db, { provider: "pg", schema: { ...d } }),
          secret: n.FW.BetterAuthSecret.value,
          emailAndPassword: { enabled: !1 },
          socialProviders: {
            github: {
              clientId: n.FW.GithubClientId.value,
              clientSecret: n.FW.GithubClientSecret.value,
            },
            google: {
              clientId: n.FW.GoogleClientId.value,
              clientSecret: n.FW.GoogleClientSecret.value,
            },
          },
        });
      },
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      13590: (e, t, r) => {
        "use strict";
        r.d(t, { H: () => o, i: () => u });
        var s = r(1081),
          a = r(17463),
          n = r(27819),
          i = r(11618),
          d = r(19330);
        let o = (0, s.cJ)("thread", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            title: (0, n.Qq)("title").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, n.Qq)("material_id"),
            createdAt: (0, i.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, i.vE)("updated_at").defaultNow().notNull(),
          }),
          u = (0, s.cJ)("message", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            content: (0, n.Qq)("content").notNull(),
            role: (0, n.Qq)("role").notNull(),
            threadId: (0, a.uR)("thread_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
            createdAt: (0, i.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => l, ct: () => u, dZ: () => o, kQ: () => d });
        var s = r(1081),
          a = r(27819),
          n = r(82658),
          i = r(11618);
        let d = (0, s.cJ)("user", {
            id: (0, a.Qq)("id").primaryKey(),
            name: (0, a.Qq)("name").notNull(),
            email: (0, a.Qq)("email").notNull().unique(),
            emailVerified: (0, n.zM)("email_verified").notNull(),
            image: (0, a.Qq)("image"),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
          }),
          o = (0, s.cJ)("session", {
            id: (0, a.Qq)("id").primaryKey(),
            expiresAt: (0, i.vE)("expires_at").notNull(),
            token: (0, a.Qq)("token").notNull().unique(),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
            ipAddress: (0, a.Qq)("ip_address"),
            userAgent: (0, a.Qq)("user_agent"),
            userId: (0, a.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
          }),
          u = (0, s.cJ)("account", {
            id: (0, a.Qq)("id").primaryKey(),
            accountId: (0, a.Qq)("account_id").notNull(),
            providerId: (0, a.Qq)("provider_id").notNull(),
            userId: (0, a.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
            accessToken: (0, a.Qq)("access_token"),
            refreshToken: (0, a.Qq)("refresh_token"),
            idToken: (0, a.Qq)("id_token"),
            accessTokenExpiresAt: (0, i.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, i.vE)("refresh_token_expires_at"),
            scope: (0, a.Qq)("scope"),
            password: (0, a.Qq)("password"),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
          }),
          l = (0, s.cJ)("verification", {
            id: (0, a.Qq)("id").primaryKey(),
            identifier: (0, a.Qq)("identifier").notNull(),
            value: (0, a.Qq)("value").notNull(),
            expiresAt: (0, i.vE)("expires_at").notNull(),
            createdAt: (0, i.vE)("created_at"),
            updatedAt: (0, i.vE)("updated_at"),
          });
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
      32385: (e, t, r) => {
        "use strict";
        r.d(t, { db: () => i });
        var s = r(28341),
          a = r(69290),
          n = r(42918);
        let i = (0, s.fd)({
          connection: { connectionString: n.FW.DatabaseUrl.value },
          schema: a,
        });
      },
      37067: (e) => {
        "use strict";
        e.exports = require("node:http");
      },
      38072: (e, t, r) => {
        "use strict";
        r.d(t, {
          DT: () => l,
          LJ: () => c,
          RW: () => v,
          c6: () => p,
          qp: () => f,
          yo: () => h,
        });
        var s = r(29911),
          a = r(1081),
          n = r(17463),
          i = r(27819),
          d = r(82658),
          o = r(11618),
          u = r(19330);
        let l = (0, a.cJ)("materials", {
            id: (0, n.uR)("id").primaryKey().defaultRandom(),
            title: (0, i.Qq)("title").notNull(),
            description: (0, i.Qq)("description").notNull(),
            subject: (0, i.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          c = (0, a.cJ)("material_text_entries", {
            id: (0, n.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, n.uR)("material_id")
              .references(() => l.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, i.Qq)("title").notNull(),
            content: (0, i.Qq)("content").notNull(),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
          }),
          p = (0, s.K1)(l, ({ many: e, one: t }) => ({
            textEntries: e(c),
            user: t(u.kQ, { fields: [l.userId], references: [u.kQ.id] }),
          })),
          f = (0, s.K1)(c, ({ one: e }) => ({
            material: e(l, { fields: [c.materialId], references: [l.id] }),
          })),
          h = (0, a.cJ)("subjects", {
            id: (0, n.uR)("id").primaryKey().defaultRandom(),
            name: (0, i.Qq)("name").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          v = (0, s.K1)(h, ({ one: e }) => ({
            user: e(u.kQ, { fields: [h.userId], references: [u.kQ.id] }),
          }));
      },
      44708: (e) => {
        "use strict";
        e.exports = require("node:https");
      },
      44870: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
      },
      48106: (e, t, r) => {
        "use strict";
        e.exports = r(44870);
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
      69290: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            account: () => s.ct,
            materialTextEntries: () => a.LJ,
            materialTextEntriesRelations: () => a.qp,
            materials: () => a.DT,
            materialsRelations: () => a.c6,
            message: () => n.i,
            session: () => s.dZ,
            subjects: () => a.yo,
            subjectsRelations: () => a.RW,
            thread: () => n.H,
            user: () => s.kQ,
            verification: () => s.Ot,
          });
        var s = r(19330),
          a = r(38072),
          n = r(13590);
      },
      77598: (e) => {
        "use strict";
        e.exports = require("node:crypto");
      },
      78474: (e) => {
        "use strict";
        e.exports = require("node:events");
      },
      80408: () => {},
      87032: () => {},
      90970: (e, t, r) => {
        "use strict";
        r.d(t, { jV: () => s });
        var s,
          a = r(22047),
          n = r(51101),
          i = r(32385),
          d = r(13590);
        !(function (e) {
          (e.create = async function (e, t, r) {
            let [s] = await i.db
              .insert(d.H)
              .values({ userId: e, title: t, materialId: r || null })
              .returning();
            return s;
          }),
            (e.getByUserId = async function (e) {
              return i.db
                .select()
                .from(d.H)
                .where((0, a.eq)(d.H.userId, e))
                .orderBy((0, n.i)(d.H.updatedAt));
            }),
            (e.getById = async function (e) {
              let [t] = await i.db
                .select()
                .from(d.H)
                .where((0, a.eq)(d.H.id, e));
              return t;
            }),
            (e.updateTitle = async function (e, t) {
              let [r] = await i.db
                .update(d.H)
                .set({ title: t, updatedAt: new Date() })
                .where((0, a.eq)(d.H.id, e))
                .returning();
              return r;
            }),
            (e.remove = async function (e) {
              await i.db.delete(d.H).where((0, a.eq)(d.H.id, e));
            });
          var t = e.Message || (e.Message = {});
          async function r(e) {
            return i.db
              .select()
              .from(d.i)
              .where((0, a.eq)(d.i.threadId, e))
              .orderBy(d.i.createdAt);
          }
          (t.save = async function (e, t) {
            try {
              let s = await r(e),
                a = new Map();
              s.forEach((e) => {
                let t = `${e.role}:${e.content}`;
                a.set(t, !0);
              });
              let n = t.filter((e) => {
                let t =
                    "string" == typeof e.content
                      ? e.content
                      : JSON.stringify(e.content),
                  r = `${e.role}:${t}`;
                return !a.has(r);
              });
              if (n.length > 0) {
                console.log(`Adding ${n.length} new messages to thread ${e}`);
                let t = n.map((t) => ({
                  threadId: e,
                  content:
                    "string" == typeof t.content
                      ? t.content
                      : JSON.stringify(t.content),
                  role: t.role,
                }));
                await i.db.insert(d.i).values(t);
              } else console.log(`No new messages to add to thread ${e}`);
            } catch (t) {
              throw (
                (console.error(`Error saving messages for thread ${e}:`, t), t)
              );
            }
          }),
            (t.getByThreadId = r);
        })(s || (s = {}));
      },
    });
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [50, 151, 680], () => r(5668));
  module.exports = s;
})();
