import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Book,
  Plus,
  BookOpen,
  ChevronRight,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { useLearningMaterials } from "@/contexts/learning-material-context";
import { cn } from "@/lib/utils";
import { useQueryClient } from "react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { SubjectManager } from "./subject-manager";
import { MaterialItem } from "./material-item";
import { AddMaterialDialog } from "./add-material-dialog";
import { AddTextEntryDialog } from "./add-text-entry-dialog";
import { AuthError } from "./auth-error";

export function LearningMaterialsSidebar() {
  const {
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
    toggleMaterial,
    removeMaterial,
    removeTextEntryFromMaterial,
  } = useLearningMaterials();
  const [isOpen, setIsOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null
  );
  const [isTextEntryDialogOpen, setIsTextEntryDialogOpen] = useState(false);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<
    string | null
  >(null);

  const isConnectionError =
    error &&
    (error.message.includes("fetch") ||
      error.message.includes("network") ||
      error.message.includes("Failed to fetch"));

  const isAuthError =
    error &&
    (error.message.includes("Unauthorized") ||
      error.message.includes("Authentication required") ||
      error.message.includes("401"));

  const activeContextMaterial = materials.find((material) => material.isActive);

  const currentActiveMaterial = activeMaterial || activeContextMaterial;

  const handleLogin = () => {
    window.location.href = "/";
  };

  const filteredMaterials = selectedSubjectFilter
    ? materials.filter((material) => material.subject === selectedSubjectFilter)
    : materials;

  const hasSubjects = subjects.length > 0;

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "flex items-center gap-1 mr-2",
              currentActiveMaterial &&
                "bg-primary/10 text-primary border-primary/20"
            )}
          >
            <Book size={16} />
            <span className="hidden sm:inline">Materials</span>
            {currentActiveMaterial && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary ml-1">
                1
              </span>
            )}
            <ChevronRight size={14} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px] bg-sidebar text-sidebar-foreground"
        >
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center text-sidebar-foreground">
                <BookOpen className="mr-2" size={20} />
                Learning Materials
              </SheetTitle>
            </div>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-4 px-4">
            {isConnectionError ? (
              <> </>
            ) : isAuthError ? (
              <AuthError onLogin={handleLogin} />
            ) : error && !isConnectionError && !isAuthError ? (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  {error.message === "Unauthorized. Please log in first."
                    ? "Please log in to access your materials."
                    : "There was a problem loading your data. Try refreshing."}
                </AlertDescription>
              </Alert>
            ) : null}

            <SubjectManager
              subjects={subjects}
              selectedSubjectFilter={selectedSubjectFilter}
              setSelectedSubjectFilter={setSelectedSubjectFilter}
              addSubject={addSubject}
              removeSubject={removeSubject}
              isLoading={isLoading}
              isConnectionError={!!isConnectionError}
            />

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsAddDialogOpen(true)}
              disabled={!hasSubjects || !!isConnectionError}
            >
              <Plus size={16} className="mr-2" />
              Add New Material
            </Button>

            <div className="h-px bg-sidebar-border" />

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin mb-2 text-foreground" />
                <p className="text-sm text-foreground/60">
                  Loading materials...
                </p>
              </div>
            ) : filteredMaterials.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center text-sidebar-foreground/60">
                <BookOpen
                  size={40}
                  strokeWidth={1}
                  className="mb-2 opacity-40"
                />
                {!hasSubjects ? (
                  <>
                    <p>Start by adding a subject first</p>
                    <p className="text-xs mt-1">
                      You need to create a subject before adding materials
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      No learning materials{" "}
                      {selectedSubjectFilter
                        ? `for ${selectedSubjectFilter}`
                        : ""}
                    </p>
                    <p className="text-xs mt-1">
                      Add your first material to get started
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMaterials.map((material) => (
                  <MaterialItem
                    key={material.id}
                    material={material}
                    subjects={subjects}
                    toggleMaterial={toggleMaterial}
                    removeMaterial={removeMaterial}
                    updateMaterial={updateMaterial}
                    onAddTextEntry={() => {
                      setSelectedMaterialId(material.id);
                      setIsTextEntryDialogOpen(true);
                    }}
                    removeTextEntry={(entryId) =>
                      removeTextEntryFromMaterial(material.id, entryId)
                    }
                    updateTextEntry={updateTextEntry}
                  />
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <AddMaterialDialog
        isOpen={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        subjects={subjects}
        addMaterial={addMaterial}
      />

      <AddTextEntryDialog
        isOpen={isTextEntryDialogOpen}
        onOpenChange={setIsTextEntryDialogOpen}
        materialId={selectedMaterialId}
        addTextEntryToMaterial={addTextEntryToMaterial}
      />
    </>
  );
}
