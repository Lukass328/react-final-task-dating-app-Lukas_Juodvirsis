import React, { useContext, useRef, useState } from 'react'
import MainContext from '../context/MainContext'
import '../css/Filter.css'
import io from "socket.io-client"
import { useNavigate } from 'react-router-dom'
function Filter() {

  const nav = useNavigate()
  const { userLogged } = useContext(MainContext)
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const cityRef = useRef()
  const socket = io.connect('http://localhost:5000');

  const filterValues = () => {
    const values = {
      username: userLogged,
      city: cityRef.current.value,
      gender: gender,
      maxAge: age,
      minAge: 18
    }

    socket.emit('userfilter', values)
    nav('/main')

  }


  return (
    <div >
      <h1>Filter</h1>
      <div className='filter-box'>
        <div className='cities'>
          <label htmlFor="cities">Choose a city :</label>
          <div className='select'>
            <select ref={cityRef} name="cities" form="citiesForm">
              <option value="Vilnius">Vilnius</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Klaipeda">Klaipeda</option>
              <option value="Siauliai">Siauliai</option>
              <option value="Panevezys">Panevezys</option>
            </select>

          </div>

        </div>
        <div className='gender-inp'>
          <h3>Select the gender which want to see: </h3>
          <div className='radio-btn'>

            <label htmlFor="Male">Male</label>
            <input type="radio" value='Male' name='gender' onChange={e => setGender(e.target.value)} />
            <label htmlFor="Female">Female</label>
            <input type="radio" value='Female' name='gender' onChange={e => setGender(e.target.value)} />
          </div>
        </div>
        <div className='range-box'>
          <h3>Age preference:</h3>
          <div className='range-nums'>
            <p>18</p>
            <input className='range' type="range" min={18} max={100} step="1" onChange={e => setAge(e.target.value)} />
            <p>{age}</p>

          </div>
        </div>
        <button className='filter-btn' onClick={filterValues}>SUBMIT</button>
      </div>
    </div>
  )
}

export default Filter