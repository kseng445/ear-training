const path = require("path");

var DIST_DIR = path.join(__dirname, "/client/dist");
var SRC_DIR = path.join(__dirname, "/client/src");

module.exports = {
  mode: "production",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
