# Webpack

+ webpack是一个静态模块打包工具
+ 在内部构建一个依赖图，它会映射项目所需的每个模块，生成一个或多个bundle文件
+ 区别webpack和webpack-cli

	webpack做js的打包工作
	
	webpack-cli解析webpack命令，命令内部使用webpack的功能

+ webpack只需局部下载

	原因：多个项目可能使用不同版本的webpack
	
	npx webpack使用局部webpack打包

	使用npm scripts运行的命令默认先找的是局部的webpack

+ webpack本身可以解析打包各种模块规范的js代码，不能处理css/img等其他资源

	ES6/CommonJS/AMD

+ 生产模式比开发模式多一个压缩js代码

**模式mode**

**入口entry**

**输出output**

**模块加载器loader**

**插件plugin**

## webpack基本使用
```
npm init -y
yarn add -D webpack webpack-cli

packge.json文件
 "scripts":{
	"build":"webpack --mode production"	
	"dev":	"webpack-dev-server --mode development"
	}
```
webpack.config.js 配置文件
```
const path = require('path')
function resolve(dir){
	return path.resolve(__dirname,dir)
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	//模式
	mode:'production',
	//入口
	entry:{
		app:resolve('src/index.js')
	},
	//出口
	output:{
		path:resolve('dist'),
		filename:'bundle.js'
	},
	//模块加载器
	module:{
		rules:[
		
		]
	},
	//插件
	plugins:[
		//向页面中引入js和css打包的代码
		new HtmlWebpackPlugin({
			template:'public/index.html'
		}),
		//清除打包文件夹dist
		new CleanWebpackPlugin(['dist'])
	],
	//开发服务器
	devServer:{
		open:true,
	}
}
```
```
yarn add -D webpack-dev-server html-webpack-plugin clean-webpack-plugin@1.0.1
```
多个loader，指定loader的执行顺序
```
{
	loader:'eslint-loader',
	enforce:'pre'	//最先执行
}
```

# 1. 打包html资源
**html-webpack-plugin**

```
plugins:[
		//向页面中引入js和css打包的代码
		new HtmlWebpackPlugin({
			template:'public/index.html'  //没有模板则默认创建空的html
		})
		]
```
**html压缩**
```
plugins:[new HtmlWebpackPlugin({
	template:'./src/index.html',
	minify:{
		collapseWhitespace:true,
		removeComments:true
	}
})]
```
# 2. 打包样式资源
**style-loader、css-loader**

**css**
```
{
	test:/\.css$/,
	use:['style-loader'，'css-loader']  //从下往上，从右往左
}
```
**less**
less
```
{
	test:/\.less$/,
	use:['style-loader'，'css-loader','postcss-loader','less-loader']
}
```
**stylus**
stylus
```
{
	test:/\.styl$/,
	use:['style-loader'，'css-loader','postcss-loader','stylus-loader']
}
```
**sass**
node-sass
```
{
	test:/\.scss$/,
	use:['style-loader'，'css-loader','postcss-loader','sass-loader']
}
```
**对css单独打包**

**mini-css-extract-plugin**
```
plugins:[...,
	new MiniCssExtractPlugin(
		{filename:'css/built.css'}
	)
]
```
```
use:[MiniCssExtractPlugin.loader,'css-loader',...] 
//替换原来的'style-loader'
```
** css兼容性处理**

**postcss-loader、postcss-preset-env**
```
{
	test:/\.less$/,
	use:['style-loader'，'css-loader','postcss-loader','less-loader']
}
```
**压缩css**

**optimize-css-assets-webpack-plugin**
```
plugins:[...,new OptimizeCssAssetsWebpackPlugin()]
```

# 3. 打包js资源
**js语法检查**

**eslint-loader**
```
{
	test:/\.js$/,
	exclude:/node_modules/,
	loader:'eslint-loader',
	options:{fix:true}  //自动修改错误
}
```
**js兼容性处理**

babel-loader
	
@babel/core
	
@babel/preset-env,babel只转换新语法(const,class)，不转换新的api(Promise,Map)
	
@babel/polyfill  core.js2和regenerator-runtime
	
@babel/plugin-transform-runtime & @babel/runtime

**处理es6=>es5，只能转换基本语法，新api不能转换**

```
rules:[
	{
		loader:'babel-loader',
		options:{presets:['@babel/preset-env']}
		test:/\.js$/,
		exclude:/node_modules/,
	}

]
```

**全部js兼容性处理**

问题：全部引入，体积太大
```
index.js文件
import '@babel/polyfill'  
```

**按需加载，只打包新api的polyfill**

