const path = require("path");

module.exports = {
  // devtool: "none", // disable eval()

  entry: {
    // Multiple entries
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
      // css config
      // {
      //   test: /\.css$/,
      //   // Translate css to js first, then apply style to DOM
      //   use: ["style-loader", "css-loader"], // Array order is in reverse ***
      // },

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
