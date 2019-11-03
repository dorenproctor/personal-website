import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



const AboutMePage = () => {
  const imgData = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Me With Flowers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
        <div style={{ margin: 'auto', width: '150px', marginBottom: '1.45rem' }}>
          <Img fluid={imgData.placeholderImage.childImageSharp.fluid}/>
        </div>
      <h1>About Me</h1>
      <p>My name is Doren and I'm a developer.</p>
      <p>I want to have a solid understanding of everything that goes into a software project and I'm especially interested in web development and data science.</p>
      <p>JavaScript and Python are wonderful tools and are currently my languages of choice.</p>
      <p>In addition to coding at work and sometimes outside of work, I spend a lot of time reading articles, watching videos, and listening to podcasts about software
        development.</p>
    </Layout>
  )
}

export default AboutMePage
