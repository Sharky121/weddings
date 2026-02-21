import Link from "next/link";
import { ImageLightboxGrid } from "@/components/ImageLightbox";
import { MapImageLightbox } from "@/components/MapImageLightbox";

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
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: "url(/welcome_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
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
      <section id="content" className="bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Видео
          </h2>
          <div className="overflow-hidden rounded-xl bg-stone-900 shadow-lg">
            <video
              className="w-full"
              controls
              playsInline
              poster="/welcome_bg.jpg"
              preload="metadata"
            >
              <source src="/wedding_video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      </section>

      {/* 3. План усадьбы + 6 фотографий */}
      <section className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            План Усадьбы
          </h2>
          <MapImageLightbox />
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Фотографии Усадьбы
          </h2>
          <ImageLightboxGrid
            images={usadbaImages}
            labels={usadbaImages.map((_, i) => `Усадьба Ушмор — фото ${i + 1}`)}
            gridClassName="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            imageClassName="h-64 w-full object-cover sm:h-72"
            imageWidth={600}
            imageHeight={400}
          />
        </div>
      </section>

      {/* Карточки-ссылки на разделы */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Гостевые дома", href: "/guest-houses" },
              { title: "Свадьба в Усадьбе", href: "/wedding" },
              { title: "Венчание", href: "/wedding-ceremony" },
              { title: "Портфолио", href: "/portfolio" },
              { title: "Мероприятия", href: "/events" },
              { title: "Кейтеринг", href: "/catering" },
            ].map(({ title, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-stone-300 hover:shadow sm:p-5 lg:p-6"
              >
                <h2 className="text-base font-semibold text-stone-800 sm:text-lg">
                  {title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
