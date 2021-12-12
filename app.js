function computerPlay() {
    let choises = ['rock', 'paper', 'scissors']
    let rand = Math.floor(Math.random() * 3)
    let pick = choises[rand]
    return pick
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        console.log("Tie Game!")
        return "tie"
    } else {
        if (
            (playerSelection == 'rock' && computerSelection == 'scissors') 
            || (playerSelection == 'paper' && computerSelection == 'rock') 
            || (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
            console.log(`You won! ${playerSelection} beats ${computerSelection}`)
            return "player"
        } else {
            console.log(`You lost! ${computerSelection} beats ${playerSelection}`)
            return "computer"
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("choose rock, paper or scissors: ")
        let computerSelection = computerPlay()
        let resultRound = playRound(playerSelection, computerSelection)
        if (resultRound == "player") {
            playerScore++
        } 
        if (resultRound == "computer") {
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log("Player won with " + playerScore + ":" + computerScore)
    } else {
        console.log("Computer won with " + computerScore + ":" + playerScore)
    }
}


game()