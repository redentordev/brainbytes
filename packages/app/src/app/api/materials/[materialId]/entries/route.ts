import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Material } from "@brainbytes/core/material";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ materialId: string }> }
) {
  try {
    const { materialId } = await params;
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
          error: "Material not found or you don't have permission to access it",
        },
        { status: 404 }
      );
    }

    const entries = await Material.TextEntry.getByMaterialId(materialId);
    return Response.json({ entries });
  } catch (error) {
    console.error("Error fetching text entries:", error);
    return Response.json(
      { error: "Failed to fetch text entries" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ materialId: string }> }
) {
  try {
    const { materialId } = await params;
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    if (!data.title) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }
    if (!data.content) {
      return Response.json({ error: "Content is required" }, { status: 400 });
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

    const entry = await Material.TextEntry.add({
      ...data,
      materialId,
    });

    return Response.json({ entry }, { status: 201 });
  } catch (error) {
    console.error("Error creating text entry:", error);
    return Response.json(
      { error: "Failed to create text entry" },
      { status: 500 }
    );
  }
}
