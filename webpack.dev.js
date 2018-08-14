const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist"
  },

  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
});
