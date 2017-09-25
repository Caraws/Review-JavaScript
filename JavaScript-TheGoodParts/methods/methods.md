# 方法
JavaScript包含了一套小型的可用在标准类型上的标准方法集,
主要是针对数组/正则及字符串的一些处理.

>## Array

### array.concat(item...)
concat 方法产生一个新的数组, 它包含的是一份 array 的浅复制
并把参数 item 追加在其后. 如果 item 是数组, 那么这个数组的
每个元素都会被添加.

```
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr.concat(arr2, 'wow');

console.log(result); // [1, 2, 3, 4, 5, 6, 'wow'];
```

### array.join(separator)
join 方法是把一个 array 以指定的分隔符构造成一个字符串.
它先把 array 中的每个元素构造成一个字符串, 然后以指定的
分隔符把它们都连接起来. 默认的 separate 是逗号, 可以用
空字符串作为 separate.

```
let array = ["a", "b", "c"];
array.push("d");

let result = array("|");
console.log(result); // "a|b|c|d"
```

### array.pop()
pop 和 push 方法可以使 array 像堆栈一样工作. pop 方法移除数组
中的最后一个元素并返回该元素, 如果是空数组, 它将返回 undefined.

```
let arr = [1, 2, 3];
arr.pop()

console.log(arr); // 3
```

### array.push(item...)
push 方法向数组的末尾添加一个或多个元素. 和 concat 方法不同的是, 
他会修改 array, 如果 item 是一个数组, 会将整个参数数组作为一个元素
添加到 array 的末尾, 并返回这个新数组的长度.

```
let array = [1, 2, 3];
let arr = [4, 5, 6];

let result = array.push(arr. 'Hi');
console.log(result); 
// array: [1, 2, 3, [4, 5, 6], 'Hi']
// result: 5
```

### array.reverse()
reverse 方法反转数组元素的顺序, 并返回数组本身.

```
let array = [1, 2, 3];

let result = array.reverse();
console.log(result); // [3, 2, 1]
```

### array.shift()
shift 方法移除数组中的第一个元素并返回该元素. 如果是空数组
将会返回 undefined. shift 通常比 pop 慢得多.

```
let array = [1, 2, 3];
let result = array.shift();

console.log(result); // 1

```

### array.slice(start, end)
slice 方法是截取 array 中的一段做浅复制. 复制 array[start] 开始
到复制 array[end]为止. end 参数是可选的, 默认值的长度是 array.length.
如果 start 的值大于等于 array.length, 会得到一个新的空数组.

```
let array = [1, 2, 3];

let a  = array.slice(0, 1); // [1]
let b = array.slice(1); // [2, 3]
let c = array.slice(-1); // [3]

```

### array.sort(comparefn)
sort 方法是对数组中的元素排序，但他的默认比较函数是把被排序的元素都视为
字符串。 所以通常都是自己定义比较函数.

```
// 对字符串和数字排序
const compare = (a, b) => {
	if (a === b) {
		return 0
	}
	if (typeof a === typeof b) {
		return  a < b ? -1 : 1
	}
	return typeof a < typeof b ? -1 :1
}

let array = ['bb', 'aa', 2, 'cc', 3, 1, 7];

console.log(array.sort(compare())); // [ 1, 2, 3, 7, 'aa', 'bb', 'cc' ]
```

> 稳定性：排序后2个相等键值的顺序和排序之前它们的顺序相同.

- 不稳定排序
```
const by = name => {
	// o/p 每组相比较的数据
	return (o, p) => {
		let a, b;

		if(o && p && typeof o === 'object' && typeof p === 'object') {
			a = o[name];
			b = p[name];
			// 全等时
			if (a === b) {
				return 0
			}
			// 同类型
			if (typeof a === typeof b) {
				return a < b ? -1 : 1 
			}
			// 不同类型
			return typeof a < typeof b ? -1 : 1
		}else {
			console.log('排序失败')
		}
	}
}

let s = [
	{first: 'Joe', last: 'DeRita'},
	{first: 'Moe', last: 'Howard'},
	{first: 'Joe', last: 'Besser'},
	{first: 'Shemp', last: 'Howard'},
	{first: 'Larry', last: 'Fine'},
	{first: 'Curly', last: 'Howard'},
]

console.log(s.sort(by('first')).sort('last'));
/*
[ 
	{ first: 'Curly', last: 'Howard' },
	{ first: 'Joe', last: 'DeRita' },
	{ first: 'Joe', last: 'Besser' },
	{ first: 'Larry', last: 'Fine' },
	{ first: 'Moe', last: 'Howard' },
	{ first: 'Shemp', last: 'Howard' }  
]
 */
```

- 稳定排序

```
// 让函数接收两个参数, 当第一个函数相等时
// 由第二个参数再次比较, 第二个次要比较函数可选
const betterBy = (name, minor) => {
	return (o, p) => {
		let a, b;
		if (o && p && typeof o === 'object' && typeof 'object') {
			a = o[name];
			b = p[name];
			if (a === b) {
				// 用次要比较函数再次对比
				return typeof minor === 'function' ? minor(o, p) : 0
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1
			}
			return typeof a < typeof b ? -1 : 1
		}else {
			console.log('排序失败');
		}
	}

}

let a = [
	{first: 'Joe', last: 'DeRita'},
	{first: 'Moe', last: 'Howard'},
	{first: 'Joe', last: 'Besser'},
	{first: 'Shemp', last: 'Howard'},
	{first: 'Larry', last: 'Fine'},
	{first: 'Curly', last: 'Howard'},
];

console.log(a.sort(by('last',by('first'))));
/*[ 
	{ first: 'Joe', last: 'Besser' },
	{ first: 'Joe', last: 'DeRita' },
	{ first: 'Larry', last: 'Fine' },
	{ first: 'Moe', last: 'Howard' },
	{ first: 'Shemp', last: 'Howard' },
	{ first: 'Curly', last: 'Howard' } 
]
 */
```

