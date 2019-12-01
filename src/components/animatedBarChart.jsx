import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'


const AnimatedBarChart = ({ width, height, data, barColor, id }) => {
  if (!id) id = 'animatedBarChart'//+Date.now()
  if (!width) width = '500px'
  if (!height) height = '500px'

  function update(data) {
    if (!data) return
    console.log(data)
    const selection = d3.select('#'+id).selectAll('div').data(data)

    selection.enter()
      .append("div").attr("class", "bar")
      .style('background', barColor)
      .style('width', '25px')
      .style('position', 'absolute')
      .style("left", (d,i) => (i*30)+"px")
      .style('bottom', 0)
      .style('opacity', 0)
      .text((d) => d)
      .transition().duration(1000)
      .style('opacity', 1)
      .style("height", (d) => d+"px")
    
    selection
      .style('opacity', 1)
      .text((d) => d)
      .transition().duration(1000)
      .style("height", (d) => d+"px")

    selection.exit()
      .transition().duration(1000)
      .style('height','0px')
      .style('opacity', 0)
      .remove()

  }

  useEffect(() => update(data))

  return <div id={id} style={{width, height, marginLeft:'auto', marginRight:'auto', position:'relative'}} />
}

export default AnimatedBarChart