import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import 'assets/styles/Footer.scss'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <h2 className="footer__logo">Blessing</h2>
        <div className="footer__links">
          <div className="footer__links__social">
            <a href="https://www.linkedin.com/in/blessing-alfred-a9a8b817b/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="footer__links__copyright">
            <p>Copyright © 2022 Blessing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer