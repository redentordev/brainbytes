import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";
import { user } from "../auth/auth.sql";

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
  fileEntries: many(materialFileEntries),
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

export const materialFileEntries = pgTable("material_file_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  materialId: uuid("material_id")
    .references(() => materials.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  fileName: text("file_name").notNull(),
  fileUrl: text("file_url").notNull(),
  fileSize: text("file_size").notNull(),
  fileType: text("file_type").notNull(),
  content: text("content"),
  dateAdded: timestamp("date_added").defaultNow(),
});

export const materialFileEntriesRelations = relations(
  materialFileEntries,
  ({ one }) => ({
    material: one(materials, {
      fields: [materialFileEntries.materialId],
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

export const subjectsRelations = relations(subjects, ({ one }) => ({
  user: one(user, {
    fields: [subjects.userId],
    references: [user.id],
  }),
}));
