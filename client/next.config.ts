import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
  images: {
    domains: ["localhost"], 
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/alojamientos/**",
      },
      {
        protocol: "https",
        hostname: "*.dinaserver.com", // Para dominios de Dinahosting
        pathname: "/alojamientos/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === 'production', // Para hosting compartido
  },
  // Configuración específica para hosting compartido
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
