import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MaterialFile, S3Service } from "@brainbytes/core/material";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ materialId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { materialId } = await params;
    const { fileName, fileType } = await request.json();

    if (!fileName || !fileType) {
      return Response.json(
        { error: "fileName and fileType are required" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!MaterialFile.validateFileType(fileType)) {
      return Response.json(
        {
          error:
            "File type not supported. Only PDF, Word, and TXT files are allowed.",
        },
        { status: 400 }
      );
    }

    // Verify material ownership
    const hasAccess = await MaterialFile.verifyMaterialOwnership(
      materialId,
      session.user.id
    );
    if (!hasAccess) {
      return Response.json(
        { error: "Material not found or access denied" },
        { status: 404 }
      );
    }

    // Generate unique file name and key
    const uniqueFileName = MaterialFile.generateUniqueFileName(fileName);
    const fileKey = MaterialFile.generateFileKey(materialId, uniqueFileName);

    // Generate presigned URL
    const uploadResponse = await S3Service.generateUploadUrl({
      fileKey,
      fileName,
      fileType,
    });

    return Response.json(uploadResponse);
  } catch (error) {
    console.error("Error generating upload URL:", error);
    return Response.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}
