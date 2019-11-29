import React, { useState, useEffect } from 'react'
import BarChart from './barChart'

const RandomBarChart = () => {
  const [data, setData] = useState([8, 5, 6, 9, 10])
  const [numBars, setNumBars] = useState(5)
  const [lowerBound, setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(100)
  
  function numBarsChange(e) {
    let num = parseInt(e.target.value) || 0
    if (num < 0) num = 0
    if (num > 1000) num = 1000
    setNumBars(num)
  }

  function lowerBoundChange(e) {
    let num = parseInt(e.target.value) || 0
    if (num < 0) num = 0
    if (num > upperBound) num = upperBound
    setLowerBound(num)
  }

  function upperBoundChange(e) {
    let num = parseInt(e.target.value) || 0
    if (num < 0) num = 0
    if (num < lowerBound) num = upperBound
    setUpperBound(num)
  }

  useEffect(() => { //generate random data when any of these values change
    const diff = upperBound - lowerBound + 0.5 //adding 0.5 makes the upper bound inclusive
    setData([...Array(numBars)].map(x => Math.floor(Math.random()*diff + lowerBound)))
  }, [numBars, lowerBound, upperBound])


  return (
    <>
      Number of bars: <input type="number" onChange={numBarsChange} value={numBars}/><br/>
      Minimum value: <input type="number" onChange={lowerBoundChange} value={lowerBound}/><br/>
      Maximum value: <input type="number" onChange={upperBoundChange} value={upperBound}/><br/>
      <BarChart data={data} id='randomBarChart' barColor='purple'/>
    </>
  )
}

export default RandomBarChart