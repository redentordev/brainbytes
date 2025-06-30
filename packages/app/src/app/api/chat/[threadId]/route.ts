import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { Thread } from "@brainbytes/core/thread";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ threadId: string }> }
) {
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

    const { threadId } = await params;

    const thread = await Thread.getById(threadId);

    if (!thread) {
      return Response.json({ error: "Thread not found" }, { status: 404 });
    }

    const messages = await Thread.Message.getByThreadId(threadId);

    return Response.json({ messages });
  } catch (error) {
    console.error("Get chat thread error:", error);
    return Response.json(
      { error: "Failed to get chat thread" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ threadId: string }> }
) {
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

    const { threadId } = await params;
    const { messages } = await request.json();

    await Thread.Message.save(threadId, messages);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Save chat messages error:", error);
    return Response.json(
      { error: "Failed to save chat messages" },
      { status: 500 }
    );
  }
}
