function getComputerChoice() {

    randomInt = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomInt === 0) {
        computerChoice = "Rock";
    } else if (randomInt === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;

}

function getWinner(computerSelection, playerSelection) {

    computer = computerSelection.toLowerCase();
    player = playerSelection.toLowerCase();

    if (computer == player) {

        return 'It\'s a tie!';

    } else if (player == "rock") {

        if (computer == "paper") {
            return 'You lose! Paper beats rock';
        } else if (computer == "scissors") {
            return 'You win! Rock beats scissors';
        } else {
            return 'An error has occured.';
        }

    } else if (player == "paper") {

        if (computer == "scissors") {
            return 'You lose! Scissors beats paper';
        } else if (computer == "rock") {
            return 'You win! Paper beats rock';
        } else {
            return 'An error has occured.';
        }

    } else if (player == "scissors") {

        if (computer == "rock") {
            return 'You lose! Rock beats paper';
        } else if (computer == "paper") {
            return 'You win! Scissors beats paper';
        } else {
            return 'An error has occured.';
        }

    } else {
        return 'An error has occured.';
    }

}

function game() {

    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < 5; i++) {

        outcome = getWinner(getComputerChoice(), prompt('Enter rock, paper, or scissors:'))

        if (outcome.indexOf('lose') != -1) {
            computerWins++;
        } else if (outcome.indexOf('win') != -1) {
            playerWins++;
        }

        console.log(outcome);

    }

    console.log('Player score: ' + playerWins);
    console.log('Computer score: ' + computerWins);

    if (playerWins > computerWins) {
        console.log('You win!');
    } else if (computerWins > playerWins) {
        console.log('You lose!')
    } else if (computerWins === playerWins) {
        console.log('It\'s a tie!')
    } else {
        console.log('An error has occured.')
    }

}

game();