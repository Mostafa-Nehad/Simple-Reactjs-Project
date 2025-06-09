import React, { useEffect, useState } from 'react'

export default function Contact() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

      const handleSubmit = (e) => {
    e.preventDefault();
  };

useEffect(() => {
  document.title = 'Contact';
}, [])

  return (
    <>

      <div className='contact-section section d-flex flex-column align-items-center py-5'>
      <h1 className="contact-title text-uppercase fs-1 fw-bold">conatct section</h1>
      
      <div className="star-divider d-flex justify-content-center align-items-center my-3">
        <div className='line me-3'></div>
        <i className="fa-solid fa-star"></i>
        <div className='line ms-3'></div>
      </div>

      <form onSubmit={handleSubmit} className='w-50 p-3 mt-5'>
        <div className="form-floating mb-3">
          <input type="text" onChange={(e) => setValue1(e.target.value)} className="form-control position-relative border-0 border-bottom py-3 position-relative" id="userName" placeholder="userName" />
          <label className='position-absolute' style={ {opacity: value1 ? 1 : 0,}} htmlFor="userName">userName :</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" onChange={(e) => setValue2(e.target.value)} className="form-control position-relative border-0 border-bottom py-3 position-relative" id="userAge" placeholder="userAge" />
          <label className='position-absolute' style={ {opacity: value2 ? 1 : 0,}} htmlFor="userAge">userAge :</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" onChange={(e) => setValue3(e.target.value)} className="form-control position-relative border-0 border-bottom py-3 position-relative" id="userEmail" placeholder="userEmail" />
          <label className='position-absolute'style={ {opacity: value3 ? 1 : 0,}} htmlFor="userEmail">userEmail :</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" onChange={(e) => setValue4(e.target.value)} className="form-control position-relative border-0 border-bottom py-3 position-relative" id="userPassword" placeholder="userPassword" />
          <label className='position-absolute' style={ {opacity: value4 ? 1 : 0,}} htmlFor="userPassword">userPassword :</label>
        </div>

    <div className='text-start'>
          <button type="submit" className="btn btn-contact my-3 mx-auto text-white"> send Message </button>
    </div>
      </form>

      </div>

      
      
    </>
  )
}
