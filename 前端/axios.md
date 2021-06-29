
## ajax请求与http请求
ajax请求是一种特别的http请求，区别在于浏览器端只有XHR或fetch发出的才是ajax请求

+ 一般请求：浏览器直接显示响应数据，刷新/跳转页面
+ ajax请求：不对界面进行操作，只是调用回调函数并传入响应相关数据

```
原生js发送ajax请求
let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		console.log(xhr.response)
	}
}
xhr.open('GET','url?name=jack&age=18')
xhr.send()

xhr.open('POST','url')
xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
xhr.send('name=jack&age=18')
```

## axios特点
+ promise风格
+ 浏览器端、node端都可以使用
+ 支持请求/响应拦截器
+ 支持请求取消
+ 请求/响应数据转换
+ 批量发送多个请求

## axios.create(config)
根据配置创建一个新的axios，只是没有取消请求和批量发请求的方法，其他语法不变

用处：请求不同的接口，分别设置baseURL
```
const instance1 = axios.create({
	baseURL:'http://localhost:3000'
})
instance1.get('/test')
```

## 请求/响应拦截器
```
添加请求拦截器
axios.interceptors.request.use(
	config => {return config},
	error => {return Promise.reject(error)}
)
添加响应拦截器(先于响应体执行)
axios.interceptors.response.use(
	response => {return response},
	error => {return Promise.reject(error)}
)
```


















