import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getOneCar } from '../services/cars'

export default function CarEdit(props) {
  const [formData, setFormData] = useState({
    make: '',
    imageURL: '',
    description: '',
  })
  const { make, imageURL, description } = formData
  const { id } = useParams()
  const { cars, updateSubmit } = props
  const history = useHistory()

  useEffect(() => {
    const prefilForm = () => {
      const singleCar = cars.find((car) => car.id === Number(id))

      setFormData({
        make: singleCar.make,
        imageURL: singleCar.imageURL,
        description: singleCar.description,
      })
    }
    if (cars.length) {
      prefilForm()
    }
  }, [cars])

  const handleChange = (e) => {
    const { name, value } = e.target
    const editData = { [name]: value }
    setFormData((formData) => {
      return { ...formData, ...editData }
    })
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        updateSubmit(id, formData)
        history.push('/')
      }}
    >
      <h3>Edit Car</h3>
      <label>
        Make:
        <input type='text' name='make' value={make} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input
          type='text'
          name='imageURL'
          value={imageURL}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
