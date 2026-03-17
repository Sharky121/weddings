import { ParallaxBackground } from "@/components/ParallaxBackground";
import { PortfolioBlock } from "@/components/PortfolioBlock";

export const metadata = {
  title: "Портфолио",
  description:
    "Портфолио свадеб и мероприятий в усадьбе Ушмор — реальные истории и фотографии наших гостей. Рязанская область.",
};

/** Пути к фото в папке portfolio/portfolio_{n}/ (порядок 1, 2, …) */
function portfolioImages(n: number, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/portfolio/portfolio_${n}/portfolio_${n}_${i + 1}.jpg`
  );
}

const portfolioItems = [
  { title: "Роман и Дарья", images: portfolioImages(1, 8) },
  { title: "Илья и Алена", images: portfolioImages(2, 14) },
  { title: "Денис и Алиса", images: portfolioImages(3, 15) },
  { title: "Владислав и Виктория", images: portfolioImages(4, 8) },
  { title: "Василий и Яна", images: portfolioImages(5, 5) },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Секция-заголовок: на весь первый экран */}
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
            Портфолио
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

      {/* Секция с цитатой и блоками портфолио */}
      <section
        id="content"
        className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <blockquote className="relative mb-12 text-center sm:mb-14">
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
              Наши свадьбы
            </p>
          </blockquote>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <PortfolioBlock
                key={item.title}
                title={item.title}
                images={item.images}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
