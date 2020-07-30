/** Return median of two sorted arrays of same size  */

const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a, b) {
    return a - b;
  });
  let len = x.length;

  return len % 2 === 0
    ? (x[Math.floor(len / 2) - 1] + x[Math.ceil(len / 2)]) / 2
    : x[Math.floor(len / 2)];
};

let a = [22, 43, 56, 78];
let b = [32, 54, 64, 77, 99, 1023, 44];
console.log(median(a, b));
