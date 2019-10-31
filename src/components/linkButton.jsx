import React from "react"
import { Link } from "gatsby"

const LinkButton = ({ label, link }) => (
  <Link
    to={link}
    style={{
      color: `white`,
      textDecoration: `none`,
    }}
  >
  {label}
  </Link>
)

export default LinkButton