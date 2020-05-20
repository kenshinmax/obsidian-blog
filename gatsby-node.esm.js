import {decode as atob, encode as btoa} from 'base-64';
const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { split } = require("apollo-link");
const { HttpLink } = require("apollo-link-http");
const { WebSocketLink } = require("apollo-link-ws");
const { getMainDefinition } = require("apollo-utilities");
const fetch = require("node-fetch");
const gql = require("graphql-tag");
const WebSocket = require("ws");
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const axios = require('axios');

const fetchBlogPosts = () => {
      // fetch raw data from the randomuser api
      var liferay_url = 'http://localhost:8080/o/headless-delivery/v1.0/sites/20123/blog-postings/';
      var username = 'bruno';
      var password = 'bruno';
      var basicAuth = 'Basic ' + btoa(username + ':' + password);

      const AllBlogPosts = () => axios.get(liferay_url, {}, {
          headers: { 'Authorization': + basicAuth }
        }).then(function(response) {
          console.log('Authenticated');
        }).catch(function(error) {
          console.log('Error on Authentication');
        });
      
        return AllBlogPosts;
}

exports.createPages = async ({ actions: { createPage } }) => {

    // await for results
    const allBlogs = await fetchBlogPosts();
    
     // Create a page that lists all Pokémon.
     createPage({
      path: `/`,
      component: require.resolve(`./src/pages/templates/blog-posts.js`),
      context: { allBlogs }
    });
    

    // map into these results and create nodes
    console.log('This is a test debug statements');
    
}

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