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

console.log(getComputerChoice(3));