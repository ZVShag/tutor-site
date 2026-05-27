"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "AI-powered tutoring for future students";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 text-xl leading-relaxed text-gray-500">
      <span>{displayed}</span>

      <span className="animate-pulse text-cyan-500">|</span>
    </div>
  );
}