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
      <br/>
      <p>My name is Doren and I'm a software developer based in Portland, Oregon. All areas of software development interest me and I am particularly interested in web development, data science, and the connection between them. </p>
      <p>Javascript is my language of choice and I enjoy working in React. I have used Vue a little and like everything I've seen so far. Python is my second favorite language because of its prominence in the data community, its libraries, and its ease of use. I'm also comfortable with HTML, CSS, SQL, Java syntax, Unix terminals, Git, and more, plus there are many, many things I am interested in learning.</p>
      <p>Efficiency (in terms of code performance, developer experience, user experience, and everything else) is very important to me as well as reusability, privacy, and security. I value collaboration very highly. I enjoy spending my time helping others solve problems and learn, and having others to come to for help and insight when I get stuck is extremely helpful and appreciated.</p>
      <p>Like many developers, I consider myself a lifelong learner. In addition to plenty of learning in a professional environment, I spend a lot of free time listening to podcasts, watching videos, and reading articles, forums, and sometimes books on software topics. I also have a Bachelor's degree in Computer Science with a minor in Mathematics.</p>
    </Layout>
  )
}

export default AboutMePage
