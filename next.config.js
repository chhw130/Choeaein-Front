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
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
