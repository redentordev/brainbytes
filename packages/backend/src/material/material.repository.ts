import { eq, and, inArray, ne } from "drizzle-orm";
import { db } from "../drizzle";
import {
  materials,
  materialTextEntries,
  subjects,
  Material,
  NewMaterial,
  MaterialTextEntry,
  NewMaterialTextEntry,
  Subject,
  NewSubject,
} from "./index";

// Material operations
export async function getAllMaterials(): Promise<Material[]> {
  return db.select().from(materials);
}

export async function getMaterialsByUserId(
  userId: string
): Promise<Material[]> {
  return db.select().from(materials).where(eq(materials.userId, userId));
}

export async function getMaterialById(
  id: string
): Promise<Material | undefined> {
  const results = await db
    .select()
    .from(materials)
    .where(eq(materials.id, id))
    .limit(1);
  return results[0];
}

export async function getMaterialByIdAndUserId(
  id: string,
  userId: string
): Promise<Material | undefined> {
  const results = await db
    .select()
    .from(materials)
    .where(and(eq(materials.id, id), eq(materials.userId, userId)))
    .limit(1);
  return results[0];
}

export async function getMaterialWithTextEntries(id: string): Promise<
  | (Material & {
      textEntries: MaterialTextEntry[];
    })
  | undefined
> {
  const material = await getMaterialById(id);
  if (!material) return undefined;

  const textEntries = await db
    .select()
    .from(materialTextEntries)
    .where(eq(materialTextEntries.materialId, id));

  return {
    ...material,
    textEntries,
  };
}

export async function getMaterialWithTextEntriesByUser(
  id: string,
  userId: string
): Promise<
  | (Material & {
      textEntries: MaterialTextEntry[];
    })
  | undefined
> {
  const material = await getMaterialByIdAndUserId(id, userId);
  if (!material) return undefined;

  const textEntries = await db
    .select()
    .from(materialTextEntries)
    .where(eq(materialTextEntries.materialId, id));

  return {
    ...material,
    textEntries,
  };
}

export async function createMaterial(data: NewMaterial): Promise<Material> {
  const [material] = await db.insert(materials).values(data).returning();
  return material;
}

export async function updateMaterial(
  id: string,
  data: Partial<NewMaterial>
): Promise<Material | undefined> {
  const [updated] = await db
    .update(materials)
    .set(data)
    .where(eq(materials.id, id))
    .returning();
  return updated;
}

export async function updateMaterialByUser(
  id: string,
  userId: string,
  data: Partial<NewMaterial>
): Promise<Material | undefined> {
  const [updated] = await db
    .update(materials)
    .set(data)
    .where(and(eq(materials.id, id), eq(materials.userId, userId)))
    .returning();
  return updated;
}

export async function deleteMaterial(id: string): Promise<void> {
  await db.delete(materials).where(eq(materials.id, id));
}

export async function deleteMaterialByUser(
  id: string,
  userId: string
): Promise<void> {
  await db
    .delete(materials)
    .where(and(eq(materials.id, id), eq(materials.userId, userId)));
}

// Material Text Entry operations
export async function getTextEntriesByMaterialId(
  materialId: string
): Promise<MaterialTextEntry[]> {
  return db
    .select()
    .from(materialTextEntries)
    .where(eq(materialTextEntries.materialId, materialId));
}

export async function addTextEntry(
  data: NewMaterialTextEntry
): Promise<MaterialTextEntry> {
  const [entry] = await db.insert(materialTextEntries).values(data).returning();
  return entry;
}

export async function updateTextEntry(
  id: string,
  data: Partial<NewMaterialTextEntry>
): Promise<MaterialTextEntry | undefined> {
  const [updated] = await db
    .update(materialTextEntries)
    .set(data)
    .where(eq(materialTextEntries.id, id))
    .returning();
  return updated;
}

export async function removeTextEntry(id: string): Promise<void> {
  await db.delete(materialTextEntries).where(eq(materialTextEntries.id, id));
}

