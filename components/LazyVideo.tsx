"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Видео, которое начинает загружаться только когда блок приближается к экрану.
 * Без этого браузер качает весь файл (десятки–сотни МБ) сразу при открытии страницы.
 */
export function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={visible ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="none"
    >
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  );
}
