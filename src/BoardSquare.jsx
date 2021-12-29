import React from 'react'
import Square from './Square'
import Piece from './Piece'

export default function BoardSquare({piece}) {
  return (
    <div>
      <Square>
        <Piece piece={piece}/>
      </Square>
    </div>
  )
}