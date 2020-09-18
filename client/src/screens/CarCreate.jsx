import React, { useState } from 'react'

export default function CarCreate(props) {
  const [formData, setFormData] = useState({
    make: ""
  })
  const { make } = formData
  const { createSubmit } = props


  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ make: value })
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

      <button>Submit</button>
    </form>
  )
}
