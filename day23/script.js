//Lodash functions in ES6
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//1. _.chunk
var chunk = function (arr, chunks) {
    return arr.reduce(function (acc, itr, index) {
        return index % chunks === 0
            ? __spreadArrays(acc, [[itr]]) : __spreadArrays(acc.slice(0, -1), [__spreadArrays(acc.slice(-1)[0], [itr])]);
    }, []);
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
//2. _.reduce
var array1 = [1, 2, 3, 4];
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
console.log(array1.reduce(reducer));
//3. _.filter
var array2 = [1, 2, 3];
var fil = array2.filter(function (n) { return n <= 2; });
console.log(fil);
//4. _.find
var inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
var result = inventory.find(function (element) {
    return element.name === "cherries";
});
console.log(result);
//5. sum
var val = [1, 2, 3, 4, 5];
var sum = val.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum);
