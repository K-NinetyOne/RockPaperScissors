
function getComputerChoice() {
  const compChoice = Math.random();
 
     if ( compChoice <= 0.33 ) {
        console.log('Computer chose rock');
        return 'rock';
}    else if ( compChoice > 0.33 && compChoice <= 0.66 ) {
        console.log('Computer chose paper');
         return 'paper';
}    else if ( compChoice > 0.66 && compChoice <= 1 ) {
        console.log('Computer chose scissors')
        return 'scissors';
}
}

//------------------------------------------------------------------------

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

//------------------------------------------------------------------------

function playGame () {

let humanScore=0
let computerScore=0

        function playRound(humanSelection, computerSelection) {

        //Draws

                if      ( humanSelection == computerSelection ) {
                                console.log('Draw!');
                        }      

        //Player wins

                else if ( humanSelection == 'rock' && computerSelection == 'scissors'
                        || humanSelection == 'paper' && computerSelection == 'rock'
                        || humanSelection == 'scissors' && computerSelection == 'paper' ) {
                                console.log('Player wins!') 
                                humanScore++;
                        }      
        //Computer wins 

                else if ( humanSelection == 'scissors' && computerSelection == 'rock' 
                        ||  humanSelection == 'rock' && computerSelection == 'paper' 
                        ||  humanSelection == 'paper' && computerSelection == 'scissors' ) {
                                console.log('Computer wins!')    
                                computerScore++;  
                        }
}

//Calling 5 rounds

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2, computerSelection2);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);
        

console.log(`Computer Score: ${computerScore}, Human score ${humanScore}`);

//------------------------------------------------------------------------

        if ( computerScore > humanScore ) {
                console.log('Computer wins the game!')
}       else if ( computerScore == humanScore) {
                console.log('Its a tie!')
}       else if ( humanScore > computerScore ) {
                console.log('Player wins the game!')
}
        return;
}

playGame();

