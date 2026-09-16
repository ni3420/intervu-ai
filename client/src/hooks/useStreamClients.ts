"use client";

import { useEffect, useState } from "react";
import { StreamVideoClient, type User as VideoUser } from "@stream-io/video-react-sdk";
import { StreamChat } from "stream-chat";
import type { AppUser } from "@/types/meeting";

interface StreamClientsHookResult {
  videoClient: StreamVideoClient | null;
  chatClient: StreamChat | null;
}

export function useStreamClients(
  apiKey: string | undefined,
  user: AppUser | null,
  token: string | null
): StreamClientsHookResult {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    if (!apiKey || !user || !token) return;

    let isMounted = true;
    let localVideoClient: StreamVideoClient | null = null;
    let localChatClient: StreamChat | null = null;

    const initClients = async () => {
      try {
        const streamUser: VideoUser = {
          id: user.id,
          name: user.name,
        };

        // Video Client setup
        localVideoClient = new StreamVideoClient({
          apiKey,
          user: streamUser,
          tokenProvider: () => Promise.resolve(token),
        });

        // Chat Client setup
        localChatClient = StreamChat.getInstance(apiKey);
        await localChatClient.connectUser(streamUser, token);

        if (isMounted) {
          setVideoClient(localVideoClient);
          setChatClient(localChatClient);
        }
      } catch (err) {
        console.error("Failed to initialize Stream clients:", err);
      }
    };

    initClients();

    return () => {
      isMounted = false;
      if (localVideoClient) {
        localVideoClient.disconnectUser().catch(console.error);
      }
      if (localChatClient) {
        localChatClient.disconnectUser().catch(console.error);
      }
      setVideoClient(null);
      setChatClient(null);
    };
  }, [apiKey, user?.id, token]);

  return { videoClient, chatClient };
}