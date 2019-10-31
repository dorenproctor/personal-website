import React from "react"

const Footer = () => (
  <footer style={{ background: 'rebeccapurple', position:'fixed', bottom:0, left:0, width:'100%', textAlign: 'center' }}>
    <div style={{ margin: '0 auto' }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer