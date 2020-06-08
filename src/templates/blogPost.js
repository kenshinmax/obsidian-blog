import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/header";
import heroImage from "../images/og-react.jpg";

const heroStyles = {
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  objectPosition: "center center",
  opacity: "1",
  transition: "opacity 500ms ease 0s",
};

const heroImageStyle = {
  position: "relative",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center center",
  transitionDelay: "500ms",
};
const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  const { next, prev } = pageContext;

  return (
    <div className="wrapper">
      <Header />
      <div className="box container">
        <div className="image-wrapper">
          <picture>
            <img id="hero-image" style={heroImageStyle} src={heroImage} />
          </picture>
        </div>
        <h1>{title}</h1>
        <div className="blog-hero" />
        <section id="hero" className="hero">
          <div
            className="blogpost"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {`${next.frontmatter.title}`}
            </Link>
          )}
        </div>
        <div style={{ fontFamily: "avenir" }}>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Prev: {`${prev.frontmatter.title}`}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