问题：polyfill辅助函数可能重复定义了
```
presets:['@babel/preset-env',
		{
			useBuiltIns:'usage',
			corejs:2,
			targets:{
				ie:9,
				chrome:67,
				edge:70
			}
		}
]
```
**最终babel.config.js文件**
```
module.exports = function(api){
	api.cache(true);

	const presets = [
		['@babel/preset-env',
			{
			useBuiltIns:'usage',
			corejs:2,
			targets:{
				ie:9,
				chrome:67,
				edge:70
			}
		   }
		]
	];
	const plugins = [
		"@babel/plugin-transform-runtime"
	];
	return {
		presets,
		plugins
	};
}
```
** js压缩**
```
mode:production
```

# 4. 打包图片资源
**url-loader、file-loader**

好处：减少对图片的请求数量

坏处：打包文件变大
```
rules:[
	{
		test:/\.(jpg|png|gif)$/,
		loader:'url-loader',
		options:{
			limit:8*1024,   //小于8kb的图片用base64编码
			name:'[hash:10].[ext]'  //大于8kb的图片打包后的文件名
		}	
	}
]
```
url-loader还可以打包字体、音视频
# 5. 打包其他资源
file-loader，除了js/css/html资源
```
{
	exclude:/\.(css|js|html)$/,
	loader:'file-loader'
}
```
# 6. devServer
webpack-dev-server

自动编译、自动打开刷新浏览器，没有任何输出
```
devServer:{
	contentBase:resolve(__dirname,'build'),
	compress:true,
	port:3000,
	open:true
}
```


# Webpack性能优化
开发环境优化

	+ 优化打包构建速度
	+ 优化代码调试

生产环境优化

	+ 优化打包构建速度
	+ 优化代码运行的性能

##  HMR (hot module replacement)
一个模块变化，只会重新打包变化的模块。
```
devServer:{
	hot:true,
}
```
+ css文件：style-loader内部实现了HMR功能。

+ js文件：默认没有HMR功能，修改添加支持HMR的代码。

	HMR处理js只能处理非入口js文件
```
if(module.hot){
	module.hot.accept('./print.js',function(){print()})
	//监听print.js的变化，如果变化，只执行后面的回调函数
}
```
+ html文件：默认不能使用HMR功能
	
	解决：entry引入html文件
```
entry:[...,'./src/index.html']
```

##  Source-map
提供源代码到构建后代码的映射技术
```
module.exports={
	...,
	devtools:'source-map'
}
```
开发环境：eval-source-map(内联，每个文件都生成一个.map)

生产环境：source-map (体积小，不用内联)
## oneOf
一个文件只被其中一个loader处理
```
rules:[
	{
		oneOf:[{test:...,use:...},{test:...,use:...},{test:...,use:...}]
	}
]
```
## 开启babel缓存
第二次打包构建更快
```
options:{
	presets:[...],
	cacheDirectory:true
}
```
## 文件资源缓存
+ hash
	
	每次webpack构建会生成一个唯一的hash值。
	
	只改动一个文件，所有带hash的文件都会重新构建

+ chunkhash

	根据chunk生成的hash值，同一chunk，hash值相同。入口文件引入的文件一起叫一个chunk代码块。

+ contenthash

	根据文件的内容生成hash值
	
##  tree shaking
去除无用代码

+ 使用es6模块化
+ 使用production模式
```
packge.json中配置
"sideEffexts":false  //所有代码都没有副作用，可能删除css等文件
解决："sideEffects":["*.css","*.less"]
```

## code split
代码分割
```
entry:{
	index:'./src/js/index.js',
	test:'./src/js/test.js'
}
output:{
	filename:'js/[name].[contenthash:10].js',...
}
```
```
optimization:{
	splitChunks:{chunks:'all'}
}
//可以将node_modules中代码单独打包成一个chunk最终输出。
//多入口chunk中，会将公共文件打包成一个单独的chunk。
```

## 懒加载
使用时再加载js文件
```
import('./test.js').then(()=>{}).catch()
//放入异步回调函数中
```
预加载，使用前加载js文件
```
prefetch等其他文件加载完毕，再偷偷加载
import(/*webpackChunkName:'test',webpackPrefetch:true*/'./test.js').then().catch()
```

## PWA 
渐进式网络开发应用程序(离线可访问)

workbox-webpack-plugin
```
plugins:[...,new WorkboxWebpackPlugin.GenerateSW(
	{clientsClaim:true,
	skipWaiting:true}
)]
//帮助serviceworker快速启动，删除旧的serviceworker。
```
index.js中注册serviceworker，处理兼容性问题。
```
if('serviceWorker' in navigator){
	window.addEventListener('loader',()=>{
		navigator.serviceWorker.register('/service-worker.js').then().catch()
	})
}
```
eslint不认识window,nav等变量，配置package.json中
```
eslintConfig:{"env":{"browser":true}}
```

