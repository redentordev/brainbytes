"use client";

import { Navigation } from "@/components/shared/navigation";
import { ThreadList } from "@/components/thread/thread-list";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex flex-row flex-1 overflow-hidden">
        <div className="min-w-[320px] max-w-[320px] flex">
          <ThreadList />
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
