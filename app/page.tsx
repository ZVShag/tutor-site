"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Star,
  Mail,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      title: "Индивидуальные занятия",
      description:
        "Персональная программа обучения под цели ученика.",
    },
    {
      title: "Подготовка к экзаменам",
      description:
        "ЕГЭ, ОГЭ и международные экзамены.",
    },
    {
      title: "Мини-группы",
      description:
        "Эффективное обучение в небольших группах.",
    },
  ];

  const reviews = [
    {
      name: "Анна",
      text:
        "Очень понятные объяснения и комфортная атмосфера.",
    },
    {
      name: "Максим",
      text:
        "Подготовился к экзамену намного лучше, чем ожидал.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Современное
              <span className="block text-blue-600">
                онлайн-обучение
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-6 text-xl text-gray-600 leading-relaxed"
            >
              Индивидуальные занятия, подготовка к экзаменам
              и обучение с современным подходом.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="rounded-2xl bg-blue-600 px-8 py-4 text-white text-lg font-semibold hover:scale-105 transition">
                <a
  href="https://t.me/alextutor72"
  target="_blank"
  className="rounded-2xl bg-blue-600 px-8 py-4 text-white text-lg font-semibold hover:scale-105 transition inline-block"
>
  Написать в Telegram
</a>
              </button>

              <button className="rounded-2xl border border-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition">
                Подробнее
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl">
              <div className="rounded-[36px] bg-white p-10">
                <div className="space-y-6">
                  <div className="rounded-3xl bg-gray-100 p-6">
                    <div className="flex items-center gap-4">
                      <GraduationCap className="w-10 h-10 text-blue-600" />

                      <div>
                        <h3 className="font-bold text-xl">
                          100+ учеников
                        </h3>

                        <p className="text-gray-500">
                          успешно подготовлены
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-gray-100 p-6">
                    <div className="flex items-center gap-4">
                      <Star className="w-10 h-10 text-yellow-500" />

                      <div>
                        <h3 className="font-bold text-xl">
                          Высокие результаты
                        </h3>

                        <p className="text-gray-500">
                          индивидуальный подход
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-gray-100 p-6">
                    <div className="flex items-center gap-4">
                      <BookOpen className="w-10 h-10 text-green-600" />

                      <div>
                        <h3 className="font-bold text-xl">
                          Современные материалы
                        </h3>

                        <p className="text-gray-500">
                          интерактивное обучение
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Форматы обучения
            </h2>

            <p className="mt-4 text-gray-600 text-xl">
              Выбери удобный формат занятий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-[32px] bg-white p-10 border shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Отзывы учеников
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-[32px] bg-gray-100 p-10"
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  “{review.text}”
                </p>

                <div className="mt-6 font-bold">
                  — {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black text-white p-16 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Готов начать обучение?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Запишись на первое занятие и получи
            персональный план подготовки.
          </p>

          <button className="mt-10 rounded-2xl bg-white text-black px-8 py-4 text-lg font-bold hover:scale-105 transition">
            Записаться сейчас
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-6 py-10">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Alex Tutor
            </h3>

            <p className="mt-2 text-gray-500">
              Современное онлайн-обучение
            </p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <Mail className="w-5 h-5" />
            alextutor72@gmail.com
          </div>
        </div>
      </footer>
    </main>
  );
}