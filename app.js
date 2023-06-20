let playerOptions = "rock";
let computerOptions = ["rock", "paper", "scissor"]

const getComputerChoice = (computerOptions) => {
    const choiceIndex = Math.floor(Math.random() * computerOptions.length);
    const computerChoice = computerOptions[choiceIndex];
    return computerChoice;
}

console.log(getComputerChoice(computerOptions));