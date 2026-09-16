"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
} from "@livekit/components-react";
import "@livekit/components-styles";

export default function MeetingRoomPage() {
  // 1. Read the dynamic route param [room]
  const params = useParams();
  const room = typeof params?.room === "string" ? params.room : Array.isArray(params?.room) ? params.room[0] : "";
console.log(room,"room")
  // 2. Read query string (?name=...)
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name") || "Guest";

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Prevent fetching if room hasn't resolved yet
    if (!room) return;

    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ room, username: name }),
        });
        const data = await res.json();
        if (data.token) {
          setToken(data.token);
        }
      } catch (e) {
        console.error("Token fetch error:", e);
      }
    })();
  }, [room, name]);

  if (!room || !token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="animate-pulse">Connecting to LiveKit Room...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-zinc-950">
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        data-lk-theme="default"
        onDisconnected={() => router.push("/")}
        style={{ height: "100vh" }}
      >
        <VideoConference />
        <RoomAudioRenderer />
      </LiveKitRoom>
    </div>
  );
}