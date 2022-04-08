const { hash } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const authConfig = require('../../config/auth');

module.exports = {
	/* eslint-disable no-unused-vars */
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const users = [
			{
				id: uuidv4(),
				email: 'john@example.dev',
				password: await hash('secret', authConfig.bcryptRound),
				fullName: 'John Doe',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: uuidv4(),
				email: 'juan@example.dev',
				password: await hash('secret', authConfig.bcryptRound),
				fullName: 'Juan Dela Cruz',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert('users', users);
	},

	/* eslint-disable no-unused-vars */
	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('users', null, {});
	},
};
