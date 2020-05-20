import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" className="header">
        <Link to="/" className="logo">
          {siteTitle}
        </Link> 

        <nav>
          <a className="nav-link" href="/demos/vanilla/">Home</a>
          <a className="nav-link" href="/demos/vanilla/generic/">Generic</a>
          <a className="nav-link" href="/demos/vanilla/elements/">Elements</a>
          <a className="nav-link" href="/demos/vanilla/ipsum/">Ipsum</a>
        </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
