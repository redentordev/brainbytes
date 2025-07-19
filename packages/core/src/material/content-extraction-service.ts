export namespace ContentExtractionService {
  export interface ExtractionResult {
    content: string;
    success: boolean;
    error?: string;
  }

  export async function extractFromBuffer(
    buffer: Buffer,
    fileType: string,
    fileName: string
  ): Promise<ExtractionResult> {
    try {
      const normalizedType = fileType.toLowerCase();
      const lowerFileName = fileName.toLowerCase();

      // Support text files
      if (
        normalizedType.includes("text") ||
        lowerFileName.endsWith(".txt") ||
        lowerFileName.endsWith(".md") ||
        lowerFileName.endsWith(".markdown")
      ) {
        return await extractTextContent(buffer);
      }

      return {
        content: "",
        success: false,
        error: `Unsupported file type: ${fileType}. Only .txt and .md files are supported.`,
      };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: `Content extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  }

  export async function extractFromUrl(
    fileUrl: string,
    fileType: string,
    fileName: string
  ): Promise<ExtractionResult> {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        return {
          content: "",
          success: false,
          error: `Failed to fetch file: ${response.statusText}`,
        };
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return await extractFromBuffer(buffer, fileType, fileName);
    } catch (error) {
      return {
        content: "",
        success: false,
        error: `Failed to download and extract content: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  }

  async function extractTextContent(buffer: Buffer): Promise<ExtractionResult> {
    try {
      const content = buffer.toString("utf-8").trim();
      return {
        content,
        success: true,
      };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: `Text extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  }
}
