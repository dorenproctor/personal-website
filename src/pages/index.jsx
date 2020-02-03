import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Thanks for visiting my website</h1>
    <p>It's built in React with Gatsby and hosted on Netlify.</p>
    <span>The source code is available at </span>
    <a href='https://github.com/dorenproctor/personal-website'>https://github.com/dorenproctor/personal-website</a> 
    <br/><br/>
    <div style={{ margin: 'auto', maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image alt='Gatsby Astronaut' />
    </div>
  </Layout>
)

export default IndexPage