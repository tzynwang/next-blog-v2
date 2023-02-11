const alias = require('./config/alias');
const svgRules = require('./config/svgRules');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      ...svgRules,
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};

module.exports = nextConfig;
