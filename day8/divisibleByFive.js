/** Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
  if (num1 % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
var divisible = divisibleByFive(30);
console.log(divisible);
