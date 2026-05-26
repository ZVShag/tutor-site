"use client";

import CursorGlow from "@/components/CursorGlow";
import Particles from "@/components/Particles";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  GraduationCap,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f7fb] text-black">

      <CursorGlow />
      <Particles />
      <LoadingScreen />
      <SmoothScroll />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_35%)]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-2xl font-black tracking-tight"
          >
            ALEXEY<span className="text-cyan-500">.AI</span>
          </motion.div>

          <nav className="hidden gap-10 text-sm text-gray-600 md:flex">
            <a href="#features" className="hover:text-cyan-500">
              Features
            </a>

            <a href="#stats" className="hover:text-cyan-500">
              Results
            </a>

            <a href="#contact" className="hover:text-cyan-500">
              Contact
            </a>
          </nav>

          <motion.a
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
          >
            Get Started
          </motion.a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center px-6 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/70 px-5 py-3 text-sm font-medium text-cyan-700 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                AI-Powered Education
              </div>

              <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
                Future
                <span className="block bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-500">
                Premium tutoring platform with modern technology,
                adaptive learning and a next-generation educational experience.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl bg-black px-8 py-5 text-lg font-bold text-white shadow-xl"
                >
                  Start Learning

                  <ArrowRight className="transition group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#features"
                  className="rounded-2xl border border-black/10 bg-white/70 px-8 py-5 text-lg font-semibold backdrop-blur-xl"
                >
                  Explore
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/60 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

              <div className="space-y-6">

                {[
                  {
                    icon: Brain,
                    title: "Adaptive AI",
                    desc: "Personalized learning experience",
                  },
                  {
                    icon: GraduationCap,
                    title: "Premium Education",
                    desc: "Modern teaching methods",
                  },
                  {
                    icon: Rocket,
                    title: "Fast Progress",
                    desc: "High-score exam preparation",
                  },
                ].map((item) => (
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    key={item.title}
                    className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
                  >

                    <div className="flex items-start gap-5">

                      <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                        <item.icon className="h-8 w-8" />
                      </div>

                      <div>
                        <div className="text-2xl font-bold">
                          {item.title}
                        </div>

                        <div className="mt-2 text-gray-500">
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
                y: -6,
              }}
              key={label}
              className="rounded-[36px] border border-white/40 bg-white/60 p-10 text-center shadow-xl backdrop-blur-2xl"
            >

              <div className="text-6xl font-black text-cyan-500">
                {num}
              </div>

              <div className="mt-4 text-lg text-gray-500">
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
              Modern
              <span className="block bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-500">
              Designed like a premium AI platform instead of a traditional tutoring website.
            </p>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">

            {[
              "Interactive Lessons",
              "AI Assistance",
              "Modern Interface",
            ].map((feature) => (
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                key={feature}
                className="rounded-[36px] border border-white/40 bg-white/60 p-10 shadow-xl backdrop-blur-2xl"
              >

                <div className="text-3xl font-bold text-cyan-600">
                  {feature}
                </div>

                <p className="mt-6 leading-relaxed text-gray-500">
                  Smooth interactions, premium design and a futuristic educational experience.
                </p>
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

        <div className="mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-white/40 bg-white/60 p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

          <div className="text-center">

            <div className="text-sm font-medium tracking-[0.3em] text-cyan-500">
              CONTACT
            </div>

            <h2 className="mt-5 text-5xl font-black">
              Let’s Start
            </h2>
          </div>

          <form className="mt-12 space-y-5">

            <input
              placeholder="Your Name"
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <input
              placeholder="Telegram"
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <textarea
              placeholder="Message"
              className="min-h-[180px] w-full rounded-2xl border border-black/10 bg-white/80 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full rounded-2xl bg-black py-5 text-xl font-bold text-white"
            >
              Send Request
            </motion.button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-black/5 px-6 py-10 text-center text-gray-500">
        © 2026 ALEXEY.AI — Premium Education Platform
      </footer>
    </main>
  );
}