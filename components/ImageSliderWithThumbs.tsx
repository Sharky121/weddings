"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/free-mode";

type ImageSliderWithThumbsProps = {
  images: string[];
  labels?: string[];
  mainImageClassName?: string;
  thumbWidth?: number;
  thumbHeight?: number;
};

/**
 * Swiper slider with thumbs: основной слайд + полоса миниатюр (снизу на мобильных, справа на lg).
 * Связка через модуль Thumbs. Стрелки только у основного слайда; миниатюры — перетаскивание и клик по умолчанию.
 */
export function ImageSliderWithThumbs({
  images,
  labels = [],
  mainImageClassName = "aspect-video w-full object-cover",
  thumbWidth = 100,
  thumbHeight = 72,
}: ImageSliderWithThumbsProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isVertical, setIsVertical] = useState(false);
  const mainPrevRef = useRef<HTMLButtonElement>(null);
  const mainNextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsVertical(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onMainSwiper = useCallback((swiper: SwiperType) => {
    (swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement }).prevEl = mainPrevRef.current;
    (swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement }).nextEl = mainNextRef.current;
    swiper.navigation?.init();
    swiper.navigation?.update();
  }, []);

  if (images.length === 0) return null;

  const arrowClass =
    "absolute z-10 flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white/90 text-stone-600 shadow transition hover:bg-white hover:text-stone-800 disabled:pointer-events-none disabled:opacity-40";

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:[aspect-ratio:16/9]">
      {/* Основной слайдер: на lg задаёт высоту блока через aspect-ratio родителя */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-stone-100 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
          <Swiper
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation={{ prevEl: mainPrevRef.current, nextEl: mainNextRef.current }}
            onSwiper={onMainSwiper}
            spaceBetween={0}
            slidesPerView={1}
            className="!absolute !inset-0 !h-full !w-full !overflow-hidden rounded-xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={src} className="!h-full">
                <div className="relative h-full w-full bg-stone-100">
                  <Image
                    src={src}
                    alt={labels[i] ?? `Фото ${i + 1}`}
                    fill
                    className={mainImageClassName}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={mainPrevRef}
            type="button"
            className={`${arrowClass} left-2 top-1/2 -translate-y-1/2`}
            aria-label="Предыдущее фото"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={mainNextRef}
            type="button"
            className={`${arrowClass} right-2 top-1/2 -translate-y-1/2`}
            aria-label="Следующее фото"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Полоса миниатюр: на lg в одной высоте с основным слайдом, поведение по умолчанию (перетаскивание, клик) */}
      <div
        className="flex shrink-0 flex-col overflow-hidden rounded-xl lg:h-full lg:min-h-0"
        style={isVertical ? { width: 100 } : undefined}
      >
        <Swiper
          key={isVertical ? "v" : "h"}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode]}
          watchSlidesProgress
          spaceBetween={8}
          slidesPerView="auto"
          freeMode={{ momentum: true, sticky: false }}
          direction={isVertical ? "vertical" : "horizontal"}
          grabCursor
          touchReleaseOnEdges
          resistanceRatio={0.85}
          className={`thumbs-slider !h-full min-h-0 flex-1 lg:!min-h-0 ${isVertical ? "direction-vertical" : ""}`}
        >
          {images.map((src) => (
            <SwiperSlide
              key={src}
              className="!h-16 !w-20 !shrink-0 cursor-pointer sm:!h-20 sm:!w-28 lg:!h-[72px] lg:!w-[100px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-transparent transition-all [.swiper-slide-thumb-active_&]:border-stone-400 [.swiper-slide-thumb-active_&]:ring-2 [.swiper-slide-thumb-active_&]:ring-stone-300 [.swiper-slide-thumb-active_&]:ring-offset-2">
                <Image
                  src={src}
                  alt=""
                  width={thumbWidth}
                  height={thumbHeight}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
