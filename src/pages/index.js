import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const IndexPage = ({ data }) => {
  
   return (
    <div className="wrapper"> 
      <Header/>
      <Layout data={ data }/>
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
          }
        }
      }
    }
  }
`
export default IndexPage;
