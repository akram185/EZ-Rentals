import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneVehicle } from '../services/vehicles'

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
console.log(vehicle);
  return (
    <div>
      {vehicle && (
        <>
          <h3>{vehicle.name}</h3>
          <p>{vehicle.information}</p>
          <img src={vehicle.imageURL} />
        </>
      )}
    </div>
  )
}
