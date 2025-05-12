import { Hono } from "hono";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import type { AuthType } from "../lib/auth";
import type { CoreMessage } from "ai";
import { stream } from "hono/streaming";
import { Session, User } from "better-auth/types";
import * as materialRepo from "../material/material.repository";

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

    const { messages }: { messages: CoreMessage[] } = await c.req.json();

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

export default router;
