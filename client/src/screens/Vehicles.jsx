import React from 'react'
import { Link } from 'react-router-dom'
import './Vehicles.css'
export default function Vehicles(props) {
  return (
    // <div>
    //   <h1>All Vehicles</h1>
    //   {props.vehicles.map((vehicle) => (
    //     <React.Fragment key={vehicle.id}>
    //       <p>{vehicle.name}</p>
    //       <img src={vehicle.imageURL} />
    //     </React.Fragment>
    //   ))}
    // </div>
    //   <div className="card">
    //   <Link to={`/information/${id}`}>
    //     <img className="card-img-top" src={imageURL} alt="Motorcycle poster" />{" "}
    //   </Link>
    //   <div className="card-body">
    //     <h5 className="card-title">{make}</h5>
    //     <h5 className="card-title">{model}</h5>
    //     <small className="text-muted">{year}</small>
    //   </div>
    // </div>
    <>
      {/* <div className='container'>
        <div className='row'>
          <div className='col'>
            {props.vehicles.map((vehicle) => (
              <>
                <p>{vehicle.name} </p>
                <img src={vehicle.imageURL} />
                <Link to={`/vehicles/${vehicle.id}`}>
                  <p>More Info</p>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div> */}
      <div className='container'>
        {/* <h1>All Vehicles</h1> */}
        {props.vehicles.map((vehicle) => (
          <div className='card'>
            <p className='card-title'>{vehicle.name}</p>
            <img className='card-img' src={vehicle.imageURL} />
            <Link to={`/vehicles/${vehicle.id}`}>
              <p>More Info</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
