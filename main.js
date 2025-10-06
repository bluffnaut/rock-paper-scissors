const handShapes = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;
let tieGames = 0;

function playGame() {
   // This function plays five rounds of Rock, Paper, Scissors
   for (let i = 1; i <= 5; i++) {
      playRound(i);
   }
   logWins();
}

function playRound(round) {
   const playerChoice = getPlayerChoice();
   const computerChoice = getComputerChoice();
   const winner = checkWinner(playerChoice, computerChoice);

   if (winner === 'Player') {
      playerWins++;
   } else if (winner === 'Computer') {
      computerWins++;
   } else {
      tieGames++;
   }
   logRound(playerChoice, computerChoice, winner, round)
}

function logWins() {
   console.log('Results:');
   console.log('Player Wins:', playerWins);
   console.log('Computer Wins:', computerWins);
   console.log('Ties', tieGames);
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

function getComputerChoice() {
   return handShapes[Math.floor(Math.random() * handShapes.length)];
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
   return handShapes.includes(userInput);
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