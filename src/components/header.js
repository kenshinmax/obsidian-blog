import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";

const navStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  boxSizing: "border-box",
  marginTop: "0.9em"
}
const HeaderBody = ({ data }) => {
  
  const siteTitle = data.site.siteMetadata.title;
 return (
    
    <header id="header" className="header">
        <Link to="/" className="logo">
          {siteTitle}
        </Link> 
       <div className="nav-wrapper">
          <nav style={navStyles}>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/blogs">Blogs</a>
            <a className="nav-link" href="/photos">Photos</a>
          </nav>
        </div>
  </header>
 )
  
}
const Header = () => {
  
  return (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <HeaderBody data={data} />}
  />
  )
}
  export default Header;