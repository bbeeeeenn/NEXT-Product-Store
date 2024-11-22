import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            hostname: "**",
            protocol: "https",
            pathname: "/**",
            port: "",
         },
         {
            hostname: "**",
            protocol: "http",
            pathname: "/**",
            port: "",
         },
      ],
   },
};

export default nextConfig;
