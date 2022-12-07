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

  mutation addPet($petName: String!, $petType: String!) {
    addPet(petName: $petName, petType: $petType) {

      _id
      petName
      petType
      petWeight
      petAge
    }
  }
`;
