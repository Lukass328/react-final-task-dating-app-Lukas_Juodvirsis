import React, { useState } from 'react'
import '../css/Slider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
function PhotoSlider({ x, i }) {
  const [current, setCurrent] = useState(0)
  const [photo, setPhoto] = useState()
  // console.log('photo ===', photo);
  const length = x.photos.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(x.photos) || x.photos.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {x.photos.map((x, i) => {
        return (
          <div
            className={i === current ? 'slide active' : 'slide'}
            key={i}
          >
            {i === current && (
              <img src={x} alt='image' className='image' />
            )}

          </div>
        );
      })}
    </section>
  )
}

export default PhotoSlider