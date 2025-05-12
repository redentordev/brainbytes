"use client";

import { signOut, useSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";
import { LearningMaterialsSidebar } from "@/components/learning-material-sidebar";

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
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <Home className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <img
              src={
                session.user.image ??
                "https://avatar.vercel.sh/" + session.user.email
              }
              alt={session.user.name + "'s avatar"}
              className="h-6 w-6 rounded-full"
            />
            <span className="hidden sm:inline">{session.user.name}</span>
          </Button>
          <LearningMaterialsSidebar />
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
