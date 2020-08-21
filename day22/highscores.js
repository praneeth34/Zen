let container = document.createElement("div");
container.className = "container";
let scoreContent = document.createElement("div");
scoreContent.setAttribute("id", "highScores");
scoreContent.className = "flex-center flex-column";

let finalScore = document.createElement("h1");
finalScore.setAttribute("id", "finalScore");
finalScore.innerText = "High Scores";
scoreContent.appendChild(finalScore);
let scoreList = document.createElement("ul");
scoreList.setAttribute("id", "highScoresList");
scoreContent.appendChild(scoreList);
let homeBtn = document.createElement("a");
homeBtn.className = "btn";
homeBtn.innerText = "Go Home";
homeBtn.setAttribute("href", "/");
scoreContent.appendChild(homeBtn);

container.appendChild(scoreContent);
document.getElementsByTagName("body")[0].appendChild(container);

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
