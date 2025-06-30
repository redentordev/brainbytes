import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Material } from "@brainbytes/core/material";

export async function GET(
  request: NextRequest,
  { params }: { params: { materialId: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const material = await Material.getWithTextEntriesByUser(
      params.materialId,
      session.user.id
    );

    if (!material) {
      return Response.json({ error: "Material not found" }, { status: 404 });
    }

    return Response.json({ material });
  } catch (error) {
    console.error("Material GET API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { materialId: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    if (data.title === "") {
      return Response.json({ error: "Title cannot be empty" }, { status: 400 });
    }
    if (data.subject === "") {
      return Response.json(
        { error: "Subject cannot be empty" },
        { status: 400 }
      );
    }

    if (data.isActive === true) {
      await Material.deactivateAllExcept(session.user.id, params.materialId);
    }

    const material = await Material.updateByUser(
      params.materialId,
      session.user.id,
      data
    );

    if (!material) {
      return Response.json(
        {
          error: "Material not found or you don't have permission to update it",
        },
        { status: 404 }
      );
    }

    return Response.json({ material });
  } catch (error) {
    console.error("Error updating material:", error);
    return Response.json(
      { error: "Failed to update material" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { materialId: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await Material.removeByUser(params.materialId, session.user.id);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting material:", error);
    return Response.json(
      { error: "Failed to delete material" },
      { status: 500 }
    );
  }
}
