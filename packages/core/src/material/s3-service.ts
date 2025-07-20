import { Resource } from "sst";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

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

  export async function getFileBuffer(fileKey: string): Promise<Buffer> {
    const s3Client = new S3Client({});

    const command = new GetObjectCommand({
      Bucket: Resource.BrainbytesBucket.name,
      Key: fileKey,
    });

    const response = await s3Client.send(command);

    if (!response.Body) {
      throw new Error(`File not found: ${fileKey}`);
    }

    // Convert the stream to buffer
    const chunks: Uint8Array[] = [];
    const reader = response.Body.transformToWebStream().getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const buffer = new Uint8Array(totalLength);
    let offset = 0;

    for (const chunk of chunks) {
      buffer.set(chunk, offset);
      offset += chunk.length;
    }

    return Buffer.from(buffer);
  }

  export async function generateReadUrl(fileKey: string): Promise<string> {
    const s3Client = new S3Client({});

    const command = new GetObjectCommand({
      Bucket: Resource.BrainbytesBucket.name,
      Key: fileKey,
    });

    const readUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600, // 1 hour
    });

    return readUrl;
  }
}
