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
            <h3 id="this-is-a-super-cool-hero-subhead">My thoughts about technology and cloud computing</h3>
          </div>
        </section>
        <section id="intro" className="content">
          <div className="copy">
            <p>Working with technolgy platforms can help you do all types of things, like offer a new service,
               provide a variation to an existing service or help you create something cool like an app for Alexa
               keep track of your favorite Legos (done!).
           </p>
            <h3 id="this-is-an-h3-use-it-for-subheads-and-subsections">
                Here are a couple of articles that might help you create something.
            </h3>
            
          </div>
        </section>
        <div className="blog-list">
        {
          edges.map(edge => {
            const { frontmatter } = edge.node;
            console.log(frontmatter);
            return (
              <div  key={frontmatter.path}>
                {
                <Link className="article-teaser" to={frontmatter.path}>
                   <img className="thumbnail" src={placeHolderImg} alt="Magna etiam sed lorem ipsum dolor amet"></img>
                    <div className="copy">
                      <h2> {frontmatter.title}</h2>
                      <h3 className="publish-date">Published on {frontmatter.date}</h3>
                      <p className="summary">{frontmatter.subtitle}</p>
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
