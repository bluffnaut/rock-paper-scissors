const gameOptions = ["rock", "paper", "scissors"];
const winners = [];

function playGame() {
   // This function plays five rounds of Rock, Paper, Scissors
   for (let i = 1; i < 6; i++) {
      playRound(i);
   }
   logWins();
}

function playRound(round) {
   const playerChoice = getPlayerChoice();
   const computerChoice = getComputerChoice();
   const winner = checkWinner(playerChoice, computerChoice);
   winners.push(winner);
   logRound(playerChoice, computerChoice, winner, round)
}

function logWins() {
   let playerWins = winners.filter((item) => item == 'Player').length;
   let computerWins = winners.filter((item) => item == 'Computer').length;
   let ties = winners.filter((item) => item == 'Tie').length;
   console.log('Results:');
   console.log('Player Wins:', playerWins);
   console.log('Computer Wins:', computerWins);
   console.log('Ties', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
   console.log('Round:', round);
   console.log('Player Chose:', playerChoice);
   console.log('Computer Chose:', computerChoice);
   console.log(winner, 'Won the Round');
   console.log("--------------------");
}

function getComputerChoice() {
   return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function getPlayerChoice() {
   let userInput = prompt('Type Rock, Paper, or Scissors');
   while (userInput == null) {
      userInput = prompt('Type Rock, Paper, or Scissors');
   }
   userInput = userInput.toLowerCase();
   let check = validateUserInput(userInput);
   while (check == false) {
      userInput = prompt(
         'Type Rock, Paper, or Scissors. Spelling needs to be exact.'
      );
      while (userInput == null) {
      userInput = prompt('Type Rock, Paper, or Scissors');
      }
      userInput = userInput.toLowerCase()
      check = validateUserInput(userInput);
   }
   return userInput;
}

function validateUserInput(userInput) {
   return gameOptions.includes(userInput);
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