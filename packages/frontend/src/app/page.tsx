"use client";

import { signIn, useSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Github, Loader2 } from "lucide-react";
import { ChatForm } from "@/components/chat-form";
import { Navigation } from "@/components/navigation";

export default function Page() {
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button
          className="cursor-pointer"
          variant="outline"
          type="button"
          onClick={async () => {
            setIsLoading(true);
            await signIn.social({
              provider: "github",
              callbackURL: "http://localhost:3000",
            });
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setIsLoading(false);
          }}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Github className="mr-2 h-4 w-4" />
          )}{" "}
          Sign in with GitHub
        </Button>
      </div>
    );
  }

  return (
    <main className="flex flex-col h-screen">
      <Navigation />
      <ChatForm />
    </main>
  );
}
