//------------------------------------------------------------------------
let computerSelection;

let humanScore = 0;
let computerScore = 0;
let draws = 0;

const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
document.body.appendChild(resultsDiv);

function getComputerChoice() {
  let compChoice = Math.random();
  if (compChoice <= 0.33) {
    return "rock";
  } else if (compChoice > 0.33 && compChoice <= 0.66) {
    return "paper";
  } else if (compChoice > 0.66 && compChoice <= 1) {
    return "scissors";
  }
}

const buttonHolder = document.createElement("div");
buttonHolder.className = "button-holder";
document.body.appendChild(buttonHolder);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock ✊";
rockBtn.id = "rock-btn";
rockBtn.className = "rps-button";
rockBtn.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  humanChoice = "rock";
  playRound(humanChoice, computerSelection);
  checkScores();
  scoresDiv.innerHTML = `Player: ${humanScore} | Computer: ${computerScore} <br> Draws: ${draws}`;
});

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper 🖐️";
paperBtn.id = "paper-btn";
paperBtn.className = "rps-button";
paperBtn.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  humanChoice = "paper";
  playRound(humanChoice, computerSelection);
  checkScores();
  scoresDiv.innerHTML = `Player: ${humanScore} | Computer: ${computerScore} <br> Draws: ${draws}`;
});

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors ✌️";
scissorsBtn.id = "scissors-btn";
scissorsBtn.className = "rps-button";
scissorsBtn.addEventListener("click", function () {
  computerSelection = getComputerChoice();
  humanChoice = "scissors";
  playRound(humanChoice, computerSelection);
  checkScores();
  scoresDiv.innerHTML = `Player: ${humanScore} | Computer: ${computerScore} <br> Draws: ${draws}`;
});

buttonHolder.appendChild(rockBtn);
buttonHolder.appendChild(paperBtn);
buttonHolder.appendChild(scissorsBtn);

function playRound(humanSelection, computerSelection) {
  //Draws

  if (humanSelection == computerSelection) {
    console.log("Draw!");
    draws++;
  }

  //Player wins
  else if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("Player wins!");
    humanScore++;
  }
  //Computer wins
  else if (
    (humanSelection == "scissors" && computerSelection == "rock") ||
    (humanSelection == "rock" && computerSelection == "paper") ||
    (humanSelection == "paper" && computerSelection == "scissors")
  ) {
    console.log("Computer wins!");
    computerScore++;
  }
}

//------------------------------------------------------------------------

const scoresDiv = document.createElement("div");
scoresDiv.id = "scores";
scoresDiv.innerHTML = `Player: ${humanScore} | Computer: ${computerScore} <br> Draws: ${draws}`;
document.body.appendChild(scoresDiv);

function checkScores() {
  if (humanScore >= 5 && humanScore > computerScore) {
    alert(
      `🏆 Player wins the game! ${humanScore} to ${computerScore}. Refresh page to play again.`,
    );
  } else if (computerScore >= 5 && computerScore > humanScore) {
    alert(
      `🏆 Computer wins the game! ${computerScore} to ${humanScore}. Refresh page to play again.`,
    );
  } else if (
    humanScore >= 5 &&
    computerScore >= 5 &&
    humanScore === computerScore
  ) {
    alert(
      `It's a tie! ${humanScore} to ${computerScore}. Refresh page to play again.`,
    );
  }
}
