import { NextRequest } from "next/server";
import { Thread } from "@brainbytes/core/thread";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: threadId } = await params;
    const thread = await Thread.getById(threadId);

    if (!thread || thread.userId !== session.user.id) {
      return Response.json({ error: "Thread not found" }, { status: 404 });
    }

    const messages = await Thread.Message.getByThreadId(threadId);
    return Response.json({ thread, messages });
  } catch (error) {
    console.error("Error fetching thread:", error);
    return Response.json({ error: "Failed to fetch thread" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: threadId } = await params;
    const thread = await Thread.getById(threadId);

    if (!thread || thread.userId !== session.user.id) {
      return Response.json({ error: "Thread not found" }, { status: 404 });
    }

    const { title } = await request.json();

    if (!title) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }

    const updatedThread = await Thread.updateTitle(threadId, title);
    return Response.json({ thread: updatedThread });
  } catch (error) {
    console.error("Error updating thread:", error);
    return Response.json({ error: "Failed to update thread" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: threadId } = await params;
    const thread = await Thread.getById(threadId);

    if (!thread || thread.userId !== session.user.id) {
      return Response.json({ error: "Thread not found" }, { status: 404 });
    }

    await Thread.remove(threadId);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting thread:", error);
    return Response.json({ error: "Failed to delete thread" }, { status: 500 });
  }
}
