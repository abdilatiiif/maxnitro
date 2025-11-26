import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
        port: "",
        pathname: "/steamcommunity/public/images/avatars/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
