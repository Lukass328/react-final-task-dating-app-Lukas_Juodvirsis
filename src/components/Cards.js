
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import MainContext from "../context/MainContext";
import '../css/Cards.css'
import PhotoSliderLikes from "./PhotoSliderLikes";
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../css/SwipeButton.css'
import io from "socket.io-client"
const socket = io.connect('http://localhost:5000');
// import data from './data'
const TinderCards = ({ arr }) => {
  const [current, setCurrent] = useState(0)
  const { users, filteredUsers, user } = useContext(MainContext)
  const length = filteredUsers.length
  const [currentIndex, setCurrentIndex] = useState(filteredUsers.length)


  if (!Array.isArray(filteredUsers) || filteredUsers.length <= 0) {
    return null;
  }


  const canSwipe = currentIndex >= 0

  const swipe = async (dir, id, photos, name) => {
    if (canSwipe && currentIndex < filteredUsers.length) {
      setCurrent(current === length - 1 ? '' : current + 1);
      if (dir === 'right') {
        const values = {
          iLikedId: id,
          myId: user[0]._id,
          photos: photos,
          name: name
        }

        socket.emit('likedUser', values)
      } else if (dir === 'left') {
        const val = {
          dislike: id,
          myId: user[0]._id,
        }

        socket.emit('dislikedUser', val)
      }


    }

  }



  return (
    <><div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {filteredUsers.map((userLikes, i) => {
          return (
            <div
              className={i === current ? 'slide active' : 'slide'}
              key={i}
            >
              {i === current && (
                <PhotoSliderLikes user={userLikes} i={i}>
                  {userLikes}
                </PhotoSliderLikes>
              )}

              {/* <div className="swipeButtons">
                <IconButton
                  className="swipeButtons__lightning"
                  style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
                  onClick={() => swipe('left', userLikes._id)}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>

                <IconButton
                  className="swipeButtons__right"
                  style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
                  onClick={() => swipe('right', userLikes._id, userLikes.photos, userLikes.username)}
                >
                  <FavoriteIcon fontSize="large" />
                </IconButton>
              </div> */}
            </div>
          );
        })}
        <div className="swipeButtons">


          <IconButton className="swipeButtons__lightning" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left',)}>
            <CloseIcon fontSize="large" />
          </IconButton>

          <IconButton className="swipeButtons__right" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>
            <FavoriteIcon fontSize="large" />
          </IconButton>


        </div>
      </div>
    </div>

    </>
  );
};

export default TinderCards;