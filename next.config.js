/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.equitacionsubachoque.com' : '',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
