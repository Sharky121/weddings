import { GuestHousePhotoGrid } from "@/components/GuestHousePhotoGrid";
import { ParallaxBackground } from "@/components/ParallaxBackground";

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
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 sm:px-6"
      >
        <ParallaxBackground backgroundImage="/guest_home_bg.jpg" />
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
      <section id="content" className="border-t border-brand-muted/50 bg-brand-light/80 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-xl text-brand-dark tracking-wide sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.6 }}
          >
            Гостевой дом состоит из двух изолированных частей
            <br />
            <span className="font-semibold text-brand-dark">Английская</span> и <span className="font-semibold text-brand-dark">Прованс</span>.
          </p>
          <p
            className="mt-4 text-center text-lg font-normal tracking-wide text-brand-dark sm:text-xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.6 }}
          >
            Площадь дома — 400м², готов принять до 12 гостей.
          </p>
        </div>
      </section>

      {/* Английская часть */}
      <section className="border-t border-brand-muted/50 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 border-b border-brand-muted/50 pb-3 text-2xl font-normal text-brand-dark sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Английская часть
          </h2>

          {/* 1 этаж */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="mb-2 text-2xl font-medium tracking-wide text-brand-dark sm:text-3xl" style={{ fontFamily: "var(--font-forum)" }}>
                1 этаж
              </p>
              <p
                className="mb-4 text-brand-dark/80 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Общая зона для приёма гостей и отдыха.
              </p>
              <p
                className="text-brand-dark leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Гостевой салон с камином.
              </p>
            </div>
            <GuestHousePhotoGrid
              images={englishStage1Images}
              labels={englishStage1Images.map((_, i) => `Первый этаж — фото ${i + 1}`)}
            />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="mb-2 text-2xl font-medium tracking-wide text-brand-dark sm:text-3xl" style={{ fontFamily: "var(--font-forum)" }}>
                2 этаж
              </p>
              <p
                className="mb-4 text-brand-dark/80 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Просторные номера и общие зоны.
              </p>
              <ul
                className="list-inside list-disc space-y-1.5 text-brand-dark leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <li>Три двухкомнатных номера с отдельными ванными (душ) и балконами</li>
                <li>Столовая и кухня — для общих трапез</li>
              </ul>
            </div>
            <GuestHousePhotoGrid
              images={englishStage2Images}
              labels={englishStage2Images.map((_, i) => `Второй этаж — фото ${i + 1}`)}
            />
          </div>
        </div>
      </section>

      {/* Часть Прованс */}
      <section className="border-t border-brand-muted/50 bg-brand-light/50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 border-b border-brand-muted/50 pb-3 text-2xl font-normal text-brand-dark sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Часть Прованс
          </h2>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-4">
              <p
                className="mb-4 text-brand-dark/80 italic"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Уединённая часть дома с камерной атмосферой.
              </p>
              <ul
                className="list-inside list-disc space-y-1.5 text-brand-dark leading-relaxed"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <li>Две спальни и большой санузел с душем</li>
                <li>Гостиная и кабинет-библиотека</li>
              </ul>
            </div>
            <GuestHousePhotoGrid
              images={provanceImages}
              labels={provanceImages.map((_, i) => `Прованс — фото ${i + 1}`)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
