import Image from "next/image";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { VideoHoverCard } from "@/components/VideoHoverCard";

export const metadata = {
  title: "Усадьба Ушмор — Премиальные свадьбы в сердце Мещеры",
  description:
    "Усадьба Ушмор — уникальное место для проведения свадьбы. Старинный парк, гостевые дома, изысканная природа Мещеры. Рязанская область.",
};

export default function HomePage() {
  return (
    <>
      {/* Секция-заголовок — как на остальных страницах */}
      <section
        id="hero"
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 sm:px-6"
      >
        <ParallaxBackground
          backgroundImage="/welcome_bg.jpg"
          backgroundPosition="center 25%"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-4 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Усадьба Ушмор
          </h1>
          <p
            className="mb-6 text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Премиальные свадьбы в сердце Мещеры. Изысканность и роскошь на лоне
            природы.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <Image
              src="/top_awards_logo.svg"
              alt="100 лучших площадок"
              width={180}
              height={90}
              className="h-12 w-auto object-contain drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:h-14 md:h-16"
            />
            <Image
              src="/wa_logo.png"
              alt="Wedding Awards"
              width={180}
              height={90}
              className="h-12 w-auto object-contain drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:h-14 md:h-16"
            />
          </div>
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

      {/* Блок «Усадьба для свадьбы» — цитата */}
      <section
        id="content"
        className="border-t border-brand-muted/50 bg-brand-light/80 py-14 sm:py-16 lg:py-24"
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
              Усадьба Ушмор — уникальное место для проведения свадьбы в
              Подмосковье. Наша усадьба — это не просто красивый архитектурный
              комплекс: старинный парк и сад, беседки и аллеи, гостевые дома и
              изысканная природа Мещеры.
            </p>
            <p
              className="mt-6 text-lg leading-loose text-brand-dark sm:text-xl lg:text-2xl"
              style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
            >
              Место, в котором мы принимаем гостей, проводим свадьбы и торжества
              и каждый день отдаём своё сердце и душу.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Секция с видео */}
      <section className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20">
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
            title="Усадьба Ушмор"
          />
        </div>
      </section>
    </>
  );
}
