import React, { useContext } from 'react'
import MainContext from '../context/MainContext'

function LikedCards() {
  const { user } = useContext(MainContext)


  return (
    <div>
      {user?.likes.map((x, i) => <div>{x} </div>)}
    </div>
  )
}

export default LikedCards