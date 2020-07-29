/** Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
] */

var arr = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

function transformEmployeeData(arr) {
  var tranformEmployeeList = [];
  for (let i = 0; i < arr.length; i++) {
    function fromListToObject(a) {
      var object = {};
      for (var j = 0; j < a.length; j++) {
        var newArray = a[j];
        object[newArray[0]] = newArray[1];
      }
      return object;
    }
    tranformEmployeeList.push(fromListToObject(arr[i]));
  }

  return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));
