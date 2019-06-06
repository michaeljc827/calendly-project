const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('../prisma/generated/prisma-client')

/*Schemas*/
import { query } from './schemas/query';
import { mutation } from './schemas/mutation';
import { staff } from './schemas/staff';
import { meeting } from './schemas/meeting';
import { attendee } from './schemas/attendee';
import { reservation } from './schemas/reservations';

console.log(staff);

/*Resolvers*/
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Staff = require('./resolvers/Staff');

const resolvers = {
    Query,
    Mutation,
    Staff
};

const server = new ApolloServer({
    typeDefs: [query, mutation, staff, meeting, attendee, reservation],
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