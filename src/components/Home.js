import React from 'react'
import '../styles/home.css'
import {
  ImFacebook,
  ImInstagram,
  ImLinkedin,
  ImArrowDown2,
} from 'react-icons/im'
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
      <section className="social-media">
        <div className="icons">
          <ImFacebook className="icon" size="25" />
          <ImInstagram className="icon" size="25" />
          <ImLinkedin className="icon" size="25" />
        </div>

        <ImArrowDown2 className="icon" size="25" />
      </section>
    </div>
  )
}

export default Home
