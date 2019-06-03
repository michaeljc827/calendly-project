const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('./prisma/generated/prisma-client/')


const typeDefs = gql`
    type Query {
        users: [User]
    }

    type Mutation {
        addUserToMeeting: User!
    }

    type Meeting {
        id: ID!
        title: String!
        users: [User!]!
    }

    type User {
        id: ID!
        password: String
        name: String
        meetings: [Meeting!]!
    }
`;

const resolvers = {
    Query: {
        users: (parent, info, context) => {
            return context.prisma.users();
        }
    },
    Mutation: {
    },
    User: {
        password: () => {
            return "This is a password"
        },
        meetings: (parent, info, context) => {
            return context.prisma.user({
                id: parent.id
            }).meetings();
        }
    }
};

const server = new ApolloServer({
    typeDefs,
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