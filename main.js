const handShapes = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let roundCount = 0;

// The player clicks an image to select rock, paper, or scissors 
const playerRockImage = document.querySelector("#rock");
playerRockImage.addEventListener("click", e => {
   handlePlayerChoice("rock");
});

// The player clicks an image to select rock, paper, or scissors
const playerPaperImage = document.querySelector("#paper");
playerPaperImage.addEventListener("click", e => {
   handlePlayerChoice("paper");
});

// The player clicks an image to select rock, paper, or scissors
const playerScissorsImage = document.querySelector("#scissors");
playerScissorsImage.addEventListener("click", e => {
   handlePlayerChoice("scissors");
});

// After clicking an image, "rock", "paper", or "scissors" is passed as an argument
function handlePlayerChoice(playerChoice) {
   playRound(playerChoice);
}

function playRound(playerChoice) {
   // This condition ensures that the game consists of 5 rounds
   if (roundCount >= 5) {
      console.log("Game over. Please refresh to play again.");
      return;
   }

   const computerChoice = getComputerChoice();
   const winner = checkWinner(playerChoice, computerChoice);

   if (winner === 'Player') {
      playerWins++;
   } else if (winner === 'Computer') {
      computerWins++;
   } else {
      tieGames++;
   }

   roundCount++;
   logRound(playerChoice, computerChoice, winner, roundCount);

   if (roundCount === 5) {
      logWins();
   }
}

function getComputerChoice() {
   return handShapes[Math.floor(Math.random() * handShapes.length)];
}

function checkWinner(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) {
      return "Tie";
   } else if (
      (playerChoice === "rock" && computerChoice === "scissors") || 
      (playerChoice === "paper" && computerChoice === "rock") || 
      (playerChoice === "scissors" && computerChoice === "paper")
   ) {
      return 'Player';
   } else {
      return 'Computer';
   }
}

function logRound(playerChoice, computerChoice, winner, round) {
   console.log('Round:', round);
   console.log('Player Chose:', playerChoice);
   console.log('Computer Chose:', computerChoice);
   
   if (winner === 'Tie') {
      console.log("It's a tie!");
   } else {
      console.log(winner, "won the round.");
   }
   console.log("--------------------");
}

function logWins() {
   console.log('Results:');
   console.log('Player Wins:', playerWins);
   console.log('Computer Wins:', computerWins);
   console.log('Ties', tieGames);
}