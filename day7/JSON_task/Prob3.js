/*Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]] */

var obj = { name: "ISRO", age: 35, role: "Scientist" };

function convertListToObject(obj) {
  return Object.keys(obj).map((k) => [k, obj[k]]);
}

console.log(convertListToObject(obj));
