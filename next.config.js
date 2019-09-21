// next.config.js
const withSass = require('@zeit/next-sass')


module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
