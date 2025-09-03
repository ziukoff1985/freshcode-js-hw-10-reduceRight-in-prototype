'use strict';

function MyArray(...elements) {
    this.length = elements.length;
    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }
}

MyArray.prototype.reduceRight = function (callback, initialValue) {
    let hasInitial = arguments.length > 1;
    let accumulator = hasInitial ? initialValue : this[this.length - 1];
    let startIndex = hasInitial ? this.length - 1 : this.length - 2;

    for (let i = startIndex; i >= 0; i--) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

const targetArr = new MyArray(100, 200, 300, 400);
console.log(targetArr);

// function callbackFunc(acc, curr, _index, _array) {
//     return acc + curr;
// }

console.log(
    'Sum of all elements =',
    targetArr.reduceRight((acc, curr) => acc + curr)
);
