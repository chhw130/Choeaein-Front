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
  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: "/:path*",
  //         destination: `https://backend.myfavor.site/:path*`,
  //       },
  //     ],
  //   };
  // },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
