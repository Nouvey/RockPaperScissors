const choice = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const options = choice[Math.floor(Math.random() * choice.length)];
    return options;
}
getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        return "Player Wins"
    }

    else{
        return "Computer Wins"
    }

}


function roundOfPlay(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie"
    }
    else if (result == "Player Wins") {
        return `Player wins this round, ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `Computer wins, ${computerSelection} beats ${playerSelection}`
    }


}

const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(roundOfPlay(playerSelection,computerSelection));

function game(){
    console.log("Hello")
    for (let i=0; i<5; i++){
        const playerSelection = "rock"
        const computerSelection = getComputerChoice();
        console.log(roundOfPlay(playerSelection,computerSelection))
    }
}

game()
