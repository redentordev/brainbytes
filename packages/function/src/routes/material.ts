import { Hono, type Context } from "hono";
import type { AuthType } from "../lib/auth";
import * as materialRepo from "../../../core/src/material/material.repository";
import {
  type NewMaterial,
  type NewMaterialTextEntry,
  type NewSubject,
} from "../../../core/src/material";

const router = new Hono();

const requireAuth = async (c: Context, next: () => Promise<void>) => {
  const session = c.get("session");
  if (!session) return c.json({ error: "Unauthorized" }, 401);
  await next();
};

router.get("/materials", requireAuth, async (c) => {
  try {
    const user = c.get("user");
    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const materials = await materialRepo.getAllMaterialsWithTextEntriesByUserId(
      user.id
    );
    return c.json({ materials });
  } catch (error) {
    console.error("Error fetching materials:", error);
    return c.json({ error: "Failed to fetch materials" }, 500);
  }
});

router.get("/materials/:id", requireAuth, async (c) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const material = await materialRepo.getMaterialWithTextEntriesByUser(
      id,
      user.id
    );

    if (!material) {
      return c.json({ error: "Material not found" }, 404);
    }

    return c.json({ material });
  } catch (error) {
    console.error("Error fetching material:", error);
    return c.json({ error: "Failed to fetch material" }, 500);
  }
});

router.post("/materials", requireAuth, async (c) => {
  try {
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const data = await c.req.json();

    if (!data.title) {
      return c.json({ error: "Title is required" }, 400);
    }
    if (!data.subject) {
      return c.json({ error: "Subject is required" }, 400);
    }

    const materialData: NewMaterial = {
      ...data,
      userId: user.id,
    };

    const material = await materialRepo.createMaterial(materialData);
    return c.json({ material }, 201);
  } catch (error) {
    console.error("Error creating material:", error);
    return c.json({ error: "Failed to create material" }, 500);
  }
});

router.put("/materials/:id", requireAuth, async (c) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const data = await c.req.json();

    if (data.title === "") {
      return c.json({ error: "Title cannot be empty" }, 400);
    }
    if (data.subject === "") {
      return c.json({ error: "Subject cannot be empty" }, 400);
    }

    if (data.isActive === true) {
      await materialRepo.deactivateAllMaterialsExcept(user.id, id);
    }

    const material = await materialRepo.updateMaterialByUser(id, user.id, data);

    if (!material) {
      return c.json(
        {
          error: "Material not found or you don't have permission to update it",
        },
        404
      );
    }

    return c.json({ material });
  } catch (error) {
    console.error("Error updating material:", error);
    return c.json({ error: "Failed to update material" }, 500);
  }
});

router.delete("/materials/:id", requireAuth, async (c) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    await materialRepo.deleteMaterialByUser(id, user.id);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting material:", error);
    return c.json({ error: "Failed to delete material" }, 500);
  }
});

router.get("/materials/:materialId/entries", requireAuth, async (c) => {
  try {
    const materialId = c.req.param("materialId");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const material = await materialRepo.getMaterialByIdAndUserId(
      materialId,
      user.id
    );
    if (!material) {
      return c.json(
        {
          error: "Material not found or you don't have permission to access it",
        },
        404
      );
    }

    const entries = await materialRepo.getTextEntriesByMaterialId(materialId);
    return c.json({ entries });
  } catch (error) {
    console.error("Error fetching text entries:", error);
    return c.json({ error: "Failed to fetch text entries" }, 500);
  }
});

router.post("/materials/:materialId/entries", requireAuth, async (c) => {
  try {
    const materialId = c.req.param("materialId");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const data = await c.req.json();

    if (!data.title) {
      return c.json({ error: "Title is required" }, 400);
    }
    if (!data.content) {
      return c.json({ error: "Content is required" }, 400);
    }

    const material = await materialRepo.getMaterialByIdAndUserId(
      materialId,
      user.id
    );
    if (!material) {
      return c.json(
        {
          error: "Material not found or you don't have permission to modify it",
        },
        404
      );
    }

    const entry = await materialRepo.addTextEntry({
      ...data,
      materialId,
    } as NewMaterialTextEntry);

    return c.json({ entry }, 201);
  } catch (error) {
    console.error("Error creating text entry:", error);
    return c.json({ error: "Failed to create text entry" }, 500);
  }
});

