const path = require('path');
const defaultConfig = require('./webpack.default.js');
const webpackMerge = require('webpack-merge');

module.exports = component => {
  return webpackMerge(defaultConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, `../src/tests/${component}/script.js`), // Path resolving needed for Gulp compat.
    output: {
      path: path.resolve(__dirname, '../docs'),
      filename: `./tests/${component}/script.js`
    }
  });
};
