/* 17/9/12 By Cara*/

/**
 * @param  {Number} 递增数
 * @return {Object} 特权方法
 */
const myClosure = ( _ => {
	// 私有变量
	let value = 0;
	return {
		increment: n => {
			value += typeof n == 'number' ? n : 0;
		},
		getValue: _ => value
	}

 // 注意这里的括号, 是将包含 increment 和 getValue的对象返回
 // 所以这两个方法才具有访问 value 变量的特权
})();

myClosure.increment(1);
myClosure.increment(2);

// 这样是无法访问到内部私有变量的
console.log(myClosure.value)

// value变量不会被销毁
// 如果需要销毁, 要手动清除 ( value = undefined )
console.log(myClosure.getValue()); // 3
