import { ImageLightboxGrid } from "@/components/ImageLightbox";

export const metadata = {
  title: "Фотосессии — Усадьба Ушмор",
  description:
    "Фотосессии в усадьбах — разнообразные локации: исторический антураж, природа и современные тренды.",
};

const fotosessionImages = Array.from(
  { length: 9 },
  (_, i) => `/fotosession_${i + 1}.jpg`
);

export default function PhotoSessionsPage() {
  return (
    <>
      {/* Секция-заголовок */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: "url(/welcome_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-6 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Фотосессии в Усадьбах
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            В наших Усадьбах много разнообразных локаций для проведения ваших
            фотосессий, которые легко сочетают в себе не только исторический
            антураж и природную эстетику, но и современные тренды!
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

      {/* Секция-описание — цитата */}
      <section
        id="content"
        className="border-t border-stone-200 bg-stone-50 py-14 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <blockquote className="relative text-center">
            <span
              className="absolute -top-2 left-0 text-7xl font-serif leading-none text-stone-200 sm:text-8xl"
              aria-hidden
            >
              {"\u201C"}
            </span>
            <p
              className="relative pt-8 text-lg leading-loose text-stone-600 sm:pt-10 sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Дворянская и Пушкинская эпохи, серебряный век, сказочный и
              мифологический стиль, готика и декаданс! А еще этно, винтаж и
              классика, фэшн и бьюти-портрет.
            </p>
            <p
              className="relative mt-6 text-lg leading-loose text-stone-600 sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Наши Усадьбы подойдут под любую вашу самую изысканную и уникальную
              задумку.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Фотографии фотосессий — плитка с сохранением пропорций */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ImageLightboxGrid
            images={fotosessionImages}
            labels={fotosessionImages.map((_, i) => `Фотосессия — фото ${i + 1}`)}
            gridClassName="grid grid-cols-3 gap-3 sm:gap-4"
          />
        </div>
      </section>
    </>
  );
}
