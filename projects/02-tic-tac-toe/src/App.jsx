import { useState } from 'react'
import './App.css'

const TURNS={
  X:'x',
  O:'o',
}



const Square = ({children,isSelected,updateBoard,index})=>{
  const className = `square ${isSelected ? 'is-selected': ''} `

const handleClick = () => {
  updateBoard(index)
}

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
 
 const WINNER_COMBOS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,9],
  [2,4,6],
 ]



function App() {
  const [board,setBoard]= useState(
    // ["x","x","x","o","o","o","x","x","x"]
    Array(9).fill(null)
    )
  
  const [turn,setTurn]= useState(TURNS.X)
  //Ganador
  //Null no ganador false empty
  const[winner,setWinner] = useState(null)  

  const checkWinner = (boardToCheck)  =>{
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
      setWinner(newWinner) //Actualizacin de los estados es asincrono
      alert(`El gandor es ${newWinner}`)
    }    

  }

  return (
    <main className='board'>
      <h1>Hola Mundo</h1>
      <section className='game'>
        {
          board.map((_,index)=>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
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

    </main>
    
  )
}

export default App