router.put(
  "/materials/:materialId/entries/:entryId",
  requireAuth,
  async (c) => {
    try {
      const materialId = c.req.param("materialId");
      const entryId = c.req.param("entryId");
      const user = c.get("user");

      if (!user || !user.id) {
        return c.json({ error: "User not found" }, 401);
      }

      const material = await materialRepo.getMaterialByIdAndUserId(
        materialId,
        user.id
      );
      if (!material) {
        return c.json(
          {
            error:
              "Material not found or you don't have permission to modify it",
          },
          404
        );
      }

      const data = await c.req.json();

      if (data.title === "") {
        return c.json({ error: "Title cannot be empty" }, 400);
      }
      if (data.content === "") {
        return c.json({ error: "Content cannot be empty" }, 400);
      }

      const entry = await materialRepo.updateTextEntry(
        entryId,
        data as Partial<NewMaterialTextEntry>
      );

      if (!entry) {
        return c.json({ error: "Text entry not found" }, 404);
      }

      return c.json({ entry });
    } catch (error) {
      console.error("Error updating text entry:", error);
      return c.json({ error: "Failed to update text entry" }, 500);
    }
  }
);

router.delete(
  "/materials/:materialId/entries/:entryId",
  requireAuth,
  async (c) => {
    try {
      const materialId = c.req.param("materialId");
      const entryId = c.req.param("entryId");
      const user = c.get("user");

      if (!user || !user.id) {
        return c.json({ error: "User not found" }, 401);
      }

      const material = await materialRepo.getMaterialByIdAndUserId(
        materialId,
        user.id
      );
      if (!material) {
        return c.json(
          {
            error:
              "Material not found or you don't have permission to modify it",
          },
          404
        );
      }

      await materialRepo.removeTextEntry(entryId);
      return c.json({ success: true });
    } catch (error) {
      console.error("Error deleting text entry:", error);
      return c.json({ error: "Failed to delete text entry" }, 500);
    }
  }
);

router.get("/subjects", requireAuth, async (c) => {
  try {
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const subjects = await materialRepo.getSubjectsByUserId(user.id);
    return c.json({ subjects });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return c.json({ error: "Failed to fetch subjects" }, 500);
  }
});

router.get("/materials/subject/:subject", requireAuth, async (c) => {
  try {
    const subject = c.req.param("subject");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const materials = await materialRepo.getMaterialsBySubjectAndUser(
      subject,
      user.id
    );
    return c.json({ materials });
  } catch (error) {
    console.error("Error fetching materials by subject:", error);
    return c.json({ error: "Failed to fetch materials by subject" }, 500);
  }
});

router.get("/subject-records", requireAuth, async (c) => {
  try {
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const subjects = await materialRepo.getSubjectRecordsByUserId(user.id);
    return c.json({ subjects });
  } catch (error) {
    console.error("Error fetching subject records:", error);
    return c.json({ error: "Failed to fetch subject records" }, 500);
  }
});

router.post("/subject-records", requireAuth, async (c) => {
  try {
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const data = await c.req.json();

    if (!data.name) {
      return c.json({ error: "Subject name is required" }, 400);
    }

    const existingSubject = await materialRepo.getSubjectRecordByName(
      data.name,
      user.id
    );
    if (existingSubject) {
      return c.json({ error: "Subject with this name already exists" }, 400);
    }

    const subjectData: NewSubject = {
      name: data.name,
      userId: user.id,
    };

    const subject = await materialRepo.createSubject(subjectData);
    return c.json({ subject }, 201);
  } catch (error) {
    console.error("Error creating subject:", error);
    return c.json({ error: "Failed to create subject" }, 500);
  }
});

router.put("/subject-records/:id", requireAuth, async (c) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    const data = await c.req.json();

    if (!data.name) {
      return c.json({ error: "Subject name is required" }, 400);
    }

    const subject = await materialRepo.getSubjectRecordById(id);
    if (!subject || subject.userId !== user.id) {
      return c.json(
        {
          error: "Subject not found or you don't have permission to update it",
        },
        404
      );
    }

    if (data.name !== subject.name) {
      const existingSubject = await materialRepo.getSubjectRecordByName(
        data.name,
        user.id
      );
      if (existingSubject) {
        return c.json({ error: "Subject with this name already exists" }, 400);
      }
    }

    const updatedSubject = await materialRepo.updateSubject(id, {
      name: data.name,
    });

    if (!updatedSubject) {
      return c.json({ error: "Failed to update subject" }, 500);
    }

    return c.json({ subject: updatedSubject });
  } catch (error) {
    console.error("Error updating subject:", error);
    return c.json({ error: "Failed to update subject" }, 500);
  }
});

router.delete("/subject-records/:id", requireAuth, async (c) => {
  try {
    const id = c.req.param("id");
    const user = c.get("user");

    if (!user || !user.id) {
      return c.json({ error: "User not found" }, 401);
    }

    await materialRepo.deleteSubjectByUser(id, user.id);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return c.json({ error: "Failed to delete subject" }, 500);
  }
});

export default router;
