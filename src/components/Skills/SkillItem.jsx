import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/styles/Skills.scss'
import { delayedLoader } from 'utils/helpers'

const SkillItem = ({ targetValue, skill }) => {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    loadPercent()
  }, []);
  
  const loadPercent = () => {
    delayedLoader({
      toPercent: targetValue,
      setPercent: setPercentage,
    }).then(() => {console.log('HURRAY!!!')})
  }

  return (
    <div className="skill-item">
      <div className="skill-item__progress">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={
            buildStyles({
              textSize: '20px',
              pathColor: '#8d3772',
              textColor: '#8d3772',
              trailColor: 'transparent',
              strokeLineCap: 'round',
              pathTransitionDuration: 0.5,
              strokeWidth: 90,
            })
          }
          />
      </div>
      <p>{ skill }</p>
    </div>
  )
}

export default SkillItem