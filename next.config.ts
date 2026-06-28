import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/projects/interview-minds",
        destination: "/projects/interviewminds",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '<https://gautam-kr.vercel.app/llms.txt>; rel="alternate"; type="text/markdown"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
