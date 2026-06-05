export default function MaterialsPage() {
  const sections = [
    {
      title: "ЕГЭ Математика",
      href: "/materials/ege-math",
      lessons: 42,
    },
    {
      title: "Информатика",
      href: "/materials/informatics",
      lessons: 37,
    },
    {
      title: "Физика",
      href: "/materials/physics",
      lessons: 28,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-6xl font-black">
          Учебные материалы
        </h1>

        <p className="mt-4 text-xl text-gray-500">
          Теория, задачи, разборы и подготовка к ЕГЭ.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {sections.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-[36px] border border-white/40 bg-white/70 p-8 shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-3xl font-black">
                {item.title}
              </div>

              <div className="mt-3 text-gray-500">
                {item.lessons} материалов
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}