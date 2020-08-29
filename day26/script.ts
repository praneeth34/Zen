// fetch(
//   "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "shazam.p.rapidapi.com",
//       "x-rapidapi-key": "3d27be7605mshf033c5ecb2328f3p139615jsn048779f9d7d4",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.tracks.map((track) => {
//       let sample = document.getElementById("sample");
//       sample.setAttribute("src", track.hub.actions[1].uri);
//       sample.innerHTML = track.title;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// document.addEventListener("DOMContentLoaded", loadcontent());
//container
let container = document.createElement("div");
container.className = "container";
container.setAttribute("data-spy", "scroll");
container.setAttribute("data-target", ".navbar");
container.setAttribute("data-offset", "50");
//heading
let heading = document.createElement("h1");
heading.innerHTML = "music player";
container.appendChild(heading);
let line1 = document.createElement("hr");
container.appendChild(line1);
//navbar
let buttonGroup = document.createElement("nav");
buttonGroup.className =
  "navbar navbar-expand-lg navbar-light bg-light sticky-top";
container.appendChild(buttonGroup);
//toggler
let navbarToggler = document.createElement("button");
navbarToggler.className = "navbar-toggler";
navbarToggler.setAttribute("data-toggle", "collapse");
navbarToggler.setAttribute("data-target", "#collapse_target");
let togglerIcon = document.createElement("span");
togglerIcon.className = "navbar-toggler-icon";
navbarToggler.appendChild(togglerIcon);
buttonGroup.appendChild(navbarToggler);
//inner-navbar
let btnul = document.createElement("ul");
btnul.className = "nav nav-tabs";
btnul.setAttribute("role", "tablist");
let navContent = document.createElement("div");
navContent.className = "collapse navbar-collapse";
navContent.setAttribute("id", "collapse_target");
navContent.appendChild(btnul);
buttonGroup.appendChild(navContent);
//1
let item1 = document.createElement("li");
item1.className = "nav-item";
let topBtn = document.createElement("button");
topBtn.className = "btn";
topBtn.innerHTML = "Top Tracks";
topBtn.id = "home";
topBtn.addEventListener(
  "click",
  function () {
    contentDiv.innerHTML = "";
    loadcontent();
  },
  true
);
item1.appendChild(topBtn);
btnul.appendChild(item1);
//2
let item2 = document.createElement("li");
item2.className = "nav-item";
let recommendedBtn = document.createElement("button");
recommendedBtn.className = "btn";
recommendedBtn.setAttribute("type", "button");
recommendedBtn.innerHTML = "Recommended";
recommendedBtn.id = "world";
recommendedBtn.addEventListener(
  "click",
  function () {
    contentDiv.innerHTML = "";
    loadRecommendedcontent();
  },
  true
);
item2.appendChild(recommendedBtn);
btnul.appendChild(item2);
//scroll button
let scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "btnScrollToTop";
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
let icon = document.createElement("i");
icon.className = "material-icons";
icon.innerHTML = "arrow_upward";
scrollTopBtn.appendChild(icon);
container.appendChild(scrollTopBtn);
//top tracks
let contentDiv = document.createElement("div");
container.appendChild(contentDiv);
async function loadcontent() {
  try {
    let news = await fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "3d27be7605mshf033c5ecb2328f3p139615jsn048779f9d7d4",
        },
      }
    );
    let response = await news.json();
    console.log(response);

    response.tracks.map((song) => {
      if (song?.hub?.actions?.[1]?.uri !== undefined) {
        let cardDiv = document.createElement("div");
        cardDiv.className = "card mb-3";
        contentDiv.append(cardDiv);
        //inner card
        let cardRow = document.createElement("div");
        cardRow.className = "row no-gutters";
        cardDiv.appendChild(cardRow);
        //body
        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "col-lg-8 col-md-12";
        cardRow.appendChild(cardBodyDiv);
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBodyDiv.appendChild(cardBody);
        let tag = document.createElement("h5");
        tag.innerHTML = `trending`;
        tag.setAttribute("style", "text-transform: uppercase;");
        cardBody.appendChild(tag);
        let title = document.createElement("h5");
        title.className = "titlecard";
        title.innerHTML = song.title;
        cardBody.appendChild(title);
        let date = document.createElement("p");
        date.className = "datecard";

        let cont = document.createElement("div");
        cont.id = "continue-row";
        let continueReading = document.createElement("a");
        continueReading.setAttribute("href", song.url);
        continueReading.className = "continue";
        continueReading.innerHTML = "Play in Website";
        continueReading.setAttribute("style", "color:blue");
        cont.appendChild(continueReading);
        let byline = document.createElement("p");
        byline.innerHTML = `<small>${song.subtitle}</small>`;
        byline.setAttribute("style", "text-align:right");
        cont.appendChild(byline);
        cardBody.appendChild(cont);
        let figure = document.createElement("figure");
        let audio = document.createElement("audio");
        audio.className = "audio-track";
        audio.setAttribute("controls", "true");
        audio.setAttribute("style", "width: 100%");
        audio.setAttribute("src", song?.hub?.actions?.[1]?.uri);
        figure.appendChild(audio);
        cardBody.appendChild(figure);
        //image
        let cardImgDiv = document.createElement("div");
        cardImgDiv.className = "col-md-12 col-lg-4";
        cardRow.appendChild(cardImgDiv);
        let cardImg = document.createElement("img");
        cardImg.className = "card-img thumbnail";
        cardImg.setAttribute("src", song.images.coverarthq);
        cardImg.setAttribute("style", "height:300px");
        cardImgDiv.appendChild(cardImg);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
window.onload = () => {
  loadcontent();
};

//recommended content

async function loadRecommendedcontent() {
  try {
    let news = await fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "3d27be7605mshf033c5ecb2328f3p139615jsn048779f9d7d4",
        },
      }
    );
    let response = await news.json();

    response.tracks.map((song) => {
      if (song?.hub?.actions?.[1]?.uri !== undefined) {
        let cardDiv = document.createElement("div");
        cardDiv.className = "card mb-3";
        contentDiv.append(cardDiv);
        //inner card
        let cardRow = document.createElement("div");
        cardRow.className = "row no-gutters";
        cardDiv.appendChild(cardRow);
        //body
        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "col-lg-8 col-md-12";
        cardRow.appendChild(cardBodyDiv);
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBodyDiv.appendChild(cardBody);
        let tag = document.createElement("h5");
        tag.innerHTML = `trending`;
        tag.setAttribute("style", "text-transform: uppercase;");
        cardBody.appendChild(tag);
        let title = document.createElement("h5");
        title.className = "titlecard";
        title.innerHTML = song.title;
        cardBody.appendChild(title);
        let date = document.createElement("p");
        date.className = "datecard";

        let cont = document.createElement("div");
        cont.id = "continue-row";
        let continueReading = document.createElement("a");
        continueReading.setAttribute("href", song.url);
        continueReading.className = "continue";
        continueReading.innerHTML = "Play in Website";
        continueReading.setAttribute("style", "color:blue");
        cont.appendChild(continueReading);
        let byline = document.createElement("p");
        byline.innerHTML = `<small>${song.subtitle}</small>`;
        byline.setAttribute("style", "text-align:right");
        cont.appendChild(byline);
        cardBody.appendChild(cont);
        let figure = document.createElement("figure");
        let audio = document.createElement("audio");
        audio.className = "audio-track";
        audio.setAttribute("controls", "true");
        audio.setAttribute("style", "width: 100%");
        audio.setAttribute("src", song?.hub?.actions?.[1]?.uri);
        figure.appendChild(audio);
        cardBody.appendChild(figure);
        //image
        let cardImgDiv = document.createElement("div");
        cardImgDiv.className = "col-md-12 col-lg-4";
        cardRow.appendChild(cardImgDiv);
        let cardImg = document.createElement("img");
        cardImg.className = "card-img thumbnail";
        cardImg.setAttribute("src", song.images.coverarthq);
        cardImg.setAttribute("style", "height:300px");
        cardImgDiv.appendChild(cardImg);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

document.getElementsByTagName("body")[0].appendChild(container);
