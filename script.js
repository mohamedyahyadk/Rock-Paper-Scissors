function computerPlay() {
  let computerRandom = Math.floor(Math.random() * 3);
  switch (computerRandom) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelction == "Scissors") ||
    (playerSelection == "Scissors" && computerSelction == "Paper") ||
    (playerSelection == "Paper" && computerSelction == "Rock")
  ) {
    return "you win !";
  } else if (
    (computerSelction == "Rock" && playerSelection == "Scissors") ||
    (computerSelction == "Scissors" && playerSelection == "Paper") ||
    (computerSelction == "Rock" && playerSelection == "Scissors")
  ) {
    return "you lose !";
  } else {
    return "equals ";
  }
}
alert("welcometo rock paper scissors game !");
const playerSelection = prompt("choose : Rock , Paper or Scissors ");
const computerSelction = computerPlay();

console.log(computerSelction);
console.log(playRound(playerSelection, computerSelction));

let score;
let attempts;
function game() {
  for (let i = 0; i < 5; i++) {
    attempts++;
    console.log(playRound(playerSelection, computerSelction));
    alert("sorry you reached the limit !");
  }
}
