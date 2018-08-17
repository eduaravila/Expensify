const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDashboard = require("webpack-dashboard/plugin");
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "desarrollo";
if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.tests" });
} else if (process.env.NODE_ENV === "desarrollo") {
  require("dotenv").config({path: '.env.prod'});
}

module.exports = function(env, argv) {
  const cssApart = new ExtractTextPlugin("styles.css");
  const produccion = env === "prod";

  return {
    mode: produccion ? "production" : "development",
    entry: "./public/src/expensify.js",
    output: {
      path: path.join(__dirname, "public/compiled/"),

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
      contentBase: path.join(__dirname, "public"),
      publicPath: "/compiled/",
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
      cssApart,
      new webpackDashboard(),
      new webpack.DefinePlugin({
        "process.env": {
          API_KEY: JSON.stringify(process.env.API_KEY),
          AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
          DATA_BASE_URL: JSON.stringify(process.env.DATA_BASE_URL),
          PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
          STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
          MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
        }
      })
    ]
  };
};
