import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io", "images.domains"],
  },
  experimental: {},
};

export default nextConfig;
