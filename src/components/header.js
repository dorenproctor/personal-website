import React from "react"
import LinkButton from "./linkButton"

const linkButtons = [
  {label:'Page 1', link:'/'},
  {label:'Page 2', link:'/page-2/'},
  {label:'Page 1', link:'/'},
  {label:'Page 2', link:'/page-2/'},
  {label:'Page 1', link:'/'},
  {label:'Page 2', link:'/page-2/'},
  {label:'Page 1', link:'/'},
  {label:'Page 2', link:'/page-2/'},
].map((x) => <div style={{display: 'inline-block'}}><LinkButton label={x.label} link={x.link} />&nbsp;|&nbsp;</div>)

const Header = () => (
  <header style={{ background: 'rebeccapurple', marginBottom: '1.45rem' }}>
    <h1 style={{ padding: '1.45rem 1.0875rem', margin: 0, whiteSpace: 'nowrap' }}>
      {linkButtons}
    </h1>
  </header>
)

export default Header