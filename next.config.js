const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Lib': path.resolve(__dirname, '..', './lib'),
    };
    return config;
  },
};

module.exports = nextConfig;
