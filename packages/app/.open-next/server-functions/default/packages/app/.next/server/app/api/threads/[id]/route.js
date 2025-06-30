(() => {
  var e = {};
  (e.id = 717),
    (e.ids = [717]),
    (e.modules = {
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      5991: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => o });
        var s = r(78116),
          a = r(40856),
          i = r(42918),
          n = r(32385),
          d = r(69290);
        let o = (0, s.li)({
          database: (0, a.y)(n.db, { provider: "pg", schema: { ...d } }),
          secret: i.FW.BetterAuthSecret.value,
          emailAndPassword: { enabled: !1 },
          socialProviders: {
            github: {
              clientId: i.FW.GithubClientId.value,
              clientSecret: i.FW.GithubClientSecret.value,
            },
            google: {
              clientId: i.FW.GoogleClientId.value,
              clientSecret: i.FW.GoogleClientSecret.value,
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
          i = r(27819),
          n = r(11618),
          d = r(19330);
        let o = (0, s.cJ)("thread", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            title: (0, i.Qq)("title").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, i.Qq)("material_id"),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, n.vE)("updated_at").defaultNow().notNull(),
          }),
          u = (0, s.cJ)("message", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            content: (0, i.Qq)("content").notNull(),
            role: (0, i.Qq)("role").notNull(),
            threadId: (0, a.uR)("thread_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => l, ct: () => u, dZ: () => o, kQ: () => d });
        var s = r(1081),
          a = r(27819),
          i = r(82658),
          n = r(11618);
        let d = (0, s.cJ)("user", {
            id: (0, a.Qq)("id").primaryKey(),
            name: (0, a.Qq)("name").notNull(),
            email: (0, a.Qq)("email").notNull().unique(),
            emailVerified: (0, i.zM)("email_verified").notNull(),
            image: (0, a.Qq)("image"),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
          }),
          o = (0, s.cJ)("session", {
            id: (0, a.Qq)("id").primaryKey(),
            expiresAt: (0, n.vE)("expires_at").notNull(),
            token: (0, a.Qq)("token").notNull().unique(),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
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
            accessTokenExpiresAt: (0, n.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, n.vE)("refresh_token_expires_at"),
            scope: (0, a.Qq)("scope"),
            password: (0, a.Qq)("password"),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
          }),
          l = (0, s.cJ)("verification", {
            id: (0, a.Qq)("id").primaryKey(),
            identifier: (0, a.Qq)("identifier").notNull(),
            value: (0, a.Qq)("value").notNull(),
            expiresAt: (0, n.vE)("expires_at").notNull(),
            createdAt: (0, n.vE)("created_at"),
            updatedAt: (0, n.vE)("updated_at"),
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
        r.d(t, { db: () => n });
        var s = r(28341),
          a = r(69290),
          i = r(42918);
        let n = (0, s.fd)({
          connection: { connectionString: i.FW.DatabaseUrl.value },
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
          i = r(17463),
          n = r(27819),
          d = r(82658),
          o = r(11618),
          u = r(19330);
        let l = (0, a.cJ)("materials", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            title: (0, n.Qq)("title").notNull(),
            description: (0, n.Qq)("description").notNull(),
            subject: (0, n.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          c = (0, a.cJ)("material_text_entries", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, i.uR)("material_id")
              .references(() => l.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, n.Qq)("title").notNull(),
            content: (0, n.Qq)("content").notNull(),
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
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            name: (0, n.Qq)("name").notNull(),
            userId: (0, n.Qq)("user_id")
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
      59741: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => q,
            routeModule: () => f,
            serverHooks: () => m,
            workAsyncStorage: () => h,
            workUnitAsyncStorage: () => v,
          });
        var s = {};
        r.r(s), r.d(s, { DELETE: () => p, GET: () => l, PUT: () => c });
        var a = r(48106),
          i = r(48819),
          n = r(12050),
          d = r(90970),
          o = r(5991),
          u = r(65208);
        async function l(e, { params: t }) {
          try {
            let e = await o.j.api.getSession({ headers: await (0, u.b3)() });
            if (!e)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let { id: r } = await t,
              s = await d.jV.getById(r);
            if (!s || s.userId !== e.user.id)
              return Response.json(
                { error: "Thread not found" },
                { status: 404 }
              );
            let a = await d.jV.Message.getByThreadId(r);
            return Response.json({ thread: s, messages: a });
          } catch (e) {
            return (
              console.error("Error fetching thread:", e),
              Response.json(
                { error: "Failed to fetch thread" },
                { status: 500 }
              )
            );
          }
        }
        async function c(e, { params: t }) {
          try {
            let r = await o.j.api.getSession({ headers: await (0, u.b3)() });
            if (!r)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let { id: s } = await t,
              a = await d.jV.getById(s);
            if (!a || a.userId !== r.user.id)
              return Response.json(
                { error: "Thread not found" },
                { status: 404 }
              );
            let { title: i } = await e.json();
            if (!i)
              return Response.json(
                { error: "Title is required" },
                { status: 400 }
              );
            let n = await d.jV.updateTitle(s, i);
            return Response.json({ thread: n });
          } catch (e) {
            return (
              console.error("Error updating thread:", e),
              Response.json(
                { error: "Failed to update thread" },
                { status: 500 }
              )
            );
          }
        }
        async function p(e, { params: t }) {
          try {
            let e = await o.j.api.getSession({ headers: await (0, u.b3)() });
            if (!e)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let { id: r } = await t,
              s = await d.jV.getById(r);
            if (!s || s.userId !== e.user.id)
              return Response.json(
                { error: "Thread not found" },
                { status: 404 }
              );
            return await d.jV.remove(r), Response.json({ success: !0 });
          } catch (e) {
            return (
              console.error("Error deleting thread:", e),
              Response.json(
                { error: "Failed to delete thread" },
                { status: 500 }
              )
            );
          }
        }
        let f = new a.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/threads/[id]/route",
              pathname: "/api/threads/[id]",
              filename: "route",
              bundlePath: "app/api/threads/[id]/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/threads/[id]/route.ts",
            nextConfigOutput: "standalone",
            userland: s,
          }),
          { workAsyncStorage: h, workUnitAsyncStorage: v, serverHooks: m } = f;
        function q() {
          return (0, n.patchFetch)({
            workAsyncStorage: h,
            workUnitAsyncStorage: v,
          });
        }
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
            message: () => i.i,
            session: () => s.dZ,
            subjects: () => a.yo,
            subjectsRelations: () => a.RW,
            thread: () => i.H,
            user: () => s.kQ,
            verification: () => s.Ot,
          });
        var s = r(19330),
          a = r(38072),
          i = r(13590);
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
          i = r(51101),
          n = r(32385),
          d = r(13590);
        !(function (e) {
          (e.create = async function (e, t, r) {
            let [s] = await n.db
              .insert(d.H)
              .values({ userId: e, title: t, materialId: r || null })
              .returning();
            return s;
          }),
            (e.getByUserId = async function (e) {
              return n.db
                .select()
                .from(d.H)
                .where((0, a.eq)(d.H.userId, e))
                .orderBy((0, i.i)(d.H.updatedAt));
            }),
            (e.getById = async function (e) {
              let [t] = await n.db
                .select()
                .from(d.H)
                .where((0, a.eq)(d.H.id, e));
              return t;
            }),
            (e.updateTitle = async function (e, t) {
              let [r] = await n.db
                .update(d.H)
                .set({ title: t, updatedAt: new Date() })
                .where((0, a.eq)(d.H.id, e))
                .returning();
              return r;
            }),
            (e.remove = async function (e) {
              await n.db.delete(d.H).where((0, a.eq)(d.H.id, e));
            });
          var t = e.Message || (e.Message = {});
          async function r(e) {
            return n.db
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
              let i = t.filter((e) => {
                let t =
                    "string" == typeof e.content
                      ? e.content
                      : JSON.stringify(e.content),
                  r = `${e.role}:${t}`;
                return !a.has(r);
              });
              if (i.length > 0) {
                console.log(`Adding ${i.length} new messages to thread ${e}`);
                let t = i.map((t) => ({
                  threadId: e,
                  content:
                    "string" == typeof t.content
                      ? t.content
                      : JSON.stringify(t.content),
                  role: t.role,
                }));
                await n.db.insert(d.i).values(t);
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
    s = t.X(0, [50, 151, 680, 208], () => r(59741));
  module.exports = s;
})();
