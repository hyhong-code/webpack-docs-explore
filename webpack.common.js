const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: "none", // disable eval()

  entry: {
    // Multiple entries
    main: "./src/index.js",
    vendor: "./src/vendor.js",
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

      // HTML config
      {
        test: /\.html$/,
        use: [
          "html-loader", // Copy assets needed for template.html into dist folder
        ],
      },

      // Assets
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader", // Emits files into dist/imgs
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
