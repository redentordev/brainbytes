import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
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

    console.log("Creating new chat thread for user:", user.id);

    const activeMaterial = await Material.getActiveWithTextEntriesByUserId(
      user.id
    );

    const defaultTitle = `New Chat - ${new Date().toLocaleString()}`;

    console.log("About to create thread with params:", {
      userId: user.id,
      title: defaultTitle,
      materialId: activeMaterial?.id || null,
    });

    const thread = await Thread.create(
      user.id,
      defaultTitle,
      activeMaterial?.id
    );

    console.log("Thread created successfully:", thread.id);
    return Response.json({ threadId: thread.id });
  } catch (error) {
    console.error("Error creating new chat:", error);
    return Response.json(
      {
        error: "Failed to create new chat thread",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
