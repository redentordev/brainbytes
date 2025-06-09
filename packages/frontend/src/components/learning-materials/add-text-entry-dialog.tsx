import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface AddTextEntryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  materialId: string | null;
  addTextEntryToMaterial: (
    materialId: string,
    title: string,
    content: string
  ) => Promise<void>;
}

export function AddTextEntryDialog({
  isOpen,
  onOpenChange,
  materialId,
  addTextEntryToMaterial,
}: AddTextEntryDialogProps) {
  const [newEntryTitle, setNewEntryTitle] = useState("");
  const [newEntryContent, setNewEntryContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddTextEntry = async () => {
    if (!materialId) return;

    if (!newEntryTitle.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your text entry.",
      });
      return;
    }

    if (!newEntryContent.trim()) {
      toast.error("Content required", {
        description: "Please provide some content for your text entry.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await addTextEntryToMaterial(materialId, newEntryTitle, newEntryContent);
      setNewEntryTitle("");
      setNewEntryContent("");
      onOpenChange(false);

      toast.success("Text entry added", {
        description: "Your text entry has been added to the material.",
      });
    } catch {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Text Entry</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="entry-title" className="text-sm font-medium">
              Entry Title
            </label>
            <Input
              id="entry-title"
              placeholder="e.g., Key Concepts"
              value={newEntryTitle}
              onChange={(e) => setNewEntryTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="entry-content" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="entry-content"
              placeholder="Enter your text content here..."
              className="h-40"
              value={newEntryContent}
              onChange={(e) => setNewEntryContent(e.target.value)}
            />
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
          <Button onClick={handleAddTextEntry} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Entry"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
