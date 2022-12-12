import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../context/MainContext'
import '../css/Likes.css'
import PhotoSliderLikes from './PhotoSliderLikes'

import 'reactjs-popup/dist/index.css';
import { post } from '../plugins/http'

function Likes() {
  const photoRef = useRef()
  const { user, userLogged, users } = useContext(MainContext)

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
  const upload = async () => {
    const photo = {
      photos: photoRef.current.value,
      username: userLogged,
    }
    console.log('photo ===', photo);
    const res = await post('upload-photo', photo)
    console.log('res ===', res);
  }
  return (
    <div>
      {users.map((x, i) => <>
        <h1>People </h1>


        <div className='likes-photos'>
          <PhotoSliderLikes x={x} i={i} key={i} />
          <button>Dislike</button>
          <button>Like</button>
        </div></>)}

    </div>
  )
}

export default Likes