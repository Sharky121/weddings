import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Сжатые версии картинок кешируются на сервере на 30 дней.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Фото и видео из public/ — браузер кеширует на неделю, а не перекачивает при каждом заходе.
        source: "/:file*.:ext(jpg|jpeg|png|svg|mp4|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [{ source: "/events", destination: "/winter-garden", permanent: true }];
  },
};

export default nextConfig;
