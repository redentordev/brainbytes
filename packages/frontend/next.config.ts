import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/static-app",
    },
    {
      source: "/",
      destination: "/static-app",
    },
  ],
};

export default nextConfig;
