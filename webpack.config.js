const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // dev or prod

  // devtool: "none", // disable eval()

  entry: "./src/index.js",

  output: {
    filename: "main.[contentHash].js", // [contentHash] -> cache busting (gen new hash everytime code changes)
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
