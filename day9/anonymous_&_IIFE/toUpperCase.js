/** Convert all the strings to title caps in a string array */

var upper = function (str) {
  var output = str.split("").map((val) => val.toUpperCase());
  console.log(output.join(""));
};

upper("hello");
