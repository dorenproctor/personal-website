import React from 'react'
import * as d3 from 'd3'

class BarChartClass extends React.Component {
  componentDidMount() {
    this.drawChart()
  }
    
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10]
    const w = 700, h = 500
    const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .style('margin-left', 100)
    .style('margin-bottom', 400)

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green')

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 3)
      .attr("fill", "white")
  }
        
  render(){
    return <div id={'#' + this.props.id}></div>
  }
}

export default BarChartClass
