"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* GLOW */}
      <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-[0.25em] text-cyan-400">
            ALEXEY.EXE
          </div>

          <a
            href="https://t.me/ТВОЙ_USERNAME"
            target="_blank"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300 transition hover:scale-105 hover:bg-cyan-400/20"
          >
            TELEGRAM
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center px-6">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                NEXT GENERATION EDUCATION
              </div>

              <h1 className="text-6xl font-black leading-[0.9] tracking-tight lg:text-8xl">
                CYBER
                <span className="block text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]">
                  TUTOR
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-400">
                Подготовка к экзаменам нового поколения.
                Интерактивное обучение, современные методики и
                максимальная эффективность.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 text-lg font-black text-black transition hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]"
                >
                  START NOW
                  <ArrowRight className="transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#features"
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold backdrop-blur-xl transition hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10"
                >
                  FEATURES
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg rounded-[40px] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-[40px] border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.15)]" />

              <div className="space-y-6">
                {[
                  ["100+", "СТУДЕНТОВ"],
                  ["94+", "СРЕДНИЙ БАЛЛ"],
                  ["24/7", "SUPPORT"],
                ].map(([num, text]) => (
                  <div
                    key={text}
                    className="rounded-3xl border border-white/10 bg-black/40 p-6"
                  >
                    <div className="text-5xl font-black text-cyan-400">
                      {num}
                    </div>

                    <div className="mt-2 tracking-[0.2em] text-gray-400">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-black lg:text-6xl">
              SYSTEM FEATURES
            </h2>

            <p className="mt-6 text-xl text-gray-500">
              Современная образовательная система
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              "AI-assisted learning",
              "Interactive lessons",
              "Personal strategy",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <div className="text-2xl font-bold text-cyan-400">
                  {item}
                </div>

                <p className="mt-6 leading-relaxed text-gray-400">
                  Премиальный опыт обучения с современным UI и
                  персональным подходом.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-6 py-28"
      >
        <div className="mx-auto max-w-4xl rounded-[40px] border border-fuchsia-500/20 bg-fuchsia-500/5 p-12 backdrop-blur-2xl">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              CONNECT
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Оставь заявку и начни обучение
            </p>
          </div>

          <form className="mt-12 flex flex-col gap-5">
            <input
              placeholder="Имя"
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <input
              placeholder="Telegram"
              className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <textarea
              placeholder="Сообщение"
              className="min-h-[160px] rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <button
              type="submit"
              className="rounded-2xl bg-cyan-400 py-5 text-xl font-black text-black transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]"
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-gray-500">
        © 2026 ALEXEY.EXE
      </footer>
    </main>
  );
}