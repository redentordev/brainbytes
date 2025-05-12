import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LearningMaterial } from "@/contexts/learning-material-context";

interface EditMaterialDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  material: LearningMaterial | null;
  subjects: string[];
  updateMaterial: (
    id: string,
    title: string,
    description: string,
    subject: string
  ) => Promise<void>;
}

export function EditMaterialDialog({
  isOpen,
  onOpenChange,
  material,
  subjects,
  updateMaterial,
}: EditMaterialDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form fields when material changes
  useEffect(() => {
    if (material) {
      setTitle(material.title);
      setDescription(material.description);
      setSubject(material.subject);
    }
  }, [material]);

  const handleUpdateMaterial = async () => {
    if (!material) return;

    if (!title.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your learning material.",
      });
      return;
    }

    if (!subject) {
      toast.error("Subject required", {
        description: "Please select a subject for your material.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await updateMaterial(material.id, title, description, subject);
      onOpenChange(false);

      toast.success("Material updated", {
        description: "Your learning material has been updated successfully.",
      });
    } catch (error) {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dialog handler (to reset form on close)
  const handleOpenChange = (open: boolean) => {
    if (!open && material) {
      // Reset to original values if closing
      setTitle(material.title);
      setDescription(material.description);
      setSubject(material.subject);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Learning Material</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              placeholder="e.g., Algebra Basics"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Input
              id="description"
              placeholder="Brief description of the material"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            {subjects.length > 0 ? (
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subjectName) => (
                    <SelectItem key={subjectName} value={subjectName}>
                      {subjectName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <div className="text-sm text-amber-600 p-2 bg-amber-50 rounded-md">
                Please add a subject first before creating a material.
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateMaterial}
            disabled={isSubmitting || subjects.length === 0}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Material"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
