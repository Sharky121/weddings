"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "./Skeleton";
import { useNearViewport } from "@/lib/useNearViewport";

const GallerySkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="aspect-[3/2] w-full rounded-xl" label="Загрузка галереи…" />
    <div className="flex justify-center gap-2 overflow-hidden">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="h-[72px] w-[72px] shrink-0 animate-pulse rounded bg-brand-muted/40 md:h-[88px] md:w-[88px]" />
      ))}
    </div>
  </div>
);

// Код галереи и её стили грузятся отдельно от страницы.
const PhotoSessionGalleryView = dynamic(() => import("./PhotoSessionGalleryView"), {
  ssr: false,
  loading: GallerySkeleton,
});

type PhotoSessionGalleryProps = {
  images: string[];
  labels?: string[];
};

/** Галерея появляется, когда до неё долистали; до этого — заглушка того же размера. */
export function PhotoSessionGallery(props: PhotoSessionGalleryProps) {
  const { ref, near } = useNearViewport<HTMLDivElement>("400px");
  return <div ref={ref}>{near ? <PhotoSessionGalleryView {...props} /> : <GallerySkeleton />}</div>;
}
