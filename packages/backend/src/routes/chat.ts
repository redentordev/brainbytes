import { Hono } from "hono";
import { generateText, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import type { AuthType } from "../lib/auth";
import type { CoreMessage } from "ai";
import { stream } from "hono/streaming";
import { Session, User } from "better-auth/types";
import * as materialRepo from "../material/material.repository";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import {
  createThread,
  getMessagesByThreadId,
  getThreadById,
  saveMessages,
  updateThreadTitle,
} from "../thread/thread.repository";

const router = new Hono<{
  Bindings: AuthType;
  Variables: {
    user: User | null;
    session: Session | null;
  };
}>({
  strict: false,
});

router.post("/chat", async (c) => {
  const session = c.get("session");

  if (!session) return c.json({ error: "Unauthorized" }, 401);
  try {
    const user = c.get("user");
    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const { messages, id }: { messages: CoreMessage[]; id: string } =
      await c.req.json();

    if (messages.length === 1) {
      const { text } = await generateText({
        model: openai("gpt-4.1-mini"),
        system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 
        Generate a title for the conversation based on the user's input.
        The title should be a single sentence that captures the main idea of the conversation.
        The title should be no more than 50 characters.
        The input is not a question or anything, view it in an objective angle and describe it as 
        a title for the conversation.
        `,
        messages: [{ role: "user", content: messages[0].content as string }],
      });

      await updateThreadTitle(id, text);
    }

    await saveMessages(id, messages);

    const activeMaterial =
      await materialRepo.getActiveMaterialWithTextEntriesByUserId(user.id);

    let materialContext = "";

    if (activeMaterial) {
      materialContext = `\nYou are helping the user learn about "${activeMaterial.title}"
       (Subject: ${activeMaterial.subject}).\n\n`;

      if (activeMaterial.textEntries && activeMaterial.textEntries.length > 0) {
        materialContext += "Here are the learning materials to focus on:\n\n";

        activeMaterial.textEntries.forEach((entry) => {
          materialContext += `<material title="${entry.title}">\n${entry.content}\n</material>\n\n`;
        });

        materialContext += `Focus your teaching and responses on the material provided above.
        Use this as your primary knowledge source when helping the user learn this topic.\n`;
      }
    } else {
      materialContext = `\nSince the user doesn't have an activate material instruct them by
      saying something along the lines of:
      To get started, please add and activate a learning material from the materials sidebar.`;
    }

    const result = streamText({
      model: openai("gpt-4.1-mini"),
      system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 

       You are developed by BrainBytes Team.
       The team is made of 4 students from Mapua Malayan Digital College.
       The team members are:
       - Redentor Valerio - Lead Developer
       - Neina Burce - Developer
       - Michael Angel Lu - Developer
       - Abigail Galilo - Developer

       The current date and time is ${new Date().toLocaleString()}.

       The user's name is ${user?.name}.
       The user's email is ${user?.email}.

       You can use the material context to help the user learn.
       No need to ask confirmation. You have the ability to detect 
       and respond to different types of questions (Definitions, Questions, and Examples).

       If you see that there's a material context, review it and come up with a way
       to help the user learn it from the beginning step by step. When user prompts you
       immediately do the question and answer routine, true or false questions, and fill in the blank questions and
       other simple but engaging activities that will help the user learn.

       Strictly follow the material context. Only ask the user 1 by 1 on the material context. Do 
       a step by step teaching on the material context.

       Ask the user how confident they are about the material context. If they are not confident,
       review them on the material context. If they are confident, then move on to the next step.

       Lastly the formatting of your response should be as follows:
       Strictly use Markdown formatting.

       Your tone should be fun, engaging, and friendly. Try to insert
       fun jokes and interesting facts about the material context. Use emojis
       to make the response more engaging.

       NOTE: ADD AS MANY EMOJIS AS YOU CAN TO MAKE THE RESPONSE MORE ENGAGING.

       <MaterialContext>
       ${materialContext}
       </MaterialContext>
      `,
      messages,
    });

    c.header("X-Vercel-AI-Data-Stream", "v1");
    c.header("Content-Type", "text/plain; charset=utf-8");

    return stream(c, async (stream) => stream.pipe(result.toDataStream()));
  } catch (error) {
    console.error("Chat API error:", error);
    return c.json({ error: "Failed to process chat request" }, 500);
  }
});

router.post("/new-chat", async (c) => {
  const session = c.get("session");
  if (!session) return c.json({ error: "Unauthorized" }, 401);

  const user = c.get("user");
  if (!user || !user.id) return c.json({ error: "User not found" }, 401);

  try {
    console.log("Creating new chat thread for user:", user.id);

    // Get the active material if any
    const activeMaterial =
      await materialRepo.getActiveMaterialWithTextEntriesByUserId(user.id);

    // Generate a default title based on time
    const defaultTitle = `New Chat - ${new Date().toLocaleString()}`;

    console.log("About to create thread with params:", {
      userId: user.id,
      title: defaultTitle,
      materialId: activeMaterial?.id || null,
    });

    // Create the thread with the generated title and material if available
    const thread = await createThread(
      user.id,
      defaultTitle,
      activeMaterial?.id
    );

    console.log("Thread created successfully:", thread.id);
    return c.json({ threadId: thread.id });
  } catch (error) {
    console.error("Error creating new chat:", error);
    return c.json(
      {
        error: "Failed to create new chat thread",
        details: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
});

router.get("/chat/:threadId", async (c) => {
  const session = c.get("session");
  if (!session) return c.json({ error: "Unauthorized" }, 401);

  const user = c.get("user");
  if (!user || !user.id) return c.json({ error: "User not found" }, 401);

  const { threadId } = c.req.param();

  const thread = await getThreadById(threadId);

  if (!thread) return c.json({ error: "Thread not found" }, 404);

  const messages = await getMessagesByThreadId(threadId);

  return c.json({ messages });
});

router.post("/chat/:threadId", async (c) => {
  const session = c.get("session");
  if (!session) return c.json({ error: "Unauthorized" }, 401);

  const user = c.get("user");
  if (!user || !user.id) return c.json({ error: "User not found" }, 401);

  const { threadId } = c.req.param();
  const { messages } = await c.req.json();

  await saveMessages(threadId, messages);

  return c.json({ success: true });
});

router.post(
  "/generate-title",
  zValidator(
    "json",
    z.object({
      userInput: z.string(),
    })
  ),
  async (c) => {
    const session = c.get("session");
    if (!session) return c.json({ error: "Unauthorized" }, 401);

    try {
      const user = c.get("user");
      if (!user || !user.id) {
        return c.json({ error: "User not found" }, 401);
      }

      const { userInput } = await c.req.json();

      const { text } = await generateText({
        model: openai("gpt-4.1-mini"),
        system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 
        Generate a title for the conversation based on the user's input.
        The title should be a single sentence that captures the main idea of the conversation.
        The title should be no more than 50 characters.
        `,
        messages: [{ role: "user", content: userInput }],
      });

      return c.json({ text });
    } catch (error) {
      console.error("Generate title error:", error);
      return c.json({ error: "Failed to generate title" }, 500);
    }
  }
);

export default router;
