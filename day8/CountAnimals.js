/** Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals */

function CountAnimals(tur, horse, pigs) {
  let turk = tur * 2;
  let hor = horse * 4;
  let pig = pigs * 4;

  console.log(turk + hor + pig);
}
var legs = CountAnimals(2, 3, 5);
