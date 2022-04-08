require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const models = require('./db/models');
const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');
const { getUser } = require('./@core/auth');
const middleware = require('./@core/auth/middleware');

const startApolloServer = async () => {
	const app = express();

	app.use(cors());
	app.use(bodyParser.json());

	const httpServer = http.createServer(app);

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

	await server.start();

	server.applyMiddleware({ app, cors: true });

	/* eslint-disable no-promise-executor-return */
	await new Promise((resolve) => httpServer.listen({ port: process.env.APP_PORT }, resolve));
	/* eslint-disable no-console */
	console.log(`Server is ready at http://localhost:${process.env.APP_PORT}${server.graphqlPath}`);
};

startApolloServer();
