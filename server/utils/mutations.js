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
export const ADD_PET = gql`
  mutation addPet($petName: String!, $petType: String!, $petWeight: Int!, $petAge: Int!) {
    addPet(petName: $petName, petType: $petType, petWeight: $petWeight , petAge: $petAge) {
      _id
      petName
      petType
      petWeight
      petAge
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const REMOVE_PET = gql`
  mutation removepet($pet: String!) {
    removepet(pet: $pet) {
      _id
      name
      pets
    }
  }
`;