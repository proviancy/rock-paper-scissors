

function getComputerChoice() {

    let choices = ["rock","paper","scissors"]
    
    randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];

}

function getWinner(computerSelection, playerSelection) {

    computer = computerSelection.toLowerCase();
    player = playerSelection.toLowerCase();

    if (roundCounter < 5) {
        roundDisplay.textContent = roundCounter + 1;
    } else {
        roundDisplay.textContent = 5;
    }

    if (roundCounter <= 5) {
        
        if (computer == player) {

            roundCounter++;
            return 'This round is a tie!';
    
        } else if (player == "rock") {
    
            if (computer == "paper") {
                computerScore++;
                roundCounter++;
                return 'You lose this round! Paper beats rock';
            } else if (computer == "scissors") {
                playerScore++;
                roundCounter++;
                return 'You win this round! Rock beats scissors';
            } else {
                return 'An error has occured.';
            }
    
        } else if (player == "paper") {
    
            if (computer == "scissors") {
                computerScore++;
                roundCounter++;
                return 'You lose this round! Scissors beats paper';
            } else if (computer == "rock") {
                playerScore++;
                roundCounter++;
                return 'You win this round! Paper beats rock';
            } else {
                return 'An error has occured.';
            }
    
        } else if (player == "scissors") {
    
            if (computer == "rock") {
                computerScore++;
                roundCounter++;
                return 'You lose this round! Rock beats paper';
            } else if (computer == "paper") {
                playerScore++;
                roundCounter++;
                return 'You win this round! Scissors beats paper';
            } else {
                return 'An error has occured.';
            }
    
        } else {
            return 'An error has occured.';
        }

    } else {

        resetGame();
    }

}

function determineWinner() {
    if (roundCounter > 5) {
        

        gameOver.classList.remove('hidden');
        roundsBox.classList.add('hidden');
        
        if (playerScore === computerScore) {
            winnerBox.textContent = 'The game is a tie!';
        } else if (playerScore > computerScore) {
            winnerBox.textContent = 'You beat the computer!';
        } else if (playerScore < computerScore) {
            winnerBox.textContent = 'You lost to the computer!';
        }
    }
}

let gameButtons = document.querySelectorAll("button.game");
let result = document.querySelector('.result');
let playerScoreBox = document.querySelector('.playerScore');
let computerScoreBox = document.querySelector('.computerScore')
let winnerBox = document.querySelector('.winner');
let roundDisplay = document.querySelector('.roundCounter');
let roundsBox = document.querySelector('.rounds')
let gameOver = document.querySelector('.gameOver');

gameButtons.forEach(element => {
    element.addEventListener('click', function (e) {

        let winner = (getWinner(getComputerChoice(), this.textContent));

        result.textContent = winner; // Edit paragraph text to display result

        playerScoreBox.textContent = playerScore;
        computerScoreBox.textContent = computerScore;
        console.log(roundCounter + '/5');
        determineWinner();

    });
});

reset = document.querySelector('.resetButton');
reset.addEventListener('click', resetGame);

let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

function resetGame() {
    result.textContent = '';
    console.log('reset');
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
    roundCounter = 1;
    winnerBox.textContent = '';
    roundDisplay.textContent = 1;
    gameOver.classList.add('hidden');
    roundsBox.classList.remove('hidden');
}