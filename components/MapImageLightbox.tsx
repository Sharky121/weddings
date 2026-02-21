"use client";

import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

const MAP_SLIDE = { src: "/map.png", alt: "План усадьбы Ушмор" };

export function MapImageLightbox() {
  return (
    <ImageLightbox slides={[MAP_SLIDE]}>
      {(openAt) => (
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group mb-16 w-full overflow-hidden rounded-xl bg-white shadow-md text-left transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2"
        >
          <Image
            src="/map.png"
            alt="План усадьбы Ушмор"
            width={1200}
            height={800}
            className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      )}
    </ImageLightbox>
  );
}
