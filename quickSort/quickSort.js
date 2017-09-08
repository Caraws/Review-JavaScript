// var array = [11, 65, 23, 108, 99, 11, 55, 11, 33, 100, 108, 100];
var array = [];

for (let i = 0; i <= 10000; i++) {
    array.push(Math.round(Math.random() * 10000))
}

console.time('快排')
const quickSort = array => {
    // 数组只剩一个元素时停止
    if (array.length <= 1) return array
    // 取参照物
    let pivotIndex = Math.floor(array.length / 2),
        // 这里用splice删除参照物避免重复循环
        pivot = array.splice(pivotIndex, 1),
        leftArr = [],
        rightArr = [];
    // 分区
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }
    }
    return quickSort(leftArr).concat(pivot, quickSort(rightArr))
}
console.log(quickSort(array))
// 4ms 左右
console.timeEnd('快排') 


console.time('原生');
array.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
});
console.log(array);
// 5ms 左右
console.timeEnd('原生') 


console.time('快排2');
// 互换
const swap = (items, firstIndex, secondIndex) => {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
// 分区
const partition = (items, left, right) => {

    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
// 排序
const quickSortTwo = (items, left, right) => {

    let index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortTwo(items, left, index - 1);
        }

        if (index < right) {
            quickSortTwo(items, index, right);
        }

    }

    return items;
}

console.log(quickSortTwo(array));
console.timeEnd('快排2');