const { sign, verify } = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const issueToken = async (payload) => {
	const token = await sign(payload, authConfig.jwtSecret, {
		expiresIn: authConfig.tokenTtl,
	});

	return token;
};

const serializeUser = (user) => {
	return {
		id: user.id,
		email: user.email,
		fullName: user.fullName,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	};
};

const getUser = (token) => {
	try {
		return verify(token, authConfig.jwtSecret);
	} catch (err) {
		return null;
	}
};

module.exports = {
	issueToken,
	serializeUser,
	getUser,
};
