(() => {
  var e = {};
  (e.id = 302),
    (e.ids = [302]),
    (e.modules = {
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      4573: (e) => {
        "use strict";
        e.exports = require("node:buffer");
      },
      5991: (e, t, i) => {
        "use strict";
        i.d(t, { j: () => d });
        var a = i(78116),
          n = i(40856),
          o = i(42918),
          r = i(32385),
          s = i(69290);
        let d = (0, a.li)({
          database: (0, n.y)(r.db, { provider: "pg", schema: { ...s } }),
          secret: o.FW.BetterAuthSecret.value,
          emailAndPassword: { enabled: !1 },
          socialProviders: {
            github: {
              clientId: o.FW.GithubClientId.value,
              clientSecret: o.FW.GithubClientSecret.value,
            },
            google: {
              clientId: o.FW.GoogleClientId.value,
              clientSecret: o.FW.GoogleClientSecret.value,
            },
          },
        });
      },
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      13590: (e, t, i) => {
        "use strict";
        i.d(t, { H: () => d, i: () => l });
        var a = i(1081),
          n = i(17463),
          o = i(27819),
          r = i(11618),
          s = i(19330);
        let d = (0, a.cJ)("thread", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            title: (0, o.Qq)("title").notNull(),
            userId: (0, o.Qq)("user_id")
              .notNull()
              .references(() => s.kQ.id, { onDelete: "cascade" }),
            materialId: (0, o.Qq)("material_id"),
            createdAt: (0, r.vE)("created_at").defaultNow().notNull(),
            updatedAt: (0, r.vE)("updated_at").defaultNow().notNull(),
          }),
          l = (0, a.cJ)("message", {
            id: (0, n.uR)("id").defaultRandom().primaryKey(),
            content: (0, o.Qq)("content").notNull(),
            role: (0, o.Qq)("role").notNull(),
            threadId: (0, n.uR)("thread_id")
              .notNull()
              .references(() => d.id, { onDelete: "cascade" }),
            createdAt: (0, r.vE)("created_at").defaultNow().notNull(),
          });
      },
      19330: (e, t, i) => {
        "use strict";
        i.d(t, { Ot: () => u, ct: () => l, dZ: () => d, kQ: () => s });
        var a = i(1081),
          n = i(27819),
          o = i(82658),
          r = i(11618);
        let s = (0, a.cJ)("user", {
            id: (0, n.Qq)("id").primaryKey(),
            name: (0, n.Qq)("name").notNull(),
            email: (0, n.Qq)("email").notNull().unique(),
            emailVerified: (0, o.zM)("email_verified").notNull(),
            image: (0, n.Qq)("image"),
            createdAt: (0, r.vE)("created_at").notNull(),
            updatedAt: (0, r.vE)("updated_at").notNull(),
          }),
          d = (0, a.cJ)("session", {
            id: (0, n.Qq)("id").primaryKey(),
            expiresAt: (0, r.vE)("expires_at").notNull(),
            token: (0, n.Qq)("token").notNull().unique(),
            createdAt: (0, r.vE)("created_at").notNull(),
            updatedAt: (0, r.vE)("updated_at").notNull(),
            ipAddress: (0, n.Qq)("ip_address"),
            userAgent: (0, n.Qq)("user_agent"),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
          }),
          l = (0, a.cJ)("account", {
            id: (0, n.Qq)("id").primaryKey(),
            accountId: (0, n.Qq)("account_id").notNull(),
            providerId: (0, n.Qq)("provider_id").notNull(),
            userId: (0, n.Qq)("user_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            accessToken: (0, n.Qq)("access_token"),
            refreshToken: (0, n.Qq)("refresh_token"),
            idToken: (0, n.Qq)("id_token"),
            accessTokenExpiresAt: (0, r.vE)("access_token_expires_at"),
            refreshTokenExpiresAt: (0, r.vE)("refresh_token_expires_at"),
            scope: (0, n.Qq)("scope"),
            password: (0, n.Qq)("password"),
            createdAt: (0, r.vE)("created_at").notNull(),
            updatedAt: (0, r.vE)("updated_at").notNull(),
          }),
          u = (0, a.cJ)("verification", {
            id: (0, n.Qq)("id").primaryKey(),
            identifier: (0, n.Qq)("identifier").notNull(),
            value: (0, n.Qq)("value").notNull(),
            expiresAt: (0, r.vE)("expires_at").notNull(),
            createdAt: (0, r.vE)("created_at"),
            updatedAt: (0, r.vE)("updated_at"),
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
      32385: (e, t, i) => {
        "use strict";
        i.d(t, { db: () => r });
        var a = i(28341),
          n = i(69290),
          o = i(42918);
        let r = (0, a.fd)({
          connection: { connectionString: o.FW.DatabaseUrl.value },
          schema: n,
        });
      },
      32506: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            patchFetch: () => B,
            routeModule: () => M,
            serverHooks: () => j,
            workAsyncStorage: () => U,
            workUnitAsyncStorage: () => S,
          });
        var a = {};
        i.r(a), i.d(a, { GET: () => L, POST: () => x });
        var n = i(48106),
          o = i(48819),
          r = i(12050),
          s = i(5991);
        i(49442), i(51875), i(62055), i(61229), i(33746);
        var d = i(30060),
          l = i(3536);
        i(54036);
        var u = i(16151),
          c = i(7846),
          m = i(10257);
        let p = {
            proto:
              /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
            constructor:
              /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
            protoShort: /"__proto__"\s*:/,
            constructorShort: /"constructor"\s*:/,
          },
          g = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
          I = {
            true: !0,
            false: !1,
            null: null,
            undefined: void 0,
            nan: Number.NaN,
            infinity: Number.POSITIVE_INFINITY,
            "-infinity": Number.NEGATIVE_INFINITY,
          },
          O =
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
        function _(e) {
          return {
            newRole: (e) => {
              var t;
              return {
                authorize(e, i = "AND") {
                  let a = !1;
                  for (let [n, o] of Object.entries(e)) {
                    let e = t[n];
                    if (!e)
                      return {
                        success: !1,
                        error: `You are not allowed to access resource: ${n}`,
                      };
                    if (Array.isArray(o)) a = o.every((t) => e.includes(t));
                    else if ("object" == typeof o)
                      a =
                        "OR" === o.connector
                          ? o.actions.some((t) => e.includes(t))
                          : o.actions.every((t) => e.includes(t));
                    else throw new m.B("Invalid access control request");
                    if (a && "OR" === i) return { success: a };
                    if (!a && "AND" === i)
                      return {
                        success: !1,
                        error: `unauthorized to access resource "${n}"`,
                      };
                  }
                  return a
                    ? { success: a }
                    : { success: !1, error: "Not authorized" };
                },
                statements: (t = e),
              };
            },
            statements: e,
          };
        }
        i(37991), i(39773);
        let f = _({
            organization: ["update", "delete"],
            member: ["create", "update", "delete"],
            invitation: ["create", "cancel"],
            team: ["create", "update", "delete"],
          }),
          T = f.newRole({
            organization: ["update"],
            invitation: ["create", "cancel"],
            member: ["create", "update", "delete"],
            team: ["create", "update", "delete"],
          }),
          E = {
            admin: T,
            owner: f.newRole({
              organization: ["update", "delete"],
              member: ["create", "update", "delete"],
              invitation: ["create", "cancel"],
              team: ["create", "update", "delete"],
            }),
            member: f.newRole({
              organization: [],
              member: [],
              invitation: [],
              team: [],
            }),
          },
          w = (e) => {
            if (!e.permissions && !e.permission) return !1;
            let t = e.role.split(","),
              i = e.options.roles || E;
            for (let a of t) {
              let t = i[a],
                n = t?.authorize(e.permissions ?? e.permission);
              if (n?.success) return !0;
            }
            return !1;
          };
        var z = i(94349);
        i(12486), i(84941), i(30377);
        let N = (e, t) => {
            let i = e.adapter;
            return {
              findOrganizationBySlug: async (e) =>
                await i.findOne({
                  model: "organization",
                  where: [{ field: "slug", value: e }],
                }),
              createOrganization: async (e) => {
                let t = await i.create({
                  model: "organization",
                  data: {
                    ...e.organization,
                    metadata: e.organization.metadata
                      ? JSON.stringify(e.organization.metadata)
                      : void 0,
                  },
                });
                return {
                  ...t,
                  metadata: t.metadata ? JSON.parse(t.metadata) : void 0,
                };
              },
              findMemberByEmail: async (e) => {
                let t = await i.findOne({
                  model: "user",
                  where: [{ field: "email", value: e.email }],
                });
                if (!t) return null;
                let a = await i.findOne({
                  model: "member",
                  where: [
                    { field: "organizationId", value: e.organizationId },
                    { field: "userId", value: t.id },
                  ],
                });
                return a
                  ? {
                      ...a,
                      user: {
                        id: t.id,
                        name: t.name,
                        email: t.email,
                        image: t.image,
                      },
                    }
                  : null;
              },
              listMembers: async (e) =>
                await i.findMany({
                  model: "member",
                  where: [{ field: "organizationId", value: e.organizationId }],
                  limit: t?.membershipLimit || 100,
                }),
              findMemberByOrgId: async (e) => {
                let [t, a] = await Promise.all([
                  await i.findOne({
                    model: "member",
                    where: [
                      { field: "userId", value: e.userId },
                      { field: "organizationId", value: e.organizationId },
                    ],
                  }),
                  await i.findOne({
                    model: "user",
                    where: [{ field: "id", value: e.userId }],
                  }),
                ]);
                return a && t
                  ? {
                      ...t,
                      user: {
                        id: a.id,
                        name: a.name,
                        email: a.email,
                        image: a.image,
                      },
                    }
                  : null;
              },
              findMemberById: async (e) => {
                let t = await i.findOne({
                  model: "member",
                  where: [{ field: "id", value: e }],
                });
                if (!t) return null;
                let a = await i.findOne({
                  model: "user",
                  where: [{ field: "id", value: t.userId }],
                });
                return a
                  ? {
                      ...t,
                      user: {
                        id: a.id,
                        name: a.name,
                        email: a.email,
                        image: a.image,
                      },
                    }
                  : null;
              },
              createMember: async (e) =>
                await i.create({
                  model: "member",
                  data: { ...e, createdAt: new Date() },
                }),
              updateMember: async (e, t) =>
                await i.update({
                  model: "member",
                  where: [{ field: "id", value: e }],
                  update: { role: t },
                }),
              deleteMember: async (e) =>
                await i.delete({
                  model: "member",
                  where: [{ field: "id", value: e }],
                }),
              updateOrganization: async (e, t) => {
                let a = await i.update({
                  model: "organization",
                  where: [{ field: "id", value: e }],
                  update: {
                    ...t,
                    metadata:
                      "object" == typeof t.metadata
                        ? JSON.stringify(t.metadata)
                        : t.metadata,
                  },
                });
                return a
                  ? {
                      ...a,
                      metadata: a.metadata
                        ? (function (e, t = { strict: !0 }) {
                            return (function (e, t = {}) {
                              let {
                                strict: i = !1,
                                warnings: a = !1,
                                reviver: n,
                                parseDates: o = !0,
                              } = t;
                              if ("string" != typeof e) return e;
                              let r = e.trim();
                              if (
                                '"' === r[0] &&
                                r.endsWith('"') &&
                                !r.slice(1, -1).includes('"')
                              )
                                return r.slice(1, -1);
                              let s = r.toLowerCase();
                              if (s.length <= 9 && s in I) return I[s];
                              if (!g.test(r)) {
                                if (i)
                                  throw SyntaxError(
                                    "[better-json] Invalid JSON"
                                  );
                                return e;
                              }
                              if (
                                Object.entries(p).some(([e, t]) => {
                                  let i = t.test(r);
                                  return (
                                    i &&
                                      a &&
                                      console.warn(
                                        `[better-json] Detected potential prototype pollution attempt using ${e} pattern`
                                      ),
                                    i
                                  );
                                }) &&
                                i
                              )
                                throw Error(
                                  "[better-json] Potential prototype pollution attempt detected"
                                );
                              try {
                                return JSON.parse(r, (e, t) => {
                                  if (
                                    "__proto__" === e ||
                                    ("constructor" === e &&
                                      t &&
                                      "object" == typeof t &&
                                      "prototype" in t)
                                  ) {
                                    a &&
                                      console.warn(
                                        `[better-json] Dropping "${e}" key to prevent prototype pollution`
                                      );
                                    return;
                                  }
                                  if (o && "string" == typeof t) {
                                    let e = (function (e) {
                                      let t = O.exec(e);
                                      if (!t) return null;
                                      let [, i, a, n, o, r, s, d, l, u, c] = t,
                                        m = new Date(
                                          Date.UTC(
                                            parseInt(i, 10),
                                            parseInt(a, 10) - 1,
                                            parseInt(n, 10),
                                            parseInt(o, 10),
                                            parseInt(r, 10),
                                            parseInt(s, 10),
                                            d
                                              ? parseInt(d.padEnd(3, "0"), 10)
                                              : 0
                                          )
                                        );
                                      if (l) {
                                        let e =
                                          (60 * parseInt(u, 10) +
                                            parseInt(c, 10)) *
                                          ("+" === l ? -1 : 1);
                                        m.setUTCMinutes(m.getUTCMinutes() + e);
                                      }
                                      return m instanceof Date &&
                                        !isNaN(m.getTime())
                                        ? m
                                        : null;
                                    })(t);
                                    if (e) return e;
                                  }
                                  return n ? n(e, t) : t;
                                });
                              } catch (t) {
                                if (i) throw t;
                                return e;
                              }
                            })(e, t);
                          })(a.metadata)
                        : void 0,
                    }
                  : null;
              },
              deleteOrganization: async (e) => (
                await i.delete({
                  model: "member",
                  where: [{ field: "organizationId", value: e }],
                }),
                await i.delete({
                  model: "invitation",
                  where: [{ field: "organizationId", value: e }],
                }),
                await i.delete({
                  model: "organization",
                  where: [{ field: "id", value: e }],
                }),
                e
              ),
              setActiveOrganization: async (t, i) =>
                await e.internalAdapter.updateSession(t, {
                  activeOrganizationId: i,
                }),
              findOrganizationById: async (e) =>
                await i.findOne({
                  model: "organization",
                  where: [{ field: "id", value: e }],
                }),
              findFullOrganization: async ({
                organizationId: e,
                isSlug: a,
                includeTeams: n,
              }) => {
                let o = await i.findOne({
                  model: "organization",
                  where: [{ field: a ? "slug" : "id", value: e }],
                });
                if (!o) return null;
                let [r, s, d] = await Promise.all([
                  i.findMany({
                    model: "invitation",
                    where: [{ field: "organizationId", value: o.id }],
                  }),
                  i.findMany({
                    model: "member",
                    where: [{ field: "organizationId", value: o.id }],
                    limit: t?.membershipLimit || 100,
                  }),
                  n
                    ? i.findMany({
                        model: "team",
                        where: [{ field: "organizationId", value: o.id }],
                      })
                    : null,
                ]);
                if (!o) return null;
                let l = s.map((e) => e.userId),
                  u = new Map(
                    (l.length > 0
                      ? await i.findMany({
                          model: "user",
                          where: [{ field: "id", value: l, operator: "in" }],
                          limit: t?.membershipLimit || 100,
                        })
                      : []
                    ).map((e) => [e.id, e])
                  ),
                  c = s.map((e) => {
                    let t = u.get(e.userId);
                    if (!t)
                      throw new m.B(
                        "Unexpected error: User not found for member"
                      );
                    return {
                      ...e,
                      user: {
                        id: t.id,
                        name: t.name,
                        email: t.email,
                        image: t.image,
                      },
                    };
                  });
                return { ...o, invitations: r, members: c, teams: d };
              },
              listOrganizations: async (e) => {
                let t = await i.findMany({
                  model: "member",
                  where: [{ field: "userId", value: e }],
                });
                if (!t || 0 === t.length) return [];
                let a = t.map((e) => e.organizationId);
                return await i.findMany({
                  model: "organization",
                  where: [{ field: "id", value: a, operator: "in" }],
                });
              },
              createTeam: async (e) =>
                await i.create({ model: "team", data: e }),
              findTeamById: async ({
                teamId: e,
                organizationId: a,
                includeTeamMembers: n,
              }) => {
                let o = await i.findOne({
                  model: "team",
                  where: [
                    { field: "id", value: e },
                    ...(a ? [{ field: "organizationId", value: a }] : []),
                  ],
                });
                if (!o) return null;
                let r = [];
                return n
                  ? ((r = await i.findMany({
                      model: "member",
                      where: [{ field: "teamId", value: e }],
                      limit: t?.membershipLimit || 100,
                    })),
                    { ...o, members: r })
                  : o;
              },
              updateTeam: async (e, t) =>
                await i.update({
                  model: "team",
                  where: [{ field: "id", value: e }],
                  update: { ...t },
                }),
              deleteTeam: async (e) =>
                await i.delete({
                  model: "team",
                  where: [{ field: "id", value: e }],
                }),
              listTeams: async (e) =>
                await i.findMany({
                  model: "team",
                  where: [{ field: "organizationId", value: e }],
                }),
              createTeamInvitation: async ({
                email: e,
                role: t,
                teamId: a,
                organizationId: n,
                inviterId: o,
                expiresIn: r = 1728e5,
              }) => {
                let s = (0, c.g)(r);
                return await i.create({
                  model: "invitation",
                  data: {
                    email: e,
                    role: t,
                    organizationId: n,
                    teamId: a,
                    inviterId: o,
                    status: "pending",
                    expiresAt: s,
                  },
                });
              },
              findInvitationsByTeamId: async (e) =>
                await i.findMany({
                  model: "invitation",
                  where: [{ field: "teamId", value: e }],
                }),
              createInvitation: async ({ invitation: e, user: a }) => {
                let n = (0, c.g)(t?.invitationExpiresIn || 172800, "sec");
                return await i.create({
                  model: "invitation",
                  data: {
                    status: "pending",
                    expiresAt: n,
                    inviterId: a.id,
                    ...e,
                  },
                });
              },
              findInvitationById: async (e) =>
                await i.findOne({
                  model: "invitation",
                  where: [{ field: "id", value: e }],
                }),
              findPendingInvitation: async (e) =>
                (
                  await i.findMany({
                    model: "invitation",
                    where: [
                      { field: "email", value: e.email },
                      { field: "organizationId", value: e.organizationId },
                      { field: "status", value: "pending" },
                    ],
                  })
                ).filter((e) => new Date(e.expiresAt) > new Date()),
              findPendingInvitations: async (e) =>
                (
                  await i.findMany({
                    model: "invitation",
                    where: [
                      { field: "organizationId", value: e.organizationId },
                      { field: "status", value: "pending" },
                    ],
                  })
                ).filter((e) => new Date(e.expiresAt) > new Date()),
              listInvitations: async (e) =>
                await i.findMany({
                  model: "invitation",
                  where: [{ field: "organizationId", value: e.organizationId }],
                }),
              updateInvitation: async (e) =>
                await i.update({
                  model: "invitation",
                  where: [{ field: "id", value: e.invitationId }],
                  update: { status: e.status },
                }),
            };
          },
          y = (0, l.c)(async (e) => ({})),
          A = (0, l.c)({ use: [l.s] }, async (e) => ({
            session: e.context.session,
          })),
          h = {
            YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
              "You are not allowed to create a new organization",
            YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
              "You have reached the maximum number of organizations",
            ORGANIZATION_ALREADY_EXISTS: "Organization already exists",
            ORGANIZATION_NOT_FOUND: "Organization not found",
            USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
              "User is not a member of the organization",
            YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
              "You are not allowed to update this organization",
            YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
              "You are not allowed to delete this organization",
            NO_ACTIVE_ORGANIZATION: "No active organization",
            MEMBER_NOT_FOUND: "Member not found",
            TEAM_NOT_FOUND: "Team not found",
            YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
              "You cannot leave the organization as the only owner",
            YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
              "You are not allowed to delete this member",
            INVITATION_NOT_FOUND: "Invitation not found",
            YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
              "You are not the recipient of the invitation",
            YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
              "You are not allowed to cancel this invitation",
            INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
              "Inviter is no longer a member of the organization",
            FAILED_TO_RETRIEVE_INVITATION: "Failed to retrieve invitation",
            UNABLE_TO_REMOVE_LAST_TEAM: "Unable to remove last team",
            ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
              "Organization membership limit reached",
            YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
              "You are not allowed to delete teams in this organization",
            YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
              "You are not allowed to update this team",
            YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
              "You are not allowed to delete this team",
            TEAM_MEMBER_LIMIT_REACHED: "Team member limit reached",
          };
        (0, l.a)(
          "/organization/accept-invitation",
          {
            method: "POST",
            body: u.z.object({
              invitationId: u.z.string({
                description: "The ID of the invitation to accept",
              }),
            }),
            use: [y, A],
            metadata: {
              openapi: {
                description: "Accept an invitation to an organization",
                responses: {
                  200: {
                    description: "Success",
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            invitation: { type: "object" },
                            member: { type: "object" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          async (e) => {
            let t = e.context.session,
              i = N(e.context, e.context.orgOptions),
              a = await i.findInvitationById(e.body.invitationId);
            if (!a || a.expiresAt < new Date() || "pending" !== a.status)
              throw new d.LG("BAD_REQUEST", {
                message: h.INVITATION_NOT_FOUND,
              });
            if (a.email.toLowerCase() !== t.user.email.toLowerCase())
              throw new d.LG("FORBIDDEN", {
                message: h.YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION,
              });
            let n = e.context.orgOptions?.membershipLimit || 100;
            if (
              (await i.listMembers({ organizationId: a.organizationId }))
                .length >= n
            )
              throw new d.LG("FORBIDDEN", {
                message: h.ORGANIZATION_MEMBERSHIP_LIMIT_REACHED,
              });
            let o = await i.updateInvitation({
              invitationId: e.body.invitationId,
              status: "accepted",
            });
            if (!o)
              throw new d.LG("BAD_REQUEST", {
                message: h.FAILED_TO_RETRIEVE_INVITATION,
              });
            if (
              e.context.orgOptions.teams &&
              e.context.orgOptions.teams.enabled &&
              void 0 !== e.context.orgOptions.teams.maximumMembersPerTeam &&
              "teamId" in o &&
              o.teamId
            ) {
              let n = await i.findTeamById({
                teamId: o.teamId,
                organizationId: a.organizationId,
                includeTeamMembers: !0,
              });
              if (!n)
                throw new d.LG("BAD_REQUEST", { message: h.TEAM_NOT_FOUND });
              let r =
                "function" ==
                typeof e.context.orgOptions.teams.maximumMembersPerTeam
                  ? await e.context.orgOptions.teams.maximumMembersPerTeam({
                      teamId: o.teamId,
                      session: t,
                      organizationId: a.organizationId,
                    })
                  : e.context.orgOptions.teams.maximumMembersPerTeam;
              if (n.members.length >= r)
                throw new d.LG("FORBIDDEN", {
                  message: h.TEAM_MEMBER_LIMIT_REACHED,
                });
            }
            let r = await i.createMember({
              organizationId: a.organizationId,
              userId: t.user.id,
              role: a.role,
              createdAt: new Date(),
              ...("teamId" in o ? { teamId: o.teamId } : {}),
            });
            return (await i.setActiveOrganization(
              t.session.token,
              a.organizationId
            ),
            o)
              ? e.json({ invitation: o, member: r })
              : e.json(null, {
                  status: 400,
                  body: { message: h.INVITATION_NOT_FOUND },
                });
          }
        ),
          (0, l.a)(
            "/organization/reject-invitation",
            {
              method: "POST",
              body: u.z.object({
                invitationId: u.z.string({
                  description: "The ID of the invitation to reject",
                }),
              }),
              use: [y, A],
              metadata: {
                openapi: {
                  description: "Reject an invitation to an organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              invitation: { type: "object" },
                              member: { type: "null" },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = e.context.session,
                i = N(e.context, e.context.orgOptions),
                a = await i.findInvitationById(e.body.invitationId);
              if (!a || a.expiresAt < new Date() || "pending" !== a.status)
                throw new d.LG("BAD_REQUEST", {
                  message: "Invitation not found!",
                });
              if (a.email.toLowerCase() !== t.user.email.toLowerCase())
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION,
                });
              let n = await i.updateInvitation({
                invitationId: e.body.invitationId,
                status: "rejected",
              });
              return e.json({ invitation: n, member: null });
            }
          ),
          (0, l.a)(
            "/organization/cancel-invitation",
            {
              method: "POST",
              body: u.z.object({
                invitationId: u.z.string({
                  description: "The ID of the invitation to cancel",
                }),
              }),
              use: [y, A],
              openapi: {
                description: "Cancel an invitation to an organization",
                responses: {
                  200: {
                    description: "Success",
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: { invitation: { type: "object" } },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = e.context.session,
                i = N(e.context, e.context.orgOptions),
                a = await i.findInvitationById(e.body.invitationId);
              if (!a)
                throw new d.LG("BAD_REQUEST", {
                  message: h.INVITATION_NOT_FOUND,
                });
              let n = await i.findMemberByOrgId({
                userId: t.user.id,
                organizationId: a.organizationId,
              });
              if (!n)
                throw new d.LG("BAD_REQUEST", { message: h.MEMBER_NOT_FOUND });
              if (
                !w({
                  role: n.role,
                  options: e.context.orgOptions,
                  permissions: { invitation: ["cancel"] },
                })
              )
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION,
                });
              let o = await i.updateInvitation({
                invitationId: e.body.invitationId,
                status: "canceled",
              });
              return e.json(o);
            }
          ),
          (0, l.a)(
            "/organization/get-invitation",
            {
              method: "GET",
              use: [y],
              requireHeaders: !0,
              query: u.z.object({
                id: u.z.string({
                  description: "The ID of the invitation to get",
                }),
              }),
              metadata: {
                openapi: {
                  description: "Get an invitation by ID",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              id: { type: "string" },
                              email: { type: "string" },
                              role: { type: "string" },
                              organizationId: { type: "string" },
                              inviterId: { type: "string" },
                              status: { type: "string" },
                              expiresAt: { type: "string" },
                              organizationName: { type: "string" },
                              organizationSlug: { type: "string" },
                              inviterEmail: { type: "string" },
                            },
                            required: [
                              "id",
                              "email",
                              "role",
                              "organizationId",
                              "inviterId",
                              "status",
                              "expiresAt",
                              "organizationName",
                              "organizationSlug",
                              "inviterEmail",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = await (0, l.g)(e);
              if (!t)
                throw new d.LG("UNAUTHORIZED", {
                  message: "Not authenticated",
                });
              let i = N(e.context, e.context.orgOptions),
                a = await i.findInvitationById(e.query.id);
              if (!a || "pending" !== a.status || a.expiresAt < new Date())
                throw new d.LG("BAD_REQUEST", {
                  message: "Invitation not found!",
                });
              if (a.email.toLowerCase() !== t.user.email.toLowerCase())
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION,
                });
              let n = await i.findOrganizationById(a.organizationId);
              if (!n)
                throw new d.LG("BAD_REQUEST", {
                  message: h.ORGANIZATION_NOT_FOUND,
                });
              let o = await i.findMemberByOrgId({
                userId: a.inviterId,
                organizationId: a.organizationId,
              });
              if (!o)
                throw new d.LG("BAD_REQUEST", {
                  message: h.INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION,
                });
              return e.json({
                ...a,
                organizationName: n.name,
                organizationSlug: n.slug,
                inviterEmail: o.user.email,
              });
            }
          ),
          (0, l.a)(
            "/organization/list-invitations",
            {
              method: "GET",
              use: [y, A],
              query: u.z
                .object({
                  organizationId: u.z
                    .string({
                      description:
                        "The ID of the organization to list invitations for",
                    })
                    .optional(),
                })
                .optional(),
            },
            async (e) => {
              let t = await (0, l.g)(e);
              if (!t)
                throw new d.LG("UNAUTHORIZED", {
                  message: "Not authenticated",
                });
              let i = e.query?.organizationId || t.session.activeOrganizationId;
              if (!i)
                throw new d.LG("BAD_REQUEST", {
                  message: "Organization ID is required",
                });
              let a = N(e.context, e.context.orgOptions);
              if (
                !(await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                }))
              )
                throw new d.LG("FORBIDDEN", {
                  message: "You are not a member of this organization",
                });
              let n = await a.listInvitations({ organizationId: i });
              return e.json(n);
            }
          ),
          (0, l.a)(
            "/organization/remove-member",
            {
              method: "POST",
              body: u.z.object({
                memberIdOrEmail: u.z.string({
                  description: "The ID or email of the member to remove",
                }),
                organizationId: u.z
                  .string({
                    description:
                      "The ID of the organization to remove the member from. If not provided, the active organization will be used",
                  })
                  .optional(),
              }),
              use: [y, A],
              metadata: {
                openapi: {
                  description: "Remove a member from an organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              member: {
                                type: "object",
                                properties: {
                                  id: { type: "string" },
                                  userId: { type: "string" },
                                  organizationId: { type: "string" },
                                  role: { type: "string" },
                                },
                                required: [
                                  "id",
                                  "userId",
                                  "organizationId",
                                  "role",
                                ],
                              },
                            },
                            required: ["member"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = e.context.session,
                i = e.body.organizationId || t.session.activeOrganizationId;
              if (!i)
                return e.json(null, {
                  status: 400,
                  body: { message: h.NO_ACTIVE_ORGANIZATION },
                });
              let a = N(e.context, e.context.orgOptions),
                n = await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                });
              if (!n)
                throw new d.LG("BAD_REQUEST", { message: h.MEMBER_NOT_FOUND });
              let o = null;
              if (
                !(o = e.body.memberIdOrEmail.includes("@")
                  ? await a.findMemberByEmail({
                      email: e.body.memberIdOrEmail,
                      organizationId: i,
                    })
                  : await a.findMemberById(e.body.memberIdOrEmail))
              )
                throw new d.LG("BAD_REQUEST", { message: h.MEMBER_NOT_FOUND });
              let r = o.role.split(","),
                s = e.context.orgOptions?.creatorRole || "owner";
              if (
                r.includes(s) &&
                (n.role !== s ||
                  (await a.listMembers({ organizationId: i })).filter((e) =>
                    e.role.split(",").includes(s)
                  ).length <= 1)
              )
                throw new d.LG("BAD_REQUEST", {
                  message:
                    h.YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER,
                });
              if (
                !w({
                  role: n.role,
                  options: e.context.orgOptions,
                  permissions: { member: ["delete"] },
                })
              )
                throw new d.LG("UNAUTHORIZED", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER,
                });
              if (o?.organizationId !== i)
                throw new d.LG("BAD_REQUEST", { message: h.MEMBER_NOT_FOUND });
              return (
                await a.deleteMember(o.id),
                t.user.id === o.userId &&
                  t.session.activeOrganizationId === o.organizationId &&
                  (await a.setActiveOrganization(t.session.token, null)),
                e.json({ member: o })
              );
            }
          ),
          (0, l.a)(
            "/organization/get-active-member",
            {
              method: "GET",
              use: [y, A],
              metadata: {
                openapi: {
                  description: "Get the active member in the organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              id: { type: "string" },
                              userId: { type: "string" },
                              organizationId: { type: "string" },
                              role: { type: "string" },
                            },
                            required: [
                              "id",
                              "userId",
                              "organizationId",
                              "role",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = e.context.session,
                i = t.session.activeOrganizationId;
              if (!i)
                return e.json(null, {
                  status: 400,
                  body: { message: h.NO_ACTIVE_ORGANIZATION },
                });
              let a = N(e.context, e.context.orgOptions),
                n = await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                });
              return n
                ? e.json(n)
                : e.json(null, {
                    status: 400,
                    body: { message: h.MEMBER_NOT_FOUND },
                  });
            }
          ),
          (0, l.a)(
            "/organization/leave",
            {
              method: "POST",
              body: u.z.object({ organizationId: u.z.string() }),
              use: [l.s, y],
            },
            async (e) => {
              let t = e.context.session,
                i = N(e.context),
                a = await i.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: e.body.organizationId,
                });
              if (!a)
                throw new d.LG("BAD_REQUEST", { message: h.MEMBER_NOT_FOUND });
              if (
                a.role === (e.context.orgOptions?.creatorRole || "owner") &&
                (
                  await e.context.adapter.findMany({
                    model: "member",
                    where: [
                      { field: "organizationId", value: e.body.organizationId },
                    ],
                  })
                ).filter(
                  (t) =>
                    t.role === (e.context.orgOptions?.creatorRole || "owner")
                ).length <= 1
              )
                throw new d.LG("BAD_REQUEST", {
                  message:
                    h.YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER,
                });
              return (
                await i.deleteMember(a.id),
                t.session.activeOrganizationId === e.body.organizationId &&
                  (await i.setActiveOrganization(t.session.token, null)),
                e.json(a)
              );
            }
          ),
          (0, l.a)(
            "/organization/create",
            {
              method: "POST",
              body: u.z.object({
                name: u.z.string({
                  description: "The name of the organization",
                }),
                slug: u.z.string({
                  description: "The slug of the organization",
                }),
                userId: u.z.coerce
                  .string({
                    description:
                      "The user id of the organization creator. If not provided, the current user will be used. Should only be used by admins or when called by the server.",
                  })
                  .optional(),
                logo: u.z
                  .string({ description: "The logo of the organization" })
                  .optional(),
                metadata: u.z
                  .record(u.z.string(), u.z.any(), {
                    description: "The metadata of the organization",
                  })
                  .optional(),
                keepCurrentActiveOrganization: u.z
                  .boolean({
                    description:
                      "Whether to keep the current active organization active after creating a new one",
                  })
                  .optional(),
              }),
              use: [y],
              metadata: {
                openapi: {
                  description: "Create an organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            description: "The organization that was created",
                            $ref: "#/components/schemas/Organization",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t,
                i,
                a = await (0, l.g)(e);
              if (!a && (e.request || e.headers))
                throw new d.LG("UNAUTHORIZED");
              let n = a?.user || null;
              if (!n) {
                if (!e.body.userId) throw new d.LG("UNAUTHORIZED");
                n = await e.context.internalAdapter.findUserById(e.body.userId);
              }
              if (!n) return e.json(null, { status: 401 });
              let o = e.context.orgOptions;
              if (
                !("function" == typeof o?.allowUserToCreateOrganization
                  ? await o.allowUserToCreateOrganization(n)
                  : o?.allowUserToCreateOrganization === void 0 ||
                    o.allowUserToCreateOrganization)
              )
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION,
                });
              let r = N(e.context, o),
                s = await r.listOrganizations(n.id);
              if (
                "number" == typeof o.organizationLimit
                  ? s.length >= o.organizationLimit
                  : "function" == typeof o.organizationLimit &&
                    (await o.organizationLimit(n))
              )
                throw new d.LG("FORBIDDEN", {
                  message:
                    h.YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS,
                });
              if (await r.findOrganizationBySlug(e.body.slug))
                throw new d.LG("BAD_REQUEST", {
                  message: h.ORGANIZATION_ALREADY_EXISTS,
                });
              if (o.organizationCreation?.beforeCreate) {
                let t = await o.organizationCreation.beforeCreate(
                  {
                    organization: {
                      slug: e.body.slug,
                      name: e.body.name,
                      logo: e.body.logo,
                      createdAt: new Date(),
                      metadata: e.body.metadata,
                    },
                    user: n,
                  },
                  e.request
                );
                t && "object" == typeof t && "data" in t && (i = t);
              }
              let u = await r.createOrganization({
                organization: {
                  slug: e.body.slug,
                  name: e.body.name,
                  logo: e.body.logo,
                  createdAt: new Date(),
                  metadata: e.body.metadata,
                  ...(i?.data || {}),
                },
              });
              if (o?.teams?.enabled && o.teams.defaultTeam?.enabled !== !1) {
                let i =
                  (await o.teams.defaultTeam?.customCreateDefaultTeam?.(
                    u,
                    e.request
                  )) ||
                  (await r.createTeam({
                    organizationId: u.id,
                    name: `${u.name}`,
                    createdAt: new Date(),
                  }));
                t = await r.createMember({
                  teamId: i.id,
                  userId: n.id,
                  organizationId: u.id,
                  role: e.context.orgOptions.creatorRole || "owner",
                });
              } else
                t = await r.createMember({
                  userId: n.id,
                  organizationId: u.id,
                  role: e.context.orgOptions.creatorRole || "owner",
                });
              return (
                o.organizationCreation?.afterCreate &&
                  (await o.organizationCreation.afterCreate(
                    { organization: u, user: n, member: t },
                    e.request
                  )),
                e.context.session &&
                  !e.body.keepCurrentActiveOrganization &&
                  (await r.setActiveOrganization(
                    e.context.session.session.token,
                    u.id
                  )),
                e.json({ ...u, metadata: e.body.metadata, members: [t] })
              );
            }
          ),
          (0, l.a)(
            "/organization/check-slug",
            {
              method: "POST",
              body: u.z.object({ slug: u.z.string() }),
              use: [l.R, y],
            },
            async (e) => {
              let t = N(e.context);
              if (!(await t.findOrganizationBySlug(e.body.slug)))
                return e.json({ status: !0 });
              throw new d.LG("BAD_REQUEST", { message: "slug is taken" });
            }
          ),
          (0, l.a)(
            "/organization/update",
            {
              method: "POST",
              body: u.z.object({
                data: u.z
                  .object({
                    name: u.z
                      .string({ description: "The name of the organization" })
                      .optional(),
                    slug: u.z
                      .string({ description: "The slug of the organization" })
                      .optional(),
                    logo: u.z
                      .string({ description: "The logo of the organization" })
                      .optional(),
                    metadata: u.z
                      .record(u.z.string(), u.z.any(), {
                        description: "The metadata of the organization",
                      })
                      .optional(),
                  })
                  .partial(),
                organizationId: u.z.string().optional(),
              }),
              requireHeaders: !0,
              use: [y],
              metadata: {
                openapi: {
                  description: "Update an organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            description: "The updated organization",
                            $ref: "#/components/schemas/Organization",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = await e.context.getSession(e);
              if (!t)
                throw new d.LG("UNAUTHORIZED", { message: "User not found" });
              let i = e.body.organizationId || t.session.activeOrganizationId;
              if (!i)
                throw new d.LG("BAD_REQUEST", {
                  message: h.ORGANIZATION_NOT_FOUND,
                });
              let a = N(e.context, e.context.orgOptions),
                n = await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                });
              if (!n)
                throw new d.LG("BAD_REQUEST", {
                  message: h.USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION,
                });
              if (
                !w({
                  permissions: { organization: ["update"] },
                  role: n.role,
                  options: e.context.orgOptions,
                })
              )
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION,
                });
              let o = await a.updateOrganization(i, e.body.data);
              return e.json(o);
            }
          ),
          (0, l.a)(
            "/organization/delete",
            {
              method: "POST",
              body: u.z.object({
                organizationId: u.z.string({
                  description: "The organization id to delete",
                }),
              }),
              requireHeaders: !0,
              use: [y],
              metadata: {
                openapi: {
                  description: "Delete an organization",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "string",
                            description: "The organization id that was deleted",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = await e.context.getSession(e);
              if (!t) return e.json(null, { status: 401 });
              let i = e.body.organizationId;
              if (!i)
                return e.json(null, {
                  status: 400,
                  body: { message: h.ORGANIZATION_NOT_FOUND },
                });
              let a = N(e.context, e.context.orgOptions),
                n = await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                });
              if (!n)
                return e.json(null, {
                  status: 400,
                  body: { message: h.USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION },
                });
              if (
                !w({
                  role: n.role,
                  permissions: { organization: ["delete"] },
                  options: e.context.orgOptions,
                })
              )
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION,
                });
              i === t.session.activeOrganizationId &&
                (await a.setActiveOrganization(t.session.token, null));
              let o = e.context.orgOptions.organizationDeletion;
              if (o?.disabled) throw new d.LG("FORBIDDEN");
              let r = await a.findOrganizationById(i);
              if (!r) throw new d.LG("BAD_REQUEST");
              return (
                o?.beforeDelete &&
                  (await o.beforeDelete({ organization: r, user: t.user })),
                await a.deleteOrganization(i),
                o?.afterDelete &&
                  (await o.afterDelete({ organization: r, user: t.user })),
                e.json(r)
              );
            }
          ),
          (0, l.a)(
            "/organization/list",
            {
              method: "GET",
              use: [y, A],
              metadata: {
                openapi: {
                  description: "List all organizations",
                  responses: {
                    200: {
                      description: "Success",
                      content: {
                        "application/json": {
                          schema: {
                            type: "array",
                            items: {
                              $ref: "#/components/schemas/Organization",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = N(e.context, e.context.orgOptions),
                i = await t.listOrganizations(e.context.session.user.id);
              return e.json(i);
            }
          );
        let v = u.z.string(),
          b = u.z
            .enum(["pending", "accepted", "rejected", "canceled"])
            .default("pending");
        u.z.object({
          id: u.z.string().default(z.g),
          name: u.z.string(),
          slug: u.z.string(),
          logo: u.z.string().nullish().optional(),
          metadata: u.z
            .record(u.z.string())
            .or(u.z.string().transform((e) => JSON.parse(e)))
            .optional(),
          createdAt: u.z.date(),
        }),
          u.z.object({
            id: u.z.string().default(z.g),
            organizationId: u.z.string(),
            userId: u.z.coerce.string(),
            role: v,
            createdAt: u.z.date().default(() => new Date()),
            teamId: u.z.string().optional(),
          }),
          u.z.object({
            id: u.z.string().default(z.g),
            organizationId: u.z.string(),
            email: u.z.string(),
            role: v,
            status: b,
            teamId: u.z.string().optional(),
            inviterId: u.z.string(),
            expiresAt: u.z.date(),
          });
        let R = u.z.object({
          id: u.z.string().default(z.g),
          name: u.z.string().min(1),
          organizationId: u.z.string(),
          createdAt: u.z.date(),
          updatedAt: u.z.date().optional(),
        });
        (0, l.a)(
          "/organization/remove-team",
          {
            method: "POST",
            body: u.z.object({
              teamId: u.z.string(),
              organizationId: u.z.string().optional(),
            }),
            use: [y],
            metadata: {
              openapi: {
                description: "Remove a team from an organization",
                responses: {
                  200: {
                    description: "Team removed successfully",
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            message: {
                              type: "string",
                              description:
                                "Confirmation message indicating successful removal",
                              enum: ["Team removed successfully."],
                            },
                          },
                          required: ["message"],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          async (e) => {
            let t = await (0, l.g)(e),
              i = e.body.organizationId || t?.session.activeOrganizationId;
            if (!i)
              return e.json(null, {
                status: 400,
                body: { message: h.NO_ACTIVE_ORGANIZATION },
              });
            if (!t && (e.request || e.headers)) throw new d.LG("UNAUTHORIZED");
            let a = N(e.context, e.context.orgOptions);
            if (t) {
              let n = await a.findMemberByOrgId({
                userId: t.user.id,
                organizationId: i,
              });
              if (!n || n.teamId === e.body.teamId)
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM,
                });
              if (
                !w({
                  role: n.role,
                  options: e.context.orgOptions,
                  permissions: { team: ["delete"] },
                })
              )
                throw new d.LG("FORBIDDEN", {
                  message:
                    h.YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION,
                });
            }
            let n = await a.findTeamById({
              teamId: e.body.teamId,
              organizationId: i,
            });
            if (!n || n.organizationId !== i)
              throw new d.LG("BAD_REQUEST", { message: h.TEAM_NOT_FOUND });
            if (
              !e.context.orgOptions.teams?.allowRemovingAllTeams &&
              (await a.listTeams(i)).length <= 1
            )
              throw new d.LG("BAD_REQUEST", {
                message: h.UNABLE_TO_REMOVE_LAST_TEAM,
              });
            return (
              await a.deleteTeam(n.id),
              e.json({ message: "Team removed successfully." })
            );
          }
        ),
          (0, l.a)(
            "/organization/update-team",
            {
              method: "POST",
              body: u.z.object({ teamId: u.z.string(), data: R.partial() }),
              use: [y, A],
              metadata: {
                openapi: {
                  description: "Update an existing team in an organization",
                  responses: {
                    200: {
                      description: "Team updated successfully",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              id: {
                                type: "string",
                                description:
                                  "Unique identifier of the updated team",
                              },
                              name: {
                                type: "string",
                                description: "Updated name of the team",
                              },
                              organizationId: {
                                type: "string",
                                description:
                                  "ID of the organization the team belongs to",
                              },
                              createdAt: {
                                type: "string",
                                format: "date-time",
                                description:
                                  "Timestamp when the team was created",
                              },
                              updatedAt: {
                                type: "string",
                                format: "date-time",
                                description:
                                  "Timestamp when the team was last updated",
                              },
                            },
                            required: [
                              "id",
                              "name",
                              "organizationId",
                              "createdAt",
                              "updatedAt",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            async (e) => {
              let t = e.context.session,
                i =
                  e.body.data.organizationId || t.session.activeOrganizationId;
              if (!i)
                return e.json(null, {
                  status: 400,
                  body: { message: h.NO_ACTIVE_ORGANIZATION },
                });
              let a = N(e.context, e.context.orgOptions),
                n = await a.findMemberByOrgId({
                  userId: t.user.id,
                  organizationId: i,
                });
              if (
                !n ||
                !w({
                  role: n.role,
                  options: e.context.orgOptions,
                  permissions: { team: ["update"] },
                })
              )
                throw new d.LG("FORBIDDEN", {
                  message: h.YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM,
                });
              let o = await a.findTeamById({
                teamId: e.body.teamId,
                organizationId: i,
              });
              if (!o || o.organizationId !== i)
                throw new d.LG("BAD_REQUEST", { message: h.TEAM_NOT_FOUND });
              let r = await a.updateTeam(o.id, { name: e.body.data.name });
              return e.json(r);
            }
          ),
          (0, l.a)(
            "/organization/list-teams",
            {
              method: "GET",
              query: u.z.optional(
                u.z.object({ organizationId: u.z.string().optional() })
              ),
              metadata: {
                openapi: {
                  description: "List all teams in an organization",
                  responses: {
                    200: {
                      description: "Teams retrieved successfully",
                      content: {
                        "application/json": {
                          schema: {
                            type: "array",
                            items: {
                              type: "object",
                              properties: {
                                id: {
                                  type: "string",
                                  description: "Unique identifier of the team",
                                },
                                name: {
                                  type: "string",
                                  description: "Name of the team",
                                },
                                organizationId: {
                                  type: "string",
                                  description:
                                    "ID of the organization the team belongs to",
                                },
                                createdAt: {
                                  type: "string",
                                  format: "date-time",
                                  description:
                                    "Timestamp when the team was created",
                                },
                                updatedAt: {
                                  type: "string",
                                  format: "date-time",
                                  description:
                                    "Timestamp when the team was last updated",
                                },
                              },
                              required: [
                                "id",
                                "name",
                                "organizationId",
                                "createdAt",
                                "updatedAt",
                              ],
                            },
                            description:
                              "Array of team objects within the organization",
                          },
                        },
                      },
                    },
                  },
                },
              },
              use: [y, A],
            },
            async (e) => {
              let t = e.context.session,
                i = t.session.activeOrganizationId || e.query?.organizationId;
              if (!i)
                return e.json(null, {
                  status: 400,
                  body: { message: h.NO_ACTIVE_ORGANIZATION },
                });
              let a = N(e.context, e.context.orgOptions);
              if (
                !(await a.findMemberByOrgId({
                  userId: t?.user.id,
                  organizationId: i || "",
                }))
              )
                throw new d.LG("FORBIDDEN");
              let n = await a.listTeams(i);
              return e.json(n);
            }
          );
        let D = _({
          user: [
            "create",
            "list",
            "set-role",
            "ban",
            "impersonate",
            "delete",
            "set-password",
          ],
          session: ["list", "revoke", "delete"],
        });
        D.newRole({
          user: [
            "create",
            "list",
            "set-role",
            "ban",
            "impersonate",
            "delete",
            "set-password",
          ],
          session: ["list", "revoke", "delete"],
        }),
          D.newRole({ user: [], session: [] }),
          i(55094),
          u.z.object({
            id: u.z.string(),
            publicKey: u.z.string(),
            privateKey: u.z.string(),
            createdAt: u.z.date(),
          }),
          i(98196),
          i(45391),
          i(7125),
          i(2595);
        let { GET: L, POST: x } = (function (e) {
            let t = async (t) => ("handler" in e ? e.handler(t) : e(t));
            return { GET: t, POST: t };
          })(s.j.handler),
          M = new n.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: "/api/auth/[...all]/route",
              pathname: "/api/auth/[...all]",
              filename: "route",
              bundlePath: "app/api/auth/[...all]/route",
            },
            resolvedPagePath:
              "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/api/auth/[...all]/route.ts",
            nextConfigOutput: "standalone",
            userland: a,
          }),
          { workAsyncStorage: U, workUnitAsyncStorage: S, serverHooks: j } = M;
        function B() {
          return (0, r.patchFetch)({
            workAsyncStorage: U,
            workUnitAsyncStorage: S,
          });
        }
      },
      37067: (e) => {
        "use strict";
        e.exports = require("node:http");
      },
      38072: (e, t, i) => {
        "use strict";
        i.d(t, {
          DT: () => u,
          LJ: () => c,
          RW: () => I,
          c6: () => m,
          qp: () => p,
          yo: () => g,
        });
        var a = i(29911),
          n = i(1081),
          o = i(17463),
          r = i(27819),
          s = i(82658),
          d = i(11618),
          l = i(19330);
        let u = (0, n.cJ)("materials", {
            id: (0, o.uR)("id").primaryKey().defaultRandom(),
            title: (0, r.Qq)("title").notNull(),
            description: (0, r.Qq)("description").notNull(),
            subject: (0, r.Qq)("subject").notNull(),
            isActive: (0, s.zM)("is_active").default(!1),
            dateAdded: (0, d.vE)("date_added").defaultNow(),
            userId: (0, r.Qq)("user_id")
              .notNull()
              .references(() => l.kQ.id, { onDelete: "cascade" }),
          }),
          c = (0, n.cJ)("material_text_entries", {
            id: (0, o.uR)("id").primaryKey().defaultRandom(),
            materialId: (0, o.uR)("material_id")
              .references(() => u.id, { onDelete: "cascade" })
              .notNull(),
            title: (0, r.Qq)("title").notNull(),
            content: (0, r.Qq)("content").notNull(),
            dateAdded: (0, d.vE)("date_added").defaultNow(),
          }),
          m = (0, a.K1)(u, ({ many: e, one: t }) => ({
            textEntries: e(c),
            user: t(l.kQ, { fields: [u.userId], references: [l.kQ.id] }),
          })),
          p = (0, a.K1)(c, ({ one: e }) => ({
            material: e(u, { fields: [c.materialId], references: [u.id] }),
          })),
          g = (0, n.cJ)("subjects", {
            id: (0, o.uR)("id").primaryKey().defaultRandom(),
            name: (0, r.Qq)("name").notNull(),
            userId: (0, r.Qq)("user_id")
              .notNull()
              .references(() => l.kQ.id, { onDelete: "cascade" }),
          }),
          I = (0, a.K1)(g, ({ one: e }) => ({
            user: e(l.kQ, { fields: [g.userId], references: [l.kQ.id] }),
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
      48106: (e, t, i) => {
        "use strict";
        e.exports = i(44870);
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
      69290: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            account: () => a.ct,
            materialTextEntries: () => n.LJ,
            materialTextEntriesRelations: () => n.qp,
            materials: () => n.DT,
            materialsRelations: () => n.c6,
            message: () => o.i,
            session: () => a.dZ,
            subjects: () => n.yo,
            subjectsRelations: () => n.RW,
            thread: () => o.H,
            user: () => a.kQ,
            verification: () => a.Ot,
          });
        var a = i(19330),
          n = i(38072),
          o = i(13590);
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
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    a = t.X(0, [50, 151, 680], () => i(32506));
  module.exports = a;
})();
