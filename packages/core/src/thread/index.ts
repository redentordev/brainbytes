import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";
import { eq, desc } from "drizzle-orm";
import { db } from "../index";
import { thread, message } from "./thread.sql";
import { type CoreMessage } from "ai";

export * from "./thread.sql";

export namespace Thread {
  export type Info = InferSelectModel<typeof thread>;
  export type New = InferInsertModel<typeof thread>;

  export type Message = InferSelectModel<typeof message>;
  export type NewMessage = InferInsertModel<typeof message>;

  export async function create(
    userId: string,
    title: string,
    materialId?: string
  ): Promise<Info> {
    const [newThread] = await db
      .insert(thread)
      .values({
        userId,
        title,
        materialId: materialId || null,
      })
      .returning();

    return newThread!;
  }

  export async function getByUserId(userId: string): Promise<Info[]> {
    return db
      .select()
      .from(thread)
      .where(eq(thread.userId, userId))
      .orderBy(desc(thread.updatedAt));
  }

  export async function getById(threadId: string): Promise<Info | undefined> {
    const [foundThread] = await db
      .select()
      .from(thread)
      .where(eq(thread.id, threadId));

    return foundThread;
  }

  export async function updateTitle(
    threadId: string,
    title: string
  ): Promise<Info | undefined> {
    const [updatedThread] = await db
      .update(thread)
      .set({
        title,
        updatedAt: new Date(),
      })
      .where(eq(thread.id, threadId))
      .returning();

    return updatedThread;
  }

  export async function remove(threadId: string): Promise<void> {
    await db.delete(thread).where(eq(thread.id, threadId));
  }

  export namespace Message {
    export async function save(
      threadId: string,
      messages: CoreMessage[]
    ): Promise<void> {
      try {
        const existingMessages = await getByThreadId(threadId);

        const existingContentMap = new Map();
        existingMessages.forEach((msg) => {
          const key = `${msg.role}:${msg.content}`;
          existingContentMap.set(key, true);
        });

        const filteredMessages = messages.filter((msg) => {
          const content =
            typeof msg.content === "string"
              ? msg.content
              : JSON.stringify(msg.content);
          const key = `${msg.role}:${content}`;
          return !existingContentMap.has(key);
        });

        if (filteredMessages.length > 0) {
          console.log(
            `Adding ${filteredMessages.length} new messages to thread ${threadId}`
          );

          const messagesToInsert = filteredMessages.map((msg) => ({
            threadId,
            content:
              typeof msg.content === "string"
                ? msg.content
                : JSON.stringify(msg.content),
            role: msg.role,
          }));

          await db.insert(message).values(messagesToInsert);
        } else {
          console.log(`No new messages to add to thread ${threadId}`);
        }
      } catch (error) {
        console.error(`Error saving messages for thread ${threadId}:`, error);
        throw error;
      }
    }

    export async function getByThreadId(threadId: string): Promise<Message[]> {
      return db
        .select()
        .from(message)
        .where(eq(message.threadId, threadId))
        .orderBy(message.createdAt);
    }
  }
}
