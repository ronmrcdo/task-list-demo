const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		id: String!
		email: String!
		fullName: String!
		createdAt: String
		updatedAt: String
	}

	type AuthUser {
		user: User!
		token: String!
	}

	type Query {
		me: User!
	}

	type Mutation {
		login(email: String!, password: String!): AuthUser!
		register(email: String!, password: String!, fullName: String!): AuthUser!
	}
`;

module.exports = typeDefs;
