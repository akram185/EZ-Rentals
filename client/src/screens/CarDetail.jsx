import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCar } from '../services/cars'
import { addType } from '../services/types'

export default function CarDetail(props) {
  const [car, setCar] = useState(null)
  const [typeId, setTypeId] = useState('')
  const { id } = useParams()
  const { types } = props

  useEffect(() => {
    const fetchCar = async () => {
      const singleCar = await getOneCar(id)
      setCar(singleCar)
    }
    fetchCar()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setTypeId(value)
  }

  const handleClick = async () => {
    const newCar = await addType(id, typeId)
    setCar(newCar)
  }

  return (
    <div>
      {car && (
        <>
          <h3>{car.make}</h3>
          {car.types.map((type) => (
            <p>{type.model}</p>
          ))}
        </>
      )}
      <select onChange={handleChange}>
        <option disabled selected>
          -- Select a Type --
        </option>
        {types.map((type) => (
          <option value={type.id}>{type.model}</option>
        ))}
      </select>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
