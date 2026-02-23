import type { NextConfig } from "next";

// Относительные пути для всех ресурсов (_next/static, скрипты, стили) — грузятся с того же домена, что и страница (меньше таймаутов на .рф).
const nextConfig: NextConfig = {
  images: { unoptimized: true },
};

export default nextConfig;
