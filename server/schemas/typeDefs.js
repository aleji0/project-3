const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }  
  
  type Pet {
    _id: ID
    petName: String
    petType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    users: [User]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addPet(
      petName: String!
      petType: String!
    ) : Pet
    updatePet(
      petName: String
      petType: String
    ) : Pet
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
  }
`;

module.exports = typeDefs;
