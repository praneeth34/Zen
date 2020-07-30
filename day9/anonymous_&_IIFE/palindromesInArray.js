/** Return all the palindromes in an array */

/** to strip all non alphabetic characters we need to run threw a function additionally
 * let clean = (str)=>str.replace(/[\W_]/g,'') totally optional can also further convert to lowercase
 */

let isPal = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

let arr = ["heleh", "lol", "icecream", "skiks"];

function allPal(x) {
  let outArr = [];
  for (let i = 0; i < x.length; i++) {
    if (isPal(x[i])) {
      outArr.push(x[i]);
    }
  }
  console.log(outArr);
}

allPal(arr);
