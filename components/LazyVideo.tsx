"use client";

import { useState } from "react";
import { blurStyle, optimizedSrc } from "@/lib/images";
import { useNearViewport } from "@/lib/useNearViewport";
import { Spinner } from "./Skeleton";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

/**
 * Видео, которое начинает загружаться только когда блок приближается к экрану.
 * Без этого браузер качает весь файл (десятки МБ) сразу при открытии страницы.
 * Пока видео буферизуется — поверх постера крутится лоадер.
 */
export function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const { ref, near } = useNearViewport<HTMLDivElement>("200px");
  const [playing, setPlaying] = useState(false);

  return (
    <div ref={ref} className="relative h-full w-full" style={poster ? blurStyle(poster) : undefined}>
      <video
        className={className}
        src={near ? src : undefined}
        // Постер — сжатый WebP, и только когда до видео долистали:
        // иначе он грузится вместе с фоном первого экрана и тормозит его.
        poster={near && poster ? optimizedSrc(poster, 1920) : undefined}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="none"
        onPlaying={() => setPlaying(true)}
        onWaiting={() => setPlaying(false)}
      >
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      {near && !playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
          <Spinner className="h-12 w-12 border-white/30 border-t-white" />
        </div>
      )}
    </div>
  );
}
