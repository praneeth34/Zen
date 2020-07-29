/** Create a function that receives an array of numbers and returns an array containing only the positive numbers */

function getPositives(ar) {
  var arr = [];
  ar.forEach(function (item) {
    if (item > 0) {
      arr.push(item);
    }
  });
  return arr;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
