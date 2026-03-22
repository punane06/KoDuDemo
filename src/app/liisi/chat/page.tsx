"use client";

import { type FormEvent, useMemo, useState } from "react";
import { Image as ImageIcon, SendHorizontal } from "lucide-react";

import { createLocalStorageStore } from "@/lib/create-local-storage-store";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { liisiLayout } from "@/components/liisi/liisi-design-system";

type ChatMessage = {
  id: string;
  author: "developer" | "liisi";
  text: string;
  time: string;
};

const initialChatMessages: ChatMessage[] = [
  {
    id: "msg-001",
    author: "developer",
    text: "Hello! Welcome to your apartment development tracker. Feel free to ask any questions about the construction progress.",
    time: "Mar 22, 09:00 AM",
  },
  {
    id: "msg-002",
    author: "liisi",
    text: "Thank you! When will the bathroom tiling be completed?",
    time: "Mar 22, 10:30 AM",
  },
  {
    id: "msg-003",
    author: "developer",
    text: "The bathroom tiling is estimated to be completed by March 28th. We're making good progress!",
    time: "Mar 22, 11:15 AM",
  },
  {
    id: "msg-004",
    author: "liisi",
    text: "Great! Can I visit the site soon?",
    time: "Mar 22, 02:20 PM",
  },
  {
    id: "msg-005",
    author: "developer",
    text: "Yes, we're organizing a site visit for all buyers on March 25th. You'll receive an invitation via email soon.",
    time: "Mar 22, 03:00 PM",
  },
];

function normalizeTimestampLabel(value: string) {
  if (value.includes(",")) {
    return value;
  }

  const todayLabel = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return `${todayLabel}, ${value}`;
}

function normalizeMessages(messages: ChatMessage[]) {
  return messages.map((message) => ({
    ...message,
    time: normalizeTimestampLabel(message.time),
  }));
}

const chatStore = createLocalStorageStore<ChatMessage[]>({
  key: "liisi-chat-messages-v1",
  eventName: "liisi-chat-storage",
  initialValue: initialChatMessages,
  transform: normalizeMessages,
});

function getCurrentTimeLabel() {
  return new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function LiisiChatPage() {
  const messages = chatStore.useValue();
  const [draft, setDraft] = useState("");

  const canSend = useMemo(() => draft.trim().length > 0, [draft]);

  function handleSend() {
    if (!canSend) {
      return;
    }

    const nextMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      author: "liisi",
      text: draft.trim(),
      time: getCurrentTimeLabel(),
    };

    chatStore.setValue([...messages, nextMessage]);
    setDraft("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSend();
  }

  return (
    <main className="relative min-h-screen w-full bg-[#f6f4f0] text-[#2f2f2f]">
      <LiisiHeader title="Developer Chat" subtitle="Usually responds in a few hours" backHref="/liisi" variant="inner" />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.pageMargin} pb-30 pt-3`}>
        <div className="space-y-6">
          {messages.map((message) => {
            const isUser = message.author === "liisi";

            return (
              <div key={message.id} className={isUser ? "flex flex-col items-end" : "flex flex-col items-start"}>
                <div
                  className={[
                    "max-w-[82%] rounded-[18px] border px-4 py-3 text-[15px] leading-[1.65] shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
                    isUser
                      ? "border-[#2f2f31] bg-[#2f2f31] text-[#f2f2f1]"
                      : "border-[#ddd8d0] bg-[#fbfaf8] text-[#484848]",
                  ].join(" ")}
                >
                  {message.text}
                </div>
                <p className="mt-1.5 px-1 text-[12px] text-[#adaba7]">{message.time}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ddd7cf] bg-[#f3f0eb] shadow-[0_-10px_28px_rgba(0,0,0,0.12)]">
        <div className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.pageMargin} py-4`}>
          <form className="flex items-center gap-2 rounded-full bg-[#f0ede8] px-1" onSubmit={handleSubmit}>
            <button
              type="button"
              aria-label="Attach image"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8e5df] text-[#8f8d88]"
            >
              <ImageIcon size={18} />
            </button>

            <input
              aria-label="Message input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type a message..."
              className="h-11 flex-1 rounded-full bg-[#e7e3dd] px-4 text-[15px] text-[#4f4f4f] placeholder:text-[#9d9891] focus:outline-none"
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!canSend}
              className={[
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors",
                canSend ? "bg-[#8d8d8d]" : "bg-[#c5c5c5]",
              ].join(" ")}
            >
              <SendHorizontal size={18} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
