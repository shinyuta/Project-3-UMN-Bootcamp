const typeDefs = `

  type User {
    _id: ID!
    userName: String!
    email: String!
  }

  type TypingScore {
    user (_id: ID!) : User
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
    addUser(userName: String!, email: String!, password: String!): Auth
    addTypingScore(userName: String, email: String, password: String, wordsPerMinute: Int!, accuracy: Int!, testDate: Int!): Auth
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
