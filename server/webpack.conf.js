var webpack = require('webpack');

module.exports = {
  entry: './entry',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: { stage: 0 },
        exclude: /node_modules/ }
    ]
  }
};
