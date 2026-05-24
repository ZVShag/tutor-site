"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Alex Tutor
          </div>

          <a
            href="https://t.me/ТВОЙ_USERNAME"
            target="_blank"
            className="rounded-full bg-white text-black px-5 py-2 font-semibold hover:scale-105 transition"
          >
            Telegram
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl">
                <Star className="w-4 h-4 text-yellow-400" />
                Premium online education
              </div>

              <h1 className="mt-8 text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                Подготовка
                <span className="block text-blue-400">
                  к экзаменам
                </span>
                нового уровня
              </h1>

              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-xl">
                Индивидуальные онлайн-занятия с современным
                подходом, понятными объяснениями и реальными
                результатами.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="group rounded-2xl bg-blue-500 px-8 py-5 text-lg font-bold flex items-center gap-3 hover:scale-105 transition"
                >
                  Записаться
                  <ArrowRight className="group-hover:translate-x-1 transition" />
                </a>

                <a
                  href="#results"
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-5 text-lg font-semibold hover:bg-white/10 transition"
                >
                  Результаты
                </a>
              </div>
            </motion.div>
          </div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-12 h-12 text-blue-400" />

                    <div>
                      <h3 className="text-2xl font-bold">
                        100+ учеников
                      </h3>

                      <p className="text-gray-400">
                        успешно подготовлены
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-12 h-12 text-yellow-400" />

                    <div>
                      <h3 className="text-2xl font-bold">
                        Высокие баллы
                      </h3>

                      <p className="text-gray-400">
                        индивидуальная стратегия
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-12 h-12 text-green-400" />

                    <div>
                      <h3 className="text-2xl font-bold">
                        Современный подход
                      </h3>

                      <p className="text-gray-400">
                        интерактивное обучение
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="px-6 py-24 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              Результаты учеников
            </h2>

            <p className="mt-4 text-xl text-gray-400">
              Реальные достижения и поступления
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              ["94", "ЕГЭ математика"],
              ["91", "Английский язык"],
              ["89", "ОГЭ"],
            ].map(([score, title]) => (
              <div
                key={title}
                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center"
              >
                <div className="text-6xl font-black text-blue-400">
                  {score}
                </div>

                <div className="mt-4 text-xl text-gray-300">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              Отзывы
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              "Очень понятные объяснения и комфортная атмосфера.",
              "Подготовился к экзамену намного лучше, чем ожидал.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  “{text}”
                </p>

                <div className="mt-6 font-bold text-white">
                  — Ученик
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-12">
          <div className="text-center">
            <h2 className="text-5xl font-black">
              Начать обучение
            </h2>

            <p className="mt-6 text-xl text-gray-400">
              Оставьте заявку и получите персональный план подготовки
            </p>
          </div>

          <form
            className="mt-12 flex flex-col gap-5"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const data = {
                name: (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value,
                contact: (
                  form.elements.namedItem("contact") as HTMLInputElement
                ).value,
                message: (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value,
              };

              await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              // @ts-ignore
              window.ym?.(109389609, "reachGoal", "lead");

              alert("Заявка отправлена!");
              form.reset();
            }}
          >
            <input
              name="name"
              placeholder="Ваше имя"
              required
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-gray-500 outline-none"
            />

            <input
              name="contact"
              placeholder="Telegram или телефон"
              required
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-gray-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Что хотите изучать?"
              className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-gray-500 outline-none"
            />

            <button
              type="submit"
              className="rounded-2xl bg-blue-500 py-5 text-xl font-bold hover:scale-[1.02] transition"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Alex Tutor
            </h3>

            <p className="mt-2 text-gray-500">
              Premium online education
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://t.me/ТВОЙ_USERNAME"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Telegram */}
      <a
        href="https://t.me/alexeytutor72"
        target="_blank"
        className="fixed bottom-6 right-6 rounded-full bg-blue-500 px-6 py-4 font-bold shadow-2xl hover:scale-110 transition z-50"
      >
        Telegram
      </a>
    </main>
  );
}