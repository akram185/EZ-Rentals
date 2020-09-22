import React from 'react'

export default function Types(props) {
  return (
    <div>
      <h3>Types</h3>
      {props.types.map((type) => (
        <p key={type.id}>{type.model}</p>
      ))}
    </div>
  )
}
