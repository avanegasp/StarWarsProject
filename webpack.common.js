const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), // Cambia 'public' a 'build'
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader", // crea nodos de estilo desde cadenas de JS
          },
          {
            loader: "css-loader", // traduce CSS a CommonJS
          },
        ],
      },
      // Para imágenes
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
      },
      // Para fuentes
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"], // Agrega '.jsx' para que Webpack reconozca las extensiones
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "4geeks.ico",
      template: "template.html",
    }),
    new Dotenv({ safe: true, systemvars: true }),
  ],
};
