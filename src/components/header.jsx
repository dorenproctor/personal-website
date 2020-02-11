import React from "react"
import LinkButton from "./linkButton"
import css from './css/header.module.css'

const linkButtons = [
  {label:'Home', link:'/'},
  {label:'About Me', link:'/about-me/'},
  {label:'Work Experience', link:'/work-experience/'},
  {label:'Resume', link:'/resume/'},
  {label:'Other', link:'/other-pages/'},
]

const Header = () => (
  <header className={css.headerHeader}>
    <h1 className={css.headerH1}>
      {linkButtons.map(x => <LinkButton label={x.label} link={x.link} key={x.label}/>)}
    </h1>
  </header>
)

export default Header