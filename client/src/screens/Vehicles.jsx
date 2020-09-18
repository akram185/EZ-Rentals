import React from 'react'

export default function Vehicles(props) {
  return (
    <div>
      <h1>All Vehicles</h1>
      {props.vehicles.map((vehicle) => (
        <p key={vehicle.id}>{vehicle.name}</p>
      ))}
    </div>
  )
}
