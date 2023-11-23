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
    // an array of all users and typing scores
    users: [User]
    typingScores: [TypingScore]
    user: User

    //type Query {
      categories: [Category]
      products(category: ID, name: String): [Product]
      product(_id: ID!): Product
      user: User
      order(_id: ID!): Order//
    }
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addTypingScore(user: User, wordsPerMinute: Number!, accuracy: Number!, testDate: Date!)
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    // deleteUser()
    // deleteTypingScore()
  }
  
`;

module.exports = typeDefs;
