import React, { useState } from 'react'

export default function CarCreate(props) {
  const [formData, setFormData] = useState({
    make: "",
    imageURL: ""
  })
  const { make, imageURL } = formData
  const { createSubmit } = props


  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ make: value, imageURL: value })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      createSubmit(formData)
    }}>
      <h3>Create Car</h3>
      <label>
        Make:
        <input type='text' value={make} onChange={handleChange} />
      </label>
      <label>
        Image Address:
        <input type='text' value={imageURL} onChange={handleChange} />
      </label>

      <button>Submit</button>
    </form>
  )
}
