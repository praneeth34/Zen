/** Return all the prime numbers in an array */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primenum = function (num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
};

console.log(arr.filter(primenum));
