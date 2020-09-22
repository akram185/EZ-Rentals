import React, { useState } from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        e.preventDefault()
        props.registerSubmit(formData)
      }}
    >
      <p className='login-title'>Register</p>
      <div className='login-input'>
        <input
          className='input-username'
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleChange}
        />
        <br />

        <input
          className='input-email'
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />

        <br />
        <input
          className='input-password'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChange}
        />
        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  )
}
