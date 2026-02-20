export const metadata = {
  title: "Мероприятия — Усадьба",
  description: "Проведение мероприятий в усадьбе",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1
        className="mb-8 text-4xl font-normal tracking-wide text-stone-800"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        Мероприятия
      </h1>
      <p className="max-w-2xl text-stone-600">
        Контент страницы «Мероприятия» — здесь будет описание форматов
        мероприятий.
      </p>
    </div>
  );
}
