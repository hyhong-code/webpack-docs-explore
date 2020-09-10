const path = require("path");

module.exports = {
  mode: "development", // dev or prod
  // devtool: "none", // disable eval()
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    // Resolve an absolute path to ./dist
    path: path.resolve(__dirname, "dist"),
  },
};
