// 17/9/23 By Cara

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


/**
 * 不稳定性排序
 * 让对象数组排序
 * @param {String} name 要排序的属性
 */

// 不稳定性：排序后两个相等键值的顺序和排序前的顺序相同
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



/**
 * 稳定性排序
 * @param {String} name 要排序的属性
 * @param {Object} minor 次要比较函数
 */
// 
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

