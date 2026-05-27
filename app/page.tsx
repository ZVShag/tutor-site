"use client";

import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import AnalyticsChart from "@/components/AnalyticsChart";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f7fb] text-black">

      {/* EFFECTS */}
      <CursorGlow />
      <SmoothScroll />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[#f5f7fb]" />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-250px] top-[100px] h-[600px] w-[600px] rounded-full bg-violet-300/25 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-250px] left-[20%] h-[550px] w-[550px] rounded-full bg-sky-200/30 blur-3xl"
        />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* NAVBAR */}
      <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-3xl border border-white/40 bg-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl">

        <div className="flex items-center justify-between px-8 py-5">

          <div className="text-xl font-black tracking-tight">
            ALEXEY.AI
          </div>

          <nav className="hidden gap-10 text-sm font-medium text-gray-500 md:flex">
            <a href="#analytics">Analytics</a>
            <a href="#universities">Universities</a>
            <a href="#features">System</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-bold text-white"
          >
            Start
          </a>
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
                Результат,
                <span className="block bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                  а не просто занятия
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-500">
                Современная система подготовки к ЕГЭ и поступлению
                в ведущие вузы России с аналитикой прогресса,
                персональной стратегией и AI-инструментами обучения.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl bg-black px-8 py-5 text-lg font-bold text-white shadow-xl"
                >
                  Начать обучение

                  <ArrowRight className="transition group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href="#analytics"
                  className="rounded-2xl border border-black/10 bg-white/70 px-8 py-5 text-lg font-semibold backdrop-blur-xl"
                >
                  Смотреть аналитику
                </motion.a>
              </div>

              {/* HERO STATS */}
              <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5">

                {[
                  ["94", "Средний балл"],
                  ["120+", "Учеников"],
                  ["87%", "Поступление в топ вузы"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
                  >
                    <div className="text-4xl font-black text-cyan-600">
                      {value}
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                      {label}
                    </div>
                  </div>
                ))}
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

            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

              <div className="absolute right-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="flex items-center justify-between">

                <div>
                  <div className="text-sm font-medium text-gray-400">
                    AI Dashboard
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    Student Analytics
                  </div>
                </div>

                <div className="rounded-2xl bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">
                  LIVE
                </div>
              </div>

              {/* SCORE */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="mt-8 rounded-3xl border border-black/5 bg-gradient-to-br from-cyan-500 to-blue-500 p-8 text-white shadow-2xl"
              >

                <div className="text-sm opacity-80">
                  Average Progress
                </div>

                <div className="mt-3 text-6xl font-black">
                  94%
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/20">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "94%",
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    className="h-full rounded-full bg-white"
                  />
                </div>
              </motion.div>

              {/* MINI CARDS */}
              <div className="mt-6 grid gap-5 md:grid-cols-2">

                {[
                  ["120+", "Students"],
                  ["AI", "Assistant"],
                  ["24/7", "Support"],
                  ["1:1", "Mentoring"],
                ].map(([value, label]) => (
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    key={label}
                    className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-lg backdrop-blur-xl"
                  >

                    <div className="text-3xl font-black text-cyan-500">
                      {value}
                    </div>

                    <div className="mt-2 text-gray-500">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI STATUS */}
              <motion.div
                whileHover={{
                  y: -3,
                }}
                className="mt-6 rounded-3xl border border-black/5 bg-black p-6 text-white"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <div className="text-sm text-gray-400">
                      AI Recommendation
                    </div>

                    <div className="mt-2 text-xl font-bold">
                      Personalized Learning Path Ready
                    </div>
                  </div>

                  <div className="h-4 w-4 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="relative z-10 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between">

            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-cyan-500">
                ANALYTICS
              </div>

              <h2 className="mt-4 text-5xl font-black">
                Результаты учеников
              </h2>
            </div>

            <div className="hidden text-gray-500 md:block">
              Данные за последние 3 года
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {/* CHART */}
            <div className="rounded-[40px] border border-white/40 bg-white/70 p-10 shadow-xl backdrop-blur-2xl lg:col-span-2">

              <div className="flex items-center justify-between">

                <div>
                  <div className="text-sm text-gray-500">
                    Средний результат ЕГЭ
                  </div>

                  <div className="mt-2 text-5xl font-black">
                    94 балла
                  </div>
                </div>

                <div className="rounded-2xl bg-green-100 px-4 py-2 font-bold text-green-700">
                  +18%
                </div>
              </div>

              <AnalyticsChart />
            </div>

            {/* SIDE STATS */}
            <div className="space-y-8">

              {[
                ["63", "Средний по стране"],
                ["91", "Мои ученики"],
                ["TOP", "МГУ / ВШЭ / ИТМО"],
              ].map(([value, label]) => (
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  key={label}
                  className="rounded-[36px] border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-2xl"
                >

                  <div className="text-5xl font-black text-cyan-500">
                    {value}
                  </div>

                  <div className="mt-4 text-gray-500">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section
        id="universities"
        className="relative z-10 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="text-sm font-semibold tracking-[0.2em] text-cyan-500">
              UNIVERSITIES
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Куда поступают ученики
            </h2>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">

            {[
              "МГУ",
              "ВШЭ",
              "ИТМО",
              "СПбГУ",
            ].map((uni) => (
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                key={uni}
                className="w-[220px] rounded-[36px] border border-white/40 bg-white/70 p-10 text-center shadow-xl backdrop-blur-2xl"
              >

                <div className="text-3xl font-black">
                  {uni}
                </div>
              </motion.div>
            ))}
          </div>
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
                Education System
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500">
              Современная система подготовки к ЕГЭ и поступлению
              с аналитикой прогресса, AI-инструментами и
              персональной стратегией обучения.
            </p>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">

            {[
              "Персональная стратегия",
              "AI-аналитика прогресса",
              "Современная система обучения",
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
                  Premium образовательная платформа
                  с современным UX и системой подготовки,
                  ориентированной на результат.
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

            <div className="text-center">

  <div className="text-sm font-medium tracking-[0.3em] text-cyan-500">
    CONTACT
  </div>

  <h2 className="mt-5 text-5xl font-black">
    Начать подготовку
  </h2>

  {/* CONTACT CARDS */}
  <div className="mt-10 grid gap-4 md:grid-cols-2">

    <a
      href="https://t.me/alextutor72"
      target="_blank"
      className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1"
    >
      <div className="text-sm text-gray-400">
        Telegram
      </div>

      <div className="mt-2 text-2xl font-black">
        @alextutor72
      </div>
    </a>

    <a
      href="https://max.ru/u/f9LHodD0cOKhoQfyeVt27KMIawrLuMr0j2OgkYBrXB5aoRqvaLMwhclvI2o"
      target="_blank"
      className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition hover:-translate-y-1"
    >
      <div className="text-sm text-gray-400">
        MAX
      </div>

      <div className="mt-2 text-2xl font-black">
        @alextutor72
      </div>
    </a>

  </div>
</div>

            <h2 className="mt-5 text-5xl font-black">
              Начать подготовку
            </h2>
          </div>

          <form className="mt-12 space-y-5">

            <input
              placeholder="Ваше имя"
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <input
              placeholder="Telegram"
              className="w-full rounded-2xl border border-black/10 bg-white/80 px-6 py-5 outline-none transition focus:border-cyan-400"
            />

            <textarea
              placeholder="Сообщение"
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
              Отправить заявку
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