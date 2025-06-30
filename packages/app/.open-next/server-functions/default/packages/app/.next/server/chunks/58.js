"use strict";
(exports.id = 58),
  (exports.ids = [58]),
  (exports.modules = {
    66058: (e, t, n) => {
      n.d(t, { BunSqliteDialect: () => p });
      var r = n(29900),
        s = n(50403),
        a = n(38537),
        i = n(77329);
      class o {
        get supportsCreateIfNotExists() {
          return !0;
        }
        get supportsTransactionalDdl() {
          return !1;
        }
        get supportsReturning() {
          return !0;
        }
        async acquireMigrationLock() {}
        async releaseMigrationLock() {}
        get supportsOutput() {
          return !0;
        }
      }
      class c {
        #e;
        #t = new u();
        #n;
        #r;
        constructor(e) {
          this.#e = { ...e };
        }
        async init() {
          (this.#n = this.#e.database),
            (this.#r = new l(this.#n)),
            this.#e.onCreateConnection &&
              (await this.#e.onCreateConnection(this.#r));
        }
        async acquireConnection() {
          return await this.#t.lock(), this.#r;
        }
        async beginTransaction(e) {
          await e.executeQuery(r.E.raw("begin"));
        }
        async commitTransaction(e) {
          await e.executeQuery(r.E.raw("commit"));
        }
        async rollbackTransaction(e) {
          await e.executeQuery(r.E.raw("rollback"));
        }
        async releaseConnection() {
          this.#t.unlock();
        }
        async destroy() {
          this.#n?.close();
        }
      }
      class l {
        #n;
        constructor(e) {
          this.#n = e;
        }
        executeQuery(e) {
          let { sql: t, parameters: n } = e;
          return Promise.resolve({ rows: this.#n.prepare(t).all(n) });
        }
        async *streamQuery() {
          throw Error("Streaming query is not supported by SQLite driver.");
        }
      }
      class u {
        #s;
        #a;
        async lock() {
          for (; this.#s; ) await this.#s;
          this.#s = new Promise((e) => {
            this.#a = e;
          });
        }
        unlock() {
          let e = this.#a;
          (this.#s = void 0), (this.#a = void 0), e?.();
        }
      }
      class h {
        #n;
        constructor(e) {
          this.#n = e;
        }
        async getSchemas() {
          return [];
        }
        async getTables(e = { withInternalKyselyTables: !1 }) {
          let t = this.#n
            .selectFrom("sqlite_schema")
            .where("type", "=", "table")
            .where("name", "not like", "sqlite_%")
            .select("name")
            .$castTo();
          return (
            e.withInternalKyselyTables ||
              (t = t.where("name", "!=", s.kQ).where("name", "!=", s.sy)),
            Promise.all((await t.execute()).map(({ name: e }) => this.#i(e)))
          );
        }
        async getMetadata(e) {
          return { tables: await this.getTables(e) };
        }
        async #i(e) {
          let t = this.#n,
            n = await t
              .selectFrom("sqlite_master")
              .where("name", "=", e)
              .select("sql")
              .$castTo()
              .execute(),
            r = n[0]?.sql
              ?.split(/[\(\),]/)
              ?.find((e) => e.toLowerCase().includes("autoincrement"))
              ?.split(/\s+/)?.[0]
              ?.replace(/["`]/g, ""),
            s = await t
              .selectFrom((0, a.l)`pragma_table_info(${e})`.as("table_info"))
              .select(["name", "type", "notnull", "dflt_value"])
              .execute();
          return {
            name: e,
            columns: s.map((e) => ({
              name: e.name,
              dataType: e.type,
              isNullable: !e.notnull,
              isAutoIncrementing: e.name === r,
              hasDefaultValue: null != e.dflt_value,
            })),
            isView: !0,
          };
        }
      }
      class m extends i.n {
        getCurrentParameterPlaceholder() {
          return "?";
        }
        getLeftIdentifierWrapper() {
          return '"';
        }
        getRightIdentifierWrapper() {
          return '"';
        }
        getAutoIncrement() {
          return "autoincrement";
        }
      }
      class p {
        #e;
        constructor(e) {
          this.#e = { ...e };
        }
        createDriver() {
          return new c(this.#e);
        }
        createQueryCompiler() {
          return new m();
        }
        createAdapter() {
          return new o();
        }
        createIntrospector(e) {
          return new h(e);
        }
      }
    },
  });
