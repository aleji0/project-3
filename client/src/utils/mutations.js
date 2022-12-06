import { gql } from "@apollo/client";
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;
export const ADD_PET = gql`
  mutation Mutation($petName: String!, $petType: String!, $petWeight: Int!, $petAge: Int! ) {
    addPet(petName: $petName, petType: $petType, petWeight: $petWeight , petAge: $petAge) {
      _id
      petName
      petType
      petWeight
      petAge
    }
  }
`;
