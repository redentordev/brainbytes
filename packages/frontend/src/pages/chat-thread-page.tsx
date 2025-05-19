import { ChatForm } from "@/components/chat/chat-form";
import { withBaseUrl } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router";

export default function ChatThreadPage() {
  const { threadId } = useParams();
  const [searchParams] = useSearchParams();
  const initialChat = searchParams.get("initialChat");
  const { data, isLoading } = useQuery({
    queryKey: ["initial-messages", threadId],
    queryFn: async () => {
      const response = await fetch(withBaseUrl(`/api/chat/${threadId}`), {
        credentials: "include",
      });
      return await response.json();
    },
  });

  return (
    <div className="h-full w-full flex">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        <ChatForm
          threadId={threadId}
          initialMessages={data?.messages}
          initialChat={initialChat ?? undefined}
          className="flex-1"
        />
      )}
    </div>
  );
}
