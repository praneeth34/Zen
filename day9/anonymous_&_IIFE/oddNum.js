/** Print odd numbers in an array  */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (x) {
  let outArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 !== 0) {
      outArr.push(x[i]);
    }
  }
  console.log(outArr);
})(arr);
