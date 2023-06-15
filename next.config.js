/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: {
    appDir: true,
    // optimizeFonts: true,
  },
  images: {
    domains: [
      "image.kpopmap.com",
      "velog.velcdn.com",
      "images8.alphacoders.com",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
