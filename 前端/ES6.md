

## 1.let、const
let:

+ 在块级作用域内有效
+ 不能重复声明
+ 不存在变量提升

const:

+ 定义一个常量，不能修改

## 2.变量的解构赋值
```
let obj = {name:'jack',age:20}
let {name} = obj
```

## 3.模板字符串
使用``包含，变量使用${xxx}

## 4.箭头函数
定义匿名函数
`()=>{}`

this是定义时所处的对象，不是调用时决定。

## 5.三点运算符
+ 函数传参，取代arguments，只能在最后

	```
	function fun(a,...arr){xxx}
	```

+ 拆解数组，转化为,分隔

	```
	let arr = [1,2,3]
	...arr = 1,2,3
	```

## 6.Promise对象

## 7.class类

## 8.Set、Map容器
Set() 无序不重复的item

Map() 无序不重复的key，key:value键值对形式