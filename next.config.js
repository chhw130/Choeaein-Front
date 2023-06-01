/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    // optimizeFonts: true,
  },
  images: {
    domains: ["image.kpopmap.com", "velog.velcdn.com"],
  },
};

module.exports = nextConfig;
