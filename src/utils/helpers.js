export const typeWriter = ({ words, printer, setBlinker, blinkerTime, writeTime }) => {
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
        }, writeTime || 200)
      }, 1000)
    })
}


export const delayedLoader = ({ toPercent, setPercent }) => {
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