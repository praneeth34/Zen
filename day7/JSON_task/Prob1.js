var obj = { name: "RajiniKanth", age: 33, hasPets: false };

function printAllValues(obj) {
  let outArr = [];
  outArr.push(obj.name);
  outArr.push(obj.age);
  outArr.push(obj.hasPets);
  console.log(outArr);
}

printAllValues(obj);
