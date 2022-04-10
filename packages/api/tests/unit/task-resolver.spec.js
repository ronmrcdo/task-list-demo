const { expect } = require('chai');
const sinon = require('sinon');
const { faker } = require('@faker-js/faker');
const { hash } = require('bcryptjs');

const authConfig = require('../../config/auth');
const resolvers = require('../../graphql/resolvers/task');

describe('TaskResolver', () => {
	const mockTasks = [
		{
			id: faker.datatype.number(),
			note: faker.music.genre(),
			userId: faker.datatype.uuid(),
			createdAt: new Date().toLocaleDateString(),
			updatedAt: new Date().toLocaleDateString(),
		},
		{
			id: faker.datatype.number(),
			note: faker.music.genre(),
			userId: faker.datatype.uuid(),
			createdAt: new Date().toLocaleDateString(),
			updatedAt: new Date().toLocaleDateString(),
		},
		{
			id: faker.datatype.number(),
			note: faker.music.genre(),
			userId: faker.datatype.uuid(),
			createdAt: new Date().toLocaleDateString(),
			updatedAt: new Date().toLocaleDateString(),
		},
	];

	const mockUser = {
		id: faker.datatype.uuid(),
		email: faker.internet.email(),
		fullName: faker.name.findName(),
		createdAt: new Date().toLocaleDateString(),
		updatedAt: new Date().toLocaleDateString(),
	};

	it('should query tasks and resolve tasks', async () => {
		const mockContext = {
			Task: {
				findAll: sinon.stub().resolves(mockTasks),
			},
			user: mockUser,
		};

		const actual = await resolvers.Query.tasks({}, {}, mockContext);
		expect(actual).to.eql(mockTasks);
	});

	it('should call createTask and resolve task', async () => {
		const mockContext = {
			Task: {
				create: sinon.stub().resolves(mockTasks[0]),
			},
			user: mockUser,
		};

		const actual = await resolvers.Mutation.createTask(
			{},
			{ note: mockTasks[0].note },
			mockContext,
		);
		expect(actual).to.eql(mockTasks[0]);
	});

	it('should call deleteTask and resolve boolean', async () => {
		const mockContext = {
			Task: {
				destroy: sinon.stub().resolves(true),
			},
			user: mockUser,
		};

		const actual = await resolvers.Mutation.deleteTask(
			{},
			{ id: mockTasks[0].id },
			mockContext,
		);
		expect(actual).to.eql(true);
	});
});
