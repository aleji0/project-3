const { AuthenticationError } = require("apollo-server-express");
const { Pet, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async (parent, args, context) => {
      if (context.user) {
        const users = await User.find({});

        return users;
      }

      throw new AuthenticationError("Not logged in");
    },
    getPets: async (parent, args, context) => {
      if (context.user) {
        const users = await User.find({});

        return users;
      }

      throw new AuthenticationError("Not logged in");
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
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    
    addPet: async (parent, args, context) => {
     // const pet = await Pet.create(args);
      console.log("user", context.user)
      Pet.create(args)
      .then((pet) => {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { pets: pet._id } },
          { new: true }
        );
      })
      .catch(err => {
        return false
      })

    },

    updatePet: async (parent, args, context) => {
      if (context.pet) {
        return await Pet.findByIdAndUpdate(context.pet._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
