/** Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
n = 0 -> 2⁰ -> [1]
n = 1 -> 2⁰, 2¹ -> [1,2]
n = 2 -> 2⁰, 2¹, 2² -> [1,2,4] */

function powersOfTwo(n) {
  res = [];
  result = 1;
  res.unshift(result);
  for (let i = 0; i < n; i++) {
    result = 2 * result;
    res.push(result);
  }

  return res;
}

console.log(powersOfTwo(2));
