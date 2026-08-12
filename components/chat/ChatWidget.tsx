"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useUIStore } from "@/lib/stores/ui-store";
import { IconButton } from "@/components/ui/Button";
import { ChatIcon, CloseIcon } from "@/components/ui/Icons";

const INITIAL_MESSAGES: UIMessage[] = [
  {
    id: "greeting",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Xin chào! Mình là AI của Fashion shop. Mình có thể giúp gì cho bạn?",
      },
    ],
  },
];

export default function ChatWidget() {
  const chatOpen = useUIStore((s) => s.chatOpen);
  const openChat = useUIStore((s) => s.openChat);
  const closeChat = useUIStore((s) => s.closeChat);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: INITIAL_MESSAGES,
  });

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeChat();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeChat]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  const busy = status === "submitted" || status === "streaming";

  return (
    <>
      <IconButton
        type="button"
        onClick={() => (chatOpen ? closeChat() : openChat())}
        aria-label={chatOpen ? "Đóng trò chuyện" : "Trò chuyện với trợ lý"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fg text-bg"
      >
        {chatOpen ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[32rem] max-h-[70vh] w-[calc(100vw-3rem)] max-w-sm flex-col border border-border bg-bg"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="tracked-label text-sm">Trợ lý Fashion Shop</h2>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className={message.role === "user" ? "text-right" : "text-left"}
                  >
                    <p
                      className={`inline-block max-w-[85%] whitespace-pre-wrap px-3 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-fg text-bg"
                          : "bg-border/40 text-fg"
                      }`}
                    >
                      {message.parts
                        .filter((part) => part.type === "text")
                        .map((part) => part.text)
                        .join("")}
                    </p>
                  </li>
                ))}
              </ul>
              {busy ? (
                <p className="mt-2 text-xs text-fg-muted">Đang trả lời...</p>
              ) : null}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim() || busy) return;
                sendMessage({ text: input });
                setInput("");
              }}
              className="flex items-center gap-2 border-t border-border px-4 py-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                disabled={busy}
                className="w-full bg-transparent text-sm text-fg placeholder:text-fg-muted focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="tracked-label shrink-0 text-[10px] text-fg disabled:opacity-40"
              >
                Gửi
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
