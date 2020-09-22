import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneVehicle } from '../services/vehicles'
import './VehicleDetail.css'

export default function VehicleDetail(props) {
  const [vehicle, setVehicle] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchVehicle = async () => {
      const singleVehicle = await getOneVehicle(id)
      setVehicle(singleVehicle)
    }
    fetchVehicle()
  }, [])

  return (
    <div className='detail-container'>
      {vehicle && (
        <>
          <h1 className='detail-title'>{vehicle.name}</h1>
          <p className='detail-info'>{vehicle.information}</p>
          <img className='detail-img' src={vehicle.imageURL} />
        </>
      )}
    </div>
  )
}
