/** Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’. */

function getLastElement(array) {
  if (array.length !== 0) return array[array.length - 1];
  else return -1;
}

console.log(getLastElement([1, 2, 3, 4]));
