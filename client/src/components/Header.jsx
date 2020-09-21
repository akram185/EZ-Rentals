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
        <div>
          <p>{currentUser.username}</p>
          <button onClick={props.handleLogout}>logout</button>
        </div>
      ) : (
        <div className='login-register'>
          <button className='login'>
            <Link className='login' to='/login'>
              Login
            </Link>
          </button>
          <button>
            <Link className='register' to='/register'>
              Register
            </Link>
          </button>
        </div>
      )}
      {currentUser && (
        <>
          <Link to='/cars'>My Cars</Link>
          <Link className='types' to='/types'>
            Types
          </Link>
        </>
      )}
    </header>
  )
}
