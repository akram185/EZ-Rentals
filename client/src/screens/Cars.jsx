import React from 'react'

export default function Cars(props) {
  return (
    <div>
      {props.cars.map(car => (
        <p key={car.id}>{car.make}</p>
      ))}
    </div>
  )
}
