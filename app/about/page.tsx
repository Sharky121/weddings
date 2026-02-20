import Image from "next/image";
import Link from "next/link";

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
      {/* 1. Секция-заголовок: фон welcome_bg.jpg, заголовок по центру */}
      <section
        className="relative flex min-h-[40vh] flex-col items-center justify-center bg-stone-900 bg-cover bg-center bg-no-repeat py-20 sm:min-h-[50vh] sm:py-28"
        style={{ backgroundImage: "url(/welcome_bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <h1
          className="relative z-10 text-center text-4xl font-normal tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Об Усадьбе
        </h1>
      </section>

      {/* 2. Секция с видео */}
      <section className="bg-stone-50 py-12 sm:py-16 lg:py-20">
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
              src="/video.mp4"
              controls
              playsInline
              poster="/welcome_bg.jpg"
            >
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      </section>

      {/* 3. Секция описание */}
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-base leading-relaxed text-stone-700 sm:text-lg"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Усадьба Ушмор расположена в центре Национального Мещерского парка, на
            границе Московской и Рязанской областей. Это прекрасный
            архитектурно-парковый ансамбль в стиле дворянского классицизма
            начала середины 19 века, 10 гектар охраняемой и огороженной
            территории со всех сторон окруженной девственной природой.
          </p>
        </div>
      </section>

      {/* 4. План усадьбы + 6 фотографий */}
      <section className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            План Усадьбы
          </h2>
          <div className="mb-16 overflow-hidden rounded-xl bg-white shadow-md">
            <Image
              src="/map.png"
              alt="План усадьбы Ушмор"
              width={1200}
              height={800}
              className="w-full object-contain"
            />
          </div>
          <h2
            className="mb-8 text-center text-2xl font-normal tracking-wide text-stone-800 sm:text-3xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Фотографии Усадьбы
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usadbaImages.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl bg-white shadow-md"
              >
                <Image
                  src={src}
                  alt={`Усадьба Ушмор — фото ${i + 1}`}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
            ))}
          </div>
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
