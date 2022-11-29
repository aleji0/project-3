<<<<<<< Updated upstream

const { User, Product, Category} = require('../models');

=======
const { AuthenticationError } = require("apollo-server-express");
const { Pet, User } = require("../models");
const { signToken } = require("../utils/auth");
>>>>>>> Stashed changes

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);


        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
<<<<<<< Updated upstream
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
=======
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    addPet: async (parent, args) => {
      const pet = await Pet.create(args);

      return { pet };
    },
    updatePet: async (parent, args, context) => {
      if (context.pet) {
        return await Pet.findByIdAndUpdate(context.pet._id, args, {
          new: true,
        });
>>>>>>> Stashed changes
      }

      throw new AuthenticationError('Not logged in');
    }
  }
};

module.exports = resolvers;
