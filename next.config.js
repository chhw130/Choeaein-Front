/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const API_URL = process.env.NEXT_PUBLIC_DEV_BASE_URL;

const nextConfig = {


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
      "a5.mzstatic.com",
      "i.pinimg.com",
      "www.jeonsomiofficial.com",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
