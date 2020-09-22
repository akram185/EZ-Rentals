import React from 'react'
import { Link } from 'react-router-dom'
import './Vehicles.css'
export default function Vehicles(props) {
  return (
    <>
      <div className='container'>
        {/* <h1>All Vehicles</h1> */}
        {props.vehicles.map((vehicle) => (
          <div className='card-vehicles'>
            <p className='card-title'>{vehicle.name}</p>
            <img className='card-img' src={vehicle.imageURL} />
            <Link to={`/vehicles/${vehicle.id}`}>
              <p className='more-info'>More Info</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
