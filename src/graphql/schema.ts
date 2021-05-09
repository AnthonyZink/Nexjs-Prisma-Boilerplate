import { gql } from 'apollo-server';

const typeDefs = gql`

type User {
    email: String!
    id: ID!
    firstname: String!
    password: String!
    createdAt: String
    updatedAt: String
}

type Query {
    users: [User]
    user(firstname: String!): User
}
`;

export default typeDefs;