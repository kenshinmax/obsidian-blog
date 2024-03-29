import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const IndexPage = ({ data }) => {
  
   return (   
    <div className="wrapper"> 
    <Header/> 
     <div className="main">
      
      <Layout data={ data }/>

     </div>
   </div>
   )
 
}
export const query =  graphql`
  query HomepageQuery  {
    allMarkdownRemark(sort: {
      order: DESC,
      fields: frontmatter___title
    }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage;
