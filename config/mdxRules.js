const mdxRules = (options) => ({
  test: /\.mdx/,
  use: [
    options.defaultLoaders.babel,
    {
      loader: '@mdx-js/loader',
    },
  ],
});

export default mdxRules
