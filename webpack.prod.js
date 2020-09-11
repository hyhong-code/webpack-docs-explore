const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production", // dev or prod

  // devtool: "none", // disable eval()

  output: {
    filename: "main.[contentHash].js", // [contentHash] -> cache busting (gen new hash everytime code changes)
    path: path.resolve(__dirname, "dist"), // Resolve an absolute path to ./dist
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean dist folder each build
  ],
});
