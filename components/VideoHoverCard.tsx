"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type VideoHoverCardProps = {
  poster: string;
  videoSrc: string;
  title?: string;
};

/** Карточка с постером; по клику открывается лайтбокс с видео. */
export function VideoHoverCard({
  poster,
  videoSrc,
  title = "Видео",
}: VideoHoverCardProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    videoRef.current?.pause();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  // Автозапуск видео при открытии лайтбокса
  useEffect(() => {
    if (!open) return;
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-2xl border border-brand-muted/50 bg-brand-dark text-left shadow-lg transition-all duration-300 hover:border-brand-muted/60 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-muted focus:ring-offset-2"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-dark sm:aspect-video">
          <Image
            src={poster}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          {/* Оверлей для читаемости по центру */}
          <div
            className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50"
            aria-hidden
          />
          {/* Контент по центру */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-6">
            <span className="relative mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors hover:bg-white/15 hover:text-white sm:h-16 sm:w-16">
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </span>
            <h3
              className="text-center text-xl font-normal tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] sm:text-2xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              {title}
            </h3>
            <span className="mt-2 text-sm font-medium text-white/90 sm:text-base">
              Смотреть видео
            </span>
          </div>
        </div>
      </button>

      {/* Лайтбокс с видео */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Видео"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Закрыть"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-brand-dark shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              controls
              playsInline
              preload="auto"
              poster={poster}
              className="w-full"
            >
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={close}
            aria-hidden
          />
        </div>
      )}
    </>
  );
}