### array.splice(start, deleteCount, item...)
splice 方法从 array 中移除一个或多个元素, 并用新的 item 替换他们.
start 是从 array 中移除元素的开始位置 ( 索引 ) , deleteCount 是要
删除元素的个数, item 参数如果有会被插入到被删除元素的位置上. 返回
被删除的元素.

```
let arr = ['b', 'a', 'c', 'bug'];
let remove = arr.splice(1, 1, 'newItem', 'Hi');

console.log(arr); // ['b', 'newItem', 'Hi','c', 'bug']
console.log(remove); // ['a']
```

### array.unshift(item...)
unshift 方法向数组的开头插入一个或多个元素并返回数组新的长度.

```
let arr = ['a', 'b', 'c'];
let insert = arr.unshift('Hi', 'd');

console.log(arr); // ['Hi', 'd', 'a', 'b', 'c']
console.log(insert); // 5
```

>## RegExp

### regexp.exec(string)
exec 方法是使用正则表达式的最强大(最慢)的方法. 如果它成功匹配
regexp 和字符串 string, 将返回一个数组. 数组中下标为0的元素包含
正则表达式 regexp 匹配的子字符串; 下标为1的元素是分组1捕获的文本;
下标为2的元素是分组2捕获的文本, 以此类推. 如果匹配失败则返回null.

### regexp.test(string)
test 方法是使用正则表达式的最简单(最快)的方法. 如果该regexp 与 string
匹配, 它返回 true, 否则返回 false. 不要对这个方法使用 g 标识.

```
let b = /&.+/.test('frank &amp; beans');

console.log(b); // true
```

>## String

### string.charAt(pos)
charAt 方法返回在 string 中 pos 位置处的字符串. 如果 pos 小于0或者
大于等于字符串的长度, 将返回空字符串.

```
let name = 'Cara';
let initial = name.charAt(0);

console.log(initial); // 'C'
```

### string.concat(string...)
concat 方法把其他字符串连接起来返回一个新的字符串. 通常用`+`

### string.indexOf(searchString, position)
indexOf 方法在 string 内查找另一个字符串 searchString. 如果被
找到返回第一个匹配字符串的位置, 否则返回-1. 可选参数 position
可设置从 string 的某个指定位置开始查找.

```
let text = 'Mississippi';
let p = text.indexOf('ss'); // 2
p = text.indexOf('ss', 3); // 5
```

### string.lastIndexOf(searchString, position)
lastIndexOf 跟 indexOf 方法相反, 是从数组的末尾开始查找.
返回一个指定的字符串值最后出现的位置, 在一个字符串中的指定位置从后向前搜索.

```
let text = 'Mississippi';
let p = text.lastIndexOf('ss'); // 5
p = text.lastIndexOf('ss', 3); // 2
p = text.lastIndexOf('ss', 6); // 5
```

### string.match(regexp)
match 方法让字符串和一个正则表达式进行匹配. 它依据`g`标识符来决定如何
进行匹配. 如果没有`g`标识符, 那么调用 `string.match(regexp)`的结果与
调用`regexp.exec(string)`的结果相同. 如果有`g`标识符, 那么它返回一个
包含所有匹配项(除捕获分组)的数组.

### string.replace(searchValue, replaceValue)
replace 方法对 string 进行查找和替换操作, 并返回一个新的字符串. 参数
searchValue 可以是一个字符串或者一个正则表达式对象. 如果是一个字符串,
那么 searchValue 只会把第一次匹配的出现的地方替换掉; 如果是正则表达式
带有`g`标识符, 则会替换点所有匹配项.

```
let str = '1-10-1001';
let reg = /-(\d+)-/;

str.replace(reg, '栋$1单元');
console.log(str); // 1栋10单元1001

```

### string.search(regexp)
search 方法和 indexOf 方法类似, 只是它只接受一个正则表达式对象作为参数
而不是一个字符串. 如果找到匹配, 它返回第一个匹配的首字符位置. 如果没有
返回-1. 此方法会忽略`g`标识符.

### string.slice(start, end)
slice 方法复制 string 的一部分构造成一个新的字符串. 如果 start 参数是负数
, 他将与 string.length 相加. end 参数是可选的, 默认是 string.length. 如果
end 参数是负数, 也会与 string.length 相加. end 参数等于你想取的最后一个字符
的位置加1.

```
// str.length == 39
let str = 'and in it he says "Any damn fool could';
let a = str.slice(0, 3); // 'and'
let b = str.slice(-5); // 'could'
```

### string.split(separator, limit)
split 方法把 string 以指定的分隔符构造成一个字符串数组. 可选参数
limit 可以限制被分割片段的数量. separator 可以是一个字符串或者一个
正则表达式. 此方法会忽略`g`标识符.

```
let str = '0123456789';
let a = str.split('', 5);

console.log(a); // ['0', '1', '2', '3', '4']
```

### string.substring(start, end)
substring 方法和`slice` 方法一样, 只是不能处理负数. 所以用`slice`代替它

### string.toLocaleLowerCase()
toLocaleLowerCase 方法返回一个新的字符串, 它使用本地化的规则把这个 string
中的所有字母转换为小写格式.

### string.toLocaleUpperCase()
toLocaleUpperCase 方法返回一个新的字符串, 它使用本地化的规则把这个 string
中的所有字母转换为大写格式.

*17/9/21*

