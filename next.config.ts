import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normalize trailing slashes to avoid duplicate content
  trailingSlash: false,

  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // XSS protection for older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Referrer policy — send origin for cross-origin, full URL for same-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
