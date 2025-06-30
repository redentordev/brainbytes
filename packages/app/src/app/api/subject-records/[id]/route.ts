import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Material } from "@brainbytes/core/material";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name } = await request.json();

    if (!name) {
      return Response.json(
        { error: "Subject name is required" },
        { status: 400 }
      );
    }

    const subject = await Material.Subject.getRecordById(id);
    if (!subject || subject.userId !== session.user.id) {
      return Response.json(
        {
          error: "Subject not found or you don't have permission to update it",
        },
        { status: 404 }
      );
    }

    if (name !== subject.name) {
      const existingSubject = await Material.Subject.getRecordByName(
        name,
        session.user.id
      );
      if (existingSubject) {
        return Response.json(
          { error: "Subject with this name already exists" },
          { status: 400 }
        );
      }
    }

    const updatedSubject = await Material.Subject.update(id, {
      name,
    });

    if (!updatedSubject) {
      return Response.json(
        { error: "Failed to update subject" },
        { status: 500 }
      );
    }

    return Response.json({ subject: updatedSubject });
  } catch (error) {
    console.error("Error updating subject:", error);
    return Response.json(
      { error: "Failed to update subject" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await Material.Subject.removeByUser(id, session.user.id);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return Response.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
}
