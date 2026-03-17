import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata = {
  title: "Прайс-лист",
  description:
    "Прайс-лист услуг Усадьбы Ушмор: аренда усадьбы под мероприятие, банкет, дополнительные услуги. Рязанская область, Мещера.",
  keywords: ["прайс усадьба ушмор", "аренда усадьбы под свадьбу", "стоимость мероприятия"],
};

const priceRows = [
  {
    name: "Аренда Усадьбы Ушмор",
    detail:
      "Аренда территории Усадьбы Ушмор (включая Манеж и шатер) для проведения свадебного мероприятия (с 6 утра дня  мероприятия до 6 утра следующего дня)",
    price: "450 000Р/ мероприятие",
    image: "/welcome_bg.jpg",
  },
  {
    name: "Аренда Усадьбы на Пре",
    detail:
      "Аренда с 18.00 вечера накануне мероприятия и до 6.00 утра следующего дня, после мероприятия",
    price: "350 000₽/мероприятие",
    image: "/usadba_na_pre.png",
  },
  {
    name: "Аренда Зимнего Сада Графского Дома",
    price: "от 250 000Р",
    image: "/usadba_rotunda.png",
  },
  {
    name: "Аренда гостевого дома (Размещение до 12 гостей)",
    price: "150 000Р/ сутки",
    image: "/guest_bg.jpg",
  },
  {
    name: "Камерная фотосессия",
    detail:
      "В любой локации на территории Усадьбы Ушмор. Фотосессия в интерьерах Графского дома (холл, каминный зал, библиотека, зимний сад)",
    price: "20 000 рублей / 3 часа, дополнительно + 10 000 рублей",
    image: "/winter-garden_bg.png",
  },
];

export default function PricePage() {
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
            Прайс-лист
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

      {/* Прайс — цитата и карточки */}
      <section id="content" className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
              Узнайте стоимость аренды усадьбы и дополнительных услуг
            </p>
          </blockquote>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {priceRows.map((row, index) => (
              <article
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-muted/50 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="relative h-40 flex-shrink-0 bg-brand-muted bg-cover bg-center bg-no-repeat sm:h-48"
                  style={{ backgroundImage: `url(${row.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col px-5 py-4 text-center sm:px-6 sm:py-5">
                  <div className="flex-1">
                    <h2
                      className="text-lg font-normal leading-snug text-brand-dark sm:text-xl"
                      style={{ fontFamily: "var(--font-forum)" }}
                    >
                      {row.name}
                    </h2>
                    {"detail" in row && row.detail ? (
                      <p
                        className="mt-2 text-sm leading-relaxed text-brand-dark"
                        style={{ fontFamily: "var(--font-raleway)" }}
                      >
                        {row.detail}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-4 border-t border-brand-muted/40 pt-4">
                    {row.price ? (
                      <p
                        className="text-xl font-normal text-brand-dark"
                        style={{ fontFamily: "var(--font-forum)" }}
                      >
                        {row.price}
                      </p>
                    ) : (
                      <p
                        className="text-brand-dark/80"
                        style={{ fontFamily: "var(--font-raleway)" }}
                      >
                        По запросу
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
