'use strict';

function MyArray(...elements) {
    this.length = elements.length;
    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }
}

MyArray.prototype.reduceRight = function (callback, initialValue) {
    const hasInitial = arguments.length > 1;

    if (this.length === 0 && !hasInitial) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = hasInitial ? initialValue : this[this.length - 1];

    const startIndex = hasInitial ? this.length - 1 : this.length - 2;

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
    'Sum with initial =',
    newObj.reduceRight((acc, curr) => acc + curr, 10)
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

console.log(
    'String concatenation =',
    newObj.reduceRight((acc, curr) => acc + curr.toString(), '')
);

const stringArray = new MyArray('y', 't', 'r', 'e', 'w', 'q');
console.log(
    'Concat of all elements =',
    stringArray.reduceRight((acc, curr) => acc + curr)
);

const objArray = new MyArray({ x: 1 }, { x: 2 }, { x: 3 });
console.log(
    'Sum of prop x in obj:',
    objArray.reduceRight((acc, curr) => acc + curr.x, 0)
);
