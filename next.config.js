/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  async rewrites() {
    return [
      {
        // source: "/api/v1/:path*/",
        // destination: "https://dev.curb.site/api/v1/:path*/",
        source: "/api/v2/:path*/",
        // destination:
        // "https://v2-myfavor-back-seed-db.onrender.com/api/v2/:path*/",

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
