import React, { useState } from "react";
import { Loader2, Upload, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface AddFileEntryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  materialId: string | null;
  addFileEntryToMaterial: (
    materialId: string,
    title: string,
    file: File
  ) => Promise<void>;
}

export function AddFileEntryDialog({
  isOpen,
  onOpenChange,
  materialId,
  addFileEntryToMaterial,
}: AddFileEntryDialogProps) {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["text/plain", "text/markdown"];

      const allowedExtensions = [".txt", ".md", ".markdown"];
      const fileExtension = file.name
        .toLowerCase()
        .substring(file.name.lastIndexOf("."));

      if (
        !allowedTypes.includes(file.type) &&
        !allowedExtensions.includes(fileExtension)
      ) {
        toast.error("Invalid file type", {
          description: "Only .txt and .md files are allowed.",
        });
        return;
      }

      // Validate file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        toast.error("File too large", {
          description: "File size must be less than 10MB.",
        });
        return;
      }

      setSelectedFile(file);
      if (!title) {
        // Auto-generate title from filename
        const nameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
        setTitle(nameWithoutExtension);
      }
    }
  };

  const handleSubmit = async () => {
    if (!materialId || !selectedFile) return;

    if (!title.trim()) {
      toast.error("Title required", {
        description: "Please provide a title for your file.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await addFileEntryToMaterial(materialId, title, selectedFile);

      // Reset form
      setTitle("");
      setSelectedFile(null);
      onOpenChange(false);

      toast.success("File uploaded", {
        description: "Your file has been uploaded successfully.",
      });
    } catch {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="file-title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="file-title"
              placeholder="e.g., Chapter 1 Notes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="file-upload" className="text-sm font-medium">
              File
            </label>
            <div className="flex items-center gap-2">
              <Input
                id="file-upload"
                type="file"
                accept=".txt,.md"
                onChange={handleFileChange}
                className="file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
            </div>
            {selectedFile && (
              <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                <File size={16} className="text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Supported formats: PDF, Word (.doc, .docx), TXT. Max size: 10MB
            </p>
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
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedFile || !title.trim()}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
