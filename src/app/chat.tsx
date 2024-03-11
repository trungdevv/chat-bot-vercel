"use client"; // Add closing parenthesis

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex-1 flex flex-col justify-end p-4 space-y-4">
      <div className="flex flex-col items-start space-y-1">
        {messages.map((m, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
          >
            <div className="text-sm font-semibold">
              {m.role === "user" ? "User: " : "AI Chat Bot: "}
            </div>
            <div> {m.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-4">
          <label>
            <Input
              className="flex-1 min-h-[40px]"
              placeholder="Type a message..."
              type="text"
              value={input}
              onChange={handleInputChange}
            />
          </label>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}
