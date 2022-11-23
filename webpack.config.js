const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@images" : path.resolve(__dirname, "public/assets/images/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]   
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash]-[name][ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: { 
      directory: path.join(__dirname, "dist"), 
      watch: true, 
    }, 
    watchFiles: path.join(__dirname, "./**"),
    compress: true,
    port: 3000,
  }
}
