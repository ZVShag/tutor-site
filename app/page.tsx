"use client";
import Particles from "@/components/Particles";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Orbit,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* NOISE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* GLOW ORBS */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-[-250px] right-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-[0.3em] text-cyan-400"
          >
            ALEXEY.EXE
          </motion.div>

          <nav className="hidden gap-10 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-cyan-400">
              FEATURES
            </a>
            <a href="#stats" className="hover:text-cyan-400">
              STATS
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              CONTACT
            </a>
          </nav>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://t.me/YOUR_USERNAME"
            target="_blank"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            TELEGRAM
          </motion.a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-5 py-3 text-sm text-fuchsia-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                FUTURE OF EDUCATION
              </div>

              <h1 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
                CYBER
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
                  TUTOR
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-400">
                Ultra-modern tutoring platform with cinematic UI,
                AI-enhanced learning and premium student experience.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 40px rgba(34,211,238,0.8)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-black text-black"
                >
                  START NOW
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#features"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold backdrop-blur-xl"
                >
                  EXPLORE
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
              {/* animated border */}
              <div className="absolute inset-0 rounded-[40px] border border-cyan-400/20" />

              <div className="space-y-6">
                {[
                  {
                    icon: Cpu,
                    title: "AI LEARNING",
                    desc: "Adaptive educational system",
                  },
                  {
                    icon: Orbit,
                    title: "PREMIUM UX",
                    desc: "Cinematic experience",
                  },
                  {
                    icon: Zap,
                    title: "FAST RESULTS",
                    desc: "High-score preparation",
                  },
                ].map((item) => (
                  <motion.div
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(34,211,238,0.4)",
                    }}
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-black/40 p-6 transition"
                  >
                    <div className="flex items-start gap-5">
                      <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
                        <item.icon className="h-8 w-8" />
                      </div>

                      <div>
                        <div className="text-2xl font-bold text-white">
                          {item.title}
                        </div>

                        <div className="mt-2 text-gray-400">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section
        id="stats"
        className="relative z-10 px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["100+", "Students"],
            ["94+", "Average Score"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              key={label}
              className="rounded-[36px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl"
            >
              <div className="text-6xl font-black text-cyan-400">
                {num}
              </div>

              <div className="mt-4 text-lg tracking-[0.25em] text-gray-400">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-black md:text-7xl">
              SYSTEM
              <span className="block text-fuchsia-500">
                FEATURES
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-500">
              Designed like a futuristic AI platform instead of
              a standard tutoring website.
            </p>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {[
              "Interactive education",
              "AI-powered approach",
              "Cinematic experience",
            ].map((feature) => (
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                key={feature}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-fuchsia-500/0 opacity-0 transition group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-fuchsia-500/10" />

                <div className="relative">
                  <div className="text-3xl font-bold text-cyan-400">
                    {feature}
                  </div>

                  <p className="mt-6 leading-relaxed text-gray-400">
                    Premium cyberpunk interface with ultra-smooth
                    interactions and futuristic aesthetics.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-6 pb-32"
      >
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-fuchsia-500/20 bg-fuchsia-500/5 p-12 backdrop-blur-3xl">
          <div className="text-center">
            <div className="text-sm tracking-[0.35em] text-fuchsia-400">
              CONTACT TERMINAL
            </div>

            <h2 className="mt-5 text-5xl font-black">
              CONNECT
            </h2>
          </div>

          <form className="mt-12 space-y-5">
            <input
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <input
              placeholder="Telegram"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <textarea
              placeholder="Message"
              className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 0 40px rgba(34,211,238,0.8)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-cyan-400 py-5 text-xl font-black text-black"
            >
              SEND REQUEST
            </motion.button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-gray-500">
        © 2026 ALEXEY.EXE — CYBER EDUCATION SYSTEM
      </footer>
    </main>
  );
}