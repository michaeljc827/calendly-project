const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('./prisma/generated/prisma-client/')

/*Schemas*/
const { query } = require('./src/schemas/query')
const { meeting } = require('./src/schemas/meeting');

/*Resolvers*/
const Query = require('./src/resolvers/Query');
const resolvers = {
    Query
};

const server = new ApolloServer({
    typeDefs: [query, meeting],
    resolvers,
    context: async ({ req }) => {
        return {
            ...req,
            prisma
        }
    }
});

server.listen().then(({ url }) => {
    console.log('listening...');
});