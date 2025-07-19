import React, { useState } from "react";
import { Trash2, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaterialFileEntry } from "@/contexts/learning-material-context";

interface FileEntryItemProps {
  entry: MaterialFileEntry;
  onRemove: () => Promise<void>;
}

export function FileEntryItem({ entry, onRemove }: FileEntryItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await onRemove();
    } catch {
      // Error is already handled in the context
    } finally {
      setIsDeleting(false);
    }
  };

  const formatFileSize = (bytes: string): string => {
    const size = parseInt(bytes);
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) return "📄";
    if (fileType.includes("word") || fileType.includes("document")) return "📝";
    if (fileType.includes("text")) return "📃";
    return "📁";
  };

  return (
    <div className="flex items-center justify-between p-2 bg-background rounded border">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-lg">{getFileIcon(entry.fileType)}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{entry.title}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="truncate">{entry.fileName}</span>
            <span>•</span>
            <span>{formatFileSize(entry.fileSize)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={() => window.open(entry.fileUrl, "_blank")}
          title="Open file"
        >
          <ExternalLink size={12} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-destructive hover:text-destructive"
          onClick={handleDelete}
          disabled={isDeleting}
          title="Delete file"
        >
          {isDeleting ? (
            <Loader2 size={12} className="animate-spin" />
          ) : (
            <Trash2 size={12} />
          )}
        </Button>
      </div>
    </div>
  );
}
