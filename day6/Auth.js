var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fe27a201f5b186275e1516315d735319"
);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
};

request.send();
