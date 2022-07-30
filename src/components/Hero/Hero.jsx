import React, { useState,  useEffect } from 'react'
import 'assets/styles/Hero.scss'
import { AiOutlineRightCircle } from 'react-icons/ai'
import Code from './Code'

const Hero = () => {
  const [greeting, setGreeting] = useState('')
  const [work, setWork] = useState('')
  const [blinkGreeting, setBlinkGreeting] = useState(false)
  const [blinkWork, setBlinkWork] = useState(false)
  const [summary, setSummary] = useState('')

  useEffect(() => {
    write()
  }, [])

  const Typewriter = ({ words, printer, setBlinker, blinkerTime }) => {
  let i = 0
  // eslint-disable-next-line no-unused-expressions
  setBlinker ? setBlinker(true) : null
    return new Promise((resolve) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i >= words.length) {
            clearInterval(interval)
            setTimeout(() => {
              resolve()
              // eslint-disable-next-line no-unused-expressions
              setBlinker ? setBlinker(false) : null
            }, blinkerTime || 1000)
            return
          }
          printer(words.slice(0, i + 1))
          i++
        }, 200)
      }, 1000)
    })
  }
  
  const write = () => {
    Typewriter({
      words: 'Hi, my name is Blessing Alfred',
      words2: 'Hi, I am Blessing Alfred',
      rewrite: true,
      printer: setGreeting,
      setBlinker: setBlinkGreeting
    }).then(() => {
      Typewriter({
        words: 'I am a front-end developer',
        printer: setWork,
        setBlinker: setBlinkWork,
        blinkerTime: 3000
      }).then(() => {
        setSummary(`Knowledgeable, goal-oriented and a solutions-oriented 
      developer adept at creating successful web applications that
      meet customer needs. Use various web design packages and development
      frameworks to curate custom-crafted, customer-focused web applications.
      Committed to high standards of user experience, usability and speed.`)
      })
    })
  }
  return (
    <div className="hero">
      <div className="hero__left">
        <button className="hero__header">
          Welcome to my world!
        </button>
        <h1 className="hero__title">{greeting} <span className="blinker">{blinkGreeting ? '|' : null}</span></h1>
        <h2>{work} <span className="blinker">{ blinkWork ? '|' : null }</span></h2>
        <p className="hero__content">{ summary }</p>
        <div className="hero__call"><p>Enter</p> <AiOutlineRightCircle className="enter-icon" /> </div>
      </div>
      <Code />
    </div>
  )
}

export default Hero