const { gql } = require('apollo-server');

const typeDefs = gql`
	input Pagination {
		page: Int!
		limit: Int!
	}

	input TaskFilter {
		id: Int
		note: String
	}

	type Task {
		id: Int!
		note: String!
		createdAt: String
		updatedAt: String
	}

	type Query {
		tasks(search: TaskFilter, pagination: Pagination): [Task]
	}

	type Mutation {
		createTask(note: String!): Task!
		deleteTask(id: Int!): Boolean
	}
`;

module.exports = typeDefs;
