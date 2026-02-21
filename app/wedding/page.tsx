import { ImageLightboxGrid } from "@/components/ImageLightbox";

export const metadata = {
  title: "Свадьба в Усадьбе Ушмор — Усадьба Ушмор",
  description:
    "Проведение свадьбы в усадьбе Ушмор — красота, торжественность и изысканность для главного дня.",
};

const locations = [
  "Манеж-конюшня",
  "Шатер у пруда",
  "Партеры Графского дома",
  "Колоннада",
  "Беседка",
  "Водный каскад",
  "Итальянский дворик",
  "Ореховый сад",
  "Теннисный корт",
];

const weddingLocationImages = [
  "/wedding_1.jpg",
  "/wedding_2.jpg",
  "/wedding_3.jpg",
  "/wedding_4.jpg",
  "/wedding_5.jpg",
  "/wedding_6.jpg",
  "/wedding_7.jpg",
  "/wedding_8.jpg",
];

export default function WeddingPage() {
  return (
    <>
      {/* Секция-заголовок */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: "url(/wedding_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-6 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Свадьба в Усадьбе Ушмор
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Если вы хотите провести один из главных дней своей жизни в удивительном
            по красоте, торжественности и изысканности месте, мы предлагаем вам
            Усадьбу Ушмор.
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

      {/* Описание */}
      <section id="content" className="border-t border-stone-200 bg-stone-50/80 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-lg leading-loose text-stone-700 sm:text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
          >
            Вся территория Усадьбы сдается эксклюзивно для одной пары и их гостей,
            что позволяет выбрать любую локацию для проведения фото-видео сессии,
            церемонии бракосочетания, фуршета, банкета.
          </p>
        </div>
      </section>

      {/* Свадебные локации */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-10 border-b border-stone-200 pb-3 text-2xl font-normal text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Свадебные локации
          </h2>
          <ul
            className="mb-12 grid list-none grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            {locations.map((name, i) => (
              <li
                key={name}
                className="flex items-center gap-3 text-stone-700"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-600">
                  {i + 1}
                </span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <ImageLightboxGrid
            images={weddingLocationImages}
            labels={locations.map((name) => `Свадебная локация — ${name}`)}
          />
        </div>
      </section>

      {/* Отдаленность и территория */}
      <section className="border-t border-stone-200 bg-stone-50/80 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 text-center text-xl font-normal tracking-wide text-stone-800 sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Отдаленность от населенных пунктов
          </h2>
          <p
            className="mb-8 text-center text-lg leading-loose text-stone-700 sm:text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
          >
            Усадьба окружена лесом и граничит с Иванковским озером, а ее большая
            территория позволяет воплотить в жизнь все ваши желания, а торжество
            не будет нарушено посторонним вмешательством.
          </p>
          <p
            className="text-center text-lg leading-loose text-stone-700 sm:text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-forum)", lineHeight: 1.7 }}
          >
            Территория Усадьбы Ушмор охраняется круглосуточно.
          </p>
        </div>
      </section>
    </>
  );
}
