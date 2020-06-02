import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from "../components/header";
import heroImage from "../images/og-react.jpg";

const heroStyles = {
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundImage: `url(${heroImage})`
}
const BlogPost = ( {data, pageContext} ) => {
    
    const { markdownRemark } = data;
    const title = markdownRemark.frontmatter.title;
    const html =  markdownRemark.html;
    const {next, prev} = pageContext;

    return (
       
         <div className="wrapper"> 
          <Header/>
        <div className="container">
        <section id="hero-image"  style={heroStyles} />
        <div className="blog-hero" />
        
        <section id="hero" className="hero">
        
            <div className ='blogpost'
              dangerouslySetInnerHTML={{__html: html}}
            />
          
          </section>
           <div style={{marginBottom: '1rem', fontFamily: 'avenir'}}>
           {next &&
             <Link to={next.frontmatter.path}>
               Next: {`${next.frontmatter.title}`}
             </Link>
           }
         </div>
         <div style={{fontFamily: 'avenir'}}>
           {prev &&
             <Link to={prev.frontmatter.path}>
               Prev: {`${prev.frontmatter.title}`}
             </Link>
           }
         </div>
         </div>
         </div>
     
    )
}

export const query = graphql`
   query($pathSlug: String!){
     markdownRemark(frontmatter: { path: { eq: $pathSlug }}) {
       html
       frontmatter{
           title
       }
     }
  }
`

export default BlogPost;