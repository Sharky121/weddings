type SkeletonProps = {
  className?: string;
  /** Подпись под спиннером, например «Загрузка карты…». */
  label?: string;
};

/** Заглушка на месте блока, который ещё грузится: мягкая пульсация + спиннер в фирменных цветах. */
export function Skeleton({ className = "", label }: SkeletonProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-brand-muted/30 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 animate-pulse bg-brand-muted/30" aria-hidden />
      <div className="relative flex flex-col items-center gap-3">
        <Spinner />
        {label && (
          <span className="text-sm text-brand-dark/80" style={{ fontFamily: "var(--font-raleway)" }}>
            {label}
          </span>
        )}
      </div>
      {!label && <span className="sr-only">Загрузка…</span>}
    </div>
  );
}

/** className задаёт размер и цвета: по умолчанию фирменный серый, для тёмного фона — белый. */
export function Spinner({ className = "h-8 w-8 border-brand-dark/20 border-t-brand-dark/70" }: { className?: string }) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 ${className}`}
      aria-hidden
    />
  );
}
