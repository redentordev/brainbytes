import { NextRequest } from "next/server";
import { Thread } from "@brainbytes/core/thread";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const threads = await Thread.getByUserId(session.user.id);

    const threadsWithMessages = await Promise.all(
      threads.map(async (thread) => {
        const messages = await Thread.Message.getByThreadId(thread.id);
        return {
          ...thread,
          messages,
        };
      })
    );

    return Response.json({ threads: threadsWithMessages });
  } catch (error) {
    console.error("Error fetching threads:", error);
    return Response.json({ error: "Failed to fetch threads" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, materialId } = await request.json();

    if (!title) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    const thread = await Thread.create(session.user.id, title, materialId);
    return Response.json({ thread }, { status: 201 });
  } catch (error) {
    console.error("Error creating thread:", error);
    return Response.json({ error: "Failed to create thread" }, { status: 500 });
  }
}
