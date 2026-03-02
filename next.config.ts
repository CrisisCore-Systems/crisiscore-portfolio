import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_COMMIT:
      process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "unknown",
    NEXT_PUBLIC_BUILD_COMMIT_FULL:
      process.env.VERCEL_GIT_COMMIT_SHA ?? "unknown",
    NEXT_PUBLIC_BUILD_COMMIT_SOURCE: process.env.VERCEL_GIT_COMMIT_SHA
      ? "VERCEL_GIT_COMMIT_SHA"
      : "fallback",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
