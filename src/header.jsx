import React from 'react'
import { Link } from 'react-router-dom'
// import Gallary from './Gallary'

function header() {
  return (
    <div>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/about'>About</Link>&nbsp;&nbsp;
      <Link to='/testimonial'>Testimonial</Link>&nbsp;&nbsp;
      <Link to='/slick'>Slick</Link>&nbsp;&nbsp;
      <Link to='/demo'>Demo</Link>&nbsp;&nbsp;
      <Link to='/gallary'>Gallary</Link>

      {/* <Gallary/> */}
    </div>
  )
}

export default header
