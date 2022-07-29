import React from 'react'
import '../assets/styles/Header.scss'

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__logo">Blessing</h2>
      <ul className="header__link">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Resume</li>
      </ul>
      <button className="header__contact">Contact</button>
    </div>
  )
}

export default Header