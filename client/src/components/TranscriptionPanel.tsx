"use client";

import { useEffect, useRef, useState } from "react";
import { useCall, type StreamVideoEvent } from "@stream-io/video-react-sdk";
import type { TranscriptItem } from "@/types/meeting";

interface ClosedCaptionEvent extends StreamVideoEvent {
  closed_caption?: {
    text?: string;
    user?: {
      name?: string;
    };
  };
}

export default function TranscriptionPanel() {
  const call = useCall();
  const [transcripts, setTranscripts] = useState<TranscriptItem[]>([]);
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!call) return;

    const handleClosedCaption = (event: ClosedCaptionEvent) => {
      if (event.closed_caption?.text) {
        const item: TranscriptItem = {
          text: event.closed_caption.text,
          speaker: event.closed_caption.user?.name || "Participant",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setTranscripts((prev) => [...prev, item]);
      }
    };

    call.on("call.closed_caption", handleClosedCaption);

    return () => {
      call.off("call.closed_caption", handleClosedCaption);
    };
  }, [call]);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcripts]);

  return (
    <aside className="h-full flex flex-col bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
      <div className="px-5 py-4 border-b border-gray-700 bg-gray-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
          <h3 className="font-semibold text-white">Live Transcripts</h3>
        </div>
        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
          {transcripts.length} items
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {transcripts.length === 0 ? (
          <div className="h-full flex items-center justify-center text-center text-gray-500 text-sm">
            Waiting for audio...
            <br />
            Start speaking to see real-time captions.
          </div>
        ) : (
          transcripts.map((t, idx) => (
            <div
              key={`${t.timestamp}-${idx}`}
              className="bg-gray-700/40 p-3 rounded-lg border border-gray-700"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-xs text-blue-400">
                  {t.speaker}
                </span>
                <span className="text-[10px] text-gray-400">{t.timestamp}</span>
              </div>
              <p className="text-sm text-gray-200">{t.text}</p>
            </div>
          ))
        )}
        <div ref={transcriptEndRef} />
      </div>
    </aside>
  );
}