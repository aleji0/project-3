const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    pets: [Pet]
  }  
  
  type Pet {
    _id: ID
    petName: String
    petType: String
    petWeight: Int
    petAge: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    : User
    users: [User]!
    getParks: User
    getPets(id: ID!): [Pet]
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addPet(
      petName: String!
      petType: String!
      petWeight: Int!
      petAge: Int!
    ) : Pet
    updatePet(
      petName: String
      petType: String
      petWeight: Int
      petAge: Int
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
