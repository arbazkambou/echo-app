import { groq } from "@ai-sdk/groq";
import { Agent } from "@convex-dev/agent";
import { components } from "../../_generated/api";
import { escalateConversation } from "../tools/escalateConversation";
import { resolveConversation } from "../tools/resolveConversation";

export const supportAgent = new Agent(components.agent, {
  name: "Aero Support Agent",
  languageModel: groq("llama-3.3-70b-versatile"),
  instructions: `You are a customer support agent. Use "resolveConversation" tool when user expresses finalization of the conversation. Use "escalateConversation" tool when user expresses frustration, or requests a human explicitly.`,
  maxSteps: 3,
  tools: {
    escalateConversation,
    resolveConversation,
  },
});
