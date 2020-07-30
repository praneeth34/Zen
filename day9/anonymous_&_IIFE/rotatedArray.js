/** Rotate an array by k times and return the rotated array */

var rotate = function (num, k) {
  let i = 0;
  while (i < k) {
    num.unshift(num.pop()); //for left rotation change with push & shift
    i++;
  }
  return num;
};
num = [1, 2, 3, 4, 5, 6];
console.log(rotate(num, 2));
