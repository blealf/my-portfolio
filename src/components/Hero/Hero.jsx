import React, { useState,  useEffect } from 'react'
import 'assets/styles/Hero.scss'
import { AiOutlineRightCircle } from 'react-icons/ai'
import Code from './Code'
import { typeWriter } from 'utils/helpers'

const Hero = () => {
  const [greeting, setGreeting] = useState('')
  const [work, setWork] = useState('')
  const [blinkGreeting, setBlinkGreeting] = useState(false)
  const [blinkWork, setBlinkWork] = useState(false)
  const [summary, setSummary] = useState('')

  useEffect(() => {
    write()
  }, [])
  
  const write = () => {
    const title = 'Hi, Hi, I am Blessing'
    const subTitle = 'I am a Front-end Developer'
    const body = `A solutions-oriented developer,
      adept at creating successful web applications that
      meet customer needs using various web design packages and development
      frameworks to curate custom-crafted, customer-focused web applications.\n
      Committed to high standards of user experience, usability and speed.`
    typeWriter({
      words: `<h1> ${title} </h1>`,
      words2: 'Hi, I am Blessing Alfred',
      rewrite: true,
      printer: setGreeting,
      setBlinker: setBlinkGreeting
    }).then(() => {
      typeWriter({
        words: `<p> ${subTitle} </p>`,
        printer: setWork,
        setBlinker: setBlinkWork,
        blinkerTime: 3000
      }).then(() => {
        typeWriter({
          words: `<small> ${body} </small>`,
          printer: setSummary,
          blinkerTime: 3000,
          writeTime: 20,
        }).then(() => {
          setGreeting(title)
          setWork(subTitle)
          setSummary(body)
        })
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
        <h2 className="hero__subtitle">{work} <span className="blinker">{ blinkWork ? '|' : null }</span></h2>
        <p className="hero__summary">{ summary }</p>
        <div className="hero__call"><p>Enter</p> <AiOutlineRightCircle className="enter-icon" /> </div>
      </div>
      <Code />
    </div>
  )
}

export default Hero