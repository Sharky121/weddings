import Image from "next/image";
import { PhotoSessionGallery } from "@/components/PhotoSessionGallery";
import { ParallaxBackground } from "@/components/ParallaxBackground";

export const metadata = {
  title: "Кейтеринг",
  description:
    "Выездной ресторан Solo Catering Service — кейтеринг в Усадьбе Ушмор, опыт более 5 лет. Рязанская область.",
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

const cateringBanquetImages = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19].map(
  (n) => `/catering/catering_${n}.jpg`
);

export default function CateringPage() {
  return (
    <>
      {/* Секция-заголовок: на весь первый экран */}
      <section
        className="relative flex h-[calc(100dvh-12rem)] min-h-[280px] flex-col items-center justify-center overflow-hidden bg-brand-dark px-4 sm:px-6"
      >
        <ParallaxBackground backgroundImage="/catering_bg.jpg" />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
          <h1
            className="mb-6 text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl sm:mb-8"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Кейтеринг
          </h1>
          <Image
            src="/catering_logo.svg"
            alt="Solo Catering Service"
            width={180}
            height={119}
            className="h-auto w-full max-w-[140px] object-contain drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] [mix-blend-mode:lighten] sm:max-w-[180px]"
          />
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

      {/* Описание кейтеринга */}
      <section id="content" className="border-t border-brand-muted/50 bg-brand-light/85 py-14 sm:py-16 lg:py-24">
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
              Выездной ресторан Solo Catering Service работает с Усадьбой Ушмор
              более 5 лет. Имеет огромный и уникальный опыт в обслуживании
              мероприятий различного уровня и масштаба.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Преимущества */}
      <section className="border-t border-brand-muted/50 bg-gradient-to-b from-brand-light/40 to-brand-light/70 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-2xl font-normal tracking-wide text-brand-dark sm:text-3xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Преимущества
            </h2>
            <p
              className="mt-2 text-brand-dark/80 sm:text-lg"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Почему выбирают наш кейтеринг
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
            {cateringAdvantages.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-brand-muted/30 bg-white/90 px-5 py-4 shadow-sm transition-all duration-300 hover:border-brand-muted/50 hover:shadow-md sm:gap-5 sm:px-6 sm:py-5"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light/80 ring-1 ring-brand-muted/20 transition-colors group-hover:bg-brand-muted/20 sm:h-12 sm:w-12">
                  <Image
                    src="/diamond.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                    aria-hidden
                  />
                </span>
                <span className="text-brand-dark sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Банкет и Гала-Ужин */}
      <section className="border-t border-brand-muted/50 bg-brand-light/85 py-14 sm:py-16 lg:py-24">
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
              Эстетика, вкус, сервис и комфорт — гаранты безупречных банкетов. Мы
              уделяем огромное внимание индивидуальной сервировке и качеству
              обслуживания каждого гостя.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Фотографии банкета — слайдер как на Фотосессиях */}
      <section className="border-t border-brand-muted/50 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PhotoSessionGallery
            images={cateringBanquetImages}
            labels={cateringBanquetImages.map((_, i) => `Банкет и Гала-Ужин — фото ${i + 1}`)}
          />
        </div>
      </section>

      {/* Секция с описанием — цитата */}
      <section className="border-t border-brand-muted/50 bg-brand-light/85 py-14 sm:py-16 lg:py-24">
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
    </>
  );
}
