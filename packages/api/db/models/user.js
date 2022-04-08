const { Model } = require('sequelize');
const { hash } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const authConfig = require('../../config/auth');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Task);
		}
	}
	User.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			fullName: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
			tableName: 'users',
			hooks: {
				beforeCreate: async (user) => {
					user.id = uuidv4();
					if (user.password) {
						user.password = await hash(user.password, authConfig.bcryptRound);
					}
				},
			},
		},
	);
	return User;
};
