import blurData from "./blur-data.json";

const BLUR = blurData as Record<string, string>;

/**
 * Пропсы для next/image: размытая заглушка, видна сразу, пока грузится фото.
 * Для картинок без заглушки (логотипы, svg) возвращает пустой объект.
 */
export function blurProps(src: string): { placeholder?: "blur"; blurDataURL?: string } {
  const blurDataURL = BLUR[src];
  return blurDataURL ? { placeholder: "blur", blurDataURL } : {};
}

/** CSS-фон с размытой заглушкой — для обычных <img> и <video poster>. */
export function blurStyle(src: string): React.CSSProperties | undefined {
  const url = BLUR[src];
  return url ? { backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined;
}

/**
 * URL сжатой версии картинки через оптимизатор Next.js (WebP нужной ширины).
 * width должна быть из стандартного набора Next.js: 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840.
 */
export function optimizedSrc(src: string, width: 256 | 384 | 640 | 750 | 828 | 1080 | 1200 | 1920 | 2048 | 3840): string {
  if (!src.startsWith("/") || src.endsWith(".svg")) return src;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
