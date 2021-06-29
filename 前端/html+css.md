![](https://ftp.bmp.ovh/imgs/2020/11/4034cd7d1378d110.png)
# 1. HTML

## 1.1 html结构
```
<!doctype html>    html5版本  文档声明
<html>
	<head>
		<title>	</title>
		<meta charset="utf-8"> 设置字符集   
		<meta name="keywords" content="网购">
name指定数据名称 content指定数据的内容 keywords表示网站的关键字
		<meta name="description" content="介绍网站">  description指定网站的描述
		<link>
		<style>	</style>
		<script>	</script>
	</head>
	<body>
		<h1>	</h1>
		<h2>	</h2>  标题标签最多到h6
	</body>
</html>
```
## 1.2 html标签
```
<!--被注释部分-->  代码注释 

<em>需要强调的文本</em>  表示为斜体

<strong>需要强调的文本</strong>  表示为加粗

<span>设置文本</span>

<q> 引用的简短文本 </q>   加上双引号

<blockquote> 引用的较长文本</blockquote> 两边缩进

<br/> 文本换行

<hr/> 添加水平横线 分割

&nbsp; 加入空格

&gt; 大于号

&lt; 小于号

<address> 地址信息 </address>

<code> 一行代码语言 </code>

<pre> 文本中的空格换行保留</pre>  如显示多行代码

无序信息列表，每个信息前加个圆点
<ul>
	<li>信息</li>
	<li>信息</li>
</ul>

有序信息列表，每个信息前加序号
<ol>
	<li>信息</li>
	<li>信息</li>
</ol>

<div id="板块标记">独立的板块</div>  对内容划分板块

HTML属性
key:value 	value必须包在引号内
```
## 1.3 表格
```
表格显示
<table  summary="表格摘要信息，不显示">
<tbody>
	<caption>表格标题</caption>
	<tr> 表格中的一行
		<th> 人数</th>  表头单元
		<th>	</th>
	</tr>
	<tr>
		<td>  2   </td>  第二行第一个单元
		<td>	</td>
	</tr>
</tbody>
</table>
```
## 1.4 超链接
```
超链接
超链接是行内元素，可以嵌套除它自身外的任何元素
<a href="目标网站" title="点击显示的文本">点击的文本</a>
target属性，指定超链接打开的位置
_self 默认值 在当前页面打开
_blank 在新的页面打开
<a href="目标网站" target="_blank">点击的文本</a>
链接发送Email
<a href="mailto:目标邮箱？subject= &body= ">点击的文本</a>

<a href="#bottom">去底部</a>
<a href="#">回到顶部</a>

图片标签
<img src="图片地址" alt="加载失败时的文本" title="图片提示文本">
```
## 1.5 用户交互
```
form表单
<form method="传送方式" action="传送到的地方"> 
文本输入框 
<input type="text" name="文本框命名" value="输入默认值">
密码输入框 
<input type="password" name="密码框命名" value="输入默认值">
</form>
提交按钮
<input type="submit" value="按钮上显示的文字">
重置按钮
<input type="reset" value="按钮上显示的文字">
普通按钮
<input type="button" value="按钮">
多行输入
<textarea rows="行数"  cols="列数">  文本  </textarae>

单选框（name相同）
<input type="radio" name="框命名" value="提交服务器的值" check="checked"/>
多选框（name不同）
<input type="checkbox" name="框命名" value="提交服务器的值">
下拉列表框
<select multiple="multiple">（可多选）
      <option value="看书">看书</option>
      <option value="旅游" select="selected">旅游</option>
      <option value="运动">运动</option>
      <option value="购物">购物</option>
</select>

查看和该label标签相关的表单控件
<label for="控件id名称"> 内容  </label>
```
## 1.6 内联框架
```
用于向当前页面引入一个其他页面
<iframe src="https://www.baidu.com" width="800" frameborder="0"></iframe>
```
## 1.7 音视频
```
controls 允许控制
autoplay 自动播放
loop 循环播放
<audio src="" controls autoplay loop></audio> 音频
<video src="" controls autoplay loop></video> 视频
```
## 1.8 语义化标签
```
布局标签
        header表示网页头部
        main表示主体
        footer表示网页底部
<header></header>
<main></main>
<footer></footer>
```
## 1.9 块元素、行内元素

**块级元素**
+ 在页面中独占一行，自上向下
+ 默认宽度是父元素的全部
+ 默认高度被内容撑开

![](https://ftp.bmp.ovh/imgs/2020/08/0628d337742d7ee0.png)

**行内元素**
+ 不会独占一行
+ 自左向右水平排列，如果一行不能容下所有元素，元素会换到第二行继续自左向右排列
+ 默认宽度和高度被内容撑开

![](https://ftp.bmp.ovh/imgs/2020/08/201f51a9be1e0ee9.png)

**块级元素与行内元素的区别：**
1. 块级元素会独占一行，其宽度自动填满其父元素宽度；
行内元素不会独占一行，相邻的行内元素会排列在同一行，直至一行排不下才会换行，其宽度随元素的内容而变化。
2. 块级元素可以包含行内元素和块级元素；行内元素不能包含块级元素。
3. 行内元素设置width、height、margin-top、margin-bottom、padding-top、padding-bottom无效。

**块级元素与行内元素的转换**
```
display:inline-block;
display:inline;
display:block;
```
**可变元素**
![](https://ftp.bmp.ovh/imgs/2020/08/a80f302965bce148.png)

---

![](https://ftp.bmp.ovh/imgs/2020/11/ee751fc50a21f64e.png)
# 2. CSS 

## 2.1 层叠样式表使用方式
```
p { font-size:12px;  color:red; font-weight: bold; }
选择符    声明{ 属性：值 ；}

CSS注释   /*  注释部分  */

1.内联式CSS
<p style="color:blue; font-size:12px">文本</p>
2.嵌入式CSS
<style type="text/css">
span{color:blue;}
</style>
3.外部式CSS
<link href=".css文件"  rel="stylesheet"  type="text/css" />
一般在head之前
```
## 2.2 选择器
```
元素选择器 
p{color: aqua;}
类选择器
.类名{ css代码;}
id选择器 根据id选中一个元素
#id名{ css代码;}
通用选择器  为所有的标签设置格式
*{css代码}

复合选择器
交集选择器 选中同时复合多个条件的元素
语法: 选择器1选择器2选择器n{}
div.red{font-size: 30px;}
并集选择器
语法:选择器1,选择器2,选择器n{} 
h1,span{color: green;}

关系选择器
子选择器  语法:父元素>子元素
.fisrt>span{css代码}  
后代选择器 作用于所有后代 语法: 祖先 后代
.fisrt span{css代码}  
选择下一个兄弟元素    语法:前一个+后一个
选择下面所有兄弟元素  语法:前一个~后一个

属性选择器
[属性名] 选择含有指定属性的元素
[属性名=属性值] 选择含有指定属性和属性值的元素
[属性名^=属性值] 选择属性值以指定值开头的元素
[属性名$=属性值] 选择属性值以指定值结尾的元素
[属性名*=属性值] 选择属性值含有指定值的元素
p[title^=abc]{color: blue;}
<p title="abcd">少小离家老大回</p>

伪类选择器
伪类一般情况下使用:开头
:first-child 第一个子元素
:last-child 最后一个子元素
:nth-child() 选中第n个子元素
这些伪类根据所有子元素排序
:first-of-type
:last-of-type
:nth-of-type()
在同类型元素中进行排序
:not()
否定伪类 将符合条件的元素从选择器中去除
a:hover{css代码}     为a标签的鼠标滑过状态设置格式
a:link{}			没访问过的链接
a:active{}			鼠标点击状态
a:visited{color}	表示访问过的链接，visited只能修改颜色

伪元素，表示页面中一些特殊的并不真实的存在的元素
::开头
::first-letter 表示第一个字母
::first-line 表示第一行
::selection 表示选中的内容
::before 表示元素的开始
::after 表示元素的最后
before和after必须结合content属性来使用   {content:'';}
```
## 2.3 优先级
```
继承
样式的继承，样式会应用到它的后代元素上，并不是所有的样式都会被继承

使用权值更高的CSS样式
通配选择器为0，标签的权值为1，类选择符为10，id选择符为100，内联样式为1000
权值相同时，使用最后面的CSS样式
！important设置最高优先级
p{color:red !important;}
```
## 2.4 单位
```
长度单位 
            像素
            百分比 设置为相对于父元素属性的百分比
            em 相对于元素的字体大小来计算 1em=1font-size
                em根据字体的大小而改变
            rem 相对于根元素的字体大小来计算

颜色单位
            RGB值 每一种颜色范围在0-255（0%-100%）
            语法：RGB（红色，绿色，蓝色）
            RGBA  A表示不透明度
            十六进制RGB 
            语法：#红色绿色蓝色

            HSL值 HSLA值
            H色相  （0-360） 
            S饱和度 颜色浓度（0-100%）
            L亮度  （0-100%）
```

## 2.5 字体
```
font-face可以将服务器中的字体提供给用户去使用
@font-face {
     font-family: 'myfont';
     src: url('路径');
}
字体相关样式
	color 设置字体颜色
	font-size 字体大小 
	font-family  字体的格式
		serif      衬线字体
		san-serif  非衬线字体
		monospace 等宽字体

图标字体（iconfont）
	fontawesome  下载
	直接通过类名来使用 class='fas' / fab

行高（line height）
	行高指文字占有的实际高度
	行高经常用来设置文字的行间距
字体框
	字体存在的格子，设置font-size实际设置字体框的高度
将行高和高度设为一样的值，使单行文字在一个元素中垂直居中

font-weight:blod   加粗
			normal 默认不加粗
font-style: italic 斜体
			normal 正常的

font: 字体大小/行高  字体族

文本的样式
text-align 文本的水平对齐
		left    左侧对齐
        right   右对齐
        center  居中对齐
        justify 两端对齐
vertical-align  设置元素的垂直对齐
        baseline  默认 基线对齐
        top    顶部对齐
        bottom 底部对齐
        middle 居中对齐
text-decoration  设置文本修饰
		none         什么都没有
        underline    下划线
        line-through 删除线
        overline     上划线
white-space 设置网页如何处理空白
		normal 正常
        nowrap 不换行
        pre    保留空白
```
## 2.6 背景
```
background-color  设置背景颜色

background-image:url('图片地址')  设置背景图片

background-repeat: 设置背景的重复方式
		repeat 默认 沿x和y轴方向重复
        repeat-x
        no-repeat  不重复

background-position: 设置背景图片的位置
        通过top left right bottom center设置

background-clip 设置背景的范围
		border-box 默认 背景出现在边框的下边
        padding-box 背景不会出现在边框，只出现在内容区和内边距
        content-box 背景只会出现在内容区

background-origin 背景图片的偏移量计算的原点
        padding-box 默认 background-position从内边距处开始计算
        content-box 从内容区开始计算
        border-box  从边框开始计算

background-size  设置背景图片的大小   两个数表示宽度和高度
        cover 图片比例不变，将元素铺满
        contain 图片比例不变，将图片在元素完整显示

background-attachment 背景图片是否跟随元素移动
        scroll 默认值 跟随移动
        fixed   固定在页面中，不移动

!!渐变是图片，通过background-image设置
线性渐变，沿一条直线发生变化
linear-gradient(to left red 50px,yellow) 从红向黄渐变
		xxxdeg 方向的角度
        turn 表示一圈
径向渐变（放射性的效果）
radial-gradient(大小 at 位置，颜色 位置，颜色 位置) 
```
## 2.7 盒模型
```
元素中所有子元素文本在内容区排列，内容区的大小由width和height设置

边框（border）
border-width: 上 右 下 左
border-color
border-style: dashed dotted solid 
border:    简写属性
内边距（padding）
padding-top\right\bottom\left
内边距的设置影响盒子大小
外边距（margin）
外边距不会影响盒子可见框的大小,但会影响盒子的位置
margin-top\right\bottom\left

水平布局
一个元素在父元素中必须满足:
margin-left+border-left+padding-left+width+padding-right+border-right+margin-right=父元素内容区的宽度
如果没有auto情况，自动调整margin-right的值
垂直布局
如果子元素的大小超过了父元素，会从父元素溢出
使用overflow属性来设置父元素处理子元素的溢出
可选值：visible  默认值
       hidden   超出的内容被隐藏
       scroll   生成两个滚动条，查看完整内容
       auto     根据需要生成滚动条
垂直方向外边距重叠
       兄弟元素
           外边距取两者之间的较大值
       父子元素
           子元素的外边距会传递给父元素，必须进行处理

行内元素的盒模型
行内元素不支持设置宽度和高度
display用来显示元素显示的类型
	   inline 设置为行内元素
       block  设置为块元素
       inline-block 设置为行内块元素，可以设置高宽又不会独占一行
       table  设置为一个表格
       none   元素不在页面中显示，不占据位置
visibility 设置元素的显示状态
	   visible  默认值，正常显示
       hidden  元素隐藏，但是依然占据页面的位置

box-sizing 设置盒子尺寸的计算方式
		content-box 默认值，宽高设置内容区大小
		border-box  宽高设置可见框(内容区+内边距+边框)的大小
```
## 2.8 轮廓、阴影、圆角
```
outline设置元素的轮廓线,用法、显示和border相同,不同在于轮廓不影响其他元素的布局

box-shadow设置元素的阴影效果，
          第一个值 水平偏移量
          第二个值 垂直偏移量 
          第三个值 阴影的模糊半径
          第四个值 阴影的颜色

border-radius 设置圆角
border-top-left-radius 第一个值为水平方向半径 第二个为垂直方向
border-radius可以指定四个角的圆角
```
## 2.9 浮动
```
通过浮动可以使一个元素向其父元素的左侧或右侧移动
float:	none 默认值，不浮动
        left 元素向左浮动
        right 元素向右浮动
浮动的特点
        浮动元素会完全脱离文档流，不再占据文档流的位置
        设置浮动以后元素会向父元素的左侧或右侧移动
        浮动元素向左或向右移动时，不会超过它前边的其他浮动元素
        浮动元素不会超过它上边浮动的兄弟元素，最多和它一样高
脱离文档流的特点
        块元素
              块元素不再独占页面的一行
              块元素的宽度和高度默认被内容撑开
        行内元素
              脱离文档流会变成块元素
        脱离文档流以后，不区分块元素和行内元素

浮动布局中，父元素的高度默认被子元素撑开
当子元素浮动后，其会完全脱离文档流，无法撑起父元素的高度，导致父元素的高度丢失

BFC（block formatting context）块级格式化环境
BFC是CSS中一个隐含属性，可以为一个元素开启BFC
开启后元素会变成一个独立的布局区域
开启BFC后元素的特点
        元素不会被浮动元素所覆盖
        子元素和父元素外边距不会重叠
        元素可以包含浮动的子元素
开启BFC的方式：
        设置元素的浮动 float
        将元素设为行内块元素 inline-block
		position:absolute;
        将元素的overflow设置为非visible的值（常用）
        overflow：hidden 开启BFC副作用最小

如果不希望某个元素因为其他元素浮动的影响而改变位置
通过clear清除影响
clear: left 
       right
       both 清除两侧较大影响的那侧
原理：通过自动添加上外边距使其不受影响

clearfix可以同时解决高度塌陷和外边距重叠的问题
.clearfix::before,.clearfix::after{
        content: '';
        display: table;
        clear: both;
}
```
## 2.10 布局定位
```
文档流（normal flow）
网页是一个多层结构，最底下的一层称为文档流，我们创建的元素默认在文档流

定位position可选值
        static 默认值，没有开启定位
        relative 开启相对定位
        absolute 开启绝对定位
        fixed    开启固定定位
        sticky   开启粘滞定位



绝对定位(position: absolute)
	开启后，元素从文档流中脱离
	改变元素的性质，行内变成块，块的宽高被内容撑开
	绝对定位元素相对于其包含块进行定位
包含块（containing block）
	正常情况下，包含块是离当前元素最近的祖先块元素
	绝对定位的包含块：离他最近的开启定位的祖先元素
	如果所有都没开启定位，则根元素是它的包含块（html）

相对定位(position: relative)
	相对于参照元素在文档流中的位置进行定位
	偏移量（offset）top/bottom/left/right

固定定位(position: fixed)
	也是一种绝对定位，大部分特点相同
	固定定位永远参考于浏览器的视口进行定位

粘滞定位 position:sticky
	和相对定位的特点基本一致
	不同的是粘滞定位可以在达到某个位置时将其固定

开启绝对定位满足 left+七个值+right=包含块宽度
			   top+七个值+bottom=包含块高度

对于开启了定位的元素，可以通过z-index属性指定元素的层级
	整数值越大层级越高
	元素的层级一样，优先显示靠下的元素
	祖先元素的层级再高也不会盖住后代元素
```
## 2.11 动画
```
过渡 transition 指定一个属性发生变化时的切换方式
transition-property 指定要执行过渡的属性
transition-duration 指定过渡的时间
transition-timing-function 过渡的时序函数
		ease 默认值 先加速，后减速
        linear   匀速运动
        ease-in  加速运动
        ease-out 减速运动
        cubic-bezier()来指定时序函数
        steps() 分布执行过渡效果
transition-delay  过渡效果的延迟

动画和过渡类似,实现一些动态的效果
不同的是过渡需要在某个属性变化时才会触发,动画可以自动触发

设置动画效果，必须先设置一个关键帧，关键帧设置了动画执行的每一个步骤
@keyframes test {
                from{
                    /* 表示动画开始位置 */
                    margin-left:0;
                }
                to{
                    /* 动画结束位置 */
                    margin-left: 700px;
                }
            }
animation-name: test;
animation-duration: 2s;
animation-iteration-count: infinite; 无限执行
animation-direction: normal; 动画运行的方向
		normal 默认值 从from到to
        reverse  从to向from
        alternate  从from到to 重复执行时反向执行
animation-play-state: running; 动画的执行状态 
		running 默认值 动画执行
        paused  动画暂停
animation-fill-mode: none; 动画的填充模式
		none  默认值 动画执行完回到原来位置
        forwards  执行完毕停止在动画结束位置
        backwards 动画延迟等待时，元素就会处于开始位置
        both  结合forwards和backwards

变形就是通过CSS来改变元素的形状或位置
transform 用来设置元素的变形效果
	平移 translateX() 沿着x轴方向平移
z轴平移
	距离远大，元素离人越近
	通过设置网页的视距看见效果 perspective: 800px;

通过旋转可以使元素沿着x y或z旋转指定的角度
    rotateX()
    rotateY()
    rotateZ()
backface-visibility:hidden; 是否显示元素的背面

对元素进行缩放的函数
    scaleX()
    scaleY()
    scale() 双方向的缩放
transfrom-origin:center 变形的原点
```
## 2.12 水平垂直居中
```
水平居中
行内元素 		p{text-align:center;}
定宽块状元素 		div{width:200px; margin:20px auto;}
不定宽块状元素
方法1. 加入table标签
方法2. 设置为行内元素 	display:inline;
方法3. 父元素			{ float:left;position:relative;left:50%}
        		子元素		     {position:relative; left:-50%;}
```
```
垂直居中
1.父元素高度确定 单行文本
方法：   设置父元素高度和行高line-height一致
2.父元素高度确定 多行文本
方法1： 使用table  设置 vertical-align：middle
方法2： 设置 display:table-cell;
			vertical-align:middle;
```
```
水平垂直居中
1.  父元素  position:relative
    子元素  position:absolute; top:50%; left:50%; transform:translateX(-50%) translateY(-50%);
2. 子元素  position:absolute; left:0; right:0; top:0; bottom:0; margin:auto;
	只适用于元素的大小确定
3.  display:flex; justify-content:center; align-items:center;
```
## 2.13 弹性盒flex
```
flex是CSS中的又一种布局手段，主要用来代替浮动来完成页面的布局
display:flex 设置为块级弹性容器
display:inline-flex  设置为行内的弹性容器

flex-direction 指定容器中弹性元素的排列方式
		row 默认值，水平排列（自左向右）
                    主轴 自左向右
        row-reverse 弹性元素在容器中反向水平排列（自右向左）
        column 弹性元素纵向排列（自上向下）
        column-reverse  弹性元素纵向排列（自下向上）
flex-grow 指定弹性元素的伸展的系数
flex-shrink 指定弹性元素的收缩系数
flex-wrap 设置弹性元素是否在弹性容器中自动换行
		nowarp 默认值 不自动换行
        wrap 元素沿着辅轴方向自动换行
        wrap-reverse 元素沿着辅轴反方向换行
justify-content 如何分配主轴上的空白空间
		flex-start 元素沿着主轴起边排列
        flex-end  沿着终边排列
        center  元素居中排列
        space-around 空白分布到元素两侧
        space-evenly 空白分布到元素的单侧
        space-between 空白分布到元素间
align-items 元素在辅轴上如何对齐
		stretch 默认值 元素的长度设为相同的值
        flex-start 元素不拉伸，沿着辅轴起边对齐
        flex-end  沿着辅轴终点对齐
        center   居中对齐
        baseline 基线对齐
align-content 辅轴空白空间的分布
		flex-start 
        flex-end  
        center
```
## 2.14 响应式
```
像素
物理像素  显示器像素
CSS像素  浏览器在显示网页时，需要将CSS像素转换为物理像素
默认情况下在pc端，一个CSS像素等于一个物理像素

移动端默认视口980px
像素比就是 980/手机物理像素 980/750
编写移动页面时，必须确保一个合理的像素比
1个CSS像素=2个物理像素

移动端开发时，不使用px来进行布局
vw表示视口宽度（view width）
100vw=一个视口宽度

响应式布局
通过媒体查询，可以为不同设备、不同状态来分别设置样式
		@media all    所有设备
               print   打印设备
               screen  带屏幕的设备
               speech  屏幕阅读器
width  视口宽度
height 视口高度
min-width 视口最小宽度
max-width 视口最大宽度
@media(min-width:500px) and (max-width: 700px){...}
```