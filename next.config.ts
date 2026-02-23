import type { NextConfig } from "next";

// При задании NEXT_PUBLIC_SITE_URL стили и скрипты грузятся с этого домена (важно для .рф и кастомных доменов).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
const nextConfig: NextConfig = {
  ...(siteUrl && { assetPrefix: siteUrl }),
};

export default nextConfig;
