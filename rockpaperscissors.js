
function getComputerChoice() {
  const compChoice = Math.random();
 
     if ( compChoice <= 0.33 ) {
        console.log('Computer chose rock');
        return 'rock';
}    if ( compChoice > 0.33 && compChoice <= 0.66 ) {
        console.log('Computer chose paper');
         return 'paper';
}    if ( compChoice > 0.66 && compChoice <= 1 ) {
        console.log('Computer chose scissors')
        return 'scissors';
}
}

//---------------------------------------------------------------------

function getHumanChoice() {
 const userInput = prompt("Choose rock, paper or scissors").toLocaleLowerCase();
   
   let humanChoice = userInput;
    if ( humanChoice === 'rock' ) {
        console.log('Player chose rock')
        return 'rock';
       
}   if ( humanChoice === 'paper' ) {
        console.log('Player chose paper')
        return 'paper';
        
}   if ( humanChoice === 'scissors' ) {
        console.log('Player chose scissors')
        return 'scissors';
      
}
}

//---------------------------------------------------------------------

let humanScore=0
let computerScore=0

console.log(`Computer Score: ${computerScore}, Human score: ${humanScore}`)

//--------------------------------------------------------------------


function playRound() {

        const humanChoice = getHumanChoice();
        const compChoice = getComputerChoice();
        
//Draws

        if      ( humanChoice == compChoice ) {
                        console.log('Draw!');
}      

//Player wins

        else if ( humanChoice == 'rock' && compChoice == 'scissors'
                || humanChoice == 'paper' && compChoice == 'rock'
                || humanChoice == 'scissors' && compChoice == 'paper' ) {
                        console.log('Player wins!') 
                        return humanScore++;
        
//Computer wins 

}       else if ( humanChoice == 'scissors' && compChoice == 'rock' 
                ||  humanChoice == 'rock' && compChoice == 'paper' 
                ||  humanChoice == 'paper' && compChoice == 'scissors' ) {
                        console.log('Computer wins!')    
                        return computerScore++;  
}

}

//------------------------------------------------------------------------

function playGame () {
        playRound()
        playRound()
        playRound()
        playRound()
        playRound()
        return;
}

playGame();
console.log(`Computer Score: ${computerScore}, Human score ${humanScore}`);

//------------------------------------------------------------------------

if ( computerScore > humanScore ) {
                console.log('Computer wins the game!')
}       else if ( computerScore == humanScore) {
                console.log('Its a tie!')
}       else if ( humanScore > computerScore ) {
                console.log('Player wins the game!')
}
