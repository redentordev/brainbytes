import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  Book,
  Plus,
  Trash2,
  BookOpen,
  ChevronRight,
  Tag,
  Tags,
  FileText,
  Loader2,
  AlertTriangle,
  RefreshCw,
  ServerOff,
} from "lucide-react";
import {
  useLearningMaterials,
  LearningMaterial,
  MaterialTextEntry,
} from "@/contexts/learning-material-context";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import modular components
import { ConnectionError } from "./learning-materials/connection-error";
import { SubjectManager } from "./learning-materials/subject-manager";
import { MaterialItem } from "./learning-materials/material-item";
import { AddMaterialDialog } from "./learning-materials/add-material-dialog";
import { AddTextEntryDialog } from "./learning-materials/add-text-entry-dialog";
import { AuthError } from "./learning-materials/auth-error";
import { signIn, useSession } from "@/lib/auth";

export function LearningMaterialsSidebar() {
  const queryClient = useQueryClient();
  const { isPending, data: session } = useSession();
  const {
    materials,
    activeMaterial,
    subjects,
    isLoading,
    error,
    addSubject,
    removeSubject,
    addMaterial,
    addTextEntryToMaterial,
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Check if the error is a connection error (can't reach the server)
  const isConnectionError =
    error &&
    (error.message.includes("fetch") ||
      error.message.includes("network") ||
      error.message.includes("Failed to fetch"));

  // Check if error is authentication related
  const isAuthError =
    error &&
    (error.message.includes("Unauthorized") ||
      error.message.includes("Authentication required") ||
      error.message.includes("401"));

  // Find the currently active material, if any
  const activeContextMaterial = materials.find((material) => material.isActive);

  // Use the active material from context, or the one found in materials array
  const currentActiveMaterial = activeMaterial || activeContextMaterial;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await queryClient.invalidateQueries(["materials"]);
      await queryClient.invalidateQueries(["subjects"]);
      toast.success("Data refreshed", {
        description: "Your learning materials have been refreshed.",
      });
    } catch (error) {
      toast.error("Refresh failed", {
        description: "Failed to refresh data. Please try again.",
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleLogin = () => {
    // Redirect to the login page or show a login modal
    // This depends on how your auth flow is implemented
    window.location.href = "/login"; // Replace with your actual login route
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
                "bg-blue-50 text-blue-600 border-blue-200"
            )}
          >
            <Book size={16} />
            <span className="hidden sm:inline">Materials</span>
            {currentActiveMaterial && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-blue-600 ml-1">
                1
              </span>
            )}
            <ChevronRight size={14} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center">
                <BookOpen className="mr-2" size={20} />
                Learning Materials
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="h-8 w-8"
              >
                <RefreshCw
                  size={16}
                  className={cn(
                    "text-muted-foreground",
                    isRefreshing && "animate-spin"
                  )}
                />
              </Button>
            </div>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-4 px-4">
            {isConnectionError ? (
              <ConnectionError onRetry={handleRefresh} />
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

            {/* Subject Management Section */}
            <SubjectManager
              subjects={subjects}
              selectedSubjectFilter={selectedSubjectFilter}
              setSelectedSubjectFilter={setSelectedSubjectFilter}
              addSubject={addSubject}
              removeSubject={removeSubject}
              isLoading={isLoading}
              isConnectionError={!!isConnectionError}
            />

            {/* Add Material Button */}
            <Button
              className="w-full"
              onClick={() => setIsAddDialogOpen(true)}
              disabled={!hasSubjects || !!isConnectionError}
            >
              <Plus size={16} className="mr-2" />
              Add New Material
            </Button>

            <div className="h-px bg-border" />

            {/* Materials List */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                <p className="text-sm text-muted-foreground">
                  Loading materials...
                </p>
              </div>
            ) : filteredMaterials.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
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
                    toggleMaterial={toggleMaterial}
                    removeMaterial={removeMaterial}
                    onAddTextEntry={() => {
                      setSelectedMaterialId(material.id);
                      setIsTextEntryDialogOpen(true);
                    }}
                    removeTextEntry={(entryId) =>
                      removeTextEntryFromMaterial(material.id, entryId)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Add Material Dialog */}
      <AddMaterialDialog
        isOpen={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        subjects={subjects}
        addMaterial={addMaterial}
      />

      {/* Add Text Entry Dialog */}
      <AddTextEntryDialog
        isOpen={isTextEntryDialogOpen}
        onOpenChange={setIsTextEntryDialogOpen}
        materialId={selectedMaterialId}
        addTextEntryToMaterial={addTextEntryToMaterial}
      />

      {currentActiveMaterial && (
        <div className="absolute bottom-20 left-0 right-0 mx-auto w-fit animate-fade-up">
          <div className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 border border-blue-200 shadow-sm flex items-center">
            <BookOpen size={12} className="mr-1.5" />
            Context: {currentActiveMaterial.title}
          </div>
        </div>
      )}
    </>
  );
}
