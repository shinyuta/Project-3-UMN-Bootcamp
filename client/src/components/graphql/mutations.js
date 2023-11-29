import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!, 
    $email: String!, 
    $password: String!
  ) {
    addUser(
      userName: $userName,
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
    $userName: String, 
    $email: String, 
    $password: String, 
    $wordsPerMinute: Int!, 
    $accuracy: Int!, 
    $testDate: Int!
    ) {
    addTypingScore
    (
      userName: $userName,
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
    $userName: String!, 
    $email: String!
    $password: String!
    ) {
      login(
        userName: $userName
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
    $userName: String!, 
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
