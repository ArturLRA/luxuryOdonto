import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard build for Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
