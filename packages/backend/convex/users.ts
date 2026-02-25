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
    const identity=await ctx.auth.getUserIdentity()
    if(!identity){
      throw new Error("You are not authenticated")
    }
    const orgId=identity.orgId as string;

    if(!orgId){
      throw new Error("No Organization found")
    }
    const user = await ctx.db.insert("users", { name: "Akhlaq" });
    return user;
  },
});
