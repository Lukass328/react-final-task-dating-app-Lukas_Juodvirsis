import { Person } from "@material-ui/icons";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
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
  const { users, filteredUsers, user } = useContext(MainContext)
  const [lastUser, setLastUser] = useState()
  const [currentIndex, setCurrentIndex] = useState(filteredUsers.length)
  const currentIndexRef = useRef(currentIndex)
  const [lastDirection, setLastDirection] = useState('')
  console.log('lastDirection ===', lastDirection);
  console.log('currentIndex ===', currentIndex);


  const swiped = (direction, nameToDelete, index) => {
    console.log("You swiped: " + nameToDelete);
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  };
  // const outOfFrame = (name) => {
  //   console.log(name + " left the screen");
  // };

  const outOfFrame = (id, idx) => {
    console.log(`${id} (${idx}) left the screen!`, currentIndexRef.current)

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    if (lastDirection === 'right') {
      const values = {
        iLikedId: id,
        myId: user[0]._id
      }
      socket.emit('likedUser', values)
    }

  }



  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }


  const childRefs = useMemo(
    () =>
      Array(filteredUsers.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const canSwipe = currentIndex >= 0

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < filteredUsers.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    } else {

      // updateCurrentIndex(filteredUsers.length - 1)
    }
  }

  // useEffect(() => {
  //   updateCurrentIndex(filteredUsers.length - 1)
  // }, [])


  return (
    <><div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {filteredUsers.map((user, i) => (
          <>

            <TinderCard
              ref={childRefs[i]}
              className="swipe"
              key={user._id}
              // preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, user.username, i)}
              onCardLeftScreen={() => outOfFrame(user._id, i)}
            >
              <div

                className=""
              >
                <PhotoSliderLikes user={user} i={i} />


              </div>
            </TinderCard>
          </>
        ))}
      </div>
    </div><div className="swipeButtons">


        <IconButton className="swipeButtons__lightning" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__right" style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>
          <FavoriteIcon fontSize="large" />
        </IconButton>


      </div>
      {/* {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
    </>
  );
};

export default TinderCards;