const HTMLWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  mode: 'production',
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
  entry: `${__dirname}/src/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: 'transformed.js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    HTMLWebPackPluginConfig,
    new CopyPlugin({
      patterns: [
        {
          from: `${__dirname}/assets/`,
          to: `${__dirname}/build/assets/`,
        },
      ],
    }),
  ],
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
};
