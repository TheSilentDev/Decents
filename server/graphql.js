const { ApolloServer } = require('apollo-server-lambda');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
