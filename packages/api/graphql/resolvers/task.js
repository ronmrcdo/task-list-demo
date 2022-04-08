const { Op } = require('sequelize');

const resolvers = {
	Query: {
		async tasks(root, { pagination, search }, { Task, user }) {
			const query = {
				where: {
					userId: user.id,
				},
			};

			if (pagination) {
				/* eslint-disable no-unused-expressions */
				/* eslint-disable no-sequences */
				/* eslint-disable indent */
				(query.limit = pagination.limit),
					(query.offset = pagination.limit * (pagination.page - 1));
			}

			if (search) {
				query.where = {
					...query.where,
					[Op.or]: [
						search.id ? { id: search.id } : null,
						search.note ? { note: search.note } : null,
					],
				};
			}

			return Task.findAll(query);
		},
	},
	Mutation: {
		async createTask(parent, { note }, { Task, user }) {
			return Task.create({ note, userId: user.id });
		},
		async deleteTask(parent, { id }, { Task, user }) {
			await Task.destroy({ where: { id, userId: user.id } });
			return true;
		},
	},
};

module.exports = resolvers;
