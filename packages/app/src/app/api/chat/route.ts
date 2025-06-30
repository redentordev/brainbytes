import { NextRequest } from "next/server";
import { streamText, generateText } from "ai";
import type { CoreMessage } from "ai";
import { auth } from "@/lib/auth";
import { OAI } from "@/lib/llm";
import { Material } from "@brainbytes/core/material";
import { Thread } from "@brainbytes/core/thread";

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = session.user;
    if (!user || !user.id) {
      return Response.json({ error: "User not found" }, { status: 401 });
    }

    const { messages, id }: { messages: CoreMessage[]; id: string } =
      await request.json();

    if (messages.length === 1) {
      const { text } = await generateText({
        model: OAI("gpt-4o-mini"),
        system: `You are BrainBytes AI, a chatbot designed to help students with their questions. 
        Generate a title for the conversation based on the user's input.
        The title should be a single sentence that captures the main idea of the conversation.
        The title should be no more than 50 characters.
        The input is not a question or anything, view it in an objective angle and describe it as 
        a title for the conversation.
        `,
        messages: [{ role: "user", content: messages[0].content as string }],
      });

      await Thread.updateTitle(id, text);
    }

    await Thread.Message.save(id, messages);

    const activeMaterial = await Material.getActiveWithTextEntriesByUserId(
      user.id
    );

    let materialContext = "";

    if (activeMaterial) {
      materialContext = `\nYou are helping the user learn about "${activeMaterial.title}"
       (Subject: ${activeMaterial.subject}).\n\n`;

      if (activeMaterial.textEntries && activeMaterial.textEntries.length > 0) {
        materialContext += "Here are the learning materials to focus on:\n\n";

        activeMaterial.textEntries.forEach((entry: Material.TextEntry) => {
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
      model: OAI("gpt-4o-mini"),
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

       <MaterialContext>
       ${materialContext}
       </MaterialContext>
      `,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
