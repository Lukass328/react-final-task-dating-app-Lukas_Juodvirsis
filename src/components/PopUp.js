import React, { useContext, useRef } from "react";
import MainContext from "../context/MainContext";
import '../css/PopUp.css'
import { post } from '../plugins/http'

export const Popup = ({ text, closePopup }) => {
  const { user, userLogged } = useContext(MainContext)
  const photoRef = useRef()
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
    <div className="popup-container">
      <div className="popup-body">
        <button onClick={closePopup}>Close X</button>
        <h1>{text}</h1>
        <input ref={photoRef} type="text" placeholder="Add photo" />
        <button onClick={upload}>Upload</button>
      </div>
    </div>
  );
};