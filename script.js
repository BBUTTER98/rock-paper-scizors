function getComputerChoice(){
    let choice = ['rock','paper','scizors'];
    let random = Math.floor(Math.random()*3);
    return choice[random];
}