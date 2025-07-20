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

      console.log(
        `ContentExtractionService: Processing file ${fileName} with type ${fileType}`
      );
      console.log(
        `ContentExtractionService: Buffer size: ${buffer.length} bytes`
      );

      // Support text files - prioritize file extension over MIME type since browsers can be inconsistent
      if (
        lowerFileName.endsWith(".txt") ||
        lowerFileName.endsWith(".md") ||
        lowerFileName.endsWith(".markdown") ||
        normalizedType.includes("text")
      ) {
        console.log(
          `ContentExtractionService: File type supported, extracting text content`
        );
        return await extractTextContent(buffer);
      }

      console.log(
        `ContentExtractionService: Unsupported file type: ${fileType}`
      );
      return {
        content: "",
        success: false,
        error: `Unsupported file type: ${fileType}. Only .txt and .md files are supported.`,
      };
    } catch (error) {
      console.log(
        `ContentExtractionService: Error in extractFromBuffer:`,
        error
      );
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
      console.log(
        `ContentExtractionService: Extracted ${content.length} characters`
      );
      console.log(
        `ContentExtractionService: Content preview: ${content.substring(0, 100)}...`
      );
      return {
        content,
        success: true,
      };
    } catch (error) {
      console.log(`ContentExtractionService: Error extracting text:`, error);
      return {
        content: "",
        success: false,
        error: `Text extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  }
}
