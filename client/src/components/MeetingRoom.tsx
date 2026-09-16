"use client";

import { useEffect, useRef, useState } from "react";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import TranscriptionPanel from "./TranscriptionPanel";

interface MeetingRoomProps {
  callId: string;
  userId: string;
  onLeave: () => void;
}

export default function MeetingRoom({
  callId,
  userId,
  onLeave,
}: MeetingRoomProps) {
  const client = useStreamVideoClient();
  const [call, setCall] = useState<Call | null>(null);
  const [error, setError] = useState<string | null>(null);

  const joinedRef = useRef<boolean>(false);
  const leavingRef = useRef<boolean>(false);

  useEffect(() => {
    if (!client || !callId || joinedRef.current) return;
    joinedRef.current = true;

    let activeCall: Call | null = null;

    const initCall = async () => {
      try {
        activeCall = client.call("default", callId);
        await activeCall.getOrCreate({
          data: {
            members: [{ user_id: userId, role: "call_member" }],
          },
        });

        await activeCall.join();
        await activeCall.startClosedCaptions({ language: "en" });

        activeCall.on("call.session_ended", () => {
          onLeave();
        });

        setCall(activeCall);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to join meeting";
        console.error("Room connection error:", message);
        setError(message);
      }
    };

    initCall();

    return () => {
      if (activeCall && !leavingRef.current) {
        leavingRef.current = true;
        activeCall.stopClosedCaptions().catch(() => {});
        activeCall.leave().catch(() => {});
      }
    };
  }, [client, callId, userId, onLeave]);

  const handleLeaveClick = async () => {
    if (leavingRef.current) {
      onLeave();
      return;
    }
    leavingRef.current = true;
    try {
      if (call) {
        await call.stopClosedCaptions();
        await call.leave();
      }
    } catch (err) {
      console.error("Error during manual disconnect:", err);
    } finally {
      onLeave();
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-4">
        <p className="text-red-400 font-medium">{error}</p>
        <button
          onClick={onLeave}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
        >
          Return to Entry
        </button>
      </div>
    );
  }

  if (!call) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading meeting room...</p>
      </div>
    );
  }

  return (
    <StreamTheme>
      <StreamCall call={call}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 lg:p-6">
          <div className="container mx-auto h-[calc(100vh-3rem)] grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
            <section className="flex flex-col gap-4 h-full">
              <div className="flex-1 bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl relative">
                <SpeakerLayout />
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-2 flex justify-center shadow-lg">
                <CallControls onLeave={handleLeaveClick} />
              </div>
            </section>

            <TranscriptionPanel />
          </div>
        </div>
      </StreamCall>
    </StreamTheme>
  );
}