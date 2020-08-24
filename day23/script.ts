//Lodash functions in ES6

//1. _.chunk
const chunk = (arr, chunks) => {
  return arr.reduce((acc, itr, index) => {
    return index % chunks === 0
      ? [...acc, [itr]]
      : [...acc.slice(0, -1), [...acc.slice(-1)[0], itr]];
  }, []);
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

//2. _.reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

//3. _.filter
const array2 = [1, 2, 3];
const fil = array2.filter((n) => n <= 2);

console.log(fil);

//4. _.find

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find((element) => {
  return element.name === "cherries";
});

console.log(result);

//5. sum

const val = [1, 2, 3, 4, 5];
const sum = val.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);
