"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type PhotoSessionSliderProps = {
  images: string[];
  labels?: string[];
};

/**
 * Слайдер фото на Swiper: стрелки, точки пагинации, один слайд во всю ширину.
 */
export function PhotoSessionSlider({ images, labels = [] }: PhotoSessionSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const onSwiper = useCallback((swiper: SwiperType) => {
    const nav = swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement };
    nav.prevEl = prevRef.current ?? undefined;
    nav.nextEl = nextRef.current ?? undefined;
    swiper.navigation?.init();
    swiper.navigation?.update();
  }, []);

  if (images.length === 0) return null;

  const arrowClass =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-muted/50 bg-white/90 text-brand-dark shadow transition hover:bg-white hover:border-brand-muted disabled:pointer-events-none disabled:opacity-40";

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={onSwiper}
        spaceBetween={0}
        slidesPerView={1}
        loop={images.length > 1}
        className="!absolute !inset-0 !h-full !w-full overflow-hidden rounded-xl"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`} className="!h-full">
            <div className="relative h-full w-full bg-brand-light">
              <Image
                src={src}
                alt={labels[i] ?? `Фотосессия — фото ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        type="button"
        className={`${arrowClass} left-3 sm:left-4`}
        aria-label="Предыдущее фото"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextRef}
        type="button"
        className={`${arrowClass} right-3 sm:right-4`}
        aria-label="Следующее фото"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
