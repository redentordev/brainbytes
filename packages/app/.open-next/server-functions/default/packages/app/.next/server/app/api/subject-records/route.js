(() => {
  var e = {};
  (e.id = 595),
    (e.ids = [595]),
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
        r.d(t, { j: () => u });
        var s = r(78116),
          a = r(40856),
          i = r(42918),
          n = r(32385),
          d = r(69290);
        let u = (0, s.li)({
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
        r.d(t, { H: () => u, i: () => o });
        var s = r(1081),
          a = r(17463),
          i = r(27819),
          n = r(11618),
          d = r(19330);
        let u = (0, s.cJ)("thread", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            title: (0, i.Qq)("title").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, i.Qq)("material_id"),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, n.vE)("updated_at").defaultNow().notNull(),
          }),
          o = (0, s.cJ)("message", {
            id: (0, a.uR)("id").defaultRandom().primaryKey(),
            content: (0, i.Qq)("content").notNull(),
            role: (0, i.Qq)("role").notNull(),
            threadId: (0, a.uR)("thread_id")
              .notNull()
              .references(() => u.id, { onDelete: "cascade" }),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => c, ct: () => o, dZ: () => u, kQ: () => d });
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
          u = (0, s.cJ)("session", {
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
          o = (0, s.cJ)("account", {
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
          c = (0, s.cJ)("verification", {
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
      33911: (e, t, r) => {
        "use strict";
        r.d(t, { im: () => s });
        var s,
          a = r(22047),
          i = r(32385),
          n = r(38072);
        !(function (e) {
          var t, r;
          async function s(e) {
            return i.db
              .select()
              .from(n.DT)
              .where((0, a.eq)(n.DT.userId, e));
          }
          async function d(e) {
            return (
              await i.db
                .select()
                .from(n.DT)
                .where((0, a.eq)(n.DT.id, e))
                .limit(1)
            )[0];
          }
          async function u(e, t) {
            return (
              await i.db
                .select()
                .from(n.DT)
                .where(
                  (0, a.Uo)((0, a.eq)(n.DT.id, e), (0, a.eq)(n.DT.userId, t))
                )
                .limit(1)
            )[0];
          }
          (e.getAll = async function () {
            return i.db.select().from(n.DT);
          }),
            (e.getByUserId = s),
            (e.getById = d),
            (e.getByIdAndUserId = u),
            (e.getWithTextEntries = async function (e) {
              let t = await d(e);
              if (!t) return;
              let r = await i.db
                .select()
                .from(n.LJ)
                .where((0, a.eq)(n.LJ.materialId, e));
              return { ...t, textEntries: r };
            }),
            (e.getWithTextEntriesByUser = async function (e, t) {
              let r = await u(e, t);
              if (!r) return;
              let s = await i.db
                .select()
                .from(n.LJ)
                .where((0, a.eq)(n.LJ.materialId, e));
              return { ...r, textEntries: s };
            }),
            (e.create = async function (e) {
              let [t] = await i.db.insert(n.DT).values(e).returning();
              return t;
            }),
            (e.update = async function (e, t) {
              let [r] = await i.db
                .update(n.DT)
                .set(t)
                .where((0, a.eq)(n.DT.id, e))
                .returning();
              return r;
            }),
            (e.updateByUser = async function (e, t, r) {
              let [s] = await i.db
                .update(n.DT)
                .set(r)
                .where(
                  (0, a.Uo)((0, a.eq)(n.DT.id, e), (0, a.eq)(n.DT.userId, t))
                )
                .returning();
              return s;
            }),
            (e.remove = async function (e) {
              await i.db.delete(n.DT).where((0, a.eq)(n.DT.id, e));
            }),
            (e.removeByUser = async function (e, t) {
              await i.db
                .delete(n.DT)
                .where(
                  (0, a.Uo)((0, a.eq)(n.DT.id, e), (0, a.eq)(n.DT.userId, t))
                );
            }),
            (e.getBySubject = async function (e) {
              return i.db
                .select()
                .from(n.DT)
                .where((0, a.eq)(n.DT.subject, e));
            }),
            (e.getBySubjectAndUser = async function (e, t) {
              return i.db
                .select()
                .from(n.DT)
                .where(
                  (0, a.Uo)(
                    (0, a.eq)(n.DT.subject, e),
                    (0, a.eq)(n.DT.userId, t)
                  )
                );
            }),
            (e.getAllWithTextEntriesByUserId = async function (e) {
              let t = await s(e),
                r = t.map((e) => e.id);
              if (0 === r.length) return [];
              let d = (
                await i.db
                  .select()
                  .from(n.LJ)
                  .where((0, a.RV)(n.LJ.materialId, r))
              ).reduce((e, t) => {
                let r = t.materialId;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {});
              return t.map((e) => ({ ...e, textEntries: d[e.id] || [] }));
            }),
            (e.deactivateAllExcept = async function (e, t) {
              t
                ? await i.db
                    .update(n.DT)
                    .set({ isActive: !1 })
                    .where(
                      (0, a.Uo)(
                        (0, a.eq)(n.DT.userId, e),
                        (0, a.ne)(n.DT.id, t)
                      )
                    )
                : await i.db
                    .update(n.DT)
                    .set({ isActive: !1 })
                    .where((0, a.eq)(n.DT.userId, e));
            }),
            (e.getActiveWithTextEntriesByUserId = async function (e) {
              let t = await i.db
                .select()
                .from(n.DT)
                .where(
                  (0, a.Uo)(
                    (0, a.eq)(n.DT.userId, e),
                    (0, a.eq)(n.DT.isActive, !0)
                  )
                )
                .limit(1);
              if (0 === t.length) return null;
              let r = t[0],
                s = await i.db
                  .select()
                  .from(n.LJ)
                  .where((0, a.eq)(n.LJ.materialId, r.id));
              return { ...r, textEntries: s };
            }),
            ((t = e.TextEntry || (e.TextEntry = {})).getByMaterialId =
              async function (e) {
                return i.db
                  .select()
                  .from(n.LJ)
                  .where((0, a.eq)(n.LJ.materialId, e));
              }),
            (t.add = async function (e) {
              let [t] = await i.db.insert(n.LJ).values(e).returning();
              return t;
            }),
            (t.update = async function (e, t) {
              let [r] = await i.db
                .update(n.LJ)
                .set(t)
                .where((0, a.eq)(n.LJ.id, e))
                .returning();
              return r;
            }),
            (t.remove = async function (e) {
              await i.db.delete(n.LJ).where((0, a.eq)(n.LJ.id, e));
            }),
            ((r = e.Subject || (e.Subject = {})).getAllSubjects =
              async function () {
                return (
                  await i.db
                    .select({ subject: n.DT.subject })
                    .from(n.DT)
                    .groupBy(n.DT.subject)
                ).map((e) => e.subject);
              }),
            (r.getByUserId = async function (e) {
              return (
                await i.db
                  .select({ subject: n.DT.subject })
                  .from(n.DT)
                  .where((0, a.eq)(n.DT.userId, e))
                  .groupBy(n.DT.subject)
              ).map((e) => e.subject);
            }),
            (r.getAllRecords = async function () {
              return i.db.select().from(n.yo);
            }),
            (r.getRecordsByUserId = async function (e) {
              return i.db
                .select()
                .from(n.yo)
                .where((0, a.eq)(n.yo.userId, e));
            }),
            (r.getRecordById = async function (e) {
              return (
                await i.db
                  .select()
                  .from(n.yo)
                  .where((0, a.eq)(n.yo.id, e))
                  .limit(1)
              )[0];
            }),
            (r.getRecordByName = async function (e, t) {
              return (
                await i.db
                  .select()
                  .from(n.yo)
                  .where(
                    (0, a.Uo)(
                      (0, a.eq)(n.yo.name, e),
                      (0, a.eq)(n.yo.userId, t)
                    )
                  )
                  .limit(1)
              )[0];
            }),
            (r.create = async function (e) {
              let [t] = await i.db.insert(n.yo).values(e).returning();
              return t;
            }),
            (r.update = async function (e, t) {
              let [r] = await i.db
                .update(n.yo)
                .set(t)
                .where((0, a.eq)(n.yo.id, e))
                .returning();
              return r;
            }),
            (r.remove = async function (e) {
              await i.db.delete(n.yo).where((0, a.eq)(n.yo.id, e));
            }),
            (r.removeByUser = async function (e, t) {
              await i.db
                .delete(n.yo)
                .where(
                  (0, a.Uo)((0, a.eq)(n.yo.id, e), (0, a.eq)(n.yo.userId, t))
                );
            });
        })(s || (s = {}));
      },
      37067: (e) => {
        "use strict";
        e.exports = require("node:http");
      },
      38072: (e, t, r) => {
        "use strict";
        r.d(t, {
          DT: () => c,
          LJ: () => l,
          RW: () => m,
          c6: () => p,
          qp: () => f,
          yo: () => y,
        });
        var s = r(29911),
          a = r(1081),
          i = r(17463),
          n = r(27819),
          d = r(82658),
          u = r(11618),
          o = r(19330);
        let c = (0, a.cJ)("materials", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            title: (0, n.Qq)("title").notNull(),
            description: (0, n.Qq)("description").notNull(),
            subject: (0, n.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, u.vE)("date_added").defaultNow(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.kQ.id, { onDelete: "cascade" }),
          }),
          l = (0, a.cJ)("material_text_entries", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, i.uR)("material_id")
              .references(() => c.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, n.Qq)("title").notNull(),
            content: (0, n.Qq)("content").notNull(),
            dateAdded: (0, u.vE)("date_added").defaultNow(),
          }),
          p = (0, s.K1)(c, ({ many: e, one: t }) => ({
            textEntries: e(l),
            user: t(o.kQ, { fields: [c.userId], references: [o.kQ.id] }),
          })),
          f = (0, s.K1)(l, ({ one: e }) => ({
            material: e(c, { fields: [l.materialId], references: [c.id] }),
          })),
          y = (0, a.cJ)("subjects", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            name: (0, n.Qq)("name").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.kQ.id, { onDelete: "cascade" }),
          }),
          m = (0, s.K1)(y, ({ one: e }) => ({
            user: e(o.kQ, { fields: [y.userId], references: [o.kQ.id] }),
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
      78501: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => q,
            routeModule: () => p,
            serverHooks: () => m,
            workAsyncStorage: () => f,
            workUnitAsyncStorage: () => y,
          });
        var s = {};
        r.r(s), r.d(s, { GET: () => c, POST: () => l });
        var a = r(48106),
          i = r(48819),
          n = r(12050),
          d = r(5991),
          u = r(65208),
          o = r(33911);
        async function c() {
          try {
            let e = await d.j.api.getSession({ headers: await (0, u.b3)() });
            if (!e)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let t = await o.im.Subject.getRecordsByUserId(e.user.id);
            return Response.json({ subjects: t });
          } catch (e) {
            return (
              console.error("Error fetching subjects:", e),
              Response.json(
                { error: "Failed to fetch subjects" },
                { status: 500 }
              )
            );
          }
        }
        async function l(e) {
          try {
            let t = await d.j.api.getSession({ headers: await (0, u.b3)() });
            if (!t)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let { name: r } = await e.json();
            if (!r)
              return Response.json(
                { error: "Name is required" },
                { status: 400 }
              );
            if (await o.im.Subject.getRecordByName(r, t.user.id))
              return Response.json(
                { error: "Subject with this name already exists" },
                { status: 400 }
              );
            let s = await o.im.Subject.create({ name: r, userId: t.user.id });
            return Response.json({ subject: s }, { status: 201 });
          } catch (e) {
            return (
              console.error("Error creating subject:", e),
              Response.json(
                { error: "Failed to create subject" },
                { status: 500 }
              )
            );
          }
        }
        let p = new a.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/subject-records/route",
              pathname: "/api/subject-records",
              filename: "route",
              bundlePath: "app/api/subject-records/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/subject-records/route.ts",
            nextConfigOutput: "standalone",
            userland: s,
          }),
          { workAsyncStorage: f, workUnitAsyncStorage: y, serverHooks: m } = p;
        function q() {
          return (0, n.patchFetch)({
            workAsyncStorage: f,
            workUnitAsyncStorage: y,
          });
        }
      },
      80408: () => {},
      87032: () => {},
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [50, 151, 680, 208], () => r(78501));
  module.exports = s;
})();
