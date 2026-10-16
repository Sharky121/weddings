"use client";

import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { optimizedSrc } from "@/lib/images";

type PhotoSessionGalleryViewProps = {
  images: string[];
  labels?: string[];
};

/**
 * Галерея на react-image-gallery: превью (thumbs), стрелки, клик по фото — полноэкранный режим.
 * Подключается лениво через PhotoSessionGallery.
 */
export default function PhotoSessionGalleryView({ images, labels = [] }: PhotoSessionGalleryViewProps) {
  const galleryRef = useRef<ImageGalleryRef>(null);

  const items: GalleryItem[] = images.map((src, i) => ({
    // Сжатые WebP вместо оригиналов: крупное фото до 1920px, превью — 256px.
    original: optimizedSrc(src, 1920),
    thumbnail: optimizedSrc(src, 256),
    originalAlt: labels[i] ?? `Фотосессия — фото ${i + 1}`,
    thumbnailAlt: labels[i] ?? `Фото ${i + 1}`,
  }));

  if (items.length === 0) return null;

  return (
    <div className="photo-session-gallery">
      <ImageGallery
        ref={galleryRef}
        items={items}
        showNav={true}
        showThumbnails={true}
        thumbnailPosition="bottom"
        showPlayButton={false}
        showFullscreenButton={true}
        infinite={true}
        lazyLoad={true}
        additionalClass="rounded-xl overflow-hidden"
        onClick={() => galleryRef.current?.fullScreen()}
      />
    </div>
  );
}
