let playerScore = 0
let computerScore = 0
let gamePlayed = 0

function computerPlay() {
    let choises = ['rock', 'paper', 'scissors']
    let rand = Math.floor(Math.random() * 3)
    let pick = choises[rand]
    return pick
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        displayResult("Tie Game!")
        return "tie"
    } else {
        if (
            (playerSelection == 'rock' && computerSelection == 'scissors') 
            || (playerSelection == 'paper' && computerSelection == 'rock') 
            || (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
            displayResult(`You won! ${playerSelection} beats ${computerSelection}`)
            return "player"
        } else {
            displayResult(`You lost! ${computerSelection} beats ${playerSelection}`)
            return "computer"
        }
    }
}

function displayResult(str) {
    const display = document.querySelector('.display')
    display.textContent = str
}

function displayScoreAndAlertWinner(roundResult) {
    const display = document.querySelector('.score')

    gamePlayed++

    if (roundResult == "player") {
        playerScore++
    } 
    if (roundResult == "computer") {
        computerScore++
    }
    display.textContent = "Round: " + gamePlayed + " You: " + playerScore + " Computer: " + computerScore

    if (playerScore == 5 || computerScore == 5) {
        setTimeout(alertWinner, 1)
        newGame()
    }
}

function alertWinner() {
    let winner = playerScore == 5 ? "Player" : "Computer"
    alert("winner: " + winner)
}

function newGame() {
    playerScore = 0
    computerScore = 0
    gamePlayed = 0
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let roundResult = playRound(button.id, computerPlay())
        displayScoreAndAlertWinner(roundResult)
    })
})