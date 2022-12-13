import '../css/Login.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from "../plugins/http";

function Login() {
  const userRef = useRef()
  const passOneRef = useRef()
  const nav = useNavigate()
  const [errDiv, setErrDiv] = useState('')
  const login = async () => {
    const user = {
      username: userRef.current.value,
      passOne: passOneRef.current.value,

    }
    const res = await post('login', user)

    if (!res.error) {
      nav('/profile')
      window.location.reload();
    } else {
      setErrDiv(res.message)
    }

  }
  return (
    <div className='login' >
      <h1>Login</h1>
      <div className='align-log'>
        <div className='error' >{errDiv}</div>
        <input ref={userRef} type="text" placeholder='Your username' />
        <input ref={passOneRef} type="password" placeholder='Your password' />
        <div className='log-btn'>
          <button onClick={login}>Login</button>

        </div>

      </div>
    </div>
  )
}

export default Login