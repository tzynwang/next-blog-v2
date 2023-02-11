import { withContentlayer } from 'next-contentlayer';
import alias from './config/alias.js';
import mdxRules from './config/mdxRules.js';
import svgRules from './config/svgRules.js';

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

export default withContentlayer(nextConfig);
