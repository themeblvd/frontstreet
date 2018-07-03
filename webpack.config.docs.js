const path = require('path');

module.exports = {
  mode: 'production', // development
  entry: './src/docs/assets/js/docs.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: './assets/js/docs.bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
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
