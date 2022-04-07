require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const http = require('http');

const typeDefs = gql`
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query: {
		hello: () => 'Hello world',
	},
};

const startApolloServer = async () => {
	const app = express();
	const httpServer = http.createServer(app);

	const server = new ApolloServer({ typeDefs, resolvers });

	await server.start();

	server.applyMiddleware({ app });

	/* eslint-disable no-promise-executor-return */
	await new Promise((resolve) => httpServer.listen({ port: process.env.APP_PORT }, resolve));
	/* eslint-disable no-console */
	console.log(`Server is ready at http://localhost:${process.env.APP_PORT}${server.graphqlPath}`);
};

startApolloServer();
