import type { NextConfig } from "next";

// На .рф запросы к /_next/static дают ERR_TIMED_OUT. Статику грузим с vercel.app.
const nextConfig: NextConfig = {
  assetPrefix: "https://weddings-git-main-sharky121s-projects.vercel.app",
};

export default nextConfig;
