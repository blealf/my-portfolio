import React from 'react'
import '../assets/styles/Hero.scss'
import { AiOutlineRightCircle } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="hero">
      <button className="hero__header">
        Welcome to my world!
      </button>
      <h1 className="hero__title">Hi! I'm Blessing Alfred a Front-end Developer</h1>
      <p className="hero__content">
        Knowledgeable, goal-oriented and a solutions-oriented developer adept at creating successful web applications that meet customer needs. Use various web design packages and development frameworks to curate custom-crafted, customer-focused web applications. Committed to high standards of user experience, usability and speed. </p>
      <div className="hero__call"><p>Enter</p> <AiOutlineRightCircle className="enter-icon" /> </div>
    </div>
  )
}

export default Hero