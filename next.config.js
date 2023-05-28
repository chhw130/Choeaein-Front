/** @type {import('next').NextConfig} */

// const nextConfig = {
// reactStrictMode: true,
// swcMinify: true,
// async rewrites() {
//   return [
//     {
//       source: "/api/v1/:path*",
//       destination: `https://backend.myfavor.site/:path*`,
//     },
//   ];
// },
// };

const nextConfig = {
  experimental: {
    appDir: true,
    optimizeFonts: true,

    // newNextLinkBehavior: false,
  },
  images: {
    domains: ["image.kpopmap.com", "velog.velcdn.com"],
  },
};

module.exports = nextConfig;
