const path = require('path');

//以下为htmlPlugin配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',//指定要用到的模板文件
  filename: 'index.html'//指定生成的文件名称，该文件存在于内存中，在目录中不显示
})

//以下为webpack配置
module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  mode: 'development',// 两种模式可选
  // mode: 'production',
  plugins: [ htmlPlugin ],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=3'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}