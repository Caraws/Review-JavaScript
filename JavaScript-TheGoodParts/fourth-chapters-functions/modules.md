># 模块
	使用函数和闭包来构造模块. 模块是一个提供接口却隐藏状态与现实的函数或对象.
通过模块可以摒弃全局变量的使用, 模块模式的一般形式是: 一个定义私有变量和函数的函数;
利用闭包创建可以访问私有变量和函数的特权函数. -----<JavaScript语言精粹>

```
const serial_maker = _ => {
	// 私有变量
	let prefix = '';
	let num = 0;

	return {
		// 特权方法
		set_prefix: str => {
			prefix = String(str);
		},
		set_num: n => {
			num = +n;
		},
		get_sum: _ => {
			let result = prefix + num;
			num++;
			return result;
		}
	}
}

let seqer = serial_maker();
seqer.set_prefix('Hi');
seqer.set_num(0101);

console.log(seqer.get_sum()) // 'Hi0101'
```

### CommonJs 与 AMD
因为有了模块的概念, 所以我们能将很多重复性的代码封装成一个模块, 想用什么
功能就加载什么模块, 也能更方便是使用别人的代码. 但是这样就会要求大家都用
同样的方式封装模块, 所以就有了 CommonJs 和 AMD 来规范大家的写法.

- CommonJs
Node.js的模块就是参照 CommonJs 来实现的, 在服务器端是一定会用到模块的. CommonJs
 是同步加载, 也就是说当引入一个模块必须等待该模块加载完成之后, 才会执行接下来的代码.
对于服务器来说所有的模块都放在本地, 所以等待的时间很短; 但对于浏览器来说, 所有的模块
都放在服务器, 所以等待的时间完全取决于网速, 就很容易出现假死的状态.

```
var math = require('math');

math.add(2, 3);
```

- AMD
AMD是"Asynchronous Module Definition"的缩写, 意思就是"异步模块定义". 它就是采用异步
加载, 因此模块的加载并不影响后面的语句执行. 将所有依赖于这个模块的语句都放在一个定义的回调
函数中执行, 这样等待模块加载完成之后就会去执行这个回调函数.

```
require([module], callback);

require(['module'], module => {
	module.increment(1, 2)
}) 

```

### export / export default 
在JavaScript ES6中，export与export default均可用于导出常量/函数/文件/模块等,
以便在其它文件或模块中通过import将其导入使用.

- export 
export 可以导出多个

```
// types.js
export const foo = 'foo';

export const fn = n => n+1;

// 在 index.html 引入
import {foo, fn} from 'types.js'
```
- export default
只能导出一个

```
// types.js
export default const foo = 'foo';

// 在 index.html 引入
import foo from 'types.js'
// 等价于
import {default as foo} from 'types.js'
```

* 17/9/15 *