import { PhotoSessionGallery } from "@/components/PhotoSessionGallery";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata = {
  title: "Фотосессии",
  description:
    "Фотосессии в усадьбе Ушмор — разнообразные локации: исторический антураж, природа и современные тренды. Рязанская область.",
};

const fotosessionImages = [
  "/fotosession_1.jpg",
  "/fotosession_2.jpg",
  "/fotosession_3.jpg",
  "/fotosession_4.jpg",
  "/fotosession_6.jpg",
  "/fotosession_7.jpg",
  "/fotosession_8.jpg",
  "/fotosession_9.jpg",
  "/fotosession_5.png",
  "/fotosession_6.png",
  "/fotosession_10.png",
  "/fotosession_11.png",
  "/fotosession_12.png",
  "/fotosession_13.png",
  "/fotosession_14.png",
  "/fotosession_15.png",
  "/fotosession_16.png",
  "/fotosession_17.png",
  "/fotosession_18.png",
  "/fotosession_19.png",
  "/fotosession_20.png",
  "/fotosession_21.png",
];

export default function PhotoSessionsPage() {
  return (
    <>
      {/* Секция-заголовок */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 sm:px-6"
      >
        <ParallaxBackground backgroundImage="/welcome_bg.jpg" />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Фотосессии в Усадьбе
          </h1>
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
        className="border-t border-brand-muted/50 bg-brand-light/85 py-14 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <blockquote className="relative text-center">
            <span
              className="absolute -top-2 left-0 text-7xl font-serif leading-none text-brand-light sm:text-8xl"
              aria-hidden
            >
              {"\u201C"}
            </span>
            <p
              className="relative pt-8 text-lg leading-loose text-brand-dark sm:pt-10 sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Усадьба Ушмор соединившая в себе исторический антураж и природную эстетику — уникальная локация для проведения неповторимых фото и видео сессий.
            </p>
            <p
              className="relative mt-6 text-lg leading-loose text-brand-dark sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Пушкинская эпоха, Серебрянный век, Англия времен Шерлока Холмса, декаденс, готика, этно, винтаж, фэшн…
            </p>
            <p
              className="relative mt-6 text-lg leading-loose text-brand-dark sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Мы предоставим вам возможность воплотить ваш самый оригинальный замысел.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Фотографии фотосессий — галерея с превью */}
      <section className="border-t border-brand-muted/50 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PhotoSessionGallery
            images={fotosessionImages}
            labels={fotosessionImages.map((_, i) => `Фотосессия — фото ${i + 1}`)}
          />
        </div>
      </section>
    </>
  );
}
