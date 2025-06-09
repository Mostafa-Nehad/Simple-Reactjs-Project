import React, { useEffect } from 'react'


export default function About() {
  
  useEffect(() => {
  document.title = 'About';
}, [])

  return (
<>

      <div className='about-section section d-flex flex-column justify-content-center align-items-center'>
      <h1 className="about-title fs-1 fw-bold">ABOUT COMPONENT</h1>
      
      <div className="star-divider d-flex justify-content-center align-items-center my-3">
        <div className='line me-3'></div>
        <i className="fa-solid fa-star"></i>
        <div className='line ms-3'></div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center gap-3">
          <div className="col-sm-12 col-md-5 text-start">
            <p>
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS, and JavaScript 
            as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-sm-12 col-md-5 text-start">
            <p>
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS, and JavaScript 
            as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
      </div>
</>
  )
}
