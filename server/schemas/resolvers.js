const { User, TypingScore } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-errors');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    typingScores: async (parent, args, context) => {
      if(!context.user){
        throw new AuthenticationError('User not authenticated');
      }

      const user = await User.findById(context.user._id);
      if(!user){
        throw new AuthenticationError('User not found');
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
    typingScore.create() // First create a TypingScore
    if(args.username)
    {
       //create a new user, add score to new user
    } else {
      // the user already exists and just needs to be updated
    }

    // Add score's id to user
    // if things go well
    return "It went good!"
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
