import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/MainContext'
import '../css/Profile.css'
import PhotoSlider from './PhotoSlider'
import { Popup } from './PopUp'

import 'reactjs-popup/dist/index.css';




function Profile() {
  const [open, setOpen] = useState(false);

  const { user, userLogged } = useContext(MainContext)
  const nav = useNavigate()
  const logOut = async () => {
    const res = await fetch('http://localhost:5000/logout', {
      method: 'GET',
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    })
    if (res.ok) {
      nav('/')
    } else {
      console.log(res.message)
    }
  }
  const filter = () => {
    nav('/filter')
  }



  return (
    <div>
      {user.map((x, i) => <>
        <h1>Profile </h1>
        <button onClick={logOut}>Log out</button>
        <button onClick={filter}>Filter</button>
        <div className='profile-photos'>
          <PhotoSlider user={x} i={i} key={i} />

          {/* <div className='upload-window'>
            <img src={x.photos} height='50px' alt="" />

            <input ref={photoRef} type="text" placeholder='Add photo' />
            <button onClick={upload} >Upload</button>
          </div> */}
          <div>
            <button onClick={() => setOpen(true)}>UPLOAD PHOTOS</button>
            {open ? <Popup text="Upload" closePopup={() => setOpen(false)} /> : null}
          </div>


        </div></>)}



    </div>
  )
}

export default Profile