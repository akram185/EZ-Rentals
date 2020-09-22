import React, { useState } from 'react'

// export default function CarCreate(props) {
//   const [formData, setFormData] = useState({
//     make: '',
//     imageURL: '',
//   })
//   const { make, imageURL } = formData
//   const { createSubmit } = props

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     const newData = { [name]: value }
//     setFormData((formData) => {
//       return { ...formData, ...newData }
//     })
//   }
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         createSubmit(formData)
//       }}
//     >
//       <h3>Create Car</h3>
//       <label>
//         Make:
//         <input type='text' name='make' value={make} onChange={handleChange} />
//       </label>
//       <label>
//         Image Address:
//         <input
//           type='text'
//           name='imageURL'
//           value={imageURL}
//           onChange={handleChange}
//         />
//       </label>

//       <button>Submit</button>
//     </form>
//   )
// }

export default function CarCreate(props) {
  const [formData, setFormData] = useState({
    make: '',
    imageURL: '',
    description: '',
  })
  const { make, imageURL, description } = formData
  const { createSubmit } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    const newData = { [name]: value }
    setFormData((formData) => {
      return { ...formData, ...newData }
    })
  }
  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        e.preventDefault()
        createSubmit(formData)
      }}
    >
      <p className='login-title'>Create Car</p>
      <div className='login-input'>
        <input
          className='input-username'
          placeholder='Make'
          type='text'
          name='make'
          value={make}
          onChange={handleChange}
        />
        <br />

        <input
          className='input-username'
          placeholder='Image Address'
          type='text'
          name='imageURL'
          value={imageURL}
          onChange={handleChange}
        />
        <br />
        <input
          className='input-username'
          placeholder='Description'
          type='text'
          name='description'
          value={description}
          onChange={handleChange}
        />

        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  )
}
