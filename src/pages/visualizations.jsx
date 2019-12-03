import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import RandomBarChart from "../components/randomBarChart"
import SvgBarChart from "../components/svgBarChart"
import Dashboard from "../components/dashboard"


const Visualizations = () => {
  const [whichVisual, setWhichVisual] = useState('Dashboard')
  const visuals = {
    RandomBarChart: <RandomBarChart/>,
    SvgBarChart: <SvgBarChart/>,
    Dashboard: <Dashboard/>,
  }
  return (
    <Layout>
      <SEO title="Visualizations" />
      <button onClick={() => setWhichVisual('Dashboard')}>Show Dashboard</button>
      <button onClick={() => setWhichVisual('SvgBarChart')}>Show Svg Bar Chart</button>
      <button onClick={() => setWhichVisual('RandomBarChart')}>Show Random Bar Chart</button>
      <br/><br/><br/>
      {visuals[whichVisual]}
    </Layout>
  )
}

export default Visualizations
