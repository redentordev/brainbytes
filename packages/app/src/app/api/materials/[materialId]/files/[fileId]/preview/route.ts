import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MaterialFile, S3Service } from "@brainbytes/core/material";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ materialId: string; fileId: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { materialId, fileId } = await params;

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

    // Get the file entry to extract the file key from the URL
    const fileEntry = await MaterialFile.getById(fileId);
    if (!fileEntry || fileEntry.materialId !== materialId) {
      return Response.json({ error: "File not found" }, { status: 404 });
    }

    // Extract file key from the stored file URL
    // URL format: https://bucket-name.s3.amazonaws.com/materials/materialId/filename
    const url = new URL(fileEntry.fileUrl);
    const fileKey = url.pathname.substring(1); // Remove leading slash

    console.log(`Generating preview URL for file key: ${fileKey}`);

    // Generate presigned URL for reading
    const previewUrl = await S3Service.generateReadUrl(fileKey);

    return Response.json({ previewUrl });
  } catch (error) {
    console.error("Error generating preview URL:", error);
    return Response.json(
      { error: "Failed to generate preview URL" },
      { status: 500 }
    );
  }
}
