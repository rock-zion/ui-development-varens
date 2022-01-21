const webpack = require('webpack');
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [
      'node_modules/breakpoint-sass/stylesheets',
      path.join(__dirname, 'styles'),
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development',
      })
    );

    return config;
  },
};
