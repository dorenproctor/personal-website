import React, { useState } from 'react'
import BarChart from './barChart'

const RandomBarChart = ({ initData, numBars, range }) => {
  if (!numBars) numBars = Math.floor(1+Math.random()*15)
  if (!initData) initData = [8, 5, 6, 6, 9, 10]
  if (!range) range = [0, 40]
  
  const lowerBound = range[0], upperBound = range[1]
  
  const [data, setData] = useState(initData)
  
  function randomData() {
    const diff = upperBound - lowerBound + 0.5 //adding 0.5 makes the upper bound inclusive
    const d = [...Array(numBars)].map(x => Math.floor(Math.random()*diff + lowerBound))
    setData(d)
  }

  return (
    <>
      <button onClick={randomData}>Change Data</button>
      <BarChart data={data} id='randomBarChart' barColor='purple'/>
    </>
  )
}

export default RandomBarChart