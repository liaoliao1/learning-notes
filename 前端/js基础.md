## 1.Js关键词与Js保留字
#### 关键词

**break、else、new、var、case、return、void**

**catch、for、switch、default、if	、throw、delete**

**in、instanceof、typeof、finally、while、try**

#### 保留字
**abstract、enum、int、short、boolean、export、interface**

**static、byte、extends、long、super、char、final、native**

**class、debugger、package、throws、synchronized、const**

**volatile、private、float、transient、goto、protected**

**double、import、implements、public**	


## 2.常用交互方法
1. 输出
```
document.write(+"<br>");	多项内容用+连接
```
2. 警告
```
alert(字符串或变量);
```
3. 确认
```
confirm(消息对话框中显示的文本)
返回boolean值,确认返回true，取消返回false
```
4. 提问
```
prompt(str1,str2);
prompt(显示在对话框中的文本, 文本框中的可修改内容);
确认返回str2，取消返回null
```
5. 打开新窗口
```
window.open('目标网址','窗口名称','参数字符串')
窗口名称： _blank：在新窗口显示目标网页
		  _self：在当前窗口显示目标网页
		  _top：框架网页中在上部窗口中显示目标网页
参数字符串设置窗口参数
```
6. 关闭窗口
```
window.close(); 关闭本窗口
窗口对象.close();
```

## 3.文档对象模型DOM（Document Object Model）
HTML文档可以说由节点构成的集合，三种常见的DOM节点:
1. 元素节点：`<html>、<body>、<p>`等都是元素节点，即标签。
2. 文本节点:向用户展示的内容，如`<li>...</li>`中的文本。
3. 属性节点:元素属性，如`<a>`标签的链接属性`href="http://www.xxx.com"`。

**通过id获取元素对象**
```
var Object=document.getElementById("id");
得到的元素是一个对象
```

**innerHTML属性**  
```
指的是获得对象的内容
Object.innerHTML="";  可以改变元素的内容
```

**改变HTML样式**
```
Object.style.property="";
property可以是 backgroundColor  height  width  color  font  等
例如 mychar.style.color="red";
```

**显示和隐藏(display属性)**
```
Object.style.display=none;  隐藏
Object.style.display=block;  显示 
```
**className属性**
```
object.className=classname;
通过改变类名来改变CSS样式
```
**删除指定属性**
```
obj.removeAttribute(name)
```

## 4.事件
![](https://ftp.bmp.ovh/imgs/2020/09/8329817cc6e0dd6d.jpg)


## 5.Date 日期对象
```
var date=new Date();    初始值  当前电脑时间
访问方法   日期对象.方法

获得/设置年份
get/setFullYear()
获得星期
getDay()
获得/设置时间
get/setTime()     单位为毫秒   1秒=1000毫秒
```

## 6.字符串对象
**直接赋值定义**
```
charAt(index)    返回指定位置长度为1的字符串  下标越界返回空字符串
indexOf(substring, startpos(可选) )  返回指定字符串首次出现的位置 startpos指开始检索的位置
split(str, limit(可选))   分割为字符串数组，从str参数分割，最多分割limit次
substring(startpos,stoppos) 提取从startpos(包括)开始到stoppos(不包括)结束之间的字符串
substr(startpos, length)  提取从startpos开始length长的字符串
```
## 7.Math对象
无需创建，直接使用属性方法
![](https://ftp.bmp.ovh/imgs/2020/09/9b4a17cbbfe4338b.jpg)


## 8.数组对象
**属性   length**

**方法**
![](https://ftp.bmp.ovh/imgs/2020/09/2b81d9ae1a31addc.jpg)

## 9.浏览器对象
**window对象**

**方法**
![](https://ftp.bmp.ovh/imgs/2020/09/ddef621ed7806c7c.jpg)

## 10.JS计时器
```
setInterval(代码，交互时间); 	
clearInterval(id_of_setInterval) 
setTimeout(代码，延迟时间)  
clearTimeout(id_of_setTimeout)
```
## 11.History对象
```
window.history.属性/方法       window可省略
属性   length
方法   
history.back( )=history.go(-1)
history.forward( )=history.go(1)
history.go(number);   n=0 当前页面
```
## 12.Location对象
用于获得或设置、解析URL

**属性/方法**
```
hash		返回从#开始的url
host		返回主机名和端口号
hostname	返回主机名
href		返回完整的url
pathname	返回url的路径部分
port		返回端口号
protocol	返回协议
assign()	加载新的文档
reload()	重新加载
replace()	用新文档替换当前文档
```


## 13.Navigator对象
获得浏览器信息

**属性**
```
appCodeName			浏览器代码名的字符串表示
appName				浏览器名称
appVersion			浏览器的平台和版本信息
platform			操作系统平台
userAgent			客户机发送服务器的user-agent头部值
```
## 14.screen对象
window.screen.属性      window可省略

**属性**
```
availHeight			窗口可使用的屏幕高度
availWidth
colorDepth			浏览器表示的颜色位数
height				屏幕的高度
width				宽度
```

# DOM对象
**方法**
```
getElementsByName(name)   		name属性不唯一，返回的是元素的数组
getElementsByTagName(Tagname)   Tagname为标签名称
getAttribute()  	      		通过节点属性名称获取属性的值   con.getAttribute("id");
setAttribute(name,value)  		name要设置的属性名  value要设置的属性值
```
**DOM 节点有三个重要的属性 ：**


**一、nodeName:节点的名称(只读)**

1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

**二、nodeValue:节点的值**
1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值

**三、nodeType:节点的类型，是只读的。**
```
元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
```
**子节点childNodes**
```
node.childNodes  返回子节点数组，具有length属性
node.firstChild <=> elementNode.childNodes[0]     第一项
node.lastChild <=> elementNode.childNodes[length-1]     最后一项
.parentNode   指定节点的父节点
.nextSibling  兄弟节点
.previousSibling

.appendChild(newnode)  最后插入新节点
.insertBefore(newnode,node)  在节点之前插入新节点
.removeChild(node) 删除节点  方法返回被删除的节点
.replaceChild(newnode,oldnode);  实现子节点的替换
```
```
创建元素节点
document.createElement(tagName);
创建文本节点
document.createTextNode(data);
```
```
浏览器窗口可视区域大小
window.innerHeight  或  document.body.clientHeight		(height+padding)
window.innerWidth   或  document.body.clientWidth
网页内容尺寸
document.body.scrollWidth
document.body.scrollHeight
网页尺寸    
offsetHeight=clientHeight+滚动条+边框				(height+padding+border)
document.body.offsetWidth
document.body.offsetHeight
```
```
clientWidth	clientHeight
为元素的可见宽度和高度	只能读取  	返回一个数字
包括内容区和内边距

offsetWidth	offsetHeight
为元素的整个宽度和高度
包括内容区、内边距和边框

offsetParent
获取当前元素的开启定位的父元素

offsetLeft	offsetTop
当前元素相对于定位父元素的水平偏移量、垂直偏移量
scrollWidth	scrollHeight
获取元素整个滚动区域的宽度和高度
scrollLeft	scrollTop
获取滚动条水平/垂直滚动的距离
当满足scrollHeight - scrollTop = clientHeight
说明垂直滚动条滚动到底
当满足scrollWidth - scrollLeft = clientWidth
说明水平滚动条滚动到底
```