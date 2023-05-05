import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck)  =>{
    //revisamos todas las posibles combinaciones
    //vemos quien gana
    for (const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]         
      ){
        return boardToCheck[a] 
      }
    }
    //si no hay ganandor
    return null
  }

export const checkEndGame = (newBoard) =>{
    return newBoard.every((square)=> square != null)
  }   