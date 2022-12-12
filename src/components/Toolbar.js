import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import tinderLogo from '../images/tinderLogo.png'
import '../css/Toolbar.css'
import MainContext from '../context/MainContext'

function Toolbar() {
  const { isLoggedIn } = useContext(MainContext)
  return (
    <div>
      <div className='header'>
        <Link to={'/'}>
          <div className='logo'>
            <img src={tinderLogo} alt="" />
            <h2>Swindler</h2>

          </div>
        </Link>
        {isLoggedIn ? <div className='links'>
          <Link to={'/main'} >Main</Link>
          <Link to={'/profile'} >Profile</Link>
          <Link to={'/filter'} >Filter</Link>

        </div>
          :
          <div className='links'>
            <Link to={'/register'} >Register</Link>
            <Link to={'/login'} >Login</Link>

          </div>}

      </div>
    </div>
  )
}

export default Toolbar