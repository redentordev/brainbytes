import React, { useState } from "react";
import { FileText, Loader2, Tag, Trash2, Edit, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  LearningMaterial,
  MaterialTextEntry,
} from "@/contexts/learning-material-context";
import { cn } from "@/lib/utils";
import { TextEntryItem } from "./text-entry-item";
import { EditMaterialDialog } from "./edit-material-dialog";
import { EditTextEntryDialog } from "./edit-text-entry-dialog";

interface MaterialItemProps {
  material: LearningMaterial;
  subjects: string[];
  toggleMaterial: (id: string) => void;
  removeMaterial: (id: string) => Promise<void>;
  updateMaterial: (
    id: string,
    title: string,
    description: string,
    subject: string
  ) => Promise<void>;
  onAddTextEntry: () => void;
  removeTextEntry: (entryId: string) => Promise<void>;
  updateTextEntry: (
    materialId: string,
    entryId: string,
    title: string,
    content: string
  ) => Promise<void>;
}

export function MaterialItem({
  material,
  subjects,
  toggleMaterial,
  removeMaterial,
  updateMaterial,
  onAddTextEntry,
  removeTextEntry,
  updateTextEntry,
}: MaterialItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTextEntries, setShowTextEntries] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditMaterialDialogOpen, setIsEditMaterialDialogOpen] =
    useState(false);
  const [isEditTextEntryDialogOpen, setIsEditTextEntryDialogOpen] =
    useState(false);
  const [selectedTextEntry, setSelectedTextEntry] =
    useState<MaterialTextEntry | null>(null);

  const handleToggle = () => {
    toggleMaterial(material.id);

    toast(
      material.isActive
        ? "Context deactivated"
        : `"${material.title}" context is now active`,
      {
        description: material.isActive
          ? "Default context is now active"
          : `"${material.title}" context is now active`,
      }
    );
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await removeMaterial(material.id);

      toast.success("Material removed", {
        description: "The learning material has been removed.",
      });
    } catch (error) {
      // Error is already handled in the context
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditTextEntry = (entry: MaterialTextEntry) => {
    setSelectedTextEntry(entry);
    setIsEditTextEntryDialogOpen(true);
  };

  return (
    <div
      className={cn(
        "rounded-lg border p-3 transition-all",
        material.isActive && "border-blue-200 bg-blue-50"
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{material.title}</h3>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setIsEditMaterialDialogOpen(true)}
          >
            <Edit size={14} className="text-muted-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Trash2 size={14} className="text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
      {material.subject && (
        <div className="mt-1 flex items-center">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex items-center">
            <Tag size={10} className="mr-1" />
            {material.subject}
          </span>
        </div>
      )}
      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
        {material.description}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {new Date(material.dateAdded).toLocaleDateString()}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">
            {material.isActive ? "Active" : "Inactive"}
          </span>
          <Switch checked={material.isActive} onCheckedChange={handleToggle} />
        </div>
      </div>

      <div className="mt-3">
        <Button
          variant="outline"
          size="sm"
          className="text-sm w-full"
          onClick={onAddTextEntry}
        >
          <FileText size={14} className="mr-2" />
          Add Text Entry
        </Button>
      </div>

      {/* Text Entries Section */}
      {material.textEntries && material.textEntries.length > 0 ? (
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTextEntries(!showTextEntries)}
              className="text-xs p-1 h-auto"
            >
              {showTextEntries ? "Hide Text Entries" : "Show Text Entries"} (
              {material.textEntries.length})
            </Button>
          </div>

          {showTextEntries && (
            <div className="mt-2 space-y-2 max-h-60 overflow-y-auto p-2 bg-gray-50 rounded-md">
              {material.textEntries.map((entry) => (
                <TextEntryItem
                  key={entry.id}
                  entry={entry}
                  onRemove={() => removeTextEntry(entry.id)}
                  onEdit={() => handleEditTextEntry(entry)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-3 text-xs text-gray-500 p-2 bg-gray-50 rounded-md text-center">
          No text entries yet. Add your first entry above.
        </div>
      )}

      {/* Edit Material Dialog */}
      <EditMaterialDialog
        isOpen={isEditMaterialDialogOpen}
        onOpenChange={setIsEditMaterialDialogOpen}
        material={material}
        subjects={subjects}
        updateMaterial={updateMaterial}
      />

      {/* Edit Text Entry Dialog */}
      <EditTextEntryDialog
        isOpen={isEditTextEntryDialogOpen}
        onOpenChange={setIsEditTextEntryDialogOpen}
        materialId={material.id}
        textEntry={selectedTextEntry}
        updateTextEntry={updateTextEntry}
      />
    </div>
  );
}
