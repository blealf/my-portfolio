import React, { useState, useEffect, useCallback } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../assets/styles/Skills.scss'

const SkillItem = ({ targetValue, skill }) => {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    loadPercent()
  }, [targetValue]);
  
  
  const Typewriter = ({ toPercent, setPercent }) => {
    let i = 0;
    let timeout = Math.random(1, 3) * 10;
    return new Promise((resolve) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i >= toPercent) {
            clearInterval(interval)
            setTimeout(() => {
              resolve()
            }, 1000)
            return
          }
          setPercent(i + 1)
          i++
          timeout += 150
        }, timeout)
      }, 1000)
    })
  }
  
  const loadPercent = () => {
    Typewriter({
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