function something(a, b) {
  var val1 = 80;
  var val2 = 90;
  res = b[a](val1, val2);
  return res;
}
oper = [add, sub, mult];

input1 = something(0, oper);
console.log(input1);

input2 = something(1, oper);
console.log(input2);

input3 = something(2, oper);
console.log(input3);

function add(d, e) {
  return d + e;
}

function sub(g, h) {
  return g - h;
}

function mult(i, j) {
  return i * j;
}
