import React from "react";
import { Link } from "gatsby";
import logo from '../images/shimmy-logo.png';
import placeHolderImg from '../images/gatsby-icon.png';
import "../sass/main.scss";

const Layout = ( props ) => {

 const { edges } = props.data.allMarkdownRemark;
 
 return (
   
      <div className="container box">
        <section id="hero" className="hero">
          <img alt="avatar" src={logo}/>
          <div className="copy">
            <h1>A collection of blogs and other things</h1>
            <h3 id="this-is-a-super-cool-hero-subhead">My thoughts about technology, cloud computing and other stuff</h3>
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
        <div className="blog-list">
        {
          edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div  key={frontmatter.path}>
                {
                <Link className="article-teaser" to={frontmatter.path}>
                   <img className="thumbnail" src={placeHolderImg} alt="Magna etiam sed lorem ipsum dolor amet"></img>
                    <div className="copy">
                      <h2> {frontmatter.title}</h2>
                      <h3 className="publish-date">Published on September 04, 2016</h3>
                      <p className="summary">Phasellus in ante vitae nibh porttitor tempus vitae ut ante. Vestibulum blandit dolor elementum viverra. Sed quat a diam, aliquet tempus felis. Phasellus et magna vitae nibh porttitor tempus vitae.</p>
                      <div className="text-link">Read more</div>
                  </div>
                </Link>
               }
              </div>
            )
          }) 
        }
        </div>
      </div>  
  
  )
}


export default Layout;
