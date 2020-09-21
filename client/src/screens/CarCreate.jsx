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
      onSubmit={(e) => {
        e.preventDefault()
        createSubmit(formData)
      }}
    >
      <h3>Create Car</h3>
      <label>
        Make:
        <input type='text' name='make' value={make} onChange={handleChange} />
      </label>
      <label>
        Image Address:
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
