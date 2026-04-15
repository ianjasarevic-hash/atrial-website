import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atrial-website",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;