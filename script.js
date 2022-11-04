var iterator = 0;
function playRound(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        return "it's draw, nobody wins";
    }
    else if(computerSelection == "rock"  && playerSelection == "scizors"){
        return "Computer wins, rock beats the paper";
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        return "Player wins, paper beats the rock";
    }
    else if(computerSelection == "paper" && playerSelection == "scizors"){
        return "Player wins, scizors beats the paper";
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        return "Computer wins, paper beats the rock";
    }
    else if(computerSelection == "scizors" && playerSelection=="paper"){
        return "Computer wins, scizors beats the paper";
    }
    else if(computerSelection == "scizors" && playerSelection=="rock"){
        return "Player wins, rock beats the scizors";
    }
}
function getComputerChoice(){
    let choice = ['rock','paper','scizors'];
    let random = Math.floor(Math.random()*3);
    return choice[random];
}
let computerSelection = getComputerChoice();
let playerSelection = "rock";
playRound(computerSelection,playerSelection);