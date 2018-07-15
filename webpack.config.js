const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`);

module.exports = env => {
  return webpackMerge(
    {
      externals: {
        jquery: 'jQuery'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      }
    },
    modeConfig(env)
  );
};
