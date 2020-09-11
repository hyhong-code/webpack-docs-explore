const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // dev or prod

  // devtool: "none", // disable eval()

  output: {
    filename: "[name].bundle.js", // [contentHash] -> cache busting (gen new hash everytime code changes)
    path: path.resolve(__dirname, "dist"), // Resolve an absolute path to ./dist
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Helps generate html file with script that has hash name
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      // SCSS config
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. css -> js
          "sass-loader", // 1. scss -> css
        ],
      },
    ],
  },
});
