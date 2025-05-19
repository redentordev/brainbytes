import { db } from "../drizzle";
import { message, thread } from "./thread.sql";
import { eq, desc } from "drizzle-orm";
import { type CoreMessage } from "ai";

export async function createThread(
  userId: string,
  title: string,
  materialId?: string
) {
  const [newThread] = await db
    .insert(thread)
    .values({
      userId,
      title,
      materialId: materialId || null,
    })
    .returning();

  return newThread;
}

export async function getThreadsByUserId(userId: string) {
  return db
    .select()
    .from(thread)
    .where(eq(thread.userId, userId))
    .orderBy(desc(thread.updatedAt));
}

export async function getThreadById(threadId: string) {
  const [foundThread] = await db
    .select()
    .from(thread)
    .where(eq(thread.id, threadId));

  return foundThread;
}

export async function updateThreadTitle(threadId: string, title: string) {
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

export async function deleteThread(threadId: string) {
  return db.delete(thread).where(eq(thread.id, threadId));
}

export async function saveMessages(threadId: string, messages: CoreMessage[]) {
  try {
    // Get existing messages to check for duplicates
    const existingMessages = await getMessagesByThreadId(threadId);

    // Build a map of existing message content for faster lookup
    const existingContentMap = new Map();
    existingMessages.forEach((msg) => {
      // Create a compound key with role + content to identify duplicates
      const key = `${msg.role}:${msg.content}`;
      existingContentMap.set(key, true);
    });

    // Filter out messages that already exist with the same content and role
    const filteredMessages = messages.filter((msg) => {
      const content =
        typeof msg.content === "string"
          ? msg.content
          : JSON.stringify(msg.content);
      const key = `${msg.role}:${content}`;
      return !existingContentMap.has(key);
    });

    // If we have new messages to add, insert them
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

      return db.insert(message).values(messagesToInsert);
    } else {
      console.log(`No new messages to add to thread ${threadId}`);
      return null;
    }
  } catch (error) {
    console.error(`Error saving messages for thread ${threadId}:`, error);
    throw error;
  }
}

export async function getMessagesByThreadId(threadId: string) {
  return db
    .select()
    .from(message)
    .where(eq(message.threadId, threadId))
    .orderBy(message.createdAt);
}
