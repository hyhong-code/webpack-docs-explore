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
  module: {
    rules: [
      {
        test: /\.css$/,
        // Translate css to js first, then apply style to DOM
        use: ["style-loader", "css-loader"], // Array order is in reverse ***
      },
    ],
  },
};
