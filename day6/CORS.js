//CORS:

var request = new XMLHttpRequest();

//use extension to open the file

request.open(
  "GET",
  "http://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com",
  true
);

request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
};

request.send();