## 多进程打包
thread-loader
```
use:[{
	loader:'thread-loader',
	options:{workers:2} //开启2个进程
}]
```
## externals
不打包jq
{
	mode:'production',
	externals:{jquery:'jQuery'}
}
##  dll
对某些库(jq,react...)进行单独打包
```
entry:{jquery:['jquery']},  //打包生成的name
output:{
	filename:'[name].js',
	path:resolve(__dirname,'dll'),
	library:'[name]_[hash]'
},
plugins:[new webPack.DllPlugin({
	name:'[name]_[hash]',
	path:resolve(__dirname,'dll/manifest.json')
	//打包生成一个manifest.json提供和jquery映射
})]
```
运行webpack.dll.js文件

webpack --config webpack.dll.js

```
webpack.config.js文件
plugins:[new webPack.DllReferenvePlugin({
	manifest:resolve(__dirname,'dll/manifest.json')
	//告诉webpack那些库不打包
}),new AddAssetHtmlWebpackPlugin({
	filepath:resolve(__dirname,'dll/jquery.js')
	//将某个文件打包输出去，并在html中自动引入该资源
})]
```

# 详细配置

## 1. entry配置
+ string
```
entry:'./src/index.js'
```
打包形成一个chunk，输出一个bundle文件，chunk名称默认为main。

+ array
```
entry:['./src/index.js','./src/add.js']
```
多入口文件打包形成一个chunk，只输出一个bundle文件。

+ object
```
entry:{
	index:'./src/index.js',
	add:'./src/add.js'
}
```
有几个文件就生成几个chunk，输出几个bundle文件，bundle的名称为key。

## 2. output配置
```
output:{
	filename:'js/[name].js',   		  //文件名称，指定名称+目录
	path:resolve(__dirname,'build'),  //所有资源输出的公共目录
	publicPath:'/',    				  //所有引入资源的公共路径前缀
	chunkFilename:'[name]_chunk.js',  //非入口chunk的名称
	library:'[name]',				  //库向外暴露的变量名
	libraryTarget:'window'			  //变量名添加到哪个属性上browser
}
```
## 3. module配置
```
modules:{rules:[{test:/\.css$/,use:['style-loader','css-loader']},
	{test:/\.js$/,
	loader:'eslint-loader',
	exclude:/node_modules/,
	include:resolve(__dirname,'src'),  //只检查src
	enforce:'pre'},
	{oneOf:[...]}
]}
```
## 4. resolve配置
```
mode:'production',
//解析模块的规则
resolve:{
	alias:{$css:resolve(__dirname,'src/css')},
	//配置路径别名，$css代表绝对路径
	extensions:['.js','.json','.jsx','.css'],
	//省略文件路径的后缀名
	modules:[resolve(__dirname,'../node_modules'),'node_modules']
	//告诉webpack解析模块去哪个目录
}
```

## 5. devServer配置
```
devServer:{
	contentBase:resolve(__dirname,'build'),		//运行代码的目录
	watchContentBase:true,	//监视contentBase目录下的所有文件，变化会reload
	watchOptions:{ignored:/node_modules/},      //忽视监视文件
	compress:true,				//启动gzip压缩
	port:5000, 					//端口号
	host:'localhost',  			//域名
	open:true, 					//自动打开浏览器
	hot:true, 					//开启HMR功能
	clientLogLevel:none, 		//不显示日志信息
	quiet:true, 				//只显示一些基本启动信息
	overlay:false,				//如果出错，不要全屏提示
	proxy:{
		//服务器代理，解决开发环境跨域问题
		'/api':{target:'http://localhost:3000',
		//如果接收到/api/xxx的请求，就转发到另一个服务器(3000)
		pathRewrite:{'^/api':''}}
		//重写请求路径
	}
}
```

## 6. optimization配置
```
optimization:{splitChunks:{
		chunks:'all',
		minSize:30*1024,	//分割的chunk最小为30kb
		maxSize:0,			//最大没有限制
        minChunks:1,		//要提取的chunk最少被引用1次
        maxAsyncRequest:5,	//按需加载时并行加载的文件最大数量
        maxInitialRequest:3,//入口js文件最大并行请求数量
        automaticNameDelimiter:'~',	//'~'名称连接符
        name:true,			//可以使用命名规则
        cacheGroups:{		//分割chunk组
        	vendors:{test:/[\\/]node_modules[\\/]/,priority:-10},
        	default:{minChunk:2,priority:-20,reuseExistingChunk:true}
        }
}}
```
```
配置生产环境的压缩方案
minimizer:{new TerserWebpackPlugin({
	cache:true,
	parallel:true,
	souceMap:true
})}
```










