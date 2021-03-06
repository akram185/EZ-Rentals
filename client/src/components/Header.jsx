import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  const { currentUser } = props
  return (
    <header>
      <Link className='ez' to='/'>
        <h1 className='logo'>EZ RENTALS</h1>
      </Link>

      {currentUser ? (
        <div className='welcome-logout'>
          <button className='logout-btn' onClick={props.handleLogout}>
            logout
          </button>
          <p className='welcome'>Welcome {currentUser.username}</p>
        </div>
      ) : (
        <div className='login-register'>
          <button className='login-btn'>
            <Link className='a-btn' to='/login'>
              Login
            </Link>
          </button>
          <button className='register-btn'>
            <Link className='a-btn' to='/register'>
              Register
            </Link>
          </button>
        </div>
      )}
      {currentUser && (
        <>
          <Link className='types' to='/types'>
            Types
          </Link>
          <Link className='my-cars' to='/cars'>
            My Cars
          </Link>
          <Link className='add-car' to='/cars/new'>
            Add A Car
          </Link>
        </>
      )}
    </header>
  )
}
