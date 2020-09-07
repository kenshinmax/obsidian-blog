import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


const NotFoundPage = ({ data }) => {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  ) 
}
  

export default NotFoundPage;

export const notFoundQuery = graphql `
  query NotFoundQuery {
   site {
    siteMetadata {
      title
      description
    }
   }
  }
`;