const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      if (xhr.status >= 400) {
        reject(data);
      } else {
        resolve(data);
      }
    };
    xhr.send();
  });
  return promise;
};
sendHttpRequest(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json "
).then((arr) => {
  arr.forEach((a) => {
    let flag = document.getElementById("flag-container");
    flag.setAttribute("src", a.flag);
    let countryName = document.getElementById("country-name");
    countryName.innerHTML = a.name;
    let capital = document.getElementById("capital");
    capital.innerHTML = a.capital;
    let region = document.getElementById("region");
    region.innerHTML = a.region;
    let currencies = document.getElementById("currencies");
    currencies.innerHTML = a.currencies
      .filter((c) => c.name)
      .map((c) => `${c.symbol} ${c.name} (${c.code})`)
      .join(", ");
    let latlng = document.getElementById("latlng");
    latlng.innerHTML = a.latlng;
  });
});
