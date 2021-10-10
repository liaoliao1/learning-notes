# Vite

## vite组成
+ 一个开发服务，服务于开发环境，ESM+HMR
+ 一套构建指令，服务于生产环境，用Rollup打包

## 打包
使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。

## 常用打包构建工具
+ webpack
+ roolup
+ parcel
+ gulp

问题？
+ 缓慢的服务启动
+ 缓慢的更新

vite将模块区分：
+ 依赖：开发时不会变动的纯js，vite使用esbuild预构建依赖
+ 源码：通常为jsx、css、vue等，时常会被编辑，需要转换，基于路由拆分

vite vs create-react-app
初始化启动时间少、打包时间少、打包产物体积小
















