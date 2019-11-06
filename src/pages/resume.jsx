import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import resumePdf from "../assets/Doren Proctor Resume.pdf"



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
        <a href={resumePdf} download="Doren Proctor Resume.pdf">Download as PDF</a>
        <br/><br/>
        <div style={{ margin: 'auto', width:'750px', maxWidth:'90vw', border:'black solid 1px' }}>
          <Img fluid={imgData.placeholderImage.childImageSharp.fluid}/>
        </div>
        <br/><br/>
    </Layout>
  )
}

export default ResumePage
