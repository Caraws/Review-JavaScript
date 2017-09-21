# 方法
JavaScript包含了一套小型的可用在标准类型上的标准方法集,
主要是针对数组及字符串的一些处理.

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
slice 方法是截取 array 中的一段做浅复制.

未完....

*17/9/21*

