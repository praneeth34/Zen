/** Sum of all numbers in an array */

let arr = [1, 2, 3, 4];
var sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);
