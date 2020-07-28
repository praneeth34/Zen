/*Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/

var arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];
function fromListToObject(arr) {
  var object = {};
  for (var i = 0; i < arr.length; ++i) {
    var newArray = arr[i];
    object[newArray[0]] = newArray[1];
  }
  return object;
}

console.log(fromListToObject(arr));
