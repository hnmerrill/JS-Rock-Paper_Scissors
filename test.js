const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice(){
    var choice = Math.floor(Math.random() * 100) % 3;
}

function playRound(playerSelection, computerSelection){
    return "Entered playround";
}

function playGame(){
    document.getElementById('text').value = "hello";
}