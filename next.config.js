const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["cdn.imagin.studio", "img.freepik.com", "www.ufsm.br","encrypted-tbn0.gstatic.com"],
  // },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "cdn.imagin.studio",
      //   pathname: "**",
      // },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.ufsm.br",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
