import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "../auth/auth.sql";

export const thread = pgTable("thread", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  materialId: text("material_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const message = pgTable("message", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: text("content").notNull(),
  role: text("role").notNull(),
  threadId: uuid("thread_id")
    .notNull()
    .references(() => thread.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
