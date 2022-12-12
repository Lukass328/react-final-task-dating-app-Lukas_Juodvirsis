import React, { useRef, useState } from "react";
import '../css/Card.css'
import { RxHeartFilled } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


const Card = () => {


  return (
    <div className="tinder">
      <div className="tinder--status">
        <i className="fa fa-remove"></i>
        <i className="fa fa-heart"></i>
      </div>

      <div className="tinder--cards">
        <div className="tinder--card">
          {/* <img src="https://placeimg.com/600/300/people" /> */}
          <h3>Demo card 1</h3>
          <div className="bgcImg" style={{ backgroundImage: `url("https://placeimg.com/600/300/animals")` }} ></div>
          <p>This is a demo for Tinder like swipe cards</p>
        </div>
        {/* <div className="tinder--card">
          <img src="https://placeimg.com/600/300/animals" />
          <h3>Demo card 2</h3>
          <p>This is a demo for Tinder like swipe cards</p>
        </div>
        <div className="tinder--card">
          <img src="https://placeimg.com/600/300/nature" />
          <h3>Demo card 3</h3>
          <p>This is a demo for Tinder like swipe cards</p>
        </div>
        <div className="tinder--card">
          <img src="https://placeimg.com/600/300/tech" />
          <h3>Demo card 4</h3>
          <p>This is a demo for Tinder like swipe cards</p>
        </div>
        <div className="tinder--card">
          <img src="https://placeimg.com/600/300/arch" />
          <h3>Demo card 5</h3>
          <p>This is a demo for Tinder like swipe cards</p>
        </div> */}
      </div>

      <div className="tinder--buttons">
        <div className="remove">
          <AiOutlineClose className='fa-remove' />

        </div>
        <div className="heart">

          {/* < RxHeartFilled className='fa-heart' /> */}
        </div>

      </div>
    </div>
  );
};

export default Card;