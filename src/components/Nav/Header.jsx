import React from 'react'
import 'assets/styles/Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__logo"><Link to="/">Blessing</Link></h2>
      <ul className="header__link">
        <li><Link to="/">Home</Link></li>
        <li>Skills</li>
        <li>Projects</li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
      <button className="header__contact">Contact</button>
    </div>
  )
}

export default Header