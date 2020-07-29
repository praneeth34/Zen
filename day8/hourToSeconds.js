/** Convert Hours into Seconds
Write a function that converts hours into seconds. */

var arr = [1, 2, 3];
function hourToSeconds(arr) {
  console.log(arr.map((val) => val * 60 * 60));
}
var data = hourToSeconds(arr);
