const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('../prisma/generated/prisma-client')

/*Schemas*/
import { query } from './schemas/query';
import { meeting } from './schemas/meeting';

/*Resolvers*/
const Query = require('./resolvers/Query');
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