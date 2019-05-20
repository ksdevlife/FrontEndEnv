const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080
  },
  module: {
    rules: [
      {
            test: /\.vue/,
            loader: 'vue-loader'
      }
    ]
  },
  // resolve: {alias: {vue: 'vue/dist/vue.esm.js'}}, // full build
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};