const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const baseURL = 'https://localhost';
const baseURLSetPlugin = new webpack.DefinePlugin({
  "BASE_URI": JSON.stringify(baseURL)
})
const sassWebpackSetUp = {
  watch: true,
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: !devMode
  },
  output: {
    path: __dirname + "/dist/css",
  },
  entry: {
    index: './src/styles/index.js'
  },
  plugins: [
    new IgnoreEmitPlugin(['index.js', 'main.js']),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              additionalData: `$baseUrl: '${baseURL}';`,
            }
          }
        ],
      }, 
    ],
  },
};


const tsWebpackSetUp = {
  watch: true,
  entry: path.join(__dirname, 'src/scripts/app.ts'),
  output: {
    filename: 'app.js',
    path: __dirname + '/dist/js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [baseURLSetPlugin]
};

module.exports = [sassWebpackSetUp, tsWebpackSetUp]