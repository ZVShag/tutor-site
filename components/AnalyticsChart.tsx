"use client";

import { motion } from "framer-motion";

const data = [42, 55, 61, 74, 82, 94];

export default function AnalyticsChart() {
  return (
    <div className="mt-14">

      {/* GRAPH */}
      <div className="relative h-[260px] w-full overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-b from-cyan-50 to-white p-8">

        {/* glow */}
        <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-cyan-300/20 blur-3xl" />

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* line */}
        <svg
          viewBox="0 0 600 240"
          className="relative z-10 h-full w-full"
          fill="none"
        >
          <motion.path
            d="M20 210 C100 180, 140 170, 200 150 C260 130, 320 110, 380 90 C450 70, 500 50, 580 20"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#06b6d4"
              />
              <stop
                offset="100%"
                stopColor="#8b5cf6"
              />
            </linearGradient>
          </defs>

          {/* points */}
          {data.map((_, index) => {
            const positions = [
              [20, 210],
              [120, 180],
              [220, 145],
              [340, 110],
              [460, 65],
              [580, 20],
            ];

            return (
              <motion.circle
                key={index}
                cx={positions[index][0]}
                cy={positions[index][1]}
                r="8"
                fill="#06b6d4"
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.4,
                }}
              />
            );
          })}
        </svg>

        {/* floating cards */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-8 top-8 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl"
        >
          <div className="text-sm text-gray-400">
            Средний рост
          </div>

          <div className="mt-1 text-2xl font-black text-cyan-600">
            +18%
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute bottom-8 right-8 rounded-2xl bg-black px-5 py-4 text-white shadow-2xl"
        >
          <div className="text-sm text-gray-400">
            AI Prediction
          </div>

          <div className="mt-1 text-2xl font-black">
            96+
          </div>
        </motion.div>
      </div>

      {/* YEARS */}
      <div className="mt-6 flex justify-between px-2 text-sm text-gray-400">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
        <span>2025</span>
      </div>
    </div>
  );
}