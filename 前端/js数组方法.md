# js数组的方法
## map
```
array.map(function(currentValue,index,arr), thisValue)

currentValue  必须。当前元素的值
index	      可选。当前元素的索引值
arr	          可选。当前元素属于的数组对象
thisValue     可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。

map() 方法返回一个新数组，按原始数组顺序处理
map() 不会对空数组进行检测。
map() 不会改变原始数组。
```
## forEach
```
array.forEach(function(currentValue, index, arr), thisValue)

currentValue  必须。当前元素的值
index	      可选。当前元素的索引值
arr	          可选。当前元素属于的数组对象

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
```
## filter
```
array.filter(function(currentValue,index,arr), thisValue)

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
```
