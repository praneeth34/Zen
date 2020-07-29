/** Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length. */

function isSameLength(word1, word2) {
  let arr1 = word1.split("");
  let arr2 = word2.split("");
  if (arr1.length === arr2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameLength("GUVI", "GEEK"));
