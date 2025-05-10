"use client";

import { signOut, useSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Navigation() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <nav className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold">BrainBytes</h1>
        <div className="flex items-center gap-2">
          <img
            src={
              session.user.image ??
              "https://avatar.vercel.sh/" + session.user.email
            }
            alt={session.user.name + "'s avatar"}
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm text-muted-foreground">
            {session.user.name}
          </span>
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => signOut()}
        className="text-muted-foreground hover:text-foreground"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Sign out
      </Button>
    </nav>
  );
}
