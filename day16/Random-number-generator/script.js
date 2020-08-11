var container = document.createElement("div");
container.className = "container";
var outputGenerated = document.createElement("h1");
outputGenerated.className = "text-center";
outputGenerated.innerText = " Random Number ";
outputGenerated.setAttribute("style", "margin-top:200px");
var button = document.createElement("div");
button.className = "text-center";
var generate = document.createElement("button");
generate.className = "btn btn-secondary text-center";
generate.innerText = "Generate";
generate.setAttribute("style", "margin-top:20px");

button.appendChild(generate);
container.appendChild(outputGenerated);
container.appendChild(button);

document.getElementsByTagName("body")[0].appendChild(container);

let btn = document.querySelector("button");
let output = document.querySelector("h1");

function getRandomNumber(start, range) {
  let getRandom = Math.floor(Math.random() * range + start);
  return getRandom;
}

function createArr(start, end) {
  let myArr = [];
  for (let i = start; i <= end; i++) {
    myArr.push(i);
  }
  return myArr;
}
//input range
let numberArr = createArr(10000000, 99999999);

btn.addEventListener("click", () => {
  let randomIndex = getRandomNumber(0, numberArr.length - 1);
  let randomNum = numberArr[randomIndex];
  numberArr.splice(randomIndex, 1);
  output.innerText = randomNum;
});
