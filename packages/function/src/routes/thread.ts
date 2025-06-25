import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import type { AuthType } from "../lib/auth";
import * as threadRepo from "../../../core/src/thread/thread.repository";
import { type CoreMessage } from "ai";

const router = new Hono<{
  Bindings: AuthType;
  Variables: {
    user: { id: string } | null;
    session: { id: string } | null;
  };
}>({
  strict: false,
});

// Get all threads for a user
router.get("/threads", async (c) => {
  const user = c.get("user");
  if (!user || !user.id) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const threads = await threadRepo.getThreadsByUserId(user.id);

    // For each thread, get its messages
    const threadsWithMessages = await Promise.all(
      threads.map(async (thread) => {
        const messages = await threadRepo.getMessagesByThreadId(thread.id);
        return {
          ...thread,
          messages,
        };
      })
    );

    return c.json({ threads: threadsWithMessages });
  } catch (error) {
    console.error("Get threads error:", error);
    return c.json({ error: "Failed to fetch threads" }, 500);
  }
});

// Create a new thread
router.post(
  "/threads",
  zValidator(
    "json",
    z.object({
      title: z.string(),
      materialId: z.string().nullish(),
    })
  ),
  async (c) => {
    const user = c.get("user");
    if (!user || !user.id) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    try {
      const { title, materialId } = await c.req.json();
      const thread = await threadRepo.createThread(user.id, title, materialId);
      return c.json({ thread });
    } catch (error) {
      console.error("Create thread error:", error);
      return c.json({ error: "Failed to create thread" }, 500);
    }
  }
);

// Get a thread by ID
router.get("/threads/:id", async (c) => {
  const user = c.get("user");
  if (!user || !user.id) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const threadId = c.req.param("id");
    const thread = await threadRepo.getThreadById(threadId);

    if (!thread || thread.userId !== user.id) {
      return c.json({ error: "Thread not found" }, 404);
    }

    const messages = await threadRepo.getMessagesByThreadId(threadId);
    return c.json({ thread, messages });
  } catch (error) {
    console.error("Get thread error:", error);
    return c.json({ error: "Failed to fetch thread" }, 500);
  }
});

// Update thread title
router.put(
  "/threads/:id",
  zValidator(
    "json",
    z.object({
      title: z.string(),
    })
  ),
  async (c) => {
    const user = c.get("user");
    if (!user || !user.id) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    try {
      const threadId = c.req.param("id");
      const thread = await threadRepo.getThreadById(threadId);

      if (!thread || thread.userId !== user.id) {
        return c.json({ error: "Thread not found" }, 404);
      }

      const { title } = await c.req.json();
      const updatedThread = await threadRepo.updateThreadTitle(threadId, title);
      return c.json({ thread: updatedThread });
    } catch (error) {
      console.error("Update thread error:", error);
      return c.json({ error: "Failed to update thread" }, 500);
    }
  }
);

// Delete a thread
router.delete("/threads/:id", async (c) => {
  const user = c.get("user");
  if (!user || !user.id) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const threadId = c.req.param("id");
    const thread = await threadRepo.getThreadById(threadId);

    if (!thread || thread.userId !== user.id) {
      return c.json({ error: "Thread not found" }, 404);
    }

    await threadRepo.deleteThread(threadId);
    return c.json({ success: true });
  } catch (error) {
    console.error("Delete thread error:", error);
    return c.json({ error: "Failed to delete thread" }, 500);
  }
});

// Save messages for a thread
router.post(
  "/threads/:id/messages",
  zValidator(
    "json",
    z.object({
      messages: z.array(
        z.object({
          role: z.enum(["user", "assistant", "system", "tool"]),
          content: z.union([z.string(), z.any()]),
        })
      ),
    })
  ),
  async (c) => {
    const user = c.get("user");
    if (!user || !user.id) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    try {
      const threadId = c.req.param("id");
      const thread = await threadRepo.getThreadById(threadId);

      if (!thread || thread.userId !== user.id) {
        return c.json({ error: "Thread not found" }, 404);
      }

      const { messages } = await c.req.json();
      await threadRepo.saveMessages(threadId, messages as CoreMessage[]);
      return c.json({ success: true });
    } catch (error) {
      console.error("Save messages error:", error);
      return c.json({ error: "Failed to save messages" }, 500);
    }
  }
);

export default router;
