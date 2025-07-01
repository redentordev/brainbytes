# BrainBytes Core Package

The core package contains shared database schema, utilities, and data access layers for the BrainBytes application.

## 🎯 Overview

This package provides:

- **Database Schema**: Drizzle ORM schema definitions
- **Data Access Layer**: Type-safe database operations
- **Shared Types**: TypeScript interfaces and types
- **Database Migrations**: Version-controlled schema changes
- **Utility Functions**: Common database operations

## 🛠️ Technology Stack

| Component      | Technology  | Purpose                       |
| -------------- | ----------- | ----------------------------- |
| **ORM**        | Drizzle ORM | Type-safe database operations |
| **Database**   | PostgreSQL  | Primary data storage          |
| **Runtime**    | Bun         | Fast JavaScript runtime       |
| **Migrations** | Drizzle Kit | Database schema management    |
| **Types**      | TypeScript  | Type safety and IntelliSense  |

## 📁 Project Structure

```
src/
├── auth/                  # Authentication schema
│   └── auth.sql.ts       # User and session tables
├── material/             # Learning materials
│   ├── index.ts          # Material operations
│   └── material.sql.ts   # Material schema
├── thread/               # Chat threads
│   ├── index.ts          # Thread operations
│   └── thread.sql.ts     # Thread and message schema
├── index.ts              # Main exports
└── schema.ts             # Combined schema export

migrations/               # Database migrations
├── meta/                # Migration metadata
│   ├── _journal.json    # Migration history
│   └── *.json           # Snapshot files
└── *.sql                # SQL migration files
```

## 🗄️ Database Schema

### Authentication Tables

```typescript
// User authentication and sessions
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});
```

### Learning Materials

```typescript
// Learning materials and content
export const subject = pgTable("subject", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const material = pgTable("material", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content"),
  type: text("type").notNull(), // 'text', 'file', 'url'
  subjectId: text("subjectId")
    .notNull()
    .references(() => subject.id, { onDelete: "cascade" }),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
```

### Chat Threads

```typescript
// Chat conversations and messages
export const thread = pgTable("thread", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  materialId: text("materialId").references(() => material.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const message = pgTable("message", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  content: text("content").notNull(),
  role: text("role").notNull(), // 'user', 'assistant'
  threadId: text("threadId")
    .notNull()
    .references(() => thread.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
```

## 🔧 Data Access Layer

### Thread Operations

```typescript
// Thread management functions
export const Thread = {
  // Create a new chat thread
  async create(userId: string, title: string, materialId?: string) {
    const [thread] = await db
      .insert(threadTable)
      .values({ userId, title, materialId })
      .returning();
    return thread;
  },

  // Get threads by user ID
  async getByUserId(userId: string) {
    return await db
      .select()
      .from(threadTable)
      .where(eq(threadTable.userId, userId))
      .orderBy(desc(threadTable.updatedAt));
  },

  // Update thread title
  async updateTitle(id: string, title: string) {
    const [thread] = await db
      .update(threadTable)
      .set({ title, updatedAt: new Date() })
      .where(eq(threadTable.id, id))
      .returning();
    return thread;
  },

  // Delete thread and all messages
  async delete(id: string) {
    await db.delete(threadTable).where(eq(threadTable.id, id));
  },

  // Message operations
  Message: {
    async create(
      threadId: string,
      content: string,
      role: "user" | "assistant"
    ) {
      const [message] = await db
        .insert(messageTable)
        .values({ threadId, content, role })
        .returning();
      return message;
    },

    async getByThreadId(threadId: string) {
      return await db
        .select()
        .from(messageTable)
        .where(eq(messageTable.threadId, threadId))
        .orderBy(asc(messageTable.createdAt));
    },
  },
};
```

### Material Operations

```typescript
// Learning material management
export const Material = {
  // Create new material
  async create(data: {
    title: string;
    content?: string;
    type: string;
    subjectId: string;
    userId: string;
  }) {
    const [material] = await db.insert(materialTable).values(data).returning();
    return material;
  },

  // Get materials by subject
  async getBySubjectId(subjectId: string) {
    return await db
      .select()
      .from(materialTable)
      .where(eq(materialTable.subjectId, subjectId))
      .orderBy(desc(materialTable.createdAt));
  },

  // Update material content
  async update(id: string, data: Partial<typeof materialTable.$inferInsert>) {
    const [material] = await db
      .update(materialTable)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(materialTable.id, id))
      .returning();
    return material;
  },
};
```

