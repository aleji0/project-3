import { gql } from '@apollo/client';

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
  mutation addpet($profileId: ID!, $pet: String!) {
    addpet(profileId: $profileId, pet: $pet) {
      _id
      name
      pets
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
