"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export type Slide = { src: string; alt?: string };

type ImageLightboxProps = {
  slides: Slide[];
  children: (openAt: (index: number) => void) => ReactNode;
};

/** Оборачивает контент и рендерит лайтбокс. Дочерний контент получает openAt(i) для открытия по индексу. */
export function ImageLightbox({ slides, children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {children(openAt)}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
        plugins={[Thumbnails]}
        thumbnails={{ position: "end", width: 100, height: 72, gap: 8, borderRadius: 6 }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}

type ImageLightboxGridProps = {
  images: string[];
  labels?: string[];
  gridClassName?: string;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Карточки по высоте подстраиваются под пропорции фото (вертикальные/горизонтальные). */
  proportional?: boolean;
  /** Плитка (колонки): пропорциональные фото, без пустых промежутков. */
  tile?: boolean;
  /** Число колонок в режиме плитки (по умолчанию 2). */
  tileColumns?: 2 | 3 | 4;
};

/** Сетка фото с лайтбоксом (одинаковые ячейки, пропорциональные или плитка). */
export function ImageLightboxGrid({
  images,
  labels = [],
  gridClassName = "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
  imageClassName = "h-48 w-full object-cover sm:h-56 lg:h-52",
  imageWidth = 400,
  imageHeight = 300,
  proportional = false,
  tile = false,
  tileColumns = 2,
}: ImageLightboxGridProps) {
  const slides: Slide[] = images.map((src, i) => ({
    src,
    alt: labels[i] ?? `Фото ${i + 1}`,
  }));

  const useTile = proportional && tile;
  const columnsClass =
    tileColumns === 4 ? "columns-4" : tileColumns === 3 ? "columns-3" : "columns-2";
  const wrapperClass = useTile
    ? `${columnsClass} gap-3 sm:gap-4`
    : proportional
      ? `${gridClassName} items-start`
      : gridClassName;
  const buttonClass = useTile
    ? "group mb-3 sm:mb-4 cursor-pointer overflow-hidden rounded-xl bg-brand-light text-left shadow-sm transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2 break-inside-avoid"
    : "group cursor-pointer overflow-hidden rounded-xl bg-brand-light text-left shadow-sm transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2";

  return (
    <ImageLightbox slides={slides}>
      {(openAt) => (
        <div className={wrapperClass}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className={buttonClass}
            >
              {proportional ? (
                <img
                  src={src}
                  alt={labels[i] ?? `Фото ${i + 1}`}
                  className="block w-full transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={src}
                  alt={labels[i] ?? `Фото ${i + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                  className={`${imageClassName} transition-transform duration-300 group-hover:scale-105`}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </ImageLightbox>
  );
}
