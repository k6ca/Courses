let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random(0, 9)* 10)
  }
  
function compareGuesses(humGuess, pcGuess, secretGuess){
   let pcWin = false, humWin = false
   let pcDist = 0
   let humDist = 0 
 
   humDist = Math.abs(humGuess - secretGuess)
   pcDist = Math.abs(pcGuess - secretGuess)
   
   If(humDist > pcDist);{
     return pcWin = true
   }
   elseif (pcDist > humDist); {
     return humWin = true
   }
   elseif(pcDist == humDist);{
     return humWin = true
   }
  
  }


