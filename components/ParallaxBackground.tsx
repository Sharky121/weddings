"use client";

import { useEffect, useState } from "react";

const PARALLAX_FACTOR = 0.25;

type ParallaxBackgroundProps = {
  backgroundImage: string;
  backgroundPosition?: string;
  className?: string;
};

/**
 * Слой фона с эффектом параллакса при скролле (фон движется медленнее контента).
 * Размещать первым внутри секции с overflow-hidden.
 */
export function ParallaxBackground({
  backgroundImage,
  backgroundPosition = "center center",
  className = "",
}: ParallaxBackgroundProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * PARALLAX_FACTOR);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="absolute left-0 right-0 h-[130%] -top-[15%] bg-no-repeat bg-cover will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
    </div>
  );
}
