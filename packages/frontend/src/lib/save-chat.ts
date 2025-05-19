import { Message } from "@ai-sdk/react";
import { withBaseUrl } from "./utils";

export async function saveChat({
  id,
  messages,
}: {
  id: string;
  messages: Message[];
}): Promise<void> {
  const response = await fetch(withBaseUrl(`/api/chat/${id}`), {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error("Failed to save chat");
  }

  return await response.json();
}
