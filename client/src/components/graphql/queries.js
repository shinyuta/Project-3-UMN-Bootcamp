import { gql } from '@apollo/client';

export const QUERY_SCORE = gql`
  query typingScores {
    score {
      _id
      words_per_minute
      mistakes
      accuracy
      test_date
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    query user {
      _id
      username
      typing_score {
        words_per_minute
        mistakes
        accuracy
        test_date
      }
    }
  }
`;

export const QUERY_ALL_SCORES = gql`
  {
    query typingscores {
      typing_scores {
        words_per_minute
        mistakes
        accuracy
        test_date
      }
    }
  }
`;