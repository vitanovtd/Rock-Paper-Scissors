
let rounds = 0;

const computerDisplay = document.querySelector('.computer-score');
const playerDisplay = document.querySelector('.player-score');

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.flor(Math.random() * choices.length)]
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




function playRound(playerSelection, computerSelection) {

}




