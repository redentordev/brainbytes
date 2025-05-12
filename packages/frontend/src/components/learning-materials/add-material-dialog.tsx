import React, { useState } from "react";
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

interface AddMaterialDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  subjects: string[];
  addMaterial: (
    title: string,
    description: string,
    subject: string
  ) => Promise<string>;
}

export function AddMaterialDialog({
  isOpen,
  onOpenChange,
  subjects,
  addMaterial,
}: AddMaterialDialogProps) {
  const [newMaterialTitle, setNewMaterialTitle] = useState("");
  const [newMaterialDescription, setNewMaterialDescription] = useState("");
  const [newMaterialSubject, setNewMaterialSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddMaterial = async () => {
    if (!newMaterialTitle.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your learning material.",
      });
      return;
    }

    if (!newMaterialSubject) {
      toast.error("Subject required", {
        description: "Please select a subject for your material.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await addMaterial(
        newMaterialTitle,
        newMaterialDescription,
        newMaterialSubject
      );
      setNewMaterialTitle("");
      setNewMaterialDescription("");
      setNewMaterialSubject("");
      onOpenChange(false);

      toast.success("Material added", {
        description: "Your learning material has been added successfully.",
      });
    } catch (error) {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Learning Material</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              placeholder="e.g., Algebra Basics"
              value={newMaterialTitle}
              onChange={(e) => setNewMaterialTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Input
              id="description"
              placeholder="Brief description of the material"
              value={newMaterialDescription}
              onChange={(e) => setNewMaterialDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            {subjects.length > 0 ? (
              <Select
                value={newMaterialSubject}
                onValueChange={setNewMaterialSubject}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
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
            onClick={handleAddMaterial}
            disabled={isSubmitting || subjects.length === 0}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Material"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
