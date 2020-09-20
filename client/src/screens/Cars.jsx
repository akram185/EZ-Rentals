import React from 'react'
import { Link } from 'react-router-dom'

export default function Cars(props) {
  const { currentUser, cars, handleDelete } = props
  return (
    <div>
      <h3>Cars</h3>
      {props.cars.map((car) => (
        <React.Fragment key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p>{car.make}</p>
          </Link>
          <img src={car.imageURL} />
          {currentUser && currentUser.id === car.user_id && (
            <>
              <Link to={`/cars/${car.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to='/cars/new'>
        <button>Create</button>
      </Link>
    </div>
  )
}
