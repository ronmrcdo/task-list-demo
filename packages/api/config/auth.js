require('dotenv').config();

module.exports = {
	bcryptRound: Number(process.env.BCRYPT_ROUND),
	jwtSecret: process.env.JWT_SECRET,
	tokenTtl: 60 * 1000, // 60 minutes
};
