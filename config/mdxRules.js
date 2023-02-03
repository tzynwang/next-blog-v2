const mdxRules = (options) => ({
  test: /\.mdx/,
  use: [
    options.defaultLoaders.babel,
    {
      loader: '@mdx-js/loader',
    },
  ],
});

module.exports = mdxRules;
