import React from 'react'

import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../css/SwipeButton.css'

const SwipeButtons = () => {
  const click = () => {
    alert('pidaras')
  }
  return (
    <div className="swipeButtons">


      <IconButton className="swipeButtons__lightning">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton onClick={click} className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>


    </div>
  )
}

export default SwipeButtons