import type { NextConfig } from "next";

// Статика всегда грузится с этого хоста (на .рф запросы к /_next/static дают таймаут).
const nextConfig: NextConfig = {
  assetPrefix: "https://weddings-git-main-sharky121s-projects.vercel.app",
  images: { unoptimized: true },
};

export default nextConfig;
