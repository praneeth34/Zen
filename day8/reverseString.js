/** Reverse a string with out reverse() */

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
  outArr = [];
  x = s.split("");
  for (let i = x.length; i >= 0; i--) {
    outArr.push(x[i]);
  }
  return outArr.join("");
}
