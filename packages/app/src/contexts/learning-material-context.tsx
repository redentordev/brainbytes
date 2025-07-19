"use client";

import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";

export interface MaterialTextEntry {
  id: string;
  title: string;
  content: string;
  dateAdded: Date;
}

export interface MaterialFileEntry {
  id: string;
  title: string;
  fileName: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  dateAdded: Date;
}

export interface LearningMaterial {
  id: string;
  title: string;
  description: string;
  subject: string;
  isActive: boolean;
  dateAdded: Date;
  textEntries: MaterialTextEntry[];
  fileEntries: MaterialFileEntry[];
}

export interface Subject {
  id: string;
  name: string;
  userId: string;
}

interface LearningMaterialsContextType {
  materials: LearningMaterial[];
  activeMaterial: LearningMaterial | null;
  subjects: string[];
  isLoading: boolean;
  error: Error | null;
  addSubject: (subject: string) => Promise<void>;
  removeSubject: (subject: string) => Promise<void>;
  addMaterial: (
    title: string,
    description: string,
    subject: string
  ) => Promise<string>;
  updateMaterial: (
    id: string,
    title: string,
    description: string,
    subject: string
  ) => Promise<void>;
  addTextEntryToMaterial: (
    materialId: string,
    title: string,
    content: string
  ) => Promise<void>;
  updateTextEntry: (
    materialId: string,
    entryId: string,
    title: string,
    content: string
  ) => Promise<void>;
  removeTextEntryFromMaterial: (
    materialId: string,
    entryId: string
  ) => Promise<void>;
  addFileEntryToMaterial: (
    materialId: string,
    title: string,
    file: File
  ) => Promise<void>;
  removeFileEntryFromMaterial: (
    materialId: string,
    fileId: string
  ) => Promise<void>;
  toggleMaterial: (id: string) => void;
  removeMaterial: (id: string) => Promise<void>;
}

const LearningMaterialsContext = createContext<
  LearningMaterialsContextType | undefined
>(undefined);

