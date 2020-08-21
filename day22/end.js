let container = document.createElement("div");
container.className = "container";
let content = document.createElement("div");
content.className = "flex-center flex-column";
content.setAttribute("id", "end");

let final = document.createElement("h1");
final.setAttribute("id", "finalScore");
content.appendChild(final);
let form = document.createElement("form");
content.appendChild(form);
let userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("name", "username");
userName.setAttribute("id", "username");
userName.setAttribute("placeholder", "Enter Name");
form.appendChild(userName);
let submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("class", "btn");
submitBtn.setAttribute("id", "saveScoreBtn");
submitBtn.setAttribute("onclick", "saveHighScore(event)");
submitBtn.setAttribute("disabled", "true");
submitBtn.innerText = "Save";
form.appendChild(submitBtn);

let replay = document.createElement("a");
replay.className = "btn";
replay.setAttribute("href", "game.html");
replay.innerText = "Play Again";
content.appendChild(replay);
let home = document.createElement("a");
home.className = "btn";
home.setAttribute("href", "");
home.innerText = "Go Home";
content.appendChild(home);

container.appendChild(content);
document.getElementsByTagName("body")[0].appendChild(container);

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
