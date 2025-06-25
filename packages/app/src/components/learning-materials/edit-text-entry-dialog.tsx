import React, { useState, useEffect } from "react";
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
import { MaterialTextEntry } from "@/contexts/learning-material-context";

interface EditTextEntryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  materialId: string | null;
  textEntry: MaterialTextEntry | null;
  updateTextEntry: (
    materialId: string,
    entryId: string,
    title: string,
    content: string
  ) => Promise<void>;
}

export function EditTextEntryDialog({
  isOpen,
  onOpenChange,
  materialId,
  textEntry,
  updateTextEntry,
}: EditTextEntryDialogProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form fields when text entry changes
  useEffect(() => {
    if (textEntry) {
      setTitle(textEntry.title);
      setContent(textEntry.content);
    }
  }, [textEntry]);

  const handleUpdateTextEntry = async () => {
    if (!materialId || !textEntry) return;

    if (!title.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your text entry.",
      });
      return;
    }

    if (!content.trim()) {
      toast.error("Content required", {
        description: "Please provide some content for your text entry.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await updateTextEntry(materialId, textEntry.id, title, content);
      onOpenChange(false);

      toast.success("Text entry updated", {
        description: "Your text entry has been updated successfully.",
      });
    } catch {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dialog handler (to reset form on close)
  const handleOpenChange = (open: boolean) => {
    if (!open && textEntry) {
      // Reset to original values if closing
      setTitle(textEntry.title);
      setContent(textEntry.content);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Text Entry</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="entry-title" className="text-sm font-medium">
              Entry Title
            </label>
            <Input
              id="entry-title"
              placeholder="e.g., Key Concepts"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
          <Button onClick={handleUpdateTextEntry} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Entry"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
