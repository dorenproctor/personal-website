/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header/>
    <div style={{ width:'100%', textAlign: 'center' }}>
      <main>{children}</main>
    </div>
    <Footer/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
