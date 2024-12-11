import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;

// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'], // Allow images from Unsplash
  },
}

