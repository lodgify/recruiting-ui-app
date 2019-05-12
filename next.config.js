const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');

module.exports = withLess(withCSS({
  cssModules: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}));
