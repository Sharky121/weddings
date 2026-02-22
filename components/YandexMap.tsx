"use client";

import { useEffect, useRef } from "react";

const YANDEX_MAPS_SCRIPT = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

let loadPromise: Promise<void> | null = null;

function loadYandexMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.ymaps) return Promise.resolve();
  if (document.querySelector(`script[src="${YANDEX_MAPS_SCRIPT}"]`)) {
    return loadPromise ?? new Promise((resolve) => {
      const check = () => {
        if (window.ymaps) return resolve();
        requestAnimationFrame(check);
      };
      check();
    });
  }
  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = YANDEX_MAPS_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Yandex Maps script failed to load"));
    document.head.appendChild(script);
  });
  return loadPromise;
}

type YandexMapInstance = {
  geoObjects: { add: (obj: object) => void };
  destroy: () => void;
};

declare global {
  interface Window {
    ymaps?: {
      ready: (cb: () => void) => void;
      Map: new (
        element: string | HTMLElement,
        state: { center: number[]; zoom: number; controls?: string[] },
        options?: object
      ) => YandexMapInstance;
      Placemark: new (
        geometry: number[],
        properties: { balloonContentHeader?: string; balloonContentBody?: string; balloonContentFooter?: string },
        options?: object
      ) => object;
    };
  }
}

type YandexMapProps = {
  /** Широта, долгота */
  center?: [number, number];
  zoom?: number;
  balloonTitle?: string;
  balloonBody?: string;
  className?: string;
};

export function YandexMap({
  center = [55.180429, 40.092341],
  zoom = 15,
  balloonTitle = "Усадьба Ушмор",
  balloonBody = "Рязанская область, Клепиковский район, д. Ушмор",
  className = "h-[280px] w-full rounded-xl overflow-hidden",
}: YandexMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<YandexMapInstance | null>(null);
  const initedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || initedRef.current) return;

    loadYandexMapsScript()
      .then(() => {
        if (!window.ymaps || !container || initedRef.current) return;
        window.ymaps.ready(() => {
          if (!window.ymaps || !container || initedRef.current) return;
          initedRef.current = true;
          const map = new window.ymaps.Map(container, {
            center,
            zoom,
            controls: ["zoomControl"],
          });
          mapRef.current = map;

          const placemark = new window.ymaps.Placemark(
            center,
            {
              balloonContentHeader: balloonTitle,
              balloonContentBody: balloonBody,
            },
            {
              preset: "islands#redDotIconWithCaption",
            }
          );

          map.geoObjects.add(placemark);
        });
      })
      .catch(console.error);

    return () => {
      if (mapRef.current) {
        try {
          mapRef.current.destroy();
        } catch {
          // ignore
        }
        mapRef.current = null;
      }
      initedRef.current = false;
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [center, zoom, balloonTitle, balloonBody]);

  return <div ref={containerRef} className={className} />;
}
