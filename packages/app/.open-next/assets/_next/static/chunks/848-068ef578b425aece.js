"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [848],
  {
    1107: (e, r, t) => {
      t.d(r, { CI: () => s, G6: () => u, Up: () => h, wV: () => o });
      let a = (0, t(5495).MB)({ baseURL: "http://localhost:3000" }),
        {
          useSession: o,
          signIn: i,
          signUp: n,
          signOut: s,
          forgetPassword: c,
          resetPassword: l,
          getSession: d,
        } = a,
        u = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await a.signIn.social({ provider: "google", callbackURL: e });
        },
        h = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "/chat";
          return await a.signIn.social({ provider: "github", callbackURL: e });
        };
    },
    2848: (e, r, t) => {
      t.d(r, { Q: () => h, k: () => u });
      var a = t(4568),
        o = t(7620),
        i = t(8762),
        n = t(1874),
        s = t(1107);
      let c = (0, o.createContext)(void 0),
        l = "".concat("https://brainbytes.redentor.dev", "/api"),
        d = async (e, r) => {
          try {
            let t = await fetch(e, {
              ...r,
              credentials: "include",
              headers: {
                ...(null == r ? void 0 : r.headers),
                "Content-Type": "application/json",
              },
            });
            if (401 === t.status)
              throw Error("Unauthorized. Please log in first.");
            if (404 === t.status) return { data: [] };
            if (!t.ok)
              try {
                let e = await t.json();
                throw Error(e.error || "Server error: ".concat(t.status));
              } catch (e) {
                throw Error("Server error: ".concat(t.status));
              }
            return await t.json();
          } catch (r) {
            if (
              (console.error("Error fetching from ".concat(e, ":"), r),
              e.endsWith("/materials") || e.endsWith("/subjects"))
            )
              return { materials: [], subjects: [] };
            throw r;
          }
        };
      function u(e) {
        let { children: r } = e,
          t = (0, i.useQueryClient)(),
          { data: u } = (0, s.wV)(),
          [h, y] = o.useState(null),
          {
            data: m = [],
            isLoading: p,
            error: f,
          } = (0, i.useQuery)(
            ["materials"],
            async () => (await d("".concat(l, "/materials"))).materials || [],
            {
              enabled: !!u,
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
            data: w = [],
            isLoading: E,
            error: g,
          } = (0, i.useQuery)(
            ["subjects"],
            async () =>
              (await d("".concat(l, "/subject-records"))).subjects || [],
            {
              enabled: !!u,
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
          v = o.useMemo(() => w.map((e) => e.name), [w]),
          j = (0, i.useMutation)(
            async (e) => {
              let { title: r, description: t, subject: a } = e;
              try {
                var o;
                let e = await fetch("".concat(l, "/materials"), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    title: r,
                    description: t,
                    subject: a,
                  }),
                });
                if (!e.ok) {
                  let r = await e.json().catch(() => ({}));
                  throw Error(r.error || "Failed to add material");
                }
                return (
                  (null == (o = (await e.json()).material) ? void 0 : o.id) ||
                  ""
                );
              } catch (e) {
                throw (console.error("Error adding material:", e), e);
              }
            },
            {
              onSuccess: () => {
                t.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to add material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          b = (0, i.useMutation)(
            async (e) => {
              try {
                let r = await fetch("".concat(l, "/subject-records"), {
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
                t.invalidateQueries(["subjects"]);
              },
              onError: (e) => {
                n.oR.error("Failed to add subject", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          P = (0, i.useMutation)(
            async (e) => {
              try {
                let r = w.find((r) => r.name === e);
                if (!r) throw Error("Subject not found");
                let t = await fetch(
                  "".concat(l, "/subject-records/").concat(r.id),
                  { method: "DELETE", credentials: "include" }
                );
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
                t.invalidateQueries(["subjects"]),
                  t.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to remove subject", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          S = (0, i.useMutation)(
            async (e) => {
              let { materialId: r, title: t, content: a } = e;
              try {
                let e = await fetch(
                  "".concat(l, "/materials/").concat(r, "/entries"),
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ title: t, content: a }),
                  }
                );
                if (!e.ok) {
                  let r = await e.json().catch(() => ({}));
                  throw Error(r.error || "Failed to add text entry");
                }
              } catch (e) {
                throw (console.error("Error adding text entry:", e), e);
              }
            },
            {
              onSuccess: (e, r) => {
                t.invalidateQueries(["materials"]),
                  t.invalidateQueries(["materials", r.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to add text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          T = (0, i.useMutation)(
            async (e) => {
              let { materialId: r, entryId: t } = e;
              try {
                let e = await fetch(
                  "".concat(l, "/materials/").concat(r, "/entries/").concat(t),
                  { method: "DELETE", credentials: "include" }
                );
                if (!e.ok) {
                  let r = await e.json().catch(() => ({}));
                  throw Error(r.error || "Failed to remove text entry");
                }
              } catch (e) {
                throw (console.error("Error removing text entry:", e), e);
              }
            },
            {
              onSuccess: (e, r) => {
                t.invalidateQueries(["materials"]),
                  t.invalidateQueries(["materials", r.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to remove text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          F = (0, i.useMutation)(
            async (e) => {
              try {
                let r = await fetch("".concat(l, "/materials/").concat(e), {
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
                t.invalidateQueries(["materials"]),
                  (null == h ? void 0 : h.id) === F.variables && y(null);
              },
              onError: (e) => {
                n.oR.error("Failed to remove material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          R = (0, i.useMutation)(
            async (e) => {
              let { id: r, title: t, description: a, subject: o } = e;
              try {
                let e = await fetch("".concat(l, "/materials/").concat(r), {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    title: t,
                    description: a,
                    subject: o,
                  }),
                });
                if (!e.ok) {
                  let r = await e.json().catch(() => ({}));
                  throw Error(r.error || "Failed to update material");
                }
              } catch (e) {
                throw (console.error("Error updating material:", e), e);
              }
            },
            {
              onSuccess: () => {
                t.invalidateQueries(["materials"]);
              },
              onError: (e) => {
                n.oR.error("Failed to update material", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          C = (0, i.useMutation)(
            async (e) => {
              let { materialId: r, entryId: t, title: a, content: o } = e;
              try {
                let e = await fetch(
                  "".concat(l, "/materials/").concat(r, "/entries/").concat(t),
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ title: a, content: o }),
                  }
                );
                if (!e.ok) {
                  let r = await e.json().catch(() => ({}));
                  throw Error(r.error || "Failed to update text entry");
                }
              } catch (e) {
                throw (console.error("Error updating text entry:", e), e);
              }
            },
            {
              onSuccess: (e, r) => {
                t.invalidateQueries(["materials"]),
                  t.invalidateQueries(["materials", r.materialId]);
              },
              onError: (e) => {
                n.oR.error("Failed to update text entry", {
                  description: e.message || "Please try again",
                });
              },
            }
          ),
          Q = async (e, r, t) => {
            if (!t)
              throw (
                (n.oR.error("Subject required", {
                  description: "Please select or create a subject first",
                }),
                Error("Subject required"))
              );
            return await j.mutateAsync({
              title: e,
              description: r,
              subject: t,
            });
          },
          k = async (e) => {
            if (!u)
              throw (
                (n.oR.error("Authentication required", {
                  description: "Please sign in to add subjects",
                }),
                Error("Authentication required"))
              );
            await b.mutateAsync(e);
          },
          A = async (e) => {
            await P.mutateAsync(e);
          },
          x = async (e, r, t) => {
            await S.mutateAsync({ materialId: e, title: r, content: t });
          },
          M = async (e, r) => {
            await T.mutateAsync({ materialId: e, entryId: r });
          },
          q = async (e) => {
            await F.mutateAsync(e);
          },
          O = async (e, r, t, a) => {
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
            await R.mutateAsync({
              id: e,
              title: r,
              description: t,
              subject: a,
            });
          },
          L = async (e, r, t, a) => {
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
            await C.mutateAsync({
              materialId: e,
              entryId: r,
              title: t,
              content: a,
            });
          };
        return (0, a.jsx)(c.Provider, {
          value: {
            materials: m,
            activeMaterial: h,
            subjects: v,
            isLoading: p || E,
            error: f || g,
            addSubject: k,
            removeSubject: A,
            addMaterial: Q,
            updateMaterial: O,
            addTextEntryToMaterial: x,
            updateTextEntry: L,
            removeTextEntryFromMaterial: M,
            toggleMaterial: (e) => {
              let r = m.find((r) => r.id === e);
              if (r)
                if (r.isActive)
                  y(null),
                    fetch("".concat(l, "/materials/").concat(e), {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({ isActive: !1 }),
                    })
                      .then((e) => {
                        if (!e.ok)
                          throw Error("Failed to update material status");
                        t.invalidateQueries(["materials"]);
                      })
                      .catch((e) => {
                        console.error("Error updating material status:", e),
                          n.oR.error("Failed to update material status", {
                            description: "Please try again",
                          }),
                          y(r);
                      });
                else {
                  let a = m.find((e) => e.isActive);
                  y({ ...r, isActive: !0 }),
                    fetch("".concat(l, "/materials/").concat(e), {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({ isActive: !0 }),
                    })
                      .then((e) => {
                        if (!e.ok)
                          throw Error("Failed to update material status");
                        t.invalidateQueries(["materials"]);
                      })
                      .catch((e) => {
                        console.error("Error updating material status:", e),
                          n.oR.error("Failed to update material status", {
                            description: "Please try again",
                          }),
                          a ? y(a) : y(null);
                      });
                }
              else y(null);
            },
            removeMaterial: q,
          },
          children: r,
        });
      }
      let h = () => {
        let e = (0, o.useContext)(c);
        if (void 0 === e)
          throw Error(
            "useLearningMaterials must be used within a LearningMaterialsProvider"
          );
        return e;
      };
    },
  },
]);
