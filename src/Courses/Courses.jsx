import React from 'react'
import './Courses.css'
import Box from './c-box'

export default function Courses() {
  return (
    <div className='main-box'>
    <div className="top-box">
        <img className='img1' src="img20.jpg" alt="" />
        <h1>Our Courses</h1>
        <img className='img-2' src="img20.jpg" alt="" />


    </div>
    <div className="courses-box">

    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    <Box img='img19.jpg' h1='This is dev' imgh='250' imgw='100%'/>
    </div>
    </div>
  )
}
