const { gql } = require("apollo-server");

const GraphQLEmail = require("graphql-type-email");

const typeDefs = gql`
  scalar Email

  type Query {
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
    email: Email!
    name: String!
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

const emailresolver = {
  Email: GraphQLEmail,
};

module.exports = emailresolver;
module.exports = typeDefs;

// input Email {
//   val: String!
// }
