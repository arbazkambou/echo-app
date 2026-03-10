import { components } from "../../_generated/api";
import { Agent } from "@convex-dev/agent";
import { groq } from "@ai-sdk/groq";

export const supportAgent = new Agent(components.agent, {
  name: "My Agent",
  languageModel: groq("llama-3.3-70b-versatile"),
  instructions: "You are customer support agent.",
  maxSteps: 3,
});
