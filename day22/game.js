let container = document.createElement("div");
container.className = "container";
let gameContent = document.createElement("div");
gameContent.className = "justify-center flex-column";
gameContent.setAttribute("id", "game");
let hudContent = document.createElement("div");
hudContent.setAttribute("id", "hud");
gameContent.appendChild(hudContent);
let hudTitle = document.createElement("div");
hudTitle.setAttribute("id", "hud-item");
hudContent.appendChild(hudTitle);
let hudQuest = document.createElement("p");
hudQuest.className = "hud-prefix";
hudQuest.setAttribute("id", "progressText");
hudQuest.innerText = "Question";
hudTitle.appendChild(hudQuest);
let hudProgress = document.createElement("div");
hudProgress.setAttribute("id", "progressBar");
hudTitle.appendChild(hudProgress);
let hudProgressBar = document.createElement("div");
hudProgressBar.setAttribute("id", "progressBarFull");
hudProgress.appendChild(hudProgressBar);
let hudItem = document.createElement("div");
hudItem.setAttribute("id", "hud-item");
hudContent.appendChild(hudItem);
let scoreDisplay = document.createElement("p");
scoreDisplay.className = "hud-prefix";
scoreDisplay.innerText = "Score";
hudItem.appendChild(scoreDisplay);
let scoreNum = document.createElement("h1");
scoreNum.className = "hud-main-text";
scoreNum.setAttribute("id", "score");
scoreNum.innerText = "0";
hudItem.appendChild(scoreNum);

let ques = document.createElement("h2");
ques.setAttribute("id", "question");
ques.innerText = "What is the answer to this questions?";
gameContent.appendChild(ques);
let choice1Content = document.createElement("div");
choice1Content.className = "choice-container";
gameContent.appendChild(choice1Content);
let choice1Prefix = document.createElement("p");
choice1Prefix.className = "choice-prefix";
choice1Prefix.innerText = "A";
choice1Content.appendChild(choice1Prefix);
let choice1Text = document.createElement("p");
choice1Text.className = "choice-text";
choice1Text.setAttribute("data-number", "1");
choice1Text.innerText = "Choice 1";
choice1Content.appendChild(choice1Text);

let choice2Content = document.createElement("div");
choice2Content.className = "choice-container";
gameContent.appendChild(choice2Content);
let choice2Prefix = document.createElement("p");
choice2Prefix.className = "choice-prefix";
choice2Prefix.innerText = "B";
choice2Content.appendChild(choice2Prefix);
let choice2Text = document.createElement("p");
choice2Text.className = "choice-text";
choice2Text.setAttribute("data-number", "2");
choice2Text.innerText = "Choice 2";
choice2Content.appendChild(choice2Text);

let choice3Content = document.createElement("div");
choice3Content.className = "choice-container";
gameContent.appendChild(choice3Content);
let choice3Prefix = document.createElement("p");
choice3Prefix.className = "choice-prefix";
choice3Prefix.innerText = "C";
choice3Content.appendChild(choice3Prefix);
let choice3Text = document.createElement("p");
choice3Text.className = "choice-text";
choice3Text.setAttribute("data-number", "3");
choice3Text.innerText = "Choice 3";
choice3Content.appendChild(choice3Text);

let choice4Content = document.createElement("div");
choice4Content.className = "choice-container";
gameContent.appendChild(choice4Content);
let choice4Prefix = document.createElement("p");
choice4Prefix.className = "choice-prefix";
choice4Prefix.innerText = "D";
choice4Content.appendChild(choice4Prefix);
let choice4Text = document.createElement("p");
choice4Text.className = "choice-text";
choice4Text.setAttribute("data-number", "4");
choice4Text.innerText = "Choice 4";
choice4Content.appendChild(choice4Text);

container.appendChild(gameContent);
document.getElementsByTagName("body")[0].appendChild(container);

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
)
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });

      return formattedQuestion;
    });
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
