/**
 * <JavaScript语言精粹> 继承函数化测试代码
 * @author Cara 17/9/18
 */

// 构造器
const mammal = spec => {
	let that = {};

	that.get_name = _ => spec.name;
	that.says = _ => spec.saying || 'Hi';

	return that
}

let myMammal = mammal({name: 'Cara'});

console.log(myMammal.says()) // 'Hi'


// 构造器2
const cat = spec => {
	spec.saying = spec.saying || 'meow';

	// 此时 that 已经包含: get_name 和 says 方法
	let that = mammal(spec);

	that.purr = n => {
		let str = '';

		for (let i = 0; i < n; i++) {
			if (str) {
				str += '-';
			}
			str += 'r';
		}
		return str
	};
	that.get_name = n => {
		return n || "i dont't have name"
	};

	return that
}

let myCat = cat({name: 'Henrietta'});

// i dont't have name
console.log(myCat.get_name())

// 这个时候 cat 还不能访问父类方法的能力
// 所以超类 super 还是有必要的

// 先扩展两个方法
// 这个方法不能用箭头函数来定义, 否则 this 指向的window
// 这里 this 需要的是被调用的对象
Function.prototype.method =  function (name, fn) {
	this.prototype[name] = fn;
	return this
}

// 定义调用父类的函数
Object.method('superior', function (name) {
	var that = this,
        method = that[name];
    return n => {
    	console.log(n)
        return method.call(that, n);
    };
})

// 来试试调用父类
const coolCat = spec => {
	let that = cat(spec);
	let	super_get_name = that.superior('get_name');

	// n 给父类方法传参
	that.get_name = n => {
        return 'like ' + super_get_name.call(this, n) + ' baby';
    };

	return that
}

let myCoolCat = coolCat({name: 'Bix', saying: 'Hi'});

let name = myCoolCat.get_name('this cat function');

console.log(name)