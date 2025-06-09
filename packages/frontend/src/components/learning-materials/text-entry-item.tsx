import React, { useState } from "react";
import { Loader2, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MaterialTextEntry } from "@/contexts/learning-material-context";

interface TextEntryItemProps {
  entry: MaterialTextEntry;
  onRemove: () => Promise<void>;
  onEdit: () => void;
}

export function TextEntryItem({ entry, onRemove, onEdit }: TextEntryItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRemove = async () => {
    try {
      setIsDeleting(true);
      await onRemove();
      toast.success("Entry removed", {
        description: "Text entry has been removed.",
      });
    } catch {
      // Error is already handled in the context
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-background rounded border p-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-medium hover:text-primary flex-grow text-left"
        >
          {entry.title}
        </button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:text-primary cursor-pointer group"
            onClick={onEdit}
          >
            <Edit
              size={12}
              className="text-muted-foreground group-hover:text-primary cursor-pointer"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:text-destructive cursor-pointer group"
            onClick={handleRemove}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              <Trash2
                size={12}
                className="text-muted-foreground hover:text-destructive cursor-pointer group-hover:text-destructive"
              />
            )}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-2 text-xs text-sidebar-foreground/60 border-t pt-2">
          {entry.content}
        </div>
      )}

      <div className="mt-1 flex justify-end">
        <span className="text-[10px] text-sidebar-foreground/60">
          {new Date(entry.dateAdded).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
