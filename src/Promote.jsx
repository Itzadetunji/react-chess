import React from 'react'

const promotionPieces = ['r', 'n', 'b', 'q']

export default function Promote({
  promotion: {from,to,color},
}) {

  return (
    <div className="board">
      {promotionPieces.map((p, i) => (
        <div key={i} className="promote-square">
          {p}
        </div>
      ))}
    </div>
  )
}
