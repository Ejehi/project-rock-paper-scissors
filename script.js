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

const getHumanChoice = () => {
    let humanChoice = prompt("Your choice - rock, paper, scissors");
    return humanChoice;
}


const playGame = () => {

    let humanScore = 0, computerScore = 0;
    const playRound = (humanChoice, computerChoice) => { 

        switch(humanChoice.toLowerCase()) {
            case "rock":
                switch(computerChoice) {
                    case "rock":
                        console.log("Computer chooses ", computerChoice);
                        console.log("Lucky round! It's a tie");
                        break;
                    case "paper":
                        console.log("Computer chooses ", computerChoice);
                        computerScore += 1;
                        console.log("You lose! Paper beats Rock");
                        break;
                    case "scissors": 
                        console.log("Computer chooses ", computerChoice);
                        humanScore += 1;
                        console.log("You win! Rock beats Scissors");
                        break;
                }
                break;
            case "paper":
                switch(computerChoice) {
                    case "rock":
                        console.log("Computer chooses ", computerChoice);
                        humanScore += 1;
                        console.log("You win! Paper beats Rock");
                        break;
                    case "paper":
                        console.log("Computer chooses ", computerChoice);
                        console.log("Lucky round! It's a tie");
                        break;
                    case "scissors": 
                        console.log("Computer chooses ", computerChoice);
                        computerScore += 1;
                        console.log("You lose! Scissors beats Paper");
                        break;
                }
                break;
            default: 
                switch(computerChoice) {
                    case "rock":
                        console.log("Computer chooses ", computerChoice);
                        computerScore += 1;
                        console.log("You lose! Rock beats Scissors");
                        break;
                    case "paper":
                        console.log("Computer chooses ", computerChoice);
                        humanScore += 1;
                        console.log("You win! Scissors beats Paper");
                        break;
                    case "scissors": 
                        console.log("Computer chooses ", computerChoice);
                        console.log("Lucky round! It's a tie");
                        break;
                }
        }
    }

    for(i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    
    console.log("You won ", humanScore, " rounds | Computer won: ", computerScore, " rounds");
    console.log(humanScore == computerScore ? "Its a tie!" : humanScore > computerScore ? "You win!" : "Computer wins!");
}

playGame();