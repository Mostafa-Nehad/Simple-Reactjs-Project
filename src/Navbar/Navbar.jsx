import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg py-3">
  <div className="container">
      <Link to='' className="fs-2 fw-bold">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
      <ul className="navbar-nav gap-3 m-2">
        <li className="nav-item">
        <NavLink className='m-2 p-2' to='about'>ABOUT</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='m-2 p-2' to='portfolio'>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='m-2 p-2' to='contact'>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
