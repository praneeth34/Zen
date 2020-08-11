var container = document.createElement("div");
container.className = "container";
var parentDiv = document.createElement("div");
parentDiv.setAttribute(
  "style",
  "padding-top:20px; text-align:center; background: cyan;margin-top:50px; height: 500px"
);

var heading = document.createElement("h1");
heading.innerText = "Date Manipulation and Age Calculator";
parentDiv.appendChild(heading);
var description = document.createElement("p");
description.innerText = `Mention your Date of birth and click on the 'Display Age' button `;
parentDiv.appendChild(description);

var dateElement = document.createElement("input");
dateElement.setAttribute("type", "date");
dateElement.id = "dob";
dateElement.name = "dob";
// dateElement.setAttribute('class','class1 class2')
dateElement.classList.add("input-elem");
parentDiv.appendChild(dateElement);

var sepreate = document.createElement("div");
sepreate.setAttribute("style", "text-align:center;margin-top:50px");
var button = document.createElement("button");
button.innerText = "Display Age";
button.setAttribute("class", "btn btn-success");
button.setAttribute("onclick", "dateCalculation()");
sepreate.appendChild(button);
parentDiv.appendChild(sepreate);

var displayData = document.createElement("div");
displayData.id = "display-data";

function dateCalculation() {
  var input = document.getElementById("dob").value;

  if (Date.parse(input)) {
    var inputDate = new Date(input);
    var currentDate = new Date();

    var milliSecondDiff =
      parseInt(currentDate.getTime()) - parseInt(inputDate.getTime());
    var secondDiff = mathFloor(milliSecondDiff, 1000);
    var minuteDiff = mathFloor(secondDiff, 60);
    var hrDiff = mathFloor(minuteDiff, 60);
    var dayDiff = mathFloor(hrDiff, 24);
    var monthDiff = getMonthDifference(inputDate, currentDate);
    var yearDiff = getYear(inputDate, currentDate);

    displayData.innerHTML = `
                Given input date is ${inputDate} <br>
                year ${yearDiff}<br>
                month ${monthDiff}<br>
                day ${dayDiff}<br>
                hour ${hrDiff}<br>
                minute ${minuteDiff}<br>
                second ${secondDiff}<br>
                milli second ${milliSecondDiff}<br>
                `;
  } else {
    displayData.innerText = "Please select Date";
  }
  parentDiv.appendChild(displayData);
}

function mathFloor(value1, value2) {
  return Math.floor(value1 / value2);
}

function getYear(value1, value2) {
  var date1 = new Date(value1);
  var date2 = new Date(value2);
  return date2.getFullYear() - date1.getFullYear();
}

function getMonthDifference(value1, value2) {
  var year = getYear(value1, value2);
  var month = year * 12 + (value2.getMonth() - value1.getMonth());
  return month;
}
container.appendChild(parentDiv);
document.body.appendChild(container);
