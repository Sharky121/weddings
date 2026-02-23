import type { NextConfig } from "next";

// Явно запрещаем абсолютные URL для ресурсов: только относительные пути от текущего хоста.
// Иначе при сборке на Vercel в HTML/CSS могут попасть ссылки на домен (в т.ч. punycode), который даёт таймауты.
const nextConfig: NextConfig = {
  assetPrefix: "",
  images: { unoptimized: true },
};

export default nextConfig;
