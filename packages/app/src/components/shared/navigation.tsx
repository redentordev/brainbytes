"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { LearningMaterialsSidebar } from "@/components/learning-materials/learning-material-sidebar";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/login");
  }

  return (
    <nav className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold">BrainBytes</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <Image
              src={
                session?.user.image ??
                "https://avatar.vercel.sh/" + session?.user.email
              }
              alt={session?.user.name + "'s avatar"}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full"
            />
            <span className="hidden sm:inline">{session?.user.name}</span>
          </Button>
          <LearningMaterialsSidebar />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button
          variant="ghost"
          size="sm"
          onClick={async () => {
            await signOut();
            router.push("/");
          }}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </Button>
      </div>
    </nav>
  );
}
