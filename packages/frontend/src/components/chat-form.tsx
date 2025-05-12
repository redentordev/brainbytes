"use client";

import { cn } from "@/lib/utils";
import { useChat, type Message } from "@ai-sdk/react";
import { ArrowUpIcon, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AutoResizeTextarea } from "@/components/autoresize-textarea";
import { useSession } from "@/lib/auth";
import { useEffect, useRef } from "react";
import { useLearningMaterials } from "@/contexts/learning-material-context";

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { data: session } = useSession();
  const { activeMaterial, materials } = useLearningMaterials();
  const { messages, input, setInput, append } = useChat({
    api: "http://localhost:3001/api/chat",
    credentials: "include",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeContextMaterial = materials.find((material) => material.isActive);
  const currentActiveMaterial = activeMaterial || activeContextMaterial;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void append({
      content: input,
      role: "user",
    });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const header = (
    <header className="m-auto flex max-w-96 flex-col gap-5 text-center">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Hello, {session?.user.name}
      </h1>
      <p className="text-sm text-muted-foreground">
        I'm BrainBytes AI, a chatbot that can help you with your questions.
      </p>
      {currentActiveMaterial && (
        <div className="mx-auto mt-2 animate-fade-down">
          <div className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 border border-blue-200 shadow-sm flex items-center">
            <BookOpen size={12} className="mr-1.5" />
            Context: {currentActiveMaterial.title}
          </div>
        </div>
      )}
    </header>
  );

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {currentActiveMaterial && messages.length > 0 && (
        <div className="self-center mb-2 animate-fade-down">
          <div className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 border border-blue-200 shadow-sm flex items-center">
            <BookOpen size={12} className="mr-1.5" />
            Context: {currentActiveMaterial.title}
          </div>
        </div>
      )}
      {messages.map((message: Message, index: number) => (
        <div
          key={index}
          data-role={message.role}
          className="max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=user]:self-end data-[role=assistant]:bg-gray-100 data-[role=user]:bg-blue-500 data-[role=assistant]:text-black data-[role=user]:text-white"
        >
          {message.content}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );

  return (
    <main
      className={cn(
        "ring-none mx-auto flex h-svh max-h-svh w-full max-w-[35rem] flex-col items-stretch border-none",
        className
      )}
      {...props}
    >
      <div className="flex-1 content-center overflow-y-auto px-6">
        {messages.length ? messageList : header}
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-input bg-background focus-within:ring-ring/10 relative mx-6 mb-6 flex items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0"
      >
        <AutoResizeTextarea
          onKeyDown={handleKeyDown}
          onChange={(v) => setInput(v)}
          value={input}
          placeholder="Enter a message"
          className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
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
    </main>
  );
}
