import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import RandomBarChart from "../components/randomBarChart"


const Visualizations = () => (
  <Layout>
    <SEO title="Visualizations" />
    <RandomBarChart range={[10,1005]}/>
  </Layout>
)

export default Visualizations
