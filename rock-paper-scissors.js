// Function to get the computer's choice for Rock Paper Scissors
function getComputerChoice(max = 3) {
    let randomNum = Math.floor(Math.random() * 3); // Expected output: 0, 1 or 2

switch (randomNum) {
case 0:
   return "Rock"; 
case 1: 
   return "Paper";
case 2: 
   return "Scissors";
} // Expected output: Rock, Paper or Scissors

}


// Variable to store the computer's choice
let computerChoice = getComputerChoice(3); // Runs the getComputerChoice function
console.log(computerChoice); // Expected output: Rock, Paper or Scissors


// Function to get the user's choice for Rock Paper Scissors
function getHumanChoice() {
   let input = window.prompt("Type Rock, Paper, or Scissors", ""); // Prompts the user to submit Rock, Paper, or Scissors
   return input;
}


// Variable to store the user's choice
const humanChoice = getHumanChoice();
console.log(humanChoice);


// Variables to store the score of each player
let humanScore = 0
let computer Score = 0


// Function to play a single round of Rock Paper Scissors
function playRound(humanChoice, computerChoice);
