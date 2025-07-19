import { Resource } from "sst";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export namespace S3Service {
  export interface UploadUrlRequest {
    fileKey: string;
    fileName: string;
    fileType: string;
  }

  export interface UploadUrlResponse {
    uploadUrl: string;
    fileKey: string;
    fileName: string;
  }

  export async function generateUploadUrl(
    request: UploadUrlRequest
  ): Promise<UploadUrlResponse> {
    const s3Client = new S3Client({});

    const command = new PutObjectCommand({
      Bucket: Resource.BrainbytesBucket.name,
      Key: request.fileKey,
      ContentType: request.fileType,
      ContentDisposition: `attachment; filename="${request.fileName}"`,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    return {
      uploadUrl,
      fileKey: request.fileKey,
      fileName: request.fileName,
    };
  }

  export function getPublicUrl(fileKey: string): string {
    return `https://${Resource.BrainbytesBucket.name}.s3.amazonaws.com/${fileKey}`;
  }
}
