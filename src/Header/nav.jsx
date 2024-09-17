import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <div className="nav">
        <h1 className='h1-nav'>Our College</h1>
            <ul className='ul' >
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/courses">
                <li>Courses</li>
              </Link>
              <Link to="/Contact">
                <li>Contact</li>
              </Link>
            </ul>
            <button className='btn'>SignUp</button>
    </div>
    </>
  )
}
