"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
          className="absolute h-1 w-1 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
}