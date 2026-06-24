import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
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
