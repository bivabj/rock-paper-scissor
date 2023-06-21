let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

const playerSelection = document.getElementById("player");
const computerSelection = document.getElementById("computer");
const roundResult = document.getElementById("roundResult");   //result of each round
const gameResult = document.getElementById("gameResult");     //result of full game(5 rounds)
const currentScore = document.getElementById("currentScore");  //score of player and computer up until the current round

rockBtn.addEventListener("click", () => game('rock'));
paperBtn.addEventListener("click", () => game('paper'));
scissorBtn.addEventListener("click", () => game('scissor'));

//random choice for computer
const getComputerChoice = () => {
  let computerOptions = ["rock", "paper", "scissor"];
  const choiceIndex = Math.floor(Math.random() * computerOptions.length);
  const computerCh = computerOptions[choiceIndex];
  return computerCh;
};

// play one round and display result
const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    roundResult.textContent = "Tie!";
  } else {
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        roundResult.textContent = "Computer won,you lost this round!";
        computerScore++;
      } else {
        roundResult.textContent = "You won this round!";
        playerScore++;
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        roundResult.textContent = "You won this round!";
        playerScore++;
      } else {
        roundResult.textContent = "Computer won, you lost this round!";
        computerScore++;
      }
    } else if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        roundResult.textContent = "Computer won, you lost this round!";
        computerScore++;
      } else {
        roundResult.textContent = "You won this round!";
        playerScore++;
      }
    }
  }
};

const game = (playerChoice) => {
    computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
    updateChoice(playerChoice, computerChoice);
    updateScore(playerScore,computerScore);
    //function to endgame
};

//function to update score
const updateScore = (playerScore, computerScore) => {
    currentScore.textContent = `${playerScore} - ${computerScore}`;
}

//function to update choice
const updateChoice = (playerChoice, computerChoice) => {
    if(playerChoice === 'rock'){
        playerSelection.textContent = "Rock";
    }else if(playerChoice === 'paper'){
        playerSelection.textContent = "Paper";
    }else{
        playerSelection.textContent = "Scissor";
    }
    if(computerChoice === 'rock'){
        computerSelection.textContent = "Rock";
    }else if(computerChoice === 'paper'){
        computerSelection.textContent = "Paper";
    }else{
        computerSelection.textContent = "Scissor";
    }
}
