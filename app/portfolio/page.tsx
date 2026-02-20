export const metadata = {
  title: "Портфолио — Усадьба",
  description: "Портфолио свадеб и мероприятий в усадьбе",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1
        className="mb-8 text-4xl font-normal tracking-wide text-stone-800"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        Портфолио
      </h1>
      <p className="max-w-2xl text-stone-600">
        Контент страницы «Портфолио» — здесь будут фотографии и кейсы.
      </p>
    </div>
  );
}
