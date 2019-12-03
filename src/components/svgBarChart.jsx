import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import D3Tooltip, { addTooltipToD3Elems } from './d3Tooltip'

const data1 = [
  {name:'Shanghai', latitude:31.22222, longitude:121.45806, population:22315474, color:'orange'},
  {name:'Buenos Aires', latitude:-34.61315, longitude:-58.37723, population:13076300},
  {name:'Mumbai', latitude:19.07283, longitude:72.88261, population:66918036},
  {name:'Some Place', latitude:19.07283, longitude:72.88261, population:41269186},
  {name:'Another Place', latitude:19.07283, longitude:72.88261, population:1926936},
  {name:'Nowhere', latitude:19.07283, longitude:72.88261, population:16911836},
  {name:'Somewhere', latitude:19.07283, longitude:72.88261, population:2691836},
]
const data2 = [
  {name:'a', latitude:31.22222, longitude:121.45806, population:2315474},
  {name:'bbbbbbbbbbbbbbbbbbbbbbbb', latitude:-34.61315, longitude:-58.37723, population:9076300},
  {name:'cccc', latitude:19.07283, longitude:72.88261, population:6691806},
  {name:'ddd', latitude:19.07283, longitude:72.88261, population:126918},
  {name:'eeeeeee', latitude:19.07283, longitude:72.88261, population:1269360},
  {name:'ffffffffffffffffffffff', latitude:19.07283, longitude:72.88261, population:169186},
]


const SvgBarChart = (props) => {
  let { width, height, data, id, xColumn, yColumn, defaultColor, margin } = props
  if (!id) id = 'svgBarChart'//+Date.now()
  if (!defaultColor) defaultColor = 'purple'
  if (!width) width = 500
  if (!height) height = 500
  if (!xColumn) xColumn = 'name'
  if (!yColumn) yColumn = 'population'
  if (!data) data = data1
  margin = { ...margin, left: 90, top: 30, right: 30, bottom: 30 } // override these defaults with anything passed in margin
  
  const [dataset, setDataset] = useState(data)
  const [title, setTitle] = useState('Dataset 1')
  
  const filledProps = {width, height, data:dataset, id, xColumn, yColumn, defaultColor, margin}


  useEffect(() => {
    render(filledProps)
  })

  
  return (
    <>
      {title}<br/>
      <button onClick={() => { setTitle('Dataset 1'); setDataset(data1); }}> 
        Dataset 1
      </button>
      <button onClick={() => { setTitle('Dataset 2'); setDataset(data2); }}> 
        Dataset 2
      </button> <br/>
      <svg id={id} style={{width, height, marginLeft:'auto', marginRight:'auto', position:'relative'}} >
        <g transform={'translate(' + margin.left + ',' + margin.top + ')'} />
      </svg>
      <D3Tooltip/>
    </>
  )
}

function render(props){
  let { width, height, data, id, xColumn, yColumn, defaultColor, margin } = props

  
  const innerWidth  = width  - margin.left - margin.right
  const innerHeight = height - margin.top  - margin.bottom

  const xScale = d3.scaleBand()
    .range([0, innerWidth-(10*data.length)])
    .domain( data.map( d => d[xColumn]) )

  const yScale = d3.scaleLinear()
    .range([innerHeight, 0])
    .domain( [0, d3.max(data, d => d[yColumn])] )
    
  const g = d3.select('#'+id).select('g')
  const bars = g.selectAll('rect').data(data)
  const texts = g.selectAll('text').data(data)


  bars.enter().append('rect')
    .attr('fill', (d) => d.color || defaultColor)
    .attr('x', (d,i) => xScale(d[xColumn]) + i*10)
    .attr('width', xScale.bandwidth())
    .attr('y', innerHeight)
    .transition().duration(1000)
    .attr('height', d => innerHeight - yScale(d[yColumn]))
    .attr('y', d => yScale(d[yColumn]))

  bars
    .attr('fill', (d) => d.color || defaultColor)
    .attr('x', (d,i) => xScale(d[xColumn]) + i*10)
    .attr('width', xScale.bandwidth())
    .transition().duration(1000)
    .attr('height', d => innerHeight - yScale(d[yColumn]))
    .attr('y', d => yScale(d[yColumn]))

  bars.exit().remove()

  texts.enter().append('text')
    .text((d) => d.name)
    .attr('fill', 'white')
    .attr('width', xScale.bandwidth())
    .attr('transform', (d,i) => `rotate(-90, ${xScale(d[xColumn]) + i*10}, ${innerHeight})`)
    .attr('x', (d,i) => xScale(d[xColumn]) + 5 + (i*10))
    .attr('y', innerHeight+ (.6*xScale.bandwidth()) )

  texts
    .text((d) => d.name)
    .attr('transform', (d,i) => `rotate(-90, ${xScale(d[xColumn]) + i*10}, ${innerHeight})`)
    .attr('x', (d,i) => xScale(d[xColumn]) + 5 + (i*10)) //rotate changes direction of x and y
    .attr('y', innerHeight+ (.6*xScale.bandwidth()) )

  texts.exit().remove()

  addTooltipToD3Elems(g.selectAll('rect,text'))
}


export default SvgBarChart