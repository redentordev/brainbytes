(exports.id = 757),
  (exports.ids = [757]),
  (exports.modules = {
    8981: (e, r, t) => {
      "use strict";
      t.d(r, { CI: () => n, G6: () => u, Up: () => h, wV: () => i });
      let a = (0, t(73397).MB)({ baseURL: "http://localhost:3000" }),
        {
          useSession: i,
          signIn: o,
          signUp: s,
          signOut: n,
          forgetPassword: l,
          resetPassword: d,
          getSession: c,
        } = a,
        u = async (e = "/chat") =>
          await a.signIn.social({ provider: "google", callbackURL: e }),
        h = async (e = "/chat") =>
          await a.signIn.social({ provider: "github", callbackURL: e });
    },
    9699: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => i });
      var a = t(41253);
      let i = async (e) => [
        {
          type: "image/x-icon",
          sizes: "16x16",
          url:
            (0, a.fillMetadataSegment)(".", await e.params, "favicon.ico") + "",
        },
      ];
    },
    14276: () => {},
    14767: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 30385, 23)),
        Promise.resolve().then(t.t.bind(t, 33737, 23)),
        Promise.resolve().then(t.t.bind(t, 86081, 23)),
        Promise.resolve().then(t.t.bind(t, 1904, 23)),
        Promise.resolve().then(t.t.bind(t, 35856, 23)),
        Promise.resolve().then(t.t.bind(t, 55492, 23)),
        Promise.resolve().then(t.t.bind(t, 89082, 23)),
        Promise.resolve().then(t.t.bind(t, 45812, 23));
    },
    15638: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 83297));
    },
    20685: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => c, metadata: () => d });
      var a = t(38828),
        i = t(45269),
        o = t.n(i),
        s = t(71301),
        n = t.n(s);
      t(14276);
      var l = t(83297);
      let d = { title: "BrainBytes AI", description: "BrainBytes AI" };
      function c({ children: e }) {
        return (0, a.jsx)("html", {
          lang: "en",
          suppressHydrationWarning: !0,
          children: (0, a.jsx)("body", {
            className: `${o().variable} ${n().variable} antialiased`,
            children: (0, a.jsx)(l.Providers, { children: e }),
          }),
        });
      }
    },
    24530: (e, r, t) => {
      "use strict";
      t.d(r, { Q: () => m, k: () => h });
      var a = t(13486),
        i = t(60159),
        o = t.n(i),
        s = t(62924),
        n = t(81604),
        l = t(8981);
      let d = (0, i.createContext)(void 0),
        c = "https://brainbytes.redentor.dev/api",
        u = async (e, r) => {
          try {
            let t = await fetch(e, {
              ...r,
              credentials: "include",
              headers: { ...r?.headers, "Content-Type": "application/json" },
            });
            if (401 === t.status)
              throw Error("Unauthorized. Please log in first.");
            if (404 === t.status) return { data: [] };
            if (!t.ok)
              try {
                let e = await t.json();
                throw Error(e.error || `Server error: ${t.status}`);
              } catch {
                throw Error(`Server error: ${t.status}`);
              }
            return await t.json();
          } catch (r) {
            if (
              (console.error(`Error fetching from ${e}:`, r),
              e.endsWith("/materials") || e.endsWith("/subjects"))
            )
              return { materials: [], subjects: [] };
            throw r;
          }
        };
      function h({ children: e }) {
        let r = (0, s.useQueryClient)(),
          { data: t } = (0, l.wV)(),
          [i, h] = o().useState(null),
          {
            data: m = [],
            isLoading: y,
            error: p,
          } = (0, s.useQuery)(
            ["materials"],
            async () => (await u(`${c}/materials`)).materials || [],
            {
              enabled: !!t,
              onError: (e) => {
                console.error("Failed to fetch materials:", e),
                  (e instanceof TypeError && e.message.includes("fetch")) ||
                    n.oR.error("Couldn't load materials", {
                      description:
                        "Start by creating a subject and then add materials",
                    });
              },
              retry: 1,
              retryDelay: 1e4,
            }
          ),
          {
            data: v = [],
            isLoading: f,
            error: b,
          } = (0, s.useQuery)(
            ["subjects"],
            async () => (await u(`${c}/subject-records`)).subjects || [],
            {
              enabled: !!t,
              onError: (e) => {
                console.error("Failed to fetch subjects:", e),
                  (e instanceof TypeError && e.message.includes("fetch")) ||
                    n.oR.error("Couldn't load subjects", {
                      description: "Please create a subject first",
                    });
              },
              retry: 1,
              retryDelay: 1e3,
            }
          ),
          w = o().useMemo(() => v.map((e) => e.name), [v]),
          g = (0, s.useMutation)(
            async ({ title: e, description: r, subject: t }) => {
              try {
                let a = await fetch(`${c}/materials`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    title: e,
                    description: r,
                    subject: t,
                  }),
                });
                if (!a.ok) {
                  let e = await a.json().catch(() => ({}));
                  throw Error(e.error || "Failed to add material");
                }
                let i = await a.json();
                return i.material?.id || "";
              } catch (e) {
                throw (console.error("Error adding material:", e), e);
              }
            },
            {
              onSuccess: () => {
                r.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to add material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          j = (0, s.useMutation)(
            async (e) => {
              try {
                let r = await fetch(`${c}/subject-records`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({ name: e }),
                });
                if (!r.ok) {
                  let e = await r.json().catch(() => ({}));
                  throw Error(e.error || "Failed to add subject");
                }
              } catch (e) {
                throw (console.error("Error adding subject:", e), e);
              }
            },
            {
              onSuccess: () => {
                r.invalidateQueries(["subjects"]);
              },
              onError: (e) => {
                n.oR.error("Failed to add subject", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          E = (0, s.useMutation)(
            async (e) => {
              try {
                let r = v.find((r) => r.name === e);
                if (!r) throw Error("Subject not found");
                let t = await fetch(`${c}/subject-records/${r.id}`, {
                  method: "DELETE",
                  credentials: "include",
                });
                if (!t.ok) {
                  let e = await t.json().catch(() => ({}));
                  throw Error(e.error || "Failed to remove subject");
                }
              } catch (e) {
                if (
                  (console.error("Error removing subject:", e),
                  e instanceof Error)
                )
                  throw e;
                throw Error("Failed to remove subject");
              }
            },
            {
              onSuccess: () => {
                r.invalidateQueries(["subjects"]),
                  r.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to remove subject", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          P = (0, s.useMutation)(
            async ({ materialId: e, title: r, content: t }) => {
              try {
                let a = await fetch(`${c}/materials/${e}/entries`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({ title: r, content: t }),
                });
                if (!a.ok) {
                  let e = await a.json().catch(() => ({}));
                  throw Error(e.error || "Failed to add text entry");
                }
              } catch (e) {
                throw (console.error("Error adding text entry:", e), e);
              }
            },
            {
              onSuccess: (e, t) => {
                r.invalidateQueries(["materials"]),
                  r.invalidateQueries(["materials", t.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to add text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          x = (0, s.useMutation)(
            async ({ materialId: e, entryId: r }) => {
              try {
                let t = await fetch(`${c}/materials/${e}/entries/${r}`, {
                  method: "DELETE",
                  credentials: "include",
                });
                if (!t.ok) {
                  let e = await t.json().catch(() => ({}));
                  throw Error(e.error || "Failed to remove text entry");
                }
              } catch (e) {
                throw (console.error("Error removing text entry:", e), e);
              }
            },
            {
              onSuccess: (e, t) => {
                r.invalidateQueries(["materials"]),
                  r.invalidateQueries(["materials", t.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to remove text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          S = (0, s.useMutation)(
            async (e) => {
              try {
                let r = await fetch(`${c}/materials/${e}`, {
                  method: "DELETE",
                  credentials: "include",
                });
                if (!r.ok) {
                  let e = await r.json().catch(() => ({}));
                  throw Error(e.error || "Failed to remove material");
                }
              } catch (e) {
                throw (console.error("Error removing material:", e), e);
              }
            },
            {
              onSuccess: () => {
                r.invalidateQueries(["materials"]),
                  i?.id === S.variables && h(null);
              },
              onError: (e) => {
                n.oR.error("Failed to remove material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          $ = (0, s.useMutation)(
            async ({ id: e, title: r, description: t, subject: a }) => {
              try {
                let i = await fetch(`${c}/materials/${e}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    title: r,
                    description: t,
                    subject: a,
                  }),
                });
                if (!i.ok) {
                  let e = await i.json().catch(() => ({}));
                  throw Error(e.error || "Failed to update material");
                }
              } catch (e) {
                throw (console.error("Error updating material:", e), e);
              }
            },
            {
              onSuccess: () => {
                r.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to update material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          T = (0, s.useMutation)(
            async ({ materialId: e, entryId: r, title: t, content: a }) => {
              try {
                let i = await fetch(`${c}/materials/${e}/entries/${r}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({ title: t, content: a }),
                });
                if (!i.ok) {
                  let e = await i.json().catch(() => ({}));
                  throw Error(e.error || "Failed to update text entry");
                }
              } catch (e) {
                throw (console.error("Error updating text entry:", e), e);
              }
            },
            {
              onSuccess: (e, t) => {
                r.invalidateQueries(["materials"]),
                  r.invalidateQueries(["materials", t.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to update text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          C = async (e, r, t) => {
            if (!t)
              throw (
                (n.oR.error("Subject required", {
                  description: "Please select or create a subject first",
                }),
                Error("Subject required"))
              );
            return await g.mutateAsync({
              title: e,
              description: r,
              subject: t,
            });
          },
          F = async (e) => {
            if (!t)
              throw (
                (n.oR.error("Authentication required", {
                  description: "Please sign in to add subjects",
                }),
                Error("Authentication required"))
              );
            await j.mutateAsync(e);
          },
          Q = async (e) => {
            await E.mutateAsync(e);
          },
          R = async (e, r, t) => {
            await P.mutateAsync({ materialId: e, title: r, content: t });
          },
          A = async (e, r) => {
            await x.mutateAsync({ materialId: e, entryId: r });
          },
          k = async (e) => {
            await S.mutateAsync(e);
          },
          M = async (e, r, t, a) => {
            if (!r.trim())
              throw (
                (n.oR.error("Title required", {
                  description:
                    "Please provide a title for your learning material.",
                }),
                Error("Title required"))
              );
            if (!a)
              throw (
                (n.oR.error("Subject required", {
                  description: "Please select a subject for your material.",
                }),
                Error("Subject required"))
              );
            await $.mutateAsync({
              id: e,
              title: r,
              description: t,
              subject: a,
            });
          },
          q = async (e, r, t, a) => {
            if (!t.trim())
              throw (
                (n.oR.error("Title required", {
                  description: "Please provide a title for your text entry.",
                }),
                Error("Title required"))
              );
            if (!a.trim())
              throw (
                (n.oR.error("Content required", {
                  description: "Please provide content for your text entry.",
                }),
                Error("Content required"))
              );
            await T.mutateAsync({
              materialId: e,
              entryId: r,
              title: t,
              content: a,
            });
          };
        return (0, a.jsx)(d.Provider, {
          value: {
            materials: m,
            activeMaterial: i,
            subjects: w,
            isLoading: y || f,
            error: p || b,
            addSubject: F,
            removeSubject: Q,
            addMaterial: C,
            updateMaterial: M,
            addTextEntryToMaterial: R,
            updateTextEntry: q,
            removeTextEntryFromMaterial: A,
            toggleMaterial: (e) => {
              let t = m.find((r) => r.id === e);
              if (t)
                if (t.isActive)
                  h(null),
                    fetch(`${c}/materials/${e}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({ isActive: !1 }),
                    })
                      .then((e) => {
                        if (!e.ok)
                          throw Error("Failed to update material status");
                        r.invalidateQueries(["materials"]);
                      })
                      .catch((e) => {
                        console.error("Error updating material status:", e),
                          n.oR.error("Failed to update material status", {
                            description: "Please try again",
                          }),
                          h(t);
                      });
                else {
                  let a = m.find((e) => e.isActive);
                  h({ ...t, isActive: !0 }),
                    fetch(`${c}/materials/${e}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({ isActive: !0 }),
                    })
                      .then((e) => {
                        if (!e.ok)
                          throw Error("Failed to update material status");
                        r.invalidateQueries(["materials"]);
                      })
                      .catch((e) => {
                        console.error("Error updating material status:", e),
                          n.oR.error("Failed to update material status", {
                            description: "Please try again",
                          }),
                          a ? h(a) : h(null);
                      });
                }
              else h(null);
            },
            removeMaterial: k,
          },
          children: e,
        });
      }
      let m = () => {
        let e = (0, i.useContext)(d);
        if (void 0 === e)
          throw Error(
            "useLearningMaterials must be used within a LearningMaterialsProvider"
          );
        return e;
      };
    },
    39198: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 79700));
    },
    61623: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 69355, 23)),
        Promise.resolve().then(t.t.bind(t, 54439, 23)),
        Promise.resolve().then(t.t.bind(t, 67851, 23)),
        Promise.resolve().then(t.t.bind(t, 94730, 23)),
        Promise.resolve().then(t.t.bind(t, 19774, 23)),
        Promise.resolve().then(t.t.bind(t, 53170, 23)),
        Promise.resolve().then(t.t.bind(t, 20968, 23)),
        Promise.resolve().then(t.t.bind(t, 78298, 23));
    },
    79700: (e, r, t) => {
      "use strict";
      t.d(r, { Providers: () => d });
      var a = t(13486);
      t(60159);
      var i = t(62924),
        o = t(24530),
        s = t(48961);
      function n({ children: e, ...r }) {
        return (0, a.jsx)(s.N, { ...r, children: e });
      }
      let l = new i.QueryClient();
      function d({ children: e }) {
        return (0, a.jsx)(n, {
          attribute: "class",
          defaultTheme: "dark",
          enableSystem: !0,
          disableTransitionOnChange: !0,
          children: (0, a.jsx)(i.QueryClientProvider, {
            client: l,
            children: (0, a.jsx)(o.k, { children: e }),
          }),
        });
      }
    },
    80408: () => {},
    83297: (e, r, t) => {
      "use strict";
      t.d(r, { Providers: () => a });
      let a = (0, t(33952).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        "/home/aiz/dev/redentor/brainbytes/packages/app/src/app/providers.tsx",
        "Providers"
      );
    },
    87032: () => {},
    87239: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => i });
      var a = t(38828);
      function i() {
        return (0, a.jsx)("div", {
          className: "flex items-center justify-center min-h-screen",
          children: (0, a.jsxs)("div", {
            className: "text-center",
            children: [
              (0, a.jsx)("h2", {
                className: "text-2xl font-bold mb-2",
                children: "Not Found",
              }),
              (0, a.jsx)("p", {
                children: "Could not find requested resource",
              }),
            ],
          }),
        });
      }
    },
  });
