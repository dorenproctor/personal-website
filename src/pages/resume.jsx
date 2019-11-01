import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



const ResumePage = () => {
  const imgData = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Doren Proctor Resume.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
      <div style={{ /* width:'100%', textAlign: 'center' */}}>
        <a href='../documents/Doren Proctor Resume.pdf' download>Download as PDF</a>
        <br/><br/>
          <div style={{ margin: 'auto', width:'750px', border:'black solid 1px' }}>
            <Img fluid={imgData.placeholderImage.childImageSharp.fluid}/>
          </div>
      </div>
      <br/><br/>      
    </Layout>
  )
}

export default ResumePage
