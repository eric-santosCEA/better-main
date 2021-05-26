import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [active, setActive] = useState(true)
  const handleClick = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <>
      <div className="icon-bar">
        <FiMenu size="40" className="icon" onClick={handleClick} />
      </div>
      <nav className={active ? 'links' : 'open'}>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
      </nav>
    </>
  )
}

export default Navbar
