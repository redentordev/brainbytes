"use client";

import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { signInWithGitHub, useSession } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [githubLoading, setGithubLoading] = useState(false);
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (session) {
      const callbackUrl = searchParams.get("callbackUrl") || "/chat";
      router.push(callbackUrl);
    }
  }, [session, router, searchParams]);

  // Show loading state while session is being checked
  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin" />
            <p className="text-muted-foreground mt-2">
              Checking authentication...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleGitHubSignIn = async () => {
    setGithubLoading(true);
    try {
      const callbackUrl = searchParams.get("callbackUrl") || "/chat";
      await signInWithGitHub(callbackUrl);
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    } finally {
      setGithubLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome to BrainBytes</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to continue to your dashboard
          </p>
        </div>

        <div className="space-y-3">
          <Button
            className="w-full"
            variant="outline"
            type="button"
            onClick={handleGitHubSignIn}
            disabled={githubLoading}
          >
            {githubLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )}
            Sign in with GitHub
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          By signing in, you agree to our terms of service and privacy policy.
        </div>
      </div>
    </div>
  );
}
