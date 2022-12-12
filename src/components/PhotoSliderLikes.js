import React, { useState } from 'react'
import '../css/SliderLikes.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
function PhotoSliderLikes({ user, i }) {
  const [current, setCurrent] = useState(0)
  const [photo, setPhoto] = useState()
  // console.log('photo ===', photo);
  const length = user.photos.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(user.photos) || user.photos.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaAngleLeft className='left-arrow' onClick={prevSlide} />
      <FaAngleRight className='right-arrow' onClick={nextSlide} />
      {user.photos.map((x, i) => {
        return (
          <div
            className={i === current ? 'slide active' : 'slide'}
            key={i}
          >
            {i === current && (
              <><div style={{ backgroundImage: `url(${x})` }} alt='image' className='image' />
                <h1 className='names'>{user.username} {user.age}</h1>
                <h3 className='city'>From {user.city}</h3>
              </>
            )}

          </div>
        );
      })}
    </section>
  )
}

export default PhotoSliderLikes