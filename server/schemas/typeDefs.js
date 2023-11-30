const typeDefs = `

  type User {
    _id: ID!
    email: String!
    password: String!
    TypingScores: [TypingScore]
  }

  type TypingScore {
    wordsPerMinute: Int!
    accuracy: Int!
    testDate: Int!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    typingScores: [TypingScore]
    user: User
  }


  type Mutation {
    addUser(email: String!, password: String!): Auth
    addTypingScore(email: String, password: String, wordsPerMinute: Int!, accuracy: Int!, testDate: Int!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
