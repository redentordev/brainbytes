import { ChatForm } from "@/components/chat/chat-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function NewChatPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-full w-full flex">
      <ChatForm className="flex-1" />
    </div>
  );
}
