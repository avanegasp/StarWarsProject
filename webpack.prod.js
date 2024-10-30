const path = require("path"); // Asegúrate de importar el módulo path
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"), // Especifica el directorio de salida
    filename: "bundle.js", // Puedes especificar el nombre del archivo de salida si lo deseas
    publicPath: "./", // Mantén esta línea para la configuración de rutas relativas
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
    }),
  ],
});