## 🚀 Development

### Prerequisites

- Bun runtime
- PostgreSQL database
- Environment variables configured

### Database Setup

1. **Install dependencies**:

   ```bash
   bun install
   ```

2. **Configure database URL**:

   ```bash
   # In .env.local
   DATABASE_URL=postgresql://user:password@localhost:5432/brainbytes
   ```

3. **Generate schema**:

   ```bash
   bun run db:generate
   ```

4. **Apply migrations**:

   ```bash
   bun run db:migrate
   ```

5. **Push schema to database**:
   ```bash
   bun run db:push
   ```

### Available Scripts

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `bun run db:generate` | Generate migration files     |
| `bun run db:migrate`  | Apply migrations             |
| `bun run db:push`     | Push schema to database      |
| `bun run db:studio`   | Open Drizzle Studio          |
| `bun run db:seed`     | Seed database with test data |

### Drizzle Studio

Access the database GUI:

```bash
bun run db:studio
```

This opens a web interface at http://localhost:4983 for:

- Viewing table data
- Running queries
- Managing relationships
- Inspecting schema

## 🔄 Migrations

### Creating Migrations

1. **Modify schema** in `src/schema.ts`
2. **Generate migration**:
   ```bash
   bun run db:generate
   ```
3. **Review generated SQL** in `migrations/`
4. **Apply migration**:
   ```bash
   bun run db:migrate
   ```

### Migration Files

```
migrations/
├── 0000_initial_schema.sql      # Initial tables
├── 0001_add_materials.sql       # Learning materials
├── 0002_add_threads.sql         # Chat functionality
└── meta/
    ├── _journal.json            # Migration history
    └── 0002_snapshot.json       # Current schema snapshot
```

### Best Practices

- **Always generate migrations** for schema changes
- **Review SQL** before applying migrations
- **Test migrations** on development database first
- **Backup production** before major migrations
- **Use descriptive names** for migration files

## 🔍 Type Safety

The core package provides full TypeScript support:

### Inferred Types

```typescript
// Automatically inferred from schema
type User = typeof user.$inferSelect;
type NewUser = typeof user.$inferInsert;
type Thread = typeof thread.$inferSelect;
type Message = typeof message.$inferSelect;
```

### Query Builder

```typescript
// Type-safe queries
const userThreads = await db
  .select({
    id: thread.id,
    title: thread.title,
    messageCount: count(message.id),
  })
  .from(thread)
  .leftJoin(message, eq(thread.id, message.threadId))
  .where(eq(thread.userId, userId))
  .groupBy(thread.id);
```

## 🧪 Testing

### Database Testing

```typescript
// Test database operations
import { describe, test, expect } from "bun:test";
import { Thread } from "../src/thread";

describe("Thread operations", () => {
  test("should create thread", async () => {
    const thread = await Thread.create("user-id", "Test Thread");
    expect(thread.title).toBe("Test Thread");
  });

  test("should get user threads", async () => {
    const threads = await Thread.getByUserId("user-id");
    expect(threads).toBeInstanceOf(Array);
  });
});
```

### Test Database

Use a separate test database:

```bash
# Test environment
DATABASE_URL=postgresql://user:password@localhost:5432/brainbytes_test
```

## 📊 Performance

### Query Optimization

- **Indexes**: Strategic database indexes
- **Joins**: Efficient relationship queries
- **Pagination**: Limit large result sets
- **Caching**: Query result caching

### Connection Pooling

```typescript
// Database connection configuration
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!, {
  max: 10, // Maximum connections
  idle_timeout: 20, // Idle timeout in seconds
  connect_timeout: 10, // Connection timeout
});

export const db = drizzle(client);
```

## 🔧 Configuration

### Drizzle Configuration

```typescript
// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
```

### Environment Variables

```bash
# Required for core package
DATABASE_URL=postgresql://user:password@host:port/database
```

## 📚 Additional Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Drizzle Kit CLI](https://orm.drizzle.team/kit-docs/overview)
- [SQL Migration Best Practices](https://orm.drizzle.team/docs/migrations)

---

**Part of the BrainBytes monorepo** - See [main README](../../README.md) for complete project information.
