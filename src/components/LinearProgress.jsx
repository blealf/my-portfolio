import React, { useState, useEffect } from 'react'
import 'assets/styles/LinearProgress.scss'
import { delayedLoader } from 'utils/helpers'

const LinearProgress = ({ value }) => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const mainWidth = 200

  useEffect(() => {
    loadPercent()
  }, []);
  
  const loadPercent = () => {
    setIsLoading(true)
    delayedLoader({
      toPercent: value,
      setPercent: setPercentage,
    }).then(() => {setIsLoading(false)})
  }
  const getProgress = () => {
    return (percentage/100) * mainWidth
  }
  return (
    <div className="linear-progress" style={{
      width: `${mainWidth}px`,
    }}>
      <div className="linear-progress__bar" style={{
        width: `${getProgress()}px`,
      }}>
        <span>{ !isLoading ? `${value}%` : null}</span>
      </div>
    </div>
  )
}

export default LinearProgress