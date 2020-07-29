/** Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt” */

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  var n = 0;
  var i = startAt;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
