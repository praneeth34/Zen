async function API() {
  const baseUrl =
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

API().then((arr) => {
  arr.forEach((a) => {
    let column = document.createElement("div");
    column.className = "col-lg-4 col-sm-12";
    let cardDiv = document.createElement("div");
    cardDiv.className = "card p-2";
    cardDiv.setAttribute(
      "style",
      "width: 18rem;margin-top:50px;text-align:center;background:linear-gradient(90deg, #CBBC9A 0%, #445554 80%)"
    );
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.setAttribute("id", "info-container");
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute(
      "style",
      "background: #000000;color:#fff;width:100%;height:auto"
    );
    let title = document.createElement("p");
    title.className = "card-title";
    title.setAttribute("id", "country-name");
    title.setAttribute("style", "font-size:1.2em");
    title.innerHTML = a.name;
    titleDiv.appendChild(title);
    cardDiv.appendChild(titleDiv);
    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top shadow bg-white rounded";
    cardImg.setAttribute("id", "flag-container");
    cardImg.setAttribute("alt", "Card image cap");
    // cardImg.setAttribute("style", "margin-top: -20px;");
    cardImg.setAttribute("src", a.flag);
    cardBody.appendChild(cardImg);
    let capitalName = document.createElement("p");
    capitalName.innerText = `Capital: ${a.capital}`;
    capitalName.setAttribute("style", "margin-top:20px;color:#fff");
    cardBody.appendChild(capitalName);
    let region = document.createElement("p");
    region.innerHTML = `Region: ${a.region}`;
    region.setAttribute("style", "color:#fff");
    cardBody.appendChild(region);
    let countryCode = document.createElement("p");
    countryCode.innerHTML = `Country Code: ${a.alpha3Code}`;
    cardBody.appendChild(countryCode);
    countryCode.setAttribute("style", "color:#fff");

    cardDiv.appendChild(cardBody);
    column.appendChild(cardDiv);
    let details = document.createElement("button");
    details.className = "btn";
    details.setAttribute(
      "style",
      "background: none;border: 2px solid #fff;color: white;padding: 5px; font-size: 18px;cursor: pointer;margin: 12px 0;"
    );
    details.innerHTML = "Click For Weather";
    details.addEventListener(
      "click",
      function () {
        getDetails(a.capital);
      },
      true
    );
    cardBody.appendChild(details);

    row.appendChild(column);
  });
});

async function getDetails(name) {
  try {
    let detail = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fe27a201f5b186275e1516315d735319`
    );
    let country = await detail.json();
    let dayWiseDetail = ` Capital: ${country.name} ;\n Wind Speed: ${country.wind.speed} mph , Wind direction: ${country.wind.deg}° ;\n Weather: current-${country.main.temp}°F, min-${country.main.temp_min}°F, max-${country.main.temp_max}°F ;\n Pressure: ${country.main.pressure} mbar ;\n Humidity: ${country.main.humidity}%`;
    Alert.render(dayWiseDetail);
  } catch (err) {
    alert(err);
  }
}

let container = document.createElement("div");
container.className = "container v-center";
let header = document.createElement("h2");
header.innerText = "Weather Details";
header.className = "header-text";
let row = document.createElement("div");
row.className = "row";

container.appendChild(header);
container.appendChild(row);
document.getElementsByTagName("body")[0].appendChild(container);

//custom alert box
function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.height = winH / 2 + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      "Weather Report for the Capital";
    document.getElementById("dialogboxbody").innerHTML = dialog;
    document.getElementById("dialogboxfoot").innerHTML =
      '<button onclick="Alert.ok()">OK</button>';
  };
  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();
