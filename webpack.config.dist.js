const path = require('path');
const addUnminified = require('unminified-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/frontstreet.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/frontstreet.min.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new addUnminified()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }
};
