import type { NextConfig } from "next";

// На домене .рф запросы к /_next/static с того же хоста дают таймаут. Грузим статику с *.vercel.app, где всё отвечает.
const vercelOrigin =
  typeof process.env.VERCEL_URL === "string"
    ? `https://${process.env.VERCEL_URL}`
    : "";

const nextConfig: NextConfig = {
  assetPrefix: vercelOrigin,
  images: { unoptimized: true },
};

export default nextConfig;
