import ChatLayout from "@/layouts/chat-layout";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ChatLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "/chat";
    redirect(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
  }

  return <ChatLayout>{children}</ChatLayout>;
}
