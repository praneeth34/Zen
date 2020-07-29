/** Write a function called “isEven”.
Given a number, “isEven” returns whether it is even. */

function isEven(num) {
  if (num % 2 === 0) {
    console.log(true);
  } else if (!Number.isInteger(num)) {
    console.log(-1);
  } else {
    console.log(false);
  }
}
var even = isEven(5);
