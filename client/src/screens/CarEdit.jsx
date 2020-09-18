import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCar } from '../services/cars'

export default function CarEdit(props) {
  const [formData, setFormData] = useState({
    make: '',
  })
  const { make } = formData
  const { id } = useParams()
  const { cars, updateSubmit } = props

  useEffect(() => {
    const prefilForm = () => {
      const singleCar = props.cars.find((car) => {
        return car.id === Number(id)
      })
      setFormData({ make: singleCar.make })
    }
    if (cars.length) {
      prefilForm()
    }
  }, [cars])

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ make: value })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      updateSubmit(id, formData)
    }}>
      <h3>Edit Car</h3>
      <label>
        Make:
        <input type='text' value={make} onChange={handleChange} />
      </label>

      <button>Submit</button>
    </form>
  )
}
