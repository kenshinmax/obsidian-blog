import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from '../images/shimmy-logo.png';
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     <div className="wrapper"> 
     
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
        <section id="hero" className="hero">
          <img alt="avatar" src={logo}/>
          <div className="copy">
            <h1>This is a hero headline.</h1>
            <h3 id="this-is-a-super-cool-hero-subhead">This is a super-cool hero subhead.</h3>
          </div>
        </section>
        <section id="intro" className="content">
          <div className="copy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci diam, elementum consectetur elit non, tempus varius leo. In ut bibendum mauris. Vestibulum mattis pharetra enim. Maecenas ornare vulputate nisi sed condimentum. Fusce sit amet cursus nunc. Vivamus malesuada posuere mollis. Aliquam facilisis neque eget ligula aliquam consequat.</p>
            <h3 id="this-is-an-h3-use-it-for-subheads-and-subsections">This is an H3. Use it for subheads and subsections.</h3>
            <p>
              Donec malesuada, augue eu blandit porta, metus metus auctor leo, non dapibus felis odio non tortor. Mauris sem orci, tristique eget
              <a href="/">this is an inline link</a>
              placerat non, eleifend tempor dolor. Quisque sed nisl elit. Praesent pulvinar id urna quis cursus. In hac habitasse platea dictumst. Mauris sed odio magna. Duis felis turpis, posuere at erat nec, condimentum luctus nibh. Nam leo ante, tempor ut tellus vel, lacinia aliquam velit. Mauris ut purus in nisl suscipit feugiat. Pellentesque tempor aliquet dolor, ac consectetur lorem ornare id. Vestibulum sit amet facilisis elit, sit amet rhoncus felis. Nunc rhoncus porttitor sollicitudin. Quisque eu leo metus. Curabitur gravida nibh eu
            </p>
          </div>
        </section>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
