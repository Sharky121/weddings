"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PARALLAX_FACTOR = 0.25;

type ParallaxBackgroundProps = {
  backgroundImage: string;
  backgroundPosition?: string;
  className?: string;
};

/**
 * Слой фона с эффектом параллакса при скролле (фон движется медленнее контента).
 * Размещать первым внутри секции с overflow-hidden.
 * Картинка идёт через next/image (сжатие + нужный размер под экран),
 * сдвиг меняется напрямую в DOM через requestAnimationFrame — без ре-рендеров React.
 */
export function ParallaxBackground({
  backgroundImage,
  backgroundPosition = "center center",
  className = "",
}: ParallaxBackgroundProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${window.scrollY * PARALLAX_FACTOR}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        ref={layerRef}
        className="absolute left-0 right-0 h-[130%] -top-[15%] will-change-transform"
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
          style={{ objectPosition: backgroundPosition }}
        />
      </div>
    </div>
  );
}
