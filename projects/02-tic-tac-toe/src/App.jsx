import { useState } from 'react'
import confetti from 'canvas-confetti' 
import { Square } from './components/Square'
import {TURNS} from './constants.js'
import {checkWinner,  checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

function App() {
  const [board,setBoard]= useState(
    // ["x","x","x","o","o","o","x","x","x"]
    Array(9).fill(null)
    )
  
  const [turn,setTurn]= useState(TURNS.X)
  //Ganador
  //Null no ganador false empty
  const[winner,setWinner] = useState(null)  

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {
    //Si ya tiene algo no hace nada
    if (board[index] || winner ) return

    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    //Actualizar el ganador
    const newWinner= checkWinner(newBoard)
    if(newWinner){      
      setWinner(newWinner) 
      confetti()
      //Actualizacin de los estados es asincrono
      // alert(`El gandor es ${newWinner}`)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }    

  }

  return (
    <main className='board'>
      <h1>TRI-QUI</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square,index)=>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
        
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
    
  )
}

export default App
