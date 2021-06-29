![](https://ftp.bmp.ovh/imgs/2020/11/4fab466860e12247.png)
# React
+ 引入react核心库
```
<script type="text/javascript" src="react.development.js"></script>
```
+ 引入react操作dom的js
```
<script type="text/javascript" src="react-dom.development.js"></script>
```
+ 引入babel 
```
<script type="text/javascript" src="babel.min.js"></script>
```
babel
将js新语法转化为es5语法，让浏览器可以支持。
```
<script type="text/babel">
    let vDom = <h2>hello react</h2>  //创建虚拟dom
	ReactDOM.render(vDom,document.getElementById("test")) //渲染页面
</script>
```

# 1. 创建虚拟DOM的方式
+ 原生js
```
let vDom = React.createElement('h2',{id:'test'},'hello react')
type="text/javascript"
```
+ 使用jsx
```
let vDom = <h2 id={myId}>myData</h2>
type="text/babel"
```

**虚拟dom：**js对象，对象上的方法少，轻

**真实dom：**方法多，重

**jsx语法**

+ 以<开头的代码，以标签语法解析。
+ 以{ 开头的代码，以js语法解析。
+ 标签中class用className
+ 只能有一个根标签
+ {}只能写js表达式，不能写js语句

# 2. 模块、组件
**模块：**向外提供特定功能的js程序，复用js

**组件：**用来实现特定界面功能效果的代码集合(html/css/js)

## 2.1 创建组件
+ 工厂函数式(无状态，简单组件)
```
function MyComponent(){
	return <h2>工厂函数组件</h2>
}
ReactDOM.render(<MyComponent/>,document.getElementById("test"))
```
+ es6类的方式(有状态，复杂组件)
```
class MyComponent extends React.Component{
	//重写父类的render
	render(){
		return <h2>es6类组件</h2>
	}
ReactDOM.render(<MyComponent/>,document.getElementById("test"))
//内部创建类的实例对象，render()得到虚拟DOM，解析为真实DOM，插入页面
}
```

## 2.2 组件属性state
+ 初始化状态
```
constructor(props){
	super(props)
	this.state={
		state1:value1,
		state2:value2
	}
	this.clickfun = this.clickfun.bind(this)  //将函数中的this变为组件实例对象
}
```

如果使用类的形式创建组件，**自定义方法**中的this为undefined，内置方法(render)中的this为组件实例对象。
	
状态不能直接更新、修改，必须使用setState方法。
```
clickfun(){
	let {state1} = this.state
	this.setState({state1:newValue})
}
```
+ 简写方式
```
class Com extends React.Component{
	state = {state1:value}
	clickfun = ()=>{...}  //箭头函数的this为类的实例对象
}
```

## 2.3 组件属性props
```
render(){
	let {name,age} = this.props
}
let p1 = {name:"jack",age:18}
ReactDOM.render(<Person {...p1},document.getElementById("test")>)
//标签传参，...p1解析为key:value形式
```
对props中的属性值进行类型限制和必要性限制
```
//引入prop-types.js
<script type="text/javascript" src="prop-types.js"></script>
//限制类型
Person.propTypes={
	name:PropTypes.string.isRequired,
	age:PropTypes.number.isRequired
}
//设置默认值
Person.defaultProps={
	age:18
}
```
+ state:组件内部可变化的数据
+ props:外部向组件内部传递的属性，内部只读不能修改

## 2.4 组件属性refs
类似于标签的id(弃用)
```
<input type="text" ref="input1"/>
<input type="text" ref="input2"/>
this.refs 为 {input1:input,input2:input}  input为dom节点
let {input1} = this.refs
let value = this.refs.input1.value
```
新语法1
```
<input type="text" ref={(input)=>{this.input1=input}}/> //input为当前节点
let value = this.input1.value
```
新语法2
```
//创建一个存ref的容器
input = React.createRef()
容器为{current:input}对象，值为dom节点
<input type="text" ref={this.input}/> //将当前dom节点保存到input ref容器中
let value = this.input.current.value
```

## 2.5 数组的reduce方法
```
arr.reduce((pre,now)=>{
	return pre+now
},[0]) //可选项，设置pre初始值
```
reduce方法接收一个函数，为数组中的每一个元素依次执行回调函数，返回最后一次累加器的结果，第一次调用如果没有指定初始值，pre为第一个元素，now为第二个元素，返回值为下一次调用时pre的值。

## 2.6受控组件
+ **受控组件：**输入的信息自动维护到state中。

	单向数据流，state随数据改变而自动变化

	vue中自动双向绑定，state与数据对应

+ **非受控组件**

# 3. 生命周期
```
开始
[defaultProps={}]	可选
[constructor(){}]	初始化，触发条件ReactDOM.render(<Component/>)

componentWillMount()
render()		可执行多次
componentDidMount()	组件挂载完成，只执行一次	启动定时器、发送ajax请求

更新	触发条件：this.setState()
性能优化点 shouldComponentUpdate()  return true就执行更新，return false不执行
componentWillUpdate()
render()
componentDidUpdate()

componentWillUnmount() 组件将要卸载，只执行一次	 如清除定时器
结束
```

# 4. 虚拟DOM与diff算法
+ **虚拟dom**

	当render真实DOM时，会操作大量DOM，开销大，React实现一个虚拟dom到真实dom的映射。
	
	更新状态时，构造一个新的虚拟dom树，与旧树比较，将差异更新到真实dom上，视图就更新了。
	
+ **diff算法**

	通过diff算法比较新旧树差异，时间复杂度为O(n)

**三大策略：**

1. **tree diff**	（dom树分层比较）
	
	dom节点跨层移动操作很少，只比较同层dom节点。
	
	如果跨层，会销毁该节点，重新创建后再插入。
	
	**建议：**少操作dom结构

2. **component diff**  （组件间比较）

	同一类型组件，按照原策略进行虚拟dom树比较。
	
	不同类型组件，删除整个组件下的所有子节点，重建创建子节点

	**建议：**使用 shouldComponentUpdate() 来减少组件不必要的更新。

3. **element diff**  （元素间比较）

	同一层级 节点操作有插入、删除、移动。
	
	给每个节点加上key可以判断新旧集合中的节点是否相同，相同只需要进行移动操作。
	
	key没变，数据没变，用原来的真实dom；数据变了，对原来的真实dom更新数据。
	
	key变了，创建新的虚拟dom，渲染到页面。
	
	使用数据的标识作为key，比如id，用index在添加、删除时会产生错误，效率低。

	**建议：**减少类似将最后一个节点移动到列表首部的操作

# React脚手架

```
npm i create-react-app -g
creat-react-app test
yarn start
```

# Ajax请求库
+ **jQuery：**比较重，不建议使用
+ **axios：**轻量级，建议使用

	封装XMR对象的ajax
	
	promise对象
	
	可用在浏览器端和node端
	
+ **fetch：**原生函数，老版本浏览器不支持

axios:
```
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

# 组件间通信
**组件之间关系**

+ 父子关系

	父给子：通过标签属性传递
	
	子给父：父传给子一个方法，通过方法修改数据

+ 兄弟关系
	
	借助共同的父组件

	消息订阅与发布


+ 祖孙关系
	
	消息订阅发布

**传递方式**

+ 通过props传递

	共同数据放在父组件上，特有的数据放在自己组件内部state

	通过props传递一般属性和函数属性，只能一层一层传递

+ 消息订阅与发布
```
	import PubSub from 'pubsub.js'
	//发布
	PubSub.publish('name',obj)
	//订阅
	PubSub.subscribe('name',(msg,data)=>{})
```
对组件关系没有限制

+ redux

	可以实现任意组件间的通信，集中式管理

# 路由
**SPA**

+ 单页面应用
+ 点击链接不刷新页面，不向服务器发送请求
+ 只做页面的局部更新
+ 数据通过ajax获取，在前端异步展现

一个路由就是一个映射关系 key:value

key为路由路径，value可能是function(后端路由)/component(前端路由)

react-router-dom

```
import {Link,Route,Redirect} from 'react-router-dom'
import About from './pages/About'
//路由切换
<Link to='/about'>About</Link>
//定义路由与组件的对应关系
<Route path="/about" component={About} />
//默认路由
<Redirect to='/about'/>
```
Link跳转只更新对应Route的页面内容，不刷新整个页面



# React Hooks
**类组件的不足**

1. 状态逻辑复用难
	
	+ 缺少复用机制
	+ 渲染属性和高阶组件导致层级冗余

2. 趋向复杂难以维护

	+ 生命周期函数混杂不相干逻辑
	+ 相干逻辑分散在不同生命周期

3. this指向困扰

	+ 内联函数过度创建新句柄
	+ 类成员函数不能保证this

**Hooks优势**

1. 函数组件无this问题
2. 自定义Hook方便复用状态逻辑
3. 副作用的关注点分离

## useState
+ 调用setState需要按照确定的顺序和数量
+ 安装eslint-plugin-react-hooks
```
		"eslintConfig":{
		"extends":"react-app",
		"plugins":["react-hooks"],
		"rules":{"react-hooks/rules-of-hooks":"error"}
	}
```

+ 初始化state时传入回调函数只执行一次

## useEffect
+ 统一在render后调用
+ 第二个参数没有变化时不执行
+ 返回一个回调清理函数

## useRef
+ 获取子组件或者DOM节点的句柄
+ 渲染周期之间共享数据的存储

# Redux
**状态容器与数据流管理**

**Redux三大原则**

+ 单一数据源
+ 状态不可变
+ 纯函数修改状态

## 生命周期
1 组件挂载
1.1 constructor()  完成react数据初始化
1.2 componentWillMount()  初始化数据后，未渲染dom时，一般服务端渲染使用
1.3 componentDidMount()  第一次渲染完成

2 组件更新
2.1 componentWillReceiveProps(nextProps)
+ 父组件props改变需要重新渲染
2.2 shouldComponentUpdate(nextProps,nexyState)
+ 主要用于性能优化
+ 控制组件重新渲染，state变化，父组件的重新渲染会导致所有子组件重新渲染，在子组件的此生命周期中return false可以阻止组件的更新
componentWillUpdate(nextProps,nextState)
+ shouldComponentUpdate返回true以后，组件进行重新渲染
componentDidUpdate(prevProps,prevState)
+ 每次重新渲染都会进入这个生命周期

3 组件卸载
3.1 componentWillUnmount()  卸载组件、销毁数据 定时器、事件监听

## state和props区别
都是普通的js对象
props是传递给组件的（类似函数的形参）
state是组件内自己管理的（类似函数内声明的变量）

## 合成事件和原生事件
合成事件：react在组件中的onClick等自定义的事件
原生事件：dom中的原生事件，addEventListener添加的

## setState()
setState() 
在合成事件和钩子函数中是异步的
在原生事件和setTimeout中是同步的

react根据一个变量isBatchingUpdates判断是否直接更新this.state
false同步更新，true异步更新
调用事件处理函数之前会先调用batchedUpdates将它改为true

传递一个函数，可以确保每次调用都使用最新的state

## react性能优化
+ 虚拟dom
+ shouldComponentUpdate生命周期









