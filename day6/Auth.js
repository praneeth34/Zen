var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e10baab042375a89a754b694a9ed430a",
  true
);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
};

request.send();
