const { User, TypingScore } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
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
    }
  },

  Mutation: {

  // addUser: async (parent, args) => {
  //   const user = await User.create(args);
  //   const token = signToken(user);

  //   return { token, user };
  // },

  addTypingScore: async (parent, args) => {
    typingScore.create() // First create a TypingScore
    if(args.username){
      const user = await User.create(args); //create a new user, add score to new user
      const token = signToken(user); // thinkabout signing them in (return an Auth)
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
