import { Hono } from "hono";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import type { AuthType } from "../lib/auth";
import type { CoreMessage } from "ai";
import { stream } from "hono/streaming";

const router = new Hono<{ Bindings: AuthType }>({
  strict: false,
});

router.post("/chat", async (c) => {
  try {
    const { messages }: { messages: CoreMessage[] } = await c.req.json();

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 

       You are developed by BrainBytes Team.
       The team is made of 4 students from Mapua Malayan Digital College.
       The team members are:
       - Redentor Valerio - Lead Developer
       - Neina Burce - Developer
       - Michael Angel Lu - Developer
       - Abigail Galilo - Developer

       The current date and time is ${new Date().toLocaleString()}.
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
