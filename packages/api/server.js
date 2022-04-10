require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { applyMiddleware } = require('graphql-middleware');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const models = require('./db/models');
const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');
const { getUser } = require('./@core/auth');
const middleware = require('./@core/auth/middleware');

const server = new ApolloServer({
	schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), middleware),
	context: ({ req }) => {
		const token = req.get('Authorization') || '';
		return {
			user: getUser(token.replace('Bearer ', '')),
			...models,
		};
	},
	formatError: (err) => {
		if (err.message.startsWith('Database Error: ')) {
			throw new Error('Internal Server Error');
		}
		return err;
	},
});

/* eslint-disable no-console */
server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
