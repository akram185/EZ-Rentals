import React from 'react'
import { Link } from 'react-router-dom'

export default function Cars(props) {
  const { currentUser, cars, handleDelete } = props
  return (
    <div className='container-cars'>
      {props.cars.map((car) => (
        <React.Fragment key={car.id}>
          <div className='card-cars'>
            <p className='card-title'>{car.make}</p>

            <img className='card-img-cars' src={car.imageURL} />
            <p className='car-description'>{car.description}</p>
            {currentUser && currentUser.id === car.user_id && (
              <>
                <Link to={`/cars/${car.id}/edit`}>
                  <button className='edit-car'>Edit</button>
                </Link>
                <button
                  className='delete-car'
                  onClick={() => handleDelete(car.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
