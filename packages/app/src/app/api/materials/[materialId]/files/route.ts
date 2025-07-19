import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  MaterialFile,
  S3Service,
  ContentExtractionService,
} from "@brainbytes/core/material";

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
    const { title, fileName, fileKey, fileSize, fileType } =
      await request.json();

    if (!title || !fileName || !fileKey || !fileSize || !fileType) {
      return Response.json(
        { error: "All fields are required" },
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

    // Generate public URL for the file
    const fileUrl = S3Service.getPublicUrl(fileKey);

    // Extract content from the uploaded file
    let extractedContent: string | null = null;
    try {
      const extractionResult = await ContentExtractionService.extractFromUrl(
        fileUrl,
        fileType,
        fileName
      );

      if (extractionResult.success) {
        extractedContent = extractionResult.content;
      } else {
        console.warn(
          `Content extraction failed for ${fileName}: ${extractionResult.error}`
        );
      }
    } catch (error) {
      console.warn(`Content extraction error for ${fileName}:`, error);
    }

    // Insert the file entry with extracted content
    const fileEntry = await MaterialFile.add({
      materialId,
      title,
      fileName,
      fileUrl,
      fileSize,
      fileType,
      content: extractedContent,
    });

    return Response.json(
      {
        fileEntry,
        contentExtracted: extractedContent !== null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding file entry:", error);
    return Response.json(
      { error: "Failed to add file entry" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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
    const url = new URL(request.url);
    const fileId = url.searchParams.get("fileId");

    if (!fileId) {
      return Response.json({ error: "fileId is required" }, { status: 400 });
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

    // Delete the file entry
    await MaterialFile.removeByMaterialAndFile(materialId, fileId);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting file entry:", error);
    return Response.json(
      { error: "Failed to delete file entry" },
      { status: 500 }
    );
  }
}
