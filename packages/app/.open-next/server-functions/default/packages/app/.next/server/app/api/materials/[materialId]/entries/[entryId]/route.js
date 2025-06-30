(() => {
  var e = {};
  (e.id = 568),
    (e.ids = [568]),
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
        var a = r(78116),
          n = r(40856),
          s = r(42918),
          i = r(32385),
          d = r(69290);
        let o = (0, a.li)({
          database: (0, n.y)(i.db, { provider: "pg", schema: { ...d } }),
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
        r.d(t, { H: () => o, i: () => u });
        var a = r(1081),
          n = r(17463),
          s = r(27819),
          i = r(11618),
          d = r(19330);
        let o = (0, a.cJ)("thread", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            title: (0, s.Qq)("title").notNull(),
            userId: (0, s.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, s.Qq)("material_id"),
            createdAt: (0, i.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, i.vE)("updated_at").defaultNow().notNull(),
          }),
          u = (0, a.cJ)("message", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            content: (0, s.Qq)("content").notNull(),
            role: (0, s.Qq)("role").notNull(),
            threadId: (0, n.uR)("thread_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
            createdAt: (0, i.vE)("created_at").defaultNow().notNull(),
          });
      },
      17764: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => q,
            routeModule: () => p,
            serverHooks: () => f,
            workAsyncStorage: () => y,
            workUnitAsyncStorage: () => m,
          });
        var a = {};
        r.r(a), r.d(a, { DELETE: () => l, PUT: () => c });
        var n = r(48106),
          s = r(48819),
          i = r(12050),
          d = r(5991),
          o = r(65208),
          u = r(33911);
        async function c(e, { params: t }) {
          try {
            let { materialId: r, entryId: a } = await t,
              n = await d.j.api.getSession({ headers: await (0, o.b3)() });
            if (!n)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            if (!(await u.im.getByIdAndUserId(r, n.user.id)))
              return Response.json(
                {
                  error:
                    "Material not found or you don't have permission to modify it",
                },
                { status: 404 }
              );
            let s = await e.json();
            if ("" === s.title)
              return Response.json(
                { error: "Title cannot be empty" },
                { status: 400 }
              );
            if ("" === s.content)
              return Response.json(
                { error: "Content cannot be empty" },
                { status: 400 }
              );
            let i = await u.im.TextEntry.update(a, s);
            if (!i)
              return Response.json(
                { error: "Text entry not found" },
                { status: 404 }
              );
            return Response.json({ entry: i });
          } catch (e) {
            return (
              console.error("Error updating text entry:", e),
              Response.json(
                { error: "Failed to update text entry" },
                { status: 500 }
              )
            );
          }
        }
        async function l(e, { params: t }) {
          try {
            let { materialId: e, entryId: r } = await t,
              a = await d.j.api.getSession({ headers: await (0, o.b3)() });
            if (!a)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            if (!(await u.im.getByIdAndUserId(e, a.user.id)))
              return Response.json(
                {
                  error:
                    "Material not found or you don't have permission to modify it",
                },
                { status: 404 }
              );
            return (
              await u.im.TextEntry.remove(r), Response.json({ success: !0 })
            );
          } catch (e) {
            return (
              console.error("Error deleting text entry:", e),
              Response.json(
                { error: "Failed to delete text entry" },
                { status: 500 }
              )
            );
          }
        }
        let p = new n.AppRouteRouteModule({
            definition: {
              kind: s.RouteKind.APP_ROUTE,
              page: "/api/materials/[materialId]/entries/[entryId]/route",
              pathname: "/api/materials/[materialId]/entries/[entryId]",
              filename: "route",
              bundlePath:
                "app/api/materials/[materialId]/entries/[entryId]/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/materials/[materialId]/entries/[entryId]/route.ts",
            nextConfigOutput: "standalone",
            userland: a,
          }),
          { workAsyncStorage: y, workUnitAsyncStorage: m, serverHooks: f } = p;
        function q() {
          return (0, i.patchFetch)({
            workAsyncStorage: y,
            workUnitAsyncStorage: m,
          });
        }
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => c, ct: () => u, dZ: () => o, kQ: () => d });
        var a = r(1081),
          n = r(27819),
          s = r(82658),
          i = r(11618);
        let d = (0, a.cJ)("user", {
            id: (0, n.Qq)("id").primaryKey(),
            name: (0, n.Qq)("name").notNull(),
            email: (0, n.Qq)("email").notNull().unique(),
            emailVerified: (0, s.zM)("email_verified").notNull(),
            image: (0, n.Qq)("image"),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
          }),
          o = (0, a.cJ)("session", {
            id: (0, n.Qq)("id").primaryKey(),
            expiresAt: (0, i.vE)("expires_at").notNull(),
            token: (0, n.Qq)("token").notNull().unique(),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
            ipAddress: (0, n.Qq)("ip_address"),
            userAgent: (0, n.Qq)("user_agent"),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
          }),
          u = (0, a.cJ)("account", {
            id: (0, n.Qq)("id").primaryKey(),
            accountId: (0, n.Qq)("account_id").notNull(),
            providerId: (0, n.Qq)("provider_id").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
            accessToken: (0, n.Qq)("access_token"),
            refreshToken: (0, n.Qq)("refresh_token"),
            idToken: (0, n.Qq)("id_token"),
            accessTokenExpiresAt: (0, i.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, i.vE)("refresh_token_expires_at"),
            scope: (0, n.Qq)("scope"),
            password: (0, n.Qq)("password"),
            createdAt: (0, i.vE)("created_at").notNull(),
            updatedAt: (0, i.vE)("updated_at").notNull(),
          }),
          c = (0, a.cJ)("verification", {
            id: (0, n.Qq)("id").primaryKey(),
            identifier: (0, n.Qq)("identifier").notNull(),
            value: (0, n.Qq)("value").notNull(),
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
        var a = r(28341),
          n = r(69290),
          s = r(42918);
        let i = (0, a.fd)({
          connection: { connectionString: s.FW.DatabaseUrl.value },
          schema: n,
        });
      },
      33911: (e, t, r) => {
        "use strict";
        r.d(t, { im: () => a });
        var a,
          n = r(22047),
          s = r(32385),
          i = r(38072);
        !(function (e) {
          var t, r;
          async function a(e) {
            return s.db
              .select()
              .from(i.DT)
              .where((0, n.eq)(i.DT.userId, e));
          }
          async function d(e) {
            return (
              await s.db
                .select()
                .from(i.DT)
                .where((0, n.eq)(i.DT.id, e))
                .limit(1)
            )[0];
          }
          async function o(e, t) {
            return (
              await s.db
                .select()
                .from(i.DT)
                .where(
                  (0, n.Uo)((0, n.eq)(i.DT.id, e), (0, n.eq)(i.DT.userId, t))
                )
                .limit(1)
            )[0];
          }
          (e.getAll = async function () {
            return s.db.select().from(i.DT);
          }),
            (e.getByUserId = a),
            (e.getById = d),
            (e.getByIdAndUserId = o),
            (e.getWithTextEntries = async function (e) {
              let t = await d(e);
              if (!t) return;
              let r = await s.db
                .select()
                .from(i.LJ)
                .where((0, n.eq)(i.LJ.materialId, e));
              return { ...t, textEntries: r };
            }),
            (e.getWithTextEntriesByUser = async function (e, t) {
              let r = await o(e, t);
              if (!r) return;
              let a = await s.db
                .select()
                .from(i.LJ)
                .where((0, n.eq)(i.LJ.materialId, e));
              return { ...r, textEntries: a };
            }),
            (e.create = async function (e) {
              let [t] = await s.db.insert(i.DT).values(e).returning();
              return t;
            }),
            (e.update = async function (e, t) {
              let [r] = await s.db
                .update(i.DT)
                .set(t)
                .where((0, n.eq)(i.DT.id, e))
                .returning();
              return r;
            }),
            (e.updateByUser = async function (e, t, r) {
              let [a] = await s.db
                .update(i.DT)
                .set(r)
                .where(
                  (0, n.Uo)((0, n.eq)(i.DT.id, e), (0, n.eq)(i.DT.userId, t))
                )
                .returning();
              return a;
            }),
            (e.remove = async function (e) {
              await s.db.delete(i.DT).where((0, n.eq)(i.DT.id, e));
            }),
            (e.removeByUser = async function (e, t) {
              await s.db
                .delete(i.DT)
                .where(
                  (0, n.Uo)((0, n.eq)(i.DT.id, e), (0, n.eq)(i.DT.userId, t))
                );
            }),
            (e.getBySubject = async function (e) {
              return s.db
                .select()
                .from(i.DT)
                .where((0, n.eq)(i.DT.subject, e));
            }),
            (e.getBySubjectAndUser = async function (e, t) {
              return s.db
                .select()
                .from(i.DT)
                .where(
                  (0, n.Uo)(
                    (0, n.eq)(i.DT.subject, e),
                    (0, n.eq)(i.DT.userId, t)
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
                  .from(i.LJ)
                  .where((0, n.RV)(i.LJ.materialId, r))
              ).reduce((e, t) => {
                let r = t.materialId;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {});
              return t.map((e) => ({ ...e, textEntries: d[e.id] || [] }));
            }),
            (e.deactivateAllExcept = async function (e, t) {
              t
                ? await s.db
                    .update(i.DT)
                    .set({ isActive: !1 })
                    .where(
                      (0, n.Uo)(
                        (0, n.eq)(i.DT.userId, e),
                        (0, n.ne)(i.DT.id, t)
                      )
                    )
                : await s.db
                    .update(i.DT)
                    .set({ isActive: !1 })
                    .where((0, n.eq)(i.DT.userId, e));
            }),
            (e.getActiveWithTextEntriesByUserId = async function (e) {
              let t = await s.db
                .select()
                .from(i.DT)
                .where(
                  (0, n.Uo)(
                    (0, n.eq)(i.DT.userId, e),
                    (0, n.eq)(i.DT.isActive, !0)
                  )
                )
                .limit(1);
              if (0 === t.length) return null;
              let r = t[0],
                a = await s.db
                  .select()
                  .from(i.LJ)
                  .where((0, n.eq)(i.LJ.materialId, r.id));
              return { ...r, textEntries: a };
            }),
            ((t = e.TextEntry || (e.TextEntry = {})).getByMaterialId =
              async function (e) {
                return s.db
                  .select()
                  .from(i.LJ)
                  .where((0, n.eq)(i.LJ.materialId, e));
              }),
            (t.add = async function (e) {
              let [t] = await s.db.insert(i.LJ).values(e).returning();
              return t;
            }),
            (t.update = async function (e, t) {
              let [r] = await s.db
                .update(i.LJ)
                .set(t)
                .where((0, n.eq)(i.LJ.id, e))
                .returning();
              return r;
            }),
            (t.remove = async function (e) {
              await s.db.delete(i.LJ).where((0, n.eq)(i.LJ.id, e));
            }),
            ((r = e.Subject || (e.Subject = {})).getAllSubjects =
              async function () {
                return (
                  await s.db
                    .select({ subject: i.DT.subject })
                    .from(i.DT)
                    .groupBy(i.DT.subject)
                ).map((e) => e.subject);
              }),
            (r.getByUserId = async function (e) {
              return (
                await s.db
                  .select({ subject: i.DT.subject })
                  .from(i.DT)
                  .where((0, n.eq)(i.DT.userId, e))
                  .groupBy(i.DT.subject)
              ).map((e) => e.subject);
            }),
            (r.getAllRecords = async function () {
              return s.db.select().from(i.yo);
            }),
            (r.getRecordsByUserId = async function (e) {
              return s.db
                .select()
                .from(i.yo)
                .where((0, n.eq)(i.yo.userId, e));
            }),
            (r.getRecordById = async function (e) {
              return (
                await s.db
                  .select()
                  .from(i.yo)
                  .where((0, n.eq)(i.yo.id, e))
                  .limit(1)
              )[0];
            }),
            (r.getRecordByName = async function (e, t) {
              return (
                await s.db
                  .select()
                  .from(i.yo)
                  .where(
                    (0, n.Uo)(
                      (0, n.eq)(i.yo.name, e),
                      (0, n.eq)(i.yo.userId, t)
                    )
                  )
                  .limit(1)
              )[0];
            }),
            (r.create = async function (e) {
              let [t] = await s.db.insert(i.yo).values(e).returning();
              return t;
            }),
            (r.update = async function (e, t) {
              let [r] = await s.db
                .update(i.yo)
                .set(t)
                .where((0, n.eq)(i.yo.id, e))
                .returning();
              return r;
            }),
            (r.remove = async function (e) {
              await s.db.delete(i.yo).where((0, n.eq)(i.yo.id, e));
            }),
            (r.removeByUser = async function (e, t) {
              await s.db
                .delete(i.yo)
                .where(
                  (0, n.Uo)((0, n.eq)(i.yo.id, e), (0, n.eq)(i.yo.userId, t))
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
          RW: () => f,
          c6: () => p,
          qp: () => y,
          yo: () => m,
        });
        var a = r(29911),
          n = r(1081),
          s = r(17463),
          i = r(27819),
          d = r(82658),
          o = r(11618),
          u = r(19330);
        let c = (0, n.cJ)("materials", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            title: (0, i.Qq)("title").notNull(),
            description: (0, i.Qq)("description").notNull(),
            subject: (0, i.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          l = (0, n.cJ)("material_text_entries", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, s.uR)("material_id")
              .references(() => c.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, i.Qq)("title").notNull(),
            content: (0, i.Qq)("content").notNull(),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
          }),
          p = (0, a.K1)(c, ({ many: e, one: t }) => ({
            textEntries: e(l),
            user: t(u.kQ, { fields: [c.userId], references: [u.kQ.id] }),
          })),
          y = (0, a.K1)(l, ({ one: e }) => ({
            material: e(c, { fields: [l.materialId], references: [c.id] }),
          })),
          m = (0, n.cJ)("subjects", {
            id: (0, s.uR)("id").primaryKey().defaultRandom(),
            name: (0, i.Qq)("name").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          f = (0, a.K1)(m, ({ one: e }) => ({
            user: e(u.kQ, { fields: [m.userId], references: [u.kQ.id] }),
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
            materialTextEntries: () => n.LJ,
            materialTextEntriesRelations: () => n.qp,
            materials: () => n.DT,
            materialsRelations: () => n.c6,
            message: () => s.i,
            session: () => a.dZ,
            subjects: () => n.yo,
            subjectsRelations: () => n.RW,
            thread: () => s.H,
            user: () => a.kQ,
            verification: () => a.Ot,
          });
        var a = r(19330),
          n = r(38072),
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
    });
  var t = require("../../../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [50, 151, 680, 208], () => r(17764));
  module.exports = a;
})();
