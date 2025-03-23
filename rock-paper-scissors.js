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
let computerChoice = getComputerChoice(3);


// Function to determine the winner of a round
function playRound(humanChoice, computerChoice) {
   
   if (humanChoice === computerChoice) {
      return "Tie!"
   }
   
   if (humanChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "You lose. Paper beats rock.";
   } else {
      return "You win! Rock beats scissors.";
   }
   }


   if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      return "You lose. Scissors beats paper.";
   } else {
      return "You win! Paper beats rock.";
   }
   }

   
   if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "You lose. Rock beats scissors.";
   } else {
      return "You win! Scissors beats paper.";
   }
   }
}


// Function to get the user's choice for Rock Paper Scissors
function getHumanChoice() {
   let input = window.prompt("Type Rock, Paper, or Scissors", ""); // Prompts the user to submit Rock, Paper, or Scissors
   return input;
}


// Variable to store the player's choice
let humanChoice = getHumanChoice();


// Variables to store the current scores
let humanScore = 0
let computerScore = 0


// Log the computer's choice
// Expected output: Rock, Paper or Scissors
console.log(computerChoice);

// Log the player's choice
console.log(humanChoice);

console.log(playRound(humanChoice, computerChoice));