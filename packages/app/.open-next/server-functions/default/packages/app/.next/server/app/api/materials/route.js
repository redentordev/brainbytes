(() => {
  var e = {};
  (e.id = 332),
    (e.ids = [332]),
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
        var a = r(78116),
          i = r(40856),
          s = r(42918),
          n = r(32385),
          d = r(69290);
        let u = (0, a.li)({
          database: (0, i.y)(n.db, { provider: "pg", schema: { ...d } }),
          secret: s.FW.BetterAuthSecret.value,
          emailAndPassword: { enabled: !1 },
          socialProviders: {
            github: {
              clientId: s.FW.GithubClientId.value,
              clientSecret: s.FW.GithubClientSecret.value,
            },
            google: {
              clientId: s.FW.GoogleClientId.value,
              clientSecret: s.FW.GoogleClientSecret.value,
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
        var a = r(1081),
          i = r(17463),
          s = r(27819),
          n = r(11618),
          d = r(19330);
        let u = (0, a.cJ)("thread", {
            id: (0, i.uR)("id").defaultRandom().primaryKey(),
            title: (0, s.Qq)("title").notNull(),
            userId: (0, s.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, s.Qq)("material_id"),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, n.vE)("updated_at").defaultNow().notNull(),
          }),
          o = (0, a.cJ)("message", {
            id: (0, i.uR)("id").defaultRandom().primaryKey(),
            content: (0, s.Qq)("content").notNull(),
            role: (0, s.Qq)("role").notNull(),
            threadId: (0, i.uR)("thread_id")
              .notNull()
              .references(() => u.id, { onDelete: "cascade" }),
            createdAt: (0, n.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => c, ct: () => o, dZ: () => u, kQ: () => d });
        var a = r(1081),
          i = r(27819),
          s = r(82658),
          n = r(11618);
        let d = (0, a.cJ)("user", {
            id: (0, i.Qq)("id").primaryKey(),
            name: (0, i.Qq)("name").notNull(),
            email: (0, i.Qq)("email").notNull().unique(),
            emailVerified: (0, s.zM)("email_verified").notNull(),
            image: (0, i.Qq)("image"),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
          }),
          u = (0, a.cJ)("session", {
            id: (0, i.Qq)("id").primaryKey(),
            expiresAt: (0, n.vE)("expires_at").notNull(),
            token: (0, i.Qq)("token").notNull().unique(),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
            ipAddress: (0, i.Qq)("ip_address"),
            userAgent: (0, i.Qq)("user_agent"),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
          }),
          o = (0, a.cJ)("account", {
            id: (0, i.Qq)("id").primaryKey(),
            accountId: (0, i.Qq)("account_id").notNull(),
            providerId: (0, i.Qq)("provider_id").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
            accessToken: (0, i.Qq)("access_token"),
            refreshToken: (0, i.Qq)("refresh_token"),
            idToken: (0, i.Qq)("id_token"),
            accessTokenExpiresAt: (0, n.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, n.vE)("refresh_token_expires_at"),
            scope: (0, i.Qq)("scope"),
            password: (0, i.Qq)("password"),
            createdAt: (0, n.vE)("created_at").notNull(),
            updatedAt: (0, n.vE)("updated_at").notNull(),
          }),
          c = (0, a.cJ)("verification", {
            id: (0, i.Qq)("id").primaryKey(),
            identifier: (0, i.Qq)("identifier").notNull(),
            value: (0, i.Qq)("value").notNull(),
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
        var a = r(28341),
          i = r(69290),
          s = r(42918);
        let n = (0, a.fd)({
          connection: { connectionString: s.FW.DatabaseUrl.value },
          schema: i,
        });
      },
      33911: (e, t, r) => {
        "use strict";
        r.d(t, { im: () => a });
        var a,
          i = r(22047),
          s = r(32385),
          n = r(38072);
        !(function (e) {
          var t, r;
          async function a(e) {
            return s.db
              .select()
              .from(n.DT)
              .where((0, i.eq)(n.DT.userId, e));
          }
          async function d(e) {
            return (
              await s.db
                .select()
                .from(n.DT)
                .where((0, i.eq)(n.DT.id, e))
                .limit(1)
            )[0];
          }
          async function u(e, t) {
            return (
              await s.db
                .select()
                .from(n.DT)
                .where(
                  (0, i.Uo)((0, i.eq)(n.DT.id, e), (0, i.eq)(n.DT.userId, t))
                )
                .limit(1)
            )[0];
          }
          (e.getAll = async function () {
            return s.db.select().from(n.DT);
          }),
            (e.getByUserId = a),
            (e.getById = d),
            (e.getByIdAndUserId = u),
            (e.getWithTextEntries = async function (e) {
              let t = await d(e);
              if (!t) return;
              let r = await s.db
                .select()
                .from(n.LJ)
                .where((0, i.eq)(n.LJ.materialId, e));
              return { ...t, textEntries: r };
            }),
            (e.getWithTextEntriesByUser = async function (e, t) {
              let r = await u(e, t);
              if (!r) return;
              let a = await s.db
                .select()
                .from(n.LJ)
                .where((0, i.eq)(n.LJ.materialId, e));
              return { ...r, textEntries: a };
            }),
            (e.create = async function (e) {
              let [t] = await s.db.insert(n.DT).values(e).returning();
              return t;
            }),
            (e.update = async function (e, t) {
              let [r] = await s.db
                .update(n.DT)
                .set(t)
                .where((0, i.eq)(n.DT.id, e))
                .returning();
              return r;
            }),
            (e.updateByUser = async function (e, t, r) {
              let [a] = await s.db
                .update(n.DT)
                .set(r)
                .where(
                  (0, i.Uo)((0, i.eq)(n.DT.id, e), (0, i.eq)(n.DT.userId, t))
                )
                .returning();
              return a;
            }),
            (e.remove = async function (e) {
              await s.db.delete(n.DT).where((0, i.eq)(n.DT.id, e));
            }),
            (e.removeByUser = async function (e, t) {
              await s.db
                .delete(n.DT)
                .where(
                  (0, i.Uo)((0, i.eq)(n.DT.id, e), (0, i.eq)(n.DT.userId, t))
                );
            }),
            (e.getBySubject = async function (e) {
              return s.db
                .select()
                .from(n.DT)
                .where((0, i.eq)(n.DT.subject, e));
            }),
            (e.getBySubjectAndUser = async function (e, t) {
              return s.db
                .select()
                .from(n.DT)
                .where(
                  (0, i.Uo)(
                    (0, i.eq)(n.DT.subject, e),
                    (0, i.eq)(n.DT.userId, t)
                  )
                );
            }),
            (e.getAllWithTextEntriesByUserId = async function (e) {
              let t = await a(e),
                r = t.map((e) => e.id);
              if (0 === r.length) return [];
              let d = (
                await s.db
                  .select()
                  .from(n.LJ)
                  .where((0, i.RV)(n.LJ.materialId, r))
              ).reduce((e, t) => {
                let r = t.materialId;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {});
              return t.map((e) => ({ ...e, textEntries: d[e.id] || [] }));
            }),
            (e.deactivateAllExcept = async function (e, t) {
              t
                ? await s.db
                    .update(n.DT)
                    .set({ isActive: !1 })
                    .where(
                      (0, i.Uo)(
                        (0, i.eq)(n.DT.userId, e),
                        (0, i.ne)(n.DT.id, t)
                      )
                    )
                : await s.db
                    .update(n.DT)
                    .set({ isActive: !1 })
                    .where((0, i.eq)(n.DT.userId, e));
            }),
            (e.getActiveWithTextEntriesByUserId = async function (e) {
              let t = await s.db
                .select()
                .from(n.DT)
                .where(
                  (0, i.Uo)(
                    (0, i.eq)(n.DT.userId, e),
                    (0, i.eq)(n.DT.isActive, !0)
                  )
                )
                .limit(1);
              if (0 === t.length) return null;
              let r = t[0],
                a = await s.db
                  .select()
                  .from(n.LJ)
                  .where((0, i.eq)(n.LJ.materialId, r.id));
              return { ...r, textEntries: a };
            }),
            ((t = e.TextEntry || (e.TextEntry = {})).getByMaterialId =
              async function (e) {
                return s.db
                  .select()
                  .from(n.LJ)
                  .where((0, i.eq)(n.LJ.materialId, e));
              }),
            (t.add = async function (e) {
              let [t] = await s.db.insert(n.LJ).values(e).returning();
              return t;
            }),
            (t.update = async function (e, t) {
              let [r] = await s.db
                .update(n.LJ)
                .set(t)
                .where((0, i.eq)(n.LJ.id, e))
                .returning();
              return r;
            }),
            (t.remove = async function (e) {
              await s.db.delete(n.LJ).where((0, i.eq)(n.LJ.id, e));
            }),
            ((r = e.Subject || (e.Subject = {})).getAllSubjects =
              async function () {
                return (
                  await s.db
                    .select({ subject: n.DT.subject })
                    .from(n.DT)
                    .groupBy(n.DT.subject)
                ).map((e) => e.subject);
              }),
            (r.getByUserId = async function (e) {
              return (
                await s.db
                  .select({ subject: n.DT.subject })
                  .from(n.DT)
                  .where((0, i.eq)(n.DT.userId, e))
                  .groupBy(n.DT.subject)
              ).map((e) => e.subject);
            }),
            (r.getAllRecords = async function () {
              return s.db.select().from(n.yo);
            }),
            (r.getRecordsByUserId = async function (e) {
              return s.db
                .select()
                .from(n.yo)
                .where((0, i.eq)(n.yo.userId, e));
            }),
            (r.getRecordById = async function (e) {
              return (
                await s.db
                  .select()
                  .from(n.yo)
                  .where((0, i.eq)(n.yo.id, e))
                  .limit(1)
              )[0];
            }),
            (r.getRecordByName = async function (e, t) {
              return (
                await s.db
                  .select()
                  .from(n.yo)
                  .where(
                    (0, i.Uo)(
                      (0, i.eq)(n.yo.name, e),
                      (0, i.eq)(n.yo.userId, t)
                    )
                  )
                  .limit(1)
              )[0];
            }),
            (r.create = async function (e) {
              let [t] = await s.db.insert(n.yo).values(e).returning();
              return t;
            }),
            (r.update = async function (e, t) {
              let [r] = await s.db
                .update(n.yo)
                .set(t)
                .where((0, i.eq)(n.yo.id, e))
                .returning();
              return r;
            }),
            (r.remove = async function (e) {
              await s.db.delete(n.yo).where((0, i.eq)(n.yo.id, e));
            }),
            (r.removeByUser = async function (e, t) {
              await s.db
                .delete(n.yo)
                .where(
                  (0, i.Uo)((0, i.eq)(n.yo.id, e), (0, i.eq)(n.yo.userId, t))
                );
            });
        })(a || (a = {}));
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
          RW: () => y,
          c6: () => p,
          qp: () => f,
          yo: () => m,
        });
        var a = r(29911),
          i = r(1081),
          s = r(17463),
          n = r(27819),
          d = r(82658),
          u = r(11618),
          o = r(19330);
        let c = (0, i.cJ)("materials", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            title: (0, n.Qq)("title").notNull(),
            description: (0, n.Qq)("description").notNull(),
            subject: (0, n.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, u.vE)("date_added").defaultNow(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.kQ.id, { onDelete: "cascade" }),
          }),
          l = (0, i.cJ)("material_text_entries", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, s.uR)("material_id")
              .references(() => c.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, n.Qq)("title").notNull(),
            content: (0, n.Qq)("content").notNull(),
            dateAdded: (0, u.vE)("date_added").defaultNow(),
          }),
          p = (0, a.K1)(c, ({ many: e, one: t }) => ({
            textEntries: e(l),
            user: t(o.kQ, { fields: [c.userId], references: [o.kQ.id] }),
          })),
          f = (0, a.K1)(l, ({ one: e }) => ({
            material: e(c, { fields: [l.materialId], references: [c.id] }),
          })),
          m = (0, i.cJ)("subjects", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            name: (0, n.Qq)("name").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.kQ.id, { onDelete: "cascade" }),
          }),
          y = (0, a.K1)(m, ({ one: e }) => ({
            user: e(o.kQ, { fields: [m.userId], references: [o.kQ.id] }),
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
            account: () => a.ct,
            materialTextEntries: () => i.LJ,
            materialTextEntriesRelations: () => i.qp,
            materials: () => i.DT,
            materialsRelations: () => i.c6,
            message: () => s.i,
            session: () => a.dZ,
            subjects: () => i.yo,
            subjectsRelations: () => i.RW,
            thread: () => s.H,
            user: () => a.kQ,
            verification: () => a.Ot,
          });
        var a = r(19330),
          i = r(38072),
          s = r(13590);
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
      99339: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => q,
            routeModule: () => p,
            serverHooks: () => y,
            workAsyncStorage: () => f,
            workUnitAsyncStorage: () => m,
          });
        var a = {};
        r.r(a), r.d(a, { GET: () => c, POST: () => l });
        var i = r(48106),
          s = r(48819),
          n = r(12050),
          d = r(5991),
          u = r(65208),
          o = r(33911);
        async function c() {
          try {
            let e = await d.j.api.getSession({ headers: await (0, u.b3)() });
            if (!e)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let t = await o.im.getAllWithTextEntriesByUserId(e.user.id);
            return Response.json({ materials: t });
          } catch (e) {
            return (
              console.error("Materials API error:", e),
              Response.json({ error: "Internal server error" }, { status: 500 })
            );
          }
        }
        async function l(e) {
          try {
            let t = await d.j.api.getSession({ headers: await (0, u.b3)() });
            if (!t)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let { title: r, description: a, subject: i } = await e.json();
            if (!r || !i)
              return Response.json(
                { error: "Title and subject are required" },
                { status: 400 }
              );
            await o.im.deactivateAllExcept(t.user.id);
            let s = await o.im.create({
              title: r,
              description: a || "",
              subject: i,
              userId: t.user.id,
              isActive: !0,
            });
            return Response.json({ material: s }, { status: 201 });
          } catch (e) {
            return (
              console.error("Error creating material:", e),
              Response.json(
                { error: "Failed to create material" },
                { status: 500 }
              )
            );
          }
        }
        let p = new i.AppRouteRouteModule({
            definition: {
              kind: s.RouteKind.APP_ROUTE,
              page: "/api/materials/route",
              pathname: "/api/materials",
              filename: "route",
              bundlePath: "app/api/materials/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/materials/route.ts",
            nextConfigOutput: "standalone",
            userland: a,
          }),
          { workAsyncStorage: f, workUnitAsyncStorage: m, serverHooks: y } = p;
        function q() {
          return (0, n.patchFetch)({
            workAsyncStorage: f,
            workUnitAsyncStorage: m,
          });
        }
      },
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [50, 151, 680, 208], () => r(99339));
  module.exports = a;
})();
