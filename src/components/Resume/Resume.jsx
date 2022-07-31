import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h1 className="resume__title">Blessing Alfred</h1>
        <h2 className="resume__subtitle">Front-end Developer</h2>
        <div className="resume__contact">
          <AiOutlineMail />
          <a href="mailto:blealf@gmail.com">blealf@gmail.com</a>
        </div>
        <div className="resume__contact">
          <AiOutlinePhone />
          <a href="tel:+2348039829130">+234 8039829130</a>
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