import React from "react"
import LinkButton from "./linkButton"

const linkButtons = [
  {label:'Home', link:'/'},
  {label:'About Me', link:'/about-me/'},
  {label:'Work Experience', link:'/work-experience/'},
  {label:'Resume', link:'/resume/'},
].map((x) => <div style={{display: 'inline-block'}}><LinkButton label={x.label} link={x.link} />&nbsp;|&nbsp;</div>)

const Header = () => (
  <header style={{ background: 'rebeccapurple', marginBottom: '1.45rem', width: '100%' }}>
    <h1 style={{ width:'100%', textAlign: 'center', padding: '1.45rem 1.0875rem', margin: 0, whiteSpace: 'nowrap' }}>
      |&nbsp;
      {linkButtons}
    </h1>
  </header>
)

export default Header