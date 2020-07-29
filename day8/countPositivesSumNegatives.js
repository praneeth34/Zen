/** Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. */

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  var positiveArr = [];
  var negativeArr = [];
  var sum = array.reduce(function (a, b) {
    return a + b;
  }, 0);
  arr.forEach(function (item) {
    if (item < 0) {
      negativeArr.push(item);
    } else {
      positiveArr.push(item);
    }
    if (arr[0] === positiveArr.length && arr[1] === sum(negativeArr)) {
      console.log(arr);
    } else {
      console.log("check data");
    }
  });
};
console.log(ar2);
