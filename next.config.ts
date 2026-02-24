import type { NextConfig } from "next";

// Продакшен: вся статика (_next/static, скрипты, стили, картинки, видео) отдаётся с короткого домена.
const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://ushmorweddings.vercel.app"
      : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ushmorweddings.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
