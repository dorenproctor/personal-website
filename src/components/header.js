import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LinkButton from "./linkButton"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
  <div
    style={{
      margin: `0 auto`,
      // maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <h1 style={{ margin: 0 }}>
      <LinkButton label='Page 1' link='/'/>
      &nbsp;|&nbsp;
      <LinkButton label='Page 2' link='/page-2/'/>
      &nbsp;|&nbsp;
      <LinkButton label='Page 1' link='/'/>
      &nbsp;|&nbsp;
      <LinkButton label='Page 2' link='/page-2/'/>
      &nbsp;|&nbsp;
      <LinkButton label='Page 1' link='/'/>
      &nbsp;|&nbsp;
      <LinkButton label='Page 2' link='/page-2/'/>
      &nbsp;|&nbsp;
    </h1>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )