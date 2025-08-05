/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: '/',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
