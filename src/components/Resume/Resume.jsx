import React from 'react'
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { FaGlobeAfrica } from 'react-icons/fa'
import 'assets/styles/Resume.scss'

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <div className="resume__picture">
          <img src={require('assets/images/code.jpg')} alt="" />
        </div>
        <div className="resume__info">
          <div>
            <h1 className="resume__title">Blessing</h1>
            <h1 className="resume__title">Alfred</h1>
            <h3 className="resume__subtitle">Front-end Developer</h3>
          </div>
          <div className="resume__link">
            <div className="resume__contact">
              <span><AiOutlineMail /></span>
              <a href="mailto:blealf@gmail.com">blealf@gmail.com</a>
            </div>
            <div className="resume__contact">
              <span><BsPhone /></span>
              <a href="tel:+2348039829130">+234 8039829130</a>
            </div>
            <div className="resume__contact">
              <span><AiOutlineHome /></span>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="resume__contact">
              <span><FaGlobeAfrica /></span>
              <a href="https://blessingalfred.com">blessingalfred.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="resume__summary">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci laudantium saepe minima reiciendis. Sapiente quasi at nam ab maiores nisi, temporibus ipsam nostrum tempora perferendis fugiat quis hic porro commodi, reprehenderit aliquam alias! Fugit voluptate ratione veritatis suscipit beatae odit minus repudiandae, iusto possimus impedit. Aut voluptates exercitationem quisquam?</p>
      </div>
      <div className="resume__skills">
        
      </div>
      <div className="resume__experience"></div>
      <div className="resume__education"></div>
    </div>
  )
}

export default Resume