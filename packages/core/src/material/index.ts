import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";
import { eq, and, inArray, ne } from "drizzle-orm";
import { db } from "../index";
import { materials, materialTextEntries, subjects } from "./material.sql";

export * from "./material.sql";

export namespace Material {
  export type Info = InferSelectModel<typeof materials>;
  export type New = InferInsertModel<typeof materials>;

  export type TextEntry = InferSelectModel<typeof materialTextEntries>;
  export type NewTextEntry = InferInsertModel<typeof materialTextEntries>;

  export type Subject = InferSelectModel<typeof subjects>;
  export type NewSubject = InferInsertModel<typeof subjects>;

  export type WithTextEntries = Info & {
    textEntries: TextEntry[];
  };

  export async function getAll(): Promise<Info[]> {
    return db.select().from(materials);
  }

  export async function getByUserId(userId: string): Promise<Info[]> {
    return db.select().from(materials).where(eq(materials.userId, userId));
  }

  export async function getById(id: string): Promise<Info | undefined> {
    const results = await db
      .select()
      .from(materials)
      .where(eq(materials.id, id))
      .limit(1);
    return results[0];
  }

  export async function getByIdAndUserId(
    id: string,
    userId: string
  ): Promise<Info | undefined> {
    const results = await db
      .select()
      .from(materials)
      .where(and(eq(materials.id, id), eq(materials.userId, userId)))
      .limit(1);
    return results[0];
  }

  export async function getWithTextEntries(
    id: string
  ): Promise<WithTextEntries | undefined> {
    const material = await getById(id);
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

  export async function getWithTextEntriesByUser(
    id: string,
    userId: string
  ): Promise<WithTextEntries | undefined> {
    const material = await getByIdAndUserId(id, userId);
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

  export async function create(data: New): Promise<Info> {
    const [material] = await db.insert(materials).values(data).returning();
    return material!;
  }

  export async function update(
    id: string,
    data: Partial<New>
  ): Promise<Info | undefined> {
    const [updated] = await db
      .update(materials)
      .set(data)
      .where(eq(materials.id, id))
      .returning();
    return updated;
  }

  export async function updateByUser(
    id: string,
    userId: string,
    data: Partial<New>
  ): Promise<Info | undefined> {
    const [updated] = await db
      .update(materials)
      .set(data)
      .where(and(eq(materials.id, id), eq(materials.userId, userId)))
      .returning();
    return updated;
  }

  export async function remove(id: string): Promise<void> {
    await db.delete(materials).where(eq(materials.id, id));
  }

  export async function removeByUser(
    id: string,
    userId: string
  ): Promise<void> {
    await db
      .delete(materials)
      .where(and(eq(materials.id, id), eq(materials.userId, userId)));
  }

  export async function getBySubject(subject: string): Promise<Info[]> {
    return db.select().from(materials).where(eq(materials.subject, subject));
  }

  export async function getBySubjectAndUser(
    subject: string,
    userId: string
  ): Promise<Info[]> {
    return db
      .select()
      .from(materials)
      .where(and(eq(materials.subject, subject), eq(materials.userId, userId)));
  }

  export async function getAllWithTextEntriesByUserId(
    userId: string
  ): Promise<WithTextEntries[]> {
    const userMaterials = await getByUserId(userId);

    const materialIds = userMaterials.map((material) => material.id);

    if (materialIds.length === 0) {
      return [];
    }

    const allTextEntries = await db
      .select()
      .from(materialTextEntries)
      .where(inArray(materialTextEntries.materialId, materialIds));

    const textEntriesByMaterialId = allTextEntries.reduce(
      (grouped, entry) => {
        const materialId = entry.materialId;
        if (!grouped[materialId]) {
          grouped[materialId] = [];
        }
        grouped[materialId].push(entry);
        return grouped;
      },
      {} as Record<string, TextEntry[]>
    );

    return userMaterials.map((material) => ({
      ...material,
      textEntries: textEntriesByMaterialId[material.id] || [],
    }));
  }

  export async function deactivateAllExcept(
    userId: string,
    exceptId?: string
  ): Promise<void> {
    if (exceptId) {
      await db
        .update(materials)
        .set({ isActive: false })
        .where(and(eq(materials.userId, userId), ne(materials.id, exceptId)));
    } else {
      await db
        .update(materials)
        .set({ isActive: false })
        .where(eq(materials.userId, userId));
    }
  }

  export async function getActiveWithTextEntriesByUserId(
    userId: string
  ): Promise<WithTextEntries | null> {
    const userMaterials = await db
      .select()
      .from(materials)
      .where(and(eq(materials.userId, userId), eq(materials.isActive, true)))
      .limit(1);

    if (userMaterials.length === 0) {
      return null;
    }

    const activeMaterial = userMaterials[0]!;

    const textEntries = await db
      .select()
      .from(materialTextEntries)
      .where(eq(materialTextEntries.materialId, activeMaterial.id));

    return {
      ...activeMaterial,
      textEntries,
    };
  }

  export namespace TextEntry {
    export async function getByMaterialId(
      materialId: string
    ): Promise<TextEntry[]> {
      return db
        .select()
        .from(materialTextEntries)
        .where(eq(materialTextEntries.materialId, materialId));
    }

    export async function add(data: NewTextEntry): Promise<TextEntry> {
      const [entry] = await db
        .insert(materialTextEntries)
        .values(data)
        .returning();
      return entry!;
    }

    export async function update(
      id: string,
      data: Partial<NewTextEntry>
    ): Promise<TextEntry | undefined> {
      const [updated] = await db
        .update(materialTextEntries)
        .set(data)
        .where(eq(materialTextEntries.id, id))
        .returning();
      return updated;
    }

    export async function remove(id: string): Promise<void> {
      await db
        .delete(materialTextEntries)
        .where(eq(materialTextEntries.id, id));
    }
  }

  export namespace Subject {
    export async function getAllSubjects(): Promise<string[]> {
      const result = await db
        .select({ subject: materials.subject })
        .from(materials)
        .groupBy(materials.subject);

      return result.map((item) => item.subject);
    }

    export async function getByUserId(userId: string): Promise<string[]> {
      const result = await db
        .select({ subject: materials.subject })
        .from(materials)
        .where(eq(materials.userId, userId))
        .groupBy(materials.subject);

      return result.map((item) => item.subject);
    }

    export async function getAllRecords(): Promise<Subject[]> {
      return db.select().from(subjects);
    }

    export async function getRecordsByUserId(
      userId: string
    ): Promise<Subject[]> {
      return db.select().from(subjects).where(eq(subjects.userId, userId));
    }

    export async function getRecordById(
      id: string
    ): Promise<Subject | undefined> {
      const results = await db
        .select()
        .from(subjects)
        .where(eq(subjects.id, id))
        .limit(1);
      return results[0];
    }

    export async function getRecordByName(
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

    export async function create(data: NewSubject): Promise<Subject> {
      const [subject] = await db.insert(subjects).values(data).returning();
      return subject!;
    }

    export async function update(
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

    export async function remove(id: string): Promise<void> {
      await db.delete(subjects).where(eq(subjects.id, id));
    }

    export async function removeByUser(
      id: string,
      userId: string
    ): Promise<void> {
      await db
        .delete(subjects)
        .where(and(eq(subjects.id, id), eq(subjects.userId, userId)));
    }
  }
}
