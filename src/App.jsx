import React, {useEffect, useState} from 'react'
import './App.css'
import {gameSubject, initGame} from './Game'
import Board from './Board'

function App() {
  const [board, setBoard] = useState([])
  const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  useEffect(() => {
    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      setIsGameOver(game.isGameOver)
      setResult(game.result)
    })
    return () => subscribe.unsubscribe()
  }, [])
  return (
    <>
    {!isGameOver && (
    <>
      <div className="vertical-text">
        <button>
          <span className="vertical-text">
            NEW GAME
          </span>
        </button>
      </div>
    </>
    )}
    <div className="container">
    {isGameOver && (
      <h2 className="vertical-text">
        Game Over
        <button>
          <span className="vertical-text">
            NEW GAME
          </span>
        </button>
      </h2>
      )}
      <div className="board-container">
        <Board board={board}/>
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
    </>
  )
}

export default App
