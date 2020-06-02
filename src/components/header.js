import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";


const HeaderBody = ({ data }) => {
  
  const siteTitle = data.site.siteMetadata.title;
 return (
    
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