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

const noStoreHeaders = [
  ...securityHeaders,
  { key: "Cache-Control", value: "no-store, max-age=0" },
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
        source: "/artifacts/:path*",
        headers: noStoreHeaders,
      },
        source: "/(.*)",
        headers: securityHeaders,
        headers: noStoreHeaders,
      {
        // Long-cache generated image assets (immutable filenames / fingerprints)
        source: "/assets/crisiscore/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      },
      {
  images: {
    // Enable modern formats so Next/Image can optimize appropriately
    formats: ["image/avif", "image/webp"],
  },
        source: "/proof/:path*",
        headers: noStoreHeaders,
      },
      {
        source: "/site-map",
        headers: noStoreHeaders,
      },
      {
        source: "/version.json",
        headers: noStoreHeaders,
      },
      {
        source: "/deploy-id",
        headers: noStoreHeaders,
      },
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
