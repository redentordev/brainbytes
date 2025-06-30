import { createOpenAI } from "@ai-sdk/openai";
import { Resource } from "sst";

export const OAI = createOpenAI({
  apiKey: Resource.OpenaiApiKey.value,
});

export const openai = OAI("gpt-4o-mini");
