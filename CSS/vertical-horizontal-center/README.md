# CSS 垂直水平居中大整合
在平时的布局中常常会用到的垂直水平居中. 下面就来总结几种垂直
水平居中的方法.

> 1. 绝对定位水平垂直居中
> 给元素设置绝对定位, 其父级元素为`body`或者指定的相对定位元素. 
> 它的缺点是必须设置宽度值或者高度值; 优点是兼容性挺好, 代码也不
> 多, 不过听说在 windows phone 上不起作用.

```html
<div class='wrapper'>
	<div class='absolute-center'>我是绝对定位<div>
</div>
```

```css
.wrapper{
	width: 100%;
	height: 200px;
	position: relative;
	border: thin solid black;
}
.absolute-center{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	background: deepskyblue;
	height: 100px;
	line-height: 100px;
	text-align: center;
	color: #fff;
}
```


> 之前一直不懂绝对定位的工作机制到底是怎样, 下面是查资料看到的:

1. 在普通文档流中`margin: auto`相当于`margin-top: 0; margin-bottom: 0;`;
2. `position: absolute`会脱离文档流, 脱离的部分将不会影响文档流中的内容.
3. 给块区域内设置`top: 0; right: 0;bottom: 0;left: 0`, 浏览器将重新分配一个边界框,  这个时候的块区域会占满父级所有可用空间.
4. 为这个块区域设置宽度或高度就可以防止该元素占满整个父级元素, 促使浏览器根据新的边界值重新计算`margin: auto`.
5. 由于内容块被绝对定位, 脱离了正常的内容流, 浏览器会给`margin-top,margin-bottom`相同的值, 使元素块在先前定义的边界内居中.

> 2.  可视区域内水平垂直居中
> 把上面例子改为`position: fixed; z-index: 999`, 设置一个较大值的`z-index`; 如果不给这个块级元素设置宽高则会占满整个屏幕.

```html
<div class="fixed-center">固定定位水平垂直居中</div>
```

```css
.fixed-center{
	width: 200px;
	height: 200px;
	position: fixed;;
	z-index: 999;
	background: rgba(0, 0, 0, .3);
	top: 0; 
	left: 0;
	bottom: 0; 
	right: 0; 
	margin: auto;
	line-height: 200px;
	color: #fff;
	text-align: center;
}
```

> 3. 边栏垂直居中
> 有时需要将一个内容块固定在屏幕的左侧或者右侧, 可以向内容快加入像这样的 CSS 代码`top: 20px; bottom: auto;`; 由于已经声明了`margin: auto`, 内容块将会垂直居中在你定义的`top`/ `right`/ `bottom`/ `left`边界值内. 可以用`left: 0; right: auto`将内容快固定在左侧; `right: 0; left: auto;`将内容固定在右侧.

```html
<div class="absolute-left">
	绝对定位在左侧
</div>
<div class="absolute-right">
	绝对定位在右侧
</div>
```

```css
.absolute-left {
	position: absolute;
	left: 20px;
	right: auto;
	margin: auto;
	width: 150px;
	height: 80px;
	background: red;
	color: #fff;
	text-align: center;
	line-height: 80px;
}
.absolute-right {
	position: absolute;
	left: auto;
	right: 20px;
	margin: auto;
	width: 150px;
	height: 80px;
	background: green;
	color: #fff;
	text-align: center;
	line-height: 80px;
}
```

> 4. 自适应绝对定位居中
> 自适应绝对居中的优势就是对百分比的宽高完美支持, 甚至是`max-width/ min-width`或者是`max-height/ max-width`.

```html
<div class="wrapper-responsive">
	<div class="absolute-responsive">
		自适应绝对定位居中
	</div>
</div>
```

```css
.wrapper-responsive{
	position: relative;
	top: 300px;
	width: 200px;
	height: 200px;
	border: thin solid black;
}
.absolute-responsive{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 60%;
	height: 60%;
	min-width: 50px;
	max-width: 150px;
	padding: 10px;
	text-align: center;
	color: #fff;
	background: skyblue;
}
```

未完待续…