"use client";

import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

type Props = {
  images: string[];
  labels: string[];
};

export function GuestHousePhotoGrid({ images, labels }: Props) {
  const slides = images.map((src, i) => ({ src, alt: labels[i] ?? `Фото ${i + 1}` }));

  return (
    <ImageLightbox slides={slides}>
      {(openAt) => (
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(i)}
              className={`group cursor-pointer overflow-hidden rounded-lg text-left shadow-sm transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2 ${
                i === 0
                  ? "col-span-2 row-span-2 min-h-[200px] sm:min-h-[260px]"
                  : "min-h-[120px] sm:min-h-[140px]"
              }`}
            >
              <Image
                src={src}
                alt={labels[i] ?? `Фото ${i + 1}`}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}
    </ImageLightbox>
  );
}
