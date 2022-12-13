import '../css/Register.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from "../plugins/http";
function Register() {
  const [gender, setGender] = useState('')
  const nav = useNavigate()
  const userRef = useRef()
  const passOneRef = useRef()
  const passTwoRef = useRef()
  const cityRef = useRef()
  const genderRef = useRef()
  const ageRef = useRef()
  const [errdiv, setErrDiv] = useState('')
  const register = async () => {
    const user = {
      username: userRef.current.value,
      passOne: passOneRef.current.value,
      passTwo: passTwoRef.current.value,
      city: cityRef.current.value,
      gender: gender,
      age: ageRef.current.value,
      photos: ['https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg'],
      likes: [''],
    }

    const res = await post('register', user)

    if (!res.error) {
      nav('/login')
      window.location.reload();
    }
    else {
      setErrDiv(res.message)
    }
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <div className='align-reg'>
        <div className='error'>{errdiv}</div>
        <input ref={userRef} type="text" placeholder='Your username' />
        <input ref={passOneRef} type="password" placeholder='Your password' />
        <input ref={passTwoRef} type="password" placeholder='Repeat your password' />
        <div className='cities'>
          <label htmlFor="cities">Choose a city:</label>
          <select ref={cityRef} name="cities" form="citiesForm">
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Klaipeda">Klaipeda</option>
            <option value="Siauliai">Siauliai</option>
            <option value="Panevezys">Panevezys</option>
          </select>

        </div>
        <div className='gender-inp'>

          <label htmlFor="Male">Male</label>
          <input type="radio" value='Male' name='gender' onChange={e => setGender(e.target.value)} />
          <label htmlFor="Female">Female</label>
          <input type="radio" value='Female' name='gender' onChange={e => setGender(e.target.value)} />
        </div>
        <input ref={ageRef} type="number" placeholder='Your age' min={18} />
        <div className='reg-btn'>
          <button onClick={register}>Register</button>

        </div>

      </div>
    </div>
  )
}

export default Register