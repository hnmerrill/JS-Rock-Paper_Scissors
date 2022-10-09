const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice(){
    return Math.floor(Math.random() * 100) % 3;
}

function playRound(playerSelection, computerSelection){
    return "Entered playround";
}

function playGame(){
    var resultText = document.getElementById('result').innerHTML = "testing";
}