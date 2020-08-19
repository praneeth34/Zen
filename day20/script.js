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
)
  .then((arr) => {
    arr.forEach((a) => {
      let column = document.createElement("div");
      column.className = "col";
      let cardDiv = document.createElement("div");
      cardDiv.className = "card p-1";
      cardDiv.setAttribute("style", "width: 18rem;margin-top:50px");
      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top shadow bg-white rounded";
      cardImg.setAttribute("id", "flag-container");
      cardImg.setAttribute("alt", "Card image cap");
      cardImg.setAttribute("style", "margin-top: -20px;");
      cardImg.setAttribute("src", a.flag);
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.setAttribute("id", "info-container");
      cardBody.setAttribute("style", "font-size: 1.2em;");
      let title = document.createElement("h5");
      title.className = "card-title";
      title.setAttribute("id", "country-name");
      title.innerHTML = a.name;
      cardBody.appendChild(title);
      let capitalName = document.createElement("p");
      capitalName.innerText = `Capital: ${a.capital}`;
      cardBody.appendChild(capitalName);
      let region = document.createElement("p");
      region.innerHTML = `Region: ${a.region}`;
      cardBody.appendChild(region);
      let money = document.createElement("p");
      money.innerHTML = a.currencies
        .filter((c) => c.name)
        .map((c) => `${c.symbol} ${c.name} (${c.code})`)
        .join(", ");
      //   money.innerText = `Currencies: ${currencies}`;

      cardBody.appendChild(money);
      let latlng = document.createAttribute("p");
      latlng.innerHTML = `Latlng: ${a.latlng}`;

      cardDiv.appendChild(cardImg);
      cardDiv.appendChild(cardBody);
      column.appendChild(cardDiv);

      row.appendChild(column);
    });
  })
  .catch((err) => {
    console.log(err);
  });

let container = document.createElement("div");
container.className = "container";
container.setAttribute("style", "margin-top:50px");
let row = document.createElement("div");
row.className = "row";

container.appendChild(row);
document.getElementsByTagName("body")[0].appendChild(container);
