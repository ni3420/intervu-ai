"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useEffect } from "react";

export function  UserSync() {
  const { user, isLoaded } = useUser();

  const upsertUser = useMutation(api.users.upsertCurrentUser);

  useEffect(() => {
    if (!isLoaded || !user) return;

    upsertUser({
      email: user.primaryEmailAddress?.emailAddress ?? "",
      name: user.fullName ?? undefined,
      imageUrl: user.imageUrl,
    });
  }, [isLoaded, user, upsertUser]);

  return null;
}
