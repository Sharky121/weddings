"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
};

/** Сетка фото с лайтбоксом (одинаковые ячейки). */
export function ImageLightboxGrid({
  images,
  labels = [],
  gridClassName = "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
  imageClassName = "h-48 w-full object-cover sm:h-56 lg:h-52",
  imageWidth = 400,
  imageHeight = 300,
}: ImageLightboxGridProps) {
  const slides: Slide[] = images.map((src, i) => ({
    src,
    alt: labels[i] ?? `Фото ${i + 1}`,
  }));

  return (
    <ImageLightbox slides={slides}>
      {(openAt) => (
        <div className={gridClassName}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className="group cursor-pointer overflow-hidden rounded-xl bg-stone-100 text-left shadow-sm transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2"
            >
              <Image
                src={src}
                alt={labels[i] ?? `Фото ${i + 1}`}
                width={imageWidth}
                height={imageHeight}
                className={`${imageClassName} transition-transform duration-300 group-hover:scale-105`}
              />
            </button>
          ))}
        </div>
      )}
    </ImageLightbox>
  );
}
