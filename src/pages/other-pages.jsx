import React from "react"
import LinkButton from "../components/linkButton"
import Layout from "../components/layout"
import SEO from "../components/seo"

const linkButtons = [
  {label:'Podcasts', link:'/podcasts/'},
  {label:'Clash Royale', link:'/clash-royale/'},
  {label:'D3', link:'/visualizations/'},
]

const OtherPages = () => (
  <Layout>
    <SEO title="Home" />
      {linkButtons.map(x => {
        return (
          <div key={x.label}>
            <br/>
            <br/>
            <h1>
              <LinkButton label={x.label} link={x.link}/>
            </h1>
          </div>
        )
      })
    }
    <p style={hiddenTextStyle()}>I love Ally</p>
  </Layout>
)

export default OtherPages




function hiddenTextStyle() {
  return {
    color: '#353131',
    fontSize: '12px',
    position: 'absolute',
    bottom: '0px',
    left: '20px',
    textAlign: 'initial',
  }
}