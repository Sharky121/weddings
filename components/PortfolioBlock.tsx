"use client";

import Image from "next/image";
import { ImageLightbox } from "@/components/ImageLightbox";

type PortfolioBlockProps = {
  title: string;
  images: string[];
};

/** Блок портфолио: карточка с превью и оверлеем; по клику открывается галерея (слайдер). */
export function PortfolioBlock({ title, images }: PortfolioBlockProps) {
  const slides = images.map((src, i) => ({
    src,
    alt: `${title} — фото ${i + 1}`,
  }));

  return (
    <ImageLightbox slides={slides}>
      {(openAt) => (
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-brand-muted/50 bg-white text-left shadow-md transition-all duration-300 hover:border-brand-muted/60 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-muted">
            <Image
              src={images[0] ?? ""}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Градиентный оверлей снизу для читаемости заголовка */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-opacity duration-300 group-hover:from-black/75"
              aria-hidden
            />
            {/* Заголовок поверх фото */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3
                className="text-xl font-normal tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-2xl"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                {title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-all duration-300 group-hover:gap-3 sm:text-base">
                Смотреть галерею
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </button>
      )}
    </ImageLightbox>
  );
}
