const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    path: './src/main.ts',
  },
  module: {
    rules: [
      // 使用vue-loader处理vue文件
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      // syleloade解析css文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 使用loader解析图片文件
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]'
        }
      },
      // webpack集成ts开发，webpcak不识别ts文件，需要借助ts-loader解析
      {
        test:/\.tsx?$/,
        loader:"ts-loader",
        options: {
            configFile: path.resolve(process.cwd(), 'tsconfig.json'),
            appendTsSuffixTo: [/\.vue$/]
         },
     }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html')
      })
  ] 
}