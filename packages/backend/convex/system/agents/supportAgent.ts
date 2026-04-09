import { groq } from "@ai-sdk/groq";
import { Agent } from "@convex-dev/agent";
import { components } from "../../_generated/api";
import { escalateConversation } from "../tools/escalateConversation";
import { resolveConversation } from "../tools/resolveConversation";
import { search } from "../tools/search";
import { SUPPORT_AGENT_PROMPT } from "../constants";

export const supportAgent = new Agent(components.agent, {
  name: "Aero Support Agent",
  languageModel: groq("llama-3.3-70b-versatile"),
  instructions: SUPPORT_AGENT_PROMPT,
  maxSteps: 3,
  tools: {
    escalateConversationTool: escalateConversation,
    resolveConversationTool: resolveConversation,
    searchTool: search,
  },
});
