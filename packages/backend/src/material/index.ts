import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { materials, materialTextEntries, subjects } from "./material.sql";

export * from "./material.sql";

export type Material = InferSelectModel<typeof materials>;
export type NewMaterial = InferInsertModel<typeof materials>;

export type MaterialTextEntry = InferSelectModel<typeof materialTextEntries>;
export type NewMaterialTextEntry = InferInsertModel<typeof materialTextEntries>;

export type Subject = InferSelectModel<typeof subjects>;
export type NewSubject = InferInsertModel<typeof subjects>;
