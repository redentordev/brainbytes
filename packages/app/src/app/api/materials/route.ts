import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Material } from "@brainbytes/core/material";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const materials = await Material.getAllWithTextEntriesByUserId(
      session.user.id
    );
    return Response.json({ materials });
  } catch (error) {
    console.error("Materials API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
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

    const { title, description, subject } = await request.json();

    if (!title || !subject) {
      return Response.json(
        { error: "Title and subject are required" },
        { status: 400 }
      );
    }

    await Material.deactivateAllExcept(session.user.id);

    const material = await Material.create({
      title,
      description: description || "",
      subject,
      userId: session.user.id,
      isActive: true,
    });

    return Response.json({ material }, { status: 201 });
  } catch (error) {
    console.error("Error creating material:", error);
    return Response.json(
      { error: "Failed to create material" },
      { status: 500 }
    );
  }
}
