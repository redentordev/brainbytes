"use client";

import { cn, withBaseUrl } from "@/lib/utils";
import { useChat, type Message } from "@ai-sdk/react";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AutoResizeTextarea } from "@/components/autoresize-textarea";
import { useSession } from "@/lib/auth";
import { useEffect, useRef } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { saveChat } from "@/lib/save-chat";
import { useQueryClient } from "react-query";
import React from "react";

// Helper function for basic markdown parsing
function parseMarkdown(text: string) {
  // Replace bold (**text**)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Replace italic (*text*)
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Replace inline code (`text`)
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  return text;
}

export function ChatForm({
  className,
  initialMessages,
  initialChat,
  threadId,
  ...props
}: React.ComponentProps<"form"> & {
  initialMessages?: Message[];
  initialChat?: string;
  threadId?: string;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const initialChatProcessed = useRef(false);

  const { messages, input, setInput, append, stop } = useChat({
    id: threadId,
    api: withBaseUrl("/api/chat"),
    credentials: "include",
    initialInput: initialChat,
    initialMessages,
    sendExtraMessageFields: true,
    onFinish: async (message) => {
      if (initialChat) {
        await queryClient.invalidateQueries({
          queryKey: ["threads"],
        });
      }
      await saveChat({
        id: threadId ?? "",
        messages: [...messages, message],
      });
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialChat && !initialChatProcessed.current) {
      initialChatProcessed.current = true;
      void append({
        content: initialChat,
        role: "user",
      });

      // Update URL without triggering re-renders
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("initialChat");
      const newUrl =
        window.location.pathname +
        (newParams.toString() ? "?" + newParams.toString() : "");
      window.history.replaceState(null, "", newUrl);
      setInput("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messages.length === 0) {
      const { threadId } = await fetch(withBaseUrl("/api/new-chat"), {
        method: "POST",
        credentials: "include",
      }).then((res) => res.json());

      setInput("");
      return router.push(`/chat/${threadId}?initialChat=${input}`);
    } else {
      stop();
      void append({
        content: input,
        role: "user",
      });
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const header = (
    <header className="my-auto flex w-full flex-col gap-5 text-center py-10 animate-fade-up">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Hello, {session?.user.name}
      </h1>
      <p className="text-sm text-muted-foreground">
        I&apos;m BrainBytes AI, a chatbot that can help you with your questions.
      </p>
    </header>
  );

  const messageList = (
    <div className="flex h-full min-h-full flex-col gap-4 pb-6">
      {messages.map((message: Message, index: number) => {
        const lines = message.content.split("\n");
        return (
          <div
            key={index}
            data-role={message.role}
            className="max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-muted data-[role=user]:bg-primary data-[role=assistant]:text-foreground data-[role=user]:text-primary-foreground"
            style={
              {
                "--code-bg":
                  message.role === "user"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.1)",
              } as React.CSSProperties
            }
          >
            <style jsx>{`
              div[data-role] code {
                background: var(--code-bg);
                padding: 0.1em 0.3em;
                border-radius: 3px;
                font-family: monospace;
                font-size: 0.9em;
              }
              div[data-role] em {
                font-style: italic;
              }
              div[data-role] strong {
                font-weight: bold;
              }
            `}</style>
            {lines.map((text, i) => (
              <React.Fragment key={i}>
                <span
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}
                />
                {i < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );

  return (
    <main
      className={cn(
        "ring-none mx-auto flex h-full w-full max-w-[35rem] flex-col justify-between border-none pt-4 relative",
        className
      )}
      {...props}
    >
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        {messages.length ? messageList : header}
      </div>
      <div className="px-6 py-2 sticky bottom-0 bg-background">
        <form
          onSubmit={handleSubmit}
          className="border-input bg-background focus-within:ring-ring/10 relative flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:border-primary"
        >
          <AutoResizeTextarea
            onKeyDown={handleKeyDown}
            onChange={(v) => setInput(v)}
            value={input}
            placeholder="Enter a message"
            className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
            autoFocus
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-1 right-1 size-6 rounded-full"
              >
                <ArrowUpIcon size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={12}>Submit</TooltipContent>
          </Tooltip>
        </form>
      </div>
    </main>
  );
}
