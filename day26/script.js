var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var container = document.createElement("div");
container.className = "container";
container.setAttribute("data-spy", "scroll");
container.setAttribute("data-target", ".navbar");
container.setAttribute("data-offset", "50");
//heading
var heading = document.createElement("h1");
heading.innerHTML = "music player";
container.appendChild(heading);
var line1 = document.createElement("hr");
container.appendChild(line1);
//navbar
var buttonGroup = document.createElement("nav");
buttonGroup.className =
    "navbar navbar-expand-lg navbar-light bg-light sticky-top";
container.appendChild(buttonGroup);
//toggler
var navbarToggler = document.createElement("button");
navbarToggler.className = "navbar-toggler";
navbarToggler.setAttribute("data-toggle", "collapse");
navbarToggler.setAttribute("data-target", "#collapse_target");
var togglerIcon = document.createElement("span");
togglerIcon.className = "navbar-toggler-icon";
navbarToggler.appendChild(togglerIcon);
buttonGroup.appendChild(navbarToggler);
//inner-navbar
var btnul = document.createElement("ul");
btnul.className = "nav nav-tabs";
btnul.setAttribute("role", "tablist");
var navContent = document.createElement("div");
navContent.className = "collapse navbar-collapse";
navContent.setAttribute("id", "collapse_target");
navContent.appendChild(btnul);
buttonGroup.appendChild(navContent);
//1
var item1 = document.createElement("li");
item1.className = "nav-item";
var topBtn = document.createElement("button");
topBtn.className = "btn";
topBtn.innerHTML = "Top Tracks";
topBtn.id = "home";
topBtn.addEventListener("click", function () {
    contentDiv.innerHTML = "";
    loadcontent();
}, true);
item1.appendChild(topBtn);
btnul.appendChild(item1);
//2
var item2 = document.createElement("li");
item2.className = "nav-item";
var recommendedBtn = document.createElement("button");
recommendedBtn.className = "btn";
recommendedBtn.setAttribute("type", "button");
recommendedBtn.innerHTML = "Recommended";
recommendedBtn.id = "world";
recommendedBtn.addEventListener("click", function () {
    contentDiv.innerHTML = "";
    loadRecommendedcontent();
}, true);
item2.appendChild(recommendedBtn);
btnul.appendChild(item2);
//scroll button
var scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "btnScrollToTop";
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
var icon = document.createElement("i");
icon.className = "material-icons";
icon.innerHTML = "arrow_upward";
scrollTopBtn.appendChild(icon);
container.appendChild(scrollTopBtn);
//top tracks
var contentDiv = document.createElement("div");
container.appendChild(contentDiv);
function loadcontent() {
    return __awaiter(this, void 0, void 0, function () {
        var news, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
                            method: "GET",
                            headers: {
                                "x-rapidapi-host": "shazam.p.rapidapi.com",
                                "x-rapidapi-key": "3d27be7605mshf033c5ecb2328f3p139615jsn048779f9d7d4"
                            }
                        })];
                case 1:
                    news = _a.sent();
                    return [4 /*yield*/, news.json()];
                case 2:
                    response = _a.sent();
                    console.log(response);
                    response.tracks.map(function (song) {
                        var _a, _b, _c, _d, _e, _f;
                        if (((_c = (_b = (_a = song === null || song === void 0 ? void 0 : song.hub) === null || _a === void 0 ? void 0 : _a.actions) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.uri) !== undefined) {
                            var cardDiv = document.createElement("div");
                            cardDiv.className = "card mb-3";
                            contentDiv.append(cardDiv);
                            //inner card
                            var cardRow = document.createElement("div");
                            cardRow.className = "row no-gutters";
                            cardDiv.appendChild(cardRow);
                            //body
                            var cardBodyDiv = document.createElement("div");
                            cardBodyDiv.className = "col-lg-8 col-md-12";
                            cardRow.appendChild(cardBodyDiv);
                            var cardBody = document.createElement("div");
                            cardBody.className = "card-body";
                            cardBodyDiv.appendChild(cardBody);
                            var tag = document.createElement("h5");
                            tag.innerHTML = "trending";
                            tag.setAttribute("style", "text-transform: uppercase;");
                            cardBody.appendChild(tag);
                            var title = document.createElement("h5");
                            title.className = "titlecard";
                            title.innerHTML = song.title;
                            cardBody.appendChild(title);
                            var date = document.createElement("p");
                            date.className = "datecard";
                            var cont = document.createElement("div");
                            cont.id = "continue-row";
                            var continueReading = document.createElement("a");
                            continueReading.setAttribute("href", song.url);
                            continueReading.className = "continue";
                            continueReading.innerHTML = "Play in Website";
                            continueReading.setAttribute("style", "color:blue");
                            cont.appendChild(continueReading);
                            var byline = document.createElement("p");
                            byline.innerHTML = "<small>" + song.subtitle + "</small>";
                            byline.setAttribute("style", "text-align:right");
                            cont.appendChild(byline);
                            cardBody.appendChild(cont);
                            var figure = document.createElement("figure");
                            var audio = document.createElement("audio");
                            audio.className = "audio-track";
                            audio.setAttribute("controls", "true");
                            audio.setAttribute("style", "width: 100%");
                            audio.setAttribute("src", (_f = (_e = (_d = song === null || song === void 0 ? void 0 : song.hub) === null || _d === void 0 ? void 0 : _d.actions) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? void 0 : _f.uri);
                            figure.appendChild(audio);
                            cardBody.appendChild(figure);
                            //image
                            var cardImgDiv = document.createElement("div");
                            cardImgDiv.className = "col-md-12 col-lg-4";
                            cardRow.appendChild(cardImgDiv);
                            var cardImg = document.createElement("img");
                            cardImg.className = "card-img thumbnail";
                            cardImg.setAttribute("src", song.images.coverarthq);
                            cardImg.setAttribute("style", "height:300px");
                            cardImgDiv.appendChild(cardImg);
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    loadcontent();
};
//recommended content
function loadRecommendedcontent() {
    return __awaiter(this, void 0, void 0, function () {
        var news, response, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
                            method: "GET",
                            headers: {
                                "x-rapidapi-host": "shazam.p.rapidapi.com",
                                "x-rapidapi-key": "3d27be7605mshf033c5ecb2328f3p139615jsn048779f9d7d4"
                            }
                        })];
                case 1:
                    news = _a.sent();
                    return [4 /*yield*/, news.json()];
                case 2:
                    response = _a.sent();
                    response.tracks.map(function (song) {
                        var _a, _b, _c, _d, _e, _f;
                        if (((_c = (_b = (_a = song === null || song === void 0 ? void 0 : song.hub) === null || _a === void 0 ? void 0 : _a.actions) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.uri) !== undefined) {
                            var cardDiv = document.createElement("div");
                            cardDiv.className = "card mb-3";
                            contentDiv.append(cardDiv);
                            //inner card
                            var cardRow = document.createElement("div");
                            cardRow.className = "row no-gutters";
                            cardDiv.appendChild(cardRow);
                            //body
                            var cardBodyDiv = document.createElement("div");
                            cardBodyDiv.className = "col-lg-8 col-md-12";
                            cardRow.appendChild(cardBodyDiv);
                            var cardBody = document.createElement("div");
                            cardBody.className = "card-body";
                            cardBodyDiv.appendChild(cardBody);
                            var tag = document.createElement("h5");
                            tag.innerHTML = "trending";
                            tag.setAttribute("style", "text-transform: uppercase;");
                            cardBody.appendChild(tag);
                            var title = document.createElement("h5");
                            title.className = "titlecard";
                            title.innerHTML = song.title;
                            cardBody.appendChild(title);
                            var date = document.createElement("p");
                            date.className = "datecard";
                            var cont = document.createElement("div");
                            cont.id = "continue-row";
                            var continueReading = document.createElement("a");
                            continueReading.setAttribute("href", song.url);
                            continueReading.className = "continue";
                            continueReading.innerHTML = "Play in Website";
                            continueReading.setAttribute("style", "color:blue");
                            cont.appendChild(continueReading);
                            var byline = document.createElement("p");
                            byline.innerHTML = "<small>" + song.subtitle + "</small>";
                            byline.setAttribute("style", "text-align:right");
                            cont.appendChild(byline);
                            cardBody.appendChild(cont);
                            var figure = document.createElement("figure");
                            var audio = document.createElement("audio");
                            audio.className = "audio-track";
                            audio.setAttribute("controls", "true");
                            audio.setAttribute("style", "width: 100%");
                            audio.setAttribute("src", (_f = (_e = (_d = song === null || song === void 0 ? void 0 : song.hub) === null || _d === void 0 ? void 0 : _d.actions) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? void 0 : _f.uri);
                            figure.appendChild(audio);
                            cardBody.appendChild(figure);
                            //image
                            var cardImgDiv = document.createElement("div");
                            cardImgDiv.className = "col-md-12 col-lg-4";
                            cardRow.appendChild(cardImgDiv);
                            var cardImg = document.createElement("img");
                            cardImg.className = "card-img thumbnail";
                            cardImg.setAttribute("src", song.images.coverarthq);
                            cardImg.setAttribute("style", "height:300px");
                            cardImgDiv.appendChild(cardImg);
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
document.getElementsByTagName("body")[0].appendChild(container);
