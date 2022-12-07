import React from 'react'
import Likes from './Likes'
import Card from './Card'
import SwipeButtons from './SwipeButtons'
function Main() {
  return (
    <div>
      <div className='profile-div'>
        <p>name</p>
        <button>Profile</button>
        <div className='matches'>
          <p>People who liked me</p>
          <p>People I liked</p>
        </div>
      </div>
      <div className='likes-dislikes'>
        {/* <Likes /> */}
        <Card />
        <SwipeButtons />
      </div>
    </div>
  )
}

export default Main