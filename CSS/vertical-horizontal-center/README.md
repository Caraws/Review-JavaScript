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
.absolut-center{
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

效果如下:
![absolute-center](http://orf90agxq.bkt.clouddn.com/github/absoluteCenter/1507561071445.jpg)

> 之前一直不懂绝对定位的工作机制到底是怎样, 下面是查资料看到的:

1. 在普通文档流中`margin: auto`相当于`margin-top: 0; margin-bottom: 0;`;
2. `position: absolute`会脱离文档流, 脱离的部分将不会影响文档流中的内容.
3. 给块区域内设置`top: 0; right: 0;bottom: 0;left: 0`, 浏览器将重新分配一个边界框,  这个时候的块区域会占满父级所有可用空间.
4. 为这个块区域设置宽度或高度就可以防止该元素占满整个父级元素, 促使浏览器根据新的边界值重新计算`margin: auto`.
5. 由于内容块被绝对定位, 脱离了正常的内容流, 浏览器会给`margin-top,margin-bottom`相同的值, 使元素块在先前定义的边界内居中.
