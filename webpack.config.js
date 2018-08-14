const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDashboard = require("webpack-dashboard/plugin");

module.exports = function(env, argv) {
  const cssApart = new ExtractTextPlugin("styles.css");
  const produccion = env === "prod";

  return {
    mode: produccion ? "production" : "development",
    entry: "./public/src/expensify.js",
    output: {
      path: path.join(__dirname, "public/"),

      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
          test: /\.s?css$/,
          use: cssApart.extract({
            use: [
              {
                loader: "css-loader",
                options: { sourceMap: true }
              },
              {
                loader: "sass-loader",
                options: { sourceMap: true }
              }
            ]
          })
        }
      ]
    },
    devtool: produccion ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
      cssApart,
      new webpackDashboard()
    ]
  };
};
