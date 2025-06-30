(() => {
  var e = {};
  (e.id = 276),
    (e.ids = [276]),
    (e.modules = {
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      5991: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => d });
        var a = r(78116),
          n = r(40856),
          i = r(42918),
          s = r(32385),
          o = r(69290);
        let d = (0, a.li)({
          database: (0, n.y)(s.db, { provider: "pg", schema: { ...o } }),
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
        r.d(t, { H: () => d, i: () => u });
        var a = r(1081),
          n = r(17463),
          i = r(27819),
          s = r(11618),
          o = r(19330);
        let d = (0, a.cJ)("thread", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            title: (0, i.Qq)("title").notNull(),
            userId: (0, i.Qq)("user_id")
              .notNull()
              .references(() => o.kQ.id, { onDelete: "cascade" }),
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
              .references(() => d.id, { onDelete: "cascade" }),
            createdAt: (0, s.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, r) => {
        "use strict";
        r.d(t, { Ot: () => l, ct: () => u, dZ: () => d, kQ: () => o });
        var a = r(1081),
          n = r(27819),
          i = r(82658),
          s = r(11618);
        let o = (0, a.cJ)("user", {
            id: (0, n.Qq)("id").primaryKey(),
            name: (0, n.Qq)("name").notNull(),
            email: (0, n.Qq)("email").notNull().unique(),
            emailVerified: (0, i.zM)("email_verified").notNull(),
            image: (0, n.Qq)("image"),
            createdAt: (0, s.vE)("created_at").notNull(),
            updatedAt: (0, s.vE)("updated_at").notNull(),
          }),
          d = (0, a.cJ)("session", {
            id: (0, n.Qq)("id").primaryKey(),
            expiresAt: (0, s.vE)("expires_at").notNull(),
            token: (0, n.Qq)("token").notNull().unique(),
            createdAt: (0, s.vE)("created_at").notNull(),
            updatedAt: (0, s.vE)("updated_at").notNull(),
            ipAddress: (0, n.Qq)("ip_address"),
            userAgent: (0, n.Qq)("user_agent"),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
          }),
          u = (0, a.cJ)("account", {
            id: (0, n.Qq)("id").primaryKey(),
            accountId: (0, n.Qq)("account_id").notNull(),
            providerId: (0, n.Qq)("provider_id").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => o.id, { onDelete: "cascade" }),
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
          l = (0, a.cJ)("verification", {
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
      33277: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            patchFetch: () => b,
            routeModule: () => f,
            serverHooks: () => w,
            workAsyncStorage: () => y,
            workUnitAsyncStorage: () => g,
          });
        var a = {};
        r.r(a), r.d(a, { POST: () => m });
        var n = r(48106),
          i = r(48819),
          s = r(12050),
          o = r(65942),
          d = r(5991),
          u = r(36545),
          l = r(42918);
        let c = (0, u.r)({ apiKey: l.FW.OpenaiApiKey.value });
        c("gpt-4o-mini");
        var h = r(33911),
          p = r(90970);
        async function m(e) {
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
            let { messages: a, id: n } = await e.json();
            if (1 === a.length) {
              let { text: e } = await (0, o.Df)({
                model: c("gpt-4o-mini"),
                system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 
        Generate a title for the conversation based on the user's input.
        The title should be a single sentence that captures the main idea of the conversation.
        The title should be no more than 50 characters.
        The input is not a question or anything, view it in an objective angle and describe it as 
        a title for the conversation.
        `,
                messages: [{ role: "user", content: a[0].content }],
              });
              await p.jV.updateTitle(n, e);
            }
            await p.jV.Message.save(n, a);
            let i = await h.im.getActiveWithTextEntriesByUserId(r.id),
              s = "";
            return (
              i
                ? ((s = `
You are helping the user learn about "${i.title}"
       (Subject: ${i.subject}).

`),
                  i.textEntries &&
                    i.textEntries.length > 0 &&
                    ((s += "Here are the learning materials to focus on:\n\n"),
                    i.textEntries.forEach((e) => {
                      s += `<material title="${e.title}">
${e.content}
</material>

`;
                    }),
                    (s += `Focus your teaching and responses on the material provided above.
        Use this as your primary knowledge source when helping the user learn this topic.
`)))
                : (s = `
Since the user doesn't have an activate material instruct them by
      saying something along the lines of:
      To get started, please add and activate a learning material from the materials sidebar.`),
              (0, o.gM)({
                model: c("gpt-4o-mini"),
                system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 

       You are developed by BrainBytes Team.
       The team is made of 4 students from Mapua Malayan Digital College.
       The team members are:
       - Redentor Valerio - Lead Developer
       - Neina Burce - Developer
       - Michael Angel Lu - Developer
       - Abigail Galilo - Developer

       The current date and time is ${new Date().toLocaleString()}.

       The user's name is ${r?.name}.
       The user's email is ${r?.email}.

       You can use the material context to help the user learn.
       No need to ask confirmation. You have the ability to detect 
       and respond to different types of questions (Definitions, Questions, and Examples).

       If you see that there's a material context, review it and come up with a way
       to help the user learn it from the beginning step by step. When user prompts you
       immediately do the question and answer routine, true or false questions, and fill in the blank questions and
       other simple but engaging activities that will help the user learn.

       Strictly follow the material context. Only ask the user 1 by 1 on the material context. Do 
       a step by step teaching on the material context.

       Ask the user how confident they are about the material context. If they are not confident,
       review them on the material context. If they are confident, then move on to the next step.

       Lastly the formatting of your response should be as follows:
       Strictly use Markdown formatting.

       Your tone should be fun, engaging, and friendly. Try to insert
       fun jokes and interesting facts about the material context. Use emojis
       to make the response more engaging.

       <MaterialContext>
       ${s}
       </MaterialContext>
      `,
                messages: a,
              }).toDataStreamResponse()
            );
          } catch (e) {
            return (
              console.error("Chat API error:", e),
              Response.json(
                { error: "Failed to process chat request" },
                { status: 500 }
              )
            );
          }
        }
        let f = new n.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/chat/route",
              pathname: "/api/chat",
              filename: "route",
              bundlePath: "app/api/chat/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/chat/route.ts",
            nextConfigOutput: "standalone",
            userland: a,
          }),
          { workAsyncStorage: y, workUnitAsyncStorage: g, serverHooks: w } = f;
        function b() {
          return (0, s.patchFetch)({
            workAsyncStorage: y,
            workUnitAsyncStorage: g,
          });
        }
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
          async function o(e) {
            return (
              await i.db
                .select()
                .from(s.DT)
                .where((0, n.eq)(s.DT.id, e))
                .limit(1)
            )[0];
          }
          async function d(e, t) {
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
            (e.getById = o),
            (e.getByIdAndUserId = d),
            (e.getWithTextEntries = async function (e) {
              let t = await o(e);
              if (!t) return;
              let r = await i.db
                .select()
                .from(s.LJ)
                .where((0, n.eq)(s.LJ.materialId, e));
              return { ...t, textEntries: r };
            }),
            (e.getWithTextEntriesByUser = async function (e, t) {
              let r = await d(e, t);
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
              let o = (
                await i.db
                  .select()
                  .from(s.LJ)
                  .where((0, n.RV)(s.LJ.materialId, r))
              ).reduce((e, t) => {
                let r = t.materialId;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {});
              return t.map((e) => ({ ...e, textEntries: o[e.id] || [] }));
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
          DT: () => l,
          LJ: () => c,
          RW: () => f,
          c6: () => h,
          qp: () => p,
          yo: () => m,
        });
        var a = r(29911),
          n = r(1081),
          i = r(17463),
          s = r(27819),
          o = r(82658),
          d = r(11618),
          u = r(19330);
        let l = (0, n.cJ)("materials", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            title: (0, s.Qq)("title").notNull(),
            description: (0, s.Qq)("description").notNull(),
            subject: (0, s.Qq)("subject").notNull(),
            isActive: (0, o.zM)("is_active").default(!1),
            dateAdded: (0, d.vE)("date_added").defaultNow(),
            userId: (0, s.Qq)("user_id")
              .notNull()
              .references(() => u.kQ.id, { onDelete: "cascade" }),
          }),
          c = (0, n.cJ)("material_text_entries", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, i.uR)("material_id")
              .references(() => l.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, s.Qq)("title").notNull(),
            content: (0, s.Qq)("content").notNull(),
            dateAdded: (0, d.vE)("date_added").defaultNow(),
          }),
          h = (0, a.K1)(l, ({ many: e, one: t }) => ({
            textEntries: e(c),
            user: t(u.kQ, { fields: [l.userId], references: [u.kQ.id] }),
          })),
          p = (0, a.K1)(c, ({ one: e }) => ({
            material: e(l, { fields: [c.materialId], references: [l.id] }),
          })),
          m = (0, n.cJ)("subjects", {
            id: (0, i.uR)("id").primaryKey().defaultRandom(),
            name: (0, s.Qq)("name").notNull(),
            userId: (0, s.Qq)("user_id")
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
          o = r(13590);
        !(function (e) {
          (e.create = async function (e, t, r) {
            let [a] = await s.db
              .insert(o.H)
              .values({ userId: e, title: t, materialId: r || null })
              .returning();
            return a;
          }),
            (e.getByUserId = async function (e) {
              return s.db
                .select()
                .from(o.H)
                .where((0, n.eq)(o.H.userId, e))
                .orderBy((0, i.i)(o.H.updatedAt));
            }),
            (e.getById = async function (e) {
              let [t] = await s.db
                .select()
                .from(o.H)
                .where((0, n.eq)(o.H.id, e));
              return t;
            }),
            (e.updateTitle = async function (e, t) {
              let [r] = await s.db
                .update(o.H)
                .set({ title: t, updatedAt: new Date() })
                .where((0, n.eq)(o.H.id, e))
                .returning();
              return r;
            }),
            (e.remove = async function (e) {
              await s.db.delete(o.H).where((0, n.eq)(o.H.id, e));
            });
          var t = e.Message || (e.Message = {});
          async function r(e) {
            return s.db
              .select()
              .from(o.i)
              .where((0, n.eq)(o.i.threadId, e))
              .orderBy(o.i.createdAt);
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
                await s.db.insert(o.i).values(t);
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
    a = t.X(0, [50, 151, 680, 843], () => r(33277));
  module.exports = a;
})();
