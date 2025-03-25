// Variables to store the current scores
let humanScore = 0
let computerScore = 0


// Variable to store the computer's choice
let computerChoice = getComputerChoice(3);


// Variable to store the player's choice
   let humanChoice = getHumanChoice();


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


// Function to log the computer's choice
// Expected output: Rock, Paper or Scissors
console.log(computerChoice);


// Function to get the user's choice
function getHumanChoice() {
   let input = window.prompt("Type Rock, Paper, or Scissors", ""); // Prompts the user to submit Rock, Paper, or Scissors
   return input;
}


// Function to log the player's choice
console.log(humanChoice);


// Function to start a round of Rock Paper Scissors
console.log(playRound(humanChoice, computerChoice));


// Function to determine the winner of a round
function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice) {
      console.log("Tie!");
      console.log("You " + humanScore + " Computer " + computerScore);
      return;
   }
   
   if (humanChoice === "Rock") {
    if (computerChoice === "Paper" && computerChoice !== "Rock") {
      computerScore++;
      console.log("You lose. Paper beats rock.");
      console.log("You " + humanScore, "Computer " + computerScore);
   } else {
      humanScore++;
      console.log("You win! Rock beats scissors.");
      console.log("You " + humanScore, "Computer " + computerScore);
   }
   }

   if (humanChoice === "Paper") {
    if (computerChoice === "Scissors") {
      computerScore++;
      console.log("You lose. Scissors beats paper.");
      console.log("You " + humanScore, "Computer " + computerScore);
   } else {
      humanScore++;
      console.log("You win! Paper beats rock.");
      console.log("You " + humanScore, "Computer " + computerScore);
   }
   }

   if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      computerScore++;
      console.log("You lose. Rock beats scissors.");
      console.log("You " + humanScore, "Computer " + computerScore);
   } else {
      humanScore++;
      console.log("You win! Scissors beats paper.");
      console.log("You " + humanScore, "Computer " + computerScore);
   }
   }
}


// Function to play the game until a player reaches 3 points
function playGame() {
   if (humanScore === 3) {
       console.log("Congratulations! You won the game!");
       return;
   }
   if (computerScore === 3) {
       console.log("Computer won the game! Better luck next time.");
       return;
   }

// Variable to store the computer's choice
   let computerChoice = getComputerChoice(3);


// Variable to store the player's choice
   let humanChoice = getHumanChoice();
   playRound(humanChoice, computerChoice);

   playGame(); // Recursively call playGame until someone wins
}

// Start the game
playGame();