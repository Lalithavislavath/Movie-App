import React from 'react'
import { Link } from 'react-router-dom' 
import './Movie.css'
function Nav() {
  return (
    <div className='nav'>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/about" >About</Link>
      </nav>
    </div>
  )
}
export default Nav