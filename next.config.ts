import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/events", destination: "/winter-garden", permanent: true }];
  },
};

export default nextConfig;
