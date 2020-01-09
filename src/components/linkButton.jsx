import React from "react"
import { Link } from "gatsby"
import css from './css/linkButton.module.css'

const LinkButton = ({ label, link }) => (
  <Link className={css.link} to={link} >
    {label}
  </Link>
)

export default LinkButton