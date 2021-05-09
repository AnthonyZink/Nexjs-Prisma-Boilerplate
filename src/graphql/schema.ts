import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        email: String!
        id: ID!
        password: String!
        createdAt: String
        updatedAt: String
    }

    type UserPayload {
        token: String!
        user: User
    }

    type Query {
        users: [User]
        user(email: String!): User
        logIn(email: String!, password: String!): UserPayload
    }

    type Mutation {
        createUser(email: String!, password: String!): User
    }
`;

export default typeDefs;
