import ChatLayout from "@/layouts/chat-layout";

export default function ChatLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChatLayout>{children}</ChatLayout>;
}
