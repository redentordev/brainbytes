import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";
import { eq, and } from "drizzle-orm";
import { db } from "../index";
import { materialFileEntries, materials } from "./material.sql";

export namespace MaterialFile {
  export type FileEntry = InferSelectModel<typeof materialFileEntries>;
  export type NewFileEntry = InferInsertModel<typeof materialFileEntries>;

  export async function getByMaterialId(
    materialId: string
  ): Promise<FileEntry[]> {
    return db
      .select()
      .from(materialFileEntries)
      .where(eq(materialFileEntries.materialId, materialId));
  }

  export async function getById(id: string): Promise<FileEntry | undefined> {
    const results = await db
      .select()
      .from(materialFileEntries)
      .where(eq(materialFileEntries.id, id))
      .limit(1);
    return results[0];
  }

  export async function add(data: NewFileEntry): Promise<FileEntry> {
    const [entry] = await db
      .insert(materialFileEntries)
      .values(data)
      .returning();
    return entry!;
  }

  export async function update(
    id: string,
    data: Partial<NewFileEntry>
  ): Promise<FileEntry | undefined> {
    const [updated] = await db
      .update(materialFileEntries)
      .set(data)
      .where(eq(materialFileEntries.id, id))
      .returning();
    return updated;
  }

  export async function remove(id: string): Promise<void> {
    await db.delete(materialFileEntries).where(eq(materialFileEntries.id, id));
  }

  export async function removeByMaterialAndFile(
    materialId: string,
    fileId: string
  ): Promise<void> {
    await db
      .delete(materialFileEntries)
      .where(
        and(
          eq(materialFileEntries.id, fileId),
          eq(materialFileEntries.materialId, materialId)
        )
      );
  }

  export async function verifyMaterialOwnership(
    materialId: string,
    userId: string
  ): Promise<boolean> {
    const material = await db
      .select()
      .from(materials)
      .where(and(eq(materials.id, materialId), eq(materials.userId, userId)))
      .limit(1);

    return material.length > 0;
  }

  export const ALLOWED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/plain",
  ] as const;

  export function validateFileType(fileType: string): boolean {
    return ALLOWED_FILE_TYPES.includes(fileType as any);
  }

  export function getFileExtension(fileName: string): string {
    return fileName.split(".").pop() || "";
  }

  export function generateUniqueFileName(originalFileName: string): string {
    const extension = getFileExtension(originalFileName);
    return `${crypto.randomUUID()}.${extension}`;
  }

  export function generateFileKey(
    materialId: string,
    fileName: string
  ): string {
    return `materials/${materialId}/${fileName}`;
  }
}
