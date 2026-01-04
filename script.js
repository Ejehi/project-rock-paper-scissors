let humanScore = 0, computerScore = 0;

const getComputerChoice = () => {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 3) {
        computerChoice = "rock";
    }
    else if(randomNumber > 3 && randomNumber <=7) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

const playRound = (humanChoice, computerChoice) => { 
    const scoreBoard = document.querySelector("#score-board");

    const scores = document.createElement("p");
     
    switch(humanChoice.toLowerCase()) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Lucky round! It's a tie`;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "paper":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Paper beats Rock`;
                    computerScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "scissors": 
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Rock beats Scissors`;
                    humanScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Paper beats Rock`;
                    humanScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "paper":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Lucky round! It's a tie`;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "scissors": 
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Scissors beats Paper`;
                    computerScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
            }
            break;
        case "scissors": 
            switch(computerChoice) {
                case "rock":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Rock beats Scissors`;
                    computerScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "paper":
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - Scissors beats Paper`;
                    humanScore += 1;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
                case "scissors": 
                    scoreBoard.textContent = `Computer chooses ${computerChoice} - It's a tie`;
                    scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
                    scoreBoard.appendChild(scores);
                    break;
            }
    }

    if(humanScore == 5) {
       const winner =  document.createTextNode(`You have won 5 rounds! You win this game`);
       scoreBoard.appendChild(winner);
       humanScore = 0;
       computerScore = 0;
    }

    else if(computerScore == 5) {
       const winner =  document.createTextNode(`Computer has won 5 rounds! You lose this game`);
       scoreBoard.appendChild(winner);
       humanScore = 0;
       computerScore = 0;
    }
}

const content = document.querySelector("body");

const rockSelection = document.querySelector("#rock");
const paperSelection = document.querySelector("#paper");
const scissorsSelection = document.querySelector("#scissors");

rockSelection.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

paperSelection.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

scissorsSelection.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});