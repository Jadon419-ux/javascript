   
     const PickMove = function PickMove(symbol)
      
      
     {
       ComputerMove = Math.random()
       win='You Won'
         lose='You lose'
         Tie='You tie'
         result = 'Rock'
         
       if(ComputerMove<=0.3){
         
         
         if (symbol==='Rock') {
           nice=Tie
         }
         else if(symbol==='Paper'){
           nice=win
         
         }
         else{
           nice=lose
           
                   }
       }

       
       else if(ComputerMove>=0.6){
         result = 'Paper'
       
         if (symbol==='Rock') {
          nice=lose
         }
         else if(symbol==='Paper'){
          nice=Tie
         
         }
         else{
          nice=win
                     }
       }
       else{
         result = 'Scissors'
         
         if (symbol==='Rock') {
          nice=win
         }

         else if(symbol==='Paper'){
           nice=lose
         
         }
         else{
            nice=Tie
           
         }
       }

       document.querySelector('.status').innerHTML = nice;
       document.querySelector('.selection').innerHTML = `You  ${symbol}  computer chose ${result}`;
       document.querySelector('.final_scores').innerHTML =`You Won ${score.won},lost ${score.lost} and tied ${score.Ties}`
       
       return(nice);
     
     }
     const init = function(){
        PickMove(symbol)
       console.log(nice)

     }
     init()
     
     if(init==='You Won'){
       score.win+=1
     }
     else if(init==='You lose'){
       score.lose+=1
     }
     else if(init==='You tie'){
       score.Ties+=1
     }
     

     const score = {
       win:0,
       lose:0,
       Ties:0,
     }
     console.log(score);