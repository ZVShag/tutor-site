"use client";

import { motion } from "framer-motion";

const lines = [
  "> SYSTEM ONLINE",
  "> AI MODULE CONNECTED",
  "> ANALYZING STUDENT PROFILE...",
  "> BUILDING LEARNING PATH...",
  "> READY",
];

export default function AITerminal() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-cyan-400/20 bg-black/70 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-2xl">

        {/* TOP BAR */}
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-4 text-sm tracking-[0.3em] text-cyan-400">
            AI TERMINAL
          </div>
        </div>

        {/* TERMINAL */}
        <div className="space-y-5 p-10 font-mono text-lg">
          {lines.map((line, i) => (
            <motion.div
              key={line}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: i * 0.4,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="text-cyan-400"
            >
              {line}
            </motion.div>
          ))}

          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="inline-block h-5 w-3 bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}