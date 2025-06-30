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

    const subjects = await Material.Subject.getRecordsByUserId(session.user.id);
    return Response.json({ subjects });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return Response.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
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

    const { name } = await request.json();

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

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

    const subject = await Material.Subject.create({
      name,
      userId: session.user.id,
    });

    return Response.json({ subject }, { status: 201 });
  } catch (error) {
    console.error("Error creating subject:", error);
    return Response.json(
      { error: "Failed to create subject" },
      { status: 500 }
    );
  }
}
