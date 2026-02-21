import Image from "next/image";
import { ImageLightboxGrid } from "@/components/ImageLightbox";
import { ImageSliderWithThumbs } from "@/components/ImageSliderWithThumbs";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata = {
  title: "Кейтеринг — Усадьба Ушмор",
  description:
    "Выездной ресторан Solo Catering Service — кейтеринг в Усадьбе Ушмор, опыт более 5 лет.",
};

const cateringAdvantages = [
  "Прозрачная смета",
  "Отсутствие пробкового сбора",
  "Контроль качества на всех этапах",
  "Оригинальное меню под заказчика",
  "Лучшее соотношение цена-качества",
  "Высочайший уровень обслуживания",
  "Персональный менеджер",
  "Наличие собственной мебели, текстиля, шатров",
];

const cateringBanquetImages = Array.from(
  { length: 19 },
  (_, i) => `/catering/catering_${i + 1}.jpg`
);

export default function CateringPage() {
  return (
    <>
      {/* Секция-заголовок: на весь первый экран */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-stone-900 px-4 sm:px-6"
      >
        <ParallaxBackground backgroundImage="/catering_bg.jpg" />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 max-w-2xl text-center">
          <h1
            className="mb-6 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Кейтеринг
          </h1>
          <p
            className="text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Выездной ресторан Solo Catering Service работает с Усадьбой Ушмор
            более 5 лет. Имеет огромный и уникальный опыт в обслуживании
            мероприятий различного уровня и масштаба.
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

      {/* Секция с описанием — цитата */}
      <section id="content" className="border-t border-stone-200 bg-stone-50 py-14 sm:py-16 lg:py-24">
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
              Профессионалы высочайшего класса, квалифицированные повара и
              официанты, специально оборудованная производственная зона,
              банкетный менеджер, который следит за таймингом, качеством,
              четкой подачей и визуальной составляющей каждого блюда — все это
              гарантирует высочайший уровень сервиса. Наш кейтеринг — это ваш
              персонализированный ресторан. Вам остается только сделать выбор,
              за все остальное мы отвечаем репутацией и сердцем.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Логотип и преимущества */}
      <section className="border-t border-stone-200 bg-stone-50/60 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 border-b border-stone-200 pb-3 text-2xl font-normal tracking-wide text-stone-800 sm:mb-10 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Преимущества
          </h2>
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Логотип — равная высота с соседним блоком */}
            <div className="flex flex-col rounded-2xl border border-stone-200/80 bg-white shadow-sm">
              <div className="flex min-h-full flex-1 flex-col items-center justify-center px-8 py-10 sm:px-12 sm:py-12">
                <Image
                  src="/catering_logo.svg"
                  alt="Solo Catering Service"
                  width={380}
                  height={160}
                  className="h-auto w-full max-w-sm object-contain"
                />
              </div>
            </div>
            {/* Список преимуществ — равная высота */}
            <div className="flex flex-col rounded-2xl border border-stone-200/80 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
              <ul
                className="flex-1 space-y-4 text-stone-700 sm:text-lg"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {cateringAdvantages.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Банкет и Гала-Ужин */}
      <section className="border-t border-stone-200 bg-stone-50 py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Банкет и Гала-Ужин
          </h2>
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
              Эстетика, вкус, сервис и комфорт — гаранты безупречных банкетов. Мы
              уделяем огромное внимание индивидуальной сервировке и качеству
              обслуживания каждого гостя.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Фотографии банкета — слайдер с миниатюрами на странице */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ImageSliderWithThumbs
            images={cateringBanquetImages}
            labels={cateringBanquetImages.map((_, i) => `Банкет и Гала-Ужин — фото ${i + 1}`)}
            mainImageClassName="aspect-video w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
