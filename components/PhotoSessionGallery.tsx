"use client";

import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

type PhotoSessionGalleryProps = {
  images: string[];
  labels?: string[];
};

/**
 * Галерея на react-image-gallery: превью (thumbs), стрелки, клик по фото — полноэкранный режим.
 */
export function PhotoSessionGallery({ images, labels = [] }: PhotoSessionGalleryProps) {
  const galleryRef = useRef<ImageGalleryRef>(null);

  const items: GalleryItem[] = images.map((src, i) => ({
    original: src,
    thumbnail: src,
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
        lazyLoad={false}
        additionalClass="rounded-xl overflow-hidden"
        onClick={() => galleryRef.current?.fullScreen()}
      />
    </div>
  );
}
