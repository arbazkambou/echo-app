import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = ctx.db.query("users").collect();

    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const user = await ctx.db.insert("users", { name: "Akhlaq" });
    return user;
  },
});
