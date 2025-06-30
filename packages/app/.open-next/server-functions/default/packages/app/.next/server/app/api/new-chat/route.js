(() => {
  var e = {};
  (e.id = 779),
    (e.ids = [779]),
    (e.modules = {
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      5991: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => o });
        var a = r(78116),
          n = r(40856),
          i = r(42918),
          s = r(32385),
          d = r(69290);
        let o = (0, a.li)({
          database: (0, n.y)(s.db, { provider: "pg", schema: { ...d } }),
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
        var a = r(1081),
          n = r(17463),
          i = r(27819),
          s = r(11618),
          d = r(19330);
        let o = (0, a.cJ)("thread", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            title: (0, i.Qq)("title").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => d.kQ.id, { onDelete: "cascade" }),
            materialId: (0, i.Qq)("material_id"),
            createdAt: (0, s.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, s.vE)("updated_at").defaultNow().notNull(),
          }),
          u = (0, a.cJ)("message", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            content: (0, i.Qq)("content").notNull(),
            role: (0, i.Qq)("role").notNull(),
            threadId: (0, n.uR)("thread_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
            createdAt: (0, s.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => c, ct: () => u, dZ: () => o, kQ: () => d });
        var a = r(1081),
          n = r(27819),
          i = r(82658),
          s = r(11618);
        let d = (0, a.cJ)("user", {
            id: (0, n.Qq)("id").primaryKey(),
            name: (0, n.Qq)("name").notNull(),
            email: (0, n.Qq)("email").notNull().unique(),
            emailVerified: (0, i.zM)("email_verified").notNull(),
            image: (0, n.Qq)("image"),
            createdAt: (0, s.vE)("created_at").notNull(),
            updatedAt: (0, s.vE)("updated_at").notNull(),
          }),
          o = (0, a.cJ)("session", {
            id: (0, n.Qq)("id").primaryKey(),
            expiresAt: (0, s.vE)("expires_at").notNull(),
            token: (0, n.Qq)("token").notNull().unique(),
            createdAt: (0, s.vE)("created_at").notNull(),
            updatedAt: (0, s.vE)("updated_at").notNull(),
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
            accessTokenExpiresAt: (0, s.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, s.vE)("refresh_token_expires_at"),
            scope: (0, n.Qq)("scope"),
            password: (0, n.Qq)("password"),
            createdAt: (0, s.vE)("created_at").notNull(),
            updatedAt: (0, s.vE)("updated_at").notNull(),
          }),
          c = (0, a.cJ)("verification", {
            id: (0, n.Qq)("id").primaryKey(),
            identifier: (0, n.Qq)("identifier").notNull(),
            value: (0, n.Qq)("value").notNull(),
            expiresAt: (0, s.vE)("expires_at").notNull(),
            createdAt: (0, s.vE)("created_at"),
            updatedAt: (0, s.vE)("updated_at"),
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
      31697: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => m,
            routeModule: () => l,
            serverHooks: () => y,
            workAsyncStorage: () => p,
            workUnitAsyncStorage: () => f,
          });
        var a = {};
        r.r(a), r.d(a, { POST: () => c });
        var n = r(48106),
          i = r(48819),
          s = r(12050),
          d = r(5991),
          o = r(33911),
          u = r(90970);
        async function c(e) {
          try {
            let t = await d.j.api.getSession({ headers: e.headers });
            if (!t)
              return Response.json({ error: "Unauthorized" }, { status: 401 });
            let r = t.user;
            if (!r || !r.id)
              return Response.json(
                { error: "User not found" },
                { status: 401 }
              );
            console.log("Creating new chat thread for user:", r.id);
            let a = await o.im.getActiveWithTextEntriesByUserId(r.id),
              n = `New Chat - ${new Date().toLocaleString()}`;
            console.log("About to create thread with params:", {
              userId: r.id,
              title: n,
              materialId: a?.id || null,
            });
            let i = await u.jV.create(r.id, n, a?.id);
            return (
              console.log("Thread created successfully:", i.id),
              Response.json({ threadId: i.id })
            );
          } catch (e) {
            return (
              console.error("Error creating new chat:", e),
              Response.json(
                {
                  error: "Failed to create new chat thread",
                  details: e instanceof Error ? e.message : String(e),
                },
                { status: 500 }
              )
            );
          }
        }
        let l = new n.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/new-chat/route",
              pathname: "/api/new-chat",
              filename: "route",
              bundlePath: "app/api/new-chat/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/new-chat/route.ts",
            nextConfigOutput: "standalone",
            userland: a,
          }),
          { workAsyncStorage: p, workUnitAsyncStorage: f, serverHooks: y } = l;
        function m() {
          return (0, s.patchFetch)({
            workAsyncStorage: p,
            workUnitAsyncStorage: f,
          });
        }
      },
      32385: (e, t, r) => {
        "use strict";
        r.d(t, { db: () => s });
        var a = r(28341),
          n = r(69290),
          i = r(42918);
        let s = (0, a.fd)({
          connection: { connectionString: i.FW.DatabaseUrl.value },
          schema: n,
        });
      },
      33911: (e, t, r) => {
        "use strict";
        r.d(t, { im: () => a });
        var a,
          n = r(22047),
          i = r(32385),
          s = r(38072);
        !(function (e) {
          var t, r;
          async function a(e) {
            return i.db
              .select()
              .from(s.DT)
              .where((0, n.eq)(s.DT.userId, e));
          }
          async function d(e) {
            return (
              await i.db
                .select()
                .from(s.DT)
                .where((0, n.eq)(s.DT.id, e))
                .limit(1)
            )[0];
          }
          async function o(e, t) {
            return (
              await i.db
                .select()
                .from(s.DT)
                .where(
                  (0, n.Uo)((0, n.eq)(s.DT.id, e), (0, n.eq)(s.DT.userId, t))
                )
                .limit(1)
            )[0];
          }
          (e.getAll = async function () {
            return i.db.select().from(s.DT);
          }),
            (e.getByUserId = a),
            (e.getById = d),
            (e.getByIdAndUserId = o),
            (e.getWithTextEntries = async function (e) {
              let t = await d(e);
              if (!t) return;
              let r = await i.db
                .select()
                .from(s.LJ)
                .where((0, n.eq)(s.LJ.materialId, e));
              return { ...t, textEntries: r };
            }),
            (e.getWithTextEntriesByUser = async function (e, t) {
              let r = await o(e, t);
              if (!r) return;
              let a = await i.db
                .select()
                .from(s.LJ)
                .where((0, n.eq)(s.LJ.materialId, e));
              return { ...r, textEntries: a };
            }),
            (e.create = async function (e) {
              let [t] = await i.db.insert(s.DT).values(e).returning();
              return t;
            }),
            (e.update = async function (e, t) {
              let [r] = await i.db
                .update(s.DT)
                .set(t)
                .where((0, n.eq)(s.DT.id, e))
                .returning();
              return r;
            }),
            (e.updateByUser = async function (e, t, r) {
              let [a] = await i.db
                .update(s.DT)
                .set(r)
                .where(
                  (0, n.Uo)((0, n.eq)(s.DT.id, e), (0, n.eq)(s.DT.userId, t))
                )
                .returning();
              return a;
            }),
            (e.remove = async function (e) {
              await i.db.delete(s.DT).where((0, n.eq)(s.DT.id, e));
            }),
            (e.removeByUser = async function (e, t) {
              await i.db
                .delete(s.DT)
                .where(
                  (0, n.Uo)((0, n.eq)(s.DT.id, e), (0, n.eq)(s.DT.userId, t))
                );
            }),
            (e.getBySubject = async function (e) {
              return i.db
                .select()
                .from(s.DT)
                .where((0, n.eq)(s.DT.subject, e));
            }),
            (e.getBySubjectAndUser = async function (e, t) {
              return i.db
                .select()
                .from(s.DT)
                .where(
                  (0, n.Uo)(
                    (0, n.eq)(s.DT.subject, e),
                    (0, n.eq)(s.DT.userId, t)
                  )
                );
            }),
            (e.getAllWithTextEntriesByUserId = async function (e) {
              let t = await a(e),
                r = t.map((e) => e.id);
              if (0 === r.length) return [];
              let d = (
                await i.db
                  .select()
                  .from(s.LJ)
                  .where((0, n.RV)(s.LJ.materialId, r))
              ).reduce((e, t) => {
                let r = t.materialId;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {});
              return t.map((e) => ({ ...e, textEntries: d[e.id] || [] }));
            }),
            (e.deactivateAllExcept = async function (e, t) {
              t
                ? await i.db
                    .update(s.DT)
                    .set({ isActive: !1 })
                    .where(
                      (0, n.Uo)(
                        (0, n.eq)(s.DT.userId, e),
                        (0, n.ne)(s.DT.id, t)
                      )
                    )
                : await i.db
                    .update(s.DT)
                    .set({ isActive: !1 })
                    .where((0, n.eq)(s.DT.userId, e));
            }),
            (e.getActiveWithTextEntriesByUserId = async function (e) {
              let t = await i.db
                .select()
                .from(s.DT)
                .where(
                  (0, n.Uo)(
                    (0, n.eq)(s.DT.userId, e),
                    (0, n.eq)(s.DT.isActive, !0)
                  )
                )
                .limit(1);
              if (0 === t.length) return null;
              let r = t[0],
                a = await i.db
                  .select()
                  .from(s.LJ)
                  .where((0, n.eq)(s.LJ.materialId, r.id));
              return { ...r, textEntries: a };
            }),
            ((t = e.TextEntry || (e.TextEntry = {})).getByMaterialId =
              async function (e) {
                return i.db
                  .select()
                  .from(s.LJ)
                  .where((0, n.eq)(s.LJ.materialId, e));
              }),
            (t.add = async function (e) {
              let [t] = await i.db.insert(s.LJ).values(e).returning();
              return t;
            }),
            (t.update = async function (e, t) {
              let [r] = await i.db
                .update(s.LJ)
                .set(t)
                .where((0, n.eq)(s.LJ.id, e))
                .returning();
              return r;
            }),
            (t.remove = async function (e) {
              await i.db.delete(s.LJ).where((0, n.eq)(s.LJ.id, e));
            }),
            ((r = e.Subject || (e.Subject = {})).getAllSubjects =
              async function () {
                return (
                  await i.db
                    .select({ subject: s.DT.subject })
                    .from(s.DT)
                    .groupBy(s.DT.subject)
                ).map((e) => e.subject);
              }),
            (r.getByUserId = async function (e) {
              return (
                await i.db
                  .select({ subject: s.DT.subject })
                  .from(s.DT)
                  .where((0, n.eq)(s.DT.userId, e))
                  .groupBy(s.DT.subject)
              ).map((e) => e.subject);
            }),
            (r.getAllRecords = async function () {
              return i.db.select().from(s.yo);
            }),
            (r.getRecordsByUserId = async function (e) {
              return i.db
                .select()
                .from(s.yo)
                .where((0, n.eq)(s.yo.userId, e));
            }),
            (r.getRecordById = async function (e) {
              return (
                await i.db
                  .select()
                  .from(s.yo)
                  .where((0, n.eq)(s.yo.id, e))
                  .limit(1)
              )[0];
            }),
            (r.getRecordByName = async function (e, t) {
              return (
                await i.db
                  .select()
                  .from(s.yo)
                  .where(
                    (0, n.Uo)(
                      (0, n.eq)(s.yo.name, e),
                      (0, n.eq)(s.yo.userId, t)
                    )
                  )
                  .limit(1)
              )[0];
            }),
            (r.create = async function (e) {
              let [t] = await i.db.insert(s.yo).values(e).returning();
              return t;
            }),
            (r.update = async function (e, t) {
              let [r] = await i.db
                .update(s.yo)
                .set(t)
                .where((0, n.eq)(s.yo.id, e))
                .returning();
              return r;
            }),
            (r.remove = async function (e) {
              await i.db.delete(s.yo).where((0, n.eq)(s.yo.id, e));
            }),
            (r.removeByUser = async function (e, t) {
              await i.db
                .delete(s.yo)
                .where(
                  (0, n.Uo)((0, n.eq)(s.yo.id, e), (0, n.eq)(s.yo.userId, t))
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
          RW: () => m,
          c6: () => p,
          qp: () => f,
          yo: () => y,
        });
        var a = r(29911),
          n = r(1081),
          i = r(17463),
          s = r(27819),
          d = r(82658),
          o = r(11618),
          u = r(19330);
        let c = (0, n.cJ)("materials", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            title: (0, s.Qq)("title").notNull(),
            description: (0, s.Qq)("description").notNull(),
            subject: (0, s.Qq)("subject").notNull(),
            isActive: (0, d.zM)("is_active").default(!1),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
            userId: (0, s.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          l = (0, n.cJ)("material_text_entries", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, i.uR)("material_id")
              .references(() => c.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, s.Qq)("title").notNull(),
            content: (0, s.Qq)("content").notNull(),
            dateAdded: (0, o.vE)("date_added").defaultNow(),
          }),
          p = (0, a.K1)(c, ({ many: e, one: t }) => ({
            textEntries: e(l),
            user: t(u.kQ, { fields: [c.userId], references: [u.kQ.id] }),
          })),
          f = (0, a.K1)(l, ({ one: e }) => ({
            material: e(c, { fields: [l.materialId], references: [c.id] }),
          })),
          y = (0, n.cJ)("subjects", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            name: (0, s.Qq)("name").notNull(),
            userId: (0, s.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          m = (0, a.K1)(y, ({ one: e }) => ({
            user: e(u.kQ, { fields: [y.userId], references: [u.kQ.id] }),
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
            message: () => i.i,
            session: () => a.dZ,
            subjects: () => n.yo,
            subjectsRelations: () => n.RW,
            thread: () => i.H,
            user: () => a.kQ,
            verification: () => a.Ot,
          });
        var a = r(19330),
          n = r(38072),
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
        r.d(t, { jV: () => a });
        var a,
          n = r(22047),
          i = r(51101),
          s = r(32385),
          d = r(13590);
        !(function (e) {
          (e.create = async function (e, t, r) {
            let [a] = await s.db
              .insert(d.H)
              .values({ userId: e, title: t, materialId: r || null })
              .returning();
            return a;
          }),
            (e.getByUserId = async function (e) {
              return s.db
                .select()
                .from(d.H)
                .where((0, n.eq)(d.H.userId, e))
                .orderBy((0, i.i)(d.H.updatedAt));
            }),
            (e.getById = async function (e) {
              let [t] = await s.db
                .select()
                .from(d.H)
                .where((0, n.eq)(d.H.id, e));
              return t;
            }),
            (e.updateTitle = async function (e, t) {
              let [r] = await s.db
                .update(d.H)
                .set({ title: t, updatedAt: new Date() })
                .where((0, n.eq)(d.H.id, e))
                .returning();
              return r;
            }),
            (e.remove = async function (e) {
              await s.db.delete(d.H).where((0, n.eq)(d.H.id, e));
            });
          var t = e.Message || (e.Message = {});
          async function r(e) {
            return s.db
              .select()
              .from(d.i)
              .where((0, n.eq)(d.i.threadId, e))
              .orderBy(d.i.createdAt);
          }
          (t.save = async function (e, t) {
            try {
              let a = await r(e),
                n = new Map();
              a.forEach((e) => {
                let t = `${e.role}:${e.content}`;
                n.set(t, !0);
              });
              let i = t.filter((e) => {
                let t =
                    "string" == typeof e.content
                      ? e.content
                      : JSON.stringify(e.content),
                  r = `${e.role}:${t}`;
                return !n.has(r);
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
                await s.db.insert(d.i).values(t);
              } else console.log(`No new messages to add to thread ${e}`);
            } catch (t) {
              throw (
                (console.error(`Error saving messages for thread ${e}:`, t), t)
              );
            }
          }),
            (t.getByThreadId = r);
        })(a || (a = {}));
      },
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [50, 151, 680], () => r(31697));
  module.exports = a;
})();
