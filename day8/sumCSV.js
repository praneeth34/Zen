/** Calculate the sum of numbers received in a comma delimited string */

//console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

(function (s) {
  let arr = [];
  arr = s.split(",").map((val) => +val);

  var sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
})("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9");
