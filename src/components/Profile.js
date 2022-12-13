import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/MainContext'
import '../css/Profile.css'
import PhotoSlider from './PhotoSlider'
// import Popup from 'reactjs-popup';
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
      window.location.reload();

    } else {
      console.log(res.message)
    }
  }




  return (
    <div>
      {user.map((x, i) => <>
        <h1>Profile </h1>
        <div className='log' onClick={logOut}>Log out</div>
        {/* <button onClick={filter}>Filter</button> */}
        <div className='profile-photos'>
          <PhotoSlider user={x} i={i} key={i} />

          <div>
            <button className='upload-fotos' onClick={() => setOpen(true)}>UPLOAD PHOTOS</button>
            {open ? <Popup text="Upload" closePopup={() => setOpen(false)} >
              <div>asdas</div>
            </Popup> : null}
          </div>


        </div></>)}



    </div>
  )
}

export default Profile