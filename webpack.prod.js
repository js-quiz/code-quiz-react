/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]  */
const path = require('path');
const webpack = require('webpack');
const SizePlugin = require('size-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const plugins = [
  new SizePlugin(),
  new CleanWebpackPlugin(['dist'], {
    beforeEmit: true,
  }),
  new CopyWebpackPlugin([
    {
      context: 'static',
      from: '**/*.{png,svg,ico}',
    },
    {
      from: 'manifest.json',
      toType: 'dir',
    },
  ]),
  new HtmlWebpackPlugin({
    template: 'src/index-template.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeScriptTypeAttributes: true,
    },
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new webpack.HashedModuleIdsPlugin(),
  new MiniCssExtractPlugin({
    filename: '[contenthash].min.css',
    chunkFilename: '[id].[contenthash].min.css',
  }),
  new GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'json',
    generateStatsFile: true,
  }),
];

const moduleWebpack = {
  rules: [
    { test: /\.tsx?$/, loader: 'ts-loader' },
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
  ],
};

const config = {
  mode: 'production',
  entry: {
    app: ['./src/index.tsx'],
  },
  plugins,
  module: moduleWebpack,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
};

module.exports = config;
