import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import "./custom.css"

const Layout = ({ children }) => (
  <>
    <Header/>
    <div style={{ width:'100%', textAlign: 'center', overflow:'scroll' }}>
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
