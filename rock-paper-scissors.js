// Function to get the computer's choice for Rock Paper Scissors
// Expected output: 0, 1 or 2
function getComputerChoice(max = 3) {
    let randomNum = Math.floor(Math.random() * 3);

switch (randomNum) {
case 0:
   return "Rock"; 
case 1: 
   return "Paper";
case 2: 
   return "Scissors";
}
}


// Variable to store the computer's choice
// Expected output: Rock, Paper or Scissors
let computerChoice = getComputerChoice(3);
console.log(computerChoice);


// Function to get the user's choice for Rock Paper Scissors
function getHumanChoice() {
   let input = window.prompt("Type Rock, Paper, or Scissors", ""); // Prompts the user to submit Rock, Paper, or Scissors
   return input;
}


// Variable to store the user's choice
let humanChoice = getHumanChoice();
console.log(humanChoice);


// Variables to store the score of each player
let humanScore = 0
let computerScore = 0

