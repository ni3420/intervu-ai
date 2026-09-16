"use client";

import { type ReactNode } from "react";
import { StreamVideo } from "@stream-io/video-react-sdk";
import { useStreamClients } from "@/hooks/useStreamClients";
import type { AppUser } from "@/types/meeting";

interface StreamProviderProps {
  children: ReactNode;
  user: AppUser;
  token: string;
}

export default function StreamProvider({
  children,
  user,
  token,
}: StreamProviderProps) {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
  const { videoClient, chatClient } = useStreamClients(apiKey, user, token);

  if (!videoClient || !chatClient) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Connecting to Stream...</p>
      </div>
    );
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
}