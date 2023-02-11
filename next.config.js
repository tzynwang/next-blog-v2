const nextMdx = require('@next/mdx');

const alias = require('./config/alias');
const mdxRules = require('./config/mdxRules');
const svgRules = require('./config/svgRules');

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react' },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      ...mdxRules(options),
      ...svgRules,
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};

module.exports = withMdx(nextConfig);
