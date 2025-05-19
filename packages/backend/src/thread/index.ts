import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { thread, message } from "./thread.sql";

export * from "./thread.sql";

export type Thread = InferSelectModel<typeof thread>;
export type NewThread = InferInsertModel<typeof thread>;

export type Message = InferSelectModel<typeof message>;
export type NewMessage = InferInsertModel<typeof message>;
