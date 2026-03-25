import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zion-corporate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
