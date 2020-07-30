/** Remove duplicates from an array */

let arr = [1, 2, 3, 3, "hello", "hello", 4];

//filter
let x = (item, index) => arr.indexOf(item) === index;
console.log(arr.filter(x));
/** 
//reduce
arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
*/
