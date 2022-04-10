const { expect } = require('chai');
const sinon = require('sinon');
const { faker } = require('@faker-js/faker');
const { hash } = require('bcryptjs');

const authConfig = require('../../config/auth');
const resolvers = require('../../graphql/resolvers/user');

describe('UserResolver', () => {
	const mockUser = {
		id: faker.datatype.uuid(),
		email: faker.internet.email(),
		fullName: faker.name.findName(),
		createdAt: new Date().toLocaleDateString(),
		updatedAt: new Date().toLocaleDateString(),
	};

	it('should query me and resolve user', async () => {
		const mockContext = {
			user: mockUser,
		};

		const actual = await resolvers.Query.me({}, {}, mockContext);
		expect(actual).to.eql(mockUser);
	});

	it('should call register and resolve token and user', async () => {
		const mockUserModel = {
			findOne: sinon.stub().resolves(false),
			create: sinon.stub().resolves(mockUser),
		};

		const actual = await resolvers.Mutation.register({}, mockUser, { User: mockUserModel });
		expect(actual).to.have.keys(['token', 'user']);
		expect(actual.user).to.eql(mockUser);
	});

	it('should call login and resolve token and user', async () => {
		const password = await hash('secret', authConfig.bcryptRound);
		const mockUserModel = {
			findOne: sinon.stub().resolves({
				...mockUser,
				password,
			}),
		};

		const actual = await resolvers.Mutation.login(
			{},
			{ email: mockUser.email, password: 'secret' },
			{ User: mockUserModel },
		);
		expect(actual).to.have.keys(['token', 'user']);
		expect(actual.user).to.eql(mockUser);
	});
});
