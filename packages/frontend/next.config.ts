import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
