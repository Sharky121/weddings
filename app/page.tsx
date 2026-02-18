import Image from "next/image";
import Link from "next/link";

function ScrollIndicator() {
  return (
    <a
      href="#content"
      className="mt-2 flex flex-shrink-0 justify-center rounded-full p-2.5 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition hover:bg-white/15 hover:text-white"
      aria-label="Листать вниз"
    >
      <svg
        width="28"
        height="28"
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
  );
}

const sections = [
  {
    title: "Об Усадьбе",
    href: "/about",
    description:
      "Усадьба Ушмор — уникальное место для проведения свадьбы. Старинный парк, уютные беседки, гостевые дома и изысканная природа Мещеры.",
  },
  {
    title: "Свадьба в Усадьбе",
    href: "/wedding",
    description:
      "Безупречный сервис и наша личная заинтересованность в результате делают каждое свадебное торжество эталоном вкуса и стиля.",
  },
  {
    title: "Портфолио",
    href: "/portfolio",
    description:
      "О том, как проходят наши мероприятия и свадьбы, лучше любых слов расскажет портфолио — от камерного торжества до большой классической свадьбы.",
  },
  {
    title: "Гостевые дома",
    href: "/guest-houses",
    description:
      "Комфортные и роскошные номера в наших гостевых домах подарят вам незабываемые впечатления и исключительный уют.",
  },
  {
    title: "Кейтеринг",
    href: "/catering",
    description:
      "Банкет, гала-ужин, фуршет — безукоризненный сервис и богатство вкусов для вашего торжества.",
  },
  {
    title: "Фотосессии",
    href: "/photo-sessions",
    description:
      "Мы открыты для фотосессий, рекламных и fashion-съёмок в усадьбе на лоне природы.",
  },
  {
    title: "Венчание",
    href: "/wedding-ceremony",
    description:
      "Проведение венчания в усадьбе — атмосфера и условия для вашего таинства.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: первый экран, как в наших требованиях */}
      <section
        id="hero"
        className="relative flex h-[100dvh] h-screen flex-col items-center justify-center overflow-hidden bg-stone-900 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: "url(/welcome_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="relative z-10 flex max-h-[90vh] flex-col items-center justify-center gap-3 py-4 text-center text-white sm:gap-4 sm:py-6">
          <p
            className="text-center text-base font-semibold uppercase tracking-[0.2em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-lg md:text-xl"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Премиальные свадьбы в сердце Мещеры
          </p>
          <p
            className="max-w-lg text-center text-lg leading-snug drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Изысканность и роскошь на лоне природы
          </p>
          <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-6 sm:gap-8">
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
          <ScrollIndicator />
        </div>
      </section>

      {/* Блок «Усадьба для свадьбы» — как на leodoro.ru */}
      <section
        id="content"
        className="border-t border-stone-200 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-6 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Усадьба для свадьбы в Подмосковье
          </h2>
          <p className="mb-4 text-center leading-relaxed text-stone-600">
            Усадьба Ушмор — уникальное место для проведения свадьбы в
            Подмосковье. Наша усадьба — это не просто красивый архитектурный
            комплекс: старинный парк и сад, беседки и аллеи, гостевые дома и
            изысканная природа Мещеры.
          </p>
          <p className="text-center leading-relaxed text-stone-600">
            Место, в котором мы принимаем гостей, проводим свадьбы и торжества
            и каждый день отдаём своё сердце и душу.
          </p>
        </div>
      </section>

      {/* Карточки разделов: 4 в первой строке, 3 во второй по центру под первой */}
      <section className="border-t border-stone-200 bg-stone-50/50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {sections.slice(0, 4).map(({ title, href, description }) => (
              <article
                key={href}
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <h3
                  className="mb-3 text-xl font-normal tracking-wide text-stone-800 sm:text-2xl"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {title}
                </h3>
                <p className="mb-5 leading-relaxed text-stone-600">
                  {description}
                </p>
                <Link
                  href={href}
                  className="inline-block text-sm font-medium uppercase tracking-wider text-amber-800 hover:text-amber-900"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  Подробнее
                </Link>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-10 lg:gap-10">
            {sections.slice(4, 7).map(({ title, href, description }) => (
              <article
                key={href}
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <h3
                  className="mb-3 text-xl font-normal tracking-wide text-stone-800 sm:text-2xl"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {title}
                </h3>
                <p className="mb-5 leading-relaxed text-stone-600">
                  {description}
                </p>
                <Link
                  href={href}
                  className="inline-block text-sm font-medium uppercase tracking-wider text-amber-800 hover:text-amber-900"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  Подробнее
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
