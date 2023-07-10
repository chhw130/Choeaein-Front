/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v2/:path*/",
        destination: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}/:path*/`,
      },
    ];
  },
  trailingSlash: true,

  experimental: {
    appDir: true,
    // optimizeFonts: true,
  },
  images: {
    minimumCacheTTL: 60,
    domains: [
      "image.kpopmap.com",
      "velog.velcdn.com",
      "images8.alphacoders.com",
      "talkimg.imbc.com",
      "i.namu.wiki",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
