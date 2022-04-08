const { compare } = require('bcryptjs');
const { ApolloError } = require('apollo-server-express');
const { issueToken, serializeUser } = require('../../@core/auth');

const resolvers = {
	Query: {
		/* eslint-disable no-empty-pattern */
		me: async (_, {}, { user }) => user,
	},
	Mutation: {
		login: async (_, { email, password }, { User }) => {
			let user = await User.findOne({ where: { email } });

			if (!user) {
				throw new ApolloError('Invalid email / password');
			}

			if (!(await compare(password, user.password))) {
				throw new ApolloError('Invalid email / password');
			}

			user = serializeUser(user);

			const token = issueToken(user);

			return {
				user,
				token,
			};
		},
		register: async (_, { email, fullName, password }, { User }) => {
			const userCheck = await User.findOne({
				where: {
					email,
				},
			});

			if (userCheck) {
				throw new Error('Email already exists!');
			}

			let user = await User.create({
				email,
				password,
				fullName,
			});

			user = serializeUser(user);

			const token = issueToken(user);

			return {
				user,
				token,
			};
		},
	},
};

module.exports = resolvers;
