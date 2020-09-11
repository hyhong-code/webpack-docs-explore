const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // dev or prod

  // devtool: "none", // disable eval()

  output: {
    filename: "main.js", // [contentHash] -> cache busting (gen new hash everytime code changes)
    path: path.resolve(__dirname, "dist"), // Resolve an absolute path to ./dist
  },
});
