const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production", // dev or prod

  // devtool: "none", // disable eval()

  output: {
    filename: "[name].[contentHash].bundle.js", // [contentHash] -> cache busting (gen new hash everytime code changes)
    path: path.resolve(__dirname, "dist"), // Resolve an absolute path to ./dist
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), // Extract css out from bundle.js
    new CleanWebpackPlugin(), // Clean dist folder each build
    new HtmlWebpackPlugin({
      // Helps generate html file with script that has hash name
      template: "./src/template.html",
      minify: {
        // Minify HTML for prod
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // To minify css file
      new TerserPlugin(), // To minify js file
    ],
  },

  module: {
    rules: [
      // SCSS config
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files then links them to index.html
          "css-loader", // 2. css -> js
          "sass-loader", // 1. scss -> css
        ],
      },
    ],
  },
});
