const { rule, shield } = require('graphql-shield');

const isAuthenticated = rule()((parent, args, { user }) => {
	return user !== null;
});

module.exports = shield(
	{
		Query: {
			me: isAuthenticated,
			tasks: isAuthenticated,
		},
		Mutation: {
			createTask: isAuthenticated,
			deleteTask: isAuthenticated,
		},
	},
	{
		debug: true,
	},
);