// Subject operations
export async function getMaterialsBySubject(
  subject: string
): Promise<Material[]> {
  return db.select().from(materials).where(eq(materials.subject, subject));
}

export async function getMaterialsBySubjectAndUser(
  subject: string,
  userId: string
): Promise<Material[]> {
  return db
    .select()
    .from(materials)
    .where(and(eq(materials.subject, subject), eq(materials.userId, userId)));
}

export async function getAllSubjects(): Promise<string[]> {
  const result = await db
    .select({ subject: materials.subject })
    .from(materials)
    .groupBy(materials.subject);

  return result.map((item) => item.subject);
}

export async function getSubjectsByUserId(userId: string): Promise<string[]> {
  const result = await db
    .select({ subject: materials.subject })
    .from(materials)
    .where(eq(materials.userId, userId))
    .groupBy(materials.subject);

  return result.map((item) => item.subject);
}

// New Subject table operations
export async function getAllSubjectRecords(): Promise<Subject[]> {
  return db.select().from(subjects);
}

export async function getSubjectRecordsByUserId(
  userId: string
): Promise<Subject[]> {
  return db.select().from(subjects).where(eq(subjects.userId, userId));
}

export async function getSubjectRecordById(
  id: string
): Promise<Subject | undefined> {
  const results = await db
    .select()
    .from(subjects)
    .where(eq(subjects.id, id))
    .limit(1);
  return results[0];
}

export async function getSubjectRecordByName(
  name: string,
  userId: string
): Promise<Subject | undefined> {
  const results = await db
    .select()
    .from(subjects)
    .where(and(eq(subjects.name, name), eq(subjects.userId, userId)))
    .limit(1);
  return results[0];
}

export async function createSubject(data: NewSubject): Promise<Subject> {
  const [subject] = await db.insert(subjects).values(data).returning();
  return subject;
}

export async function updateSubject(
  id: string,
  data: Partial<NewSubject>
): Promise<Subject | undefined> {
  const [updated] = await db
    .update(subjects)
    .set(data)
    .where(eq(subjects.id, id))
    .returning();
  return updated;
}

export async function deleteSubject(id: string): Promise<void> {
  await db.delete(subjects).where(eq(subjects.id, id));
}

export async function deleteSubjectByUser(
  id: string,
  userId: string
): Promise<void> {
  await db
    .delete(subjects)
    .where(and(eq(subjects.id, id), eq(subjects.userId, userId)));
}

export async function getAllMaterialsWithTextEntriesByUserId(
  userId: string
): Promise<Array<Material & { textEntries: MaterialTextEntry[] }>> {
  const userMaterials = await getMaterialsByUserId(userId);

  // Get all text entries for these materials in a single query
  const materialIds = userMaterials.map((material) => material.id);

  if (materialIds.length === 0) {
    return [];
  }

  const allTextEntries = await db
    .select()
    .from(materialTextEntries)
    .where(inArray(materialTextEntries.materialId, materialIds));

  // Group text entries by material ID
  const textEntriesByMaterialId = allTextEntries.reduce(
    (grouped, entry) => {
      const materialId = entry.materialId;
      if (!grouped[materialId]) {
        grouped[materialId] = [];
      }
      grouped[materialId].push(entry);
      return grouped;
    },
    {} as Record<string, MaterialTextEntry[]>
  );

  // Map materials with their text entries
  return userMaterials.map((material) => ({
    ...material,
    textEntries: textEntriesByMaterialId[material.id] || [],
  }));
}

export async function deactivateAllMaterialsExcept(
  userId: string,
  exceptId?: string
): Promise<void> {
  if (exceptId) {
    // Deactivate all materials except the specified one
    await db
      .update(materials)
      .set({ isActive: false })
      .where(and(eq(materials.userId, userId), ne(materials.id, exceptId)));
  } else {
    // Deactivate all materials for this user
    await db
      .update(materials)
      .set({ isActive: false })
      .where(eq(materials.userId, userId));
  }
}
