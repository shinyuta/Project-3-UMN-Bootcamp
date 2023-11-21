const typeDefs = `

  type User {
    _id: ID!
    userName: String!
    email: String!
  }

  type TypingScores {
    user: User
    wordsPerMinute: Number!
    accuracy: Number!
    testDate: Date!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    typingScores: TypingScores
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addTypingScore(user: User, wordsPerMinute: Number!, accuracy: Number!, testDate: Date!)
    updateUser(userName: String, email: String, password: String): User
    updateTypingScore(user: User, wordsPerMinute: Number, accuracy: Number, testDate: Date)
    login(email: String!, password: String!): Auth
    // deleteUser()
    // deleteTypingScore()
  }
  
`;

module.exports = typeDefs;
