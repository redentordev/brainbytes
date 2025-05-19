"use client";

import { Loader2 } from "lucide-react";
import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { signIn } from "@/lib/auth";
import { useState } from "react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
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
            callbackURL: "http://localhost:3000/chat",
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
