import { ImageLightboxGrid } from "@/components/ImageLightbox";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { MapImageLightbox } from "@/components/MapImageLightbox";
import { VideoHoverCard } from "@/components/VideoHoverCard";

export const metadata = {
  title: "Об Усадьбе — Усадьба Ушмор",
  description:
    "Усадьба Ушмор в Национальном Мещерском парке — архитектурно-парковый ансамбль в стиле дворянского классицизма",
};

const usadbaImages = [
  "/usadba_1.jpg",
  "/usadba_2.jpg",
  "/usadba_3.jpg",
  "/usadba_4.jpg",
  "/usadba_5.jpg",
  "/usadba_6.jpg",
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Секция-заголовок: на весь первый экран */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 sm:px-6"
      >
        <div className="hero-bg-soft-in absolute inset-0">
          <ParallaxBackground backgroundImage="/welcome_bg.jpg" />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
        </div>
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-6 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Об Усадьбе
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Усадьба Ушмор расположена в центре Национального Мещерского парка, на
            границе Московской и Рязанской областей. Это прекрасный
            архитектурно-парковый ансамбль в стиле дворянского классицизма
            начала середины 19 века, 10 гектар охраняемой и огороженной
            территории со всех сторон окруженной девственной природой.
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

      {/* 2. Секция с видео */}
      <section id="content" className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-2 text-center text-2xl font-normal tracking-wide text-brand-dark sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Видео
          </h2>
          <p
            className="mb-8 text-center text-brand-dark"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Усадьба в кадре
          </p>
          <VideoHoverCard
            poster="/welcome_bg.jpg"
            videoSrc="/wedding_video.mp4"
            title="Об усадьбе"
          />
        </div>
      </section>

      {/* 3. План усадьбы + 6 фотографий */}
      <section className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-2 text-center text-2xl font-normal tracking-wide text-brand-dark sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            План Усадьбы
          </h2>
          <p
            className="mb-8 text-center text-brand-dark"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Территория и расположение объектов
          </p>
          <MapImageLightbox />
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-brand-dark sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Фотографии Усадьбы
          </h2>
          <ImageLightboxGrid
            images={usadbaImages}
            labels={usadbaImages.map((_, i) => `Усадьба Ушмор — фото ${i + 1}`)}
            gridClassName="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            imageClassName="h-72 w-full object-cover sm:h-80 lg:h-96"
            imageWidth={600}
            imageHeight={400}
          />
        </div>
      </section>
    </>
  );
}
