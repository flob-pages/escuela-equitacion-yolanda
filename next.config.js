/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
