# Promise
## 回调函数

+ 同步回调函数

	立即执行，不会放入回调队列中。

	例如：数组遍历相关的回调、Promise的excutor函数

+ 异步回调函数

	不会立即执行，放入回调队列中将来执行。
	
	例如：定时器回调、ajax回调、promise的成功/失败回调

## 错误异常
**常见的内置错误**

+ ReferenceError：引用的变量不存在
+ TypeError：数据类型不正确的错误
+ RangeError：超出所允许的范围
+ SyntaxError：语法错误

**错误处理**

+ 捕获错误

	try{...}catch(err){...}
	
	err:错误对象，message属性，stack属性

+ 抛出错误

	throw new Error('msg')

## Promise是什么
进行异步编程的新的解决方案，旧的为纯回调函数。

Promise是一个构造函数

Promise对象用来封装一个异步操作并可以获取其结果

## 状态改变
+ pending-->resolve
+ pending-->rejected

只有这2种，一个promise对象只能改变一次

![](https://ftp.bmp.ovh/imgs/2020/09/a81f2d907f328c05.jpg)

## 为什么用Promise
+ 旧的方式：回调函数必须在异步执行前指定
+ 新的：可在启动异步任务后，给promise对象绑定回调函数
+ 支持链式调用，回调函数嵌套调用，不便于阅读，异常处理

终极解决方案：async/await

## Promise方法
**Promise构造函数**

`new Promise(excutor)`
执行器函数同步执行

**方法**

+ Promise.resolve()	
	
	返回一个成功的promise对象
+ ~.reject()

	返回一个失败的promise对象
+ ~.all()

	传入[]，数组中为promise对象，所有都成功返回成功的promise对象

+ ~.race()

	[p1,p2,p3]，第一个完成的promise对象成功则返回成功，否则返回失败的promise对象

**抛出异常**

promise变为rejected状态，reason为抛出的错误。

**一个promise对象指定多个成功/失败的回调函数，都会调用。**

## then()
.then()中的回调函数执行返回的结果决定返回的promise对象的状态的值。

+ 抛出异常，状态为rejected，reason为异常
+ 返回非promise任意值，状态为resolved，value为返回的值，不返回值value为undefined
+ 返回新promise，结果为新promise的结果

Promise.resolve()

传入参数，如果是成功的promise，返回成功promise，value为promise的value；如果是失败的promise，返回失败promise，reason是promise的reason。

Promise.reject()

传入reason，返回失败的promise，reason为传入的reason

## 异常传透
.then()中无处理rejected的回调时，相当于存在reason=>{throw reason}

Promise().then().then()...catch() 失败时层层传递reason

**中断promise链**

返回pending状态的promise

return new Promise(()=>{})

## async/await
async function ...

返回一个promise对象

```
async function name(){
	await promise
}
```

await得到的结果是promise的value，只能得到成功的结果，失败用try/catch

如果不是promise，结果是它本身

await必须写在async函数内

## js宏队列与微队列
宏队列：dom事件回调、ajax回调、定时器回调

微队列：promise回调、mutation回调

微队列先执行，宏任务执行之前把所有微任务执行