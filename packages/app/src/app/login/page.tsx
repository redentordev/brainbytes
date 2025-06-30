"use client";

import { Suspense } from "react";
import LoginForm from "@/components/chat/login-form";
import { Loader2 } from "lucide-react";

function LoginFormFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin" />
          <p className="text-muted-foreground mt-2">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <Suspense fallback={<LoginFormFallback />}>
      <LoginForm />
    </Suspense>
  );
}
