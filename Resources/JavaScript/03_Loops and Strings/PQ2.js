// Qs2. Create a game where you start with any random game number, Ask the user to keep guessing the game number until the user enters correct value

let gamenumber = 25;

let userNum = prompt("Guess the game number: ");

while(userNum !== gameNumber) {
       userNum = prompt("You entered the wrong number, Re-enter Please!!");
}

console.log("Congratulations, You entered the right number");