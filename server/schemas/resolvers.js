const { User, TypingScore } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-errors');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    typingScores: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('User not authenticated');
      }
      return await TypingScore.find({user: context.user._id}).sort({testDate: 'desc'}).limit(10);

    //   const user = User.findById(context.user._id) // how to find single user's scores
    //   return await TypingScore.find({user: context.user._id}).sort({testDate: 'desc'}).limit(10)
    }, 
    user: async () => {
      return await User.find().sort({testDate: 'desc'}).limit(10)
    },


  },

  Mutation: {

  addUser: async (parent, args) => {
    try {
      const newUser = await User.create(args);
      return newUser;
    } catch (error) {

      console.error('Error adding user:', error);
      throw new Error('Failed to add user');

    }

  },
    
  addTypingScore: async (parent, args) => {
    try {
      const newTypingScore = await TypingScore.create(args);
      return newTypingScore;
    } catch (error) {
      console.error('Error adding typing score', error);
      throw new Error('Failed to add typing score');
    }
  }
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
  };

module.exports = resolvers;
