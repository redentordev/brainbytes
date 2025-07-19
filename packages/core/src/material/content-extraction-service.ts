import pdfParse from "pdf-parse";
import mammoth from "mammoth";

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

      if (
        normalizedType.includes("pdf") ||
        fileName.toLowerCase().endsWith(".pdf")
      ) {
        return await extractPdfContent(buffer);
      }

      if (
        normalizedType.includes("wordprocessingml") ||
        fileName.toLowerCase().endsWith(".docx")
      ) {
        return await extractDocxContent(buffer);
      }

      if (
        normalizedType.includes("msword") ||
        fileName.toLowerCase().endsWith(".doc")
      ) {
        return {
          content: "",
          success: false,
          error:
            "Legacy .doc files are not supported. Please convert to .docx format.",
        };
      }

      if (
        normalizedType.includes("text") ||
        fileName.toLowerCase().endsWith(".txt")
      ) {
        return await extractTextContent(buffer);
      }

      return {
        content: "",
        success: false,
        error: `Unsupported file type: ${fileType}`,
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

  async function extractPdfContent(buffer: Buffer): Promise<ExtractionResult> {
    try {
      const data = await pdfParse(buffer);
      return {
        content: data.text.trim(),
        success: true,
      };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: `PDF extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  }

  async function extractDocxContent(buffer: Buffer): Promise<ExtractionResult> {
    try {
      const result = await mammoth.extractRawText({ buffer });
      return {
        content: result.value.trim(),
        success: true,
      };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: `DOCX extraction failed: ${error instanceof Error ? error.message : "Unknown error"}`,
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
