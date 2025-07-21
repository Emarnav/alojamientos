import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    devIndicators: false,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/alojamientos/**",
      },
    ],
  },
};

export default nextConfig;
