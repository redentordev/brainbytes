import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";
import { user } from "../user/user.sql";

export const materials = pgTable("materials", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  subject: text("subject").notNull(),
  isActive: boolean("is_active").default(false),
  dateAdded: timestamp("date_added").defaultNow(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const materialTextEntries = pgTable("material_text_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  materialId: uuid("material_id")
    .references(() => materials.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  dateAdded: timestamp("date_added").defaultNow(),
});

export const materialsRelations = relations(materials, ({ many, one }) => ({
  textEntries: many(materialTextEntries),
  user: one(user, {
    fields: [materials.userId],
    references: [user.id],
  }),
}));

export const materialTextEntriesRelations = relations(
  materialTextEntries,
  ({ one }) => ({
    material: one(materials, {
      fields: [materialTextEntries.materialId],
      references: [materials.id],
    }),
  })
);

export const subjects = pgTable("subjects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const subjectsRelations = relations(subjects, ({ many, one }) => ({
  user: one(user, {
    fields: [subjects.userId],
    references: [user.id],
  }),
}));
