"use client";

import { useEffect, useRef, useState } from "react";

/**
 * true, когда элемент приблизился к экрану (с запасом rootMargin). Срабатывает один раз.
 * Нужен, чтобы тяжёлые блоки (видео, галереи, карта) грузились только когда до них долистали.
 */
export function useNearViewport<T extends Element>(rootMargin = "300px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [near, rootMargin]);

  return { ref, near };
}
