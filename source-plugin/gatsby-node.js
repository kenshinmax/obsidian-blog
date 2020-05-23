const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { split } = require("apollo-link");
const { HttpLink } = require("apollo-link-http");
const { WebSocketLink } = require("apollo-link-ws");
const { getMainDefinition } = require("apollo-utilities");
const fetch = require("node-fetch");
const gql = require("graphql-tag");
const WebSocket = require("ws");

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin");

const POST_NODE_TYPE = `Post`;

const client = new ApolloClient({
    link: split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        )
      },
      new WebSocketLink({
        uri: `ws://localhost:4000`, // or `ws://gatsby-source-plugin-api.glitch.me/`
        options: {
          reconnect: true,
        },
        webSocketImpl: WebSocket,
      }),
      new HttpLink({
        uri: "http://localhost:4000", // or `https://gatsby-source-plugin-api.glitch.me/`
        fetch,
      })
    ),
    cache: new InMemoryCache(),
  })