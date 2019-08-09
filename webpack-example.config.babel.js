/* eslint-disable import/no-extraneous-dependencies */
import SasslintPlugin from 'sasslint-webpack-plugin';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackExampleConfig = {
  context: __dirname,
  devtool: 'source-map',
  target: 'web',
  entry: {
    example: './example/js/index.jsx',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'example'),
        ],
        loader: 'babel-loader',
        test: /\.jsx?$/,
      }, {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'example'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader', 'postcss-loader', 'sass-loader'
        ],
        test: /\.scss$/,
        
      }, {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'example'),
        ],
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new SasslintPlugin({
      glob: './src/scss/**/*.scss',
      ignorePlugins: ['extract-text-webpack-plugin'],
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
};

export default webpackExampleConfig;
