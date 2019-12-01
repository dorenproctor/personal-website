import React/* , { useState } */ from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import RandomBarChart from "../components/randomBarChart"
// import AnimatedBarChart from "../components/animatedBarChart"


const Visualizations = () => {
  // const [whichVisual, setWhichVisual] = useState('RandomBarChart')
  // const visuals = {
  //   RandomBarChart: <RandomBarChart/>,
  //   AnimatedBarChart: <AnimatedBarChart/>,
  // }
  return (
    <Layout>
      <SEO title="Visualizations" />
      {/* <button onClick={() => setWhichVisual('RandomBarChart')}>Show Random Bar Chart</button>
      <button onClick={() => setWhichVisual('AnimatedBarChart')}>Show Animated Bar Chart</button>
      <br/><br/><br/>
      {visuals[whichVisual]} */}
      <RandomBarChart/>
    </Layout>
  )
}

export default Visualizations
