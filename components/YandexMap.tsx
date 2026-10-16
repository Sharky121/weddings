"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "./Skeleton";
import { useNearViewport } from "@/lib/useNearViewport";

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

// Константа, а не литерал в параметрах: иначе новый массив на каждом рендере пересоздавал бы карту.
const DEFAULT_CENTER: [number, number] = [55.180429, 40.092341];

type YandexMapProps = {
  /** Широта, долгота */
  center?: [number, number];
  zoom?: number;
  balloonTitle?: string;
  balloonBody?: string;
  className?: string;
};

export function YandexMap({
  center = DEFAULT_CENTER,
  zoom = 15,
  balloonTitle = "Усадьба Ушмор",
  balloonBody = "Рязанская область, Клепиковский район, д. Ушмор",
  className = "h-[280px] w-full rounded-xl overflow-hidden",
}: YandexMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<YandexMapInstance | null>(null);
  const initedRef = useRef(false);
  // Скрипт Яндекс.Карт (~700 КБ) грузится только когда до карты долистали.
  const { ref: wrapperRef, near } = useNearViewport<HTMLDivElement>("300px");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!near || !container || initedRef.current) return;

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
          setReady(true);
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
  }, [near, center, zoom, balloonTitle, balloonBody]);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <div ref={containerRef} className="absolute inset-0" />
      {!ready && <Skeleton className="absolute inset-0" label="Загрузка карты…" />}
    </div>
  );
}
