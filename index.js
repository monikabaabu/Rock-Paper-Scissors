const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } 
    else{
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "You win!" : "You lose!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "You win!" : "You lose!";
                break;  
    }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
     
    resultDisplay.classList.remove("greenbg", "redbg");
    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenbg");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redbg");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        
    }
}