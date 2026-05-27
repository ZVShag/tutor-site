"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { year: "2020", score: 68 },
  { year: "2021", score: 74 },
  { year: "2022", score: 81 },
  { year: "2023", score: 87 },
  { year: "2024", score: 91 },
  { year: "2025", score: 94 },
];

export default function AnalyticsChart() {
  return (
    <div className="mt-10 h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorScore"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#06b6d4"
                stopOpacity={0.35}
              />

              <stop
                offset="100%"
                stopColor="#06b6d4"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94a3b8",
              fontSize: 12,
            }}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="score"
            stroke="#06b6d4"
            strokeWidth={4}
            fill="url(#colorScore)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}