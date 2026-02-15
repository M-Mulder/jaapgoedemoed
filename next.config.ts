import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "nl-NL", "zh"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

export default nextConfig;
