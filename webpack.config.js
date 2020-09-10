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
      // css config
      // {
      //   test: /\.css$/,
      //   // Translate css to js first, then apply style to DOM
      //   use: ["style-loader", "css-loader"], // Array order is in reverse ***
      // },

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
};
