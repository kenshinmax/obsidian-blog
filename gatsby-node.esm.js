
const path = require('path')
const axios = require('axios');

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Post`
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions
  const data = {
    posts: [
      { id: 1, description: `Hello world!` },
      { id: 2, description: `Second post!` },
    ],
  }
  // loop through data and create Gatsby nodes
  data.posts.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  )
  return
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.js');
  console.log('in create pages');
  return graphql(`
    query {
      allMarkdownRemark(
        sort: {order: ASC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              subtitle
            }
          }
        }
      }
    }
  `
  ).then( result => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index ) => {
      const { path } = node.frontmatter;
      return createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path,
          prev: index === 0 ? null: posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        }
      })
    })
  })
}
  