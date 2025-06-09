import React, { useEffect } from 'react'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'


export default function Portfolio() {
  
useEffect(() => {
  document.title = 'Portfolio';
}, [])

  return (
    <>            
      <div className='portfolio-section section d-flex flex-column align-items-center py-5'>
      <h1 className="portfolio-title text-uppercase fs-1 fw-bold">portfolio component</h1>
      
      <div className="star-divider d-flex justify-content-center align-items-center my-3">
        <div className='line me-3'></div>
        <i className="fa-solid fa-star"></i>
        <div className='line ms-3'></div>
      </div>

            <div className='row container row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 text-center'>
        <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img1} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
                <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img2} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
                <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img3} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
                <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img1} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
                <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img2} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
                <div className=' img-card col'>
          <div className='position-relative'>
            <img className='img-fluid w-100 rounded-3' src={img3} alt="image" />
            <div className=' img-layer position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 rounded-3'>
              <i className=' text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
