const options = ["rock", "paper", "scissors"];
const optionsAsString = options.join(', ');

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
    } else {
        result = "You selected: " + playerSelection + ". The computer selected: " + computerSelection + ". The Computer Wins!";
    }
    return result;

}

function playGame(){
    let playerSelection = prompt("Make your choice!  Type either: " + optionsAsString);
    playerSelection = playerSelection.toLowerCase();
    //Error Checking User Input
    if(options.includes(playerSelection)){
        console.log("Approved");
    } else {
        console.log("Denied");
    }
    let computerSelection = getComputerChoice();

}