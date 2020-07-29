/** Find the maximum number in an array of numbers */

function findMax(ar) {
  var mx = ar[0];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > mx) {
      mx = ar[i];
    }
  }
  return mx;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
