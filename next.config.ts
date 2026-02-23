import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Чтобы стили, скрипты и _next/static грузились с кастомного домена на Vercel,
  // задайте NEXT_PUBLIC_SITE_URL в настройках проекта (без слэша в конце).
  assetPrefix: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || undefined,
};

export default nextConfig;