const API_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api`;

// Helper function to safely fetch data with error handling
const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include", // Always include credentials
      headers: {
        ...options?.headers,
        "Content-Type": "application/json",
      },
    });

    // Handle unauthorized error specifically
    if (response.status === 401) {
      throw new Error("Unauthorized. Please log in first.");
    }

    // If we get a 404, it might just mean there's no data yet
    if (response.status === 404) {
      return { data: [] };
    }

    // For other errors
    if (!response.ok) {
      // Try to get the error message from the response
      try {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.status}`);
      } catch {
        throw new Error(`Server error: ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    // If we're fetching a list endpoint, return empty array instead of throwing
    if (url.endsWith("/materials") || url.endsWith("/subjects")) {
      return { materials: [], subjects: [] };
    }
    throw error;
  }
};

export function LearningMaterialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [activeMaterial, setActiveMaterial] =
    React.useState<LearningMaterial | null>(null);

  const {
    data: materials = [],
    isLoading: isMaterialsLoading,
    error: materialsError,
  } = useQuery<LearningMaterial[], Error>(
    ["materials"],
    async () => {
      const data = await fetchWithErrorHandling(`${API_URL}/materials`);
      return data.materials || [];
    },
    {
      enabled: !!session,
      onError: (error) => {
        console.error("Failed to fetch materials:", error);
        if (!(error instanceof TypeError && error.message.includes("fetch"))) {
          toast.error("Couldn't load materials", {
            description: "Start by creating a subject and then add materials",
          });
        }
      },
      retry: 1,
      retryDelay: 10000,
    }
  );

  // Fetch subjects
  const {
    data: subjectRecords = [],
    isLoading: isSubjectsLoading,
    error: subjectsError,
  } = useQuery<Subject[], Error>(
    ["subjects"],
    async () => {
      const data = await fetchWithErrorHandling(`${API_URL}/subject-records`);
      return data.subjects || [];
    },
    {
      enabled: !!session, // Only run query when session exists
      onError: (error) => {
        console.error("Failed to fetch subjects:", error);
        // Only show toast for errors other than network errors
        if (!(error instanceof TypeError && error.message.includes("fetch"))) {
          toast.error("Couldn't load subjects", {
            description: "Please create a subject first",
          });
        }
      },
      retry: 1,
      retryDelay: 1000,
    }
  );

  // Extract just the subject names for easier use in components
  const subjects = React.useMemo(
    () => subjectRecords.map((subject) => subject.name),
    [subjectRecords]
  );

  // Add material mutation
  const addMaterialMutation = useMutation<
    string,
    Error,
    { title: string; description: string; subject: string }
  >(
    async ({ title, description, subject }) => {
      try {
        const response = await fetch(`${API_URL}/materials`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Ensure cookies are sent
          body: JSON.stringify({ title, description, subject }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to add material");
        }

        const data = await response.json();
        return data.material?.id || "";
      } catch (error) {
        console.error("Error adding material:", error);
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["materials"]);
      },
      onError: (error) => {
        toast.error("Failed to add material", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Add subject mutation
  const addSubjectMutation = useMutation<void, Error, string>(
    async (subject) => {
      try {
        const response = await fetch(`${API_URL}/subject-records`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Ensure cookies are sent
          body: JSON.stringify({ name: subject }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to add subject");
        }
      } catch (error) {
        console.error("Error adding subject:", error);
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["subjects"]);
      },
      onError: (error) => {
        toast.error("Failed to add subject", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Remove subject mutation
  const removeSubjectMutation = useMutation<void, Error, string>(
    async (subjectName) => {
      try {
        // Find the subject record by name
        const subjectRecord = subjectRecords.find(
          (s) => s.name === subjectName
        );

        if (!subjectRecord) {
          throw new Error("Subject not found");
        }

        const response = await fetch(
          `${API_URL}/subject-records/${subjectRecord.id}`,
          {
            method: "DELETE",
            credentials: "include", // Ensure cookies are sent
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to remove subject");
        }
      } catch (error) {
        console.error("Error removing subject:", error);
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Failed to remove subject");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["subjects"]);
        queryClient.invalidateQueries(["materials"]);
      },
      onError: (error) => {
        toast.error("Failed to remove subject", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Add text entry mutation
  const addTextEntryMutation = useMutation<
    void,
    Error,
    { materialId: string; title: string; content: string }
  >(
    async ({ materialId, title, content }) => {
      try {
        const response = await fetch(
          `${API_URL}/materials/${materialId}/entries`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Ensure cookies are sent
            body: JSON.stringify({ title, content }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to add text entry");
        }
      } catch (error) {
        console.error("Error adding text entry:", error);
        throw error;
      }
    },
    {
      onSuccess: (_, variables) => {
        // Force a complete refetch of all materials to ensure text entries are updated
        queryClient.invalidateQueries(["materials"]);

        // Also refetch the specific material that was updated
        queryClient.invalidateQueries(["materials", variables.materialId]);
      },
      onError: (error) => {
        toast.error("Failed to add text entry", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Remove text entry mutation
  const removeTextEntryMutation = useMutation<
    void,
    Error,
    { materialId: string; entryId: string }
  >(
    async ({ materialId, entryId }) => {
      try {
        const response = await fetch(
          `${API_URL}/materials/${materialId}/entries/${entryId}`,
          {
            method: "DELETE",
            credentials: "include", // Ensure cookies are sent
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to remove text entry");
        }
      } catch (error) {
        console.error("Error removing text entry:", error);
        throw error;
      }
    },
    {
      onSuccess: (_, variables) => {
        // Force a complete refetch of all materials to ensure text entries are updated
        queryClient.invalidateQueries(["materials"]);

        // Also refetch the specific material that was updated
        queryClient.invalidateQueries(["materials", variables.materialId]);
      },
      onError: (error) => {
        toast.error("Failed to remove text entry", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Remove material mutation
  const removeMaterialMutation = useMutation<void, Error, string>(
    async (id) => {
      try {
        const response = await fetch(`${API_URL}/materials/${id}`, {
          method: "DELETE",
          credentials: "include", // Ensure cookies are sent
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to remove material");
        }
      } catch (error) {
        console.error("Error removing material:", error);
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["materials"]);
        if (activeMaterial?.id === removeMaterialMutation.variables) {
          setActiveMaterial(null);
        }
      },
      onError: (error) => {
        toast.error("Failed to remove material", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Add an update material mutation
  const updateMaterialMutation = useMutation<
    void,
    Error,
    { id: string; title: string; description: string; subject: string }
  >(
    async ({ id, title, description, subject }) => {
      try {
        const response = await fetch(`${API_URL}/materials/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ title, description, subject }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to update material");
        }
      } catch (error) {
        console.error("Error updating material:", error);
        throw error;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["materials"]);
      },
      onError: (error) => {
        toast.error("Failed to update material", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  // Add an update text entry mutation
  const updateTextEntryMutation = useMutation<
    void,
    Error,
    { materialId: string; entryId: string; title: string; content: string }
  >(
    async ({ materialId, entryId, title, content }) => {
      try {
        const response = await fetch(
          `${API_URL}/materials/${materialId}/entries/${entryId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ title, content }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Failed to update text entry");
        }
      } catch (error) {
        console.error("Error updating text entry:", error);
        throw error;
      }
    },
    {
      onSuccess: (_, variables) => {
        // Force a complete refetch of all materials to ensure text entries are updated
        queryClient.invalidateQueries(["materials"]);

        // Also refetch the specific material that was updated
        queryClient.invalidateQueries(["materials", variables.materialId]);
      },
      onError: (error) => {
        toast.error("Failed to update text entry", {
          description: error.message || "Please try again",
        });
      },
    }
  );

  const addMaterial = async (
    title: string,
    description: string,
    subject: string
  ): Promise<string> => {
    if (!subject) {
      toast.error("Subject required", {
        description: "Please select or create a subject first",
      });
      throw new Error("Subject required");
    }
    return await addMaterialMutation.mutateAsync({
      title,
      description,
      subject,
    });
  };

  const addSubject = async (subject: string): Promise<void> => {
    if (!session) {
      toast.error("Authentication required", {
        description: "Please sign in to add subjects",
      });
      throw new Error("Authentication required");
    }
    await addSubjectMutation.mutateAsync(subject);
  };

  const removeSubject = async (subject: string): Promise<void> => {
    await removeSubjectMutation.mutateAsync(subject);
  };

  const addTextEntryToMaterial = async (
    materialId: string,
    title: string,
    content: string
  ): Promise<void> => {
    await addTextEntryMutation.mutateAsync({ materialId, title, content });
  };

  const removeTextEntryFromMaterial = async (
    materialId: string,
    entryId: string
  ): Promise<void> => {
    await removeTextEntryMutation.mutateAsync({ materialId, entryId });
  };

  const toggleMaterial = (id: string) => {
    const material = materials.find((m) => m.id === id);
    if (material) {
      // If this material is already active and we're turning it off
      if (material.isActive) {
        // Update local state
        setActiveMaterial(null);

        // Update the active status in the database
        fetch(`${API_URL}/materials/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ isActive: false }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update material status");
            }
            queryClient.invalidateQueries(["materials"]);
          })
          .catch((error) => {
            console.error("Error updating material status:", error);
            toast.error("Failed to update material status", {
              description: "Please try again",
            });
            setActiveMaterial(material); // Revert UI change
          });
      }
      // If we're activating this material
      else {
        // Update local state immediately for all materials
        // Deactivate any currently active material in the UI
        const currentlyActiveMaterial = materials.find((m) => m.isActive);

        // Create a new material object with active state
        const updatedMaterial = {
          ...material,
          isActive: true,
        };

        // Set as active material
        setActiveMaterial(updatedMaterial);

        // Update the active status in the database
        // The backend will handle deactivating all other materials
        fetch(`${API_URL}/materials/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ isActive: true }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update material status");
            }
            queryClient.invalidateQueries(["materials"]);
          })
          .catch((error) => {
            console.error("Error updating material status:", error);
            toast.error("Failed to update material status", {
              description: "Please try again",
            });

            // Revert UI change if the API call failed
            if (currentlyActiveMaterial) {
              setActiveMaterial(currentlyActiveMaterial);
            } else {
              setActiveMaterial(null);
            }
          });
      }
    } else {
      setActiveMaterial(null);
    }
  };

  const removeMaterial = async (id: string): Promise<void> => {
    await removeMaterialMutation.mutateAsync(id);
  };

  const updateMaterial = async (
    id: string,
    title: string,
    description: string,
    subject: string
  ): Promise<void> => {
    if (!title.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your learning material.",
      });
      throw new Error("Title required");
    }

    if (!subject) {
      toast.error("Subject required", {
        description: "Please select a subject for your material.",
      });
      throw new Error("Subject required");
    }

    await updateMaterialMutation.mutateAsync({
      id,
      title,
      description,
      subject,
    });
  };

  const updateTextEntry = async (
    materialId: string,
    entryId: string,
    title: string,
    content: string
  ): Promise<void> => {
    if (!title.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your text entry.",
      });
      throw new Error("Title required");
    }

    if (!content.trim()) {
      toast.error("Content required", {
        description: "Please provide content for your text entry.",
      });
      throw new Error("Content required");
    }

    await updateTextEntryMutation.mutateAsync({
      materialId,
      entryId,
      title,
      content,
    });
  };

  const addFileEntryToMaterial = async (
    materialId: string,
    title: string,
    file: File
  ): Promise<void> => {
    try {
      // Step 1: Get presigned URL
      const uploadUrlResponse = await fetch(
        `${API_URL}/materials/${materialId}/files/upload-url`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
          }),
        }
      );

      if (!uploadUrlResponse.ok) {
        const errorData = await uploadUrlResponse.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get upload URL");
      }

      const { uploadUrl, fileKey, fileName } = await uploadUrlResponse.json();

      // Step 2: Upload file to S3
      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
          "Content-Disposition": `attachment; filename="${file.name}"`,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file to S3");
      }

      // Step 3: Save file entry to database
      const saveResponse = await fetch(
        `${API_URL}/materials/${materialId}/files`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title,
            fileName,
            fileKey,
            fileSize: file.size.toString(),
            fileType: file.type,
          }),
        }
      );

      if (!saveResponse.ok) {
        const errorData = await saveResponse.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to save file entry");
      }

      // Refresh materials
      queryClient.invalidateQueries(["materials"]);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
      throw error;
    }
  };

  const removeFileEntryFromMaterial = async (
    materialId: string,
    fileId: string
  ): Promise<void> => {
    try {
      const response = await fetch(
        `${API_URL}/materials/${materialId}/files?fileId=${fileId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to remove file");
      }

      // Refresh materials
      queryClient.invalidateQueries(["materials"]);
    } catch (error) {
      console.error("Error removing file:", error);
      toast.error("Failed to remove file", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
      throw error;
    }
  };

  const isLoading = isMaterialsLoading || isSubjectsLoading;
  const error = materialsError || subjectsError;

  return (
    <LearningMaterialsContext.Provider
      value={{
        materials,
        activeMaterial,
        subjects,
        isLoading,
        error,
        addSubject,
        removeSubject,
        addMaterial,
        updateMaterial,
        addTextEntryToMaterial,
        updateTextEntry,
        removeTextEntryFromMaterial,
        addFileEntryToMaterial,
        removeFileEntryFromMaterial,
        toggleMaterial,
        removeMaterial,
      }}
    >
      {children}
    </LearningMaterialsContext.Provider>
  );
}

export const useLearningMaterials = () => {
  const context = useContext(LearningMaterialsContext);
  if (context === undefined) {
    throw new Error(
      "useLearningMaterials must be used within a LearningMaterialsProvider"
    );
  }
  return context;
};
