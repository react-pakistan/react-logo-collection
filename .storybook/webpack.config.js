const path = require('path');

const maxAssetSize = 244 * 1024;

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: maxAssetSize,
      minSize: 30 * 1024,
    }
  },
  performance: {
    maxAssetSize: maxAssetSize
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      },
    ],
  },
};
