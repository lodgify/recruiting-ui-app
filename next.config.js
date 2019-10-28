const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withFonts({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|svg|gif|jpg|eot|webp)$/i,
        use: [
          { loader: 'url-loader', options: { limit: 8192, name: '[name].[ext]', quality: 85, outputPath: 'assets' } },
        ],
      });
      return config;
    },
  })
);
