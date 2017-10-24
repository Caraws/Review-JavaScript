/**
 * Created on 2017-10-24 by Cara
 */

// 变量生命周期

/**
 * [Type description] 模拟验证类型
 * @type {Object}
 */
let Type = {};

for(let i = 0, type; type = ['String', "Array", "Number"][i++];) {
    (function (type){
        Type['is' + type] = function (obj) {
            return {}.toString.call(obj) === '[object ' + type + ']'
        }
    })(type)
}

Type.isArray([]); // true
Type.isString('str'); // true


// 封装变量
/**
 * [description] 计算参数乘积
 * @param  {Number} 需要相乘的参数
 * @return {Number} 乘积
 */
let mutl = (function () {
    // 缓存
    let cache = {};
    return function () {
        let arg = [].join.call(arguments, ',');
        if(arg in cache) {
            return cache[arg];
        }

        let a = 1;
        for(let k = 0, l = arguments.length; k < l; k++) {
            a = a * arguments[k]
        }
        return cache[arg] = a;
    }
})()

console.log(mutl(1, 2, 3, 2)); // 12
console.log(mutl(1, 2, 3, 2)); // 12

// 提炼
let betterMult = (function () {
    let cache = {};
    let calculate = function () {
        let a = 1;
        for(let i = 0, len = arguments.length; i < len; i++) {
            a = a * arguments[i];
        }
        return a
    };

    return function () {
        let arg = [].join.call(arguments, ',');
        if (arg in cache) {
            return cache[arg];
        }
        return cache[arg] = calculate.apply(null, arguments)
    }
})()

console.log(betterMult(1, 2, 3))