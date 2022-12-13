import React, { useEffect, useState } from 'react'
import '../css/LikedSliderCards.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
function LikedSliderCards({ user, i, likes }) {
  const [current, setCurrent] = useState(0)
  const [photo, setPhoto] = useState()
  const [length, setLength] = useState()

  // const length = user.photos.length
  // console.log('length ===', length);
  // useEffect(() => {
  //   setLength(user.photos.length);
  // }, [user.photos]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(user.photos) || user.photos.length <= 0) {
  //   return null;
  // }


  return (
    <section className='sliders'>
      {/* <FaAngleLeft className='left-arrow-like' onClick={prevSlide} />
      <FaAngleRight className='right-arrow-like' onClick={nextSlide} /> */}
      {likes.map((x, i) => {
        return (
          <div
            className={i === current ? 'slide active' : 'slide'}
            key={i}

          >
            {i === current && (

              <><div style={{ backgroundImage: `url(${x.photos})` }} alt='image' className='images' /><h3 className='names-liked'>{x.name}</h3></>
            )}

          </div>
        );
      })}
    </section>
  )
}

export default LikedSliderCards