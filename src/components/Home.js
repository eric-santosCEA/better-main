import React from 'react'
import '../styles/home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="images">
        <img
          src="./photos/solar300x300.webp"
          alt="solar icon"
          height="125"
          width="125"
        />
        <img
          src="./photos/roofing300x300.webp"
          alt="solar icon"
          height="125"
          width="125"
        />
        <img
          src="./photos/water300x300.webp"
          alt="solar icon"
          height="125"
          width="125"
        />
      </div>
    </div>
  )
}

export default Home
