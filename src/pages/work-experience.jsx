import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkExperiencePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Work Experience</h1>
    <br/>
    <h3>Developer at Daimler Trucking North America</h3>
    <p>This is where I currently work.</p>
    <p>My team focuses on Salesforce. I've made some cool stuff but I want to move away from Salesforce.</p>
    <br/><br/><br/>
    <h3>Intern at Home Depot QuoteCenter</h3>
    <p>Here I worked with 3 other interns to make an internal site mobile friendly.</p>
    <br/><br/><br/>
    <h3>Intel NUC Challenge</h3>
    <p>This isn't <i>exactly</i> work experience, but I was on the team that won 1st place in an Intel competition.</p>
    <a href='https://blogs.intel.com/csr/2015/05/nuc-challenge'>https://blogs.intel.com/csr/2015/05/nuc-challenge</a>
  </Layout>
)

export default WorkExperiencePage
