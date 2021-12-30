import React from 'react'

export default function Piece({piece: {type, color}}) {
  const pieceImg = require(`./assets/${type}_${color}.png`)
  return (
    <div classNmae="piece-container">
      <img src={pieceImg} alt="" className="piece"/>
    </div>
  )
}