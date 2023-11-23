const { User, TypingScore } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    typingScores: async () => {
      const user = User(username) // how to find single user's scores
      return await TypingScore.findOne(user._id).sort({testDate: 'desc'}).limit(10)
    }, 
    user: async () => {
      return await User.find().sort({testDate: 'desc'}).limit(10)
    }
  },

  Mutation: {

  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },

  addTypingScore: async (parent, args) => {
    
  },

  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
    }
    
  throw AuthenticationError;
  },
  
  login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

    if (!user) {
      throw AuthenticationError;
    }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
