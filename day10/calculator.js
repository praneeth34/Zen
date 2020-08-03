/** simple calculator class using basic functions */

class calculator {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
  add() {
    let addition = this.first + this.second;
    return addition;
  }
  multiply() {
    let multiplication = this.first * this.second;
    return multiplication;
  }
  divide() {
    let division = this.first / this.second;
    return division;
  }
  sub() {
    let substraction = this.first - this.second;
    return substraction;
  }
}
usecalc = new calculator(2, 3);
output = usecalc.add();
output1 = usecalc.multiply();
output2 = usecalc.divide();
output3 = usecalc.sub();

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
