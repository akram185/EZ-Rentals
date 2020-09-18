import React from 'react'
import { Link } from 'react-router-dom'

export default function Cars(props) {
  return (
    <div>
      {props.cars.map((car) => (
        <React.Fragment key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p>{car.make}</p>
          </Link>
          <Link to={`/cars/${car.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </React.Fragment>
      ))}
    </div>
  )
}
