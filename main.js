let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let res = "";




const container = document.querySelector('.container');
const rockbtn = document.getElementsByClassName("rock");
const rocksbtn = document.getElementById("rock");
const rocksbtn1 = document.getElementById('rock');
const paperbtn = document.getElementsByClassName("paper");
const scissorsbtn = document.getElementsByClassName("scissors");
const result = document.createElement('p');
const computerDisplay = document.getElementsByClassName("computer-score");
const playerDisplay = document.getElementsByClassName("player-score");
// const computerDisplay = document.querySelector('.computer-score');
// const playerDisplay = document.querySelector('.player-score');








function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}


function declareWinner() {
    if (playerScore > computerScore) {
        result.textContent = "Congratulations, You Won!"
    } else if (computerScore > playerScore) {
        result.textContent = "You Lost!"
    } else {
        result.textContent = "Draw!";
    }
}


function addPlayAgain() {
    const playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    playAgain.textContent = "Play Again";
    playAgain.addEventListener('click', resetGame);
    container.appendChild(playAgain);
}

function resetGame() {
    result.textContent = '';
    const playAgain = document.querySelector('.playAgain');
    container.removeChild(playAgain);
    rounds = 0;
    computerDisplay[0].textContent = `Computer Score is: ${computerScore}`;
    playerDisplay[0].textContent = `Player Score is: ${playerScore}`;
}


function playRound() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice)
    if (playerChoice === computerChoice) {
        res = "DRAW!";
    }

    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        res = "Computer wins this round!";
    }

    if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        res = "Computer wins this round!";
    }

    if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;

    }

    if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore += 1;
        res = "You won this round!";
    }

    if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore += 1;
        res = "You won this round!";
    }

    if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore += 1;
        res = "You won this round!";
    }

    result.textContent = `Result: ${res}`;
    result.classList.add("result");
    container.appendChild(result);
    rounds++;
    computerDisplay[0].textContent = `Computer score: ${computerScore}`;
    playerDisplay[0].textContent = `Player score: ${playerScore}`;





    if (rounds === 5) {
        declareWinner();
        playerScore = 0;
        computerScore = 0;
        addPlayAgain();
    }

    if (rounds > 5) {
        resetGame();
    }



}

rocksbtn1.addEventListener('click', () => {

    playerChoice = 'rock';
    playRound();
})


paperbtn[0].addEventListener('click', () => {
    playerChoice = 'paper';
    playRound();
});

scissorsbtn[0].addEventListener('click', () => {
    playerChoide = 'scissors'
    playRound();
});

















