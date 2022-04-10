require('dotenv').config();

module.exports = {
	bcrypt_round: Number(process.env.BCRYPT_ROUND),
	jwt_secret: process.env.JWT_SECRET,
};
