import React, { useContext, useState } from 'react'

import '../css/Main.css'
import MainContext from '../context/MainContext'
import { useNavigate } from 'react-router-dom'

import Cards from './Cards';
import PhotoSliderLikes from './PhotoSliderLikes';

function Main() {
  const nav = useNavigate()
  const { users, user, userLogged } = useContext(MainContext)
  const [liked, setLiked] = useState(true)
  console.log('users ===', users);
  const goToProfile = () => {
    nav('/profile')
  }
  const likedMe = () => {
    setLiked(true)
  }
  const iLiked = () => {
    setLiked(false)
  }
  return (
    <div className='main'>
      <div className='user-info'>
        <div className='profile-div'>
          <div className='user-profile'>
            {user.map((x, i) => <><img src={x.photos[0]} alt="" /><h3>{x.username}</h3></>)}

          </div>

          <div>
            <button onClick={goToProfile} className='profile-btn' >Profile</button>

          </div>

        </div>
        <div className='matches'>
          <div onClick={likedMe}>People who liked me (2)</div>
          <div onClick={iLiked}>People I liked (4)</div>
        </div>
        <div className='liked'>



          {liked ? <> {users.map((x, i) => <div>{x.username} </div>)}
          </>

            :

            <>
              <div> I liked</div>
              <div> I liked</div>
              <div> I liked</div>
              <div> I liked</div>
            </>

          }

        </div>
      </div>
      <div className='likes-dislikes'>
        <Cards />


      </div>

    </div>
  )
}

export default Main