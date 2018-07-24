const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = mode => require(`./build/webpack.${mode}`);

module.exports = ({ mode }) => {
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
    modeConfig(mode)
  );
};
