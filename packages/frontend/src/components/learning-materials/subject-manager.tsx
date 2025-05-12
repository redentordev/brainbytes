import React from "react";
import { Tags, Tag, Trash2, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface SubjectManagerProps {
  subjects: string[];
  selectedSubjectFilter: string | null;
  setSelectedSubjectFilter: (subject: string | null) => void;
  addSubject: (subject: string) => Promise<void>;
  removeSubject: (subject: string) => Promise<void>;
  isLoading: boolean;
  isConnectionError: boolean;
}

export function SubjectManager({
  subjects,
  selectedSubjectFilter,
  setSelectedSubjectFilter,
  addSubject,
  removeSubject,
  isLoading,
  isConnectionError,
}: SubjectManagerProps) {
  const [isSubjectDialogOpen, setIsSubjectDialogOpen] = React.useState(false);
  const [newSubject, setNewSubject] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleAddSubject = async () => {
    if (!newSubject.trim()) {
      toast.error("Subject required", {
        description: "Please provide a name for your subject.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await addSubject(newSubject);
      setNewSubject("");
      setIsSubjectDialogOpen(false);

      toast.success("Subject added", {
        description: "Your subject has been added successfully.",
      });
    } catch (error) {
      // Error is already handled in the context
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveSubject = async (subject: string) => {
    try {
      await removeSubject(subject);
      toast.success("Subject removed", {
        description: "The subject has been removed.",
      });
    } catch (error) {
      // Error is already handled in the context
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tags size={16} />
          <span className="text-sm font-medium">Subjects</span>
        </div>
        <Dialog
          open={isSubjectDialogOpen}
          onOpenChange={setIsSubjectDialogOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" disabled={!!isConnectionError}>
              <Plus size={14} className="mr-1" />
              Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Subject</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject Name
                </label>
                <Input
                  id="subject"
                  placeholder="e.g., Computer Science"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsSubjectDialogOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button onClick={handleAddSubject} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Subject"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Subject List */}
      <div className="flex flex-wrap gap-2">
        {isLoading ? (
          <div className="flex items-center justify-center w-full py-2">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span className="text-sm">Loading subjects...</span>
          </div>
        ) : subjects.length > 0 ? (
          subjects.map((subject) => (
            <div
              key={subject}
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 border",
                selectedSubjectFilter === subject
                  ? "bg-blue-100 text-blue-700 border-blue-200"
                  : "bg-gray-100 text-gray-700 border-gray-200"
              )}
            >
              <button
                onClick={() =>
                  setSelectedSubjectFilter(
                    selectedSubjectFilter === subject ? null : subject
                  )
                }
                className="flex items-center gap-1"
              >
                <Tag size={12} />
                {subject}
              </button>
              <button
                onClick={() => handleRemoveSubject(subject)}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground p-2 bg-gray-50 rounded-md w-full text-center">
            No subjects yet. Add your first subject to get started.
          </div>
        )}
        {selectedSubjectFilter && (
          <button
            onClick={() => setSelectedSubjectFilter(null)}
            className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
          >
            Clear Filter
          </button>
        )}
      </div>
    </>
  );
}
