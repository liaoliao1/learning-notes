## 数据变为视图
1. DOM原生方法
2. 数组join方法 
3. es6的反引号``
4. mustache

## mustache基本使用
+ 循环对象数组
```
let templateStr = `
	<ul>
		{{#arr}}
			<li>
				{{name}}
				{{age}}
			</li>
		{{/arr}}
	</ul>
`
let data = {
	arr:[{name:'lee',age:12}
		,{name:'qaq',age:18}]
}
let domStr = Mustache.render(templateStr,data)
```
+ 循环简单数组
```
<ul>
	{{#arr}}
		<li>{{.}}</li>
	{{/arr}}
</ul>
```