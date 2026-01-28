
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

const humanScore=0
const computerScore=0

//--------------------------------------------------------------------


function playRound() {

        const humanChoice = getHumanChoice();
        const compChoice = getComputerChoice();
        
//Draws

        if      ( humanChoice == compChoice ) {
                console.log('Draw!');
}      

//Player wins

        else if ( humanChoice == 'rock' && compChoice == 'scissors' ) {
                console.log('Player wins!')
}       else if ( humanChoice == 'paper' && compChoice == 'rock' ) {
                console.log('Player wins!')
}       else if ( humanChoice == 'scissors' && compChoice == 'paper' ) {
                console.log('Player wins!')    


//Computer wins 

}       else if ( humanChoice == 'scissors' && compChoice == 'rock' ) {
                console.log('Computer wins!')
}       else if ( humanChoice == 'rock' && compChoice == 'paper' ) {
                console.log('Computer wins!')
}       else if ( humanChoice == 'paper' && compChoice == 'scissors' ) {
                console.log('Computer wins!')    
}
        return;
}

playRound();

//let humanSelection = getHumanChoice();
//let compSelection = getComputerChoice();



//------------------------------------------------------------------------

/*function playGame () {
        playRound()
        playRound()
        playRound()
        playRound()
        playRound()
        return;
}

playGame(); */