require('dotenv').config();

module.exports = {
	port: process.env.APP_PORT,
	bcrypt_round: Number(process.env.BCRYPT_ROUND),
	jwt_secret: process.env.JWT_SECRET,
};
