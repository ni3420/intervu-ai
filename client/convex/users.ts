// convex/users.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const upsertCurrentUser = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const clerkId = identity.subject;

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerkId", clerkId)
      )
      .unique();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        email: args.email,
        name: args.name,
        imageUrl: args.imageUrl,
      });

      return existingUser._id;
    }

    return await ctx.db.insert("users", {
      clerkId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      onboardingCompleted: false,
    });
  },
});


// convex/users.ts

export const getCurrentUser = query({
  args: {},

  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return null;
    }

    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerkId", identity.subject)
      )
      .unique();
  },
});

