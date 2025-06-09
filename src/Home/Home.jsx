import React, { useEffect } from 'react'
import avtarImg from '../assets/avataaars.svg'


export default function Home() {

useEffect(() => {
  document.title = 'Home';
}, [])

  return (
    <>
          <div className='home-section section d-flex flex-column justify-content-center align-items-center py-5'>
            <img className='avatar-img img-fluid' src={avtarImg} alt="" />
            <h1 className="home-title text-uppercase fs-1 fw-bold pt-4">start Framework</h1>

      <div className="star-divider d-flex justify-content-center align-items-center my-3">
        <div className='line me-3'></div>
        <i className="fa-solid fa-star"></i>
        <div className='line ms-3'></div>
      </div>
      
      <div className="container">
      <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </div>
    </>
  )
}
