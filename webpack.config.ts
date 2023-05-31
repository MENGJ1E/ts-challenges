const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    path: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]'
        }
      }
    ],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
      new VueLoaderPlugin()
  ]
}