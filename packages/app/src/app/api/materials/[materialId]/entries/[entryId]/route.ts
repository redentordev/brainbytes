import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Material } from "@brainbytes/core/material";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ materialId: string; entryId: string }> }
) {
  try {
    const { materialId, entryId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const material = await Material.getByIdAndUserId(
      materialId,
      session.user.id
    );
    if (!material) {
      return Response.json(
        {
          error: "Material not found or you don't have permission to modify it",
        },
        { status: 404 }
      );
    }

    const data = await request.json();

    if (data.title === "") {
      return Response.json({ error: "Title cannot be empty" }, { status: 400 });
    }
    if (data.content === "") {
      return Response.json(
        { error: "Content cannot be empty" },
        { status: 400 }
      );
    }

    const entry = await Material.TextEntry.update(entryId, data);

    if (!entry) {
      return Response.json({ error: "Text entry not found" }, { status: 404 });
    }

    return Response.json({ entry });
  } catch (error) {
    console.error("Error updating text entry:", error);
    return Response.json(
      { error: "Failed to update text entry" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ materialId: string; entryId: string }> }
) {
  try {
    const { materialId, entryId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const material = await Material.getByIdAndUserId(
      materialId,
      session.user.id
    );
    if (!material) {
      return Response.json(
        {
          error: "Material not found or you don't have permission to modify it",
        },
        { status: 404 }
      );
    }

    await Material.TextEntry.remove(entryId);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting text entry:", error);
    return Response.json(
      { error: "Failed to delete text entry" },
      { status: 500 }
    );
  }
}
