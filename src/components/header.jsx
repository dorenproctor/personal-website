import React from "react"
import LinkButton from "./linkButton"

const linkButtons = [
  {label:'Home', link:'/'},
  {label:'About Me', link:'/about-me/'},
  {label:'Work Experience', link:'/work-experience/'},
  {label:'Resume', link:'/resume/'},
  {label:'Clash Royale', link:'/clash-royale/'},
  {label:'Visualizations', link:'/visualizations/'},
].map(x => <div style={{display: 'inline-block'}} key={x.label}><LinkButton label={x.label} link={x.link} />&nbsp;|&nbsp;</div>)

const Header = () => (
  <header style={{ background: 'rebeccapurple', marginBottom: '1.45rem', width: '100%'}}>
    <h1 className="headerText">
      |&nbsp;
      {linkButtons}
    </h1>
  </header>
)

export default Header