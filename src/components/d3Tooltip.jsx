import React from 'react'
import * as d3 from 'd3'

export default D3Tooltip
export { addTooltipToD3Elems }

function D3Tooltip() {
  React.useEffect(() => {
    addTooltip() //add tooltip to DOM after render
    return removeTooltip //remove tooltip from DOM after unrender
  })
  return <></> //returning empty JSX to make this a react component
}

function removeTooltip() {
  d3.select("#d3tooltip").remove()
}

let tooltip

function addTooltip() {
  tooltip = d3.select("body").append("div")
    .attr("id", "d3tooltip")
    .style("opacity", 0)
    .style('position', 'absolute')
    .style('text-align', 'center')
    .style('width', '200px')
    .style('padding', '2px')
    .style('font', '12px sans-serif')
    .style('background', 'lightsteelblue')
    .style('border', '0px')
    .style('border-radius', '8px')
    .style('pointer-events', 'none')
}

function addTooltipToD3Elems(d3Elems, dataFn) {
  if (!tooltip) { //called before a D3Tooltip component was rendered
    console.error('Trying to add data to d3tooltip when it is ' + typeof tooltip + '. Aborting')
    return
  }
  //if a single d3.selectAll() was passed, put it in a list so we can always treat it like a list
  if (!Array.isArray(d3Elems)) d3Elems = [d3Elems]
  //by default show prettified json and replace \n with <br/> to display properly in html
  if (!dataFn) dataFn = d => JSON.stringify(d,null,2).replace(/\n/g, '<br/>') 

  function add(elems) {
    elems
      .on("mouseover", d => {
        tooltip.style("opacity", .9)
        tooltip.html(dataFn(d))
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px")
        })
      .on("mousemove", d => {
        tooltip.html(dataFn(d))
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px")
      })
      .on("mouseout", d => tooltip.style("opacity", 0))
  }
  for (const elems of d3Elems) add(elems)
}