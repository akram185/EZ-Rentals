import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <p className='login-title'>REGISTER</p>
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
      <br />
      <div className='register-login'>
        <p className='no-acc'>Already have an account?</p>
        <button className='register-btn-form'>
          <Link className='a-btn' to='/login'>
            Sign Up
          </Link>
        </button>
      </div>
    </form>
  )
}
