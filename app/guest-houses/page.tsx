import Image from "next/image";

export const metadata = {
  title: "Гостевые дома — Усадьба Ушмор",
  description:
    "Гостевой дом усадьбы Ушмор в готическом стиле — до 12 гостей, английская и прованс части",
};

const englishStage1Images = [
  "/english_guest_stage-1_1.jpg",
  "/english_guest_stage-1_2.jpg",
  "/english_guest_stage-1_3.jpg",
];

const englishStage2Images = [
  "/english_guest_stage-2_1.jpg",
  "/english_guest_stage-2_2.jpg",
  "/english_guest_stage-2_3.jpg",
];

const provanceImages = [
  "/provance_guest_1.jpg",
  "/provance_guest_2.jpg",
  "/provance_guest_3.jpg",
];

export default function GuestHousesPage() {
  return (
    <>
      {/* Секция-заголовок: на весь первый экран */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: "url(/guest_home_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-4 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Гостевые дома Усадьбы Ушмор
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Гостевой Дом Усадьбы Ушмор спроектирован в готическом стиле, отделен
            от основного пространства живой изгородью, что позволяет гостям с
            комфортом отдыхать в уютном дворике.
          </p>
        </div>
        <a
          href="#content"
          className="group absolute bottom-8 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center overflow-visible rounded-full text-white/90 transition hover:text-white"
          aria-label="Листать вниз"
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/50"
            aria-hidden
            style={{
              animation: "scroll-ripple-wave 2s ease-out infinite",
              animationDelay: "0s",
            }}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/50"
            aria-hidden
            style={{
              animation: "scroll-ripple-wave 2s ease-out infinite",
              animationDelay: "0.65s",
            }}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/50"
            aria-hidden
            style={{
              animation: "scroll-ripple-wave 2s ease-out infinite",
              animationDelay: "1.3s",
            }}
          />
          <span
            className="absolute inset-0 rounded-full bg-white/10 transition-colors group-hover:bg-white/15"
            aria-hidden
          />
          <svg
            className="relative z-10 h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Общий заголовок для обеих частей */}
      <section id="content" className="border-t border-stone-200 bg-stone-50/70 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-xl text-stone-700 tracking-wide sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.6 }}
          >
            Гостевой дом состоит из двух изолированных частей
            <br />
            <span className="font-semibold text-stone-900">Английская</span> и <span className="font-semibold text-stone-900">Прованс</span>.
          </p>
          <p
            className="mt-4 text-center text-base font-normal tracking-wide text-stone-500 sm:text-lg"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Площадь дома - 400м², готов принять до 12 гостей.
          </p>
        </div>
      </section>

      {/* Английская часть */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 border-b border-stone-200 pb-3 text-2xl font-normal text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Английская часть
          </h2>

          {/* 1 этаж */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="mb-2 text-2xl font-medium tracking-wide text-stone-700 sm:text-3xl" style={{ fontFamily: "var(--font-forum)" }}>
                1 этаж
              </p>
              <p
                className="mb-4 text-stone-500 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Общая зона для приёма гостей и отдыха.
              </p>
              <p
                className="text-stone-700 leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Гостевой салон с камином.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8">
              {englishStage1Images.map((src, i) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-lg ${
                    i === 0 ? "col-span-2 row-span-2 min-h-[200px] sm:min-h-[260px]" : "min-h-[120px] sm:min-h-[140px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Первый этаж — фото ${i + 1}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="mb-2 text-2xl font-medium tracking-wide text-stone-700 sm:text-3xl" style={{ fontFamily: "var(--font-forum)" }}>
                2 этаж
              </p>
              <p
                className="mb-4 text-stone-500 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Просторные номера и общие зоны.
              </p>
              <ul
                className="list-inside list-disc space-y-1.5 text-stone-700 leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <li>Три двухкомнатных номера с отдельными ванными (душ) и балконами</li>
                <li>Столовая и кухня — для общих трапез</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8">
              {englishStage2Images.map((src, i) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-lg ${
                    i === 0 ? "col-span-2 row-span-2 min-h-[200px] sm:min-h-[260px]" : "min-h-[120px] sm:min-h-[140px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Второй этаж — фото ${i + 1}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Часть Прованс */}
      <section className="border-t border-stone-200 bg-stone-50/50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 border-b border-stone-200 pb-3 text-2xl font-normal text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Часть Прованс
          </h2>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p
                className="mb-4 text-stone-500 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Уединённая часть дома с камерной атмосферой.
              </p>
              <ul
                className="list-inside list-disc space-y-1.5 text-stone-700 leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <li>Две спальни и большой санузел с душем</li>
                <li>Гостиная и кабинет-библиотека</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8">
              {provanceImages.map((src, i) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-lg ${
                    i === 0 ? "col-span-2 row-span-2 min-h-[200px] sm:min-h-[260px]" : "min-h-[120px] sm:min-h-[140px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Прованс — фото ${i + 1}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
