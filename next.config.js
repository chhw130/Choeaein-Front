const { redirect } = require("next/dist/server/api-utils");

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: "/:path*",
  //         destination: "https://v2-myfavor-back-seed-db.onrender.com/:path*",
  //       },
  //     ],
  //   };
  // },

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
