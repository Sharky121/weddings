import { ParallaxBackground } from "@/components/ParallaxBackground";
import { YandexMap } from "@/components/YandexMap";

export const metadata = {
  title: "Контакты — Усадьба Ушмор",
  description: "Контакты усадьбы Ушмор — адрес, телефон, форма обратной связи.",
};

export default function ContactsPage() {
  return (
    <>
      {/* Секция-заголовок */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-stone-900 px-4 sm:px-6"
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
      <section id="content" className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
            {/* Левая колонка: где нас найти + адрес */}
            <div className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h2
                className="mb-1 text-xl font-normal tracking-wide text-stone-800 sm:text-2xl"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                Где нас найти
              </h2>
              <p
                className="mb-5 text-sm text-stone-500 sm:text-base"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Дорога не займет много времени
              </p>
              {/* Маршрут — вертикальная цепочка с линией и точками */}
              <div className="mb-6 rounded-xl bg-stone-50/80 px-4 py-4 sm:px-5 sm:py-5">
                <ul
                  className="relative border-l-2 border-stone-300 pl-4 sm:pl-5"
                  aria-label="Маршрут"
                >
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-0.5 first:pt-0">
                    <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-stone-500 bg-white ring-2 ring-white sm:-left-[11px]" />
                    <span
                      className="font-semibold text-stone-800"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Москва
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-0.5">
                    <span className="absolute -left-[7px] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-300 sm:-left-[11px]" />
                    <span className="rounded-md bg-stone-200/80 px-2 py-0.5 text-xs font-medium text-stone-600">
                      170 км
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-0.5">
                    <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-500 shadow-sm ring-2 ring-white sm:-left-[11px]" />
                    <span
                      className="font-semibold text-stone-800"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Усадебный Комплекс
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-0.5">
                    <span className="absolute -left-[7px] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-300 sm:-left-[11px]" />
                    <span className="rounded-md bg-stone-200/80 px-2 py-0.5 text-xs font-medium text-stone-600">
                      80 км
                    </span>
                  </li>
                  <li className="relative flex min-h-[2.25rem] items-center gap-3 py-0.5 last:pb-0">
                    <span className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-stone-500 bg-white ring-2 ring-white sm:-left-[11px]" />
                    <span
                      className="font-semibold text-stone-800"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      Рязань
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-4">
                <a
                  href="https://yandex.ru/profile/233487873190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
                >
                  Открыть в Яндекс картах
                </a>
              </div>
            </div>

            {/* Правая колонка: реквизиты и связь */}
            <div className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h2
                className="mb-6 text-xl font-normal tracking-wide text-stone-800 sm:text-2xl"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                Контакты
              </h2>
              <div className="mb-6 rounded-xl bg-stone-50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                  Реквизиты
                </p>
                <div
                  className="mt-1 space-y-0.5 text-sm text-stone-700"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  <p>ООО «УК УШМОР»</p>
                  <p>ИНН 6234173874</p>
                  <p>ОГРН 1176234028651</p>
                </div>
              </div>
              <ul className="space-y-5">
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                    Бронирование по телефону
                  </p>
                  <a
                    href="tel:+79106130022"
                    className="mt-1 block text-lg text-stone-800 hover:text-stone-600"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    8 (910) 613-00-22
                  </a>
                  <p className="mt-0.5 text-sm text-stone-500">
                    с 8.00 до 22.00 ежедневно
                  </p>
                </li>
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                    Email
                  </p>
                  <a
                    href="mailto:info@usadba-na-pre.ru"
                    className="mt-1 block text-stone-800 underline decoration-stone-300 underline-offset-2 hover:text-stone-600"
                  >
                    info@usadba-na-pre.ru
                  </a>
                </li>
                <li>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                    Telegram
                  </p>
                  <a
                    href="https://t.me/usadba_na_pre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-stone-800 underline decoration-stone-300 underline-offset-2 hover:text-stone-600"
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
            className="text-lg font-normal text-stone-800 sm:text-xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Усадьба Ушмор
          </h2>
          <p
            className="mt-1 text-stone-700"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Рязанская область, Клепиковский район, д. Ушмор
          </p>
          <p className="mt-0.5 text-sm text-stone-500">55.180429, 40.092341</p>
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
