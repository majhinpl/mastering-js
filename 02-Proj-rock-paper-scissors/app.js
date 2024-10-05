let yourScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector(".your-score");
const compScorePara = document.querySelector(".computer-score");

const drawGame = () => {
  console.log("The game was draw");
  msg.innerText = "Game was draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    yourScore++;
    userScorePara.innerText = yourScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! your ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  // comp generates
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    // Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);

  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("class");
    playGame(userChoice);
  });
});
