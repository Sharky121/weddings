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
          className="mb-16 w-full overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2"
        >
          <Image
            src="/map.png"
            alt="План усадьбы Ушмор"
            width={1200}
            height={800}
            className="w-full object-contain"
          />
        </button>
      )}
    </ImageLightbox>
  );
}
