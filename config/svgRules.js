const svgRules = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
};

module.exports = svgRules;
