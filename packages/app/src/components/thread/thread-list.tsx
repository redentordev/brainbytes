"use client";

import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Loader2, Trash2 } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { useRouter, useParams } from "next/navigation";
import { useMutation, useQuery } from "react-query";
import { withBaseUrl } from "@/lib/utils";

type Thread = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export function ThreadList() {
  const router = useRouter();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const response = await fetch(withBaseUrl("/api/threads"), {
        credentials: "include",
      });
      return await response.json();
    },
  });

  const deleteThread = useMutation({
    mutationFn: async (threadId: string) => {
      const response = await fetch(withBaseUrl(`/api/threads/${threadId}`), {
        method: "DELETE",
        credentials: "include",
      });
      return await response.json();
    },
    onSuccess: (_, deletedThreadId) => {
      refetch();
      // If the deleted thread is the currently active thread, redirect to new chat
      if (deletedThreadId === activeThreadId) {
        router.push("/chat");
      }
    },
  });

  const threads = data?.threads;
  const { threadId } = useParams();

  const activeThreadId = threadId;

  const handleSelectThread = (threadId: string) => {
    router.push(`/chat/${threadId}`);
  };

  return (
    <div className="flex flex-col h-full bg-background border-r w-full">
      <div className="p-4">
        <Button
          onClick={() => router.push("/chat")}
          className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          size="default"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      <div className="px-2 py-2">
        <h2 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Chats
        </h2>
      </div>

      <ScrollArea className="flex-1 px-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-20">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : threads.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-center p-4">
            <MessageSquare className="h-8 w-8 text-muted-foreground mb-2 opacity-70" />
            <p className="text-sm text-muted-foreground">No chats yet</p>
            <p className="text-xs text-muted-foreground mt-1">
              Start a new chat to begin
            </p>
          </div>
        ) : (
          <div className="space-y-1">
            {threads.map((thread: Thread) => (
              <div
                key={thread.id}
                className={`cursor-pointer transition-colors hover:bg-accent/50 border-b border-border rounded-lg ${
                  thread.id === activeThreadId
                    ? "bg-accent border-primary border"
                    : "bg-background"
                }`}
                onClick={() => handleSelectThread(thread.id)}
              >
                <div className="p-2 flex flex-row items-center justify-between space-y-0">
                  <div className="space-y-1 overflow-hidden">
                    <div>{thread.title}</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteThread.mutate(thread.id);
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
