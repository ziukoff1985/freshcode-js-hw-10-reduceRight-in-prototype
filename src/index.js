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

const newObj = new MyArray(1, 2, 3, 4, 5);

console.log(
    'Sum of all elements =',
    newObj.reduceRight((acc, curr) => acc + curr)
);
console.log(
    'Product of all elements =',
    newObj.reduceRight((acc, curr) => acc * curr)
);
console.log(
    'Average of all elements =',
    newObj.reduceRight((acc, curr) => {
        return acc + curr;
    }) / newObj.length
);

console.log(
    'Maximum of all elements =',
    newObj.reduceRight((acc, curr) => {
        return acc < curr ? curr : acc;
    })
);
console.log(
    'Minimum of all elements =',
    newObj.reduceRight((acc, curr) => {
        return acc < curr ? acc : curr;
    })
);
