import React from 'react';
import CodeIcon from 'assets/images/code.jpg';
import 'assets/styles/Hero.scss';

const Code = () => {
  return (
    <div className="code-wrapper">
      <img src={CodeIcon} className="code-image code-left" alt="code" />
      <img src={CodeIcon} className="code-image code-right" alt="code" />
    </div>
  )
}

export default Code