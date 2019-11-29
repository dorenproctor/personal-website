import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const BarChart = ({ width, height, data, barColor, id }) => {
  const d3Container = useRef(null)
  if (!width) width = 1000
  if (!height) height = 500
  if (!barColor) barColor = 'green'
  if (!id) id = 'barChart'+Date.now()

  function drawChart(data, d3Container) {
    if (!data || !d3Container.current) return

    const maxVal = Math.max(...data)
    const calculatedHeight = height / (maxVal*1.1)
    const calculatedWidth = width / (data.length+1)

    const div = d3.select(d3Container.current)
    const svg = div.append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('id', id)

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (calculatedWidth + 5))
      .attr('y', (d, i) => height - (calculatedHeight * d))
      .attr('width', calculatedWidth)
      .attr('height', height) //height goes down and gets cut off
      .attr('fill', barColor)

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * (calculatedWidth + 5))
      .attr('y', (d, i) => height - (calculatedHeight * d) - 3)
      .attr('fill', 'white')

    svg.exit().remove()
  }
  
  useEffect(() => {
    drawChart(data, d3Container)
    return () => {
      d3.select('#'+id).remove()
    }
  })
  // }, [data])
  // }, [data, d3Container.current])

  return <div className='d3barChart' width={width} height={height} ref={d3Container}/>
}

export default BarChart