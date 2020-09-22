import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData

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
        props.loginSubmit(formData)
      }}
    >
      <p className='login-title'>LOGIN</p>
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
        <p className='no-acc'>Don't have an account?</p>
        <button className='register-btn-form'>
          <Link className='a-btn' to='/register'>
            Sign Up
          </Link>
        </button>
      </div>
    </form>
  )
}
