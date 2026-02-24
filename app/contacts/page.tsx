import { BuildRouteButton } from "@/components/BuildRouteButton";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { YandexMap } from "@/components/YandexMap";

export const metadata = {
  title: "Контакты",
  description:
    "Контакты Усадьбы Ушмор: адрес (Рязанская область, Клепиковский район, д. Ушмор), телефон 8 (910) 613-00-22, email, Telegram.",
  keywords: ["контакты усадьба ушмор", "адрес усадьбы ушмор", "как добраться ушмор"],
};

export default function ContactsPage() {
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
            className="mb-4 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Контакты
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Напишите или позвоните — мы с радостью ответим на ваши вопросы и
            поможем организовать праздник в усадьбе.
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

      {/* Где нас найти и контакты — две колонки на десктопе */}
      <section id="content" className="border-t border-brand-muted/50 bg-brand-light/85 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
            {/* Левая колонка: где нас найти + адрес */}
            <div className="flex flex-col rounded-2xl border border-brand-muted/50 bg-white p-6 shadow-sm sm:p-8">
              <h2
                className="mb-1 text-xl font-normal tracking-wide text-brand-dark sm:text-2xl"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                Где нас найти
              </h2>
              <p
                className="mb-5 text-sm text-brand-dark/80 sm:text-base"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Дорога не займет много времени
              </p>
              {/* Маршрут — вертикальная цепочка с линией и точками */}
              <div className="mb-6 rounded-xl bg-brand-light/80 px-4 py-4 sm:px-5 sm:py-5">
                <ul
                  className="relative border-l-2 border-brand-muted/60 pl-4 sm:pl-5"
                  aria-label="Маршрут"
                >
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-1.5">
                    <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-dark bg-white ring-2 ring-white sm:-left-[11px]" />
                    <span
                      className="font-semibold text-brand-dark"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Москва
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-1.5">
                    <span
                      className="absolute -left-[7px] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 shrink-0 rounded-full sm:-left-[11px]"
                      style={{ backgroundColor: "rgb(140, 132, 132)" }}
                    />
                    <span className="rounded-md bg-brand-muted/80 px-2 py-0.5 text-xs font-medium text-brand-dark">
                      170 км
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-1.5">
                    <span className="absolute -left-[7px] top-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-brand-dark bg-white ring-2 ring-white sm:-left-[11px]">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-brand-dark"
                        aria-hidden
                      />
                    </span>
                    <span
                      className="font-semibold text-brand-dark"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Усадебный Комплекс
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-1.5">
                    <span
                      className="absolute -left-[7px] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 shrink-0 rounded-full sm:-left-[11px]"
                      style={{ backgroundColor: "rgb(140, 132, 132)" }}
                    />
                    <span className="rounded-md bg-brand-muted/80 px-2 py-0.5 text-xs font-medium text-brand-dark">
                      80 км
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-1.5">
                    <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-dark bg-white ring-2 ring-white sm:-left-[11px]" />
                    <span
                      className="font-semibold text-brand-dark"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Рязань
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-4">
                <BuildRouteButton />
                <a
                  href="https://yandex.ru/profile/233487873190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark/90"
                >
                  Открыть в Яндекс картах
                </a>
              </div>
            </div>

            {/* Правая колонка: реквизиты и связь */}
            <div className="flex flex-col rounded-2xl border border-brand-muted/50 bg-white p-6 shadow-sm sm:p-8">
              <h2
                className="mb-6 text-xl font-normal tracking-wide text-brand-dark sm:text-2xl"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                Контакты
              </h2>
              <div
                className="mb-6 rounded-2xl bg-white/80 px-4 py-4 shadow-[0_2px_12px_rgba(140,132,132,0.08)]"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <p
                  className="border-b border-brand-muted/50 pb-2 text-lg text-brand-dark"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  ООО «УК УШМОР»
                </p>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                  <dt className="text-brand-dark/55">ИНН</dt>
                  <dd className="tabular-nums font-medium text-brand-dark/90">6234173874</dd>
                  <dt className="text-brand-dark/55">ОГРН</dt>
                  <dd className="tabular-nums font-medium text-brand-dark/90">1176234028651</dd>
                </dl>
              </div>
              <ul className="space-y-5">
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-dark/80">
                    Бронирование по телефону
                  </p>
                  <a
                    href="tel:+79106130022"
                    className="mt-1 block text-lg text-brand-dark hover:text-brand-dark"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    8 (910) 613-00-22
                  </a>
                  <p className="mt-0.5 text-sm text-brand-dark/80">
                    с 8.00 до 22.00 ежедневно
                  </p>
                </li>
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-dark/80">
                    Email
                  </p>
                  <a
                    href="mailto:info@usadba-na-pre.ru"
                    className="mt-1 block text-brand-dark underline decoration-brand-muted underline-offset-2 hover:text-brand-dark"
                  >
                    info@usadba-na-pre.ru
                  </a>
                </li>
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-dark/80">
                    Telegram
                  </p>
                  <a
                    href="https://t.me/usadba_na_pre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-brand-dark underline decoration-brand-muted underline-offset-2 hover:text-brand-dark"
                  >
                    Написать в Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Карта — отдельная секция на всю ширину, прижата к футеру */}
      <section className="relative z-0 w-full overflow-hidden" aria-label="Карта">
        <div className="bg-white px-4 py-4 text-center sm:px-6 sm:py-5">
          <h2
            className="text-lg font-normal text-brand-dark sm:text-xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Усадьба Ушмор
          </h2>
          <p
            className="mt-1 text-brand-dark"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Рязанская область, Клепиковский район, д. Ушмор
          </p>
          <p className="mt-0.5 text-sm text-brand-dark/80">55.180429, 40.092341</p>
        </div>
        <YandexMap
          center={[55.180429, 40.092341]}
          zoom={15}
          balloonTitle="Усадьба Ушмор"
          balloonBody="Рязанская область, Клепиковский район, д. Ушмор. <br><a href='https://yandex.ru/profile/233487873190' target='_blank' rel='noopener noreferrer'>Открыть в Яндекс картах</a>"
          className="h-[320px] w-full min-w-0 sm:h-[400px]"
        />
      </section>
    </>
  );
}
