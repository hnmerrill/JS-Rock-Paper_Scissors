const options = ["rock", "paper", "scissors"];
const optionsAsString = options.join(', ');
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    var choice = Math.floor(Math.random() * 100) % 3;
    return options[choice];
}

function playRound(playerSelection, computerSelection){
    var result = "";
    if(playerSelection == computerSelection){
        result = "You selected: " + playerSelection + ". The computer selected: " + computerSelection + ". It's a Tie!";
    } else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        result = "You selected: " + playerSelection + ". The computer selected: " + computerSelection + ". You Win!";
        playerWins = playerWins + 1;
    } else {
        result = "You selected: " + playerSelection + ". The computer selected: " + computerSelection + ". The Computer Wins!";
        computerWins = computerWins + 1;
    }
    return result;
}

function playGame(){
    var result;
    var isApproved;
    for(var i = 0; i < 5; i++){
        isApproved = false;
        let playerSelection = prompt("Make your choice!  Type either: " + optionsAsString);
        playerSelection = playerSelection.toLowerCase();

        //Error Checking User Input
        while(!isApproved){
            if(options.includes(playerSelection)){
                isApproved = true;
            } else {
                playerSelection = prompt("Check your spelling, type either: " + optionsAsString);
            }
        }
        
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        console.log("Currently, you have won " + playerWins + " and the computer has won " + computerWins);
        if(playerWins == 3 || computerWins == 3){
            break;
        }
    }
    if(playerWins > computerWins){
        console.log("Congratulations, you win!");
    }  
    else{
        console.log("Better luck next time, click Start Game to try again!");
    }
}