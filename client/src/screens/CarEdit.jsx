import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './CarEdit.css'

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
      className='edit-form'
      onSubmit={(e) => {
        e.preventDefault()
        updateSubmit(id, formData)
        history.push('/')
      }}
    >
      <p className='login-title'>Edit Car</p>
      <div className='login-input'>
        <label>
          Make
          <input
            className='input-make'
            type='text'
            name='make'
            value={make}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image
          <input
            className='input-image'
            type='text'
            name='imageURL'
            value={imageURL}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description
          <input
            className='input-description'
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </label>
        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  )
}
