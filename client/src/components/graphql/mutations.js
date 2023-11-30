import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser( 
    $email: String!, 
    $password: String!
  ) {
    addUser(
      email: $email,
      password: $password
  ) {
      token 
      user {
        _id
            }
    }

}
`;

export const ADD_SCORE = gql`
  mutation addTypingScore( 
    $email: String, 
    $password: String, 
    $wordsPerMinute: Int!, 
    $accuracy: Int!, 
    $testDate: Int!
    ) {
    addTypingScore
    (
      email: $email,
      password: $password
      wordsPerMinute: $wordsPerMinute, 
      accuracy: $accuracy, 
      testDate: $testDate
  ) {
      token 
      user {
        _id
            }
    }

}
`;

export const UPDATE_USER = gql`
  mutation updateUser( 
    $email: String!
    $password: String!
    ) {
      login(
        email: $email, 
        password: $password
      ) {
        token
        user {
        _id
              }
      }
  }
`;

export const LOGIN = gql`
  mutation login(
    $email: String!, 
    $password: String!
    ) {
      login(
        email: $email, 
        password: $password
      ) {
        token
        user {
        _id
              }
      }
  }
`;
