import { createTool } from "@convex-dev/agent";
import { saveMessage } from "@convex-dev/agent";
import z from "zod";
import { internal, components } from "../../_generated/api";

export const resolveConversation = createTool({
  description: "Resolve a conversation",
  args: z.object({}),
  handler: async (ctx) => {
    if (!ctx.threadId) {
      return "Missing thread ID";
    }

    await ctx.runMutation(internal.system.conversations.resolve, {
      threadId: ctx.threadId,
    });

    return "Conversation resolved";
  },
});
