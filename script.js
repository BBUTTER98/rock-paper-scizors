var player = 0;
var computer = 0;
function playRound(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        alert("it's draw, nobody wins");
    }
    else if(computerSelection == "rock"  && playerSelection == "scizors"){
        alert("Computer wins, rock beats the paper");
        computer++;
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        alert("Player wins, paper beats the rock");
        player++;
    }
    else if(computerSelection == "paper" && playerSelection == "scizors"){
        alert("Player wins, scizors beats the paper");
        player++;
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        alert("Computer wins, paper beats the rock");
        computer++;
    }
    else if(computerSelection == "scizors" && playerSelection=="paper"){
        alert("Computer wins, scizors beats the paper");
        computer++;
    }
    else if(computerSelection == "scizors" && playerSelection=="rock"){
        alert("Player wins, rock beats the scizors");
        player++;
    }
    else{
        alert("bad input");
    }
}
function getComputerChoice(){
    let choice = ['rock','paper','scizors'];
    let random = Math.floor(Math.random()*3);
    return choice[random];
}

function game(){
    for(let i=0;i<5;i++){
        let computerSelection =getComputerChoice();
        let playerSelection = prompt("select rock, paper or scizors");
        playRound(computerSelection,playerSelection);
        alert(player+" : "+computer);
    }
    if(player>computer){
        alert("player wins "+player+" to "+computer);
    }
    else if(computer>player){
        alert("computer wins "+computer+" to "+player);
    }
    else{
        alert("draw"+player+" to "+computer+" for the user");
    }
}

