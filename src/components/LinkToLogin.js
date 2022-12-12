import React from 'react'
import { Link } from 'react-router-dom'

function InvalidUser() {
  return (
    <div>
      <Link to={'/login'}>  <h1>Please register or login!</h1>  </Link>
    </div>
  )
}

export default InvalidUser