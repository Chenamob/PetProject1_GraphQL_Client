const { gql } = require("apollo-server");

const GraphQLEmail = require("graphql-type-email");

const typeDefs = gql`
  scalar Email

  type Query {
    me: User!
    me2(email: Email, name: String!): User!
    user(id: ID!): User!
    users(skip: Int = 0, limit: Int = 10): [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
  }

  type User {
    id: ID!
    name: String
    email: Email!
  }

  input CreateUserInput {
    email: Email!
    name: String!
  }

  input UpdateUserInput {
    email: Email
    name: String
  }
`;

module.exports = typeDefs;
