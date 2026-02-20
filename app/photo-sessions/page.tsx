export const metadata = {
  title: "Фотосессии — Усадьба",
  description: "Фотосессии в усадьбе",
};

export default function PhotoSessionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1
        className="mb-8 text-4xl font-normal tracking-wide text-stone-800"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        Фотосессии
      </h1>
      <p className="max-w-2xl text-stone-600">
        Контент страницы «Фотосессии» — здесь будут условия и примеры.
      </p>
    </div>
  );
}
