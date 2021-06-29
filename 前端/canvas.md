## 创建canvas画布
```
var canvas=document.getElementById('canvas')
var context=canvas.getContext('2d')
canvas.width=1024
canvas.height=768
```
## 1.线条	
```
context.beginPath( )
context.moveTo(100,100)
context.lineTo(500,500)
context.lineWidth=5
context.strokeStyle='red'
context.fillStyle='blue'
context.closePath( )
```
## 2.矩形
```
context.rect(x,y,width,height)     //矩形线条
context.fillRect(x,y,width,height)   //填充矩形
context.strokeRect(x,y,width,height)  //画矩形框
```
## 3.线条属性
```
context.lineCap=butt		//default	
 				round
 				square
lineCap只适用于线段的开头和结尾处
```
![](https://ftp.bmp.ovh/imgs/2020/09/6be0c1773df99c30.jpg)
```
context.lineJoin=miter		//default
  				 bevel
  				 round
context.miterLimit=10  		//default
```
![](https://ftp.bmp.ovh/imgs/2020/09/c67f17785900ff7d.jpg)
## 4.图形变换
```
translate(x,y)			//改变坐标系位置
rotate(deg)
scale(sx,sy)			//同时会放大线宽等数据

context.save( )
context.translate(100,100)
context.fillRect(0,0,300,300)
context.restore( )
```
![](https://ftp.bmp.ovh/imgs/2020/09/7c2b2cdf0c83d911.jpg)
```
context.transform(a,b,c,d,e,f)
会叠加在上一个图形变换
context.setTransform(a,b,c,d,e,f)
设置为指定图形变换
```
## 5.填充样式
**fillStyle**
```
//线性渐变
var grd = context.createLinearGradient(xstart,ystart,xend,yend)
grd.addColorStop(stop , color)
//径向渐变
var grd = context.createRadialGradient(x0,y0,r0,x1,y1,r1)
grd.addColorStop(stop , color)
//图片填充
var pattern=context.createPattern(img,'repeat-style')
createPattern(canvas,'repeat-style')
createPattern(video,'repeat-style')
context.fillStyle=pattern
```
## 6.曲线绘制
```
context.arc(centerX,centerY,radius,startAngle,endAngle,false)
context.arcTo(x1,y1,x2,y2,radius) //与两条线相切，
                                  //起始于(x0,y0),结束于切点
```
![](https://ftp.bmp.ovh/imgs/2020/09/9863190670854e87.png)
**二次贝塞尔曲线context.quadraticCurveTo(x1,y1,x2,y2)**

**三次贝塞尔曲线context.bezierCurveTo(x1,y1,x2,y2,x3,y3)**

## 7.文字渲染
```
context.font="blod 40px Arial"
context.fillText(string,x,y,[maxlen])
context.strokeText(string,x,y,[maxlen])
font : 默认 "20px sans-serif"
font-style: normal		italic 	oblique
font-variant: normal	small-caps
font-weight: normal lighter bold bloder
font-size: 20px 2em 150%
font-family: web安全字体
文本对齐
context.textAlign=	    left	      center      right
context.textBaseline= top	    middle	    bottom
文本的度量
context.measureText(string).width    /获得文本宽度
```
## 8.阴影
```
context.shadowColor
context.shadowOffsetX
context.shadowOffsetY
context.shadowBlur

context.globalAlpha=0.7	//透明度
context.globalCompositeOperation="source-over" //遮挡前面元素
                				 "destination-over" //遮挡后面元素
context.clip( )		//剪辑区域
非零环绕原则 	 判断是否填充

清空矩形
context.clearRect(x,y,width,height)
context.isPointInPath(x,y)
```