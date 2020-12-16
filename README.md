## attack204's webpack config

- 默认占用`http://127.0.0.1:4399/`
- 支持每次修改后自动打包(webpack-dev-server)
- 支持npm run dev后自动打开`127.0.0.1:4399`(在npm run中添加--open参数)
- 支持访问`127.0.0.1:4399`后自动访问src中的index文件(html-webpack-plugin)
- 支持打包css文件(style-loader css-loader)
- 支持打包less文件(less-loader)
- 支持打包scss文件(sass-loader node-sass)
- 自动为postCSS添加前缀(postcss-loader autoprefixer)
- 自动打包样式表中的图片和字体文件(url-loader file-loader)(默认将大小小于369840的图片转化为base64编码)
- 自动打包js高级语法(babel相关插件)


## 用法

首先把文件写到src目录中

`npm run dev`以调试模式启动

`npm run build`以生产模式启动


## to do

html-loader









