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

    const res = await post('upload-photo', photo)
    window.location.reload();
  }
  return (
    <div className="popup-container">
      <div className="popup-body">
        <button className="close" onClick={closePopup}>Close X</button>
        <h1>{text}</h1>
        <input ref={photoRef} type="text" placeholder="Add photo" />
        <button className="upload-btn" onClick={upload}>Upload</button>
      </div>
    </div>
  );
};